const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, 'chapters');
const files = fs.readdirSync(chaptersDir)
  .filter(f => f.endsWith('.md'))
  .sort((a, b) => {
    const numA = parseInt(a.split('_')[0], 10);
    const numB = parseInt(b.split('_')[0], 10);
    return numA - numB;
  });

const chapterTitles = [
  "失竊的二十四小時",
  "會打摩斯的金屬魔術方塊",
  "圖書館的倒懸齒輪",
  "失控的清潔工機器人群",
  "記憶碎片的放映機",
  "代號 404 的幽靈走廊",
  "雙重導師的鏡像迷局",
  "全息投影背後的齒輪心臟",
  "格式化倒數十分鐘",
  "重啟星期三的世界"
];

const puzzleData = [
  {
    chapter: 1,
    title: "A1Z26 字母代換密碼",
    cipher: "04-15-14-20 / 04-18-09-14-11 / 13-09-12-11",
    decoded: "DONT DRINK MILK (不要喝牛奶)",
    concept: "最基礎也最經典的密碼學入門！將英文26個字母按照順序標上 1 到 26，例如 A=1, B=2, C=3... Z=26。破解時只需對照字母序號即可還原明文。"
  },
  {
    chapter: 2,
    title: "質數、整數除法與二進位密碼鎖",
    cipher: "數一：十以內最大質數(7) | 數二：一打的一半 div 最小合數(6 div 4 = 1) | 數三：二進位 1001 (8+1 = 9)",
    decoded: "7 - 1 - 9",
    concept: "融合數學質數、電腦程式整數除法（只取商數捨去餘數）與二進位權重（8+0+0+1）。二進位是電腦世界的底層語言，只有0與1兩種狀態！"
  },
  {
    chapter: 3,
    title: "圖書館杜威索書號與書本加密法",
    cipher: "823.91 (文學) 第5詞: THREE | 510.1 (數學) 第10詞: CLOCKWISE | 621.8 (工程) 倒數第2詞: REVERSE",
    decoded: "順時針轉三圈 ➡️ 逆時針反轉",
    concept: "書本加密法（Book Cipher）是情報人員常用的加密手法，配合圖書館分類法（800文學、500數學、600工程），指定頁數與單詞順序隱藏操作手冊。"
  },
  {
    chapter: 4,
    title: "布林代數與邏輯門真值表",
    cipher: "公式：Y = (A AND (NOT B)) OR (B AND C)",
    decoded: "拉下紅色(A=1) ➡️ 推開藍色(B=0) ➡️ 黃色保持(C=0) ➡️ Y 必為 1",
    concept: "布林邏輯是所有數位晶片的核心：AND（兩者皆真為真）、OR（任一為真即為真）、NOT（邏輯反轉）。利用 OR 的特性，只需確保前半段為 1 即可達成目標！"
  },
  {
    chapter: 5,
    title: "三色光學稜鏡波長與相位校準",
    cipher: "紅(700nm)、綠(540nm)、藍(430.5nm) 偏轉角計算",
    decoded: "45° - 45° - 90°",
    concept: "光波三原色（RGB）具有不同的物理波長。透過特定角度的水晶雙折射與色散，讓三束激光在同一相位點重疊共振，形成純白激光激發量子存儲晶片。"
  },
  {
    chapter: 6,
    title: "幾何光學反射定律與鏡面偏轉",
    cipher: "入射角等於反射角 (θi = θr)，綠光以 30° 入射，經兩面鏡子與皮可合金胸甲反射",
    decoded: "鏡面 A (60°) ➡️ 鏡面 B (45°) ➡️ 皮可金屬盾二次反射",
    concept: "光線在平滑表面反射時，入射角始終等於反射角。在激光迷陣中，皮可利用超高精度拋光的記憶合金身軀充當了動態補償鏡面。"
  },
  {
    chapter: 7,
    title: "二進位奇偶校驗碼 (Parity Check)",
    cipher: "左橋奇校驗 (1的個數為奇數) ｜ 右橋偶校驗 (1的個數為偶數)",
    decoded: "誠浩踏左側奇數板 (如 10101001 含3個1)，旖緁踏右側偶數板 (如 11110000 含4個1)",
    concept: "奇偶校驗是電腦網路傳輸資料時最常用的檢錯機制。透過統計二進位位元中「1」的個數是奇是偶，可判斷資料在傳輸過程中是否被干擾或損壞！"
  },
  {
    chapter: 8,
    title: "齒輪傳動比計算 (Gear Ratio)",
    cipher: "主動輪 Z1=24，中間惰輪 Z2=16，從動輪 Z3=36，求傳動比 i",
    decoded: "i = Z3 / Z1 = 36 / 24 = 3 / 2 (旋鈕 A=3, 旋鈕 B=2)",
    concept: "齒輪傳動是機械工程的核心。惰輪只改變旋轉方向，不改變總速比！總傳動比等於從動輪齒數除以主動輪齒數，化簡為最簡整數比 3:2。"
  },
  {
    chapter: 9,
    title: "並聯電路分流定律與生物阻抗",
    cipher: "高壓雷池中並聯超導臂鎧 (R≈0Ω) 與人體生物電阻 (R≈1500Ω)",
    decoded: "I1 : I2 = R2 : R1，99.99% 致命高壓電流順著皮可超導體導入地心",
    concept: "歐姆定律與並聯分流定理：電流永遠傾向走阻力最小的路徑！透過常溫超導體的低阻特性，安全避開致命電流，同時滿足了系統對人體電阻的檢測要求。"
  },
  {
    chapter: 10,
    title: "哲理與心靈抉擇：接納不完美的勇氣",
    cipher: "【是否抹除恐懼與痛苦記憶？YES or NO？】",
    decoded: "堅決選擇 YES (恢復全部記憶)",
    concept: "成長不是逃避傷痛，而是在接納真實的過程中學會堅強與守護。真誠的面對，遠比虛假的平靜更加寶貴。"
  }
];

