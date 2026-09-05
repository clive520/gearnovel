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
                🌸 第二套 · 第二卷連載中
              </span>
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">9～14 歲適讀 · 鐘錶物理 × 少年成長</span>
            </div>

            <!-- 標題與引言 -->
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              《星願鐘擺與織光少女》
            </h2>
            <p class="text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 mb-4">
              聽懂齒輪心跳的晨光堂女孩，與手握微積分的冰霜少女並肩追光！
            </p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              十三歲鐘錶學徒采婭玆，立志成為星港青年首席星軌修復師。在晨光堂裡，她用薰衣草鐘錶油化解了天才少女林漪姉冰冷的外殼，並在雲海引航少年罧貁銁的默默陪伴下，熔鑄因瓦合金雙金屬發條，迎戰監察處重型蒸汽巨像！
            </p>

            <!-- 收錄全三卷列表 -->
            <div class="space-y-2.5 mb-6">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>📚 規劃全三卷三部曲（第二卷火熱連載中）</span>
                <span class="text-rose-600 font-mono">已更新至第 13 章 · 6.5 萬字</span>
              </div>

              <!-- 卷一 -->
              <a href="#/read/book-4/1" class="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-rose-500/30 flex items-center justify-between hover:border-rose-500 hover:bg-rose-500/5 transition-all group shadow-sm">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-rose-500/15 text-rose-600 font-black text-xs flex items-center justify-center flex-shrink-0">卷一</span>
                  <div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors flex items-center gap-2">
                      <span>《追光星盤的修復師》</span>
                      <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold">全10章完結</span>
                    </div>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400">全 10 章完結 · 4.6 萬字 · 虎克定律 × 雙金屬補償 × 翼帆升力 × 駐波和弦 × 陀螺進動</div>
                  </div>
                </div>
                <span class="text-xs text-rose-600 font-bold group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">閱讀 ➜</span>
              </a>

              <!-- 卷二 (連載中) -->
              <a href="#/read/book-5/1" class="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-500/30 flex items-center justify-between hover:border-amber-500 hover:bg-amber-500/5 transition-all group shadow-sm">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 font-black text-xs flex items-center justify-center flex-shrink-0">卷二</span>
                  <div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors flex items-center gap-2">
                      <span>《旋轉稜鏡的雙星軌道》</span>
                      <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-white font-bold">第13章已上線</span>
                    </div>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400">連載中 · 1.8 萬字 · 開普勒第二定律 × 面速度守恆 × 橢圓非圓齒輪</div>
                  </div>
                </div>
                <span class="text-xs text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">閱讀 ➜</span>
              </a>

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
                <span>⚙️ 精密鐘錶力學 × 13道 STEM 實驗</span>
                <span>·</span>
                <span>🤝 少年夥伴並肩共鳴</span>
              </div>
              <div class="flex items-center gap-2.5 w-full sm:w-auto">
                <a href="#/read/book-5/4" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-500 hover:to-rose-400 text-white font-bold text-xs shadow-md shadow-rose-600/20 flex items-center justify-center gap-1.5 transition-all hover:scale-105 active:scale-95">
                  <span>✨ 閱讀最新第 14 章</span>
                </a>
                <button onclick="window.openSeriesModal('series-2')" class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-all">
                  📑 查看全 14 章目錄
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
            <span>🌸 第二套 · 星願鐘擺 (14項)</span>
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

          <!-- 實驗五：受迫振動與雙質量動態吸振器 (TMD) 共振模擬器 (第 5 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>💓 5. 受迫振動與雙質量動態吸振器（TMD）模擬器（第 5 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">f₀ = 10Hz ｜ A(ω) ∝ 1/|ω₀²-ω²| ｜ TMD Δφ=180°</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              監察處督察官雷諾在地底管網發動 10 Hz 次聲波干擾，企圖引發毀滅性共振震碎晨光堂的參賽機芯！林漪姉與采婭玆研發出「星輝矽晶反相動態吸振器（TMD）」，以 180° 反相干涉主動吸收衝擊動能。拖動外部干擾頻率滑桿，並切換 TMD 吸振開關，觀察共振峰削平與齒輪心跳鎖定：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  外部次聲波激勵頻率 f_ext：<span id="series2-tmd-freq-val" class="text-rose-600 font-mono text-sm">10.0 Hz (臨界共振點)</span>
                </label>
                <input id="series2-tmd-freq-slider" type="range" min="50" max="150" value="100" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  機械結構固有阻尼比 ζ：<span id="series2-tmd-damping-val" class="text-sky-600 font-mono text-sm">0.03 (極低阻尼 · 高品質Q)</span>
                </label>
                <input id="series2-tmd-damping-slider" type="range" min="1" max="15" value="3" class="w-full accent-sky-600 mb-4 cursor-pointer">

                <div class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                  <div>
                    <span class="text-xs font-bold block text-slate-800 dark:text-slate-200">星輝單晶矽動態吸振器 (TMD)</span>
                    <span class="text-[10px] text-slate-400">180° 反向相位吸振，削平破壞性共振峰</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-tmd-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div class="space-y-1.5 text-xs font-mono">
                  <div class="flex justify-between text-slate-500">
                    <span>主擒縱叉振幅 A:</span>
                    <span id="series2-tmd-amp-val" class="font-bold text-emerald-600">0.02 μm (平穩靜止)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>品質因子 Q = 1/(2ζ):</span>
                    <span id="series2-tmd-q-val" class="font-bold text-indigo-600">98,000 (超高Q值)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>吸振相位差 Δφ:</span>
                    <span id="series2-tmd-phase-val" class="font-bold text-sky-600">180.0° (完全反相消諧)</span>
                  </div>
                </div>
              </div>

              <!-- 動態共振曲線與機芯震動畫布 -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-tmd-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 動態吸振鎖定（PULSE 心跳平穩）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-tmd-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-tmd-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  星輝矽晶吸振片以 180° 反向相位吸收動能，主擒縱叉穩固如定海神針！
                </div>
              </div>
            </div>

            <!-- PULSE 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 5 章核心密文：[ 16 - 21 - 12 - 19 - 05 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：16=P, 21=U, 12=L, 19=S, 05=E。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                16 ➜ P  |  21 ➜ U  |  12 ➜ L  |  19 ➜ S  |  05 ➜ E  ==>  【 PULSE 】（齒輪心跳 · 脈搏脈衝）
              </div>
            </div>
          </div>

          <!-- 實驗六：白努利翼帆升力與臨界失速攻角模擬器 (第 6 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>🪁 6. 白努利翼帆升力與臨界失速攻角模擬器（第 6 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">P + ½ρv² = 常數 ｜ L = ½ C_L ρ v² S ｜ α_crit = 16°</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              引航少年罧貁銁駕駛追光者號，帶領采婭玆與林漪姉冒險穿越黑峽大裂谷！翼帆上表面凸起加速氣流，依白努利定律產生向上巨大吸力。但攻角超過 16° 時邊界層氣流將剝離失速！開啟可變彎度前緣縫翼，觀察紊流消散與 GLIDE 滑翔鎖定：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  翼帆幾何攻角 α (Angle of Attack)：<span id="series2-aoa-val" class="text-rose-600 font-mono text-sm">11.5° (最優滑翔角)</span>
                </label>
                <input id="series2-aoa-slider" type="range" min="0" max="24" value="11" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  相對迎風風速 v：<span id="series2-airspeed-val" class="text-sky-600 font-mono text-sm">20 m/s (72 km/h 裂谷強風)</span>
                </label>
                <input id="series2-airspeed-slider" type="range" min="8" max="35" value="20" class="w-full accent-sky-600 mb-4 cursor-pointer">

                <div class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                  <div>
                    <span class="text-xs font-bold block text-slate-800 dark:text-slate-200">可變彎度前緣縫翼 (Variable Camber Slat)</span>
                    <span class="text-[10px] text-slate-400">注入高動能氣流，延遲邊界層剝離至 24°</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-slat-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div class="space-y-1.5 text-xs font-mono">
                  <div class="flex justify-between text-slate-500">
                    <span>白努利壓強差 ΔP:</span>
                    <span id="series2-pressure-val" class="font-bold text-sky-600">182.4 Pa (上翼面吸力)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>總氣動升力 L = ½ C_L ρ v² S:</span>
                    <span id="series2-lift-val" class="font-bold text-emerald-600">3,648 N (完全平衡艇身重力)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>當前昇阻比 L/D:</span>
                    <span id="series2-lod-val" class="font-bold text-indigo-600">14.2 (高效破風滑翔)</span>
                  </div>
                </div>
              </div>

              <!-- 動態翼型流線與飛舟畫布 -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-flight-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 完美氣流附著（GLIDE 破空滑翔）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-airfoil-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-flight-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  流線緊密貼合上翼面，白努利低壓吸力托舉追光者號直衝萬米平流層！
                </div>
              </div>
            </div>

            <!-- GLIDE 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 6 章核心密文：[ 07 - 12 - 09 - 04 - 05 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：07=G, 12=L, 09=I, 04=D, 05=E。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                07 ➜ G  |  12 ➜ L  |  09 ➜ I  |  04 ➜ D  |  05 ➜ E  ==>  【 GLIDE 】（迎風展翼 · 破空滑翔）
              </div>
            </div>
          </div>

          <!-- 實驗七：全反射臨界角與光纖導光聚焦模擬器 (第 7 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>🌈 7. 全反射臨界角與光纖導光聚焦模擬器（第 7 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">sin θ_c = n₂/n₁ ｜ NA = √(n₁²-n₂²) ｜ η = 99.2%</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              星輝浮島複賽考核遭遇高吸收性黑晶微粒迷霧！林漪姉與采婭玆利用星輝石英雙稜鏡構建全反射光波導。當入射角大於臨界角 θ_c 時，折射光徹底消失，光能 100% 無損反射向前傳輸！調校入射角與介質折射率，觀察光線折射洩漏 vs 全反射激光聚焦：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  光線界面入射角 θ₁：<span id="series2-tir-theta-val" class="text-rose-600 font-mono text-sm">52.3° (大於臨界角 · 全反射)</span>
                </label>
                <input id="series2-tir-theta-slider" type="range" min="25" max="75" value="52" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  晶體核心折射率 n₁：<span id="series2-tir-n1-val" class="text-sky-600 font-mono text-sm">1.85 (星輝單晶石英)</span>
                </label>
                <input id="series2-tir-n1-slider" type="range" min="140" max="210" value="185" class="w-full accent-sky-600 mb-4 cursor-pointer">

                <div class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                  <div>
                    <span class="text-xs font-bold block text-slate-800 dark:text-slate-200">環境介質：黑晶微粒吸收迷霧</span>
                    <span class="text-[10px] text-slate-400">迷霧折射率 n₂ = 1.35 (關閉則為空氣 n₂ = 1.00)</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-tir-mist-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div class="space-y-1.5 text-xs font-mono">
                  <div class="flex justify-between text-slate-500">
                    <span>全反射臨界角 θ_c:</span>
                    <span id="series2-tir-crit-val" class="font-bold text-sky-600">46.9° (sin θ_c = n₂/n₁)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>光波導數值孔徑 NA:</span>
                    <span id="series2-tir-na-val" class="font-bold text-indigo-600">1.265 (大於1 · 超廣角捕獲)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>光能傳輸效率 η:</span>
                    <span id="series2-tir-eff-val" class="font-bold text-emerald-600">99.2% (100%全反射相干傳輸)</span>
                  </div>
                </div>
              </div>

              <!-- 動態幾何光路畫布 -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-tir-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 100% 全內反射相干聚焦（FOCUS 鎖定）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-tir-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-tir-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  入射角超越 46.9° 臨界角！光線無損連續彈射，激發出撕裂迷霧的金色光刃！
                </div>
              </div>
            </div>

            <!-- FOCUS 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 7 章核心密文：[ 06 - 15 - 03 - 21 - 19 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：06=F, 15=O, 03=C, 21=U, 19=S。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                06 ➜ F  |  15 ➜ O  |  03 ➜ C  |  21 ➜ U  |  19 ➜ S  ==>  【 FOCUS 】（全反射光線聚焦 · 專注之魂）
              </div>
            </div>
          </div>

          <!-- 實驗八：槓桿原理與力矩平衡 (Torque Equilibrium) 巨像對決模擬器 (第 8 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <span>🛡️ 8. 槓桿原理與力矩平衡巨像對決模擬器（第 8 章）</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 font-bold">Στ = 0 ｜ F₁·d₁ = F₂·d₂ ｜ MA = d₁/d₂ = 15</span>
            </div>
            <p class="text-xs text-slate-500 mb-4 leading-relaxed">
              重達 350 公斤的蒸汽巨像歌利亞號以兩萬牛頓鐵拳砸下！林漪姉與采婭玆運用阿基米德複式槓桿與微積分質心切線，以 15 倍機械利益將微小拉力放大為 1,800 N·m 逆向力矩。拖動牽引力臂與拉力滑桿，觀察支點受力矩平衡與巨像癱瘓翻倒：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  牽引長力臂長度 d₁：<span id="series2-lever-d1-val" class="text-rose-600 font-mono text-sm">6.0 m (15倍機械利益)</span>
                </label>
                <input id="series2-lever-d1-slider" type="range" min="20" max="80" value="60" class="w-full accent-rose-600 mb-4 cursor-pointer">

                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  少女施加牽引力 F₁：<span id="series2-lever-f1-val" class="text-sky-600 font-mono text-sm">120 N (小女孩單手提水之力)</span>
                </label>
                <input id="series2-lever-f1-slider" type="range" min="40" max="250" value="120" class="w-full accent-sky-600 mb-4 cursor-pointer">

                <div class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                  <div>
                    <span class="text-xs font-bold block text-slate-800 dark:text-slate-200">四聯滑輪組機械倍率 (Pulley Gain)</span>
                    <span class="text-[10px] text-slate-400">額外提供 2.5 倍複合機械利益放大</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-pulley-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div class="space-y-1.5 text-xs font-mono">
                  <div class="flex justify-between text-slate-500">
                    <span>綜合機械利益 MA:</span>
                    <span id="series2-lever-ma-val" class="font-bold text-sky-600">37.5 倍 (阿基米德力學奇蹟)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>支點輸出反向扭矩 τ_out:</span>
                    <span id="series2-lever-tau-val" class="font-bold text-emerald-600">1,800 N·m (超越1,500 N·m斷裂閾值)</span>
                  </div>
                  <div class="flex justify-between text-slate-500">
                    <span>液壓缸剪應力比:</span>
                    <span id="series2-lever-stress-val" class="font-bold text-indigo-600">120% (主活塞過載崩斷)</span>
                  </div>
                </div>
              </div>

              <!-- 動態槓桿與巨像受力畫布 -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-lever-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 支點力矩超載瓦解（PIVOT 成功）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-lever-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-lever-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  15倍槓桿力臂引發 1800 N·m 逆向力矩，巨像左膝主液壓缸過載爆裂癱瘓！
                </div>
              </div>
            </div>

            <!-- PIVOT 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 8 章核心密文：[ 16 - 09 - 22 - 15 - 20 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：16=P, 09=I, 22=V, 15=O, 20=T。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                16 ➜ P  |  09 ➜ I  |  22 ➜ V  |  15 ➜ O  |  20 ➜ T  ==>  【 PIVOT 】（阿基米德支點 · 力矩樞紐）
              </div>
            </div>
          </div>

          <!-- 實驗九：駐波干涉與傅立葉諧波共振模擬器 (第 9 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">第二套 · 第 9 章</span>
                <span class="text-xs text-slate-500">波的疊加 · 駐波方程 · 傅立葉諧波</span>
              </div>
              <span class="text-xs font-mono text-slate-500">y = 2A sin(kx) cos(ωt)</span>
            </div>
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
              <span>💎 9. 駐波干涉與傅立葉諧波共振模擬器（第 9 章）</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              天籟星琴由十二公尺長的水晶晶弦構成。當兩列反向行進波相遇干涉時，唯有將固定夾具安置在<strong>波節（Node，振幅恆為零）</strong>處，並透過<strong>傅立葉級數諧波合成</strong>激發高階純律，方能消除破壞性剪應力，奏響震撼全星港的破曉和弦！
            </p>

            <!-- 實驗互動控制面板 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">晶弦長度 L (m)</span>
                    <span id="series2-wave-l-val" class="font-bold text-amber-500">12.0 m (主共振晶弦)</span>
                  </div>
                  <input id="series2-wave-l-slider" type="range" min="60" max="240" value="120" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500">
                </div>

                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">聲光波速 v (m/s)</span>
                    <span id="series2-wave-v-val" class="font-bold text-cyan-500">3400 m/s (星輝水晶相速度)</span>
                  </div>
                  <input id="series2-wave-v-slider" type="range" min="2000" max="4800" step="100" value="3400" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500">
                </div>

                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">諧波模態階數 n</span>
                    <span id="series2-wave-n-val" class="font-bold text-indigo-500">n = 3 (大三和弦第3諧波)</span>
                  </div>
                  <input id="series2-wave-n-slider" type="range" min="1" max="5" value="3" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500">
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span class="text-xs text-slate-600 dark:text-slate-300">傅立葉大三和弦合成 (1st+3rd+5th)</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-wave-fourier-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs pt-1 font-mono">
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">諧振頻率 f_n:</span>
                    <span id="series2-wave-fn-val" class="font-bold text-amber-500">425.0 Hz</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">駐波波長 λ_n:</span>
                    <span id="series2-wave-lambda-val" class="font-bold text-cyan-500">8.00 m</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 col-span-2">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">波節座標 (振幅恆為零固定點):</span>
                    <span id="series2-wave-nodes-val" class="font-bold text-emerald-500 text-[11px]">x = 0m, 3.0m, 6.0m, 9.0m, 12.0m</span>
                  </div>
                </div>
              </div>

              <!-- 動態駐波干涉視覺化 Canvas -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-wave-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  ✨ 駐波鎖定：完美大三和弦（CHORD 成功）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-wave-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-wave-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  因瓦滑塊鎖定4處波節（剪切應力0），激發第三諧波 425Hz 金色聲光干涉光輪！
                </div>
              </div>
            </div>

            <!-- CHORD 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div class="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-2">
                <span>🔐 第 9 章核心密文：[ 03 - 08 - 15 - 18 - 04 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：03=C, 08=H, 15=O, 18=R, 04=D。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">
                03 ➜ C  |  08 ➜ H  |  15 ➜ O  |  18 ➜ R  |  04 ➜ D  ==>  【 CHORD 】（天籟和弦 · 心靈共鳴之弦）
              </div>
            </div>
          </div>

          <!-- 實驗十：陀螺進動與天體星盤角動量模擬器 (第 10 章大結局) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">第二套 · 第 10 章大結局</span>
                <span class="text-xs text-slate-500">角動量守恆 · 陀螺進動 · 天頂閉環</span>
              </div>
              <span class="text-xs font-mono text-slate-500">τ = dL/dt = Ω_p × L</span>
            </div>
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
              <span>👑 10. 陀螺進動與天體星盤角動量模擬器（第 10 章大結局）</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              追光星盤定盤陀螺重達 8,500 kg·m²。當外部地磁暴施加傾覆力矩時，高速自轉的陀螺儀產生正交進動（Ω_p = τ/(I·ω)）。唯有插入母親留下的十二星座琉璃星盤，施加精確的反向補償力矩，方能使進動歸零，鎖定天頂真北極，破曉加冕！
            </p>

            <!-- 實驗互動控制面板 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">陀螺自轉轉速 RPM</span>
                    <span id="series2-gyro-rpm-val" class="font-bold text-amber-500">12,000 RPM (高速自轉)</span>
                  </div>
                  <input id="series2-gyro-rpm-slider" type="range" min="3000" max="15000" step="500" value="12000" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500">
                </div>

                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">磁暴外力矩 τ_ext (kN·m)</span>
                    <span id="series2-gyro-tau-val" class="font-bold text-rose-500">560 kN·m (極端風暴)</span>
                  </div>
                  <input id="series2-gyro-tau-slider" type="range" min="0" max="800" step="20" value="560" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500">
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span class="text-xs text-slate-600 dark:text-slate-300">植入十二星座琉璃星盤（正交反向補償力矩）</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-gyro-astrolabe-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs pt-1 font-mono">
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">固有角動量 L:</span>
                    <span id="series2-gyro-l-val" class="font-bold text-amber-500">1.07 × 10⁷ J·s</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">進動角速度 Ω_p:</span>
                    <span id="series2-gyro-omega-p-val" class="font-bold text-emerald-500">0.00 °/s (歸零鎖定)</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 col-span-2">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">天頂對準精度 / 姿態穩定度:</span>
                    <span id="series2-gyro-stability-val" class="font-bold text-emerald-500 text-[11px]">100% (真北極點完美鎖定 · ZENITH 破曉)</span>
                  </div>
                </div>
              </div>

              <!-- 動態陀螺儀進動視覺化 Canvas -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-gyro-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ✨ 天頂鎖定：進動歸零（ZENITH 成功）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-gyro-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-gyro-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  正交補償力矩抵消磁暴擾動，陀螺儀直指天頂，星港全城反重力光輝永恆復甦！
                </div>
              </div>
            </div>

            <!-- ZENITH 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div class="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-2">
                <span>🔐 第 10 章大結局終極密文：[ 26 - 05 - 14 - 09 - 20 - 08 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：26=Z, 05=E, 14=N, 09=I, 20=T, 08=H。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                26 ➜ Z  |  05 ➜ E  |  14 ➜ N  |  09 ➜ I  |  20 ➜ T  |  08 ➜ H  ==>  【 ZENITH 】（天頂破曉 · 巔峰之耀）
              </div>
            </div>
          </div>






        </div>


        
          <!-- 實驗十一：馬呂斯光學偏振定律與雙星都卜勒光譜模擬器 (第 11 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400">第二套 · 第 11 章全新連載</span>
                <span class="text-xs text-slate-500">馬呂斯定律 · 方解石雙折射 · 都卜勒頻移</span>
              </div>
              <span class="text-xs font-mono text-slate-500">I = I₀ cos²θ | Δλ/λ₀ = v_r/c</span>
            </div>
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
              <span>🧭 11. 馬呂斯光學偏振定律與雙星都卜勒光譜模擬器（第 11 章）</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              天極雙星互繞產生週期性都卜勒頻移（藍移與紅移）。強烈的大氣散射雜光掩蓋了星光吸收線；旋轉方解石晶體檢偏鏡（夾角 θ），依據馬呂斯定律（I = I₀ cos²θ），當 θ = 90° 時雜光完全消光（I = 0），雙星光譜吸收線清晰析出，解鎖雙星軌道與密鑰 POLAR！
            </p>

            <!-- 實驗互動控制面板 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">檢偏鏡偏振夾角 θ</span>
                    <span id="series2-polar-theta-val" class="font-bold text-rose-500">90° (正交完全消光)</span>
                  </div>
                  <input id="series2-polar-theta-slider" type="range" min="0" max="180" step="5" value="90" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500">
                </div>

                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">雙星互繞軌道相位 Φ (都卜勒視向速度)</span>
                    <span id="series2-polar-phase-val" class="font-bold text-sky-500">相位 90° (最大相對頻移)</span>
                  </div>
                  <input id="series2-polar-phase-slider" type="range" min="0" max="360" step="10" value="90" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500">
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span class="text-xs text-slate-600 dark:text-slate-300">方解石雙折射分離（o光 / e光分離模式）</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-polar-biref-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs pt-1 font-mono">
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">雜光透射率 I/I₀:</span>
                    <span id="series2-polar-trans-val" class="font-bold text-emerald-500">0.0% (消光極限)</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">光譜信噪比 SNR:</span>
                    <span id="series2-polar-snr-val" class="font-bold text-emerald-500">99.8 dB (無瑕析出)</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 col-span-2">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">主副星光譜吸收線波長 (都卜勒位移):</span>
                    <span id="series2-polar-wavelength-val" class="font-bold text-sky-500 text-[11px]">λ_A: 486.0 nm (藍移) | λ_B: 486.2 nm (紅移)</span>
                  </div>
                </div>
              </div>

              <!-- 動態偏振消光與雙星光譜 Canvas -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-polar-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  🧭 正交消光：雜光消除，雙星光譜精準分離（POLAR 鎖定）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-polar-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-polar-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  馬呂斯正交消光消除 99% 大氣雜光，雙星都卜勒分裂譜線完美呈現！
                </div>
              </div>
            </div>

            <!-- POLAR 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 11 章全新啟航密文：[ 16 - 15 - 12 - 01 - 18 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：16=P, 15=O, 12=L, 01=A, 18=R。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                16 ➜ P  |  15 ➜ O  |  12 ➜ L  |  01 ➜ A  |  18 ➜ R  ==>  【 POLAR 】（偏振光／極化之光）
              </div>
            </div>
          </div>

        
          <!-- 實驗十二：司涅爾定律與全反射光導纖維模擬器 (第 12 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400">第二套 · 第 12 章全新連載</span>
                <span class="text-xs text-slate-500">司涅爾全反射 · 臨界角 · 數值孔徑 NA</span>
              </div>
              <span class="text-xs font-mono text-slate-500">n₁ sin θ₁ = n₂ sin θ₂ | θ_c = arcsin(n₂/n₁)</span>
            </div>
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
              <span>💎 12. 司涅爾定律與全反射光導纖維模擬器（第 12 章）</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              三千米古代琉璃石英光纜遭遇深谷地熱烘烤，外層包層折射率 n₂ 漂移，入射角小於臨界角 θ_c 時光子洩漏入霧海！調節入射角 θ₁、開啟熱虹吸融水冷卻套壓制 n₂、調諧動態張力維持曲率半徑 R ≥ 2.0 m，達成 100% 全反射，解鎖通訊密鑰 FIBER！
            </p>

            <!-- 實驗互動控制面板 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">光束入射角 θ₁</span>
                    <span id="series2-fiber-theta-val" class="font-bold text-rose-500">72.0° (全反射區域)</span>
                  </div>
                  <input id="series2-fiber-theta-slider" type="range" min="50" max="88" step="1" value="72" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500">
                </div>

                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">光纜彎曲曲率半徑 R</span>
                    <span id="series2-fiber-radius-val" class="font-bold text-sky-500">3.5 m (阻尼浮標安全平衡)</span>
                  </div>
                  <input id="series2-fiber-radius-slider" type="range" min="0.5" max="5.0" step="0.1" value="3.5" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500">
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span class="text-xs text-slate-600 dark:text-slate-300">熱虹吸冰川融水冷卻套 (包層 n₂=1.48)</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-fiber-cooling-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs pt-1 font-mono">
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">臨界角 θ_c:</span>
                    <span id="series2-fiber-thetac-val" class="font-bold text-emerald-500">65.99°</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">數值孔徑 NA:</span>
                    <span id="series2-fiber-na-val" class="font-bold text-emerald-500">0.658</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 col-span-2">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">全反射傳輸效率 / 傳輸衰減:</span>
                    <span id="series2-fiber-eff-val" class="font-bold text-emerald-500 text-[11px]">100.0% (衰減 0.18 dB/km · 完美導光)</span>
                  </div>
                </div>
              </div>

              <!-- 動態光纖全反射波導視覺化 Canvas -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-fiber-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  💎 全反射導通：光能 100% 鎖在纖芯（FIBER 傳輸成功）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-fiber-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-fiber-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  θ₁ ≥ θ_c 且 R ≥ 2.0m，星光在石英晶格中無損彈跳，80TB 數據穿透深淵！
                </div>
              </div>
            </div>

            <!-- FIBER 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 12 章全新啟航密文：[ 06 - 09 - 02 - 05 - 18 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：06=F, 09=I, 02=B, 05=E, 18=R。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                06 ➜ F  |  09 ➜ I  |  02 ➜ B  |  05 ➜ E  |  18 ➜ R  ==>  【 FIBER 】（光導纖維／琉璃光纜）
              </div>
            </div>
          </div>

        
          <!-- 實驗十三：開普勒第二定律與非圓齒輪面速度守恆模擬器 (第 13 章) -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400">第二套 · 第 13 章全新連載</span>
                <span class="text-xs text-slate-500">開普勒第二定律 · 角動量守恆 · 橢圓非圓齒輪</span>
              </div>
              <span class="text-xs font-mono text-slate-500">dA/dt = 1/2 r² ω = L/(2μ) = const</span>
            </div>
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
              <span>💫 13. 開普勒第二定律與非圓齒輪面速度守恆模擬器（第 13 章）</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              天極雙星繞共同質心沿偏心率 e=0.35 橢圓互繞。均速圓形齒輪無法消化近星點 4.3 倍角速度暴增而劇烈卡頓！換裝晨光堂因瓦雙橢圓共軛非圓齒輪（i(θ) 隨真近點角動態變比），實體重現相等時間掃過相等面積（dA/dt 恆定），解鎖軌道密鑰 ORBIT！
            </p>

            <!-- 實驗互動控制面板 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">雙星軌道偏心率 e</span>
                    <span id="series2-kepler-ecc-val" class="font-bold text-rose-500">0.35 (橢圓雙星軌道)</span>
                  </div>
                  <input id="series2-kepler-ecc-slider" type="range" min="0" max="60" step="5" value="35" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500">
                </div>

                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">雙星質量比 m₁ / m₂</span>
                    <span id="series2-kepler-mass-val" class="font-bold text-sky-500">1.62 : 1 (藍巨星與伴星)</span>
                  </div>
                  <input id="series2-kepler-mass-slider" type="range" min="100" max="300" step="10" value="162" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500">
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span class="text-xs text-slate-600 dark:text-slate-300">因瓦雙橢圓共軛非圓齒輪（動態傳動比）</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="series2-kepler-gear-toggle" type="checkbox" checked class="sr-only peer">
                    <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs pt-1 font-mono">
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">近遠星點速度比:</span>
                    <span id="series2-kepler-vratio-val" class="font-bold text-emerald-500">2.08 倍 (ω比 4.31倍)</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">面速度恆定度:</span>
                    <span id="series2-kepler-areal-val" class="font-bold text-emerald-500">100% 恆定 (dA/dt 守恆)</span>
                  </div>
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 col-span-2">
                    <span class="text-slate-600 dark:text-slate-300 block text-[10px]">齒輪衝擊力矩 / 同步狀態:</span>
                    <span id="series2-kepler-torque-val" class="font-bold text-emerald-500 text-[11px]">0.0 N·m (純滾動嚙合 · ORBIT 完美同步)</span>
                  </div>
                </div>
              </div>

              <!-- 動態開普勒雙星與非圓齒輪 Canvas -->
              <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden">
                <div id="series2-kepler-status" class="mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  💫 面速度守恆：相等時間掃過相等面積（ORBIT 鎖定）
                </div>
                <div class="relative w-full flex items-center justify-center">
                  <canvas id="series2-kepler-canvas" width="280" height="190" class="rounded-xl border border-slate-800 bg-slate-950 shadow-inner"></canvas>
                </div>
                <div id="series2-kepler-desc" class="text-[11px] text-center text-slate-300 mt-2 font-mono">
                  雙橢圓共軛非圓齒輪順滑嚙合，近星點四倍加速度完美消化，雙星翩然起舞！
                </div>
              </div>
            </div>

            <!-- ORBIT 密碼驗證卡片 -->
            <div class="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <div class="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-2">
                <span>🔐 第 13 章全新啟航密文：[ 15 - 18 - 02 - 09 - 20 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：15=O, 18=R, 02=B, 09=I, 20=T。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                15 ➜ O  |  18 ➜ R  |  02 ➜ B  |  09 ➜ I  |  20 ➜ T  ==>  【 ORBIT 】（天體軌道／天球星軌）
              </div>
            </div>
          </div>

          <!-- 實驗 14：色散稜鏡陣列與柯西公式動態光譜模擬器 -->
          <div class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <span>🌈 14. 柯西公式與色散稜鏡陣列光譜模擬器（第 14 章）</span>
              </h3>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                波動光學 × 色散稜鏡
              </span>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">
              天極雙星近日點白熾強光交融，單片稜鏡因色散力不足導致光譜混疊。調節柯西色散係數、稜鏡頂角與多級稜鏡串聯陣列，觀察白光如何被精準色散分解為十二公尺寬的連續彩虹光譜，清晰分離藍巨星氦線與金矮星鈉雙線！
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <!-- 控制面板 -->
              <div class="space-y-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 text-sm">
                <div>
                  <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">稜鏡玻璃材質（柯西係數 B）</label>
                  <select id="series2-prism-glass-select" class="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                    <option value="flint" selected>晨光堂重火石琉璃 (Heavy Flint, B=0.0142 μm², nd=1.685)</option>
                    <option value="ultra">超密重火石琉璃 (Dense Flint, B=0.0245 μm², nd=1.750)</option>
                    <option value="crown">高透鋇冕琉璃 (Crown Glass, B=0.0040 μm², nd=1.528)</option>
                  </select>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-medium mb-1">
                    <span class="text-slate-600 dark:text-slate-300">等邊稜鏡頂角 α</span>
                    <span id="series2-prism-apex-val" class="font-bold text-amber-500">60.0° (標準等邊角)</span>
                  </div>
                  <input id="series2-prism-apex-slider" type="range" min="30" max="75" step="5" value="60" class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500">
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">稜鏡陣列串聯級數</label>
                  <select id="series2-prism-cascade-select" class="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                    <option value="1">單稜鏡 (Single Prism · 展開 1x · 吸收線混疊)</option>
                    <option value="2">雙稜鏡消色差組 (Doublet Pair · 展開 6x)</option>
                    <option value="3" selected>三級漸進高解析色散陣列 (Triple Cascade · 展開 24x)</option>
                  </select>
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <label class="flex items-center justify-between text-xs font-medium cursor-pointer">
                    <span class="text-slate-700 dark:text-slate-200 font-semibold">微分角規對稱最小偏向角對齊</span>
                    <input id="series2-prism-symm-toggle" type="checkbox" checked class="w-4 h-4 rounded text-amber-600 accent-amber-500 cursor-pointer">
                  </label>
                  <p class="text-[11px] text-slate-500 mt-0.5">啟動最小偏向角對稱光路（i₁=i₂），徹底消除彗差與光學像散。</p>
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div>紫光折射率 n(400nm)：<span id="series2-prism-nviolet-val" class="font-mono font-bold text-violet-500">1.774</span></div>
                    <div>紅光折射率 n(700nm)：<span id="series2-prism-nred-val" class="font-mono font-bold text-red-500">1.714</span></div>
                    <div>最小偏向角 δ_min：<span id="series2-prism-dev-val" class="font-mono font-bold text-amber-500">51.8°</span></div>
                    <div>光譜角展開寬度 Δδ：<span id="series2-prism-disp-val" class="font-mono font-bold text-emerald-500">12.4° (展開 24 倍)</span></div>
                  </div>
                </div>
              </div>

              <!-- 動態 Canvas 畫布 -->
              <div class="lg:col-span-2 flex flex-col items-center">
                <canvas id="series2-prism-canvas" width="560" height="270" class="w-full max-w-[560px] h-auto bg-slate-950 rounded-xl border border-slate-800 shadow-inner"></canvas>
                <div class="w-full flex items-center justify-between text-xs mt-2 px-1">
                  <span id="series2-prism-status" class="font-semibold text-emerald-500 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    光譜分離完成：氦線 (447nm) 與鈉雙線 (589nm) 完美解析
                  </span>
                  <span class="text-slate-600 dark:text-slate-400">柯西非線性色散模型</span>
                </div>
                <p id="series2-prism-desc" class="text-xs text-slate-600 dark:text-slate-400 mt-2 text-left w-full">
                  白光經三級火石-冕牌-火石陣列折射，角色散呈幾何級數放大，十二公尺光譜屏上吸收線分明，引力微震本徵頻率成功提煉！
                </p>
              </div>
            </div>

            <!-- 密文解密卡片 -->
            <div class="mt-4 p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div class="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-2">
                <span>🔐 第 14 章全新啟航密文：[ 16 - 18 - 09 - 19 - 13 ]</span>
              </div>
              <p class="text-[11px] text-slate-500 mb-2">對應 26 個英文字母序號：16=P, 18=R, 09=I, 19=S, 13=M。</p>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">
                16 ➜ P  |  18 ➜ R  |  09 ➜ I  |  19 ➜ S  |  13 ➜ M  ==>  【 PRISM 】（色散稜鏡／光譜之門）
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

    // ================== 第 5 章：受迫振動與雙質量動態吸振器 (TMD) ==================
    const s2TmdFreqSlider = document.getElementById('series2-tmd-freq-slider');
    const s2TmdDampSlider = document.getElementById('series2-tmd-damping-slider');
    const s2TmdToggle = document.getElementById('series2-tmd-toggle');
    const s2TmdFreqVal = document.getElementById('series2-tmd-freq-val');
    const s2TmdDampVal = document.getElementById('series2-tmd-damping-val');
    const s2TmdAmpVal = document.getElementById('series2-tmd-amp-val');
    const s2TmdQVal = document.getElementById('series2-tmd-q-val');
    const s2TmdPhaseVal = document.getElementById('series2-tmd-phase-val');
    const s2TmdStatus = document.getElementById('series2-tmd-status');
    const s2TmdDesc = document.getElementById('series2-tmd-desc');
    const s2TmdCanvas = document.getElementById('series2-tmd-canvas');

    let s2TmdAnimId = null;
    let s2TmdTime = 0;

    function updateTmdSim() {
      if (!s2TmdFreqSlider) return;
      const f = parseFloat(s2TmdFreqSlider.value) / 10.0; // 5.0 to 15.0 Hz
      const zeta = parseFloat(s2TmdDampSlider ? s2TmdDampSlider.value : 3) / 100.0; // 0.01 to 0.15
      const hasTmd = s2TmdToggle ? s2TmdToggle.checked : true;

      const f0 = 10.0; // 固有頻率 10 Hz

      if (s2TmdFreqVal) s2TmdFreqVal.textContent = `${f.toFixed(1)} Hz ${Math.abs(f - 10.0) < 0.3 ? '(臨界共振點)' : ''}`;
      if (s2TmdDampVal) s2TmdDampVal.textContent = `${zeta.toFixed(2)} (品質Q=${Math.round(1 / (2 * zeta))})`;
      if (s2TmdQVal) s2TmdQVal.textContent = `${Math.round(1 / (2 * zeta) * 1000).toLocaleString()} (星輝高Q)`;

      let amp = 0;
      if (!hasTmd) {
        // 單自由度受迫振動振幅: A = 1 / sqrt((1 - r^2)^2 + (2*zeta*r)^2)
        const r = f / f0;
        const denom = Math.sqrt(Math.pow(1 - r * r, 2) + Math.pow(2 * zeta * r, 2));
        amp = (1.0 / (denom || 0.01)) * 0.15; // μm
        if (s2TmdPhaseVal) s2TmdPhaseVal.textContent = `${(Math.atan2(2 * zeta * r, 1 - r * r) * 180 / Math.PI).toFixed(1)}°`;
      } else {
        // 雙自由度 TMD: 在 r=1.0 處振幅大幅陷落 (anti-resonance)
        const r = f / f0;
        const tmdDip = Math.abs(1 - r * r); // 0 at r=1
        const denom = Math.sqrt(Math.pow((1 - r * r) * (1 - r * r) - 0.15, 2) + Math.pow(2 * zeta * r, 2));
        amp = (tmdDip / (denom || 0.05)) * 0.25;
        if (s2TmdPhaseVal) s2TmdPhaseVal.textContent = `180.0° (反向完全消諧)`;
      }

      if (s2TmdAmpVal) {
        s2TmdAmpVal.textContent = `${amp.toFixed(2)} μm`;
        s2TmdAmpVal.className = amp > 1.2 ? 'font-bold text-rose-500' : 'font-bold text-emerald-600';
      }

      if (amp > 1.2) {
        if (s2TmdStatus) {
          s2TmdStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2TmdStatus.textContent = '⚠️ 破壞性共振爆裂！游絲劇烈變形';
        }
        if (s2TmdDesc) s2TmdDesc.textContent = '外部次聲頻率鎖定 10Hz 固有頻率！無 TMD 吸振，振幅飆升超越金屬彈性極限！';
      } else {
        if (s2TmdStatus) {
          s2TmdStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2TmdStatus.textContent = '✨ 動態吸振鎖定（PULSE 心跳平穩）';
        }
        if (s2TmdDesc) s2TmdDesc.textContent = '星輝矽晶吸振片以 180° 反向相位吸收動能，主擒縱叉穩固如定海神針！';
      }
    }

    if (s2TmdFreqSlider) s2TmdFreqSlider.oninput = updateTmdSim;
    if (s2TmdDampSlider) s2TmdDampSlider.oninput = updateTmdSim;
    if (s2TmdToggle) s2TmdToggle.onchange = updateTmdSim;

    // 動畫循環繪製 TMD 頻響曲線與齒輪
    function drawTmdCanvas() {
      if (!s2TmdCanvas) return;
      const ctx = s2TmdCanvas.getContext('2d');
      if (!ctx) return;

      const f = s2TmdFreqSlider ? parseFloat(s2TmdFreqSlider.value) / 10.0 : 10.0;
      const zeta = s2TmdDampSlider ? parseFloat(s2TmdDampSlider.value) / 100.0 : 0.03;
      const hasTmd = s2TmdToggle ? s2TmdToggle.checked : true;
      const f0 = 10.0;

      const w = s2TmdCanvas.width;
      const h = s2TmdCanvas.height;
      ctx.clearRect(0, 0, w, h);

      // 繪製背景網格與坐標軸
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      for (let x = 20; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 10);
        ctx.lineTo(x, h - 25);
        ctx.stroke();
      }
      for (let y = 20; y < h - 25; y += 30) {
        ctx.beginPath();
        ctx.moveTo(20, y);
        ctx.lineTo(w - 10, y);
        ctx.stroke();
      }

      // 坐標軸標籤
      ctx.fillStyle = '#64748b';
      ctx.font = '9px monospace';
      ctx.fillText('5Hz', 22, h - 12);
      ctx.fillText('10Hz(f₀)', w / 2 - 18, h - 12);
      ctx.fillText('15Hz', w - 35, h - 12);
      ctx.fillText('振幅 A', 22, 18);

      // 繪製頻率響應曲線
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = hasTmd ? '#10b981' : '#f43f5e';

      for (let px = 20; px <= w - 10; px++) {
        const freqAtX = 5.0 + ((px - 20) / (w - 30)) * 10.0; // 5 to 15 Hz
        const r = freqAtX / f0;
        let a = 0;
        if (!hasTmd) {
          const denom = Math.sqrt(Math.pow(1 - r * r, 2) + Math.pow(2 * zeta * r, 2));
          a = Math.min(120, (1.0 / (denom || 0.01)) * 12);
        } else {
          const tmdDip = Math.abs(1 - r * r);
          const denom = Math.sqrt(Math.pow((1 - r * r) * (1 - r * r) - 0.15, 2) + Math.pow(2 * zeta * r, 2));
          a = Math.min(120, (tmdDip / (denom || 0.05)) * 18);
        }

        const py = (h - 30) - a;
        if (px === 20) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 當前工作點標記
      const currentX = 20 + ((f - 5.0) / 10.0) * (w - 30);
      const curR = f / f0;
      let curA = 0;
      if (!hasTmd) {
        const denom = Math.sqrt(Math.pow(1 - curR * curR, 2) + Math.pow(2 * zeta * curR, 2));
        curA = Math.min(120, (1.0 / (denom || 0.01)) * 12);
      } else {
        const tmdDip = Math.abs(1 - curR * curR);
        const denom = Math.sqrt(Math.pow((1 - curR * curR) * (1 - curR * curR) - 0.15, 2) + Math.pow(2 * zeta * curR, 2));
        curA = Math.min(120, (tmdDip / (denom || 0.05)) * 18);
      }
      const currentY = (h - 30) - curA;

      // 垂線投影
      ctx.strokeStyle = '#38bdf8';
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(currentX, currentY);
      ctx.lineTo(currentX, h - 25);
      ctx.stroke();
      ctx.setLineDash([]);

      // 工作點光標
      ctx.fillStyle = curA > 50 ? '#ef4444' : '#10b981';
      ctx.shadowColor = curA > 50 ? '#ef4444' : '#10b981';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(currentX, currentY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 右上角即時微型齒輪心跳動畫
      s2TmdTime += 0.05;
      const gearX = w - 45;
      const gearY = 35;
      const wobble = curA > 50 ? (Math.random() - 0.5) * 6 : 0;

      ctx.save();
      ctx.translate(gearX + wobble, gearY + wobble);
      ctx.rotate(s2TmdTime * 2);
      ctx.fillStyle = curA > 50 ? '#f43f5e' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      // 齒輪齒
      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3);
        ctx.fillRect(-2, -18, 4, 6);
      }
      ctx.restore();

      // TMD 狀態文字標籤
      ctx.fillStyle = hasTmd ? '#34d399' : '#f87171';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(hasTmd ? '[TMD ACTIVE: 180° ANTI-PHASE]' : '[NO TMD: RESONANCE DANGER!]', 25, h - 35);

      s2TmdAnimId = requestAnimationFrame(drawTmdCanvas);
    }

    if (s2TmdCanvas) {
      if (s2TmdAnimId) cancelAnimationFrame(s2TmdAnimId);
      updateTmdSim();
      drawTmdCanvas();
    }

    // ================== 第 6 章：白努利翼帆升力與失速模擬器 ==================
    const s2AoaSlider = document.getElementById('series2-aoa-slider');
    const s2AirspeedSlider = document.getElementById('series2-airspeed-slider');
    const s2SlatToggle = document.getElementById('series2-slat-toggle');
    const s2AoaVal = document.getElementById('series2-aoa-val');
    const s2AirspeedVal = document.getElementById('series2-airspeed-val');
    const s2PressureVal = document.getElementById('series2-pressure-val');
    const s2LiftVal = document.getElementById('series2-lift-val');
    const s2LodVal = document.getElementById('series2-lod-val');
    const s2FlightStatus = document.getElementById('series2-flight-status');
    const s2FlightDesc = document.getElementById('series2-flight-desc');
    const s2AirfoilCanvas = document.getElementById('series2-airfoil-canvas');

    let s2AirfoilAnimId = null;
    let s2FlowOffset = 0;

    function updateAirfoilSim() {
      if (!s2AoaSlider || !s2AirspeedSlider) return;
      const alpha = parseFloat(s2AoaSlider.value); // 0 to 24 deg
      const v = parseFloat(s2AirspeedSlider.value); // 8 to 35 m/s
      const hasSlat = s2SlatToggle ? s2SlatToggle.checked : true;

      const stallThreshold = hasSlat ? 23.0 : 15.5;
      const isStalled = alpha > stallThreshold;

      if (s2AoaVal) s2AoaVal.textContent = `${alpha.toFixed(1)}° ${alpha === 11 || alpha === 12 ? '(最優滑翔角)' : ''}`;
      if (s2AirspeedVal) s2AirspeedVal.textContent = `${v.toFixed(0)} m/s (${(v * 3.6).toFixed(0)} km/h)`;

      // 大氣密度 rho = 1.0 kg/m^3, 翼面積 S = 12 m^2
      const rho = 1.0;
      const S = 12.0;

      let CL = 0;
      let CD = 0;
      let deltaP = 0;

      if (!isStalled) {
        // 升力係數 CL = 2*pi*alpha_rad * camber_factor
        CL = Math.min(2.2, 0.25 + (alpha * Math.PI / 180) * 5.2 * (hasSlat ? 1.25 : 1.0));
        CD = 0.04 + (alpha * alpha * 0.003);
        deltaP = 0.5 * rho * v * v * (CL / 1.4);
      } else {
        // 失速後升力驟降，阻力暴增
        CL = Math.max(0.15, 0.4 - (alpha - stallThreshold) * 0.08);
        CD = 0.6 + (alpha - stallThreshold) * 0.05;
        deltaP = 0.5 * rho * v * v * 0.15;
      }

      const totalLift = Math.round(0.5 * CL * rho * v * v * S);
      const lod = (CL / (CD || 0.01)).toFixed(1);

      if (s2PressureVal) s2PressureVal.textContent = `${deltaP.toFixed(1)} Pa (${isStalled ? '氣流剝離失壓' : '上翼面真空吸力'})`;
      if (s2LiftVal) s2LiftVal.textContent = `${totalLift.toLocaleString()} N (${isStalled ? '升力驟降墜落中' : '穩穩克服重力'})`;
      if (s2LodVal) s2LodVal.textContent = `${lod} (${isStalled ? '阻力暴增' : '高效破風'})`;

      if (isStalled) {
        if (s2FlightStatus) {
          s2FlightStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2FlightStatus.textContent = '⚠️ 氣流邊界層剝離！翼帆嚴重失速';
        }
        if (s2FlightDesc) s2FlightDesc.textContent = `攻角 ${alpha}° 超越 ${stallThreshold}° 臨界極限！紊流渦旋摧毀升力，小艇向深淵墜落！`;
      } else {
        if (s2FlightStatus) {
          s2FlightStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2FlightStatus.textContent = '✨ 完美氣流附著（GLIDE 破空滑翔）';
        }
        if (s2FlightDesc) s2FlightDesc.textContent = '流線緊密貼合上翼面，白努利低壓吸力托舉追光者號直衝萬米平流層！';
      }
    }

    if (s2AoaSlider) s2AoaSlider.oninput = updateAirfoilSim;
    if (s2AirspeedSlider) s2AirspeedSlider.oninput = updateAirfoilSim;
    if (s2SlatToggle) s2SlatToggle.onchange = updateAirfoilSim;

    // 動畫循環繪製空氣動力學流線與翼型
    function drawAirfoilCanvas() {
      if (!s2AirfoilCanvas) return;
      const ctx = s2AirfoilCanvas.getContext('2d');
      if (!ctx) return;

      const alpha = s2AoaSlider ? parseFloat(s2AoaSlider.value) : 11.5;
      const v = s2AirspeedSlider ? parseFloat(s2AirspeedSlider.value) : 20;
      const hasSlat = s2SlatToggle ? s2SlatToggle.checked : true;
      const stallThreshold = hasSlat ? 23.0 : 15.5;
      const isStalled = alpha > stallThreshold;

      const w = s2AirfoilCanvas.width;
      const h = s2AirfoilCanvas.height;
      ctx.clearRect(0, 0, w, h);

      s2FlowOffset += (v * 0.15);

      // 翼型中心點
      const cx = w / 2 - 10;
      const cy = h / 2 + 10;
      const chord = 110;
      const radAlpha = (-alpha * Math.PI) / 180.0;

      // 繪製背景流動粒子線
      const numLines = 7;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < numLines; i++) {
        const yBase = 25 + i * 22;
        ctx.beginPath();
        ctx.strokeStyle = isStalled && i < 3 ? 'rgba(239, 68, 68, 0.4)' : 'rgba(56, 189, 248, 0.35)';

        for (let x = 10; x < w - 10; x += 6) {
          let y = yBase;
          // 受到翼型影響的流線微擾
          const dx = x - cx;
          if (Math.abs(dx) < 60) {
            const influence = Math.exp(-Math.pow(dx / 35, 2));
            if (i <= 3) {
              // 上翼面加速膨脹
              y -= (isStalled && dx > 0 ? (Math.sin(s2FlowOffset + x * 0.1) * 12) : influence * 22);
            } else {
              // 下翼面壓縮
              y += influence * 8;
            }
          }
          if (x === 10) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // 繪製翼型截面 (Airfoil Profile)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(radAlpha);

      // 主翼型
      ctx.beginPath();
      ctx.fillStyle = isStalled ? '#f43f5e' : '#38bdf8';
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 1.5;

      // 繪製非對稱上凸下平弧線
      ctx.moveTo(-chord / 2, 0);
      ctx.bezierCurveTo(-chord / 4, -26, chord / 4, -20, chord / 2, 0);
      ctx.bezierCurveTo(chord / 4, -4, -chord / 4, 4, -chord / 2, 0);
      ctx.fill();
      ctx.stroke();

      // 若開啟縫翼，繪製前緣微型引流片
      if (hasSlat) {
        ctx.beginPath();
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 1;
        ctx.arc(-chord / 2 - 6, -8, 6, -Math.PI / 2, Math.PI / 3);
        ctx.stroke();
        ctx.fill();
      }

      ctx.restore();

      // 繪製升力向量箭頭
      const liftArrowLen = isStalled ? 12 : Math.min(65, 20 + (alpha * 2.2) * (v / 18));
      ctx.strokeStyle = isStalled ? '#ef4444' : '#10b981';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 15);
      ctx.lineTo(cx, cy - 15 - liftArrowLen);
      ctx.stroke();
      // 箭頭頂
      ctx.beginPath();
      ctx.moveTo(cx - 5, cy - 10 - liftArrowLen);
      ctx.lineTo(cx, cy - 15 - liftArrowLen);
      ctx.lineTo(cx + 5, cy - 10 - liftArrowLen);
      ctx.stroke();

      // 標籤提示
      ctx.fillStyle = isStalled ? '#f87171' : '#34d399';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(isStalled ? '[STALL: VORTEX COLLAPSE]' : '[GLIDE: LIFT VECTORS STABLE]', 20, 20);

      s2AirfoilAnimId = requestAnimationFrame(drawAirfoilCanvas);
    }

    if (s2AirfoilCanvas) {
      if (s2AirfoilAnimId) cancelAnimationFrame(s2AirfoilAnimId);
      updateAirfoilSim();
      drawAirfoilCanvas();
    }

    // ================== 第 7 章：全反射臨界角與光纖導光聚焦模擬器 ==================
    const s2TirThetaSlider = document.getElementById('series2-fiber-theta-slider');
    const s2TirN1Slider = document.getElementById('series2-fiber-n1-slider');
    const s2TirMistToggle = document.getElementById('series2-fiber-mist-toggle');
    const s2TirThetaVal = document.getElementById('series2-fiber-theta-val');
    const s2TirN1Val = document.getElementById('series2-fiber-n1-val');
    const s2TirCritVal = document.getElementById('series2-fiber-crit-val');
    const s2TirNaVal = document.getElementById('series2-fiber-na-val');
    const s2TirEffVal = document.getElementById('series2-fiber-eff-val');
    const s2TirStatus = document.getElementById('series2-fiber-status');
    const s2TirDesc = document.getElementById('series2-fiber-desc');
    const s2TirCanvas = document.getElementById('series2-fiber-canvas');

    let s2TirAnimId = null;
    let s2TirPulseOffset = 0;

    function updateTirSim() {
      if (!s2TirThetaSlider || !s2TirN1Slider) return;
      const thetaDeg = parseFloat(s2TirThetaSlider.value); // 25 to 75
      const n1 = parseFloat(s2TirN1Slider.value) / 100.0; // 1.40 to 2.10
      const hasMist = s2TirMistToggle ? s2TirMistToggle.checked : true;
      const n2 = hasMist ? 1.35 : 1.00;

      // 臨界角 sin(theta_c) = n2 / n1
      const sinCrit = n2 / n1;
      const isPossible = sinCrit <= 1.0;
      const critDeg = isPossible ? (Math.asin(sinCrit) * 180.0 / Math.PI) : 90.0;

      const isTir = isPossible && (thetaDeg >= critDeg);

      // 數值孔徑 NA = sqrt(n1^2 - n2^2)
      const na = Math.sqrt(Math.max(0, n1 * n1 - n2 * n2)).toFixed(3);

      if (s2TirThetaVal) s2TirThetaVal.textContent = `${thetaDeg.toFixed(1)}° (${isTir ? '大於臨界角 · 全反射' : '小於臨界角 · 折射洩漏'})`;
      if (s2TirN1Val) s2TirN1Val.textContent = `${n1.toFixed(2)} (${n1 >= 1.8 ? '星輝單晶石英' : '常規火石光學晶體'})`;
      if (s2TirCritVal) s2TirCritVal.textContent = `${critDeg.toFixed(1)}° (sin θ_c = ${n2.toFixed(2)}/${n1.toFixed(2)})`;
      if (s2TirNaVal) s2TirNaVal.textContent = `${na} (${parseFloat(na) >= 1.0 ? '大於1 · 超廣角捕獲' : '常規數值孔徑'})`;

      if (isTir) {
        if (s2TirEffVal) {
          s2TirEffVal.textContent = '99.2% (100%全反射相干傳輸)';
          s2TirEffVal.className = 'font-bold text-emerald-600';
        }
        if (s2TirStatus) {
          s2TirStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2TirStatus.textContent = '✨ 100% 全內反射相干聚焦（FOCUS 鎖定）';
        }
        if (s2TirDesc) s2TirDesc.textContent = `入射角 ${thetaDeg}° 超越 ${critDeg.toFixed(1)}° 臨界角！光線無損連續彈射，激發出撕裂迷霧的金色光刃！`;
      } else {
        const lossPercent = Math.min(96, Math.max(70, Math.round((critDeg - thetaDeg) * 3.5 + 60)));
        const effPercent = (100 - lossPercent).toFixed(1);
        if (s2TirEffVal) {
          s2TirEffVal.textContent = `${effPercent}% (折射散射嚴重洩漏)`;
          s2TirEffVal.className = 'font-bold text-rose-500';
        }
        if (s2TirStatus) {
          s2TirStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2TirStatus.textContent = '⚠️ 臨界角未達成！光線折射洩漏至黑霧中';
        }
        if (s2TirDesc) s2TirDesc.textContent = `入射角 ${thetaDeg}° 小於臨界角 ${critDeg.toFixed(1)}°！大量光子穿透界面逃逸，被高折射率黑晶吸收！`;
      }
    }

    if (s2TirThetaSlider) s2TirThetaSlider.oninput = updateTirSim;
    if (s2TirN1Slider) s2TirN1Slider.oninput = updateTirSim;
    if (s2TirMistToggle) s2TirMistToggle.onchange = updateTirSim;

    // 動畫循環繪製光線追蹤
    function drawTirCanvas() {
      if (!s2TirCanvas) return;
      const ctx = s2TirCanvas.getContext('2d');
      if (!ctx) return;

      const thetaDeg = s2TirThetaSlider ? parseFloat(s2TirThetaSlider.value) : 52;
      const n1 = s2TirN1Slider ? parseFloat(s2TirN1Slider.value) / 100.0 : 1.85;
      const hasMist = s2TirMistToggle ? s2TirMistToggle.checked : true;
      const n2 = hasMist ? 1.35 : 1.00;

      const sinCrit = n2 / n1;
      const isPossible = sinCrit <= 1.0;
      const critDeg = isPossible ? (Math.asin(sinCrit) * 180.0 / Math.PI) : 90.0;
      const isTir = isPossible && (thetaDeg >= critDeg);

      const w = s2TirCanvas.width;
      const h = s2TirCanvas.height;
      ctx.clearRect(0, 0, w, h);

      // 上下黑霧區域 (光疏介質)
      ctx.fillStyle = hasMist ? '#0f172a' : '#1e293b';
      ctx.fillRect(0, 0, w, 40);
      ctx.fillRect(0, h - 40, w, 40);

      // 晶體芯層 (光密介質)
      ctx.fillStyle = '#1e1b4b';
      ctx.fillRect(0, 40, w, h - 80);

      // 界面分界線
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, 40); ctx.lineTo(w, 40);
      ctx.moveTo(0, h - 40); ctx.lineTo(w, h - 40);
      ctx.stroke();
      ctx.setLineDash([]);

      // 介質文字標籤
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px monospace';
      ctx.fillText(hasMist ? '外部黑晶迷霧 (n₂=1.35)' : '外部空氣 (n₂=1.00)', 15, 25);
      ctx.fillText(`星輝石英晶體核心 (n₁=${n1.toFixed(2)})`, 15, h / 2 - 25);

      // 光脈衝流動
      s2TirPulseOffset = (s2TirPulseOffset + 3) % 40;

      // 繪製光路反射
      const startX = 15;
      const startY = h / 2;
      const rad = (thetaDeg * Math.PI) / 180.0;
      const stepX = 55 / Math.tan(rad); // 界面反彈水平跨度

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = isTir ? '#fbbf24' : '#f43f5e';
      ctx.shadowColor = isTir ? '#f59e0b' : '#ef4444';
      ctx.shadowBlur = isTir ? 12 : 4;

      ctx.beginPath();
      ctx.moveTo(startX, startY);

      // 第一個撞擊點 (上界面)
      const p1X = startX + stepX / 2;
      const p1Y = 40;
      ctx.lineTo(p1X, p1Y);

      if (isTir) {
        // 第二個撞擊點 (下界面)
        const p2X = p1X + stepX;
        const p2Y = h - 40;
        ctx.lineTo(p2X, p2Y);

        // 第三個撞擊點 (上界面)
        const p3X = p2X + stepX;
        const p3Y = 40;
        ctx.lineTo(p3X, p3Y);

        // 出射相干激光光刃
        const endX = w - 15;
        const endY = h / 2;
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // 終端感測靶心爆發星芒
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(endX, endY, 6, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // 折射洩漏射出外部
        ctx.stroke();

        // 繪製折射光線穿透進迷霧 (散失)
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(p1X, p1Y);
        ctx.lineTo(p1X + 35, 10);
        ctx.stroke();

        // 殘餘微弱反射光
        ctx.strokeStyle = 'rgba(244, 63, 94, 0.3)';
        ctx.beginPath();
        ctx.moveTo(p1X, p1Y);
        ctx.lineTo(p1X + stepX * 0.8, h - 40);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      // 狀態提示標籤
      ctx.fillStyle = isTir ? '#34d399' : '#f87171';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(isTir ? '[100% TIR: COHERENT BEAM LOCKED]' : '[REFRACTIVE LEAKAGE: POWER LOSS]', 15, h - 15);

      s2TirAnimId = requestAnimationFrame(drawTirCanvas);
    }

    if (s2TirCanvas) {
      if (s2TirAnimId) cancelAnimationFrame(s2TirAnimId);
      updateTirSim();
      drawTirCanvas();
    }

    // ================== 第 8 章：槓桿原理與力矩平衡巨像對決 ==================
    const s2LeverD1Slider = document.getElementById('series2-lever-d1-slider');
    const s2LeverF1Slider = document.getElementById('series2-lever-f1-slider');
    const s2PulleyToggle = document.getElementById('series2-pulley-toggle');
    const s2LeverD1Val = document.getElementById('series2-lever-d1-val');
    const s2LeverF1Val = document.getElementById('series2-lever-f1-val');
    const s2LeverMaVal = document.getElementById('series2-lever-ma-val');
    const s2LeverTauVal = document.getElementById('series2-lever-tau-val');
    const s2LeverStressVal = document.getElementById('series2-lever-stress-val');
    const s2LeverStatus = document.getElementById('series2-lever-status');
    const s2LeverDesc = document.getElementById('series2-lever-desc');
    const s2LeverCanvas = document.getElementById('series2-lever-canvas');

    let s2LeverAnimId = null;
    let s2ColossusTilt = 0;

    function updateLeverSim() {
      if (!s2LeverD1Slider || !s2LeverF1Slider) return;
      const d1 = parseFloat(s2LeverD1Slider.value) / 10.0; // 2.0 to 8.0 m
      const f1 = parseFloat(s2LeverF1Slider.value); // 40 to 250 N
      const hasPulley = s2PulleyToggle ? s2PulleyToggle.checked : true;
      const pulleyGain = hasPulley ? 2.5 : 1.0;

      const d2 = 0.4; // 巨像阻力力臂 0.4 m
      const ma = (d1 / d2) * pulleyGain;
      const tauOut = Math.round(f1 * d1 * pulleyGain);
      const stressPercent = Math.round((tauOut / 1500.0) * 100);
      const isToppled = tauOut >= 1500;

      if (s2LeverD1Val) s2LeverD1Val.textContent = `${d1.toFixed(1)} m (${(d1 / d2).toFixed(1)}倍幾何力臂)`;
      if (s2LeverF1Val) s2LeverF1Val.textContent = `${f1.toFixed(0)} N (微小牽引巧力)`;
      if (s2LeverMaVal) s2LeverMaVal.textContent = `${ma.toFixed(1)} 倍 (複合機械利益)`;
      if (s2LeverTauVal) {
        s2LeverTauVal.textContent = `${tauOut.toLocaleString()} N·m (${isToppled ? '超越1500 N·m破壞極限' : '未達瓦解閾值'})`;
        s2LeverTauVal.className = isToppled ? 'font-bold text-emerald-600' : 'font-bold text-rose-500';
      }
      if (s2LeverStressVal) s2LeverStressVal.textContent = `${stressPercent}% (${isToppled ? '液壓主柱崩斷' : '活塞正常承載'})`;

      if (isToppled) {
        if (s2LeverStatus) {
          s2LeverStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2LeverStatus.textContent = '✨ 支點力矩超載瓦解（PIVOT 成功）';
        }
        if (s2LeverDesc) s2LeverDesc.textContent = `${ma.toFixed(1)}倍複合槓桿引發 ${tauOut} N·m 逆向力矩，巨像左膝主液壓缸過載爆裂癱瘓！`;
      } else {
        if (s2LeverStatus) {
          s2LeverStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2LeverStatus.textContent = '⚠️ 力矩不足！巨像兩萬牛頓鐵拳逼近';
        }
        if (s2LeverDesc) s2LeverDesc.textContent = `當前輸出力矩 ${tauOut} N·m 低於 1500 N·m 臨界破壞閥！請拉長力臂或加強拉力！`;
      }
    }

    if (s2LeverD1Slider) s2LeverD1Slider.oninput = updateLeverSim;
    if (s2LeverF1Slider) s2LeverF1Slider.oninput = updateLeverSim;
    if (s2PulleyToggle) s2PulleyToggle.onchange = updateLeverSim;

    // 動畫循環繪製槓桿與巨像
    function drawLeverCanvas() {
      if (!s2LeverCanvas) return;
      const ctx = s2LeverCanvas.getContext('2d');
      if (!ctx) return;

      const d1 = s2LeverD1Slider ? parseFloat(s2LeverD1Slider.value) / 10.0 : 6.0;
      const f1 = s2LeverF1Slider ? parseFloat(s2LeverF1Slider.value) : 120;
      const hasPulley = s2PulleyToggle ? s2PulleyToggle.checked : true;
      const pulleyGain = hasPulley ? 2.5 : 1.0;
      const tauOut = f1 * d1 * pulleyGain;
      const isToppled = tauOut >= 1500;

      const w = s2LeverCanvas.width;
      const h = s2LeverCanvas.height;
      ctx.clearRect(0, 0, w, h);

      // 地面
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(10, h - 30);
      ctx.lineTo(w - 10, h - 30);
      ctx.stroke();

      // 支點位置 (Fulcrum PIVOT)
      const fulcrumX = 130;
      const fulcrumY = h - 30;

      // 支點三角形
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(fulcrumX, fulcrumY - 22);
      ctx.lineTo(fulcrumX - 14, fulcrumY);
      ctx.lineTo(fulcrumX + 14, fulcrumY);
      ctx.closePath();
      ctx.fill();

      // 支點圓球
      ctx.fillStyle = '#fcd34d';
      ctx.beginPath();
      ctx.arc(fulcrumX, fulcrumY - 22, 4, 0, Math.PI * 2);
      ctx.fill();

      // 槓桿旋轉角
      const targetTilt = isToppled ? -0.22 : 0.05;
      s2ColossusTilt += (targetTilt - s2ColossusTilt) * 0.1;

      // 繪製槓桿橫樑
      ctx.save();
      ctx.translate(fulcrumX, fulcrumY - 22);
      ctx.rotate(s2ColossusTilt);

      ctx.fillStyle = '#94a3b8';
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 3;
      // 槓桿桿體
      ctx.beginPath();
      ctx.moveTo(-105, -3);
      ctx.lineTo(65, -3);
      ctx.lineTo(65, 3);
      ctx.lineTo(-105, 3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 左側拉力繩與少女拉力標記
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-100, 0);
      ctx.lineTo(-100, 25);
      ctx.stroke();
      // 向下拉力箭頭
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(-100, 28);
      ctx.lineTo(-104, 20);
      ctx.lineTo(-96, 20);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.font = '8px monospace';
      ctx.fillText(`F₁=${f1.toFixed(0)}N`, -120, 38);

      ctx.restore();

      // 右側鋼鐵巨像腿部與身軀
      const colossusX = fulcrumX + 85;
      const colossusY = h - 30;
      const colossusAngle = isToppled ? 0.35 : -0.05;

      ctx.save();
      ctx.translate(colossusX, colossusY);
      ctx.rotate(colossusAngle);

      // 巨像腿部
      ctx.fillStyle = isToppled ? '#ef4444' : '#475569';
      ctx.fillRect(-15, -60, 24, 60);

      // 巨像胸甲
      ctx.fillStyle = isToppled ? '#f43f5e' : '#334155';
      ctx.fillRect(-22, -115, 42, 55);

      // 巨像眼睛紅光
      ctx.fillStyle = isToppled ? '#64748b' : '#ef4444';
      ctx.beginPath();
      ctx.arc(0, -95, 4, 0, Math.PI * 2);
      ctx.fill();

      // 若瓦解，繪製噴出的黑色液壓油與蒸汽
      if (isToppled) {
        ctx.fillStyle = 'rgba(244, 63, 94, 0.7)';
        ctx.beginPath();
        ctx.arc(-8, -45, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(-12, -55, 18, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // 支點文字標註
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('▲ PIVOT (支點)', fulcrumX - 35, fulcrumY + 14);

      // 狀態文字
      ctx.fillStyle = isToppled ? '#34d399' : '#f87171';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(isToppled ? '[PIVOT OVERLOAD: COLOSSUS TOPPLED]' : '[INSUFFICIENT TORQUE: DANGER!]', 15, 20);

      s2LeverAnimId = requestAnimationFrame(drawLeverCanvas);
    }

    if (s2LeverCanvas) {
      if (s2LeverAnimId) cancelAnimationFrame(s2LeverAnimId);
      updateLeverSim();
      drawLeverCanvas();
    }






    
    // ================== 第 9 章：駐波干涉與傅立葉諧波共振 ==================
    const s2WaveLSlider = document.getElementById('series2-wave-l-slider');
    const s2WaveVSlider = document.getElementById('series2-wave-v-slider');
    const s2WaveNSlider = document.getElementById('series2-wave-n-slider');
    const s2WaveFourierToggle = document.getElementById('series2-wave-fourier-toggle');

    const s2WaveLVal = document.getElementById('series2-wave-l-val');
    const s2WaveVVal = document.getElementById('series2-wave-v-val');
    const s2WaveNVal = document.getElementById('series2-wave-n-val');
    const s2WaveFnVal = document.getElementById('series2-wave-fn-val');
    const s2WaveLambdaVal = document.getElementById('series2-wave-lambda-val');
    const s2WaveNodesVal = document.getElementById('series2-wave-nodes-val');
    const s2WaveStatus = document.getElementById('series2-wave-status');
    const s2WaveDesc = document.getElementById('series2-wave-desc');
    const s2WaveCanvas = document.getElementById('series2-wave-canvas');

    let s2WaveAnimId = null;
    let s2WaveTime = 0;

    function updateWaveSim() {
      if (!s2WaveLSlider || !s2WaveVSlider || !s2WaveNSlider) return;
      const L = parseFloat(s2WaveLSlider.value) / 10.0; // 6.0 to 24.0 m
      const v = parseFloat(s2WaveVSlider.value); // 2000 to 4800 m/s
      const n = parseInt(s2WaveNSlider.value, 10); // 1 to 5
      const hasFourier = s2WaveFourierToggle ? s2WaveFourierToggle.checked : true;

      const f1 = v / (2.0 * L);
      const fn = n * f1;
      const lambdaN = (2.0 * L) / n;

      // 計算波節座標
      const nodeCoords = [];
      for (let i = 0; i <= n; i++) {
        const xNode = (i * lambdaN) / 2.0;
        nodeCoords.push(`${xNode.toFixed(1)}m`);
      }

      if (s2WaveLVal) s2WaveLVal.textContent = `${L.toFixed(1)} m (晶弦長度)`;
      if (s2WaveVVal) s2WaveVVal.textContent = `${v.toFixed(0)} m/s (星輝水晶相速度)`;
      if (s2WaveNVal) {
        const modeDesc = n === 1 ? '基頻模式' : n === 3 ? '大三和弦第3諧波' : `第 ${n} 階諧波`;
        s2WaveNVal.textContent = `n = ${n} (${modeDesc})`;
      }
      if (s2WaveFnVal) s2WaveFnVal.textContent = `${fn.toFixed(1)} Hz`;
      if (s2WaveLambdaVal) s2WaveLambdaVal.textContent = `${lambdaN.toFixed(2)} m`;
      if (s2WaveNodesVal) s2WaveNodesVal.textContent = `x = ${nodeCoords.join(', ')} (${n + 1} 個零振幅波節)`;

      const isHarmonicChord = hasFourier && (n === 3 || n === 1);
      if (isHarmonicChord) {
        if (s2WaveStatus) {
          s2WaveStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40';
          s2WaveStatus.textContent = '✨ 駐波鎖定：完美大三和弦（CHORD 成功）';
        }
        if (s2WaveDesc) {
          s2WaveDesc.textContent = `因瓦滑塊鎖定 ${n + 1} 處波節（剪切應力0），激發 ${fn.toFixed(1)}Hz 純律金色聲光干涉光輪！`;
        }
      } else {
        if (s2WaveStatus) {
          s2WaveStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40';
          s2WaveStatus.textContent = `🌊 第 ${n} 階諧波駐波振盪中`;
        }
        if (s2WaveDesc) {
          s2WaveDesc.textContent = `單一模態振盪，開啟傅立葉開關以合成大三和弦（CHORD）！`;
        }
      }
    }

    if (s2WaveLSlider) s2WaveLSlider.oninput = updateWaveSim;
    if (s2WaveVSlider) s2WaveVSlider.oninput = updateWaveSim;
    if (s2WaveNSlider) s2WaveNSlider.oninput = updateWaveSim;
    if (s2WaveFourierToggle) s2WaveFourierToggle.onchange = updateWaveSim;

    // 動態繪製駐波與聲光干涉條紋
    function drawWaveCanvas() {
      if (!s2WaveCanvas) return;
      const ctx = s2WaveCanvas.getContext('2d');
      if (!ctx) return;

      const L = s2WaveLSlider ? parseFloat(s2WaveLSlider.value) / 10.0 : 12.0;
      const n = s2WaveNSlider ? parseInt(s2WaveNSlider.value, 10) : 3;
      const hasFourier = s2WaveFourierToggle ? s2WaveFourierToggle.checked : true;

      const w = s2WaveCanvas.width;
      const h = s2WaveCanvas.height;
      ctx.clearRect(0, 0, w, h);

      s2WaveTime += 0.05;

      const paddingX = 25;
      const centerY = h / 2 + 10;
      const drawWidth = w - paddingX * 2;
      const maxAmp = 42;

      // 繪製背景參考格線
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(paddingX, centerY);
      ctx.lineTo(paddingX + drawWidth, centerY);
      ctx.stroke();

      // 繪製駐波包絡線 (Envelopes: ±2A sin(kx))
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);

      // 上包絡
      ctx.beginPath();
      for (let px = 0; px <= drawWidth; px++) {
        const normX = px / drawWidth;
        const env = maxAmp * Math.sin(n * Math.PI * normX);
        if (px === 0) ctx.moveTo(paddingX + px, centerY - env);
        else ctx.lineTo(paddingX + px, centerY - env);
      }
      ctx.stroke();

      // 下包絡
      ctx.beginPath();
      for (let px = 0; px <= drawWidth; px++) {
        const normX = px / drawWidth;
        const env = maxAmp * Math.sin(n * Math.PI * normX);
        if (px === 0) ctx.moveTo(paddingX + px, centerY + env);
        else ctx.lineTo(paddingX + px, centerY + env);
      }
      ctx.stroke();
      ctx.setLineDash([]); // 恢復實線

      // 繪製動態波形 y(x, t) = 2A sin(kx) cos(ωt)
      // 若開啟傅立葉合成，疊加 1st, 3rd, 5th 諧波
      const osc = Math.cos(s2WaveTime * 4);
      const osc3 = Math.cos(s2WaveTime * 12);
      const osc5 = Math.cos(s2WaveTime * 20);

      const grad = ctx.createLinearGradient(paddingX, centerY - maxAmp, paddingX + drawWidth, centerY + maxAmp);
      grad.addColorStop(0, '#38bdf8');
      grad.addColorStop(0.5, '#fbbf24');
      grad.addColorStop(1, '#f59e0b');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.beginPath();

      for (let px = 0; px <= drawWidth; px++) {
        const normX = px / drawWidth;
        let yDisp = 0;
        if (hasFourier) {
          // 傅立葉諧波合成
          const y1 = (maxAmp * 0.6) * Math.sin(1 * Math.PI * normX) * osc;
          const y3 = (maxAmp * 0.35) * Math.sin(3 * Math.PI * normX) * osc3;
          const y5 = (maxAmp * 0.15) * Math.sin(5 * Math.PI * normX) * osc5;
          yDisp = y1 + y3 + y5;
        } else {
          yDisp = maxAmp * Math.sin(n * Math.PI * normX) * osc;
        }

        if (px === 0) ctx.moveTo(paddingX + px, centerY - yDisp);
        else ctx.lineTo(paddingX + px, centerY - yDisp);
      }
      ctx.stroke();

      // 標註波節 (Nodes: y=0) - 紅色圓點與鎖定標籤
      for (let i = 0; i <= n; i++) {
        const nodeX = paddingX + (i / n) * drawWidth;
        // 波節點
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(nodeX, centerY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fca5a5';
        ctx.font = 'bold 8px monospace';
        ctx.fillText(`N${i}`, nodeX - 5, centerY + 14);
      }

      // 標註波腹 (Antinodes: 最大振幅點) - 金色光暈
      for (let i = 0; i < n; i++) {
        const antinodeX = paddingX + ((i + 0.5) / n) * drawWidth;
        const pulse = Math.abs(Math.sin(s2WaveTime * 4));
        ctx.fillStyle = `rgba(251, 191, 36, ${0.3 + pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(antinodeX, centerY - maxAmp * 0.8 * osc, 6 + pulse * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // 頂部聲光干涉光輪文字
      ctx.fillStyle = hasFourier ? '#fcd34d' : '#38bdf8';
      ctx.font = 'bold 9px monospace';
      const bannerText = hasFourier
        ? '[CHORD LOCKED: FOURIER TRIAD 100%]'
        : `[STANDING WAVE: MODE n=${n} ACTIVE]`;
      ctx.fillText(bannerText, 15, 20);

      s2WaveAnimId = requestAnimationFrame(drawWaveCanvas);
    }

    if (s2WaveCanvas) {
      if (s2WaveAnimId) cancelAnimationFrame(s2WaveAnimId);
      updateWaveSim();
      drawWaveCanvas();
    }



    // ================== 第 10 章大結局：陀螺進動與天體星盤角動量 ==================
    const s2GyroRpmSlider = document.getElementById('series2-gyro-rpm-slider');
    const s2GyroTauSlider = document.getElementById('series2-gyro-tau-slider');
    const s2GyroToggle = document.getElementById('series2-gyro-astrolabe-toggle');

    const s2GyroRpmVal = document.getElementById('series2-gyro-rpm-val');
    const s2GyroTauVal = document.getElementById('series2-gyro-tau-val');
    const s2GyroLVal = document.getElementById('series2-gyro-l-val');
    const s2GyroOmegaPVal = document.getElementById('series2-gyro-omega-p-val');
    const s2GyroStabilityVal = document.getElementById('series2-gyro-stability-val');
    const s2GyroStatus = document.getElementById('series2-gyro-status');
    const s2GyroDesc = document.getElementById('series2-gyro-desc');
    const s2GyroCanvas = document.getElementById('series2-gyro-canvas');

    let s2GyroAnimId = null;
    let s2GyroSpinAngle = 0;
    let s2GyroPrecessionAngle = 0;

    function updateGyroSim() {
      if (!s2GyroRpmSlider || !s2GyroTauSlider) return;
      const rpm = parseFloat(s2GyroRpmSlider.value); // 3000 to 15000
      const tauKn = parseFloat(s2GyroTauSlider.value); // 0 to 800 kN·m
      const hasAstrolabe = s2GyroToggle ? s2GyroToggle.checked : true;

      const I = 8500.0; // kg·m²
      const omega = (rpm * 2.0 * Math.PI) / 60.0; // rad/s
      const L = I * omega; // J·s

      // 外部擾動力矩 (N·m)
      const tauNet = hasAstrolabe ? 0.0 : tauKn * 1000.0;
      const omegaP_rad = tauNet / L; // rad/s
      const omegaP_deg = (omegaP_rad * 180.0) / Math.PI;

      const isLocked = hasAstrolabe || tauKn === 0;

      if (s2GyroRpmVal) s2GyroRpmVal.textContent = `${rpm.toLocaleString()} RPM (${omega.toFixed(0)} rad/s)`;
      if (s2GyroTauVal) s2GyroTauVal.textContent = `${tauKn} kN·m (${hasAstrolabe ? '已由星盤反向力矩抵消' : '外部失衡力矩'})`;
      if (s2GyroLVal) s2GyroLVal.textContent = `${(L / 1e7).toFixed(2)} × 10⁷ J·s`;
      if (s2GyroOmegaPVal) {
        s2GyroOmegaPVal.textContent = `${omegaP_deg.toFixed(2)} °/s (${isLocked ? '進動歸零' : '劇烈搖晃'})`;
        s2GyroOmegaPVal.className = isLocked ? 'font-bold text-emerald-500' : 'font-bold text-rose-500';
      }
      if (s2GyroStabilityVal) {
        s2GyroStabilityVal.textContent = isLocked ? '100% (真北極點完美鎖定 · ZENITH 破曉)' : `${Math.max(10, Math.round(100 - omegaP_deg * 2.5))}% (失控進動，反重力面臨崩潰！)`;
        s2GyroStabilityVal.className = isLocked ? 'font-bold text-emerald-500 text-[11px]' : 'font-bold text-rose-500 text-[11px]';
      }

      if (isLocked) {
        if (s2GyroStatus) {
          s2GyroStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2GyroStatus.textContent = '✨ 天頂鎖定：進動歸零（ZENITH 成功）';
        }
        if (s2GyroDesc) {
          s2GyroDesc.textContent = '正交補償力矩抵消磁暴擾動，陀螺儀直指天頂，星港全城反重力光輝永恆復甦！';
        }
      } else {
        if (s2GyroStatus) {
          s2GyroStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2GyroStatus.textContent = '⚠️ 陀螺儀失衡進動！反重力矩陣解體警報';
        }
        if (s2GyroDesc) {
          s2GyroDesc.textContent = `進動角速度高達 ${omegaP_deg.toFixed(1)}°/s！請立即開啟「植入十二星座琉璃星盤」以施加反向力矩！`;
        }
      }
    }

    if (s2GyroRpmSlider) s2GyroRpmSlider.oninput = updateGyroSim;
    if (s2GyroTauSlider) s2GyroTauSlider.oninput = updateGyroSim;
    if (s2GyroToggle) s2GyroToggle.onchange = updateGyroSim;

    // 動態繪製 3D 陀螺自轉與進動
    function drawGyroCanvas() {
      if (!s2GyroCanvas) return;
      const ctx = s2GyroCanvas.getContext('2d');
      if (!ctx) return;

      const hasAstrolabe = s2GyroToggle ? s2GyroToggle.checked : true;
      const tauKn = s2GyroTauSlider ? parseFloat(s2GyroTauSlider.value) : 560;
      const isLocked = hasAstrolabe || tauKn === 0;

      const w = s2GyroCanvas.width;
      const h = s2GyroCanvas.height;
      ctx.clearRect(0, 0, w, h);

      s2GyroSpinAngle += 0.25;
      if (!isLocked) {
        s2GyroPrecessionAngle += 0.035;
      }

      const centerX = w / 2;
      const centerY = h / 2 + 20;

      // 繪製背景星空微光
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // 基座平台 (Gimbal Base)
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + 45, 75, 20, 0, 0, Math.PI * 2);
      ctx.stroke();

      // 計算自轉軸傾角
      const tiltMag = isLocked ? 0.0 : 0.38;
      const tiltX = Math.sin(s2GyroPrecessionAngle) * tiltMag;
      const tiltY = Math.cos(s2GyroPrecessionAngle) * tiltMag * 0.5;

      const topX = centerX + Math.sin(s2GyroPrecessionAngle) * (tiltMag * 80);
      const topY = centerY - 65 + tiltY * 20;

      // 如果未鎖定，繪製進動圓錐 (Precession Cone)
      if (!isLocked) {
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 3]);
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - 65, tiltMag * 80, tiltMag * 30, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 自轉主軸 (Spin Axis Vector L)
      ctx.strokeStyle = isLocked ? '#10b981' : '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY + 30);
      ctx.lineTo(topX, topY);
      ctx.stroke();

      // 陀螺轉子圓盤 (Rotor Disc)
      const midX = (centerX + topX) / 2;
      const midY = (centerY + 30 + topY) / 2;

      ctx.save();
      ctx.translate(midX, midY);
      const angleAxis = Math.atan2(topX - centerX, (centerY + 30) - topY);
      ctx.rotate(angleAxis);

      // 轉子立體感
      const discGrad = ctx.createLinearGradient(-50, 0, 50, 0);
      discGrad.addColorStop(0, '#0284c7');
      discGrad.addColorStop(0.5, '#38bdf8');
      discGrad.addColorStop(1, '#0369a1');

      ctx.fillStyle = discGrad;
      ctx.strokeStyle = '#e0f2fe';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 52, 16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 十二星座榫卯與金光紋路
      const spokeAngle = s2GyroSpinAngle;
      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 1.5;
      for (let s = 0; s < 6; s++) {
        const theta = spokeAngle + (s * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(theta) * 48, Math.sin(theta) * 14);
        ctx.stroke();
      }

      // 中心琉璃星盤核心
      ctx.fillStyle = isLocked ? '#34d399' : '#f43f5e';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 頂部箭頭標記
      ctx.fillStyle = isLocked ? '#34d399' : '#fbbf24';
      ctx.beginPath();
      ctx.arc(topX, topY, 4, 0, Math.PI * 2);
      ctx.fill();

      // 天頂光柱特效 (當鎖定成功時)
      if (isLocked) {
        ctx.fillStyle = 'rgba(52, 211, 153, 0.15)';
        ctx.beginPath();
        ctx.moveTo(centerX - 12, centerY + 30);
        ctx.lineTo(centerX + 12, centerY + 30);
        ctx.lineTo(centerX + 30, 0);
        ctx.lineTo(centerX - 30, 0);
        ctx.closePath();
        ctx.fill();
      }

      // 頂部狀態標題
      ctx.fillStyle = isLocked ? '#34d399' : '#f87171';
      ctx.font = 'bold 9px monospace';
      const bannerText = isLocked
        ? '[ZENITH LOCKED: TRUE NORTH ALIGNED 100%]'
        : `[RUNAWAY PRECESSION: Ω_p=${(tauKn / 100).toFixed(1)} rad/s]`;
      ctx.fillText(bannerText, 15, 20);

      s2GyroAnimId = requestAnimationFrame(drawGyroCanvas);
    }

    if (s2GyroCanvas) {
      if (s2GyroAnimId) cancelAnimationFrame(s2GyroAnimId);
      updateGyroSim();
      drawGyroCanvas();
    }



    // ================== 第 11 章全新連載：馬呂斯偏振定律與雙星都卜勒光譜 ==================
    const s2PolarThetaSlider = document.getElementById('series2-polar-theta-slider');
    const s2PolarPhaseSlider = document.getElementById('series2-polar-phase-slider');
    const s2PolarBirefToggle = document.getElementById('series2-polar-biref-toggle');

    const s2PolarThetaVal = document.getElementById('series2-polar-theta-val');
    const s2PolarPhaseVal = document.getElementById('series2-polar-phase-val');
    const s2PolarTransVal = document.getElementById('series2-polar-trans-val');
    const s2PolarSnrVal = document.getElementById('series2-polar-snr-val');
    const s2PolarWavelengthVal = document.getElementById('series2-polar-wavelength-val');
    const s2PolarStatus = document.getElementById('series2-polar-status');
    const s2PolarDesc = document.getElementById('series2-polar-desc');
    const s2PolarCanvas = document.getElementById('series2-polar-canvas');

    let s2PolarAnimId = null;
    let s2PolarOrbitAngle = 0;

    function updatePolarSim() {
      if (!s2PolarThetaSlider || !s2PolarPhaseSlider) return;
      const thetaDeg = parseFloat(s2PolarThetaSlider.value); // 0 to 180
      const phaseDeg = parseFloat(s2PolarPhaseSlider.value); // 0 to 360
      const hasBiref = s2PolarBirefToggle ? s2PolarBirefToggle.checked : true;

      // 馬呂斯定律：I = I0 * cos^2(theta)
      // 假設雜光為沿 0° 方向的線偏振光，檢偏鏡夾角 theta
      const rad = (thetaDeg * Math.PI) / 180.0;
      const transRatio = Math.pow(Math.cos(rad), 2); // 0.0 to 1.0
      const transPercent = (transRatio * 100).toFixed(1);

      // 正交消光判定：theta 在 85° ~ 95° 之間
      const isExtinct = Math.abs(thetaDeg - 90) <= 5;

      // 都卜勒頻移：lambda = lambda0 * (1 +/- v_r / c)
      // 基準氫-beta 線波長 486.13 nm，最大軌道視向速度 vr = 80 km/s (vr/c = 0.000267)
      const baseLambda = 486.13;
      const phaseRad = (phaseDeg * Math.PI) / 180.0;
      const dopplerShift = 0.13 * Math.sin(phaseRad);
      const lambdaA = (baseLambda - dopplerShift).toFixed(2);
      const lambdaB = (baseLambda + dopplerShift).toFixed(2);

      const snr = isExtinct ? (99.8 - Math.abs(thetaDeg - 90) * 1.5).toFixed(1) : Math.max(3.2, (100 - transRatio * 95)).toFixed(1);

      if (s2PolarThetaVal) {
        s2PolarThetaVal.textContent = `${thetaDeg}° (${isExtinct ? '正交完全消光' : (thetaDeg === 0 || thetaDeg === 180 ? '完全透射' : '部分偏振')})`;
        s2PolarThetaVal.className = isExtinct ? 'font-bold text-emerald-500' : 'font-bold text-rose-500';
      }
      if (s2PolarPhaseVal) {
        s2PolarPhaseVal.textContent = `相位 ${phaseDeg}° (${Math.abs(Math.sin(phaseRad)) > 0.8 ? '最大相對頻移' : '通過視線交會面'})`;
      }
      if (s2PolarTransVal) {
        s2PolarTransVal.textContent = `${transPercent}% (${isExtinct ? '消光極限' : '雜光殘留'})`;
        s2PolarTransVal.className = isExtinct ? 'font-bold text-emerald-500' : 'font-bold text-rose-500';
      }
      if (s2PolarSnrVal) {
        s2PolarSnrVal.textContent = `${snr} dB (${isExtinct ? '無瑕析出' : '雜光淹沒'})`;
        s2PolarSnrVal.className = isExtinct ? 'font-bold text-emerald-500' : 'font-bold text-amber-500';
      }
      if (s2PolarWavelengthVal) {
        s2PolarWavelengthVal.textContent = `主星 λ_A: ${lambdaA} nm | 伴星 λ_B: ${lambdaB} nm (${Math.abs(dopplerShift) < 0.02 ? '譜線重合' : '譜線分裂'})`;
      }

      if (isExtinct) {
        if (s2PolarStatus) {
          s2PolarStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2PolarStatus.textContent = '🧭 正交消光：雜光消除，雙星光譜精準分離（POLAR 鎖定）';
        }
        if (s2PolarDesc) {
          s2PolarDesc.textContent = `馬呂斯定律達成正交消光（θ=${thetaDeg}°），99%大氣散射光被消除，都卜勒吸收譜線完美呈現！`;
        }
      } else {
        if (s2PolarStatus) {
          s2PolarStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40';
          s2PolarStatus.textContent = '⚠️ 偏振夾角未正交：大氣散射雜光強烈';
        }
        if (s2PolarDesc) {
          s2PolarDesc.textContent = `透射雜光達 ${transPercent}%！請調節夾角 θ 至 90° 以觸發馬呂斯正交消光極限！`;
        }
      }
    }

    if (s2PolarThetaSlider) s2PolarThetaSlider.oninput = updatePolarSim;
    if (s2PolarPhaseSlider) s2PolarPhaseSlider.oninput = updatePolarSim;
    if (s2PolarBirefToggle) s2PolarBirefToggle.onchange = updatePolarSim;

    // 動態繪製雙星互繞都卜勒與偏振光譜 Canvas
    function drawPolarCanvas() {
      if (!s2PolarCanvas) return;
      const ctx = s2PolarCanvas.getContext('2d');
      if (!ctx) return;

      const thetaDeg = s2PolarThetaSlider ? parseFloat(s2PolarThetaSlider.value) : 90;
      const phaseDeg = s2PolarPhaseSlider ? parseFloat(s2PolarPhaseSlider.value) : 90;
      const hasBiref = s2PolarBirefToggle ? s2PolarBirefToggle.checked : true;
      const isExtinct = Math.abs(thetaDeg - 90) <= 5;
      const rad = (thetaDeg * Math.PI) / 180.0;
      const transRatio = Math.pow(Math.cos(rad), 2);

      const w = s2PolarCanvas.width;
      const h = s2PolarCanvas.height;
      ctx.clearRect(0, 0, w, h);

      s2PolarOrbitAngle += 0.025;

      // 背景
      ctx.fillStyle = '#0b0f19';
      ctx.fillRect(0, 0, w, h);

      // 分為上下兩區：上半部為雙星互繞與偏振濾光鏡；下半部為高解析度都卜勒光譜儀帶
      const starCx = 75;
      const starCy = 65;
      const orbitR = 38;

      // 1. 繪製雙星軌道橢圓
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.ellipse(starCx, starCy, orbitR, orbitR * 0.55, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 質心
      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.arc(starCx, starCy, 2, 0, Math.PI * 2);
      ctx.fill();

      // 計算雙星動態位置 (基於 slider phase 與動態微旋轉)
      const currentOrbitRad = ((phaseDeg + 90) * Math.PI) / 180.0;
      const star1X = starCx + orbitR * Math.cos(currentOrbitRad);
      const star1Y = starCy + orbitR * 0.55 * Math.sin(currentOrbitRad);
      const star2X = starCx - orbitR * 0.8 * Math.cos(currentOrbitRad);
      const star2Y = starCy - orbitR * 0.55 * 0.8 * Math.sin(currentOrbitRad);

      // 主星 (天極藍星 A)
      const gradA = ctx.createRadialGradient(star1X, star1Y, 1, star1X, star1Y, 12);
      gradA.addColorStop(0, '#67e8f9');
      gradA.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = gradA;
      ctx.beginPath();
      ctx.arc(star1X, star1Y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#cffafe';
      ctx.beginPath();
      ctx.arc(star1X, star1Y, 4, 0, Math.PI * 2);
      ctx.fill();

      // 伴星 (天極金星 B)
      const gradB = ctx.createRadialGradient(star2X, star2Y, 1, star2X, star2Y, 9);
      gradB.addColorStop(0, '#fde047');
      gradB.addColorStop(1, 'rgba(234, 179, 8, 0)');
      ctx.fillStyle = gradB;
      ctx.beginPath();
      ctx.arc(star2X, star2Y, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(star2X, star2Y, 3, 0, Math.PI * 2);
      ctx.fill();

      // 速度都卜勒向量箭頭
      const vyA = Math.cos(currentOrbitRad); // 視向速度分量
      ctx.strokeStyle = vyA > 0 ? '#38bdf8' : '#f87171'; // 藍移/紅移
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(star1X, star1Y);
      ctx.lineTo(star1X, star1Y + vyA * 15);
      ctx.stroke();

      // 2. 右半部：方解石雙折射與檢偏鏡
      const prismX = 185;
      const prismY = 65;

      // 方解石稜鏡輪廓
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1.5;
      ctx.fillStyle = 'rgba(148, 163, 184, 0.12)';
      ctx.beginPath();
      ctx.moveTo(prismX - 25, prismY - 25);
      ctx.lineTo(prismX + 25, prismY - 15);
      ctx.lineTo(prismX + 15, prismY + 25);
      ctx.lineTo(prismX - 35, prismY + 15);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 光線入射與雙折射 (o光 / e光)
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(starCx + 35, starCy);
      ctx.lineTo(prismX - 25, prismY);
      ctx.stroke();

      // 稜鏡內部折射
      if (hasBiref) {
        // o-ray (尋常光 - 偏振沿垂直)
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(prismX - 25, prismY);
        ctx.lineTo(prismX + 20, prismY - 8);
        ctx.lineTo(w - 20, prismY - 8);
        ctx.stroke();

        // e-ray (非常光 - 偏振沿水平)
        ctx.strokeStyle = '#f43f5e';
        ctx.beginPath();
        ctx.moveTo(prismX - 25, prismY);
        ctx.lineTo(prismX + 20, prismY + 10);
        ctx.lineTo(w - 20, prismY + 10);
        ctx.stroke();

        // 標籤
        ctx.fillStyle = '#38bdf8';
        ctx.font = '8px monospace';
        ctx.fillText('o-ray', prismX + 25, prismY - 12);
        ctx.fillStyle = '#f43f5e';
        ctx.fillText('e-ray', prismX + 25, prismY + 20);
      } else {
        ctx.strokeStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(prismX - 25, prismY);
        ctx.lineTo(prismX + 20, prismY);
        ctx.lineTo(w - 20, prismY);
        ctx.stroke();
      }

      // 檢偏鏡圓盤 (位於光路末端)
      const polX = w - 40;
      const polY = prismY;
      const polR = 18;
      ctx.save();
      ctx.translate(polX, polY);
      ctx.rotate(rad);
      ctx.strokeStyle = isExtinct ? '#34d399' : '#fb7185';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, polR, 0, Math.PI * 2);
      ctx.stroke();
      // 偏振柵線
      ctx.lineWidth = 1;
      for (let i = -12; i <= 12; i += 6) {
        ctx.beginPath();
        ctx.moveTo(i, -Math.sqrt(polR * polR - i * i));
        ctx.lineTo(i, Math.sqrt(polR * polR - i * i));
        ctx.stroke();
      }
      ctx.restore();

      // 3. 下半部：光譜色帶與都卜勒吸收線
      const specX = 20;
      const specY = 135;
      const specW = w - 40;
      const specH = 26;

      // 繪製連續彩虹光譜底圖
      const specGrad = ctx.createLinearGradient(specX, 0, specX + specW, 0);
      specGrad.addColorStop(0.0, '#3b82f6'); // 藍
      specGrad.addColorStop(0.3, '#06b6d4'); // 青
      specGrad.addColorStop(0.6, '#10b981'); // 綠
      specGrad.addColorStop(0.85, '#eab308'); // 黃
      specGrad.addColorStop(1.0, '#ef4444'); // 紅
      ctx.fillStyle = specGrad;
      ctx.fillRect(specX, specY, specW, specH);

      // 散色雜光白霧層 (隨 transRatio 變白模糊)
      if (transRatio > 0.02) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.85, transRatio * 0.9)})`;
        ctx.fillRect(specX, specY, specW, specH);
      }

      // 外邊框
      ctx.strokeStyle = isExtinct ? '#34d399' : '#64748b';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(specX, specY, specW, specH);

      // 繪製都卜勒分裂吸收黑線 (H-beta 486.13 nm 附近)
      const centerSpecX = specX + specW * 0.42;
      const shiftPix = Math.sin(currentOrbitRad) * 16;

      // 主星吸收線
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(centerSpecX - shiftPix - 1.5, specY, 3, specH);

      // 伴星吸收線
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(centerSpecX + shiftPix * 0.8 - 1, specY, 2, specH);

      // 標註譜線文字
      ctx.fillStyle = isExtinct ? '#34d399' : '#94a3b8';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(`H-β 486.1nm [Δλ=${Math.abs(shiftPix * 0.015).toFixed(2)}nm]`, specX, specY + specH + 16);

      // 頂部狀態標題
      ctx.fillStyle = isExtinct ? '#34d399' : '#fbbf24';
      ctx.font = 'bold 9px monospace';
      const polarText = isExtinct
        ? '[MALUS EXTINCTION: I = I₀ cos²90° = 0.00 | POLAR VERIFIED]'
        : `[HAZE LEAKAGE: I/I₀=${(transRatio * 100).toFixed(0)}% | θ=${thetaDeg}°]`;
      ctx.fillText(polarText, 15, 18);

      s2PolarAnimId = requestAnimationFrame(drawPolarCanvas);
    }

    if (s2PolarCanvas) {
      if (s2PolarAnimId) cancelAnimationFrame(s2PolarAnimId);
      updatePolarSim();
      drawPolarCanvas();
    }



    // ================== 第 12 章全新連載：司涅爾全反射與光導纖維 ==================
    const s2FiberThetaSlider = document.getElementById('series2-fiber-theta-slider');
    const s2FiberRadiusSlider = document.getElementById('series2-fiber-radius-slider');
    const s2FiberCoolingToggle = document.getElementById('series2-fiber-cooling-toggle');

    const s2FiberThetaVal = document.getElementById('series2-fiber-theta-val');
    const s2FiberRadiusVal = document.getElementById('series2-fiber-radius-val');
    const s2FiberThetacVal = document.getElementById('series2-fiber-thetac-val');
    const s2FiberNaVal = document.getElementById('series2-fiber-na-val');
    const s2FiberEffVal = document.getElementById('series2-fiber-eff-val');
    const s2FiberStatus = document.getElementById('series2-fiber-status');
    const s2FiberDesc = document.getElementById('series2-fiber-desc');
    const s2FiberCanvas = document.getElementById('series2-fiber-canvas');

    let s2FiberAnimId = null;
    let s2FiberPhotonOffset = 0;

    function updateFiberSim() {
      if (!s2FiberThetaSlider || !s2FiberRadiusSlider) return;
      const theta1 = parseFloat(s2FiberThetaSlider.value); // 50 to 88 deg
      const radius = parseFloat(s2FiberRadiusSlider.value); // 0.5 to 5.0 m
      const isCooled = s2FiberCoolingToggle ? s2FiberCoolingToggle.checked : true;

      const n1 = 1.620; // 石英纖芯折射率
      const n2 = isCooled ? 1.480 : 1.580; // 冷卻後 1.48，未冷卻 1.58

      // 臨界角 θ_c = arcsin(n2 / n1)
      const thetaC_rad = Math.asin(n2 / n1);
      const thetaC_deg = (thetaC_rad * 180.0) / Math.PI;

      // 數值孔徑 NA = sqrt(n1^2 - n2^2)
      const na = Math.sqrt(Math.max(0, n1 * n1 - n2 * n2));

      // 全反射成立條件：theta1 >= thetaC_deg 且 radius >= 1.8 m (避免宏觀彎曲洩漏)
      const isAngleOk = theta1 >= thetaC_deg;
      const isRadiusOk = radius >= 1.8;
      const isTirLocked = isAngleOk && isRadiusOk;

      // 傳輸效率與衰減計算
      let eff = 100.0;
      let lossDb = 0.18;
      if (!isAngleOk) {
        const diff = thetaC_deg - theta1;
        eff = Math.max(0.0, 100.0 - diff * 12.0);
        lossDb = 15.0 + diff * 6.5;
      }
      if (!isRadiusOk) {
        const rDiff = 1.8 - radius;
        eff = Math.max(0.0, eff - rDiff * 45.0);
        lossDb += rDiff * 28.0;
      }

      if (s2FiberThetaVal) {
        s2FiberThetaVal.textContent = `${theta1.toFixed(1)}° (${isAngleOk ? '≥ θ_c 全反射' : '< θ_c 臨界洩漏'})`;
        s2FiberThetaVal.className = isAngleOk ? 'font-bold text-emerald-500' : 'font-bold text-rose-500';
      }
      if (s2FiberRadiusVal) {
        s2FiberRadiusVal.textContent = `${radius.toFixed(1)} m (${isRadiusOk ? '安全曲率' : '彎曲過度損耗'})`;
        s2FiberRadiusVal.className = isRadiusOk ? 'font-bold text-sky-500' : 'font-bold text-rose-500';
      }
      if (s2FiberThetacVal) {
        s2FiberThetacVal.textContent = `${thetaC_deg.toFixed(2)}° (${isCooled ? '冷卻鎖定' : '高溫漂移'})`;
        s2FiberThetacVal.className = isCooled ? 'font-bold text-emerald-500' : 'font-bold text-rose-500';
      }
      if (s2FiberNaVal) {
        s2FiberNaVal.textContent = na.toFixed(3);
      }
      if (s2FiberEffVal) {
        s2FiberEffVal.textContent = `${eff.toFixed(1)}% (衰減 ${lossDb.toFixed(2)} dB/km · ${isTirLocked ? '完美導光' : '嚴重洩漏'})`;
        s2FiberEffVal.className = isTirLocked ? 'font-bold text-emerald-500 text-[11px]' : 'font-bold text-rose-500 text-[11px]';
      }

      if (isTirLocked) {
        if (s2FiberStatus) {
          s2FiberStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2FiberStatus.textContent = '💎 全反射導通：光能 100% 鎖在纖芯（FIBER 傳輸成功）';
        }
        if (s2FiberDesc) {
          s2FiberDesc.textContent = 'θ₁ ≥ θ_c 且 R ≥ 2.0m，星光在石英晶格中無損彈跳，80TB 數據穿透深淵！';
        }
      } else {
        if (s2FiberStatus) {
          s2FiberStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2FiberStatus.textContent = '⚠️ 全反射失諧：光脈衝在管壁折射洩漏！';
        }
        if (s2FiberDesc) {
          s2FiberDesc.textContent = !isCooled
            ? '高溫致包層 n₂ 漂移！請開啟冷卻套，並將 θ₁ 調大以滿足全反射條件！'
            : (!isAngleOk ? `入射角 ${theta1.toFixed(1)}° 小於臨界角 ${thetaC_deg.toFixed(1)}°！請加大入射角！` : '曲率半徑過小引發宏觀彎曲輻射損耗！請調大半徑 R！');
        }
      }
    }

    if (s2FiberThetaSlider) s2FiberThetaSlider.oninput = updateFiberSim;
    if (s2FiberRadiusSlider) s2FiberRadiusSlider.oninput = updateFiberSim;
    if (s2FiberCoolingToggle) s2FiberCoolingToggle.onchange = updateFiberSim;

    // 動態繪製光纖全反射波導 Canvas
    function drawFiberCanvas() {
      if (!s2FiberCanvas) return;
      const ctx = s2FiberCanvas.getContext('2d');
      if (!ctx) return;

      const theta1 = s2FiberThetaSlider ? parseFloat(s2FiberThetaSlider.value) : 72;
      const radius = s2FiberRadiusSlider ? parseFloat(s2FiberRadiusSlider.value) : 3.5;
      const isCooled = s2FiberCoolingToggle ? s2FiberCoolingToggle.checked : true;

      const n1 = 1.620;
      const n2 = isCooled ? 1.480 : 1.580;
      const thetaC_rad = Math.asin(n2 / n1);
      const thetaC_deg = (thetaC_rad * 180.0) / Math.PI;
      const isAngleOk = theta1 >= thetaC_deg;
      const isRadiusOk = radius >= 1.8;
      const isTirLocked = isAngleOk && isRadiusOk;

      const w = s2FiberCanvas.width;
      const h = s2FiberCanvas.height;
      ctx.clearRect(0, 0, w, h);

      s2FiberPhotonOffset = (s2FiberPhotonOffset + 2) % 40;

      // 深邃峽谷迷霧背景
      ctx.fillStyle = '#0a0e17';
      ctx.fillRect(0, 0, w, h);

      // 繪製背景微弱的黃綠色硫磺濃霧光暈
      const fogGrad = ctx.createLinearGradient(0, 0, w, h);
      fogGrad.addColorStop(0, 'rgba(30, 41, 59, 0.4)');
      fogGrad.addColorStop(0.5, isTirLocked ? 'rgba(15, 23, 42, 0.8)' : 'rgba(180, 83, 9, 0.15)');
      fogGrad.addColorStop(1, 'rgba(15, 23, 42, 0.9)');
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, 0, w, h);

      // 光纖幾何參數
      const coreY1 = 60;
      const coreY2 = 130;
      const coreH = coreY2 - coreY1;

      // 1. 繪製包層 (Cladding)
      ctx.fillStyle = isCooled ? 'rgba(56, 189, 248, 0.08)' : 'rgba(244, 63, 94, 0.12)';
      ctx.fillRect(10, 35, w - 20, 25);
      ctx.fillRect(10, coreY2, w - 20, 25);

      // 包層邊界線
      ctx.strokeStyle = isCooled ? '#0284c7' : '#e11d48';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(10, 35, w - 20, 25);
      ctx.strokeRect(10, coreY2, w - 20, 25);

      // 2. 繪製纖芯 (Core)
      const coreGrad = ctx.createLinearGradient(0, coreY1, 0, coreY2);
      coreGrad.addColorStop(0, 'rgba(14, 165, 233, 0.25)');
      coreGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
      coreGrad.addColorStop(1, 'rgba(14, 165, 233, 0.25)');
      ctx.fillStyle = coreGrad;
      ctx.fillRect(10, coreY1, w - 20, coreH);

      // 纖芯界面 (Core-Cladding Boundary)
      ctx.strokeStyle = isTirLocked ? '#38bdf8' : '#f43f5e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(10, coreY1);
      ctx.lineTo(w - 10, coreY1);
      ctx.moveTo(10, coreY2);
      ctx.lineTo(w - 10, coreY2);
      ctx.stroke();

      // 標註介質折射率
      ctx.font = '8px monospace';
      ctx.fillStyle = isCooled ? '#38bdf8' : '#fb7185';
      ctx.fillText(`包層 n₂=${n2.toFixed(2)} (低折射率)`, 20, 52);
      ctx.fillText(`包層 n₂=${n2.toFixed(2)}`, 20, coreY2 + 18);
      ctx.fillStyle = '#bae6fd';
      ctx.fillText('石英纖芯 n₁=1.620 (光密介質)', 20, (coreY1 + coreY2) / 2 - 18);

      // 3. 繪製全反射光路鋸齒折線 (Zig-zag TIR beam)
      const stepX = 42;
      const pts = [];
      let curX = 15;
      let curY = (coreY1 + coreY2) / 2;
      pts.push({ x: curX, y: curY });

      // 入射光
      curX = 40;
      curY = coreY1;
      pts.push({ x: curX, y: curY });

      let top = true;
      while (curX < w - 25) {
        curX += stepX;
        curY = top ? coreY2 : coreY1;
        top = !top;
        pts.push({ x: Math.min(w - 15, curX), y: curY });
      }

      // 繪製主光束線
      ctx.strokeStyle = isTirLocked ? '#38bdf8' : '#fbbf24';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = isTirLocked ? '#38bdf8' : '#f59e0b';
      ctx.shadowBlur = isTirLocked ? 10 : 4;
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i].x, pts[i].y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 繪製動態光子光點
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < pts.length - 1; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const t = (s2FiberPhotonOffset / 40.0 + i * 0.25) % 1.0;
        const px = p1.x + (p2.x - p1.x) * t;
        const py = p1.y + (p2.y - p1.y) * t;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. 若洩漏，繪製折射逸散光線 (Refraction Leakage)
      if (!isTirLocked) {
        ctx.strokeStyle = 'rgba(244, 63, 94, 0.7)';
        ctx.lineWidth = 1.5;
        for (let i = 1; i < pts.length - 1; i++) {
          const pt = pts[i];
          const isTopHit = pt.y === coreY1;
          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.lineTo(pt.x + 22, isTopHit ? pt.y - 28 : pt.y + 28);
          ctx.stroke();
        }
      }

      // 頂部狀態資訊
      ctx.fillStyle = isTirLocked ? '#34d399' : '#fb7185';
      ctx.font = 'bold 9px monospace';
      const bannerText = isTirLocked
        ? `[TIR LOCKED: θ₁=${theta1.toFixed(0)}° ≥ θ_c=${thetaC_deg.toFixed(1)}° | FIBER LOSS: 0.18 dB/km]`
        : `[LEAKAGE WARNING: θ₁ < θ_c (${thetaC_deg.toFixed(1)}°) | LIGHT LOST IN MIST]`;
      ctx.fillText(bannerText, 15, 20);

      s2FiberAnimId = requestAnimationFrame(drawFiberCanvas);
    }

    if (s2FiberCanvas) {
      if (s2FiberAnimId) cancelAnimationFrame(s2FiberAnimId);
      updateFiberSim();
      drawFiberCanvas();
    }



    // ================== 第 13 章全新連載：開普勒第二定律與非圓齒輪 ==================
    const s2KeplerEccSlider = document.getElementById('series2-kepler-ecc-slider');
    const s2KeplerMassSlider = document.getElementById('series2-kepler-mass-slider');
    const s2KeplerGearToggle = document.getElementById('series2-kepler-gear-toggle');

    const s2KeplerEccVal = document.getElementById('series2-kepler-ecc-val');
    const s2KeplerMassVal = document.getElementById('series2-kepler-mass-val');
    const s2KeplerVratioVal = document.getElementById('series2-kepler-vratio-val');
    const s2KeplerArealVal = document.getElementById('series2-kepler-areal-val');
    const s2KeplerTorqueVal = document.getElementById('series2-kepler-torque-val');
    const s2KeplerStatus = document.getElementById('series2-kepler-status');
    const s2KeplerDesc = document.getElementById('series2-kepler-desc');
    const s2KeplerCanvas = document.getElementById('series2-kepler-canvas');

    let s2KeplerAnimId = null;
    let s2KeplerTrueAnomaly = 0; // 真近點角 rad

    function updateKeplerSim() {
      if (!s2KeplerEccSlider || !s2KeplerMassSlider) return;
      const ecc = parseFloat(s2KeplerEccSlider.value) / 100.0; // 0.00 to 0.60
      const massRatio = parseFloat(s2KeplerMassSlider.value) / 100.0; // 1.00 to 3.00
      const hasEllipticGear = s2KeplerGearToggle ? s2KeplerGearToggle.checked : true;

      // 速度比 vp / va = (1 + e) / (1 - e)
      const vRatio = (1.0 + ecc) / (1.0 - ecc);
      const omegaRatio = Math.pow(vRatio, 2);

      const isSynchronized = hasEllipticGear || ecc <= 0.05;

      if (s2KeplerEccVal) s2KeplerEccVal.textContent = `${ecc.toFixed(2)} (${ecc === 0 ? '正圓軌道' : '橢圓偏心軌道'})`;
      if (s2KeplerMassVal) s2KeplerMassVal.textContent = `${massRatio.toFixed(2)} : 1 (主星與伴星)`;
      if (s2KeplerVratioVal) s2KeplerVratioVal.textContent = `${vRatio.toFixed(2)} 倍 (ω比 ${omegaRatio.toFixed(2)}倍)`;

      if (s2KeplerArealVal) {
        s2KeplerArealVal.textContent = isSynchronized ? '100% 恆定 (dA/dt 守恆)' : `${Math.max(20, Math.round(100 - ecc * 140))}% (均速齒輪嚴重滯後)`;
        s2KeplerArealVal.className = isSynchronized ? 'font-bold text-emerald-500' : 'font-bold text-rose-500';
      }
      if (s2KeplerTorqueVal) {
        s2KeplerTorqueVal.textContent = isSynchronized ? '0.0 N·m (純滾動嚙合 · ORBIT 完美同步)' : `${(ecc * 850).toFixed(0)} N·m (剛性齒面猛烈衝擊卡死！)`;
        s2KeplerTorqueVal.className = isSynchronized ? 'font-bold text-emerald-500 text-[11px]' : 'font-bold text-rose-500 text-[11px]';
      }

      if (isSynchronized) {
        if (s2KeplerStatus) {
          s2KeplerStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          s2KeplerStatus.textContent = '💫 面速度守恆：相等時間掃過相等面積（ORBIT 鎖定）';
        }
        if (s2KeplerDesc) {
          s2KeplerDesc.textContent = hasEllipticGear
            ? '雙橢圓共軛非圓齒輪順滑嚙合，近星點四倍加速度完美消化，雙星翩然起舞！'
            : '正圓形軌道角速度恆定，均速齒輪尚可勉強維持同步。';
        }
      } else {
        if (s2KeplerStatus) {
          s2KeplerStatus.className = 'mb-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
          s2KeplerStatus.textContent = '⚠️ 近星點角速度突變！均速齒輪衝擊卡死警報';
        }
        if (s2KeplerDesc) {
          s2KeplerDesc.textContent = `偏心率 e=${ecc.toFixed(2)} 致近星點速度暴增 ${vRatio.toFixed(2)} 倍！請開啟「非圓齒輪」以實現動態面速度守恆！`;
        }
      }
    }

    if (s2KeplerEccSlider) s2KeplerEccSlider.oninput = updateKeplerSim;
    if (s2KeplerMassSlider) s2KeplerMassSlider.oninput = updateKeplerSim;
    if (s2KeplerGearToggle) s2KeplerGearToggle.onchange = updateKeplerSim;

    // 動態繪製開普勒雙星軌道與非圓齒輪 Canvas
    function drawKeplerCanvas() {
      if (!s2KeplerCanvas) return;
      const ctx = s2KeplerCanvas.getContext('2d');
      if (!ctx) return;

      const ecc = s2KeplerEccSlider ? parseFloat(s2KeplerEccSlider.value) / 100.0 : 0.35;
      const massRatio = s2KeplerMassSlider ? parseFloat(s2KeplerMassSlider.value) / 100.0 : 1.62;
      const hasEllipticGear = s2KeplerGearToggle ? s2KeplerGearToggle.checked : true;
      const isSynchronized = hasEllipticGear || ecc <= 0.05;

      const w = s2KeplerCanvas.width;
      const h = s2KeplerCanvas.height;
      ctx.clearRect(0, 0, w, h);

      // 開普勒軌道角速度微積分更新：dθ/dt ∝ (1 + e·cos θ)²
      const baseSpeed = 0.018;
      const instantaneousSpeed = hasEllipticGear ? baseSpeed * Math.pow(1 + ecc * Math.cos(s2KeplerTrueAnomaly), 2) : baseSpeed;
      s2KeplerTrueAnomaly = (s2KeplerTrueAnomaly + instantaneousSpeed) % (Math.PI * 2);

      // 深空背景
      ctx.fillStyle = '#080c16';
      ctx.fillRect(0, 0, w, h);

      // 質心座標 (Barycenter) 位於左半部焦點
      const bx = 100;
      const by = 95;

      // 軌道參數
      const a = 62; // 主星軌道半長軸
      const c = a * ecc; // 焦點偏心距
      const b = Math.sqrt(Math.max(10, a * a - c * c)); // 半短軸

      // 伴星依據質量比分配軌道半長軸 (a2 = a1 * massRatio)
      const a2 = a * 0.55;
      const c2 = a2 * ecc;
      const b2 = Math.sqrt(Math.max(8, a2 * a2 - c2 * c2));

      // 1. 繪製相等時間掃過之扇形面積 (Areal Velocity Sector Demo)
      // 近星點扇形 (Periastron Sector - 寬而短)
      const sectorAngle = 0.45;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
      ctx.beginPath();
      ctx.moveTo(bx, by);
      for (let th = -sectorAngle / 2; th <= sectorAngle / 2; th += 0.05) {
        const r = (a * (1 - ecc * ecc)) / (1 + ecc * Math.cos(th));
        ctx.lineTo(bx + r * Math.cos(th), by + r * Math.sin(th));
      }
      ctx.closePath();
      ctx.fill();

      // 遠星點扇形 (Apastron Sector - 窄而長)
      ctx.fillStyle = 'rgba(251, 191, 36, 0.18)';
      ctx.beginPath();
      ctx.moveTo(bx, by);
      for (let th = Math.PI - sectorAngle * 1.8 / 2; th <= Math.PI + sectorAngle * 1.8 / 2; th += 0.05) {
        const r = (a * (1 - ecc * ecc)) / (1 + ecc * Math.cos(th));
        ctx.lineTo(bx + r * Math.cos(th), by + r * Math.sin(th));
      }
      ctx.closePath();
      ctx.fill();

      // 標註扇形面積相等 (dA₁ = dA₂)
      ctx.font = '8px monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('dA₁', bx + 22, by + 12);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('dA₂', bx - 55, by - 8);

      // 2. 繪製主星軌道橢圓 (軌道中心在 bx - c, by)
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.ellipse(bx - c, by, a, b, 0, 0, Math.PI * 2);
      ctx.stroke();

      // 伴星軌道橢圓
      ctx.strokeStyle = '#1e293b';
      ctx.beginPath();
      ctx.ellipse(bx + c2, by, a2, b2, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 質心 (Barycenter 標記)
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fda4af';
      ctx.fillText('質心⊕', bx - 14, by - 6);

      // 3. 計算並繪製雙星實體位置
      // 主星 A
      const r1 = (a * (1 - ecc * ecc)) / (1 + ecc * Math.cos(s2KeplerTrueAnomaly));
      const s1x = bx + r1 * Math.cos(s2KeplerTrueAnomaly);
      const s1y = by + r1 * Math.sin(s2KeplerTrueAnomaly);

      // 伴星 B (與主星對稱繞質心互繞)
      const r2 = (a2 * (1 - ecc * ecc)) / (1 + ecc * Math.cos(s2KeplerTrueAnomaly));
      const s2x = bx - r2 * Math.cos(s2KeplerTrueAnomaly);
      const s2y = by - r2 * Math.sin(s2KeplerTrueAnomaly);

      // 質心連線
      ctx.strokeStyle = isSynchronized ? 'rgba(56, 189, 248, 0.4)' : 'rgba(244, 63, 94, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(s1x, s1y);
      ctx.lineTo(s2x, s2y);
      ctx.stroke();

      // 主星 (天極藍星 A)
      const gradA = ctx.createRadialGradient(s1x, s1y, 1, s1x, s1y, 10);
      gradA.addColorStop(0, '#67e8f9');
      gradA.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = gradA;
      ctx.beginPath();
      ctx.arc(s1x, s1y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e0f2fe';
      ctx.beginPath();
      ctx.arc(s1x, s1y, 4, 0, Math.PI * 2);
      ctx.fill();

      // 伴星 (天極金星 B)
      const gradB = ctx.createRadialGradient(s2x, s2y, 1, s2x, s2y, 7);
      gradB.addColorStop(0, '#fde047');
      gradB.addColorStop(1, 'rgba(234, 179, 8, 0)');
      ctx.fillStyle = gradB;
      ctx.beginPath();
      ctx.arc(s2x, s2y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(s2x, s2y, 3, 0, Math.PI * 2);
      ctx.fill();

      // 4. 右半部：非圓橢圓齒輪動態嚙合示意 (Non-circular Gear Train)
      const gx = 220;
      const gy1 = 65;
      const gy2 = 125;

      ctx.save();
      // 主動輪 1 (中心在 gx, gy1)
      ctx.translate(gx, gy1);
      ctx.rotate(s2KeplerTrueAnomaly);
      ctx.strokeStyle = hasEllipticGear ? '#38bdf8' : '#94a3b8';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      if (hasEllipticGear) {
        ctx.ellipse(0, 0, 24, 17, 0, 0, Math.PI * 2);
      } else {
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
      }
      ctx.stroke();
      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 從動輪 2 (中心在 gx, gy2)
      ctx.save();
      ctx.translate(gx, gy2);
      ctx.rotate(-s2KeplerTrueAnomaly * 1.2);
      ctx.strokeStyle = hasEllipticGear ? '#f59e0b' : '#94a3b8';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      if (hasEllipticGear) {
        ctx.ellipse(0, 0, 24, 17, Math.PI / 2, 0, Math.PI * 2);
      } else {
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
      }
      ctx.stroke();
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 齒輪傳動標籤
      ctx.fillStyle = hasEllipticGear ? '#34d399' : '#f87171';
      ctx.font = '8px monospace';
      ctx.fillText(hasEllipticGear ? '橢圓非圓齒輪' : '均速圓齒輪(卡頓)', gx - 28, gy2 + 35);

      // 頂部狀態標題
      ctx.fillStyle = isSynchronized ? '#34d399' : '#fb7185';
      ctx.font = 'bold 9px monospace';
      const bannerText = isSynchronized
        ? `[KEPLER LAW II: dA/dt=CONST | e=${ecc.toFixed(2)} | ORBIT LOCKED]`
        : `[GEAR JAM ALERT: IMPACT TORQUE ${(ecc * 850).toFixed(0)} N·m AT PERIASTRON]`;
      ctx.fillText(bannerText, 15, 20);

      s2KeplerAnimId = requestAnimationFrame(drawKeplerCanvas);
    }

    if (s2KeplerCanvas) {
      if (s2KeplerAnimId) cancelAnimationFrame(s2KeplerAnimId);
      updateKeplerSim();
      drawKeplerCanvas();
    }


    // 實驗 14：色散稜鏡陣列與柯西公式動態光譜模擬器 (Ch 46 / Book 5 Ch 4)
    const s2PrismGlassSelect = document.getElementById('series2-prism-glass-select');
    const s2PrismApexSlider = document.getElementById('series2-prism-apex-slider');
    const s2PrismCascadeSelect = document.getElementById('series2-prism-cascade-select');
    const s2PrismSymmToggle = document.getElementById('series2-prism-symm-toggle');

    const s2PrismApexVal = document.getElementById('series2-prism-apex-val');
    const s2PrismNvioletVal = document.getElementById('series2-prism-nviolet-val');
    const s2PrismNredVal = document.getElementById('series2-prism-nred-val');
    const s2PrismDevVal = document.getElementById('series2-prism-dev-val');
    const s2PrismDispVal = document.getElementById('series2-prism-disp-val');
    const s2PrismStatus = document.getElementById('series2-prism-status');
    const s2PrismDesc = document.getElementById('series2-prism-desc');
    const s2PrismCanvas = document.getElementById('series2-prism-canvas');

    let s2PrismAnimId = null;
    let s2PrismPhotonPhase = 0;

    const s2PrismMaterials = {
      flint: { name: '重火石琉璃', A: 1.625, B: 0.0142, desc: '晨光堂重火石，色散力強大' },
      ultra: { name: '超密火石琉璃', A: 1.680, B: 0.0245, desc: '極限超密火石，極高色散指數' },
      crown: { name: '高透鋇冕琉璃', A: 1.512, B: 0.0040, desc: '鋇冕光學琉璃，色散溫和穩定' }
    };

    function updatePrismSim() {
      if (!s2PrismApexSlider) return;

      const matKey = s2PrismGlassSelect ? s2PrismGlassSelect.value : 'flint';
      const mat = s2PrismMaterials[matKey] || s2PrismMaterials.flint;
      const apexDeg = parseFloat(s2PrismApexSlider.value);
      const apexRad = (apexDeg * Math.PI) / 180;
      const cascade = parseInt(s2PrismCascadeSelect ? s2PrismCascadeSelect.value : '3', 10);
      const isSymm = s2PrismSymmToggle ? s2PrismSymmToggle.checked : true;

      // 柯西公式 n(λ) = A + B / λ² (λ in μm)
      const nViolet = mat.A + mat.B / (0.40 * 0.40);
      const nRed = mat.A + mat.B / (0.70 * 0.70);
      const nYellow = mat.A + mat.B / (0.589 * 0.589);

      // 最小偏向角 δ_min = 2·arcsin(n · sin(α/2)) - α
      const sinHalfA = Math.sin(apexRad / 2);
      const devRadYellow = 2 * Math.asin(Math.min(0.99, nYellow * sinHalfA)) - apexRad;
      const devDegYellow = (devRadYellow * 180) / Math.PI;

      const devRadViolet = 2 * Math.asin(Math.min(0.99, nViolet * sinHalfA)) - apexRad;
      const devRadRed = 2 * Math.asin(Math.min(0.99, nRed * sinHalfA)) - apexRad;
      const singleDispDeg = ((devRadViolet - devRadRed) * 180) / Math.PI;

      const cascadeMultiplier = cascade === 1 ? 1 : cascade === 2 ? 6 : 24;
      const totalDispDeg = singleDispDeg * (cascade === 1 ? 1 : cascade === 2 ? 1.8 : 3.6);

      if (s2PrismApexVal) s2PrismApexVal.textContent = `${apexDeg.toFixed(1)}° (${apexDeg === 60 ? '標準等邊角' : '非對稱頂角'})`;
      if (s2PrismNvioletVal) s2PrismNvioletVal.textContent = nViolet.toFixed(4);
      if (s2PrismNredVal) s2PrismNredVal.textContent = nRed.toFixed(4);
      if (s2PrismDevVal) s2PrismDevVal.textContent = `${Math.max(10, devDegYellow).toFixed(1)}°`;
      if (s2PrismDispVal) s2PrismDispVal.textContent = `${totalDispDeg.toFixed(2)}° (展開 ${cascadeMultiplier} 倍)`;

      if (s2PrismStatus && s2PrismDesc) {
        if (cascade === 3 && isSymm) {
          s2PrismStatus.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 光譜分離完成：氦線 (447nm) 與鈉雙線 (589nm) 完美解析';
          s2PrismStatus.className = 'font-semibold text-emerald-500 flex items-center gap-1.5';
          s2PrismDesc.textContent = '白光經三級火石-冕牌-火石陣列折射，角色散呈幾何級數放大，十二公尺光譜屏上吸收線分明，引力微震本徵頻率成功提煉！';
        } else if (cascade >= 2) {
          s2PrismStatus.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-500"></span> 雙稜鏡消色差展開中：色差已抵消，但吸收線間距尚不足';
          s2PrismStatus.className = 'font-semibold text-amber-500 flex items-center gap-1.5';
          s2PrismDesc.textContent = '雙稜鏡消色差結構成功消除了光學色差，但角分辨率未達極限，藍巨星與金矮星的吸收譜線仍有微弱混疊。';
        } else {
          s2PrismStatus.innerHTML = '<span class="w-2 h-2 rounded-full bg-rose-500"></span> 光譜混疊警告！單片稜鏡色散力不足，吸收線互相湮滅';
          s2PrismStatus.className = 'font-semibold text-rose-500 flex items-center gap-1.5';
          s2PrismDesc.textContent = '單片稜鏡展開角過小，雙星微震吸收線在焦平面上緊密擠壓，無法分辨恆星特徵元素！請切換至三級高解析陣列。';
        }
      }
    }

    if (s2PrismGlassSelect) s2PrismGlassSelect.onchange = updatePrismSim;
    if (s2PrismApexSlider) s2PrismApexSlider.oninput = updatePrismSim;
    if (s2PrismCascadeSelect) s2PrismCascadeSelect.onchange = updatePrismSim;
    if (s2PrismSymmToggle) s2PrismSymmToggle.onchange = updatePrismSim;

    function drawPrismCanvas() {
      if (!s2PrismCanvas) return;
      const ctx = s2PrismCanvas.getContext('2d');
      if (!ctx) return;

      const matKey = s2PrismGlassSelect ? s2PrismGlassSelect.value : 'flint';
      const mat = s2PrismMaterials[matKey] || s2PrismMaterials.flint;
      const cascade = parseInt(s2PrismCascadeSelect ? s2PrismCascadeSelect.value : '3', 10);
      const isSymm = s2PrismSymmToggle ? s2PrismSymmToggle.checked : true;

      const w = s2PrismCanvas.width;
      const h = s2PrismCanvas.height;
      ctx.clearRect(0, 0, w, h);

      s2PrismPhotonPhase = (s2PrismPhotonPhase + 0.06) % 1;

      // 深空暗色背景
      ctx.fillStyle = '#060814';
      ctx.fillRect(0, 0, w, h);

      // 光學格線
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // 繪製稜鏡陣列幾何 (1 ~ 3 個稜鏡)
      const prismPositions = [];
      if (cascade === 1) {
        prismPositions.push({ cx: 170, cy: 135, size: 70, inverted: false, fill: 'rgba(245, 158, 11, 0.22)', stroke: '#f59e0b' });
      } else if (cascade === 2) {
        prismPositions.push({ cx: 130, cy: 135, size: 60, inverted: false, fill: 'rgba(245, 158, 11, 0.22)', stroke: '#f59e0b' });
        prismPositions.push({ cx: 210, cy: 135, size: 55, inverted: true, fill: 'rgba(56, 189, 248, 0.22)', stroke: '#38bdf8' });
      } else {
        prismPositions.push({ cx: 110, cy: 135, size: 55, inverted: false, fill: 'rgba(245, 158, 11, 0.22)', stroke: '#f59e0b' });
        prismPositions.push({ cx: 175, cy: 135, size: 50, inverted: true, fill: 'rgba(56, 189, 248, 0.22)', stroke: '#38bdf8' });
        prismPositions.push({ cx: 245, cy: 135, size: 55, inverted: false, fill: 'rgba(236, 72, 153, 0.22)', stroke: '#ec4899' });
      }

      // 繪製各稜鏡
      prismPositions.forEach((p, idx) => {
        ctx.fillStyle = p.fill;
        ctx.strokeStyle = p.stroke;
        ctx.lineWidth = 2;

        const hHalf = (p.size * Math.sqrt(3)) / 2;
        ctx.beginPath();
        if (!p.inverted) {
          ctx.moveTo(p.cx, p.cy - hHalf * 0.7);
          ctx.lineTo(p.cx + p.size / 2, p.cy + hHalf * 0.5);
          ctx.lineTo(p.cx - p.size / 2, p.cy + hHalf * 0.5);
        } else {
          ctx.moveTo(p.cx, p.cy + hHalf * 0.7);
          ctx.lineTo(p.cx + p.size / 2, p.cy - hHalf * 0.5);
          ctx.lineTo(p.cx - p.size / 2, p.cy - hHalf * 0.5);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 標籤
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        const label = idx === 0 ? 'P1:火石' : idx === 1 ? 'P2:冕牌' : 'P3:密火石';
        ctx.fillText(label, p.cx, p.cy + (p.inverted ? -18 : 28));
      });

      // 1. 入射光束 (白熾純白複合光)
      const entryP = prismPositions[0];
      const entryX = entryP.cx - entryP.size / 2;
      const entryY = entryP.cy + 10;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(10, entryY);
      ctx.lineTo(entryX, entryY);
      ctx.stroke();

      // 入射光脈衝粒子
      const pX = 10 + (entryX - 10) * s2PrismPhotonPhase;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(pX, entryY, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('雙星白熾強光 ➔', 14, entryY - 8);

      // 2. 稜鏡內部與串聯折射 (簡化光路表現)
      const lastP = prismPositions[prismPositions.length - 1];
      const exitX = lastP.cx + lastP.size / 2;
      const exitY = lastP.cy + 8;

      // 串聯連線
      ctx.strokeStyle = 'rgba(255, 255, 200, 0.5)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(entryX, entryY);
      for (let i = 0; i < prismPositions.length; i++) {
        ctx.lineTo(prismPositions[i].cx, prismPositions[i].cy + (isSymm ? 5 : 12));
      }
      ctx.lineTo(exitX, exitY);
      ctx.stroke();

      // 3. 出射光譜展開彩虹光扇 (Rainbow Fan)
      const screenX = 510;
      const colors = [
        { name: '紅光 700nm', color: '#ef4444', yOff: -38 },
        { name: '橙光 620nm', color: '#f97316', yOff: -24 },
        { name: '黃光 589nm (Na)', color: '#eab308', yOff: -10, isAbsorp: true, label: 'Na D雙線' },
        { name: '綠光 530nm', color: '#22c55e', yOff: 5 },
        { name: '青光 490nm', color: '#06b6d4', yOff: 20 },
        { name: '藍光 447nm (He)', color: '#3b82f6', yOff: 35, isAbsorp: true, label: 'He I線' },
        { name: '紫光 400nm', color: '#a855f7', yOff: 50 }
      ];

      const spreadScale = cascade === 1 ? 0.35 : cascade === 2 ? 0.75 : 1.35;

      colors.forEach(c => {
        const destY = exitY + c.yOff * spreadScale;

        // 彩虹光線
        ctx.strokeStyle = c.color;
        ctx.lineWidth = cascade === 3 ? 3 : 2;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.moveTo(exitX, exitY);
        ctx.lineTo(screenX, destY);
        ctx.stroke();

        // 光譜焦平面投影帶
        ctx.fillStyle = c.color;
        ctx.fillRect(screenX, destY - 4, 35, 8);

        // 吸收線刻痕 (Fraunhofer dark absorption line)
        if (c.isAbsorp) {
          if (cascade === 3 && isSymm) {
            // 完美清晰分離的黑線
            ctx.fillStyle = '#000000';
            ctx.fillRect(screenX + 12, destY - 5, 2.5, 10);
            if (c.name.includes('Na')) {
              ctx.fillRect(screenX + 22, destY - 5, 2.5, 10); // 鈉雙線分立
            }
            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 9px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(c.label, screenX + 40, destY + 3);
          } else {
            // 混疊模糊
            ctx.fillStyle = 'rgba(0,0,0,0.35)';
            ctx.fillRect(screenX + 10, destY - 4, 15, 8);
          }
        }
      });
      ctx.globalAlpha = 1.0;

      // 焦平面光譜螢幕架構
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.strokeRect(screenX - 2, 40, 42, 190);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('焦平面', screenX + 19, 32);
      ctx.fillText('光譜幕', screenX + 19, 242);

      // 微分螺旋角規指標 (Goniometer Indicator)
      ctx.fillStyle = 'rgba(245, 158, 11, 0.9)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`微分角規進給: ${isSymm ? '0.138 μm (最小偏向角鎖定)' : '非對稱偏折 (彗差)'}`, 14, 252);

      s2PrismAnimId = requestAnimationFrame(drawPrismCanvas);
    }

    if (s2PrismCanvas) {
      if (s2PrismAnimId) cancelAnimationFrame(s2PrismAnimId);
      updatePrismSim();
      drawPrismCanvas();
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
                      <span>📖 ${isUnlocked ? '重溫本章' : '前往閱讀解鎖'} (第 ${badge.displayChapter || (targetBookId === 'book-5' ? targetChapterId + 10 : targetChapterId)} 章)</span>
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
