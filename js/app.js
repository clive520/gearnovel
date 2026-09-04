/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 核心前端應用邏輯
 */

(function () {
  'use strict';

  const DATA = window.GEAR_NOVELS_DATA;
  if (!DATA) {
    console.error("Gear novels data not found!");
    return;
  }

  // 本地狀態管理
  const STORAGE_KEYS = {
    THEME: 'gear_novel_theme',
    FONT_SIZE: 'gear_novel_font_size',
    PROGRESS: 'gear_novel_progress',
    BADGES: 'gear_novel_badges',
    BOOKMARKS: 'gear_novel_bookmarks',
    LANG: 'gear_novel_lang',
    PROPER_NOUN: 'gear_novel_proper_noun'
  };

  const state = {
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'sepia',
    fontSize: localStorage.getItem(STORAGE_KEYS.FONT_SIZE) || 'medium',
    unlockedBadges: JSON.parse(localStorage.getItem(STORAGE_KEYS.BADGES) || '[]'),
    progress: JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{"book-1": {"lastChapter": 1, "read": [1]}}'),
    bookmarks: JSON.parse(localStorage.getItem('gear_novel_bookmarks') || '[]'),
    readingLang: localStorage.getItem('gear_novel_lang') || 'zh',
    currentRoute: 'home',
    currentBookId: 'book-1',
    currentChapterId: 1
  };

  // 初始化主題與字級
  document.documentElement.setAttribute('data-theme', state.theme);
  document.documentElement.setAttribute('data-font-size', state.fontSize);

  // 音效合成器（使用 Web Audio API，無需外掛音訊檔）
  const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;
  function playTone(freq, duration = 0.1, type = 'sine') {
    if (!audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // 成就徽章系統
  function unlockBadge(badgeId) {
    if (!state.unlockedBadges.includes(badgeId)) {
      state.unlockedBadges.push(badgeId);
      localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(state.unlockedBadges));
      const badge = DATA.badges.find(b => b.id === badgeId);
      if (badge) {
        showToast(`🎉 解鎖新成就：${badge.icon} ${badge.name}！`, 'success');
        playTone(587.33, 0.15); // D5
        setTimeout(() => playTone(880, 0.3), 150); // A5
      }
    }
  }

  function saveProgress(bookId, chapterId) {
    if (!state.progress[bookId]) {
      state.progress[bookId] = { lastChapter: chapterId, read: [] };
    }
    state.progress[bookId].lastChapter = chapterId;
    if (!state.progress[bookId].read.includes(chapterId)) {
      state.progress[bookId].read.push(chapterId);
    }
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.progress));
    
    // 章節閱讀對應徽章解鎖（第一卷 1-10，第二卷 11-22）
    unlockBadge(chapterId);
  }

  // ================== 書籤管理系統 ==================
  function saveBookmarksToStorage() {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(state.bookmarks));
    updateNavBookmarkBadge();
  }

  function updateNavBookmarkBadge() {
    const count = state.bookmarks.length;
    const navBadge = document.getElementById('nav-bookmark-count');
    const mobBadge = document.getElementById('mobile-bookmark-count');
    const totalSpan = document.getElementById('modal-bookmark-total');

    if (navBadge) {
      if (count > 0) {
        navBadge.innerText = count;
        navBadge.classList.remove('hidden');
      } else {
        navBadge.classList.add('hidden');
      }
    }
    if (mobBadge) {
      if (count > 0) {
        mobBadge.innerText = count;
        mobBadge.classList.remove('hidden');
      } else {
        mobBadge.classList.add('hidden');
      }
    }
    if (totalSpan) {
      totalSpan.innerText = `${count} 個書籤`;
    }
  }

  function addBookmark(bookId, chapterId, scrollY, percent, snippet, paraIndex = null) {
    const book = DATA.books.find(b => b.id === bookId) || DATA.books[0];
    const chapter = book ? book.chapters.find(c => c.id === chapterId) : null;
    if (!book || !chapter) return;

    const now = new Date();
    const dateStr = `${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newBookmark = {
      id: 'bm_' + Date.now(),
      bookId,
      bookTitle: book.title,
      chapterId,
      chapterTitle: chapter.title,
      scrollY: Math.round(scrollY),
      percent: Math.round(percent),
      snippet: snippet || chapter.title,
      paraIndex: (paraIndex !== null && paraIndex !== undefined) ? parseInt(paraIndex, 10) : null,
      timestamp: Date.now(),
      dateStr
    };

    state.bookmarks.unshift(newBookmark);
    if (state.bookmarks.length > 30) state.bookmarks.pop();
    saveBookmarksToStorage();

    playTone(523.25, 0.1);
    setTimeout(() => playTone(659.25, 0.15), 80);
    showToast(`🔖 已在「${chapter.title} (${newBookmark.percent}%)」放入書籤！`, 'success');
  }

  function removeBookmark(id) {
    state.bookmarks = state.bookmarks.filter(b => b.id !== id);
    saveBookmarksToStorage();
    renderBookmarksModal();
    showToast('🗑️ 已移除該書籤', 'info');
  }

  function scrollToBookmarkPosition(bm) {
    let targetEl = null;
    if (bm.paraIndex !== null && bm.paraIndex !== undefined) {
      targetEl = document.querySelector(`[data-para-index="${bm.paraIndex}"]`);
    }

    if (targetEl) {
      // 跨語系或不同字級：動態計算目標段落在當前版面中的精確座標
      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
      setTimeout(() => {
        targetEl.classList.remove('bookmark-focus');
        void targetEl.offsetWidth;
        targetEl.classList.add('bookmark-focus');
      }, 250);
    } else {
      // 降級使用像素高度捲動
      window.scrollTo({ top: bm.scrollY, behavior: 'smooth' });
      applyBookmarkHighlight(bm.scrollY);
    }
  }

  function jumpToBookmark(id) {
    const bm = state.bookmarks.find(b => b.id === id);
    if (!bm) return;

    const modal = document.getElementById('bookmarks-modal');
    if (modal) modal.classList.add('hidden');

    const targetHash = `#/read/${bm.bookId}/${bm.chapterId}`;
    if (window.location.hash === targetHash) {
      scrollToBookmarkPosition(bm);
    } else {
      sessionStorage.setItem('target_bookmark_scroll', JSON.stringify({
        scrollY: bm.scrollY,
        paraIndex: bm.paraIndex !== undefined ? bm.paraIndex : null,
        id: bm.id
      }));
      navigate(targetHash);
    }
  }

  function applyBookmarkHighlight(targetY) {
    setTimeout(() => {
      const paras = document.querySelectorAll('.reader-content p, .reader-content h2, .reader-content h3');
      let closest = null;
      let minDiff = Infinity;
      paras.forEach(p => {
        const rect = p.getBoundingClientRect();
        const absTop = window.scrollY + rect.top;
        const diff = Math.abs(absTop - targetY);
        if (diff < minDiff) {
          minDiff = diff;
          closest = p;
        }
      });
      if (closest) {
        closest.classList.remove('bookmark-focus');
        void closest.offsetWidth;
        closest.classList.add('bookmark-focus');
      }
    }, 350);
  }

  function renderBookmarksModal() {
    const container = document.getElementById('bookmarks-list-container');
    if (!container) return;

    updateNavBookmarkBadge();

    if (state.bookmarks.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center text-slate-400">
          <div class="text-4xl mb-3">🔖</div>
          <div class="font-bold text-sm text-slate-600 dark:text-slate-300 mb-1">目前尚無任何書籤</div>
          <div class="text-xs text-slate-400 max-w-xs mx-auto">在閱讀任何章節時，點擊頂部工具列的「🔖 放入書籤」按鈕，就能精確記錄當前閱讀位置！</div>
        </div>
      `;
      return;
    }

    container.innerHTML = state.bookmarks.map(bm => `
      <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-amber-500/50 transition-all flex items-start justify-between gap-3 group">
        <div class="flex-1 cursor-pointer" onclick="window.jumpToBookmark('${bm.id}')">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="text-xs font-bold text-amber-600 px-2 py-0.5 rounded-md bg-amber-500/10">${bm.bookTitle}</span>
            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">${bm.chapterTitle}</span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold">${bm.percent}%</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-1 italic">
            「${bm.snippet}」
          </p>
          <div class="text-[10px] text-slate-400 flex items-center gap-3">
            <span>📅 ${bm.dateStr}</span>
            <span>📍 像素位置: ${bm.scrollY}px</span>
            <span class="text-amber-600 font-semibold group-hover:underline flex items-center gap-0.5">點此直接回上次位置 →</span>
          </div>
        </div>
        <button onclick="window.removeBookmark('${bm.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all" title="刪除此書籤">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    `).join('');
  }

  // 掛載至 window 供全域點擊事件呼叫
  window.jumpToBookmark = jumpToBookmark;
  window.removeBookmark = removeBookmark;
  window.renderBookmarksModal = renderBookmarksModal;

  // 吐司提示 (Toast Notification)
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-10 opacity-0 ${
      type === 'success' ? 'bg-amber-600 text-white font-medium' : 'bg-slate-800 text-white'
    }`;
    toast.innerHTML = `<span>⚙️</span><span>${message}</span>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-10', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('translate-y-10', 'opacity-0');
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  }

  // 簡易 Markdown 轉 HTML 解析器（支援語意段落索引 data-para-index）
  function parseMarkdown(md, isEnglish = false) {
    if (!md) return '';
    const blocks = md.split(/\r?\n\r?\n/).map(b => b.trim()).filter(b => b.length > 0);
    let html = '';

    for (let idx = 0; idx < blocks.length; idx++) {
      const b = blocks[idx];

      // 頂部大標題不在此處重複渲染
      if (b.startsWith('# ')) continue;

      // 二級標題
      if (b.startsWith('## ')) {
        const titleText = b.replace(/^##\s*/, '');
        html += `<h2 data-para-index="${idx}"><span class="text-amber-500">⚙️</span> ${formatInline(titleText, isEnglish)}</h2>`;
        continue;
      }

      // 三級標題
      if (b.startsWith('### ')) {
        const titleText = b.replace(/^###\s*/, '');
        html += `<h3 data-para-index="${idx}" class="text-xl font-bold text-amber-600 mt-6 mb-3">${formatInline(titleText, isEnglish)}</h3>`;
        continue;
      }

      // 分隔線
      if (b === '---') {
        html += '<hr class="my-8 border-amber-500/20" />';
        continue;
      }

      // 程式碼區塊
      if (b.startsWith('```')) {
        const codeText = b.replace(/```/g, '').trim();
        html += `<div data-para-index="${idx}" class="my-4 p-4 rounded-xl bg-slate-900 text-amber-300 font-mono text-sm overflow-x-auto shadow-inner border border-amber-500/20"><code>${escapeHtml(codeText)}</code></div>`;
        continue;
      }

      // 引言區塊
      if (b.startsWith('>')) {
        const lines = b.split('\n').map(l => l.replace(/^>\s*/, '').trim()).filter(l => l.length > 0);
        html += `<blockquote data-para-index="${idx}">` + lines.map(l => `<p>${formatInline(l, isEnglish)}</p>`).join('') + `</blockquote>`;
        continue;
      }

      // 列表區塊
      if (b.startsWith('* ') || b.startsWith('- ')) {
        const lines = b.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        html += `<ul data-para-index="${idx}" class="my-4 space-y-1">` + lines.map(l => `<li>${formatInline(l.replace(/^[\*\-]\s*/, ''))}</li>`).join('') + `</ul>`;
        continue;
      }

      // 一般段落
      html += `<p data-para-index="${idx}">${formatInline(b, isEnglish)}</p>`;
    }

    return html;
  }

  // 中英雙語對照排版解析器（支援語意段落索引 data-para-index）
  function renderBilingualContent(zhMd, enMd) {
    if (!zhMd || !enMd) return parseMarkdown(zhMd || enMd);

    const zhBlocks = zhMd.split(/\r?\n\r?\n/).map(b => b.trim()).filter(b => b.length > 0);
    const enBlocks = enMd.split(/\r?\n\r?\n/).map(b => b.trim()).filter(b => b.length > 0);

    let html = '';
    const maxLen = Math.max(zhBlocks.length, enBlocks.length);

    for (let i = 0; i < maxLen; i++) {
      const zh = zhBlocks[i] || '';
      const en = enBlocks[i] || '';

      // 大標題（第一級在外部另外渲染）
      if (zh.startsWith('# ')) {
        continue;
      }

      // 二級標題
      if (zh.startsWith('## ')) {
        const zhTitle = zh.replace(/^##\s*/, '');
        const enTitle = en.replace(/^##\s*/, '');
        html += `
          <h2 data-para-index="${i}" class="mt-10 mb-4 pb-2 border-b border-amber-500/20">
            <span class="text-amber-500">⚙️</span> ${formatInline(zhTitle, false)}
            ${en ? `<span class="block text-sm font-serif italic text-amber-700 dark:text-amber-400 font-normal mt-1">${formatInline(enTitle, true)}</span>` : ''}
          </h2>
        `;
        continue;
      }

      // 分隔線
      if (zh === '---' || en === '---') {
        html += '<hr class="my-8 border-amber-500/20" />';
        continue;
      }

      // 引言區塊
      if (zh.startsWith('>')) {
        html += `
          <div data-para-index="${i}" class="my-5 p-4 rounded-xl border-l-4 border-amber-500 bg-amber-500/5 space-y-2">
            <div class="text-sm font-medium text-slate-800 dark:text-slate-200">${formatInline(zh.replace(/^>\s*/gm, ''))}</div>
            ${en ? `<div class="text-xs font-serif italic text-slate-500 dark:text-slate-400 border-t border-amber-500/20 pt-2">${formatInline(en.replace(/^>\s*/gm, ''))}</div>` : ''}
          </div>
        `;
        continue;
      }

      // 程式碼區塊
      if (zh.startsWith('```')) {
        const codeText = zh.replace(/```/g, '').trim();
        html += `<div data-para-index="${i}" class="my-4 p-4 rounded-xl bg-slate-900 text-amber-300 font-mono text-sm overflow-x-auto shadow-inner border border-amber-500/20"><code>${escapeHtml(codeText)}</code></div>`;
        continue;
      }

      // 清單列表
      if (zh.startsWith('* ') || zh.startsWith('- ')) {
        html += `
          <div data-para-index="${i}" class="bilingual-pair my-4 pl-2 space-y-2">
            <div class="text-sm text-slate-800 dark:text-slate-200">${formatInline(zh, false)}</div>
            ${en ? `<div class="en-para text-xs">${formatInline(en, true)}</div>` : ''}
          </div>
        `;
        continue;
      }

      // 一般段落雙語對照
      html += `
        <div data-para-index="${i}" class="bilingual-pair mb-6">
          <p class="zh-para text-slate-800 dark:text-slate-200 leading-relaxed">${formatInline(zh, false)}</p>
          ${en ? `<p class="en-para text-slate-500 dark:text-slate-400 font-serif italic text-[15px] leading-relaxed border-l-2 border-amber-500/40 pl-3.5 mt-1">${formatInline(en, true)}</p>` : ''}
        </div>
      `;
    }

    return html;
  }

  // ================== 專名號自動標注引擎 (Proper Noun Annotator) ==================
  const PROPER_NAMES_ZH = [
    { name: '塞西莉亞', role: '天穹領航員與星穹聲學少女' },
    { name: '雷格艦長', role: '天穹浮空艦隊總司令' },
    { name: '雷格', role: '天穹浮空艦隊總司令' },
    { name: '巴克船長', role: '鐵錨幫改邪歸正老船長' },
    { name: '巴克', role: '鐵錨幫改邪歸正老船長' },
    { name: '老莫里斯', role: '千島海老守燈人' },
    { name: '莫里斯', role: '千島海老守燈人' },
    { name: '莫老', role: '千島海老守燈人' },
    { name: '誠遠山', role: '誠浩的爺爺 · 退休老校長' },
    { name: '邱校長', role: '鹿陽國小現任校長' },
    { name: '高老師', role: '自然科學實驗老師' },
    { name: '采修誠', role: '晨光堂老掌門 · 采婭玆的爺爺' },
    { name: '林嚴院長', role: '天樞科學院院長 · 林漪姉的父親' },
    { name: '林嚴', role: '天樞科學院院長 · 林漪姉的父親' },
    { name: '采婭玆', role: '女主角 · 晨光堂鐘錶學徒' },
    { name: '林漪姉', role: '女主角 · 天樞科學院天才少女' },
    { name: '罧貁銁', role: '男主角 · 雲海引航少年' },
    { name: '露露', role: '折耳機械萌狐' },
    { name: '雷諾', role: '天樞科學院傲慢學員' },
    { name: '誠浩', role: '男主角 · 齒輪解謎少年' },
    { name: '葉旖緁', role: '女主角 · 數據與光學少女' },
    { name: '將江', role: '男主角 · 機械動力大師' },
    { name: '皮可', role: '智慧機械貓頭鷹' },
    { name: '沈天成', role: '前機械導師' },
    { name: '嵐', role: '海風島暴風少女' }
  ];
  PROPER_NAMES_ZH.sort((a, b) => b.name.length - a.name.length);
  const ZH_NAME_MAP = Object.fromEntries(PROPER_NAMES_ZH.map(n => [n.name, n.role]));
  const ZH_NAME_REGEX = new RegExp('(' + PROPER_NAMES_ZH.map(n => n.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|') + ')', 'g');

  const PROPER_NAMES_EN = [
    { name: 'Cheng Hao', role: 'Protagonist' },
    { name: 'Ye Yijie', role: 'Protagonist' },
    { name: 'Jiang Jiang', role: 'Protagonist' },
    { name: 'Pico', role: 'Mechanical Owl' },
    { name: 'Cecilia', role: 'Sky Navigator' },
    { name: 'Captain Reg', role: 'Fleet Commander' },
    { name: 'Captain Buck', role: 'Airship Captain' },
    { name: 'Old Morris', role: 'Lighthouse Keeper' },
    { name: 'Morris', role: 'Lighthouse Keeper' },
    { name: 'Grandpa Cheng', role: 'Cheng\'s Grandpa' },
    { name: 'Cheng Yuan-Shan', role: 'Cheng\'s Grandpa' },
    { name: 'Principal Qiu', role: 'Principal' },
    { name: 'Teacher Gao', role: 'Science Teacher' },
    { name: 'Shen Tiancheng', role: 'Former Mentor' },
    { name: 'Lan', role: 'Storm Girl' },
    { name: 'Cai-Ya-Zi', role: 'Clockmaker Apprentice' },
    { name: 'Dawn', role: 'Clockmaker Apprentice (Cai-Ya-Zi)' },
    { name: 'Lin-Yi-Jie', role: 'Academy Prodigy' },
    { name: 'Vivi', role: 'Academy Prodigy (Lin-Yi-Jie)' },
    { name: 'Shen-You-Jun', role: 'Navigator Boy' },
    { name: 'Zephyr', role: 'Navigator Boy (Shen-You-Jun)' },
    { name: 'Lulu', role: 'Mechanical Fox' },
    { name: 'Renault', role: 'Academy Student' },
    { name: 'Master Cai', role: 'Dawn Hall Master' },
    { name: 'Director Lin', role: 'Academy Director' },
    { name: 'Lin Yan', role: 'Academy Director' }
  ];
  PROPER_NAMES_EN.sort((a, b) => b.name.length - a.name.length);
  const EN_NAME_MAP = Object.fromEntries(PROPER_NAMES_EN.map(n => [n.name, n.role]));
  const EN_NAME_REGEX = new RegExp('\\b(' + PROPER_NAMES_EN.map(n => n.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|') + ')\\b', 'g');

  function applyProperNouns(htmlStr, isEnglish = false) {
    if (!htmlStr) return '';
    const tokens = htmlStr.split(/(<[^>]+>)/);
    let inCode = false;
    let inExistingU = false;

    const res = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!token) continue;

      if (token.startsWith('<')) {
        const lower = token.toLowerCase();
        if (lower.startsWith('<code') || lower.startsWith('<pre')) inCode = true;
        else if (lower.startsWith('</code') || lower.startsWith('</pre')) inCode = false;
        else if (lower.startsWith('<u')) inExistingU = true;
        else if (lower.startsWith('</u')) inExistingU = false;
        res.push(token);
      } else {
        if (inCode || inExistingU) {
          res.push(token);
        } else {
          let text = token;
          if (!isEnglish) {
            text = text.replace(ZH_NAME_REGEX, (m) => {
              const role = ZH_NAME_MAP[m] || '人物';
              return `<u class="proper-noun" title="${m}（${role}）">${m}</u>`;
            });
          } else {
            text = text.replace(EN_NAME_REGEX, (m) => {
              const role = EN_NAME_MAP[m] || 'Character';
              return `<u class="proper-noun" title="${m} (${role})">${m}</u>`;
            });
          }
          res.push(text);
        }
      }
    }
    return res.join('');
  }

  function formatInline(str, isEnglish = false) {
    if (!str) return '';
    const inlined = str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/➡️/g, '<span class="text-amber-500 font-bold mx-1">➜</span>');
    return applyProperNouns(inlined, isEnglish);
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // 路由分發
  function navigate(hash) {
    window.location.hash = hash;
  }

  function handleRoute() {
    const hash = window.location.hash || '#/';
    window.scrollTo(0, 0);

    // 關閉手機抽屜
    const drawer = document.getElementById('chapter-drawer');
    if (drawer) drawer.classList.add('hidden');

    // 停止首頁輪播計時器（若存在）
    if (window.heroCarouselTimer) {
      clearInterval(window.heroCarouselTimer);
      window.heroCarouselTimer = null;
    }

    if (hash === '#/' || hash === '#/library') {
      renderLibrary();
    } else if (hash.startsWith('#/read/')) {
      const parts = hash.replace('#/read/', '').split('/');
      const bookId = parts[0] || 'book-1';
      const chapterId = parseInt(parts[1] || '1', 10);
      renderReader(bookId, chapterId);
    } else if (hash === '#/characters') {
      renderCharacters();
    } else if (hash === '#/puzzle-lab') {
      renderPuzzleLab();
    } else if (hash === '#/badges') {
      renderBadges();
    } else {
      renderLibrary();
    }
  }

  // 首頁輪播切換功能
  window.heroSlideIndex = 0;
  window.switchHeroSlide = function(targetIndex) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;
    
    const count = slides.length;
    let nextIndex = targetIndex;
    if (nextIndex < 0) nextIndex = count - 1;
    if (nextIndex >= count) nextIndex = 0;
    
    window.heroSlideIndex = nextIndex;
    
    slides.forEach((slide, idx) => {
      if (idx === nextIndex) {
        slide.classList.remove('hidden-slide');
        slide.classList.add('active');
      } else {
        slide.classList.add('hidden-slide');
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === nextIndex) {
        dot.className = 'hero-dot w-7 h-2.5 rounded-full bg-amber-500 transition-all shadow-sm';
      } else {
        dot.className = 'hero-dot w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-amber-400/60 transition-all';
      }
    });
  };

  // 頁面渲染器：書庫首頁
  function renderLibrary() {
    const container = document.getElementById('app-main');
    
    // 取出最新的藏書（最多 10 本，逆序讓最新出版的在最前）
    const carouselBooks = [...DATA.books].reverse().slice(0, 10);
    window.heroSlideIndex = 0;

    container.innerHTML = `
      <!-- Hero 藏書輪播展示區塊 -->
      <section id="hero-carousel-section" class="hero-carousel-container relative overflow-hidden rounded-3xl mb-12 border border-amber-500/20 shadow-xl" style="background: linear-gradient(135deg, rgba(217, 119, 6, 0.12) 0%, rgba(2, 132, 199, 0.08) 100%);">
        
        <!-- 背景旋轉齒輪裝飾 -->
        <div class="absolute -right-16 -top-16 opacity-10 pointer-events-none z-0">
          <svg class="w-96 h-96 spin-gear text-amber-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 13.5 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.07 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>
        </div>

        <!-- 輪播幻燈片群組 -->
        <div class="relative min-h-[380px] sm:min-h-[340px] flex items-center">
          ${carouselBooks.map((book, idx) => {
            const lastCh = state.progress[book.id] ? state.progress[book.id].lastChapter : 1;
            const isFirstChapterAvail = book.chapters && book.chapters.length > 0;
            const firstChId = isFirstChapterAvail ? book.chapters[0].id : 1;
            const isFirstSlide = idx === 0;

            return `
              <div class="hero-slide ${isFirstSlide ? 'active' : 'hidden-slide'} w-full p-8 md:p-12">
                <div class="max-w-2xl relative z-10">
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs sm:text-sm font-semibold mb-4">
                    <span>⚙️ 精選藏書 ${idx + 1}/${carouselBooks.length}</span>
                    <span class="w-1 h-1 rounded-full bg-amber-500"></span>
                    <span>${book.coverTag || book.status}</span>
                    <span class="w-1 h-1 rounded-full bg-amber-500 hidden sm:inline-block"></span>
                    <span class="hidden sm:inline-block">${book.targetAge}</span>
                  </div>
                  
                  <h1 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 text-slate-900 dark:text-white leading-tight">
                    ${book.title}
                  </h1>
                  <div class="text-base sm:text-xl font-bold text-amber-600 mb-4">
                    ${book.subtitle}
                  </div>
                  
                  <p class="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 line-clamp-3 md:line-clamp-4">
                    ${book.description}
                  </p>
                  
                  <div class="flex flex-wrap items-center gap-4">
                    ${isFirstChapterAvail ? `
                      <a href="#/read/${book.id}/${firstChId}" class="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-lg shadow-amber-600/25 flex items-center gap-2 transition-all hover:scale-105">
                        <span>📖 從頭開始閱讀 (第 ${firstChId} 章)</span>
                      </a>
                      ${lastCh > firstChId ? `
                        <a href="#/read/${book.id}/${lastCh}" class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold shadow-md flex items-center gap-2 transition-all">
                          <span>📖 繼續閱讀 (第 ${lastCh} 章)</span>
                        </a>
                      ` : ''}
                    ` : `
                      <button disabled class="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 font-bold cursor-not-allowed">
                        即將啟航 · 敬請期待
                      </button>
                    `}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- 左右切換按鈕 (多於 1 本時顯示) -->
        ${carouselBooks.length > 1 ? `
          <div class="absolute right-6 bottom-6 md:bottom-8 z-20 flex items-center gap-2">
            <button onclick="window.switchHeroSlide(window.heroSlideIndex - 1)" class="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-amber-500/20 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95" title="上一本藏書">
              ❮
            </button>
            <button onclick="window.switchHeroSlide(window.heroSlideIndex + 1)" class="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-amber-500/20 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95" title="下一本藏書">
              ❯
            </button>
          </div>

          <!-- 底部指示圓點 -->
          <div class="absolute left-8 md:left-12 bottom-6 z-20 flex items-center gap-2">
            ${carouselBooks.map((_, idx) => `
              <button onclick="window.switchHeroSlide(${idx})" class="hero-dot ${idx === 0 ? 'w-7 h-2.5 rounded-full bg-amber-500 shadow-sm' : 'w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-amber-400/60'} transition-all" title="第 ${idx + 1} 本：${carouselBooks[idx].title}"></button>
            `).join('')}
          </div>
        ` : ''}
      </section>

      <!-- 最近置入的精確書籤快捷卡 -->
      ${state.bookmarks.length > 0 ? `
        <div class="mb-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border-2 border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md bookmark-ribbon">
          <div class="flex items-start sm:items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-md flex-shrink-0">
              🔖
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600">上次閱讀書籤</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-200 font-bold">${state.bookmarks[0].bookTitle}</span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold">進度 ${state.bookmarks[0].percent}%</span>
              </div>
              <h4 class="text-base font-bold text-slate-900 dark:text-white">
                ${state.bookmarks[0].chapterTitle}
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 italic mt-0.5">
                「${state.bookmarks[0].snippet}」
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2.5 w-full sm:w-auto">
            <button onclick="window.jumpToBookmark('${state.bookmarks[0].id}')" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
              <span>回到上次精確位置</span>
              <span>→</span>
            </button>
            <button onclick="document.getElementById('bookmarks-modal').classList.remove('hidden'); window.renderBookmarksModal();" class="px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300" title="檢視所有書籤">
              全部 (${state.bookmarks.length})
            </button>
          </div>
        </div>
      ` : ''}

      <!-- 書庫總覽 -->
      <section class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <span>📚 藏書展示架</span>
              <span class="text-sm font-normal px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">共 ${DATA.books.length} 本</span>
            </h2>
            <p class="text-sm text-slate-500 mt-1">專為少兒打造的中長篇科幻解謎小說系列，持續擴充中</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${DATA.books.map((book, idx) => `
            <div class="rounded-2xl border ${idx === 0 ? 'border-amber-500/40 shadow-xl bg-gradient-to-b from-amber-500/5 to-transparent' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'} p-6 flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-md text-xs font-bold ${
                    book.status === '已完結' ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-600 border border-amber-500/30'
                  }">${book.status}</span>
                  <span class="text-xs text-slate-400">${book.targetAge}</span>
                </div>
                <h3 class="text-xl font-bold mb-1 text-slate-900 dark:text-white">${book.title}</h3>
                <p class="text-xs font-medium text-amber-600 mb-3">${book.subtitle}</p>
                <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-4 mb-4 leading-relaxed">${book.description}</p>
              </div>

              <div>
                <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>章節：${book.totalChapters}</span>
                  <span>字數：${book.totalWords ? (book.totalWords / 1000).toFixed(1) + 'k' : '連載中'}</span>
                </div>
                ${book.chapters && book.chapters.length > 0 ? `
                  <a href="#/read/${book.id}/${book.chapters[0].id}" class="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold flex items-center justify-center gap-2 transition-all">
                    <span>開始線上閱讀</span> ➜
                  </a>
                ` : `
                  <button disabled class="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-medium cursor-not-allowed">
                    即將啟航 · 敬請期待
                  </button>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // 啟動首頁藏書自動輪播（若有多本藏書）
    if (carouselBooks.length > 1) {
      function startHeroAutoplay() {
        if (window.heroCarouselTimer) clearInterval(window.heroCarouselTimer);
        window.heroCarouselTimer = setInterval(() => {
          window.switchHeroSlide(window.heroSlideIndex + 1);
        }, 5500);
      }
      function stopHeroAutoplay() {
        if (window.heroCarouselTimer) {
          clearInterval(window.heroCarouselTimer);
          window.heroCarouselTimer = null;
        }
      }

      startHeroAutoplay();

      // 滑鼠懸停時暫停輪播，移開時繼續
      const carouselSec = document.getElementById('hero-carousel-section');
      if (carouselSec) {
        carouselSec.addEventListener('mouseenter', stopHeroAutoplay);
        carouselSec.addEventListener('mouseleave', startHeroAutoplay);
        // 觸控事件友好處理
        carouselSec.addEventListener('touchstart', stopHeroAutoplay, { passive: true });
        carouselSec.addEventListener('touchend', () => {
          setTimeout(startHeroAutoplay, 3000);
        }, { passive: true });
      }
    }
  }

  // 取得讀者當前視窗視線焦點所在之段落索引 (data-para-index)
  function getCurrentlyVisibleParaIndex() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    // 若讀者仍在章節頂部（大標題與導航列），切換語系時維持在頂部
    if (scrollY < 120) return null;

    const elements = document.querySelectorAll('.reader-content [data-para-index]');
    if (!elements.length) return null;

    // 閱讀焦點線位於頂部懸浮控制列下方 (約 130px 處)
    const focusY = 130;

    // 1. 優先判定：當前覆蓋/橫跨焦點線的段落 (頂部在焦點線之上，底部在焦點線之下)
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= focusY && rect.bottom >= focusY) {
        return parseInt(el.getAttribute('data-para-index'), 10);
      }
    }

    // 2. 次優先判定：焦點線正下方的第一個段落 (100px <= top <= 360px)
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 100 && rect.top <= 360) {
        return parseInt(el.getAttribute('data-para-index'), 10);
      }
    }

    // 3. 兜底判定：距離焦點線最近的段落
    let closest = null;
    let minDiff = Infinity;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const diff = Math.abs(rect.top - focusY);
      if (diff < minDiff) {
        minDiff = diff;
        closest = el;
      }
    });

    return closest ? parseInt(closest.getAttribute('data-para-index'), 10) : null;
  }

  // 頁面渲染器：沉浸式閱讀器
  function renderReader(bookId, chapterId, targetParaIndex = undefined) {
    const book = DATA.books.find(b => b.id === bookId) || DATA.books[0];
    const chapter = book.chapters.find(c => c.id === chapterId) || book.chapters[0];
    saveProgress(bookId, chapter.id);

    const prevChapter = book.chapters.find(c => c.id === chapterId - 1);
    const nextChapter = book.chapters.find(c => c.id === chapterId + 1);

    const container = document.getElementById('app-main');

    const hasEnglish = !!chapter.rawContentEn;
    let displayTitle = chapter.title;
    let displayContentHtml = '';

    if (hasEnglish && state.readingLang === 'en') {
      displayTitle = chapter.enTitle || chapter.title;
      displayContentHtml = parseMarkdown(chapter.rawContentEn, true);
    } else if (hasEnglish && state.readingLang === 'bilingual') {
      displayTitle = `${chapter.title} <span class="block text-base font-serif italic text-amber-600 font-normal mt-1">${chapter.enTitle || ''}</span>`;
      displayContentHtml = renderBilingualContent(chapter.rawContent, chapter.rawContentEn);
    } else {
      displayTitle = chapter.title;
      displayContentHtml = parseMarkdown(chapter.rawContent, false);
    }

    container.innerHTML = `
      <!-- 閱讀器頂部懸浮控制列 -->
      <div class="sticky top-16 z-30 mb-8 py-3 px-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <a href="#/" class="text-sm font-semibold text-slate-500 hover:text-amber-600 flex items-center gap-1">
            <span>← 書庫</span>
          </a>
          <span class="text-slate-300">|</span>
          <button id="btn-toggle-toc" class="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-amber-600 flex items-center gap-1.5">
            <span>📑 ${chapter.title}</span>
            <span class="text-xs text-slate-400">▾</span>
          </button>
        </div>

        <div class="flex items-center gap-2">
          <!-- 語系切換膠囊 (中文 / English / 中英雙語對照) -->
          ${hasEnglish ? `
            <div class="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-0.5 text-xs border border-slate-200 dark:border-slate-700/80">
              <button data-lang-btn="zh" class="px-2.5 py-1 rounded-lg font-bold transition-all ${state.readingLang === 'zh' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}" title="繁體中文版">中</button>
              <button data-lang-btn="en" class="px-2.5 py-1 rounded-lg font-bold transition-all ${state.readingLang === 'en' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}" title="English Edition">EN</button>
              <button data-lang-btn="bilingual" class="px-2.5 py-1 rounded-lg font-bold transition-all ${state.readingLang === 'bilingual' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}" title="中英雙語對照版">中英</button>
            </div>
          ` : ''}

          <!-- 放入書籤按鈕 -->
          <button id="btn-add-bookmark" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95" title="在目前閱讀位置放入書籤">
            <span>🔖</span>
            <span class="hidden sm:inline">放入書籤</span>
          </button>

          <!-- 查看書籤按鈕 -->
          <button id="btn-open-bookmarks-reader" class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1" title="查看所有書籤">
            <span>🔖</span>
            <span id="reader-bookmark-count" class="font-mono text-amber-600 font-bold">${state.bookmarks.filter(b => b.bookId === bookId).length}</span>
          </button>

          <!-- 密碼卡彈窗按鈕 -->
          ${chapter.puzzle ? `
            <button id="btn-open-puzzle" class="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 text-xs font-bold flex items-center gap-1.5 transition-all">
              <span>🧩 本章解密</span>
            </button>
          ` : ''}

          <!-- 字級調整選單 -->
          <!-- 專名號標注切換按鈕 -->
          <button id="btn-toggle-proper-noun" title="切換人名專名號（底線）顯示" class="px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1 ${
            state.showProperNoun 
              ? 'border-amber-500/50 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold' 
              : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }">
            <span class="underline underline-offset-2 decoration-1.5">名</span>
            <span class="hidden sm:inline">專名號</span>
          </button>

          <div class="relative">
            <button id="btn-font-menu" class="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
              字體 Aa
            </button>
            <div id="font-dropdown" class="hidden absolute right-0 mt-2 p-2 w-48 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 z-50 text-xs">
              <div class="font-bold mb-1.5 text-slate-400 px-2">字體大小</div>
              <div class="grid grid-cols-4 gap-1 mb-2">
                <button data-size="small" class="font-size-btn p-1.5 rounded text-center border ${state.fontSize === 'small' ? 'border-amber-500 bg-amber-500/10 text-amber-600 font-bold' : 'border-slate-200 dark:border-slate-700'}">小</button>
                <button data-size="medium" class="font-size-btn p-1.5 rounded text-center border ${state.fontSize === 'medium' ? 'border-amber-500 bg-amber-500/10 text-amber-600 font-bold' : 'border-slate-200 dark:border-slate-700'}">中</button>
                <button data-size="large" class="font-size-btn p-1.5 rounded text-center border ${state.fontSize === 'large' ? 'border-amber-500 bg-amber-500/10 text-amber-600 font-bold' : 'border-slate-200 dark:border-slate-700'}">大</button>
                <button data-size="xlarge" class="font-size-btn p-1.5 rounded text-center border ${state.fontSize === 'xlarge' ? 'border-amber-500 bg-amber-500/10 text-amber-600 font-bold' : 'border-slate-200 dark:border-slate-700'}">特</button>
              </div>
              <div class="font-bold mb-1.5 text-slate-400 px-2">閱讀主題</div>
              <div class="grid grid-cols-3 gap-1">
                <button data-theme-btn="sepia" class="p-1.5 rounded text-center bg-[#fbf7ee] text-[#382f24] border border-[#ebdccc] font-bold">護眼</button>
                <button data-theme-btn="light" class="p-1.5 rounded text-center bg-white text-slate-800 border border-slate-200 font-bold">純白</button>
                <button data-theme-btn="dark" class="p-1.5 rounded text-center bg-[#151e32] text-slate-200 border border-slate-700 font-bold">夜間</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 閱讀進度條 -->
      <div id="reading-progress-bar" class="fixed top-0 left-0 h-1 bg-amber-500 z-50 transition-all duration-100" style="width: 0%;"></div>

      <!-- 正文容器 -->
      <article class="reader-container max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 md:p-14 mb-12" data-reading-lang="${state.readingLang}">
        <header class="mb-10 pb-6 border-b border-amber-500/20">
          <div class="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            《${book.title}》
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            ${displayTitle}
          </h1>
          <div class="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
            <span>📖 約 ${chapter.wordCount} 字</span>
            <span>⏱️ 閱讀時間約 ${chapter.readTimeMin} 分鐘</span>
            <span class="text-amber-600">🔖 支援精準書籤</span>
            ${hasEnglish ? `<span class="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-bold">🌐 支援中 / 英 / 雙語對照</span>` : ''}
          </div>
        </header>

        <div class="reader-content ${state.showProperNoun ? '' : 'hide-proper-nouns'}">
          ${displayContentHtml}
        </div>

        <!-- 本章密碼卡區塊 -->
        ${chapter.puzzle ? `
          <div class="mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-sm">
            <div class="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-base mb-2">
              <span>🧩 小偵探密碼小百科：${chapter.puzzle.title}</span>
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              ${chapter.puzzle.concept}
            </p>
            <div class="p-3 rounded-lg bg-black/10 font-mono text-xs text-amber-700 dark:text-amber-300">
              <strong>本章線索：</strong> ${chapter.puzzle.cipher} ➜ <strong>破譯結果：</strong> ${chapter.puzzle.decoded}
            </div>
          </div>
        ` : ''}

        <!-- 上下一章導航按鈕 -->
        <footer class="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          ${prevChapter ? `
            <a href="#/read/${bookId}/${prevChapter.id}" class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 text-sm font-semibold flex items-center gap-1.5 transition-all">
              <span>← 上一章</span>
              <span class="hidden sm:inline text-xs text-slate-400">(${prevChapter.shortTitle})</span>
            </a>
          ` : `<div class="text-xs text-slate-400">已是第一章</div>`}

          <a href="#/" class="text-xs text-slate-500 hover:text-amber-600">回目錄</a>

          ${nextChapter ? `
            <a href="#/read/${bookId}/${nextChapter.id}" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold flex items-center gap-1.5 transition-all shadow-md">
              <span>下一章 →</span>
              <span class="hidden sm:inline text-xs text-amber-200">(${nextChapter.shortTitle})</span>
            </a>
          ` : `
            <a href="#/badges" class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold flex items-center gap-1 shadow-md">
              <span>🎉 恭喜讀完全卷！領取徽章</span>
            </a>
          `}
        </footer>
      </article>

      <!-- 章節抽屜 Modal -->
      <div id="toc-modal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
        <div class="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[80vh] flex flex-col">
          <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-4">
            <h3 class="font-bold text-lg text-slate-900 dark:text-white">📑 《${book.title}》全回目錄</h3>
            <button id="btn-close-toc" class="text-slate-400 hover:text-slate-600 text-xl font-bold">✕</button>
          </div>
          <div class="overflow-y-auto space-y-1.5 flex-1 pr-1">
            ${book.chapters.map(ch => `
              <a href="#/read/${bookId}/${ch.id}" class="p-3 rounded-xl flex items-center justify-between transition-all ${
                ch.id === chapterId ? 'bg-amber-500 text-white font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }">
                <span class="text-sm line-clamp-1">${ch.title}</span>
                <span class="text-xs opacity-75">${ch.wordCount}字</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // 監聽進度條捲動
    window.onscroll = function () {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const bar = document.getElementById('reading-progress-bar');
      if (bar) bar.style.width = scrolled + '%';
    };

    // 事件綁定：字體大小調節選單
    const fontMenuBtn = document.getElementById('btn-font-menu');
    const fontDropdown = document.getElementById('font-dropdown');
    if (fontMenuBtn && fontDropdown) {
      fontMenuBtn.onclick = (e) => {
        e.stopPropagation();
        fontDropdown.classList.toggle('hidden');
      };
      document.onclick = () => fontDropdown.classList.add('hidden');
    }

    // 字體大小按鈕
    document.querySelectorAll('.font-size-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const size = btn.getAttribute('data-size');
        if (state.fontSize === size) return;
        const currentParaIndex = getCurrentlyVisibleParaIndex();
        state.fontSize = size;
        localStorage.setItem(STORAGE_KEYS.FONT_SIZE, size);
        document.documentElement.setAttribute('data-font-size', size);
        renderReader(bookId, chapterId, currentParaIndex);
      };
    });

    // 主題切換按鈕
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const theme = btn.getAttribute('data-theme-btn');
        if (state.theme === theme) return;
        const currentParaIndex = getCurrentlyVisibleParaIndex();
        state.theme = theme;
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
        document.documentElement.setAttribute('data-theme', theme);
        renderReader(bookId, chapterId, currentParaIndex);
      };
    });

    // 語系切換按鈕事件
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang-btn');
        if (state.readingLang === lang) return;
        // 精準記錄切換前讀者視線所在的段落索引
        const currentParaIndex = getCurrentlyVisibleParaIndex();
        state.readingLang = lang;
        localStorage.setItem(STORAGE_KEYS.LANG, lang);
        playTone(580, 0.08);
        renderReader(bookId, chapterId, currentParaIndex);
      };
    });

    // 目錄抽屜
    const btnToggleToc = document.getElementById('btn-toggle-toc');
    const tocModal = document.getElementById('toc-modal');
    const btnCloseToc = document.getElementById('btn-close-toc');
    if (btnToggleToc && tocModal) {
      btnToggleToc.onclick = () => tocModal.classList.remove('hidden');
      if (btnCloseToc) btnCloseToc.onclick = () => tocModal.classList.add('hidden');
      tocModal.onclick = (e) => { if (e.target === tocModal) tocModal.classList.add('hidden'); };
    }

    // 放入書籤事件（結合語意段落索引與像素高度）
    const btnAddBookmark = document.getElementById('btn-add-bookmark');
    if (btnAddBookmark) {
      btnAddBookmark.onclick = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = height > 0 ? (scrollY / height) * 100 : 0;

        // 搜尋當前視窗頂端下緣最接近的語意段落元素
        const indexedEls = document.querySelectorAll('.reader-content [data-para-index]');
        let activeEl = null;
        let minDiff = Infinity;
        indexedEls.forEach(el => {
          const rect = el.getBoundingClientRect();
          const diff = Math.abs(rect.top - 120);
          if (diff < minDiff) {
            minDiff = diff;
            activeEl = el;
          }
        });

        const paraIndex = activeEl ? activeEl.getAttribute('data-para-index') : null;
        let snippet = '';
        if (activeEl) {
          snippet = activeEl.innerText.trim().slice(0, 48);
          if (activeEl.innerText.length > 48) snippet += '...';
        } else {
          const firstP = document.querySelector('.reader-content p');
          if (firstP) snippet = firstP.innerText.trim().slice(0, 48) + '...';
        }

        addBookmark(bookId, chapterId, scrollY, percent, snippet, paraIndex);

        // 更新閱讀器工具列的書籤計數
        const countSpan = document.getElementById('reader-bookmark-count');
        if (countSpan) {
          countSpan.innerText = state.bookmarks.filter(b => b.bookId === bookId).length;
        }
      };
    }

    // 閱讀器內開啟書籤列表
    const btnOpenBmReader = document.getElementById('btn-open-bookmarks-reader');
    if (btnOpenBmReader) {
      btnOpenBmReader.onclick = () => {
        const modal = document.getElementById('bookmarks-modal');
        if (modal) {
          modal.classList.remove('hidden');
          renderBookmarksModal();
        }
      };
    }

    // 檢查是否有等待精確捲動的書籤跳轉（跨章或從首頁點入）
    const pendingBm = sessionStorage.getItem('target_bookmark_scroll');
    if (pendingBm) {
      try {
        const bmData = JSON.parse(pendingBm);
        sessionStorage.removeItem('target_bookmark_scroll');
        setTimeout(() => {
          scrollToBookmarkPosition(bmData);
        }, 180);
      } catch (e) {
        console.warn(e);
      }
    }

    // 若傳入目標段落索引（如語系切換、字體調整時保持精確閱讀進度）
    if (targetParaIndex !== null && targetParaIndex !== undefined) {
      const lockToPara = () => {
        const targetEl = document.querySelector(`.reader-content [data-para-index="${targetParaIndex}"]`);
        if (targetEl) {
          const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - 110;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'instant' });
          targetEl.classList.remove('bookmark-focus');
          void targetEl.offsetWidth;
          targetEl.classList.add('bookmark-focus');
        }
      };
      requestAnimationFrame(() => {
        lockToPara();
        setTimeout(lockToPara, 60);
        setTimeout(lockToPara, 180);
      });
    } else if (targetParaIndex === null && (window.scrollY || 0) < 120) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // 快速開啟本章解密卡
    const btnOpenPuzzle = document.getElementById('btn-open-puzzle');
    if (btnOpenPuzzle) {
      btnOpenPuzzle.onclick = () => {
        navigate('#/puzzle-lab');
      };
    }
  }

  // 頁面渲染器：人物與裝備圖鑑
  let activeCharTab = 'all';

  window.switchCharTab = function(tab) {
    activeCharTab = tab;
    renderCharacters();
  };

  function renderCharacters() {
    const container = document.getElementById('app-main');
    const allChars = DATA.characters || [];
    const filteredChars = allChars.filter(char => {
      if (activeCharTab === 'all') return true;
      return char.vol === activeCharTab;
    });

    const series2Count = allChars.filter(c => c.vol === 'series2').length;
    const vol3Count = allChars.filter(c => c.vol === 'vol3').length;
    const vol2Count = allChars.filter(c => c.vol === 'vol2').length;
    const vol1Count = allChars.filter(c => c.vol === 'vol1').length;
    const coreCount = allChars.filter(c => c.vol === 'core').length;

    container.innerHTML = `
      <section class="max-w-4xl mx-auto mb-16">
        <div class="text-center max-w-xl mx-auto mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold mb-3">
            <span>👥 冒險齒輪 · 人物檔案誌</span>
          </div>
          <h1 class="text-3xl font-extrabold mb-3 text-slate-900 dark:text-white">登場人物與核心機密檔案</h1>
          <p class="text-sm text-slate-500">涵蓋第一套冒險三部曲與第二套《星願鐘擺與織光少女》，全系列共 ${allChars.length} 位核心主角、夥伴與導師檔案。</p>
        </div>

        <!-- 卷別切換標籤頁 -->
        <div class="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          <button onclick="window.switchCharTab('all')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeCharTab === 'all'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-amber-500'
          }">
            <span>全部人物</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] ${activeCharTab === 'all' ? 'bg-amber-700 text-amber-100' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}">${allChars.length}</span>
          </button>

          <button onclick="window.switchCharTab('series2')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeCharTab === 'series2'
              ? 'bg-rose-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-rose-500'
          }">
            <span>🌸 第二套 · 星願鐘擺</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] ${activeCharTab === 'series2' ? 'bg-rose-700 text-rose-100' : 'bg-rose-500/10 text-rose-600'}">${series2Count}</span>
          </button>

          <button onclick="window.switchCharTab('vol3')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeCharTab === 'vol3'
              ? 'bg-sky-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-sky-500'
          }">
            <span>🪽 第三卷 · 星穹浮空城</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] ${activeCharTab === 'vol3' ? 'bg-sky-700 text-sky-100' : 'bg-sky-500/10 text-sky-600'}">${vol3Count}</span>
          </button>

          <button onclick="window.switchCharTab('vol2')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeCharTab === 'vol2'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
          }">
            <span>⛵ 第二卷 · 千島齒輪海</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] ${activeCharTab === 'vol2' ? 'bg-emerald-700 text-emerald-100' : 'bg-emerald-500/10 text-emerald-600'}">${vol2Count}</span>
          </button>

          <button onclick="window.switchCharTab('core')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeCharTab === 'core'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-amber-500'
          }">
            <span>🎒 第一套核心群</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] ${activeCharTab === 'core' ? 'bg-amber-700 text-amber-100' : 'bg-amber-500/10 text-amber-600'}">${coreCount}</span>
          </button>

          <button onclick="window.switchCharTab('vol1')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeCharTab === 'vol1'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-500'
          }">
            <span>🏫 第一卷 · 鹿陽地下404</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] ${activeCharTab === 'vol1' ? 'bg-indigo-700 text-indigo-100' : 'bg-indigo-500/10 text-indigo-600'}">${vol1Count}</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${filteredChars.map(char => {
            let volBadgeClass = 'bg-amber-500/10 text-amber-600 border-amber-500/20';
            if (char.vol === 'series2') volBadgeClass = 'bg-rose-500/10 text-rose-600 border-rose-500/30';
            if (char.vol === 'vol3') volBadgeClass = 'bg-sky-500/10 text-sky-600 border-sky-500/30';
            if (char.vol === 'vol2') volBadgeClass = 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30';
            if (char.vol === 'vol1') volBadgeClass = 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30';

            return `
              <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between gap-3 mb-4">
                    <div class="flex items-start gap-4">
                      <div class="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-3xl border border-amber-500/20 shadow-inner flex-shrink-0">
                        ${char.avatar}
                      </div>
                      <div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <h3 class="text-xl font-bold text-slate-900 dark:text-white">${char.name}</h3>
                          <span class="text-xs text-slate-400 font-mono">(${char.enName})</span>
                        </div>
                        <div class="text-xs font-bold text-amber-600 mb-1">${char.role}</div>
                        <div class="text-[11px] text-slate-400">${char.class} · ${char.age}</div>
                      </div>
                    </div>
                    ${char.volName ? `
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap ${volBadgeClass}">
                        ${char.volName}
                      </span>
                    ` : ''}
                  </div>

                  ${char.badge ? `
                    <div class="mb-3 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-xs flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <span class="text-amber-500">🎖️</span>
                      <span class="font-bold text-amber-600">稱號/徽章：</span>
                      <span class="font-medium">${char.badge}</span>
                    </div>
                  ` : ''}

                  <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${char.desc}</p>
                </div>

                <div>
                  ${char.items ? `
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <div class="text-xs font-bold text-slate-400">專屬裝備與物件：</div>
                      ${char.items.map(item => `
                        <div class="text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                          <span class="font-bold text-amber-600">▪ ${item.name}：</span>
                          <span class="text-slate-600 dark:text-slate-300">${item.desc}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}

                  ${char.forms ? `
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <div class="text-xs font-bold text-slate-400">皮可的五大超導變形型態：</div>
                      ${char.forms.map((form, fIdx) => `
                        <div class="text-xs ${fIdx === 4 ? 'bg-sky-500/10 dark:bg-sky-900/30 border-sky-500/30 text-sky-900 dark:text-sky-200' : 'bg-amber-500/5 dark:bg-slate-800/60 border-amber-500/20'} p-2.5 rounded-xl border">
                          <span class="font-bold ${fIdx === 4 ? 'text-sky-600 dark:text-sky-400' : 'text-amber-600'}">★ ${form.name}：</span>
                          <span class="text-slate-600 dark:text-slate-300">${form.desc}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  // 輔助函數：多頻率同步和弦播放
  function playChord(freqList, duration = 1.0) {
    if (!audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      freqList.forEach(freq => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0005, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      });
    } catch (e) {
      console.warn("Chord audio error:", e);
    }
  }

  // 輔助函數：取得國際海事信號旗 (ICS) 的 SVG 標籤
  function getICSFlagSVG(letter) {
    const ch = (letter || '').toUpperCase();
    const svgs = {
      'A': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><path d="M0,0 L120,0 L90,40 L120,80 L0,80 Z" fill="#1e40af"/><rect width="50" height="80" fill="#ffffff"/></svg>`,
      'B': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><path d="M0,0 L120,0 L90,40 L120,80 L0,80 Z" fill="#dc2626"/></svg>`,
      'C': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#1e40af"/><rect y="16" width="120" height="48" fill="#ffffff"/><rect y="32" width="120" height="16" fill="#dc2626"/></svg>`,
      'D': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#facc15"/><rect y="20" width="120" height="40" fill="#1e40af"/></svg>`,
      'E': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="40" fill="#1e40af"/><rect y="40" width="120" height="40" fill="#dc2626"/></svg>`,
      'F': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#ffffff"/><polygon points="60,10 110,40 60,70 10,40" fill="#dc2626"/></svg>`,
      'G': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#facc15"/><rect x="20" width="20" height="80" fill="#1e40af"/><rect x="60" width="20" height="80" fill="#1e40af"/><rect x="100" width="20" height="80" fill="#1e40af"/></svg>`,
      'H': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="60" height="80" fill="#ffffff"/><rect x="60" width="60" height="80" fill="#dc2626"/></svg>`,
      'I': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#facc15"/><circle cx="60" cy="40" r="24" fill="#000000"/></svg>`,
      'J': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#1e40af"/><rect y="26.6" width="120" height="26.6" fill="#ffffff"/></svg>`,
      'K': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="60" height="80" fill="#facc15"/><rect x="60" width="60" height="80" fill="#1e40af"/></svg>`,
      'L': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="60" height="40" fill="#facc15"/><rect x="60" width="60" height="40" fill="#000000"/><rect y="40" width="60" height="40" fill="#000000"/><rect x="60" y="40" width="60" height="40" fill="#facc15"/></svg>`,
      'M': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#1e40af"/><polygon points="0,0 120,80 100,80 0,13.3" fill="#ffffff"/><polygon points="120,0 0,80 20,80 120,13.3" fill="#ffffff"/><polygon points="0,0 20,0 120,66.7 120,80" fill="#ffffff"/><polygon points="120,0 100,0 0,66.7 0,80" fill="#ffffff"/></svg>`,
      'N': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#ffffff"/><rect x="0" y="0" width="30" height="20" fill="#1e40af"/><rect x="60" y="0" width="30" height="20" fill="#1e40af"/><rect x="30" y="20" width="30" height="20" fill="#1e40af"/><rect x="90" y="20" width="30" height="20" fill="#1e40af"/><rect x="0" y="40" width="30" height="20" fill="#1e40af"/><rect x="60" y="40" width="30" height="20" fill="#1e40af"/><rect x="30" y="60" width="30" height="20" fill="#1e40af"/><rect x="90" y="60" width="30" height="20" fill="#1e40af"/></svg>`,
      'O': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><polygon points="0,0 120,0 0,80" fill="#facc15"/><polygon points="120,0 120,80 0,80" fill="#dc2626"/></svg>`,
      'P': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#1e40af"/><rect x="36" y="24" width="48" height="32" fill="#ffffff"/></svg>`,
      'Q': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#facc15"/></svg>`,
      'R': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#dc2626"/><rect x="48" width="24" height="80" fill="#facc15"/><rect y="28" width="120" height="24" fill="#facc15"/></svg>`,
      'S': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#ffffff"/><rect x="36" y="24" width="48" height="32" fill="#1e40af"/></svg>`,
      'T': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="40" height="80" fill="#dc2626"/><rect x="40" width="40" height="80" fill="#ffffff"/><rect x="80" width="40" height="80" fill="#1e40af"/></svg>`,
      'U': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="60" height="40" fill="#dc2626"/><rect x="60" width="60" height="40" fill="#ffffff"/><rect y="40" width="60" height="40" fill="#ffffff"/><rect x="60" y="40" width="60" height="40" fill="#dc2626"/></svg>`,
      'V': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#ffffff"/><polygon points="0,0 120,80 100,80 0,13.3" fill="#dc2626"/><polygon points="120,0 0,80 20,80 120,13.3" fill="#dc2626"/><polygon points="0,0 20,0 120,66.7 120,80" fill="#dc2626"/><polygon points="120,0 100,0 0,66.7 0,80" fill="#dc2626"/></svg>`,
      'W': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#1e40af"/><rect x="18" y="12" width="84" height="56" fill="#ffffff"/><rect x="36" y="24" width="48" height="32" fill="#dc2626"/></svg>`,
      'X': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#ffffff"/><rect x="48" width="24" height="80" fill="#1e40af"/><rect y="28" width="120" height="24" fill="#1e40af"/></svg>`,
      'Y': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><rect width="120" height="80" fill="#dc2626"/><polygon points="0,0 20,0 0,20" fill="#facc15"/><polygon points="40,0 70,0 0,70 0,40" fill="#facc15"/><polygon points="90,0 120,0 0,80" fill="#facc15"/><polygon points="120,20 120,50 40,80 10,80" fill="#facc15"/><polygon points="120,70 120,80 80,80" fill="#facc15"/></svg>`,
      'Z': `<svg viewBox="0 0 120 80" class="w-14 h-9 rounded shadow-sm inline-block border border-slate-200 dark:border-slate-700"><polygon points="0,0 120,0 60,40" fill="#000000"/><polygon points="0,80 120,80 60,40" fill="#dc2626"/><polygon points="0,0 0,80 60,40" fill="#facc15"/><polygon points="120,0 120,80 60,40" fill="#1e40af"/></svg>`
    };
    return svgs[ch] || `<div class="w-14 h-9 rounded border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-[10px] font-mono text-slate-400 inline-block bg-slate-50 dark:bg-slate-800">SPACE</div>`;
  }

  // 記錄實驗室當前頁籤狀態
  let activeLabTab = 'vol3';

  // 頁面渲染器：少年密碼實驗室 (Puzzle Lab - 全卷升級版)
  function renderPuzzleLab() {
    const container = document.getElementById('app-main');
    container.innerHTML = `
      <section class="max-w-4xl mx-auto mb-16">
        <div class="text-center max-w-xl mx-auto mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold mb-3">
            <span>🧩 動腦實驗室</span>
          </div>
          <h1 class="text-3xl font-extrabold mb-3 text-slate-900 dark:text-white">小偵探密碼破譯工作台</h1>
          <p class="text-sm text-slate-500">書中出現的真實密碼學、物理光學、流體力學、天體物理與十二平均律！動手操作，解開科學奧秘。</p>
        </div>

        <!-- 卷別切換頁籤 -->
        <div class="flex items-center justify-center flex-wrap gap-3 mb-10">
          <button id="tab-btn-series2" class="px-5 py-2.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeLabTab === 'series2' 
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/25' 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-rose-500'
          }">
            <span>🌸 第二套 · 星願鐘擺 (1項)</span>
            <span class="px-1.5 py-0.5 rounded-md text-[10px] ${activeLabTab === 'series2' ? 'bg-rose-700 text-rose-100' : 'bg-rose-500/20 text-rose-600'}">NEW!</span>
          </button>
          <button id="tab-btn-vol3"  class="px-5 py-2.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeLabTab === 'vol3' 
              ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25' 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-sky-500'
          }">
            <span>🪽 第三卷：天體音波與平流層 (4項)</span>
            <span class="px-1.5 py-0.5 rounded-md text-[10px] ${activeLabTab === 'vol3' ? 'bg-sky-700 text-sky-100' : 'bg-sky-500/20 text-sky-600'}">NEW!</span>
          </button>
          <button id="tab-btn-vol2" class="px-5 py-2.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeLabTab === 'vol2' 
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-amber-500'
          }">
            <span>🌊 第二卷：海事與光學流體 (4項)</span>
          </button>
          <button id="tab-btn-vol1" class="px-5 py-2.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeLabTab === 'vol1' 
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-500'
          }">
            <span>📘 第一卷：校園與機械電路 (3項)</span>
          </button>
        </div>

        <!-- 第二套實驗室內容 -->
        <div id="lab-section-series2" class="${activeLabTab === 'series2' ? 'space-y-8' : 'hidden'}">
          <!-- 實驗一：虎克定律發條熱膨脹與單擺等時週期模擬器 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>🌸 1. 虎克定律發條熱膨脹與單擺等時性模擬器（第 1 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">F = -kx × T = 2π√(L/g)</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              采婭玆在晨光堂旋緊第七號發條時，因金屬摩擦生熱導致微熱膨脹卡死崩斷！林漪姉則推導出透過單擺遊絲等時性週期進行熱補償的閉環公式。拖動發條旋緊圈數與熱補償開關，觀察能量儲存、溫度阻尼與擒縱輪轉動狀態：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  發條旋緊圈數（儲存彈性位能）：<span id="series2-turns-val" class="text-rose-600 font-mono text-sm">5 圈</span>
                </label>
                <input id="series2-turns-slider" type="range" min="1" max="10" value="5" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <div class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                  <div>
                    <span class="text-xs font-bold block text-slate-800 dark:text-slate-200">林漪姉熱補償等時方程</span>
                    <span class="text-[10px] text-slate-400">∂T / ∂(ΔT) ≡ 0 抵消微熱膨脹</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-compensation-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div class="space-y-1.5 text-xs font-mono">
                  <div class="flex justify-between text-slate-500">
                    <span>彈簧恢復力矩 F:</span>
                    <span id="series2-force-val" class="font-bold text-slate-700 dark:text-slate-300">-125 N</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>累積摩擦升溫 ΔT:</span>
                    <span id="series2-temp-val" class="font-bold text-amber-600">+15.0 °C</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>單擺等時週期 T:</span>
                    <span id="series2-period-val" class="font-bold text-sky-600">1.000 秒/次</span>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-status-badge" class="mb-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 系統運行順暢（等時諧振中）
                </div>
                <!-- 機械齒輪與擺針視覺化 -->
                <div class="relative w-32 h-32 flex items-center justify-center">
                  <div id="series2-gear-visual" class="w-24 h-24 rounded-full border-4 border-dashed border-rose-500 flex items-center justify-center animate-spin" style="animation-duration: 2s;">
                    <div class="w-12 h-12 rounded-full border-2 border-amber-400 bg-amber-500/20"></div>
                  </div>
                  <div id="series2-pendulum-needle" class="absolute top-2 w-1 h-28 bg-sky-400 origin-top transform transition-transform" style="transform: rotate(15deg);"></div>
                </div>
                <div id="series2-alert-msg" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  發條形變位能與單擺週期完美閉合，星願儀平穩轉動！
                </div>
              </div>
            </div>

            <!-- A1Z26 代換密碼解密區 -->
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div class="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-2">
                <span>🔐 A1Z26 字母代換解密機（林漪姉的雪花暗號）</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-3">刻在天樞第四副鐘樓銅壁上的密文序列：輸入數字序號（1-26），解碼對應英文字母。</p>
              <div class="flex items-center gap-2 flex-wrap">
                <input id="series2-cipher-input" type="text" value="04-01-23-14" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono w-44 font-bold text-rose-600 focus:outline-none focus:border-rose-500">
                <button id="series2-cipher-btn" class="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all">
                  執行解密
                </button>
                <div id="series2-cipher-output" class="px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-mono font-bold">
                  D - A - W - N  ➜  DAWN（晨曦 / 晨光堂）
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第三卷實驗室內容 -->
        <div id="lab-section-vol3" class="${activeLabTab === 'vol3' ? 'space-y-8' : 'hidden'}">
          <!-- 實驗一：十二平均律天體音叉共振儀 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-sky-600 dark:text-sky-400 flex items-center gap-2">
                <span>🔔 1. 十二平均律天體音叉共振儀（第 30 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-600 font-bold">聲學十二平均律 × 三階純律泛音</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              天穹鐘樓的十二平均律編鐘被暗物質黑晶阻滯！點擊 12 個天體鋼琴音鍵聆聽純正正弦波；開啟 B4 聖物音叉並激發三階超聲純律泛音（493.88 + 987.76 + 1481.64 Hz），觸發 180 dB 超聲空化，粉碎黑晶阻滯！
            </p>

            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-4">
              <div class="text-xs font-bold text-slate-500 mb-3 flex items-center justify-between">
                <span>十二平均律天體音階鍵盤（點擊試奏單音）：</span>
                <span id="note-freq-display" class="font-mono text-amber-600 text-xs">點擊按鈕試聽頻率</span>
              </div>
              <div id="note-keys-grid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                <!-- 琴鍵按鈕由 JS 自動渲染 -->
              </div>
            </div>

            <!-- 三階泛音激發控制區 -->
            <div class="p-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-amber-500/5 to-transparent border border-sky-500/30">
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3">
                <div>
                  <div class="text-xs font-bold text-slate-700 dark:text-slate-300">聖物音叉超聲共振和弦：</div>
                  <div class="text-[11px] font-mono text-slate-500 mt-0.5">基頻 B4 (493.88Hz) ＋ 二階泛音 (987.76Hz) ＋ 三階泛音 (1481.64Hz)</div>
                </div>
                <button id="btn-play-overtone" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-amber-600 hover:from-sky-500 hover:to-amber-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95">
                  <span>🎼 激發【三階超聲純律泛音和弦】</span>
                </button>
              </div>

              <!-- 黑晶共振條 -->
              <div class="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden mb-2">
                <div id="crystal-progress-bar" class="h-3 rounded-full bg-amber-500 transition-all duration-700" style="width: 15%;"></div>
              </div>
              <div id="crystal-status-text" class="text-xs font-mono text-slate-500 text-center sm:text-left">
                等待共鳴激發：暗物質黑晶阻滯中...
              </div>
            </div>
          </div>

          <!-- 實驗二：都卜勒動態頻移與 180° 反相激光湮滅器 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-sky-600 dark:text-sky-400 flex items-center gap-2">
                <span>⚡ 2. 都卜勒動態頻移與 180° 反相激光湮滅器（第 31 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 font-bold">相對論都卜勒 × 破壞性相干干涉</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              暗物質巨獸以速度 <strong>vs</strong> 迎面撲撞，其分子振動基頻（1200 Hz）因都卜勒效應動態藍移！由日冕核心發射反相激光（相位精確翻轉 180°），使合成總位移歸零（y_total ≡ 0），巨獸晶格瞬間沙化！
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>巨獸迎面撲撞速度 (vs):</span>
                  <span id="txt-monster-v" class="text-purple-600 font-mono text-sm font-bold">20.0 m/s</span>
                </div>
                <input id="slider-monster-v" type="range" min="0" max="30" step="0.5" value="20" class="w-full" />
                <div class="text-[11px] text-slate-400 mt-2 flex justify-between font-mono">
                  <span>平流層聲速 c ≈ 297.3 m/s</span>
                  <span>動態接收頻率：<strong id="txt-doppler-freq" class="text-purple-600 font-bold">1286.6 Hz</strong></span>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>日冕激光注入相位 (φ):</span>
                  <span id="txt-laser-phase" class="text-sky-600 font-mono text-sm font-bold">0°</span>
                </div>
                <input id="slider-laser-phase" type="range" min="0" max="360" step="1" value="0" class="w-full" />
                <div class="text-[11px] text-slate-400 mt-2 flex justify-between font-mono">
                  <span>0° (同相疊加)</span>
                  <span class="text-emerald-500 font-bold">180° (反相相消)</span>
                  <span>360°</span>
                </div>
              </div>
            </div>

            <!-- 示波器圖表 -->
            <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-2">
              <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block"></span> 巨獸波形 y1 (都卜勒動態)</span>
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span> 注入激光 y2 (相位可調)</span>
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span> 合成干涉總位移 y_total</span>
              </div>
              <canvas id="doppler-canvas" class="w-full h-36 rounded-lg bg-slate-900/60 border border-slate-800"></canvas>
            </div>

            <div id="doppler-verdict" class="mt-2 p-3 rounded-xl text-center text-xs font-mono"></div>
          </div>

          <!-- 實驗三：平流層氣壓高度與大氣標高計 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-sky-600 dark:text-sky-400 flex items-center gap-2">
                <span>🌡️ 3. 平流層氣壓高度與大氣標高計（第 23 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 font-bold">等溫氣壓標高公式 P(h) = P0 · e^(-h/H)</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              氣壓隨海拔升高呈指數型劇烈遞減！拖動高度滑桿，體驗氣壓標高 H ≈ 6438 公尺下的氣壓、溫度與空氣密度變化；點擊快捷按鈕逆推空難黑匣子的求救墜落高度：
            </p>

            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-4">
              <div class="flex justify-between text-xs font-bold mb-1">
                <span>當前飛行高度 (h):</span>
                <span id="txt-altitude-val" class="text-sky-600 font-mono text-base font-bold">8,650 公尺</span>
              </div>
              <input id="slider-altitude" type="range" min="0" max="12000" step="50" value="8650" class="w-full" />
              <div class="flex flex-wrap items-center gap-2 mt-3">
                <span class="text-xs font-bold text-slate-400">航行情境快捷鍵：</span>
                <button class="btn-alt-preset px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-sky-500/15 hover:text-sky-600 text-xs font-mono font-bold" data-alt="0">0m (海平面基準)</button>
                <button class="btn-alt-preset px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-sky-500/15 hover:text-sky-600 text-xs font-mono font-bold" data-alt="8650">8,650m (空難墜落警報)</button>
                <button class="btn-alt-preset px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-sky-500/15 hover:text-sky-600 text-xs font-mono font-bold" data-alt="10000">10,000m (平流層飛升)</button>
              </div>
            </div>

            <!-- 四大儀表即時顯示 -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div class="text-[11px] text-slate-400 mb-1">大氣壓強 P(h)</div>
                <div id="txt-pressure-val" class="text-base font-bold font-mono text-sky-600">264.8 hPa</div>
                <div class="text-[10px] text-slate-400 mt-0.5">海平面 1013.2 hPa</div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div class="text-[11px] text-slate-400 mb-1">環境溫度 T</div>
                <div id="txt-temp-val" class="text-base font-bold font-mono text-blue-600">-41.2 °C</div>
                <div class="text-[10px] text-slate-400 mt-0.5">垂直遞減 -6.5°C/km</div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div class="text-[11px] text-slate-400 mb-1">相對空氣密度</div>
                <div id="txt-density-val" class="text-base font-bold font-mono text-amber-600">26.1%</div>
                <div class="text-[10px] text-slate-400 mt-0.5">ρ / ρ0 浮力折損率</div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div class="text-[11px] text-slate-400 mb-1">標高常數 H</div>
                <div class="text-base font-bold font-mono text-emerald-600">6,438 m</div>
                <div class="text-[10px] text-slate-400 mt-0.5">RT / Mg 等溫特徵</div>
              </div>
            </div>

            <div id="altitude-alert-box" class="p-3.5 rounded-xl text-xs font-mono"></div>
          </div>

          <!-- 實驗四：克卜勒行星軌道共振天梯 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-sky-600 dark:text-sky-400 flex items-center gap-2">
                <span>🪐 4. 克卜勒行星軌道共振天梯（第 29 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold">天體力學 T^2/a^3 = K ｜ LCM 週期共振</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              千米懸空深淵上，三座行星齒輪天梯各自以克卜勒週期旋轉（內環 T1 = 16s、中環 T2 = 27s、外環 T3 = 48s）。拖曳時間軸尋找它們在天心對齊的最小公倍數共振窗口（LCM = 432 秒），飛躍天梯！
            </p>

            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-4">
              <div class="flex justify-between text-xs font-bold mb-1">
                <span>發條時間流逝 (t):</span>
                <span id="txt-orbit-time" class="text-sky-600 font-mono text-base font-bold">0 秒</span>
              </div>
              <input id="slider-orbit-time" type="range" min="0" max="600" step="1" value="0" class="w-full" />
              <div class="flex flex-wrap items-center gap-2 mt-3">
                <span class="text-xs font-bold text-slate-400">時間快速跳轉：</span>
                <button class="btn-orbit-preset px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-sky-500/15 hover:text-sky-600 text-xs font-mono font-bold" data-time="0">0s (起始)</button>
                <button class="btn-orbit-preset px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-sky-500/15 hover:text-sky-600 text-xs font-mono font-bold" data-time="108">108s (1/4 週期)</button>
                <button class="btn-orbit-preset px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-sky-500/15 hover:text-sky-600 text-xs font-mono font-bold" data-time="216">216s (半週期)</button>
                <button class="btn-orbit-preset px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-600 hover:bg-emerald-500/30 text-xs font-mono font-bold" data-time="432">⭐ 432s (天心完全共振)</button>
              </div>
            </div>

            <!-- 三天梯角度儀錶盤 -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
                <div class="text-xs font-bold text-slate-500 mb-2">內環天梯 (T1 = 16s)</div>
                <div class="w-16 h-16 rounded-full border-2 border-dashed border-sky-500 flex items-center justify-center relative my-1">
                  <div id="gear1-dial" class="w-1 h-7 bg-sky-500 absolute top-1 origin-bottom rounded transition-transform"></div>
                </div>
                <div class="text-xs font-mono font-bold text-sky-600 mt-1">相位角：<span id="gear1-angle">0°</span></div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
                <div class="text-xs font-bold text-slate-500 mb-2">中環天梯 (T2 = 27s)</div>
                <div class="w-16 h-16 rounded-full border-2 border-dashed border-amber-500 flex items-center justify-center relative my-1">
                  <div id="gear2-dial" class="w-1 h-7 bg-amber-500 absolute top-1 origin-bottom rounded transition-transform"></div>
                </div>
                <div class="text-xs font-mono font-bold text-amber-600 mt-1">相位角：<span id="gear2-angle">0°</span></div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
                <div class="text-xs font-bold text-slate-500 mb-2">外環天梯 (T3 = 48s)</div>
                <div class="w-16 h-16 rounded-full border-2 border-dashed border-purple-500 flex items-center justify-center relative my-1">
                  <div id="gear3-dial" class="w-1 h-7 bg-purple-500 absolute top-1 origin-bottom rounded transition-transform"></div>
                </div>
                <div class="text-xs font-mono font-bold text-purple-600 mt-1">相位角：<span id="gear3-angle">0°</span></div>
              </div>
            </div>

            <div id="resonance-status-box" class="p-3.5 rounded-xl text-xs font-mono"></div>
          </div>
        </div>

        <!-- 第二卷實驗室內容 -->
        <div id="lab-section-vol2" class="${activeLabTab === 'vol2' ? 'space-y-8' : 'hidden'}">
          <!-- 實驗一：國際海事信號旗語解碼機 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-amber-600 flex items-center gap-2">
                <span>🚩 1. 國際海事信號旗語解碼機（第 14 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 font-bold">海事通訊密碼</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              國際信號旗（ICS）是全球航海通用的視覺密碼系統！輸入任何英文單字或句子，即時升起對應的標準海事旗幟：
            </p>
            
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs font-bold text-slate-400">快速填入劇中密鑰：</span>
                <button class="btn-flag-preset px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/10 hover:text-amber-600 text-xs font-mono font-bold" data-word="PILOT">PILOT (燈塔水閘密鑰)</button>
                <button class="btn-flag-preset px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/10 hover:text-amber-600 text-xs font-mono font-bold" data-word="SOS">SOS (緊急呼救)</button>
                <button class="btn-flag-preset px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/10 hover:text-amber-600 text-xs font-mono font-bold" data-word="GEAR">GEAR (冒險齒輪)</button>
                <button class="btn-flag-preset px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/10 hover:text-amber-600 text-xs font-mono font-bold" data-word="PICO">PICO (機械摺紙犬)</button>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 mb-1">英文字母輸入（A-Z）：</label>
                <input id="ics-input" type="text" value="PILOT" class="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm uppercase tracking-wider" placeholder="輸入英文字母..." />
              </div>

              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <div class="text-xs font-bold text-slate-400 mb-3">信號旗幟懸掛陣列：</div>
                <div id="ics-flags-display" class="flex flex-wrap items-center gap-3 min-h-[50px]">
                  <!-- SVG 旗幟將即時渲染在此 -->
                </div>
              </div>
            </div>
          </div>

          <!-- 實驗二：阿基米德浮箱力矩平衡天平 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-amber-600 flex items-center gap-2">
                <span>⚖️ 2. 阿基米德浮箱力矩平衡天平（第 16 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold">流體浮力 × 槓桿力矩</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              深海 100 ATM 水壓猛烈衝擊水門！三組浮箱力臂分別為 <strong>L1 = 1m, L2 = 2m, L3 = 3m</strong>，總排水配重剛好為 <strong>11 格</strong>。調整三組水量，讓三組力矩（τ = V × L）完全平衡關死重壓門！
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>左浮箱 V1 (力臂 1m):</span>
                  <span id="txt-v1" class="text-amber-600 font-mono text-sm font-bold">6 格</span>
                </div>
                <input id="slider-v1" type="range" min="0" max="11" value="6" class="w-full" />
                <div class="text-[11px] text-slate-400 mt-2">平衡力矩：<span id="tau-v1" class="font-mono font-bold text-slate-700 dark:text-slate-200">6</span> 單位</div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>中浮箱 V2 (力臂 2m):</span>
                  <span id="txt-v2" class="text-amber-600 font-mono text-sm font-bold">3 格</span>
                </div>
                <input id="slider-v2" type="range" min="0" max="11" value="3" class="w-full" />
                <div class="text-[11px] text-slate-400 mt-2">平衡力矩：<span id="tau-v2" class="font-mono font-bold text-slate-700 dark:text-slate-200">6</span> 單位</div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>右浮箱 V3 (力臂 3m):</span>
                  <span id="txt-v3" class="text-amber-600 font-mono text-sm font-bold">2 格</span>
                </div>
                <input id="slider-v3" type="range" min="0" max="11" value="2" class="w-full" />
                <div class="text-[11px] text-slate-400 mt-2">平衡力矩：<span id="tau-v3" class="font-mono font-bold text-slate-700 dark:text-slate-200">6</span> 單位</div>
              </div>
            </div>

            <!-- 力矩狀態面板 -->
            <div id="archimedes-status-box" class="p-5 rounded-xl border transition-all">
              <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div class="text-xs font-bold text-slate-400">當前注水總量 / 力矩配比：</div>
                  <div id="archimedes-calc" class="font-mono font-bold text-sm mt-1">總水量：11 / 11 格 ｜ 力矩值：τ1=6, τ2=6, τ3=6</div>
                </div>
                <div id="archimedes-badge" class="px-4 py-2 rounded-xl text-xs font-bold"></div>
              </div>
            </div>
          </div>

          <!-- 實驗三：布魯斯特角偏光透鏡模擬器 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-amber-600 flex items-center gap-2">
                <span>🪞 3. 布魯斯特角偏光透鏡模擬器（第 17 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 font-bold">大氣逆溫 × 偏振光學</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              大氣逆溫層與全息投影製造出三座一模一樣的島嶼！旋轉護目鏡偏振轉輪至完全偏振角（tan(θB) = 1.00020 / 1.00035 ≈ 45.0°），消除水面反射眩光與全息激光虛像：
            </p>

            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-500">護目鏡偏振角度轉輪：</span>
                <span id="txt-polarizer-angle" class="text-amber-600 font-mono text-lg font-bold">0.0°</span>
              </div>
              <input id="slider-polarizer" type="range" min="0" max="90" step="1" value="0" class="w-full" />
              <div class="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>0° (未偏振)</span>
                <span class="text-amber-600 font-bold">45° (布魯斯特角)</span>
                <span>90° (垂直偏振)</span>
              </div>
            </div>

            <!-- 三島光學顯像區 -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- A 島 -->
              <div id="island-a" class="p-4 rounded-xl border text-center transition-all duration-300">
                <div class="text-2xl mb-1">🏝️</div>
                <div class="font-bold text-sm mb-1 text-slate-800 dark:text-slate-200">A 號島嶼</div>
                <div id="island-a-desc" class="text-xs text-slate-400">遠景輪廓模糊，水霧瀰漫</div>
              </div>
              <!-- B 島 -->
              <div id="island-b" class="p-4 rounded-xl border text-center transition-all duration-300">
                <div class="text-2xl mb-1">🏝️</div>
                <div class="font-bold text-sm mb-1 text-slate-800 dark:text-slate-200">B 號島嶼</div>
                <div id="island-b-desc" class="text-xs text-slate-400">遠景輪廓模糊，水霧瀰漫</div>
              </div>
              <!-- C 島 -->
              <div id="island-c" class="p-4 rounded-xl border text-center transition-all duration-300">
                <div class="text-2xl mb-1">🏝️</div>
                <div class="font-bold text-sm mb-1 text-slate-800 dark:text-slate-200">C 號島嶼</div>
                <div id="island-c-desc" class="text-xs text-slate-400">遠景輪廓模糊，水霧瀰漫</div>
              </div>
            </div>

            <div id="polarizer-verdict" class="mt-4 p-3 rounded-lg text-center text-xs font-bold font-mono"></div>
          </div>

          <!-- 實驗四：畢達哥拉斯五度相生律管風琴 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-amber-600 flex items-center gap-2">
                <span>🎵 4. 畢達哥拉斯五度相生律風琴諧波器（第 18 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 font-bold">聲學駐波 × 純律和弦</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              四根青銅石柱管長與頻率成反比（f ∝ 1/L）。點擊管柱試聽單音，或點擊「奏響天琴和弦」，產生純五度共振，平息夜光機械水母群並化解聲學懸浮！
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <button id="pipe-1" class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-amber-500 text-center transition-all">
                <div class="text-xs text-slate-400 mb-1">1號柱 (4.0m)</div>
                <div class="text-xl font-bold text-amber-600 font-mono">Do (C4)</div>
                <div class="text-[10px] text-slate-400 mt-1 font-mono">261.6 Hz · 比值 6</div>
              </button>
              <button id="pipe-2" class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-amber-500 text-center transition-all">
                <div class="text-xs text-slate-400 mb-1">2號柱 (3.0m)</div>
                <div class="text-xl font-bold text-amber-600 font-mono">Fa (F4)</div>
                <div class="text-[10px] text-slate-400 mt-1 font-mono">349.2 Hz · 比值 8</div>
              </button>
              <button id="pipe-3" class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-amber-500 text-center transition-all">
                <div class="text-xs text-slate-400 mb-1">3號柱 (2.67m)</div>
                <div class="text-xl font-bold text-amber-600 font-mono">Sol (G4)</div>
                <div class="text-[10px] text-slate-400 mt-1 font-mono">392.0 Hz · 比值 9</div>
              </button>
              <button id="pipe-4" class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-amber-500 text-center transition-all">
                <div class="text-xs text-slate-400 mb-1">4號柱 (2.0m)</div>
                <div class="text-xl font-bold text-amber-600 font-mono">High Do (C5)</div>
                <div class="text-[10px] text-slate-400 mt-1 font-mono">523.3 Hz · 比值 12</div>
              </button>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4">
              <button id="btn-play-chord" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all">
                <span>🎼 同步吹響【天琴純五度和弦】</span>
              </button>
              <div id="chord-status" class="text-xs font-mono text-slate-500 flex-1 text-center sm:text-left">
                點擊上方按鈕聆聽四大音頻疊加產生的相干諧波
              </div>
            </div>
          </div>
        </div>

        <!-- 第一卷實驗室內容 -->
        <div id="lab-section-vol1" class="${activeLabTab === 'vol1' ? 'space-y-8' : 'hidden'}">
          <!-- 工具一：A1Z26 字母代換機 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <h3 class="text-lg font-bold text-amber-600 mb-2 flex items-center gap-2">
              <span>1️⃣ A1Z26 密碼轉換機（第一章登場）</span>
            </h3>
            <p class="text-xs text-slate-500 mb-4">輸入英文單詞（如 DONT DRINK MILK）轉換為數字，或輸入數字（以空格或減號分開）還原英文！</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-1">英文字母輸入：</label>
                <input id="a1z26-text" type="text" value="DONT DRINK MILK" class="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm uppercase" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-1">A1Z26 數字代碼：</label>
                <input id="a1z26-num" type="text" class="w-full p-3 rounded-xl border border-amber-500/50 bg-amber-500/5 font-mono text-sm font-bold text-amber-600" readonly />
              </div>
            </div>
          </div>

          <!-- 工具二：布林邏輯門模擬器 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <h3 class="text-lg font-bold text-amber-600 mb-2 flex items-center gap-2">
              <span>2️⃣ 布林邏輯門真值驗證器（第四章登場）</span>
            </h3>
            <p class="text-xs text-slate-500 mb-4">公式：<code>Y = (A AND (NOT B)) OR (B AND C)</code>。點擊三個開關切換通電 (1) 或斷電 (0)，看看電磁脈衝是否會釋放！</p>
            <div class="flex flex-wrap items-center gap-4 mb-6">
              <button id="switch-a" class="px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all">紅閘 A：關 (0)</button>
              <button id="switch-b" class="px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all">藍閘 B：關 (0)</button>
              <button id="switch-c" class="px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all">黃閘 C：關 (0)</button>
            </div>
            <div id="logic-output" class="p-4 rounded-xl border font-mono text-sm flex items-center justify-between">
              <div>
                <div>輸出數值：<span id="logic-val" class="font-bold text-lg">0</span></div>
                <div id="logic-eval" class="text-xs text-slate-400 mt-1">Y = (0 AND 1) OR (0 AND 0) = 0</div>
              </div>
              <div id="logic-status" class="px-3 py-1 rounded-lg text-xs font-bold">休眠脈衝未觸發</div>
            </div>
          </div>

          <!-- 工具三：齒輪傳動比計算器 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <h3 class="text-lg font-bold text-amber-600 mb-2 flex items-center gap-2">
              <span>3️⃣ 齒輪傳動比計算機（第八章登場）</span>
            </h3>
            <p class="text-xs text-slate-500 mb-4">公式：<code>i = Z3 / Z1</code>（惰輪 Z2 僅改變旋轉方向，不影響總比值）。拖動滑桿觀察傳動比與最簡整數比！</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-1">主動輪齒數 Z1: <span id="val-z1" class="text-amber-600 font-bold">24</span></label>
                <input id="slider-z1" type="range" min="10" max="60" value="24" class="w-full" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-1">惰輪齒數 Z2 (不計入): <span id="val-z2" class="text-slate-400 font-bold">16</span></label>
                <input id="slider-z2" type="range" min="10" max="40" value="16" class="w-full opacity-60" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-1">從動輪齒數 Z3: <span id="val-z3" class="text-amber-600 font-bold">36</span></label>
                <input id="slider-z3" type="range" min="10" max="60" value="36" class="w-full" />
              </div>
            </div>
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
              <div class="text-xs text-slate-500">計算出的最簡整數傳動比：</div>
              <div id="gear-ratio-result" class="text-2xl font-black text-amber-600 mt-1">3 / 2 (1.50)</div>
              <div class="text-xs text-amber-700 dark:text-amber-300 mt-1">※ 旋鈕 A 設為 3，旋鈕 B 設為 2 即可解開第零天密鑰鎖！</div>
            </div>
          </div>
        </div>
      </section>
    `;

    // 頁籤切換事件
    const tabVol1 = document.getElementById('tab-btn-vol1');
    const tabVol2 = document.getElementById('tab-btn-vol2');
    const tabVol3 = document.getElementById('tab-btn-vol3');

    if (tabVol3) {
      tabVol3.onclick = () => {
        activeLabTab = 'vol3';
        renderPuzzleLab();
      };
    }
    if (tabVol2) {
      tabVol2.onclick = () => {
        activeLabTab = 'vol2';
        renderPuzzleLab();
      };
    }
    const tabSeries2 = document.getElementById('tab-btn-series2');
    if (tabSeries2) {
      tabSeries2.onclick = () => {
        activeLabTab = 'series2';
        renderPuzzleLab();
      };
    }

    if (tabVol1) {
      tabVol1.onclick = () => {
        activeLabTab = 'vol1';
        renderPuzzleLab();
      };
    }

    // ================== 第二套實驗邏輯 (虎克定律 & A1Z26) ==================
    const s2TurnsSlider = document.getElementById('series2-turns-slider');
    const s2CompToggle = document.getElementById('series2-compensation-toggle');
    const s2TurnsVal = document.getElementById('series2-turns-val');
    const s2ForceVal = document.getElementById('series2-force-val');
    const s2TempVal = document.getElementById('series2-temp-val');
    const s2PeriodVal = document.getElementById('series2-period-val');
    const s2StatusBadge = document.getElementById('series2-status-badge');
    const s2GearVisual = document.getElementById('series2-gear-visual');
    const s2AlertMsg = document.getElementById('series2-alert-msg');

    function updateSeries2Sim() {
      if (!s2TurnsSlider) return;
      const turns = parseInt(s2TurnsSlider.value, 10);
      const isComp = s2CompToggle ? s2CompToggle.checked : false;

      s2TurnsVal.textContent = `${turns} 圈`;
      const force = -25 * turns;
      s2ForceVal.textContent = `${force} N`;
      
      const tempRise = (turns * 3.0).toFixed(1);
      s2TempVal.textContent = `+${tempRise} °C`;

      if (!isComp && turns >= 7) {
        // 過熱卡死
        s2PeriodVal.textContent = '∞（齒輪卡死）';
        s2StatusBadge.className = 'mb-3 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
        s2StatusBadge.textContent = '⚠️ 發條過熱卡死！(Spring Seizure)';
        s2GearVisual.classList.remove('animate-spin');
        s2AlertMsg.textContent = '高溫導致金屬微膨脹，未啟用熱補償，第七號發條已過載卡死！';
      } else {
        const period = (1.000 + (isComp ? 0 : turns * 0.04)).toFixed(3);
        s2PeriodVal.textContent = `${period} 秒/次`;
        s2StatusBadge.className = 'mb-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
        s2StatusBadge.textContent = isComp ? '✨ 完美等時諧振中 (∂T/∂ΔT ≡ 0)' : '⚙️ 運轉中（有微小溫漂）';
        s2GearVisual.classList.add('animate-spin');
        s2GearVisual.style.animationDuration = `${Math.max(0.5, 3 - turns * 0.25)}s`;
        s2AlertMsg.textContent = isComp ? '林漪姉等時方程完全抵消熱膨脹，旋轉星願儀平穩運轉！' : '目前依靠純手工潤滑運轉，請注意散熱。';
      }
    }

    if (s2TurnsSlider) s2TurnsSlider.oninput = updateSeries2Sim;
    if (s2CompToggle) s2CompToggle.onchange = updateSeries2Sim;

    // A1Z26 解密器事件
    const s2CipherBtn = document.getElementById('series2-cipher-btn');
    const s2CipherInput = document.getElementById('series2-cipher-input');
    const s2CipherOutput = document.getElementById('series2-cipher-output');

    if (s2CipherBtn && s2CipherInput && s2CipherOutput) {
      s2CipherBtn.onclick = () => {
        const raw = s2CipherInput.value.trim();
        const parts = raw.split(/[- ,/]+/).filter(Boolean);
        const letters = parts.map(p => {
          const num = parseInt(p, 10);
          if (!isNaN(num) && num >= 1 && num <= 26) {
            return String.fromCharCode(64 + num);
          }
          return '?';
        });
        const word = letters.join('');
        s2CipherOutput.textContent = `${letters.join(' - ')}  ➜  ${word} ${word === 'DAWN' ? '（晨曦 / 晨光堂）' : ''}`;
      };
    }

    // ================== 第三卷實驗邏輯 ==================
    // 實驗一：十二平均律天體音叉共振儀 (Ch 30)
    const notesData = [
      { name: 'C4', freq: 261.63 },
      { name: 'C#4', freq: 277.18 },
      { name: 'D4', freq: 293.66 },
      { name: 'D#4', freq: 311.13 },
      { name: 'E4', freq: 329.63 },
      { name: 'F4', freq: 349.23 },
      { name: 'F#4', freq: 369.99 },
      { name: 'G4', freq: 392.00 },
      { name: 'G#4', freq: 415.30 },
      { name: 'A4', freq: 440.00 },
      { name: 'A#4', freq: 466.16 },
      { name: 'B4 (聖物)', freq: 493.88, isSacred: true }
    ];

    const noteKeysContainer = document.getElementById('note-keys-grid');
    const noteFreqDisplay = document.getElementById('note-freq-display');
    const btnOvertone = document.getElementById('btn-play-overtone');
    const crystalBar = document.getElementById('crystal-progress-bar');
    const crystalStatus = document.getElementById('crystal-status-text');

    if (noteKeysContainer) {
      noteKeysContainer.innerHTML = notesData.map(n => `
        <button class="btn-piano-key p-2.5 rounded-xl border text-center transition-all ${
          n.isSacred 
            ? 'border-amber-500 bg-amber-500/15 text-amber-600 font-bold hover:bg-amber-500/25 ring-2 ring-amber-500/30' 
            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-sky-500 text-slate-700 dark:text-slate-300'
        }" data-freq="${n.freq}" data-name="${n.name}">
          <div class="text-xs font-bold font-mono">${n.name}</div>
          <div class="text-[10px] text-slate-400 mt-1">${n.freq} Hz</div>
        </button>
      `).join('');

      document.querySelectorAll('.btn-piano-key').forEach(btn => {
        btn.onclick = () => {
          const freq = parseFloat(btn.getAttribute('data-freq'));
          const name = btn.getAttribute('data-name');
          playTone(freq, 0.4);
          if (noteFreqDisplay) {
            noteFreqDisplay.innerHTML = `當前奏響音符：<span class="text-amber-600 font-bold font-mono">${name} (${freq} Hz)</span> ｜ 公式：f = 261.63 × 2^(n/12)`;
          }
          if (crystalBar) crystalBar.style.width = '33%';
          if (crystalStatus) crystalStatus.innerText = '單音試奏中：暗物質黑晶受到輕微擾動 (33%)';
        };
      });

      if (btnOvertone) {
        btnOvertone.onclick = () => {
          // B4 fundamental (493.88) + 2nd harmonic (987.76) + 3rd harmonic (1481.64)
          playChord([493.88, 987.76, 1481.64], 1.8);
          if (crystalBar) {
            crystalBar.style.width = '100%';
            crystalBar.className = 'h-3 rounded-full bg-emerald-500 transition-all duration-700';
          }
          if (crystalStatus) {
            crystalStatus.innerHTML = '<span class="text-emerald-500 font-bold">✨【三階純律泛音超聲共振奏響】493.88 Hz + 987.76 Hz + 1481.64 Hz 形成 180 dB 空化效應！黑晶阻滯徹底粉碎！第十二個黃金音叉復甦！</span>';
          }
          showToast('🔔 第十二個音符黃金音叉已成功復甦！', 'success');
        };
      }
    }

    // 實驗二：都卜勒動態頻移與 180° 反相激光 (Ch 31)
    const sliderMonsterV = document.getElementById('slider-monster-v');
    const sliderLaserPhase = document.getElementById('slider-laser-phase');
    const canvasDoppler = document.getElementById('doppler-canvas');

    function drawDopplerWave() {
      if (!sliderMonsterV || !sliderLaserPhase || !canvasDoppler) return;
      const v = parseFloat(sliderMonsterV.value);
      const phaseDeg = parseInt(sliderLaserPhase.value, 10);
      const phaseRad = (phaseDeg * Math.PI) / 180;

      // c = 297.3 m/s, f_source = 1200 Hz
      const c = 297.3;
      const f_source = 1200;
      const f_observed = f_source * (c / (c - v));

      const txtV = document.getElementById('txt-monster-v');
      const txtFreq = document.getElementById('txt-doppler-freq');
      const txtPhase = document.getElementById('txt-laser-phase');
      if (txtV) txtV.innerText = `${v.toFixed(1)} m/s`;
      if (txtFreq) txtFreq.innerText = `${f_observed.toFixed(1)} Hz`;
      if (txtPhase) txtPhase.innerText = `${phaseDeg}°`;

      const ctx = canvasDoppler.getContext('2d');
      const w = canvasDoppler.width = canvasDoppler.parentElement.clientWidth || 600;
      const h = canvasDoppler.height = 144;

      ctx.clearRect(0, 0, w, h);

      // 基準中心線
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 繪製波形
      const freqScale = 0.045 * (f_observed / 1200);
      const amp = 26;

      // 巨獸波形 y1 (紫色)
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = h / 2 + Math.sin(x * freqScale) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 注入反相激光波形 y2 (藍色)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = h / 2 + Math.sin(x * freqScale + phaseRad) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // 合成干涉波形 y_total = y1 + y2 (綠色/琥珀色)
      const isAnnihilated = (phaseDeg >= 177 && phaseDeg <= 183);
      ctx.strokeStyle = isAnnihilated ? '#10b981' : '#f59e0b';
      ctx.lineWidth = isAnnihilated ? 3 : 2;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y1 = Math.sin(x * freqScale) * amp;
        const y2 = Math.sin(x * freqScale + phaseRad) * amp;
        const yTotal = h / 2 + (y1 + y2);
        if (x === 0) ctx.moveTo(x, yTotal);
        else ctx.lineTo(x, yTotal);
      }
      ctx.stroke();

      const verdictEl = document.getElementById('doppler-verdict');
      if (verdictEl) {
        if (isAnnihilated) {
          verdictEl.className = 'mt-2 p-3 rounded-xl text-center text-xs font-bold font-mono bg-emerald-500 text-white shadow-md transition-all';
          verdictEl.innerHTML = '🎉【180° 完全反相相位鎖定】波峰精確抵消波谷！合成總位移 y ≡ 0！暗物質黑晶巨獸分子晶格解離沙化！';
        } else {
          const residual = Math.abs(2 * Math.cos(phaseRad / 2) * 50);
          verdictEl.className = 'mt-2 p-3 rounded-xl text-center text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700';
          verdictEl.innerHTML = `⚠️ 當前相位差 ${phaseDeg}°：波形未抵消（殘留能量 ${residual.toFixed(0)}%）。請調整滑桿至 180°！`;
        }
      }
    }

    if (sliderMonsterV && sliderLaserPhase) {
      sliderMonsterV.oninput = drawDopplerWave;
      sliderLaserPhase.oninput = drawDopplerWave;
      setTimeout(drawDopplerWave, 60);
    }

    // 實驗三：平流層大氣標高計 (Ch 23)
    const sliderAltitude = document.getElementById('slider-altitude');
    function updateAltitudeSim() {
      if (!sliderAltitude) return;
      const h = parseFloat(sliderAltitude.value);
      // Barometric formula: P(h) = 1013.25 * exp(-h / 6438)
      const H = 6438;
      const P0 = 1013.25;
      const P = P0 * Math.exp(-h / H);
      const tempC = 15 - 0.0065 * h;
      const rhoRatio = Math.exp(-h / H);

      const elAlt = document.getElementById('txt-altitude-val');
      const elPress = document.getElementById('txt-pressure-val');
      const elTemp = document.getElementById('txt-temp-val');
      const elDens = document.getElementById('txt-density-val');
      if (elAlt) elAlt.innerText = `${Math.round(h)} 公尺`;
      if (elPress) elPress.innerText = `${P.toFixed(1)} hPa`;
      if (elTemp) elTemp.innerText = `${tempC.toFixed(1)} °C`;
      if (elDens) elDens.innerText = `${(rhoRatio * 100).toFixed(1)}%`;

      const alertBox = document.getElementById('altitude-alert-box');
      if (alertBox) {
        if (h >= 8550 && h <= 8750) {
          alertBox.className = 'p-3.5 rounded-xl border border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300 font-bold text-xs shadow-md transition-all';
          alertBox.innerHTML = '🚨【空難信標高度吻合！】氣壓約 260.9 hPa，墜落高度精準鎖定 8,650 公尺！立即啟動雙層氣囊改裝！';
        } else if (h >= 10000) {
          alertBox.className = 'p-3.5 rounded-xl border border-sky-500 bg-sky-500/10 text-sky-700 dark:text-sky-300 font-bold text-xs transition-all';
          alertBox.innerHTML = '🪽 已穿透平流層頂部！氣壓極低（不足海平面 25%），必須依賴超導密封座艙與增壓氧氣！';
        } else {
          alertBox.className = 'p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs transition-all';
          alertBox.innerHTML = '滑動上方滑桿，或點擊情境快捷鍵，觀察氣壓隨海拔指數衰減的大氣物理定律。';
        }
      }
    }

    if (sliderAltitude) {
      sliderAltitude.oninput = updateAltitudeSim;
      updateAltitudeSim();
      document.querySelectorAll('.btn-alt-preset').forEach(btn => {
        btn.onclick = () => {
          sliderAltitude.value = btn.getAttribute('data-alt');
          updateAltitudeSim();
        };
      });
    }

    // 實驗四：克卜勒行星軌道共振天梯 (Ch 29)
    const sliderTime = document.getElementById('slider-orbit-time');
    function updateOrbitalResonance() {
      if (!sliderTime) return;
      const t = parseInt(sliderTime.value, 10);
      const elTime = document.getElementById('txt-orbit-time');
      if (elTime) elTime.innerText = `${t} 秒`;

      // 週期 T1=16s, T2=27s, T3=48s => LCM = 432s
      const deg1 = Math.round(((t % 16) / 16) * 360);
      const deg2 = Math.round(((t % 27) / 27) * 360);
      const deg3 = Math.round(((t % 48) / 48) * 360);

      const elG1 = document.getElementById('gear1-angle');
      const elG2 = document.getElementById('gear2-angle');
      const elG3 = document.getElementById('gear3-angle');
      if (elG1) elG1.innerText = `${deg1}°`;
      if (elG2) elG2.innerText = `${deg2}°`;
      if (elG3) elG3.innerText = `${deg3}°`;

      const dial1 = document.getElementById('gear1-dial');
      const dial2 = document.getElementById('gear2-dial');
      const dial3 = document.getElementById('gear3-dial');
      if (dial1) dial1.style.transform = `rotate(${deg1}deg)`;
      if (dial2) dial2.style.transform = `rotate(${deg2}deg)`;
      if (dial3) dial3.style.transform = `rotate(${deg3}deg)`;

      const statusBox = document.getElementById('resonance-status-box');
      const isAligned = (deg1 === 0 && deg2 === 0 && deg3 === 0);

      if (statusBox) {
        if (isAligned) {
          statusBox.className = 'p-3.5 rounded-xl border border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-xs shadow-md transition-all';
          statusBox.innerHTML = '✨【432秒天體共振窗口完全同相！】內環(16s)、中環(27s)、外環(48s)三橋同時指向天心！懸空發條天梯對齊！18秒極速跨越成功！';
        } else {
          const diff = Math.abs(t - 432);
          statusBox.className = 'p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs transition-all';
          statusBox.innerHTML = `⚠️ 天梯未對齊！距離 LCM(16, 27, 48) = 432 秒共振對齊窗口還差 ${diff} 秒（或點選下方快捷鍵直接跳轉）。`;
        }
      }
    }

    if (sliderTime) {
      sliderTime.oninput = updateOrbitalResonance;
      updateOrbitalResonance();
      document.querySelectorAll('.btn-orbit-preset').forEach(btn => {
        btn.onclick = () => {
          sliderTime.value = btn.getAttribute('data-time');
          updateOrbitalResonance();
        };
      });
    }

    // ================== 第二卷實驗邏輯 ==================
    // 實驗一：ICS 旗語
    const icsInput = document.getElementById('ics-input');
    const icsDisplay = document.getElementById('ics-flags-display');
    function updateICSFlags() {
      if (!icsInput || !icsDisplay) return;
      const val = (icsInput.value || '').toUpperCase();
      let html = '';
      for (let ch of val) {
        if (ch >= 'A' && ch <= 'Z') {
          html += `
            <div class="flex flex-col items-center gap-1">
              ${getICSFlagSVG(ch)}
              <span class="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300">${ch}</span>
            </div>
          `;
        } else if (ch === ' ') {
          html += `
            <div class="flex flex-col items-center gap-1 px-1">
              ${getICSFlagSVG(' ')}
              <span class="text-[11px] font-mono text-slate-400">_</span>
            </div>
          `;
        }
      }
      icsDisplay.innerHTML = html || '<span class="text-xs text-slate-400">請在上方輸入英文字母...</span>';
    }
    if (icsInput) {
      icsInput.oninput = updateICSFlags;
      updateICSFlags();
      document.querySelectorAll('.btn-flag-preset').forEach(btn => {
        btn.onclick = () => {
          icsInput.value = btn.getAttribute('data-word');
          playTone(523.25, 0.1);
          updateICSFlags();
        };
      });
    }

    // 實驗二：阿基米德浮力力矩平衡
    const sV1 = document.getElementById('slider-v1');
    const sV2 = document.getElementById('slider-v2');
    const sV3 = document.getElementById('slider-v3');
    function updateArchimedes() {
      if (!sV1 || !sV2 || !sV3) return;
      const v1 = parseInt(sV1.value, 10);
      const v2 = parseInt(sV2.value, 10);
      const v3 = parseInt(sV3.value, 10);

      document.getElementById('txt-v1').innerText = `${v1} 格`;
      document.getElementById('txt-v2').innerText = `${v2} 格`;
      document.getElementById('txt-v3').innerText = `${v3} 格`;

      const t1 = v1 * 1;
      const t2 = v2 * 2;
      const t3 = v3 * 3;
      const totalWater = v1 + v2 + v3;

      document.getElementById('tau-v1').innerText = t1;
      document.getElementById('tau-v2').innerText = t2;
      document.getElementById('tau-v3').innerText = t3;

      const calcTxt = document.getElementById('archimedes-calc');
      const badge = document.getElementById('archimedes-badge');
      const box = document.getElementById('archimedes-status-box');

      const isTorqueBalanced = (t1 === t2 && t2 === t3 && t1 > 0);
      const isWaterCorrect = (totalWater === 11);

      calcTxt.innerText = `總水量：${totalWater} / 11 格 ｜ 力矩值：τ1=${t1}, τ2=${t2}, τ3=${t3}`;

      if (isTorqueBalanced && isWaterCorrect) {
        box.className = 'p-5 rounded-xl border border-emerald-500 bg-emerald-500/10 transition-all shadow-md';
        badge.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow';
        badge.innerText = '✓ 6:3:2 力矩完美平衡！水門卡死排空！';
      } else if (isTorqueBalanced && !isWaterCorrect) {
        box.className = 'p-5 rounded-xl border border-amber-500 bg-amber-500/10 transition-all';
        badge.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white';
        badge.innerText = '⚠️ 力矩相等但總水量需剛好11格！';
      } else {
        box.className = 'p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 transition-all';
        badge.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-600 dark:text-rose-400';
        badge.innerText = '✗ 力矩失衡！水門受壓狂湧！';
      }
    }
    if (sV1 && sV2 && sV3) {
      sV1.oninput = updateArchimedes;
      sV2.oninput = updateArchimedes;
      sV3.oninput = updateArchimedes;
      updateArchimedes();
    }

    // 實驗三：布魯斯特角偏光透鏡
    const sPol = document.getElementById('slider-polarizer');
    function updatePolarizer() {
      if (!sPol) return;
      const deg = parseInt(sPol.value, 10);
      document.getElementById('txt-polarizer-angle').innerText = `${deg.toFixed(1)}°`;

      const islandA = document.getElementById('island-a');
      const islandB = document.getElementById('island-b');
      const islandC = document.getElementById('island-c');
      const descA = document.getElementById('island-a-desc');
      const descB = document.getElementById('island-b-desc');
      const descC = document.getElementById('island-c-desc');
      const verdict = document.getElementById('polarizer-verdict');

      if (deg >= 43 && deg <= 47) {
        // 布魯斯特角精確鎖定
        islandA.className = 'p-4 rounded-xl border-2 border-rose-500 bg-rose-500/10 text-center transition-all duration-300';
        descA.innerHTML = '<span class="text-rose-600 dark:text-rose-400 font-bold">⚠️ 破譯為黑潮全息陷阱！密布深海漂雷</span>';

        islandB.className = 'p-4 rounded-xl border-2 border-amber-500 bg-amber-500/10 text-center transition-all duration-300';
        descB.innerHTML = '<span class="text-amber-600 dark:text-amber-400 font-bold">⚠️ 上蜃景虛像倒影！下方為地熱沸泉</span>';

        islandC.className = 'p-4 rounded-xl border-2 border-emerald-500 bg-emerald-500/10 text-center transition-all duration-300 shadow-md';
        descC.innerHTML = '<span class="text-emerald-600 dark:text-emerald-400 font-bold">✨ 唯一真實實體！玄武岩天琴礁島！</span>';

        verdict.className = 'mt-4 p-3 rounded-lg text-center text-xs font-bold font-mono bg-emerald-500 text-white shadow';
        verdict.innerText = '🎉【布魯斯特角 45.0° 鎖定】反射眩光全濾除！真實航向鎖定 C 號島嶼！';
      } else {
        islandA.className = 'p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center transition-all duration-300';
        descA.innerText = '遠景輪廓模糊，水霧瀰漫遮蔽細節';

        islandB.className = 'p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center transition-all duration-300';
        descB.innerText = '遠景輪廓模糊，水霧瀰漫遮蔽細節';

        islandC.className = 'p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center transition-all duration-300';
        descC.innerText = '遠景輪廓模糊，水霧瀰漫遮蔽細節';

        verdict.className = 'mt-4 p-3 rounded-lg text-center text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-500';
        verdict.innerText = '當前視線受水面反射強眩光干擾，請調整轉輪至 45° 布魯斯特角...';
      }
    }
    if (sPol) {
      sPol.oninput = updatePolarizer;
      updatePolarizer();
    }

    // 實驗四：畢達哥拉斯和弦琴
    const p1 = document.getElementById('pipe-1');
    const p2 = document.getElementById('pipe-2');
    const p3 = document.getElementById('pipe-3');
    const p4 = document.getElementById('pipe-4');
    const btnChord = document.getElementById('btn-play-chord');
    const chordStatus = document.getElementById('chord-status');

    if (p1 && p2 && p3 && p4 && btnChord) {
      p1.onclick = () => { playTone(261.63, 0.4); chordStatus.innerText = '吹響 1號柱：Do (C4, 261.6 Hz) 嵐的滑行艇蒸汽'; };
      p2.onclick = () => { playTone(349.23, 0.4); chordStatus.innerText = '吹響 2號柱：Fa (F4, 349.2 Hz) 巴克的海盜霧角'; };
      p3.onclick = () => { playTone(392.00, 0.4); chordStatus.innerText = '吹響 3號柱：Sol (G4, 392.0 Hz) 將江的黑鐵平底鍋'; };
      p4.onclick = () => { playTone(523.25, 0.4); chordStatus.innerText = '吹響 4號柱：High Do (C5, 523.3 Hz) 皮可的超導渦輪'; };

      btnChord.onclick = () => {
        playChord([261.63, 349.23, 392.00, 523.25], 1.5);
        chordStatus.innerHTML = '<span class="text-emerald-500 font-bold">✨【天琴純五度和弦奏響】聲學駐波抵消，紫晶星盤降落！夜光機械水母轉為極光藍！</span>';
        showToast('🎵 天琴純五度和弦已共振！駐波平息！', 'success');
      };
    }

    // ================== 第一卷實驗邏輯 ==================
    // 邏輯實作：A1Z26
    const a1Input = document.getElementById('a1z26-text');
    const a1Output = document.getElementById('a1z26-num');
    function updateA1() {
      if (!a1Input || !a1Output) return;
      const text = (a1Input.value || '').toUpperCase();
      const nums = [];
      for (let ch of text) {
        if (ch >= 'A' && ch <= 'Z') {
          const code = ch.charCodeAt(0) - 64;
          nums.push(code < 10 ? '0' + code : '' + code);
        } else if (ch === ' ') {
          nums.push('/');
        }
      }
      a1Output.value = nums.join('-');
    }
    if (a1Input) {
      a1Input.oninput = updateA1;
      updateA1();
    }

    // 邏輯實作：布林邏輯
    let swA = false, swB = false, swC = false;
    function updateLogic() {
      const notB = !swB;
      const part1 = swA && notB;
      const part2 = swB && swC;
      const result = part1 || part2;

      const btnA = document.getElementById('switch-a');
      const btnB = document.getElementById('switch-b');
      const btnC = document.getElementById('switch-c');
      const valSpan = document.getElementById('logic-val');
      const evalDiv = document.getElementById('logic-eval');
      const statusDiv = document.getElementById('logic-status');
      const outputBox = document.getElementById('logic-output');

      if (!btnA || !btnB || !btnC) return;

      btnA.className = `px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all ${swA ? 'bg-red-500 text-white border-red-600 shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-300 dark:border-slate-700'}`;
      btnA.innerText = `紅閘 A：${swA ? '開 (1)' : '關 (0)'}`;

      btnB.className = `px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all ${swB ? 'bg-blue-500 text-white border-blue-600 shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-300 dark:border-slate-700'}`;
      btnB.innerText = `藍閘 B：${swB ? '開 (1)' : '關 (0)'}`;

      btnC.className = `px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all ${swC ? 'bg-amber-500 text-white border-amber-600 shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-300 dark:border-slate-700'}`;
      btnC.innerText = `黃閘 C：${swC ? '開 (1)' : '關 (0)'}`;

      valSpan.innerText = result ? '1' : '0';
      valSpan.className = `font-bold text-lg ${result ? 'text-emerald-500' : 'text-slate-400'}`;
      evalDiv.innerText = `Y = (${swA ? 1 : 0} AND ${notB ? 1 : 0}) OR (${swB ? 1 : 0} AND ${swC ? 1 : 0}) = ${result ? 1 : 0}`;

      if (result) {
        statusDiv.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-white shadow-md';
        statusDiv.innerText = '✓ 全域蜂群休眠脈衝釋放！';
        outputBox.className = 'p-4 rounded-xl border border-emerald-500 bg-emerald-500/10 font-mono text-sm flex items-center justify-between';
      } else {
        statusDiv.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-500';
        statusDiv.innerText = '休眠脈衝未觸發';
        outputBox.className = 'p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 font-mono text-sm flex items-center justify-between';
      }
    }

    const btnA = document.getElementById('switch-a');
    const btnB = document.getElementById('switch-b');
    const btnC = document.getElementById('switch-c');
    if (btnA && btnB && btnC) {
      btnA.onclick = () => { swA = !swA; playTone(440); updateLogic(); };
      btnB.onclick = () => { swB = !swB; playTone(493.88); updateLogic(); };
      btnC.onclick = () => { swC = !swC; playTone(523.25); updateLogic(); };
      updateLogic();
    }

    // 邏輯實作：齒輪傳動比
    function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
    }
    function updateGear() {
      const z1El = document.getElementById('slider-z1');
      const z2El = document.getElementById('slider-z2');
      const z3El = document.getElementById('slider-z3');
      if (!z1El || !z2El || !z3El) return;

      const z1 = parseInt(z1El.value, 10);
      const z2 = parseInt(z2El.value, 10);
      const z3 = parseInt(z3El.value, 10);

      document.getElementById('val-z1').innerText = z1;
      document.getElementById('val-z2').innerText = z2;
      document.getElementById('val-z3').innerText = z3;

      const common = gcd(z3, z1);
      const num = z3 / common;
      const den = z1 / common;
      const ratioVal = (z3 / z1).toFixed(2);

      document.getElementById('gear-ratio-result').innerText = `${num} / ${den} (${ratioVal})`;
    }
    const sZ1 = document.getElementById('slider-z1');
    const sZ2 = document.getElementById('slider-z2');
    const sZ3 = document.getElementById('slider-z3');
    if (sZ1 && sZ2 && sZ3) {
      sZ1.oninput = updateGear;
      sZ2.oninput = updateGear;
      sZ3.oninput = updateGear;
      updateGear();
    }
  }

  // 頁面渲染器：閱讀成就徽章
  function renderBadges() {
    const container = document.getElementById('app-main');
    const total = DATA.badges.length;
    const unlockedCount = state.unlockedBadges.length;
    const percent = Math.round((unlockedCount / total) * 100);

    container.innerHTML = `
      <section class="max-w-4xl mx-auto mb-16">
        <div class="text-center max-w-xl mx-auto mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold mb-3">
            <span>🏆 閱讀冒險成就</span>
          </div>
          <h1 class="text-3xl font-extrabold mb-3 text-slate-900 dark:text-white">記憶黑客榮譽勳章</h1>
          <p class="text-sm text-slate-500">隨著閱讀章節推進，一步步解鎖屬於你的小偵探成就勳章！</p>
          
          <div class="mt-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between text-xs font-bold mb-2">
              <span>收集進度：${unlockedCount} / ${total} 枚</span>
              <span class="text-amber-600">${percent}%</span>
            </div>
            <div class="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div class="h-full bg-amber-500 rounded-full transition-all duration-500" style="width: ${percent}%;"></div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${DATA.badges.map(badge => {
            const isUnlocked = state.unlockedBadges.includes(badge.id);
            return `
              <div class="badge-card p-5 rounded-2xl border ${isUnlocked ? 'badge-unlocked' : 'badge-locked border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50'} flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner ${isUnlocked ? 'bg-amber-500/20' : 'bg-slate-200 dark:bg-slate-800'}">
                  ${badge.icon}
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h4 class="font-bold text-sm text-slate-900 dark:text-white">${badge.name}</h4>
                    <span class="text-[10px] px-2 py-0.5 rounded-full ${isUnlocked ? 'bg-emerald-500/10 text-emerald-600 font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}">
                      ${isUnlocked ? '已獲得' : '未解鎖'}
                    </span>
                  </div>
                  <p class="text-xs text-slate-500 leading-relaxed">${badge.desc}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  // 全域頂部導覽列與彈窗事件初始化
  function initGlobalEvents() {
    updateNavBookmarkBadge();

    // 快速主題切換
    const themeBtn = document.getElementById('nav-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const themeCycle = ['sepia', 'light', 'dark'];
    const themeMeta = {
      'sepia': { icon: '📜', label: '護眼紙張' },
      'light': { icon: '☀️', label: '純白模式' },
      'dark': { icon: '🌙', label: '夜間模式' }
    };

    function updateThemeUI(t) {
      if (themeIcon) themeIcon.innerText = themeMeta[t].icon;
      if (themeText) themeText.innerText = themeMeta[t].label;
    }
    updateThemeUI(state.theme);

    if (themeBtn) {
      themeBtn.onclick = () => {
        const nextIdx = (themeCycle.indexOf(state.theme) + 1) % themeCycle.length;
        state.theme = themeCycle[nextIdx];
        localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
        document.documentElement.setAttribute('data-theme', state.theme);
        updateThemeUI(state.theme);
        playTone(600, 0.05);
      };
    }

    // 行動端選單展開切換
    const mobBtn = document.getElementById('mobile-menu-btn');
    const mobMenu = document.getElementById('mobile-menu');
    if (mobBtn && mobMenu) {
      mobBtn.onclick = () => {
        mobMenu.classList.toggle('hidden');
      };
    }

    // 全域書籤彈窗開啟與關閉
    const navBmBtn = document.getElementById('nav-bookmarks-btn');
    const mobBmBtn = document.getElementById('mobile-bookmarks-btn');
    const bmModal = document.getElementById('bookmarks-modal');
    const btnCloseBm = document.getElementById('btn-close-bookmarks');

    function openBookmarksModal() {
      if (bmModal) {
        bmModal.classList.remove('hidden');
        renderBookmarksModal();
        if (mobMenu) mobMenu.classList.add('hidden');
      }
    }

    if (navBmBtn) navBmBtn.onclick = openBookmarksModal;
    if (mobBmBtn) mobBmBtn.onclick = openBookmarksModal;
    if (btnCloseBm && bmModal) {
      btnCloseBm.onclick = () => bmModal.classList.add('hidden');
      bmModal.onclick = (e) => {
        if (e.target === bmModal) bmModal.classList.add('hidden');
      };
    }
  }

  // 監聽網址 Hash 變動與 DOM 載入
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', () => {
    initGlobalEvents();
    handleRoute();
  });

})();
