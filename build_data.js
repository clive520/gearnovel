const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, 'chapters');
const files = fs.readdirSync(chaptersDir)
  .filter(f => f.endsWith('.md') && !f.endsWith('_en.md'))
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
  "點亮永恆之光",
  "萬米高空的下墜訊號",
  "奔向平流層的熱氣球飛艦",
  "雲海中的天穹翼龍機群",
  "法拉第籠與雷暴迷宮",
  "登陸浮空城「奧秘之翼」！",
  "失控的無重力走廊",
  "懸空千米的行星齒輪天梯",
  "被吞噬的第十二個音符",
  "暗物質黑晶的湮滅決戰",
  "敲響第十二個音符，天穹破曉！"
];

const chapterTitlesEn = [
  "The Stolen Twenty-Four Hours",
  "The Morse-Code Metal Cube",
  "The Inverted Gears in the Library",
  "The Rogue Janitor Android Swarm",
  "The Memory Fragment Projector",
  "The Ghost Corridor of Code 404",
  "The Mirror Dilemma of the Dual Mentors",
  "The Clockwork Heart Behind the Hologram",
  "Ten Minutes to Full Format",
  "Rebooting the Wednesday World",
  "Setting Sail Toward the Horizon",
  "The Tempest Girl of Sea-Breeze Island",
  "The Clockwork Pirate Ship of the Iron Anchor Gang",
  "Maritime Flags and the Buoy Signal Labyrinth",
  "PICO's High-Speed Hydrofoil Wavebreaker",
  "The Underwater Maze in the Gear Vortex",
  "Superior Mirages and the Holographic Course",
  "Sonar Resonance and the Bioluminescent Swarm",
  "Boarding the Lost Lighthouse!",
  "The Old Keeper's Thirty-Year Vow",
  "The Ultimate Defense Gate of the Abyssal Rift",
  "Kindling the Light of Eternity",
  "The Falling Signal from 30,000 Feet",
  "The Stratospheric Airship Ascent",
  "The Aether Pterosaurs in the Cloud Sea",
  "The Faraday Cage and the Thundercloud Maze",
  "Landing on the Floating City of Aether",
  "The Runaway Zero-G Corridor",
  "The Suspended Planetary Gear Stairway",
  "The Devoured Twelfth Note",
  "The Annihilation Battle Against the Black Crystals",
  "Striking the Twelfth Note, Dawn Over the Firmament!"
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
  },
  {
    chapter: 18,
    title: "聲學駐波懸浮與五度相生律和弦共振",
    cipher: "管長 L1=4m, L2=3m, L3=2.67m, L4=2m，求基頻比 f1:f2:f3:f4 ＝ 6:8:9:12",
    decoded: "奏響天琴純五度和弦 (Do - Fa - Sol - High Do)，抵消聲學懸浮駐波安全取下星盤，引導夜光機械水母電漿反擊",
    concept: "聲學駐波懸浮（Acoustic Levitation）與畢達哥拉斯五度相生律（Pythagorean Tuning）。利用管風琴管長與振動頻率的嚴格反比法則奏響和弦，平息古代自律水母群並癱瘓黑潮盾構鑽艇！"
  },
  {
    chapter: 19,
    title: "薄透鏡成像公式與菲涅耳共焦準直聚焦",
    cipher: "主凸透鏡 f1 = +6.0m，副凹透鏡 f2 = -2.0m，求共焦無窮遠準直間距 d ＝ f1 + f2 與位移圈數",
    decoded: "共焦間距 d = 6.0 + (-2.0) = 4.0m，手輪旋轉 3 整圈激發手腕粗細直貫地心的超級平行相干激光束",
    concept: "幾何光學透鏡成像公式（Thin Lens Equation）與複合透鏡共焦準直（Confocal Collimation）。利用正負焦距相加定理消除光束發散角，將散射光斑壓縮為超強平行激光，直穿三千公尺地殼開啟升降機！"
  },
  {
    chapter: 20,
    title: "正七邊形質數步長模運算與諧波阻尼消減",
    cipher: "正七邊形地震針陣列，跳步步長 s = 2，狀態轉移方程 k_next = (k_curr + 2) mod 7",
    decoded: "消減序列：1 ➡️ 3 ➡️ 5 ➡️ 7 ➡️ 2 ➡️ 4 ➡️ 6，打破相鄰拍頻共振，平穩降解地熱過載",
    concept: "離散數學模運算（Modular Arithmetic）與拓撲諧波消減（Harmonic Damping）。利用正多邊形質數跳步循環打破相鄰地質共振拍頻，在不引發減壓暴湧的前提下安全熄滅地熱地震針！"
  },
  {
    chapter: 21,
    title: "行星差速齒輪系與動態平衡平抑",
    cipher: "行星輪系 Z_s = 20, Z_p = 15, Z_r = 50，鎖死行星架 ω_c = 0，求差速轉速比 ω_s / ω_r",
    decoded: "Willis 方程 ω_s / ω_r = -Z_r / Z_s = -50/20 = -2.5 (反向 5 : 2)，平抑數十萬牛頓·米扭矩熄滅最後地震針",
    concept: "機械動力學行星齒輪系（Planetary Gear Train）與 Willis 轉速特性方程。利用鎖死行星架產生反向 2.5 倍速差速自平衡，降解極限過載扭矩，並以洛倫茲強磁斥力偏轉兩千度等離子電漿！"
  },
  {
    chapter: 22,
    title: "光柵繞射方程式與菲涅耳色散角校準",
    cipher: "光柵狹縫常數 d = 2000 nm，恆光波長 λ = 589 nm，一階繞射 m = 1，求精確色散偏轉角 θ",
    decoded: "sin(θ) = (1 * 589) / 2000 = 0.2945 => θ = arcsin(0.2945) ≈ 17.1°，鎖定 17.1° 注入恆光光子點亮永恆之塔",
    concept: "物理光學光柵繞射方程式（Diffraction Grating Equation）與光譜色散。利用精密的繞射角計算使光子產生相干建設性干涉，引燃直徑十公尺的菲涅耳永恆巨鏡，照亮整片千島齒輪海！"
  },
  {
    chapter: 23,
    title: "平流層氣壓高度計大氣物理方程",
    cipher: "h = - (RT / Mg) * ln(P_curr / P0) = - 6438 * ln(0.2609)",
    decoded: "h ≈ 8,650 公尺（墜落高度警報）",
    concept: "等溫大氣壓強高度公式（Barometric Formula）！大氣壓強隨著海拔升高呈指數型遞減。透過精密氣壓計比對標準海平面氣壓，即可反推當前絕對飛行高度。"
  },
  {
    chapter: 24,
    title: "理想氣體狀態方程與雙層熱氣球浮力",
    cipher: "V_min = m_total / (ρ_air - ρ_gas) = 45,000 / 0.900",
    decoded: "V = 50,000 立方公尺（加熱至 116.85°C）",
    concept: "理想氣體狀態方程 PV = nRT 與阿基米德浮力定律！加熱氣囊內氣體降低密度，當排開外界冷空氣的浮力大於全艦 45 噸總重時，產生垂直向上的淨爬升加速度！"
  },
  {
    chapter: 25,
    title: "伯努利流體力學與臨界失速攻角",
    cipher: "α_total = α0 + arctan(w / u) = 5° + 26.57° = 31.57° >> 16.5°",
    decoded: "深度失速（Deep Stall），升力雪崩 90%",
    concept: "伯努利原理與機翼氣動升力！當氣流衝擊機翼的迎角（攻角）超過臨界失速角 16.5° 時，上翼面邊界層氣流全面剝離，升力歸零，使機械翼龍瞬間陷入螺旋下墜！"
  },
  {
    chapter: 26,
    title: "靜電屏蔽與法拉第籠高斯定律",
    cipher: "∮ E · dA = Q / ε0 ➡️ E_inside ≡ 0 (百萬伏特雷擊表面趨膚效應)",
    decoded: "黑鐵平底鍋高導電閉合，法拉第籠完全等勢！",
    concept: "高斯靜電定律與法拉第籠（Faraday Cage）！金屬導體空腔外表面能完美阻絕外來數十萬安培雷擊，使內部電場強度處處為零，保護人員與鍋爐免受雷擊傷害！"
  },
  {
    chapter: 27,
    title: "旋轉參考系人造重力與科氏力著陸補償",
    cipher: "a_coriolis = 2 * (v_r * ω) = 2 * 15 * 0.05 = 1.5 m/s²",
    decoded: "反向橫推 1.5 m/s²，切向速度 125 m/s 零相對速度咬合",
    concept: "旋轉參考系中的離心力與科氏力（Coriolis Effect）！在以角速度 ω 旋轉的浮空城甲板著陸時，徑向運動會產生橫向偏折，必須施加反向向量推力才能精確平穩對接！"
  },
  {
    chapter: 28,
    title: "無重力走廊動量守恆與反衝火箭推力",
    cipher: "0 = M_body * v_recoil - m_gas * v_eject ➡️ (1.5 * 2000) / 200",
    decoded: "v = 15.0 m/s（十二秒極限穿越無重力區）",
    concept: "動量守恆定律（Conservation of Momentum）！在沒有重力與摩擦力的絕對漂浮環境中，向後高速噴射氣體所產生的反作用力，能將物體精確加速至預定目標航速！"
  },
  {
    chapter: 29,
    title: "開普勒第三定律與行星天梯軌道共振",
    cipher: "T² / a³ = K ➡️ 水星(8s) / 地球(64s) / 木星(216s)",
    decoded: "t_align = 432 秒同相週期，18 秒倒數 5 秒黃金光橋",
    concept: "開普勒行星運動第三定律（Kepler's Third Law）！行星軌道公轉週期的平方與軌道半長軸的立方成正比。計算多層行星齒輪盤的角速度差，即可求解光橋同相重合週期！"
  },
  {
    chapter: 30,
    title: "十二平均律頻率公式與純律泛音共振",
    cipher: "f12 = 261.63 * 2^(11/12) = 493.88 Hz (B4 音)",
    decoded: "三階純律泛音(493.88 / 987.76 / 1481.64 Hz)超聲空化粉碎黑晶",
    concept: "十二平均律（Twelve-Tone Equal Temperament）與諧波共鳴！相鄰半音頻率比為 2 的 12 次方根（約 1.05946）。疊加三道諧波產生 180 dB 超聲空化微射流，瓦解暗物質晶格！"
  },
  {
    chapter: 31,
    title: "相對論多普勒效應與反相波完全破壞性干涉",
    cipher: "f_dyn = 1200 * (297.3 / (297.3 - 20)) = 1,286.6 Hz (相位翻轉 180°)",
    decoded: "y_total = A*sin(ωt) - A*sin(ωt) = 0（分子鍵共振振幅歸零）",
    concept: "多普勒效應（Doppler Effect）與波的干涉！高速迎面逼近的波源會使接收頻率升高。發射頻率嚴格吻合且相位反轉 180 度的反相激光，可達成完全破壞性干涉消解目標！"
  },
  {
    chapter: 32,
    title: "十二平均律引力球面駐波與全球發條閉環",
    cipher: "Ψ(r, θ, φ, t) = Σ [ A_n * Y_n^m * j_n * cos(2π f_n t) ] ≡ 0 Phase Offset",
    decoded: "正午十二點整毫秒級雙槌合擊，激發 100,000 kN 升力平流層飛升！",
    concept: "球面調和函數與引力駐波共振！十二支黃金音叉在天心正交時刻同時激發十二平均律基頻，使地球板塊與天穹引力達到自平衡閉環，逆轉下墜重啟萬米浮空城！"
  }
];