const chapters = files.map((file, idx) => {
  const content = fs.readFileSync(path.join(chaptersDir, file), 'utf8');
  const lines = content.split('\n');
  const title = chapterTitles[idx] || file;
  
  return {
    id: idx + 1,
    file: file,
    title: `第${idx + 1}章：${title}`,
    shortTitle: title,
    wordCount: content.replace(/\s+/g, '').length,
    readTimeMin: Math.ceil(content.replace(/\s+/g, '').length / 400),
    puzzle: puzzleData[idx] || null,
    rawContent: content
  };
});

const characters = [
  {
    name: "誠浩",
    enName: "Cheng Hao",
    role: "男主角 · 鬼才發明少年",
    age: "12 歲",
    class: "鹿陽國小 六年一班",
    avatar: "🎒",
    badge: "S級非法觀察者",
    desc: "動手能力極強、熱愛拆解與改裝機械。平時成績普通，但在危機中擁有不可思議的冷靜直覺與工程大腦。",
    items: [
      { name: "爺爺的幽靈護目鏡", desc: "可過濾現實光波，透視隱藏代碼、紫色光纜與全息光譜。" },
      { name: "多功能瑞士刀螺絲筆", desc: "彈出導電金屬探針，多次引發關鍵電路短路與避雷接地。" },
      { name: "改裝金屬鉛筆盒", desc: "看似尋常，齒輪軸心內部暗藏「第零天透明單晶矽密鑰」。" }
    ]
  },
  {
    name: "葉旖緁",
    enName: "Ye Yijie",
    role: "女主角 · 邏輯密碼學霸",
    age: "12 歲",
    class: "鹿陽國小 六年一班班長",
    avatar: "👓",
    badge: "邏輯推理中樞",
    desc: "黑色高馬尾、細金屬框眼鏡。記憶力驚人、思維敏銳嚴謹。每天記錄日記，最早從空白筆記本察覺時間異常。",
    items: [
      { name: "黑皮解謎筆記本", desc: "記滿全鎮歷史、杜威索書號、摩斯電碼與布林代數公式。" },
      { name: "破譯鋼筆", desc: "關鍵時刻計算真值表與物理公式的利器。" }
    ]
  },
  {
    name: "皮可",
    enName: "Pico",
    role: "核心機械寵物夥伴",
    age: "型號：PICO-001",
    class: "誠爺爺的心血傑作",
    avatar: "🐕",
    badge: "常溫超導記憶合金體",
    desc: "平時是銀色金屬摺紙柴犬，擁有幽藍色微型鏡頭眼與光譜嗅覺。激動時用尾巴敲擊摩斯電碼，忠誠護主。",
    forms: [
      { name: "柴犬型態", desc: "高速奔跑、光譜感測與通訊中繼。" },
      { name: "魔術方塊模式", desc: "遇險時一秒收縮成巴掌大六面體，方便收納攜帶。" },
      { name: "記憶合金防暴盾", desc: "層層翻折展開為高溫耐受盾牌，抵擋電磁死光。" },
      { name: "超導外骨骼臂鎧", desc: "變形包裹誠浩手臂，將數萬伏特高壓安全導入地心。" }
    ]
  },
  {
    name: "邱校長",
    enName: "Principal Qiu",
    role: "鹿陽國小現任校長",
    age: "68 歲",
    class: "掌控全局的幕後守護者",
    avatar: "👔",
    badge: "避難所404共同創始人",
    desc: "戴金邊老花眼鏡，看似嚴肅不茍言笑，實則洞悉全局。三十年前與誠爺爺共同建造地下要塞，暗中一路為孩子們護航。",
    items: [
      { name: "黃銅雙齒輪懷錶", desc: "誠爺爺親贈，刻著「當指針倒流，唯真理不朽」。" },
      { name: "磁暴干擾扳手", desc: "三十年前共同打造的重型防衛工具，一人擊退夜巡部隊。" }
    ]
  },
  {
    name: "高老師",
    enName: "Teacher Gao",
    role: "六年一班班導師",
    age: "35 歲",
    class: "深受愛戴的啟蒙導師",
    avatar: "📘",
    badge: "探索精神傳承者",
    desc: "溫柔儒雅、耐心引導學生。在星期三試圖阻止格式化而遭冷卻休眠，被病毒生成鏡像假身，大結局平安獲救。",
    items: [
      { name: "紅繩黃銅指南針", desc: "少年探索社的象徵徽記，代表「解題不是為了滿分，而是為了尋找真實」。" }
    ]
  },
  {
    name: "將江",
    enName: "Jiang Jiang",
    role: "誠浩的同桌死黨",
    age: "12 歲",
    class: "鹿陽國小 六年一班",
    avatar: "🥐",
    badge: "菠蘿麵包守護者",
    desc: "留平頭、身材微胖、神經大條，但極講義氣。差點喝下記憶牛奶被誠浩救下，大結局買了熱騰騰的菠蘿麵包上鐘樓分享。",
    items: [
      { name: "熱騰騰的菠蘿麵包", desc: "代表校園純真日常與不可割捨的友情。" }
    ]
  }
];

