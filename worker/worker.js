/* Máy chấm IELTS Writing chạy trên Cloudflare Workers (gói miễn phí).
   Thứ tự thử (luân phiên khi hết lượt miễn phí):
     1. Gemini (nếu có secret GEMINI_API_KEY): các model trong GEMINI_MODELS, mặc định Flash rồi Flash-Lite
     2. Cloudflare Workers AI qua binding tên "AI" (Llama 3.3 70B)
   POST /  body: {task:"Task 1"|"Task 2", prompt, data?, essay}
   → {overall, criteria:[{name, band, comment}], strengths[], improvements[], corrections[{original, better, why}], model} */

const MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
const GEMINI_DEFAULT = "gemini-3.6-flash,gemini-3.5-flash-lite";
const COOLDOWN_MS = 15 * 60 * 1000;
const coolUntil = {}; // model → thời điểm được thử lại sau khi báo hết lượt (nhớ trong một instance của Worker)
const GEMINI_URL = m => `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`;
const MAX_CHARS = 6000;

const SCHEMA = {
  type: "object",
  properties: {
    criteria: {
      type: "array",
      items: {
        type: "object",
        properties: { name: {type: "string"}, band: {type: "number"}, comment: {type: "string"} },
        required: ["name", "band", "comment"]
      }
    },
    strengths: {type: "array", items: {type: "string"}},
    improvements: {type: "array", items: {type: "string"}},
    corrections: {
      type: "array",
      items: {
        type: "object",
        properties: { original: {type: "string"}, better: {type: "string"}, why: {type: "string"} },
        required: ["original", "better", "why"]
      }
    }
  },
  required: ["criteria", "strengths", "improvements", "corrections"]
};

function systemPrompt(task){
  const first = task === "Task 1" ? "Task Achievement" : "Task Response";
  return `You are an experienced IELTS Writing examiner. Assess the candidate's ${task} essay using the public IELTS Writing band descriptors.
Give a band from 0 to 9 (whole or half bands, e.g. 5 or 5.5) for exactly these four criteria, in this order:
1. ${first}  2. Coherence and Cohesion  3. Lexical Resource  4. Grammatical Range and Accuracy.
Be honest and realistic: most learners at this level score between 4 and 6. Penalise essays that are under the word limit or off-topic.
${task === "Task 1" ? "For Task 1, check that the essay has an overview, reports key features and uses accurate data from the chart." : "For Task 2, check that every part of the question is answered with a clear position and developed, supported ideas."}
Write every comment, strength and improvement in Vietnamese, short and simple, for a band 4–5 learner.
"corrections": up to 5 real mistakes copied exactly from the essay ("original"), the corrected English ("better") and a short Vietnamese explanation ("why").
"strengths": 2–3 items. "improvements": 2–4 concrete, practical items.
Reply with JSON only, in exactly this shape:
{"criteria":[{"name":"...","band":5.5,"comment":"..."}, ...4 items],"strengths":["..."],"improvements":["..."],"corrections":[{"original":"...","better":"...","why":"..."}]}`;
}

function cors(req, env){
  const allow = (env.ALLOWED_ORIGINS || "*").split(",").map(s => s.trim());
  const origin = req.headers.get("Origin") || "";
  const ok = allow.includes("*") || allow.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? (allow.includes("*") ? "*" : origin) : "null",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}
const json = (obj, status, headers) => new Response(JSON.stringify(obj), {status, headers: {...headers, "Content-Type": "application/json; charset=utf-8"}});

function parseResult(out){
  let r = out && out.response !== undefined ? out.response : out;
  if(typeof r === "string"){
    const m = r.match(/\{[\s\S]*\}/);
    if(!m) throw new Error("no JSON in model output");
    r = JSON.parse(m[0]);
  }
  return r;
}
const half = x => Math.max(0, Math.min(9, Math.round(Number(x) * 2) / 2));

function normalise(r, task, model){
  const names = [task === "Task 1" ? "Task Achievement" : "Task Response", "Coherence and Cohesion", "Lexical Resource", "Grammatical Range and Accuracy"];
  const crit = names.map((name, i) => {
    const c = (r.criteria || [])[i] || {};
    return {name, band: half(c.band || 0), comment: String(c.comment || "")};
  });
  // Điểm tổng = trung bình 4 tiêu chí, làm tròn đến 0.5 gần nhất như IELTS
  const overall = half(crit.reduce((s, c) => s + c.band, 0) / 4);
  const list = (a, n) => (Array.isArray(a) ? a : []).slice(0, n).map(String);
  return {
    overall, criteria: crit,
    strengths: list(r.strengths, 3), improvements: list(r.improvements, 4),
    corrections: (Array.isArray(r.corrections) ? r.corrections : []).slice(0, 5)
      .filter(c => c && c.original).map(c => ({original: String(c.original), better: String(c.better || ""), why: String(c.why || "")})),
    model
  };
}