const allChapters = files.map((file, idx) => {
  const content = fs.readFileSync(path.join(chaptersDir, file), 'utf8');
  const title = chapterTitles[idx] || file;
  const chapNum = idx + 1;
  
  // 檢測是否存在對應之英文譯本
  const enFileName = file.replace('.md', '_en.md');
  const enPath = path.join(chaptersDir, enFileName);
  let rawContentEn = null;
  let enTitle = null;

  if (fs.existsSync(enPath)) {
    rawContentEn = fs.readFileSync(enPath, 'utf8');
    const titleEn = chapterTitlesEn[idx] || title;
    enTitle = `Chapter ${chapNum}: ${titleEn}`;
  }
  
  return {
    id: chapNum,
    file: file,
    title: `第${chapNum}章：${title}`,
    enTitle: enTitle,
    shortTitle: title,
    wordCount: content.replace(/\s+/g, '').length,
    readTimeMin: Math.ceil(content.replace(/\s+/g, '').length / 400),
    puzzle: puzzleData[idx] || null,
    rawContent: content,
    rawContentEn: rawContentEn
  };
});

const book1Chapters = allChapters.filter(c => c.id <= 10);
const book2Chapters = allChapters.filter(c => c.id > 10 && c.id <= 22).map((c, idx) => ({
  ...c,
  volChapterNum: idx + 1,
  title: `第${c.id}章（二卷${idx + 1}）：${c.shortTitle}`
}));
const book3Chapters = allChapters.filter(c => c.id > 22).map((c, idx) => ({
  ...c,
  volChapterNum: idx + 1,
  title: `第${c.id}章（三卷${idx + 1}）：${c.shortTitle}`
}));

