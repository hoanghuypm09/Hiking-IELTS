/* Máy chấm IELTS Writing chạy trên Cloudflare Workers (gói miễn phí).
   Thứ tự thử (luân phiên khi hết lượt miễn phí):
     1. Gemini (nếu có secret GEMINI_API_KEY): các model trong GEMINI_MODELS, mặc định Flash rồi Flash-Lite
     2. Cloudflare Workers AI qua binding tên "AI" (Llama 3.3 70B)
   POST /  body: {task:"Task 1"|"Task 2", prompt, data?, essay}
   → {overall, criteria:[{name, band, comment}], strengths[], improvements[], corrections[{original, better, why}], model}

   Tài khoản và đồng bộ tiến độ (cần gắn KV namespace với tên binding "DATA"):
     POST /auth/signup   {user, name, pass}  → {token, user, name}
     POST /auth/login    {user, pass}        → {token, user, name}
     POST /auth/password {old, pass}         → {token}   (cần header Authorization: Bearer <token>)
     GET  /sync                              → {v, updated} hoặc {v:null}   (Bearer)
     PUT  /sync          {v, updated}        → {ok, updated}                 (Bearer)
   Mật khẩu chỉ lưu dạng băm PBKDF2-SHA256 có muối. Tài khoản admin được tạo ở lần đăng nhập đầu
   với mật khẩu ADMIN_PASSWORD (biến môi trường) hoặc "123", hãy đổi ngay sau khi đăng nhập. */

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
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
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

/* ---------- Tài khoản và đồng bộ (KV binding "DATA") ----------
   acc:<user> = {user, name, salt, hash, iter, gen, created, changed}
   tok:<token> = {user, gen}   (hết hạn sau TOKEN_TTL; đổi mật khẩu tăng gen nên mọi phiên cũ bị đăng xuất)
   p:<user>   = {v: chuỗi JSON tiến độ, updated}
   fail:<user> = số lần sai mật khẩu liên tiếp (tự xoá sau 15 phút) */
