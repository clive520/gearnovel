/**
 * 鹿陽國小單一認證系統 (SSO) — 後端 JWT 驗證模組
 * 適用於 Node.js / Express / 伺服端 API
 *
 * 密鑰：08bc38df41c2e5e557a95554faab585f9878ca4554993c906689fcf8082051420534d15d9fba9d751d3da2a2b08d9f14
 */

const crypto = require('crypto');

const LUYANG_JWT_SECRET = '08bc38df41c2e5e557a95554faab585f9878ca4554993c906689fcf8082051420534d15d9fba9d751d3da2a2b08d9f14';

function base64UrlDecode(str) {
  let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';
  return Buffer.from(b64, 'base64').toString('utf8');
}

function base64UrlEncode(buffer) {
  return Buffer.from(buffer).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * 驗證由鹿陽國小 SSO 發行之 HS256 Token
 * @param {string} token 
 * @param {string} [secret] 可選自訂密鑰
 * @returns {{ success: boolean, user?: object, error?: string }}
 */
function verifyToken(token, secret = LUYANG_JWT_SECRET) {
  if (!token || typeof token !== 'string') {
    return { success: false, error: '缺少 Token 或格式不符' };
  }

  const parts = token.trim().split('.');
  if (parts.length !== 3) {
    return { success: false, error: 'Token 結構無效，必須為 header.payload.signature' };
  }

  const [headerB64, payloadB64, signatureB64] = parts;

  // 1. 解析 Payload
  let payload;
  try {
    payload = JSON.parse(base64UrlDecode(payloadB64));
  } catch (err) {
    return { success: false, error: '無法解析 Payload JSON' };
  }

  // 2. 檢查過期時間
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < now) {
    return { success: false, error: 'Token 已過期，請重新登入' };
  }

  // 3. 驗證簽名 (支援 UTF-8 字串密鑰與 Hex bytes 密鑰)
  const data = headerB64 + '.' + payloadB64;
  const expectedSigUtf8 = crypto.createHmac('sha256', secret).update(data).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  
  let valid = (signatureB64 === expectedSigUtf8);
  if (!valid && /^[0-9a-fA-F]+$/.test(secret) && secret.length % 2 === 0) {
    const expectedSigHex = crypto.createHmac('sha256', Buffer.from(secret, 'hex')).update(data).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    valid = (signatureB64 === expectedSigHex);
  }

  if (!valid) {
    return { success: false, error: 'Token 簽名驗證失敗！密鑰不匹配' };
  }

  // 4. 取得使用者資料
  // uid  -> 內部唯一 ID
  // name -> 畫面上顯示的中文姓名
  return {
    success: true,
    user: {
      uid: payload.uid,
      username: payload.username,
      name: payload.name,
      role: payload.role,
      iat: payload.iat,
      exp: payload.exp
    }
  };
}

/**
 * 產生測試用 SSO Token
 */
function createSampleToken({ uid = 'sample_uid_101', username = '113001', name = '王小明', role = 'student', expiresInSeconds = 86400 } = {}, secret = LUYANG_JWT_SECRET) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    uid,
    username,
    name,
    role,
    iat: now,
    exp: now + expiresInSeconds
  };

  const headerB64 = base64UrlEncode(JSON.stringify(header));
  const payloadB64 = base64UrlEncode(JSON.stringify(payload));
  const data = headerB64 + '.' + payloadB64;
  const signatureB64 = crypto.createHmac('sha256', secret).update(data).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return data + '.' + signatureB64;
}

module.exports = {
  LUYANG_JWT_SECRET,
  verifyToken,
  createSampleToken
};

// 若直接以 CLI 執行
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === 'generate') {
    const name = args[1] || '誠浩';
    const uid = args[2] || 'usr_chenghao_01';
    const sample = createSampleToken({ uid, name, username: '113088', role: 'student' });
    console.log('=== 產生的測試 SSO Token ===');
    console.log(sample);
  } else if (args[0] === 'verify' && args[1]) {
    const result = verifyToken(args[1]);
    console.log('驗證結果:', result);
  } else {
    console.log('--- 鹿陽國小 SSO 後端驗證工具 ---');
    console.log('自測驗證:');
    const testToken = createSampleToken({ name: '葉旖緁', uid: 'usr_yijie_01', role: 'student' });
    console.log('產生測試 Token: 成功');
    const verifyRes = verifyToken(testToken);
    console.log('驗證測試 Token:', verifyRes.success ? '通過 ✅' : '失敗 ❌');
    console.log('解析出之使用者:', verifyRes.user);
  }
}
