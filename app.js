/* 英语预习小助手 —— 全部逻辑在此，无任何外部依赖 */
(function () {
  'use strict';

  const app = document.getElementById('app');
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $all = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem('ep_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('ep_' + k, JSON.stringify(v)); } catch (e) {} }
  };
  const TTS_OK = typeof speechSynthesis !== 'undefined' && typeof SpeechSynthesisUtterance !== 'undefined';

  /* ---------------- 发音（浏览器自带 TTS，免费无音频文件） ---------------- */
  let VOICE = null;
  function pickVoice() {
    if (!TTS_OK) return;
    const vs = speechSynthesis.getVoices() || [];
    VOICE = vs.find(v => /en[-_]us/i.test(v.lang) && /natural|online|google/i.test(v.name))
      || vs.find(v => /en[-_]us/i.test(v.lang))
      || vs.find(v => /^en/i.test(v.lang))
      || null;
  }
  if (TTS_OK) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate) {
    if (!TTS_OK) return;
    const doSpeak = () => {
      try {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        if (VOICE) u.voice = VOICE;
        u.rate = rate || 0.9;
        speechSynthesis.speak(u);
      } catch (e) {}
    };
    try {
      // 有语音正在播/排队时，先 cancel 再延时播，避免 Chrome 下新语音被吞掉
      if (speechSynthesis.speaking || speechSynthesis.pending) {
        speechSynthesis.cancel();
        setTimeout(doSpeak, 80);
      } else {
        doSpeak();
      }
    } catch (e) {}
  }
  /* iOS 需要在用户手势里先"解锁"一次语音 */
  document.addEventListener('pointerdown', () => {
    if (!TTS_OK) return;
    try { const u = new SpeechSynthesisUtterance(''); u.volume = 0; speechSynthesis.speak(u); } catch (e) {}
  }, { once: true, capture: true });

  /* ---------------- 打卡（连续学习天数） ---------------- */
  const dayKey = off => {
    const d = new Date(Date.now() - (off || 0) * 86400000);
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  };
  function streakDays() {
    const s = store.get('streak', { last: '', days: 0 });
    if (s.last !== dayKey(0)) {
      s.days = (s.last === dayKey(1)) ? s.days + 1 : 1;
      s.last = dayKey(0);
      store.set('streak', s);
    }
    return s.days;
  }

  /* ---------------- 简单路由 ---------------- */
  let view = { name: 'home' };
  let autoToken = 0;   // 连播/跟读的"代次"，切换页面或点按钮时 +1 使旧循环停止
  let following = false;
  function stopAuto() { autoToken++; following = false; if (TTS_OK) speechSynthesis.cancel(); }
  function go(name, extra) {
    stopAuto();
    view = Object.assign({ name }, extra || {});
    render();
    window.scrollTo(0, 0);
  }
  function render() {
    if (view.name === 'home') renderHome();
    else if (view.name === 'units') renderUnits();
    else if (view.name === 'unit') renderUnit();
    else if (view.name === 'quiz') renderQuiz();
    else if (view.name === 'wrong') renderWrong();
  }

  /* ---------------- 数据 ---------------- */
  const book = id => BOOKS.find(b => b.id === id);
  function allReadyWords() {
    const r = [];
    BOOKS.forEach(b => { if (b.ready) b.units.forEach(u => (u.words || []).forEach(w => r.push(w))); });
    return r;
  }
  const dedupeByEn = arr => { const seen = new Set(); return arr.filter(w => !seen.has(w.en) && seen.add(w.en)); };

  /* ---------------- 首页 ---------------- */
  function renderHome() {
    const days = streakDays();
    const wrong = store.get('wrong', []);
    app.innerHTML = `
      <div class="topbar"><div></div><div class="title">📘 英语预习小助手</div><div class="streak">🔥${days}天</div></div>
      ${TTS_OK ? '' : '<div class="warn">⚠️ 当前浏览器不支持发音，请用 Edge / Chrome / Safari 打开</div>'}
      <div class="grid">${BOOKS.map(b => `
        <button class="book${b.ready ? '' : ' lock'}" data-book="${b.id}">
          <div>${esc(b.name)}</div>
          <div class="bsub">${b.ready ? '✅ 已录入' : '待录入'}</div>
        </button>`).join('')}
      </div>
      ${wrong.length ? `<button class="btn wrongbtn" id="wrongBtn">📒 错题本（${wrong.length} 个词）</button>` : ''}
      <div class="tip">点单词卡、课文句子即可发音<br>在微信里打开若没有声音，请点右上角「···」→ 在浏览器打开</div>`;
    $all('.book').forEach(el => el.addEventListener('click', () => go('units', { book: el.dataset.book })));
    const wb = $('#wrongBtn'); if (wb) wb.addEventListener('click', () => go('wrong'));
  }

  /* ---------------- 单元列表 ---------------- */
  function renderUnits() {
    const b = book(view.book); if (!b) return go('home');
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">${esc(b.name)}</div><div></div></div>
      <div class="list">${b.units.map((u, i) => {
        const st = store.get(`stars_${b.id}_${i}`, 0);
        return `<button class="unit" data-i="${i}">
          <span>${esc(u.title)}</span>
          <span class="stars">${st ? '⭐'.repeat(st) + '☆'.repeat(3 - st) : '未测试'}</span>
        </button>`;
      }).join('')}
      </div>`;
    $('#bk').addEventListener('click', () => go('home'));
    $all('.unit').forEach(el => el.addEventListener('click', () =>
      go('unit', { book: b.id, unit: +el.dataset.i, tab: 'words', wi: 0 })));
  }

  /* ---------------- 单元页（单词卡 / 课文跟读 两个标签） ---------------- */
  function renderUnit() {
    const b = book(view.book);
    const u = b.units[view.unit];
    const tab = view.tab || 'words';
    const st = store.get(`stars_${b.id}_${view.unit}`, 0);
    const hasWords = !!(u.words && u.words.length);
    const hasSents = !!(u.sentences && u.sentences.length);
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">${esc(u.title)}</div>
        <div class="stars sm">${'⭐'.repeat(st)}${'☆'.repeat(3 - st)}</div></div>
      ${(hasWords || hasSents) ? `
        <div class="tabs">
          <button class="tab${tab === 'words' ? ' on' : ''}" data-t="words" ${hasWords ? '' : 'disabled'}>🃏 单词卡</button>
          <button class="tab${tab === 'sent' ? ' on' : ''}" data-t="sent" ${hasSents ? '' : 'disabled'}>📖 课文跟读</button>
        </div>
        <div id="tabbody"></div>
        ${hasWords ? '<button class="btn big" id="quizBtn">🎯 测一测</button>' : ''}
      ` : `
        <div class="card empty">这一课的内容还没录入。<br><br>让爸爸妈妈打开 <b>data.js</b>，<br>照着《三年级上册》的格式添加就行 🙂</div>
      `}`;
    $('#bk').addEventListener('click', () => go('units', { book: b.id }));
    $all('.tab').forEach(el => el.addEventListener('click', () => {
      if (el.disabled) return;
      view.tab = el.dataset.t; stopAuto(); render();
    }));
    const qb = $('#quizBtn'); if (qb) qb.addEventListener('click', () => go('quiz', { book: b.id, unit: view.unit }));
    if (hasWords || hasSents) {
      if (tab === 'words' && hasWords) renderWords(); else if (hasSents) renderSents();
    }
  }

  /* ---------------- 单词卡 ---------------- */
  function renderWords() {
    const u = book(view.book).units[view.unit];
    const ws = u.words;
    const i = Math.min(Math.max(view.wi || 0, 0), ws.length - 1);
    view.wi = i;
    const w = ws[i];
    $('#tabbody').innerHTML = `
      <div class="card wordcard" id="wcard">
        <div class="emoji">${esc(w.emoji || '🔤')}</div>
        <div class="wen">${esc(w.en)}</div>
        <div class="wzh">${esc(w.zh)}</div>
        ${w.ex ? `<div class="wex"><button class="mini" id="exBtn">🔊 ${esc(w.ex)}</button></div>` : ''}
        <div class="counter">${i + 1} / ${ws.length} · 点卡片听发音</div>
      </div>
      <div class="row">
        <button class="round" id="prev" ${i === 0 ? 'disabled' : ''}>⬅️</button>
        <button class="btn" id="say">🔊 听</button>
        <button class="btn alt${slowMode ? ' on2' : ''}" id="slow">${slowMode ? '🐢 慢速中' : '🐢 慢速'}</button>
        <button class="round" id="next" ${i === ws.length - 1 ? 'disabled' : ''}>➡️</button>
      </div>
      <button class="btn ghost big" id="auto">▶️ 从这张卡连播</button>`;
    speak(w.en, playRate());
    $('#wcard').addEventListener('click', () => { stopAuto(); speak(w.en, playRate()); });
    const ex = $('#exBtn'); if (ex) ex.addEventListener('click', e => { e.stopPropagation(); stopAuto(); speak(w.ex, playRate()); });
    $('#say').addEventListener('click', () => { stopAuto(); speak(w.en, playRate()); });
    $('#slow').addEventListener('click', () => {
      slowMode = !slowMode;
      store.set('slow', slowMode);
      stopAuto();
      renderWords(); // 重新渲染按钮状态，并立即用新语速朗读一遍
    });
    $('#prev').addEventListener('click', () => { stopAuto(); view.wi = i - 1; renderWords(); });
    $('#next').addEventListener('click', () => { stopAuto(); view.wi = i + 1; renderWords(); });
    $('#auto').addEventListener('click', autoPlay);
  }
  function autoPlay() {
    const ws = book(view.book).units[view.unit].words;
    const tok = ++autoToken;
    let i = view.wi || 0;
    (function step() {
      if (tok !== autoToken) return;
      if (i >= ws.length) { view.wi = 0; renderWords(); return; }
      view.wi = i;
      renderWords();
      setTimeout(() => { if (tok !== autoToken) return; i++; step(); }, 2400);
    })();
  }

  /* ---------------- 课文跟读 ---------------- */
  let showZh = false;
  let slowMode = store.get('slow', false); // 慢速模式：全局记忆，下次打开仍然生效
  const playRate = () => slowMode ? 0.5 : 0.9;
  function renderSents() {
    const ss = book(view.book).units[view.unit].sentences || [];
    $('#tabbody').innerHTML = `
      <div class="row between">
        <button class="btn small ${showZh ? 'alt' : 'ghost'}" id="zhBtn">🇨🇳 中文：${showZh ? '显示中' : '已隐藏'}</button>
        <button class="btn small ${slowMode ? 'alt' : 'ghost'}" id="slowBtn">${slowMode ? '🐢 慢速' : '🐇 正常'}</button>
      </div>
      <div class="slist">${ss.map((s, i) => `
        <div class="card sent" data-i="${i}">
          <div class="sen">${esc(s.en)}${showZh ? `<span class="szh">${esc(s.zh)}</span>` : ''}</div>
          <button class="mini" data-play="${i}">🔊</button>
        </div>`).join('')}
      </div>
      <button class="btn big" id="follow">🎙 跟读模式</button>
      <div class="tip">点句子单独听 · 跟读模式：播放一句 → 停 5 秒等你读 → 自动下一句</div>`;
    const rate = playRate();
    $('#zhBtn').addEventListener('click', () => { showZh = !showZh; renderSents(); });
    $('#slowBtn').addEventListener('click', () => { slowMode = !slowMode; store.set('slow', slowMode); renderSents(); });
    $all('[data-play]', $('#tabbody')).forEach(el => el.addEventListener('click', e => {
      e.stopPropagation(); speak(ss[+el.dataset.play].en, rate);
    }));
    $all('.sent', $('#tabbody')).forEach(el => el.addEventListener('click', () =>
      speak(ss[+el.dataset.i].en, rate)));
    $('#follow').addEventListener('click', () => {
      if (following) { stopAuto(); renderSents(); return; }
      following = true;
      followMode();
    });
  }
  function followMode() {
    const ss = book(view.book).units[view.unit].sentences || [];
    if (!ss.length) { following = false; return; }
    const rate = playRate();
    const tok = autoToken;
    const rows = $all('.sent', $('#tabbody'));
    const btn = $('#follow');
    let i = 0;
    const phase = t => { if (btn) btn.textContent = t; };
    rows.forEach(r => r.classList.remove('cur'));
    (function step() {
      if (tok !== autoToken) return;
      if (i >= ss.length) {
        rows.forEach(r => r.classList.remove('cur'));
        following = false;
        phase('🎉 跟读完成！再点一下重新开始');
        return;
      }
      if (rows[i]) rows[i].classList.add('cur');
      phase(`🔊 正在读第 ${i + 1}/${ss.length} 句`);
      speak(ss[i].en, rate);
      const readMs = Math.max(2000, ss[i].en.split(/\s+/).length * 400);
      setTimeout(() => {
        if (tok !== autoToken) return;
        phase(`⏳ 轮到你读第 ${i + 1}/${ss.length} 句啦（5 秒）`);
        setTimeout(() => {
          if (tok !== autoToken) return;
          if (rows[i]) rows[i].classList.remove('cur');
          i++; step();
        }, 5000);
      }, readMs);
    })();
  }

  /* ---------------- 测一测 ---------------- */
  const ABSTRACT_EMOJI = /[❓➕👉⏰🍽🙋🌈🤔🚫✅❌🎨🔤📝🔢👌😮🤲🙇💬🛠️🩺🎁🙌]/; // 太抽象的表情不用于"看图选词"
  function buildQuestions(pool, distract) {
    return shuffle(pool).slice(0, Math.min(10, pool.length)).map(w => {
      const others = shuffle(distract.filter(x => x.en !== w.en && x.zh !== w.zh)).slice(0, 3);
      const opts = shuffle([w].concat(others));
      const types = ['listen', 'read'];
      if (w.emoji && !ABSTRACT_EMOJI.test(w.emoji)) types.push('emoji');
      return { w, opts, type: types[Math.floor(Math.random() * types.length)] };
    }).filter(q => q.opts.length >= 2);
  }
  function renderQuiz() {
    if (view.book === 'wrong') {
      const pool = store.get('wrong', []).map(w => ({ en: w.en, zh: w.zh, emoji: w.emoji }));
      view.qs = buildQuestions(pool, pool.length >= 4 ? pool : dedupeByEn(allReadyWords()));
    } else {
      const u = book(view.book).units[view.unit];
      const dp = u.words.length >= 4 ? u.words : dedupeByEn(allReadyWords().concat(u.words));
      view.qs = buildQuestions(u.words, dp);
    }
    view.qi = 0; view.ok = 0; view.wr = [];
    renderQuizQ();
  }
  function renderQuizQ() {
    const q = view.qs[view.qi];
    if (!q) return renderResult();
    const total = view.qs.length;
    let body = '';
    if (q.type === 'listen') {
      body = `<div class="bigsound" id="qplay">🔊</div>
        <div class="tip" style="margin-top:10px">听发音，选出你听到的单词</div>
        <div class="opts">${q.opts.map((o, j) => `<button class="opt" data-j="${j}">${esc(o.en)}</button>`).join('')}</div>`;
    } else if (q.type === 'read') {
      body = `<div class="qword">${esc(q.w.en)}</div>
        <div class="tip" style="margin-top:10px">这个词是什么意思？</div>
        <div class="opts">${q.opts.map((o, j) => `<button class="opt" data-j="${j}">${esc(o.zh)}</button>`).join('')}</div>`;
    } else {
      body = `<div class="qemoji">${esc(q.w.emoji)}</div>
        <div class="tip" style="margin-top:10px">它对应的英文单词是？</div>
        <div class="opts">${q.opts.map((o, j) => `<button class="opt" data-j="${j}">${esc(o.en)}</button>`).join('')}</div>`;
    }
    const isWrong = view.book === 'wrong';
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button>
        <div class="title">🎯 ${isWrong ? '错题重练' : '测一测'} ${view.qi + 1}/${total}</div>
        <div class="streak">✅${view.ok}</div></div>
      <div class="card qcard">${body}</div>`;
    $('#bk').addEventListener('click', () => {
      if (isWrong) go('wrong');
      else go('unit', { book: view.book, unit: view.unit, tab: 'words', wi: 0 });
    });
    if (q.type === 'listen') {
      $('#qplay').addEventListener('click', () => speak(q.w.en, playRate()));
      setTimeout(() => speak(q.w.en, playRate()), 350);
    }
    $all('.opt').forEach(el => el.addEventListener('click', () => answer(+el.dataset.j)));
  }
  function answer(j) {
    const q = view.qs[view.qi];
    const right = q.opts[j].en === q.w.en;
    const els = $all('.opt');
    els.forEach((el, k) => {
      el.disabled = true;
      if (q.opts[k].en === q.w.en) el.classList.add('right');
    });
    if (right) view.ok++;
    else {
      els[j].classList.add('wrong');
      speak(q.w.en, playRate()); // 把正确答案读一遍
      view.wr.push(q.w);
      addWrong(q.w);
    }
    if (view.book === 'wrong' && right) removeWrong(q.w.en);
    setTimeout(() => { view.qi++; renderQuizQ(); }, right ? 750 : 1800);
  }
  function renderResult() {
    const total = view.qs.length, ok = view.ok;
    const pct = total ? Math.round(ok / total * 100) : 0;
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;
    if (view.book !== 'wrong') {
      const key = `stars_${view.book}_${view.unit}`;
      if (stars > store.get(key, 0)) store.set(key, stars);
    }
    const wrs = view.wr || [];
    app.innerHTML = `
      <div class="card result">
        <div class="remoji">${pct >= 90 ? '🏆' : pct >= 60 ? '💪' : '🌱'}</div>
        <div class="rscore">${pct} 分</div>
        <div class="rstars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
        <div class="tip">答对 ${ok} / ${total} 题${wrs.length ? '，错的词已加入错题本' : ''}</div>
        ${wrs.length ? `<div class="wlist">${wrs.map(w =>
          `<button class="mini" data-en="${esc(w.en)}">🔊 ${esc(w.en)} · ${esc(w.zh)}</button>`).join('')}</div>` : ''}
        <div class="row">
          <button class="btn" id="again">🔁 再来一次</button>
          <button class="btn ghost" id="back">返回</button>
        </div>
      </div>`;
    $('#again').addEventListener('click', renderQuiz);
    $('#back').addEventListener('click', () => {
      if (view.book === 'wrong') go('wrong');
      else go('unit', { book: view.book, unit: view.unit, tab: 'words', wi: 0 });
    });
    $all('[data-en]').forEach(el => el.addEventListener('click', () => speak(el.dataset.en, playRate())));
  }

  /* ---------------- 错题本 ---------------- */
  function addWrong(w) {
    const list = store.get('wrong', []);
    const it = list.find(x => x.en === w.en);
    if (it) it.n = (it.n || 1) + 1;
    else list.push({ en: w.en, zh: w.zh, emoji: w.emoji || '', n: 1 });
    store.set('wrong', list);
  }
  function removeWrong(en) {
    const list = store.get('wrong', []);
    const it = list.find(x => x.en === en);
    if (it) it.n = (it.n || 1) - 1;
    store.set('wrong', list.filter(x => (x.n || 0) > 0));
  }
  function renderWrong() {
    const list = store.get('wrong', []);
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">📒 错题本</div><div></div></div>
      ${list.length ? `
        <div class="slist">${list.map(w => `
          <div class="card sent">
            <div class="sen">${esc(w.en)}${w.emoji && !ABSTRACT_EMOJI.test(w.emoji) ? ' ' + esc(w.emoji) : ''}
              <span class="szh">${esc(w.zh)}（错 ${w.n || 1} 次）</span></div>
            <button class="mini" data-en="${esc(w.en)}">🔊</button>
          </div>`).join('')}
        </div>
        <button class="btn big" id="wquiz">🎯 错题重练（答对一次就移出）</button>` : `
        <div class="card empty">错题本空空的，太棒了！🎉</div>`}`;
    $('#bk').addEventListener('click', () => go('home'));
    $all('[data-en]').forEach(el => el.addEventListener('click', () => speak(el.dataset.en, playRate())));
    const wq = $('#wquiz'); if (wq) wq.addEventListener('click', () => go('quiz', { book: 'wrong' }));
  }

  /* ---------------- 启动 ---------------- */
  /* 部署到 HTTPS 后自动启用离线缓存（本地局域网 http 下跳过，不影响现状） */
  if ('serviceWorker' in navigator &&
      (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    try { navigator.serviceWorker.register('./sw.js'); } catch (e) {}
  }
  streakDays();
  render();
})();