const characters = [
  {
    name: "誠浩",
    enName: "Cheng Hao",
    vol: "core",
    volName: "全三卷核心主角",
    role: "男主角 · 鬼才發明少年",
    age: "12 歲",
    class: "鹿陽國小 六年一班",
    avatar: "🎒",
    badge: "S級非法觀察者 / 青木齒輪號船長 / 天穹鐘樓修復者",
    desc: "動手能力極強、熱愛拆解與改裝機械。從校園地底 404 室，到千島齒輪海，再到萬米平流層，始終帶著螺絲筆與護目鏡衝鋒陷陣。第三卷為青木齒輪號加裝雙層浮力氣囊與等離子反推，並親手敲響第十二個音符拯救天穹之城。",
    items: [
      { name: "爺爺的幽靈護目鏡（三界旗艦版）", desc: "過濾海面偏振光、透視洋流電纜，升級增設平流層都卜勒頻移與光譜分析模式。" },
      { name: "多功能瑞士刀螺絲筆", desc: "耐高水壓、防電磁干擾、具備高空等離子弧焊與微雕修復功能。" },
      { name: "青木齒輪號舵輪", desc: "三十年前爺爺造的蒸氣外輪船，經誠浩改裝具備海空兩棲航行能力。" },
      { name: "日冕光子核心調諧器", desc: "第三卷中傳承塞西莉亞家族聖物，以相干激光擊碎黑晶巨獸。" }
    ]
  },
  {
    name: "葉旖緁",
    enName: "Ye Yijie",
    vol: "core",
    volName: "全三卷核心主角",
    role: "女主角 · 邏輯密碼學霸",
    age: "12 歲",
    class: "鹿陽國小 六年一班班長",
    avatar: "👓",
    badge: "首席航海領航員 / 天體力學精算師",
    desc: "高馬尾綁天藍吸汗帶，鈦合金眼鏡架。大腦如超級電腦般高速運轉，精通摩斯密碼、布林邏輯、海事旗語、開普勒第三定律與十二平均律頻率公式。是整個冒險隊不可或缺的智慧核心。",
    items: [
      { name: "防水黑皮筆記本（全三卷典藏版）", desc: "記滿洋流流速、大氣壓強標高方程、開普勒軌道週期與十二平均律共振頻率矩陣。" },
      { name: "航海六分儀與天文星軌儀", desc: "傳統光學測量與現代天文幾何結合，測算經緯度與行星軌道窗口。" }
    ]
  },
  {
    name: "皮可",
    enName: "Pico",
    vol: "core",
    volName: "全三卷核心同伴",
    role: "核心機械夥伴 · 三棲超導守護者",
    age: "型號：PICO-001",
    class: "誠遠山的心血傑作",
    avatar: "🐕",
    badge: "常溫超導陸海空三棲合金體",
    desc: "由常溫超導記憶合金打造的機械摺紙犬。第三卷在平流層萬米高空迎戰機械翼龍機群，徹底解鎖第五變形型態「天穹超音速飛隼」，衝破音障穿透萬伏特雷暴迷宮！",
    forms: [
      { name: "柴犬型態", desc: "高速奔跑、光譜感測、嗅覺頻譜分析與無線通訊中繼。" },
      { name: "水下渦輪推進器", desc: "尾巴化為雙聯螺旋槳，在深海高速拖曳潛行。" },
      { name: "水翼衝浪滑板", desc: "四肢展開一米寬合金翼板，帶誠浩海面破浪滑行。" },
      { name: "魔術方塊與防暴盾", desc: "秒速收縮攜帶，展開抵禦電磁死光、等離子高溫與雷暴電弧。" },
      { name: "天穹超音速飛隼型態（卷三解鎖）", desc: "展開兩米氣動後掠翼與等離子噴氣渦輪，突破音障引導翼龍機群並穿越平流層雷暴！" }
    ]
  },
  {
    name: "將江",
    enName: "Jiang Jiang",
    vol: "core",
    volName: "全三卷核心主角",
    role: "同桌死黨 · 陸海空首席後勤大廚",
    age: "12 歲",
    class: "鹿陽國小 六年一班",
    avatar: "🥐",
    badge: "菠蘿麵包守護神 / 萬伏特避雷英雄",
    desc: "拖著迷彩巨型保溫箱的大胃王，脖掛巨型雙筒望遠鏡。自稱「沒有我你們在天上地下餓死怎麼辦」。在第三卷第二十六章，以心愛的黑鐵平底鍋上演萬伏特雷暴極限均壓接地，奇蹟保全整艘戰艦！",
    items: [
      { name: "黑鐵多功能平底鍋（法拉第接地聖物）", desc: "煎菠蘿麵包，更能充當萬伏特雷暴的高導電率均壓接地電極！" },
      { name: "迷彩高空保溫箱", desc: "源源不絕的能量補給站，裝有上百個特製高空凍乾菠蘿麵包。" }
    ]
  },
  {
    name: "塞西莉亞",
    enName: "Cecilia (Silver-Wing)",
    vol: "vol3",
    volName: "第三卷核心新角色",
    role: "第三卷女主角 · 天穹銀翼巡天少女",
    age: "12 歲",
    class: "天穹浮空城「奧秘之翼」第七代巡天機械師",
    avatar: "🪽",
    badge: "平流層天穹領航員 / 奧秘之翼守望者",
    desc: "金髮碧眼、身穿銀白耐低溫飛行服，代號「銀翼」。性格冷靜敏銳、飛行技術出神入化。孤身在萬米平流層守護搖搖欲墜的浮空城十六個小時，與誠浩並肩敲響第十二個音符，迎來天穹破曉。",
    items: [
      { name: "超導記憶合金滑翔翼", desc: "翼展兩米，可秒速收折於背甲，具備超音速滑翔與偏流操控能力。" },
      { name: "古代天文星軌儀", desc: "整合多普勒光學測距與星圖幾何測算的神器。" },
      { name: "第十二音符黃金音叉調諧器", desc: "傳承自古代天穹工程師的調音聖物，精確鎖定 B4 基頻 493.88 Hz。" }
    ]
  },
  {
    name: "雷格艦長",
    enName: "Captain Reg",
    vol: "vol3",
    volName: "第三卷敵對指揮官",
    role: "黑潮空天艦隊司令官 · 空天巡洋艦艦長",
    age: "42 歲",
    class: "黑潮重工平流層突擊艦隊指揮官",
    avatar: "🛸",
    badge: "暗夜黑潮號最高指揮",
    desc: "沈天成幕後財閥指派的空天戰艦司令官。率領「暗夜黑潮號」與「深淵獵鷹號」封鎖平流層，企圖強拆掠奪天穹浮空城的「引力反轉發條核心」。性格傲慢殘酷，因高溫開火意外激化黑晶巨獸。",
    items: [
      { name: "空天巡洋艦「暗夜黑潮號」", desc: "百米長吸波匿蹤戰艦，裝備等離子能量主砲與空天突擊機甲。" },
      { name: "高壓等離子指揮手槍", desc: "發射數萬度高溫束，意外誘發暗物質黑晶超限增殖。" }
    ]
  },
  {
    name: "暗物質黑晶巨獸",
    enName: "Dark Matter Resonance Titan",
    vol: "vol3",
    volName: "第三卷終極災厄",
    role: "第三卷終極異變災厄 · 深空暗物質共振實體",
    age: "深空未知彗星碎片",
    class: "天穹浮空城星穹鐘樓寄生異物",
    avatar: "🔮",
    badge: "引力常數侵蝕者",
    desc: "來自深空的吸光黑晶碎片，砸中星穹鐘樓吞噬第十二個音符。吸收等離子能量後增殖為十五公尺高的晶體巨獸，具有動態都卜勒頻移與引力波畸變能力，唯有 180° 反相激光方可相干消解。",
    items: [
      { name: "高能吸光晶格巨爪", desc: "由高密度暗物質結晶構成，一擊將鋼鐵機甲砸碎。" },
      { name: "動態都卜勒共振晶核 (1200Hz ~ 1286.6Hz)", desc: "動態調整自身分子頻率，試圖避開物理共振攻擊。" }
    ]
  },
  {
    name: "嵐",
    enName: "Lan",
    vol: "vol2",
    volName: "第二卷核心新角色",
    role: "第二卷女主角 · 海風島暴風舵手",
    age: "12 歲",
    class: "千島齒輪海原住民女孩",
    avatar: "⛵",
    badge: "海鷗號船長 / 千島之風",
    desc: "小麥色皮膚、俐落短髮，戴插著海鷗羽毛的草帽。熱血豪爽，對洋流與風向有野性般的直覺，駕駛自製的蒸氣滑行艇海鷗號。",
    items: [
      { name: "蒸氣滑行艇「海鷗號」", desc: "時速達五十浬的高速雙體滑行艇，靈巧無比。" },
      { name: "合金折疊雙刃船槳", desc: "可划水、可當撐桿跳高、槳柄暗藏微型煙霧彈。" }
    ]
  },
  {
    name: "巴克船長",
    enName: "Captain Buck",
    vol: "vol2",
    volName: "第二卷主要角色",
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
    name: "沈天成",
    enName: "Shen Tiancheng",
    vol: "vol2",
    volName: "第二卷敵對霸主",
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
    vol: "vol2",
    volName: "第二卷傳奇前輩",
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
  },
  {
    name: "誠遠山",
    enName: "Grandpa Cheng (Yuan Shan)",
    vol: "core",
    volName: "全系列核心宗師",
    role: "誠浩的爺爺 · 三十年守燈人誓約締造者",
    age: "68 歲",
    class: "地殼發條大陣傳奇守護者",
    avatar: "👴",
    badge: "三界發條大陣總設計師",
    desc: "滿頭銀髮、目光慈愛而堅毅。三十年前與邱校長、老莫里斯立下守望誓約，孤身深入三千米地心用發條大陣穩定板塊。第三卷重登青木齒輪號親自掌舵衝向萬米平流層，見證孫子超越自己。",
    items: [
      { name: "初代光學護目鏡", desc: "鏡片上刻滿微雕機械代碼的傳奇原型機。" },
      { name: "黃銅雙齒輪懷錶", desc: "與邱校長同款，見證三十年未變的守護誓約。" }
    ]
  },
  {
    name: "邱校長",
    enName: "Principal Qiu",
    vol: "vol1",
    volName: "第一卷核心前輩",
    role: "鹿陽國小現任校長 · 幕後守護者",
    age: "68 歲",
    class: "避難所404共同創始人",
    avatar: "👔",
    badge: "鹿陽鎮秩序守護神",
    desc: "親自將三十年前自己與誠爺爺建造的「青木齒輪號」託付給孩子們，在陸地坐鎮守護齒輪鎮。",
    items: [
      { name: "黃銅雙齒輪懷錶", desc: "刻著「當指針倒流，唯真理不朽」。" }
    ]
  },
  {
    name: "高老師",
    enName: "Teacher Gao",
    vol: "vol1",
    volName: "第一卷啟蒙導師",
    role: "六年一班班導師",
    age: "35 歲",
    class: "深受愛戴的啟蒙導師",
    avatar: "📘",
    badge: "探索精神傳承者",
    desc: "大結局平安獲救，在碼頭送別時將三十年前的「千島洋流手冊」親手交給旖緁。",
    items: [
      { name: "原始海圖手冊", desc: "記錄著三十年前千島海域奇異發條洋流的秘密筆記。" }
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
  { id: 17, name: "幻鏡識破者", icon: "🪞", desc: "閱讀第 17 章：破解布魯斯特角，撕破上蜃景全息迷陣！" },
  { id: 18, name: "星海樂章", icon: "🎵", desc: "閱讀第 18 章：奏響天琴純律和弦，引導夜光水母電漿雷霆！" },
  { id: 19, name: "共焦追光者", icon: "🔦", desc: "閱讀第 19 章：精確校準菲涅耳水晶透鏡，激發直貫地心神聖光束！" },
  { id: 20, name: "地心守護者", icon: "🔥", desc: "閱讀第 20 章：祖孫三十年深海重逢，破譯七芒星模運算阻尼矩陣！" },
  { id: 21, name: "差速平抑宗師", icon: "⚙️", desc: "閱讀第 21 章：洛倫茲超導護盾硬抗電漿，行星差速自平衡拯救地心！" },
  { id: 22, name: "永恆點燈人", icon: "🌟", desc: "閱讀第 22 章大結局：三神具合體，點亮千島齒輪海的永恆之光！" },
  { id: 23, name: "平流層信標", icon: "📡", desc: "閱讀第 23 章：解碼氣壓高度計，捕獲萬米高空下墜求救訊號！" },
  { id: 24, name: "天穹破空者", icon: "🎈", desc: "閱讀第 24 章：計算理想氣體浮力，駕駛熱氣球飛艦直衝對流層！" },
  { id: 25, name: "失速獵鷹", icon: "🦅", desc: "閱讀第 25 章：運用伯努利攻角失速，超導音爆瓦解天穹翼龍群！" },
  { id: 26, name: "雷霆避難所", icon: "⚡", desc: "閱讀第 26 章：黑鐵平底鍋終極接地，法拉第籠抗擊百萬伏特雷擊！" },
  { id: 27, name: "科氏領航官", icon: "🪽", desc: "閱讀第 27 章：補償旋轉科氏力偏轉，零相對速度登陸天穹浮空城！" },
  { id: 28, name: "零重力衝浪手", icon: "🚀", desc: "閱讀第 28 章：動量守恆平底鍋噴氣，穿透失控無重力發條走廊！" },
  { id: 29, name: "天體漫步者", icon: "🪐", desc: "閱讀第 29 章：破譯開普勒第三定律，飛躍千米懸空行星天梯！" },
  { id: 30, name: "十二律解密人", icon: "🎵", desc: "閱讀第 30 章：三神具共奏純律和弦，超聲空化拯救第十二黃金音叉！" },
  { id: 31, name: "湮滅審判官", icon: "⚔️", desc: "閱讀第 31 章：多普勒反相干涉激光，徹底消解暗物質黑晶巨獸！" },
  { id: 32, name: "天穹破曉之神", icon: "🌟", desc: "閱讀第 32 章大結局：雙槌合擊正午十二點，引力反轉重啟天穹之城！" }
];

const books = [
  {
    id: "book-1",
    title: "記憶黑客少年：校園地下 404 室",
    enTitle: "Memory Hacker: Campus Basement 404",
    subtitle: "第一卷 · 全十章完結",
    enSubtitle: "Volume 1 · Complete (10 Chapters)",
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
    enTitle: "The Lost Lighthouse of the Thousand-Island Gear Sea",
    subtitle: "第二卷 · 全十二章完結",
    enSubtitle: "Volume 2 · Complete (12 Chapters)",
    status: "已完結",
    statusColor: "emerald",
    coverTag: "海事冒險 × 深海機械 × 家族密鑰",
    author: "鹿陽故事工坊",
    targetAge: "9～13 歲",
    totalWords: book2Chapters.reduce((acc, c) => acc + c.wordCount, 0),
    totalChapters: book2Chapters.length,
    description: "誠浩在護目鏡深處發現了爺爺留下的神秘手寫信：『若想探尋世界的下一個終極密鑰……我在千島齒輪海等你。』帶著皮可與新裝備，四人小隊駕駛「青木齒輪號」啟程前往漂浮著發條浮島與古代燈塔的神秘海域，遭遇暴風少女「嵐」與發條海盜「鐵錨幫」，解開誠爺爺當年的航海身世！",
    chapters: book2Chapters
  },
  {
    id: "book-3",
    title: "星穹鐘樓的第十二個音符",
    enTitle: "The Twelfth Note of the Celestial Clock Tower",
    subtitle: "第三卷 · 全十章完結",
    enSubtitle: "Volume 3 · Complete (10 Chapters)",
    status: "已完結",
    statusColor: "emerald",
    coverTag: "太空天文 × 天體力學 × 聲學頻率 × 浮空城引力危機",
    author: "鹿陽故事工坊",
    targetAge: "9～13 歲",
    totalWords: book3Chapters.reduce((acc, c) => acc + c.wordCount, 0),
    totalChapters: book3Chapters.length,
    description: "當鹿陽國小迎回三十年守燈人誠爺爺的當天，皮可的超導天線意外截獲了來自萬米高空平流層的緊急求救信號——直徑五公里的古代奇蹟「天穹浮空城 · 奧秘之翼」遭到暗物質黑晶侵蝕，星穹鐘樓的第十二黃金音叉失調，整座大陸正以每秒八十米的速度向地表墜落！青木齒輪號加裝熱氣球雙層氣囊拔地而起，穿透萬伏特雷暴與翼龍機群，攜手銀翼少女塞西莉亞，敲響跨越陸海空三界的終極永恆和弦！",
    chapters: book3Chapters
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
console.log(`Successfully generated js/data/books.js! Book 1: ${book1Chapters.length} chs, Book 2: ${book2Chapters.length} chs, Book 3: ${book3Chapters.length} chs, Characters: ${characters.length}`);
