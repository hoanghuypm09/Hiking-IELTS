/* Đồng bộ tiến độ học giữa các trình duyệt và thiết bị qua máy chủ (Cloudflare Worker, chạy sau app.js).
   Chỉ chạy khi đã đăng nhập bằng tài khoản trên máy chủ (js/auth.js). Bản nào sửa sau cùng (P._updated) thì thắng.
   Lần đầu một trình duyệt đồng bộ, dữ liệu cũ của nó được gộp với bản trên máy chủ để không mất từ đã thêm ở
   trình duyệt nào. */
(function(){
  const A = window.HIKING_AUTH; if(!A || !window.HIKING_USER) return;
  const MAX = 900000, WAIT = 4000;
  let ready = false, timer = null, busy = false, again = false;

  const hhmm = () => new Date().toLocaleTimeString("vi-VN", {hour: "2-digit", minute: "2-digit"});
  function status(t){ A.status = t; const el = document.getElementById("syncst"); if(el) el.textContent = t; }
  if(!A.server()){ status("💾 Chỉ lưu trên trình duyệt này"); return; }
  if(!A.token){ status(A.offline ? "💾 Đăng nhập lúc mất mạng: đăng xuất rồi đăng nhập lại để đồng bộ" : "💾 Chỉ lưu trên trình duyệt này: đăng xuất rồi đăng nhập lại để đồng bộ"); return; }
  // Write to this browser without stamping a new change (save() would bump _updated and trigger a push).
  const keepLocal = () => { try{ localStorage.setItem(KEY, JSON.stringify(P)); }catch(e){} };
  function apply(x){ Object.keys(P).forEach(k => delete P[k]); Object.assign(P, x); keepLocal(); render(); if(typeof bookUI === "function") bookUI(); }

  // First-time merge: keep everything either side has. Scores keep the best, drafts the longer text,
  // word lists are joined by id; for plain settings the cloud copy wins.
  const isObj = v => v && typeof v === "object" && !Array.isArray(v);
  function mergeList(a, b, key){ const seen = new Set(a.map(x => x && x[key])); return a.concat(b.filter(x => !seen.has(x && x[key]))); }
  function mergeP(cloudP, localP){
    const out = JSON.parse(JSON.stringify(cloudP));
    for(const [k, v] of Object.entries(localP)){
      if(out[k] === undefined){ out[k] = v; continue; }
      if(!isObj(v) || !isObj(out[k])) continue;
      for(const [kk, vv] of Object.entries(v)){
        const cur = out[k][kk];
        if(cur === undefined) out[k][kk] = vv;
        else if(k === "scores" && typeof vv === "number") out[k][kk] = Math.max(cur, vv);
        else if(k === "drafts" && typeof vv === "string" && vv.length > String(cur).length) out[k][kk] = vv;
        else if(Array.isArray(cur) && Array.isArray(vv)) out[k][kk] = mergeList(cur, vv, k === "custom" ? "_id" : "id");
      }
    }
    return out;
  }

  const get = () => A.api("/sync", {token: A.token, timeout: 10000});
  const put = (keepalive) => A.api("/sync", {method: "PUT", token: A.token, keepalive, body: {v: JSON.stringify(P), updated: P._updated || Date.now()}});

  async function push(keepalive){
    if(!ready) return;
    if(busy){ again = true; return; }
    busy = true;
    try{
      if(JSON.stringify(P).length > MAX){ status("⚠ Dữ liệu quá lớn để đồng bộ"); return; }
      const r = await put(keepalive);
      if(r.status === 401) return A.expired();
      if(!r.ok) throw 0;
      status("☁ Đã đồng bộ lúc " + hhmm());
    }catch(e){ status("⚠ Chưa đồng bộ được, sẽ thử lại"); setTimeout(push, 20000); }
    finally{ busy = false; if(again){ again = false; push(); } }
  }
  function schedule(){ clearTimeout(timer); timer = setTimeout(() => { timer = null; push(); }, WAIT); if(ready) status("☁ Đang lưu…"); }
  window.HIKING_SYNC = {push: schedule};

  async function pull(first){
    let r;
    try{ r = await get(); }catch(e){ r = null; }
    if(r && r.status === 401) return A.expired();
    if(!r || !r.ok){ status("⚠ Chưa kết nối được máy chủ đồng bộ"); if(first) setTimeout(() => pull(true), 30000); return; }
    let remote = null; try{ remote = r.data.v ? JSON.parse(r.data.v) : null; }catch(e){}
    if(!remote){ ready = true; P._synced = 1; P._updated = P._updated || Date.now(); keepLocal(); return push(); }
    const rt = remote._updated || 0;
    if(first && !P._synced){ // this browser has never synced: merge instead of overwriting either side
      const m = mergeP(remote, P); m._synced = 1; m._updated = Date.now();
      apply(m); ready = true; return push();
    }
    ready = true;
    // On the first pull compare with the copy loaded from this browser, so a save() made while
    // the page was starting up cannot hide newer work from another device.
    const lt = first ? P_LOADED_UPDATED : (P._updated || 0);
    if(rt > lt){ apply(Object.assign(remote, {_synced: 1})); status("☁ Đã tải bản mới nhất lúc " + hhmm()); }
    else if(lt > rt || (P._updated || 0) > rt) push();
    else status("☁ Đã đồng bộ lúc " + hhmm());
  }

  status("☁ Đang đồng bộ…"); pull(true);
  const flush = () => { if(ready && timer){ clearTimeout(timer); timer = null; push(true); } };
  document.addEventListener("visibilitychange", () => { if(document.hidden) flush(); else if(ready && !timer && !busy) pull(false); });
  window.addEventListener("pagehide", flush);
})();
