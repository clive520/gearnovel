/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 讀者留言與章節討論服務 (CommentsService)
 * 
 * 核心特色：
 * 1. 支援章節底部專屬留言板（只限登入會員發表）
 * 2. 支援 Firebase Realtime Database 跨裝置即時同步，並具備 LocalStorage 本地保險降級
 * 3. 支援閱讀趨勢與熱門故事榜之動態時段彙整（今日、7天、14天、30天留言紀錄）
 * 4. 具備字數限制、XSS 安全過濾與友好時間顯示
 */

(function () {
  const STORAGE_KEY = 'gear_comments_list';
  const listeners = [];
  let commentsData = [];
  let dbRef = null;
  let isFirebaseReady = false;

  // 格式化標準日期時間字串 YYYY-MM-DD HH:mm
  function formatDateTime(ts) {
    const d = new Date(ts);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  }

  // HTML 安全過濾 (XSS 防護)
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // 渲染大頭貼 HTML（自動識別圖片 URL 或 Emoji，並防止網址文字溢出）
  function renderAvatar(avatar, sizeClass = 'w-8 h-8', textClass = 'text-sm') {
    const raw = (avatar || '').trim();
    if (raw && (raw.startsWith('http://') || raw.startsWith('https://') || raw.startsWith('data:image/'))) {
      return `<div class="${sizeClass} rounded-full bg-amber-500/10 border border-amber-500/30 overflow-hidden flex items-center justify-center flex-shrink-0 shadow-xs">
        <img src="${escapeHtml(raw)}" alt="avatar" class="w-full h-full object-cover rounded-full" referrerpolicy="no-referrer" onerror="this.outerHTML='<span class=\\'${textClass}\\'>👤</span>'">
      </div>`;
    }
    return `<div class="${sizeClass} rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center ${textClass} font-bold flex-shrink-0 select-none">
      ${raw || '👤'}
    </div>`;
  }

  // 取得人性化相對時間標籤（例如：剛剛、10分鐘前、今天 14:30、昨天、或日期）
  function formatRelativeTime(ts) {
    if (!ts) return '';
    const now = Date.now();
    const diff = now - ts;
    if (diff < 60000) return '剛剛';
    if (diff < 3600000) return `${Math.floor(diff / 60000)} 分鐘前`;
    if (diff < 86400000) {
      const hours = Math.floor(diff / 3600000);
      return `${hours} 小時前`;
    }
    if (diff < 86400000 * 2) return '昨天';
    if (diff < 86400000 * 7) return `${Math.floor(diff / 86400000)} 天前`;
    return formatDateTime(ts);
  }

  // 取得台灣時間 (UTC+8) 當日凌晨 00:00:00 毫秒數
  function getTodayStartTimestamp() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const twTime = new Date(utc + (8 * 3600000));
    twTime.setHours(0, 0, 0, 0);
    // 轉回本機時間戳比較
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    return startOfToday.getTime();
  }

  // 初始預設示範留言（分佈於今日、7天內、14天內、30天內，方便首次展示）
  function getSeedComments() {
    const now = Date.now();
    return [
      {
        id: 'cmt_seed_1',
        bookId: 'book-33',
        chapterId: 1,
        bookTitle: '稻浪裡的擺渡船',
        chapterTitle: '第1章：序曲——立在田埂上的老刺竹篙',
        seriesTitle: '稻浪裡的擺渡船',
        userId: 'usr_seed_1',
        userName: '小探索者阿凱',
        userAvatar: '🛶',
        content: '烏日溪尾寮的故事太有在地溫度了！老刺竹篙插在田埂上的那一幕好有歷史感，期待後續大肚溪的擺渡冒險！',
        timestamp: now - 3600000 * 2, // 2 小時前 (今日)
        dateStr: formatDateTime(now - 3600000 * 2)
      },
      {
        id: 'cmt_seed_2',
        bookId: 'book-30',
        chapterId: 1,
        bookTitle: '死者請保持安靜 · 第一卷',
        chapterTitle: '第1章：深夜急診室的冰冷遺言',
        seriesTitle: '死者請保持安靜',
        userId: 'usr_seed_2',
        userName: '推理小達人',
        userAvatar: '🔍',
        content: '開頭在深夜急診室的懸疑感直接拉滿！心電圖停止後那詭異的心跳聲到底是什麼？推理節奏好棒！',
        timestamp: now - 86400000 * 1.5, // 1.5 天前 (7天內)
        dateStr: formatDateTime(now - 86400000 * 1.5)
      },
      {
        id: 'cmt_seed_3',
        bookId: 'book-1',
        chapterId: 1,
        bookTitle: '校園地下 404 室',
        chapterTitle: '第1章：走廊盡頭消失的班牌',
        seriesTitle: '冒險齒輪：失落的二十四小時',
        userId: 'usr_seed_3',
        userName: '時光旅人',
        userAvatar: '⚙️',
        content: '重溫第一卷校園地下404室，齒輪的冒險真的是經典！每次看都還是熱血沸騰。',
        timestamp: now - 86400000 * 4, // 4 天前 (7天內)
        dateStr: formatDateTime(now - 86400000 * 4)
      },
      {
        id: 'cmt_seed_4',
        bookId: 'book-20',
        chapterId: 1,
        bookTitle: '平行時空的同班同學 · 第一卷',
        chapterTitle: '第1章：另一個世界的我',
        seriesTitle: '平行時空的同班同學',
        userId: 'usr_seed_4',
        userName: '晨星思維',
        userAvatar: '🌌',
        content: '平行時空的設定很有深度，如果能遇見另一個自己，世界真的會不一樣嗎？很耐人尋味。',
        timestamp: now - 86400000 * 10, // 10 天前 (14天內)
        dateStr: formatDateTime(now - 86400000 * 10)
      },
      {
        id: 'cmt_seed_5',
        bookId: 'book-8',
        chapterId: 1,
        bookTitle: '班上鳥事完結篇',
        chapterTitle: '第1章：畢業倒數計時',
        seriesTitle: '班上鳥事',
        userId: 'usr_seed_5',
        userName: '羽毛小筆',
        userAvatar: '🐥',
        content: '這系列真的太搞笑了，把國小校園裡的友情跟各種無厘頭鳥事寫得栩栩如生！大推！',
        timestamp: now - 86400000 * 22, // 22 天前 (30天內)
        dateStr: formatDateTime(now - 86400000 * 22)
      }
    ];
  }

  // 從 LocalStorage 載入
  function loadLocalComments() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[CommentsService] 讀取本地留言快取失敗:', e);
    }
    const seeds = getSeedComments();
    saveLocalComments(seeds);
    return seeds;
  }

  // 儲存至 LocalStorage
  function saveLocalComments(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('[CommentsService] 寫入本地留言失敗:', e);
    }
  }

  // 合併雲端與本地留言（依 ID 去重，最新在最前）
  function mergeComments(cloudList, localList) {
    const map = new Map();
    (localList || []).forEach(item => {
      if (item && item.id) map.set(item.id, item);
    });
    (cloudList || []).forEach(item => {
      if (item && item.id) map.set(item.id, item);
    });
    const merged = Array.from(map.values());
    merged.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    return merged;
  }

  // 初始化 Firebase 實時監聽
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
      dbRef = db.ref('comments');

      dbRef.on('value', (snapshot) => {
        const val = snapshot.val();
        let cloudList = [];
        if (val && typeof val === 'object') {
          cloudList = Object.values(val);
        }
        if (cloudList.length > 0) {
          commentsData = mergeComments(cloudList, commentsData);
          saveLocalComments(commentsData);
          isFirebaseReady = true;
          notifyListeners();
        }
      }, (err) => {
        console.warn('[CommentsService] Firebase 留言同步失敗，切換為本地模式:', err);
      });
    } catch (e) {
      console.warn('[CommentsService] 初始化 Firebase 異常:', e);
    }
  }

  function notifyListeners() {
    listeners.forEach((fn) => {
      try {
        fn(commentsData);
      } catch (e) {
        console.error('[CommentsService] Listener error:', e);
      }
    });
  }

  // 初始化服務
  function init() {
    commentsData = loadLocalComments();
    initFirebase();
  }

  const CommentsService = {
    // 註冊變更監聽器
    onChange: function (fn) {
      if (typeof fn === 'function') {
        listeners.push(fn);
      }
    },

    // 格式化時間工具與安全轉義
    formatRelativeTime: formatRelativeTime,
    formatDateTime: formatDateTime,
    escapeHtml: escapeHtml,
    renderAvatar: renderAvatar,

    // 取得所有留言（依時間倒序）
    getAllComments: function () {
      return [...commentsData].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    },

    // 取得指定文章/章節的留言
    getCommentsByChapter: function (bookId, chapterId) {
      const chIdNum = Number(chapterId);
      return commentsData
        .filter(c => c.bookId === bookId && Number(c.chapterId) === chIdNum)
        .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    },

    // 取得指定文章/章節的留言筆數
    getChapterCommentsCount: function (bookId, chapterId) {
      const chIdNum = Number(chapterId);
      return commentsData.filter(c => c.bookId === bookId && Number(c.chapterId) === chIdNum).length;
    },

    // 取得時段留言紀錄：支援 'today' | 7 | 14 | 30
    getRecentComments: function (range = 'today') {
      const now = Date.now();
      let filtered = [];

      if (range === 'today' || range === 0) {
        const todayStart = getTodayStartTimestamp();
        filtered = commentsData.filter(c => (c.timestamp || 0) >= todayStart);
      } else {
        const days = Number(range) || 7;
        const cutoff = now - days * 86400000;
        filtered = commentsData.filter(c => (c.timestamp || 0) >= cutoff);
      }

      return filtered.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    },

    // 新增留言（嚴格限制必須有登入者身份）
    addComment: async function ({ bookId, chapterId, bookTitle, chapterTitle, seriesTitle, content, user }) {
      if (!user || (!user.uid && !user.accountName)) {
        throw new Error('未登入使用者無法留言，請先登入冒險齒輪帳號！');
      }

      const text = (content || '').trim();
      if (!text) {
        throw new Error('留言內容不可為空！');
      }
      if (text.length > 500) {
        throw new Error('留言長度上限為 500 個字元！');
      }

      const now = Date.now();
      const displayName = user.displayName || user.accountName || (user.email ? user.email.split('@')[0] : '冒險探索者');
      const avatar = user.photoURL || user.avatar || '👤';

      const newComment = {
        id: 'cmt_' + now + '_' + Math.random().toString(36).substring(2, 8),
        bookId: String(bookId),
        chapterId: Number(chapterId),
        bookTitle: bookTitle || String(bookId),
        chapterTitle: chapterTitle || `第 ${chapterId} 章`,
        seriesTitle: seriesTitle || bookTitle || '冒險齒輪系列',
        userId: user.uid || ('usr_' + now),
        userName: displayName,
        userAvatar: avatar,
        content: text,
        timestamp: now,
        dateStr: formatDateTime(now)
      };

      // 1. 本地更新
      commentsData.unshift(newComment);
      saveLocalComments(commentsData);

      // 2. 雲端同步 (Firebase Realtime Database)
      if (dbRef) {
        try {
          await dbRef.child(newComment.id).set(newComment);
          console.log('[CommentsService] 留言已同步至 Firebase Realtime DB');
        } catch (e) {
          console.warn('[CommentsService] Firebase 留言寫入失敗，但本地已安全保存:', e);
        }
      }

      // 3. 通知監聽者
      notifyListeners();

      return newComment;
    }
  };

  window.CommentsService = CommentsService;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
