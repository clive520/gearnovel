/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 身份驗證與跨裝置雲端書籤同步服務 (AuthService)
 * 
 * 支援：
 * 1. Firebase Authentication (Google 登入 / 登出)
 * 2. 雲端書籤無損雙向合併（Local ↔ Cloud Smart Merge）
 * 3. 跨裝置實時書籤監聽與同步廣播
 */

(function () {
  const userListeners = [];
  let currentUser = null;
  let dbRef = null;
  let cloudBookmarksRef = null;

  function init() {
    const config = window.GEAR_FIREBASE_CONFIG;
    if (!config || !config.enabled || !window.firebase) {
      return;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config.firebaseConfig);
      }

      if (!firebase.auth) {
        console.warn('[AuthService] firebase.auth 模組未載入');
        return;
      }

      const auth = firebase.auth();
      dbRef = firebase.database ? firebase.database() : null;

      auth.onAuthStateChanged(async (user) => {
        currentUser = user;
        if (user && dbRef) {
          console.log('[AuthService] 使用者已登入:', user.displayName, user.email);
          cloudBookmarksRef = dbRef.ref(`users/${user.uid}/bookmarks`);
          
          // 監聽雲端書籤即時變動
          cloudBookmarksRef.on('value', (snapshot) => {
            const cloudBms = snapshot.val();
            if (Array.isArray(cloudBms)) {
              window.dispatchEvent(new CustomEvent('gear_cloud_bookmarks_updated', { detail: cloudBms }));
            }
          });
        } else {
          if (cloudBookmarksRef) {
            cloudBookmarksRef.off();
            cloudBookmarksRef = null;
          }
        }
        notifyUserListeners(user);
      });
    } catch (e) {
      console.warn('[AuthService] 初始化 Firebase Auth 失敗:', e);
    }
  }

  function notifyUserListeners(user) {
    userListeners.forEach((fn) => {
      try {
        fn(user);
      } catch (e) {
        console.error(e);
      }
    });
  }

  const AuthService = {
    onUserChange: function (fn) {
      if (typeof fn === 'function') {
        userListeners.push(fn);
        if (currentUser !== undefined && currentUser !== null) {
          fn(currentUser);
        }
      }
    },

    getUser: function () {
      return currentUser;
    },

    isLoggedIn: function () {
      return !!currentUser;
    },

    signInWithGoogle: async function () {
      if (!window.firebase || !firebase.auth) {
        alert('Firebase 認證模組尚未就緒，請檢查網路連線。');
        return;
      }
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');

      try {
        const result = await firebase.auth().signInWithPopup(provider);
        return result.user;
      } catch (error) {
        console.error('[AuthService] Google 登入失敗:', error);
        if (error.code === 'auth/popup-blocked') {
          return firebase.auth().signInWithRedirect(provider);
        } else if (error.code === 'auth/configuration-not-found' || error.code === 'auth/operation-not-allowed') {
          alert('請至 Firebase 控制台啟用 Google 登入提供者 (Authentication ➜ Sign-in method ➜ Google 啟用)。');
        } else if (error.code !== 'auth/popup-closed-by-user') {
          alert('登入失敗：' + (error.message || error.code));
        }
        throw error;
      }
    },

    signOut: async function () {
      if (!window.firebase || !firebase.auth) return;
      try {
        await firebase.auth().signOut();
        console.log('[AuthService] 已成功登出');
      } catch (error) {
        console.error('[AuthService] 登出失敗:', error);
      }
    },

    // 儲存書籤至雲端 (僅在登入狀態下生效)
    syncBookmarksToCloud: async function (bookmarks) {
      if (!currentUser || !dbRef) return;
      try {
        await dbRef.ref(`users/${currentUser.uid}/bookmarks`).set(bookmarks);
        console.log('[AuthService] 書籤已成功同步至雲端');
      } catch (e) {
        console.warn('[AuthService] 書籤雲端同步失敗:', e);
      }
    },

    // 取得雲端書籤
    fetchCloudBookmarks: async function () {
      if (!currentUser || !dbRef) return null;
      try {
        const snapshot = await dbRef.ref(`users/${currentUser.uid}/bookmarks`).once('value');
        return snapshot.val() || [];
      } catch (e) {
        console.warn('[AuthService] 讀取雲端書籤失敗:', e);
        return null;
      }
    },

    // 雙向無損合併本機與雲端書籤
    mergeBookmarks: function (localList, cloudList) {
      const local = Array.isArray(localList) ? localList : [];
      const cloud = Array.isArray(cloudList) ? cloudList : [];
      const map = new Map();

      // 先將雲端加入
      cloud.forEach((item) => {
        if (item && item.id) map.set(item.id, item);
      });

      // 再將本地加入，若重複以最新 timestamp 為準
      local.forEach((item) => {
        if (item && item.id) {
          if (!map.has(item.id)) {
            map.set(item.id, item);
          } else {
            const existing = map.get(item.id);
            if ((item.timestamp || 0) > (existing.timestamp || 0)) {
              map.set(item.id, item);
            }
          }
        }
      });

      // 依時間由新至舊排序，最多保留 50 筆
      const merged = Array.from(map.values()).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      return merged.slice(0, 50);
    }
  };

  window.AuthService = AuthService;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