const badges = [
  { id: 1, name: "初入鹿陽", icon: "🏫", desc: "閱讀第 1 章：發現被偷走的星期三" },
  { id: 2, name: "喚醒皮可", icon: "🐶", desc: "閱讀第 2 章：解開鉛盒密碼喚醒摺紙犬" },
  { id: 3, name: "書庫巡禮者", icon: "📚", desc: "閱讀第 3 章：破譯圖書館倒懸齒輪機關" },
  { id: 4, name: "邏輯破門者", icon: "⚡", desc: "閱讀第 4 章：利用布林邏輯門癱瘓機器人群" },
  { id: 5, name: "時空旁觀者", icon: "🎞️", desc: "閱讀第 5 章：重現星期三全息記憶投影" },
  { id: 6, name: "光學領航員", icon: "🔦", desc: "閱讀第 6 章：穿過幽靈走廊激光迷陣" },
  { id: 7, name: "鏡像識破者", icon: "🪞", desc: "閱讀第 7 章：識破虛擬假象，飛躍奇偶橋" },
  { id: 8, name: "齒輪傳承人", icon: "⚙️", desc: "閱讀第 8 章：計算傳動比插入第零天密鑰" },
  { id: 9, name: "逆轉雷霆", icon: "⚡", desc: "閱讀第 9 章：超導並聯接地，逮捕真兇" },
  { id: 10, name: "記憶守護神", icon: "🌟", desc: "閱讀第 10 章大結局：重啟真實的星期三世界！" }
];