async function askWorkersAI(AI, messages){
  let out;
  try{
    out = await AI.run(MODEL, {messages, max_tokens: 1500, temperature: 0.2, response_format: {type: "json_schema", json_schema: SCHEMA}});
  }catch(e){
    if(/limit|quota|neuron|429/i.test(String(e && e.message))) throw e;
    // JSON mode đôi khi không đáp ứng được schema: thử lại không ép schema rồi tự tách JSON
    out = await AI.run(MODEL, {messages, max_tokens: 1500, temperature: 0.2});
  }
  return parseResult(out);
}

async function askGemini(key, model, messages){
  const res = await fetch(GEMINI_URL(model), {
    method: "POST",
    headers: {"Content-Type": "application/json", "x-goog-api-key": key},
    body: JSON.stringify({
      systemInstruction: {parts: [{text: messages[0].content}]},
      contents: [{role: "user", parts: [{text: messages[1].content}]}],
      generationConfig: {temperature: 0.2, maxOutputTokens: 8192, responseMimeType: "application/json"}
    })
  });
  const d = await res.json().catch(() => ({}));
  if(!res.ok) throw new Error(res.status + " " + ((d.error && d.error.message) || "").slice(0, 200));
  const parts = (((d.candidates || [])[0] || {}).content || {}).parts || [];
  const text = parts.filter(p => !p.thought).map(p => p.text || "").join("");
  if(!text) throw new Error("empty response");
  return parseResult(text);
}

export default {
  async fetch(req, env){
    const h = cors(req, env);
    if(req.method === "OPTIONS") return new Response(null, {status: 204, headers: h});
    if(req.method === "GET") return json({ok: true, service: "hiking-ielts grader",
      gemini: env.GEMINI_API_KEY ? (env.GEMINI_MODELS || GEMINI_DEFAULT).split(",").map(x => x.trim()) : "not configured",
      workersAI: env.AI ? MODEL : "not bound"}, 200, h);
    if(req.method !== "POST") return json({error: "Method not allowed"}, 405, h);
    if(h["Access-Control-Allow-Origin"] === "null") return json({error: "Origin not allowed"}, 403, h);
    if(!env.AI && !env.GEMINI_API_KEY) return json({error: "Máy chấm chưa được cấu hình: cần gắn Workers AI (binding tên AI) hoặc thêm GEMINI_API_KEY."}, 500, h);

    let body;
    try{ body = await req.json(); }catch(e){ return json({error: "Body không phải JSON."}, 400, h); }
    const task = body.task === "Task 1" ? "Task 1" : "Task 2";
    const essay = String(body.essay || "").trim();
    const words = (essay.match(/\S+/g) || []).length;
    if(words < 50) return json({error: "Bài viết cần ít nhất 50 từ để chấm."}, 400, h);
    if(essay.length > MAX_CHARS) return json({error: "Bài viết quá dài (tối đa khoảng 1000 từ)."}, 400, h);

    const user = `Question (${task}):\n${String(body.prompt || "").slice(0, 1500)}\n` +
      (body.data ? `\nChart / diagram data:\n${String(body.data).slice(0, 1500)}\n` : "") +
      `\nMinimum words: ${task === "Task 1" ? 150 : 250}. Candidate's word count: ${words}.\n\nCandidate's essay:\n"""\n${essay}\n"""`;
    const messages = [{role: "system", content: systemPrompt(task)}, {role: "user", content: user}];

    const errors = [];
    if(env.GEMINI_API_KEY){
      const models = (env.GEMINI_MODELS || GEMINI_DEFAULT).split(",").map(x => x.trim()).filter(Boolean);
      for(const m of models){
        if((coolUntil[m] || 0) > Date.now()){ errors.push(m + ": 429 cooling down"); continue; }
        try{ return json(normalise(await askGemini(env.GEMINI_API_KEY, m, messages), task, m), 200, h); }
        catch(e){ // hết lượt hoặc lỗi → thử model tiếp theo
          errors.push(m + ": " + e.message);
          if(/^429/.test(e.message)) coolUntil[m] = Date.now() + COOLDOWN_MS;
        }
      }
    }
    if(env.AI){
      try{ return json(normalise(await askWorkersAI(env.AI, messages), task, MODEL), 200, h); }
      catch(e){ errors.push("workers-ai: " + e.message); }
    }
    console.log("all providers failed", errors);
    const quota = errors.length && errors.every(e => /limit|quota|neuron|429|exhausted/i.test(e));
    return json({error: quota ? "Đã hết lượt chấm miễn phí hôm nay, hãy thử lại vào ngày mai." : "Máy chấm gặp lỗi, hãy thử lại sau ít phút."}, quota ? 429 : 502, h);
  }
};
