/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 閱讀次數統計服務 (StatsService)
 * 
 * 特色：
 * 1. 支援 Firebase Realtime Database 跨設備即時統計
 * 2. 具備 Graceful Fallback：無配置或離線時自動切換精準基準底數 + 本地記憶
 * 3. 具備 Session 防刷去重：同一工作階段多次閱讀不重複灌水
 * 4. 支援全站總覽、套書、分卷、各章節的多維度聚合計算
 */

(function () {
  const SESSION_PREFIX = 'gn_session_read_';
  const LOCAL_PREFIX = 'gn_local_read_';

  // 完全純粹真實計數模式：初始底數為 0，完全由真實讀者點閱自增累計
  function getChapterBaseCount(bookId, chId) {
    return 0;
  }

  const listeners = [];
  let cloudData = null;
  let isFirebaseReady = false;

  // 初始化 Firebase Realtime Database
  function initFirebase() {
    const config = window.GEAR_FIREBASE_CONFIG;
    if (!config || !config.enabled || !window.firebase) {
      return;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config.firebaseConfig);
      }
      const db = firebase.database();
      const readsRef = db.ref('reads');

      readsRef.on('value', (snapshot) => {
        cloudData = snapshot.val() || {};
        isFirebaseReady = true;
        notifyListeners();
      }, (err) => {
        console.warn('[StatsService] Firebase Realtime DB 連線失敗，切換為本地基準模式:', err);
      });
    } catch (e) {
      console.warn('[StatsService] 初始化 Firebase 發生異常，使用本地備援模式:', e);
    }
  }

  function notifyListeners() {
    listeners.forEach((fn) => {
      try {
        fn();
      } catch (e) {
        console.error(e);
      }
    });
  }

  // 數字美化格式化 (例如: 12500 -> 1.3 萬, 2450 -> 2,450)
  function formatCount(num, formatType = 'comma') {
    const n = Math.round(Number(num) || 0);
    if (formatType === 'compact') {
      if (n >= 10000) {
        return (n / 10000).toFixed(1) + ' 萬';
      }
      return n.toLocaleString();
    }
    return n.toLocaleString();
  }

  const StatsService = {
    // 註冊數據更新監聽器
    onUpdate: function (fn) {
      if (typeof fn === 'function') listeners.push(fn);
    },

    // 取得單一章節的閱讀總次數 (基準底數 + 雲端自增/本地自增)
    getChapterReadsRaw: function (bookId, chapterId) {
      const base = getChapterBaseCount(bookId, chapterId);
      const key = `${bookId}_${chapterId}`;

      let extra = 0;
      if (isFirebaseReady && cloudData && cloudData.chapters && cloudData.chapters[key]) {
        extra = Number(cloudData.chapters[key]) || 0;
      } else {
        const local = localStorage.getItem(LOCAL_PREFIX + key);
        extra = Number(local) || 0;
      }

      return base + extra;
    },

    getChapterReads: function (bookId, chapterId, compact = false) {
      const raw = this.getChapterReadsRaw(bookId, chapterId);
      return formatCount(raw, compact ? 'compact' : 'comma');
    },

    // 取得整本書 (Volume) 的總閱讀次數
    getBookReadsRaw: function (bookId) {
      const books = (window.GEAR_NOVELS_DATA && window.GEAR_NOVELS_DATA.books) || [];
      const book = books.find((b) => b.id === bookId);
      if (!book || !book.chapters) return 0;

      return book.chapters.reduce((sum, ch) => {
        return sum + this.getChapterReadsRaw(bookId, ch.id);
      }, 0);
    },

    getBookReads: function (bookId, compact = true) {
      const raw = this.getBookReadsRaw(bookId);
      return formatCount(raw, compact ? 'compact' : 'comma');
    },

    // 取得整套書 (Series) 的總閱讀次數
    getSeriesReadsRaw: function (seriesId) {
      const seriesList = window.GEAR_SERIES || [];
      const series = seriesList.find((s) => s.id === seriesId);
      if (!series || !series.volumes) return 0;

      return series.volumes.reduce((sum, vol) => {
        return sum + this.getBookReadsRaw(vol.bookId);
      }, 0);
    },

    getSeriesReads: function (seriesId, compact = true) {
      const raw = this.getSeriesReadsRaw(seriesId);
      return formatCount(raw, compact ? 'compact' : 'comma');
    },

    // 取得全站總閱讀次數
    getTotalSiteReadsRaw: function () {
      const seriesList = window.GEAR_SERIES || [];
      return seriesList.reduce((sum, s) => {
        return sum + this.getSeriesReadsRaw(s.id);
      }, 0);
    },

    getTotalSiteReads: function (compact = true) {
      const raw = this.getTotalSiteReadsRaw();
      return formatCount(raw, compact ? 'compact' : 'comma');
    },

    // 記錄一次閱讀（具有工作階段防刷去重）
    recordChapterRead: function (bookId, chapterId) {
      if (!bookId || chapterId == null) return;
      const key = `${bookId}_${chapterId}`;
      const sessionKey = SESSION_PREFIX + key;

      // 檢查本 Session 是否已計算過
      if (sessionStorage.getItem(sessionKey)) {
        return; // 本次造訪已記錄，不重複灌水
      }
      sessionStorage.setItem(sessionKey, '1');

      // 若 Firebase 已連線，透過 Transaction 進行雲端原子自增
      if (isFirebaseReady && window.firebase && window.firebase.database) {
        try {
          const db = firebase.database();
          db.ref(`reads/chapters/${key}`).transaction((current) => (current || 0) + 1);
          db.ref(`reads/totals/site`).transaction((current) => (current || 0) + 1);
        } catch (e) {
          console.warn('[StatsService] 寫入雲端計數失敗，切換為本地計數:', e);
          this._incrementLocal(key);
        }
      } else {
        // 本地自增備援
        this._incrementLocal(key);
      }

      notifyListeners();
    },

    _incrementLocal: function (key) {
      const localKey = LOCAL_PREFIX + key;
      const cur = Number(localStorage.getItem(localKey)) || 0;
      localStorage.setItem(localKey, String(cur + 1));
    }
  };

  window.StatsService = StatsService;

  // 於 DOM Ready 或載入後自動嘗試啟動
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFirebase);
  } else {
    initFirebase();
  }
})();