const books = [
  {
    id: "book-1",
    title: "記憶黑客少年：校園地下 404 室",
    subtitle: "第一卷 · 全十章完結",
    status: "已完結",
    statusColor: "emerald",
    coverTag: "科幻 × 校園冒險 × 密室解謎",
    author: "鹿陽故事工坊",
    targetAge: "9～13 歲（國小中高年級至國一）",
    totalWords: chapters.reduce((acc, c) => acc + c.wordCount, 0),
    totalChapters: chapters.length,
    description: "某個看似平靜的早晨，鹿陽國小全校師生的記憶被神秘地跳過了整整二十四個小時——「星期三」不翼而飛！發明少年誠浩戴上爺爺留下的黃銅護目鏡，赫然看見空氣中漂浮的報錯代碼與地下深處的巨大數據電纜。攜手學霸班長葉旖緁與神奇的變形機械摺紙犬皮可，一場穿梭於校園鐘樓、圖書館地底與鋼鐵兵工廠的硬核解謎大冒險就此展開！",
    chapters: chapters
  },
  {
    id: "book-2",
    title: "千島齒輪海的迷失燈塔",
    subtitle: "第二卷 · 即將啟航",
    status: "籌備中",
    statusColor: "amber",
    coverTag: "海事冒險 × 深海機械 × 家族密鑰",
    author: "鹿陽故事工坊",
    targetAge: "9～13 歲",
    totalWords: 0,
    totalChapters: "預計 12 章",
    description: "誠浩在護目鏡深處發現了爺爺留下的神秘手寫信：『若想探尋世界的下一個終極密鑰……我在千島齒輪海等你。』帶著皮可與新裝備，少年偵探團即將啟程前往漂浮著無數發條浮島、古代蒸氣燈塔與深海機械巨獸的神秘海域，解開誠爺爺當年不辭而別的真正身世！",
    chapters: []
  },
  {
    id: "book-3",
    title: "星穹鐘樓的第十二個音符",
    subtitle: "第三卷 · 概念企劃",
    status: "敬請期待",
    statusColor: "indigo",
    coverTag: "太空天文 × 聲學頻率 × 星際時鐘",
    author: "鹿陽故事工坊",
    targetAge: "9～13 歲",
    totalWords: 0,
    totalChapters: "策劃中",
    description: "當齒輪鎮的大鐘樓在午夜敲響第十二聲時，天空中出現了由流星編織成的神秘五線譜。來自外太空深處的古代信標正在呼喚地球上的記憶守護者們……",
    chapters: []
  }
];

const jsContent = `/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 核心書籍資料與世界觀檔案庫
 * 自動由建置腳本生成，可無縫擴充
 */
window.GEAR_NOVELS_DATA = {
  appName: "冒險齒輪 · 少兒科幻小說庫",
  appEnName: "GearNovel Online",
  version: "1.0.0",
  books: ${JSON.stringify(books, null, 2)},
  characters: ${JSON.stringify(characters, null, 2)},
  badges: ${JSON.stringify(badges, null, 2)}
};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'data', 'books.js'), jsContent, 'utf8');
console.log(`Successfully generated js/data/books.js with ${chapters.length} chapters and ${characters.length} characters!`);