const ITER = 100000, TOKEN_TTL = 180 * 24 * 3600, MAX_SYNC = 1000000, MAX_FAILS = 10;
const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
const randHex = n => hex(crypto.getRandomValues(new Uint8Array(n)));
async function pbkdf2(pass, salt, iter){
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveBits"]);
  return hex(await crypto.subtle.deriveBits({name: "PBKDF2", hash: "SHA-256", salt: new TextEncoder().encode(salt), iterations: iter}, key, 256));
}
function same(a, b){ // so sánh không lộ thời gian
  if(a.length !== b.length) return false;
  let d = 0; for(let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}
async function setPassword(acc, pass){ acc.salt = randHex(16); acc.iter = ITER; acc.hash = await pbkdf2(pass, acc.salt, ITER); return acc; }
const getAcc = (env, user) => env.DATA.get("acc:" + user, "json");
const putAcc = (env, acc) => env.DATA.put("acc:" + acc.user, JSON.stringify(acc));
async function newToken(env, acc){
  const t = randHex(32);
  await env.DATA.put("tok:" + t, JSON.stringify({user: acc.user, gen: acc.gen || 0}), {expirationTtl: TOKEN_TTL});
  return t;
}
async function authed(req, env){
  const m = (req.headers.get("Authorization") || "").match(/^Bearer ([a-f0-9]{64})$/);
  if(!m) return null;
  const t = await env.DATA.get("tok:" + m[1], "json"); if(!t) return null;
  const acc = await getAcc(env, t.user);
  return acc && (acc.gen || 0) === t.gen ? acc : null;
}
const validUser = u => /^[a-z0-9_]{3,20}$/.test(u);
const passProblem = p => typeof p !== "string" || p.length < 4 ? "Mật khẩu cần ít nhất 4 ký tự." : p.length > 200 ? "Mật khẩu quá dài." : "";

async function accounts(req, env, path, h){
  if(!env.DATA) return json({error: "Máy chủ chưa bật đồng bộ: cần gắn KV namespace với tên binding DATA.", code: "no_kv"}, 501, h);
  if(path === "/sync"){
    const acc = await authed(req, env);
    if(!acc) return json({error: "Phiên đăng nhập đã hết hạn.", code: "auth"}, 401, h);
    if(req.method === "GET") return json((await env.DATA.get("p:" + acc.user, "json")) || {v: null}, 200, h);
    if(req.method === "PUT"){
      const text = await req.text();
      if(text.length > MAX_SYNC) return json({error: "Dữ liệu quá lớn để đồng bộ."}, 413, h);
      let b; try{ b = JSON.parse(text); }catch(e){ return json({error: "Body không phải JSON."}, 400, h); }
      if(typeof b.v !== "string") return json({error: "Thiếu dữ liệu."}, 400, h);
      const updated = Number(b.updated) || Date.now();
      await env.DATA.put("p:" + acc.user, JSON.stringify({v: b.v, updated}));
      return json({ok: true, updated}, 200, h);
    }
    return json({error: "Method not allowed"}, 405, h);
  }
  if(req.method !== "POST") return json({error: "Method not allowed"}, 405, h);
  let b; try{ b = await req.json(); }catch(e){ return json({error: "Body không phải JSON."}, 400, h); }
  const user = String(b.user || "").trim().toLowerCase();

  if(path === "/auth/signup"){
    const name = String(b.name || "").trim().slice(0, 30);
    if(!name) return json({error: "Hãy nhập tên hiển thị."}, 400, h);
    if(!validUser(user)) return json({error: "Tài khoản gồm 3–20 ký tự: chữ thường không dấu, số hoặc dấu _."}, 400, h);
    const bad = passProblem(b.pass); if(bad) return json({error: bad}, 400, h);
    if(user === "admin" || await getAcc(env, user)) return json({error: "Tài khoản này đã có. Hãy chọn tên khác.", code: "taken"}, 409, h);
    const acc = await setPassword({user, name, gen: 0, created: Date.now()}, b.pass);
    await putAcc(env, acc);
    return json({token: await newToken(env, acc), user, name}, 200, h);
  }

  if(path === "/auth/login"){
    const fails = Number(await env.DATA.get("fail:" + user)) || 0;
    if(fails >= MAX_FAILS) return json({error: "Sai mật khẩu quá nhiều lần. Hãy thử lại sau 15 phút.", code: "locked"}, 429, h);
    let acc = await getAcc(env, user);
    if(!acc && user === "admin") acc = await setPassword({user, name: "Admin", gen: 0, created: Date.now(), seeded: true}, env.ADMIN_PASSWORD || "123");
    if(!acc) return json({error: "Chưa có tài khoản này trên máy chủ.", code: "no_account"}, 404, h);
    if(!same(await pbkdf2(String(b.pass || ""), acc.salt, acc.iter || ITER), acc.hash)){
      await env.DATA.put("fail:" + user, String(fails + 1), {expirationTtl: 900});
      return json({error: "Sai tài khoản hoặc mật khẩu.", code: "bad_password"}, 401, h);
    }
    if(acc.seeded){ delete acc.seeded; await putAcc(env, acc); }
    if(fails) await env.DATA.delete("fail:" + user);
    return json({token: await newToken(env, acc), user: acc.user, name: acc.name}, 200, h);
  }

  if(path === "/auth/password"){
    const acc = await authed(req, env);
    if(!acc) return json({error: "Phiên đăng nhập đã hết hạn.", code: "auth"}, 401, h);
    if(!same(await pbkdf2(String(b.old || ""), acc.salt, acc.iter || ITER), acc.hash)) return json({error: "Mật khẩu hiện tại không đúng.", code: "bad_password"}, 401, h);
    const bad = passProblem(b.pass); if(bad) return json({error: bad}, 400, h);
    await setPassword(acc, b.pass); acc.gen = (acc.gen || 0) + 1; acc.changed = Date.now();
    await putAcc(env, acc);
    return json({token: await newToken(env, acc)}, 200, h);
  }
  return json({error: "Not found"}, 404, h);
}

export default {
  async fetch(req, env){
    const h = cors(req, env);
    if(req.method === "OPTIONS") return new Response(null, {status: 204, headers: h});
    const path = new URL(req.url).pathname.replace(/\/+$/, "") || "/";
    if(path.startsWith("/auth/") || path === "/sync"){
      if(h["Access-Control-Allow-Origin"] === "null") return json({error: "Origin not allowed"}, 403, h);
      try{ return await accounts(req, env, path, h); }
      catch(e){ console.log("accounts error", e && e.stack); return json({error: "Máy chủ gặp lỗi, hãy thử lại."}, 500, h); }
    }
    if(req.method === "GET") return json({ok: true, service: "hiking-ielts grader", sync: env.DATA ? "on" : "off (chưa gắn KV binding DATA)",
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
