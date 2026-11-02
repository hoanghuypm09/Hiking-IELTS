/* Đồng bộ tiến độ học giữa các trình duyệt và thiết bị (chạy sau app.js).
   Chỉ hoạt động khi trang mở trên claude.ai: dữ liệu nằm trong kho riêng của người xem
   (data/users/<id>/p-<tài khoản>), người khác, kể cả chủ trang, không đọc được.
   Bản nào sửa sau cùng (P._updated) thì thắng. Lần đầu một trình duyệt đồng bộ, dữ liệu cũ
   của nó được gộp với bản trên mạng để không mất từ đã thêm ở trình duyệt nào. */
(function(){
  const C = window.HIKING_CLOUD; if(!C || !window.HIKING_USER) return;
  const DOC = "p-" + window.HIKING_USER, MAX = 250000;
  let cloud = null, ready = false, timer = null, busy = false, again = false;

  const hhmm = () => new Date().toLocaleTimeString("vi-VN", {hour: "2-digit", minute: "2-digit"});
  function status(t){ C.status = t; const el = document.getElementById("syncst"); if(el) el.textContent = t; }
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

  async function push(){
    if(!cloud || !ready) return;
    if(busy){ again = true; return; }
    busy = true;
    try{
      const v = JSON.stringify(P);
      if(v.length > MAX){ status("⚠ Dữ liệu quá lớn để đồng bộ"); return; }
      await cloud.doc(DOC).set({v, updated: P._updated || Date.now()});
      status("☁ Đã đồng bộ lúc " + hhmm());
    }catch(e){ status("⚠ Chưa đồng bộ được, sẽ thử lại"); setTimeout(push, 15000); }
    finally{ busy = false; if(again){ again = false; push(); } }
  }
  function schedule(){ clearTimeout(timer); timer = setTimeout(push, 2000); if(ready) status("☁ Đang lưu…"); }
  window.HIKING_SYNC = {push: schedule};

  async function pull(first){
    let snap;
    try{ snap = await C.withTimeout(cloud.doc(DOC).get(), 8000); }catch(e){ snap = null; }
    if(!snap){ status("⚠ Chưa kết nối được kho đồng bộ"); return; }
    if(!snap.exists){ ready = true; P._synced = 1; P._updated = P._updated || Date.now(); keepLocal(); return push(); }
    let remote; try{ remote = JSON.parse(snap.data().v); }catch(e){ remote = null; }
    if(!remote){ ready = true; return push(); }
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

  C.ready.then(c => {
    if(!c){ status("💾 Chỉ lưu trên trình duyệt này"); return; }
    cloud = c; status("☁ Đang đồng bộ…"); pull(true);
  });
  document.addEventListener("visibilitychange", () => {
    if(!cloud || !ready) return;
    if(document.hidden){ if(timer){ clearTimeout(timer); timer = null; push(); } }
    else pull(false);
  });
})();
