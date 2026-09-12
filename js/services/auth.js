/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 身份驗證與跨裝置雲端書籤／閱讀歷史同步服務 (AuthService)
 * 
 * 支援：
 * 1. Google 一鍵快速登入 (Firebase Authentication)
 * 2. 自訂帳號密碼註冊與登入 (Firebase Email + Local Vault 智慧雙重保障)
 * 3. 雲端與本機專屬書籤無損雙向合併 (Bookmarks Smart Sync)
 * 4. 閱讀過的文章與章節進度雲端持久化保存 (Reading History & Progress Sync)
 * 5. 密碼採用 Web Crypto API SHA-256 安全雜湊
 */

(function () {
  const userListeners = [];
  let currentUser = null;
  let dbRef = null;
  let cloudBookmarksRef = null;
  let cloudProgressRef = null;

  const STORAGE_KEYS = {
    CUSTOM_USERS: 'gear_custom_users',
    CURRENT_USER: 'gear_current_user',
    USER_BOOKMARKS_PREFIX: 'gear_bookmarks_',
    USER_PROGRESS_PREFIX: 'gear_progress_'
  };

  // 密碼安全雜湊 (SHA-256)
  async function hashPassword(password) {
    if (window.crypto && window.crypto.subtle) {
      try {
        const msgBuffer = new TextEncoder().encode(password + '_gear_novel_salt_2026');
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      } catch (e) {
        console.warn('[AuthService] crypto.subtle 失敗，使用備用雜湊:', e);
      }
    }
    // 降級純字串雜湊演算法
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      hash = ((hash << 5) - hash) + password.charCodeAt(i);
      hash |= 0;
    }
    return 'h_' + Math.abs(hash);
  }

  function getLocalUsers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_USERS) || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveLocalUsers(users) {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_USERS, JSON.stringify(users));
  }

  function setLocalSession(user) {
    currentUser = user;
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      attachRealtimeSync(user.uid);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      detachRealtimeSync();
    }
    notifyUserListeners(currentUser);
  }

  function attachRealtimeSync(uid) {
    if (dbRef && uid) {
      cloudBookmarksRef = dbRef.ref(`users/${uid}/bookmarks`);
      cloudBookmarksRef.on('value', (snapshot) => {
        const cloudBms = snapshot.val();
        if (Array.isArray(cloudBms)) {
          window.dispatchEvent(new CustomEvent('gear_cloud_bookmarks_updated', { detail: cloudBms }));
        }
      });

      cloudProgressRef = dbRef.ref(`users/${uid}/progress`);
      cloudProgressRef.on('value', (snapshot) => {
        const cloudProg = snapshot.val();
        if (cloudProg && typeof cloudProg === 'object') {
          window.dispatchEvent(new CustomEvent('gear_cloud_progress_updated', { detail: cloudProg }));
        }
      });
    }
  }

  function detachRealtimeSync() {
    if (cloudBookmarksRef) {
      cloudBookmarksRef.off();
      cloudBookmarksRef = null;
    }
    if (cloudProgressRef) {
      cloudProgressRef.off();
      cloudProgressRef = null;
    }
  }

  function init() {
    // 1. 先還原本地已保存的使用者 Session
    try {
      const savedUserStr = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      if (savedUserStr) {
        currentUser = JSON.parse(savedUserStr);
        console.log('[AuthService] 已還原本機登入狀態:', currentUser.displayName || currentUser.email);
      }
    } catch (e) {
      console.warn('[AuthService] 還原 Session 異常:', e);
    }

    const config = window.GEAR_FIREBASE_CONFIG;
    if (!config || !config.enabled || !window.firebase) {
      notifyUserListeners(currentUser);
      return;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config.firebaseConfig);
      }

      dbRef = firebase.database ? firebase.database() : null;

      if (firebase.auth) {
        const auth = firebase.auth();
        auth.onAuthStateChanged(async (fbUser) => {
          if (fbUser) {
            currentUser = {
              uid: fbUser.uid,
              email: fbUser.email,
              displayName: fbUser.displayName || (fbUser.email ? fbUser.email.split('@')[0] : '齒輪冒險者'),
              photoURL: fbUser.photoURL || null,
              provider: (fbUser.providerData && fbUser.providerData[0] && fbUser.providerData[0].providerId) || 'google'
            };
            localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(currentUser));
            console.log('[AuthService] Firebase 認證成功:', currentUser.displayName, currentUser.email);
            attachRealtimeSync(currentUser.uid);
          } else {
            // 若非 Firebase 登入（例如本機自訂帳號），且 localStorage 內有 session 則保留
            const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
            if (saved) {
              const parsed = JSON.parse(saved);
              if (parsed.provider === 'local' || parsed.provider === 'firebase_email') {
                currentUser = parsed;
                attachRealtimeSync(currentUser.uid);
                notifyUserListeners(currentUser);
                return;
              }
            }
            currentUser = null;
            detachRealtimeSync();
          }
          notifyUserListeners(currentUser);
        });
      } else {
        notifyUserListeners(currentUser);
      }
    } catch (e) {
      console.warn('[AuthService] 初始化 Firebase Auth 失敗:', e);
      notifyUserListeners(currentUser);
    }
  }

  function notifyUserListeners(user) {
    userListeners.forEach((fn) => {
      try {
        fn(user);
      } catch (e) {
        console.error('[AuthService] Listener error:', e);
      }
    });
  }

  const AuthService = {
    onUserChange: function (fn) {
      if (typeof fn === 'function') {
        userListeners.push(fn);
        if (currentUser !== undefined) {
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

    // 1. Google 一鍵快速登入
    signInWithGoogle: async function () {
      if (!window.firebase || !firebase.auth) {
        throw new Error('Firebase 認證模組尚未就緒，請檢查網路連線。');
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
          throw new Error('Firebase Google 登入服務未啟用，建議使用帳號密碼登入或註冊。');
        } else if (error.code !== 'auth/popup-closed-by-user') {
          throw new Error(error.message || 'Google 登入失敗');
        }
        throw error;
      }
    },

    // 2. 自訂帳號密碼註冊 (Register)
    registerWithPassword: async function ({ displayName, emailOrAccount, password }) {
      const cleanAccount = (emailOrAccount || '').trim();
      const cleanName = (displayName || '').trim() || cleanAccount;
      const cleanPass = (password || '').trim();

      if (!cleanAccount) {
        throw new Error('請輸入電子郵件或帳號名稱！');
      }
      if (cleanPass.length < 6) {
        throw new Error('密碼長度至少需要 6 個字元！');
      }

      // 檢查本機帳號庫是否已存在
      const localUsers = getLocalUsers();
      const exists = localUsers.some(u => 
        u.accountName.toLowerCase() === cleanAccount.toLowerCase() || 
        (u.email && u.email.toLowerCase() === cleanAccount.toLowerCase())
      );
      if (exists) {
        throw new Error('此帳號或 Email 已經被註冊過囉！請直接登入。');
      }

      const isEmail = cleanAccount.includes('@');
      const normalizedEmail = isEmail ? cleanAccount : `${cleanAccount}@gearnovel.user`;

      // 嘗試以 Firebase Email/Password 註冊
      let fbSuccess = false;
      if (window.firebase && firebase.auth && isEmail) {
        try {
          const cred = await firebase.auth().createUserWithEmailAndPassword(cleanAccount, cleanPass);
          if (cred && cred.user) {
            await cred.user.updateProfile({ displayName: cleanName });
            fbSuccess = true;
          }
        } catch (fbErr) {
          console.warn('[AuthService] Firebase Email 註冊未啟用或失敗，轉用本機帳號庫:', fbErr);
        }
      }

      // 同時寫入 Local Vault 雙重保險
      const hashed = await hashPassword(cleanPass);
      const newLocalUser = {
        uid: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        email: normalizedEmail,
        accountName: cleanAccount,
        displayName: cleanName,
        passwordHash: hashed,
        createdAt: Date.now(),
        provider: fbSuccess ? 'firebase_email' : 'local'
      };

      localUsers.push(newLocalUser);
      saveLocalUsers(localUsers);

      if (!fbSuccess) {
        setLocalSession(newLocalUser);
        return newLocalUser;
      }
      return currentUser;
    },

    // 3. 帳號密碼登入 (Sign In with Password)
    signInWithPassword: async function (accountOrEmail, password) {
      const cleanAccount = (accountOrEmail || '').trim();
      const cleanPass = (password || '').trim();

      if (!cleanAccount || !cleanPass) {
        throw new Error('請輸入帳號與密碼！');
      }

      // 先比對本機帳號庫
      const localUsers = getLocalUsers();
      const targetUser = localUsers.find(u => 
        u.accountName.toLowerCase() === cleanAccount.toLowerCase() || 
        (u.email && u.email.toLowerCase() === cleanAccount.toLowerCase())
      );

      if (targetUser) {
        const hashed = await hashPassword(cleanPass);
        if (targetUser.passwordHash === hashed) {
          setLocalSession(targetUser);
          return targetUser;
        } else {
          throw new Error('密碼輸入錯誤，請重新確認！');
        }
      }

      // 若本機無此使用者且輸入為 Email，嘗試以 Firebase Auth 登入
      if (cleanAccount.includes('@') && window.firebase && firebase.auth) {
        try {
          const cred = await firebase.auth().signInWithEmailAndPassword(cleanAccount, cleanPass);
          return cred.user;
        } catch (err) {
          console.warn('[AuthService] Firebase Email 登入失敗:', err);
          if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
            throw new Error('帳號不存在或密碼錯誤！');
          }
        }
      }

      throw new Error('查無此帳號！若尚未註冊，請點擊下方「免費註冊帳號」。');
    },

    // 4. 登出
    signOut: async function () {
      if (window.firebase && firebase.auth && firebase.auth().currentUser) {
        try {
          await firebase.auth().signOut();
        } catch (e) {
          console.warn('[AuthService] Firebase signOut 失敗:', e);
        }
      }
      setLocalSession(null);
      console.log('[AuthService] 已成功登出');
    },

    // ================== 書籤同步與管理 ==================
    syncBookmarksToCloud: async function (bookmarks) {
      if (!currentUser) return;
      const bms = Array.isArray(bookmarks) ? bookmarks : [];
      try {
        localStorage.setItem(STORAGE_KEYS.USER_BOOKMARKS_PREFIX + currentUser.uid, JSON.stringify(bms));
      } catch (e) {}

      if (dbRef) {
        try {
          await dbRef.ref(`users/${currentUser.uid}/bookmarks`).set(bms);
          console.log('[AuthService] 書籤已同步至雲端');
        } catch (e) {
          console.warn('[AuthService] 雲端書籤儲存失敗:', e);
        }
      }
    },

    fetchCloudBookmarks: async function () {
      if (!currentUser) return null;
      if (dbRef) {
        try {
          const snapshot = await dbRef.ref(`users/${currentUser.uid}/bookmarks`).once('value');
          const val = snapshot.val();
          if (Array.isArray(val)) return val;
        } catch (e) {
          console.warn('[AuthService] 讀取 Firebase 雲端書籤失敗:', e);
        }
      }
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.USER_BOOKMARKS_PREFIX + currentUser.uid);
        if (saved) return JSON.parse(saved);
      } catch (e) {}
      return null;
    },

    mergeBookmarks: function (localList, cloudList) {
      const local = Array.isArray(localList) ? localList : [];
      const cloud = Array.isArray(cloudList) ? cloudList : [];
      const map = new Map();

      cloud.forEach((item) => {
        if (item && item.id) map.set(item.id, item);
      });

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

      const merged = Array.from(map.values()).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      return merged.slice(0, 50);
    },

    // ================== 閱讀進度與歷史章節同步 ==================
    syncProgressToCloud: async function (progress) {
      if (!currentUser || !progress) return;
      try {
        localStorage.setItem(STORAGE_KEYS.USER_PROGRESS_PREFIX + currentUser.uid, JSON.stringify(progress));
      } catch (e) {}

      if (dbRef) {
        try {
          await dbRef.ref(`users/${currentUser.uid}/progress`).set(progress);
          console.log('[AuthService] 閱讀歷史已同步至雲端');
        } catch (e) {
          console.warn('[AuthService] 雲端閱讀進度儲存失敗:', e);
        }
      }
    },

    fetchCloudProgress: async function () {
      if (!currentUser) return null;
      if (dbRef) {
        try {
          const snapshot = await dbRef.ref(`users/${currentUser.uid}/progress`).once('value');
          const val = snapshot.val();
          if (val && typeof val === 'object') return val;
        } catch (e) {
          console.warn('[AuthService] 讀取 Firebase 閱讀歷史失敗:', e);
        }
      }
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS_PREFIX + currentUser.uid);
        if (saved) return JSON.parse(saved);
      } catch (e) {}
      return null;
    },

    mergeProgress: function (localProg, cloudProg) {
      const local = (localProg && typeof localProg === 'object') ? localProg : {};
      const cloud = (cloudProg && typeof cloudProg === 'object') ? cloudProg : {};
      const merged = { ...cloud };

      Object.keys(local).forEach(bookId => {
        if (!merged[bookId]) {
          merged[bookId] = local[bookId];
        } else {
          const readSet = new Set([...(merged[bookId].read || []), ...(local[bookId].read || [])]);
          const lastChapter = Math.max(merged[bookId].lastChapter || 1, local[bookId].lastChapter || 1);
          merged[bookId] = {
            lastChapter,
            read: Array.from(readSet).sort((a, b) => a - b)
          };
        }
      });

      return merged;
    }
  };

  window.AuthService = AuthService;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
