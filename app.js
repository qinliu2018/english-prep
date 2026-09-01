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
    // 单字母英文词（如 I、a）容易被 TTS 当成孤立字母，出现读音偏短/偏字母音
    // 或不发声（单字符 utterance 会被部分引擎吞掉）。加句点让引擎当作完整
    // 单词/句尾来发音，更稳定自然。
    let t = text;
    if (typeof t === 'string' && /^[\x20]*[A-Za-z][\x20]*$/.test(t)) {
      t = t.trim() + '.';
    }
    const doSpeak = () => {
      try {
        const u = new SpeechSynthesisUtterance(t);
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
    else if (view.name === 'pickbook') renderPickBooks();
    else if (view.name === 'units') renderUnits();
    else if (view.name === 'unit') renderUnit();
    else if (view.name === 'quiz') renderQuiz();
    else if (view.name === 'wrong') renderWrong();
    else if (view.name === 'homework') renderHomework();
    else if (view.name === 'report') renderReport();
    else if (view.name === 'dictation') renderDictation();
    else if (view.name === 'spell') renderSpellGame();
    else if (view.name === 'trace') renderTrace();
    else if (view.name === 'cloze') renderCloze();
    else if (view.name === 'review') renderReview();
  }

  /* ---------------- 数据 ---------------- */
  const book = id => BOOKS.find(b => b.id === id);
  function stageOf(id) {
    const n = parseInt(id, 10);
    if (n >= 10) return '高中';
    if (n >= 7) return '初中';
    return '小学';
  }
  function allReadyWords() {
    const r = [];
    BOOKS.forEach(b => { if (b.ready) b.units.forEach(u => (u.words || []).forEach(w => r.push(w))); });
    return r;
  }
  const dedupeByEn = arr => { const seen = new Set(); return arr.filter(w => !seen.has(w.en) && seen.add(w.en)); };

  /* ---------------- 作业与学习记录 ---------------- */
  const hwKey = () => 'hw_' + dayKey(0);
  const dailyKey = () => 'daily_' + dayKey(0);
  function logActivity(type) {
    const d = store.get(dailyKey(), { quiz: 0, dictation: 0, spell: 0, trace: 0, cloze: 0, review: 0 });
    d[type] = (d[type] || 0) + 1;
    store.set(dailyKey(), d);
  }
  // 每册的"当前重点单元"：取该书第一个尚未掌握(未达3星)且含单词的单元；
  // 若该册全部单元都已掌握，则回落到最后一个含单词的单元做滚动复习。
  function currentUnitOf(b) {
    const withWords = (b.units || []).map((u, i) => u.words && u.words.length ? i : -1).filter(i => i >= 0);
    if (!withWords.length) return -1;
    for (let i = 0; i < withWords.length; i++) {
      if ((store.get('stars_' + b.id + '_' + withWords[i], 0) || 0) < 3) return withWords[i];
    }
    return withWords[withWords.length - 1];
  }
  // 作业任务类型：每项在单元内的小标签与跳转 action 一一对应
  const HW_TYPES = [
    { action: 'review',    label: '复习单词', icon: '🔄' },
    { action: 'quiz',      label: '测一测',   icon: '🎯' },
    { action: 'dictation', label: '听写',     icon: '✍️' },
    { action: 'spell',     label: '拼词',     icon: '🎮' },
    { action: 'trace',     label: '书写',     icon: '✏️' },
    { action: 'cloze',     label: '填空',     icon: '🧩' }
  ];
  const homeworkList = () => {
    if (typeof HOMEWORK !== 'undefined' && HOMEWORK.length) {
      return HOMEWORK.map(t => Object.assign({}, t, { type: t.action || 'review' }));
    }
    const auto = [];
    BOOKS.forEach(b => {
      if (!b.ready || !b.units || !b.units.length) return;
      const i0 = currentUnitOf(b);
      if (i0 < 0) return;
      const u = b.units[i0];
      const uname = (u.title || '').replace(/^Unit\s*\d+[\s:：]*/i, '').trim() || ('Unit ' + (i0 + 1));
      HW_TYPES.forEach(t => {
        if (t.action === 'cloze' && !(u.sentences || []).some(s => s.en && s.en.split(/\s+/).length >= 4)) return;
        auto.push({
          id: 'auto_' + b.id + '_' + i0 + '_' + t.action,
          title: b.name + ' · ' + uname + ' ' + t.label,
          book: b.id, unit: i0, action: t.action, type: t.action
        });
      });
    });
    return auto;
  };
  function getHomework() {
    const done = store.get(hwKey(), {});
    return homeworkList().map(t => Object.assign({}, t, { done: !!done[t.id] }));
  }
  function toggleHomework(id) {
    const done = store.get(hwKey(), {});
    done[id] = !done[id];
    store.set(hwKey(), done);
  }
  function markHomeworkDone(id) {
    const done = store.get(hwKey(), {});
    done[id] = true;
    store.set(hwKey(), done);
  }
  function autoMarkHomework(book, unit, action) {
    const idx = typeof unit === 'number' ? unit : -1;
    homeworkList().forEach(t => {
      if (t.book === book && (idx < 0 || t.unit === idx) && t.action === action) markHomeworkDone(t.id);
    });
  }
  function homeworkProgress() {
    const list = getHomework();
    if (!list.length) return { done: 0, total: 0 };
    const done = list.filter(t => t.done).length;
    return { done, total: list.length };
  }

  /* ---------------- 学习报告数据 ---------------- */
  function reportStats() {
    let totalUnits = 0, tested = 0, mastered = 0, starsSum = 0;
    BOOKS.forEach(b => {
      if (!b.ready) return;
      b.units.forEach((u, i) => {
        if (!u.words || !u.words.length) return;
        totalUnits++;
        const s = store.get('stars_' + b.id + '_' + i, 0);
        if (s) { tested++; starsSum += s; if (s === 3) mastered++; }
      });
    });
    return { totalUnits, tested, mastered, starsSum, wrong: store.get('wrong', []).length, streak: streakDays() };
  }
  function weekActivity() {
    const arr = [];
    for (let i = 6; i >= 0; i--) {
      const d = store.get('daily_' + dayKey(i), { quiz: 0, dictation: 0, spell: 0, trace: 0, cloze: 0, review: 0 });
      arr.push({ date: dayKey(i), total: (d.quiz || 0) + (d.dictation || 0) + (d.spell || 0) + (d.trace || 0) });
    }
    return arr;
  }
  function normalizeAns(s) {
    return String(s || '').toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9'\-\s]/g, '').trim().replace(/\s+/g, ' ');
  }

  /* ---------------- 复习反馈闭环（会/不确定/忘记 三档自评 + 间隔复习） ---------------- */
  // Leitner 式间隔：box 越大间隔越长；忘记(box0)立刻再排，不确定(box1)次日，会则逐级拉长
  const REVIEW_INTERVALS = [0, 1, 3, 7, 16, 30];
  function reviewKey(type, en) { return type + ':' + normalizeAns(en); }
  function rateReview(type, en, zh, rating) {
    const key = reviewKey(type, en);
    const m = store.get('review', {});
    const it = m[key] || { box: 0, reviewed: 0 };
    it.reviewed = (it.reviewed || 0) + 1;
    it.en = en; it.zh = zh; it.type = type;
    if (rating === 'forget') { it.box = 0; it.dueDate = dayKey(0); }
    else if (rating === 'unsure') { it.box = 1; it.dueDate = dayKey(1); }
    else { it.box = Math.min((it.box || 0) + 1, 5); it.dueDate = dayKey(REVIEW_INTERVALS[it.box]); }
    m[key] = it;
    store.set('review', m);
  }
  function reviewDue() {
    const m = store.get('review', {});
    const today = dayKey(0);
    return Object.keys(m).filter(k => m[k].dueDate <= today).map(k => Object.assign({ key: k }, m[k]));
  }
  function reviewDueCount() { return reviewDue().length; }
  function rateSectionHtml(items, type) {
    if (!items || !items.length) return '';
    const cur = store.get('review', {});
    return '<div class="ratesec"><div class="ratetit">🧠 标一下掌握度（决定下次复习时间）</div>' +
      items.map(it => {
        const key = reviewKey(type, it.en);
        const st = cur[key];
        const sel = st ? (st.box === 0 ? 'forget' : st.box === 1 ? 'unsure' : 'know') : '';
        const en = esc(it.en); const zh = esc(it.zh || '');
        const emoji = it.emoji ? ' ' + esc(it.emoji) : '';
        return '<div class="rateitem">' +
          '<span class="ren">' + en + emoji + '</span><span class="rzh">' + zh + '</span>' +
          '<div class="ratebtns" data-type="' + type + '" data-en="' + en + '" data-zh="' + zh + '">' +
            '<button data-r="know"' + (sel === 'know' ? ' class="on"' : '') + '>会</button>' +
            '<button data-r="unsure"' + (sel === 'unsure' ? ' class="on"' : '') + '>不确定</button>' +
            '<button data-r="forget"' + (sel === 'forget' ? ' class="on"' : '') + '>忘记</button>' +
          '</div></div>';
      }).join('') + '</div>';
  }
  function bindRateSection() {
    $all('.ratebtns').forEach(div => {
      div.addEventListener('click', e => {
        const b = e.target.closest('button[data-r]'); if (!b) return;
        rateReview(div.dataset.type, div.dataset.en, div.dataset.zh, b.dataset.r);
        $all('button', div).forEach(x => x.classList.remove('on'));
        b.classList.add('on');
      });
    });
  }

  /* ---------------- 首页 ---------------- */
  function renderHome() {
    const days = streakDays();
    const wrong = store.get('wrong', []);
    const hw = homeworkProgress();
    const stage = view.stage || '小学';
    const stageReady = BOOKS.some(b => b.ready && stageOf(b.id) === stage);
    app.innerHTML = `
      <div class="topbar"><div></div><div class="title">📘 英语预习小助手</div><div class="streak">🔥${days}天</div></div>
      ${TTS_OK ? '' : '<div class="warn">⚠️ 当前浏览器不支持发音，请用 Edge / Chrome / Safari 打开</div>'}
      ${hw.total ? `
        <div class="card hwcard" id="hwCard">
          <div class="hwinfo">
            <div class="hwtit">📋 今日作业</div>
            <div class="hwsub">${hw.done === hw.total ? '全部完成！太棒了' : '还有 ' + (hw.total - hw.done) + ' 项未完成'}</div>
          </div>
          <div class="hwprog">${hw.done}/${hw.total}</div>
        </div>` : ''}
      <div class="stagetabs">${['小学', '初中', '高中'].map(s => `<button class="stab${s === stage ? ' active' : ''}" data-stage="${s}">${s}</button>`).join('')}</div>
      <div class="grid">${BOOKS.filter(b => stageOf(b.id) === stage).map(b => `
        <button class="book${b.ready ? '' : ' lock'}" data-book="${b.id}">
          <div>${esc(b.name)}</div>
          <div class="bsub">${b.ready ? '✅ 已录入' : '待录入'}</div>
        </button>`).join('')}
      </div>
      <div class="section-title">工具</div>
      <div class="tools">
        <button class="tool primary" id="toolHw"><span class="ticon">📋</span>作业本</button>
        <button class="tool alt" id="toolReport"><span class="ticon">📊</span>学习报告</button>
        <button class="tool" id="toolDict"${stageReady ? '' : ' disabled'}><span class="ticon">✍️</span>听写</button>
        <button class="tool" id="toolSpell"${stageReady ? '' : ' disabled'}><span class="ticon">🎮</span>拼词</button>
        <button class="tool" id="toolTrace"${stageReady ? '' : ' disabled'}><span class="ticon">✏️</span>书写</button>
        <button class="tool" id="toolCloze"${stageReady ? '' : ' disabled'}><span class="ticon">🧩</span>填空</button>
        <button class="tool" id="toolReview"><span class="ticon">🔄</span>复习${reviewDueCount() ? '<span class="badge">' + reviewDueCount() + '</span>' : ''}</button>
      </div>
      ${wrong.length ? `<button class="btn wrongbtn" id="wrongBtn">📒 错题本（${wrong.length} 个词）</button>` : ''}
      <div class="tip">点单词卡、课文句子即可发音<br>在微信里打开若没有声音，请点右上角「···」→ 在浏览器打开</div>`;
    $all('.book').forEach(el => el.addEventListener('click', () => go('units', { book: el.dataset.book })));
    $all('.stab').forEach(el => el.addEventListener('click', () => go('home', { stage: el.dataset.stage })));
    const wb = $('#wrongBtn'); if (wb) wb.addEventListener('click', () => go('wrong'));
    const hwc = $('#hwCard'); if (hwc) hwc.addEventListener('click', () => go('homework'));
    $('#toolHw').addEventListener('click', () => go('homework'));
    $('#toolReport').addEventListener('click', () => go('report'));
    if (stageReady) {
      $('#toolDict').addEventListener('click', () => go('pickbook', { mode: 'dictation', stage }));
      $('#toolSpell').addEventListener('click', () => go('pickbook', { mode: 'spell', stage }));
      $('#toolTrace').addEventListener('click', () => go('pickbook', { mode: 'trace', stage }));
      $('#toolCloze').addEventListener('click', () => go('pickbook', { mode: 'cloze', stage }));
    }
    $('#toolReview').addEventListener('click', () => go('review'));
  }

  /* ---------------- 选择课本（工具栏工具入口） ---------------- */
  const MODE_NAMES = { dictation: '听写', spell: '拼词游戏', trace: '书写练习', cloze: '填空练习' };
  function renderPickBooks() {
    const mode = view.mode;
    const stage = view.stage || '小学';
    const books = BOOKS.filter(b => b.ready && stageOf(b.id) === stage);
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">${esc(MODE_NAMES[mode] || '选择课本')}</div><div></div></div>
      <div class="card" style="padding:12px 16px;font-size:14px;color:#666;text-align:center;margin-bottom:12px;">选择一本课本，开始${esc(MODE_NAMES[mode] || '练习')}</div>
      <div class="stagetabs">${['小学', '初中', '高中'].map(s => `<button class="stab${s === stage ? ' active' : ''}" data-stage="${s}">${s}</button>`).join('')}</div>
      <div class="list">${books.map(b => `
        <button class="unit" data-book="${b.id}">
          <span>${esc(b.name)}</span>
          <span class="stars">${b.ready ? '✅ 已录入' : '待录入'}</span>
        </button>`).join('')}
      </div>`;
    $('#bk').addEventListener('click', () => go('home'));
    $all('.stab').forEach(el => el.addEventListener('click', () => go('pickbook', { mode, stage: el.dataset.stage })));
    $all('.unit').forEach(el => el.addEventListener('click', () => go('units', { book: el.dataset.book, mode })));
  }

  /* ---------------- 单元列表 ---------------- */
  function renderUnits() {
    const b = book(view.book); if (!b) return go('home');
    if (!b.units || !b.units.length) {
      app.innerHTML = `
        <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">${esc(b.name)}</div><div></div></div>
        <div class="card empty">这一册的内容还没录入。<br><br>等有课本了，再让澳牛补上 🙂</div>`;
      $('#bk').addEventListener('click', () => go('home'));
      return;
    }
    const mode = view.mode || '';
    const modeNames = { dictation: '听写', spell: '拼词游戏', trace: '书写练习', cloze: '填空练习' };
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">${esc(b.name)}</div><div></div></div>
      ${mode ? `<div class="card" style="padding:12px 16px;font-size:14px;color:#666;text-align:center;margin-bottom:12px;">请选择一课开始${esc(modeNames[mode] || mode)}</div>` : ''}
      ${!mode && b.units.some(u => u.words && u.words.length) ? `
        <div class="actbar">
          <button class="btn" id="bookQuiz">🎯 全册总测</button>
        </div>` : ''}
      <div class="list">${b.units.map((u, i) => {
        const st = store.get('stars_' + b.id + '_' + i, 0);
        return `<button class="unit" data-i="${i}">
          <span>${esc(u.title)}</span>
          <span class="stars">${st ? '⭐'.repeat(st) + '☆'.repeat(3 - st) : '未测试'}</span>
        </button>`;
      }).join('')}
      </div>`;
    $('#bk').addEventListener('click', () => {
      if (mode) go('pickbook', { mode, stage: stageOf(b.id) });
      else go('home');
    });
    const bq = $('#bookQuiz');
    if (bq) bq.addEventListener('click', () => go('quiz', { book: b.id, unit: 'all' }));
    $all('.unit').forEach(el => el.addEventListener('click', () => {
      const i = +el.dataset.i;
      if (mode === 'dictation') go('dictation', { book: b.id, unit: i });
      else if (mode === 'spell') go('spell', { book: b.id, unit: i });
      else if (mode === 'trace') go('trace', { book: b.id, unit: i });
      else if (mode === 'cloze') go('cloze', { book: b.id, unit: i });
      else go('unit', { book: b.id, unit: i, tab: 'words', wi: 0 });
    }));
  }

  /* ---------------- 单元页（单词卡 / 课文跟读 两个标签） ---------------- */
  function renderUnit() {
    const b = book(view.book);
    const u = b.units[view.unit];
    const tab = view.tab || 'words';
    const st = store.get('stars_' + b.id + '_' + view.unit, 0);
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
        ${hasWords ? `
          <button class="btn big" id="quizBtn">🎯 测一测</button>
          <div class="row" style="margin-top:4px;">
            <button class="btn ghost small" id="dictBtn">✍️ 听写</button>
            <button class="btn ghost small" id="spellBtn">🎮 拼词</button>
            <button class="btn ghost small" id="traceBtn">✏️ 书写</button>
          </div>` : ''}
        ${hasSents ? `<button class="btn ghost big" id="clozeBtn" style="margin-top:4px;">🧩 填空练习</button>` : ''}
      ` : `
        <div class="card empty">这一课的内容还没录入。<br><br>让爸爸妈妈打开 <b>data.js</b>，<br>照着《三年级上册》的格式添加就行 🙂</div>
      `}`;
    $('#bk').addEventListener('click', () => go('units', { book: b.id }));
    $all('.tab').forEach(el => el.addEventListener('click', () => {
      if (el.disabled) return;
      view.tab = el.dataset.t; stopAuto(); render();
    }));
    const qb = $('#quizBtn'); if (qb) qb.addEventListener('click', () => go('quiz', { book: b.id, unit: view.unit }));
    const dict = $('#dictBtn'); if (dict) dict.addEventListener('click', () => go('dictation', { book: b.id, unit: view.unit }));
    const spell = $('#spellBtn'); if (spell) spell.addEventListener('click', () => go('spell', { book: b.id, unit: view.unit }));
    const trace = $('#traceBtn'); if (trace) trace.addEventListener('click', () => go('trace', { book: b.id, unit: view.unit }));
    const cloze = $('#clozeBtn'); if (cloze) cloze.addEventListener('click', () => go('cloze', { book: b.id, unit: view.unit }));
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
        <button class="btn${slowMode ? ' alt' : ' ghost'}" id="slow">${slowMode ? '🐢 慢速中' : '🐢 慢速'}</button>
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
      let pool, dp;
      if (view.unit === 'all') {
        const b = book(view.book);
        pool = [];
        b.units.forEach(u => { if (u.words) pool = pool.concat(u.words); });
        pool = dedupeByEn(pool);
        dp = pool.length >= 4 ? pool : dedupeByEn(allReadyWords().concat(pool));
      } else {
        const u = book(view.book).units[view.unit];
        pool = u.words;
        dp = u.words.length >= 4 ? u.words : dedupeByEn(allReadyWords().concat(u.words));
      }
      view.qs = buildQuestions(pool, dp);
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
      else if (view.unit === 'all') go('units', { book: view.book });
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
    if (view.book !== 'wrong' && view.unit !== 'all') {
      const key = 'stars_' + view.book + '_' + view.unit;
      if (stars > store.get(key, 0)) store.set(key, stars);
    }
    logActivity('quiz');
    if (view.book !== 'wrong' && view.unit !== 'all') autoMarkHomework(view.book, view.unit, 'quiz');
    const wrs = view.wr || [];
    app.innerHTML = `
      <div class="card result">
        <div class="remoji">${pct >= 90 ? '🏆' : pct >= 60 ? '💪' : '🌱'}</div>
        <div class="rscore">${pct} 分</div>
        <div class="rstars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
        <div class="tip">答对 ${ok} / ${total} 题${wrs.length ? '，错的词已加入错题本' : ''}</div>
        ${wrs.length ? `<div class="wlist">${wrs.map(w =>
          `<button class="mini" data-en="${esc(w.en)}">🔊 ${esc(w.en)} · ${esc(w.zh)}</button>`).join('')}</div>` : ''}
        ${rateSectionHtml(view.qs.map(q => q.w), 'word')}
        <div class="row">
          <button class="btn" id="again">🔁 再来一次</button>
          <button class="btn ghost" id="back">返回</button>
        </div>
      </div>`;
    $('#again').addEventListener('click', renderQuiz);
    $('#back').addEventListener('click', () => {
      if (view.book === 'wrong') go('wrong');
      else if (view.unit === 'all') go('units', { book: view.book });
      else go('unit', { book: view.book, unit: view.unit, tab: 'words', wi: 0 });
    });
    $all('[data-en]').forEach(el => el.addEventListener('click', () => speak(el.dataset.en, playRate())));
    bindRateSection();
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

  /* ---------------- 作业本 ---------------- */
  function doHomeworkTask(id) {
    const t = homeworkList().find(x => x.id === id); if (!t) return;
    markHomeworkDone(id);
    if (t.action === 'quiz') go('quiz', { book: t.book, unit: t.unit });
    else if (t.action === 'dictation') go('dictation', { book: t.book, unit: t.unit });
    else if (t.action === 'spell') go('spell', { book: t.book, unit: t.unit });
    else if (t.action === 'trace') go('trace', { book: t.book, unit: t.unit });
    else if (t.action === 'cloze') go('cloze', { book: t.book, unit: t.unit });
    else go('unit', { book: t.book, unit: t.unit, tab: t.action === 'sent' ? 'sent' : 'words', wi: 0 });
  }
  function renderHomework() {
    const stage = view.stage || '小学';
    const all = getHomework();
    const list = all.filter(t => stageOf(t.book) === stage);
    const empty = !list.length;
    const bk = id => BOOKS.find(x => x.id === id) || {};
    const unitTitle = (id, i) => { const b = bk(id); return b.units && b.units[i] ? b.units[i].title : ''; };
    // 按册分组，册内按单元聚集，单元内按类型顺序
    const groups = [];
    list.forEach(t => {
      let g = groups.find(x => x.book === t.book && x.unit === t.unit);
      if (!g) {
        g = { book: t.book, unit: t.unit, tasks: [] };
        groups.push(g);
      }
      g.tasks.push(t);
    });
    groups.sort((a, b) => (a.book === b.book ? a.unit - b.unit : a.book.localeCompare(b.book)));
    groups.forEach(g => {
      g.tasks.sort((a, b) => HW_TYPES.findIndex(x => x.action === a.action) - HW_TYPES.findIndex(x => x.action === b.action));
      g.done = g.tasks.every(t => t.done);
      g.open = store.get('hwopen_' + g.book + '_' + g.unit, g.done ? 0 : 1) ? true : false;
    });
    const iconOf = a => { const x = HW_TYPES.find(t => t.action === a); return x ? x.icon : '🔘'; };
    const labOf = a => { const x = HW_TYPES.find(t => t.action === a); return x ? x.label : a; };
    const badgeOf = a => { const x = HW_TYPES.find(t => t.action === a); return x ? `<span class="hwtag">${x.icon} ${x.label}</span>` : ''; };
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">📋 作业本</div><div></div></div>
      <div class="stagetabs">${['小学', '初中', '高中'].map(s => `<button class="stab${s === stage ? ' active' : ''}" data-stage="${s}">${s}</button>`).join('')}</div>
      ${empty ? `
        <div class="card empty">${stage === '小学' ? '还没有可安排的作业。<br><br>让爸爸妈妈打开 <b>data.js</b>，<br>编辑 <b>HOMEWORK</b> 数组就能添加 🙂' : '这个学段还没有已录入的课本。<br>先在 <b>data.js</b> 里加好内容就行 🙂'}</div>
      ` : `
        <div class="card" style="padding:14px 16px;">
          <div style="font-size:15px;font-weight:700;color:#555;margin-bottom:8px;">${dayKey(0)} · 今日任务</div>
          <div style="font-size:12px;color:#999;margin-bottom:8px;">每册只排当前重点单元，掌握后自动推进到下一单元。</div>
          ${groups.map(g => `
            <div class="hwgrp${g.done ? ' all-done' : ''}">
              <div class="hwgrp-hd" data-gk="${esc(g.book)}|${g.unit}">
                <span class="hwarr">${g.open ? '▾' : '▸'}</span>
                <div class="hg-txt">
                  <div class="hg-name">${esc(bk(g.book).name || '')}</div>
                  <div class="hg-unit">${esc(unitTitle(g.book, g.unit) || '')}</div>
                </div>
                <span class="hg-prog">${g.tasks.filter(t => t.done).length}/${g.tasks.length}${g.done ? ' ✓' : ''}</span>
              </div>
              ${g.open ? `<div class="hwgrp-bd">${g.tasks.map(t => `
                <div class="hitem${t.done ? ' done' : ''}" data-id="${esc(t.id)}">
                  <div class="hnum">${t.done ? '✓' : ''}</div>
                  <div class="htxt">
                    ${badgeOf(t.action)}
                  </div>
                  <button class="hbtn" data-act="${esc(t.id)}">${t.done ? '已完成' : '去完成'}</button>
                </div>`).join('')}</div>` : ''}
            </div>`).join('')}
        </div>
        <div class="tip">点某项完成；点图标行可打勾。<br>自动生成的作业按每册当前单元推进，每天自动重置。</div>
      `}`;
    $('#bk').addEventListener('click', () => go('home'));
    $all('.stab').forEach(el => el.addEventListener('click', () => go('homework', { stage: el.dataset.stage })));
    if (!empty) {
      $all('.hwgrp-hd').forEach(hd => hd.addEventListener('click', () => {
        const [b, u] = hd.dataset.gk.split('|');
        store.set('hwopen_' + b + '_' + u, (store.get('hwopen_' + b + '_' + u, 1) ? 0 : 1));
        renderHomework();
      }));
      $all('.hitem').forEach(el => el.addEventListener('click', e => {
        if (e.target.closest('.hbtn')) return;
        toggleHomework(el.dataset.id); renderHomework();
      }));
      $all('.hbtn').forEach(btn => btn.addEventListener('click', () => doHomeworkTask(btn.dataset.act)));
    }
  }

  /* ---------------- 学习报告（家长页） ---------------- */
  function renderReport() {
    const s = reportStats();
    const week = weekActivity();
    const max = Math.max(1, ...week.map(d => d.total));
    const wrong = store.get('wrong', []);
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">📊 学习报告</div><div></div></div>
      <div class="statgrid">
        <div class="stat"><div class="snum">${s.streak}</div><div class="slab">连续打卡</div></div>
        <div class="stat"><div class="snum">${s.tested}/${s.totalUnits}</div><div class="slab">已测单元</div></div>
        <div class="stat"><div class="snum">${s.mastered}</div><div class="slab">完全掌握</div></div>
        <div class="stat"><div class="snum">${s.wrong}</div><div class="slab">错题本</div></div>
      </div>
      <div class="card" style="padding:16px;">
        <div style="font-size:14px;font-weight:700;color:#555;margin-bottom:10px;">最近 7 天学习活跃度</div>
        <div class="weekbar">${week.map(d => `
          <div class="weekday">
            <div class="wcol" style="height:${Math.round(d.total / max * 44)}px;${d.total ? 'background:#ff9f1c;' : ''}"></div>
            <div class="wday">${esc(d.date.split('-').slice(1).join('/'))}</div>
          </div>
        `).join('')}</div>
      </div>
      ${wrong.length ? `
        <div class="card" style="padding:14px 16px;">
          <div style="font-size:14px;font-weight:700;color:#555;margin-bottom:8px;">最近错题 (${wrong.length})</div>
          <div class="wlist">${wrong.slice(0, 8).map(w => `
            <button class="mini" data-en="${esc(w.en)}">${esc(w.en)} · ${esc(w.zh)}</button>
          `).join('')}</div>
        </div>
      ` : ''}
      <div class="tip">数据存在本设备浏览器中，清除缓存会丢失。</div>`;
    $('#bk').addEventListener('click', () => go('home'));
    $all('[data-en]').forEach(el => el.addEventListener('click', () => speak(el.dataset.en, playRate())));
  }

  /* ---------------- 听写模式 ---------------- */
  function renderDictation() {
    const b = book(view.book); const u = b.units[view.unit];
    const hasSents = !!(u.sentences && u.sentences.length);
    if (view.dtype !== 'sent') view.dtype = 'word';
    const useSents = view.dtype === 'sent' && hasSents;
    const src = useSents ? u.sentences : (u.words || []);
    if (!src.length) return go('units', { book: view.book });
    if (view.di == null) { view.di = 0; view.dok = 0; view.dwr = []; view.danswered = false; view.dmsg = ''; }
    if (view.di >= src.length) return renderDictResult();
    const cur = src[view.di];
    const answered = view.danswered;
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button>
        <div class="title">✍️ 听写 ${view.di + 1}/${src.length}</div><div class="streak">✅${view.dok}</div></div>
      <div class="card qcard darea">
        <div class="dzh">${esc(cur.zh)}</div>
        ${answered ? `<div class="den">${esc(cur.en)}</div>` : ''}
        <div style="margin:14px 0 6px;">
          <button class="round" id="say" style="font-size:22px;width:56px;height:56px;">🔊</button>
        </div>
        ${hasSents ? `<div class="row" style="margin-bottom:10px;"><button class="mini" id="typeToggle">切换：${useSents ? '单词' : '句子'}</button></div>` : ''}
        <input type="text" class="dinput" id="ans" value="" placeholder="${useSents ? '写出整句英文' : '拼出英文单词'}" autocomplete="off" autocorrect="off" spellcheck="false" ${answered ? 'disabled' : ''}>
        <div class="dresult ${view.dright ? 'ok' : 'bad'}" id="dres">${esc(view.dmsg || '')}</div>
        ${answered ? `
          <div class="row">
            <button class="btn" id="next">➡️ 下一题</button>
            <button class="btn ghost" id="again">🔁 再来一次</button>
          </div>
        ` : `
          <div class="row">
            <button class="btn" id="submit">✅ 提交</button>
            <button class="btn ghost small" id="hint">👀 显示答案</button>
          </div>
        `}
      </div>
      <div class="tip">${useSents ? '听到句子或看到中文后，写出完整英文。' : '点 🔊 听发音，根据中文拼出英文单词。'}</div>`;
    $('#bk').addEventListener('click', () => go('units', { book: view.book }));
    const speakNow = () => speak(cur.en, playRate());
    $('#say').addEventListener('click', speakNow);
    const typeToggle = $('#typeToggle');
    if (typeToggle) typeToggle.addEventListener('click', () => { view.dtype = useSents ? 'word' : 'sent'; view.di = 0; view.dok = 0; view.dwr = []; view.danswered = false; view.dmsg = ''; renderDictation(); });
    if (!answered) {
      const ans = $('#ans');
      try { ans.focus(); } catch (e) {}
      setTimeout(speakNow, 350);
      $('#submit').addEventListener('click', () => checkDict(ans.value));
      $('#hint').addEventListener('click', () => showDictAnswer());
      ans.addEventListener('keydown', e => { if (e.key === 'Enter') checkDict(ans.value); });
    } else {
      $('#next').addEventListener('click', () => { view.di++; view.danswered = false; view.dmsg = ''; renderDictation(); });
      $('#again').addEventListener('click', () => { view.di = 0; view.dok = 0; view.dwr = []; view.danswered = false; view.dmsg = ''; renderDictation(); });
    }
  }
  function checkDict(val) {
    const u = book(view.book).units[view.unit];
    const useSents = view.dtype === 'sent';
    const src = useSents ? u.sentences : u.words;
    const cur = src[view.di];
    if (!String(val || '').trim()) { view.danswered = true; view.dright = false; view.dmsg = '先写答案哦'; renderDictation(); return; }
    const ok = normalizeAns(val) === normalizeAns(cur.en);
    view.danswered = true;
    if (ok) {
      view.dok++; view.dright = true; view.dmsg = '拼对啦！';
      try { speak('Great job!', 1); } catch (e) {}
    } else {
      view.dright = false; view.dmsg = '正确：' + cur.en;
      view.dwr.push(cur);
      addWrong(cur);
      speak(cur.en, playRate());
    }
    renderDictation();
  }
  function showDictAnswer() {
    const u = book(view.book).units[view.unit];
    const useSents = view.dtype === 'sent';
    const cur = (useSents ? u.sentences : u.words)[view.di];
    view.danswered = true; view.dright = false; view.dmsg = '正确：' + cur.en;
    renderDictation();
  }
  function renderDictResult() {
    const total = view.di; const ok = view.dok;
    const pct = total ? Math.round(ok / total * 100) : 0;
    logActivity('dictation');
    autoMarkHomework(view.book, view.unit, 'dictation');
    const wrs = view.dwr || [];
    const u = book(view.book).units[view.unit];
    const dsrc = (view.dtype === 'sent' ? u.sentences : u.words) || [];
    const ditems = dsrc.map(x => ({ en: x.en, zh: x.zh, emoji: x.emoji }));
    app.innerHTML = `
      <div class="card result">
        <div class="remoji">${pct >= 90 ? '🏆' : pct >= 60 ? '💪' : '🌱'}</div>
        <div class="rscore">${pct} 分</div>
        <div class="tip">听写正确 ${ok} / ${total}</div>
        ${wrs.length ? `<div class="wlist">${wrs.map(w => `<button class="mini" data-en="${esc(w.en)}">${esc(w.en)} · ${esc(w.zh)}</button>`).join('')}</div>` : ''}
        ${rateSectionHtml(ditems, view.dtype === 'sent' ? 'sent' : 'word')}
        <div class="row">
          <button class="btn" id="again">🔁 再来一次</button>
          <button class="btn ghost" id="back">返回</button>
        </div>
      </div>`;
    $('#again').addEventListener('click', () => { view.di = 0; view.dok = 0; view.dwr = []; view.danswered = false; view.dmsg = ''; renderDictation(); });
    $('#back').addEventListener('click', () => go('unit', { book: view.book, unit: view.unit }));
    $all('[data-en]').forEach(el => el.addEventListener('click', () => speak(el.dataset.en, playRate())));
    bindRateSection();
  }

  /* ---------------- 拼词游戏 ---------------- */
  function renderSpellGame() {
    const u = book(view.book).units[view.unit];
    const ws = u.words || []; if (!ws.length) return go('unit', { book: view.book, unit: view.unit });
    if (view.si == null) { view.si = 0; view.sok = 0; view.swr = []; view.sslots = []; view.smsg = ''; }
    if (view.si >= ws.length) return renderSpellResult();
    const w = ws[view.si];
    const letters = w.en.replace(/[^a-zA-Z]/g, '').split('').map((c, i) => ({ c: c.toLowerCase(), id: i }));
    const tiles = shuffle(letters);
    const slots = view.sslots || [];
    const showCheck = slots.length === letters.length;
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button>
        <div class="title">🎮 拼词游戏 ${view.si + 1}/${ws.length}</div><div class="streak">✅${view.sok}</div></div>
      <div class="card qcard">
        <div class="qemoji">${esc(w.emoji || '🔤')}</div>
        <div class="dzh">${esc(w.zh)}</div>
        <div class="slots">${slots.map((s, i) => `<button class="slot filled" data-idx="${i}">${esc(s.c)}</button>`).join('')}</div>
        <div class="tiles">${tiles.map(t => { const used = slots.some(s => s.id === t.id); return `<button class="tile" data-id="${t.id}" ${used ? 'disabled' : ''}>${esc(t.c)}</button>`; }).join('')}</div>
        <div class="row" style="margin-top:10px;">
          <button class="btn${showCheck ? '' : ' ghost'}" id="check" ${showCheck ? '' : 'disabled'}>✅ 提交</button>
          <button class="btn ghost small" id="say">🔊 再听</button>
          <button class="btn ghost small" id="reset">↺ 重排</button>
        </div>
        <div class="dresult" id="sres">${esc(view.smsg || '')}</div>
      </div>
      <div class="tip">按正确顺序点击字母，拼出单词。</div>`;
    $('#bk').addEventListener('click', () => go('units', { book: view.book }));
    $('#say').addEventListener('click', () => speak(w.en, playRate()));
    $('#reset').addEventListener('click', () => { view.sslots = []; view.smsg = ''; renderSpellGame(); });
    $all('.tile').forEach(btn => btn.addEventListener('click', () => {
      if (btn.disabled) return;
      view.sslots = (view.sslots || []).concat({ c: btn.textContent, id: +btn.dataset.id });
      view.smsg = ''; renderSpellGame();
    }));
    $all('.slot').forEach(btn => btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx;
      view.sslots.splice(idx, 1);
      view.smsg = ''; renderSpellGame();
    }));
    const check = $('#check'); if (check) check.addEventListener('click', () => checkSpell(w, letters));
  }
  function checkSpell(w, letters) {
    const slots = view.sslots || [];
    const ans = slots.map(s => s.c).join('');
    const target = w.en.replace(/[^a-zA-Z]/g, '').toLowerCase();
    if (ans === target) {
      view.sok++; view.smsg = '拼对啦！';
      try { speak('Great job!', 1); } catch (e) {}
      setTimeout(() => { view.si++; view.sslots = []; view.smsg = ''; renderSpellGame(); }, 900);
    } else {
      view.smsg = '再试试～'; speak(w.en, playRate());
    }
    renderSpellGame();
  }
  function renderSpellResult() {
    const total = view.si; const ok = view.sok;
    const pct = total ? Math.round(ok / total * 100) : 0;
    logActivity('spell');
    autoMarkHomework(view.book, view.unit, 'spell');
    app.innerHTML = `
      <div class="card result">
        <div class="remoji">${pct >= 90 ? '🏆' : pct >= 60 ? '💪' : '🌱'}</div>
        <div class="rscore">${pct} 分</div>
        <div class="tip">拼对 ${ok} / ${total}</div>
        <div class="row">
          <button class="btn" id="again">🔁 再来一次</button>
          <button class="btn ghost" id="back">返回</button>
        </div>
      </div>`;
    $('#again').addEventListener('click', () => { view.si = 0; view.sok = 0; view.swr = []; view.sslots = []; view.smsg = ''; renderSpellGame(); });
    $('#back').addEventListener('click', () => go('unit', { book: view.book, unit: view.unit }));
  }

  /* ---------------- 书写练习 ---------------- */
  const ALPHABET = 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz'.split(' ');
  function drawTraceGuide(ctx, c) {
    ctx.strokeStyle = '#f1f3f5'; ctx.lineWidth = 1;
    for (const y of [75, 150, 225]) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(c.width, y); ctx.stroke(); }
  }
  function renderTrace() {
    let targets;
    if (view.unit != null && book(view.book)) {
      const ws = book(view.book).units[view.unit].words || [];
      targets = ws.map(w => w.en).filter(Boolean);
    }
    if (!targets || !targets.length) targets = ALPHABET;
    if (view.ti == null) view.ti = 0;
    const target = targets[view.ti];
    view.traceLogged = false;
    app.innerHTML = `
      <div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">✏️ 书写练习</div><div></div></div>
      <div class="card twrap">
        <div class="target-row">
          <button class="round" id="prev" ${view.ti === 0 ? 'disabled' : ''}>⬅️</button>
          <div class="target">${esc(target)}</div>
          <button class="round" id="next" ${view.ti === targets.length - 1 ? 'disabled' : ''}>➡️</button>
        </div>
        <div class="tpos">
          <canvas class="tcanvas" id="tcanvas" width="600" height="300"></canvas>
          <div class="tguide">${esc(target.length <= 3 ? target : target[0])}</div>
        </div>
        <div class="row">
          <button class="btn ghost small" id="clear">🗑 清除</button>
          <button class="btn small" id="say">🔊 听</button>
        </div>
      </div>
      <div class="tip">在灰色字迹上描摹，用手指或笔随写。</div>`;
    $('#bk').addEventListener('click', () => go('units', { book: view.book }));
    $('#prev').addEventListener('click', () => { view.ti--; renderTrace(); });
    $('#next').addEventListener('click', () => { view.ti++; renderTrace(); });
    $('#clear').addEventListener('click', clearTrace);
    $('#say').addEventListener('click', () => speak(target, playRate()));
    initTrace();
  }
  function initTrace() {
    const c = $('#tcanvas'); if (!c) return;
    const ctx = c.getContext('2d'); ctx.clearRect(0, 0, c.width, c.height); drawTraceGuide(ctx, c);
    let drawing = false;
    const pos = e => { const r = c.getBoundingClientRect(); return { x: (e.clientX - r.left) * (c.width / r.width), y: (e.clientY - r.top) * (c.height / r.height) }; };
    const down = e => {
      drawing = true;
      if (!view.traceLogged) { logActivity('trace'); view.traceLogged = true; }
      const p = pos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y);
      ctx.strokeStyle = '#ff9f1c'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    };
    const move = e => { if (!drawing) return; e.preventDefault(); const p = pos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); };
    const up = () => drawing = false;
    c.addEventListener('pointerdown', down);
    c.addEventListener('pointermove', move);
    c.addEventListener('pointerup', up);
    c.addEventListener('pointerleave', up);
  }
  function clearTrace() { const c = $('#tcanvas'); if (c) { const ctx = c.getContext('2d'); ctx.clearRect(0, 0, c.width, c.height); drawTraceGuide(ctx, c); } }

  /* ---------------- 填空练习（Cloze，对应 Lucia 的"还原原句"任务） ---------------- */
  function buildClozeQuestions(u) {
    const ss = (u.sentences || []).filter(function (s) { return s.en && s.en.split(/\s+/).length >= 4; });
    const STOP = /^(the|a|an|and|or|to|is|are|am|was|were|of|in|on|at|for|with|it|he|she|we|you|they|my|your|our|their|this|that|these|those|i|be|do|does|did|can|will|not|no|me|him|her|us|them|as|so|but|if|from|by)$/i;
    const basePool = ((u.words || []).map(function (w) { return w.en; }).filter(Boolean).concat(dedupeByEn(allReadyWords()).map(function (w) { return w.en; })))
      .filter(function (x) { return !/\s/.test(x) && /^[A-Za-z]/i.test(x); });
    return shuffle(ss).slice(0, Math.min(8, ss.length)).map(function (s) {
      const tokens = s.en.split(/\s+/);
      const cands = tokens.map(function (t, i) { return { t: t, i: i }; }).filter(function (o) {
        const w = o.t.replace(/[^A-Za-z]/g, '');
        return w.length >= 3 && !STOP.test(w);
      });
      const holes = shuffle(cands).slice(0, Math.min(2, cands.length)).map(function (h, k) {
        const w = h.t.replace(/[^A-Za-z]/g, '').toLowerCase();
        const distract = shuffle(basePool.filter(function (x) { return x.toLowerCase() !== w; })).slice(0, 3).map(function (x) { return x.toLowerCase(); });
        return { i: h.i, k: k, word: w, opts: shuffle([w].concat(distract)) };
      }).sort(function (a, b) { return a.i - b.i; });
      if (!holes.length) return null;
      return { en: s.en, zh: s.zh, holes: holes };
    }).filter(Boolean).filter(function (q) { return q.holes.length; });
  }
  function renderCloze() {
    const b = book(view.book); const u = b.units[view.unit];
    if (view.cqi == null) {
      view.cqs = buildClozeQuestions(u);
      view.cqi = 0; view.cok = 0; view.cwr = []; view.cchecked = false; view.cpicks = null;
      if (!view.cqs.length) return go('unit', { book: view.book, unit: view.unit, tab: 'sent' });
    }
    if (view.cqi >= view.cqs.length) return renderClozeResult();
    const q = view.cqs[view.cqi];
    const picks = view.cpicks || (view.cpicks = q.holes.map(function () { return null; }));
    const checked = view.cchecked;
    const tokens = q.en.split(/\s+/);
    let hi = 0;
    const sentence = tokens.map(function (tk, i) {
      const h = q.holes.find(function (x) { return x.i === i; });
      if (!h) return '<span>' + esc(tk) + '</span>';
      const k = h.k; const p = picks[k]; hi++;
      let cls = 'hole', content;
      if (checked) {
        if ((p || '').toLowerCase() === h.word) { cls += ' ok'; content = esc(h.word); }
        else { cls += ' bad'; content = esc(h.word); }
      } else { cls += p ? '' : ' empty'; content = p ? esc(p) : '＿＿＿'; }
      return '<span class="' + cls + '" data-h="' + k + '">' + content + '</span>';
    }).join(' ');
    const allFilled = picks.every(function (p) { return p; });
    let body = '';
    body += '<div class="cloze">' + sentence + '</div>';
    body += '<div class="tip">点挖空处，从下方候选里选词填回原句。</div>';
    q.holes.forEach(function (h) {
      body += '<div style="margin-top:12px;">';
      body += '<div class="selmode" style="justify-content:center;margin-bottom:6px;color:#999;">— 空 ' + (h.k + 1) + ' —</div>';
      body += '<div class="opts">';
      h.opts.forEach(function (o) {
        let c = 'opt';
        if (checked) { if (o.toLowerCase() === h.word) c += ' right'; else if (picks[h.k] && picks[h.k].toLowerCase() === o.toLowerCase()) c += ' wrong'; }
        else if (picks[h.k] === o) c += ' right';
        body += '<button class="' + c + '" data-h="' + h.k + '" data-o="' + esc(o) + '"' + (checked ? ' disabled' : '') + '>' + esc(o) + '</button>';
      });
      body += '</div></div>';
    });
    const foot = checked
      ? '<button class="btn" id="next">➡️ 下一题</button><button class="btn ghost small" id="again">🔁 重做</button>'
      : (allFilled ? '<button class="btn" id="check">✅ 检查</button>' : '<button class="btn ghost" disabled>先选满所有空</button>');
    app.innerHTML =
      '<div class="topbar"><button class="back" id="bk">⬅️</button>' +
        '<div class="title">🧩 填空 ' + (view.cqi + 1) + '/' + view.cqs.length + '</div><div class="streak">✅' + view.cok + '</div></div>' +
      '<div class="card qcard">' + body +
        '<div class="row" style="margin-top:16px;">' + foot +
          '<button class="btn ghost small" id="say">🔊 听句子</button>' +
        '</div>' +
      '</div>';
    $('#bk').addEventListener('click', function () { go('unit', { book: view.book, unit: view.unit, tab: 'sent' }); });
    $('#say').addEventListener('click', function () { speak(q.en, playRate()); });
    $all('.opt').forEach(function (el) {
      el.addEventListener('click', function () {
        const k = +el.dataset.h;
        picks[k] = (picks[k] === el.dataset.o) ? null : el.dataset.o;
        renderCloze();
      });
    });
    $all('.hole').forEach(function (el) {
      el.addEventListener('click', function () { picks[+el.dataset.h] = null; renderCloze(); });
    });
    const chk = $('#check'); if (chk) chk.addEventListener('click', function () { view.cchecked = true; renderCloze(); });
    const nx = $('#next'); if (nx) nx.addEventListener('click', function () { view.cqi++; view.cchecked = false; view.cpicks = null; renderCloze(); });
    const ag = $('#again'); if (ag) ag.addEventListener('click', function () { view.cchecked = false; view.cpicks = q.holes.map(function () { return null; }); renderCloze(); });
  }
  function renderClozeResult() {
    const total = view.cqs.length, ok = view.cok;
    const pct = total ? Math.round(ok / total * 100) : 0;
    logActivity('cloze');
    autoMarkHomework(view.book, view.unit, 'cloze');
    const citems = view.cqs.map(q => ({ en: q.en, zh: q.zh }));
    app.innerHTML =
      '<div class="card result">' +
        '<div class="remoji">' + (pct >= 90 ? '🏆' : pct >= 60 ? '💪' : '🌱') + '</div>' +
        '<div class="rscore">' + pct + ' 分</div>' +
        '<div class="tip">填空正确 ' + ok + ' / ' + total + ' 句</div>' +
        rateSectionHtml(citems, 'sent') +
        '<div class="row"><button class="btn" id="again">🔁 再来一次</button><button class="btn ghost" id="back">返回</button></div>' +
      '</div>';
    $('#again').addEventListener('click', function () { view.cqi = null; renderCloze(); });
    $('#back').addEventListener('click', function () { go('unit', { book: view.book, unit: view.unit, tab: 'sent' }); });
    bindRateSection();
  }

  /* ---------------- 复习中心 ---------------- */
  function renderReview() {
    const due = reviewDue();
    if (!due.length) {
      app.innerHTML =
        '<div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">🔄 复习</div><div></div></div>' +
        '<div class="card empty">🎉 今天没有要复习的内容，去练点新内容吧！</div>';
      $('#bk').addEventListener('click', () => go('home'));
      return;
    }
    if (view.ri == null) view.ri = 0;
    if (view.ri >= due.length) return renderReviewDone(due.length);
    const it = due[view.ri];
    const isSent = it.type === 'sent';
    app.innerHTML =
      '<div class="topbar"><button class="back" id="bk">⬅️</button>' +
        '<div class="title">🔄 复习 ' + (view.ri + 1) + '/' + due.length + '</div>' +
        '<div class="streak">📌' + (due.length - view.ri) + '</div></div>' +
      '<div class="card qcard">' +
        (isSent
          ? '<div class="cloze">' + esc(it.en) + '</div><div class="dzh">' + esc(it.zh || '') + '</div>'
          : '<div class="qword">' + esc(it.en) + '</div><div class="dzh">' + esc(it.zh || '') + '</div>') +
        '<div class="row" style="margin-top:16px;"><button class="btn" id="say">🔊 听一下</button></div>' +
        '<div class="ratetit" style="margin-top:16px;">你记住了吗？</div>' +
        '<div class="ratebtns big" id="rb" data-type="' + it.type + '" data-en="' + esc(it.en) + '" data-zh="' + esc(it.zh || '') + '">' +
          '<button data-r="know">会 ✅</button>' +
          '<button data-r="unsure">不确定 🤔</button>' +
          '<button data-r="forget">忘了 🔁</button>' +
        '</div>' +
      '</div>';
    $('#bk').addEventListener('click', () => go('home'));
    $('#say').addEventListener('click', () => speak(it.en, playRate()));
    const rb = $('#rb');
    $all('button', rb).forEach(b => b.addEventListener('click', () => {
      rateReview(it.type, it.en, it.zh || '', b.dataset.r);
      view.ri++; renderReview();
    }));
  }
  function renderReviewDone(n) {
    logActivity('review');
    app.innerHTML =
      '<div class="topbar"><button class="back" id="bk">⬅️</button><div class="title">🔄 复习</div><div></div></div>' +
      '<div class="card result"><div class="remoji">🎉</div>' +
        '<div class="rscore">完成</div>' +
        '<div class="tip">本次复习 ' + n + ' 个内容，已按掌握度排好下次时间。</div>' +
        '<div class="row"><button class="btn" id="home">🏠 回首页</button></div></div>';
    $('#bk').addEventListener('click', () => go('home'));
    $('#home').addEventListener('click', () => go('home'));
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
