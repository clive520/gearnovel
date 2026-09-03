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
    BADGES: 'gear_novel_badges'
  };

  const state = {
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'sepia',
    fontSize: localStorage.getItem(STORAGE_KEYS.FONT_SIZE) || 'medium',
    unlockedBadges: JSON.parse(localStorage.getItem(STORAGE_KEYS.BADGES) || '[]'),
    progress: JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{"book-1": {"lastChapter": 1, "read": [1]}}'),
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
    
    // 章節閱讀對應徽章解鎖
    if (bookId === 'book-1') {
      unlockBadge(chapterId);
    }
  }

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

  // 簡易 Markdown 轉 HTML 解析器
  function parseMarkdown(md) {
    if (!md) return '';
    const lines = md.split('\n');
    let html = '';
    let inBlockquote = false;
    let inCodeblock = false;
    let codeContent = '';

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // 程式碼區塊
      if (line.startsWith('```')) {
        if (!inCodeblock) {
          inCodeblock = true;
          codeContent = '';
        } else {
          inCodeblock = false;
          html += `<div class="my-4 p-4 rounded-xl bg-slate-900 text-amber-300 font-mono text-sm overflow-x-auto shadow-inner border border-amber-500/20"><code>${escapeHtml(codeContent)}</code></div>`;
        }
        continue;
      }
      if (inCodeblock) {
        codeContent += (codeContent ? '\n' : '') + lines[i];
        continue;
      }

      // 引言 blockquote
      if (line.startsWith('>')) {
        if (!inBlockquote) {
          inBlockquote = true;
          html += '<blockquote>';
        }
        const text = line.replace(/^>\s*/, '');
        html += `<p>${formatInline(text)}</p>`;
        continue;
      } else if (inBlockquote && line === '') {
        inBlockquote = false;
        html += '</blockquote>';
        continue;
      } else if (inBlockquote && !line.startsWith('>')) {
        inBlockquote = false;
        html += '</blockquote>';
      }

      // 標題
      if (line.startsWith('# ')) {
        // 第一級大標題在頂部另外渲染
        continue;
      } else if (line.startsWith('## ')) {
        const titleText = line.replace(/^##\s*/, '');
        html += `<h2><span class="text-amber-500">⚙️</span> ${formatInline(titleText)}</h2>`;
      } else if (line.startsWith('### ')) {
        const titleText = line.replace(/^###\s*/, '');
        html += `<h3 class="text-xl font-bold text-amber-600 mt-6 mb-3">${formatInline(titleText)}</h3>`;
      } else if (line === '---') {
        html += '<hr />';
      } else if (line !== '') {
        html += `<p>${formatInline(line)}</p>`;
      }
    }

    if (inBlockquote) html += '</blockquote>';
    return html;
  }

  function formatInline(str) {
    if (!str) return '';
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/➡️/g, '<span class="text-amber-500 font-bold mx-1">➜</span>');
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

  // 頁面渲染器：書庫首頁
  function renderLibrary() {
    const container = document.getElementById('app-main');
    const book1 = DATA.books[0];
    const lastChapter = state.progress['book-1'] ? state.progress['book-1'].lastChapter : 1;

    container.innerHTML = `
      <!-- Hero 橫幅 -->
      <section class="relative overflow-hidden rounded-3xl mb-12 p-8 md:p-12 border border-amber-500/20 shadow-xl" style="background: linear-gradient(135deg, rgba(217, 119, 6, 0.12) 0%, rgba(2, 132, 199, 0.08) 100%);">
        <div class="absolute -right-16 -top-16 opacity-10 pointer-events-none">
          <svg class="w-96 h-96 spin-gear text-amber-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 13.5 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.07 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>
        </div>
        
        <div class="max-w-2xl relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-sm font-semibold mb-4">
            <span>⚙️ 旗艦首發 · 全卷完結</span>
            <span class="w-1 h-1 rounded-full bg-amber-500"></span>
            <span>適讀年齡：9～13歲</span>
          </div>
          <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            《記憶黑客少年》<br>
            <span class="text-2xl md:text-4xl text-amber-600">校園地下 404 室</span>
          </h1>
          <p class="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            失竊的二十四小時，消失的星期三！發明鬼才誠浩 ＋ 邏輯學霸葉旖緁 ＋ 變形機械摺紙犬皮可，一場運用真實密碼學與齒輪機械的校園地底大冒險！
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#/read/book-1/1" class="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-lg shadow-amber-600/25 flex items-center gap-2 transition-all hover:scale-105">
              <span>📖 從頭開始閱讀 (第 1 章)</span>
            </a>
            ${lastChapter > 1 ? `
              <a href="#/read/book-1/${lastChapter}" class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold shadow-md flex items-center gap-2 transition-all">
                <span>🔖 繼續閱讀 (第 ${lastChapter} 章)</span>
              </a>
            ` : ''}
          </div>
        </div>
      </section>

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

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <span>${book.id === 'book-1' ? '開始線上閱讀' : '搶先閱讀第二卷第 1 回'}</span> ➜
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

      <!-- 第二卷最新連載快速跳轉 -->
      ${DATA.books[1] && DATA.books[1].chapters.length > 0 ? `
        <section class="mb-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-xs font-bold mr-2">最新連載</span>
              <h2 class="text-xl font-bold inline-block text-slate-900 dark:text-white">《千島齒輪海的迷失燈塔》（第二卷）</h2>
            </div>
            <a href="#/read/book-2/${DATA.books[1].chapters[0].id}" class="text-xs font-bold text-amber-600 hover:underline">搶先閱讀 ➜</a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${DATA.books[1].chapters.map(ch => `
              <a href="#/read/book-2/${ch.id}" class="p-3.5 rounded-xl border border-amber-500/40 bg-white dark:bg-slate-900 hover:border-amber-600 transition-all flex flex-col justify-between group">
                <div>
                  <div class="flex items-center justify-between text-xs mb-1">
                    <span class="text-amber-600 font-bold">第 11 章（二卷01）</span>
                    <span class="text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-semibold">HOT 新上線</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-amber-600">${ch.shortTitle}</h4>
                </div>
                <div class="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
                  <span>${ch.wordCount} 字</span>
                  <span>約 ${ch.readTimeMin} 分鐘</span>
                </div>
              </a>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 第一本書章節快速跳轉 -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>📑 《記憶黑客少年》第一卷全回目錄</span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          ${book1.chapters.map((ch, idx) => {
            const isRead = state.progress['book-1'] && state.progress['book-1'].read.includes(ch.id);
            return `
              <a href="#/read/book-1/${ch.id}" class="p-3.5 rounded-xl border ${isRead ? 'border-amber-500/40 bg-amber-500/5' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'} hover:border-amber-500 transition-all flex flex-col justify-between group">
                <div>
                  <div class="flex items-center justify-between text-xs mb-1">
                    <span class="text-slate-400">第 ${idx + 1} 回</span>
                    ${isRead ? '<span class="text-emerald-500 text-xs">✓ 已讀</span>' : ''}
                  </div>
                  <h4 class="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-amber-600 line-clamp-1">${ch.shortTitle}</h4>
                </div>
                <div class="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
                  <span>${ch.wordCount} 字</span>
                  <span>約 ${ch.readTimeMin} 分鐘</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  // 頁面渲染器：沉浸式閱讀器
  function renderReader(bookId, chapterId) {
    const book = DATA.books.find(b => b.id === bookId) || DATA.books[0];
    const chapter = book.chapters.find(c => c.id === chapterId) || book.chapters[0];
    saveProgress(bookId, chapter.id);

    const prevChapter = book.chapters.find(c => c.id === chapterId - 1);
    const nextChapter = book.chapters.find(c => c.id === chapterId + 1);

    const container = document.getElementById('app-main');
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
      <article class="reader-container max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 md:p-14 mb-12">
        <header class="mb-10 pb-6 border-b border-amber-500/20">
          <div class="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            《${book.title}》
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            ${chapter.title}
          </h1>
          <div class="flex items-center gap-4 text-xs text-slate-500">
            <span>📖 約 ${chapter.wordCount} 字</span>
            <span>⏱️ 閱讀時間約 ${chapter.readTimeMin} 分鐘</span>
            <span>✨ 智慧書籤已自動保存</span>
          </div>
        </header>

        <div class="reader-content">
          ${parseMarkdown(chapter.rawContent)}
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
        state.fontSize = size;
        localStorage.setItem(STORAGE_KEYS.FONT_SIZE, size);
        document.documentElement.setAttribute('data-font-size', size);
        renderReader(bookId, chapterId);
      };
    });

    // 主題切換按鈕
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const theme = btn.getAttribute('data-theme-btn');
        state.theme = theme;
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
        document.documentElement.setAttribute('data-theme', theme);
        renderReader(bookId, chapterId);
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

    // 快速開啟本章解密卡
    const btnOpenPuzzle = document.getElementById('btn-open-puzzle');
    if (btnOpenPuzzle) {
      btnOpenPuzzle.onclick = () => {
        navigate('#/puzzle-lab');
      };
    }
  }

  // 頁面渲染器：人物與裝備圖鑑
  function renderCharacters() {
    const container = document.getElementById('app-main');
    container.innerHTML = `
      <section class="max-w-4xl mx-auto mb-16">
        <div class="text-center max-w-xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold mb-3">
            <span>👥 鹿陽檔案庫</span>
          </div>
          <h1 class="text-3xl font-extrabold mb-3 text-slate-900 dark:text-white">登場人物與核心機密檔案</h1>
          <p class="text-sm text-slate-500">深入了解冒險三人組、守護者邱校長與傳奇機械皮可的詳細設定。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${DATA.characters.map(char => `
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-3xl border border-amber-500/20 shadow-inner flex-shrink-0">
                  ${char.avatar}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">${char.name}</h3>
                    <span class="text-xs text-slate-400 font-mono">(${char.enName})</span>
                  </div>
                  <div class="text-xs font-bold text-amber-600 mb-1">${char.role}</div>
                  <div class="text-[11px] text-slate-400">${char.class} · ${char.age}</div>
                </div>
              </div>

              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${char.desc}</p>

              ${char.items ? `
                <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div class="text-xs font-bold text-slate-400">專屬裝備與物件：</div>
                  ${char.items.map(item => `
                    <div class="text-xs bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg">
                      <span class="font-bold text-amber-600">▪ ${item.name}：</span>
                      <span class="text-slate-600 dark:text-slate-300">${item.desc}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${char.forms ? `
                <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div class="text-xs font-bold text-slate-400">皮可的四大變形型態：</div>
                  ${char.forms.map(form => `
                    <div class="text-xs bg-amber-500/5 dark:bg-slate-800/60 p-2 rounded-lg border border-amber-500/20">
                      <span class="font-bold text-amber-600">★ ${form.name}：</span>
                      <span class="text-slate-600 dark:text-slate-300">${form.desc}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // 頁面渲染器：少年密碼實驗室 (Puzzle Lab)
  function renderPuzzleLab() {
    const container = document.getElementById('app-main');
    container.innerHTML = `
      <section class="max-w-4xl mx-auto mb-16">
        <div class="text-center max-w-xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold mb-3">
            <span>🧩 動腦實驗室</span>
          </div>
          <h1 class="text-3xl font-extrabold mb-3 text-slate-900 dark:text-white">小偵探密碼破譯工作台</h1>
          <p class="text-sm text-slate-500">書中出現的真實密碼學與物理邏輯！親自動手試試看，破解神秘代碼。</p>
        </div>

        <div class="space-y-8">
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

    // 邏輯實作：A1Z26
    const a1Input = document.getElementById('a1z26-text');
    const a1Output = document.getElementById('a1z26-num');
    function updateA1() {
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
      const z1 = parseInt(document.getElementById('slider-z1').value, 10);
      const z2 = parseInt(document.getElementById('slider-z2').value, 10);
      const z3 = parseInt(document.getElementById('slider-z3').value, 10);

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

  // 監聽網址 Hash 變動
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', handleRoute);

})();
