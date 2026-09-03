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
  "重啟星期三的世界",
  "向著海平線啟航",
  "海風島的暴風少女",
  "鐵錨幫的發條海盜船",
  "海事旗語與浮標信號迷陣",
  "皮可的水翼極速破浪",
  "齒輪漩渦中的水下迷宮",
  "海市蜃樓與全息折射航線",
  "聲納共振與夜光機械群",
  "登上迷失燈塔！",
  "老守燈人的三十年約定",
  "深海大裂谷的終極防衛機關",
  "點亮永恆之光"
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
  },
  {
    chapter: 11,
    title: "海事燈質光學信標與真航向角計算",
    cipher: "TC = (第一段秒數 3 × 100) ＋ (第二段次數 3 × 10) ＋ (第三段總秒數 2 × 5) - 50°",
    decoded: "TC = 300 + 30 + 10 - 50 = 290° (西北西方向)",
    concept: "國際航標協會（IALA）海事光學燈質信號。船舶航行於危險暗礁海域時，需依據引航浮標的特定節奏計算真航向角（True Course），配合羅盤引導航向，避開旋轉水下暗礁。"
  },
  {
    chapter: 12,
    title: "力學向量合成與漩渦切線離心逃逸",
    cipher: "F_合 = sqrt(F1^2 + F2^2 + 2*F1*F2*cos(θ))，F1=12節, F2=14節, θ=60°",
    decoded: "F_合 = sqrt(144 + 196 + 168) = sqrt(508) ≈ 22.54 節 > 22 節 (逃生成功！)",
    concept: "流體力學與物理力學向量合成。兩艘不同推力的船舶在遭遇狂暴向心漩渦時，透過精確的六十度夾角纜繩牽引，將合成推力提升至 22.54 節，超越漩渦的 22 節向心吸力，利用離心加速度切線逃逸！"
  },
  {
    chapter: 13,
    title: "超聲波波長與反相破壞性共振干擾",
    cipher: "f = 40 kHz, v = 1500 m/s，波長 λ = v / f ＝ 3.75 cm，反相 180° 干擾",
    decoded: "λ = 1500 / 40000 = 0.0375 m = 3.75 cm (注入反相聲波自毀壓電傳感器)",
    concept: "波動物理學與聲學破壞性干擾（Destructive Interference）。利用超聲波在海水中的波長精確匹配機械鯊魚的聲學共振腔，反相脈衝引發內部多米諾骨牌連鎖短路，全面瓦解敵方集群導航！"
  },
  {
    chapter: 14,
    title: "國際海事信號旗語（ICS）與水閘音頻矩陣",
    cipher: "P(深藍白方) ＋ I(黃底黑圓) ＋ L(黃黑四格) ＋ O(黃紅斜切) ＋ T(紅白藍三色豎條)",
    decoded: "P - I - L - O - T ＝ PILOT (引航員)，音叉音頻共振開啟古代水下重型水閘",
    concept: "國際海事信號旗語（International Code of Signals, ICS）。全球航海領域通用的視覺通訊代碼，每面旗幟代表特定英文字母與標準海事操作指引，串聯拼讀出古代防禦水閘的音頻通關密鑰！"
  },
  {
    chapter: 15,
    title: "流體力學水翼升力公式與攻角極限計算",
    cipher: "L = 1/2 * C_L * ρ * v² * A，W = 7,000 N, A = 1.2 m², C_L = 0.85, ρ = 980 kg/m³",
    decoded: "v ≥ 42 節 (21.6 m/s)，攻角 θ = 18°，產生 7000 N 動態升力克服深淵下拽流拉起囚籠",
    concept: "流體力學水翼升力公式（Hydrofoil Lift）。利用非對稱翼型在高速流體中產生的白努利壓差，在水下高速衝浪中將水平推力瞬間轉化為沖天垂直升力，奇蹟救起下墜的重型囚籠！"
  },
  {
    chapter: 16,
    title: "阿基米德浮力力矩平衡與最小公倍數跳躍",
    cipher: "力臂 L1=1, L2=2, L3=3，求平衡配重比 V1:V2:V3 ＝ 6:3:2，跳躍週期 LCM(12, 8, 6)",
    decoded: "配重比 6 : 3 : 2 (均等 6 單位平衡力矩)，LCM(12, 8, 6) = 24 秒精確共振起跳窗口",
    concept: "槓桿力矩平衡（Torque Equilibrium）與最小公倍數（LCM）。透過反比浮力分配平衡深海 100 ATM 巨型水壓閘門，再利用齒輪轉動週期的最小公倍數捕捉登頂安全窗口！"
  },
  {
    chapter: 17,
    title: "大氣逆溫上蜃景與布魯斯特角偏振過濾",
    cipher: "tan(θ_B) = n_2 / n_1，n_1 = 1.00035, n_2 = 1.00020",
    decoded: "θ_B = arctan(1.00020 / 1.00035) ≈ 45.0°，旋動偏振鏡片至 45° 消除全息反射虛像，鎖定真實 C 號天琴礁島",
    concept: "大氣光學逆溫層折射（Superior Mirage）與布魯斯特完全偏振定律（Brewster's Law）。透過計算兩種空氣折射率下的完全偏振角，利用偏光鏡片消除人造激光全息眩光與海市蜃樓倒影，破譯真實航向！"
  }
];

