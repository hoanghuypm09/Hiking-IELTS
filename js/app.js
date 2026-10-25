const UNITS = window.UNITS || [];
const EXTRA = window.EXTRA || {};

/* ============ STATE & STORAGE ============ */
const KEY = "ielts45-progress-v2";
function load(){ try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ return {}; } }
const P = Object.assign({known:{},scores:{},drafts:{},spoke:{},custom:{},edits:{},hidden:{},grades:{},myread:{},graderUrl:"",voice:"",accent:"GB",rate:0.9}, load());
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(P)); }catch(e){} }

const TABS = [["vocab","Từ vựng"],["grammar","Ngữ pháp"],["reading","Reading"],["listening","Listening"],["writing","Writing"],["speaking","Speaking"]];
const FOCUS = {vocab:"vocab", grammar:null, reading:"reading", listening:"listening", writing:"writing", speaking:"speaking"};
const S = {view:"home", u:0, r:0, tab:"vocab", card:0, flipped:false, vq:null, rq:null, timer:null, si:{}};
const QUIZ = {};

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; };
const shuffleOpts = q => { const idx = shuffle(q.o.map((_,i)=>i)); return Object.assign({}, q, {o: idx.map(i=>q.o[i]), a: idx.indexOf(q.a)}); };
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.hidden=false; clearTimeout(t._h); t._h=setTimeout(()=>t.hidden=true,2600); }
function wordCount(t){ return (t.trim().match(/\S+/g)||[]).length; }

/* Mỗi kỹ năng có nhiều bài: bài 1 nằm trong UNITS, các bài thêm nằm trong window.EXTRA */
function sets(u, k){ return [u[k], ...((EXTRA[u.id]||{})[k]||[]), ...(k==="reading" ? myReads(u).map(myToSet) : [])]; }
function setId(u, k, i){ const x = sets(u, k)[i]; return x && x.mine ? `${u.id}:reading:my:${x.mine}` : i ? `${u.id}:${k}:${i+1}` : `${u.id}:${k}`; }

/* Bài Reading của tôi: người dùng tự dán bài đọc + câu hỏi (vd. từ sách). Chỉ lưu trong trình duyệt. */
function myReads(u){ return P.myread[u.id] || []; }
function myParas(text){
  let ps = String(text).replace(/\r/g,"").split(/\n\s*\n/).map(x => x.replace(/\s*\n\s*/g," ").trim()).filter(Boolean);
  if(ps.length === 1) ps = String(text).split(/\n/).map(x => x.trim()).filter(Boolean);
  // Bỏ ký hiệu đoạn A, B, C… nếu bài dán vào đã có sẵn (web tự đánh lại)
  if(ps.length > 1 && ps.every((x,i) => new RegExp("^" + String.fromCharCode(65+i) + "[\\s.)]+\\S").test(x)))
    ps = ps.map(x => x.replace(/^[A-Z][\s.)]+/, ""));
  return ps;
}
function myKey(key){
  const out = []; let auto = 0;
  String(key||"").split(/\n|;/).map(x => x.trim()).filter(Boolean).forEach(line => {
    const m = line.match(/^(\d+)\s*[.):\-]?\s*(.+)$/), num = m ? +m[1] : ++auto, ans = (m ? m[2] : line).trim();
    if(m) auto = num;
    out.push({t:"gap", num, q:"___", a: ans.split(/\s*\/\s*|\s+or\s+/i).filter(Boolean)});
  });
  return out;
}
function myToSet(m){
  const paras = myParas(m.text), words = wordCount(m.text), key = myKey(m.key);
  return {mine:m.id, title:m.title || "Bài của tôi", est:`Bài của tôi · khoảng ${words} từ`, paras, qtext:m.q || "",
    quiz: key.length ? [{t:"head", text:"Phiếu trả lời (đối chiếu với đáp án bạn đã nhập)"}, ...key] : null};
}
function myEditorHTML(u){
  const m = S.myedit.id ? myReads(u).find(x => x.id === S.myedit.id) || {} : {};
  return `<form class="sheet stack myed" id="myedit" autocomplete="off">
    <h3 style="margin:0">${S.myedit.id ? "Sửa bài của tôi" : "Thêm bài Reading của tôi"}</h3>
    <p class="muted small" style="margin:0">Dán bài đọc và câu hỏi (ví dụ từ sách của bạn). Bài chỉ lưu trong trình duyệt này, không đưa lên mạng.</p>
    <label class="vp-f"><span class="small muted">Tiêu đề</span><input name="title" value="${esc(m.title||"")}" placeholder="Vd: Unit 2 – Reading trang 20"></label>
    <label class="vp-f"><span class="small muted">Bài đọc · cách các đoạn bằng một dòng trống</span><textarea name="text" rows="9" required placeholder="Dán bài đọc vào đây…">${esc(m.text||"")}</textarea></label>
    <label class="vp-f"><span class="small muted">Câu hỏi (không bắt buộc)</span><textarea name="q" rows="6" placeholder="Dán phần câu hỏi vào đây…">${esc(m.q||"")}</textarea></label>
    <label class="vp-f"><span class="small muted">Đáp án để tự chấm (không bắt buộc) · mỗi dòng một câu, vd: <code>14 TRUE</code>, <code>15 B</code>, <code>16 river / rivers</code></span><textarea name="key" rows="4" placeholder="1 TRUE&#10;2 NOT GIVEN&#10;3 fishing">${esc(m.key||"")}</textarea></label>
    <div class="row"><button class="btn primary" type="submit">Lưu bài</button><button class="btn" type="button" data-act="mycancel">Huỷ</button>
      ${S.myedit.id ? `<button class="btn" type="button" data-act="mydel" data-id="${esc(S.myedit.id)}" style="margin-left:auto">🗑 Xoá bài</button>` : ""}</div></form>`;
}
function mySave(f){
  const u = UNITS[S.u], fd = new FormData(f), list = P.myread[u.id] = myReads(u).slice();
  const d = {title: fd.get("title").trim(), text: fd.get("text").trim(), q: fd.get("q").trim(), key: fd.get("key").trim()};
  if(!d.text) return toast("Hãy dán bài đọc trước khi lưu.");
  let id = S.myedit.id;
  if(id){ const i = list.findIndex(x => x.id === id); list[i] = Object.assign({}, list[i], d); }
  else { id = Date.now().toString(36); list.push(Object.assign({id}, d)); }
  save(); S.myedit = null;
  Object.keys(RS_CACHE).forEach(k => delete RS_CACHE[k]); PL.key = "";
  S.si.reading = sets(u, "reading").findIndex(x => x.mine === id); render(); toast("Đã lưu bài của bạn.");
}
function draftKey(u, i){ return i ? `${u.id}:w${i+1}` : u.id; }
function curSet(u, k){ const a = sets(u, k), i = Math.min(S.si[k]||0, a.length-1); return {x:a[i], i, n:a.length, id:setId(u, k, i)}; }
function setDone(u, k, i){
  if(k==="writing") return wordCount(P.drafts[draftKey(u, i)]||"") >= sets(u, k)[i].min;
  const sc = P.scores[setId(u, k, i)]; return sc != null && sc >= 0.7;
}
function setTitle(k, x){ return k==="writing" ? x.type+": "+x.prompt : k==="speaking" ? x.cue.t : x.title; }
function setPicker(u, k){
  const a = sets(u, k); if(a.length < 2) return "";
  const cur = curSet(u, k).i;
  return `<div class="setbar"><div class="seg" role="tablist" aria-label="Chọn bài">${a.map((x,i)=>
      `<button type="button" role="tab" data-act="set" data-k="${k}" data-i="${i}" aria-selected="${i===cur}" title="${esc(setTitle(k, x))}">${x.mine ? "📄 " + esc(x.title.slice(0, 16)) + (x.title.length > 16 ? "…" : "") : "Bài " + (i+1)}${setDone(u, k, i)?' <span class="done">✓</span>':''}</button>`).join("")}</div>
    <button class="btn small" type="button" data-act="setrand" data-k="${k}">🔀 Bài khác</button>${k==="reading" ? `<button class="btn small" type="button" data-act="mynew">＋ Bài của tôi</button>` : ""}
    <span class="muted small setname">${esc(setTitle(k, a[cur]).slice(0, 90))}${setTitle(k, a[cur]).length>90?"…":""}</span></div>`;
}
function done(u, tab){
  const unit = UNITS[u], id = unit.id;
  if(tab==="vocab") return unit.vocab.every(v => P.known[id+":"+v.w]);
  if(tab==="speaking") return !!P.spoke[id];
  return sets(unit, tab).some((_, i) => setDone(unit, tab, i));
}
function unitPct(u){ return TABS.filter(t => done(u,t[0])).length / TABS.length; }

