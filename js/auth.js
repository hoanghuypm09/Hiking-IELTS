/* Đăng nhập, tạo tài khoản, đổi mật khẩu (chạy trước app.js).
   Lưu ý: đây là trang tĩnh, không có máy chủ. Tài khoản tự tạo được lưu trong trình duyệt của máy đang dùng
   (localStorage), nên chỉ dùng được trên máy đó, và ai xem mã nguồn vẫn đọc được dữ liệu học.
   Mật khẩu không lưu dạng chữ, chỉ lưu mã SHA-256 (có thêm "muối" ngẫu nhiên với tài khoản tự tạo).
   Mỗi tài khoản có tiến độ học riêng; admin dùng lại tiến độ cũ (xem PROGRESS_KEY trong app.js). */
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

  async function sha256(text){
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }
  const hashFor = (acc, pass) => sha256(acc.salt ? acc.salt + ":" + pass : pass);
  const newSalt = () => [...crypto.getRandomValues(new Uint8Array(12))].map(b => b.toString(16).padStart(2, "0")).join("");

  const session = () => { for(const s of [store(true), store(false)]){ try{ const v = s && JSON.parse(s.getItem(KEY) || "null"); if(v && findAccount(v.user)) return v; }catch(e){} } return null; };
  const clearSession = () => { for(const s of [store(true), store(false)]){ try{ s && s.removeItem(KEY); }catch(e){} } };
  function startSession(user, remember){
    clearSession();
    try{ const s = store(remember); s && s.setItem(KEY, JSON.stringify({user, at: Date.now()})); }catch(e){}
    location.reload(); // reload so app.js loads this account's own progress
  }

  /* ---------- Header: user name + menu ---------- */
  function userChip(acc){
    const wrap = document.querySelector(".top .wrap"); if(!wrap || document.getElementById("usermenu")) return;
    const m = document.createElement("div");
    m.className = "usermenu"; m.id = "usermenu";
    m.innerHTML = `<button class="btn small userbtn" type="button" aria-haspopup="menu" aria-expanded="false"><span class="u-av">${esc(acc.name.trim()[0] || "?").toUpperCase()}</span><span class="u-name">${esc(acc.name)}</span><i class="caret" aria-hidden="true">▾</i></button>
      <div class="u-pop" role="menu" hidden><div class="u-who"><b>${esc(acc.name)}</b><span class="muted small">@${esc(acc.user)}</span></div>
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
      ${signup ? `<p class="muted small login-note">Tài khoản được lưu trên trình duyệt của máy này. Sang máy khác cần tạo lại.</p>` : ""}</form>`;
    const f = box.querySelector("form"), card = f;
    wire(card);
    card.querySelectorAll("[data-m]").forEach(b => b.addEventListener("click", () => showLogin(b.dataset.m)));
    f.addEventListener("submit", async e => {
      e.preventDefault(); card.querySelector(".login-err").hidden = true;
      const user = f.user.value.trim().toLowerCase(), pass = f.pass.value;
      try{
        if(signup){
          const name = f.name.value.trim();
          if(!name) return fail(card, "Hãy nhập tên hiển thị.");
          if(!/^[a-z0-9_]{3,20}$/.test(user)) return fail(card, "Tài khoản gồm 3–20 ký tự: chữ thường không dấu, số hoặc dấu _.");
          if(findAccount(user)) return fail(card, "Tài khoản này đã có. Hãy chọn tên khác.");
          const bad = checkPass(pass, f.pass2.value); if(bad) return fail(card, bad);
          const salt = newSalt();
          if(!putAccount({user, name, salt, sha256: await sha256(salt + ":" + pass), created: Date.now()})) return fail(card, "Không lưu được tài khoản (trình duyệt đang chặn lưu dữ liệu).");
          return startSession(user, f.rem.checked);
        }
        const acc = findAccount(user);
        if(!acc || await hashFor(acc, pass) !== acc.sha256){ f.pass.value = ""; f.pass.focus(); return fail(card, "Sai tài khoản hoặc mật khẩu."); }
        startSession(acc.user, f.rem.checked);
      }catch(x){ fail(card, "Trình duyệt này không hỗ trợ đăng nhập (cần mở trang qua https)."); }
    });
    setTimeout(() => (signup ? f.name : f.user).focus(), 50);
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
      try{
        const acc = findAccount(user);
        if(await hashFor(acc, f.old.value) !== acc.sha256) return fail(f, "Mật khẩu hiện tại không đúng.");
        const bad = checkPass(f.pass.value, f.pass2.value); if(bad) return fail(f, bad);
        if(f.pass.value === f.old.value) return fail(f, "Mật khẩu mới phải khác mật khẩu cũ.");
        const salt = newSalt();
        if(!putAccount(Object.assign({}, acc, {salt, sha256: await sha256(salt + ":" + f.pass.value), changed: Date.now()}))) return fail(f, "Không lưu được mật khẩu mới.");
        close(); if(typeof toast === "function") toast("Đã đổi mật khẩu."); else alert("Đã đổi mật khẩu.");
      }catch(x){ fail(f, "Trình duyệt này không hỗ trợ đổi mật khẩu (cần mở trang qua https)."); }
    });
    setTimeout(() => f.old.focus(), 50);
  }

  const s = session();
  window.HIKING_USER = s ? s.user : null;
  if(s) document.addEventListener("DOMContentLoaded", () => userChip(findAccount(s.user)));
  else { root.classList.add("locked"); document.addEventListener("DOMContentLoaded", () => showLogin("login")); }
})();
