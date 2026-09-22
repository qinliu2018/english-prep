// ==UserScript==
// @name         国家中小学智慧教育平台 - 教材PDF下载
// @namespace    https://english-prep.local
// @version      1.3
// @description  教材预览页：Tampermonkey菜单命令 + 悬浮按钮 + 快捷键(Alt+P) 三种方式触发；自动扫描 fetch/XHR/Performance/iframe-src(viewer?file=) 捕获PDF直链；打开前探测状态码，自动去掉 -private 绕过 401。GreasyFork 不可用时的本地兜底。
// @match        https://basic.smartedu.cn/*
// @match        https://*.smartedu.cn/*
// @match        https://www.zxx.edu.cn/*
// @match        https://*.zxx.edu.cn/*
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const captured = new Set();

  // 去掉 -private 以绕过 401 Authorization Required
  // 注意：平台私有 PDF 形如 xxx-private.pdf，-private 后面跟的是扩展名而非 / 或末尾，
  // 所以必须全局删除 -private 子串（不仅限于路径末尾）。
  function clean(u) {
    if (!u) return '';
    try {
      const url = new URL(u, location.href);
      url.pathname = url.pathname.replace(/-private/gi, '');   // 关键修复：删掉所有 -private
      url.searchParams.delete('private');
      return url.href;
    } catch (e) {
      return u.replace(/-private/gi, '');
    }
  }

  // 从 viewer.html?file=xxx 之类参数里抠出真正的 PDF 地址
  function extractPdf(u) {
    try {
      const url = new URL(u, location.href);
      if (url.searchParams.has('file')) {
        const f = url.searchParams.get('file');
        if (f) return f;
      }
    } catch (e) {}
    return u;
  }

  // 探测一个 URL 的 HTTP 状态码（拿到状态码后立即 abort，不下载正文）
  async function statusOf(u) {
    try {
      const ctrl = new AbortController();
      const r = await fetch(u, { method: 'GET', credentials: 'include', signal: ctrl.signal });
      ctrl.abort();
      return r.status;
    } catch (e) {
      return 0;
    }
  }

  // 给定一个原始 PDF 链接，优先返回「能打开」的那个（先试去 -private，再试原链）
  async function resolvePdf(raw) {
    const cands = [];
    const cleaned = clean(raw);
    if (cleaned && cleaned !== raw) { cands.push(cleaned); cands.push(raw); }
    else { cands.push(raw); }
    for (const u of cands) {
      const s = await statusOf(u);
      if (s === 200) return u;
    }
    // 都不返回 200：优先返回去 -private 的版本（多数情况去掉后公开CDN可访问，探测可能因CORS/范围请求受限而不准）
    return cleaned || raw;
  }

  // 策略1：hook fetch，捕获含 .pdf 的请求
  if (window.fetch) {
    const origFetch = window.fetch.bind(window);
    window.fetch = function (...args) {
      const arg = args[0];
      const url = typeof arg === 'string' ? arg : (arg && arg.url);
      if (url && /\.pdf/i.test(url)) captured.add(url);
      return origFetch(...args);
    };
  }

  // 策略2：hook XHR
  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    if (url && /\.pdf/i.test(url)) captured.add(url);
    return origOpen.call(this, method, url, ...rest);
  };

  // 策略3：扫描浏览器已加载的资源
  function scanPerformance() {
    if (!performance || !performance.getEntriesByType) return;
    performance.getEntriesByType('resource').forEach(function (r) {
      if (/\.pdf/i.test(r.name)) captured.add(r.name);
    });
  }

  // 策略4：扫描页面 DOM 里的 iframe/embed/object/a 的 src/href（阅读器常把 PDF 藏在 viewer?file= 参数里）
  function scanDom() {
    try {
      const els = document.querySelectorAll('iframe[src], embed[src], object[data], a[href]');
      els.forEach(function (el) {
        const s = el.getAttribute('src') || el.getAttribute('data') || el.getAttribute('href');
        if (s && /\.pdf|file=/.test(s)) captured.add(s);
      });
    } catch (e) {}
  }

  function candidates() {
    scanPerformance();
    scanDom();
    return Array.from(captured)
      .map(extractPdf)
      .filter(Boolean);
  }

  async function openPdf() {
    const urls = candidates();
    if (urls.length) {
      console.log('[EP] 捕获到PDF链接:', urls);
      const target = await resolvePdf(urls[0]);
      window.open(target, '_blank');
      return;
    }
    // 兜底：手动粘贴（用于跨域 iframe 场景，自动捕获看不到）
    const pasted = window.prompt(
      '未能自动捕获 PDF 链接。\n请在教材预览页按 F12 → Network → 过滤框输入 ".pdf" → 刷新页面 → 右键那条 .pdf 链接"复制链接地址"，粘贴到下面：\n（脚本会自动去掉 -private 尝试绕过 401）'
    );
    if (pasted && pasted.trim()) {
      const target = await resolvePdf(pasted.trim());
      window.open(target, '_blank');
    }
  }

  function makeButton(doc) {
    if (doc.getElementById('epPdfBtn')) return;
    const btn = doc.createElement('button');
    btn.id = 'epPdfBtn';
    btn.textContent = '📥 一键下载教材PDF';
    btn.style.cssText =
      'position:fixed;right:16px;bottom:16px;z-index:2147483647;' +
      'background:linear-gradient(135deg,#7c5cff,#5b8def);color:#fff;border:none;' +
      'padding:12px 16px;border-radius:999px;font-size:14px;font-weight:700;' +
      'box-shadow:0 4px 14px rgba(0,0,0,.25);cursor:pointer;font-family:sans-serif;';
    btn.addEventListener('click', function (e) { e.stopPropagation(); openPdf(); });
    (doc.body || doc.documentElement).appendChild(btn);
  }

  function injectAll() {
    try { makeButton(document); } catch (e) {}
    // 尝试注入到同源 iframe（跨域 iframe 无法访问，忽略）
    try {
      document.querySelectorAll('iframe').forEach(function (f) {
        try { if (f.contentDocument && f.contentDocument.body) makeButton(f.contentDocument); } catch (e) {}
      });
    } catch (e) {}
  }

  // 注册 Tampermonkey 菜单命令（最稳：不受页面布局/iframe 遮挡影响）
  if (typeof GM_registerMenuCommand === 'function') {
    GM_registerMenuCommand('📥 下载教材PDF', openPdf, 'p');
  }

  // 快捷键 Alt+P（悬浮按钮被遮挡时的备用）
  document.addEventListener('keydown', function (e) {
    if (e.altKey && (e.key === 'p' || e.key === 'P')) { e.preventDefault(); openPdf(); }
  });

  console.log('[EP] 教材PDF下载脚本已加载 v1.3（菜单命令 / 悬浮按钮 / Alt+P 三种触发，自动去 -private 绕 401）');

  injectAll();
  document.addEventListener('DOMContentLoaded', injectAll);
  [1500, 4000, 8000].forEach(function (t) { setTimeout(injectAll, t); });
  setInterval(injectAll, 3000);
  // 教材是动态加载的，定时补扫 DOM 里的 iframe src
  setInterval(scanDom, 2000);
})();