const allChapters = files.map((file, idx) => {
  const content = fs.readFileSync(path.join(chaptersDir, file), 'utf8');
  const title = chapterTitles[idx] || file;
  const chapNum = idx + 1;
  
  return {
    id: chapNum,
    file: file,
    title: `第${chapNum}章：${title}`,
    shortTitle: title,
    wordCount: content.replace(/\s+/g, '').length,
    readTimeMin: Math.ceil(content.replace(/\s+/g, '').length / 400),
    puzzle: puzzleData[idx] || null,
    rawContent: content
  };
});

const book1Chapters = allChapters.filter(c => c.id <= 10);
const book2Chapters = allChapters.filter(c => c.id > 10).map((c, idx) => ({
  ...c,
  volChapterNum: idx + 1,
  title: `第${c.id}章（二卷${idx + 1}）：${c.shortTitle}`
}));

const characters = [
  {
    name: "誠浩",
    enName: "Cheng Hao",
    role: "男主角 · 鬼才發明少年",
    age: "12 歲",
    class: "鹿陽國小 六年一班",
    avatar: "🎒",
    badge: "S級非法觀察者 / 青木齒輪號船長",
    desc: "動手能力極強、熱愛拆解與改裝機械。第二卷換上防風救生背心出海，為皮可加裝水下渦輪與水翼模組，立志尋找爺爺留下的終極密鑰。",
    items: [
      { name: "爺爺的幽靈護目鏡（海事升級）", desc: "可過濾海面偏振光，透視水下電纜、洋流溫差與隱形海圖代碼。" },
      { name: "多功能瑞士刀螺絲筆", desc: "具備耐水壓電焊與機械快修功能。" },
      { name: "青木齒輪號舵輪", desc: "親手駕馭三十年前爺爺造的蒸氣外輪船。" }
    ]
  },
  {
    name: "葉旖緁",
    enName: "Ye Yijie",
    role: "女主角 · 邏輯密碼學霸",
    age: "12 歲",
    class: "鹿陽國小 六年一班班長",
    avatar: "👓",
    badge: "首席航海領航員",
    desc: "高馬尾綁天藍吸汗帶，眼鏡換上防海水腐蝕鈦合金架。第二卷迅速掌握海事燈光信標、國際信號旗語與星象幾何，是團隊的智慧之眼。",
    items: [
      { name: "防水黑皮筆記本（海事版）", desc: "記滿洋流流速公式、航海六分儀測算法與旗語對照表。" },
      { name: "航海六分儀", desc: "配合星圖精確測算經緯度的傳統航海神器。" }
    ]
  },
  {
    name: "嵐",
    enName: "Lan",
    role: "第二卷新同伴 · 海風島暴風舵手",
    age: "12 歲",
    class: "千島齒輪海原住民女孩",
    avatar: "⛵",
    badge: "海鷗號船長",
    desc: "小麥色皮膚、俐落短髮，戴插著海鷗羽毛的草帽。熱血豪爽，對洋流與風向有野性般的直覺，駕駛自製的蒸氣滑行艇海鷗號。",
    items: [
      { name: "蒸氣滑行艇「海鷗號」", desc: "時速達五十浬的高速雙體滑行艇，靈巧無比。" },
      { name: "合金折疊雙刃船槳", desc: "可划水、可當撐桿跳高、槳柄暗藏微型煙霧彈。" }
    ]
  },
  {
    name: "皮可",
    enName: "Pico",
    role: "核心機械寵物夥伴 · 兩棲守護者",
    age: "型號：PICO-001",
    class: "誠爺爺的心血傑作",
    avatar: "🐕",
    badge: "常溫超導兩棲合金體",
    desc: "獲得誠浩親手加裝的海事外骨骼。尾巴可化為水下超導推進渦輪，四肢可展開為高速水翼衝浪板，腳底配備真空吸盤。",
    forms: [
      { name: "柴犬型態", desc: "高速奔跑、光譜感測與通訊中繼。" },
      { name: "水下渦輪推進器", desc: "尾巴變形為螺旋槳，在水下高速拖曳潛水。" },
      { name: "水翼衝浪滑板", desc: "展開一米寬合金翼板，載誠浩海面破浪滑行！" },
      { name: "魔術方塊與防暴盾", desc: "秒速收縮攜帶，展開抵禦電磁死光與水下暗器。" }
    ]
  },
  {
    name: "巴克船長",
    enName: "Captain Buck",
    role: "鐵錨幫少主 · 臭屁海盜王",
    age: "13 歲",
    class: "發條海盜團領袖",
    avatar: "🏴‍☠️",
    badge: "破浪鐵錨號船長",
    desc: "披著破舊海軍大衣、戴黃銅單眼齒輪鏡片（夜視用）。嘴硬心軟、重情重義，熱愛收集古董齒輪與發條零件，亦敵亦友。",
    items: [
      { name: "破浪鐵錨號", desc: "由三艘舊貨船與廢棄蒸汽火車頭焊接而成的鋼鐵巨艦。" },
      { name: "蒸汽魚叉槍", desc: "能發射高壓抓鉤與牽引鋼纜。" }
    ]
  },
  {
    name: "將江",
    enName: "Jiang Jiang",
    role: "同桌死黨 · 海上首席行政大廚",
    age: "12 歲",
    class: "鹿陽國小 六年一班",
    avatar: "🥐",
    badge: "菠蘿麵包守護神",
    desc: "拖著裝有上百個菠蘿麵包的迷彩大保溫箱出海，脖掛巨型雙筒望遠鏡。自稱「沒有我你們在海上餓死怎麼辦」，團隊的歡樂福星。",
    items: [
      { name: "黑鐵多功能平底鍋", desc: "煎魚做海鮮菠蘿麵包，關鍵時刻能反彈魚雷與子彈！" },
      { name: "迷彩巨型保溫箱", desc: "源源不絕的能量補給站。" }
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
    desc: "親自將三十年前自己與誠爺爺建造的「青木齒輪號」託付給孩子們，在陸地坐鎮守護齒輪鎮。",
    items: [
      { name: "黃銅雙齒輪懷錶", desc: "刻著「當指針倒流，唯真理不朽」。" }
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
    desc: "大結局平安獲救，在碼頭送別時將三十年前的「千島洋流手冊」親手交給旖緁。",
    items: [
      { name: "原始海圖手冊", desc: "記錄著三十年前千島海域奇異發條洋流的秘密筆記。" }
    ]
  },
  {
    name: "沈天成",
    enName: "Shen Tiancheng",
    role: "黑潮重工執行董事長 · 深海野心家",
    age: "45 歲",
    class: "跨國海事科技財閥掌門人",
    avatar: "💼",
    badge: "利維坦零號最高統帥",
    desc: "第一卷落網者沈啟明的親哥哥。身著防壓高級西裝，外表斯文儒雅但手段極其冷酷狠毒。企圖霸佔千島海古代地熱能源與星穹密鑰，親自率領兩百米巨艦封鎖深海。",
    items: [
      { name: "利維坦零號深海巨艦", desc: "長達兩百公尺的核蒸汽深海旗艦，配備重型魚雷與機械巨械。" },
      { name: "純金齒輪懷錶", desc: "象徵對時間與資源的絕對掌控慾。" }
    ]
  },
  {
    name: "老莫里斯",
    enName: "Old Morris",
    role: "迷失燈塔最後守護者 · 傳奇水手",
    age: "65 歲",
    class: "誠遠山三十年前探險船大副",
    avatar: "⚓",
    badge: "深海恆光見證者",
    desc: "白鬍子垂到胸口，穿著油布水手雨衣。三十年前與誠遠山、邱校長一同出海，誓死守護迷失燈塔深處的古代恆光反應堆，將十二面體星象儀託付給誠浩。",
    items: [
      { name: "深海黃銅星象提箱", desc: "保管著誠爺爺留給孫子的十二面體星象儀核心與手寫信。" },
      { name: "油布水手雨衣", desc: "飽經三十年風暴與深海鹽霧洗禮的傳奇裝束。" }
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
  { id: 10, name: "記憶守護神", icon: "🌟", desc: "閱讀第 10 章大結局：重啟真實的星期三世界！" },
  { id: 11, name: "破浪啟航", icon: "⛵", desc: "閱讀第 11 章：破譯光學浮標，駛入千島齒輪海！" },
  { id: 12, name: "離心破浪者", icon: "🌪️", desc: "閱讀第 12 章：破解合力向量，逃出發條大漩渦！" },
  { id: 13, name: "水翼獵手", icon: "🏄‍♂️", desc: "閱讀第 13 章：水翼衝浪極限破浪，擊潰黑潮機械獵鯊群！" },
  { id: 14, name: "旗語引航官", icon: "🚩", desc: "閱讀第 14 章：破譯國際海事旗語，開啟雙霧迷峽深淵之門！" },
  { id: 15, name: "深淵救贖者", icon: "🛟", desc: "閱讀第 15 章：突破地熱下拽流，水翼極限救回老守燈人！" },
  { id: 16, name: "發條攀登者", icon: "⚙️", desc: "閱讀第 16 章：破譯阿基米德浮箱配重比，跨越立體發條迴廊！" },
  { id: 17, name: "幻鏡識破者", icon: "🪞", desc: "閱讀第 17 章：破解布魯斯特角，撕破上蜃景全息迷陣！" }
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
    totalWords: book1Chapters.reduce((acc, c) => acc + c.wordCount, 0),
    totalChapters: book1Chapters.length,
    description: "某個看似平靜的早晨，鹿陽國小全校師生的記憶被神秘地跳過了整整二十四個小時——「星期三」不翼而飛！發明少年誠浩戴上爺爺留下的黃銅護目鏡，赫然看見空氣中漂浮的報錯代碼與地下深處的巨大數據電纜。攜手學霸班長葉旖緁與神奇的變形機械摺紙犬皮可，一場穿梭於校園鐘樓、圖書館地底與鋼鐵兵工廠的硬核解謎大冒險就此展開！",
    chapters: book1Chapters
  },
  {
    id: "book-2",
    title: "千島齒輪海的迷失燈塔",
    subtitle: "第二卷 · 連載熱播中",
    status: "連載中",
    statusColor: "amber",
    coverTag: "海事冒險 × 深海機械 × 家族密鑰",
    author: "鹿陽故事工坊",
    targetAge: "9～13 歲",
    totalWords: book2Chapters.reduce((acc, c) => acc + c.wordCount, 0),
    totalChapters: "共 12 章（第 1 回已上線）",
    description: "誠浩在護目鏡深處發現了爺爺留下的神秘手寫信：『若想探尋世界的下一個終極密鑰……我在千島齒輪海等你。』帶著皮可與新裝備，四人小隊駕駛「青木齒輪號」啟程前往漂浮著發條浮島與古代燈塔的神秘海域，遭遇暴風少女「嵐」與發條海盜「鐵錨幫」，解開誠爺爺當年的航海身世！",
    chapters: book2Chapters
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
  version: "1.1.0",
  books: ${JSON.stringify(books, null, 2)},
  characters: ${JSON.stringify(characters, null, 2)},
  badges: ${JSON.stringify(badges, null, 2)}
};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'data', 'books.js'), jsContent, 'utf8');
console.log(`Successfully generated js/data/books.js! Book 1: ${book1Chapters.length} chs, Book 2: ${book2Chapters.length} chs, Characters: ${characters.length}`);
