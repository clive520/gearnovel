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

  // 智慧同步所有已讀進度的成就徽章（含第一套 1-32 與第二套新書章節）
  function syncProgressBadges() {
    if (!state.progress || !DATA.badges) return;
    let newlyUnlocked = false;

    DATA.badges.forEach(badge => {
      // 依據 bookId 與 chapterId 精確匹配
      if (badge.bookId && badge.chapterId !== undefined) {
        if (state.progress[badge.bookId] && state.progress[badge.bookId].read && state.progress[badge.bookId].read.includes(badge.chapterId)) {
          if (!state.unlockedBadges.includes(badge.id)) {
            state.unlockedBadges.push(badge.id);
            newlyUnlocked = true;
          }
        }
      } else if (badge.id <= 32) {
        // 第一套歷史相容處理
        let bId = 'book-1';
        if (badge.id >= 11 && badge.id <= 22) bId = 'book-2';
        if (badge.id >= 23 && badge.id <= 32) bId = 'book-3';
        if (state.progress[bId] && state.progress[bId].read && state.progress[bId].read.includes(badge.id)) {
          if (!state.unlockedBadges.includes(badge.id)) {
            state.unlockedBadges.push(badge.id);
            newlyUnlocked = true;
          }
        }
      }
    });

    if (newlyUnlocked) {
      localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(state.unlockedBadges));
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
    
    // 智慧定位該章節專屬徽章（精確區隔第一套與第二套新書章節）
    const badge = DATA.badges.find(b => 
      (b.bookId === bookId && b.chapterId === chapterId) ||
      (!b.bookId && b.id === chapterId && (
        (bookId === 'book-1' && chapterId <= 10) ||
        (bookId === 'book-2' && chapterId >= 11 && chapterId <= 22) ||
        (bookId === 'book-3' && chapterId >= 23 && chapterId <= 32)
      ))
    );

    if (badge) {
      unlockBadge(badge.id);
    }
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

    // 切換頁面時停止語音朗讀
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      if (window.storySpeaker) window.storySpeaker.reset();
    }

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

  // 頁面渲染器：書庫首頁（精簡雙套書專題架構）
  function renderLibrary() {
    const container = document.getElementById('app-main');
    const seriesList = window.GEAR_SERIES || [];

    // 若有書籤紀錄，取出最新一筆作為續讀膠囊
    const latestBookmark = (state.bookmarks && state.bookmarks.length > 0) ? state.bookmarks[0] : null;

    container.innerHTML = `
      <!-- 最近閱讀書籤續讀膠囊（有書籤時精簡展示） -->
      ${latestBookmark ? `
        <div class="mb-8 p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-md flex-shrink-0">🔖</span>
            <div>
              <div class="flex items-center gap-2 flex-wrap text-xs">
                <span class="font-bold text-amber-600 uppercase">繼續閱讀進度</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 font-bold">${latestBookmark.bookTitle}</span>
                <span class="font-mono text-slate-500 dark:text-slate-400 font-semibold">${latestBookmark.percent}%</span>
              </div>
              <div class="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                ${latestBookmark.chapterTitle}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2.5 w-full sm:w-auto">
            <button onclick="window.jumpToBookmark('${latestBookmark.id}')" class="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95">
              <span>回到上次位置</span> ➜
            </button>
            <button onclick="document.getElementById('bookmarks-modal').classList.remove('hidden'); window.renderBookmarksModal();" class="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
              全部書籤 (${state.bookmarks.length})
            </button>
          </div>
        </div>
      ` : ''}

      <!-- 精簡題頭 -->
      <div class="mb-10 text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold mb-3">
          <span>⚙️ 原創少兒科幻 · 精選套書體系</span>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          冒險齒輪 · 少兒科幻小說庫
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          專為 9～14 歲孩子打造的原創長篇科幻。融合 STEM 物理數學謎題、有聲伴讀體驗。
        </p>
      </div>

      <!-- 兩大旗艦套書專題展示區 (Series Showcase) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        <!-- 【套書一】冒險齒輪：失落的二十四小時（三部曲完結篇） -->
        <div class="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-slate-900/10 dark:to-slate-950/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all hover:shadow-2xl hover:border-amber-500/50">
          <div>
            <!-- 標籤與受眾 -->
            <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                🏆 第一套 · 全三卷完結旗艦套書
              </span>
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">9～14 歲少兒 · STEM 密碼解謎</span>
            </div>

            <!-- 標題與引言 -->
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              《冒險齒輪：失落的二十四小時》
            </h2>
            <p class="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 mb-4">
              當整個世界的星期三被神秘抹去，四位少年的記憶逆流大冒險！
            </p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              鹿陽國小的發明少年誠浩戴上爺爺留下的黃銅護目鏡，攜手邏輯學霸葉旖緁、死黨將江與機械柴犬皮可，從校園地下404室殺向萬米高空的星穹浮空城！融合摩斯密碼、二進位、白努利定理與十二平均律音波的硬核科學冒險！
            </p>

            <!-- 收錄全三卷列表 -->
            <div class="space-y-2.5 mb-6">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>📚 收錄全三卷三部曲（共 32 章已完結）</span>
                <span class="text-amber-600 font-mono">14.4 萬字</span>
              </div>

              <!-- 卷一 -->
              <a href="#/read/book-1/1" class="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-amber-500/60 hover:bg-amber-500/5 transition-all group shadow-sm">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 font-black text-xs flex items-center justify-center flex-shrink-0">卷一</span>
                  <div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                      《校園地下 404 室》
                    </div>
                    <div class="text-[11px] text-slate-500">第 1～10 章 · 43.7k 字 · 校園密室 × 摩斯代碼 × 邏輯電路</div>
                  </div>
                </div>
                <span class="text-xs text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">閱讀 ➜</span>
              </a>

              <!-- 卷二 -->
              <a href="#/read/book-2/11" class="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-amber-500/60 hover:bg-amber-500/5 transition-all group shadow-sm">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 font-black text-xs flex items-center justify-center flex-shrink-0">卷二</span>
                  <div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                      《千島齒輪海的迷失燈塔》
                    </div>
                    <div class="text-[11px] text-slate-500">第 11～22 章 · 52.1k 字 · 大航海 × 聲納共振 × 全息折射</div>
                  </div>
                </div>
                <span class="text-xs text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">閱讀 ➜</span>
              </a>

              <!-- 卷三 -->
              <a href="#/read/book-3/23" class="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-amber-500/60 hover:bg-amber-500/5 transition-all group shadow-sm">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 font-black text-xs flex items-center justify-center flex-shrink-0">卷三</span>
                  <div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                      《星穹鐘樓的第十二個音符》
                    </div>
                    <div class="text-[11px] text-slate-500">第 23～32 章 · 48.5k 字 · 平流層天梯 × 天體音波 × 反重力科技</div>
                  </div>
                </div>
                <span class="text-xs text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">閱讀 ➜</span>
              </a>
            </div>
          </div>

          <!-- 底部亮點與行動按鈕 -->
          <div>
            <div class="pt-4 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span>✨ 32 章中英雙語對照</span>
                <span>·</span>
                <span>🧩 32 道 STEM 實驗</span>
              </div>
              <div class="flex items-center gap-2.5 w-full sm:w-auto">
                <a href="#/read/book-1/1" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md shadow-amber-600/20 flex items-center justify-center gap-1.5 transition-all hover:scale-105 active:scale-95">
                  <span>📖 從頭開始閱讀</span>
                </a>
                <button onclick="window.openSeriesModal('series-1')" class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-all">
                  📑 全 32 回目錄
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 【套書二】星願鐘擺與織光少女（預計全三卷） -->
        <div class="rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-500/10 via-purple-500/5 to-slate-900/10 dark:to-slate-950/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all hover:shadow-2xl hover:border-rose-500/50">
          <div>
            <!-- 標籤與受眾 -->
            <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                🌸 第二套 · 熱烈連載中
              </span>
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">9～14 歲適讀 · 鐘錶物理 × 成長心動</span>
            </div>

            <!-- 標題與引言 -->
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              《星願鐘擺與織光少女》
            </h2>
            <p class="text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 mb-4">
              聽懂齒輪心跳的晨光堂女孩，與手握微積分的冰霜少女並肩追光！
            </p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              十三歲鐘錶學徒采婭玆，立志成為星港首位女首席星軌修復師。在晨光堂裡，她用薰衣草鐘錶油化解了天才少女林漪姉冰冷的外殼，並在雲海引航少年罧貁銁的默默陪伴下，熔鑄因瓦合金雙金屬發條，迎戰監察處重型蒸汽巨像！
            </p>

            <!-- 收錄全三卷列表 -->
            <div class="space-y-2.5 mb-6">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>📚 規劃全三卷三部曲（第一卷連載中）</span>
                <span class="text-rose-600 font-mono">已發布 1.9 萬字</span>
              </div>

              <!-- 卷一 -->
              <a href="#/read/book-4/1" class="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-rose-500/30 flex items-center justify-between hover:border-rose-500 hover:bg-rose-500/5 transition-all group shadow-sm">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-rose-500/15 text-rose-600 font-black text-xs flex items-center justify-center flex-shrink-0">卷一</span>
                  <div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors flex items-center gap-2">
                      <span>《追光星盤的修復師》</span>
                      <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-500 text-white font-bold">連載中</span>
                    </div>
                    <div class="text-[11px] text-slate-500">第 1～4 章已上線 · 虎克定律 × 司涅爾折射 × 居禮點熔爐 × 角動量雙星</div>
                  </div>
                </div>
                <span class="text-xs text-rose-600 font-bold group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">閱讀 ➜</span>
              </a>

              <!-- 卷二 (籌備中) -->
              <div class="p-3 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between opacity-85">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 font-black text-xs flex items-center justify-center flex-shrink-0">卷二</span>
                  <div>
                    <div class="text-sm font-bold text-slate-700 dark:text-slate-300">
                      《旋轉稜鏡的雙星軌道》
                    </div>
                    <div class="text-[11px] text-slate-400">預計 10 章 · 星耀機械大賽與雙星共振</div>
                  </div>
                </div>
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 font-semibold flex-shrink-0 ml-2">構思籌備中</span>
              </div>

              <!-- 卷三 (即將登場) -->
              <div class="p-3 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between opacity-85">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 font-black text-xs flex items-center justify-center flex-shrink-0">卷三</span>
                  <div>
                    <div class="text-sm font-bold text-slate-700 dark:text-slate-300">
                      《天穹之心的永恆鐘鳴》
                    </div>
                    <div class="text-[11px] text-slate-400">預計 10 章 · 首席星軌修復師終章大結局</div>
                  </div>
                </div>
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 font-semibold flex-shrink-0 ml-2">即將登場</span>
              </div>
            </div>
          </div>

          <!-- 底部亮點與行動按鈕 -->
          <div>
            <div class="pt-4 border-t border-rose-500/20 flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span>🌸 精密鐘錶力學 × 居禮點合金</span>
                <span>·</span>
                <span>👭 雙女主成長故事</span>
              </div>
              <div class="flex items-center gap-2.5 w-full sm:w-auto">
                <a href="#/read/book-4/1" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-xs shadow-md shadow-rose-600/20 flex items-center justify-center gap-1.5 transition-all hover:scale-105 active:scale-95">
                  <span>🌸 開始閱讀第一卷</span>
                </a>
                <button onclick="window.openSeriesModal('series-2')" class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-all">
                  📑 查看章節目錄
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- 全域套書章節目錄彈窗 (Series Catalog Modal) -->
      <div id="series-catalog-modal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
        <div class="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] flex flex-col">
          <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-4">
            <div>
              <div id="series-modal-badge" class="text-xs font-bold text-amber-600 mb-0.5">套書全章節目錄</div>
              <h3 id="series-modal-title" class="font-extrabold text-xl text-slate-900 dark:text-white"></h3>
            </div>
            <button onclick="document.getElementById('series-catalog-modal').classList.add('hidden')" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold p-1">✕</button>
          </div>
          <div id="series-modal-content" class="overflow-y-auto space-y-6 flex-1 pr-1">
            <!-- 動態注入該套書的三卷章節清單 -->
          </div>
        </div>
      </div>
    `;
  }

  // 開啟特定套書的章節目錄 Modal
  window.openSeriesModal = function(seriesId) {
    const seriesList = window.GEAR_SERIES || [];
    const series = seriesList.find(s => s.id === seriesId);
    if (!series) return;

    const modal = document.getElementById('series-catalog-modal');
    const titleEl = document.getElementById('series-modal-title');
    const badgeEl = document.getElementById('series-modal-badge');
    const contentEl = document.getElementById('series-modal-content');

    if (titleEl) titleEl.textContent = series.title;
    if (badgeEl) badgeEl.textContent = `${series.badge} · ${series.stats.statusText}`;

    if (contentEl) {
      contentEl.innerHTML = series.volumes.map(vol => {
        const book = vol.bookId ? DATA.books.find(b => b.id === vol.bookId) : null;
        const isReleased = book && book.chapters && book.chapters.length > 0;

        return `
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-800/30">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-lg ${series.themeTone === 'rose' ? 'bg-rose-500/15 text-rose-600' : 'bg-amber-500/15 text-amber-600'} font-bold text-xs">
                  ${vol.volNum}
                </span>
                <h4 class="text-base font-bold text-slate-900 dark:text-white">
                  ${vol.title}
                </h4>
              </div>
              <span class="text-xs font-medium text-slate-500">
                ${vol.wordCount}
              </span>
            </div>

            <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">
              主題聚焦：${vol.theme}
            </p>

            ${isReleased ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${book.chapters.map(ch => `
                  <a href="#/read/${book.id}/${ch.id}" onclick="document.getElementById('series-catalog-modal').classList.add('hidden')" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all flex items-center justify-between text-xs group">
                    <span class="font-bold text-slate-700 dark:text-slate-200 group-hover:text-amber-600 truncate mr-2">
                      ${ch.title}
                    </span>
                    <span class="text-[10px] text-slate-400 font-mono flex-shrink-0">${ch.wordCount}字</span>
                  </a>
                `).join('')}
              </div>
            ` : `
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-400 text-xs text-center font-medium">
                ⏳ 正在全力編撰中 · 敬請期待後續精彩情節
              </div>
            `}
          </div>
        `;
      }).join('');
    }

    if (modal) modal.classList.remove('hidden');
  };


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
    // ================== 兒童有聲朗讀引擎 (StorySpeaker & Karaoke Spotlight) ==================
  window.storySpeaker = {
    synth: window.speechSynthesis || null,
    isEnabled: false, // 預設關閉語音點讀，必須主動點選「聽故事」才會啟動
    isPlaying: false,
    isPaused: false,
    currentIndex: -1,
    blocks: [],
    rates: [0.75, 0.95, 1.2],
    rateIndex: 1, // 預設 0.95x 溫柔說故事語速
    voiceZh: null,
    voiceEn: null,
    autoScroll: true,
    currentUtterance: null,
    sessionId: 0,

    init() {
      if (!this.synth) return;
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    },

    loadVoices() {
      if (!this.synth) return;
      const voices = this.synth.getVoices();
      if (!voices || voices.length === 0) return;
      // 臺灣繁體中文優先
      this.voiceZh = voices.find(v => v.lang === 'zh-TW' || v.lang === 'zh_TW') ||
                     voices.find(v => v.lang.toLowerCase().includes('tw')) ||
                     voices.find(v => v.lang.startsWith('zh')) ||
                     null;
      // 英語美式優先
      this.voiceEn = voices.find(v => v.lang === 'en-US' || v.lang === 'en_US') ||
                     voices.find(v => v.lang.startsWith('en')) ||
                     null;
    },

    setupBlocks(containerEl, langMode) {
      this.reset();
      this.isEnabled = false; // 每次進入章節預設關閉語音朗讀
      if (!containerEl) return;
      containerEl.classList.remove('listening-mode-enabled');

      // 篩選出可朗讀的有效節點：段落、標題、雙語組、引言
      const rawElements = containerEl.querySelectorAll('p, h2, h3, blockquote, .bilingual-pair');
      this.blocks = [];

      rawElements.forEach((el) => {
        // 排除密碼小百科、程式碼區塊等技術標註
        if (el.closest('.code-block') || el.closest('.puzzle-box')) return;
        if (el.tagName === 'P' && el.closest('.bilingual-pair')) return; // 雙語對照以組為單位朗讀

        let textZh = '';
        let textEn = '';

        if (el.classList.contains('bilingual-pair')) {
          const zhP = el.querySelector('.zh-para');
          const enP = el.querySelector('.en-para');
          textZh = zhP ? zhP.innerText.trim() : '';
          textEn = enP ? enP.innerText.trim() : '';
        } else {
          const text = el.innerText.trim();
          if (langMode === 'en') {
            textEn = text;
          } else {
            textZh = text;
          }
        }

        // 清理標記與多餘符號
        const cleanZh = textZh.replace(/[⚙️🧩📖⏱️🔖🌐]/g, '').trim();
        const cleanEn = textEn.replace(/[⚙️🧩📖⏱️🔖🌐]/g, '').trim();

        if (cleanZh || cleanEn) {
          const bIdx = this.blocks.length;
          this.blocks.push({
            el: el,
            index: bIdx,
            textZh: cleanZh,
            textEn: cleanEn,
            langMode: langMode
          });

          // 標記段落序號，但預設不加 cursor-pointer 與 title，防止影響一般閱讀
          el.setAttribute('data-speech-block', bIdx);
          el.onclick = (e) => {
            // 核心保護：未主動開啟「聽故事」時，點擊段落完全不觸發朗讀，維護純淨閱讀體驗
            if (!window.storySpeaker || !window.storySpeaker.isEnabled) return;
            if (e.target.closest('.bookmark-btn') || e.target.closest('button')) return;
            const targetIdx = parseInt(el.getAttribute('data-speech-block'), 10);
            if (!isNaN(targetIdx)) {
              window.storySpeaker.playAt(targetIdx);
            }
          };
        }
      });

      this.updateProgressUI();
    },

    // 主動開啟「聽故事」模式
    startListening(startIdx = 0) {
      this.isEnabled = true;
      const container = document.querySelector('.reader-content');
      if (container) container.classList.add('listening-mode-enabled');

      const audioDock = document.getElementById('story-audio-dock');
      const audioPill = document.getElementById('btn-audio-open-pill');
      if (audioDock) audioDock.classList.remove('hidden');
      if (audioPill) audioPill.classList.add('hidden');

      const targetIdx = (typeof startIdx === 'number' && startIdx >= 0) ? startIdx : (this.currentIndex >= 0 ? this.currentIndex : 0);
      this.playAt(targetIdx);
    },

    // 主動停止並退出「聽故事」模式，回歸純淨閱讀
    stopListening() {
      this.stop();
      this.isEnabled = false;
      const container = document.querySelector('.reader-content');
      if (container) container.classList.remove('listening-mode-enabled');

      const audioDock = document.getElementById('story-audio-dock');
      const audioPill = document.getElementById('btn-audio-open-pill');
      if (audioDock) audioDock.classList.add('hidden');
      if (audioPill) audioPill.classList.remove('hidden');
    },

    playAt(index) {
      if (!this.synth || this.blocks.length === 0) return;
      if (index < 0) index = 0;
      if (index >= this.blocks.length) {
        this.stopListening();
        return;
      }

      // 1. 生成新的 session 識別碼，讓舊段落的非同步事件徹底失效
      this.sessionId = (this.sessionId || 0) + 1;
      const mySessionId = this.sessionId;

      // 2. 徹底解除舊 utterance 的回呼，防止 cancel 觸發錯誤連鎖快進
      if (this.currentUtterance) {
        this.currentUtterance.onend = null;
        this.currentUtterance.onerror = null;
        this.currentUtterance = null;
      }

      // 3. 重設並取消當前發音隊列
      if (this.synth.paused) {
        this.synth.resume();
      }
      this.synth.cancel();

      this.currentIndex = index;
      this.isPlaying = true;
      this.isPaused = false;

      const block = this.blocks[index];
      this.highlightBlock(block);

      // 4. 決定朗讀文本與語系
      let speakText = '';
      let useLang = 'zh';

      if (block.langMode === 'en') {
        speakText = block.textEn || block.textZh;
        useLang = 'en';
      } else if (block.langMode === 'bilingual') {
        speakText = block.textZh + (block.textEn ? '。 ' + block.textEn : '');
        useLang = 'zh';
      } else {
        speakText = block.textZh;
        useLang = 'zh';
      }

      // 清理殘留標籤與多餘符號
      speakText = speakText.replace(/<\/?[^>]+(>|$)/g, '');
      speakText = speakText.replace(/[_~*`#]/g, '').trim();

      if (!speakText) {
        if (this.currentIndex < this.blocks.length - 1) {
          this.playAt(this.currentIndex + 1);
        } else {
          this.stopListening();
        }
        return;
      }

      // 若語音庫尚未載入，再次嘗試加載
      if (!this.voiceZh || !this.voiceEn) {
        this.loadVoices();
      }
      let selectedVoice = (useLang === 'en') ? this.voiceEn : this.voiceZh;

      let pitch = 1.0;
      // 若包含角色引號對話「...」，稍微調高音調以增加生動感
      if (speakText.includes('「') || speakText.includes('“') || speakText.includes('"')) {
        pitch = 1.06;
      }

      const utter = new SpeechSynthesisUtterance(speakText);
      utter.lang = (useLang === 'en') ? 'en-US' : 'zh-TW';
      utter.rate = this.rates[this.rateIndex];
      utter.pitch = pitch;
      if (selectedVoice) utter.voice = selectedVoice;

      utter.onend = () => {
        if (mySessionId !== this.sessionId || !this.isPlaying) return;
        setTimeout(() => {
          if (mySessionId === this.sessionId && this.isPlaying) {
            this.playAt(this.currentIndex + 1);
          }
        }, 180);
      };

      utter.onerror = (err) => {
        if (err.error === 'canceled' || err.error === 'interrupted') return;
        if (mySessionId !== this.sessionId) return;
        console.warn('Speech error:', err.error, err);
        this.stopListening();
      };

      this.currentUtterance = utter;

      // 5. 稍微延遲 25ms 呼叫 speak，防止 Chromium cancel 與 speak 處於同一個微任務時的音訊管線衝突
      setTimeout(() => {
        if (mySessionId !== this.sessionId || !this.isPlaying) return;
        try {
          this.synth.speak(utter);
          this.updatePlayStateUI(true);
        } catch (e) {
          console.error('synth.speak failed:', e);
          this.stopListening();
        }
      }, 25);
    },

    togglePlay() {
      if (!this.synth) {
        alert('您的瀏覽器目前未開啟語音朗讀支援。建議使用 Chrome、Edge 或 Safari。');
        return;
      }

      if (!this.isEnabled) {
        this.startListening(this.currentIndex >= 0 ? this.currentIndex : 0);
        return;
      }

      if (this.isPlaying) {
        if (this.isPaused) {
          this.synth.resume();
          this.isPaused = false;
          this.updatePlayStateUI(true);
        } else {
          this.synth.pause();
          this.isPaused = true;
          this.updatePlayStateUI(false);
        }
      } else {
        const startIdx = this.currentIndex >= 0 ? this.currentIndex : 0;
        this.playAt(startIdx);
      }
    },

    stop() {
      this.sessionId = (this.sessionId || 0) + 1;
      if (this.currentUtterance) {
        this.currentUtterance.onend = null;
        this.currentUtterance.onerror = null;
        this.currentUtterance = null;
      }
      if (this.synth) {
        if (this.synth.paused) this.synth.resume();
        this.synth.cancel();
      }
      this.isPlaying = false;
      this.isPaused = false;
      this.clearHighlight();
      this.updatePlayStateUI(false);
      this.updateProgressUI();
    },

    prev() {
      if (this.currentIndex > 0) {
        this.playAt(this.currentIndex - 1);
      }
    },

    next() {
      if (this.currentIndex < this.blocks.length - 1) {
        this.playAt(this.currentIndex + 1);
      } else {
        this.stopListening();
      }
    },

    cycleSpeed() {
      this.rateIndex = (this.rateIndex + 1) % this.rates.length;
      const speedIcon = document.getElementById('audio-speed-icon');
      const speedText = document.getElementById('audio-speed-text');
      
      const currentRate = this.rates[this.rateIndex];
      if (speedText) speedText.textContent = `${currentRate.toFixed(2)}x`;
      if (speedIcon) {
        speedIcon.textContent = currentRate < 0.9 ? '🐌' : (currentRate > 1.0 ? '🐇' : '🚶');
      }

      if (this.isPlaying && this.currentIndex >= 0) {
        this.playAt(this.currentIndex);
      }
    },

    highlightBlock(block) {
      this.clearHighlight();
      if (!block || !block.el) return;

      const container = document.querySelector('.reader-content');
      if (container) container.classList.add('is-reading');

      block.el.classList.add('speaking-active');

      if (this.autoScroll) {
        block.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      this.updateProgressUI();
    },

    clearHighlight() {
      const container = document.querySelector('.reader-content');
      if (container) container.classList.remove('is-reading');

      const actives = document.querySelectorAll('.speaking-active');
      actives.forEach(el => el.classList.remove('speaking-active'));
    },

    reset() {
      this.sessionId = (this.sessionId || 0) + 1;
      if (this.currentUtterance) {
        this.currentUtterance.onend = null;
        this.currentUtterance.onerror = null;
        this.currentUtterance = null;
      }
      if (this.synth) {
        if (this.synth.paused) this.synth.resume();
        this.synth.cancel();
      }
      this.isEnabled = false;
      this.isPlaying = false;
      this.isPaused = false;
      this.currentIndex = -1;
      this.blocks = [];
      this.clearHighlight();
      this.updatePlayStateUI(false);
    },

    updatePlayStateUI(playing) {
      const playIcon = document.getElementById('audio-play-icon');
      const statusText = document.getElementById('audio-status-text');
      const headerBtn = document.getElementById('btn-header-listen');

      if (playIcon) playIcon.textContent = playing ? '⏸️' : '▶️';
      if (statusText) {
        if (playing) {
          statusText.textContent = '🔊 正在朗讀...';
        } else if (this.isPaused) {
          statusText.textContent = '⏸️ 暫停朗讀';
        } else {
          statusText.textContent = '🎧 聽故事';
        }
      }
      if (headerBtn) {
        headerBtn.innerHTML = playing ? '<span class="text-sm">⏸️</span><span>暫停朗讀</span>' : '<span class="text-sm">🎧</span><span>聽這章故事</span>';
      }
    },

    updateProgressUI() {
      const progressTag = document.getElementById('audio-progress-tag');
      if (progressTag) {
        const cur = this.currentIndex >= 0 ? this.currentIndex + 1 : 0;
        progressTag.textContent = `${cur} / ${this.blocks.length}`;
      }
    }
  };
  window.storySpeaker.init();

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
            <button id="btn-header-listen" class="px-3.5 py-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
              <span class="text-sm">🎧</span>
              <span>聽這章故事</span>
            </button>
            <span>📖 約 ${chapter.wordCount} 字</span>
            <span>⏱️ 閱讀時間約 ${chapter.readTimeMin} 分鐘</span>
          </div>
        </header>

        <div class="reader-content">
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

      <!-- 兒童友善語音朗讀懸浮播放面板 (Voice Storyteller Dock) -->
      <div id="story-audio-dock" class="hidden fixed bottom-5 right-5 z-40 flex items-center gap-2 p-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-amber-500/30 transition-all duration-300">
        <!-- 播放/暫停大按鈕 -->
        <button id="btn-audio-play-pause" class="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white flex items-center justify-center text-xl shadow-lg shadow-amber-500/30 transition-all active:scale-95 cursor-pointer" title="播放 / 暫停朗讀">
          <span id="audio-play-icon">▶️</span>
        </button>

        <!-- 播放狀態與控制區域 -->
        <div class="flex flex-col pr-1 min-w-[130px] sm:min-w-[160px]">
          <div class="flex items-center justify-between text-[11px] font-bold text-slate-700 dark:text-slate-200 mb-0.5">
            <span id="audio-status-text" class="truncate max-w-[100px]">🎧 聽故事</span>
            <span id="audio-progress-tag" class="text-amber-600 font-mono text-[10px]">0 / 0</span>
          </div>
          <div class="flex items-center gap-1.5">
            <!-- 上一段 -->
            <button id="btn-audio-prev" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/20 text-slate-600 dark:text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="上一段 (⏮️)">
              ⏮️
            </button>
            <!-- 停止 -->
            <button id="btn-audio-stop" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-500/20 text-slate-600 dark:text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="停止朗讀 (⏹️)">
              ⏹️
            </button>
            <!-- 下一段 -->
            <button id="btn-audio-next" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/20 text-slate-600 dark:text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="下一段 (⏩)">
              ⏭️
            </button>
            <!-- 語速調節 -->
            <button id="btn-audio-speed" class="px-2 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-mono font-bold text-[11px] flex items-center gap-0.5 transition-all cursor-pointer" title="切換語速：慢速(0.75x) / 正常(0.95x) / 快速(1.2x)">
              <span id="audio-speed-icon">🚶</span>
              <span id="audio-speed-text">0.95x</span>
            </button>
          </div>
        </div>

        <!-- 關閉/收合按鈕 -->
        <button id="btn-audio-close" class="w-6 h-6 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 text-xs flex items-center justify-center transition-all cursor-pointer" title="收合播放器">
          ✕
        </button>
      </div>

      <!-- 當收合時的迷你耳機懸浮按鈕 -->
      <button id="btn-audio-open-pill" class="fixed bottom-6 right-6 z-40 px-3.5 py-2 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-xl shadow-amber-600/30 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer">
        <span class="text-base">🎧</span>
        <span>聽故事</span>
      </button>

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

    // 初始化語音朗讀系統與點讀控制
    setTimeout(() => {
      const readerContainer = document.querySelector('.reader-content');
      if (window.storySpeaker) {
        window.storySpeaker.setupBlocks(readerContainer, state.readingLang);
      }

      const btnPlayPause = document.getElementById('btn-audio-play-pause');
      const btnHeaderListen = document.getElementById('btn-header-listen');
      const btnPrev = document.getElementById('btn-audio-prev');
      const btnStop = document.getElementById('btn-audio-stop');
      const btnNext = document.getElementById('btn-audio-next');
      const btnSpeed = document.getElementById('btn-audio-speed');
      const btnClose = document.getElementById('btn-audio-close');
      const btnOpenPill = document.getElementById('btn-audio-open-pill');
      const audioDock = document.getElementById('story-audio-dock');

      if (btnHeaderListen) {
        btnHeaderListen.onclick = () => {
          if (!window.storySpeaker.isEnabled) {
            window.storySpeaker.startListening(0);
          } else {
            window.storySpeaker.togglePlay();
          }
        };
      }
      if (btnOpenPill) {
        btnOpenPill.onclick = () => {
          const idx = window.storySpeaker.currentIndex >= 0 ? window.storySpeaker.currentIndex : 0;
          window.storySpeaker.startListening(idx);
        };
      }
      if (btnPlayPause) btnPlayPause.onclick = () => window.storySpeaker.togglePlay();
      if (btnPrev) btnPrev.onclick = () => window.storySpeaker.prev();
      if (btnStop) btnStop.onclick = () => window.storySpeaker.stopListening();
      if (btnNext) btnNext.onclick = () => window.storySpeaker.next();
      if (btnSpeed) btnSpeed.onclick = () => window.storySpeaker.cycleSpeed();
      if (btnClose) btnClose.onclick = () => window.storySpeaker.stopListening();
    }, 150);
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
            <span>🌸 第二套 · 星願鐘擺 (4項)</span>
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

          <!-- 實驗二：司涅爾折射定律與十二面稜鏡色散器 (第 2 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>🌈 2. 司涅爾折射定律與旋轉稜鏡色散模擬器（第 2 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">n₁ sin θ₁ = n₂ sin θ₂</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              林漪姉在第四副鐘樓調校的十二面體旋轉稜鏡，利用司涅爾折射定律將過熱紅外光束分離，並折射出七彩光譜。調節入射角 θ₁ 與介質折射率 n₂，即時計算折射角 θ₂ 並觀察光線色散路徑：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  入射光角度 θ₁（空中光線入射）：<span id="series2-theta1-val" class="text-rose-600 font-mono text-sm">45°</span>
                </label>
                <input id="series2-theta1-slider" type="range" min="5" max="85" value="45" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  稜鏡晶體折射率 n₂（星輝琉璃介質）：<span id="series2-n2-val" class="text-rose-600 font-mono text-sm">1.52 (重火石琉璃)</span>
                </label>
                <input id="series2-n2-slider" type="range" min="120" max="220" value="152" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <div class="space-y-1.5 text-xs font-mono mt-4">
                  <div class="flex justify-between text-slate-500">
                    <span>折射角 θ₂ (Snell 计算):</span>
                    <span id="series2-theta2-val" class="font-bold text-sky-600">27.7°</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>色散紅藍光分離夾角 Δθ:</span>
                    <span id="series2-dispersion-val" class="font-bold text-amber-600">1.82°</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>全反射臨界角 θ_c:</span>
                    <span id="series2-critical-val" class="font-bold text-emerald-600">41.1°</span>
                  </div>
                </div>
              </div>

              <!-- 稜鏡動態折射光束模擬畫布 -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-snell-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40">
                  🌈 稜鏡正常折射與色散中
                </div>
                <div class="relative w-44 h-40 flex items-center justify-center">
                  <div id="series2-prism-triangle" class="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-cyan-500/30 filter drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"></div>
                  <!-- 入射光束線 -->
                  <div id="series2-ray-in" class="absolute w-20 h-0.5 bg-white origin-right transform" style="top: 65px; left: -10px; transform: rotate(45deg);"></div>
                  <!-- 出射色散彩虹束 -->
                  <div id="series2-rainbow-beam" class="absolute w-24 h-6 origin-left transform rounded-r" style="top: 75px; right: -15px; transform: rotate(-25deg); background: linear-gradient(to bottom, #ef4444, #f59e0b, #10b981, #06b6d4, #8b5cf6); opacity: 0.85;"></div>
                </div>
                <div id="series2-snell-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  n₁·sin(θ₁) = n₂·sin(θ₂) 達成完美色散，熱光譜被精準分離！
                </div>
              </div>
            </div>

            <!-- VIVI 密碼解碼驗證 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 2 章核心密文：[ 22 - 09 - 22 - 09 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：第 22 位為 V，第 9 位為 I。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                22 ➜ V  |  09 ➜ I  |  22 ➜ V  |  09 ➜ I  ==>  【 VIVI 】（林漪姉的英文暱稱，象徵活力與生機）
              </div>
            </div>
          </div>

        
          <!-- 實驗三：提摩盛柯雙金屬片熱彎曲與力矩補償模擬器 (第 3 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>🔥 3. 提摩盛柯雙金屬片熱彎曲與力矩自穩定模擬器（第 3 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">1/ρ ∝ Δα·ΔT / h × Invar/Brass</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              采婭玆與林漪姉在晨光堂熔爐鍛造出的因瓦/黃銅雙金屬發條，在高溫環境下依提摩盛柯彎曲曲率自發向內收縮，動態抵消摩擦熱膨脹。拖動測試環境溫度與金屬厚度比，檢驗發條輸出扭矩的自平衡閉環：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  環境測試溫度 T：<span id="series2-bimetal-temp-val" class="text-rose-600 font-mono text-sm">25 °C</span>
                </label>
                <input id="series2-bimetal-temp-slider" type="range" min="0" max="80" value="25" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <div class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                  <div>
                    <span class="text-xs font-bold block text-slate-800 dark:text-slate-200">居禮點（230°C）界面退火工藝</span>
                    <span class="text-[10px] text-slate-400">原子擴散完全咬合，無界面滑移</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-curie-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div class="space-y-1.5 text-xs font-mono mt-2">
                  <div class="flex justify-between text-slate-500">
                    <span>提摩盛柯彎曲曲率 1/ρ:</span>
                    <span id="series2-bimetal-rho-val" class="font-bold text-sky-600">0.000 mm⁻¹</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>發條輸出彈性力矩 τ:</span>
                    <span id="series2-bimetal-torque-val" class="font-bold text-emerald-600">120.0 N·mm</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>力矩漂移誤差:</span>
                    <span id="series2-bimetal-drift-val" class="font-bold text-slate-400">±0.00 %</span>
                  </div>
                </div>
              </div>

              <!-- 雙金屬片熱彎曲動態視覺展示 -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-bimetal-status" class="mb-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 雙金屬力矩恆定（時間之心跳動中）
                </div>
                <!-- 雙層金屬片彎曲動畫示意 -->
                <div class="relative w-48 h-28 flex items-center justify-center">
                  <div class="w-40 h-8 flex flex-col items-center justify-center transition-all duration-300 transform" id="series2-bimetal-strip">
                    <!-- 黃銅層（高膨脹） -->
                    <div class="w-full h-3 bg-amber-400 rounded-t border-b border-amber-600 text-[9px] font-mono text-amber-900 font-bold flex items-center justify-center">BRASS (α = 19×10⁻⁶)</div>
                    <!-- 因瓦層（低膨脹） -->
                    <div class="w-full h-3 bg-slate-400 rounded-b text-[9px] font-mono text-slate-900 font-bold flex items-center justify-center">INVAR (α = 1.2×10⁻⁶)</div>
                  </div>
                </div>
                <div id="series2-bimetal-desc" class="text-[11px] text-center text-slate-300 mt-1 font-mono">
                  升溫時黃銅膨脹大於因瓦，雙金屬片自發向內彎曲補償發條張力！
                </div>
              </div>
            </div>

            <!-- HEART 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div class="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-2">
                <span>🔐 第 3 章核心密文：[ 08 - 05 - 01 - 18 - 20 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：08=H, 05=E, 01=A, 18=R, 20=T。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono text-xs font-bold">
                08 ➜ H  |  05 ➜ E  |  01 ➜ A  |  18 ➜ R  |  20 ➜ T  ==>  【 HEART 】（工匠賦予鐘錶的「時間之心」）
              </div>
            </div>
          </div>

          <!-- 實驗四：角動量守恆與雙星質心配重模擬器 (第 4 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>💫 4. 角動量守恆與雙星質心配重平衡模擬器（第 4 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">L = Iω = 常數 ｜ m₁r₁ = m₂r₂</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              采婭玆與林漪姉在第七副鐘樓校準失衡的「雙星旋轉星盤」！主星（天樞）與伴星（搖光）繞公共質心高速旋轉。若質量與半徑乘積不相等（m₁r₁ ≠ m₂r₂），偏心距將引發劇烈高頻共振與軸承磨損。拖動滑塊手動配重，或點擊「自動質心對齊」，觀察角動量守恆下的自轉加速與光環鎖定：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      主星天樞質量 m₁：<span id="series2-m1-val" class="text-amber-600 font-mono text-xs">60 g</span>
                    </label>
                    <input id="series2-m1-slider" type="range" min="40" max="80" value="60" class="w-full accent-amber-500 cursor-pointer">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      伴星搖光質量 m₂：<span id="series2-m2-val" class="text-sky-600 font-mono text-xs">20 g</span>
                    </label>
                    <input id="series2-m2-slider" type="range" min="10" max="40" value="20" class="w-full accent-sky-500 cursor-pointer">
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      伴星半徑 r₂：<span id="series2-r2-val" class="text-sky-600 font-mono text-xs">60 mm</span>
                    </label>
                    <input id="series2-r2-slider" type="range" min="30" max="90" value="60" class="w-full accent-sky-500 cursor-pointer">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      主星配重半徑 r₁：<span id="series2-r1-val" class="text-rose-600 font-mono text-xs">20 mm</span>
                    </label>
                    <input id="series2-r1-slider" type="range" min="5" max="45" value="20" class="w-full accent-rose-600 cursor-pointer">
                  </div>
                </div>

                <div class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                  <div>
                    <span class="text-xs font-bold block text-slate-800 dark:text-slate-200">質心平衡點 (m₁r₁ = m₂r₂)</span>
                    <span class="text-[10px] text-slate-400">理論平衡半徑 r₁ = <span id="series2-r1-ideal-val" class="text-rose-600 font-bold font-mono">20.0 mm</span></span>
                  </div>
                  <button id="series2-btn-autobalance" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold transition-all shadow-sm">
                    ✨ 自動質心對齊
                  </button>
                </div>

                <div class="space-y-1.5 text-xs font-mono">
                  <div class="flex justify-between text-slate-500">
                    <span>質心偏心漂移距 Δe:</span>
                    <span id="series2-eccentricity-val" class="font-bold text-emerald-600">0.00 mm (零偏心)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>系統總轉動慣量 I = Σmr²:</span>
                    <span id="series2-inertia-val" class="font-bold text-indigo-600">96.0 g·cm²</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>旋轉角速度 ω (L守恆):</span>
                    <span id="series2-omega-val" class="font-bold text-sky-600">3.14 rad/s (平穩定常)</span>
                  </div>
                </div>
              </div>

              <!-- 動態雙星模擬畫布 -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-orbit-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 雙星零偏心軌道鎖定（ORBIT 達成）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-orbit-canvas" width="280" height="200" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-orbit-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  質心與中央轉軸完全重合！角動量守恆帶動星盤平穩旋轉，光環完美合攏。
                </div>
              </div>
            </div>

            <!-- ORBIT 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 4 章核心密文：[ 15 - 18 - 02 - 09 - 20 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：15=O, 18=R, 02=B, 09=I, 20=T。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                15 ➜ O  |  18 ➜ R  |  02 ➜ B  |  09 ➜ I  |  20 ➜ T  ==>  【 ORBIT 】（雙星穩定旋轉之「軌道」）
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

    
    // 司涅爾折射定律模擬器事件 (Ch 2)
    const s2Theta1Slider = document.getElementById('series2-theta1-slider');
    const s2N2Slider = document.getElementById('series2-n2-slider');
    const s2Theta1Val = document.getElementById('series2-theta1-val');
    const s2N2Val = document.getElementById('series2-n2-val');
    const s2Theta2Val = document.getElementById('series2-theta2-val');
    const s2DispersionVal = document.getElementById('series2-dispersion-val');
    const s2CriticalVal = document.getElementById('series2-critical-val');
    const s2SnellStatus = document.getElementById('series2-snell-status');
    const s2RayIn = document.getElementById('series2-ray-in');
    const s2RainbowBeam = document.getElementById('series2-rainbow-beam');
    const s2SnellDesc = document.getElementById('series2-snell-desc');

    function updateSnellSim() {
      if (!s2Theta1Slider || !s2N2Slider) return;
      const theta1 = parseFloat(s2Theta1Slider.value);
      const n2 = parseFloat(s2N2Slider.value) / 100.0;
      const n1 = 1.0; // 空氣

      s2Theta1Val.textContent = `${theta1.toFixed(0)}°`;
      s2N2Val.textContent = `${n2.toFixed(2)} (星輝琉璃)`;

      // Snell: sin(theta2) = (n1 / n2) * sin(theta1)
      const rad1 = (theta1 * Math.PI) / 180.0;
      const sinTheta2 = (n1 / n2) * Math.sin(rad1);
      
      const criticalRad = Math.asin(Math.min(1.0, 1.0 / n2));
      const criticalDeg = (criticalRad * 180.0 / Math.PI).toFixed(1);
      s2CriticalVal.textContent = `${criticalDeg}°`;

      if (sinTheta2 <= 1.0) {
        const rad2 = Math.asin(sinTheta2);
        const deg2 = (rad2 * 180.0 / Math.PI).toFixed(1);
        const dispersion = (deg2 * 0.065).toFixed(2);

        s2Theta2Val.textContent = `${deg2}°`;
        s2DispersionVal.textContent = `${dispersion}°`;
        s2SnellStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40';
        s2SnellStatus.textContent = '🌈 稜鏡正常折射與色散中';

        if (s2RayIn) s2RayIn.style.transform = `rotate(${theta1}deg)`;
        if (s2RainbowBeam) {
          s2RainbowBeam.style.opacity = '0.9';
          s2RainbowBeam.style.transform = `rotate(-${deg2}deg)`;
        }
        if (s2SnellDesc) s2SnellDesc.textContent = `入射角 ${theta1}° 產生 ${deg2}° 精確折射，紅外光被有效分離！`;
      }
    }

    if (s2Theta1Slider) s2Theta1Slider.oninput = updateSnellSim;
    if (s2N2Slider) s2N2Slider.oninput = updateSnellSim;

    
    // 提摩盛柯雙金屬片熱彎曲模擬器事件 (Ch 3)
    const s2TempSlider = document.getElementById('series2-bimetal-temp-slider');
    const s2CurieToggle = document.getElementById('series2-curie-toggle');
    const s2BimetalTempVal = document.getElementById('series2-bimetal-temp-val');
    const s2RhoVal = document.getElementById('series2-bimetal-rho-val');
    const s2TorqueVal = document.getElementById('series2-bimetal-torque-val');
    const s2DriftVal = document.getElementById('series2-bimetal-drift-val');
    const s2BimetalStatus = document.getElementById('series2-bimetal-status');
    const s2BimetalStrip = document.getElementById('series2-bimetal-strip');
    const s2BimetalDesc = document.getElementById('series2-bimetal-desc');

    function updateBimetalSim() {
      if (!s2TempSlider) return;
      const temp = parseFloat(s2TempSlider.value);
      const isCurie = s2CurieToggle ? s2CurieToggle.checked : false;
      const deltaT = temp - 20.0;

      if (s2BimetalTempVal) s2BimetalTempVal.textContent = `${temp.toFixed(0)} °C`;

      const deltaAlpha = (19.0 - 1.2) * 1e-6; // /K
      const thickness = 0.5; // mm
      const curvature = isCurie ? (deltaT * deltaAlpha * 3.0 / thickness) : 0;
      s2RhoVal.textContent = `${(curvature * 1000).toFixed(3)} × 10⁻³ mm⁻¹`;

      if (!isCurie && temp > 45) {
        // 未經過居禮點退火，界面滑移
        const torque = (120.0 - (temp - 20) * 0.95).toFixed(1);
        s2TorqueVal.textContent = `${torque} N·mm`;
        s2DriftVal.textContent = `-${(((120.0 - torque) / 120.0) * 100).toFixed(1)} % (熱衰減嚴重)`;
        s2BimetalStatus.className = 'mb-3 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
        s2BimetalStatus.textContent = '⚠️ 界面滑移！高溫發條力矩暴跌';
        s2BimetalDesc.textContent = '未在居禮點（230°C）完成分子退火，雙金屬片分層脫落，無法補償熱形變！';
        if (s2BimetalStrip) s2BimetalStrip.style.transform = 'rotate(0deg)';
      } else {
        const torque = (120.0 - (isCurie ? Math.abs(deltaT) * 0.005 : deltaT * 0.4)).toFixed(1);
        const drift = Math.abs((120.0 - torque) / 120.0 * 100).toFixed(2);
        s2TorqueVal.textContent = `${torque} N·mm`;
        s2DriftVal.textContent = `±${drift} %`;
        s2BimetalStatus.className = 'mb-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
        s2BimetalStatus.textContent = '✨ 雙金屬力矩恆定（時間之心跳動中）';
        s2BimetalDesc.textContent = '居禮點界面咬合完整，升溫時自發向內微彎，發條輸出恆定力矩！';

        const bendAngle = Math.max(-15, Math.min(15, deltaT * 0.35));
        if (s2BimetalStrip) s2BimetalStrip.style.transform = `rotate(${bendAngle}deg) scale(${1 + deltaT * 0.001})`;
      }
    }

    if (s2TempSlider) s2TempSlider.oninput = updateBimetalSim;
    if (s2CurieToggle) s2CurieToggle.onchange = updateBimetalSim;

    // ================== 第 4 章：角動量守恆與雙星質心配重模擬器 ==================
    const s2M1Slider = document.getElementById('series2-m1-slider');
    const s2M2Slider = document.getElementById('series2-m2-slider');
    const s2R2Slider = document.getElementById('series2-r2-slider');
    const s2R1Slider = document.getElementById('series2-r1-slider');
    const s2BtnAuto = document.getElementById('series2-btn-autobalance');
    const s2M1Val = document.getElementById('series2-m1-val');
    const s2M2Val = document.getElementById('series2-m2-val');
    const s2R2Val = document.getElementById('series2-r2-val');
    const s2R1Val = document.getElementById('series2-r1-val');
    const s2R1IdealVal = document.getElementById('series2-r1-ideal-val');
    const s2EccentricityVal = document.getElementById('series2-eccentricity-val');
    const s2InertiaVal = document.getElementById('series2-inertia-val');
    const s2OmegaVal = document.getElementById('series2-omega-val');
    const s2OrbitStatus = document.getElementById('series2-orbit-status');
    const s2OrbitDesc = document.getElementById('series2-orbit-desc');
    const s2OrbitCanvas = document.getElementById('series2-orbit-canvas');

    let s2OrbitAngle = 0;
    let s2OrbitAnimId = null;

    function updateOrbitSim() {
      if (!s2M1Slider || !s2M2Slider || !s2R2Slider || !s2R1Slider) return;
      const m1 = parseFloat(s2M1Slider.value);
      const m2 = parseFloat(s2M2Slider.value);
      const r2 = parseFloat(s2R2Slider.value);
      const r1 = parseFloat(s2R1Slider.value);

      if (s2M1Val) s2M1Val.textContent = `${m1.toFixed(0)} g`;
      if (s2M2Val) s2M2Val.textContent = `${m2.toFixed(0)} g`;
      if (s2R2Val) s2R2Val.textContent = `${r2.toFixed(0)} mm`;
      if (s2R1Val) s2R1Val.textContent = `${r1.toFixed(0)} mm`;

      const idealR1 = (r2 * m2 / m1);
      if (s2R1IdealVal) s2R1IdealVal.textContent = `${idealR1.toFixed(1)} mm`;

      // 偏心漂移距 e = |m1*r1 - m2*r2| / (m1 + m2)
      const eccentricity = Math.abs(m1 * r1 - m2 * r2) / (m1 + m2);
      // 轉動慣量 I = m1*r1^2 + m2*r2^2 (g*mm^2 / 100 => g*cm^2)
      const inertiaGcm2 = (m1 * r1 * r1 + m2 * r2 * r2) / 100.0;
      // 基線角動量 L = 300
      const omega = (300.0 / (inertiaGcm2 || 1)).toFixed(2);

      if (s2InertiaVal) s2InertiaVal.textContent = `${inertiaGcm2.toFixed(1)} g·cm²`;
      if (s2OmegaVal) s2OmegaVal.textContent = `${omega} rad/s`;

      if (eccentricity < 0.6) {
        if (s2EccentricityVal) s2EccentricityVal.textContent = `${eccentricity.toFixed(2)} mm (零偏心)`;
        if (s2EccentricityVal) s2EccentricityVal.className = 'font-bold text-emerald-600';
        if (s2OrbitStatus) {
          s2OrbitStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2OrbitStatus.textContent = '✨ 雙星零偏心軌道鎖定（ORBIT 達成）';
        }
        if (s2OrbitDesc) s2OrbitDesc.textContent = '質心與中央轉軸完全重合！角動量守恆帶動星盤平穩旋轉，光環完美合攏。';
      } else {
        if (s2EccentricityVal) s2EccentricityVal.textContent = `+${eccentricity.toFixed(2)} mm (偏心失衡)`;
        if (s2EccentricityVal) s2EccentricityVal.className = 'font-bold text-rose-500';
        if (s2OrbitStatus) {
          s2OrbitStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2OrbitStatus.textContent = `⚠️ 質心偏離軸心 ${eccentricity.toFixed(1)} mm！星盤劇烈震顫`;
        }
        if (s2OrbitDesc) s2OrbitDesc.textContent = `質心偏離旋轉中心！請調校 r₁ 至 ${idealR1.toFixed(1)} mm，以抵消搖光的力矩偏載。`;
      }
    }

    if (s2BtnAuto) {
      s2BtnAuto.onclick = () => {
        if (!s2M1Slider || !s2M2Slider || !s2R2Slider || !s2R1Slider) return;
        const m1 = parseFloat(s2M1Slider.value);
        const m2 = parseFloat(s2M2Slider.value);
        const r2 = parseFloat(s2R2Slider.value);
        const idealR1 = Math.min(45, Math.max(5, Math.round(r2 * m2 / m1)));
        s2R1Slider.value = idealR1;
        updateOrbitSim();
      };
    }

    if (s2M1Slider) s2M1Slider.oninput = updateOrbitSim;
    if (s2M2Slider) s2M2Slider.oninput = updateOrbitSim;
    if (s2R2Slider) s2R2Slider.oninput = updateOrbitSim;
    if (s2R1Slider) s2R1Slider.oninput = updateOrbitSim;

    // 動畫循環繪製 Canvas
    function drawOrbitCanvas() {
      if (!s2OrbitCanvas) return;
      const ctx = s2OrbitCanvas.getContext('2d');
      if (!ctx) return;

      const m1 = s2M1Slider ? parseFloat(s2M1Slider.value) : 60;
      const m2 = s2M2Slider ? parseFloat(s2M2Slider.value) : 20;
      const r2 = s2R2Slider ? parseFloat(s2R2Slider.value) : 60;
      const r1 = s2R1Slider ? parseFloat(s2R1Slider.value) : 20;

      const eccentricity = Math.abs(m1 * r1 - m2 * r2) / (m1 + m2);
      const isBalanced = eccentricity < 0.6;

      const w = s2OrbitCanvas.width;
      const h = s2OrbitCanvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // 背景微光格線
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.stroke();

      // 旋轉角速度
      const inertiaGcm2 = (m1 * r1 * r1 + m2 * r2 * r2) / 100.0;
      const speed = 0.04 * (120.0 / (inertiaGcm2 || 120));
      s2OrbitAngle += speed;

      // 晃動震顫偏移（失衡時中央抖動）
      let wobbleX = 0, wobbleY = 0;
      if (!isBalanced) {
        const wobbleAmp = Math.min(6, eccentricity * 0.8);
        wobbleX = (Math.random() - 0.5) * wobbleAmp;
        wobbleY = (Math.random() - 0.5) * wobbleAmp;
      }

      const drawCx = cx + wobbleX;
      const drawCy = cy + wobbleY;

      // 雙星位置計算
      // 像素縮放比例：1 mm ~ 1.0 px
      const scale = 1.0;
      const cosA = Math.cos(s2OrbitAngle);
      const sinA = Math.sin(s2OrbitAngle);

      // 主星 m1 (位於 -cos, -sin 方向)
      const x1 = drawCx - r1 * scale * cosA;
      const y1 = drawCy - r1 * scale * sinA;

      // 伴星 m2 (位於 +cos, +sin 方向)
      const x2 = drawCx + r2 * scale * cosA;
      const y2 = drawCy + r2 * scale * sinA;

      // 公共質心 CM 位置
      const cmX = (m1 * x1 + m2 * x2) / (m1 + m2);
      const cmY = (m1 * y1 + m2 * y2) / (m1 + m2);

      // 旋轉軌道光環
      ctx.strokeStyle = isBalanced ? 'rgba(244, 63, 94, 0.4)' : 'rgba(239, 68, 68, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(drawCx, drawCy, r1 * scale, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = isBalanced ? 'rgba(56, 189, 248, 0.4)' : 'rgba(239, 68, 68, 0.2)';
      ctx.beginPath();
      ctx.arc(drawCx, drawCy, r2 * scale, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 雙星連桿臂
      ctx.strokeStyle = isBalanced ? 'rgba(226, 232, 240, 0.6)' : 'rgba(239, 68, 68, 0.7)';
      ctx.lineWidth = isBalanced ? 2 : 2.5;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // 中央固定軸心
      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();

      // 公共質心 CM 標記（紅點）
      ctx.fillStyle = isBalanced ? '#10b981' : '#f43f5e';
      ctx.beginPath();
      ctx.arc(cmX, cmY, isBalanced ? 3 : 4, 0, Math.PI * 2);
      ctx.fill();
      if (!isBalanced) {
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cmX, cmY, 7, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 主星天樞 (金色)
      const radius1 = Math.max(6, Math.min(14, Math.sqrt(m1) * 1.3));
      ctx.fillStyle = '#f59e0b';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = isBalanced ? 12 : 4;
      ctx.beginPath();
      ctx.arc(x1, y1, radius1, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 伴星搖光 (青藍色)
      const radius2 = Math.max(4, Math.min(10, Math.sqrt(m2) * 1.2));
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = isBalanced ? 10 : 3;
      ctx.beginPath();
      ctx.arc(x2, y2, radius2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 文字標籤
      ctx.fillStyle = '#f1f5f9';
      ctx.font = '9px monospace';
      ctx.fillText(`天樞(m₁)`, x1 - 18, y1 - radius1 - 3);
      ctx.fillText(`搖光(m₂)`, x2 - 18, y2 - radius2 - 3);

      if (isBalanced) {
        ctx.fillStyle = '#34d399';
        ctx.fillText(`[ORBIT LOCKED]`, cx - 36, cy + 85);
      } else {
        ctx.fillStyle = '#f87171';
        ctx.fillText(`[WOBBLE: Δe=${eccentricity.toFixed(1)}mm]`, cx - 55, cy + 85);
      }

      s2OrbitAnimId = requestAnimationFrame(drawOrbitCanvas);
    }

    if (s2OrbitCanvas) {
      if (s2OrbitAnimId) cancelAnimationFrame(s2OrbitAnimId);
      updateOrbitSim();
      drawOrbitCanvas();
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

  // 頁面渲染器：閱讀成就徽章（支援套書切換與第二套新書章節徽章）
  let activeBadgeTab = 'all';

  window.switchBadgeTab = function(tab) {
    activeBadgeTab = tab;
    renderBadges();
  };

  function renderBadges() {
    // 進入榮譽成就頁時自動同步已讀章節成就
    if (typeof syncProgressBadges === 'function') {
      syncProgressBadges();
    }

    const container = document.getElementById('app-main');
    const allBadges = DATA.badges || [];
    
    // 第一套與第二套新書徽章分組
    const series1Badges = allBadges.filter(b => b.series === 'series1' || (!b.series && b.id <= 32));
    const series2Badges = allBadges.filter(b => b.series === 'series2' || b.id >= 33);

    let displayBadges = allBadges;
    if (activeBadgeTab === 'series1') {
      displayBadges = series1Badges;
    } else if (activeBadgeTab === 'series2') {
      displayBadges = series2Badges;
    }

    const total = displayBadges.length;
    const unlockedCount = displayBadges.filter(b => state.unlockedBadges.includes(b.id)).length;
    const percent = total > 0 ? Math.round((unlockedCount / total) * 100) : 0;

    const overallTotal = allBadges.length;
    const overallUnlocked = state.unlockedBadges.length;
    const overallPercent = overallTotal > 0 ? Math.round((overallUnlocked / overallTotal) * 100) : 0;

    container.innerHTML = `
      <section class="max-w-5xl mx-auto mb-16">
        <!-- 頂部榮譽統計看板 -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold mb-3 border border-amber-500/20">
            <span>🏆 少年冒險家榮譽勳章</span>
            <span class="w-1 h-1 rounded-full bg-amber-500"></span>
            <span>全書庫成就解鎖榜</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">
            閱讀冒險榮譽勳章
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            伴隨章節閱讀探索，解鎖屬於你的榮譽成就！點擊章節隨時前往閱讀與重溫。
          </p>
          
          <div class="mt-6 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between text-xs font-bold mb-2.5">
              <span class="text-slate-700 dark:text-slate-300">
                ${activeBadgeTab === 'all' ? '總收集進度' : (activeBadgeTab === 'series1' ? '《失落的二十四小時》收集進度' : '《星願鐘擺與織光少女》收集進度')}：
                <span class="text-amber-600 font-mono font-black">${unlockedCount} / ${total}</span> 枚
              </span>
              <span class="text-amber-600 font-mono font-bold text-sm">${percent}%</span>
            </div>
            <div class="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden p-0.5">
              <div class="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500 shadow-sm" style="width: ${percent}%;"></div>
            </div>
            ${activeBadgeTab !== 'all' ? `
              <div class="mt-2 text-[11px] text-slate-400 text-right">
                全書庫總進度：${overallUnlocked} / ${overallTotal} 枚 (${overallPercent}%)
              </div>
            ` : ''}
          </div>
        </div>

        <!-- 套書分類切換籤 -->
        <div class="flex items-center justify-center flex-wrap gap-2.5 mb-8">
          <button onclick="window.switchBadgeTab('all')" class="px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeBadgeTab === 'all'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50'
          }">
            <span>🌟 全部榮譽</span>
            <span class="px-1.5 py-0.5 rounded-full text-[10px] ${activeBadgeTab === 'all' ? 'bg-amber-700 text-amber-100' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}">${allBadges.length}</span>
          </button>

          <button onclick="window.switchBadgeTab('series1')" class="px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeBadgeTab === 'series1'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50'
          }">
            <span>⚙️ 第一套：《失落的二十四小時》</span>
            <span class="px-1.5 py-0.5 rounded-full text-[10px] ${activeBadgeTab === 'series1' ? 'bg-amber-700 text-amber-100' : 'bg-amber-500/10 text-amber-600'}">${series1Badges.length}</span>
          </button>

          <button onclick="window.switchBadgeTab('series2')" class="px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeBadgeTab === 'series2'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50'
          }">
            <span>🌸 第二套：《星願鐘擺與織光少女》</span>
            <span class="px-1.5 py-0.5 rounded-full text-[10px] ${activeBadgeTab === 'series2' ? 'bg-rose-700 text-rose-100' : 'bg-rose-500/10 text-rose-600'}">${series2Badges.length}</span>
          </button>
        </div>

        <!-- 勳章卡片展示網格 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${displayBadges.map(badge => {
            const isUnlocked = state.unlockedBadges.includes(badge.id);
            const isSeries2 = badge.series === 'series2' || badge.id >= 33;
            const targetBookId = badge.bookId || (badge.id <= 10 ? 'book-1' : badge.id <= 22 ? 'book-2' : 'book-3');
            const targetChapterId = badge.chapterId !== undefined ? badge.chapterId : badge.id;

            return `
              <div class="badge-card p-5 rounded-2xl border transition-all ${
                isUnlocked 
                  ? (isSeries2 ? 'border-rose-500/40 bg-gradient-to-b from-rose-500/10 to-transparent shadow-md' : 'border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-transparent shadow-md') 
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40'
              } flex flex-col justify-between">
                <div>
                  <!-- 頂部圖示與狀態標籤 -->
                  <div class="flex items-start justify-between gap-3 mb-3">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner ${
                      isUnlocked 
                        ? (isSeries2 ? 'bg-rose-500/20 text-rose-600' : 'bg-amber-500/20 text-amber-600') 
                        : 'bg-slate-200 dark:bg-slate-800 opacity-60 grayscale'
                    }">
                      ${badge.icon}
                    </div>
                    <div class="flex flex-col items-end gap-1">
                      <span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isUnlocked 
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                      }">
                        ${isUnlocked ? '✨ 已獲得' : (badge.upcoming ? '⏳ 連載中' : '🔒 待解鎖')}
                      </span>
                      <span class="text-[10px] text-slate-400 font-medium">
                        ${badge.volTitle ? badge.volTitle.split('·')[0].trim() : (badge.id <= 32 ? '第一套' : '第二套')}
                      </span>
                    </div>
                  </div>

                  <!-- 勳章名稱與描述 -->
                  <h4 class="font-extrabold text-base text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <span>${badge.name}</span>
                    ${isUnlocked ? '<span class="text-amber-500 text-xs">⭐</span>' : ''}
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    ${badge.desc}
                  </p>
                </div>

                <!-- 底部章節跳轉動作 -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  ${!badge.upcoming ? `
                    <a href="#/read/${targetBookId}/${targetChapterId}" class="inline-flex items-center gap-1 text-[11px] font-bold ${
                      isUnlocked 
                        ? (isSeries2 ? 'text-rose-600 dark:text-rose-400 hover:underline' : 'text-amber-600 dark:text-amber-400 hover:underline') 
                        : 'text-slate-500 hover:text-amber-600 transition-colors'
                    }">
                      <span>📖 ${isUnlocked ? '重溫本章' : '前往閱讀解鎖'} (第 ${targetChapterId} 章)</span>
                      <span>➜</span>
                    </a>
                  ` : `
                    <span class="text-[11px] text-slate-400 italic">
                      ⏳ 章節連載中 · 敬請期待
                    </span>
                  `}
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