/* ============ SPEECH ============ */
// Chấm điểm giọng có sẵn trên máy: ưu tiên giọng "Natural/Neural" (Edge), Google (Chrome), Enhanced/Premium (Safari)
const NOVELTY = /\b(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Ralph|Kathy|Grandma|Grandpa|Rocko|Shelley|Sandy|Flo|Eddy|Reed)\b/i;
let voices = [];
function voiceScore(v){
  let s = 0;
  if(/natural|neural/i.test(v.name)) s += 100;
  else if(/online/i.test(v.name)) s += 90;
  else if(/google/i.test(v.name)) s += 80;
  else if(/enhanced|premium|siri/i.test(v.name)) s += 70;
  if(/espeak/i.test(v.name)) s -= 50;
  if(NOVELTY.test(v.name)) s -= 200;
  const acc = P.accent==="US" ? /en[-_]US/i : P.accent==="GB" ? /en[-_]GB/i : null;
  if(acc && acc.test(v.lang)) s += 30;
  if(/en[-_](GB|US|AU|IE)/i.test(v.lang)) s += 5;
  return s;
}
function loadVoices(){
  try{ voices = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)).sort((a,b) => voiceScore(b) - voiceScore(a)); }catch(e){}
  if(document.getElementById("voicepanel")) renderVoicePanel();
}
if("speechSynthesis" in window){ loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
// i = 0: người nói 1 (giọng bạn chọn hoặc giọng tốt nhất), i = 1: người nói 2 (giọng tốt khác tên)
function pickVoice(i){
  if(!voices.length) return null;
  const main = voices.find(v => v.voiceURI === P.voice) || voices[0];
  if(!i) return main;
  const good = voices.filter(v => v !== main && voiceScore(v) >= voiceScore(main) - 40);
  return good[0] || voices.find(v => v !== main) || main;
}
// Chrome hay tự dừng khi đọc câu dài, nên chia văn bản thành từng câu rồi đọc nối tiếp
function chunks(text){
  const parts = String(text).match(/[\s\S]*?[.!?;:]+["”’)]?(?=\s|$)\s*|[\s\S]+$/g) || [String(text)], out = [];
  parts.forEach(p => { p = p.trim(); if(!p) return;
    if(out.length && (out[out.length-1] + " " + p).length < 160) out[out.length-1] += " " + p; else out.push(p); });
  return out;
}
let speakId = 0;
function speak(text, opt={}){
  if(!("speechSynthesis" in window)){ toast("Trình duyệt này không hỗ trợ đọc giọng nói."); return null; }
  const id = ++speakId, list = chunks(text), v = pickVoice(opt.voice||0);
  const rate = opt.rate || Number(($("#rate")||{}).value || P.rate || 0.9);
  let last = null, pos = 0;
  list.forEach((t, k) => {
    const u = new SpeechSynthesisUtterance(t), off = pos = Math.max(pos, text.indexOf(t, pos)); pos += t.length;
    if(opt.onboundary) u.onboundary = ev => { if(id === speakId && ev.name !== "sentence") opt.onboundary(off + ev.charIndex); };
    u.lang = v ? v.lang : (P.accent==="US" ? "en-US" : "en-GB"); u.rate = rate;
    if(v) u.voice = v;
    if(opt.volume != null) u.volume = opt.volume;
    if(opt.pitch && v === pickVoice(0)) u.pitch = opt.pitch; // chỉ đổi cao độ khi hai người nói phải dùng chung một giọng
    if(k === list.length-1 && opt.onend) u.onend = u.onerror = () => { if(id === speakId) opt.onend(); };
    speechSynthesis.speak(u); last = u;
  });
  return last;
}
function stopSpeech(){ speakId++; try{ speechSynthesis.cancel(); }catch(e){} document.querySelectorAll(".plsrc .now").forEach(e=>e.classList.remove("now")); }

/* Bảng chọn giọng đọc */
function voiceLabel(v){ const sc = voiceScore(v); return (sc>=70?"⭐ ":"") + v.name.replace(/^Microsoft /,"").replace(/ - English.*$/,"") + " · " + v.lang; }
function renderVoicePanel(){
  const el = document.getElementById("voicepanel"); if(!el) return;
  const cur = pickVoice(0), best = voices[0];
  const hint = !voices.length ? "Trình duyệt chưa cung cấp giọng tiếng Anh nào."
    : voiceScore(best) >= 70 ? "Giọng có dấu ⭐ là giọng tự nhiên (AI), nên chọn những giọng này."
    : "Máy bạn chưa có giọng tự nhiên. Xem cách cải thiện bên dưới.";
  el.innerHTML = `<div class="vp-head"><h3>🔊 Giọng đọc</h3><button class="btn small" type="button" data-act="voiceclose" aria-label="Đóng">✕</button></div>
    <div class="seg" role="radiogroup" aria-label="Giọng">${[["GB","Anh – Anh"],["US","Anh – Mỹ"],["any","Bất kỳ"]].map(([k,l])=>`<button type="button" role="radio" data-act="accent" data-a="${k}" aria-checked="${P.accent===k}" aria-selected="${P.accent===k}">${l}</button>`).join("")}</div>
    <label class="vp-f"><span class="small muted">Giọng (${voices.length} giọng tiếng Anh trên máy)</span>
      <select id="voicesel">${voices.map(v=>`<option value="${esc(v.voiceURI)}" ${cur===v?"selected":""}>${esc(voiceLabel(v))}</option>`).join("")}</select></label>
    <label class="vp-f"><span class="small muted">Tốc độ mặc định: <b id="ratev">${P.rate}</b></span><input type="range" id="raterange" min="0.6" max="1.2" step="0.05" value="${P.rate}"></label>
    <div class="row"><button class="btn primary" type="button" data-act="voicetest">▶ Nghe thử</button><button class="btn" type="button" data-act="voiceauto">Tự chọn giọng tốt nhất</button></div>
    <p class="small muted">${hint}</p>
    <details class="small"><summary>Cách có giọng đọc hay hơn</summary><ul>
      <li><b>Máy tính:</b> mở trang bằng <b>Microsoft Edge</b>, có sẵn các giọng “Natural” (Sonia, Ryan, Libby…) rất giống người thật. Chrome có giọng “Google UK English”.</li>
      <li><b>iPhone/iPad:</b> Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Anh → tải giọng có chữ <i>Nâng cao</i> hoặc <i>Cao cấp</i> (ví dụ Serena, Daniel), rồi mở lại trang.</li>
      <li><b>Android:</b> Cài đặt → Hỗ trợ tiếp cận → Chuyển văn bản thành giọng nói → chọn “Dịch vụ Google” và tải giọng English (United Kingdom).</li></ul></details>`;
}
function toggleVoicePanel(open){
  let el = document.getElementById("voicepanel");
  if(open === false || (el && open !== true)){ if(el) el.remove(); return; }
  el = document.createElement("div"); el.id = "voicepanel"; el.className = "voicepanel sheet"; el.setAttribute("role","dialog"); el.setAttribute("aria-label","Chọn giọng đọc");
  document.body.appendChild(el); loadVoices(); renderVoicePanel();
}

/* ============ RENDER: shell ============ */
function renderRail(){
  let h = '<div class="label">10 unit · Complete IELTS 4–5</div>';
  UNITS.forEach((u,i) => {
    h += `<button class="unit-btn" type="button" data-act="unit" data-u="${i}" aria-current="${S.view==='unit'&&S.u===i}">
      <span><b>${i+1}</b> · ${esc(u.title)}</span><small>${esc(u.vi)}</small>
      <span class="bar"><i style="width:${Math.round(unitPct(i)*100)}%"></i></span></button>`;
    if(i%2===1){ const r=(i-1)/2, sc=P.scores["review:"+r];
      h += `<button class="unit-btn rev" type="button" data-act="review" data-r="${r}" aria-current="${S.view==='review'&&S.r===r}">↻ Ôn tập Unit ${i}–${i+1}${sc!=null?` · ${Math.round(sc*100)}%`:""}</button>`; }
  });
  $("#rail").innerHTML = h;
}

function renderHome(){
  const reviews = [0,1,2,3,4].filter(r => UNITS[r*2+1]);
  return `<section class="hero"><span class="eyebrow">Lộ trình band 4.0 → 5.0 · 10 unit</span>
    <h1>Học theo đúng thứ tự sách Complete IELTS Bands 4–5.</h1>
    <p>Mỗi unit có cùng chủ đề, điểm ngữ pháp, dạng câu hỏi Reading/Listening và dạng bài Writing/Speaking như trong sách. Bài đọc, bài nghe và bài mẫu được viết mới để bạn luyện thêm, dùng song song với sách. Sau mỗi 2 unit có một bài ôn tập.</p></section>
  <div class="grid3">${UNITS.map((u,i)=>`<button type="button" class="sheet ucard" data-act="unit" data-u="${i}">
      <span class="eyebrow">Unit ${i+1} · ${Math.round(unitPct(i)*100)}%</span>
      <h2>${esc(u.title)}</h2><span class="muted small">${esc(u.vi)} · ${esc(u.grammar.title)}</span>
      <span class="dots">${TABS.map(t=>`<span class="dot ${done(i,t[0])?'on':''}" title="${t[1]}">${t[1].slice(0,5)}</span>`).join("")}</span>
    </button>`).join("")}</div>
  <div class="revrow">${reviews.map(r=>`<button class="btn" type="button" data-act="review" data-r="${r}">↻ Ôn tập Unit ${r*2+1}–${r*2+2}</button>`).join("")}</div>
  <section class="exam"><h3 style="margin-bottom:10px">Cấu trúc bài thi IELTS Academic</h3>
    <div class="tablewrap sheet" style="padding:6px 12px"><table>
      <thead><tr><th>Kỹ năng</th><th>Thời gian</th><th>Số câu / phần</th><th>Mẹo cho band 4–5</th></tr></thead>
      <tbody>
      <tr><td><b>Listening</b></td><td>~30 phút + 10 phút chép</td><td>40 câu · 4 section</td><td>Đọc trước câu hỏi, đoán loại từ cần điền (số, tên, danh từ).</td></tr>
      <tr><td><b>Reading</b></td><td>60 phút</td><td>40 câu · 3 bài</td><td>Không đọc từng chữ. Tìm từ khoá rồi đọc kỹ quanh đó.</td></tr>
      <tr><td><b>Writing</b></td><td>60 phút</td><td>Task 1 (≥150 từ) · Task 2 (≥250 từ)</td><td>Viết đủ số từ, chia đoạn rõ ràng, làm Task 2 trước.</td></tr>
      <tr><td><b>Speaking</b></td><td>11–14 phút</td><td>Part 1 · 2 · 3</td><td>Trả lời 2–3 câu, luôn thêm lý do hoặc ví dụ.</td></tr>
      </tbody></table></div></section>`;
}

function renderUnit(){
  const u = UNITS[S.u];
  const head = `<span class="eyebrow">Unit ${S.u+1} · ${esc(u.vi)}</span><h1>${esc(u.title)}</h1>
    <div class="tabs" role="tablist">${TABS.map(([k,l])=>`<button class="tab" role="tab" type="button" data-act="tab" data-tab="${k}" aria-selected="${S.tab===k}">${l}${done(S.u,k)?'<span class="done">✓</span>':''}</button>`).join("")}</div>`;
  const fk = FOCUS[S.tab], f = u.focus || {};
  let book = fk && f[fk] ? `<div class="book"><b>Theo sách</b><span>${esc(f[fk])}</span></div>` : "";
  if(S.tab==="grammar") book = `<div class="book"><b>Theo sách</b><span>Key grammar: ${esc(u.grammar.title)}</span></div>`;
  if(S.tab==="speaking" && f.pron) book += `<div class="book"><b>Phát âm</b><span>${esc(f.pron)}</span></div>`;
  const body = {vocab:vVocab, grammar:vGrammar, reading:vReading, listening:vListening, writing:vWriting, speaking:vSpeaking}[S.tab](u);
  return head + book + body;
}

/* ============ QUIZ ENGINE ============ */
// item types: mc (default) {q,o,a,e} · gap {q,a:[accepted],e} · pick {q,o,a:[idx],e} · head {text,fig}
const norm = s => String(s).toLowerCase().trim().replace(/[’']/g,"'").replace(/[£$]/g,"").replace(/(\d),(\d)/g,"$1$2").replace(/\s+/g," ").replace(/[.,;!?]+$/,"");
function quizHTML(id, items){
  QUIZ[id] = items; let n = 0;
  const body = items.map((q,i) => {
    if(q.t==="head") return `<p class="qhead">${esc(q.text)}</p>${q.fig&&FIGS[q.fig]?`<div class="fig">${FIGS[q.fig]()}</div>`:""}`;
    n++;
    const ex = q.e ? `<p class="explain" hidden>${esc(q.e)}</p>` : "";
    if(q.t==="gap"){
      const parts = q.q.split("___"), inp = `<input class="gap" id="${esc(id)}-${i}" autocomplete="off" spellcheck="false" aria-label="Câu ${n}">`;
      return `<div class="q" data-i="${i}"><div class="gapline"><span class="num">${q.num||n}</span>${esc(parts[0])}${inp}${esc(parts[1]||"")}<span class="fix"></span></div>${ex}</div>`;
    }
    const multi = q.t==="pick", long = q.o.some(o => o.length > 22);
    if(!multi && q.o.length > 4) return `<div class="q" data-i="${i}"><p><span class="num">${n}</span>${esc(q.q)}</p>
      <div class="row"><select class="pick-sel" aria-label="Câu ${n}"><option value="">Chọn…</option>${q.o.map((o,j)=>`<option value="${j}">${esc(o)}</option>`).join("")}</select><span class="fix"></span></div>${ex}</div>`;
    return `<div class="q" data-i="${i}"><p><span class="num">${n}</span>${esc(q.q)}</p>
      <div class="opts ${long?'col':''}">${q.o.map((o,j)=>`<label class="opt"><input type="${multi?'checkbox':'radio'}" name="${esc(id)}-${i}" value="${j}"> ${esc(o)}</label>`).join("")}</div>${ex}</div>`;
  }).join("");
  return `<form class="quiz" data-id="${esc(id)}">${body}
    <div class="row" style="margin-top:14px"><button class="btn primary" type="submit">Chấm điểm</button><button class="btn" type="reset">Làm lại</button><span class="qscore"></span>
    ${P.scores[id]!=null?`<span class="muted small">Cao nhất: ${Math.round(P.scores[id]*100)}%</span>`:""}</div></form>`;
}
function gradeQuiz(f){
  const items = QUIZ[f.dataset.id]; let got = 0, total = 0;
  f.querySelectorAll(".q").forEach(el => {
    const q = items[+el.dataset.i], ex = el.querySelector(".explain"); if(ex) ex.hidden = false;
    if(q.t==="gap"){
      total++; const inp = el.querySelector("input"), v = norm(inp.value);
      const ok = !!v && q.a.some(a => norm(a)===v || norm(a).replace(/\s/g,"")===v.replace(/\s/g,""));
      inp.classList.toggle("right", ok); inp.classList.toggle("wrong", !ok);
      const fx = el.querySelector(".fix"); fx.className = "fix " + (ok?"ok":"no"); fx.textContent = ok ? "✓" : "→ " + q.a[0];
      if(ok) got++; return;
    }
    const sel = el.querySelector("select");
    if(sel){
      total++; const ok = sel.value!=="" && +sel.value===q.a; if(ok) got++;
      sel.classList.toggle("right", ok); sel.classList.toggle("wrong", !ok);
      const fx = el.querySelector(".fix"); fx.className = "fix " + (ok?"ok":"no"); fx.textContent = ok ? "✓" : "→ " + q.o[q.a];
      return;
    }
    const picked = [...el.querySelectorAll("input:checked")].map(x => +x.value);
    const right = q.t==="pick" ? q.a : [q.a];
    el.querySelectorAll(".opt").forEach((o,j) => { o.classList.toggle("right", right.includes(j)); o.classList.toggle("wrong", picked.includes(j) && !right.includes(j)); });
    if(q.t==="pick"){ total += q.a.length; const hit = picked.filter(p => q.a.includes(p)).length, extra = picked.length - hit; got += Math.max(0, hit - extra); }
    else { total++; if(picked[0]===q.a) got++; }
  });
  return [got, total];
}
function scoreHTML(r, n){ return `<span class="score ${r/n>=.7?'good':'low'}">${r}/${n}</span> <span class="muted">${r/n>=.7?'Tốt lắm!':'Xem giải thích rồi làm lại nhé.'}</span>`; }
function recordScore(id, v){ if(P.scores[id]==null || v > P.scores[id]){ P.scores[id]=v; save(); renderRail(); } }

/* ============ FIGURES & CHARTS ============ */
const FIGS = {
  scooter(){ return `<svg viewBox="0 0 420 235" role="img" aria-label="Sơ đồ xe scooter điện">
    <circle cx="80" cy="180" r="30" fill="none" stroke="var(--ink)" stroke-width="5"/><circle cx="330" cy="180" r="30" fill="none" stroke="var(--ink)" stroke-width="5"/>
    <circle cx="330" cy="180" r="12" fill="var(--accent)"/>
    <rect x="110" y="165" width="200" height="16" rx="5" fill="var(--ink)"/><rect x="140" y="181" width="140" height="10" rx="3" fill="var(--accent)"/>
    <line x1="88" y1="170" x2="120" y2="40" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/>
    <line x1="92" y1="40" x2="150" y2="40" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/><rect x="108" y="28" width="24" height="10" rx="2" fill="var(--accent)"/>
    <line x1="210" y1="192" x2="210" y2="212" stroke="var(--muted)"/><text x="198" y="226">(6)</text>
    <line x1="342" y1="172" x2="375" y2="135" stroke="var(--muted)"/><text x="377" y="132">(7)</text>
    <line x1="132" y1="30" x2="180" y2="16" stroke="var(--muted)"/><text x="183" y="18">(8)</text>
    <text x="196" y="158" style="font-size:11px">deck</text><text x="296" y="232" style="font-size:11px">back wheel</text><text x="44" y="232" style="font-size:11px">front wheel</text></svg>`; },
  ebus(){ return `<svg viewBox="0 0 460 250" role="img" aria-label="Sơ đồ xe buýt điện">
    <rect x="300" y="6" width="10" height="36" fill="var(--muted)"/><path d="M305 26 L250 50 L262 61" fill="none" stroke="var(--ink)" stroke-width="4" stroke-linejoin="round"/>
    <rect x="70" y="62" width="300" height="10" rx="3" fill="var(--accent)"/><rect x="90" y="54" width="120" height="8" rx="2" fill="var(--c3)"/>
    <rect x="40" y="72" width="360" height="110" rx="16" fill="none" stroke="var(--ink)" stroke-width="5"/>
    <g fill="var(--accent-soft)" stroke="var(--ink)" stroke-width="2">${[0,1,2,3,4].map(i=>`<rect x="${70+i*58}" y="90" width="46" height="40" rx="4"/>`).join("")}</g>
    <rect x="330" y="140" width="20" height="14" rx="3" fill="var(--c3)"/><rect x="250" y="150" width="54" height="22" rx="4" fill="var(--accent)"/>
    <circle cx="110" cy="186" r="24" fill="var(--sheet)" stroke="var(--ink)" stroke-width="5"/><circle cx="330" cy="186" r="24" fill="var(--sheet)" stroke="var(--ink)" stroke-width="5"/>
    <line x1="150" y1="54" x2="150" y2="26" stroke="var(--muted)"/><text x="138" y="20">(1)</text>
    <line x1="277" y1="172" x2="250" y2="232" stroke="var(--muted)"/><text x="232" y="246">(2)</text>
    <line x1="350" y1="147" x2="420" y2="130" stroke="var(--muted)"/><text x="422" y="134">(3)</text>
    <line x1="278" y1="40" x2="350" y2="22" stroke="var(--muted)"/><text x="352" y="24">(4)</text>
    <text x="64" y="232" style="font-size:11px">front</text><text x="360" y="232" style="font-size:11px">rear wheel</text></svg>`; }
};
const PALETTE = ["var(--accent)","var(--ink)","var(--c3)","var(--mark)","var(--muted)"];
function legend(names, y){ let s="", x=10; names.forEach((n,j)=>{ s+=`<rect x="${x}" y="${y}" width="12" height="12" fill="${PALETTE[j]}" rx="2"/><text x="${x+17}" y="${y+10}">${esc(n)}</text>`; x += 34 + n.length*7; }); return s; }
function barSVG(c){
  const W=520,H=260,L=44,B=40,T=14,max=c.max,cw=(W-L-10)/c.cats.length,ns=c.series.length,bw=(cw-24)/ns;
  let s=`<svg viewBox="0 0 ${W} ${H+(ns>1?24:0)}" role="img" aria-label="${esc(c.title)}">`;
  for(let v=0; v<=max; v+=c.step){ const y=H-B-(v/max)*(H-B-T); s+=`<line class="grid" x1="${L}" x2="${W-10}" y1="${y}" y2="${y}"/><text x="${L-8}" y="${y+4}" text-anchor="end">${v}</text>`; }
  c.cats.forEach((cat,i)=>{ const x0=L+i*cw+12;
    c.series.forEach(([n,vals],j)=>{ const h=(vals[i]/max)*(H-B-T); s+=`<rect x="${x0+j*bw}" y="${H-B-h}" width="${bw-4}" height="${h}" fill="${PALETTE[j]}" rx="2"><title>${esc(n)} · ${esc(cat)}: ${vals[i]}</title></rect>`; });
    s+=`<text x="${x0+(cw-24)/2}" y="${H-B+18}" text-anchor="middle">${esc(cat)}</text>`; });
  if(ns>1) s+=legend(c.series.map(x=>x[0]), H);
  return s+"</svg>";
}
function lineSVG(c){
  const W=520,H=260,L=44,B=40,T=14,R=24,max=c.max,dx=(W-L-R)/(c.cats.length-1);
  let s=`<svg viewBox="0 0 ${W} ${H+24}" role="img" aria-label="${esc(c.title)}">`;
  for(let v=0; v<=max; v+=c.step){ const y=H-B-(v/max)*(H-B-T); s+=`<line class="grid" x1="${L}" x2="${W-R}" y1="${y}" y2="${y}"/><text x="${L-8}" y="${y+4}" text-anchor="end">${v}</text>`; }
  c.cats.forEach((cat,i)=>{ s+=`<text x="${L+i*dx}" y="${H-B+18}" text-anchor="middle">${esc(cat)}</text>`; });
  c.series.forEach(([n,vals],j)=>{ const pts=vals.map((v,i)=>`${L+i*dx},${H-B-(v/max)*(H-B-T)}`);
    s+=`<polyline points="${pts.join(" ")}" fill="none" stroke="${PALETTE[j]}" stroke-width="2.5"/>`;
    vals.forEach((v,i)=>{ s+=`<circle cx="${L+i*dx}" cy="${H-B-(v/max)*(H-B-T)}" r="3.5" fill="${PALETTE[j]}"><title>${esc(n)} ${esc(c.cats[i])}: ${v}</title></circle>`; }); });
  return s+legend(c.series.map(x=>x[0]), H)+"</svg>";
}
function pieSVG(c){
  const cx=110, cy=110, r=95, tot=c.data.reduce((a,d)=>a+d[1],0); let a0=-Math.PI/2, s=`<svg viewBox="0 0 420 225" role="img" aria-label="${esc(c.title)}">`;
  c.data.forEach(([n,v],j)=>{ const a1=a0+v/tot*2*Math.PI, big=a1-a0>Math.PI?1:0;
    s+=`<path d="M${cx},${cy} L${cx+r*Math.cos(a0)},${cy+r*Math.sin(a0)} A${r},${r} 0 ${big} 1 ${cx+r*Math.cos(a1)},${cy+r*Math.sin(a1)} Z" fill="${PALETTE[j%5]}" stroke="var(--sheet)" stroke-width="2"><title>${esc(n)}: ${v}%</title></path>`;
    s+=`<rect x="235" y="${30+j*34}" width="14" height="14" rx="2" fill="${PALETTE[j%5]}"/><text x="256" y="${42+j*34}">${esc(n)} · ${v}%</text>`; a0=a1; });
  return s+"</svg>";
}
function chartHTML(c){
  let inner = "";
  if(c.type==="bar") inner = barSVG(c);
  else if(c.type==="line") inner = lineSVG(c);
  else if(c.type==="pie") inner = pieSVG(c);
  else if(c.type==="table") inner = `<div class="tablewrap"><table class="dtable"><thead><tr>${c.head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${c.rows.map(r=>`<tr>${r.map((x,i)=>i?`<td>${esc(x)}</td>`:`<td><b>${esc(x)}</b></td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  else if(c.type==="process") inner = `<div class="process">${c.steps.map((s,i)=>`<span class="step"><b>${i+1}</b>${esc(s)}</span>${i<c.steps.length-1?'<span class="arr">→</span>':''}`).join("")}</div>`;
  return `<div class="chart"><h4>${esc(c.title)}</h4>${inner}</div>`;
}

/* ============ TABS ============ */
function vocabQuestions(pool, n, label="Từ"){
  return shuffle(pool).slice(0,n).map(t => {
    const o = shuffle([t.w, ...shuffle(pool.filter(x=>x!==t)).slice(0,3).map(x=>x.w)]);
    return {q:`${label} nào nghĩa là “${t.vi}”?`, o, a:o.indexOf(t.w)};
  });
}
const VMODES = {
  word:   {field:"vocab",   key:":",     qid:":vocab", unit:"từ",  Unit:"Từ",  name:"Từ vựng",     gapName:"từ"},
  phrase: {field:"phrases", key:":np:",  qid:":np",    unit:"cụm", Unit:"Cụm", name:"Cụm danh từ", gapName:"cụm danh từ",
           tip:"Học cả cụm thay vì từng từ riêng lẻ giúp bài Writing và Speaking tự nhiên hơn. Mỗi thẻ ghi cấu trúc của cụm (ví dụ: tính từ + danh từ)."},
  colloc: {field:"collocs", key:":col:", qid:":col",   unit:"cụm", Unit:"Cụm", name:"Collocation", gapName:"collocation",
           tip:"Collocation là những từ người bản xứ hay đi cùng nhau, ví dụ “make progress” chứ không nói “do progress”. Dùng đúng collocation giúp tăng điểm Lexical Resource."},
  lesson: {field:"lesson",  key:":ls:",  qid:":ls",    unit:"từ",  Unit:"Từ",  name:"Từ trong bài", gapName:"từ",
           tip:"Từ và cụm từ xuất hiện trong các bài tập của sách (phần mở đầu, Reading, Listening, Speaking, Writing), xếp theo đúng thứ tự từng phần của unit."}
};
/* Danh sách từ của một chế độ, đã gộp phần người học tự sửa / thêm / xóa (lưu trong localStorage) */
function userList(u, m){
  const pre = u.id+":"+m+":", out = [];
  (u[VMODES[m].field]||[]).forEach(x => {
    const id = "b:"+x.w; if(P.hidden[pre+id]) return;
    const e = P.edits[pre+id]; out.push(Object.assign({}, x, e||{}, {_id:id, _edited:!!e}));
  });
  (P.custom[u.id+":"+m]||[]).forEach(x => out.push(Object.assign({g:"Từ của tôi"}, x, {_custom:true})));
  return out;
}
function hasMode(u, m){ return m==="word" || (u[VMODES[m].field]||[]).length || (P.custom[u.id+":"+m]||[]).length; }
function vocabPool(u){
  const m = VMODES[S.vmode] && hasMode(u, S.vmode) ? S.vmode : "word", M = VMODES[m];
  return {list: userList(u, m), key: u.id + M.key, qid: u.id + M.qid, np: m!=="word", M, mode: m};
}
/* Ôn tập gõ từ: hiện nghĩa, người học gõ lại từ tiếng Anh */
// Chuẩn hoá khi so câu gõ: bỏ hoa/thường, khoảng trắng thừa, dấu ngoặc kép, dấu câu cuối
// Bỏ dấu tiếng Việt để tìm "co hoi" vẫn ra "cơ hội"
const fold = x => String(x||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase().replace(/\s+/g," ").trim();
function wlFilter(){
  const box = document.querySelector(".wordlist"); if(!box) return;
  const q = fold(S.vsearch), rows = box.querySelectorAll(".wl"); let n = 0;
  rows.forEach(r => { const ok = !q || r.dataset.s.includes(q); r.hidden = !ok; if(ok) n++; });
  box.querySelectorAll(".wl-group").forEach(g => { let e = g.nextElementSibling, any = false;
    while(e && e.classList.contains("wl")){ if(!e.hidden){ any = true; break; } e = e.nextElementSibling; } g.hidden = !any; });
  $("#wlcount").textContent = q ? `${n}/${rows.length}` : rows.length;
  $("#wlnone").hidden = n > 0;
}
const normT = x => norm(String(x).replace(/["“”]/g,"")).replace(/\s+/g," ").trim();
function typAnswers(w){
  const out = new Set([w, w.replace(/\s*\([^)]*\)\s*/g," "), w.replace(/[()]/g,"")]);
  w.split(/\s*\/\s*/).forEach(x => x!==w && out.add(x));
  return [...out].map(normT);
}
function typStart(u, mode, scope, items){
  const list = items || (scope==="all" ? UNITS.flatMap((uu,ui) => userList(uu, mode).map(x => Object.assign({}, x, {_u:ui}))) : userList(u, mode).map(x => Object.assign({}, x, {_u:S.u})));
  S.typ = {u:u.id, mode, scope, list:shuffle(list), i:0, ok:0, wrong:[], res:null, hint:0};
}
function typHTML(V){
  const T = S.typ, n = T.list.length;
  if(T.i >= n){
    const pct = Math.round(T.ok/n*100);
    return `<div class="sheet typ"><span class="eyebrow">Kết quả ôn tập · ${V.M.name}</span>
      <h2 style="margin:6px 0 4px">${T.ok}/${n} đúng · ${pct}%</h2>
      <p class="muted">${pct===100?"Tuyệt vời, bạn nhớ hết rồi!":pct>=70?"Tốt lắm! Ôn lại vài ${V.M.unit} sai bên dưới nhé.":"Cần ôn thêm. Hãy luyện lại các ${V.M.unit} sai."}</p>
      ${T.wrong.length?`<div class="typ-wrong">${T.wrong.map(x=>`<div class="wl"><span><b>${esc(x.w)}</b> <span class="ipa">${esc(x.ipa||"")}</span><br><span class="muted small">${esc(x.vi)}${x._ans?` · bạn gõ: <s>${esc(x._ans)}</s>`:""}</span></span><button class="btn small" type="button" data-act="say" data-text="${esc(x.w)}">🔊</button></div>`).join("")}</div>`:""}
      <div class="row" style="margin-top:14px">${T.wrong.length?`<button class="btn primary" type="button" data-act="typretry">Luyện lại ${T.wrong.length} ${V.M.unit} sai</button>`:""}
        <button class="btn" type="button" data-act="typstart" data-scope="${T.scope}">Làm lại từ đầu</button><button class="btn" type="button" data-act="typquit">Về thẻ từ</button></div></div>`;
  }
  const x = T.list[T.i], R = T.res, ans = x.w;
  const hint = T.hint===0 ? "" : T.hint===1 ? `${ans.length} ký tự · bắt đầu bằng “${esc(ans[0])}”` : esc(ans.replace(/[A-Za-z]/g,(c,i)=>i===0||ans[i-1]===" "?c:"_"));
  return `<div class="sheet typ">
    <div class="row" style="justify-content:space-between"><span class="eyebrow">Ôn tập · ${T.scope==="all"?"tất cả unit":"unit này"} · ${V.M.name}</span><span class="muted small">${T.i+1}/${n} · đúng ${T.ok}</span></div>
    <div class="typ-bar"><span style="width:${T.i/n*100}%"></span></div>
    <p class="muted small" style="margin-top:14px">Gõ ${V.M.unit} tiếng Anh có nghĩa là${T.scope==="all"?` <span class="tick mine">Unit ${x._u+1}</span>`:""}</p>
    <h2 class="typ-q">${esc(x.vi)}</h2>
    <p class="muted small">${x.p?esc(x.p):""}${x.g?" · "+esc(x.g):""}</p>
    <form id="typ" class="typ-form" autocomplete="off">
      <input id="typin" class="${R?(R.ok?"right":"wrong"):""}" ${R?"readonly":""} value="${R?esc(R.val):""}" placeholder="Gõ câu trả lời rồi nhấn Enter" spellcheck="false" autocapitalize="off" aria-label="Câu trả lời">
      <button class="btn primary" type="submit">${R?"Tiếp →":"Kiểm tra"}</button>
    </form>
    ${R ? `<div class="typ-res ${R.ok?"ok":"bad"}">${R.ok?"✓ Chính xác!":"✗ Chưa đúng. Đáp án:"} <b>${esc(ans)}</b> <span class="ipa">${esc(x.ipa||"")}</span>
        <button class="btn small" type="button" data-act="say" data-text="${esc(ans)}">🔊</button>${x.ex?`<br><span class="muted small">“${esc(x.ex)}”</span>`:""}</div>`
      : `<div class="row" style="margin-top:10px"><button class="btn small" type="button" data-act="typhint" ${T.hint>=2?"disabled":""}>💡 Gợi ý</button><button class="btn small" type="button" data-act="typskip">Bỏ qua</button>${hint?`<span class="typ-hint">${hint}</span>`:""}</div>`}
    <div class="row" style="margin-top:14px;justify-content:flex-end"><button class="btn small" type="button" data-act="typquit">Kết thúc ôn tập</button></div>
  </div>`;
}
function typCheck(val){
  const T = S.typ, x = T.list[T.i], v = normT(val);
  const ok = T.list.some(y => (y===x || norm(y.vi)===norm(x.vi)) && typAnswers(y.w).includes(v)); // chấp nhận cả từ khác có cùng nghĩa
  T.res = {ok, val}; if(ok) T.ok++;
  if(!ok) T.wrong.push(Object.assign({}, x, {_ans:val}));
}
function typNext(){ const T=S.typ; T.i++; T.res=null; T.hint=0; render(); const i=$("#typin"); if(i) i.focus(); }
function modesHTML(u, V){
  const avail = Object.keys(VMODES).filter(m => hasMode(u, m));
  return avail.length > 1 ? `<div class="seg" role="tablist" aria-label="Loại từ vựng">${avail.map(m=>
      `<button type="button" role="tab" data-act="vmode" data-m="${m}" aria-selected="${V.mode===m}">${VMODES[m].name} · ${userList(u, m).length}</button>`).join("")}</div>` : "";
}
function editorHTML(u, V){
  if(!S.edit || S.edit.u !== u.id || S.edit.m !== V.mode) return "";
  const x = S.edit.id === "new" ? {g:"Từ của tôi"} : V.list.find(y => y._id === S.edit.id);
  if(!x) return "";
  const f = (n, label, ph, req) => `<label class="ve-f"><span class="small muted">${label}${req?" *":""}</span><input name="${n}" value="${esc(x[n]||"")}" placeholder="${esc(ph)}" ${req?"required":""} autocomplete="off"></label>`;
  const extra = S.edit.id === "new" ? "" : x._custom
    ? `<button class="btn" type="button" data-act="vdel">🗑 Xóa ${V.M.unit} này</button>`
    : `${x._edited?`<button class="btn" type="button" data-act="vreset">↺ Khôi phục bản gốc</button>`:""}<button class="btn" type="button" data-act="vdel">🗑 Ẩn ${V.M.unit} này</button>`;
  return `<form class="sheet vedit" id="vedit"><h3>${S.edit.id==="new" ? `Thêm ${V.M.unit} mới` : `Sửa “${esc(x.w)}”`} <span class="muted small">· ${V.M.name}</span></h3>
    <div class="ve-grid">${f("w", V.M.Unit+" tiếng Anh", V.mode==="word"?"vd: persevere":"vd: make progress", true)}${f("vi", "Nghĩa tiếng Việt", "vd: tiến bộ", true)}
      ${f("p", "Loại từ", "n / v / adj / phrase…")}${f("ipa", "Phiên âm", "/ˈwɜːd/")}
      ${f("ex", "Câu ví dụ", "Viết một câu có dùng từ này")}${f("g", "Nhóm", "vd: Từ của tôi")}</div>
    <div class="row" style="margin-top:12px"><button class="btn primary" type="submit">Lưu</button><button class="btn" type="button" data-act="vcancel">Hủy</button><span style="flex:1"></span>${extra}</div></form>`;
}
function vocabDeck(u){
  const V = vocabPool(u), all = V.list.map((_,i)=>i);
  if(!S.onlyNew) return all;
  const left = all.filter(i => !P.known[V.key+V.list[i].w]);
  return left.length ? left : all;
}
function gapQuestions(pool, n){
  const re = w => new RegExp("\\b"+w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b","i");
  return shuffle(pool.filter(t => re(t.w).test(t.ex))).slice(0,n).map(t => {
    const m = t.ex.match(re(t.w))[0];
    return {t:"gap", q:t.ex.replace(m,"___")+" ("+t.vi+")", a:[m]};
  });
}
function vVocab(u){
  const V = vocabPool(u), pool = V.list;
  const nHidden = Object.keys(P.hidden).filter(k => k.startsWith(u.id+":"+V.mode+":")).length;
  const tools = `<div class="row ve-tools"><button class="btn small primary" type="button" data-act="vnew">＋ Thêm ${V.M.unit}</button>
    <button class="btn small" type="button" data-act="typstart" data-scope="unit">✍ Ôn tập unit này</button>
    <button class="btn small" type="button" data-act="typstart" data-scope="all">✍ Ôn tất cả unit</button>
    ${nHidden?`<button class="btn small" type="button" data-act="vunhide">Hiện lại ${nHidden} ${V.M.unit} đã ẩn</button>`:""}
    <span style="flex:1"></span><button class="btn small" type="button" data-act="vexport">⬇ Sao lưu</button>
    <label class="btn small">⬆ Khôi phục<input type="file" id="vimport" accept=".json,application/json" hidden></label></div>
    ${S.note?`<p class="small muted" role="status" style="margin:-6px 0 12px">${esc(S.note)}</p>`:""}`; S.note = "";
  if(!pool.length) return tools + editorHTML(u, V) + `<div class="sheet"><p class="muted">Chưa có ${V.M.unit} nào. Bấm “Thêm ${V.M.unit}” để bắt đầu.</p></div>`;
  if(S.typ && S.typ.u===u.id && S.typ.mode===V.mode) return (modesHTML(u, V)) + typHTML(V);
  const deck = vocabDeck(u); S.card = ((S.card % deck.length) + deck.length) % deck.length;
  const v = pool[deck[S.card]], k = V.key+v.w;
  const nKnown = pool.filter(x=>P.known[V.key+x.w]).length;
  if(!S.vq || S.vq.id !== V.qid) S.vq = {id:V.qid, items: vocabQuestions(pool, Math.min(10, pool.length), V.M.Unit), gaps: gapQuestions(pool, 8)};
  let lastG = null;
  const list = pool.map((x,i)=>{
    const head = x.g && x.g!==lastG ? `<p class="eyebrow wl-group">${esc(x.g)}</p>` : ""; lastG = x.g;
    return head + `<div class="wl" data-s="${esc(fold([x.w, x.vi, x.ex].join(" ")))}"><span><b>${esc(x.w)}</b> <span class="ipa">${esc(x.ipa)}</span><br><span class="muted small">${esc(x.vi)}</span></span>
      <span class="row">${P.known[V.key+x.w]?'<span class="tick">đã thuộc</span>':''}${x._custom?'<span class="tick mine">của tôi</span>':x._edited?'<span class="tick mine">đã sửa</span>':''}<button class="btn small" type="button" data-act="goto" data-i="${i}">Xem</button><button class="btn small" type="button" data-act="vedit" data-id="${esc(x._id)}" aria-label="Sửa ${esc(x.w)}">✎</button></span></div>`;
  }).join("");
  const modes = modesHTML(u, V);
  const tip = V.M.tip ? `<p class="muted small" style="margin:-6px 0 14px">${V.M.tip}</p>` : "";
  return modes + tip + tools + editorHTML(u, V) + `<div class="flash-area">
    <div class="stack">
      <button type="button" class="card ${S.flipped?'flipped':''} ${S.enter?'enter-'+S.enter:''}" data-act="flip" aria-label="Lật thẻ. Quẹt trái hoặc phải, hoặc dùng phím mũi tên, để đổi thẻ">
        <div class="card-in">
          <div class="face"><span class="pos">${esc(v.p)}</span><span class="word">${esc(v.w)}</span><span class="ipa">${esc(v.ipa)}</span><span class="hint">Bấm để xem nghĩa · quẹt ← → để đổi thẻ · ${S.card+1}/${deck.length}${v.g?" · "+esc(v.g):""}</span></div>
          <div class="face back"><span class="eyebrow">Nghĩa</span><h2>${esc(v.vi)}</h2><span class="ex">“${esc(v.ex)}”</span><span class="hint">Bấm để lật lại</span></div>
        </div></button>
      <div class="row">
        <button class="btn" type="button" data-act="say" data-text="${esc(v.w)}">🔊 Nghe từ</button>
        <button class="btn" type="button" data-act="say" data-text="${esc(v.ex)}">🔊 Câu ví dụ</button>
      </div>
      <div class="cardinfo"><span><b>Nghĩa:</b> ${esc(v.vi)}</span>${v.ex?`<span class="ex">“${esc(v.ex)}”</span>`:""}</div>
      <form id="cardtype" class="cardtype" autocomplete="off" data-w="${esc(v.w)}">
        <input id="cardin" placeholder="Gõ lại ${V.M.unit} này rồi nhấn Enter" spellcheck="false" autocapitalize="off" aria-label="Gõ lại ${V.M.unit} trên thẻ">
        <button class="btn" type="submit">Kiểm tra</button>
        <span id="cardmsg" class="small muted" role="status">${S.typedOk?`✓ Đã gõ đúng ${S.typedOk} ${V.M.unit} liên tiếp`:""}</span>
      </form>
      <div class="row">
        <button class="btn ${P.known[k]?'':'primary'}" type="button" data-act="known" data-k="${esc(k)}">${P.known[k]?'Bỏ đánh dấu':`✓ Tôi đã thuộc ${V.M.unit} này`}</button>
        <span class="muted">${nKnown}/${pool.length} ${V.M.unit} đã thuộc</span>
      </div>
      <label class="row small"><input type="checkbox" id="onlynew" data-act="onlynew" ${S.onlyNew?"checked":""}> Chỉ ôn những ${V.M.unit} chưa thuộc</label>
    </div>
    <div class="sheet wordlist"><div class="wl-head"><span class="eyebrow">${V.M.name} của unit · <span id="wlcount">${pool.length}</span> ${V.M.unit}</span>
      <div class="wl-search"><input id="vsearch" type="search" placeholder="Tìm ${V.M.unit}, nghĩa hoặc ví dụ…" value="${esc(S.vsearch||"")}" autocomplete="off" spellcheck="false" aria-label="Tìm trong danh sách ${V.M.unit}"></div></div>
      ${list}<p id="wlnone" class="muted small" hidden>Không tìm thấy ${V.M.unit} nào khớp.</p></div>
  </div>
  <div class="sheet" style="margin-top:20px"><div class="row" style="justify-content:space-between"><h3>Kiểm tra nhanh</h3><button class="btn small" type="button" data-act="newvq">Đổi câu hỏi</button></div>
    <p class="qhead">Phần 1: Chọn ${V.M.unit} đúng với nghĩa</p>${quizHTML(V.qid+"quiz", S.vq.items)}
    ${S.vq.gaps.length?`<p class="qhead" style="margin-top:18px">Phần 2: Điền ${V.M.gapName} vào câu (gợi ý nghĩa trong ngoặc)</p>${quizHTML(V.qid+"gap", S.vq.gaps)}`:""}</div>`;
}

function vGrammar(u){
  const g = u.grammar;
  return `<div class="stack"><h2>${esc(g.title)}</h2>
    <div class="rule">${g.rules.map(r=>`<div class="sheet"><h3>${esc(r.h)}</h3><ul>${r.use.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      <p style="margin-top:10px"><mark>${esc(r.form)}</mark></p><p class="ex" style="margin-top:8px">${esc(r.ex)}</p>
      <p class="muted small" style="margin-top:6px">${esc(r.sig)}</p></div>`).join("")}</div>
    ${gBankHTML(u)}</div>`;
}

/* Grammar bank: ~100 câu mỗi unit, chia bộ 10 câu, trộn và lọc theo dạng */
const GTYPES = [["all","Tất cả"],["c","Chọn đáp án"],["g","Điền từ"],["s","Chọn câu đúng"]], GSIZE = 10;
const gPool = u => u.grammar.quiz.map(q => Object.assign({k:"c"}, q)).concat((window.GRAMMAR_BANK||{})[u.id] || []);
function gState(u, reset){
  S.gq = S.gq || {};
  let st = S.gq[u.id];
  if(!st) st = S.gq[u.id] = {type:"all"};
  if(reset || !st.order){
    const pool = gPool(u).filter(q => st.type==="all" || q.k===st.type);
    st.pool = pool; st.order = shuffle(pool.map((_,i)=>i)); st.page = 0; st.items = null;
  }
  st.pages = Math.max(1, Math.ceil(st.order.length / GSIZE));
  if(!st.items) st.items = st.order.slice(st.page*GSIZE, st.page*GSIZE+GSIZE).map(i => st.pool[i]).map(q => q.t==="gap" ? q : shuffleOpts(q));
  return st;
}
function gBankHTML(u){
  const st = gState(u), all = gPool(u);
  const cnt = k => k==="all" ? all.length : all.filter(q => q.k===k).length;
  return `<div class="sheet"><div class="gbar"><h3>Bài tập · ${all.length} câu</h3>
      <div class="seg" role="tablist" aria-label="Dạng bài">${GTYPES.map(([k,l])=>`<button type="button" role="tab" data-act="gtype" data-k="${k}" aria-selected="${st.type===k}">${l} <span class="muted small">${cnt(k)}</span></button>`).join("")}</div></div>
    <div class="gnav"><button class="btn small" type="button" data-act="gpage" data-d="-1" ${st.page?"":"disabled"} aria-label="Bộ trước">‹</button>
      <span class="small">Bộ <b>${st.page+1}</b>/${st.pages}</span>
      <button class="btn small" type="button" data-act="gpage" data-d="1" aria-label="Bộ sau">›</button>
      <button class="btn small" type="button" data-act="gshuffle">🔀 Đổi bài</button>
      <span class="muted small">Câu ${st.page*GSIZE+1}–${Math.min(st.order.length,(st.page+1)*GSIZE)} trong ${st.order.length} câu đã trộn</span></div>
    ${quizHTML(u.id+":grammar", st.items)}
    <div class="row" style="margin-top:10px;justify-content:flex-end"><button class="btn small" type="button" data-act="gpage" data-d="1">Bộ tiếp theo ›</button></div></div>`;
}

function vReading(u){
  const C = curSet(u, "reading"), r = C.x;
  if(PL.key !== C.id){ PL.key = C.id; PL.i = 0; PL.at = 0; }
  let k = 0;
  if(S.myedit) return setPicker(u, "reading") + myEditorHTML(u);
  const side = r.mine ? `<div class="row" style="justify-content:space-between;margin-bottom:8px"><span class="eyebrow">Câu hỏi</span>
        <button class="btn small" type="button" data-act="myedit" data-id="${esc(r.mine)}">✎ Sửa bài</button></div>
      ${r.qtext ? `<div class="myq">${esc(r.qtext)}</div>` : `<p class="muted small">Bạn chưa dán câu hỏi. Bấm ✎ Sửa bài để thêm.</p>`}
      ${r.quiz ? quizHTML(C.id, r.quiz) : `<label class="vp-f" style="margin-top:12px"><span class="small muted">Câu trả lời / ghi chú của bạn (tự lưu). Thêm đáp án ở ✎ Sửa bài để web tự chấm.</span>
        <textarea id="mynote" rows="6" data-k="${esc(C.id)}">${esc(P.drafts[C.id]||"")}</textarea></label>`}`
    : quizHTML(C.id, r.quiz);
  return setPicker(u, "reading") + playerHTML(u, C) + `<div class="reading">
    <article class="sheet passage plsrc" id="scriptbox"><span class="eyebrow">Đọc hiểu · ${esc(r.est)}</span><h2 style="margin:6px 0 14px">${esc(r.title)}</h2>
      ${r.paras.map((p,i)=>`<p><span class="pn">${String.fromCharCode(65+i)}</span>${splitSent(p).map(t=>`<span class="rs" data-line="${k}" data-act="plline" data-i="${k++}">${esc(t)}</span>`).join(" ")}</p>`).join("")}
      ${r.note?`<p class="muted small">${esc(r.note)}</p>`:""}</article>
    <div class="sheet sticky">${side}</div></div>`;
}

function vListening(u){
  const C = curSet(u, "listening"), l = C.x;
  if(PL.key !== C.id){ PL.key = C.id; PL.i = 0; PL.at = 0; }
  return setPicker(u, "listening") + `<div class="stack">
    <div class="sheet stack"><span class="eyebrow">${esc(l.title)}</span><p>${esc(l.intro)}</p>
      <p class="muted small">Dùng thanh phát bên dưới: ▶ phát/tạm dừng, ⏮ ⏭ lùi/tới một câu, bấm vào thanh tiến trình hoặc vào một câu trong transcript để nghe từ chỗ đó. Phím tắt: Space, ← →. Bài nghe do giọng máy của trình duyệt đọc; chọn giọng hay hơn ở nút 🔊 Giọng đọc.</p></div>
    ${playerHTML(u, C)}
    <div class="sheet">${quizHTML(C.id, l.quiz)}</div>
    <details class="sheet" id="scriptbox"><summary>Xem transcript</summary><div class="script plsrc">
      ${l.script.map(([s,t],i)=>`<p data-line="${i}" data-act="plline" data-i="${i}" title="Nghe từ câu này"><span class="sp">${s==="A"?"Speaker 1":"Speaker 2"}</span>${esc(t)}</p>`).join("")}</div></details></div>`;
}

/* ============ THANH PHÁT BÀI NGHE (kiểu YouTube Music) ============
   Giọng đọc của trình duyệt không cho tua theo giây, nên tiến trình được tính theo từng câu:
   mỗi câu có thời lượng ước tính theo độ dài, tua = nhảy tới câu tương ứng. */
const PL = {key:"", i:0, playing:false, repeat:"off", start:0, raf:0, from:0, ch:-1, at:0};
const ICON = {
  play:'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  pause:'<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
  prev:'<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zM9.5 12 18 18V6z"/></svg>',
  next:'<svg viewBox="0 0 24 24"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  vol:'<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>',
  mute:'<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm18.3 7.9L19.4 15l1.9-1.9-1.4-1.4-1.9 1.9-1.9-1.9-1.4 1.4 1.9 1.9-1.9 1.9 1.4 1.4 1.9-1.9 1.9 1.9z" transform="translate(-2 -1)"/></svg>',
  rep:'<svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>',
  rep1:'<svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/></svg>',
  up:'<svg viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>'
};
// Tách đoạn văn thành câu: chỉ ngắt sau . ! ? khi câu sau bắt đầu bằng chữ hoa/ngoặc kép (nên "8 a.m. to 2 p.m." không bị cắt)
function splitSent(p){
  const out = [], re = /[.!?]+["”’')]*(?=\s+["“‘']?[A-Z0-9]|\s*$)/g, abbr = /\b(?:Mr|Mrs|Ms|Dr|St|No|vs|e\.g|i\.e)\.$/;
  let start = 0, m;
  p = String(p);
  while((m = re.exec(p))){
    const end = m.index + m[0].length;
    if(abbr.test(p.slice(start, end))) continue;
    out.push(p.slice(start, end).trim()); start = end;
  }
  if(p.slice(start).trim()) out.push(p.slice(start).trim());
  return out.length ? out : [p];
}
const RS_CACHE = {};
function plScript(){
  const u = UNITS[S.u];
  if(S.tab !== "reading") return curSet(u, "listening").x.script;
  const C = curSet(u, "reading");
  return RS_CACHE[C.id] || (RS_CACHE[C.id] = C.x.paras.flatMap(p => splitSent(p).map(t => ["A", t])));
}
function plRate(){ return Number(($("#rate")||{}).value || P.rate || 0.9); }
function plDurs(){ const r = plRate(); return plScript().map(([,t]) => Math.max(1.5, t.length / 14) / r + 0.35); }
const fmt = sec => Math.floor(sec/60) + ":" + String(Math.floor(sec%60)).padStart(2,"0");
function playerHTML(u, C){
  const n = plScript().length, rates = [["0.75","0.75×"],["0.9","0.9×"],["1","1×"],["1.1","1.1×"]];
  const cur = String(P.rate>=1.05?1.1:P.rate>=0.95?1:P.rate>=0.82?0.9:0.75);
  return `<div class="player" id="player" role="region" aria-label="${S.tab==="reading"?"Trình đọc bài Reading":"Trình phát bài nghe"}">
    <div class="pl-prog" id="plprog" role="slider" aria-label="Tiến trình" aria-valuemin="1" aria-valuemax="${n}" aria-valuenow="${PL.i+1}" tabindex="0">
      <div class="pl-track"></div><div class="pl-fill" id="plfill"></div><div class="pl-knob" id="plknob"></div><div class="pl-tip" id="pltip"></div></div>
    <div class="pl-row">
      <div class="pl-left">
        <button type="button" class="pl-btn pl-prev" data-act="plprev" aria-label="Câu trước">${ICON.prev}</button>
        <button type="button" class="pl-btn pl-main" data-act="pltoggle" id="plplay" aria-label="Phát">${ICON.play}</button>
        <button type="button" class="pl-btn" data-act="plnext" aria-label="Câu sau">${ICON.next}</button>
        <span class="pl-time" id="pltime">0:00 / 0:00</span>
      </div>
      <div class="pl-mid">
        <div class="pl-thumb" aria-hidden="true">${S.u+1}</div>
        <div class="pl-meta"><b>${esc(C.x.title)}</b><span>Unit ${S.u+1} · ${esc(u.title)} · Bài ${C.i+1} · <span id="plline">Câu 1/${n}</span></span></div>
      </div>
      <div class="pl-right">
        <select id="rate" class="pl-rate" aria-label="Tốc độ">${rates.map(([v,l])=>`<option value="${v}" ${v===cur?"selected":""}>${l}</option>`).join("")}</select>
        <button type="button" class="pl-btn pl-sm" data-act="plmute" id="plmute" aria-label="Tắt tiếng">${P.mute?ICON.mute:ICON.vol}</button>
        <button type="button" class="pl-btn pl-sm" data-act="plrepeat" id="plrep" aria-label="Lặp lại">${ICON.rep}</button>
        <button type="button" class="pl-btn pl-sm" data-act="plscript" aria-label="${S.tab==="reading"?"Tới bài đọc":"Mở transcript"}">${ICON.up}</button>
      </div>
    </div></div>`;
}
function plUI(){
  const el = $("#player"); if(!el) return;
  const d = plDurs(), total = d.reduce((a,b)=>a+b, 0), n = d.length;
  const before = d.slice(0, PL.i).reduce((a,b)=>a+b, 0);
  const inLine = PL.playing ? Math.min(d[PL.i] || 0, (performance.now() - PL.start) / 1000) : plFrac() * ((d[PL.i] || 0.35) - 0.35);
  const t = Math.min(total, before + inLine), pct = total ? t / total * 100 : 0;
  $("#plfill").style.width = pct + "%"; $("#plknob").style.left = pct + "%";
  $("#pltime").textContent = fmt(t) + " / " + fmt(total);
  $("#plline").textContent = `Câu ${Math.min(PL.i+1, n)}/${n}`;
  $("#plprog").setAttribute("aria-valuenow", PL.i+1);
  const btn = $("#plplay"), st = PL.playing ? "pause" : "play";
  if(btn.dataset.st !== st){ btn.dataset.st = st; btn.innerHTML = ICON[st]; btn.setAttribute("aria-label", PL.playing ? "Tạm dừng" : "Phát"); }
  const rep = $("#plrep"); if(rep.dataset.st !== PL.repeat){ rep.dataset.st = PL.repeat; rep.innerHTML = PL.repeat==="one" ? ICON.rep1 : ICON.rep; } rep.classList.toggle("on", PL.repeat!=="off");
  rep.setAttribute("aria-label", {off:"Lặp lại: tắt", all:"Lặp lại cả bài", one:"Lặp lại câu này"}[PL.repeat]); rep.title = rep.getAttribute("aria-label");
  document.querySelectorAll(".plsrc .now").forEach(e => e.classList.remove("now"));
  const line = document.querySelector(`.plsrc [data-line="${PL.i}"]`); if(line && (PL.playing || PL.i || PL.at)) line.classList.add("now");
}
function plTick(){ cancelAnimationFrame(PL.raf); if(!PL.playing) return; plUI(); PL.raf = requestAnimationFrame(plTick); }
function plFrac(){ const t = (plScript()[PL.i] || [,""])[1]; return t.length ? PL.at / t.length : 0; }
// Vị trí (ký tự) đang đọc trong câu: ưu tiên sự kiện boundary của giọng đọc, nếu không có thì ước theo thời gian; lùi về đầu từ.
function plHere(){
  const t = plScript()[PL.i][1], d = plDurs()[PL.i] - 0.35;
  let ch = PL.ch >= PL.from ? PL.ch : Math.floor(Math.min(1, (performance.now() - PL.start) / 1000 / d) * t.length);
  ch = Math.max(PL.from, Math.min(t.length, ch));
  while(ch > 0 && t[ch-1] !== " ") ch--;
  return ch;
}
function plPlay(i, from = 0){
  const sc = plScript(); if(i >= sc.length || i < 0){ i = 0; from = 0; }
  const [sp, text] = sc[i];
  if(from >= text.trim().length - 1) from = 0;
  PL.i = i; PL.playing = true; PL.from = from; PL.ch = -1; PL.at = 0;
  PL.start = performance.now() - (from / text.length) * (plDurs()[i] - 0.35) * 1000;
  stopSpeech();
  speak(text.slice(from), {voice: sp==="A"?0:1, pitch: sp==="A"?1:1.2, volume: P.mute?0:1,
    onboundary: c => { PL.ch = from + c; }, onend: () => setTimeout(plEnded, 350)});
  plTick();
  const el = S.tab === "reading" && document.querySelector(`.passage [data-line="${i}"]`);
  if(el){ const r = el.getBoundingClientRect(); if(r.top < 110 || r.bottom > innerHeight - 20) el.scrollIntoView({behavior:"smooth", block:"center"}); }
}
function plResume(){ plPlay(PL.i, PL.at); }
function plRestartHere(){ if(PL.playing) plPlay(PL.i, plHere()); else plUI(); }
function plEnded(){
  if(!PL.playing) return;
  const n = plScript().length;
  if(PL.repeat==="one") return plPlay(PL.i);
  if(PL.i + 1 < n) return plPlay(PL.i + 1);
  if(PL.repeat==="all") return plPlay(0);
  PL.playing = false; PL.i = n - 1; cancelAnimationFrame(PL.raf);
  plUI(); $("#plfill").style.width = "100%"; $("#plknob").style.left = "100%";
  const d = plDurs(), total = d.reduce((a,b)=>a+b,0); $("#pltime").textContent = fmt(total) + " / " + fmt(total);
  PL.i = 0; // bấm ▶ lần nữa sẽ phát lại từ đầu
}
function plPause(){ if(!PL.playing) return; PL.at = plHere(); PL.playing = false; cancelAnimationFrame(PL.raf); stopSpeech(); plUI(); }
function plGo(i){ const n = plScript().length; i = Math.max(0, Math.min(n-1, i)); PL.at = 0; if(PL.playing) plPlay(i); else { PL.i = i; plUI(); } }
function plSeek(clientX){
  const r = $("#plprog").getBoundingClientRect(), f = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  const d = plDurs(), total = d.reduce((a,b)=>a+b,0); let acc = 0, i = 0;
  for(; i < d.length; i++){ if(acc + d[i] > f * total) break; acc += d[i]; }
  plGo(Math.min(i, d.length-1));
}
function plHover(clientX){
  const r = $("#plprog").getBoundingClientRect(), f = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  const d = plDurs(), total = d.reduce((a,b)=>a+b,0), tip = $("#pltip");
  tip.textContent = fmt(f * total); tip.style.left = (f * 100) + "%";
}

function vWriting(u){
  const C = curSet(u, "writing"), w = C.x, txt = P.drafts[draftKey(u, C.i)]||"", n = wordCount(txt);
  const checks = w.type==="Task 1"
    ? ["Có câu mở bài paraphrase đề","Có đoạn Overview nêu xu hướng/điểm chính (không nêu số)","Số liệu chính xác, có so sánh","Dùng đúng thì (năm đã qua → past simple)","Đủ 150 từ"]
    : ["Trả lời đúng và đủ mọi phần của câu hỏi","Mở bài nêu rõ quan điểm hoặc nội dung bài","Mỗi đoạn thân bài có 1 ý chính + ví dụ","Dùng từ nối: Firstly, However, In addition, In conclusion","Đọc lại sửa chính tả, chia động từ, dấu câu","Đủ 250 từ"];
  return setPicker(u, "writing") + `<div class="stack">
    <div class="sheet stack"><span class="eyebrow">Writing ${esc(w.type)} · ${esc(w.time)} · tối thiểu ${w.min} từ</span>
      <p class="task">${esc(w.prompt)}</p>
      ${w.charts?`<div class="charts">${w.charts.map(chartHTML).join("")}</div>`:""}
      ${w.note?`<p class="muted small">${esc(w.note)}</p>`:""}
      <details><summary>Dàn ý gợi ý</summary><ol>${w.plan.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></details></div>
    <div class="sheet stack"><div class="row" style="justify-content:space-between"><label for="draft"><h3>Bài viết của bạn</h3></label>
      <span class="wc ${n>=w.min?'ok':'low'}" id="wc">${n} / ${w.min} từ</span></div>
      <textarea id="draft" placeholder="Bắt đầu viết ở đây. Bài được tự động lưu trên trình duyệt này.">${esc(txt)}</textarea>
      <div class="check"><span class="eyebrow">Tự kiểm tra trước khi nộp</span>
        ${checks.map((c,i)=>`<label><input type="checkbox" id="ck${u.id}-${C.i}-${i}"> ${c}</label>`).join("")}</div></div>
    ${aiGradeHTML(u, C, n)}
    <details class="sheet"><summary>Xem bài mẫu (khoảng band 6)</summary><div class="model">${esc(w.model)}</div>
      <p class="muted small" style="margin-top:8px">${wordCount(w.model)} từ. Hãy viết bài của bạn trước, sau đó so sánh cách chia đoạn và từ nối.</p></details></div>`;
}

/* ============ CHẤM WRITING BẰNG AI (Cloudflare Worker, xem worker/README.md) ============ */
const GUIDE_URL = "https://github.com/hoanghuypm09/Hiking-IELTS/blob/main/worker/README.md";
function graderUrl(){ return (P.graderUrl || (window.HIKING_CONFIG||{}).graderUrl || "").trim(); }
function chartText(c){
  if(c.type==="pie") return c.title+": "+c.data.map(([k,v])=>`${k} ${v}%`).join(", ");
  if(c.type==="bar"||c.type==="line") return c.title+" ("+c.cats.join(", ")+"): "+c.series.map(([k,v])=>`${k} = ${v.join(", ")}`).join("; ");
  if(c.type==="table") return c.title+"\n"+[c.head, ...c.rows].map(r=>r.join(" | ")).join("\n");
  if(c.type==="process") return c.title+": "+c.steps.map((x,i)=>`${i+1}. ${x}`).join(" ");
  return c.title||"";
}
function modelName(m){
  if(/^gemini-/.test(m)) return "Gemini " + m.slice(7).replace(/-/g," ").replace(/\b\w/g, c=>c.toUpperCase());
  if(/llama-3\.3-70b/.test(m)) return "Llama 3.3 70B (Cloudflare)";
  return m;
}
function gradeResultHTML(g){
  const r = g.result, col = b => b>=6.5?"ok":b>=5?"mid":"low";
  return `<div class="grade">
    <div class="grade-top"><div class="grade-overall ${col(r.overall)}"><span>${r.overall.toFixed(1)}</span><small>Band ước lượng</small></div>
      <div class="grade-crit">${r.criteria.map(c=>`<div><div class="row" style="justify-content:space-between"><b>${esc(c.name)}</b><span class="gband ${col(c.band)}">${c.band.toFixed(1)}</span></div><p class="small">${esc(c.comment)}</p></div>`).join("")}</div></div>
    ${r.strengths.length?`<h4>👍 Điểm tốt</h4><ul>${r.strengths.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
    ${r.improvements.length?`<h4>🎯 Cần cải thiện</h4><ul>${r.improvements.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
    ${r.corrections.length?`<h4>✏️ Sửa lỗi</h4><div class="fixes">${r.corrections.map(c=>`<div class="fixrow"><s>${esc(c.original)}</s><span>→ <b>${esc(c.better)}</b></span><span class="muted small">${esc(c.why)}</span></div>`).join("")}</div>`:""}
    <p class="muted small">${r.model?`Chấm bởi ${esc(modelName(r.model))} · `:""}${new Date(g.at).toLocaleString("vi-VN")} · bài ${g.words} từ${g.words!==g.now?` (bài hiện tại ${g.now} từ, hãy chấm lại nếu đã sửa)`:""}. Đây là điểm do AI ước lượng để tham khảo, không phải điểm thi chính thức.</p></div>`;
}
function aiGradeHTML(u, C, n){
  const url = graderUrl(), key = draftKey(u, C.i), g = P.grades[key];
  if(!url) return `<div class="sheet stack"><span class="eyebrow">🤖 Chấm bài bằng AI</span>
    <p class="small">Chưa kết nối máy chấm. Làm theo <a href="${GUIDE_URL}" target="_blank" rel="noopener">hướng dẫn cài đặt (khoảng 10 phút, miễn phí)</a>, rồi dán địa chỉ máy chấm vào đây:</p>
    <div class="row"><input id="graderurl" class="urlin" placeholder="https://hiking-ielts-grader.ten-ban.workers.dev" autocomplete="off" spellcheck="false"><button class="btn primary" type="button" data-act="gradersave">Lưu</button></div></div>`;
  return `<div class="sheet stack"><div class="row" style="justify-content:space-between"><span class="eyebrow">🤖 Chấm bài bằng AI</span><button class="btn small" type="button" data-act="graderedit" title="${esc(url)}">Đổi máy chấm</button></div>
    <p class="muted small">AI đọc bài của bạn và cho band ước lượng theo 4 tiêu chí IELTS, kèm nhận xét và sửa lỗi. Cần ít nhất 50 từ. Máy chấm tự luân phiên giữa Gemini và Cloudflare khi một bên hết lượt miễn phí.</p>
    <div class="row"><button class="btn primary" type="button" data-act="aigrade" ${S.grading?"disabled":""}>${S.grading?"⏳ Đang chấm… (khoảng 10–30 giây)":g?"Chấm lại bài này":"Chấm bài này"}</button></div>
    ${S.gradeErr?`<p class="small" style="color:var(--bad)">${esc(S.gradeErr)}</p>`:""}
    ${g ? gradeResultHTML(Object.assign({}, g, {now:n})) : ""}</div>`;
}
async function aiGrade(){
  const u = UNITS[S.u], C = curSet(u, "writing"), w = C.x, key = draftKey(u, C.i);
  const essay = ($("#draft") ? $("#draft").value : P.drafts[key]) || "", words = wordCount(essay);
  if(words < 50){ toast("Hãy viết ít nhất 50 từ trước khi chấm."); return; }
  P.drafts[key] = essay; save();
  S.grading = true; S.gradeErr = ""; render();
  try{
    const res = await fetch(graderUrl(), {method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({task:w.type, prompt:w.prompt, data:(w.charts||[]).map(chartText).join("\n"), essay})});
    const d = await res.json().catch(()=>({error:"Máy chấm trả về dữ liệu không đọc được."}));
    if(!res.ok || d.error) throw new Error(d.error || ("Lỗi " + res.status));
    P.grades[key] = {at: Date.now(), words, result: d}; save();
  }catch(e){
    S.gradeErr = /Failed to fetch|NetworkError|Load failed/i.test(e.message) ? "Không kết nối được máy chấm. Kiểm tra lại địa chỉ hoặc mạng." : e.message;
  }
  S.grading = false;
  if(S.view==="unit" && S.tab==="writing") render();
}

function vSpeaking(u){
  const C = curSet(u, "speaking"), s = C.x, line = q => `<div class="qline"><span>${esc(q)}</span><button class="btn small" type="button" data-act="say" data-text="${esc(q)}" aria-label="Nghe câu hỏi">🔊</button></div>`;
  const sample = (q,a) => `<details><summary>Câu trả lời mẫu: “${esc(q)}”</summary><p>${esc(a)}</p><button class="btn small" type="button" data-act="say" data-text="${esc(a)}" style="margin-top:8px">🔊 Nghe mẫu</button></details>`;
  const tip = s.tip || u.speaking.tip, phr = s.phrases || u.speaking.phrases;
  return setPicker(u, "speaking") + `<div class="stack">
    <div class="sheet"><span class="eyebrow">Mẹo của unit</span><p style="margin-top:6px">${esc(tip)}</p></div>
    <div class="sheet part"><span class="eyebrow">Part 1 · 4–5 phút · câu hỏi về bản thân</span>${s.p1.map(line).join("")}${sample(s.p1sample.q, s.p1sample.a)}</div>
    <div class="sheet part"><span class="eyebrow">Part 2 · 1 phút chuẩn bị · nói 1–2 phút</span>
      <div class="cue"><h3>${esc(s.cue.t)}</h3><p>You should say:</p><ul>${s.cue.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p>${esc(s.cue.end)}</p></div>
      <div class="row"><span class="timer" id="timer">1:00</span><button class="btn primary" type="button" data-act="prep">Chuẩn bị (1 phút)</button><button class="btn" type="button" data-act="talk">Bắt đầu nói (2 phút)</button><button class="btn" type="button" data-act="tstop">Dừng</button></div>
      ${s.notes?`<details><summary>Ghi chú mẫu trong 1 phút</summary><p class="notes">${esc(s.notes)}</p></details>`:""}
      <details><summary>Bài nói mẫu</summary><p>${esc(s.p2sample)}</p><button class="btn small" type="button" data-act="say" data-text="${esc(s.p2sample)}" style="margin-top:8px">🔊 Nghe mẫu</button></details></div>
    <div class="sheet part"><span class="eyebrow">Part 3 · 4–5 phút · thảo luận</span>${s.p3.map(line).join("")}${s.p3sample?sample(s.p3sample.q, s.p3sample.a):""}</div>
    <div class="sheet part"><span class="eyebrow">Cụm từ hữu ích</span><div class="phr">${phr.map(p=>`<span>${esc(p)}</span>`).join("")}</div></div>
    <div class="sheet part"><div class="row" style="justify-content:space-between"><span class="eyebrow">🎲 Luyện câu hỏi ngẫu nhiên</span><span class="muted small">từ tất cả các unit</span></div>
      ${S.randq ? `<div class="qline"><span><span class="tick mine">${esc(S.randq.tag)}</span> ${esc(S.randq.q)}</span><button class="btn small" type="button" data-act="say" data-text="${esc(S.randq.q)}" aria-label="Nghe câu hỏi">🔊</button></div>` : `<p class="muted small">Bấm nút để nhận một câu hỏi Part 1 hoặc Part 3 bất kỳ, rồi trả lời to trong khoảng 30 giây đến 1 phút.</p>`}
      <div class="row"><button class="btn primary" type="button" data-act="randq" data-p="1">Câu Part 1</button><button class="btn" type="button" data-act="randq" data-p="3">Câu Part 3</button><button class="btn" type="button" data-act="randq" data-p="2">Đề Part 2</button></div></div>
    <div class="row"><button class="btn ${P.spoke[u.id]?'':'primary'}" type="button" data-act="spoke">${P.spoke[u.id]?'Bỏ đánh dấu':'✓ Tôi đã luyện nói xong unit này'}</button></div></div>`;
}
function runTimer(sec){
  clearInterval(S.timer); let t = sec; const el = $("#timer");
  const show = () => { if(el) el.textContent = Math.floor(t/60)+":"+String(t%60).padStart(2,"0"); };
  show(); S.timer = setInterval(() => { t--; show(); if(t<=0){ clearInterval(S.timer); toast(sec===60?"Hết giờ chuẩn bị. Bắt đầu nói!":"Hết 2 phút. Bạn đã hoàn thành Part 2."); } }, 1000);
}

/* ============ REVIEW (after every two units, like the book) ============ */
function renderReview(){
  const a = UNITS[S.r*2], b = UNITS[S.r*2+1];
  if(!S.rq || S.rq.r !== S.r){
    const vocab = vocabQuestions(a.vocab.concat(b.vocab), 8);
    const gram = shuffle(gPool(a)).slice(0,4).concat(shuffle(gPool(b)).slice(0,4)).map(q => q.t==="gap" ? q : shuffleOpts(q));
    S.rq = {r:S.r, items:[{t:"head",text:"Phần 1: Từ vựng Unit "+(S.r*2+1)+"–"+(S.r*2+2)}, ...vocab, {t:"head",text:"Phần 2: Ngữ pháp · "+a.grammar.title+" / "+b.grammar.title}, ...gram]};
  }
  return `<span class="eyebrow">Vocabulary and grammar review</span><h1>Ôn tập Unit ${S.r*2+1}–${S.r*2+2}</h1>
    <p class="muted" style="margin:8px 0 18px;max-width:62ch">Câu hỏi được trộn ngẫu nhiên từ hai unit ${esc(a.title)} và ${esc(b.title)}. Bấm “Đổi đề” để làm một bộ câu hỏi khác.</p>
    <div class="sheet"><div class="row" style="justify-content:flex-end;margin-bottom:6px"><button class="btn small" type="button" data-act="newrq">Đổi đề</button></div>${quizHTML("review:"+S.r, S.rq.items)}</div>`;
}

/* ============ EVENTS ============ */
function render(){
  stopSpeech(); clearInterval(S.timer); renderRail();
  PL.playing = false; cancelAnimationFrame(PL.raf);
  $("#main").innerHTML = S.view==="home" ? renderHome() : S.view==="review" ? renderReview() : renderUnit();
  plUI(); wlFilter();
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if(!b) return;
  const a = b.dataset.act, u = UNITS[S.u];
  if(a==="home"){ S.view="home"; render(); }
  else if(a==="unit"){ S.vsearch=""; S.myedit=null; S.typ=null; S.typedOk=0; S.si={}; S.randq=null; S.view="unit"; S.u=+b.dataset.u; S.tab="vocab"; S.vmode="word"; S.card=0; S.flipped=false; S.vq=null; render(); window.scrollTo(0,0); }
  else if(a==="review"){ S.view="review"; S.r=+b.dataset.r; S.rq=null; render(); window.scrollTo(0,0); }
  else if(a==="newrq"){ S.rq=null; render(); }
  else if(a==="tab"){ S.tab=b.dataset.tab; S.gradeErr=""; S.myedit=null; render(); }
  else if(a==="flip"){ if(b.dataset.swiped){ delete b.dataset.swiped; return; } S.flipped=!S.flipped; b.classList.toggle("flipped", S.flipped); }
  else if(a==="goto"){ S.onlyNew=false; S.card=+b.dataset.i; S.flipped=false; render(); window.scrollTo({top:0,behavior:"smooth"}); }
  else if(a==="vmode"){ S.typ=null; S.vmode=b.dataset.m; S.card=0; S.flipped=false; render(); }
  else if(a==="onlynew"){ S.onlyNew=b.checked; S.card=0; S.flipped=false; render(); }
  else if(a==="known"){ const k=b.dataset.k; if(P.known[k]) delete P.known[k]; else { P.known[k]=true; if(!S.onlyNew) S.card++; S.flipped=false; } save(); render(); }
  else if(a==="newvq"){ S.vq=null; render(); }
  else if(a==="gtype"){ gState(u).type=b.dataset.k; gState(u, true); render(); }
  else if(a==="gshuffle"){ gState(u, true); render(); toast("Đã trộn bộ câu mới."); }
  else if(a==="gpage"){ const st=gState(u); st.page=(st.page + +b.dataset.d + st.pages) % st.pages; if(st.page===0 && +b.dataset.d>0) st.order=shuffle(st.order); st.items=null; render(); const q=document.querySelector(".gnav"); if(q) q.scrollIntoView({block:"nearest"}); }
  else if(a==="set"){ S.si[b.dataset.k]=+b.dataset.i; S.gradeErr=""; S.myedit=null; render(); }
  else if(a==="mynew"){ S.myedit={id:null}; render(); }
  else if(a==="myedit"){ S.myedit={id:b.dataset.id}; render(); }
  else if(a==="mycancel"){ S.myedit=null; render(); }
  else if(a==="mydel"){ if(!confirm("Xoá bài này khỏi trình duyệt?")) return; P.myread[u.id]=myReads(u).filter(x=>x.id!==b.dataset.id); delete P.scores[`${u.id}:reading:my:${b.dataset.id}`]; delete P.drafts[`${u.id}:reading:my:${b.dataset.id}`]; save(); S.myedit=null; S.si.reading=0; PL.key=""; render(); toast("Đã xoá bài."); }
  else if(a==="setrand"){ const k=b.dataset.k, n=sets(u,k).length, c=curSet(u,k).i; S.si[k]=(c+1+Math.floor(Math.random()*(n-1)))%n; render(); }
  else if(a==="randq"){ const pt=b.dataset.p, pool=[];
    UNITS.forEach((uu,ui)=>sets(uu,"speaking").forEach(sp=>{
      if(pt==="2") pool.push({q:sp.cue.t+" You should say: "+sp.cue.pts.join("; ")+"; "+sp.cue.end, tag:"Part 2 · Unit "+(ui+1)});
      else (pt==="1"?sp.p1:sp.p3).forEach(q=>pool.push({q, tag:"Part "+pt+" · Unit "+(ui+1)})); }));
    let q; do{ q=pool[Math.floor(Math.random()*pool.length)]; }while(pool.length>1 && S.randq && q.q===S.randq.q);
    S.randq=q; render(); stopSpeech(); speak(q.q); }
  else if(a==="typstart"){ typStart(u, vocabPool(u).mode, b.dataset.scope); render(); const i=$("#typin"); if(i) i.focus(); }
  else if(a==="typretry"){ const T=S.typ; typStart(u, T.mode, T.scope, T.wrong.map(x=>{ const y=Object.assign({},x); delete y._ans; return y; })); render(); $("#typin").focus(); }
  else if(a==="typquit"){ S.typ=null; render(); }
  else if(a==="typhint"){ S.typ.hint++; render(); $("#typin").focus(); }
  else if(a==="typskip"){ typCheck(""); render(); }
  else if(a==="vnew"){ S.edit={u:u.id, m:vocabPool(u).mode, id:"new"}; render(); focusEditor(); }
  else if(a==="vedit"){ S.edit={u:u.id, m:vocabPool(u).mode, id:b.dataset.id}; render(); focusEditor(); }
  else if(a==="vcancel"){ S.edit=null; render(); }
  else if(a==="vdel"){ const V=vocabPool(u), x=V.list.find(y=>y._id===S.edit.id);
    if(!x) return;
    if(!b.dataset.sure){ b.dataset.sure="1"; b.textContent="Bấm lần nữa để xác nhận"; b.classList.add("danger"); return; }
    if(x._custom){ const c=P.custom[u.id+":"+V.mode]; c.splice(c.findIndex(y=>y._id===x._id),1); }
    else P.hidden[u.id+":"+V.mode+":"+x._id]=true;
    vocabChanged(); }
  else if(a==="vreset"){ delete P.edits[u.id+":"+vocabPool(u).mode+":"+S.edit.id]; vocabChanged(); }
  else if(a==="vunhide"){ const pre=u.id+":"+vocabPool(u).mode+":"; Object.keys(P.hidden).filter(k=>k.startsWith(pre)).forEach(k=>delete P.hidden[k]); vocabChanged(); }
  else if(a==="vexport"){ const blob=new Blob([JSON.stringify({app:"hiking-ielts", custom:P.custom, edits:P.edits, hidden:P.hidden}, null, 1)], {type:"application/json"});
    const l=document.createElement("a"); l.href=URL.createObjectURL(blob); l.download="tu-vung-cua-toi.json"; l.click(); setTimeout(()=>URL.revokeObjectURL(l.href), 1000); }
  else if(a==="say"){ stopSpeech(); speak(b.dataset.text); }
  else if(a==="pltoggle"){ PL.playing ? plPause() : plResume(); }
  else if(a==="plprev"){ plGo(PL.i - 1); }
  else if(a==="plnext"){ plGo(PL.i + 1); }
  else if(a==="plline"){ plPlay(+b.dataset.i); }
  else if(a==="plrepeat"){ PL.repeat = {off:"all", all:"one", one:"off"}[PL.repeat]; plUI(); toast($("#plrep").getAttribute("aria-label")); }
  else if(a==="plmute"){ P.mute = !P.mute; save(); b.innerHTML = P.mute ? ICON.mute : ICON.vol; plRestartHere(); }
  else if(a==="plscript"){ const d=$("#scriptbox"); d.open = true; d.scrollIntoView({behavior:"smooth", block:"start"}); }
  else if(a==="prep"){ runTimer(60); }
  else if(a==="talk"){ runTimer(120); }
  else if(a==="tstop"){ clearInterval(S.timer); }
  else if(a==="spoke"){ P.spoke[u.id]=!P.spoke[u.id]; save(); render(); }
  else if(a==="voice"){ toggleVoicePanel(); }
  else if(a==="voiceclose"){ toggleVoicePanel(false); }
  else if(a==="accent"){ P.accent=b.dataset.a; P.voice=""; save(); loadVoices(); }
  else if(a==="voiceauto"){ P.voice=""; save(); loadVoices(); stopSpeech(); speak("Hello! This is the voice that will read your lessons."); }
  else if(a==="voicetest"){ stopSpeech(); speak("Hello! This is the voice that will read your lessons. I hope it sounds natural.", {rate:P.rate}); }
  else if(a==="aigrade"){ if(!S.grading) aiGrade(); }
  else if(a==="gradersave"){ const v=$("#graderurl").value.trim(); if(!/^https:\/\/\S+$/.test(v)){ toast("Địa chỉ phải bắt đầu bằng https://"); return; } P.graderUrl=v; save(); render(); }
  else if(a==="graderedit"){ P.graderUrl=""; if(window.HIKING_CONFIG) window.HIKING_CONFIG.graderUrl=""; save(); render(); }
});

/* Quẹt thẻ: trái = thẻ sau, phải = thẻ trước (chuột, cảm ứng và phím mũi tên) */
/* Gõ lại từ trên thẻ: đúng thì tự qua thẻ mới */
let cardTypeLock = false;
function cardTypeCheck(input){
  const f = input.form, w = f.dataset.w, v = normT(input.value);
  if(cardTypeLock || !v) return;
  if(typAnswers(w).includes(v)){
    cardTypeLock = true; input.classList.remove("wrong"); input.classList.add("right"); input.readOnly = true;
    S.typedOk = (S.typedOk||0) + 1; $("#cardmsg").textContent = "✓ Chính xác! Sang thẻ mới…";
    // Đợi đọc xong từ rồi mới qua thẻ; nếu máy không đọc được thì vẫn qua sau vài giây
    let moved = false;
    const go = () => { if(moved) return; moved = true; clearTimeout(t); cardTypeLock = false; nextCard(1); const i = $("#cardin"); if(i) i.focus({preventScroll:true}); };
    const t = setTimeout(go, Math.min(5000, 1500 + w.length * 100));
    stopSpeech();
    if(!speak(w, {onend: () => setTimeout(go, 300)})) setTimeout(go, 900);
  } else {
    S.typedOk = 0; input.classList.add("wrong");
    const msg = $("#cardmsg"); msg.textContent = S.flipped ? "Chưa đúng, nhìn mặt trước của thẻ và thử lại." : "Chưa đúng, thử lại nhé. Bấm vào thẻ để xem nghĩa nếu cần.";
  }
}
function nextCard(d){ S.card += d; S.flipped = false; S.enter = d > 0 ? "right" : "left"; render(); S.enter = ""; }
let plDrag = false;
document.addEventListener("pointerdown", e => { const pr = e.target.closest("#plprog"); if(!pr) return; plDrag = true; pr.classList.add("drag"); try{ pr.setPointerCapture(e.pointerId); }catch(_){} plSeek(e.clientX); });
document.addEventListener("pointermove", e => { const pr = e.target.closest("#plprog"); if(pr || plDrag) plHover(e.clientX); });
document.addEventListener("pointerup", e => { if(plDrag){ plDrag = false; const pr = $("#plprog"); if(pr) pr.classList.remove("drag"); plSeek(e.clientX); } });
let SW = null;
document.addEventListener("pointerdown", e => {
  const c = e.target.closest(".card"); if(!c || e.button > 0) return;
  SW = {c, id:e.pointerId, x:e.clientX, y:e.clientY, dx:0, drag:false};
});
document.addEventListener("pointermove", e => {
  if(!SW || e.pointerId !== SW.id) return;
  const dx = e.clientX - SW.x, dy = e.clientY - SW.y;
  if(!SW.drag && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)){ SW.drag = true; SW.c.classList.add("dragging"); try{ SW.c.setPointerCapture(e.pointerId); }catch(_){} }
  if(SW.drag){ SW.dx = dx; SW.c.style.transform = `translateX(${dx}px) rotate(${dx/25}deg)`; }
});
function endSwipe(e){
  if(!SW || e.pointerId !== SW.id) return;
  const s = SW; SW = null; if(!s.drag) return;
  s.c.dataset.swiped = "1"; setTimeout(() => delete s.c.dataset.swiped, 50);
  s.c.classList.remove("dragging");
  if(Math.abs(s.dx) > Math.min(90, s.c.offsetWidth/4)){
    const d = s.dx < 0 ? 1 : -1;
    s.c.style.transform = `translateX(${-d*120}%) rotate(${-d*12}deg)`; s.c.style.opacity = "0";
    setTimeout(() => nextCard(d), 160);
  } else s.c.style.transform = "";
}
document.addEventListener("pointerup", endSwipe);
document.addEventListener("pointercancel", endSwipe);
document.addEventListener("keydown", e => {
  if($("#player") && !/INPUT|TEXTAREA|SELECT|BUTTON/.test(document.activeElement.tagName)){
    if(e.key===" "){ e.preventDefault(); PL.playing ? plPause() : plResume(); return; }
    if(e.key==="ArrowRight"){ e.preventDefault(); plGo(PL.i + 1); return; }
    if(e.key==="ArrowLeft"){ e.preventDefault(); plGo(PL.i - 1); return; }
  }
  if(S.view!=="unit" || S.tab!=="vocab" || !$(".card") || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
  if(e.key==="ArrowRight") nextCard(1); else if(e.key==="ArrowLeft") nextCard(-1); else return;
  e.preventDefault();
});
function focusEditor(){ const f=$("#vedit"); if(f){ f.scrollIntoView({behavior:"smooth", block:"center"}); f.querySelector("input").focus({preventScroll:true}); } }
function vocabChanged(){ S.edit=null; S.vq=null; S.flipped=false; save(); render(); }
document.addEventListener("submit", e => {
  if(e.target.id === "cardtype"){ e.preventDefault(); cardTypeCheck($("#cardin")); return; }
  if(e.target.id === "myedit"){ e.preventDefault(); mySave(e.target); return; }
  if(e.target.id === "typ"){ e.preventDefault();
    if(S.typ.res) return typNext();
    const v = $("#typin").value; if(!v.trim()) return;
    typCheck(v); render(); const btn=$("#typ button"); if(btn) btn.focus(); return;
  }
  if(e.target.id === "vedit"){ e.preventDefault();
    const u = UNITS[S.u], m = S.edit.m, d = {}, fd = new FormData(e.target);
    ["w","vi","p","ipa","ex","g"].forEach(k => d[k] = (fd.get(k)||"").trim());
    if(!d.w || !d.vi) return;
    if(!d.g) d.g = "Từ của tôi";
    if(S.edit.id === "new"){ d._id = "c:"+Date.now().toString(36); (P.custom[u.id+":"+m] = P.custom[u.id+":"+m] || []).push(d); }
    else if(S.edit.id.startsWith("c:")){ const c = P.custom[u.id+":"+m], i = c.findIndex(y=>y._id===S.edit.id); c[i] = Object.assign(c[i], d); }
    else P.edits[u.id+":"+m+":"+S.edit.id] = d;
    vocabChanged(); return;
  }
  const f = e.target.closest("form.quiz"); if(!f) return; e.preventDefault();
  const [got, total] = gradeQuiz(f);
  f.querySelector(".qscore").innerHTML = scoreHTML(got, total);
  if(!/:(vocab|np|col)(quiz|gap)$/.test(f.dataset.id)) recordScore(f.dataset.id, got/total);
});
document.addEventListener("reset", e => { const f=e.target.closest("form.quiz"); if(!f) return;
  setTimeout(()=>{ f.querySelectorAll(".opt").forEach(o=>o.classList.remove("right","wrong")); f.querySelectorAll(".gap,.pick-sel").forEach(o=>o.classList.remove("right","wrong"));
    f.querySelectorAll(".fix").forEach(x=>{x.textContent="";x.className="fix";}); f.querySelectorAll(".explain").forEach(x=>x.hidden=true); f.querySelector(".qscore").innerHTML=""; }); });

document.addEventListener("change", e => {
  if(e.target.id === "voicesel"){ P.voice = e.target.value; save(); stopSpeech(); speak("Hello! This is the voice that will read your lessons.", {rate:P.rate}); return; }
  if(e.target.id === "raterange"){ P.rate = +e.target.value; save(); return; }
  if(e.target.id !== "vimport" || !e.target.files[0]) return;
  e.target.files[0].text().then(t => { const d = JSON.parse(t);
    if(d.app !== "hiking-ielts") throw 0;
    ["custom","edits","hidden"].forEach(k => P[k] = Object.assign(P[k], d[k]||{}));
    S.note = "Đã khôi phục từ vựng từ file sao lưu."; vocabChanged();
  }).catch(() => { S.note = "File không hợp lệ, hãy chọn file tu-vung-cua-toi.json."; render(); });
});

let draftT;
document.addEventListener("input", e => {
  if(e.target.id === "cardin"){ e.target.classList.remove("wrong"); return; }
  if(e.target.id === "mynote"){ P.drafts[e.target.dataset.k] = e.target.value; save(); return; }
  if(e.target.id === "vsearch"){ S.vsearch = e.target.value; wlFilter(); return; }
  if(e.target.id === "raterange"){ const v=$("#ratev"); if(v) v.textContent = e.target.value; return; }
  if(e.target.id === "rate"){ plRestartHere(); return; }
  if(e.target.id !== "draft") return;
  const u = UNITS[S.u], n = wordCount(e.target.value), wc = $("#wc");
  const min = curSet(u, "writing").x.min;
  wc.textContent = `${n} / ${min} từ`; wc.className = "wc " + (n>=min?"ok":"low");
  const key = draftKey(u, curSet(u, "writing").i);
  clearTimeout(draftT); draftT = setTimeout(()=>{ P.drafts[key]=e.target.value; save(); renderRail(); }, 500);
});

render();

/* ============ ĐỒNG HỒ Ở HEADER ============ */
const CLK = {
  dawn:  ["Bình minh", '<svg viewBox="0 0 24 24"><path d="M12 3v3M4.9 8.9l1.4 1.4M19.1 8.9l-1.4 1.4M2 17h3M19 17h3M7 17a5 5 0 0 1 10 0"/><path d="M2 21h20"/></svg>'],
  morn:  ["Buổi sáng", '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>'],
  noon:  ["Buổi trưa", '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg>'],
  aft:   ["Buổi chiều", '<svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="3.5"/><path d="M9 2.5v1.5M2.5 9H4M4.4 4.4l1 1M13.6 4.4l-1 1"/><path d="M8 20h9.5a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6 1.5A2.8 2.8 0 0 0 8 20z"/></svg>'],
  dusk:  ["Hoàng hôn", '<svg viewBox="0 0 24 24"><path d="M12 10V7M9.5 5.5 12 3l2.5 2.5M4.9 10.9l1.4 1.4M19.1 10.9l-1.4 1.4M2 18h3M19 18h3M7 18a5 5 0 0 1 10 0"/><path d="M2 21.5h20"/></svg>'],
  night: ["Buổi tối", '<svg viewBox="0 0 24 24"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/><path d="M17 3.5v3M15.5 5h3"/></svg>']
};
function clkPeriod(h, m){ const t = h + m/60; return t < 4.5 ? "night" : t < 6.5 ? "dawn" : t < 11 ? "morn" : t < 13.5 ? "noon" : t < 17.5 ? "aft" : t < 19 ? "dusk" : "night"; }
function clockTick(){
  const el = document.getElementById("clock"); if(!el) return;
  const d = new Date(), h = d.getHours(), m = d.getMinutes(), pad = n => String(n).padStart(2,"0");
  const per = clkPeriod(h, m), [name, svg] = CLK[per];
  $("#clktime").textContent = `${pad(h)}:${pad(m)}:${pad(d.getSeconds())}`;
  $("#clkday").textContent = `${name} · ${["CN","T2","T3","T4","T5","T6","T7"][d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth()+1)}`;
  if(el.dataset.p !== per){ el.dataset.p = per; $("#clkic").innerHTML = svg; el.title = name; }
  setTimeout(clockTick, 1000 - d.getMilliseconds() + 5);
}
clockTick();

/* ============ CHẾ ĐỘ SÁNG / TỐI ============ */
const TH_KEY = "ielts45-theme", darkMQ = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
const TH_ICON = {
  light: '<svg viewBox="0 0 24 24"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/></svg>',
  dark: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>'
};
function curTheme(){ return document.documentElement.getAttribute("data-theme") || (darkMQ && darkMQ.matches ? "dark" : "light"); }
function themeUI(){
  const b = document.getElementById("themebtn"); if(!b) return;
  const t = curTheme(); // nút hiện chế độ sẽ chuyển sang
  b.querySelector(".th-ic").innerHTML = TH_ICON[t];
  b.querySelector(".th-tx").textContent = t === "dark" ? "Sáng" : "Tối";
  b.setAttribute("aria-pressed", t === "dark"); b.title = t === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối";
}
function setTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  try{ localStorage.setItem(TH_KEY, t); }catch(e){}
  themeUI();
}
if(darkMQ && darkMQ.addEventListener) darkMQ.addEventListener("change", themeUI);
document.addEventListener("click", e => { if(e.target.closest('[data-act="theme"]')) setTheme(curTheme() === "dark" ? "light" : "dark"); });
themeUI();
