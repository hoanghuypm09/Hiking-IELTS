/* Đăng nhập, tạo tài khoản, đổi mật khẩu (chạy trước app.js).
   Khi có máy chủ đồng bộ (Cloudflare Worker có KV, xem worker/README.md), tài khoản nằm trên máy chủ nên dùng
   được ở mọi trình duyệt, mọi máy; tiến độ học được đồng bộ bởi js/sync.js. Chưa có máy chủ thì tài khoản chỉ lưu
   trong trình duyệt này (localStorage). Mật khẩu không lưu dạng chữ: máy chủ lưu mã PBKDF2, trình duyệt giữ một
   mã SHA-256 có "muối" để vẫn đăng nhập được khi mất mạng.
   Mỗi tài khoản có tiến độ học riêng; admin dùng lại tiến độ cũ (xem KEY trong app.js). */
(function(){
  const BUILTIN = [
    {user: "admin", name: "Admin", sha256: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"}
  ];
  const KEY = "ielts45-auth", ACC_KEY = "ielts45-accounts";
  const root = document.documentElement;
  const store = remember => { try{ return remember ? localStorage : sessionStorage; }catch(e){ return null; } };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);

  // Accounts created or changed on this browser override the built-in ones with the same user name.
  const localAccounts = () => { try{ return JSON.parse(localStorage.getItem(ACC_KEY) || "[]"); }catch(e){ return []; } };
  const saveAccounts = list => { try{ localStorage.setItem(ACC_KEY, JSON.stringify(list)); return true; }catch(e){ return false; } };
  const findAccount = user => localAccounts().find(a => a.user === user) || BUILTIN.find(a => a.user === user);
  function putAccount(acc){ const list = localAccounts().filter(a => a.user !== acc.user); list.push(acc); return saveAccounts(list); }

  /* ---------- Sync server (Cloudflare Worker with KV, see worker/README.md) ----------
     Address comes from js/config.js (serverUrl, or graderUrl since it is the same Worker) or from the
     "Máy chủ đồng bộ" box on the login screen (saved on this browser only). */
  const SRV_KEY = "ielts45-server";
  const cleanUrl = u => String(u || "").trim().replace(/\/+$/, "");
  const cfg = () => window.HIKING_CONFIG || {};
  const savedServer = () => { try{ return localStorage.getItem(SRV_KEY) || ""; }catch(e){ return ""; } };
  const server = () => cleanUrl(cfg().serverUrl || savedServer() || cfg().graderUrl);
  // Calls the Worker. Resolves {ok, status, data}; rejects only when the server cannot be reached.
  async function api(path, opts = {}){
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), opts.timeout || 12000);
    try{
      const headers = {};
      if(opts.body !== undefined) headers["Content-Type"] = "application/json";
      if(opts.token) headers.Authorization = "Bearer " + opts.token;
      const res = await fetch(server() + path, {method: opts.method || (opts.body !== undefined ? "POST" : "GET"), headers,
        body: opts.body === undefined ? undefined : JSON.stringify(opts.body), signal: ctl.signal, keepalive: !!opts.keepalive});
      const data = await res.json().catch(() => ({}));
      return {ok: res.ok, status: res.status, data};
    }finally{ clearTimeout(t); }
  }
  // Keep a salted hash on this browser too, so the account still opens when the server cannot be reached.
  async function cacheAccount(user, name, pass){
    const salt = newSalt(), old = localAccounts().find(a => a.user === user) || {};
    putAccount(Object.assign({}, old, {user, name, salt, sha256: await sha256(salt + ":" + pass), changed: Date.now(), created: old.created || Date.now()}));
  }

  async function sha256(text){
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }
  const hashFor = (acc, pass) => sha256(acc.salt ? acc.salt + ":" + pass : pass);
  const newSalt = () => [...crypto.getRandomValues(new Uint8Array(12))].map(b => b.toString(16).padStart(2, "0")).join("");

  const session = () => { for(const s of [store(true), store(false)]){ try{ const v = s && JSON.parse(s.getItem(KEY) || "null"); if(v && v.user && (v.token || findAccount(v.user))) return Object.assign(v, {remember: s === store(true)}); }catch(e){} } return null; };
  const clearSession = () => { for(const s of [store(true), store(false)]){ try{ s && s.removeItem(KEY); }catch(e){} } };
  function writeSession(v, remember){ clearSession(); try{ const s = store(remember); s && s.setItem(KEY, JSON.stringify(v)); }catch(e){} }
  function startSession(user, remember, extra){
    writeSession(Object.assign({user, at: Date.now()}, extra || {}), remember);
    location.reload(); // reload so app.js loads this account's own progress
  }

  /* ---------- Header: user name + menu ---------- */
  function userChip(acc){
    const wrap = document.querySelector(".top .wrap"); if(!wrap || document.getElementById("usermenu")) return;
    const m = document.createElement("div");
    m.className = "usermenu"; m.id = "usermenu";
    m.innerHTML = `<button class="btn small userbtn" type="button" aria-haspopup="menu" aria-expanded="false"><span class="u-av">${esc(acc.name.trim()[0] || "?").toUpperCase()}</span><span class="u-name">${esc(acc.name)}</span><i class="caret" aria-hidden="true">▾</i></button>
      <div class="u-pop" role="menu" hidden><div class="u-who"><b>${esc(acc.name)}</b><span class="muted small">@${esc(acc.user)}</span><span class="small u-sync" id="syncst">${esc((window.HIKING_AUTH || {}).status || "")}</span></div>
        <button type="button" role="menuitem" data-u="pass">🔑 Đổi mật khẩu</button><button type="button" role="menuitem" data-u="out">↩ Đăng xuất</button></div>`;
    wrap.appendChild(m); root.classList.add("has-user");
    const btn = m.querySelector(".userbtn"), pop = m.querySelector(".u-pop");
    const open = v => { pop.hidden = !v; btn.setAttribute("aria-expanded", String(v));
      if(v){ pop.style.left = pop.style.right = ""; const r = pop.getBoundingClientRect(); if(r.left < 8){ pop.style.left = "0"; pop.style.right = "auto"; } } };
    btn.addEventListener("click", e => { e.stopPropagation(); open(pop.hidden); });
    document.addEventListener("click", e => { if(!m.contains(e.target)) open(false); });
    document.addEventListener("keydown", e => { if(e.key === "Escape") open(false); });
    pop.addEventListener("click", e => { const b = e.target.closest("[data-u]"); if(!b) return; open(false);
      if(b.dataset.u === "out"){ if(confirm("Đăng xuất khỏi Sổ Học IELTS?")){ clearSession(); location.reload(); } }
      else changePassword(acc.user); });
  }

  /* ---------- Shared form helpers ---------- */
  const field = (label, name, type = "text", extra = "") => type === "password"
    ? `<label>${label}<span class="pw"><input name="${name}" type="password" ${extra} required><button type="button" class="pw-eye" aria-label="Hiện mật khẩu" tabindex="-1">👁</button></span></label>`
    : `<label>${label}<input name="${name}" type="${type}" autocapitalize="off" spellcheck="false" ${extra} required></label>`;
  function wire(card){
    card.querySelectorAll(".pw-eye").forEach(b => b.addEventListener("click", () => { const i = b.previousElementSibling; i.type = i.type === "password" ? "text" : "password"; i.focus(); }));
  }
  function fail(card, msg){
    const err = card.querySelector(".login-err"); err.textContent = msg; err.hidden = false;
    card.classList.add("shake"); setTimeout(() => card.classList.remove("shake"), 400);
  }
  const checkPass = (p, p2) => p.length < 4 ? "Mật khẩu cần ít nhất 4 ký tự." : p !== p2 ? "Hai lần nhập mật khẩu không giống nhau." : "";

  /* ---------- Login / create account screen ---------- */
  function showLogin(mode){
    root.classList.add("locked");
    let box = document.getElementById("login");
    if(!box){ box = document.createElement("div"); box.className = "login"; box.id = "login"; document.body.appendChild(box); }
    const signup = mode === "signup";
    box.innerHTML = `<form class="login-card" autocomplete="on" novalidate>
      <div class="login-logo">📘</div><h1>Sổ Học IELTS</h1>
      <div class="seg login-tabs" role="tablist"><button type="button" role="tab" data-m="login" aria-selected="${!signup}">Đăng nhập</button><button type="button" role="tab" data-m="signup" aria-selected="${signup}">Tạo tài khoản</button></div>
      ${signup ? field("Tên hiển thị", "name", "text", 'autocomplete="nickname" maxlength="30" placeholder="Ví dụ: Huy"') : ""}
      ${field("Tài khoản", "user", "text", `autocomplete="username" maxlength="20" ${signup ? 'placeholder="chữ thường, số hoặc _"' : ""}`)}
      ${field("Mật khẩu", "pass", "password", `autocomplete="${signup ? "new-password" : "current-password"}"`)}
      ${signup ? field("Nhập lại mật khẩu", "pass2", "password", 'autocomplete="new-password"') : ""}
      <label class="login-rem"><input type="checkbox" name="rem" checked> Ghi nhớ đăng nhập trên máy này</label>
      <p class="login-err" role="alert" hidden></p>
      <button class="btn primary" type="submit">${signup ? "Tạo tài khoản" : "Đăng nhập"}</button>
</form>`;
    const f = box.querySelector("form"), card = f;
    wire(card);
    card.querySelectorAll("[data-m]").forEach(b => b.addEventListener("click", () => showLogin(b.dataset.m)));
    f.addEventListener("submit", async e => {
      e.preventDefault(); card.querySelector(".login-err").hidden = true;
      const user = f.user.value.trim().toLowerCase(), pass = f.pass.value, sub = f.querySelector("[type=submit]");
      const busy = on => { sub.disabled = on; sub.textContent = on ? "Đang kiểm tra…" : (signup ? "Tạo tài khoản" : "Đăng nhập"); };
      busy(true);
      try{ await (signup ? doSignup : doLogin)(f, card, user, pass); }
      catch(x){ fail(card, "Trình duyệt này không hỗ trợ đăng nhập (cần mở trang qua https)."); }
      finally{ busy(false); }
    });
    srvBox(box);
    setTimeout(() => (signup ? f.name : f.user).focus(), 50);
  }

  /* Server first; this browser's own list when no server is set, the server has no KV yet,
     or (for logging in) the server cannot be reached. */
  async function serverCall(path, body){
    if(!server()) return null;
    let r; try{ r = await api(path, {body}); }catch(e){ return {offline: true}; }
    return r.status === 501 ? null : r;
  }
  async function doSignup(f, card, user, pass){
    const name = f.name.value.trim();
    if(!name) return fail(card, "Hãy nhập tên hiển thị.");
    if(!/^[a-z0-9_]{3,20}$/.test(user)) return fail(card, "Tài khoản gồm 3–20 ký tự: chữ thường không dấu, số hoặc dấu _.");
    const bad = checkPass(pass, f.pass2.value); if(bad) return fail(card, bad);
    const r = await serverCall("/auth/signup", {user, name, pass});
    if(r && r.offline) return fail(card, "Không kết nối được máy chủ đồng bộ. Kiểm tra mạng rồi thử lại.");
    if(r){
      if(!r.ok) return fail(card, r.data.error || "Không tạo được tài khoản.");
      await cacheAccount(user, name, pass);
      return startSession(user, f.rem.checked, {name, token: r.data.token});
    }
    if(findAccount(user)) return fail(card, "Tài khoản này đã có. Hãy chọn tên khác.");
    const salt = newSalt();
    if(!putAccount({user, name, salt, sha256: await sha256(salt + ":" + pass), created: Date.now()})) return fail(card, "Không lưu được tài khoản (trình duyệt đang chặn lưu dữ liệu).");
    startSession(user, f.rem.checked, {name});
  }
  async function doLogin(f, card, user, pass){
    const wrong = () => { f.pass.value = ""; f.pass.focus(); return fail(card, "Sai tài khoản hoặc mật khẩu."); };
    const acc = findAccount(user), localOk = !!acc && await hashFor(acc, pass) === acc.sha256;
    const r = await serverCall("/auth/login", {user, pass});
    if(r && !r.offline){
      if(r.ok){ await cacheAccount(r.data.user, r.data.name, pass); return startSession(r.data.user, f.rem.checked, {name: r.data.name, token: r.data.token}); }
      if(r.data.code === "no_account" && localOk){
        // An account made on this browser before sync was set up: move it to the server now.
        const m = await serverCall("/auth/signup", {user, name: acc.name, pass});
        if(m && m.ok) return startSession(user, f.rem.checked, {name: acc.name, token: m.data.token});
        return fail(card, (m && m.data && m.data.error) || "Không chuyển được tài khoản lên máy chủ.");
      }
      if(r.data.code === "no_account" || r.data.code === "bad_password") return wrong();
      return fail(card, r.data.error || "Máy chủ đồng bộ gặp lỗi, hãy thử lại.");
    }
    if(!localOk) return r && r.offline ? fail(card, "Không kết nối được máy chủ đồng bộ, và tài khoản này chưa từng đăng nhập trên máy này.") : wrong();
    startSession(acc.user, f.rem.checked, {name: acc.name, offline: !!(r && r.offline)});
  }

  // "Máy chủ đồng bộ" box under the login form.
  function srvBox(box){
    const fixed = !!cleanUrl(cfg().serverUrl || cfg().graderUrl) && !savedServer();
    const d = document.createElement("details"); d.className = "login-srv";
    const cur = server();
    d.innerHTML = `<summary>${cur ? "☁ Đồng bộ qua máy chủ: " + esc(cur.replace(/^https:\/\//, "")) : "💾 Chưa có máy chủ đồng bộ: tài khoản chỉ lưu trên trình duyệt này"}</summary>
      <form class="srv-form" novalidate><label>Địa chỉ máy chủ (Cloudflare Worker)<input name="url" type="url" placeholder="https://hiking-ielts-grader.ten-ban.workers.dev" value="${esc(cur)}" ${fixed ? "readonly" : ""}></label>
      ${fixed ? `<p class="muted small">Đã điền sẵn trong js/config.js.</p>` : `<div class="row"><button class="btn small" type="submit">Lưu</button>${cur ? `<button class="btn small" type="button" data-clr>Bỏ</button>` : ""}<span class="small srv-msg" aria-live="polite"></span></div>`}</form>`;
    box.querySelector(".login-card").after(d);
    const sf = d.querySelector(".srv-form"), msg = d.querySelector(".srv-msg");
    if(fixed) return;
    const set = v => { try{ v ? localStorage.setItem(SRV_KEY, v) : localStorage.removeItem(SRV_KEY); }catch(e){} };
    sf.addEventListener("submit", async e => {
      e.preventDefault(); const v = cleanUrl(sf.url.value);
      if(!/^https:\/\/[^\s/]+/.test(v)){ msg.textContent = "Địa chỉ phải bắt đầu bằng https://"; return; }
      msg.textContent = "Đang thử kết nối…";
      try{
        const d2 = await (await fetch(v, {signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined})).json();
        if(!d2 || !d2.ok) throw 0;
        if(!/^on/.test(String(d2.sync))){ msg.textContent = "Máy chủ chạy nhưng chưa gắn KV tên DATA (xem hướng dẫn)."; return; }
        set(v); msg.textContent = "✓ Đã lưu"; setTimeout(() => showLogin(box.querySelector('[data-m="signup"][aria-selected="true"]') ? "signup" : "login"), 600);
      }catch(x){ msg.textContent = "Không kết nối được địa chỉ này."; }
    });
    const clr = sf.querySelector("[data-clr]");
    if(clr) clr.addEventListener("click", () => { set(""); showLogin("login"); });
  }

  /* ---------- Change password ---------- */
  function changePassword(user){
    const box = document.createElement("div"); box.className = "login modal"; box.id = "pwbox";
    box.innerHTML = `<form class="login-card" novalidate><h1>Đổi mật khẩu</h1><p class="muted small">Tài khoản @${esc(user)}</p>
      ${field("Mật khẩu hiện tại", "old", "password", 'autocomplete="current-password"')}
      ${field("Mật khẩu mới", "pass", "password", 'autocomplete="new-password"')}
      ${field("Nhập lại mật khẩu mới", "pass2", "password", 'autocomplete="new-password"')}
      <p class="login-err" role="alert" hidden></p>
      <div class="row"><button class="btn primary" type="submit">Lưu mật khẩu mới</button><button class="btn" type="button" data-x>Huỷ</button></div></form>`;
    document.body.appendChild(box);
    const f = box.querySelector("form"); wire(f);
    const close = () => box.remove();
    f.querySelector("[data-x]").addEventListener("click", close);
    box.addEventListener("click", e => { if(e.target === box) close(); });
    f.addEventListener("submit", async e => {
      e.preventDefault(); f.querySelector(".login-err").hidden = true;
      const sub = f.querySelector("[type=submit]"); sub.disabled = true;
      try{
        const bad = checkPass(f.pass.value, f.pass2.value); if(bad) return fail(f, bad);
        if(f.pass.value === f.old.value) return fail(f, "Mật khẩu mới phải khác mật khẩu cũ.");
        const s = session(), acc = findAccount(user);
        if(s && s.token){
          let r; try{ r = await api("/auth/password", {body: {old: f.old.value, pass: f.pass.value}, token: s.token}); }
          catch(x){ return fail(f, "Không kết nối được máy chủ đồng bộ. Kiểm tra mạng rồi thử lại."); }
          if(!r.ok) return fail(f, r.data.code === "auth" ? "Phiên đăng nhập đã hết hạn, hãy đăng xuất rồi đăng nhập lại." : r.data.error || "Không đổi được mật khẩu.");
          writeSession(Object.assign({}, s, {token: r.data.token, remember: undefined}), s.remember);
          window.HIKING_AUTH.token = r.data.token;
          await cacheAccount(user, s.name || (acc && acc.name) || user, f.pass.value);
        }else{
          if(!acc || await hashFor(acc, f.old.value) !== acc.sha256) return fail(f, "Mật khẩu hiện tại không đúng.");
          const salt = newSalt();
          if(!putAccount(Object.assign({}, acc, {salt, sha256: await sha256(salt + ":" + f.pass.value), changed: Date.now()}))) return fail(f, "Không lưu được mật khẩu mới.");
        }
        close(); if(typeof toast === "function") toast("Đã đổi mật khẩu."); else alert("Đã đổi mật khẩu.");
      }catch(x){ fail(f, "Trình duyệt này không hỗ trợ đổi mật khẩu (cần mở trang qua https)."); }
      finally{ sub.disabled = false; }
    });
    setTimeout(() => f.old.focus(), 50);
  }

  const s = session();
  window.HIKING_USER = s ? s.user : null;
  // Used by js/sync.js. expired(): the server no longer accepts this login (password changed elsewhere, or too old).
  window.HIKING_AUTH = {server, api, token: s && s.token || null, offline: !!(s && s.offline), status: "",
    expired(){ clearSession(); alert("Phiên đăng nhập đã hết hạn (có thể mật khẩu vừa được đổi trên máy khác). Hãy đăng nhập lại."); location.reload(); }};
  if(s){ const acc = findAccount(s.user); document.addEventListener("DOMContentLoaded", () => userChip({user: s.user, name: s.name || (acc && acc.name) || s.user})); }
  else { root.classList.add("locked"); document.addEventListener("DOMContentLoaded", () => showLogin("login")); }
})();
