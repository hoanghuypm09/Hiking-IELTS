/* Màn hình đăng nhập (chạy trước app.js).
   Lưu ý: đây là trang tĩnh, không có máy chủ, nên đăng nhập chỉ là "cửa" trên trình duyệt:
   ai xem mã nguồn vẫn đọc được dữ liệu. Muốn bảo mật thật cần kiểm tra mật khẩu ở máy chủ (vd. Cloudflare Worker).
   Mật khẩu không lưu dạng chữ, chỉ lưu mã SHA-256. Thêm tài khoản: thêm một dòng vào ACCOUNTS. */
(function(){
  const ACCOUNTS = [
    {user: "admin", name: "Admin", sha256: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"}
  ];
  const KEY = "ielts45-auth";
  const store = remember => { try{ return remember ? localStorage : sessionStorage; }catch(e){ return null; } };
  const read = () => { for(const s of [store(true), store(false)]){ try{ const v = s && JSON.parse(s.getItem(KEY) || "null"); if(v && ACCOUNTS.some(a => a.user === v.user)) return v; }catch(e){} } return null; };
  const clear = () => { for(const s of [store(true), store(false)]){ try{ s && s.removeItem(KEY); }catch(e){} } };
  async function sha256(text){
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }
  const root = document.documentElement;

  function userChip(acc){
    const wrap = document.querySelector(".top .wrap"); if(!wrap || document.getElementById("userbtn")) return;
    const b = document.createElement("button");
    b.className = "btn small userbtn"; b.type = "button"; b.id = "userbtn";
    b.title = "Đăng xuất"; b.setAttribute("aria-label", "Đăng xuất tài khoản " + acc.name);
    b.innerHTML = `👤<span class="hd-tx"> ${acc.name} · Đăng xuất</span>`;
    b.addEventListener("click", () => { if(confirm("Đăng xuất khỏi Sổ Học IELTS?")){ clear(); location.reload(); } });
    wrap.appendChild(b);
  }

  function showLogin(){
    root.classList.add("locked");
    const box = document.createElement("div");
    box.className = "login"; box.id = "login";
    box.innerHTML = `<form class="login-card" autocomplete="on">
      <div class="login-logo">📘</div><h1>Sổ Học IELTS</h1><p class="muted small">Đăng nhập để tiếp tục học</p>
      <label>Tài khoản<input name="user" autocomplete="username" autocapitalize="off" spellcheck="false" required></label>
      <label>Mật khẩu<span class="pw"><input name="pass" type="password" autocomplete="current-password" required><button type="button" class="pw-eye" aria-label="Hiện mật khẩu">👁</button></span></label>
      <label class="login-rem"><input type="checkbox" name="rem" checked> Ghi nhớ đăng nhập trên máy này</label>
      <p class="login-err" role="alert" hidden></p>
      <button class="btn primary" type="submit">Đăng nhập</button></form>`;
    document.body.appendChild(box);
    const f = box.querySelector("form"), err = box.querySelector(".login-err");
    box.querySelector(".pw-eye").addEventListener("click", () => { const i = f.pass; i.type = i.type === "password" ? "text" : "password"; i.focus(); });
    f.addEventListener("submit", async e => {
      e.preventDefault(); err.hidden = true;
      const user = f.user.value.trim().toLowerCase(), acc = ACCOUNTS.find(a => a.user === user);
      let ok = false;
      try{ ok = !!acc && await sha256(f.pass.value) === acc.sha256; }
      catch(x){ err.textContent = "Trình duyệt này không hỗ trợ đăng nhập (cần mở trang qua https)."; err.hidden = false; return; }
      if(!ok){ err.textContent = "Sai tài khoản hoặc mật khẩu."; err.hidden = false; f.pass.value = ""; f.pass.focus(); box.querySelector(".login-card").classList.add("shake"); setTimeout(() => box.querySelector(".login-card").classList.remove("shake"), 400); return; }
      try{ const s = store(f.rem.checked); s && s.setItem(KEY, JSON.stringify({user: acc.user, at: Date.now()})); }catch(x){}
      box.remove(); root.classList.remove("locked"); userChip(acc);
    });
    setTimeout(() => f.user.focus(), 50);
  }

  const s = read();
  if(s) document.addEventListener("DOMContentLoaded", () => userChip(ACCOUNTS.find(a => a.user === s.user)));
  else document.addEventListener("DOMContentLoaded", showLogin);
  if(!s) root.classList.add("locked");
})();
