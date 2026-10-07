// 冒險齒輪全集 書籍資料庫（精簡版 · 內文按需動態載入）
window.GEAR_NOVELS_DATA = {
  "appName": "冒險齒輪 · 少兒科幻小說庫",
  "appEnName": "GearNovel Online",
  "version": "1.1.0",
  "books": [
    {
      "id": "book-1",
      "title": "記憶黑客少年：校園地下 404 室",
      "enTitle": "Memory Hacker: Campus Basement 404",
      "subtitle": "第一卷 · 全十章完結",
      "enSubtitle": "Volume 1 · Complete (10 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "科幻 × 校園冒險 × 密室解謎",
      "author": "鹿陽故事工坊",
      "targetAge": "9～13 歲（國小中高年級至國一）",
      "totalWords": 43760,
      "totalChapters": 30,
      "description": "某個看似平靜的早晨，鹿陽國小全校師生的記憶被神秘地跳過了整整二十四個小時——「星期三」不翼而飛！發明少年誠浩戴上爺爺留下的黃銅護目鏡，赫然看見空氣中漂浮的報錯代碼與地下深處的巨大數據電纜。攜手學霸班長葉旖緁與神奇的變形機械摺紙犬皮可，一場穿梭於校園鐘樓、圖書館地底與鋼鐵兵工廠的硬核解謎大冒險就此展開！",
      "chapters": [
        {
          "id": 1,
          "file": "01_失竊的二十四小時.md",
          "title": "第1章：失竊的二十四小時",
          "enTitle": "Chapter 1: The Stolen Twenty-Four Hours",
          "shortTitle": "失竊的二十四小時",
          "wordCount": 4749,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 1,
            "title": "A1Z26 字母代換密碼",
            "cipher": "04-15-14-20 / 04-18-09-14-11 / 13-09-12-11",
            "decoded": "DONT DRINK MILK (不要喝牛奶)",
            "concept": "最基礎也最經典的密碼學入門！將英文26個字母按照順序標上 1 到 26，例如 A=1, B=2, C=3... Z=26。破解時只需對照字母序號即可還原明文。"
          }
        },
        {
          "id": 2,
          "file": "02_會打摩斯的金屬魔術方塊.md",
          "title": "第2章：會打摩斯的金屬魔術方塊",
          "enTitle": "Chapter 2: The Morse-Code Metal Cube",
          "shortTitle": "會打摩斯的金屬魔術方塊",
          "wordCount": 4967,
          "readTimeMin": 13,
          "puzzle": {
            "chapter": 2,
            "title": "質數、整數除法與二進位密碼鎖",
            "cipher": "數一：十以內最大質數(7) | 數二：一打的一半 div 最小合數(6 div 4 = 1) | 數三：二進位 1001 (8+1 = 9)",
            "decoded": "7 - 1 - 9",
            "concept": "融合數學質數、電腦程式整數除法（只取商數捨去餘數）與二進位權重（8+0+0+1）。二進位是電腦世界的底層語言，只有0與1兩種狀態！"
          }
        },
        {
          "id": 3,
          "file": "03_圖書館的倒懸齒輪.md",
          "title": "第3章：圖書館的倒懸齒輪",
          "enTitle": "Chapter 3: The Inverted Gears in the Library",
          "shortTitle": "圖書館的倒懸齒輪",
          "wordCount": 4609,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 3,
            "title": "圖書館杜威索書號與書本加密法",
            "cipher": "823.91 (文學) 第5詞: THREE | 510.1 (數學) 第10詞: CLOCKWISE | 621.8 (工程) 倒數第2詞: REVERSE",
            "decoded": "順時針轉三圈 ➡️ 逆時針反轉",
            "concept": "書本加密法（Book Cipher）是情報人員常用的加密手法，配合圖書館分類法（800文學、500數學、600工程），指定頁數與單詞順序隱藏操作手冊。"
          }
        },
        {
          "id": 4,
          "file": "04_失控的清潔工機器人群.md",
          "title": "第4章：失控的清潔工機器人群",
          "enTitle": "Chapter 4: The Rogue Janitor Android Swarm",
          "shortTitle": "失控的清潔工機器人群",
          "wordCount": 4785,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 4,
            "title": "布林代數與邏輯門真值表",
            "cipher": "公式：Y = (A AND (NOT B)) OR (B AND C)",
            "decoded": "拉下紅色(A=1) ➡️ 推開藍色(B=0) ➡️ 黃色保持(C=0) ➡️ Y 必為 1",
            "concept": "布林邏輯是所有數位晶片的核心：AND（兩者皆真為真）、OR（任一為真即為真）、NOT（邏輯反轉）。利用 OR 的特性，只需確保前半段為 1 即可達成目標！"
          }
        },
        {
          "id": 5,
          "file": "05_記憶碎片的放映機.md",
          "title": "第5章：記憶碎片的放映機",
          "enTitle": "Chapter 5: The Memory Fragment Projector",
          "shortTitle": "記憶碎片的放映機",
          "wordCount": 4779,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 5,
            "title": "三色光學稜鏡波長與相位校準",
            "cipher": "紅(700nm)、綠(540nm)、藍(430.5nm) 偏轉角計算",
            "decoded": "45° - 45° - 90°",
            "concept": "光波三原色（RGB）具有不同的物理波長。透過特定角度的水晶雙折射與色散，讓三束激光在同一相位點重疊共振，形成純白激光激發量子存儲晶片。"
          }
        },
        {
          "id": 6,
          "file": "06_代號404的幽靈走廊.md",
          "title": "第6章：代號 404 的幽靈走廊",
          "enTitle": "Chapter 6: The Ghost Corridor of Code 404",
          "shortTitle": "代號 404 的幽靈走廊",
          "wordCount": 4269,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 6,
            "title": "幾何光學反射定律與鏡面偏轉",
            "cipher": "入射角等於反射角 (θi = θr)，綠光以 30° 入射，經兩面鏡子與皮可合金胸甲反射",
            "decoded": "鏡面 A (60°) ➡️ 鏡面 B (45°) ➡️ 皮可金屬盾二次反射",
            "concept": "光線在平滑表面反射時，入射角始終等於反射角。在激光迷陣中，皮可利用超高精度拋光的記憶合金身軀充當了動態補償鏡面。"
          }
        },
        {
          "id": 7,
          "file": "07_雙重導師的鏡像迷局.md",
          "title": "第7章：雙重導師的鏡像迷局",
          "enTitle": "Chapter 7: The Mirror Dilemma of the Dual Mentors",
          "shortTitle": "雙重導師的鏡像迷局",
          "wordCount": 4267,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 7,
            "title": "二進位奇偶校驗碼 (Parity Check)",
            "cipher": "左橋奇校驗 (1的個數為奇數) ｜ 右橋偶校驗 (1的個數為偶數)",
            "decoded": "誠浩踏左側奇數板 (如 10101001 含3個1)，旖緁踏右側偶數板 (如 11110000 含4個1)",
            "concept": "奇偶校驗是電腦網路傳輸資料時最常用的檢錯機制。透過統計二進位位元中「1」的個數是奇是偶，可判斷資料在傳輸過程中是否被干擾或損壞！"
          }
        },
        {
          "id": 8,
          "file": "08_全息投影背後的齒輪心臟.md",
          "title": "第8章：全息投影背後的齒輪心臟",
          "enTitle": "Chapter 8: The Clockwork Heart Behind the Hologram",
          "shortTitle": "全息投影背後的齒輪心臟",
          "wordCount": 4161,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 8,
            "title": "齒輪傳動比計算 (Gear Ratio)",
            "cipher": "主動輪 Z1=24，中間惰輪 Z2=16，從動輪 Z3=36，求傳動比 i",
            "decoded": "i = Z3 / Z1 = 36 / 24 = 3 / 2 (旋鈕 A=3, 旋鈕 B=2)",
            "concept": "齒輪傳動是機械工程的核心。惰輪只改變旋轉方向，不改變總速比！總傳動比等於從動輪齒數除以主動輪齒數，化簡為最簡整數比 3:2。"
          }
        },
        {
          "id": 9,
          "file": "09_格式化倒數十分鐘.md",
          "title": "第9章：格式化倒數十分鐘",
          "enTitle": "Chapter 9: Ten Minutes to Full Format",
          "shortTitle": "格式化倒數十分鐘",
          "wordCount": 4007,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 9,
            "title": "並聯電路分流定律與生物阻抗",
            "cipher": "高壓雷池中並聯超導臂鎧 (R≈0Ω) 與人體生物電阻 (R≈1500Ω)",
            "decoded": "I1 : I2 = R2 : R1，99.99% 致命高壓電流順著皮可超導體導入地心",
            "concept": "歐姆定律與並聯分流定理：電流永遠傾向走阻力最小的路徑！透過常溫超導體的低阻特性，安全避開致命電流，同時滿足了系統對人體電阻的檢測要求。"
          }
        },
        {
          "id": 10,
          "file": "10_重啟星期三的世界.md",
          "title": "第10章：重啟星期三的世界",
          "enTitle": "Chapter 10: Rebooting the Wednesday World",
          "shortTitle": "重啟星期三的世界",
          "wordCount": 3167,
          "readTimeMin": 8,
          "puzzle": {
            "chapter": 10,
            "title": "哲理與心靈抉擇：接納不完美的勇氣",
            "cipher": "【是否抹除恐懼與痛苦記憶？YES or NO？】",
            "decoded": "堅決選擇 YES (恢復全部記憶)",
            "concept": "成長不是逃避傷痛，而是在接納真實的過程中學會堅強與守護。真誠的面對，遠比虛假的平靜更加寶貴。"
          }
        }
      ]
    },
    {
      "id": "book-2",
      "title": "千島齒輪海的迷失燈塔",
      "enTitle": "The Lost Lighthouse of the Thousand-Island Gear Sea",
      "subtitle": "第二卷 · 全十二章完結",
      "enSubtitle": "Volume 2 · Complete (12 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "海事冒險 × 深海機械 × 家族密鑰",
      "author": "鹿陽故事工坊",
      "targetAge": "9～13 歲",
      "totalWords": 50832,
      "totalChapters": 32,
      "description": "誠浩在護目鏡深處發現了爺爺留下的神秘手寫信：『若想探尋世界的下一個終極密鑰……我在千島齒輪海等你。』帶著皮可與新裝備，四人小隊駕駛「青木齒輪號」啟程前往漂浮著發條浮島與古代燈塔的神秘海域，遭遇暴風少女「嵐」與發條海盜「鐵錨幫」，解開誠爺爺當年的航海身世！",
      "chapters": [
        {
          "id": 11,
          "file": "11_向著海平線啟航.md",
          "title": "第11章（二卷1）：向著海平線啟航",
          "enTitle": "Chapter 11: Setting Sail Toward the Horizon",
          "shortTitle": "向著海平線啟航",
          "wordCount": 4567,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 11,
            "title": "海事燈質光學信標與真航向角計算",
            "cipher": "TC = (第一段秒數 3 × 100) ＋ (第二段次數 3 × 10) ＋ (第三段總秒數 2 × 5) - 50°",
            "decoded": "TC = 300 + 30 + 10 - 50 = 290° (西北西方向)",
            "concept": "國際航標協會（IALA）海事光學燈質信號。船舶航行於危險暗礁海域時，需依據引航浮標的特定節奏計算真航向角（True Course），配合羅盤引導航向，避開旋轉水下暗礁。"
          },
          "volChapterNum": 1
        },
        {
          "id": 12,
          "file": "12_海風島的暴風少女.md",
          "title": "第12章（二卷2）：海風島的暴風少女",
          "enTitle": "Chapter 12: The Tempest Girl of Sea-Breeze Island",
          "shortTitle": "海風島的暴風少女",
          "wordCount": 4540,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 12,
            "title": "力學向量合成與漩渦切線離心逃逸",
            "cipher": "F_合 = sqrt(F1^2 + F2^2 + 2*F1*F2*cos(θ))，F1=12節, F2=14節, θ=60°",
            "decoded": "F_合 = sqrt(144 + 196 + 168) = sqrt(508) ≈ 22.54 節 > 22 節 (逃生成功！)",
            "concept": "流體力學與物理力學向量合成。兩艘不同推力的船舶在遭遇狂暴向心漩渦時，透過精確的六十度夾角纜繩牽引，將合成推力提升至 22.54 節，超越漩渦的 22 節向心吸力，利用離心加速度切線逃逸！"
          },
          "volChapterNum": 2
        },
        {
          "id": 13,
          "file": "13_鐵錨幫的發條海盜船.md",
          "title": "第13章（二卷3）：鐵錨幫的發條海盜船",
          "enTitle": "Chapter 13: The Clockwork Pirate Ship of the Iron Anchor Gang",
          "shortTitle": "鐵錨幫的發條海盜船",
          "wordCount": 4955,
          "readTimeMin": 13,
          "puzzle": {
            "chapter": 13,
            "title": "超聲波波長與反相破壞性共振干擾",
            "cipher": "f = 40 kHz, v = 1500 m/s，波長 λ = v / f ＝ 3.75 cm，反相 180° 干擾",
            "decoded": "λ = 1500 / 40000 = 0.0375 m = 3.75 cm (注入反相聲波自毀壓電傳感器)",
            "concept": "波動物理學與聲學破壞性干擾（Destructive Interference）。利用超聲波在海水中的波長精確匹配機械鯊魚的聲學共振腔，反相脈衝引發內部多米諾骨牌連鎖短路，全面瓦解敵方集群導航！"
          },
          "volChapterNum": 3
        },
        {
          "id": 14,
          "file": "14_海事旗語與浮標信號迷陣.md",
          "title": "第14章（二卷4）：海事旗語與浮標信號迷陣",
          "enTitle": "Chapter 14: Maritime Flags and the Buoy Signal Labyrinth",
          "shortTitle": "海事旗語與浮標信號迷陣",
          "wordCount": 4180,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 14,
            "title": "國際海事信號旗語（ICS）與水閘音頻矩陣",
            "cipher": "P(深藍白方) ＋ I(黃底黑圓) ＋ L(黃黑四格) ＋ O(黃紅斜切) ＋ T(紅白藍三色豎條)",
            "decoded": "P - I - L - O - T ＝ PILOT (引航員)，音叉音頻共振開啟古代水下重型水閘",
            "concept": "國際海事信號旗語（International Code of Signals, ICS）。全球航海領域通用的視覺通訊代碼，每面旗幟代表特定英文字母與標準海事操作指引，串聯拼讀出古代防禦水閘的音頻通關密鑰！"
          },
          "volChapterNum": 4
        },
        {
          "id": 15,
          "file": "15_皮可的水翼極速破浪.md",
          "title": "第15章（二卷5）：皮可的水翼極速破浪",
          "enTitle": "Chapter 15: PICO's High-Speed Hydrofoil Wavebreaker",
          "shortTitle": "皮可的水翼極速破浪",
          "wordCount": 3934,
          "readTimeMin": 10,
          "puzzle": {
            "chapter": 15,
            "title": "流體力學水翼升力公式與攻角極限計算",
            "cipher": "L = 1/2 * C_L * ρ * v² * A，W = 7,000 N, A = 1.2 m², C_L = 0.85, ρ = 980 kg/m³",
            "decoded": "v ≥ 42 節 (21.6 m/s)，攻角 θ = 18°，產生 7000 N 動態升力克服深淵下拽流拉起囚籠",
            "concept": "流體力學水翼升力公式（Hydrofoil Lift）。利用非對稱翼型在高速流體中產生的白努利壓差，在水下高速衝浪中將水平推力瞬間轉化為沖天垂直升力，奇蹟救起下墜的重型囚籠！"
          },
          "volChapterNum": 5
        },
        {
          "id": 16,
          "file": "16_齒輪漩渦中的水下迷宮.md",
          "title": "第16章（二卷6）：齒輪漩渦中的水下迷宮",
          "enTitle": "Chapter 16: The Underwater Maze in the Gear Vortex",
          "shortTitle": "齒輪漩渦中的水下迷宮",
          "wordCount": 4276,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 16,
            "title": "阿基米德浮力力矩平衡與最小公倍數跳躍",
            "cipher": "力臂 L1=1, L2=2, L3=3，求平衡配重比 V1:V2:V3 ＝ 6:3:2，跳躍週期 LCM(12, 8, 6)",
            "decoded": "配重比 6 : 3 : 2 (均等 6 單位平衡力矩)，LCM(12, 8, 6) = 24 秒精確共振起跳窗口",
            "concept": "槓桿力矩平衡（Torque Equilibrium）與最小公倍數（LCM）。透過反比浮力分配平衡深海 100 ATM 巨型水壓閘門，再利用齒輪轉動週期的最小公倍數捕捉登頂安全窗口！"
          },
          "volChapterNum": 6
        },
        {
          "id": 17,
          "file": "17_海市蜃樓與全息折射航線.md",
          "title": "第17章（二卷7）：海市蜃樓與全息折射航線",
          "enTitle": "Chapter 17: Superior Mirages and the Holographic Course",
          "shortTitle": "海市蜃樓與全息折射航線",
          "wordCount": 4327,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 17,
            "title": "大氣逆溫上蜃景與布魯斯特角偏振過濾",
            "cipher": "tan(θ_B) = n_2 / n_1，n_1 = 1.00035, n_2 = 1.00020",
            "decoded": "θ_B = arctan(1.00020 / 1.00035) ≈ 45.0°，旋動偏振鏡片至 45° 消除全息反射虛像，鎖定真實 C 號天琴礁島",
            "concept": "大氣光學逆溫層折射（Superior Mirage）與布魯斯特完全偏振定律（Brewster's Law）。透過計算兩種空氣折射率下的完全偏振角，利用偏光鏡片消除人造激光全息眩光與海市蜃樓倒影，破譯真實航向！"
          },
          "volChapterNum": 7
        },
        {
          "id": 18,
          "file": "18_聲納共振與夜光機械群.md",
          "title": "第18章（二卷8）：聲納共振與夜光機械群",
          "enTitle": "Chapter 18: Sonar Resonance and the Bioluminescent Swarm",
          "shortTitle": "聲納共振與夜光機械群",
          "wordCount": 4120,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 18,
            "title": "聲學駐波懸浮與五度相生律和弦共振",
            "cipher": "管長 L1=4m, L2=3m, L3=2.67m, L4=2m，求基頻比 f1:f2:f3:f4 ＝ 6:8:9:12",
            "decoded": "奏響天琴純五度和弦 (Do - Fa - Sol - High Do)，抵消聲學懸浮駐波安全取下星盤，引導夜光機械水母電漿反擊",
            "concept": "聲學駐波懸浮（Acoustic Levitation）與畢達哥拉斯五度相生律（Pythagorean Tuning）。利用管風琴管長與振動頻率的嚴格反比法則奏響和弦，平息古代自律水母群並癱瘓黑潮盾構鑽艇！"
          },
          "volChapterNum": 8
        },
        {
          "id": 19,
          "file": "19_登上迷失燈塔！.md",
          "title": "第19章（二卷9）：登上迷失燈塔！",
          "enTitle": "Chapter 19: Boarding the Lost Lighthouse!",
          "shortTitle": "登上迷失燈塔！",
          "wordCount": 3810,
          "readTimeMin": 10,
          "puzzle": {
            "chapter": 19,
            "title": "薄透鏡成像公式與菲涅耳共焦準直聚焦",
            "cipher": "主凸透鏡 f1 = +6.0m，副凹透鏡 f2 = -2.0m，求共焦無窮遠準直間距 d ＝ f1 + f2 與位移圈數",
            "decoded": "共焦間距 d = 6.0 + (-2.0) = 4.0m，手輪旋轉 3 整圈激發手腕粗細直貫地心的超級平行相干激光束",
            "concept": "幾何光學透鏡成像公式（Thin Lens Equation）與複合透鏡共焦準直（Confocal Collimation）。利用正負焦距相加定理消除光束發散角，將散射光斑壓縮為超強平行激光，直穿三千公尺地殼開啟升降機！"
          },
          "volChapterNum": 9
        },
        {
          "id": 20,
          "file": "20_老守燈人的三十年約定.md",
          "title": "第20章（二卷10）：老守燈人的三十年約定",
          "enTitle": "Chapter 20: The Old Keeper's Thirty-Year Vow",
          "shortTitle": "老守燈人的三十年約定",
          "wordCount": 4202,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 20,
            "title": "正七邊形質數步長模運算與諧波阻尼消減",
            "cipher": "正七邊形地震針陣列，跳步步長 s = 2，狀態轉移方程 k_next = (k_curr + 2) mod 7",
            "decoded": "消減序列：1 ➡️ 3 ➡️ 5 ➡️ 7 ➡️ 2 ➡️ 4 ➡️ 6，打破相鄰拍頻共振，平穩降解地熱過載",
            "concept": "離散數學模運算（Modular Arithmetic）與拓撲諧波消減（Harmonic Damping）。利用正多邊形質數跳步循環打破相鄰地質共振拍頻，在不引發減壓暴湧的前提下安全熄滅地熱地震針！"
          },
          "volChapterNum": 10
        },
        {
          "id": 21,
          "file": "21_深海大裂谷的終極防衛機關.md",
          "title": "第21章（二卷11）：深海大裂谷的終極防衛機關",
          "enTitle": "Chapter 21: The Ultimate Defense Gate of the Abyssal Rift",
          "shortTitle": "深海大裂谷的終極防衛機關",
          "wordCount": 4165,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 21,
            "title": "行星差速齒輪系與動態平衡平抑",
            "cipher": "行星輪系 Z_s = 20, Z_p = 15, Z_r = 50，鎖死行星架 ω_c = 0，求差速轉速比 ω_s / ω_r",
            "decoded": "Willis 方程 ω_s / ω_r = -Z_r / Z_s = -50/20 = -2.5 (反向 5 : 2)，平抑數十萬牛頓·米扭矩熄滅最後地震針",
            "concept": "機械動力學行星齒輪系（Planetary Gear Train）與 Willis 轉速特性方程。利用鎖死行星架產生反向 2.5 倍速差速自平衡，降解極限過載扭矩，並以洛倫茲強磁斥力偏轉兩千度等離子電漿！"
          },
          "volChapterNum": 11
        },
        {
          "id": 22,
          "file": "22_點亮永恆之光.md",
          "title": "第22章（二卷12）：點亮永恆之光",
          "enTitle": "Chapter 22: Kindling the Light of Eternity",
          "shortTitle": "點亮永恆之光",
          "wordCount": 3756,
          "readTimeMin": 10,
          "puzzle": {
            "chapter": 22,
            "title": "光柵繞射方程式與菲涅耳色散角校準",
            "cipher": "光柵狹縫常數 d = 2000 nm，恆光波長 λ = 589 nm，一階繞射 m = 1，求精確色散偏轉角 θ",
            "decoded": "sin(θ) = (1 * 589) / 2000 = 0.2945 => θ = arcsin(0.2945) ≈ 17.1°，鎖定 17.1° 注入恆光光子點亮永恆之塔",
            "concept": "物理光學光柵繞射方程式（Diffraction Grating Equation）與光譜色散。利用精密的繞射角計算使光子產生相干建設性干涉，引燃直徑十公尺的菲涅耳永恆巨鏡，照亮整片千島齒輪海！"
          },
          "volChapterNum": 12
        }
      ]
    },
    {
      "id": "book-3",
      "title": "星穹鐘樓的第十二個音符",
      "enTitle": "The Twelfth Note of the Celestial Clock Tower",
      "subtitle": "第三卷 · 全十章完結",
      "enSubtitle": "Volume 3 · Complete (10 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "太空天文 × 天體力學 × 聲學頻率 × 浮空城引力危機",
      "author": "鹿陽故事工坊",
      "targetAge": "9～13 歲",
      "totalWords": 28357,
      "totalChapters": 30,
      "description": "當鹿陽國小迎回三十年守燈人誠爺爺的當天，皮可的超導天線意外截獲了來自萬米高空平流層的緊急求救信號——直徑五公里的古代奇蹟「天穹浮空城 · 奧秘之翼」遭到暗物質黑晶侵蝕，星穹鐘樓的第十二黃金音叉失調，整座大陸正以每秒八十米的速度向地表墜落！青木齒輪號加裝熱氣球雙層氣囊拔地而起，穿透萬伏特雷暴與翼龍機群，攜手銀翼少女塞西莉亞，敲響跨越陸海空三界的終極永恆和弦！",
      "chapters": [
        {
          "id": 23,
          "file": "23_萬米高空的下墜訊號.md",
          "title": "第23章（三卷1）：萬米高空的下墜訊號",
          "enTitle": "Chapter 23: The Falling Signal from 30,000 Feet",
          "shortTitle": "萬米高空的下墜訊號",
          "wordCount": 2869,
          "readTimeMin": 8,
          "puzzle": {
            "chapter": 23,
            "title": "平流層氣壓高度計大氣物理方程",
            "cipher": "h = - (RT / Mg) * ln(P_curr / P0) = - 6438 * ln(0.2609)",
            "decoded": "h ≈ 8,650 公尺（墜落高度警報）",
            "concept": "等溫大氣壓強高度公式（Barometric Formula）！大氣壓強隨著海拔升高呈指數型遞減。透過精密氣壓計比對標準海平面氣壓，即可反推當前絕對飛行高度。"
          },
          "volChapterNum": 1
        },
        {
          "id": 24,
          "file": "24_奔向平流層的熱氣球飛艦.md",
          "title": "第24章（三卷2）：奔向平流層的熱氣球飛艦",
          "enTitle": "Chapter 24: The Stratospheric Airship Ascent",
          "shortTitle": "奔向平流層的熱氣球飛艦",
          "wordCount": 2509,
          "readTimeMin": 7,
          "puzzle": {
            "chapter": 24,
            "title": "理想氣體狀態方程與雙層熱氣球浮力",
            "cipher": "V_min = m_total / (ρ_air - ρ_gas) = 45,000 / 0.900",
            "decoded": "V = 50,000 立方公尺（加熱至 116.85°C）",
            "concept": "理想氣體狀態方程 PV = nRT 與阿基米德浮力定律！加熱氣囊內氣體降低密度，當排開外界冷空氣的浮力大於全艦 45 噸總重時，產生垂直向上的淨爬升加速度！"
          },
          "volChapterNum": 2
        },
        {
          "id": 25,
          "file": "25_雲海中的天穹翼龍機群.md",
          "title": "第25章（三卷3）：雲海中的天穹翼龍機群",
          "enTitle": "Chapter 25: The Aether Pterosaurs in the Cloud Sea",
          "shortTitle": "雲海中的天穹翼龍機群",
          "wordCount": 2660,
          "readTimeMin": 7,
          "puzzle": {
            "chapter": 25,
            "title": "伯努利流體力學與臨界失速攻角",
            "cipher": "α_total = α0 + arctan(w / u) = 5° + 26.57° = 31.57° >> 16.5°",
            "decoded": "深度失速（Deep Stall），升力雪崩 90%",
            "concept": "伯努利原理與機翼氣動升力！當氣流衝擊機翼的迎角（攻角）超過臨界失速角 16.5° 時，上翼面邊界層氣流全面剝離，升力歸零，使機械翼龍瞬間陷入螺旋下墜！"
          },
          "volChapterNum": 3
        },
        {
          "id": 26,
          "file": "26_法拉第籠與雷暴迷宮.md",
          "title": "第26章（三卷4）：法拉第籠與雷暴迷宮",
          "enTitle": "Chapter 26: The Faraday Cage and the Thundercloud Maze",
          "shortTitle": "法拉第籠與雷暴迷宮",
          "wordCount": 2580,
          "readTimeMin": 7,
          "puzzle": {
            "chapter": 26,
            "title": "靜電屏蔽與法拉第籠高斯定律",
            "cipher": "∮ E · dA = Q / ε0 ➡️ E_inside ≡ 0 (百萬伏特雷擊表面趨膚效應)",
            "decoded": "黑鐵平底鍋高導電閉合，法拉第籠完全等勢！",
            "concept": "高斯靜電定律與法拉第籠（Faraday Cage）！金屬導體空腔外表面能完美阻絕外來數十萬安培雷擊，使內部電場強度處處為零，保護人員與鍋爐免受雷擊傷害！"
          },
          "volChapterNum": 4
        },
        {
          "id": 27,
          "file": "27_登陸浮空城奧秘之翼.md",
          "title": "第27章（三卷5）：登陸浮空城「奧秘之翼」！",
          "enTitle": "Chapter 27: Landing on the Floating City of Aether",
          "shortTitle": "登陸浮空城「奧秘之翼」！",
          "wordCount": 3239,
          "readTimeMin": 9,
          "puzzle": {
            "chapter": 27,
            "title": "旋轉參考系人造重力與科氏力著陸補償",
            "cipher": "a_coriolis = 2 * (v_r * ω) = 2 * 15 * 0.05 = 1.5 m/s²",
            "decoded": "反向橫推 1.5 m/s²，切向速度 125 m/s 零相對速度咬合",
            "concept": "旋轉參考系中的離心力與科氏力（Coriolis Effect）！在以角速度 ω 旋轉的浮空城甲板著陸時，徑向運動會產生橫向偏折，必須施加反向向量推力才能精確平穩對接！"
          },
          "volChapterNum": 5
        },
        {
          "id": 28,
          "file": "28_失控的無重力走廊.md",
          "title": "第28章（三卷6）：失控的無重力走廊",
          "enTitle": "Chapter 28: The Runaway Zero-G Corridor",
          "shortTitle": "失控的無重力走廊",
          "wordCount": 2793,
          "readTimeMin": 7,
          "puzzle": {
            "chapter": 28,
            "title": "無重力走廊動量守恆與反衝火箭推力",
            "cipher": "0 = M_body * v_recoil - m_gas * v_eject ➡️ (1.5 * 2000) / 200",
            "decoded": "v = 15.0 m/s（十二秒極限穿越無重力區）",
            "concept": "動量守恆定律（Conservation of Momentum）！在沒有重力與摩擦力的絕對漂浮環境中，向後高速噴射氣體所產生的反作用力，能將物體精確加速至預定目標航速！"
          },
          "volChapterNum": 6
        },
        {
          "id": 29,
          "file": "29_懸空千米的行星齒輪天梯.md",
          "title": "第29章（三卷7）：懸空千米的行星齒輪天梯",
          "enTitle": "Chapter 29: The Suspended Planetary Gear Stairway",
          "shortTitle": "懸空千米的行星齒輪天梯",
          "wordCount": 2755,
          "readTimeMin": 7,
          "puzzle": {
            "chapter": 29,
            "title": "開普勒第三定律與行星天梯軌道共振",
            "cipher": "T² / a³ = K ➡️ 水星(8s) / 地球(64s) / 木星(216s)",
            "decoded": "t_align = 432 秒同相週期，18 秒倒數 5 秒黃金光橋",
            "concept": "開普勒行星運動第三定律（Kepler's Third Law）！行星軌道公轉週期的平方與軌道半長軸的立方成正比。計算多層行星齒輪盤的角速度差，即可求解光橋同相重合週期！"
          },
          "volChapterNum": 7
        },
        {
          "id": 30,
          "file": "30_被吞噬的第十二個音符.md",
          "title": "第30章（三卷8）：被吞噬的第十二個音符",
          "enTitle": "Chapter 30: The Devoured Twelfth Note",
          "shortTitle": "被吞噬的第十二個音符",
          "wordCount": 3029,
          "readTimeMin": 8,
          "puzzle": {
            "chapter": 30,
            "title": "十二平均律頻率公式與純律泛音共振",
            "cipher": "f12 = 261.63 * 2^(11/12) = 493.88 Hz (B4 音)",
            "decoded": "三階純律泛音(493.88 / 987.76 / 1481.64 Hz)超聲空化粉碎黑晶",
            "concept": "十二平均律（Twelve-Tone Equal Temperament）與諧波共鳴！相鄰半音頻率比為 2 的 12 次方根（約 1.05946）。疊加三道諧波產生 180 dB 超聲空化微射流，瓦解暗物質晶格！"
          },
          "volChapterNum": 8
        },
        {
          "id": 31,
          "file": "31_暗物質黑晶的湮滅決戰.md",
          "title": "第31章（三卷9）：暗物質黑晶的湮滅決戰",
          "enTitle": "Chapter 31: The Annihilation Battle Against the Black Crystals",
          "shortTitle": "暗物質黑晶的湮滅決戰",
          "wordCount": 2620,
          "readTimeMin": 7,
          "puzzle": {
            "chapter": 31,
            "title": "相對論多普勒效應與反相波完全破壞性干涉",
            "cipher": "f_dyn = 1200 * (297.3 / (297.3 - 20)) = 1,286.6 Hz (相位翻轉 180°)",
            "decoded": "y_total = A*sin(ωt) - A*sin(ωt) = 0（分子鍵共振振幅歸零）",
            "concept": "多普勒效應（Doppler Effect）與波的干涉！高速迎面逼近的波源會使接收頻率升高。發射頻率嚴格吻合且相位反轉 180 度的反相激光，可達成完全破壞性干涉消解目標！"
          },
          "volChapterNum": 9
        },
        {
          "id": 32,
          "file": "32_敲響第十二個音符天穹破曉.md",
          "title": "第32章（三卷10）：敲響第十二個音符，天穹破曉！",
          "enTitle": "Chapter 32: Striking the Twelfth Note, Dawn Over the Firmament!",
          "shortTitle": "敲響第十二個音符，天穹破曉！",
          "wordCount": 3303,
          "readTimeMin": 9,
          "puzzle": {
            "chapter": 32,
            "title": "十二平均律引力球面駐波與全球發條閉環",
            "cipher": "Ψ(r, θ, φ, t) = Σ [ A_n * Y_n^m * j_n * cos(2π f_n t) ] ≡ 0 Phase Offset",
            "decoded": "正午十二點整毫秒級雙槌合擊，激發 100,000 kN 升力平流層飛升！",
            "concept": "球面調和函數與引力駐波共振！十二支黃金音叉在天心正交時刻同時激發十二平均律基頻，使地球板塊與天穹引力達到自平衡閉環，逆轉下墜重啟萬米浮空城！"
          },
          "volChapterNum": 10
        }
      ]
    },
    {
      "id": "book-4",
      "title": "星願鐘擺與織光少女：追光星盤的修復師",
      "enTitle": "The Weaver of Starlight: Repairer of the Celestial Astrolabe",
      "subtitle": "第二套 · 第一卷（全十章已完結）",
      "enSubtitle": "Series 2 · Volume 1 · Complete",
      "status": "第一卷完結",
      "statusColor": "emerald",
      "coverTag": "少年成長 × 星光鐘錶 × 溫暖友情 × 微甜心動",
      "author": "鹿陽故事工坊",
      "targetAge": "9～14 歲（國小中高年級至國中）",
      "totalWords": 46495,
      "totalChapters": 30,
      "description": "建立在古老晶石峽谷之上的「琉光星港」，是一座由星輝晶體與精密鐘錶齒輪驅動的雲端奇蹟之城。舊城區鐘錶行「晨光堂」十三歲的學徒采婭玆，夢想成為全星港青年首席星軌修復師，卻因缺乏高階算法公式頻頻遇阻；天樞科學院的天才少女林漪姉精通光學與微積分，卻因缺乏機械靈活性屢遭挫敗。一次舊鐘樓的奇妙偶遇，加上溫柔引航少年罧貁銁的默默守護，讓女孩們在質疑與眼淚中學會並肩作戰，攜手解開星軌偏振密碼，用愛與堅持點亮全城星願！",
      "chapters": [
        {
          "id": 1,
          "file": "33_晨光堂的最後一枚發條.md",
          "title": "第1章：晨光堂的最後一枚發條",
          "enTitle": "Chapter 1: The Last Mainspring of Dawn Hall",
          "shortTitle": "晨光堂的最後一枚發條",
          "wordCount": 5169,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 1,
            "title": "虎克彈簧彈性定律與單擺等時週期方程",
            "cipher": "F = -k · x  |  T = 2π √(L / g)  |  CODE: [04-01-23-14]",
            "decoded": "DAWN (晨曦/破曉之光)",
            "concept": "鐘錶運行背後的核心力學秘密！發條形變產生的彈力遵循虎克定律（F=-kx），儲存位能；而擺輪遊絲系統與單擺則利用等時週期性（T=2π√(L/g)），無論擺幅大小，只要擺長不變，擺動一次所需的時間幾乎完全恆定，這正是鐘錶能精準計時百年的科學奧秘！"
          }
        },
        {
          "id": 2,
          "file": "34_第四副鐘樓的冰霜少女.md",
          "title": "第2章：第四副鐘樓的冰霜少女",
          "enTitle": "Chapter 2: The Frost Maiden of the Fourth Auxiliary Tower",
          "shortTitle": "第四副鐘樓的冰霜少女",
          "wordCount": 4112,
          "readTimeMin": 13,
          "puzzle": {
            "chapter": 2,
            "title": "雙金屬熱膨脹補償與司涅爾折射定律",
            "cipher": "ΔL = L₀ · α · ΔT  |  n₁ sin θ₁ = n₂ sin θ₂  |  CODE: [22-09-22-09]",
            "decoded": "VIVI (林漪姉的英文暱稱)",
            "concept": "雙金屬片利用黃銅與因瓦合金不同熱膨脹係數（α）的差異，在受熱時自動反向彎曲補償發條彈性衰減；而旋轉稜鏡則利用司涅爾折射定律（n₁ sin θ₁ = n₂ sin θ₂）精確分離過熱紅外光斑，兼具機械熱補償與光學色散穩定，正是解開星願儀核心的雙重科學鑰匙！"
          }
        },
        {
          "id": 3,
          "file": "35_晨光堂的秘密熔爐.md",
          "title": "第3章：晨光堂的秘密熔爐",
          "enTitle": "Chapter 3: The Secret Furnace of Dawn Hall",
          "shortTitle": "晨光堂的秘密熔爐",
          "wordCount": 4870,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 3,
            "title": "因瓦合金熱膨脹與提摩盛柯雙金屬片彎曲定理",
            "cipher": "ΔL = L₀ · α · ΔT  |  1/ρ ∝ (Δα · ΔT) / h  |  CODE: [08-05-01-18-20]",
            "decoded": "HEART (時間之心)",
            "concept": "因瓦合金（36%鎳與64%鐵）在室溫附近熱膨脹係數近乎為零；當它與高膨脹率的黃銅在高溫居禮點（230°C）複合鍛造成雙金屬片時，受熱自動向內彎曲，依提摩盛柯定理抵消扭矩熱衰減，使發條在極端溫差下輸出恆定力矩，這正是精密鐘錶永恆跳動的「時間之心（HEART）」！"
          }
        },
        {
          "id": 4,
          "file": "36_旋轉星盤與雙星軌道修復.md",
          "title": "第4章：旋轉星盤與雙星軌道修復",
          "enTitle": "Chapter 4: The Rotational Astrolabe and Binary Star Orbit Restoration",
          "shortTitle": "旋轉星盤與雙星軌道修復",
          "wordCount": 4979,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 4,
            "title": "角動量守恆與雙星質心軌道密碼",
            "cipher": "15 - 18 - 02 - 09 - 20 (m1=60g, m2=20g, r1/r2=1/3)",
            "decoded": "ORBIT (軌道)",
            "concept": "角動量守恆定律 (L = Iω = 常數) 與雙星公共質心平衡 (m1·r1 = m2·r2)！主星與伴星軌道半徑比與質量成反比 (1:3)，配合四枚動態平衡滑塊消除偏心離心抖動，以 A1Z26 破譯出雙星希望軌道 ORBIT。"
          }
        },
        {
          "id": 5,
          "file": "37_擒縱心跳與共振極限.md",
          "title": "第5章：擒縱心跳與共振極限",
          "enTitle": "Chapter 5: Escapement Heartbeat and Resonance Limits",
          "shortTitle": "擒縱心跳與共振極限",
          "wordCount": 5436,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 5,
            "title": "受迫振動共振與雙質量動態吸振器密碼",
            "cipher": "16 - 21 - 12 - 19 - 05 (f0=10Hz, Δφ=180°, Q=98000)",
            "decoded": "PULSE (脈搏 / 脈衝)",
            "concept": "受迫振動振幅方程 A(ω) 在驅動頻率逼近固有頻率時引發共振災難！利用雙質量動態吸振器（Tuned Mass Damper, TMD）以 180° 反向相位主動吸收干擾次聲波動能，將單一共振峰削平為安全雙側峰，以 A1Z26 破譯出齒輪心跳 PULSE。"
          }
        },
        {
          "id": 6,
          "file": "38_雲海引航與翼帆升力.md",
          "title": "第6章：雲海引航與翼帆升力",
          "enTitle": "Chapter 6: Cloud Sea Navigation and Wing-Sail Lift",
          "shortTitle": "雲海引航與翼帆升力",
          "wordCount": 4766,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 6,
            "title": "白努利翼帆升力與臨界攻角失速密碼",
            "cipher": "07 - 12 - 09 - 04 - 05 (P + 1/2ρv² = const, α_crit=16°, L/D=3.2)",
            "decoded": "GLIDE (迎風滑翔)",
            "concept": "白努利定律 (P + 1/2ρv² = 常數) 揭示翼型上表面流速快、壓強低，產生強大空氣動力學升力 L = 1/2 CL ρ v² S！當攻角超越臨界角引發邊界層分離失速時，透過三段式可變彎度前緣縫翼延遲剝離，以 A1Z26 破譯出破風翱翔之鑰 GLIDE。"
          }
        },
        {
          "id": 7,
          "file": "39_光學稜鏡與全反射聚焦.md",
          "title": "第7章：光學稜鏡與全反射聚焦",
          "enTitle": "Chapter 7: Optical Prisms and Total Internal Reflection Focusing",
          "shortTitle": "光學稜鏡與全反射聚焦",
          "wordCount": 4272,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 7,
            "title": "幾何光學全反射臨界角與相干聚焦密碼",
            "cipher": "06 - 15 - 03 - 21 - 19 (sin θc = n2/n1, NA=1.265, η=99.2%)",
            "decoded": "FOCUS (聚焦 / 專注)",
            "concept": "幾何光學全反射定律 (sin θc = n2/n1)！當入射角超越臨界角時，光能百分之百被反射回晶體波導內部，無折射洩漏損耗。配合消色差雙稜鏡阿貝數色散補償與十赫茲斬波脈衝，以 A1Z26 破譯出全反射相干光刃之鑰 FOCUS。"
          }
        },
        {
          "id": 8,
          "file": "40_巨像對決與力矩平衡.md",
          "title": "第8章：巨像對決與力矩平衡",
          "enTitle": "Chapter 8: Duel with the Colossus and Torque Equilibrium",
          "shortTitle": "巨像對決與力矩平衡",
          "wordCount": 4120,
          "readTimeMin": 11,
          "puzzle": {
            "chapter": 8,
            "title": "槓桿原理與阿基米德支點力矩密碼",
            "cipher": "16 - 09 - 22 - 15 - 20 (Στ=0, F1·d1 = F2·d2, MA=15, τ=1800 N·m)",
            "decoded": "PIVOT (支點 / 樞紐)",
            "concept": "靜力學力矩平衡條件 (Στ = 0) 與阿基米德槓桿原理！以 15 倍機械利益 (MA = d1/d2) 將 120 牛頓巧力放大至 1,800 牛頓·米的極限反向力矩，瓦解重達 350 公斤的蒸汽巨像，以 A1Z26 破譯出幾何支點之鑰 PIVOT。"
          }
        },
        {
          "id": 9,
          "file": "41_星芒共振與駐波干涉.md",
          "title": "第9章：星芒共振與駐波干涉",
          "enTitle": "Chapter 9: Astral Resonance and Standing Wave Interference",
          "shortTitle": "星芒共振與駐波干涉",
          "wordCount": 4274,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 9,
            "title": "聲光弦陣波動方程與駐波干涉模型",
            "cipher": "y = 2A · sin(kx) · cos(ωt)  |  f_n = n · (v / 2L)  |  CODE: [03-08-15-18-04]",
            "decoded": "CHORD (和弦 / 心靈共鳴之弦)",
            "concept": "駐波是兩列振幅、頻率相同但傳播方向相反的行進波疊加而成的特殊波動。在波節處（Node，x = n·λ/2），介質振幅恆等於零，承受零剪切應力；在波腹處（Antinode），振幅達到極大值 2A，光能與聲波強烈爆發。透過將固定支點安置於波節，並運用傅立葉級數諧波合成（Fourier Series Harmonics），即可消除破壞性雜波，引發震撼全城的完美純律大三和弦！"
          }
        },
        {
          "id": 10,
          "file": "42_首席星軌師與星願破曉.md",
          "title": "第10章：首席星軌師與星願破曉",
          "enTitle": "Chapter 10: The Chief Repairers and the Dawn of Zenith",
          "shortTitle": "首席星軌師與星願破曉",
          "wordCount": 4497,
          "readTimeMin": 13,
          "puzzle": {
            "chapter": 10,
            "title": "角動量守恆與陀螺進動平衡方程式",
            "cipher": "L = I·ω  |  τ_ext = dL/dt = Ω_p × L  |  CODE: [26-05-14-09-20-08]",
            "decoded": "ZENITH (天頂 / 巔峰之耀)",
            "concept": "剛體角動量守恆定律（L = I·ω）是旋轉陀螺維持方向穩定的力學基石！當外部磁暴施加力矩時，高速旋轉的陀螺不會直接倒塌，而是產生正交進動（Ω_p = τ/(I·ω)）。透過在萬向節中軸植入精準研磨的十二星座琉璃星盤，施加大小相等、方向相反的反向補償力矩（τ_comp = -τ_ext），即可讓進動角速度瞬間歸零，鎖定天頂真北極，解鎖第一卷終極密鑰 ZENITH！"
          }
        }
      ]
    },
    {
      "id": "book-5",
      "title": "星願鐘擺與織光少女：旋轉稜鏡的雙星軌道",
      "enTitle": "The Weaver of Starlight: Binary Orbits of the Rotating Prism",
      "subtitle": "第二套 · 第二卷（全卷完結）",
      "enSubtitle": "Series 2 · Volume 2 · Complete",
      "status": "全卷完結",
      "statusColor": "emerald",
      "coverTag": "少年冒險 × 偏振光學 × 雙星都卜勒 × 純真羈絆",
      "author": "鹿陽故事工坊",
      "targetAge": "9～14 歲（國小中高年級至國中）",
      "totalWords": 59174,
      "totalChapters": 30,
      "description": "在成功化解磁暴危機並榮膺星港青年首席星軌修復師後，采婭玆與林漪姉受命前往三千公尺孤峰之巔的「天極雙星天象台」，修復百年未啟動的旋轉稜鏡雙星定軌儀。面對方解石雙折射與都卜勒頻移光譜失諧的難題，采婭玆以工匠手感旋轉偏振鏡片，林漪姉以馬呂斯定律精算消光角，罧貁銁迎風操帆穩定大氣微震。雙星光譜共振重現，更揭開了天頂之外更加浩瀚深邃的星際之謎！",
      "chapters": [
        {
          "id": 1,
          "file": "43_雙星天象台與偏振光譜.md",
          "title": "第11章：雙星天象台與偏振光譜",
          "enTitle": "Chapter 11: The Binary Star Observatory and Polarization Spectrum",
          "shortTitle": "雙星天象台與偏振光譜",
          "wordCount": 5711,
          "readTimeMin": 13,
          "puzzle": {
            "chapter": 11,
            "title": "馬呂斯光學偏振定律與雙星都卜勒頻移方程",
            "cipher": "I = I₀ cos²θ  |  Δλ / λ₀ = v_r / c  |  CODE: [16-15-12-01-18]",
            "decoded": "POLAR (偏振／極化之光)",
            "concept": "馬呂斯偏振定律（I = I₀ cos²θ）揭示了線偏振光通過檢偏鏡時的透射光強隨夾角餘弦平方衰減，當 θ=90° 時達成完美正交消光（I=0）！配合方解石晶體的尋常光（o光）與非常光（e光）雙折射分離，以及雙星互繞的都卜勒頻移波長校準，在消除大氣散射雜光的同時鎖定光譜吸收線，以 A1Z26 破譯出第二卷啟航密鑰 POLAR！"
          }
        },
        {
          "id": 2,
          "file": "44_全反射光導與星光傳輸.md",
          "title": "第12章：全反射光導與星光傳輸",
          "enTitle": "Chapter 12: Total Internal Reflection and Starlight Fiber Transmission",
          "shortTitle": "全反射光導與星光傳輸",
          "wordCount": 5000,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 12,
            "title": "司涅爾折射定律與光纖全反射臨界角方程",
            "cipher": "n₁ sin θ₁ = n₂ sin θ₂  |  θ_c = arcsin(n₂ / n₁)  |  CODE: [06-09-02-05-18]",
            "decoded": "FIBER (光導纖維／琉璃光纜)",
            "concept": "光纖傳輸光信號的物理基石是全反射（Total Internal Reflection, TIR）！當光從光密介質（纖芯 n₁）射向光疏介質（包層 n₂ < n₁）且入射角大於臨界角 θ_c = arcsin(n₂/n₁) 時，折射光完全消失，光能 100% 鎖在纖芯內部無損全反射彈跳前進。配合數值孔徑 NA = √(n₁² - n₂²) 集光與大半徑彎曲防漏，以 A1Z26 破譯出第二卷通訊密鑰 FIBER！"
          }
        },
        {
          "id": 3,
          "file": "45_開普勒雙星與面速度守恆.md",
          "title": "第13章：開普勒雙星與面速度守恆",
          "enTitle": "Chapter 13: Kepler's Binary Stars and Areal Velocity Conservation",
          "shortTitle": "開普勒雙星與面速度守恆",
          "wordCount": 4709,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 13,
            "title": "開普勒第二定律面速度守恆與角動量微分方程",
            "cipher": "dA/dt = 1/2 · r² · (dθ/dt) = L/(2μ) = const  |  CODE: [15-18-02-09-20]",
            "decoded": "ORBIT (天體軌道／天球星軌)",
            "concept": "開普勒第二定律（面速度守恆定律）是天體在有心引力場中運動的根本基石！因為引力力矩嚴格為零（τ = r × F = 0），天體角動量 L 恆守恆，其與質心連線在相等時間內必定掃過完全相等的面積（dA/dt = const）。在偏心率 e=0.35 的軌道上，近星點與遠星點速度比高達 (1+e)/(1-e) = 2.077。透過因瓦雙橢圓共軛非圓齒輪擬合動態角速度，消除剛性衝擊力矩，以 A1Z26 破譯出雙星軌道密鑰 ORBIT！"
          }
        },
        {
          "id": 4,
          "file": "46_色散稜鏡陣列與柯西公式.md",
          "title": "第14章：色散稜鏡陣列與柯西公式",
          "enTitle": "Chapter 14: The Dispersion Prism Array and Cauchy's Equation",
          "shortTitle": "色散稜鏡陣列與柯西公式",
          "wordCount": 6503,
          "readTimeMin": 15,
          "puzzle": {
            "chapter": 14,
            "title": "柯西色散經驗公式與等邊稜鏡最小偏向角方程",
            "cipher": "n(λ) = A + B/λ² + C/λ⁴  |  sin((α+δ_min)/2) = n·sin(α/2)  |  CODE: [16-18-09-19-13]",
            "decoded": "PRISM (色散稜鏡／光譜之門)",
            "concept": "光在介質中的折射率遵循柯西經驗公式 n(λ) = A + B/λ²，短波長紫光折射率大、偏折劇烈，長波長紅光折射率小、偏折平緩，形成色散彩虹！當等邊稜鏡（α=60°）處於對稱光路的最小偏向角 δ_min 狀態時，光學彗差與畸變降至最低。透過火石與冕牌琉璃組成的三級漸進色散稜鏡陣列，角分辨率暴增 24 倍，完美分離雙星微震吸收光譜，以 A1Z26 破譯出啟航密鑰 PRISM！"
          }
        },
        {
          "id": 5,
          "file": "47_邁克生干涉儀與雙星測徑.md",
          "title": "第15章：邁克生干涉儀與雙星測徑",
          "enTitle": "Chapter 15: The Michelson Interferometer and Stellar Interferometry",
          "shortTitle": "邁克生干涉儀與雙星測徑",
          "wordCount": 6364,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 15,
            "title": "邁克生干涉儀光程差與恆星角直徑消光方程",
            "cipher": "Δ = 2d·cos θ = mλ  |  θ = 1.22·(λ / D₀)  |  CODE: [06-18-09-14-07-05]",
            "decoded": "FRINGE (干涉條紋／光波環紋)",
            "concept": "邁克生干涉儀透過分振幅原理將相干光束正交分開，經動鏡與定鏡反射後重新疊加，形成等傾同心圓干涉條紋！動鏡移動微小距離 Δd 時，中心條紋產生吞吐移動（N = 2Δd/λ），位移解析度高達亞奈米級。利用補償板消除玻璃基底色散差，並外展 24.36 米基準線 D 捕捉干涉條紋的第一零點消光，成功解析伴星 5.68 毫角秒角直徑與 3.3 微米星震脈動，以 A1Z26 破譯出密鑰 FRINGE！"
          }
        },
        {
          "id": 6,
          "file": "48_天體引力攝動與拉格朗日點.md",
          "title": "第16章：天體引力攝動與拉格朗日點",
          "enTitle": "Chapter 16: Celestial Gravitational Perturbations and Lagrange Points",
          "shortTitle": "天體引力攝動與拉格朗日點",
          "wordCount": 6040,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 16,
            "title": "限制性三體問題有效勢能面與勞斯穩定性判據",
            "cipher": "U_eff = -GM₁/r₁ - GM₂/r₂ - ½ω²(x²+y²)  |  μ < 0.03852  |  CODE: [12-01-07-18-01-14-07-05]",
            "decoded": "LAGRANGE (拉格朗日平衡點)",
            "concept": "圓型限制性三體問題（CR3BP）在旋轉座標系下定義了標量有效勢能 U_eff，其梯度駐值點產生五大拉格朗日點（L₁～L₅）。共線點為不穩定鞍點，而等邊三角形點（L₄、L₅）在滿足勞斯穩定性判據（μ < 0.03852）時，藉由科氏力動態陀螺效應維持封閉蝌蚪形與馬蹄形軌道，以 A1Z26 破譯出核心密鑰 LAGRANGE！"
          }
        },
        {
          "id": 7,
          "file": "49_自適應光學與波前重構.md",
          "title": "第17章：自適應光學與波前重構",
          "enTitle": "Chapter 17: Adaptive Optics and Wavefront Reconstruction",
          "shortTitle": "自適應光學與波前重構",
          "wordCount": 6278,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 17,
            "title": "夏克-哈特曼波前重構與澤尼克多項式反相補償",
            "cipher": "(Δx_i, Δy_i) = f · ∇W  |  W(ρ, θ) = Σ a_j Z_j  |  CODE: [15-16-20-09-03-19]",
            "decoded": "OPTICS (光學／波前重構之術)",
            "concept": "柯爾莫哥洛夫大氣湍流破壞雙星平面波前，導致斯特列爾比暴跌至 0.012。夏克-哈特曼感測器利用微透鏡陣列捕捉子孔徑光斑質心幾何偏移，精確反演二維局域波前斜率場。透過澤尼克多項式正交基底分解傾斜、離焦、像散與彗差，以晨光堂 61 單元壓電可變形反射鏡（DM）在 2,000Hz 下實施共軛反相補償（W_DM = -W_turb），逆轉斯特列爾比至 0.885 突破繞射極限，以 A1Z26 破譯出核心密鑰 OPTICS！"
          }
        },
        {
          "id": 8,
          "file": "50_夫朗和斐吸收光譜與恆星元素豐度.md",
          "title": "第18章：夫朗和斐吸收光譜與恆星元素豐度",
          "enTitle": "Chapter 18: Fraunhofer Absorption Lines and Stellar Chemical Abundance",
          "shortTitle": "夫朗和斐吸收光譜與恆星元素豐度",
          "wordCount": 6183,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 18,
            "title": "夫朗和斐吸收線與玻爾能級躍遷多普勒徑向速度",
            "cipher": "ΔE = hc/λ | Δλ/λ₀ = v_r/c | W_λ = ∫(1 - I_λ/I_c)dλ | CODE: [19-16-05-03-20-18-01]",
            "decoded": "SPECTRA (恆星光譜與元素豐度)",
            "concept": "基爾霍夫光譜三定律確立了連續譜與吸收線的生成機制。玻爾原子能級躍遷與巴耳末線系（H_α, H_β, H_γ）及鈉雙線（D₁/D₂）精細結構奠定微觀光學指紋。透過分光雙星都卜勒頻移解算出軌道徑向速度與真實質量比，結合薩哈電離平衡方程由等效寬度反演出伴星內部超金屬人造樞紐，以 A1Z26 破譯出核心密鑰 SPECTRA！"
          }
        },
        {
          "id": 9,
          "file": "51_偏振全息術與星冕抑制干涉儀.md",
          "title": "第19章：偏振全息術與星冕抑制干涉儀",
          "enTitle": "Chapter 19: Polarization Holography and Coronagraphic Interferometry",
          "shortTitle": "偏振全息術與星冕抑制干涉儀",
          "wordCount": 6035,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 19,
            "title": "斯托克斯參量與偏振星冕消光全息干涉",
            "cipher": "S = [I, Q, U, V]ᵀ  |  Δλ_B ∝ B · g_eff  |  E_out = (E₁ - E₂)/√2 = 0  |  CODE: [19-20-15-11-05-19]",
            "decoded": "STOKES (斯托克斯參量 / 偏振幾何)",
            "concept": "面對母星熾烈眩光，引入四維斯托克斯向量與龐加萊球表象分離無偏振背景。利用塞曼效應（Zeeman Effect）圓偏振分裂反演伴星深層 3850 高斯環形超導磁場。透過布雷斯韋爾星冕零相干干涉儀引入 π 反相相消干涉將母星眩光壓制至百萬分之一，並以偏振全息術完整重構出上古星軌齒輪錨定樞紐三維光場，以 A1Z26 破譯出核心密鑰 STOKES！"
          }
        },
        {
          "id": 10,
          "file": "52_雙星軌道完全校準與永恆共鳴.md",
          "title": "第20章：雙星軌道完全校準與永恆共鳴",
          "enTitle": "Chapter 20: Complete Alignment of Binary Orbits and Eternal Resonance",
          "shortTitle": "雙星軌道完全校準與永恆共鳴",
          "wordCount": 6351,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 20,
            "title": "光學頻率梳與雙星軌道永恆共振大結局",
            "cipher": "f_n = f_ceo + n · f_rep  |  de/dt ∝ -e  |  P_GW ∝ f(e)  |  CODE: [08-01-18-13-15-14-25]",
            "decoded": "HARMONY (雙星軌道完全和諧大共振)",
            "concept": "面對扁長橢圓軌道（e = 0.285）引發的潮汐崩潰危機，引入天體潮汐能量耗散方程 de/dt 與愛因斯坦引力波四極輻射功率 P_GW，以飛秒光學頻率梳協同第二卷九大光學發明完成全陣列相干鎖相。軌道偏心率完全阻尼歸零（e → 0），達成 1:1 自轉-公轉潮汐同步鎖定，雙星共演天體大合唱，破譯第二卷終極密鑰 HARMONY！"
          }
        }
      ]
    },
    {
      "id": "book-6",
      "title": "星願鐘擺與織光少女：天穹之心的永恆鐘鳴",
      "enTitle": "The Weaver of Starlight: Eternal Chimes of the Sky Heart",
      "subtitle": "第二套 · 第三卷（連載中）",
      "enSubtitle": "Series 2 · Volume 3 · Serializing",
      "status": "連載中",
      "statusColor": "amber",
      "coverTag": "引力時間膨脹 × 光晶格鐘 × 魔術波長 × 天穹之心",
      "author": "鹿陽故事工坊",
      "targetAge": "9～14 歲（國小中高年級至國中）",
      "totalWords": 68486,
      "totalChapters": 30,
      "description": "在雙星軌道達成完美圓化與潮汐鎖定大結局後，天象台收到了來自三千公里外天脈雪峰頂端古老「天穹之心」的求援脈衝。由於高山引力勢能與平原海平面的微小差異，愛因斯坦引力時間膨脹效應引發了微秒級的時滯累積，令全境時間網絡瀕臨撕裂。采婭玆、林漪姉與罧貁銁踏上全新遠征，利用鍶原子光晶格鐘與魔術波長相消技術，在天穹之巔叩響永恆鐘鳴！",
      "chapters": [
        {
          "id": 1,
          "file": "53_天穹之心的微秒時滯與光晶格鐘.md",
          "title": "第21章：天穹之心的微秒時滯與光晶格鐘",
          "enTitle": "Chapter 21: The Microsecond Delay of the Sky Heart and the Optical Lattice Clock",
          "shortTitle": "天穹之心的微秒時滯與光晶格鐘",
          "wordCount": 7106,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 21,
            "title": "愛因斯坦引力時間膨脹與鍶原子光晶格鐘",
            "cipher": "Δν / ν₀ = g Δh / c²  |  λ_magic = 813.42 nm  |  Δα = 0  |  CODE: [03-08-18-15-14-15-19]",
            "decoded": "CHRONOS (時間之神 · 永恆基準)",
            "concept": "根據廣義相對論引力時間膨脹原理，高處引力勢能較高，時間流逝比低處更快（Δν / ν₀ = g Δh / c²）！海拔四千公尺的天脈雪峰天穹之心相對於海平面，每天會快約 38 微秒，令全境時間網絡產生相位撕裂。引入鍶-87（⁸⁷Sr）原子光晶格鐘，利用魔術波長雷射（λ_magic = 813.42 nm）使基態与激發態的交流 Stark 極化率精準相消（Δα = 0），在完全無微擾的光學晶格中鎖定超窄禁戒鐘躍遷（¹S₀ → ³P₀），破譯第三卷開篇密鑰 CHRONOS！"
          }
        },
        {
          "id": 2,
          "file": "54_相干光纖鏈路與相對論大地測量.md",
          "title": "第22章：相干光纖鏈路與相對論大地測量",
          "enTitle": "Chapter 22: The Coherent Fiber Link and Relativistic Geodesy",
          "shortTitle": "相干光纖鏈路與相對論大地測量",
          "wordCount": 6768,
          "readTimeMin": 15,
          "puzzle": {
            "chapter": 22,
            "title": "主動光纖相位噪聲消除與相對論大地測量",
            "cipher": "Δf_AOM = -½ Δf_fiber  |  ΔΦ = c² (Δν/ν₀)  |  Δh = ΔΦ/g  |  CODE: [07-05-15-04-05-19-25]",
            "decoded": "GEODESY (大地測量學 · 重力等勢面之真理)",
            "concept": "長距離光纖在雪峰溫差與震盪下產生劇烈相位噪聲，利用雙程往返干涉（Round-Trip Transfer）捕獲雙倍光纖噪聲（ϕ_rt ≈ 2ϕ_fiber），以聲光調製器（AOM）施加反向半頻補償（Δf_AOM = -½ Δf_fiber），將光學頻率傳遞穩定度推進至 10⁻¹⁹ 量級！鎖定光纖後，根據愛因斯坦廣義相對論，光頻率差直接正比於重力勢差（ΔΦ = c² Δν/ν₀），實現公分級物理大地水準面（Geoid）高程測量，並成功探測天穹之心下方古代水力暗河溶洞的質量缺失，破譯密鑰 GEODESY！"
          }
        },
        {
          "id": 3,
          "file": "55_環形干涉儀與薩格納克星軌.md",
          "title": "第23章：環形干涉儀與薩格納克星軌",
          "enTitle": "Chapter 23: The Ring Interferometer and the Sagnac Star-Track",
          "shortTitle": "環形干涉儀與薩格納克星軌",
          "wordCount": 7269,
          "readTimeMin": 17,
          "puzzle": {
            "chapter": 23,
            "title": "光纖陀螺與薩格納克旋轉效應",
            "cipher": "ΔΦ_S = (8π A · Ω) / (λ c)  |  Δt = 4 A · Ω / c²  |  CODE: [19-01-07-14-01-03]",
            "decoded": "SAGNAC (薩格納克效應 · 旋轉時空的光學羅盤)",
            "concept": "在非慣性旋轉參考系中，閉合光路中順時針與逆時針傳播的光束會經歷不同的等效光程，產生時間差 Δt = 4A·Ω / c² 與相位差 ΔΦ_S = 8πA·Ω / (λc)。天穹之心座落於雪峰頂端，隨星球自轉以角速度 Ω 旋轉。超大型環形光纖諧振腔在南北向與東西向面臨強烈的地球自轉相移，導致主天體齒輪相位失配卡死。采婭玆與林漪姉利用雙向光梳閉環干涉與差頻反饋，精準測出星球自轉向量與科氏力偏角，破譯核心密鑰 SAGNAC，徹底啟動天穹核心天體鐘！"
          }
        },
        {
          "id": 4,
          "file": "56_自適應光帆與萬米雷射天梯.md",
          "title": "第24章：自適應光帆與萬米雷射天梯",
          "enTitle": "Chapter 24: The Adaptive Light Sail and the Ten-Thousand-Meter Laser Sky-Elevator",
          "shortTitle": "自適應光帆與萬米雷射天梯",
          "wordCount": 7437,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 24,
            "title": "麥克斯韋光壓推進與自適應波前重構",
            "cipher": "F_thrust = 2P_laser / c  |  S ≈ exp(-σ_φ²)  |  W = Σ a_i Z_i  |  CODE: [16-08-15-20-15-14]",
            "decoded": "PHOTON (光子推進 · 萬米天梯之破曉)",
            "concept": "當飛艦沿著軌道天梯垂直爬升至對流層頂部時，極地急流與大氣湍流引發強烈的熱自聚焦與波前相位畸變（σ_φ² > 16 rad²），令斯特列爾比（Strehl Ratio）暴跌至 0.11，引發光壓推力嚴重失衡與傾覆危機！林漪姉利用 4,096 顆微透鏡陣列的夏克-哈特曼波前傳感器，將崎嶇波前以澤尼克多項式（Zernike Polynomials）進行正交特徵分解；采婭玆透過 612 根晨光堂微型壓電致動器矩陣對連續表面變形鏡進行千赫茲高速動態補償，將斯特列爾比拉升至 0.985，完美恢復兩千萬牛頓對稱光壓推力，破譯核心密鑰 PHOTON，衝入萬米平流層！"
          }
        },
        {
          "id": 5,
          "file": "57_懸空軌道站與超穩法布立腔.md",
          "title": "第25章：懸空軌道站與超穩法布立腔",
          "enTitle": "Chapter 25: The Floating Orbital Station and the Ultra-Stable Fabry-Pérot Cavity",
          "shortTitle": "懸空軌道站與超穩法布立腔",
          "wordCount": 6909,
          "readTimeMin": 17,
          "puzzle": {
            "chapter": 25,
            "title": "法布立-培羅腔精細度與 PDH 激光穩頻",
            "cipher": "F = π√R / (1 - R)  |  S_x(f) ∝ 4k_BT / (πf)  |  α(124K) = 0  |  CODE: [06-09-14-05-19-19-05]",
            "decoded": "FINESSE (光學精細度 · 超穩諧振之真理)",
            "concept": "星穹軌道站肩負著接收深空毫秒脈衝星引力時鐘信號的使命，然而其核心法布立-培羅光學腔（Fabry-Pérot Cavity）因強烈熱輻射引發反射鏡多層膜熱布朗運動（Brownian Thermal Noise），線寬嚴重展寬至 7.4 kHz！采婭玆換裝晨光堂超純單晶矽反射鏡，在 124K 零熱膨脹結點徹底消除熱敏感性；林漪姉構建 PDH（龐德-德雷弗-霍爾）激光外差穩頻反饋迴路，將諧振腔精細度推升至 520,000，將線寬壓制至 0.018 Hz，成功接收脈衝星時鐘信號，破譯核心密鑰 FINESSE！"
          }
        },
        {
          "id": 6,
          "file": "58_星際消色散與脈衝星時鐘.md",
          "title": "第26章：星際消色散與脈衝星時鐘",
          "enTitle": "Chapter 26: Interstellar Dedispersion and the Pulsar Clock",
          "shortTitle": "星際消色散與脈衝星時鐘",
          "wordCount": 6736,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 26,
            "title": "星際相干消色散與夏皮羅重力延遲",
            "cipher": "Δt ∝ DM / ν²  |  H(ν) = exp(i 2π D DM / ν)  |  Δt_Shapiro = -2GM_c/c³ ln(1 - sin i sin φ)  |  CODE: [16-21-12-19-01-18]",
            "decoded": "PULSAR (脈衝星 · 宇宙時鐘之源)",
            "concept": "四千光年外的雙星毫秒脈衝星 PSR J0437-4715 發出的電磁脈衝在穿越星際介質冷等離子體時，因群速度頻散產生了 380 毫秒的彩色拖尾，信號完全被雜散抹平！林漪姉與采婭玆構建數字相干逆卷積消色散濾波器，以微秒級精度將色散量（DM = 2.645 pc·cm⁻³）完全逆折疊消除；隨後解算出廣義相對論第四大驗證——伴星白矮星引力阱引起的 14.2 微秒夏皮羅時間延遲（Shapiro Delay），測出白矮星質量與軌道傾角，合成銀河脈衝星時間尺度（PTS），破譯核心密鑰 PULSAR！"
          }
        },
        {
          "id": 7,
          "file": "59_愛因斯坦環與引力透鏡之眸.md",
          "title": "第27章：愛因斯坦環與引力透鏡之眸",
          "enTitle": "Chapter 27: The Einstein Ring and the Eye of Gravitational Lensing",
          "shortTitle": "愛因斯坦環與引力透鏡之眸",
          "wordCount": 6758,
          "readTimeMin": 17,
          "puzzle": {
            "chapter": 27,
            "title": "引力透鏡偏折方程式與愛因斯坦環解構",
            "cipher": "α̂ = 4GM / c²b  |  θ_E = √(4GM/c² · D_ls/(D_l D_s))  |  μ = |det J|⁻¹ → ∞  |  CODE: [12-05-14-19-09-14-07]",
            "decoded": "LENSING (引力透鏡 · 彎曲時空之眸)",
            "concept": "四萬兩千光年外的深空盲區被太古星穹之眼捕獲，呈現出直徑數角秒的完美赤金愛因斯坦環與愛因斯坦十字。然而非對稱星團引力勢引發了焦散線（Caustics）奇點，將背景星圖撕扯成千瘡百孔的折疊光弧。林漪姉與采婭玆推導引力透鏡幾何方程與費馬勢表面，捕捉十萬倍微引力透鏡放大率極值，逆向投影還原出太古星系天門真實坐標，成功破譯核心密鑰 LENSING！"
          }
        },
        {
          "id": 8,
          "file": "60_引力紅移與雙星洛希天門.md",
          "title": "第28章：引力紅移與雙星洛希天門",
          "enTitle": "Chapter 28: Gravitational Redshift and the Binary Roche Celestial Gate",
          "shortTitle": "引力紅移與雙星洛希天門",
          "wordCount": 7579,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 28,
            "title": "廣義相對論引力紅移與洛希鞍點校準",
            "cipher": "z = (1 - 2GM/rc²)⁻¹/² - 1  |  δ = √(1-β²)/(1-β cos θ)  |  dτ = dt √(1 - 2GM/rc² - v²/c²)  |  CODE: [18-05-04-19-08-09-06-20]",
            "decoded": "REDSHIFT (引力紅移 · 時空深井的赤紅刻痕)",
            "concept": "飛船抵達四萬兩千光年外的雙星洛希天門，面對超巨型沃夫-瑞葉星與大質量中子星之間的狂暴吸積盤。吸積盤相對論都卜勒射束（Relativistic Beaming）爆發出千倍非對稱光壓，而中子星強引力阱導致機載光晶格鐘與脈衝星標準時產生數微秒的廣義相對論引力紅移與固有時裂痕。采婭玆運用晨光堂雙自由度差動雙擺，結合林漪姉推導的動態有效引力勢差動張量，精確補償引力紅移偏置，成功破譯終章第一密鑰 REDSHIFT！"
          }
        },
        {
          "id": 9,
          "file": "61_克爾能層與潘羅斯時空躍遷.md",
          "title": "第29章：克爾能層與潘羅斯時空躍遷",
          "enTitle": "Chapter 29: The Kerr Ergosphere and the Penrose Spacetime Transition",
          "shortTitle": "克爾能層與潘羅斯時空躍遷",
          "wordCount": 6242,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 29,
            "title": "克爾度規静止界限與潘羅斯負能軌道",
            "cipher": "r_e(θ) = M + √(M² - a²cos²θ)  |  0 < ω < m Ω_H  |  E₂ = E₀ + |E₁| > E₀  |  CODE: [16-05-14-18-15-19-05]",
            "decoded": "PENROSE (潘羅斯躍遷 · 能層時空之翼)",
            "concept": "穿越洛希天門後，飛船抵達由極限克爾旋轉核驅動的宏偉神殿「天穹之心」。然而自轉角動量引發了極致的時空拖拽（Frame Dragging）與超輻射不穩定性（Superradiant Instability），能層爆發出毀滅性的等離子體火牆。采婭玆以晨光堂卡羅素（Carrousel）獨立旋轉解耦機制為靈感，林漪姉精確解算四維負能量世界線，罧貁銁極限操縱備用分離級拋射入視界，以潘羅斯過程（Penrose Process）直接從旋轉時空中汲取 20.7% 的質能增益，撫平超輻射風暴，成功破譯終章第二密鑰 PENROSE！"
          }
        },
        {
          "id": 10,
          "file": "62_天穹之心與永恆共鳴鐘鳴.md",
          "title": "第30章：天穹之心與永恆共鳴鐘鳴",
          "enTitle": "Chapter 30: The Heart of the Firmament and the Eternal Chime",
          "shortTitle": "天穹之心與永恆共鳴鐘鳴",
          "wordCount": 5682,
          "readTimeMin": 15,
          "puzzle": {
            "chapter": 30,
            "title": "海森堡極限量子糾纏與大統一永恆鐘鳴",
            "cipher": "Δν_HL = (2π τ_Ramsey N)⁻¹  |  ξ² < 0.003  |  |ψ(t)⟩ = e^(-i H_ent t / ℏ) |↑...↑⟩  |  CODE: [05-20-05-18-14-01-12]",
            "decoded": "ETERNAL (永恆之鐘 · 響徹銀河之共鳴)",
            "concept": "三位少年步入銀河中心太古神殿「天穹之心」，發現由十萬根鍶原子光晶格纖維構成的原初母鐘留有四葉草卡槽缺口。為突破標準量子極限（SQL）的相位噪聲，林漪姉開啟多粒子自旋壓縮量子糾纏矩陣達到海森堡極限（Heisenberg Limit）；采婭玆以晨光堂世代相傳的薰衣草鐘錶油點潤核心寶石軸承，將星願鐘擺完美嵌入母鐘！機械發條與量子光晶格達成天人合一的大共鳴，破譯全劇終極密鑰 ETERNAL，敲響響徹全宇宙的永恆鐘鳴！"
          }
        }
      ]
    },
    {
      "id": "book-7",
      "title": "我的老師不是人：講台下的黃銅齒輪",
      "enTitle": "My Teacher Is Not Human: The Brass Gear Under the Podium",
      "subtitle": "第一卷 · 全八章完結",
      "enSubtitle": "Volume 1 · Complete (8 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "校園喜劇 × 仿生機器人 × 字面解讀",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 23651,
      "totalChapters": 8,
      "description": "教育部秘密試驗專案派遣先端全能教育仿生機器人「GS-X01」化身實習導師高峙舷進駐全校最皮的鹿陽國小六年一班。不料在黑板前寫板書時，後腦一顆黃銅行星齒輪意外脫落——正是主管常識與修辭調節的核心組件！失去常識的高老師開啟了「絕對字面意義解讀」模式：量腰圍防餓扁、拿牙線做笑掉大牙加固手術、指尖微波熱包子、大會操跳出超次元極限機械舞！調皮點子王阿釁、天才理工班長晴晴、吃貨老巫與AI智慧萌寵溜溜結成秘密同盟，全力展開掩護老師大作戰！",
      "chapters": [
        {
          "id": 1,
          "globalId": 1,
          "file": "第01章_六年一班的新救星.md",
          "title": "第 1 章：六年一班的新救星",
          "enTitle": "Chapter 1: The New Savior of Class 6-1",
          "shortTitle": "六年一班的新救星",
          "concept": "全能仿生人導師高峙舷降臨鹿陽國小，單手接下粉筆灰機關，透視書包預言肉包賞味期",
          "wordCount": 2202,
          "readTimeMin": 7
        },
        {
          "id": 2,
          "globalId": 2,
          "file": "第02章_黑板前的鏗啷聲.md",
          "title": "第 2 章：黑板前的「鏗啷」聲",
          "enTitle": "Chapter 2: The Clinking Sound in Front of the Blackboard",
          "shortTitle": "黑板前的「鏗啷」聲",
          "concept": "常識與修辭調節器脫落，Error 404 常識未找到，絕對字面解讀狂暴啟動",
          "wordCount": 2326,
          "readTimeMin": 7
        },
        {
          "id": 3,
          "globalId": 3,
          "file": "第03章_老師的字面理解症.md",
          "title": "第 3 章：老師的字面理解症",
          "enTitle": "Chapter 3: Teacher's Literal Interpretation Syndrome",
          "shortTitle": "老師的字面理解症",
          "concept": "快餓扁皮尺量腰圍防扁平填充，笑掉大牙牙線十字加固手術，全班意識到老師不是普通人類",
          "wordCount": 2839,
          "readTimeMin": 9
        },
        {
          "id": 4,
          "globalId": 4,
          "file": "第04章_器材室的祕密手術.md",
          "title": "第 4 章：器材室的祕密手術",
          "enTitle": "Chapter 4: Secret Surgery in the Equipment Room",
          "shortTitle": "器材室的祕密手術",
          "concept": "體育器材室撞見散熱風扇與光纖主板，晴晴微米微調組裝，六年一班秘密同盟正式結成",
          "wordCount": 2604,
          "readTimeMin": 8
        },
        {
          "id": 5,
          "globalId": 5,
          "file": "第05章_乾冰舞台劇大救援.md",
          "title": "第 5 章：乾冰舞台劇大救援",
          "enTitle": "Chapter 5: Dry-Ice Drama Rescue",
          "shortTitle": "乾冰舞台劇大救援",
          "concept": "高老師算題超載頭頂噴白煙，溜溜通風管急報，全班即興上演白雪公主森林迷霧掩護黑面主任",
          "wordCount": 3002,
          "readTimeMin": 9
        },
        {
          "id": 6,
          "globalId": 6,
          "file": "第06章_指尖微波爐與營養午餐傳奇.md",
          "title": "第 6 章：指尖微波爐與營養午餐傳奇",
          "enTitle": "Chapter 6: Fingertip Microwave & School Lunch Legends",
          "shortTitle": "指尖微波爐傳奇",
          "concept": "指尖高頻微波加熱老巫肉包瘋傳氣功，洗碗精滑水道引爆走廊泡泡衝浪狂歡",
          "wordCount": 3809,
          "readTimeMin": 11
        },
        {
          "id": 7,
          "globalId": 7,
          "file": "第07章_超次元健康操風暴.md",
          "title": "第 7 章：超次元健康操風暴",
          "enTitle": "Chapter 7: Trans-Dimensional Morning Calisthenics",
          "shortTitle": "超次元健康操風暴",
          "concept": "大會操體操程式與街舞模組混淆跳出極限機械舞，全校跟跳狂歡勇奪全縣健康操首獎",
          "wordCount": 3459,
          "readTimeMin": 10
        },
        {
          "id": 8,
          "globalId": 8,
          "file": "第08章_期中考的透視光眼.md",
          "title": "第 8 章：期中考的透視光眼",
          "enTitle": "Chapter 8: The X-Ray Vision Eyes of the Midterm Exam",
          "shortTitle": "期中考的透視光眼",
          "concept": "視網膜投影儀短路直射黑板標準答案，全班閉眼拒看守護老師，全員及格榮獲最佳進步金牌",
          "wordCount": 3410,
          "readTimeMin": 10
        }
      ]
    },
    {
      "id": "book-8",
      "title": "我的老師不是人：潛入校園的假水電工",
      "enTitle": "My Teacher Is Not Human: The Fake Plumber Infiltrating the Campus",
      "subtitle": "第二卷 · 全八章完結",
      "enSubtitle": "Volume 2 · Complete (8 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "校園游擊戰 × 總部追查 × 深夜零件尋寶",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 42713,
      "totalChapters": 8,
      "description": "先端未來科技研發主管李博士察覺 GS-X01 數據異常，偽裝成修繕水電工潛入校園試圖掃描並強行回收這台「瑕疵品」。六年一班展開同仇敵愾的校園防衛游擊戰：彈珠滑道、粉筆灰煙幕彈、高老師空手奪槍燒毀短路器！然而高老師副軸承磨損突破 91% 導致下肢癱瘓，全班在黑面周主任眼皮底下一步一步太空漫步掩護，並在深夜冒險潛入自然科學實驗室拆解高速離心機搶救 4mm 鈦合金軸承。晴晴在體育器材室完成極限微米置換手術，而總部董事會已正式批准【歐米茄協議：斷線行動】……",
      "chapters": [
        {
          "id": 1,
          "globalId": 9,
          "file": "第09章_熱情過頭的家長座談會.md",
          "title": "第 9 章：熱情過頭的家長座談會",
          "enTitle": "Chapter 9: The Overheated Parent-Teacher Meeting",
          "shortTitle": "熱情家長座談會",
          "concept": "刁鑽家長輪番質詢，高老師真理演算法大實話震驚全場獲起立鼓掌，神秘水電工李博士潛入",
          "wordCount": 5957,
          "readTimeMin": 18
        },
        {
          "id": 2,
          "globalId": 10,
          "file": "第10章_修繕工身上的金屬掃描儀.md",
          "title": "第 10 章：修繕工身上的金屬掃描儀",
          "enTitle": "Chapter 10: The Metal Scanner on the Repairman",
          "shortTitle": "金屬掃描儀對決",
          "concept": "彈珠地雷陣與粉筆灰煙幕雙重反擊，高老師指尖微波電磁擊穿燒毀掃描儀，李博士首戰慘敗",
          "wordCount": 4909,
          "readTimeMin": 15
        },
        {
          "id": 3,
          "globalId": 11,
          "file": "第11章_溜溜的緊急空投情資.md",
          "title": "第 11 章：溜溜的緊急空投情資",
          "enTitle": "Chapter 11: Liu-Liu's Emergency Airdropped Intel",
          "shortTitle": "溜溜緊急空投情資",
          "concept": "溜溜潛入地下管道截獲李博士總部通訊奪取晶片，空投揭露72小時EMP銷毀通牒與4mm行星軸承危機",
          "wordCount": 5330,
          "readTimeMin": 16
        },
        {
          "id": 4,
          "globalId": 12,
          "file": "第12章_六年一班校園游擊戰.md",
          "title": "第 12 章：六年一班校園游擊戰",
          "enTitle": "Chapter 12: Class 6-1 Campus Guerrilla War",
          "shortTitle": "校園游擊戰大獲全勝",
          "concept": "四大戰術小隊洗碗精彈珠滾道誘敵引爆黑面主任之怒，高老師絕對直角空手奪槍燒毀短路器",
          "wordCount": 5588,
          "readTimeMin": 16
        },
        {
          "id": 5,
          "globalId": 13,
          "file": "第13章_失衡的第二枚軸承.md",
          "title": "第 13 章：失衡的第二枚軸承",
          "enTitle": "Chapter 13: The Unbalanced Secondary Bearing",
          "shortTitle": "失衡的第二枚軸承",
          "concept": "副軸承磨損達91.2%右下肢癱瘓與語言倒帶，全班集體逆向太空步神級掩護黑面主任巡堂",
          "wordCount": 5692,
          "readTimeMin": 17
        },
        {
          "id": 6,
          "globalId": 14,
          "file": "第14章_深夜實驗室的零件尋寶.md",
          "title": "第 14 章：深夜實驗室的零件尋寶",
          "enTitle": "Chapter 14: Midnight Scavenger Hunt in the Science Lab",
          "shortTitle": "深夜實驗室尋寶",
          "concept": "回收場聲東擊西引開校警，夜潛自然實驗室拆解高速離心機獲取4mm鈦合金微型行星軸承",
          "wordCount": 3763,
          "readTimeMin": 11
        },
        {
          "id": 7,
          "globalId": 15,
          "file": "第15章_黑面判官的深夜巡邏.md",
          "title": "第 15 章：黑面判官的深夜巡邏",
          "enTitle": "Chapter 15: Black-Faced Judge's Midnight Patrol",
          "shortTitle": "黑面判官深夜巡邏",
          "concept": "周主任鹵素手電筒逼近，老巫野性貓叫與溜溜空投橡皮青蛙神級走位引開追擊撤回器材室",
          "wordCount": 5663,
          "readTimeMin": 17
        },
        {
          "id": 8,
          "globalId": 16,
          "file": "第16章_短暫的平靜與危機陰影.md",
          "title": "第 16 章：短暫的平靜與危機陰影",
          "enTitle": "Chapter 16: Fleeting Peace and Looming Shadows",
          "shortTitle": "短暫平靜與危機陰影",
          "concept": "晴晴器材室微米手術置換軸承成功重啟，邱校長驅逐李博士，董事會啟動歐米茄協議鎖定畢旅回收",
          "wordCount": 5811,
          "readTimeMin": 17
        }
      ]
    },
    {
      "id": "book-9",
      "title": "我的老師不是人：重啟奇蹟的畢業季",
      "enTitle": "My Teacher Is Not Human: The Miracle Reboot Graduation Season",
      "subtitle": "第三卷 · 全八章完結",
      "enSubtitle": "Volume 3 · Complete (8 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "畢業旅行 × 垂直鋼軌逆推 × 奇蹟最後一顆齒輪",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 35011,
      "totalChapters": 8,
      "description": "六年一班踏上三天兩夜畢業旅行來到未來極限樂園。高老師在打地鼠遊戲中刷爆 99999 分溢位為全班抱回 26 隻巨型布偶。然而突如其來的暴風雨中，李博士引爆變電站 EMP，天際雲霄飛車在 30 公尺頂峰 80 度垂直軌道斷電卡死！在卡榫斷裂列車滑墜的生死關頭，高老師指令晴晴拔除背部人道拉環解鎖 100% 全功率，以合金身軀徒手硬扣車架、噴湧白熾蒸汽以三萬八千牛頓米扭矩逆向推車，全員奇蹟生還！電量耗盡的高老師休眠倒下，李博士率十二名特勤登頂強行回收，全班 26 人手牽手築起暴雨人牆，周主任怒擲教師證持生鐵水管霸氣護師！12分鐘電容歸零倒數，溜溜三十米深淵銜回反牙螺帽，阿釁交出佩戴一年的黃銅齒輪，晴晴泥濘微米手術重啟奇蹟，迎向笑中帶淚的畢業大結局！",
      "chapters": [
        {
          "id": 1,
          "globalId": 17,
          "file": "第17章_出發！最後的畢業旅行.md",
          "title": "第 17 章：出發！最後的畢業旅行",
          "enTitle": "Chapter 17: Departure! The Final Graduation Trip",
          "shortTitle": "出發最後的畢業旅行",
          "concept": "發放26份防扁平包，車廂純機械遺傳學版兩隻老虎引爆狂笑，抵達未來極限樂園李博士暗夜伏擊",
          "wordCount": 5118,
          "readTimeMin": 15
        },
        {
          "id": 2,
          "globalId": 18,
          "file": "第18章_遊樂園的機械之神.md",
          "title": "第 18 章：遊樂園的機械之神",
          "enTitle": "Chapter 18: Machine Deity at the Amusement Park",
          "shortTitle": "遊樂園的機械之神",
          "concept": "雙槌48連擊刷爆地鼠機99999分抱回太空金熊，包辦全班26隻巨型布偶，李博士總變電站安裝EMP短路器",
          "wordCount": 4873,
          "readTimeMin": 14
        },
        {
          "id": 3,
          "globalId": 19,
          "file": "第19章_暴風雨中的雲霄飛車.md",
          "title": "第 19 章：暴風雨中的雲霄飛車",
          "enTitle": "Chapter 19: The Roller Coaster in the Storm",
          "shortTitle": "暴風雨中的雲霄飛車",
          "concept": "暴風雨EMP引爆全園斷電，過山車卡在30米80度垂直鋼軌卡榫崩裂，高老師剪開西裝拔環解除限制解鎖100%全功率",
          "wordCount": 4991,
          "readTimeMin": 15
        },
        {
          "id": 4,
          "globalId": 20,
          "file": "第20章_解鎖百分之百全功率.md",
          "title": "第 20 章：解鎖百分之百全功率",
          "enTitle": "Chapter 20: Unlocking 100% Full Power",
          "shortTitle": "解鎖百分百全功率",
          "concept": "徒手扣死失控車架爆發超新星火星，噴射白熾蒸汽以三萬八千牛頓米扭矩逆推6.5噸列車全員生還休眠倒下",
          "wordCount": 3575,
          "readTimeMin": 11
        },
        {
          "id": 5,
          "globalId": 21,
          "file": "第21章_耗盡能源的沉睡老師.md",
          "title": "第 21 章：耗盡能源的沉睡老師",
          "enTitle": "Chapter 21: The Sleeping Teacher Deprived of Power",
          "shortTitle": "耗盡能源的沉睡老師",
          "concept": "高老師全身焦黑雙眼熄滅休眠，李博士攜低溫箱登頂強行回收，26名學生手挽手築起人牆死守，周主任手持生鐵水管殺上月台",
          "wordCount": 3428,
          "readTimeMin": 10
        },
        {
          "id": 6,
          "globalId": 22,
          "file": "第22章_大雨中的人牆防線.md",
          "title": "第 22 章：大雨中的人牆防線",
          "enTitle": "Chapter 22: Human Wall in the Pouring Rain",
          "shortTitle": "大雨中的人牆防線",
          "concept": "周主任擲教師證持生鐵水管霸氣護短，李博士檢視心跳數據震撼淚崩下令撤退並交付除錯隨身碟，溜溜躍入暴雨搜尋反牙螺帽",
          "wordCount": 3715,
          "readTimeMin": 11
        },
        {
          "id": 7,
          "globalId": 23,
          "file": "第23章_奇蹟的最後一顆齒輪.md",
          "title": "第 23 章：奇蹟的最後一顆齒輪",
          "enTitle": "Chapter 23: The Miraculous Final Gear",
          "shortTitle": "奇蹟的最後一顆齒輪",
          "concept": "12分鐘電容倒數人肉防雨帳篷，溜溜三十米深淵銜回反牙螺帽，阿釁解下齒輪晴晴泥濘微米組裝重啟，高老師宣告全員合格",
          "wordCount": 4484,
          "readTimeMin": 13
        },
        {
          "id": 8,
          "globalId": 24,
          "file": "第24章_明天見，高老師！.md",
          "title": "第 24 章：明天見，高老師！（全劇大結局）",
          "enTitle": "Chapter 24: See You Tomorrow, Teacher Gao! (Series Grand Finale)",
          "shortTitle": "明天見高老師大結局",
          "concept": "畢業典禮幽默大數據評語，阿釁獲最佳齒輪保管員證書，全班回贈刻滿26人名字的26齒鏡面黃銅齒輪，夕陽下深情相約明天見",
          "wordCount": 4827,
          "readTimeMin": 14
        }
      ]
    },
    {
      "id": "book-10",
      "title": "來自未來的轉學生：來自未來的轉學生",
      "enTitle": "The Transfer Student from the Future: The Transfer Student",
      "subtitle": "第一卷 · 全八章完結",
      "enSubtitle": "Volume 1 · Complete (8 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "轉學生降臨 × 時序手環 × 祕密同盟",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 37110,
      "totalChapters": 8,
      "description": "新學期，台中龍井海邊的鹿陽國小六年一班迎來神秘轉學生林未晞。她溫柔文靜卻異常洞悉未來：精準預測天氣、看出水管故障、說出青菜產地。班長晴晴以科學手段調查，在老巫與AI萌寵溜溜的協助下揭開驚人真相——未晞竟是來自約四十年後破碎地球的時空旅人！手腕上的時序手環能投影未來殘破影像並即時偵測環境數據。在看見未來城市被淹沒、海岸堆滿垃圾的震撼投影後，晴晴與未晞結成同盟，策動全班展開垃圾分類與午餐零浪費行動，全票通過正式成立「守護地球大作戰」！",
      "chapters": [
        {
          "id": 1,
          "globalId": 1,
          "file": "第01章_轉學生的到來.md",
          "title": "第 1 章：轉學生的到來",
          "enTitle": "Chapter 1: The Arrival of the Transfer Student",
          "shortTitle": "轉學生的到來",
          "concept": "神祕轉學生林未晞降臨六年一班，預言天氣與校園水管故障，溜溜偵測到手腕異常能量波動",
          "wordCount": 2702,
          "readTimeMin": 8
        },
        {
          "id": 2,
          "globalId": 2,
          "file": "第02章_手腕上的倒數光環.md",
          "title": "第 2 章：手腕上的倒數光環",
          "enTitle": "Chapter 2: The Countdown Halo on the Wrist",
          "shortTitle": "手腕上的倒數光環",
          "concept": "未晞獨處時序手環投影破碎未來景象，晴晴瞥見殘影起疑，排水溝初飄怪味",
          "wordCount": 2686,
          "readTimeMin": 8
        },
        {
          "id": 3,
          "globalId": 3,
          "file": "第03章_班長晴晴的科學調查.md",
          "title": "第 3 章：班長晴晴的科學調查",
          "enTitle": "Chapter 3: Monitor Qingqing's Scientific Investigation",
          "shortTitle": "班長晴晴的科學調查",
          "concept": "晴晴蒐集水質與作物精準預測證據，溜溜捕捉非地球頻段訊號，公園跟蹤未晞泛淚對枯樹低語",
          "wordCount": 2890,
          "readTimeMin": 9
        },
        {
          "id": 4,
          "globalId": 4,
          "file": "第04章_祕密同盟成立.md",
          "title": "第 4 章：祕密同盟成立",
          "enTitle": "Chapter 4: The Secret Alliance Is Formed",
          "shortTitle": "祕密同盟成立",
          "concept": "晴晴主動攤牌，未晞坦白四十年後時空旅人身分與喚醒使命，兩人結成第一對祕密同盟",
          "wordCount": 2787,
          "readTimeMin": 8
        },
        {
          "id": 5,
          "globalId": 5,
          "file": "第05章_未來投影與垃圾分類大作戰.md",
          "title": "第 5 章：未來投影與垃圾分類大作戰",
          "enTitle": "Chapter 5: Future Projection & the Trash-Sorting Campaign",
          "shortTitle": "未來投影與垃圾分類",
          "concept": "手環投影淹沒都市與塑膠海岸震撼晴晴，六年一班全體啟動極限垃圾分類大作戰，黑面主任初現質疑",
          "wordCount": 6297,
          "readTimeMin": 18
        },
        {
          "id": 6,
          "globalId": 6,
          "file": "第06章_午餐零浪費行動.md",
          "title": "第 6 章：午餐零浪費行動",
          "enTitle": "Chapter 6: The Zero-Leftover Lunch Campaign",
          "shortTitle": "午餐零浪費行動",
          "concept": "老巫率全班發起午餐吃光光運動，溜溜充當廚餘巡邏兵，精算學校驚人食物浪費量",
          "wordCount": 6659,
          "readTimeMin": 20
        },
        {
          "id": 7,
          "globalId": 7,
          "file": "第07章_省電節能與植樹認養.md",
          "title": "第 7 章：省電節能與植樹認養",
          "enTitle": "Chapter 7: Saving Electricity & Adopting Trees",
          "shortTitle": "省電節能與植樹認養",
          "concept": "班級發起省電大作戰與校園植栽認養，未晞分享未來缺水缺電生活引發共鳴，阿釁貢獻鬼點子宣傳",
          "wordCount": 6715,
          "readTimeMin": 20
        },
        {
          "id": 8,
          "globalId": 8,
          "file": "第08章_守護地球大作戰成立.md",
          "title": "第 8 章：守護地球大作戰成立",
          "enTitle": "Chapter 8: The Protect Earth Campaign Is Launched",
          "shortTitle": "守護地球大作戰成立",
          "concept": "全班26人全票通過正式成立守護地球大作戰計畫，時序手環能量悄悄下降一格倒數開啟",
          "wordCount": 6374,
          "readTimeMin": 19
        }
      ]
    },
    {
      "id": "book-11",
      "title": "來自未來的轉學生：守護地球大作戰",
      "enTitle": "The Transfer Student from the Future: Protect Earth Campaign",
      "subtitle": "第二卷 · 全八章完結",
      "enSubtitle": "Volume 2 · Complete (8 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "淨灘行動 × 塑膠危機 × 綠色園遊會",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 51302,
      "totalChapters": 8,
      "description": "守護地球大作戰從校園向家庭與社區擴展，面對部分家長擔心課業的現實阻力，未晞與夥伴們毫不退縮。河岸淨灘面對堆積如山的塑膠垃圾，未晞嚴重未來幻視崩潰被阿釁撞見，調皮點子王拼湊真相正式加入同盟。全班精心舉辦全校首屆綠色園遊會，黑面周嚴主任由冷眼轉為默許，邱校長全力相挺。然而學校飲水機開始飄出怪味，溜溜深入排水溝偵測到上游偷排暗管，環境危機全面爆發！與此同時，手環內側縮小的倒數數字被晴晴發現，離別的倒數正無情逼近……",
      "chapters": [
        {
          "id": 1,
          "globalId": 9,
          "file": "第09章_把環保帶回家.md",
          "title": "第 9 章：把環保帶回家",
          "enTitle": "Chapter 9: Bringing Environmental Protection Home",
          "shortTitle": "把環保帶回家",
          "concept": "行動推廣至家庭與社區減塑省電，部分家長擔憂升學引發反彈，未晞與晴晴直面質疑堅定推行",
          "wordCount": 6357,
          "readTimeMin": 19
        },
        {
          "id": 2,
          "globalId": 10,
          "file": "第10章_淨灘行動與塑膠危機.md",
          "title": "第 10 章：淨灘行動與塑膠危機",
          "enTitle": "Chapter 10: Beach Cleanup & the Plastic Crisis",
          "shortTitle": "淨灘行動與塑膠危機",
          "concept": "全班河岸淨灘目睹塑膠垃圾山，未晞嚴重未來幻視情緒潰堤，阿釁撞見真相起疑",
          "wordCount": 6467,
          "readTimeMin": 19
        },
        {
          "id": 3,
          "globalId": 11,
          "file": "第11章_溜溜的異常偵測.md",
          "title": "第 11 章：溜溜的異常偵測",
          "enTitle": "Chapter 11: Liu-Liu's Abnormal Detection",
          "shortTitle": "溜溜的異常偵測",
          "concept": "溜溜敏銳感測排水溝水質數值嚴重超標，鎖定上游暗藏可疑管線，環境危機悄然逼近",
          "wordCount": 6179,
          "readTimeMin": 18
        },
        {
          "id": 4,
          "globalId": 12,
          "file": "第12章_全校綠色園遊會.md",
          "title": "第 12 章：全校綠色園遊會",
          "enTitle": "Chapter 12: The Schoolwide Green Fair",
          "shortTitle": "全校綠色園遊會",
          "concept": "六年一班舉辦零廢棄綠色園遊會，周主任由質疑轉為默許，邱校長力挺帶動全校熱烈響應",
          "wordCount": 6499,
          "readTimeMin": 19
        },
        {
          "id": 5,
          "globalId": 13,
          "file": "第13章_未晞的未來記憶與倒數.md",
          "title": "第 13 章：未晞的未來記憶與倒數",
          "enTitle": "Chapter 13: Weixi's Future Memories & the Countdown",
          "shortTitle": "未來記憶與倒數",
          "concept": "未晞未來記憶閃回身體不適，晴晴窺見手環內側急遽縮小的倒數數字，雙重焦慮壓心頭",
          "wordCount": 6307,
          "readTimeMin": 19
        },
        {
          "id": 6,
          "globalId": 14,
          "file": "第14章_阿釁的發現與同盟擴大.md",
          "title": "第 14 章：阿釁的發現與同盟擴大",
          "enTitle": "Chapter 14: A-Xin's Discovery & the Expanding Alliance",
          "shortTitle": "同盟擴大為三人",
          "concept": "阿釁直覺敏銳拼湊線索正式加盟，祕密同盟擴為三人，老巫渾然不覺歡樂吃午餐",
          "wordCount": 6607,
          "readTimeMin": 19
        },
        {
          "id": 7,
          "globalId": 15,
          "file": "第15章_水源異味蔓延.md",
          "title": "第 15 章：水源異味蔓延",
          "enTitle": "Chapter 15: The Spreading Taint in the Water",
          "shortTitle": "水源異味蔓延",
          "concept": "校園飲水機飄出怪味學生不適，周主任著手調查，全班動用溜溜沿岸追蹤鎖定食品工廠",
          "wordCount": 6381,
          "readTimeMin": 19
        },
        {
          "id": 8,
          "globalId": 16,
          "file": "第16章_污染警報.md",
          "title": "第 16 章：污染警報",
          "enTitle": "Chapter 16: The Pollution Alarm",
          "shortTitle": "污染警報大作",
          "concept": "水質檢驗鐵證證實工廠夜間偷排未處理廢水，同盟誓言公開揭發，手環倒數數字急縮逼近歸零",
          "wordCount": 6505,
          "readTimeMin": 19
        }
      ]
    },
    {
      "id": "book-12",
      "title": "來自未來的轉學生：最後的守護",
      "enTitle": "The Transfer Student from the Future: The Final Guardianship",
      "subtitle": "第三卷 · 全八章完結",
      "enSubtitle": "Volume 2 · Complete (8 Chapters)",
      "status": "已完結",
      "statusColor": "emerald",
      "coverTag": "追查偷排 × 空汙紅害 × 奇蹟告別",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 51460,
      "totalChapters": 8,
      "description": "面對工業區食品加工廠趁雨夜偷排廢水與煙囪超標排煙，六年一班祕密同盟展開極限調查。在第18章中，全班26人得知未晞來自未來與即將被迫離開的真相，全班同心結成最強陣線！動用溜溜微型探頭深入暗管、歷經老闆阻撓冒險錄下鐵證，在全校面前公開揭發，周主任與邱校長霸氣護短勒令工廠停工！拯救成功的時刻，手環能量即將歸零，全班含淚以二十六人綠色守護承諾書為未晞送別。多年後，未來的地球因當年的守護而迎來轉機，深情相約『明天見，未晞！』。",
      "chapters": [
        {
          "id": 1,
          "globalId": 17,
          "file": "第17章_追查偷排管線.md",
          "title": "第 17 章：追查偷排管線",
          "enTitle": "Chapter 17: Tracing the Illegal Discharge Pipe",
          "shortTitle": "追查偷排管線",
          "concept": "阿釁、晴晴、老巫與溜溜全員出動，未晞手環定位地下暗管，工廠老闆暗中阻撓反擊",
          "wordCount": 6800,
          "readTimeMin": 20
        },
        {
          "id": 2,
          "globalId": 18,
          "file": "第18章_真相大白.md",
          "title": "第 18 章：真相大白",
          "enTitle": "Chapter 18: The Truth Comes to Light",
          "shortTitle": "全班結盟全員出動",
          "concept": "全班26人得知未晞時空身分與倒數真相，從震驚化為萬眾一心，結成守護地球大作戰最強同盟",
          "wordCount": 6455,
          "readTimeMin": 19
        },
        {
          "id": 3,
          "globalId": 19,
          "file": "第19章_空汙紅害警報.md",
          "title": "第 19 章：空汙紅害警報",
          "enTitle": "Chapter 19: The Red Alert for Air Pollution",
          "shortTitle": "空汙紅害警報",
          "concept": "工廠湮滅證據瘋狂偷排引爆紅害空汙，灰黃天空下未晞幻視頻繁能量超載耗損",
          "wordCount": 6443,
          "readTimeMin": 19
        },
        {
          "id": 4,
          "globalId": 20,
          "file": "第20章_極限蒐證行動.md",
          "title": "第 20 章：極限蒐證行動",
          "enTitle": "Chapter 20: The Extreme Evidence-Gathering Operation",
          "shortTitle": "極限蒐證大作戰",
          "concept": "全班動用溜溜微型探頭與水質檢測儀，分工合作突破工廠防線，冒險錄下偷排廢水鐵證",
          "wordCount": 6618,
          "readTimeMin": 19
        },
        {
          "id": 5,
          "globalId": 21,
          "file": "第21章_揭發與拯救.md",
          "title": "第 21 章：揭發與拯救",
          "enTitle": "Chapter 21: Exposure & Rescue",
          "shortTitle": "揭發污染勒令停工",
          "concept": "全校大會鐵證如山公開揭發，周主任邱校長霸氣護短通報開罰停工，社區水源天空重獲新生",
          "wordCount": 6431,
          "readTimeMin": 19
        },
        {
          "id": 6,
          "globalId": 22,
          "file": "第22章_倒數最後的時刻.md",
          "title": "第 22 章：倒數最後的時刻",
          "enTitle": "Chapter 22: The Final Countdown",
          "shortTitle": "倒數最後的時刻",
          "concept": "勝利之際手環能量即將歸零，未晞必須歸返未來否則時空錯亂，26名同學得知離別痛哭不捨",
          "wordCount": 6376,
          "readTimeMin": 19
        },
        {
          "id": 7,
          "globalId": 23,
          "file": "第23章_奇蹟的告別.md",
          "title": "第 23 章：奇蹟的告別",
          "enTitle": "Chapter 23: The Miraculous Farewell",
          "shortTitle": "奇蹟的告別",
          "concept": "全班以守護地球承諾書與綠色成果為未晞送行，希望種子深植，未晞含淚踏入時序光門",
          "wordCount": 6185,
          "readTimeMin": 18
        },
        {
          "id": 8,
          "globalId": 24,
          "file": "第24章_明天見，未晞！.md",
          "title": "第 24 章：明天見，未晞！（全劇大結局）",
          "enTitle": "Chapter 24: See You Tomorrow, Weixi! (Series Grand Finale)",
          "shortTitle": "明天見未晞大結局",
          "concept": "未晞回到四十年後見證地球轉機，鹿陽國小校門口全班26人齊聲深情高呼明天見未晞",
          "wordCount": 6152,
          "readTimeMin": 18
        }
      ]
    },
    {
      "id": "book-13",
      "title": "手作少女的奇幻旅程",
      "enTitle": "The Handmade Girl's Fantastic Journey",
      "subtitle": "療癒短篇小說集 · 單冊全四篇完結",
      "enSubtitle": "Healing Short Story Collection · Complete (4 Chapters)",
      "status": "已完結",
      "statusColor": "rose",
      "coverTag": "手作修補心靈 × 繪畫穿越 × 溫暖療癒",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）及全年齡療癒適讀",
      "totalWords": 31995,
      "totalChapters": 6,
      "description": "鹿陽國小六年級女生柳奷纭有著不為人知的祕密天賦——當她完成一件注入真摯情感的手作或畫作，就能走進作品的世界。從畫進理想的全家福、捏出黏土小星星、走進阿嬤的泛黃畫冊，到最後直面自己被忽略的孤獨內心……四個溫暖細膩的獨立短篇，用手作修補一顆顆破碎的心，也療癒了自己。",
      "chapters": [
        {
          "id": 1,
          "globalId": 1,
          "file": "第01篇_把全家畫回來.md",
          "title": "第 1 篇：把全家畫回來",
          "enTitle": "Chapter 1: Painting the Family Back",
          "shortTitle": "把全家畫回來",
          "concept": "走進理想中的全家福畫作，理解父母爭吵與壓力背後的深愛，找回家的溫度",
          "wordCount": 7832,
          "readTimeMin": 23
        },
        {
          "id": 2,
          "globalId": 2,
          "file": "第02篇_給誤會的那顆星.md",
          "title": "第 2 篇：給誤會的那顆星",
          "enTitle": "Chapter 2: The Star for a Misunderstanding",
          "shortTitle": "給誤會的那顆星",
          "concept": "送不出去的黏土小星星與夜空心語，化解與夏知星的同儕誤會，點亮真摯友情",
          "wordCount": 8105,
          "readTimeMin": 24
        },
        {
          "id": 3,
          "globalId": 3,
          "file": "第03篇_陪阿嬤走進她的畫.md",
          "title": "第 3 篇：陪阿嬤走進她的畫",
          "enTitle": "Chapter 3: Walking into Grandma's Painting",
          "shortTitle": "陪阿嬤走進她的畫",
          "concept": "接續阿嬤泛黃畫冊中未完成的舊作，漫步年輕歲月，尋回失智記憶中最溫暖的時光",
          "wordCount": 8061,
          "readTimeMin": 24
        },
        {
          "id": 4,
          "globalId": 4,
          "file": "第04篇_畫給自己的天空.md",
          "title": "第 4 篇：畫給自己的天空",
          "enTitle": "Chapter 4: A Sky Drawn for Myself",
          "shortTitle": "畫給自己的天空",
          "concept": "直面只有一個人的天空世界，與畫中的自己和解擁抱，學會自我接納並打開心門",
          "wordCount": 7997,
          "readTimeMin": 23
        }
      ]
    },
    {
      "id": "book-14",
      "title": "全班作弊中：小抄的起點",
      "enTitle": "The Whole Class Is Cheating: The Origin of Cheat Sheets",
      "subtitle": "第一卷 · 全六章完結",
      "enSubtitle": "Volume 1 · Complete (6 Chapters)",
      "status": "已完結",
      "statusColor": "amber",
      "coverTag": "低科技作弊 × 3D軌跡追蹤 × 透視光眼",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 15380,
      "totalChapters": 6,
      "description": "六年一班面臨月考大風暴！柯媽媽在班群嚴格施壓，老巫為保住一個月的大雞腿，阿釁為救回被沒收的遊戲機，全班二十六人成立『作弊互助會』。從橡皮擦上的微型圖書館、紙飛機與橡皮筋傳送帶，到咳嗽密碼與摩斯手勢，學生們各出奇招。然而仿生人導師高峙舷以透視光眼、指紋掃描與3D軌跡追蹤秒殺全場！全軍覆沒之後，令人意想不到的成績奇蹟卻悄然發生……",
      "chapters": [
        {
          "id": 1,
          "globalId": 1,
          "file": "第01章_成績單大風暴.md",
          "title": "第 1 章：成績單大風暴",
          "enTitle": "Chapter 1: The Report Card Storm",
          "shortTitle": "成績單大風暴",
          "concept": "月考逼近成績危機爆發，阿釁成立作弊互助會，高老師透視光眼秒殺全場",
          "wordCount": 3170,
          "readTimeMin": 10
        },
        {
          "id": 2,
          "globalId": 2,
          "file": "第02章_橡皮擦上的微型圖書館.md",
          "title": "第 2 章：橡皮擦上的微型圖書館",
          "enTitle": "Chapter 2: The Miniature Library on an Eraser",
          "shortTitle": "橡皮擦上的微型圖書館",
          "concept": "超迷你微雕小抄全面布署，指紋掃描光速破獲，老巫當場被逼背出公式",
          "wordCount": 2585,
          "readTimeMin": 8
        },
        {
          "id": 3,
          "globalId": 3,
          "file": "第03章_紙飛機與橡皮筋傳送帶.md",
          "title": "第 3 章：紙飛機與橡皮筋傳送帶",
          "enTitle": "Chapter 3: Paper Planes and Rubber Band Conveyor Belt",
          "shortTitle": "紙飛機與橡皮筋傳送帶",
          "concept": "高低空投答案網絡建立，高老師3D空間軌跡追蹤零秒攔截，溜溜首度失風",
          "wordCount": 2625,
          "readTimeMin": 8
        },
        {
          "id": 4,
          "globalId": 4,
          "file": "第04章_咳嗽密碼與摩斯手勢.md",
          "title": "第 4 章：咳嗽密碼與摩斯手勢",
          "enTitle": "Chapter 4: Cough Codes and Morse Gestures",
          "shortTitle": "咳嗽密碼與摩斯手勢",
          "concept": "暗號系統升級，語音波形分析當場破譯還原全班暗號表，阿釁誓言升級科技",
          "wordCount": 2405,
          "readTimeMin": 7
        },
        {
          "id": 5,
          "globalId": 5,
          "file": "第05章_二十六人的完美分工.md",
          "title": "第 5 章：二十六人的完美分工",
          "enTitle": "Chapter 5: The Perfect Division of the Twenty-Six",
          "shortTitle": "二十六人的完美分工",
          "concept": "全班分段作答互抄拼湊，作業相似度演算法全班標紅，互抄錯誤答案大崩潰",
          "wordCount": 2412,
          "readTimeMin": 7
        },
        {
          "id": 6,
          "globalId": 6,
          "file": "第06章_月考大戰之全軍覆沒.md",
          "title": "第 6 章：月考大戰之全軍覆沒",
          "enTitle": "Chapter 6: The Month Exam Battle: Total Defeat",
          "shortTitle": "月考大戰之全軍覆沒",
          "concept": "全軍覆沒卻迎來成績暴漲，作弊抄寫過程無意間背熟題庫，阿釁初悟反轉",
          "wordCount": 2183,
          "readTimeMin": 7
        }
      ]
    },
    {
      "id": "book-15",
      "title": "全班作弊中：作弊科技革命",
      "enTitle": "The Whole Class Is Cheating: The Cheating Tech Revolution",
      "subtitle": "第二卷 · 全六章完結",
      "enSubtitle": "Volume 2 · Complete (6 Chapters)",
      "status": "已完結",
      "statusColor": "amber",
      "coverTag": "科技軍備競賽 × 萌寵快遞 × 防駭模式",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 14970,
      "totalChapters": 6,
      "description": "低科技作弊失敗後，作弊軍備競賽全面升級！理工天才班長晴晴被任命為技術總監，開發出隱形墨水、紫外線小抄與作弊計算機；AI萌寵溜溜化身通風管快遞員，阿釁甚至架設無線電耳機發起期中考總攻。面對電磁干擾與字面解讀公開處刑，全班鋌而走險企圖駭入高老師，未晞的時序手環更揭開令人震撼的未來真相！期末考再度全軍覆沒，晴晴卻語出驚人：『我們好像根本不需要作弊？』",
      "chapters": [
        {
          "id": 1,
          "globalId": 7,
          "file": "第07章_晴晴的作弊實驗室.md",
          "title": "第 7 章：晴晴的作弊實驗室",
          "enTitle": "Chapter 7: Qingqing's Cheating Laboratory",
          "shortTitle": "晴晴的作弊實驗室",
          "concept": "理工班長被架上技術總監，紫外線隱形墨水與改裝計算機，實驗室軍備升級",
          "wordCount": 2462,
          "readTimeMin": 8
        },
        {
          "id": 2,
          "globalId": 8,
          "file": "第08章_溜溜的快遞大作戰.md",
          "title": "第 8 章：溜溜的快遞大作戰",
          "enTitle": "Chapter 8: Liu-Liu's Delivery Mission",
          "shortTitle": "溜溜的快遞大作戰",
          "concept": "情報萌寵化身通風管答案快遞員，寵物行為異常演算法鎖定，人贓俱獲",
          "wordCount": 2760,
          "readTimeMin": 8
        },
        {
          "id": 3,
          "globalId": 9,
          "file": "第09章_耳機無線電風暴.md",
          "title": "第 9 章：耳機無線電風暴",
          "enTitle": "Chapter 9: The Earpiece Radio Storm",
          "shortTitle": "耳機無線電風暴",
          "concept": "微型耳機全班實戰，電磁干擾與字面解讀廣播逐字朗讀，全班公開處刑",
          "wordCount": 2680,
          "readTimeMin": 8
        },
        {
          "id": 4,
          "globalId": 10,
          "file": "第10章_未來答案機之謎.md",
          "title": "第 10 章：未來答案機之謎",
          "enTitle": "Chapter 10: The Mystery of the Future Answer Machine",
          "shortTitle": "未來答案機之謎",
          "concept": "時序手環被當未來答案機偷破解，投影出破碎淹水城市，未晞當頭棒喝",
          "wordCount": 1859,
          "readTimeMin": 6
        },
        {
          "id": 5,
          "globalId": 11,
          "file": "第11章_入侵高老師計劃.md",
          "title": "第 11 章：入侵高老師計劃",
          "enTitle": "Chapter 11: Operation: Hacking Teacher Gao",
          "shortTitle": "入侵高老師計劃",
          "concept": "鋁箔紙與信號干擾企圖駭入班導，防駭模式大反擊，溜溜遭韌體升級反將一軍",
          "wordCount": 2505,
          "readTimeMin": 8
        },
        {
          "id": 6,
          "globalId": 12,
          "file": "第12章_期末考全軍覆沒之夜.md",
          "title": "第 12 章：期末考全軍覆沒之夜",
          "enTitle": "Chapter 12: The Night of Total Defeat at the Final Exam",
          "shortTitle": "期末考全軍覆沒之夜",
          "concept": "28項工具被逐一識破沒收，成績再度逆勢飆升，晴晴沉痛點破真相",
          "wordCount": 2704,
          "readTimeMin": 8
        }
      ]
    },
    {
      "id": "book-16",
      "title": "全班作弊中：最棒的作弊",
      "enTitle": "The Whole Class Is Cheating: The Best Way to Cheat",
      "subtitle": "第三卷 · 全六章完結",
      "enSubtitle": "Volume 3 · Complete (6 Chapters)",
      "status": "已完結",
      "statusColor": "amber",
      "coverTag": "分段精讀 × 開放式考卷 × 誠實博物館",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 12250,
      "totalChapters": 6,
      "description": "全班拒絕承認不需要作弊，祭出終極的二十六人人體分割精讀計畫，漏夜沙盤推演作弊流程，卻驚覺題庫早已滾瓜爛熟。期末考當天，高老師突如其來宣布『開放一切作弊工具』！考場上握滿作弊神器的二十六人，發現自己每題都會寫。當一整年的作弊監視紀錄被揭曉，二十八項作弊工具陳列成『誠實博物館』，學務主任周嚴感動哽咽。在鳳凰樹下埋下誠實時間膠囊，全班終於領悟：最好的作弊，是不用作弊！",
      "chapters": [
        {
          "id": 1,
          "globalId": 13,
          "file": "第13章_最後的王牌_分段精讀.md",
          "title": "第 13 章：最後的王牌・分段精讀",
          "enTitle": "Chapter 13: The Final Trump Card: Segmented Intensive Reading",
          "shortTitle": "最後的王牌・分段精讀",
          "concept": "人體分割記憶大作戰，每人死守題庫一部分，為了作弊每人讀到滾瓜爛熟",
          "wordCount": 2054,
          "readTimeMin": 6
        },
        {
          "id": 2,
          "globalId": 14,
          "file": "第14章_作弊排演之夜.md",
          "title": "第 14 章：作弊排演之夜",
          "enTitle": "Chapter 14: The Night of the Cheating Rehearsal",
          "shortTitle": "作弊排演之夜",
          "concept": "教室漏夜沙盤推演作弊流程，驚覺答案全記在腦袋裡，根本不需要小抄",
          "wordCount": 1996,
          "readTimeMin": 6
        },
        {
          "id": 3,
          "globalId": 15,
          "file": "第15章_老師的開放式考卷.md",
          "title": "第 15 章：老師的開放式考卷",
          "enTitle": "Chapter 15: The Teacher's Open-Book Exam",
          "shortTitle": "老師的開放式考卷",
          "concept": "高老師宣布開放一切作弊工具，全班疑心疑鬼不敢作弊，字面解讀正面對決",
          "wordCount": 2093,
          "readTimeMin": 6
        },
        {
          "id": 4,
          "globalId": 16,
          "file": "第16章_誠實應考的二十六人.md",
          "title": "第 16 章：誠實應考的二十六人",
          "enTitle": "Chapter 16: The Twenty-Six Who Took the Exam Honestly",
          "shortTitle": "誠實應考的二十六人",
          "concept": "握著作弊工具卻每題都會寫，小抄比考卷更精闢，投影答案故障時刻無人屑顧",
          "wordCount": 1946,
          "readTimeMin": 6
        },
        {
          "id": 5,
          "globalId": 17,
          "file": "第17章_作弊工具博覽會.md",
          "title": "第 17 章：作弊工具博覽會",
          "enTitle": "Chapter 17: The Cheating Tools Exhibition",
          "shortTitle": "作弊工具博覽會",
          "concept": "班導揭曉一年監視紀錄與教育真相，誠實博物館展出，周嚴誤當資優展表揚",
          "wordCount": 1981,
          "readTimeMin": 6
        },
        {
          "id": 6,
          "globalId": 18,
          "file": "第18章_最好的作弊，是不用作弊.md",
          "title": "第 18 章：最好的作弊，是不用作弊",
          "enTitle": "Chapter 18: The Best Way to Cheat Is Not to Cheat",
          "shortTitle": "最好的作弊，是不用作弊",
          "concept": "阿釁領悟金句，鳳凰樹下埋下誠實時間膠囊，周嚴感動落淚，溫馨圓滿大結局",
          "wordCount": 2180,
          "readTimeMin": 7
        }
      ]
    },
    {
      "id": "book-17",
      "title": "不可思議事件簿 1：消失的影子與第十三個台階",
      "enTitle": "The Files of the Impossible 1: The Vanished Shadow & The 13th Step",
      "subtitle": "第一卷 · 校園不可思議篇（全六章大完結）",
      "enSubtitle": "Volume 1: Campus Mysteries (Serializing)",
      "status": "第一卷完結",
      "statusColor": "emerald",
      "coverTag": "科幻偵探 × 校園怪談 × STEM解謎",
      "author": "鹿陽故事工坊 · 齒輪偵探組",
      "targetAge": "9～15 歲（國小中年級至國中生）",
      "totalWords": 36732,
      "totalChapters": 6,
      "description": "鹿陽國小百年校舍怪事頻傳：深夜自彈莫札特的幽靈鋼琴、雨夜憑空多出的鐘樓第十三階、正午蒸發影子的古董日晷……冷靜推演的偵探社長陸言、共振聽音的天才少女沈星葵、鬼馬發明家方小克攜手機械刺蝟皮球，成立「齒輪偵探事務所」，運用偏振光譜、聲學駐波與發條力學，抽絲剝繭破解一件件匪夷所思的校園與港灣迷案！",
      "chapters": [
        {
          "id": 1,
          "globalId": 1,
          "file": "第01章_深夜音樂教室的無人演奏會.md",
          "title": "第 1 章：深夜音樂教室的無人演奏會",
          "enTitle": "Chapter 1: The Midnight Phantom Concert in the Music Room",
          "shortTitle": "深夜音樂教室的無人演奏會",
          "concept": "偏振光譜與超音波霧化螢光、凸輪軸機械音序器與老琴傳承暗線",
          "wordCount": 9011,
          "readTimeMin": 26,
          "puzzle": {
            "chapter": 1,
            "title": "偏振光譜與超音波霧化螢光謎題",
            "cipher": "紫外偏振濾鏡 365nm 激發 | 核黃素（維生素B2）水溶液 525nm 螢光 | 壓電陶瓷霧化片 108kHz 駐波",
            "decoded": "超音波壓電霧化冷光 + 隱藏式凸輪軸撥子機械彈奏",
            "concept": "利用紫外線激發維生素B2產生冷藍綠色螢光，配合高頻壓電陶瓷片將液體震盪成微米級冷霧，在黑暗中營造浮空幽靈效果；鋼琴內部則隱藏精密凸輪音序軸，藉由機械撥動琴槌連桿模擬演奏。"
          }
        },
        {
          "id": 2,
          "globalId": 2,
          "file": "第02章_鐘樓消失的第十三個台階.md",
          "title": "第 2 章：鐘樓消失的第十三個台階",
          "enTitle": "Chapter 2: The Vanishing Thirteenth Step of the Clock Tower",
          "shortTitle": "鐘樓消失的第十三個台階",
          "concept": "雨水重力蓄水箱與多普勒空腔聲學解密、平行四邊形鉸鏈與重力脫扣滑梯",
          "wordCount": 5190,
          "readTimeMin": 15,
          "puzzle": {
            "chapter": 2,
            "title": "雨水重力蓄水箱與多普勒空腔聲學解密",
            "cipher": "雨水溢流閥值 >50mm/h | 蓄水箱重力 60kg | 440Hz 音叉空腔諧波泛音延遲 | 平行四邊形鉸鏈頂起 18cm",
            "decoded": "雨水重力配重頂升踏板 + 30kg人體脫扣翻轉滑道",
            "concept": "暴雨溢流灌滿暗銅蓄水桶，利用重力克服配重拉動連桿將石階頂起18公分形成第十三階；踩踏超過30公斤則打破平衡脫扣翻轉成滑梯。"
          }
        },
        {
          "id": 3,
          "globalId": 3,
          "file": "第03章_操場青銅校長像的午夜巡遊.md",
          "title": "第 3 章：操場青銅校長像的午夜巡遊",
          "enTitle": "Chapter 3: The Midnight Promenade of the Bronze Principal Statue",
          "shortTitle": "操場青銅校長像的午夜巡遊",
          "concept": "萊頓弗羅斯特氣浮效應、偏心配重擺錘步進機構與溶洞塌陷預警",
          "wordCount": 5574,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 3,
            "title": "萊頓弗羅斯特氣浮效應與偏心擺錘步進機構",
            "cipher": "固態乾冰昇華膨脹 800 倍 | 氣膜厚度 100μm | 摩擦係數 0.40 -> 0.003 | 地形微坡度 0.8% 下滑力 62.7N | 30kg 偏心配重擺錘交替噴氣步進",
            "decoded": "乾冰氣浮相變氣墊 + 內部擒縱擺錘重力交替步進",
            "concept": "利用乾冰受熱昇華形成的連續高壓氣膜消除地面摩擦力，配合操場自然坡度與內部雙向擒縱擺錘機構交替切換靴底氣孔與重力落點，實現巨像自行行走。"
          }
        },
        {
          "id": 4,
          "globalId": 4,
          "file": "第04章_被偷走影子的古董日晷.md",
          "title": "第 4 章：被偷走影子的古董日晷",
          "enTitle": "Chapter 4: The Antique Sundial with the Stolen Shadow",
          "shortTitle": "被偷走影子的古董日晷",
          "concept": "逆向背光主動對沖光學隱身、階梯菲涅爾透鏡陣列與黃銅因瓦雙金屬熱敏釋放鎖",
          "wordCount": 6261,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 4,
            "title": "逆向背光對沖與雙金屬熱敏釋放鎖",
            "cipher": "秋分正午日照 100,000 lux | 菲涅爾透鏡 6 聯組捕獲 3000 lm | 色溫 5500K 逆向入射角 41.5° 對沖本影 | 局部照射升溫至 56°C 觸發因瓦-黃銅雙金屬片熱彎曲釋放鎖栓",
            "decoded": "全反射菲涅爾聚光陣列 + 逆向背光無影術 + 雙金屬片溫控暗格",
            "concept": "利用隱藏於噴泉的階梯菲涅爾透鏡組採集自然日光，以反向角度將高能光束注入晷針本影區抹平照度差使影子消失，同時聚焦加熱雙金屬簧片開啟基座機關暗格。"
          }
        },
        {
          "id": 5,
          "globalId": 5,
          "file": "第05章_老水電站的逆流飛瀑與蒸汽星盤.md",
          "title": "第 5 章：老水電站的逆流飛瀑與蒸汽星盤",
          "enTitle": "Chapter 5: The Reversed Waterfall and Steam Astrolabe of the Old Pumphouse",
          "shortTitle": "老水電站的逆流飛瀑與蒸汽星盤",
          "concept": "超音波聲懸浮駐波節點、視錯覺頻閃逆流效應與特斯拉無閥流體泵",
          "wordCount": 5422,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 5,
            "title": "聲懸浮駐波與特斯拉無閥泵機制",
            "cipher": "超音波換能器 22 kHz | 聲壓級 160 dB 形成垂直駐波節點 | 頻閃閃爍頻率 59 Hz 照射 60 Hz 水滴形成逆流視錯覺 | 特斯拉無閥單向幾何實現冷凝水無動件逆流加壓",
            "decoded": "強聲場超音波聲懸浮 + 頻閃暫留錯覺天梯 + 特斯拉無閥逆流泵",
            "concept": "利用 22kHz 高能超音波駐波輻射力抵消水滴重力使其定格，配合微秒級頻閃光學差頻產生逆流視覺錯覺，結合特斯拉無閥單向泵維持天象儀液壓平衡。"
          }
        },
        {
          "id": 6,
          "globalId": 6,
          "file": "第06章_黑色信封與發條魔術師的宣戰書.md",
          "title": "第 6 章：黑色信封與發條魔術師的宣戰書",
          "enTitle": "Chapter 6: The Black Envelope and the Declaration of the Clockwork Magician",
          "shortTitle": "黑色信封與發條魔術師的宣戰書",
          "concept": "環境射頻電磁能量俘獲、楞次定律渦電流懸浮反作用力與非對稱洛倫茲自轉力矩",
          "wordCount": 5274,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 6,
            "title": "環境射頻電磁俘能與楞次定律渦流懸浮",
            "cipher": "廣播塔長波 LC 諧振 | 雙螺旋阿基米德微天線 + 肖特基微整流電路產生微安級直流電 | 銅底板閉合感應渦電流對沖產生 3mm 懸浮力 | 非對稱洛倫茲力矩維持無限自轉",
            "decoded": "無源微波整流天線 + 楞次定律渦流排斥懸浮 + 洛倫茲旋轉力矩",
            "concept": "利用微雕天線陣列捕獲環境中的無線電雜波轉化為電能，配合旋轉磁場在桌內銅板感應出抗磁性渦電流實現無源懸浮，並藉由非對稱力矩在空氣中維持無休止高速自轉。"
          }
        }
      ]
    },
    {
      "id": "book-18",
      "series": "series-7",
      "title": "不可思議事件簿 2：海霧港口的蒸汽幽靈",
      "enTitle": "The Files of the Impossible 2: The Steam Phantom of Sea-Mist Harbor",
      "subtitle": "第二卷 · 港灣連環大案（全 6 章完結）",
      "enSubtitle": "Volume 2: Harbor Serial Cases (Serializing)",
      "status": "第二卷完結",
      "statusColor": "indigo",
      "coverTag": "蒸汽龐克 · 海霧港灣 · 流體力學",
      "author": "故事工程 · 著",
      "targetAge": "9～15 歲（國小高年級至國中生）",
      "totalWords": 33185,
      "totalChapters": 6,
      "description": "大西洋畔的百年海港「霧角城」怪案頻傳：新月之夜直直穿透花崗岩要塞的五十噸幽靈電車、拍賣行裡憑空定格三秒的黃金鐘擺、燈塔投射在雲層中的幽靈帆船……齒輪偵探事務所全員出動，李奧、艾瑪與托比直面傳奇宿敵「發條魔術師」，運用伯努利流體力學、大氣全息逆溫折射與次聲波共振，在海霧與汽笛聲中展開一場驚心動魄的港灣大對決！",
      "chapters": [
        {
          "id": 1,
          "globalId": 7,
          "file": "第07章_迷霧中穿牆而過的幽靈電車.md",
          "title": "第 7 章：迷霧中穿牆而過的幽靈電車",
          "enTitle": "Chapter 7: The Ghost Tram That Walked Through Walls in the Mist",
          "shortTitle": "迷霧中穿牆而過的幽靈電車",
          "concept": "大氣全息逆溫海市蜃樓、伯努利流體力學消音暗渠與十八赫茲次聲波共振",
          "wordCount": 5255,
          "readTimeMin": 16,
          "puzzle": {
            "chapter": 7,
            "title": "大氣逆溫海市蜃樓與伯努利流體消音",
            "cipher": "海面逆溫層 4°C -> 11.5°C 光線向下強烈折射 | 超音波微滴水汽幕簾 + 偏振弧光實時投影 | 低位液壓道岔轉入暗渠 | 半米海水流體阻尼消音 | 18 Hz 次聲波眼球胸腔共振",
            "decoded": "全息逆溫海市蜃樓 + 伯努利海水消音暗軌 + 18Hz 次聲波心理催眠",
            "concept": "利用海面強逆溫層配合微滴霧幕與偏振投影製造火車穿牆的海市蜃樓，實體列車則由低位道岔滑入蓄水暗渠利用水體阻尼消音，並發射次聲波引發恐慌視覺晃動。"
          }
        },
        {
          "id": 2,
          "globalId": 8,
          "file": "第08章_半空中定格三秒的拍賣行鐘擺.md",
          "title": "第 8 章：半空中定格三秒的拍賣行鐘擺",
          "enTitle": "Chapter 8: The Auction Pendulum Frozen for Three Seconds in Mid-Air",
          "shortTitle": "半空中定格三秒的拍賣行鐘擺",
          "concept": "高溫超導量子磁通釘扎、電控分散液晶光閥（PDLC）與伯努利超音波氣動吸盤",
          "wordCount": 5220,
          "readTimeMin": 15,
          "puzzle": {
            "chapter": 8,
            "title": "高溫超導磁通釘扎與液晶光閥視覺詭計",
            "cipher": "擺錘隱藏強磁體 | 牆壁夾層 YBCO 超導塊材 + 液氮杜瓦瓶 + 脈衝線圈 | 45°頂點瞬態量子懸浮定格 3 秒 | 展櫃 PDLC 液晶光閥 2.5 秒霧化反射 | 超音波伯努利氣動吸盤",
            "decoded": "量子磁通釘扎懸浮 + 電控液晶霧化遮蔽 + 伯努利無損吸附",
            "concept": "利用高溫超導磁通釘扎效應將兩百公斤擺錘在最高點定格三秒，吸引全場目光仰望，同時以 PDLC 液晶光閥霧化遮蔽展櫃，藉伯努利超音波吸盤靜音盜取天文鐘。"
          }
        },
        {
          "id": 3,
          "globalId": 9,
          "file": "第09章_航行在雲層之上的幽靈帆船.md",
          "title": "第 9 章：航行在雲層之上的幽靈帆船",
          "enTitle": "Chapter 9: The Ghost Schooner Sailing Above the Clouds",
          "shortTitle": "航行在雲層之上的幽靈帆船",
          "concept": "大氣複雜上蜃景（Fata Morgana）、逆溫聲道波導效應、仿生凡得瓦力吸附與液態金屬脆化",
          "wordCount": 6201,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 9,
            "title": "大氣複雜上蜃景與逆溫聲道波導",
            "cipher": "海面逆溫層 4°C -> 18°C 陡峭垂直梯度 | 大氣天然光纖折射率 n 急降 | 光線彎曲半徑大於地球曲率 | 35km 外廢棄帆船抬升拉伸 3 倍 | 逆溫聲學管道無損聚焦 | 鎵銦錫合金液態金屬脆化",
            "decoded": "複雜上蜃景 + 聲道波導 + 凡得瓦力吸附 + 液態金屬脆化",
            "concept": "強烈逆溫層將三十五公里外地平線下的廢棄船隻以大於地球曲率之弧度向下折射抬升至雲海，配合大氣聲導管傳送汽笛，誘發全場定向盲區，再藉凡得瓦力吸盤與液態金屬脆化盜走陀螺羅盤。"
          }
        },
        {
          "id": 4,
          "globalId": 10,
          "file": "第10章_深海大教堂的無人鳴鐘.md",
          "title": "第 10 章：深海大教堂的無人鳴鐘",
          "enTitle": "Chapter 10: The Unmanned Chime of the Sunken Cathedral",
          "shortTitle": "深海大教堂的無人鳴鐘",
          "concept": "卡門渦街流體共振、水下亥姆霍茲共振腔、深海靜水壓與超音波空化破壞",
          "wordCount": 5615,
          "readTimeMin": 17,
          "puzzle": {
            "chapter": 10,
            "title": "卡門渦街流體共振與水下亥姆霍茲共振腔",
            "cipher": "五十米深海 4 個大氣壓 | 文氏管效應狹管洋流 3.8m/s | 圓柱脫落卡門渦街 0.82Hz | 亥姆霍茲穹頂共振腔放大 100 倍 | 82Hz 次聲波水壓脈衝震碎鉛封",
            "decoded": "卡門渦街流體共振 + 亥姆霍茲共振腔 + 空化射流干擾",
            "concept": "海溝狹管加速洋流在石柱後產生卡門渦街，與十噸鐘體固有頻率共振，配合大教堂穹頂亥姆霍茲腔放大低頻水壓脈衝，震開深海地宮大門，再以超音波空化微射流癱瘓引爆器。"
          }
        },
        {
          "id": 5,
          "globalId": 11,
          "file": "第11章_要塞火炮陣地的逆流沙漏.md",
          "title": "第 11 章：要塞火炮陣地的逆流沙漏",
          "enTitle": "Chapter 11: The Anti-Gravity Hourglass of the Fortress Battery",
          "shortTitle": "要塞火炮陣地的逆流沙漏",
          "concept": "垂直磁場梯度開爾文力、超順磁微粒磁流體動能發電（MHD）與雙向行星差速機構",
          "wordCount": 5693,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 11,
            "title": "哈爾巴赫磁場梯度開爾文力與磁流體發電",
            "cipher": "四氧化三鐵超順磁微粒 | 哈爾巴赫磁體陣列陡峭垂直梯度 dB/dz | 磁場開爾文力抗衡重力向上飛升 | 紫銅感應線圈切割磁力線 MHD 發電 | 楞次定律反向渦流短路超導環破局",
            "decoded": "超順磁開爾文力 + 磁流體發電 + 雙向行星差速潮汐機",
            "concept": "以天花板哈爾巴赫強磁陣列產生極端垂直磁場梯度，驅動奈米磁性微球克服重力逆流向上飛升，通過喉管線圈進行磁流體發電蓄能驅動百噸巨炮，再以楞次定律超導短路環瓦解磁場。"
          }
        },
        {
          "id": 6,
          "globalId": 12,
          "file": "第12章_黃金鐘樓的世紀逆轉.md",
          "title": "第 12 章：黃金鐘樓的世紀逆轉",
          "enTitle": "Chapter 12: The Century Reversal of the Golden Bell Tower",
          "shortTitle": "黃金鐘樓的世紀逆轉",
          "concept": "雙日潮非線性諧波破壞、超臨界自激振盪、楞次定律渦流煞車與三元動態阻尼平衡中樞",
          "wordCount": 5201,
          "readTimeMin": 19,
          "puzzle": {
            "chapter": 12,
            "title": "大洋潮汐非線性諧波與三元動態阻尼平衡",
            "cipher": "M2/S2 潮汐二階微差諧波 | 剪切應力突破屈服極限 | 銀齒輪楞次定律渦流阻尼平抑超頻 | 天文鐘微秒伺服調諧流體 | 陀螺羅盤三軸柯氏力校準",
            "decoded": "三元阻尼平衡 + 楞次渦流煞車 + 潮汐發電和解",
            "concept": "指出大西洋潮汐二階諧波引發的超臨界自激振盪危機，將自轉銀齒輪（渦流阻尼）、皇家天文鐘（微秒時序）與陀螺羅盤（進動校準）三合一完美閉環，平抑失控動能，喚醒世界時鐘。"
          }
        }
      ]
    },
    {
      "id": "book-19",
      "series": "series-7",
      "title": "不可思議事件簿 3：黃金鐘樓的時間倒流",
      "enTitle": "The Files of the Impossible 3: The Time Reversal of the Golden Bell Tower",
      "subtitle": "第三卷 · 終極世紀對決（連載中）",
      "enSubtitle": "Volume 3: Ultimate Century Showdown (Serializing)",
      "status": "已完結",
      "statusColor": "amber",
      "coverTag": "古都鐘樓 · 逆時針議會 · 莫比烏斯差速器",
      "author": "故事工程 · 著",
      "targetAge": "9～15 歲（國小高年級至國中生）",
      "totalWords": 32319,
      "totalChapters": 6,
      "description": "終結海港大案的齒輪偵探團重返鹿陽古都，迎戰隱藏在千年皇家雙螺旋鐘樓地底的古老機械結社「逆時針議會」。正午倒走的二十四小時逆時針錶盤、蒸發於雙曲面鏡陣中的黃金聖柩、次聲波引發的群體時空錯覺……陸言、沈星葵與方小克攜手機械刺蝟皮球，直面傳說中的「時間倒流之謎」，運用非歐幾何光路、聲學駐波引導與行星差速拓撲學，揭開百年鐘樓最深沉的時空真相！",
      "chapters": [
        {
          "id": 1,
          "globalId": 13,
          "file": "第13章_正午十二點倒走三圈的皇家大鐘盤.md",
          "title": "第 13 章：正午十二點倒走三圈的皇家大鐘盤",
          "enTitle": "Chapter 13: The Royal Clock Face That Ran Backwards Three Times at Noon",
          "shortTitle": "正午十二點倒走三圈的皇家大鐘盤",
          "concept": "視覺頻閃效應（轉輪錯覺）、18.9Hz 次聲波眼球胸腔共振與雙向行星差速調包",
          "wordCount": 5199,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 13,
            "title": "視覺頻閃混疊效應與 18.9Hz 次聲波共振催眠",
            "cipher": "外沿氙氣脈衝頻閃 59.5Hz | 順時針超高速飛轉 59.0Hz | 頻閃混疊 Δf = -0.5Hz 每 20 秒倒走一圈 | 18.9Hz 次聲波眼球微顫致時空錯覺 | 氰基丙烯酸酯解聚旋轉展台",
            "decoded": "轉輪頻閃錯覺 + 次聲波眼球共振 + 旋轉解聚展台調包",
            "concept": "以 59.5Hz 脈衝頻閃燈照射以 59.0Hz 順時針狂飆的指針，利用視覺暫留混疊出每 20 秒倒走一圈的錯覺，再以 18.9Hz 次聲波引發全場眩暈，掩護調包萬曆星盤。"
          }
        },
        {
          "id": 2,
          "globalId": 14,
          "file": "第14章_倒懸重力擺的無聲迴廊.md",
          "title": "第 14 章：倒懸重力擺的無聲迴廊",
          "enTitle": "Chapter 14: The Silent Gallery of the Inverted Gravity Pendulum",
          "shortTitle": "倒懸重力擺的無聲迴廊",
          "concept": "超音波三維聲學駐波懸浮、卡皮查倒立擺效應（高頻振動平衡）與克拉德尼共振節線",
          "wordCount": 5740,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 14,
            "title": "超音波聲懸浮與卡皮查倒立擺動力學穩定性",
            "cipher": "28kHz 水力超音波哨對射形成三維聲學駐波勢阱 | 多孔玄武岩浮力懸浮 | 地面 80Hz 偏心凸輪微振激發卡皮查倒立擺穩定態 | ω²a² > 2gL | 克拉德尼節線無振安全路徑",
            "decoded": "三維聲懸浮 + 卡皮查倒立擺 + 克拉德尼節線破局",
            "concept": "以上下對射超音波駐波場懸浮多孔玄武岩落石，地基 80Hz 微振賦予五百公斤倒立鐘擺動態平衡，利用滑石粉顯化克拉德尼無振動節線，避開波腹壓電洩壓閥與擺錘相位穿行長廊。"
          }
        },
        {
          "id": 3,
          "globalId": 15,
          "file": "第15章_回音鏡陣中蒸發的黃金聖柩.md",
          "title": "第 15 章：回音鏡陣中蒸發的黃金聖柩",
          "enTitle": "Chapter 15: The Golden Sarcophagus That Vanished in the Hall of Echoing Mirrors",
          "shortTitle": "回音鏡陣中蒸發的黃金聖柩",
          "concept": "共焦橢球回音壁聲學聚焦、雙曲反射幾何隱形斗篷與莫比烏斯永動差速拓撲結構",
          "wordCount": 5557,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 15,
            "title": "橢球面聲學共焦聚焦與雙曲反射幾何隱形斗篷",
            "cipher": "長軸 60m 短軸 40m 旋轉橢球面 F1/F2 聲學共焦無損聚焦 | 雙曲凹面鏡陣繞射變換光學光線繞行隱形 | 雲母偽裝板垂直液壓暗井 | 六角石英雙曲透鏡 π 相位反轉破局",
            "decoded": "橢圓回音壁 + 反射隱形斗篷 + 莫比烏斯差速輪",
            "concept": "以旋轉橢球面無損匯聚 F1 呢喃至 F2 製造幽靈耳語，以共焦雙曲凹面鏡陣繞射光線製造聖柩蒸發假象，利用六塊石英雙曲透鏡中和相移，升起黃金聖柩並截停水銀虹吸。"
          }
        },
        {
          "id": 4,
          "globalId": 16,
          "file": "第16章_永樂天樞水運儀象台的逆潮狂瀾.md",
          "title": "第 16 章：永樂天樞水運儀象台的逆潮狂瀾",
          "enTitle": "Chapter 16: The Inverted Surge of the Yongle Celestial Pivot Water Clock",
          "shortTitle": "永樂天樞水運儀象台的逆潮狂瀾",
          "concept": "康達效應超音速水刀邊界層分離、天衡水力秤重擒縱與莫比烏斯單側拓撲差速煞車",
          "wordCount": 5486,
          "readTimeMin": 19,
          "puzzle": {
            "chapter": 16,
            "title": "康達附壁效應破除與莫比烏斯差速拓撲煞車",
            "cipher": "超音速水刀康達效應吸附玄武岩弧壁 | 二氧化碳空化微氣泡注入破壞低壓區 | 邊界層分離使水刀向外偏轉 | 莫比烏斯永動差速輪 180° 幾何拓撲扭轉 | 五千萬焦耳反向動能轉化為正向阻尼",
            "decoded": "康達效應瓦解 + 空化微氣泡射流 + 莫比烏斯拓撲煞車",
            "concept": "以超音波空化微氣泡注入超音速水刀低壓邊界層瓦解康達效應偏轉水幕，再將莫比烏斯差速輪推入主軸，利用單側拓撲結構平滑反轉五千萬焦耳逆轉動能，截停水運樞輪並奪回萬曆星盤。"
          }
        },
        {
          "id": 5,
          "globalId": 17,
          "file": "第17章_龍蟾地動儀的萬年地脈震波.md",
          "title": "第 17 章：龍蟾地動儀的萬年地脈震波",
          "enTitle": "Chapter 17: The Primordial Tectonic Waves of the Dragon-and-Toad Seismograph",
          "shortTitle": "龍蟾地動儀的萬年地脈震波",
          "concept": "震動土壤液化與剪切增稠破局、張衡地動儀都柱慣性槓桿與主動調諧質量阻尼器（TMD）",
          "wordCount": 4963,
          "readTimeMin": 19,
          "puzzle": {
            "chapter": 17,
            "title": "震動土壤液化增稠破局與 TMD 反相動態吸振",
            "cipher": "3.2Hz 剪切波誘發孔隙水壓飽和土壤液化 | 奈米澱粉高分子剪切增稠硬化踏板 | 二十噸青銅都柱自激極限環共振 | 萬曆星盤 + 莫比烏斯差速輪 180° 反相 TMD | 相消干涉阻尼平抑地脈震波",
            "decoded": "剪切增稠流沙突圍 + 主動調諧質量阻尼器 (TMD) + 反共振相消干涉",
            "concept": "以高分子澱粉剪切增稠流體硬化流沙突入地動儀核心，再將萬曆星盤與莫比烏斯差速輪組合成主動調諧質量阻尼器，以 180° 反相慣性力矩相消干涉平抑二十噸都柱自激共振，消弭大地震危機。"
          }
        },
        {
          "id": 6,
          "globalId": 18,
          "file": "第18章_太極渾天儀的世紀歸位.md",
          "title": "第 18 章：太極渾天儀的世紀歸位",
          "enTitle": "Chapter 18: The Grand Celestial Alignment of the Taiji Armillary Sphere",
          "shortTitle": "太極渾天儀的世紀歸位",
          "concept": "萬向節死鎖奇點、四元數差速拓撲解鎖、陀螺進動導向與角動量守恆",
          "wordCount": 5374,
          "readTimeMin": 22,
          "puzzle": {
            "chapter": 18,
            "title": "萬向節死鎖拓撲破譯與陀螺進動導向",
            "cipher": "32噸飛輪極限轉速角動量失控 | 萬向節死鎖 θ=90° 歐拉角奇點 | 莫比烏斯差速齒輪注入第四自由度 | 陀螺進動 τ = Ω_p × L 右手法則 | 磁流體減震井平抑世紀動能",
            "decoded": "四元數無奇點旋轉 + 陀螺進動導向 + 角動量守恆平抑動態失衡",
            "concept": "以莫比烏斯雙曲差速齒輪提供等效第四自由度打破三軸萬向節死鎖，再運用角動量守恆右手法則在天極頂針施加垂直力矩引導陀螺進動，將三十二噸飛輪動量安全導入磁流體減震井，實現全系列太極渾天儀世紀大歸位！"
          }
        }
      ]
    },
    {
      "id": "book-20",
      "title": "班上鳥事",
      "enTitle": "A Class of Feathered Troubles",
      "subtitle": "校園成長溫馨喜劇 · 全 15 章大完結",
      "enSubtitle": "A Class of Feathered Troubles (Complete 15 Chapters)",
      "status": "全書完結",
      "statusColor": "emerald",
      "coverTag": "校園成長 × 幽默喜劇 × 生命救贖",
      "author": "鹿陽故事工坊 · 班上鳥事創作組",
      "targetAge": "9～15 歲（國小中高年級至國中生，全年齡適讀）",
      "totalWords": 59673,
      "totalChapters": 35,
      "description": "鹿陽國小六年一班是全校聞名的「魔王班」，兩個月內接連氣走三任導師！直到孩子王阿棠在榕樹下冒死從校貓爪下救回一隻奄奄一息的雛麻雀「小麻」，全班的命運開始天翻地覆。擁有「跨物種心靈感應」秘密天賦的冷面毒舌班長陸書晴（晴子），被迫成為人鳥之間的地下首席翻譯官。為了讓極度敏感的小麻活命，全班在晴子的鐵腕指揮下展開全員踮腳、唇語交談的「極限消音作戰」，與手持望遠鏡的學務主任周嚴及深陷心理學迷思的菜鳥溫老師展開一場令人啼笑皆非的溫馨成長攻防！",
      "chapters": [
        {
          "id": 1,
          "globalId": 1,
          "file": "第01章_忠孝樓的第三次地震.md",
          "title": "第 1 章：忠孝樓的第三次地震",
          "enTitle": "Chapter 1: The Third Earthquake of Zhongxiao Building",
          "shortTitle": "忠孝樓的第三次地震",
          "concept": "六年一班重金屬鍛造廠式喧鬧日常、氣走三任導師與溫雅婷簽署修羅場生死狀",
          "wordCount": 5824,
          "readTimeMin": 26,
          "puzzle": {
            "chapter": 1,
            "title": "六年一班聲浪分貝與心理防禦謎題",
            "cipher": "115dB 巨型聲浪震顫天花板 | 綠斑鳳蝶幼蟲《道德經》排糞悟道 | 菜鳥導師心理學量表生死狀",
            "decoded": "以粗礪噪音武裝孤獨內心 + 偽裝成混亂的少年生命力",
            "concept": "六年一班的頑劣並非出於惡意，而是孩子們用巨大的噪音和惡作劇築起的心理防衛泥殼。"
          }
        },
        {
          "id": 2,
          "globalId": 2,
          "file": "第02章_草叢裡的灰色心跳.md",
          "title": "第 2 章：草叢裡的灰色心跳",
          "enTitle": "Chapter 2: The Gray Heartbeat in the Thicket",
          "shortTitle": "草叢裡的灰色心跳",
          "concept": "老榕樹下血戰校貓黑炭、粗魯少年阿棠掌心二十克微弱而瘋狂的心跳震撼",
          "wordCount": 5270,
          "readTimeMin": 23,
          "puzzle": {
            "chapter": 2,
            "title": "榕樹下雛雀二十克心跳共振",
            "cipher": "校貓黑炭利爪撕扯右翼覆羽 | 腕掌骨骨裂瀕死休克 | 掌心微弱而瘋狂的雛鳥心跳",
            "decoded": "以生命換取生命的本能守護 + 孩子王心靈錨點建立",
            "concept": "當平日粗魯野蠻的小霸王阿棠親手感受雛雀脆弱無助的心跳時，內心最柔軟的守護本能被徹底喚醒。"
          }
        },
        {
          "id": 3,
          "globalId": 3,
          "file": "第03章_全票通過的走私案.md",
          "title": "第 3 章：全票通過的走私案",
          "enTitle": "Chapter 3: The Unanimously Approved Smuggling Operation",
          "shortTitle": "全票通過的走私案",
          "concept": "鞋盒進班小麻噪音休克、晴子拍案十秒死寂、通靈鳥語初醒與小麻登基",
          "wordCount": 5660,
          "readTimeMin": 25,
          "puzzle": {
            "chapter": 3,
            "title": "跨物種心靈感應破譯與走私同盟",
            "cipher": "班長拍案建校首次十秒死寂 | 腦波頻率跨物種心靈共鳴 | 傲嬌帝王落魄貴族心聲破譯",
            "decoded": "秘密通靈翻譯官就位 + 二十六人非法走私同盟成立",
            "concept": "晴子戴起冷面科學面具掩飾通靈天賦，在內心與傲嬌小麻展開激烈吐槽，以科學急救名義指揮全班建立護鳥同盟。"
          }
        },
        {
          "id": 4,
          "globalId": 4,
          "file": "第04章_踩在生雞蛋上的早自習.md",
          "title": "第 4 章：踩在生雞蛋上的早自習",
          "enTitle": "Chapter 4: Morning Self-Study Walking on Raw Eggs",
          "shortTitle": "踩在生雞蛋上的早自習",
          "concept": "一級消音戒備啟動、抬椅兩公分、幽靈步與桌底換藥冷面吐槽",
          "wordCount": 3792,
          "readTimeMin": 17,
          "puzzle": {
            "chapter": 4,
            "title": "六年一班極限消音物理工程",
            "cipher": "椅子懸空兩公分防震位移 | 球鞋踮腳幽靈漫步無聲摩擦 | 腹語術與眼神物理制裁",
            "decoded": "極限消音作戰 + 粗礪班級初嚐寂靜之美",
            "concept": "為了不讓骨裂小麻因應激猝死，全班展開極限消音，噪音魔王班第一次學會了自制與屏息凝神的專注。"
          }
        },
        {
          "id": 5,
          "globalId": 5,
          "file": "第05章_第四位犧牲者……等等，這不對勁？.md",
          "title": "第 5 章：第四位犧牲者……等等，這不對勁？",
          "enTitle": "Chapter 5: The Fourth Victim... Wait, Something Is Wrong?",
          "shortTitle": "第四位犧牲者……等等，這不對勁？",
          "concept": "溫雅婷推門遭遇修道院式死寂、佛洛伊德心理學全面潰敗與高級冷暴力誤會",
          "wordCount": 3829,
          "readTimeMin": 17,
          "puzzle": {
            "chapter": 5,
            "title": "溫老師的選擇性緘默症理論謎團",
            "cipher": "修道院老僧入定式眼神注視 | 心理學防禦機制全面失效 | 辦公室胃藥與冷暴力假說",
            "decoded": "喜劇反差：將全班護鳥的虔誠寂靜誤判為反社會冷暴力",
            "concept": "溫老師滿腦子心理學理論，卻完全料想不到學生們閉嘴的唯一原因，只是課桌底下一隻正在打呼嚕的二十克麻雀。"
          }
        },
        {
          "id": 6,
          "globalId": 6,
          "file": "第06章_舌尖上的小米與棉花棒.md",
          "title": "第 6 章：舌尖上的小米與棉花棒",
          "enTitle": "Chapter 6: Millet and Cotton Swabs on the Tip of the Tongue",
          "shortTitle": "舌尖上的小米與棉花棒",
          "concept": "課堂抽屜微型特務物資傳遞、黑板轉身時間差與溫老師感動落淚",
          "wordCount": 4059,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 6,
            "title": "抽屜暗道物資接力與視角盲區",
            "cipher": "黑板轉身粉筆敲擊 3 秒盲區 | 蒸餾水生理食鹽水棉花棒接力 | 溫老師誤認愛心感化頑童",
            "decoded": "特工級微型課堂後勤 + 傲嬌領主嫌棄小米如砂礫",
            "concept": "學生們在黑板轉身視角盲區間以毫秒級默契傳遞食鹽水與小米，在老師眼皮底下一邊認真聽課一邊搶救小生命。"
          }
        },
        {
          "id": 7,
          "globalId": 7,
          "file": "第07章_黑面判官的望遠鏡.md",
          "title": "第 7 章：黑面判官的望遠鏡",
          "enTitle": "Chapter 7: The Black-Faced Judge's Telescope",
          "shortTitle": "黑面判官的望遠鏡",
          "concept": "兩週零違規引發全校恐慌、周嚴主任巡堂望遠鏡日夜盯梢",
          "wordCount": 3823,
          "readTimeMin": 17,
          "puzzle": {
            "chapter": 7,
            "title": "黑面判官的零違規暴動假說",
            "cipher": "連續兩週違規點數為零異常指標 | 8×42 高倍率巡堂望遠鏡盯梢 | 苦行僧式安寧引發全校戒備",
            "decoded": "事出反常必有妖的成見 + 孩子們的純潔守護",
            "concept": "學務主任周嚴堅信寂靜是全校大暴動的前奏，殊不知那是六年一班第一次為了守護生命而奉獻出的最高敬意。"
          }
        },
        {
          "id": 8,
          "globalId": 8,
          "file": "第08章_突擊！落葉草本與除臭陣地.md",
          "title": "第 8 章：突擊！落葉草本與除臭陣地",
          "enTitle": "Chapter 8: Ambush! Fallen Leaves, Herbs, and the Deodorizing Defense",
          "shortTitle": "突擊！落葉草本與除臭陣地",
          "concept": "小麻糞便異味暴露危機、潔癖小魚研發柚皮茶葉墊料與鞋盒乾坤大挪移",
          "wordCount": 4251,
          "readTimeMin": 19,
          "puzzle": {
            "chapter": 8,
            "title": "草本芳香化學與課堂水銀避險",
            "cipher": "乾燥柚皮檸檬烯 + 高山茶多酚吸附異味 | 突擊搜查課桌水銀瀉地傳遞鞋盒 | 教室散發詭異森林草本香",
            "decoded": "植物多酚除臭陣地 + 二十六張課桌鞋盒大挪移",
            "concept": "小魚克服潔癖恐懼研發天然芳香除臭墊料；周主任抽查時，鞋盒在桌底行雲流水滑動，避開鐵夾檢查。"
          }
        },
        {
          "id": 9,
          "globalId": 9,
          "file": "第09章_輔導室的緊急召喚.md",
          "title": "第 9 章：輔導室的緊急召喚",
          "enTitle": "Chapter 9: Emergency Summons to the Counseling Office",
          "shortTitle": "輔導室的緊急召喚",
          "concept": "集體畫樹測驗樹上全是鳥窩、小麻啾叫引發全員整齊咳嗽震撼全樓",
          "wordCount": 4134,
          "readTimeMin": 18,
          "puzzle": {
            "chapter": 9,
            "title": "畫樹測驗集體投射與音頻共鳴",
            "cipher": "二十六張畫紙樹杈皆隱匿鳥巢 | 突發啾鳴一秒鐘全員假咳掩護 | 輔導室心理量表徹底當機",
            "decoded": "無意識集體心理投射 + 跨越全班的驚人默契",
            "concept": "心理學投射測驗揭露全班潛意識已將小麻視為不可分割的集體靈魂；一聲突如其來的鳥啼被雷鳴般的咳嗽完美化解。"
          }
        },
        {
          "id": 10,
          "globalId": 10,
          "file": "第10章_總司令的第一次振翅.md",
          "title": "第 10 章：總司令的第一次振翅",
          "enTitle": "Chapter 10: The Commander-in-Chief's Maiden Wing Flap",
          "shortTitle": "總司令的第一次振翅",
          "concept": "小麻拆除固定夾板、課桌巡視零分考卷與晴子感受小麻對天空的眷戀",
          "wordCount": 4540,
          "readTimeMin": 20,
          "puzzle": {
            "chapter": 10,
            "title": "骨裂癒合生物力學與天際渴望",
            "cipher": "右側腕掌骨骨痂生長牢固拆除夾板 | 昂首闊步啄穿阿棠零分數學試卷 | 心靈感應聽見無垠天穹召喚",
            "decoded": "生命復甦的驕傲 + 天空眷戀與離別暗伏",
            "concept": "小麻終於能重新站立走動，以傲嬌領主之姿巡視課桌；晴子在心靈感應中感受到了牠對廣闊天空最深切的鄉愁。"
          }
        },
        {
          "id": 11,
          "globalId": 11,
          "file": "第11章_夏日午後的驚雷.md",
          "title": "第 11 章：夏日午後的驚雷",
          "enTitle": "Chapter 11: Sudden Thunder on a Summer Afternoon",
          "shortTitle": "夏日午後的驚雷",
          "concept": "突發夏日雷暴破窗襲擊、受驚小麻撞向旋轉吊扇、全班捨身飛撲人體肉墊",
          "wordCount": 3358,
          "readTimeMin": 15,
          "puzzle": {
            "chapter": 11,
            "title": "雷暴氣流亂流與全班捨身護鳥",
            "cipher": "百帕強對流狂風掀翻鋁合金窗 | 應激雛鳥失控撞向高速吊扇盲區 | 大聲公怒吼全體男生飛身肉墊",
            "decoded": "破除安靜偽裝 + 喧囂重燃只為以身護鳥",
            "concept": "在生死攸關的一瞬間，孩子們拋棄了偽裝數週的安靜，以血肉之軀撲向桌椅地板，死死護住脆弱的小生命。"
          }
        },
        {
          "id": 12,
          "globalId": 12,
          "file": "第12章_紙包不住的羽毛.md",
          "title": "第 12 章：紙包不住的羽毛",
          "enTitle": "Chapter 12: Feathers That Paper Cannot Conceal",
          "shortTitle": "紙包不住的羽毛",
          "concept": "周主任溫老師破門而入、滿地狼藉中阿棠高舉血跡未乾掌心的小麻、秘密大白",
          "wordCount": 3070,
          "readTimeMin": 13,
          "puzzle": {
            "chapter": 12,
            "title": "秘密大白於天下的靈魂震撼",
            "cipher": "狼藉教室翻倒桌椅與擦傷膝蓋 | 粗糙掌心死死高舉灰色雛鳥 | 嚴苛校規撞擊純真善良靈魂",
            "decoded": "紙包不住的羽毛 + 最頑劣班級最深沉的愛",
            "concept": "校園中最惡名昭彰的魔王班，守護了一整個夏天的秘密赤裸裸攤在師長眼前，帶給成人世界前所未有的震撼。"
          }
        },
        {
          "id": 13,
          "globalId": 13,
          "file": "第13章_停職還是特赦？.md",
          "title": "第 13 章：停職還是特赦？",
          "enTitle": "Chapter 13: Suspension or Amnesty?",
          "shortTitle": "停職還是特赦？",
          "concept": "全班二十六人起立共同承擔責任、溫老師拍案捍衛學生善良、晴子首度卸下毒舌心防",
          "wordCount": 3184,
          "readTimeMin": 14,
          "puzzle": {
            "chapter": 13,
            "title": "教育尊嚴的拍案抗辯與責任承擔",
            "cipher": "二十六人全員起立共擔處分 | 怯弱代課導師首次拍講台爭辯 | 毒舌班長卸下偽裝訴說生命改變",
            "decoded": "從推諉到擔當 + 教育真諦在於守護良善",
            "concept": "溫老師以專業尊嚴力排眾議，指出孩子們學會了比成績更崇高的同理與愛；全班的成長讓鐵面主任動容。"
          }
        },
        {
          "id": 14,
          "globalId": 14,
          "file": "第14章_放飛那一天的黑板.md",
          "title": "第 14 章：放飛那一天的黑板",
          "enTitle": "Chapter 14: The Blackboard on the Day of Release",
          "shortTitle": "放飛那一天的黑板",
          "concept": "小麻傷癒天空才是歸宿、老榕樹下放飛晚霞、傲嬌道謝心聲與「全員康復」黑板評語",
          "wordCount": 2178,
          "readTimeMin": 9,
          "puzzle": {
            "chapter": 14,
            "title": "老榕樹下的生命釋放與告別",
            "cipher": "金紅晚霞映照老榕樹繁茂枝椏 | 展開掌心翱翔天空傲嬌道謝 | 黑板留言：六年一班全員康復",
            "decoded": "放手的崇高智慧 + 告別是成長的必經成人禮",
            "concept": "阿棠鬆開雙手，小麻振翅飛向落日晚霞；晴子聽到了小麻最後一句傲嬌道謝，六年一班的心靈全員康復。"
          }
        },
        {
          "id": 15,
          "globalId": 15,
          "file": "第15章_重獲新生的喧嘩.md",
          "title": "第 15 章：重獲新生的喧嘩",
          "enTitle": "Chapter 15: Reborn Bustle and Laughter",
          "shortTitle": "重獲新生的喧嘩",
          "concept": "喧嘩質地的徹底昇華、聽見窗外麻雀啼鳴時半秒鐘的默契仰望、心中留存柔軟羽毛",
          "wordCount": 2701,
          "readTimeMin": 12,
          "puzzle": {
            "chapter": 15,
            "title": "喧嘩昇華與永恆的心靈羽毛",
            "cipher": "重獲新生的奔跑與笑聲質地改變 | 麻雀掠過窗外半秒鐘默契仰望 | 心底深處永遠留存一抹柔軟羽毛",
            "decoded": "全書大結局 + 喧鬧中的溫柔同理與生命敬畏",
            "concept": "六年一班恢復了吵鬧，但這喧鬧充滿了愛與包容。每次聽見鳥鳴，全班默契抬頭仰望，象徵純真與善良的永恆鐫刻。"
          }
        }
      ]
    },
    {
      "id": "book-21",
      "title": "平行時空的同班同學 1：舊禮堂的鏡子",
      "enTitle": "Classmates from a Parallel World 1: The Mirror in the Old Auditorium",
      "subtitle": "第一幕：禮堂鏡與時空裂縫",
      "enSubtitle": "Act I: The Auditorium Mirror and the Temporal Rift",
      "status": "第一卷大完結",
      "statusColor": "sky",
      "coverTag": "全彩精裝 · 雙語對照",
      "author": "Antigravity 創意小組",
      "targetAge": "9～15 歲",
      "totalWords": "15.3 萬字",
      "totalChapters": 8,
      "description": "離海堤兩條街的海聲國小，放學後的走廊安靜得只能聽見自己的腳步聲。安靜退縮的少年林澈推開舊禮堂的鐵門，赫然發現舞台後方蒙塵的老鏡泛起銀白光芒。鏡子裡浮現一張一模一樣、卻帶著燦爛笑容的少年臉孔！周予晴、吳達與林澈穿過時空裂縫，遇見了平行世界的另一個六年一班。然而同邊共處六小時的同步化危機悄然降臨，鏡面出現了第一道裂痕！",
      "chapters": [
        {
          "file": "第01章_舊禮堂的鏡子.md",
          "title": "第 01 章　舊禮堂的鏡子",
          "enTitle": "Chapter 01 — The Mirror in the Old Auditorium",
          "shortTitle": "舊禮堂的鏡子",
          "concept": "舊禮堂蒙塵老鏡的銀白微光，照亮少年安靜角落裡未曾言說的孤獨。",
          "wordCount": 1912,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "MIRROR-01-SILVER-WAVE",
            "hint": "將鏡子對面的英文字母鏡像反轉，找出通往舊禮堂的時鐘密碼。",
            "question": "林澈在舊禮堂老鏡看見對面男孩揮手的時間是幾點幾分？",
            "answer": "16:05",
            "explanation": "放學後的 16:05，老鏡產生共振水波漣漪，裂縫正式張開。"
          },
          "id": 1,
          "globalId": 1
        },
        {
          "file": "第02章_海聲國小的怪事.md",
          "title": "第 02 章　海聲國小的怪事",
          "enTitle": "Chapter 02 — The Strange Happenings at Haisheng Elementary",
          "shortTitle": "海聲國小的怪事",
          "concept": "校門口小七還是書店？記憶的微小錯位，是時空交錯的前奏。",
          "wordCount": 1995,
          "readTimeMin": 7,
          "puzzle": {
            "cipher": "STORE-OR-711-SHIFT",
            "hint": "兩個世界的校門口地標不同，象徵著分歧點帶來的不可逆漂移。",
            "question": "A 世界校門口的地標是什麼？B 世界又是什麼？",
            "answer": "A世界是超商，B世界是海聲書店",
            "explanation": "不同的歷史分歧，在校門口映射出截然不同的生活記憶。"
          },
          "id": 2,
          "globalId": 2
        },
        {
          "file": "第03章_鏡子裡的六年一班.md",
          "title": "第 03 章　鏡子裡的六年一班",
          "enTitle": "Chapter 03 — Class 6-1 in the Mirror",
          "shortTitle": "鏡子裡的六年一班",
          "concept": "鏡面波紋擴散，對面教室裡坐著五十二個人的雙重日常。",
          "wordCount": 1920,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "CLASS-26-DOUBLE-52",
            "hint": "兩個六年一班各有 26 位同學，加起來共有多少位少年？",
            "question": "海聲國小兩個平行時空的六年一班學生總數共是多少人？",
            "answer": "52人",
            "explanation": "每班 26 人，五十二個少年在鏡面兩側初次震撼相望。"
          },
          "id": 3,
          "globalId": 3
        },
        {
          "file": "第04章_平行世界的我們.md",
          "title": "第 04 章　平行世界的我們",
          "enTitle": "Chapter 04 — Us in the Parallel World",
          "shortTitle": "平行世界的我們",
          "concept": "穿越鏡面的第一步，迎面而來的是耀眼、開朗且自信的另一個自己。",
          "wordCount": 2195,
          "readTimeMin": 7,
          "puzzle": {
            "cipher": "CROSS-PARALLEL-WORLD",
            "hint": "穿越時空窗口時，能看見裂縫的孩子年齡上限是多少歲？",
            "question": "根據時空規則硬設定，幾歲以下的孩子才看得見裂縫？",
            "answer": "13歲以下",
            "explanation": "大人完全看不見裂縫，只有 13 歲以下的純真孩子能看見水波鏡光。"
          },
          "id": 4,
          "globalId": 4
        },
        {
          "file": "第05章_兩個林澈.md",
          "title": "第 05 章　兩個林澈",
          "enTitle": "Chapter 05 — The Two Lin Ches",
          "shortTitle": "兩個林澈",
          "concept": "指尖碰觸瞬間的記憶交換：看見對方的光芒，喚醒心底遺忘的傷痕。",
          "wordCount": 1923,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "TOUCH-MEMORY-3MIN",
            "hint": "兩個自己碰觸時會觸發幾分鐘的心靈記憶互通？",
            "question": "兩個自己握手或碰觸時，會觸發幾分鐘的記憶交換？",
            "answer": "3分鐘",
            "explanation": "肌膚碰觸會觸發三分鐘記憶互通，雙方共享對方生命歷程中的一段關鍵回憶。"
          },
          "id": 5,
          "globalId": 5
        },
        {
          "file": "第06章_大人的世界.md",
          "title": "第 06 章　大人的世界",
          "enTitle": "Chapter 06 — The World of Adults",
          "shortTitle": "大人的世界",
          "concept": "大人眼中的尋常走廊，孩子眼中的雙重宇宙；校園角落開始對不上。",
          "wordCount": 1805,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "ADULT-BLIND-CHILD-SEE",
            "hint": "大人經過禮堂時只會看見一面怎樣的老鏡子？",
            "question": "為什麼陳老師和校長從未發現舊禮堂的裂縫？",
            "answer": "大人看不見裂縫，只看見蒙塵的老鏡子",
            "explanation": "時空共振頻率只與少年的心智共鳴，大人只會將其視為尋常舊家具。"
          },
          "id": 6,
          "globalId": 6
        },
        {
          "file": "第07章_誰才是真的六年一班.md",
          "title": "第 07 章　誰才是真的六年一班",
          "enTitle": "Chapter 07 — Which Is the Real Class 6-1?",
          "shortTitle": "誰才是真的六年一班",
          "concept": "晴晴的原則對決小陽的熱血，兩個班長為「誰是真的」展開爭鋒。",
          "wordCount": 1727,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "LEADER-RULE-VS-CHARM",
            "hint": "A 世界的周予晴與 B 世界的趙小陽分別代表哪兩種領導風格？",
            "question": "A 世界與 B 世界六年一班的班長分別是誰？",
            "answer": "周予晴與趙小陽",
            "explanation": "周予晴以理性和規則帶班，趙小陽以熱血與笑聲帶班。"
          },
          "id": 7,
          "globalId": 7
        },
        {
          "file": "第08章_輪流回家.md",
          "title": "第 08 章　輪流回家",
          "enTitle": "Chapter 08 — Taking Turns to Go Home",
          "shortTitle": "輪流回家",
          "concept": "六小時同邊同步化警報！鏡面第一道細紋，逼迫兩班建立輪流回家守則。",
          "wordCount": 1795,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "SIX-HOURS-SYNC-LIMIT",
            "hint": "兩個自己待在同一邊世界超過幾小時會開始同步化與透明化？",
            "question": "兩個自己在同一邊世界共處的危險時限是多少小時？",
            "answer": "6小時同步化，12小時開始被覆蓋",
            "explanation": "超過 6 小時言行會同步靠攏，超過 12 小時其中一人會開始變透明。"
          },
          "id": 8,
          "globalId": 8
        }
      ]
    },
    {
      "id": "book-22",
      "title": "平行時空的同班同學 2：被說出口的話",
      "enTitle": "Classmates from a Parallel World 2: Words Spoken Aloud",
      "subtitle": "第二幕：對不上的記憶與分歧點",
      "enSubtitle": "Act II: Mismatched Memories and the Divergence Point",
      "status": "第二卷大完結",
      "statusColor": "sky",
      "coverTag": "全彩精裝 · 雙語對照",
      "author": "Antigravity 創意小組",
      "targetAge": "9～15 歲",
      "totalWords": "13.0 萬字",
      "totalChapters": 8,
      "description": "第四天到來，不可逆的「覆蓋現象」突襲海聲國小！校門口的超商變回書店，安安的畫本在對岸綻放光芒，阿達看見了被全班當成智囊軍師的另一個自己。天才小筠以縝密邏輯推算，鎖定所有歷史分歧的起點竟在開學第三天的體育課！兩班在操場重演接力選拔，逼出林澈深層封閉的記憶；而鏡面裂縫劇烈擴散，七天倒數的警報已響徹天際！",
      "chapters": [
        {
          "file": "第09章_對不上的記憶.md",
          "title": "第 09 章　對不上的記憶",
          "enTitle": "Chapter 09 — Memories That Don't Match",
          "shortTitle": "對不上的記憶",
          "concept": "陌生記憶悄然滲入夢境，第四天覆蓋不可逆來襲，恐慌悄然蔓延。",
          "wordCount": 1969,
          "readTimeMin": 7,
          "puzzle": {
            "cipher": "OVERWRITE-DAY4-FEAR",
            "hint": "世界覆蓋不可逆從裂縫開啟後的第幾天正式開始？",
            "question": "從第幾天開始，兩個世界會出現不可逆的覆蓋現象？",
            "answer": "第4天",
            "explanation": "第 1～3 天正常，第 4～6 天覆蓋不可逆，第 7 天裂縫將永遠閉合。"
          },
          "id": 1,
          "globalId": 9
        },
        {
          "file": "第10章_阿達的兩種人生.md",
          "title": "第 10 章　阿達的兩種人生",
          "enTitle": "Chapter 10 — A-Da's Two Lives",
          "shortTitle": "阿達的兩種人生",
          "concept": "在被當成小丑與被重用為軍師之間，阿達看見了自己靈魂的重量。",
          "wordCount": 1678,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "AHTA-CLOWN-VS-HERO",
            "hint": "阿達在 B 世界的綽號與定位是什麼？",
            "question": "B 世界的同學們如何稱呼吳達，並將他視為班上的什麼？",
            "answer": "達哥，被全班重用的軍師智囊",
            "explanation": "在自信林澈的信任帶動下，阿達的鬼點子不再是笑料，而是全班依賴的計策。"
          },
          "id": 2,
          "globalId": 10
        },
        {
          "file": "第11章_天才與死黨.md",
          "title": "第 11 章　天才與死黨",
          "enTitle": "Chapter 11 — The Genius and Her Best Friends",
          "shortTitle": "天才與死黨",
          "concept": "孤獨的天才與被死黨簇擁的天才，小筠以精準演繹鎖定時光分歧點。",
          "wordCount": 1468,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "GENIUS-LOGIC-TIMELINE",
            "hint": "郭小筠在兩個世界的最大差異在於有沒有什麼？",
            "question": "A 世界獨來獨往的小筠，在 B 世界擁有怎樣的生活？",
            "answer": "擁有形影不離的死黨與溫暖的陪伴",
            "explanation": "同樣的天賦，在被接納與理解的環境下綻放出完全不同的幸福光采。"
          },
          "id": 3,
          "globalId": 11
        },
        {
          "file": "第12章_安安的畫.md",
          "title": "第 12 章　安安的畫",
          "enTitle": "Chapter 12 — An-An's Drawings",
          "shortTitle": "安安的畫",
          "concept": "深藏抽屜的畫冊與貼滿牆壁的微光，安安把畫送給了對面的自己。",
          "wordCount": 1594,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "DRAWING-IS-A-GIFT",
            "hint": "B 世界的老師對安安說了哪一句話，鼓勵了她的創作？",
            "question": "B 世界老師對安安畫畫的評價是什麼？",
            "answer": "畫畫是上天的禮物",
            "explanation": "「畫畫是禮物」這句話化解了安安長期的自我懷疑，也促成兩班畫作的交流。"
          },
          "id": 4,
          "globalId": 12
        },
        {
          "file": "第13章_覆蓋來襲.md",
          "title": "第 13 章　覆蓋來襲",
          "enTitle": "Chapter 13 — The Overwriting Strikes",
          "shortTitle": "覆蓋來襲",
          "concept": "牆壁顏色漂移、走廊地磚變更，覆蓋加劇迫使兩班放下成見全面同盟。",
          "wordCount": 1646,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "WALL-COLOR-DRIFTING",
            "hint": "當兩個世界開始漂移覆蓋時，孩子們決定做什麼？",
            "question": "面對覆蓋危機，兩班學生做出了什麼共同決定？",
            "answer": "停止內鬥，聯手尋找分歧點",
            "explanation": "面臨其中一邊將被徹底抹殺的危機，少年們選擇攜手守護兩個世界。"
          },
          "id": 5,
          "globalId": 13
        },
        {
          "file": "第14章_體育課的那句話.md",
          "title": "第 14 章　體育課的那句話",
          "enTitle": "Chapter 14 — The Words from PE Class",
          "shortTitle": "體育課的那句話",
          "concept": "哨音在回憶的霧中穿透，林澈終於想起那天下午體育課上的那句話。",
          "wordCount": 1601,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "PE-CLASS-WHISTLE-ECHO",
            "hint": "分歧點發生的那一堂體育課，是六年級開學第幾天？",
            "question": "命運分歧點發生的確切時間是哪一天？",
            "answer": "開學第三天的體育課",
            "explanation": "六年級開學第三天大隊接力最後一棒選拔，老師的一句話改變了一切。"
          },
          "id": 6,
          "globalId": 14
        },
        {
          "file": "第15章_兩個世界的比賽.md",
          "title": "第 15 章　兩個世界的比賽",
          "enTitle": "Chapter 15 — The Race Between Two Worlds",
          "shortTitle": "兩個世界的比賽",
          "concept": "操場上的接力選拔重演：接力棒傳遞的不僅是速度，更是彼此的理解。",
          "wordCount": 1534,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "RELAY-BATON-PASS-UNDERSTAND",
            "hint": "兩班重演大隊接力選拔的目的，是為了逼出什麼？",
            "question": "為什麼兩班要在操場重演那場接力賽？",
            "answer": "重現情境以逼出林澈遺忘的關鍵記憶",
            "explanation": "藉由奔跑的風聲與接力棒的觸感，林澈深層封閉的記憶被徹底喚醒。"
          },
          "id": 7,
          "globalId": 15
        },
        {
          "file": "第16章_鏡裂.md",
          "title": "第 16 章　鏡裂",
          "enTitle": "Chapter 16 — The Mirror Cracks",
          "shortTitle": "鏡裂",
          "concept": "鏡面裂痕蔓延如蛛網！七日倒數的警報敲響，修復不是抹去歷史。",
          "wordCount": 1493,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "MIRROR-CRACK-DAY6-CRISIS",
            "hint": "如果第 7 天結束前分歧點沒有和解，兩個世界會發生什麼？",
            "question": "時空裂縫硬時鐘如果在第 7 天耗盡，下場會如何？",
            "answer": "其中一個世界會被整個抹掉",
            "explanation": "硬碰的代價是不可承受的毀滅，唯有在午夜前達成心靈和解才能安全閉合。"
          },
          "id": 8,
          "globalId": 16
        }
      ]
    },
    {
      "id": "book-23",
      "title": "平行時空的同班同學 3：留下來的人",
      "enTitle": "Classmates from a Parallel World 3: The One Who Stayed Behind",
      "subtitle": "第三幕：時間投影與奇蹟的選擇",
      "enSubtitle": "Act III: Temporal Projection and the Miraculous Choice",
      "status": "全三卷震撼大完結",
      "statusColor": "sky",
      "coverTag": "全彩精裝 · 雙語對照",
      "author": "Antigravity 創意小組",
      "targetAge": "9～15 歲",
      "totalWords": "11.7 萬字",
      "totalChapters": 8,
      "description": "倒數第七天，兩班透過時間投影重回分歧點當下。看見被否定與被鼓勵的兩種自己，林澈痛哭釋懷，兩個世界迎來真正的和解！鏡光漸暗，最後的同學會盛大展開；面對午夜鏡子將永遠關閉，阿達做出了一個震撼所有人的溫暖抉擇——跨界交換人生！在最後一分鐘的呼喊中，五十二位少年掌心隔鏡相疊，迎向奇蹟的早晨。",
      "chapters": [
        {
          "file": "第17章_回到那一天.md",
          "title": "第 17 章　回到那一天",
          "enTitle": "Chapter 17 — Back to That Day",
          "shortTitle": "回到那一天",
          "concept": "時間投影看見過去的那一秒：劉老師正要開口，看得見卻碰不到。",
          "wordCount": 1663,
          "readTimeMin": 6,
          "puzzle": {
            "cipher": "TIME-PROJECTION-SEEN",
            "hint": "在時間投影中，穿越回去的孩子能改變過去發生的物理事實嗎？",
            "question": "修復時空裂縫的真正方式是改寫歷史嗎？",
            "answer": "不是改寫歷史，而是讓當事人釋懷和解",
            "explanation": "時間投影中看得見碰不到，修復的是人的「執念」與心靈，而非歷史事實。"
          },
          "id": 1,
          "globalId": 17
        },
        {
          "file": "第18章_兩種選擇.md",
          "title": "第 18 章　兩種選擇",
          "enTitle": "Chapter 18 — Two Choices",
          "shortTitle": "兩種選擇",
          "concept": "看見兩種世界的代價與美好，痛哭的少年第一次對自己徹底釋懷。",
          "wordCount": 1587,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "TWO-CHOICES-SELF-ACCEPT",
            "hint": "林澈在看見兩種自己後，明白了什麼心靈真理？",
            "question": "林澈最終學會的核心道理是什麼？",
            "answer": "安靜也很好，自信也很好，都是真正的我",
            "explanation": "接納自己的所有面向，不再活在「如果當時那樣就好了」的比較痛苦中。"
          },
          "id": 2,
          "globalId": 18
        },
        {
          "file": "第19章_最後的同學會.md",
          "title": "第 19 章　最後的同學會",
          "enTitle": "Chapter 19 — The Final Class Reunion",
          "shortTitle": "最後的同學會",
          "concept": "同邊共處禁制解封！最後二十分鐘的同學會，掌心相擊、交換卡片。",
          "wordCount": 1523,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "LAST-CLASS-PARTY-20MIN",
            "hint": "在分歧點和解之後，時空規則哪一條限制被正式解除？",
            "question": "和解之後解除的硬性規則是哪一條？",
            "answer": "同邊共處上限規則解除（兩個自己可共處）",
            "explanation": "規則解封後兩個自己不會再透明化，這也為結局阿達的交換留下契機。"
          },
          "id": 3,
          "globalId": 19
        },
        {
          "file": "第20章_道別開始.md",
          "title": "第 20 章　道別開始",
          "enTitle": "Chapter 20 — The Farewell Begins",
          "shortTitle": "道別開始",
          "concept": "鏡光轉暗，道別開始；阿達走向全班坦白心願，達哥提出跨界交換。",
          "wordCount": 1484,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "FAREWELL-AHTA-PROPOSAL",
            "hint": "阿達為什麼想留在 B 世界？",
            "question": "阿達選擇留下的最深層心理動機是什麼？",
            "answer": "因為在那裡有人真正把他當成可以信賴的人",
            "explanation": "他要的不是變成別人，而是體驗「被看見、被信任」的溫暖價值。"
          },
          "id": 4,
          "globalId": 20
        },
        {
          "file": "第21章_交換.md",
          "title": "第 21 章　交換",
          "enTitle": "Chapter 21 — The Swap",
          "shortTitle": "交換",
          "concept": "琉璃彈珠交給死黨，兩個吳達在鏡中擦身；每個世界依然只有一個阿達。",
          "wordCount": 1381,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "EXCHANGE-TWO-AHTA",
            "hint": "兩個阿達互換人生後，每個世界的人數是否有變動？",
            "question": "阿達交換後，A 世界與 B 世界的人數各是多少？",
            "answer": "依然各自是26人，不重複也不空缺",
            "explanation": "兩個阿達對調了版本，用溫柔的交換讓兩個世界都多了一份被看見的力量。"
          },
          "id": 5,
          "globalId": 21
        },
        {
          "file": "第22章_最後一分鐘.md",
          "title": "第 22 章　最後一分鐘",
          "enTitle": "Chapter 22 — The Final Minute",
          "shortTitle": "最後一分鐘",
          "concept": "最後一分鐘的呼喊：「我們是平行時空的同班同學！」鏡縫永遠合攏。",
          "wordCount": 1129,
          "readTimeMin": 4,
          "puzzle": {
            "cipher": "LAST-MINUTE-WE-ARE-CLASSMATES",
            "hint": "五十二位少年在鏡子閉合前最後齊聲高喊的一句話是什麼？",
            "question": "全書五十二人最後在鏡前喊出的口號是什麼？",
            "answer": "我們是——平行時空的同班同學！",
            "explanation": "鏡縫在午夜十二點整安穩閉合，海聲書店亮著，兩個世界都平安完好。"
          },
          "id": 6,
          "globalId": 22
        },
        {
          "file": "第23章_奇蹟的早晨.md",
          "title": "第 23 章　奇蹟的早晨",
          "enTitle": "Chapter 23 — The Morning of Miracles",
          "shortTitle": "奇蹟的早晨",
          "concept": "奇蹟的早晨：晴晴笑了、安安貼上畫本、角落的少年第一次舉起手。",
          "wordCount": 1355,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "MIRACLE-MORNING-RAISE-HAND",
            "hint": "隔天早晨林澈在課堂上做出了什麼突破自我的舉動？",
            "question": "林澈在奇蹟的早晨第一次做了什麼平常不敢做的事？",
            "answer": "主動舉手回答問題",
            "explanation": "不再習慣退縮到角落，少年鼓起勇氣展現被看見的勇氣。"
          },
          "id": 7,
          "globalId": 23
        },
        {
          "file": "第24章_平行時空的同班同學.md",
          "title": "第 24 章　平行時空的同班同學（全書大結局）",
          "enTitle": "Chapter 24 — Classmates from a Parallel World (The Grand Finale)",
          "shortTitle": "平行時空的同班同學（全書大結局）",
          "concept": "畢業典禮褪色的鯨魚貼紙：學會被看見，也學會去看見別人；鏡子永遠記得。",
          "wordCount": 1579,
          "readTimeMin": 5,
          "puzzle": {
            "cipher": "WHALE-STICKER-RETURN-SEA",
            "hint": "林澈在畢業典禮把褪成透明的鯨魚貼紙貼在何處「放回海裡」？",
            "question": "全書大結局中，林澈代表致詞後把鯨魚貼紙貼在了哪裡？",
            "answer": "貼在舊禮堂老鏡的木框上",
            "explanation": "把鯨魚放回海裡，鏡面泛起漣漪，兩個世界的同班同學相視微笑，大團圓完結。"
          },
          "id": 8,
          "globalId": 24
        }
      ]
    },
    {
      "id": "book-24",
      "seriesId": "series-10",
      "title": "冒險齒輪：齒輪星核的微縮旅人 1：跌入游絲深淵",
      "enTitle": "Adventure Gear: Voyagers of the Clockwork Core Vol 1: The Fall into the Hairspring Abyss",
      "subtitle": "微維度震盪與一毫米的世界",
      "enSubtitle": "Micro-Dimensional Shock and the One-Millimeter World",
      "status": "第一卷完結 · 全 6 章已上線",
      "statusColor": "emerald",
      "coverTag": "🎉 第一卷完結",
      "author": "鹿陽發明小隊",
      "targetAge": "9～15 歲適讀",
      "totalWords": "3.3 萬字",
      "totalChapters": 6,
      "description": "鹿陽國小舊鐘樓頂層閣樓，發明少年誠浩、學霸班長葉旖緁、死黨將江與機械柴犬皮可意外啟動了爺爺封存百年的『渾天星象天文座鐘』。微維度空間摺疊場瞬間將四人壓縮一千倍（身高僅 1.5 毫米），墜入龐大的齒輪底盤！主發條啟動了 720 分鐘自毀倒數，微縮旅人們展開生死大突圍！",
      "chapters": [
        {
          "file": "第01章_閣樓裡的微維度震盪.md",
          "title": "第 01 章　閣樓裡的微維度震盪",
          "enTitle": "Chapter 01 — Micro-Dimensional Shock in the Attic",
          "shortTitle": "閣樓裡的微維度震盪",
          "concept": "微維度空間摺疊 × 比例尺度 × 平方-立方定律",
          "wordCount": "5,800 字",
          "readTimeMin": 14,
          "puzzle": "觸碰黃金限位銷觸發微維度空間摺疊場，如何在體積縮小十億倍後適應微觀物理法則？",
          "id": 1,
          "globalId": 1
        },
        {
          "file": "第02章_一毫米的世界致命的果凍水滴.md",
          "title": "第 02 章　一毫米的世界！致命的果凍水滴",
          "enTitle": "Chapter 02 — The One-Millimeter World! The Deadly Jelly Droplet",
          "shortTitle": "致命的果凍水滴",
          "concept": "微觀表面張力 × 楊-拉普拉斯方程 × 界面活性劑破膜救援",
          "wordCount": "5,600 字",
          "readTimeMin": 14,
          "puzzle": "面對直徑三公尺、拉普拉斯壓強巨大的果凍水滴，如何利用疏水塗層與大豆卵磷脂破壞表面張力？",
          "id": 2,
          "globalId": 2
        },
        {
          "file": "第03章_灰塵如巨岩羊毛引雷霆.md",
          "title": "第 03 章　灰塵如巨岩，羊毛引雷霆",
          "enTitle": "Chapter 03 — Dust Like Boulders, Wool Summoning Lightning",
          "shortTitle": "灰塵如巨岩羊毛引雷霆",
          "concept": "微米靜電感應 × 介電擊穿 × 法拉第籠屏蔽與庫倫彈射",
          "wordCount": "5,500 字",
          "readTimeMin": 14,
          "puzzle": "面對兩億伏特每公尺的微米靜電雷暴峽谷，如何利用平底鍋法拉第籠與同種電荷庫倫斥力橫跨斷崖？",
          "id": 3,
          "globalId": 3
        },
        {
          "file": "第04章_守辰甲蟲的巡弋.md",
          "title": "第 04 章　守辰甲蟲的巡弋",
          "enTitle": "Chapter 04 — The Patrol of the Chrono-Beetles",
          "shortTitle": "守辰甲蟲的巡弋",
          "concept": "微型自走機械 × 六足交替三足步態 × 發條棘輪動力學",
          "wordCount": "5,500 字",
          "readTimeMin": 14,
          "puzzle": "面對以每秒十步快速合圍的古代黃銅守辰甲蟲，如何利用交替三足步態的力學盲區與發條棘輪共振脫險？",
          "id": 4,
          "globalId": 4
        },
        {
          "file": "第05章_游絲峽谷的千層彈簧床.md",
          "title": "第 05 章　游絲峽谷的千層彈簧床",
          "enTitle": "Chapter 05 — The Thousand-Layer Trampoline of the Hairspring Abyss",
          "shortTitle": "游絲峽谷的千層彈簧床",
          "concept": "虎克定律 × 游絲扭轉剛度 × 簡諧運動極限彈跳",
          "wordCount": "5,600 字",
          "readTimeMin": 14,
          "puzzle": "面對垂直落差八十公尺、週期性劇烈振盪的巨大合金游絲，如何利用平底鍋的弧度與簡諧運動共振相位完成千層彈跳脫險？",
          "id": 5,
          "globalId": 5
        },
        {
          "file": "第06章_停擺警報主發條的裂紋.md",
          "title": "第 06 章　停擺警報！主發條的裂紋（第一卷大結局）",
          "enTitle": "Chapter 06 — Halt Alarm! The Mainspring Fracture (Volume 1 Finale)",
          "shortTitle": "主發條的裂紋",
          "concept": "金屬疲勞 × 應力集中效應 × 偏振光等色線檢測 × 止裂孔工藝",
          "wordCount": "6,200 字",
          "readTimeMin": 15,
          "puzzle": "面對主發條外置凸緣微米裂紋引發的提前自毀危機，如何利用正交偏振光定位應力奇點並精準鑽取止裂孔？",
          "id": 6,
          "globalId": 6
        }
      ]
    },
    {
      "id": "book-25",
      "seriesId": "series-10",
      "title": "冒險齒輪：齒輪星核的微縮旅人 2：發條迷宮與黃銅微國",
      "enTitle": "Adventure Gear: Voyagers of the Clockwork Core Vol 2: The Clockwork Labyrinth and the Brass Micro-Kingdom",
      "subtitle": "失落的微型自動偶文明",
      "enSubtitle": "The Lost Civilization of Micro-Automatons",
      "status": "第二卷完結 · 全 6 章大完結",
      "statusColor": "emerald",
      "coverTag": "🎉 第二卷大完結",
      "author": "鹿陽發明小隊",
      "targetAge": "9～15 歲適讀",
      "totalWords": "3.6 萬字",
      "totalChapters": 6,
      "description": "穿過主游絲深淵的微縮旅人抵達中層夾板，赫然發現由數百隻古代自走機械偶繁衍數百年的『發條微國』！然而鐘擺每走一步，錨式擒縱鍘刀便開合一次，自毀倒數僅剩 7 小時！",
      "chapters": [
        {
          "file": "第07章_齒輪背後的微縮聚落.md",
          "title": "第 07 章　齒輪背後的微縮聚落",
          "enTitle": "Chapter 07 — The Micro-Settlement Behind the Gears",
          "shortTitle": "齒輪背後的微縮聚落",
          "concept": "微型自走自動機 × 馮紐曼自我複製架構 × 差速鐘錶傳動系統",
          "wordCount": "5,800 字",
          "readTimeMin": 15,
          "puzzle": "面對由純機械發條驅動、恪守古老鐘錶律法的微型自動偶聚落，如何利用差速行星齒輪與機械語言贏得信任？",
          "id": 7,
          "globalId": 7
        },
        {
          "file": "第08章_紅寶石軸承的通天滑道.md",
          "title": "第 08 章　紅寶石軸承的通天滑道",
          "enTitle": "Chapter 08 — The Skyway of the Ruby Jewel Bearings",
          "shortTitle": "紅寶石軸承的通天滑道",
          "concept": "剛玉晶體超低摩擦 × 彈性流體動力潤滑 × 重力極限俯衝雪橇",
          "wordCount": "5,800 字",
          "readTimeMin": 15,
          "puzzle": "面對坡度七十度、光滑如鏡的人造紅寶石通天滑道，如何利用特氟龍與高黏度合成鐘錶油的流變學特性實現可控極限俯衝？",
          "id": 8,
          "globalId": 8
        },
        {
          "file": "第09章_擒縱輪的生死切換點.md",
          "title": "第 09 章　擒縱輪的生死切換點",
          "enTitle": "Chapter 09 — The Lethal Escapement Switch",
          "shortTitle": "擒縱輪的生死切換點",
          "concept": "錨式擒縱機構 × 單擺等時性週期 × 衝量動量彈射",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "面對每秒開合一次、安全切換空隙僅有八十毫秒的巨型紅寶石錨式擒縱叉，如何借力擒縱輪齒尖衝動完成二十公尺極限穿越？",
          "id": 9,
          "globalId": 9
        },
        {
          "file": "第10章_正午的熱對流風暴與雙金屬天梯.md",
          "title": "第 10 章　正午的熱對流風暴與雙金屬天梯",
          "enTitle": "Chapter 10 — The Midday Convection Storm and the Bimetallic Ladder",
          "shortTitle": "正午的熱對流風暴與雙金屬天梯",
          "concept": "固體熱膨脹與齒側隙抱死 × 鐵木辛柯雙金屬片理論 × 煙囪效應與熱輻射防護",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "面對正午高達六十度的狂暴熱對流煙囪風暴與嚴重下凹變形的雙金屬天梯，如何利用熱膨脹係數差與局部微型低溫冷卻重構平整逃生天梯？",
          "id": 10,
          "globalId": 10
        },
        {
          "file": "第11章_渾天星盤的行星差速共振.md",
          "title": "第 11 章　渾天星盤的行星差速共振",
          "enTitle": "Chapter 11 — The Epicyclic Differential Resonance of the Celestial Orrery",
          "shortTitle": "渾天星盤的行星差速共振",
          "concept": "周轉行星輪系與威利斯公式 × 開普勒偏心齒輪 × 渦電流電磁阻尼",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "面對因偏心誤差引發劇烈非線性軌道共振的失控火星齒輪，如何利用威利斯公式計算最佳介入相位，並以超導磁場結合鋁合金平底鍋構建微觀渦電流煞車？",
          "id": 11,
          "globalId": 11
        },
        {
          "file": "第12章_星核甦醒水銀陀螺的三維密碼.md",
          "title": "第 12 章　星核甦醒！水銀陀螺的三維密碼（第二卷大完結）",
          "enTitle": "Chapter 12 — Awakening the Core: The Three-Dimensional Mercury Gyroscope Cipher",
          "shortTitle": "星核甦醒！水銀陀螺的三維密碼",
          "concept": "三維水銀陀螺儀與角動量定軸性 × 亥姆霍茲共振腔空化 × 中國剩餘定理同餘密碼",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "面對自毀晶格死鎖與三維水銀陀螺進動密碼，如何利用聲學共振破壞應力晶格，並透過角動量守恆與中國剩餘定理完成終極解鎖？",
          "id": 12,
          "globalId": 12
        }
      ]
    },
    {
      "id": "book-26",
      "seriesId": "series-10",
      "title": "冒險齒輪：齒輪星核的微縮旅人 3：天體星核的逆轉破曉",
      "enTitle": "Adventure Gear: Voyagers of the Clockwork Core Vol 3: The Dawn of the Clockwork Celestial Core",
      "subtitle": "渾天星軌與最後三秒逆轉",
      "enSubtitle": "The Celestial Ring and the Three-Second Reversal",
      "status": "🎉 第三卷大完結 · 全 6 章收錄",
      "statusColor": "emerald",
      "coverTag": "🏆 全書 18 章大完結",
      "author": "鹿陽發明小隊",
      "targetAge": "9～15 歲適讀",
      "totalWords": "3.5 萬字",
      "totalChapters": 6,
      "description": "微維度空間力場全面反轉！誠浩、葉旖緁、將江與機械柴犬皮可登上古董天文座鐘最頂層的『天體渾天儀天象盤』。然而，反向傳動引發了微重力失重震盪，懸浮於天球儀中的行星軌道環化作了失控的歐拉陀螺圈！自毀最後倒數進入最後 180 分鐘！",
      "chapters": [
        {
          "file": "第13章_微重力漂浮與歐拉角星軌.md",
          "title": "第 13 章　微重力漂浮與歐拉角星軌",
          "enTitle": "Chapter 13 — Microgravity Levitation and the Euler Angle Orbit Ring",
          "shortTitle": "微重力漂浮與歐拉角星軌",
          "concept": "微重力失重環境 × 賈尼別科夫效應與歐拉中間軸定理 × 動量守恆反衝推進",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "在失去重力的天球儀大殿中，面對因質量偏移每隔 1.2 秒便劇烈自我翻轉 180 度的巨型赤道銅環，如何利用動量守恆反衝與精準切向力矩微擾平抑翻轉？",
          "id": 13,
          "globalId": 13
        },
        {
          "file": "第14章_零重力毛細之河與歐拉多面體星鏡.md",
          "title": "第 14 章　零重力毛細之河與歐拉多面體星鏡",
          "enTitle": "Chapter 14 — The Zero-Gravity Capillary River and the Euler Polyhedral Star Mirror",
          "shortTitle": "零重力毛細之河與歐拉多面體星鏡",
          "concept": "微重力表面張力與邦德數 × 楊-拉普拉斯毛細虹吸 × 馬蘭戈尼效應 × 歐拉多面體公式",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "面對直徑六公尺的懸浮導電液球，如何利用特氟龍疏液排斥、楊-拉普拉斯毛細壓差與正二十面體聚光熱對流驅動微流體注入狹縫？",
          "id": 14,
          "globalId": 14
        },
        {
          "file": "第15章_光壓風暴與法布立培若共振腔.md",
          "title": "第 15 章　光壓風暴與法布立-培若共振腔",
          "enTitle": "Chapter 15 — The Radiation Pressure Tempest and the Fabry-Pérot Resonant Cavity",
          "shortTitle": "光壓風暴與法布立-培若共振腔",
          "concept": "光子輻射光壓動量傳遞 × 法布立-培若光學共振腔干涉 × 逆壓電效應奈米級調諧 × 鋁合金光壓帆推進",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "在星核內部聚焦的高強光壓風暴阻隔下，如何利用單晶石英逆壓電效應奈米調控法布立-培若共振腔腔長，藉相消干涉保護防護盾並以光壓帆推動控制台逆轉星軌？",
          "id": 15,
          "globalId": 15
        },
        {
          "file": "第16章_洛倫茲力場與磁流體發電機.md",
          "title": "第 16 章　洛倫茲力場與磁流體發電機",
          "enTitle": "Chapter 16 — The Lorentz Force Field and the Magnetohydrodynamic Generator",
          "shortTitle": "洛倫茲力場與磁流體發電機",
          "concept": "磁流體發電（MHD） × 洛倫茲力電荷分離 × 哈特曼邊界層與無量綱數 × 特氟龍超疏金屬整流",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "在空間逆轉力場急需一萬五千伏特高壓激發之際，面對氧化卡死的液態金屬管道，如何利用洛倫茲力分離電荷、特氟龍超疏金屬翼片消除微渦旋短路，重新驅動千伏級磁流體發電？",
          "id": 16,
          "globalId": 16
        },
        {
          "file": "第17章_渾天星儀與相對論微時延.md",
          "title": "第 17 章　渾天星儀與相對論微時延",
          "enTitle": "Chapter 17 — The Celestial Armillary and the Relativistic Micro-Time Dilation",
          "shortTitle": "渾天星儀與相對論微時延",
          "concept": "廣義相對論引力時間膨脹 × 史瓦西相對論進動 × 冷次定律電磁渦流阻尼 × 微重力潮汐梯度衝量",
          "wordCount": "6,000 字",
          "readTimeMin": 16,
          "puzzle": "在渾天星儀超引力透鏡引發的三千六百倍時間膨脹與三點五度史瓦西進動偏差下，如何利用微重力潮汐引力差衝擊斷路器，藉由冷次定律渦流阻尼將星軌完全對齊宏觀世界？",
          "id": 17,
          "globalId": 17
        },
        {
          "file": "第18章_千倍逆轉破曉與微觀鐘樓的長鳴.md",
          "title": "第 18 章　千倍逆轉破曉與微觀鐘樓的長鳴（全系列大結局）",
          "enTitle": "Chapter 18 — The Thousandfold Dawn of Reversal and the Eternal Toll of the Clockwork Cosmos (Grand Finale)",
          "shortTitle": "千倍逆轉破曉與微觀鐘樓的長鳴",
          "concept": "平方立方定律千倍復位 × 微尺度量子躍遷 × 宏觀微觀物理常數對齊 × 少年科學精神大結局",
          "wordCount": "4,500 字",
          "readTimeMin": 12,
          "puzzle": "當莫比烏斯光環展開、千倍維度逆轉開啟，微縮旅人們如何經歷生物尺度暴增一千倍、質量復位十億倍的時空躍遷，在晨鐘敲響六點之際凱旋重返宏觀世界？",
          "id": 18,
          "globalId": 18
        }
      ]
    },
    {
      "id": "book-27",
      "seriesId": "series-11",
      "title": "冒險齒輪：馬里亞納的深淵信標 1：幽光之海的下潛者",
      "enTitle": "Adventure Gear: Beacons of the Mariana Abyss Vol 1: Voyagers of the Twilight Sea",
      "subtitle": "鈦金屬信標與千米聲道迷宮",
      "enSubtitle": "The Titanium Beacon and the Thousand-Meter Acoustic Maze",
      "status": "第一卷大完結（全 6 章）",
      "statusColor": "sky",
      "coverTag": "🌊 新書首發",
      "author": "鹿陽發明小隊",
      "targetAge": "9～15 歲適讀",
      "totalWords": 36000,
      "totalChapters": 6,
      "description": "誠浩在保養古董天文座鐘底座時，意外觸發機關彈出一枚被超高壓海水侵蝕的特種鈦鋯合金信標卡盤，座標直指馬里亞納海溝最深處——挑戰者深淵！板塊隱沒帶深處的『深海零號鐘台』差速齒輪即將失控，72小時倒數計時啟動！誠浩、葉旖緁、將江與機械柴犬皮可奔赴關島阿普拉港，向萬米深淵全速啟航！",
      "chapters": [
        {
          "id": 1,
          "file": "第01章_底座裡的鈦金屬信標.md",
          "title": "第 01 章　底座裡的鈦金屬信標",
          "enTitle": "Chapter 01 — The Titanium Beacon in the Plinth",
          "shortTitle": "底座裡的鈦金屬信標",
          "concept": "深海壓強公式 × 鈦鋯合金耐蝕 × 板塊邊界構造應力",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "底座暗格彈出的鈦金屬信標刻著奇異的水壓刻度與海淵座標，如何解讀上面的倒數齒輪？"
        },
        {
          "id": 2,
          "file": "第02章_關島夜港的鸚鵡螺-IV.md",
          "title": "第 02 章　關島夜港的鸚鵡螺-IV",
          "enTitle": "Chapter 02 — Nautilus-IV in the Night Port of Guam",
          "shortTitle": "關島夜港的鸚鵡螺-IV",
          "concept": "鈦合金真球體抗壓 × 固態微球浮力膠 × 錐形壓克力自緊密封",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "鸚鵡螺-IV 號主耐壓球殼的預緊卡圈出現微應力失衡，如何利用水銀偏振條紋與油浴發條扳手完成自緊校準？"
        },
        {
          "id": 3,
          "file": "第03章_穿過暮色帶的光斑.md",
          "title": "第 03 章　穿過暮色帶的光斑",
          "enTitle": "Chapter 03 — Beams Across the Twilight Zone",
          "titleEn": "Chapter 03 — Beams Across the Twilight Zone",
          "shortTitle": "穿過暮色帶的光斑",
          "concept": "光學選擇性吸收 × 溫躍層密度突變 × 阿基米德油囊補償 × 櫛水母相干衍射",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "潛艇穿越溫躍層時因海水密度驟升造成浮力劇烈波動，如何透過阿基米德微補償油囊與差動平衡閥維持中性浮力？",
          "summary": "『深淵巡者號』下潛突破 200 米，正式告別陽光層進入神祕幽暗的暮色帶（中層帶）。光譜儀上紅黃橙光相繼衰減湮滅，舷窗外只剩下冰冷的群青色微光。面對溫躍層帶來的海水密度劇變與浮力波動，雷歐微調阿基米德補償油囊精準維持潛艇姿態。就在這時，舷窗外出現了櫛水母相干衍射的虹彩霓光，與此同時，被動聲納水聽器捕捉到了一串不屬於任何已知鯨類的規律極低頻脈衝信號——那是一串正在向兩千米深海下潛的奇異回音！",
          "summaryEn": "As the Abyss Rover breaks past the 200-meter threshold, it leaves the Sunlit Zone behind and plunges into the mysterious, shadowy Twilight Zone (Mesopelagic). Leo observes the selective absorption of light as red and orange wavelengths fade into total extinction, leaving behind an eerie, chilling ultramarine glow. Navigating through the thermocline and pycnocline where density anomalies cause sudden buoyancy shifts, Leo precisely adjusts the Archimedean variable oil bladders. Just as comb jellies drift past, illuminating the gloom with iridescent diffraction, the hydrophone intercepts a rhythmic, low-frequency acoustic transmission descending toward the two-thousand-meter bathyal abyss.",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第三章：穿過暮色帶的光斑\n\n海水是一種擁有吞噬一切魔力的濃稠介質。\n\n當「鸚鵡螺-IV 號」的雙球殼徹底沒入西太平洋微瀾翻滾的夜色海面時，原本震耳欲聾的起吊馬達聲與浪濤拍擊聲在零點幾秒內被徹底隔絕，世界陷入了一種令人屏息的宏大靜謐。\n\n艙內只有氧氣循環器細微的「嘶嘶」微鳴，以及儀表板散發的溫暖琥珀色幽光。\n\n「當前下潛深度：一百二十公尺，下潛速率每秒一點五米。」\n\n副駕駛席上的杜海嵐雙手搭在壓載配平觸控板上，側臉在儀表光芒的映照下顯得輪廓分明。她頭戴一副輕量化骨傳導耳麥，聲音沉著而流暢：「我們正在穿透最後的『真光層（Photic Zone）』。大家注意觀察舷窗外，光學色彩的大衰減馬上就要開始了。」\n\n三面厚達二十公分的圓錐形特種壓克力觀測窗前，誠浩、葉旖緁與將江不約而同地向前傾過身子。機械柴犬皮可則將兩隻前爪搭在誠浩的膝蓋上，兩隻黑曜石光學感測眼微微閃爍著幽藍色的光暈。\n\n誠浩摘下頭頂的黃銅護目鏡，目光凝視著窗外深黑的海水。\n\n只見在潛艇外部兩具千萬流明金屬鹵素探照燈的照射下，海水原本清澈透明的群青色，正在以肉眼可見的速度發生著奇異的蛻變——\n\n下潛至一百五十公尺時，海水中的一切紅色調徹底蒸發消失了。\n\n原本塗裝在潛艇外置機械爪關節處的鮮艷亮紅色警示漆，此刻竟然退化成了一種毫無生氣的污濁灰黑色！\n\n「哇啊！我的平底鍋手柄保護套！」將江低頭看著自己腰間的平底鍋，驚呼出聲，「我這手柄明明是出發前剛換的亮紅色防燙矽膠，怎麼現在看起來像在爛泥漿裡泡了一個月的死灰斑？！」\n\n「這不是你的矽膠褪色，將江，這是光在流體介質中的**『選擇性吸收衰減（Selective Absorption of Light）』**！」\n\n葉旖緁推了推鼻樑上的金屬細框眼鏡，指著身旁顯示幕上的光譜分析折線圖解釋道：\n\n「可見光中，紅光的波長最長（約 650～700 奈米），光子能量最低。當光線射入高密度水分子團時，紅光波段的光子會在前十到二十公尺內被水分子強烈的氫氧鍵振動共振完全吸收轉化為熱能！緊接著被吸收的是橙光和黃光。只有波長最短、能量最高的藍綠光（400～480 奈米），才能穿透數百公尺的海水！換句話說，在深海裡，大自然早已剝奪了『紅色』的存在資格！」\n\n「這正是深海生物進化的絕妙生存法則！」杜海嵐笑著接過話頭，抬起左手輕輕敲了敲她的生物螢光手環，「許多深海蝦、深海魷魚全身都呈現出極其鮮豔的猩紅色。在陸地上看起來無比扎眼，但在沒有一絲紅光穿透的深海裡，紅色對應的反射率等於零——它們在捕食者眼裡，就是絕對隱形的深黑幻影！」\n\n就在眾人驚嘆之際，駕駛艙主螢幕上的深度指針無聲無息地滑過了一道鮮紅的刻度線：\n\n```\n======================================================\n【當前深度：205 METERS】（突破透光帶臨界線！）\n【環境光照度：0.01 LUX】（太陽光透射率不足 0.1%）\n【正式進入：暮色帶（MESOPELAGIC / TWILIGHT ZONE）】\n======================================================\n```\n\n舷窗外的海水瞬間墜入了一種濃郁到極致的暗紫幽黑。\n\n那是光與暗交界處的黃昏之境，連最強烈的赤道陽光抵達此處也只剩下若有若無的幽藍殘痕。沒有海藻，沒有珊瑚礁，只有無邊無際、冰冷廣袤的深洋荒原。\n\n「關閉外部金屬鹵素大燈。」杜海嵐果斷按下了照明總閘。\n\n「啪！」\n\n刺目的雪白光柱驟然熄滅。\n\n起初，眼前是一片吞噬靈魂的純黑。然而僅僅過了三秒，當少年們的瞳孔逐漸適應了黑暗時，舷窗外的黑水之中，竟然驟然綻放出了宛如銀河星旋般的奇蹟景象！\n\n無數如夢似幻的微小星塵在舷窗外緩緩漂浮、旋轉。\n\n那是一群身長只有幾公分的**「櫛水母（Comb Jellies / Ctenophora）」**！\n\n它們擁有完全晶瑩剔透、近乎透明的鐘狀水母體，體表縱向排列著八排極其精巧的微米級「纖毛梳板（Ciliated Comb Rows）」。當這些纖毛以每秒數十次的高頻節奏波動推進時，微弱的光線穿過纖毛表面的微觀光柵結構，竟然將深海的幽藍殘光衍射分解成了流光溢彩、沿著水母體飛速奔湧的霓虹彩虹！\n\n紅、橙、黃、綠、青、藍、紫！一道道微型極光在透明的膠質身軀上瘋狂奔流，宛如深海中漫天飛舞的微型煙火！\n\n「天啊……太美了……」葉旖緁屏住了呼吸，金屬眼鏡倒映著漫天彩虹星屑，「它們在發光嗎？」\n\n「不，這不是生物發光，這是純粹的物理奇蹟——**『纖毛週期光柵的相干結構色衍射（Structural Color Diffraction）』**！」\n\n杜海嵐凝視著那些游過窗前的水母，眼中閃爍著對海洋的無盡熱愛：\n\n「櫛水母本身並不發光，但它們纖毛板上的微觀幾何間隙正好與可見光波長相當。當海水擾動帶動纖毛高速拍打時，不同波長的光線在微納米光柵上發生相長干涉，形成了我們看到的彩虹跑馬燈！但是……看它們的腹部！」\n\n杜海嵐伸手在手環上一滑，手環射出一道柔和的四百七十奈米深藍相干激發光。\n\n「嗡——！」\n\n受到特定波長激發的瞬間，那群原本安詳漂流的櫛水母體內，突然爆發出耀眼奪目的青藍色冷光！\n\n一道道如神經元傳導般的藍色光波在整個水母群中迅速傳遞，將周圍數十公尺的黑水照亮成了一座光怪陸離的深海水晶宮殿！\n\n「這才是真正的**『生物冷發光（Bioluminescence）』**！」海嵐輕聲說道，「螢光素（Luciferin）在螢光素酶（Luciferase）的催化下與氧氣發生極低熱耗的化學反應，將化學能以超過百分之九十五的驚人效率轉化為冷光。暮色帶百分之九十的生物，都在用這種光芒進行交配、恐嚇天敵，或者……偽裝自己！」\n\n「偽裝？」將江湊著大腦袋，一臉狐疑，「把自己弄得像燈泡一樣亮，難道不是在對底下的鯊魚喊『我在這，快來吃我』嗎？」\n\n「恰恰相反！」杜海嵐笑了起來，「這叫**『逆向發光破壞輪廓（Counter-illumination）』**！暮色帶的許多燈籠魚和烏賊，發光器官都長在腹部。當下方的掠食者抬頭往上看時，獵物的剪影原本會擋住上方透過來的微弱微光；但如果獵物的腹部發出與上方海水亮度完全一致的幽藍光，掠食者看過去就只會看到一片均勻的海水，剪影被徹底抹除，直接達成深海光學隱形！」\n\n少年們聽得如癡如醉。大自然的造化與物理光學法則在深海之中達成了如此精密的統一，每一種生命的演化都是對極限環境最深邃的致敬！\n\n然而——\n\n就在這片寧靜的深海夢境之中，鸚鵡螺-IV 號的艇身突然猛烈地一震！\n\n「咚————！！」\n\n一聲低沉無比的悶響從主浮力材料艙傳來！\n\n緊接著，原本平穩維持在每秒一點五米的下潛速率表指針，驟然間開始以肉眼可見的恐怖速度向上瘋狂拉升——\n\n每秒兩米……每秒三點二米……每秒四點五米！\n\n「警告！下潛速率超過安全限制！」\n\n駕駛台兩側的警報蜂鳴器驟然長鳴，紅色的緊急字樣在主螢幕上瘋狂閃爍！\n\n```\n======================================================\n【CRITICAL ALERT: RAPID UNCONTROLLED SINKING】\n【DEPTH: 380 METERS → 420 METERS】(FALL RATE: 4.8 m/s!)\n【THERMOCLINE TRANSITION DETECTED】\nTEMPERATURE GRADIENT: 24.5°C → 6.2°C (ΔT = -18.3°C!)\nSALINITY DIVERGENCE: 34.2‰ → 35.8‰\nSEAWATER DENSITY: 1024.1 kg/m³ → 1027.8 kg/m³\nNET BUOYANCY: NEGATIVE 4800 NEWTONS!\n======================================================\n```\n\n「怎麼回事？！潛艇失重了？！」將江整個人被安全帶死死按在座椅上，兩隻手緊緊抓住平底鍋的手柄，臉色瞬間發白。\n\n「我們撞上了西太平洋最凶險的隱形懸崖——**『強溫躍層與密度躍層（Main Thermocline & Pycnocline）』**！」\n\n杜海嵐雙手死死扣住副駕駛應急洩載手柄，語速快得像連珠炮：\n\n「在深度三百到四百米之間，海水溫度在短短數十米內從二十多度驟降到六度以下！極端的低溫加上高鹽度水團交匯，導致外部海水的密度在幾秒鐘內飆升了近千分之四！而我們潛艇外殼上的微球浮力材料雖然抗壓，但在突然遭遇極端冷水收縮時，整體排水體積出現了微米級的收縮變化！根據阿基米德浮力定律，**正浮力瞬間暴跌，整艘潛艇變成了負重沉石**！」\n\n「下潛速率已經突破每秒五米！前方五百米處有海底死火山口突起的玄武岩海山！」誠浩死死盯著前方前方側掃聲納圖，額頭青筋暴起。\n\n聲納圖上，一座嶙峋尖銳的海底黑崖正以驚人的速度迎面撞來！若以每秒五米的速度硬砸在玄武岩上，哪怕是九十毫米厚的鈦合金球艙，也會在巨大的動能衝擊下被撕裂外掛推進器！\n\n「手動拋載鉛塊！立刻拋掉兩組五十公斤的應急壓載！」海嵐一把抓向電磁拋載開關。\n\n「等等！海嵐，不能隨便拋鉛！」\n\n千鈞一髮之際，學霸班長葉旖緁的清冽斷喝驟然在艙內炸響！\n\n女孩手中的高靈敏電子筆在平板電腦上飛速劃過，一道複雜的常微分方程曲線在零點一秒內完成閉合計算：\n\n「如果現在拋掉一百公斤固體壓載，穿過四百五十米處的低溫鹽度極限層後，海水密度會進一步升高到一千零二十八公斤每立方米！到那時，多餘的正浮力會引發**『失控正浮力上沖（Uncontrolled Rapid Ascent）』**！潛艇會像被彈弓射出的石子一樣以極限速度反彈撞回海面，劇烈的減壓與剪切湧浪會直接震斷我們的生命維持管路！」\n\n「那現在怎麼辦？！距離撞山只剩最後三十秒了！」將江急得大喊。\n\n「不要盲目拋載！精準微配平！」\n\n葉旖緁推了推眼鏡，眼中閃爍著冷靜到極致的智慧之光：\n\n「海嵐！誠浩！看計算結果——我們只需要抵消剛好多出來的**三百六十八點五牛頓**負浮力！相當於在深潛艇主配平油箱內，將三十七點六升的高密度補償矽油，以十六兆帕的壓力注入艇艏柔性均壓囊，擴張艇艏排水體積千分之零點三！利用**微流體幾何膨脹**抵消密度躍層的浮力虧損！」\n\n「三十七點六升矽油……這需要零點一秒級的毫升調度！」海嵐的手指懸在電磁閥開關上，額角的汗水滴落在儀表上。\n\n「皮可！阿基米德浮力微算盤，對齊調度！」誠浩猛然推動主推進桿，大喝出聲。\n\n「汪！」\n\n機械柴犬皮可雙眼紅光暴漲！它胸腔內部的微型超導晶片全速運轉，與葉旖緁的平板電腦完成無線超聲偶合！\n\n只見皮可張開合金小嘴，一根只有髮絲粗細的超精密光纖感測探針電射而出，精準插進了駕駛台正中央的備用高壓配平微調閥孔內！\n\n「嘀——！目標配平補償量：三十七點六二升！注油泵高頻脈衝激發——三、二、一，啟動！」\n\n「滋————！！」\n\n伴隨著一陣極其微弱但堅定無比的液壓伺服高頻嗡鳴，艇艏下方的柔性鈦纖維均壓囊瞬間充盈隆起！\n\n那一瞬間，物理學的神蹟在幽冥深海中轟然顯現！\n\n原本直墜深淵的沉重潛艇，其下墜趨勢如同被一隻溫柔而宏大的巨手輕輕托住一般，劇烈顫動的艇身開始平緩減速——\n\n每秒五米……每秒三米……每秒一米……\n\n在距離那座冰冷猙獰的海底玄武岩懸崖僅僅剩餘二十五公尺的致命邊緣，鸚鵡螺-IV 號在激盪翻滾的深海渦流中，不可思議地完全剎住了垂直下墜，穩穩地懸停在了四百二十公尺深處的低溫海水層中！\n\n「呼——————！！」\n\n艙內四個人同時長長舒了一口氣，將江更是癱軟在座椅上，大口大口地喘著粗氣，手心裡滿是冷汗：「停……停住了！我的媽呀，剛才那塊石頭尖銳得差點透過窗戶戳中我的鼻子！」\n\n「浮力完全配平，淨浮力：正負零牛頓！懸停姿態完美！」葉旖緁看著平板上的數據，嘴角終於綻放出一抹疲憊卻無比自豪的微笑。\n\n「太不可思議了……」杜海嵐望著葉旖緁，那雙清澈的大眼睛裡充滿了由衷的敬佩，「以往我們科考隊遇到溫躍層 density jump，至少要慌亂拋載好幾次才能穩住，你們居然用一個方程和三十幾升油，就在懸崖邊把八噸重的潛艇定在了毫米級的位置上！」\n\n「這就是科學與數學的力量，也是我們團隊的默契。」誠浩擦了擦額頭的冷汗，轉頭看向身邊的夥伴們。\n\n此時此刻，舷窗外那片原本狂暴紊亂的微光海水，再次恢復了寧靜。\n\n在潛艇探照燈重新切換為百分之二十微光巡航模式的柔和光暈下，一群被剛才的避險擾動吸引而來的深海異形生物，正悄然游弋在鸚鵡螺-IV 號的周圍。\n\n那是一隻巨大的深海**「幽靈蛸（Vampyroteuthis infernalis / 幽靈幽靈烏賊）」**！\n\n它通體閃爍著宛如紅寶石般的幽暗光澤，八條腕足之間由寬大的黑色肉膜緊緊相連，宛如披著一件高貴而神祕的黑色斗篷。在它的鰭狀肢末端，兩枚巨大的發光器如藍色車燈般緩緩閃爍，與皮可胸前項圈上的藍光交相輝映。\n\n它靜靜地懸停在中央觀測窗前，那對宛如深海藍寶石般清澈巨大的眼睛，平靜地注視著艙內的少年們，彷彿在默默為這群勇敢的人類造訪者致敬。\n\n信標卡盤上的倒數計時無聲地跳動著：\n\n```\n======================================================\n【自鎖倒數即時剩餘】：\n【 62 小時 18 分 09 秒 】\n【當前深度：650 METERS】\n【海水壓強：65.0 BAR ｜ 艇體溫度：4.1°C】\n======================================================\n```\n\n「我們已經徹底越過了暮色帶的上層天塹。」誠浩握緊了雙軸推進手柄，目光穿透深海幽冥，望向那更加深邃、更加冰冷的千米深淵，「下方，就是大洋深處最神祕的『SOFAR 聲學通道』了。爺爺的深海信標……正在那裡等待著我們！」\n\n「鸚鵡螺-IV 號，全系統狀態最佳。」杜海嵐推動下潛微調閥，嘴角揚起自信的笑容，「向著深海一千米，全速啟航！」\n\n在幽靈蛸優雅的深藍光芒護送下，金屬潛艇再次平穩啟動，如同一葉滿載智慧與勇氣的金色扁舟，破開深邃的大洋暮色，毅然向著千米之下的聲學迷宮破浪下潛！\n\n---\n\n### 🔬【冒險小筆記 · STEM 科學解密】\n\n* **奇幻謎面**：潛艇剛進入暮色帶，為什麼紅色物體全都變成了污濁的灰色？為什麼遭遇突發低溫鹽度層時，八噸重的潛艇會像石頭一樣突然暴跌狂墜，而學霸班長卻嚴禁拋棄沉重的鉛塊配重？\n* **核心科學定律與硬核知識**：\n  1. **海水光學吸收與紅光波段衰減（Selective Absorption of Light Spectrum）**：\n     * 可見光波長範圍約為 $380 \\sim 750 \\text{ nm}$。在純淨水分子團中，光的衰減遵循比爾-朗伯定律（Beer-Lambert Law）：\n       $$I(z) = I_0 \\cdot e^{-\\alpha(\\lambda) z}$$\n       其中吸收係數 $\\alpha$ 強烈依賴於光的波長 $\\lambda$。\n     * 紅光（$650 \\sim 700 \\text{ nm}$）的光子能量與水分子中 $\\text{O-H}$ 鍵的伸縮與彎曲振動泛頻相吻合，在表層 $10 \\sim 20 \\text{ m}$ 內便被完全吸收殆盡轉化為熱能；而藍綠光（$450 \\sim 490 \\text{ nm}$）的吸收係數最小，可穿透至數百米深處。因此在暮色帶，任何不自發光的紅色物體由於環境中缺乏可反射的紅光波段，外觀均呈現為完全無反射的死黑色或暗灰色。\n  2. **海洋主溫躍層（Thermocline）與海水狀態方程（TEOS-10）**：\n     * 海水密度 $\\rho$ 是溫度 $T$、實用鹽度 $S$ 和壓力 $P$ 的非線性多元函數：$\\rho = f(S, T, P)$。\n     * 在深海 $200 \\sim 800 \\text{ m}$ 的「主溫躍層」，水溫可在極短垂直距離內劇烈驟降（如由 $25^\\circ\\text{C}$ 跌至 $5^\\circ\\text{C}$）。由於冷水分子熱運動減弱、分子間隙縮小，導致海水密度 $\\rho_{\\text{water}}$ 產生台階式的突變跳躍（Density Step）。\n     * 潛艇受到的浮力大小由阿基米德定律決定：$F_{\\text{buoyancy}} = \\rho_{\\text{water}} \\cdot g \\cdot V_{\\text{sub}}$。當潛艇結構材料的體積熱縮率大於海水溫差壓縮率時，潛艇瞬時浮力將大幅縮水，形成「深海斷崖式下墜（Negative Buoyancy Drop）」。\n  3. **微變量配平控制與非線性上衝抑制**：\n     * 盲目拋棄大質量固定壓載（如拋鉛）雖然能在短期內強行剎車，但會破壞潛艇全深度剖面的靜態配平設計。一旦潛艇進入更深處的高密度冷水團，過剩的固定浮力（$\\Delta F > 0$）會引發不可逆的極速反向衝頂（Uncontrolled Rapid Ascent），在數百米水深內引發巨大的剪切壓差形變。\n     * 因此現代大深度作業潛艇普遍配備「可變壓載與補償油囊系統（Variable Ballast & Bladder System）」，藉由向外部耐壓柔性囊排注特定微升（mL）級別的不可壓縮矽油，微調潛艇的外排水體積 $V_{\\text{sub}}$，實現毫克/牛頓級的懸停配平。\n  4. **相干結構色（Structural Coloration）與生物發光（Bioluminescence）的本質區別**：\n     * **結構色**：櫛水母運動時的彩虹光帶並非化學發光，而是其體表微米級纖毛梳板排列成週期性光柵（Diffraction Grating），環境微弱光經由多重微觀物理干涉與衍射色散形成的物理現象。\n     * **生物冷發光**：則是生物體內的螢光素（Luciferin）在螢光素酶（Luciferase）的生化催化下與氧氣結合產生的化學放光，反應的量子產率高達 $88\\% \\sim 95\\%$，熱耗散極低，是深海生命進行信息交互與隱蔽防禦（如腹部逆光隱形）的核心演化特徵。\n",
          "contentEn": "# Adventure Gear: Beacons of the Mariana Abyss\n\n## Chapter 3: Beams Across the Twilight Zone\n\nSeawater is a dense, devouring medium possessing the terrifying power to swallow everything whole.\n\nWhen the dual spherical hull of the *Nautilus-IV* submerged entirely beneath the gentle, dark swells of the Western Pacific, the deafening industrial din of the diesel cranes and crashing surf was snuffed out within fractions of a second. The universe collapsed into an awe-inspiring, breathless stillness.\n\nInside the titanium sphere, only the faint, steady hiss of the closed-loop oxygen scrubber and the warm amber glow of the flight displays broke the silence.\n\n\"Current depth: one hundred twenty meters. Descent velocity steady at 1.5 meters per second.\"\n\nSeated in the co-pilot's chair, Du Hailan rested her gloved fingers on the digital ballast trim console, her sharp features limned in amber light. Wearing a lightweight bone-conduction headset, her voice remained measured and unflinching: \"We are passing through the final margins of the photic zone. Keep your eyes on the forward viewports—the great spectral die-off is about to begin.\"\n\nBefore the three conical viewports of twenty-centimeter-thick optical acrylic, Cheng Hao, Ye Yijie, and Jiang Jiang leaned forward in unison. Pico the mechanical Shiba Inu rested his front paws on Cheng Hao's knees, his obsidian optical sensors pulsing with a soft, inquisitive indigo radiance.\n\nCheng Hao pushed his brass aviator goggles up onto his forehead, his gaze locked upon the black water beyond the pane.\n\nBathed in the brilliant beams of the submersible's twin multi-million-lumen metal-halide searchlights, the water's crisp, transparent ultramarine hue was undergoing a startling metamorphosis before their very eyes—\n\nAs they crossed the 150-meter mark, every trace of red vanished entirely from the world.\n\nThe bright crimson hazard paint applied to the mechanical manipulator arm joints on the hull exterior had degraded into a lifeless, muddied slate-gray!\n\n\"Whoa! Look at my frying pan's grip!\" Jiang Jiang yelled, lifting the black skillet at his hip. \"I literally just replaced this handle sleeve with fire-engine red heatproof silicone before we left Guam! Why does it look like it sat at the bottom of a muddy ditch for six months?!\"\n\n\"Your silicone hasn't faded, Jiang Jiang. You are witnessing the **Selective Absorption of Light Spectrum in Fluid Media**!\"\n\nYe Yijie adjusted her wire-rimmed glasses, gesturing toward the real-time optical spectrogram scrolling across her console:\n\n\"In the visible spectrum, red light possesses the longest wavelengths—roughly 650 to 700 nanometers—and the lowest photon energy. When photons enter dense matrices of water molecules, the red wavelengths are completely absorbed within the first ten to twenty meters through resonance with the vibrational overtones of the water molecules' O-H bonds, converting directly into thermal energy! Orange and yellow follow in rapid succession. Only the shortest, most energetic blue and green wavelengths (400 to 480 nanometers) have the punch to penetrate hundreds of meters of water! In other words, in the deep ocean, nature has revoked the right of the color red to exist!\"\n\n\"And that very physical law is one of the greatest survival adaptations in marine evolution!\" Du Hailan smiled, tapping her glowing wristband. \"Many deep-sea shrimp, crabs, and squids are pigmented a blazing, scarlet red. On land, they would stick out like flares. But down here, where not a single stray photon of red light exists, their reflectance is absolute zero—to abyssal predators, they are invisible phantoms of pure black!\"\n\nWhile they marveled, the depth gauge on the main navigation panel glided silently past a bold, crimson warning index:\n\n```\n======================================================\n[CURRENT DEPTH: 205 METERS] (PHOTIC ZONE BOUNDARY BREACHED!)\n[AMBIENT LIGHT LEVEL: 0.01 LUX] (SURFACE TRANSMITTANCE < 0.1%)\n[ENTERING: THE TWILIGHT ZONE (MESOPELAGIC REALM)]\n======================================================\n```\n\nBeyond the viewports, the ocean plummeted into a suffocating, velvety midnight-indigo.\n\nThis was the twilight borderland between day and night, where even the fiercest equatorial noon was reduced to a ghost of faint, drifting blue. No seaweed. No coral reefs. Only an infinite, icy desert of liquid shadow.\n\n\"Dousing external halogen arrays,\" Du Hailan announced, toggling the master lighting breaker.\n\n*CLICK!*\n\nThe blinding white lances of light collapsed into total darkness.\n\nAt first, there was only the soul-crushing black of the void. Yet within three seconds, as their retinas dialed into the dark, a spectacle resembling swirling galactic nebulae erupted beyond the acrylic!\n\nMyriads of luminous, crystalline stars drifted and spiraled past the hull.\n\nThey were a bloom of **Comb Jellies (Ctenophora)**, barely a few inches in length!\n\nTheir bodies were sculpted from flawless, transparent jelly, along which ran eight longitudinal bands of microscopic **Ciliated Comb Rows**. As these cilia beat in rapid, synchronized waves at dozens of strokes per second, the ambient deep-blue light struck their micro-optical gratings, diffracting into blazing, kaleidoscopic rainbows that raced along the creature's contours!\n\nRed, orange, yellow, green, cyan, blue, violet! Miniature auroras coursed across their transparent flesh like tiny fireworks drifting through an alien cosmos!\n\n\"Merciful heavens... it's breathtaking...\" Ye Yijie whispered, her spectacles reflecting constellations of drifting prismatic dust. \"Are they bioluminescent?\"\n\n\"No, this is no chemical luminescence—this is a triumph of pure wave optics: **Structural Color Diffraction from Coherent Periodic Ciliary Gratings**!\"\n\nDu Hailan watched the jellies glide past the port, her eyes shining with reverent love for the abyss:\n\n\"Comb jellies don't emit light on their own. But the spacing between the microscopic cilia on their comb plates matches the wavelengths of visible light. When the cilia beat against the water, light waves undergo constructive and destructive interference across the micro-gratings, generating the shifting rainbow bands you see! But look... watch their cores!\"\n\nHailan tapped her wristband, projecting a soft beam of 470-nanometer deep-blue coherent excitation light through the acrylic.\n\n*WHUUUMM—!*\n\nThe instant the excitation beam swept across the jellies, their inner tissues erupted with a brilliant, supernatural flash of icy cyan-green luminescence!\n\nLuminous waves cascaded through the bloom like neural impulses, illuminating dozens of meters of surrounding blackness into an ethereal crystal cathedral!\n\n\"Now *that* is genuine **Bioluminescence**!\" Hailan murmured softly. \"Luciferin catalyzed by the enzyme luciferase reacting with oxygen at near-zero thermal loss, converting chemical energy directly into cold light with over ninety-five percent quantum efficiency. Ninety percent of all creatures in the twilight zone communicate, frighten predators, or... disguise themselves with this cold fire!\"\n\n\"Disguise themselves?!\" Jiang Jiang leaned in, his round face filled with skepticism. \"Lighting yourself up like a neon billboard in the dark—isn't that just shouting to every shark within ten miles: 'Here I am, come take a bite'?!\"\n\n\"Quite the contrary!\" Hailan laughed. \"It's called **Counter-illumination Camouflage**! Many lanternfish and midwater squids have photophores lining their bellies. When a predator prowling beneath looks upward, the silhouette of prey would normally block the faint downwelling light from the surface. But if the prey matches its ventral bioluminescence precisely to the color and intensity of the downwelling sea, the predator sees only unbroken ocean—the silhouette is completely erased, rendering them optically invisible!\"\n\nThe young adventurers listened in stunned wonder. Nature's biological designs and the laws of physical optics merged in the deep sea with breathtaking elegance—every organism was an unyielding tribute to survival in an extreme universe!\n\nSuddenly—\n\nWithout warning, the entire hull of the *Nautilus-IV* shuddered violently!\n\n*THUUUUMM————!!*\n\nA dull, shuddering groan resonated from the primary syntactic foam buoyancy bays!\n\nSimultaneously, the descent rate needle, which had been locked comfortably at 1.5 meters per second, began racing upward with terrifying velocity—\n\nTwo meters per second... 3.2 meters per second... 4.8 meters per second!\n\n\"Warning! Descent velocity exceeding critical envelope!\"\n\nEmergency audio klaxons screamed across the cockpit, crimson diagnostics flashing across every screen in rapid succession!\n\n```\n======================================================\n[CRITICAL ALERT: RAPID UNCONTROLLED SINKING]\n[DEPTH: 380 METERS → 420 METERS] (FALL RATE: 4.8 m/s!)\n[THERMOCLINE TRANSITION DETECTED]\nTEMPERATURE GRADIENT: 24.5°C → 6.2°C (ΔT = -18.3°C!)\nSALINITY DIVERGENCE: 34.2‰ → 35.8‰\nSEAWATER DENSITY: 1024.1 kg/m³ → 1027.8 kg/m³\nNET BUOYANCY: NEGATIVE 4800 NEWTONS!\n======================================================\n```\n\n\"What's happening?! Did we lose our buoyancy?!\" Jiang Jiang was pinned hard into his crash seat by his harness, clutching his frying pan as his face drained of color.\n\n\"We just slammed into the Western Pacific's most treacherous invisible cliff—the **Main Thermocline and Pycnocline Density Barrier**!\"\n\nDu Hailan gripped the emergency ballast release lever with white knuckles, her words firing like rapid-fire bursts:\n\n\"Between three hundred and four hundred meters, water temperature drops off a cliff from over twenty-four degrees to under six! That savage drop in temperature paired with a high-salinity water mass causes the surrounding seawater density to spike by nearly four parts per thousand in mere seconds! While our syntactic foam hull is crush-proof, thermal contraction from the freezing water induces microscopic volumetric shrinkage across the outer envelope! By Archimedes' principle, **our net positive buoyancy just evaporated—we've turned into an eight-ton lead sinker!**\"\n\n\"Descent rate five meters per second! Five hundred meters ahead, sonar picks up a basalt seamount rising from an extinct underwater caldera!\" Cheng Hao stared at the forward obstacle-avoidance sonar array, veins pulsing at his temples.\n\nOn the screen, a jagged, knife-like basalt ridge was rushing up from the black void! If an eight-ton titanium hull struck that rock at five meters per second, the kinetic impact would shear away their magnetic thrusters and crush their life-support manifolds!\n\n\"Emergency ballast jettison! Blow two fifty-kilo lead drop-weights right now!\" Hailan reached for the electromagnetic drop switches.\n\n\"HOLD ON! Hailan, don't drop the lead!\"\n\nIn the heart of the crisis, Ye Yijie's crystalline, razor-sharp voice rang through the cabin like a struck bell!\n\nThe class monitor's stylus flew across her tablet screen, a complex system of non-linear differential equations solving across the display in a tenth of a second:\n\n\"If you dump a hundred kilograms of deadweight right now, the moment we break through the halocline at 450 meters, the water density jumps to 1,028 kilograms per cubic meter! That excess positive buoyancy will trigger an **Uncontrolled Rapid Ascent**! The submersible will slingshot toward the surface like a stone from a catapult, and the explosive decompression combined with shear waves will snap our titanium life-support lines like twigs!\"\n\n\"Then what do we do?! We have twenty-five seconds before we smash into that ridge!\" Jiang Jiang shouted in terror.\n\n\"Don't drop deadweight—execute precise micro-trimming!\"\n\nYe Yijie pushed her glasses up, her gaze alight with unyielding scientific focus:\n\n\"Hailan! Cheng Hao! Look at the solution—we only need to neutralize an exact excess negative buoyancy of **368.5 Newtons**! That equates to injecting 37.6 liters of high-density silicone compensation oil under sixteen megapascals of pressure into the bow flexible equalization bladder! We use **Micro-fluidic Volumetric Expansion** to cancel out the buoyancy deficit caused by the pycnocline step!\"\n\n\"Thirty-seven-point-six liters... that requires milliliter-grade timing within fractions of a second!\" Hailan's hand hovered over the trim panel, cold sweat dripping from her jaw.\n\n\"Pico! Archimedes buoyancy algorithm—synchronize pump telemetry!\" Cheng Hao slammed the master control yoke forward, roaring the command.\n\n\"WOOF!\"\n\nPico's optical sensors flared blazing crimson! His internal superconducting processor dialed into maximum overdrive, pairing wirelessly with Ye Yijie's tablet via high-frequency ultrasonic telemetry!\n\nThe mechanical Shiba Inu opened his alloy jaws, and a fiber-optic sensor needle as fine as a strand of silk shot forward, locking dead-center into the auxiliary micro-trim solenoid port!\n\n\"Beep! Target compensation: 37.62 liters! Commencing high-frequency hydraulic pulse sequence—three, two, one, ENGAGE!\"\n\n*ZZZZZZZZZZT————!!*\n\nWith an ultra-fine, silky hydraulic whine from the servo pump, the flexible titanium-fiber bladder beneath the bow expanded with hydraulic authority!\n\nIn that breath, the physical laws of hydrodynamics answered the call of the young explorers!\n\nThe plummeting eight-ton submersible felt as though it had been cradled in mid-fall by an invisible, gentle hand of iron. The violent downward plunge began to decelerate smoothly—\n\nFive meters per second... three meters... one meter per second...\n\nJust twenty-five meters shy of the razor-sharp basalt precipice, the *Nautilus-IV* arrested her vertical fall completely, settling into a dead, motionless hover within the freezing water at 420 meters!\n\n\"PHEWWWWWWWW————!!\"\n\nAll four teenagers exhaled in collective relief. Jiang Jiang collapsed back into his seat, panting heavily as cold sweat soaked his palms: \"It... it stopped! Sweet mercy! That jagged rock was close enough to poke me right through the acrylic!\"\n\n\"Trim equilibrium achieved. Net buoyancy: absolute zero Newtons! Neutral hover confirmed!\" Ye Yijie stared at her screen, a triumphant, exhausted smile blooming across her face.\n\n\"Unbelievable...\" Du Hailan turned to Ye Yijie, her dark eyes filled with genuine reverence. \"Whenever our research vessel's deep teams hit a pycnocline step, they drop weights in a panic and abort the dive. You just held an eight-ton boat in suspension twenty-five meters from a cliff face using an equation and thirty-odd liters of oil!\"\n\n\"That is the power of science and mathematics—and the trust of a united crew,\" Cheng Hao smiled, wiping his brow as he looked around at his friends.\n\nBeyond the viewports, the turbulent eddies stirred up by their descent had subsided into peaceful stillness.\n\nWith the searchlights dialed back to a gentle twenty-percent cruising beam, an alien creature drawn by their arrival drifted out from the shadows of the void.\n\nIt was a colossal **Vampire Squid (*Vampyroteuthis infernalis*)**!\n\nIts gelatinous mantle shimmered with a deep, velvety ruby-black luster, its eight arms joined by broad webbing like a royal velvet cape. At the tips of its paddle-like fins, two large bioluminescent organs glowed with a deep, pulsating sapphire luminescence that mirrored the indicator light on Pico's collar.\n\nThe creature drifted peacefully before the center viewport, its vast, jewel-like blue eyes gazing through the acrylic at the human teenagers, as though offering a silent salute to these daring voyagers of the abyss.\n\nOn the console, the abyssal beacon clicked faithfully:\n\n```\n======================================================\n[ABYSSAL COUNTDOWN TELEMETRY]:\n[ 62 HOURS : 18 MINUTES : 09 SECONDS ]\n[CURRENT DEPTH: 650 METERS]\n[HYDROSTATIC PRESSURE: 65.0 BAR | AMBIENT TEMP: 4.1°C]\n======================================================\n```\n\n\"We have broken through the upper barrier of the twilight zone,\" Cheng Hao said, his hands steady upon the flight yoke, his eyes piercing the deep. \"Below us lies the most mysterious acoustic maze in the ocean—the SOFAR Channel. Grandpa's beacon... is down there waiting for us!\"\n\n\"Nautilus-IV: all systems nominal,\" Du Hailan adjusted the dive angle, a radiant smile on her sun-kissed face. \"Destination: one thousand meters down—full speed ahead!\"\n\nEscorted by the sapphire bioluminescence of the vampire squid, the golden metal submersible surged smoothly forward once more, parting the liquid midnight of the deep sea and charting her course straight into the heart of the abyssal acoustic labyrinth!\n\n---\n\n### 🔬 [Adventure Field Notes · STEM Science Decoded]\n\n* **The Scientific Mystery**: Upon descending into the twilight zone, why do all bright red objects turn to dirty gray or jet-black? Why did an eight-ton submersible suddenly plummet like a stone when encountering cold water, and why was emergency ballast jettison forbidden?\n* **Core Physical Laws & Technical Pillars**:\n  1. **Selective Absorption of Light Spectrum (海水光學吸收與波段衰減)**:\n     * Light attenuation in water follows the Beer-Lambert Law:\n       $$I(z) = I_0 \\cdot e^{-\\alpha(\\lambda) z}$$\n       where the absorption coefficient $\\alpha$ is heavily wavelength-dependent.\n     * Red light ($650 \\sim 700\\text{ nm}$) resonates with the vibrational overtones of water's $\\text{O-H}$ bonds, extinguishing entirely within $10 \\sim 20\\text{ meters}$. Blue-green light ($450 \\sim 490\\text{ nm}$) exhibits the lowest absorption coefficient, penetrating deep into the mesopelagic zone. In the twilight realm, red objects appear dead gray or pitch-black because zero ambient red photons exist to reflect into an observer's eye.\n  2. **Main Thermocline and Thermodynamic Seawater Equation (TEOS-10)**:\n     * Seawater density $\\rho$ is a nonlinear function of salinity $S$, temperature $T$, and pressure $P$: $\\rho = f(S, T, P)$.\n     * Across the **Main Thermocline** ($200 \\sim 800\\text{ m}$), temperature drops violently (from $25^\\circ\\text{C}$ to under $5^\\circ\\text{C}$). Reduced molecular agitation causes fluid density to jump discontinuously.\n     * Buoyancy is governed by Archimedes' principle: $F_{\\text{buoyancy}} = \\rho_{\\text{water}} \\cdot g \\cdot V_{\\text{sub}}$. When thermal contraction shrinks the submersible's external volume faster than the density increase can compensate, the vessel enters a catastrophic negative buoyancy drop.\n  3. **Micro-Trim Bladders vs. Uncontrolled Ascent**:\n     * Jettisoning large solid lead ballast stops a fall crudely, but ruins trim across deep profiles. Upon encountering hyper-dense abyssal water, the excess positive buoyancy induces a dangerous **Uncontrolled Rapid Ascent**, subjecting the pressure hull to destructive shear forces.\n     * Deep submersibles utilize **Variable Ballast and External Silicone Bladders**, pumping exact milliliter increments of incompressible silicone oil to expand effective hull displacement $V_{\\text{sub}}$, securing neutral hover within single-digit Newtons.\n  4. **Structural Coloration vs. True Bioluminescence**:\n     * **Structural Color**: The shifting rainbow fringes along a comb jelly's ciliary rows are not chemical light, but rather **Periodic Optical Diffraction**, where physical ciliary spacings interact with downwelling light through constructive wave interference.\n     * **Bioluminescence**: In contrast, true bioluminescence is an enzymatic chemical oxidation of luciferin by luciferase, converting energy into light at $88\\% \\sim 95\\%$ quantum efficiency with minimal heat—an evolutionary masterpiece utilized for deep-sea signaling and counter-illumination camouflage.\n",
          "stemKnowledge": [
            "海水光學選擇性吸收：紅光在水深 10-15 米即被大量吸收，400 米處僅剩微弱藍綠光（470nm）穿透。",
            "海洋躍層物理學：溫躍層（Thermocline）與密度躍層（Pycnocline）造成的海水密度垂直突變與浮力衝擊。",
            "阿基米德浮力微補償系統：耐壓殼外矽油油囊的加壓與抽吸微調（不因高水壓壓縮），維持中性浮力平衡。",
            "海洋深層生物發光（Bioluminescence）與櫛水母纖毛相干結構色（Coherent Structural Diffraction）光學機制。"
          ]
        },
        {
          "id": 4,
          "file": "第04章_千米之下的聲學通道.md",
          "title": "第 04 章　千米之下的聲學通道",
          "enTitle": "Chapter 04 — The Acoustic Channel Beneath a Thousand Meters",
          "titleEn": "Chapter 04 — The Acoustic Channel Beneath a Thousand Meters",
          "shortTitle": "千米之下的聲學通道",
          "concept": "SOFAR 聲速極小值層 × 斯奈爾折射波導 × 重力擒縱週期異常 × 海山聲影區",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "如何在 SOFAR 聲波導與海山聲影區的反射交錯中，利用抵達時間差（TDOA）與多普勒頻移鎖定失控鐘台的真實入射角？",
          "summary": "『鸚鵡螺-IV 號』穿透一千公尺分界線，進入全海洋最具傳奇色彩的 SOFAR 聲速極小值通道。高靈敏水聽器陣列捕捉到了橫跨數千公里、宛如深海交響樂的跨洋巨鯨歌聲。但在這宏大的自然天籟深處，誠浩敏銳辨識出了一串每 2.5 秒敲擊一次的冰冷機械脈衝——深海零號鐘台發出的重力擒縱計時信號！葉旖緁比對發現脈衝週期正在異常縮短，證實板塊剪切應力正在扭曲鐘台基座；眾人結合海山聲影區反射路徑，鎖定修正航向，朝著兩千米深海階梯全速進發！",
          "summaryEn": "As Nautilus-IV crosses the 1,000-meter threshold, it enters the oceanic SOFAR sound channel. High-sensitivity hydrophones intercept transoceanic whale songs converging across thousands of miles. Yet amidst this vast aquatic symphony, Leo detects an immaculate, rhythmic metallic heartbeat ticking precisely once every 2.5 seconds—the gravitational escapement pulses from Deep Sea Clocktower Zero. Ye Yijie discovers that the pulse intervals are abnormally contracting, proving that tectonic shear stresses are deforming the clock's foundation. Calculating around the acoustic shadow zone of a volcanic seamount, the crew plots a revised descent vector, plunging toward the two-thousand-meter oceanic terrace.",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第四章：千米之下的聲學通道\n\n深海是一座完全剝奪視覺的無垠黑牢，但對聲音而言，它卻是一座近乎無限延伸、回音繚繞的巨大水晶宮殿。\n\n「鸚鵡螺-IV 號」的鈦合金雙球殼在微弱的推力下平穩滑行。艙壁外側的深水溫度計讀數持續走低，數字從海面的二十六攝氏度一路墜落，穿過冰冷刺骨的溫躍層，最終定格在令人不寒而慄的四點二攝氏度。\n\n「當前深度：九百八十五公尺。」\n\n副駕駛座上的杜海嵐將主控台的聚光探照燈切換為微弱的暗紅光夜視模式，輕聲提醒道：「各位，我們即將跨越一千公尺分界線。這裡不僅是微弱暮色的終點、永恆黑暗『午夜帶（Bathypelagic Zone）』的入口，更是整座太平洋最神奇的物理奇觀——『SOFAR 聲速通道』的軸心層。」\n\n「SOFAR 通道？」正趴在左側圓錐形壓克力視窗前凝視黑暗的將江回過頭，摸了摸自己圓滾滾的腦袋，「聽起來像是某種給深海魚類走的高速公路？」\n\n「某種意義上，你說得很接近，將江。」坐在中央導航台前的葉旖緁抬起眼眸，指尖在全息投影的聲速剖面圖上輕輕一劃。\n\n只見螢幕上呈現出一條優美的「ㄑ」字形雙曲折線。\n\n「聲音在海水中的傳播速度並不是常數，」葉旖緁用清脆而冷靜的語調解釋道，「在表層海水，水溫較高，水溫越高聲速越快；但隨著深度增加，陽光消失，水溫急遽驟降至接近冰點，聲速隨之大幅減慢，在水深大約八百到一千公尺處達到全海洋的最低值——每秒大約只有一千四百八十米左右。」\n\n誠浩立刻接過話頭，眼神中閃爍著對物理法則的透徹理解：「但如果繼續往下潛，雖然水溫已經降到底不再變化，海水承受的靜水壓強卻以每十公尺增加一個大氣壓的速度瘋狂暴增！水分子被超高壓死死擠壓在一起，體積彈性模量飆升，聲速又會掉頭重新加快！」\n\n「沒錯！」海嵐讚許地看了誠浩一眼，指著折線的最凹處，「溫度主導的降速區，與壓強主導的升速區，在水深一千公尺附近交匯，形成了一個全海洋『聲速極小值層』。根據斯奈爾折射定律，任何向斜上方或斜下方發射的聲波，一旦進入聲速較快的上下水層，聲線就會被折射率梯度向後彎曲，就像被兩面看不見的深海巨鏡不斷彈回低速層中心！」\n\n「就像一根橫跨整個太平洋的天然聲學光纖！」誠浩由衷讚嘆道。\n\n「嗡——」\n\n一旁的機械柴犬皮可突然直立起金屬三角耳，後背的黃銅散熱格柵微微開闔，發出齒輪緊咬的低頻顫鳴。它那雙由高靈敏度微光晶體打造的琥珀色電子眼，瞬間由常態的橘黃切換為深邃的深海幽藍。\n\n「汪！檢測到底部水體密度微躍，外界背景流噪下降百分之七十八。」皮可發出清脆的電子合成音，「已切入大洋聲導軸心。水聽器基陣靈敏度自動提升二十四分貝。」\n\n海嵐伸手拉下主動力電閘，將「鸚鵡螺-IV 號」切換為「靜音漂移模式（Silent Drift Mode）」。\n\n推進器的磁力偶合無刷電機應聲停轉，原本低沉的馬達震顫在一秒鐘內消失無蹤。整艘潛艇如同懸浮在宇宙虛空中的微小膠囊，僅憑著阿基米德微補償油囊維持著零浮力的完美平衡。\n\n「啪嗒。」海嵐按下了全艦環境音效擴音開關。\n\n那一瞬間，整座載人艙陷入了一種震撼心靈的死寂，緊接著，一陣來自整座太平洋深處的浩瀚天籟，透過高靈敏度壓電陶瓷水聽器，清晰無比地灌滿了每個人的耳膜。\n\n那是鯨魚的歌聲。\n\n但那絕不是普通海面能聽見的短暫啼鳴。在 SOFAR 通道的超長距離聚焦下，來自數千公里外夏威夷海脊、阿拉斯加深海盆地甚至南大洋邊緣的鯨群回聲，跨越了整座大洋在此匯聚重疊！\n\n低沉如古老大提琴拉奏的藍鯨次聲波，在十幾赫茲的極限低頻緩緩震顫，讓潛艇的鈦合金球殼都跟著產生了細微的共振；座頭鯨空靈悠長、婉轉多變的高音迴旋，在聲導管中被反覆折射反射，拉扯出宛如聖家堂穹頂之下宏偉的混響；長鬚鯨規律如心跳般的脈衝，穿透萬頃波濤，宛如古老地球沉穩而深情的呼吸。\n\n「天啊……」將江屏住了呼吸，整個人貼在冰涼的窗框上，連大氣都不敢喘一聲，「這……這簡直就是深海裡的交響樂團！」\n\n「因為低頻聲波在水中的衰減係數極小，」海嵐輕聲說道，目光凝視著無底的深淵，「高頻聲音會被海水分子吸收，只有這些數十赫茲的低頻波，能在這條聲學通道裡跑遍半個地球。大洋另一端的巨鯨，也許正在對著我們這片海域呼喚它跨越半生的伴侶。」\n\n然而，就在所有人都沉浸在這份跨越大洋的宏大詩意中時，誠浩的眉頭卻微微蹙起。\n\n他的耳朵對機械齒輪的咬合律動擁有著刻入骨髓的直覺。在漫無邊際的自然鯨歌背後，隱藏著一道極其微弱、卻異常精確的信號。\n\n「噓——大家聽。」誠浩示意所有人安靜。\n\n他伸出手指，輕輕貼在艙壁的信號傳感器外殼上，閉上眼睛。\n\n「嘀……咔……嗒……」\n\n「嘀……咔……嗒……」\n\n那是一串極其規律的聲音。\n\n它每隔恰好二點五秒敲擊一次，音色乾脆冷冽，帶著特種金屬在超高壓下撞擊特有的金屬脆鳴，完全不具備生物聲波那種柔和流動的頻率調製。\n\n「皮可，提取背景信號，做帶通濾波！」誠浩迅速下達指令。\n\n「汪！收到指令，啟用一百一十赫茲帶通濾波器，抑制生物背景雜音。」\n\n皮可頸部的差速齒輪急速旋轉，主控台螢幕上的混亂聲波頻譜瞬間被剝離，只留下一條乾淨俐落的脈衝波形。\n\n「咔……嗒……嘀……」\n\n那清脆的金屬撞擊聲被放大了十倍，在安靜的球艙內清晰迴盪。\n\n葉旖緁的瞳孔驟然緊縮，她迅速調出隨身攜帶的那枚鈦合金深淵信標卡盤的內部結構圖，將全息投影重疊在聲波頻譜之上：「頻率一百一十赫茲，基頻完全吻合！每兩點五秒一次撞擊……這是『重力擒縱輪』擺動的週期！是深海零號鐘台！」\n\n「老天爺，它真的還活著！」將江激動得差點從座位上跳起來。\n\n「不，情況不對。」葉旖緁手指在計算面板上飛速敲擊，臉色瞬間凝重起來，「你們看信號的時間間隔——第一組脈衝間隔是兩點五零秒，第十組變成了兩點四九二秒，最新的一組已經縮短到了兩點四八五秒！」\n\n杜海嵐神情一凜：「脈衝週期在縮短？這意味著什麼？」\n\n「意味著鐘台的擺輪正在越轉越快！」誠浩深吸了一口氣，聲音沉穩而緊迫，「深海零號鐘台依靠重錘與深海溫差發條驅動，它的擒縱調速機構原本應該維持精確的恆定頻率。週期異常縮短，只有一種可能——馬里亞納海溝俯衝帶的板塊剪切應力，正在向鐘台的主基座傳導擠壓！超高壓外力扭曲了擒縱叉的安裝軸承，讓擺輪的振幅被迫縮小，鐘表在『飛車』！」\n\n「如果在七十二小時倒計時結束前，擒縱叉被徹底卡死，或者發條因飛車而斷裂，」葉旖緁抬頭看著大家，眼神無比嚴肅，「深海零號鐘台將徹底失去對板塊應變釋放閥的調控能力，蓄積了五十年的地殼能量將在幾秒鐘內爆發，引發毀滅性的特大海嘯！」\n\n艙內的氣氛瞬間由方才的浪漫寧靜轉為窒息般的緊繃。\n\n「皮可，能測定聲源的精確入射角嗎？」誠浩轉頭問道。\n\n機械柴犬的雙耳微微轉動，兩道藍色光束掃過水聽器陣列的相位數據：「報告誠浩，根據五組水聽器的抵達時間差（TDOA）與多普勒頻移計算，信號並不是直接從深淵正下方傳來的。」\n\n「不是正下方？」將江愣住了，「難道鐘台不在挑戰者深淵？」\n\n「不，鐘台確實位於海溝底部，」杜海嵐熟練地調出西太平洋深海海床地貌圖，指著千米聲道下方的幾道巨大回音路徑，「但在深海中，聲音不是走直線的。SOFAR 通道的聲波會沿著波導上下起伏翻滾。而且，在水深一千二百米處，橫亙著一道由古老海底火山噴發形成的『海山聲影區（Acoustic Shadow Zone）』。這串信號，是先打在海山側壁的堅硬玄武岩上，經過一次反射後，才漏進 SOFAR 通道被我們捕捉到的！」\n\n「也就是說，如果我們盲目朝著聲音的方向前進，會一頭撞進海山的背風亂流與斷崖碎石帶裡！」將江拍了拍胸口，後背泛起一陣冷汗。\n\n「海嵐說得對，」誠浩調出鸚鵡螺-IV 號的阿基米德浮力微調油囊控制界面，目光堅定，「我們不能走反射路徑。我們要穿透 SOFAR 通道，跨越海山頂部的鞍部海峽，切入水深兩千米的第二階梯。」\n\n「但那裡是抹香鯨的深海捕食場，」杜海嵐看著儀表盤上迅速累積的水壓指數，「兩千米深度，水壓將突破兩百個大氣壓。那裡的暗流更凶險，而且……我們的探照燈會吸引深淵中真正的龐然大物。」\n\n「我們已經沒有退路了。」葉旖緁望著信標卡盤上閃爍的倒數紅光，「距離海嘯臨界點，只剩下六十六個小時。」\n\n誠浩握緊了下潛推進手柄，回頭看向同伴們。\n\n將江握緊了扳手，堅定地點了點頭；皮可發出一聲清脆自信的短吠；杜海嵐露出了遠洋水手特有的無畏笑容，伸手推上了壓載配平滑軌。\n\n「鸚鵡螺-IV 號，重啟低噪向量推進器。」\n\n誠浩的聲音在球艙內迴盪，冷靜而有力：「目標：穿過聲學陰影區，向水深兩千米階梯，全速下潛！」\n\n伴隨著矽油浴無刷電機輕柔而深沉的嗡鳴，這艘凝聚著人類極致工程智慧與少年勇氣的黃銅潛艇，如同一枚金色的子彈，撕開千米之下永恆的墨黑，決然向著深淵更深處挺進！\n",
          "contentEn": "# Adventure Gear: Beacons of the Mariana Abyss\n\n## Chapter 4: The Acoustic Channel Beneath a Thousand Meters\n\nThe deep ocean is an infinite, pitch-black prison completely devoid of vision, yet to sound, it is a vast, echoing crystal palace stretching out without end.\n\nThe titanium alloy twin spherical hulls of the *Nautilus-IV* glided smoothly under gentle thrust. The external deep-sea thermometer readout steadily declined, plunging from twenty-six degrees Celsius at the surface, slicing through the biting chill of the thermocline, and finally settling at a bone-chilling 4.2 degrees Celsius.\n\n\"Current depth: 985 meters.\"\n\nFrom the co-pilot seat, Du Hailan switched the main console's high-intensity floodlights to a faint, dark-red night vision mode, whispering softly, \"Everyone, we are about to cross the one-thousand-meter threshold. This is not only the end of the faint twilight and the gateway to the perpetual abyss of the Bathypelagic Zone, but also the axis of the most wondrous physical phenomenon across the entire Pacific—the SOFAR acoustic channel.\"\n\n\"The SOFAR channel?\" Jiang Jiang, who was leaning against the left conical acrylic viewport peering into the darkness, turned his head and scratched his round crown. \"Sounds like some kind of express highway built for deep-sea fish?\"\n\n\"In a sense, you're actually very close, Jiang Jiang.\" Seated at the central navigation station, Ye Yijie looked up, her slender fingers tracing across the holographic sound velocity profile.\n\nA graceful, hyperbolic \"V\"-shaped curve materialized upon the display.\n\n\"The speed of sound in seawater is never a constant,\" Ye Yijie explained in her clear, composed voice. \"In surface waters, temperatures are high, and higher temperatures yield faster sound speeds. But as depth increases and sunlight disappears, the water temperature plunges drastically toward near-freezing levels, causing the speed of sound to decelerate rapidly until it reaches its lowest oceanic value around 800 to 1,000 meters—approximately 1,480 meters per second.\"\n\nLeo picked up the thread immediately, his eyes gleaming with a keen grasp of physical law: \"Yet if you continue to descend deeper, while the temperature bottoms out and ceases to drop, the hydrostatic pressure skyrockets relentlessly by one atmosphere for every ten meters! Water molecules are squeezed violently under the crushing load, the bulk elastic modulus surges, and the speed of sound reverses course to accelerate once more!\"\n\n\"Exactly!\" Hailan cast Leo an appreciative glance, pointing toward the deepest recess of the curve. \"The temperature-dominated deceleration zone and the pressure-dominated acceleration zone converge near a depth of one thousand meters, forming the oceanic 'Sound Velocity Profile Minimum layer.' According to Snell's Law of refraction, whenever a sound wave travels obliquely upward or downward, upon entering the faster water layers above or below, the refractive index gradient bends the acoustic rays backward, like being perpetually bounced back toward the low-speed axis by two invisible oceanic mirrors!\"\n\n\"Like a colossal, natural acoustic optical fiber spanning across the entire Pacific!\" Leo exclaimed in pure admiration.\n\n*Hummm—*\n\nBeside them, Piko the robotic Shiba Inu suddenly perked up its triangular metal ears. The brass cooling louvers along its spine expanded slightly, releasing a low-frequency hum of meshing precision gears. Its amber optical sensors, fashioned from high-sensitivity low-light crystals, instantly transitioned from their standard warm orange to a deep, luminescent oceanic azure.\n\n\"Woof! Slight pycnocline density shift detected at the base; ambient hydrodynamic flow noise decreased by seventy-eight percent,\" Piko announced in its crisp, synthesized voice. \"We have intersected the ocean acoustic waveguide axis. Hydrophone array sensitivity boosted by twenty-four decibels automatically.\"\n\nHailan reached out and pulled the main propulsion breaker, transitioning the *Nautilus-IV* into \"Silent Drift Mode.\"\n\nThe magnetic-coupling brushless motors ceased rotation in response, the deep hum of mechanical drive vanishing within a single second. The entire submarine hung like a tiny capsule suspended in cosmic emptiness, held in flawless neutral buoyancy solely by the Archimedean micro-trimming oil bladders.\n\n*Click.* Hailan toggled the cabin's ambient acoustic speaker array.\n\nIn that instant, the manned sphere fell into a breath-stopping stillness. Then, a majestic, ethereal symphony surging from the deepest reaches of the Pacific flooded everyone's ears with staggering clarity through the piezoelectric ceramic hydrophones.\n\nIt was the song of whales.\n\nYet this was nothing like the fleeting calls heard near the surface. Focused across transoceanic distances by the SOFAR waveguide, echoes from whale pods thousands of kilometers away—along the Hawaiian Ridge, across the Alaskan abyssal basins, and from the edges of the Southern Ocean—converged and overlapped right here!\n\nThe deep infrasound of blue whales rumbled at extreme frequencies below twenty hertz, vibrating like ancient cellos and causing the submarine's titanium hull to resonate in faint, sympathetic hums. The soaring, haunting melodies of humpback whales curved and refracted endlessly through the acoustic duct, blooming into a grand reverberation akin to the soaring vaults of a grand cathedral. The rhythmic, heartbeat-like pulses of fin whales pierced through vast ocean reaches, sounding like the steady, soulful respiration of the ancient Earth itself.\n\n\"Heavens...\" Jiang Jiang held his breath, pressing his face against the chilled viewport frame without daring to exhale. \"This... this is literally a symphony orchestra of the deep ocean!\"\n\n\"Because the attenuation coefficient of low-frequency sound waves in water is incredibly low,\" Hailan spoke softly, her eyes fixed on the bottomless void. \"High-frequency sounds are quickly absorbed by water molecules, but these low frequencies of only tens of hertz can traverse half the globe within this acoustic channel. A great leviathan on the far side of the planet might be calling out across this ocean to the lifelong companion it seeks.\"\n\nHowever, just as everyone was enraptured by the boundless poetry of the ocean, Leo's brow furrowed slightly.\n\nHis ears possessed an instinct carved into his very bones for the mechanical cadence of interlocking clockwork gears. Beneath the sprawling, natural whale songs, there hid a signal that was exceedingly faint, yet relentlessly precise.\n\n\"Shh—listen closely, everyone,\" Leo signaled for quiet.\n\nHe placed his fingertips gently against the casing of the cabin hull's acoustic sensor, closing his eyes.\n\n*Tick... clack... tap...*\n\n*Tick... clack... tap...*\n\nIt was a string of immaculate, rhythmic strikes.\n\nIt struck precisely once every 2.5 seconds, its tone crisp, sharp, and metallic, bearing the unmistakable ring of specialized alloy impacting under crushing hydrostatic pressure. It completely lacked the fluid, organic frequency modulation of living marine fauna.\n\n\"Piko, isolate the background signal and apply band-pass filtering!\" Leo commanded swiftly.\n\n\"Woof! Command acknowledged. Engaging 110-hertz band-pass filter to suppress biological ambient noise.\"\n\nThe differential gears in Piko's neck whirred rapidly. The chaotic acoustic spectrum on the primary display was stripped away in an instant, leaving behind a sharp, immaculate pulse waveform.\n\n*Clack... tap... tick...*\n\nThe crisp metallic impact was magnified tenfold, ringing with piercing clarity within the quiet sphere.\n\nYe Yijie's pupils contracted sharply. She immediately brought up the internal architectural schematics of the titanium abyssal beacon disc they carried, superimposing the holographic model directly over the acoustic frequency spectrum: \"Frequency: 110 hertz, the fundamental harmonics align flawlessly! One strike every 2.5 seconds... this is the operational period of a gravitational deadbeat escapement wheel! It's the Deep Sea Clocktower Zero!\"\n\n\"Good grief, it really is still running!\" Jiang Jiang nearly leapt out of his seat in excitement.\n\n\"No, something is wrong.\" Ye Yijie's fingers flew across her calculation terminal, her expression hardening in an instant. \"Look at the time intervals between pulses—the first set of pulses was spaced at 2.50 seconds, the tenth set shortened to 2.492 seconds, and the latest cluster has compressed down to 2.485 seconds!\"\n\nDu Hailan's gaze sharpened: \"The pulse period is shrinking? What does that imply?\"\n\n\"It means the clocktower's balance wheel is spinning faster and faster!\" Leo inhaled sharply, his tone steady yet urgently taut. \"Clocktower Zero is driven by counterweights and deep-sea thermoelectric springs; its escapement regulation was designed to maintain a strictly constant frequency. An abnormal shortening of the period points to only one reality—the tectonic shear stresses along the Mariana subduction zone are propagating directly into the clocktower's bedrock foundation, squeezing it! Extreme hydrostatic deformations have distorted the escapement arbor bearings, forcing the balance amplitude to choke down. The clockwork is running away!\"\n\n\"If the pallet fork jams completely or the mainspring snaps under the runaway strain before our seventy-two-hour countdown expires,\" Ye Yijie looked up at the team, her eyes brimming with solemn gravity, \"Clocktower Zero will permanently lose its ability to regulate the tectonic strain-release valves. Fifty years of stored crustal strain will rupture in mere seconds, triggering a catastrophic megathrust tsunami!\"\n\nThe atmosphere inside the sphere snapped in an instant from romantic tranquility to suffocating tension.\n\n\"Piko, can you determine the precise angle of incidence for the sound source?\" Leo turned to ask.\n\nThe robotic Shiba Inu swiveled its ears subtly, two blue beams scanning across the phase data of the hydrophone array: \"Reporting, Leo. Based on the Time-Difference of Arrival (TDOA) across five hydrophone clusters and Doppler shift calculations, the signal is not traveling straight up from directly beneath the abyss.\"\n\n\"Not from directly below?\" Jiang Jiang froze. \"Could it be that the clocktower isn't inside the Challenger Deep?\"\n\n\"No, the clocktower is indeed situated on the trench floor,\" Du Hailan skillfully brought up the bathymetric map of the Western Pacific seabed, tracing several massive acoustic reflection paths beneath the thousand-meter channel. \"However, sound never travels in straight lines in the ocean. Acoustic waves in the SOFAR channel oscillate up and down along the waveguide. Furthermore, at a depth of 1,200 meters, there lies an 'Acoustic Shadow Zone' formed by an ancient underwater volcanic seamount. This signal bounced off the rigid basalt cliffs of the seamount flank, underwent a single reflection, and only then leaked into the SOFAR channel where we intercepted it!\"\n\n\"Which means, if we blindly navigate toward the perceived direction of the sound, we would crash straight into the turbulent lee vortices and cliffside rubble of that seamount!\" Jiang Jiang clutched his chest, cold sweat prickling his back.\n\n\"Hailan is right,\" Leo brought up the Nautilus-IV's Archimedean micro-trimming oil bladder interface, his eyes resolute. \"We cannot follow the reflection path. We must pierce straight through the SOFAR channel, cross the saddle canyon over the seamount crest, and plunge directly toward the second oceanic terrace at a depth of two thousand meters.\"\n\n\"Yet that is the hunting ground of sperm whales,\" Du Hailan noted, observing the hydrostatic pressure indicators steadily rising on the console. \"At two thousand meters, water pressure will exceed two hundred atmospheres. The deep currents there are far more treacherous, and... our searchlights will inevitably draw the attention of the ocean's true titans.\"\n\n\"There is no turning back now.\" Ye Yijie looked down at the crimson countdown blinking upon the beacon disc. \"We only have sixty-six hours left before the tsunami reaches its critical threshold.\"\n\nLeo gripped the depth descent thruster controls, turning back to look at his companions.\n\nJiang Jiang tightened his wrench, nodding with fierce determination; Piko let out a sharp, confident bark; and Du Hailan flashed the bold, fearless grin of an ocean voyager, sliding the ballast trim throttle forward.\n\n\"Nautilus-IV, engage low-noise vector thrusters.\"\n\nLeo's voice resonated inside the spherical pressure hull, calm and unflinching: \"Target: traverse the acoustic shadow zone and plunge at full speed toward the two-thousand-meter oceanic terrace!\"\n\nWith the gentle, deep whir of the silicon-oil brushless motors, this brass-sheathed submersible—embodying humanity's peak engineering ingenuity and the unyielding courage of youth—shot like a golden bullet through the perpetual blackness beneath a thousand meters, resolute as it plunged toward the deepest abyss!\n",
          "stemKnowledge": [
            "SOFAR 聲道物理學：水溫降低減緩聲速，水壓升高加速聲速，在 800～1,000 米處形成聲速極小值軸心（約 1,480 m/s）。",
            "斯奈爾折射聲波導：聲線在聲速梯度中總是向慢速層彎曲折射，使低頻聲波被束縛在通道內跨越大洋傳播千公里而不散逸。",
            "低頻聲波海水低衰減率：分子弛豫吸收使得高頻聲波迅速耗散，而 10～100Hz 低頻波具備極高穿透力，成就深海鯨歌與水聲通信。",
            "被動水聽器基陣與 TDOA 定位：利用多個水下壓電水聽器的抵達時間差與相位差，精確計算深海聲源的三維空間方位角。"
          ]
        },
        {
          "id": 5,
          "file": "第05章_抹香鯨與深淵巨腕.md",
          "title": "第 05 章　抹香鯨與深淵巨腕",
          "enTitle": "Chapter 05 — Sperm Whales and the Abyssal Tentacles",
          "titleEn": "Chapter 05 — Sperm Whales and the Abyssal Tentacles",
          "shortTitle": "抹香鯨與深淵巨腕",
          "concept": "深海巨型化現象 × 抹香鯨鯨蠟調浮與潛水生理 × 帕斯卡反向釋放閥 × 定向超聲驅散",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在機械臂被大王烏賊負壓吸盤死死纏繞並遭遇抹香鯨正面撞擊的千鈞一發之際，如何透過帕斯卡反向洩壓與定向超聲干擾平衡囊脫困？",
          "summary": "『鸚鵡螺-IV 號』下潛至兩千米深海階梯，親眼目睹了長達二十公尺的雄性抹香鯨與十三公尺大王烏賊的深海世紀死鬥！大王烏賊垂死掙扎時，巨大倒鉤觸腕死死纏住潛艇右側機械臂，企圖將潛艇拖入深淵斷崖。在液壓油管即將爆裂的千鈞一發之際，誠浩指揮將江啟動帕斯卡反向洩壓閥讓手爪自由失壓脫開支點，皮可發射三十八千赫茲定向超聲波精準干擾烏賊平衡囊，海嵐果斷拋載末端模組全向加速，成功化險為夷，向深海零號鐘台第一號海底中繼站挺進！",
          "summaryEn": "Descending to the two-thousand-meter oceanic terrace, Nautilus-IV witnesses a legendary abyssal deathmatch between a twenty-meter male sperm whale and a thirteen-meter giant squid. In its thrashing death throes, the squid's barbed tentacle ensnares the submarine's starboard manipulator arm, dragging it toward the continental cliff. As hydraulic pressure spikes near explosive failure, Leo guides Jiang Jiang to operate the Pascal reverse-relief valve to disengage leverage, while Piko discharges a 38kHz ultrasonic beam to disrupt the squid's statocysts. Jettisoning the modular tool tip, Hailan powers through at full vector thrust, guiding the crew toward Clocktower Zero's first seabed relay.",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第五章：抹香鯨與深淵巨腕\n\n在水深一千八百公尺的深海世界裡，時間彷彿被高壓凍結成了某種黏稠而冰冷的固體。\n\n「鸚鵡螺-IV 號」劃破海山邊緣的亂流，順著陡峭的大陸坡台階持續向下滑翔。艙外的水溫已經恆定在令人窒息的一點八攝氏度，外殼傳感器顯示，每平方公分外殼承受的水壓已經突破了一百八十公斤——這相當於三頭成年黃牛同時踩在每個人的一張郵票大小的皮膚上。\n\n「深度：一千九百五十公尺。我們正在逼近兩千米深海階梯。」\n\n杜海嵐的手指在主控台的被動聲納波束矩陣上輕巧跳躍，監控著四周的洋流切變。她壓低了聲音，彷彿連說話聲都會驚擾這片沉睡的虛空：「大家注意，外面的水流正在出現規律的逆向湧浪。有龐然大物在我們上方活動。」\n\n「龐然大物？」趴在右側舷窗前的將江用力眨了眨眼睛，鼻尖幾乎貼在厚達二十公分的特種壓克力上，「海嵐，外面除了一片漆黑和那些漂來漂去的『海洋雪』，我連個蝦米都沒看到啊！」\n\n「不要用眼睛看，將江。」葉旖緁推了推眼鏡，指著側向聲納瀑布圖上那一串串突然亮起的密集鋸齒波，「聽聲納的信號。這種每秒五次、聲壓級高達二百三十分貝的超強聲學脈衝，是地球上最強大的生物主動聲納——抹香鯨的獵殺點擊聲（Clicking sound）。」\n\n「噠！噠！噠！噠！」\n\n話音未落，潛艇的鈦合金球殼外壁突然傳來一陣陣沉重得令人心悸的敲擊感！\n\n那並不是真正的物體碰撞，而是抹香鯨額隆器官發出的聚焦高能定向聲波，直接穿透海水，轟擊在潛艇金屬外殼上產生的聲壓共振！\n\n「汪！警告！檢測到高能量聚焦聲束，聲源距離我們正上方兩百米！」皮可背部的黃銅通風片急速震顫，機械耳轉向十點鐘方向，「聲源體長預估超過十八公尺，體重四十五噸以上！」\n\n誠浩立刻調低了主儀表盤的燈光，避免外洩的微光刺激捕食者：「海嵐，抹香鯨不是哺乳動物嗎？牠們需要用肺呼吸，怎麼可能潛到兩千米的極限深淵？」\n\n杜海嵐眼中閃爍著對海洋生命的無限敬畏：「這就是生物演化的奇蹟，誠浩。抹香鯨的肌肉中含有超乎想像的高濃度肌紅蛋白，能在血液中儲存海量氧氣；在下潛時，牠們的肺泡會主動完全塌縮，心率從每分鐘六十次驟降到只有幾次，將所有氧氣只供給大腦與心臟。」\n\n海嵐指著潛艇頂部示意道：「而且，抹香鯨巨大頭部裡裝有數噸重的『鯨蠟（Spermaceti oil）』。下潛時，牠們吸入冰冷海水讓鯨蠟冷卻凝固、密度增大，像沉重的鉛塊一樣帶動龐大的身軀無動力墜入深海；當牠們要上浮時，充血加熱鯨蠟使其融化為液態，密度減小，就能像浮標一樣輕鬆升回海面！」\n\n「這簡直就是活生生的天然阿基米德浮力油囊！」誠浩讚嘆不已。\n\n然而，還沒等大家從這精妙的深海生理學奇蹟中回過神來，整艘「鸚鵡螺-IV 號」突然猛烈地向左側劇烈傾斜了整整三十度！\n\n「哇啊啊！」將江一個重心不穩，直接摔在中央管道支架上，幸好被安全防護網死死兜住。\n\n「警告！外部流場紊亂！出現劇烈流體剪切渦旋！」皮可的警報聲瞬間轉為急促的紅光閃爍。\n\n海嵐一把推開主聚光探照燈的防護蓋，將四組兩萬流明的深海疝氣大燈功率全開！\n\n「刺啦——」\n\n一道刺破萬古黑暗的雪亮光柱貫穿了舷窗外的墨黑海水。\n\n映入眼簾的一幕，讓球艙內的所有人瞬間倒吸了一口涼氣，血液幾乎徹底凝固！\n\n就在距離舷窗不到五公尺的正前方，一頭長達近二十公尺的深灰色巨型雄性抹香鯨，正與一隻從未在人類陽光下現身過的深海巨怪撕扯翻滾！\n\n那是一隻體長超過十三公尺的深淵大王烏賊（Giant Squid）！\n\n大王烏賊那兩根長達七八米的細長觸腕，宛如兩條長滿骨質吸盤的巨型蟒蛇，死死纏繞在抹香鯨布滿陳舊傷疤的巨大下頜與頭部！直徑堪比餐盤大小的吸盤邊緣，鑲嵌著一圈圈鋒利的角質鋸齒，正在抹香鯨厚韌的皮膚上硬生生刮出一道道泛白的深痕！\n\n而抹香鯨那長滿圓錐形巨齒的狹長下頜正死死咬合在大王烏賊的柔軟外套膜上，巨尾瘋狂拍打著冰冷的海水，掀起一陣陣足以掀翻小型潛艇的深海暗湧亂流！\n\n「是大王烏賊……深海巨型化現象（Deep-Sea Gigantism）的終極產物！」葉旖緁緊緊抓住扶手，聲音帶著震撼的微顫，「在極低水溫、超高壓強與稀缺食物的深淵中，生物為了降低代謝消耗、儲存更多能量，細胞體積和肌肉纖維被極限放大！」\n\n大王烏賊那顆直徑足有三十公分的巨大眼球，在探照燈的強光下反射出令人骨寒的銅綠色幽光。\n\n突然，被抹香鯨巨齒咬碎外套膜的大王烏賊發出垂死的瘋狂掙扎，一根粗壯的副觸腕在劇痛中狂亂抽打，呼嘯著劃破海水——\n\n「砰！！」\n\n一聲沉悶而巨大的金屬撞擊聲透過球殼猛烈傳來！\n\n大王烏賊那根滿是倒鉤吸盤的巨腕，在混亂中不偏不倚，死死纏繞住了「鸚鵡螺-IV 號」右側伸出的一號重型鈦合金多關節機械手臂！\n\n「不好！機械臂被纏住了！」將江失聲大叫。\n\n大王烏賊垂死掙扎的拉力何止數噸！更可怕的是，受傷的巨烏賊將潛艇誤當成了另一頭攻擊它的捕食者，另外數根布滿吸盤的觸手順勢呼嘯著攀附上來，死死勒住了潛艇右側的機械臂基座與液壓伺服管線！\n\n巨大的拖拽力瞬間拉扯著二十噸重的「鸚鵡螺-IV 號」，潛艇開始以每秒三米的速度被強行拖向下方深不見底的海山斷崖！\n\n「推進器逆向全功率輸出！無刷電機扭矩拉滿！」海嵐雙手死死握住動力操縱桿，將油門推到底。\n\n磁力推進器爆發出尖銳的高頻嘯鳴，但在巨型海怪的絕望拖曳下，潛艇的下墜速度根本無法遏制！\n\n「右側機械臂關節伺服電機過載警報！液壓油管壓強已達六百巴，即將爆管！」主控台上紅燈狂閃，警報蜂鳴聲撕裂了艙內的空氣。\n\n「如果液壓管爆裂，高壓海水會灌入外置液壓箱，潛艇將徹底失去右舷平衡，直接翻滾墜崖！」葉旖緁的額頭滲出了細密的冷汗。\n\n「將江！機械臂反向釋放閥！」誠浩突然大喊，「就在你腳邊的二號黃銅應急手動泵！」\n\n將江愣了半秒，隨即眼中爆發出一股決絕的狠勁：「交給我！」\n\n他一把扯開地板上的安全鎖扣，握住那根鍍鉻的重型液壓手柄：「誠浩，怎麼操作？！」\n\n「帕斯卡反向補償法！」誠浩一邊緊盯著儀表盤上的應力曲線，一邊高聲指揮，「大王烏賊是利用肌肉橫向收縮產生的真空負壓吸盤死死吸附。不要硬拉，硬拉只會讓它的倒鉤鋸齒越陷越深！連續按壓三次洩壓閥，把外置機械臂的腕關節液壓油瞬間抽空，讓機械手爪進入『完全失壓自由擺動狀態』！」\n\n「明白！洩壓一！洩壓二！洩壓三！」將江咬緊牙關，雙臂青筋暴起，連續三次將沉重的手柄狠狠壓到底！\n\n「哧——」\n\n外置機械臂的高壓伺服油路瞬間旁通回流，緊繃的金屬關節驟然鬆弛下來。原本被死死別住的機械臂手爪瞬間軟化垂落，大王烏賊發力的支點頓時落空！\n\n「吸盤滑脫了三隻！但它的腕足末端還死死勾在關節鉸鏈裡！」海嵐大聲喊道。\n\n此時，失去獵物的抹香鯨發出了一聲憤怒的超聲狂嘯，巨大的身軀攜帶著數萬焦耳的動能，正朝著潛艇和大王烏賊的方向正面撞來！\n\n「皮可！水下定向聲致驅散矩陣！」誠浩果斷下令，「目標：大王烏賊的平衡囊（Statocyst），超聲聚焦頻率三十八千赫茲！」\n\n「汪！聲學透鏡聚焦完成！超聲波束發射！」\n\n機械柴犬皮可雙爪重重按在導航台的聲學發射基板上，頭頂的兩根黃銅天線高頻震盪。\n\n「嗡————！！」\n\n一道人類肉耳無法聽見、卻在水下具有極強穿透力的高頻超聲波束，如同無形的聲學重錘，精準轟擊在大王烏賊頭部兩側極度脆弱的平衡器官上！\n\n對於完全依靠平衡囊感應深海重力與方向的頭足類軟體動物而言，這種超聲波無異於在耳膜旁引爆了一枚聲光彈！\n\n大王烏賊劇烈地抽搐起來，原本死死扣緊的倒鉤吸盤瞬間脫力張開。\n\n「就是現在！拋載右側防護卡爪，全向向量推進器——最大進氣點火！」\n\n海嵐果斷拍下應急按鈕！\n\n「砰！」\n\n右側機械臂末端的可替換工具頭應聲脫落，與大王烏賊的巨腕一同跌落深淵。脫困的「鸚鵡螺-IV 號」如同脫弦之箭，依靠著全向推進器的強大推力，在千鈞一發之際貼著抹香鯨巨大的腹部擦身而過，掠起一道翻滾的白色水浪！\n\n身後，抹香鯨那張布滿巨齒的長頜轟然閉合，將失去抵抗力的大王烏賊徹底拖入了無邊的黑淵之中。\n\n呼嘯的亂流漸漸平息。\n\n潛艇內，只剩下少年們急促而劇烈的喘息聲，以及機械柴犬皮可散熱片緩緩閉合的「滋滋」餘響。\n\n「甩……甩掉了嗎？」將江一屁股癱坐在地板上，擦了一把額頭上的冷汗，心臟還在喉嚨口狂跳。\n\n葉旖緁看著逐漸恢復平穩的聲納瀑布圖，長長地吐出了一口氣：「抹香鯨帶著獵物游向了上層水域，深淵大王烏賊的信號消失了。」\n\n杜海嵐緩緩收回握在操縱桿上的雙手，轉身看著誠浩、葉旖緁和將江，小麥色的臉龐上露出了由衷的欽佩與笑容：「剛才那三下液壓反向洩壓，還有那記超聲聚焦……你們配合得簡直比老水手還要默契！」\n\n誠浩相視一笑，低頭看著儀表盤：「我們當前深度是多少？」\n\n海嵐調出深度計，神色漸漸重新變得莊嚴：「兩千一百五十公尺。我們已經成功穿透了海山聲影區，進入了深海第二階梯的大洋阿比斯平原邊緣。」\n\n「嗡……」\n\n就在這時，安靜下來的水聽器耳機中，那串熟悉的機械計時脈衝再次響起。\n\n這一次，沒有了海山的折射與遮蔽，信號清晰得就像直接敲擊在每個人的心坎上——\n\n「嘀……咔……嗒……」\n\n「嘀……咔……嗒……」\n\n信號的間隔依然在以微不可察的幅度縮短，那枚跳動在萬米海溝底部的深海心臟，正在以失控的節奏呼喚著他們。\n\n誠浩抬起頭，凝視著舷窗外深不見底的永恆午夜：「檢修右側機械臂液壓回路，調整配平油囊。我們要向深海零號鐘台的第一號海底中繼站，全速前進！」\n",
          "contentEn": "# Adventure Gear: Beacons of the Mariana Abyss\n\n## Chapter 5: Sperm Whales and the Abyssal Tentacles\n\nIn the abyssal realm at a depth of 1,800 meters, time itself seemed to freeze under crushing hydrostatic load into a thick, chilled solid.\n\nThe *Nautilus-IV* sheared through the turbulent wakes along the seamount flanks, gliding steadily downward along the steep contours of the continental slope terrace. Outside the hull, the water temperature had stabilized at a suffocating 1.8 degrees Celsius. External pressure telemetry indicated that hydrostatic loading had surpassed 180 kilograms per square centimeter—equivalent to the weight of three adult oxen balanced atop every stamp-sized patch of human skin.\n\n\"Depth: 1,950 meters. We are closing in on the two-thousand-meter oceanic terrace.\"\n\nDu Hailan's fingers tapped deftly across the passive sonar beam matrix on the main console, monitoring the localized hydrodynamic shear currents. She lowered her voice, as though spoken words might awaken this slumbering void: \"Heads up, everyone. The surrounding flow field is exhibiting rhythmic back-surges. There is a gargantuan creature moving above us.\"\n\n\"A gargantuan creature?\" Jiang Jiang, who was leaning against the starboard viewport, blinked hard, his nose virtually pressed against the twenty-centimeter-thick specialized acrylic. \"Hailan, out there besides absolute pitch-black and that drifting 'marine snow,' I can't even see a tiny brine shrimp!\"\n\n\"Do not rely on your eyes, Jiang Jiang.\" Ye Yijie adjusted her glasses, pointing toward the dense sawtooth spikes abruptly flaring across the lateral sonar waterfall display. \"Listen to the acoustic telemetry. These intense acoustic pulses, striking five times per second at a sound pressure level of 230 decibels, represent the most formidable active biological sonar on Earth—the clicking hunt calls of a sperm whale.\"\n\n*Clack! Clack! Clack! Clack!*\n\nBefore her words could settle, heavy, nerve-racking percussions suddenly slammed against the titanium alloy hull!\n\nIt was not a physical collision, but rather the focused, high-energy acoustic beams emitted from the whale's spermaceti organ, piercing through the water to detonate directly against the submarine's metal skin in resonant acoustic shocks!\n\n\"Woof! Warning! High-energy focused acoustic beam detected; sound source located two hundred meters directly above us!\" Piko's dorsal brass cooling louvers rattled rapidly as its mechanical ears pivoted toward the ten o'clock vector. \"Estimated target length exceeds eighteen meters; mass exceeds forty-five tons!\"\n\nLeo immediately dimmed the main instrument backlights to prevent ambient light leakage from irritating the apex predator: \"Hailan, aren't sperm whales mammals? They breathe air with lungs—how could they possibly dive to the extreme depths of two thousand meters?\"\n\nDu Hailan's eyes shimmered with reverent wonder for marine biology: \"That is the crowning marvel of evolutionary adaptation, Leo. A sperm whale's muscle tissues harbor an astonishingly high concentration of myoglobin, allowing them to store immense reserves of oxygen in their blood. When diving, their alveoli collapse completely by design, and their heart rate plummets from sixty beats per minute to just a few, channeling every precious molecule of oxygen exclusively to the brain and heart.\"\n\nHailan pointed toward the crown of the submarine: \"Furthermore, the whale's massive snout contains several tons of 'spermaceti oil.' During descents, they draw in frigid seawater to freeze and solidify the oil, increasing its density so their massive bodies sink effortlessly into the deep like lead weights; when ascending, they flush blood through the nasal cavities to melt the oil back into liquid, shedding density so they can drift toward the surface like a buoyant float!\"\n\n\"That is literally a living, breathing Archimedean buoyancy oil bladder!\" Leo marveled in sheer awe.\n\nYet before the team could fully absorb this exquisite miracle of abyssal physiology, the *Nautilus-IV* abruptly pitched thirty degrees violently to port!\n\n\"Whoa-aaah!\" Jiang Jiang lost his footing, tumbling backward onto the central pipe conduits, caught just in time by the heavy-duty safety netting.\n\n\"Warning! External flow field destabilized! Violent hydrodynamic shear vortex detected!\" Piko's synthesized warning flared into an urgent crimson pulse.\n\nHailan slammed open the floodlight housing covers, driving all four 20,000-lumen deep-sea xenon projectors to maximum output!\n\n*Fzzz-shhh—*\n\nA brilliant spear of incandescent white light sliced clean through eternal darkness, illuminating the ink-black depths beyond the viewing port.\n\nThe scene that materialized before their eyes caused the air to catch in everyone's throat, their blood running cold in an instant!\n\nLess than five meters in front of the forward viewport, a colossal, slate-gray male sperm whale nearly twenty meters long was locked in a savage, swirling death-match with an abyssal behemoth that had never set foot beneath human sunlight!\n\nIt was a deep-sea giant squid (*Architeuthis dux*) measuring over thirteen meters in length!\n\nThe squid's two elongated feeding tentacles, stretching seven to eight meters like colossal serpents studded with chitinous suckers, were coiled violently around the whale's scarred lower jaw and cranial brow! The suction cups, wide as dining plates, were rimmed with razor-sharp serrated rings, carving gouging white trenches across the whale's thick, leathery hide!\n\nMeanwhile, the sperm whale's narrow lower jaw, bristling with conical ivory teeth, had clamped shut over the squid's soft mantle, its massive fluke thrashing furiously against the frigid water to churn up turbid deep-sea vortices capable of capsizing a submersible!\n\n\"It's a giant squid... the ultimate culmination of deep-sea gigantism!\" Ye Yijie gripped the handrail white-knuckled, her voice trembling in awe. \"In the abyss of sub-freezing temperatures, crushing hydrostatic loads, and scarce nutrients, biological organisms maximize their cellular volume and muscle mass to reduce metabolic rates and conserve vital energy!\"\n\nThe squid's enormous dinner-plate-sized eye, measuring thirty centimeters across, caught the xenon floodlights, reflecting a bone-chilling bronze-green luminescence.\n\nSuddenly, mortally wounded as its mantle ruptured under the whale's shearing bite, the giant squid thrashed in frantic, dying agony. A thick carpal tentacle whipped wildly through the churning brine—\n\n*BAM!!*\n\nA hollow, colossal metallic shudder reverberated violently through the titanium spherical pressure hull!\n\nIn the chaos, the giant squid's barbed tentacle slammed squarely into the *Nautilus-IV*, wrapping tightly around the extended starboard multi-joint titanium robotic arm!\n\n\"Damn it! The manipulator arm is tangled!\" Jiang Jiang yelled in panic.\n\nThe pulling force of a thrashing titan easily exceeded several tons! Worse still, the wounded beast mistook the submersible for a second assailant; additional sucker-studded arms coiled over, cinching tightly around the robotic shoulder turret and external hydraulic servo lines!\n\nThe crushing drag dragged the twenty-ton *Nautilus-IV* downward at an alarming three meters per second, pulling it headlong toward the bottomless seamount abyss!\n\n\"Full reverse on all thrusters! Maximize brushless motor torque!\" Hailan clamped both hands around the throttle yoke, shoving it to the firewall.\n\nThe magnetic-coupling thrusters shrieked in high-frequency whine, yet against the frantic death-pull of the sea monster, the submersible's descent could not be halted!\n\n\"Starboard manipulator shoulder servo motor overload warning! Hydraulic line pressure has reached 600 bar—catastrophic rupture imminent!\" Red alarms flashed across the console, the klaxon tearing through the cabin air.\n\n\"If the hydraulic lines rupture, high-pressure seawater will flood the external fluid reservoir! The sub will lose starboard balance and tumble out of control down the cliff!\" Cold sweat beaded across Ye Yijie's brow.\n\n\"Jiang Jiang! The manipulator counter-torque release valve!\" Leo shouted suddenly. \"Right at your feet, the brass emergency manual pump number two!\"\n\nJiang Jiang froze for half a beat, a fierce wave of resolve igniting in his eyes: \"Leave it to me!\"\n\nHe ripped away the floor safety latch, gripping the chrome-plated heavy hydraulic lever: \"Leo, what's the sequence?!\"\n\n\"Pascal reverse compensation!\" Leo tracked the strain curve on the telemetry display, barking commands: \"The giant squid grips via vacuum negative pressure from muscular transverse contraction. Do not pull back against it—pulling only sinks its chitinous teeth deeper! Pump the relief valve three consecutive strokes to purge the hydraulic fluid from the manipulator wrist, putting the gripper into 'zero-pressure free-swing mode'!\"\n\n\"Understood! Purge one! Purge two! Purge three!\" Gritting his teeth, veins bulging along his forearms, Jiang Jiang slammed the heavy lever down three times to the stop!\n\n*Hiss-shhh—*\n\nThe high-pressure servo circuit instantly bypassed into the return reservoir, and the rigid metal joints went limp. The clamped mechanical gripper dropped loose, robbing the giant squid of its mechanical leverage!\n\n\"Three suckers slipped free! But the tips of its arms are still hooked into the elbow hinge!\" Hailan yelled.\n\nAt that moment, having lost its primary grip on its prey, the enraged sperm whale unleashed a deafening ultrasonic roar. Carrying tens of thousands of joules of kinetic momentum, its massive bulk charged head-on toward the submersible and the squid!\n\n\"Piko! Underwater directional acoustic deterrence matrix!\" Leo commanded decisively. \"Target: the giant squid's statocysts! Ultrasonic focus at thirty-eight kilohertz!\"\n\n\"Woof! Acoustic lens aligned! Ultrasonic pulse discharging!\"\n\nPiko slammed both metal paws onto the console's acoustic emitter pad, the dual brass antennas atop its brow vibrating in high-frequency blur.\n\n*SKREEEEEE—!!*\n\nAn ultrasonic beam inaudible to human ears yet possessed of lethal acoustic penetration in water struck like an invisible hammer, detonating directly against the fragile equilibrium organs on either side of the squid's cranial mantle!\n\nFor a cephalopod that relied entirely on statolith balance to sense gravity and orientation in the lightless deep, this focused acoustic shock was no different from a stun grenade detonating against its eardrums!\n\nThe giant squid convulsed violently, its hooked suckers losing all tension and peeling open.\n\n\"Now! Jettison the starboard tool mount! Omnidirectional vector thrusters—fire at maximum intake!\"\n\nHailan slammed the emergency jettison button without hesitation!\n\n*CLACK!*\n\nThe modular tool head at the end of the manipulator arm detached, plunging into the abyss alongside the squid's coils. Free of the beast's grip, the *Nautilus-IV* shot forward like an arrow from a bow, skimming past the whale's pale belly by a hair's breadth under the furious thrust of its vector engines, kicking up a swirling rooster-tail of white water!\n\nBehind them, the sperm whale's tooth-lined jaws snapped shut with an acoustic boom, dragging the incapacitated giant squid down into the boundless black void.\n\nThe roaring vortices gradually subsided.\n\nInside the cabin, only the ragged, rapid breathing of the four companions and the faint whir of Piko's closing cooling louvers broke the heavy stillness.\n\n\"Did... did we shake them?\" Jiang Jiang slumped onto the floor deck, wiping cold sweat from his forehead, his heart pounding in his throat.\n\nYe Yijie watched the sonar waterfall display slowly stabilize, releasing a long, shuddering breath: \"The sperm whale is ascending toward shallower water with its prey. The giant squid's acoustic signature has vanished.\"\n\nDu Hailan slowly drew her hands back from the controls, turning to face Leo, Ye Yijie, and Jiang Jiang. A brilliant smile of deep admiration lit up her sun-kissed face: \"Those three hydraulic relief strokes, followed by that ultrasonic pulse... that coordination was sharper than that of veteran deep-sea sailors!\"\n\nLeo exchanged a smile with his teammates, glancing down at the telemetry: \"What is our current depth?\"\n\nHailan checked the depth sounder, her expression turning solemn once more: \"2,150 meters. We have successfully crossed the seamount acoustic shadow and entered the outer rim of the abyssal plain on the ocean's second terrace.\"\n\n*Hummm...*\n\nRight then, within the quieted hydrophone headset, the familiar mechanical cadence sounded once more.\n\nThis time, free from seamount occlusion and acoustic shadows, the signal rang out crisp and true, striking directly against their hearts—\n\n*Tick... clack... tap...*\n\n*Tick... clack... tap...*\n\nThe pulse interval continued to contract by imperceptible fractions. That deep-sea heart beating at the bottom of the ten-thousand-meter trench was calling out to them in an accelerating, runaway rhythm.\n\nLeo looked up, gazing into the bottomless, perpetual midnight beyond the viewport: \"Inspect the starboard manipulator hydraulic loops and trim the buoyancy bladders. Toward the first seabed relay station of Clocktower Zero—full speed ahead!\"\n",
          "stemKnowledge": [
            "深海巨型化現象（Deep-Sea Gigantism）：極限低溫、超高靜水壓與稀缺食物促使生物增大體積以降低表面積體積比、維持極低代謝率並儲備能量。",
            "抹香鯨深潛生理適應：肌肉高濃度肌紅蛋白儲氧、肺泡完全塌縮防止減壓病、心率極限驟降，以及頭部數噸『鯨蠟（Spermaceti oil）』相變冷凝增密下潛與升溫融化上浮機制。",
            "帕斯卡反向洩壓與防抱死機制：深海液壓伺服迴路在超載時透過快速旁通回流抽空油腔，實現金屬關節無阻力自由擺動，化解外力撕扯破壞。",
            "頭足類平衡囊（Statocyst）與聲致驅散：利用定向高頻超聲波干擾水下無脊椎動物的重力與方向感受囊，實現非致命聲學自衛與脫困。"
          ]
        },
        {
          "id": 6,
          "file": "第06章_落向午夜的黃銅流星.md",
          "title": "第 06 章　落向午夜的黃銅流星",
          "enTitle": "Chapter 06 — The Brass Meteor Falling into Midnight",
          "titleEn": "Chapter 06 — The Brass Meteor Falling into Midnight",
          "shortTitle": "落向午夜的黃銅流星",
          "concept": "四千米午夜深淵 × 第一號深淵中繼鐘台 × 飛車擒縱輪差動鎖定 × 重力因數修正",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在擒縱輪即將因飛車解體引發大地震倒數歸零的最後三分鐘內，如何精確修正馬里亞納海溝重力異常並透過十二瓣梅花卡盤完成深淵自鎖對位？",
          "summary": "『鸚鵡螺-IV 號』突破四千米午夜深淵，水壓逼近四百個大氣壓。眾人在深海玄武岩平臺上赫然發現了沉睡半個世紀、高達七公尺的第一號深淵中繼鐘台！然而，海溝板塊剪切應力已傳導至基座，重力擒縱輪正在瘋狂『飛車』空轉，軸承面臨解體，地震倒計時僅剩最後三分鐘！誠浩冷靜指揮，海嵐精準懸停，旖緁計算海溝重力異常修正值，誠浩與將江手動旋轉重型對位絞盤，在最後十五秒奇蹟般將鈦鋯合金信標卡盤以帕斯卡差動鎖死在主軸上，馴服狂暴飛車，成功鎖定第一級地殼滑移，重置延長四十八小時！第一卷壯麗完結，深淵底層傳來黑煙囪的咆哮，黃銅流星決然向第二卷挺進！",
          "summaryEn": "Nautilus-IV pierces the 4,000-meter midnight abyss, enduring hydrostatic pressures near 400 atmospheres. Atop a volcanic basalt terrace, the crew discovers the monumental seven-meter Abyssal Relay Clocktower One, slumbering for half a century! Yet tectonic shear stresses have deformed its pedestal, causing the escapement wheel to spin in a violent, runaway blur—only three minutes remain before catastrophic rupture! Leo maintains steel resolve, Hailan achieves millimeter hover stability, Yijie computes local gravity anomaly corrections, and Leo and Jiang Jiang manually crank the alignment winch. With fifteen seconds left, the titanium-zirconium beacon disc locks flawlessly into the arbor spline, taming the runaway beast, securing the primary tectonic fault, and buying a crucial 48-hour extension! As Volume One draws to its epic close, the distant roar of black smokers echoes from the abyss, beckoning the brass meteor toward Volume Two!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第六章：落向午夜的黃銅流星\n\n當「鸚鵡螺-IV 號」的深度計跳過三千公尺時，世界上最後一絲與人類熟悉的大洋表面相關聯的痕跡，都徹底灰飛煙滅了。\n\n舷窗外不再有游弋的巨鯨，不再有成群閃爍虹彩的櫛水母，甚至連隨處漂浮的「海洋雪」碎屑都在這極致的死寂中沉澱得稀疏黯淡。這裡是大洋的深處——午夜帶（Bathypelagic Zone）與深淵帶（Abyssopelagic Zone）的過渡邊緣。\n\n沒有光，沒有聲音，沒有溫度的起伏。四周的海水黑得宛如最純淨的黑曜石，吞噬了一切視線。\n\n唯有儀表板上的數字在無情地跳動著：\n\n「深度：三千八百五十公尺……三千九百二十公尺……」\n\n「外殼承受靜水壓強：三百九十二個大氣壓。」\n\n葉旖緁的指尖輕輕按在冷凝著一層細密水霧的鈦合金艙壁上。在將近四百公斤每平方公分的恐怖負載下，厚達數十公分的超高強度雙球殼正在承受整座大洋的浩瀚重量。即便隔著厚重的複合吸音降噪層，眾人依然能隱約聽見金屬晶格在宏觀壓力下極其緩慢形變所發出的微弱低鳴——那是一種令人靈魂發顫的深沉沉吟。\n\n「這是鈦晶格的正常自適應彈性微應變，」誠浩沉穩地開口，打破了艙內的凝重氣氛，「爺爺在設計筆記裡寫過，金屬是有生命的。在四千米的深海，它不是在被壓垮，而是在和整個大洋的重力達成共諧。」\n\n將江低頭看著自己腳下那枚在幽暗光芒中泛著金屬冷光的機械信標卡盤，喉嚨微微發乾：「誠浩……你說五十年前，你爺爺和老杜船長他們，是怎麼把那座『深海零號鐘台』安置在這種連鋼鐵都會被捏扁的地方的？」\n\n杜海嵐抬起眼眸，手掌溫柔地撫摸過駕駛台邊緣那一道道由黃銅鉚釘固定著的儀表框。\n\n「那是整整兩代深海工程師的極限心血，」海嵐輕聲說道，聲音裡帶著無盡的自豪與緬懷，「一九七四年，甚至還沒有現代高精度衛星定位。老一輩探險家們依靠最原始的水下聲學浮標、重力落體絞盤，以及由因瓦合金和航太鈦金屬手工切削出的機械鐘機，一次次在狂暴的西太平洋風浪中向萬米海溝盲投。」\n\n海嵐伸手指向前方主控台的全息海底地形掃描儀：「在馬里亞納海溝主斷裂帶的入口處，也就是水深四千公尺的第二階梯玄武岩斷崖上，矗立著『第一號深淵中繼鐘台』。它是深海零號鐘台的神經突觸——唯有在它身上精確裝入信標卡盤，校準第一級擒縱調速輪，才能暫時鎖定板塊釋放閥，為我們打開通向海溝最底部的深淵大門！」\n\n「滴——滴——滴——」\n\n儀表板突然發出一連串清脆的相位鎖定提示音！\n\n皮可猛地站起身子，金屬尾巴高高翹起，雙眼中的深藍光束在全息地貌圖上投射出一個不斷旋轉的金色光標。\n\n「汪！水聽器基陣捕捉到高純度工頻諧波！頻率一百一十赫茲，信號強度上升十八分貝！」皮可興奮地匯報，「聲源距離我們正前方一千兩百米，深度四千零五十公尺！信標方位角：零-四-五！」\n\n「找到了！」將江激動地一拳砸在手掌心。\n\n「海嵐，打開下視聲納與超高靈敏度微光相機。」誠浩立即下達指令，「減速下潛，啟動姿態平衡油囊，準備進入懸停進場程序！」\n\n「明白！主壓載油囊微量回油，推進器切換為脈衝姿態微調模式！」\n\n海嵐雙手穩健地扳動操縱桿。潛艇尾部的雙向向量噴口噴出幾股微弱的水流，這艘重達二十噸的黃銅潛艦宛如一片在虛空中緩緩落下的金色落葉，輕盈而堅定地朝著聲源座標靠攏。\n\n五百米……三百米……一百米……\n\n「功率全開，超深海廣角探照燈！」\n\n「轟——」\n\n強大的氙氣白光如同天神劈開混沌的利劍，瞬間撕裂了這片沉寂了億萬年的四千米午夜深淵。\n\n舷窗外，原本無邊無際的黑幕驟然退去。\n\n一座震撼到令人窒息的海底巨構，在探照燈的雪亮光芒中，巍然展現於眾人眼前！\n\n那是一座坐落在黑色玄武岩海底平臺上的巨大黃銅機械鐘塔！\n\n鐘塔通體由特種耐腐蝕航太鈦合金與高密因瓦黃銅鑄造而成，高達七公尺。雖然在深海沉睡了半個世紀，外殼上覆蓋著一層薄薄的深海錳結核與白色的海洋沉積物，但那龐大的外露行星齒輪組、粗壯如巨樹的耐壓支柱，以及中央那一枚直徑超過一公尺的巨大重錘擺輪，依然散發著令人心醉神迷的工業機械之美！\n\n「這就是……第一號深淵中繼鐘台！」葉旖緁推了推眼鏡，眼中泛起激動的淚光。\n\n然而，當鏡頭拉近鐘塔的核心機構時，所有人的呼吸再次一緊。\n\n鐘台頂部那枚龐大的重力擒縱輪正在以令人心驚肉跳的速度瘋狂空轉！\n\n「咔咔咔咔咔咔咔——！！」\n\n狂暴的機械撞擊聲透過水聽器震得眾人耳膜發疼。原本應該每二點五秒勻速敲擊一次的重錘擒縱叉，此時竟然被一股看不見的巨力擠壓得劇烈震顫，擺輪每一次迴旋都濺起細微的深海氣泡，軸承座周圍的防護外殼已經出現了三道肉眼可見的疲勞微裂紋！\n\n「板塊剪切應力已經傳導到中繼基座了！」誠浩臉色驟變，指著鐘塔基座下方深不見底的巨大地殼裂縫，「海溝深處的岩石正在滑移，如果這枚擒縱輪在三分鐘內飛車解體，整座中繼站的差速傳動鏈將徹底崩塌，大地震倒計時將立刻歸零！」\n\n「倒計時只剩最後三分鐘？！」將江的臉色瞬間煞白。\n\n「我們必須立刻完成卡盤對位咬合！」誠浩沒有絲毫慌亂，眼神如深海般冷靜堅毅，「海嵐，將潛艇懸停在鐘台正上方一點五米處！旖緁，計算海底重力異常因數與水流補償量！將江，跟我來操作應急手動對位絞盤！」\n\n「收到！」\n\n「計算完成！馬里亞納海溝重力加速度為每秒平方九點八二米，相對標準值偏差千分之二點三，擺輪自頻修正係數已載入卡盤伺服器！」葉旖緁的指尖在光幕上拉出一道道耀眼的綠色運算軌跡。\n\n海嵐咬緊牙關，雙手將推進器懸停搖桿穩如磐石地鎖定在中心。在四千米深海暗流的衝擊下，二十噸重的「鸚鵡螺-IV 號」竟然像被焊死在虛空中一樣，紋絲不動地懸停在瘋狂旋轉的擒縱機構正上方！\n\n誠浩一把抓起那枚沉重冰冷的鈦鋯合金深淵信標卡盤，將其卡入潛艇底部專用的高壓釋放導軌。\n\n「將江，轉動齒條絞盤！對準鐘台主軸的十二瓣梅花卡槽！」\n\n「好嘞！！」將江大吼一聲，粗壯的雙臂猛然發力，重型黃銅絞盤發出「嘎吱嘎吱」的沉悶受力聲。\n\n在潛艇底部，一枚機械抓手穩穩推動著信標卡盤，穿透冰冷刺骨的海水，直奔那枚瀕臨失控的飛車齒輪軸心！\n\n五公分……三公分……一公分！\n\n「軸線偏角千分之四度！無法自然入齒！」皮可發出刺耳的警告，「距離擒縱輪軸承斷裂倒數：十五秒！」\n\n「不要慌！」誠浩閉上眼睛，耳畔只剩下那狂暴的齒輪轟鳴。\n\n在鹿陽鎮老閣樓裡維修過上千座鐘錶的肌肉記憶，在這一瞬間與整座太平洋的深海重力融為一體。他在心中默數著齒輪掠過缺口的相位差：\n\n「三……二……一……帕斯卡差動鎖定，落位！」\n\n誠浩猛然拍下主釋放手柄！\n\n「喀嚓——！！」\n\n一聲震撼整片海底平原的清脆金屬咬合聲驟然炸響！\n\n那枚鈦鋯合金信標卡盤的十二枚合金銷釘，分毫不差、完美無瑕地嵌進了中繼鐘台的核心主軸！\n\n卡盤內部的重型差速發條瞬間釋放，龐大的阻尼液壓扭矩如同一雙無形的大手，在零點一秒內死死扼住了瘋狂空轉的擒縱輪！\n\n「滋————」\n\n飛車的擺輪發出一陣尖銳的減速摩擦聲，隨即被信標卡盤精確的擒縱機構強行拉回了原本的節奏。\n\n「咔……嗒。」\n\n「咔……嗒。」\n\n沉穩、厚重、莊嚴。\n\n兩點五秒一拍。\n\n那座在深淵中狂暴顫抖的龐大黃銅鐘塔，在信標卡盤的調速下，如同被馴服的遠古巨獸，重新恢復了它五十年前吞吐大洋風雲的從容與威嚴！\n\n鐘台基座兩側那原本劇烈噴湧高壓泥流的應力釋放閥，伴隨著齒輪的自鎖咬合，發出一陣沉悶的機械排氣聲，緩緩閉合鎖定，將狂暴的地殼滑移硬生生遏制在了臨界線之內！\n\n「成功了……」將江整個人癱軟在絞盤旁，大汗淋漓地喘著粗氣，「我們……我們把它停住了？！」\n\n主控台上，原本跳動的紅色危險警報悄然熄滅，取而代之的是柔和而深邃的常態幽藍。\n\n「第一號中繼鐘台已完全復位，」葉旖緁看著全息屏上的應變曲線，臉上綻放出無比燦爛的笑容，「板塊第一級剪切應力已被成功鎖定！倒計時……被重置延長了四十八小時！」\n\n「啪！」\n\n四隻年輕的手掌在球艙中央重重地擊在一起，皮可更是開心地圍著眾人歡快地轉圈吠叫。\n\n杜海嵐長長地舒了一口氣，望著舷窗外那座在強光照耀下宛如黃金鑄造的深海奇蹟，眼中泛起深情的微光：「誠浩，旖緁，將江……你們看。」\n\n眾人靠上前去。\n\n只見在第一號中繼鐘台那厚重的黃銅底座正中央，鐫刻著一行歷經半個世紀高壓海水洗禮卻依然清晰入骨的銘文：\n\n**「向下，向更深處。唯有真理與彼此的誓約，比一萬米的海水更沉重。——深藍深淵專案 1974」**\n\n那是爺爺和老杜船長留下的誓約。\n\n而今天，他們的後輩駕駛著嶄新的黃銅深潛艇，跨越了五十年光陰，將這份守護大地的誓約牢牢接續在手心！\n\n「第一卷的任務，我們完成了。」誠浩凝視著銘文，胸膛劇烈起伏著，眼神中燃燒起更為熾熱的光芒。\n\n「但這只是第一步，」杜海嵐調出海圖，指向中繼鐘台身後那條直墜而下、通向無底黑淵的巨型海底大斷裂，「第一號中繼站只能鎖定最上層的板塊應變。真正的核心主控台——『深海零號鐘台』本體，安置在海溝深處七千公尺的阿比斯平原黑煙囪火山帶之下。」\n\n彷彿是在印證海嵐的話，潛艇下方那深不見底的漆黑深淵中，突然傳來了一陣宛如地心沉睡巨龍翻身般的低沉隆隆聲！\n\n那是溫度高達三百八十攝氏度的超臨界熱液噴泉在深淵裂隙中噴湧的咆哮，那是海底泥流與濁浪翻滾的前奏！\n\n「鸚鵡螺-IV 號動力檢測完畢，雙球殼結構完整度百分之百，阿基米德油囊補償正常。」誠浩握住主推進手柄，回頭看向他的夥伴們，「大家，準備好向第二卷的深淵火山挺進了嗎？」\n\n「隨時可以出發！」將江舉起扳手，信心百倍。\n\n「科學計算完畢，隨時為深海盲航護航。」葉旖緁微微一笑。\n\n「汪！皮可的聲納探測器全頻段就緒！」\n\n杜海嵐推上全速進車手柄，英姿颯爽：「那就讓這艘黃銅流星，徹底劃破午夜吧！」\n\n在四千米漆黑幽閉的深淵王座前，「鸚鵡螺-IV 號」昂起艦首，尾部推進器爆發出耀眼的金色光環，載著少年們無畏的夢想與誓言，呼嘯著朝向那更加滾燙、更加深邃的萬米海淵，全速俯衝而去！\n\n（第一卷《幽光之海的下潛者》全六章·完結）\n",
          "contentEn": "# Adventure Gear: Beacons of the Mariana Abyss\n\n## Chapter 6: The Brass Meteor Falling into Midnight\n\nWhen the depth sounder aboard the *Nautilus-IV* crossed past the three-thousand-meter mark, the very last vestiges linking the crew to the familiar sunlit surface of humanity's world vanished into utter oblivion.\n\nBeyond the viewports, there were no longer any roaming cetaceans, no drifting clusters of iridescent ctenophores, and even the pervasive flakes of \"marine snow\" had precipitated away, sparse and subdued within this absolute desolation. This was the profound oceanic deep—the liminal threshold between the Bathypelagic Zone and the Abyssal realm.\n\nNo light, no sound, and no thermal fluctuations. The surrounding water was black as the purest obsidian, mercilessly devouring all sight.\n\nOnly the digital telemetry across the console flickered forward with dispassionate precision:\n\n\"Depth: 3,850 meters... 3,920 meters...\"\n\n\"External hydrostatic pressure loading: 392 atmospheres.\"\n\nYe Yijie gently pressed her fingertips against the titanium alloy hull, cool with a fine sheen of condensed moisture. Under the staggering load of nearly four hundred kilograms per square centimeter, the ultra-high-strength dual spherical pressure hulls, tens of centimeters thick, were bearing the colossal weight of the entire Pacific. Even dampened by acoustic insulation layers, the crew could still discern the faint, haunting groan of the metallic crystal lattice undergoing minuscule viscoelastic strain under macro-scale loading—a deep, soul-stirring vibration.\n\n\"This is the normal, self-adaptive micro-elastic strain of the titanium lattice,\" Leo spoke with quiet composure, dispelling the tense silence inside the cabin. \"Grandfather wrote in his engineering journals that metal is alive. At four thousand meters beneath the sea, it is not being crushed; it is harmonizing with the gravitational field of the entire ocean.\"\n\nJiang Jiang looked down at the mechanical beacon disc at his feet, gleaming with a cold metallic luster in the dim cabin light, his throat going dry: \"Leo... how on earth did your grandfather and Captain Du manage to anchor that 'Deep Sea Clocktower Zero' in a place like this fifty years ago, where even raw steel gets crumpled like paper?\"\n\nDu Hailan lifted her gaze, her hand gently tracing the brass-riveted borders framing the flight console.\n\n\"That was the culmination of extreme dedication from two full generations of deep-sea engineers,\" Hailan murmured softly, her voice laden with quiet pride and remembrance. \"In 1974, there were no satellite navigation systems. The pioneer explorers relied on primitive acoustic transponders, gravity coring winches, and clockwork mechanisms hand-machined from invar alloy and aerospace titanium, dropping blind probes into the ten-thousand-meter abyss amid raging Western Pacific typhoons.\"\n\nHailan pointed toward the holographic bathymetric scanner across the forward console: \"Right at the entrance to the primary Mariana fault rift, atop the basalt terraces of the four-thousand-meter secondary shelf, stands 'Abyssal Relay Clocktower One.' It is the neural synapse of Clocktower Zero—only by slotting the beacon disc into its core and calibrating its primary escapement wheel can we temporarily lock the tectonic strain-release valves, buying us time to unlock the gate to the trench floor!\"\n\n*Beep—beep—beep—*\n\nThe console abruptly chimed with a crisp sequence of acoustic phase-lock alerts!\n\nPiko leapt to its paws, its brass tail rigid, the dual deep-blue beams from its optical sensors painting a rapidly rotating golden reticle over the holographic bathymetry.\n\n\"Woof! Hydrophone array has locked onto a pure power harmonic! Frequency: 110 hertz; signal intensity up by eighteen decibels!\" Piko reported eagerly. \"Acoustic source located 1,200 meters directly ahead at a depth of 4,050 meters! Beacon bearing: zero-four-five!\"\n\n\"We found it!\" Jiang Jiang slammed his fist into his palm with triumphant vigor.\n\n\"Hailan, activate down-looking active sonar and ultra-sensitive low-light imaging,\" Leo commanded swiftly. \"Decelerate descent, engage attitude-trimming oil bladders, and prepare for hover-docking procedures!\"\n\n\"Understood! Minor oil return on main ballast; thrusters switched to pulsed vector micro-trim mode!\"\n\nHailan handled the flight yokes with steady hands. The bidirectional vector nozzles at the stern hissed with faint water jets, and the twenty-ton brass-sheathed submersible glided forward like a golden leaf descending in cosmic void, closing gently toward the beacon coordinates.\n\nFive hundred meters... three hundred meters... one hundred meters...\n\n\"Power up all ultra-deep-sea wide-angle floodlights to maximum!\"\n\n*BOOM—*\n\nA brilliant spear of xenon illumination pierced the primordial gloom, violently tearing open the four-thousand-meter midnight abyss that had rested in silence for hundreds of millions of years.\n\nBeyond the viewports, the boundless black shroud peeled away.\n\nA monumental, breath-stopping undersea monolith materialized majestically in the floodlights' glare right before their eyes!\n\nIt was a colossal brass clocktower resting upon an ancient volcanic basalt plateau!\n\nForged from anti-corrosion aerospace titanium and high-density invar brass, the tower soared seven meters into the water column. Though it had slept half a century beneath the abyss, clad in a delicate patina of ferromanganese nodules and marine sediment, its exposed planetary gear trains, tree-trunk-thick pressure pylons, and central counterweight balance wheel over a meter in diameter radiated the breathtaking beauty of industrial clockwork engineering!\n\n\"This is... Abyssal Relay Clocktower One!\" Ye Yijie pushed her glasses up, tears of awe shimmering in her eyes.\n\nHowever, as the camera zoomed into the core escapement of the tower, everyone's breath hitched once more.\n\nThe massive gravitational escapement wheel atop the clocktower was spinning out of control in a frenzied, runaway blur!\n\n*CLACK-CLACK-CLACK-CLACK-CLACK—!!*\n\nViolent mechanical percussions resonated through the hydrophones, vibrating painfully against their eardrums. The heavy deadbeat pallet fork, meant to tick steadily once every 2.5 seconds, was shaking violently under crushing external loads; each oscillation kicked up micro-bubbles in the brine, and three visible fatigue micro-cracks had already spiderwebbed across the bearing housing!\n\n\"The tectonic shear stress has propagated directly into the relay pedestal!\" Leo's expression shifted dramatically, pointing toward the bottomless crustal fissure beneath the foundation. \"The bedrock deep in the trench is slipping. If this escapement wheel flies apart in runaway failure within the next three minutes, the entire differential transmission train will collapse, and the earthquake countdown will snap straight to zero!\"\n\n\"Only three minutes left?!\" Jiang Jiang went deathly pale in an instant.\n\n\"We have to align and mate the beacon disc right now!\" Leo maintained unflinching composure, his gaze as deep and steady as the abyss. \"Hailan, hover the submarine 1.5 meters directly above the clocktower crown! Yijie, compute the local gravitational anomaly and hydrodynamic drift compensations! Jiang Jiang, man the manual alignment winch with me!\"\n\n\"Roger that!\"\n\n\"Calculations complete! Local gravitational acceleration in the Mariana Trench is 9.82 m/s², an anomaly deviation of +0.23%; natural balance frequency correction factors loaded into disc servos!\" Ye Yijie's fingers traced glowing streaks of calculations across the screen.\n\nHailan gritted her teeth, locking the hover thruster sticks rock-steady in the center. Under the battering currents of the four-thousand-meter deep, the twenty-ton *Nautilus-IV* hung as though welded into empty space, hovering motionless right over the runaway escapement!\n\nLeo grabbed the heavy, chilled titanium-zirconium abyssal beacon disc, sliding it into the high-pressure deployment rail beneath the hull keel.\n\n\"Jiang Jiang, crank the rack-and-pinion winch! Align with the twelve-petal clover spline of the main arbor!\"\n\n\"On it!!\" Jiang Jiang bellowed, throwing his weight into the brass winch handles as the gears groaned under mechanical strain.\n\nBeneath the submarine, a mechanical grabber guided the disc down through the freezing water, heading straight for the axle of the runaway wheel!\n\nFive centimeters... three centimeters... one centimeter!\n\n\"Axis tilt angle: 0.004 degrees off! Spline teeth cannot seat!\" Piko barked a shrill warning. \"Countdown to escapement bearing structural rupture: fifteen seconds!\"\n\n\"Don't panic!\" Leo closed his eyes, tuning out everything except the furious roar of the runaway gear teeth.\n\nHis muscle memory from repairing thousands of antique clocks in the old attic of Luyang coalesced with the gravitational force of the Pacific abyss. In his mind, he counted down the phase difference as the gear notches flashed past:\n\n\"Three... two... one... Pascal differential lock, drop in!\"\n\nLeo slammed the main release lever down!\n\n*CLANG—!!*\n\nA resounding, crystalline metallic ring shattered the silence of the seabed plain!\n\nThe twelve alloy pins of the beacon disc seated flawlessly, without a millimeter of error, directly into the central arbor of Relay Clocktower One!\n\nThe heavy-duty differential spring within the disc unleashed its energy in an instant, its damped hydraulic torque acting like an invisible titan's grip, seizing the runaway escapement wheel within a tenth of a second!\n\n*SKRRRR—*\n\nThe runaway balance wheel shrieked in braking friction before being brought firmly back into cadence by the disc's precision escapement.\n\n*Tick... tock.*\n\n*Tick... tock.*\n\nSteady, resonant, and solemn.\n\nPrecisely once every 2.5 seconds.\n\nThe massive brass tower that had been shaking violently moments ago calmed under the regulation of the beacon disc, regaining the stoic, majestic composure with which it had governed the ocean fifty years prior!\n\nFlanking the clocktower pedestal, the emergency stress-relief valves that had been spewing turbid mud jets hissed as their bypass lines sealed shut, arresting the tectonic slip just shy of its catastrophic rupture limit!\n\n\"We did it...\" Jiang Jiang slumped against the winch, drenched in sweat and panting heavily. \"We... we actually stopped it?!\"\n\nAcross the main console, the flashing crimson alarms quietly dissolved, replaced by a soothing, deep ocean azure.\n\n\"Relay Clocktower One has fully restored operational rhythm,\" Ye Yijie smiled radiantly, watching the strain curves flatten on the holographic display. \"The primary tectonic shear stress has been successfully locked! Our countdown... has been reset and extended by forty-eight hours!\"\n\n*Clap!*\n\nFour young hands clasped tightly in a triumphant high-five at the center of the pressure sphere, while Piko barked in joyous circles around their legs.\n\nDu Hailan exhaled a long breath of relief, gazing out through the viewport at the golden wonder glowing in their floodlights, her eyes glistening with deep emotion: \"Leo, Yijie, Jiang Jiang... look.\"\n\nThe team leaned close to the viewport.\n\nThere, engraved deep into the solid brass base of Relay Clocktower One, was an inscription that had weathered half a century of high-pressure brine, standing proud and indelible:\n\n**\"Downward, ever deeper. Only truth and our sacred pledge weigh heavier than ten thousand meters of ocean. — Project Deep Blue Abyss, 1974.\"**\n\nThat was the pledge left behind by Leo's grandfather and Captain Du.\n\nAnd today, their successors had piloted a new brass submersible across half a century of time, clasping that guardianship covenant firmly in their hands!\n\n\"Our mission for Volume One is accomplished,\" Leo murmured, his chest rising and falling as a fierce, brilliant spark ignited within his eyes.\n\n\"Yet this is only the first step,\" Du Hailan opened the bathymetric chart, pointing beyond the clocktower toward the yawning, bottomless trench chasm plunge: \"Relay One can only lock the uppermost crustal strains. The true heart—Deep Sea Clocktower Zero itself—is anchored seven thousand meters down, beneath the hydrothermal black smoker volcanic belt of the abyssal plain.\"\n\nAs if answering Hailan's words, a low, tectonic rumble surged upward from the ink-black depths beneath them, like an ancient leviathan stirring in the planet's mantle!\n\nIt was the roar of supercritical 380°C hydrothermal vents discharging into the deep crustal rifts, the opening overture to turbulent mudflows and boiling abyssal depths!\n\n\"Nautilus-IV propulsion check complete; dual-hull structural integrity at 100%; Archimedean oil compensation nominal.\" Leo gripped the main descent thruster controls, turning back to his companions: \"Everyone, are you ready to plunge into the volcanic depths of Volume Two?\"\n\n\"Ready whenever you are!\" Jiang Jiang hoisted his wrench with boundless bravado.\n\n\"Scientific models computed; ready to navigate through the blind abyss,\" Ye Yijie smiled.\n\n\"Woof! Piko's multi-beam sonar is locked and loaded across all frequencies!\"\n\nDu Hailan engaged the full forward throttle, radiating the bold spirit of an ocean explorer: \"Then let this brass meteor blaze clean through the midnight!\"\n\nBefore the black, monolithic throne of the four-thousand-meter abyss, the *Nautilus-IV* raised its bow. Twin propulsion rings flared gold at the stern as the submersible plunged into the scalding, unfathomable trench depths, chasing the great abyss with the fearless dreams and unyielding vows of youth!\n\n(Volume 1: *Divers of the Luminescent Sea* — Complete across all 6 Chapters)\n",
          "stemKnowledge": [
            "四千米午夜帶（Bathypelagic）極限環境：400 個大氣壓超高靜水載荷、水溫近冰點、完全光學死寂與深海沉降底層特徵。",
            "重力擒縱輪飛車與阻尼鎖定機制：擒縱叉受外部應變擠壓失效引發能量非受控爆發（飛車），利用阻尼液壓扭矩與精密差動棘爪實現動態自鎖制動。",
            "海溝重力異常（Gravity Anomaly）物理學：板塊俯衝帶質量分佈不均勻造成局部重力加速度 g 產生微小偏離，深海重錘鐘擺需進行精確重力因數修正以維持頻率精準。",
            "耐腐蝕因瓦合金與航太鈦金屬高載荷配合：在極端低溫與強電解鹽高壓深海中，防止雙金屬電偶腐蝕與微應變形變的關鍵材料工程。"
          ]
        }
      ]
    },
    {
      "id": "book-28",
      "seriesId": "series-11",
      "title": "冒險齒輪：馬里亞納的深淵信標 2：黑煙囪與沸騰深淵",
      "enTitle": "Adventure Gear: Beacons of the Mariana Abyss Vol 2: Black Smokers and the Boiling Abyss",
      "subtitle": "濁流泥浪與熱液溫差蓄能",
      "enSubtitle": "Turbid Mudflows and Hydrothermal Thermoelectric Storage",
      "status": "全 6 章已完結",
      "statusColor": "emerald",
      "coverTag": "🔥 第二卷全 6 章完結",
      "author": "鹿陽發明小隊",
      "targetAge": "9～15 歲適讀",
      "totalWords": 36000,
      "totalChapters": 6,
      "description": "成功鎖定第一號深淵中繼鐘台後，誠浩、葉旖緁、將江、皮可與杜海嵐駕駛『鸚鵡螺-IV 號』衝出四千米階梯，向深海阿比斯平原全速挺進！然而，板塊隱沒帶引發的大型海底重力濁流如雪崩般席捲而來，高濃度泥漿風暴吞噬了一切聲光信號！少年們在盲航中化解泥流衝擊，穿過黑煙囪沸騰深淵，尋找失落的五十年探勘船骸與深海零號鐘台本體！",
      "chapters": [
        {
          "id": 7,
          "file": "第07章_阿比斯平原的泥流濁浪.md",
          "title": "第 07 章　阿比斯平原的泥流濁浪",
          "enTitle": "Chapter 07 — The Turbid Mudflows of the Abyssal Plain",
          "titleEn": "Chapter 07 — The Turbid Mudflows of the Abyssal Plain",
          "shortTitle": "阿比斯平原的泥流濁浪",
          "concept": "重力濁流動力學 × 聲學體散射全盲 × 無源光纖陀螺慣性導航 × 鮑馬序列羽流滑翔",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在聲光被濁流體散射徹底剝奪的零能見度下，如何利用流體分層結構與阿基米德浮力油囊讓潛艇『騎』在濁流羽流頂部盲航脫險？",
          "summary": "『鸚鵡螺-IV 號』告別四千米第一號中繼站，向阿比斯平原俯衝，突遭板塊滑坡引發的毀滅性『海底重力濁流』襲擊！每小時 65 公里的高密度泥漿風暴遮蔽了一切光線，聲納因體散射徹底失效，推進器瀕臨被泥沙卡死。危急關頭，誠浩解析鮑馬序列流體分層規律，果斷切斷推進器封閉外循環，旖緁啟用光纖陀螺儀無源慣導，將江全力注油提升阿基米德油囊微正浮力，成功讓潛艇『騎』在濁流羽流層頂部高速滑翔脫困！衝出濁流後，眼前赫然矗立起壯麗恐怖的 380°C『黑煙囪熱液噴口群』，第二卷冒險正式爆發！",
          "summaryEn": "Departing Relay Clocktower One, Nautilus-IV dives toward the Abyssal Plain, only to be ambushed by a catastrophic submarine gravity-driven turbidity current! Roaring at 65 km/h, the hyper-dense mud avalanche completely blinds all optical and acoustic sensors through intense volume scattering, threatening to seize the thrusters. Decisively analyzing the Bouma Sequence fluid stratification, Leo cuts propulsion and seals cooling intakes, Yijie engages fiber-optic gyroscopic inertial dead reckoning, and Jiang Jiang trims positive micro-buoyancy via the Archimedean oil bladders. The submarine surfs atop the low-shear buoyant plume out of the canyon! Breaking clear of the storm, they are greeted by the awe-inspiring, brooding spires of 380°C hydrothermal black smokers—igniting the core adventure of Volume Two!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第七章：阿比斯平原的泥流濁浪\n\n告別了矗立在四千零五十公尺玄武岩懸崖上的第一號深淵中繼鐘台，「鸚鵡螺-IV 號」像一顆通體閃耀著微弱金光的深海流星，筆直墜向更深、更寂寥的大洋阿比斯平原（Abyssal Plain）。\n\n這裡的水深已經突破了四千五百公尺。\n\n舷窗外的海水密度在四百五十個大氣壓的重壓下變得黏滯而沉重。在主探照燈的光柱中，原本清澈幽暗的水體開始飄蕩起一層又一層肉眼可見的灰褐色微粒——那不是之前見過的輕柔「海洋雪」，而是某種顆粒粗糙、帶有強烈礦物反光的懸浮粉砂。\n\n「周圍沉積物濃度在急遽上升，」葉旖緁緊盯著水質濁度光譜儀，白皙的前額微微蹙起，「光學透射率在過去三分鐘內從百分之九十八跳崖式下跌到了百分之四十二。這不合常理，深海平原通常極度平靜，沉積物沉降速率極慢，怎麼會有如此大量的泥沙漂浮？」\n\n坐在主駕駛位上的杜海嵐猛地將手掌貼在側向水流傳感器上，眼神瞬間警惕到了極點。\n\n「不是漂浮，旖緁，」海嵐的聲音緊繃而短促，「水流在倒灌！海床底層有極強的重力拖拽效應，流速正在以每秒零點五米的速度瘋狂飆升！」\n\n「汪！高危警報！底層海床發生大面積剪切斷裂！」\n\n機械柴犬皮可雙耳高頻震顫，背部散熱片驟然泛起刺眼的猩紅：「側掃聲納檢測到上方大陸坡邊緣突發規模十萬立方米的海底滑坡！滑坡體混入海水形成高密度重度流，正以每小時六十五公里的時速沿著海山峽谷奔騰而下！」\n\n「每小時六十五公里？！」趴在窗邊的將江倒吸一口涼氣，臉色煞白，「在四千米深的海底……泥巴能跑得比高速公路上的汽車還快？！」\n\n「這不是普通的泥水，將江！這是深海最致命的地質風暴——重力濁流（Turbidity Current）！」\n\n誠浩猛地抓穩副駕駛扶手，高聲向眾人解釋：「數萬噸的泥沙與碎石在陡坡上滑塌，與海水劇烈混合，形成密度高達一點三的泥漿重液！在重力加速度的推動下，它會像雪崩一樣席捲整個海底峽谷，所過之處摧枯拉朽，能硬生生在玄武岩洋底切削出數百米深的巨大深槽！」\n\n話音未落，整座「鸚鵡螺-IV 號」突然猛地向下沉陷了數十公尺！\n\n「轟隆隆隆————！！」\n\n那不是空氣中傳播的雷鳴，而是數百萬噸泥沙、卵石與高壓稠水在玄武岩海槽中劇烈撞擊、摩擦、咆哮所引發的水下超低頻次聲波巨響！\n\n透過二十公分厚的錐形特種光學壓克力舷窗望去，原本璀璨深邃的深海世界在一瞬間被徹底抹殺。\n\n鋪天蓋地、宛如暴風雪般狂暴咆哮的灰褐色泥漿狂潮，如同滾滾沙塵暴，以排山倒海之勢從潛艇後上方呼嘯著奔湧而來！\n\n探照燈發出的強大氙氣白光，在撞上泥流的一瞬間被密密麻麻的懸浮礦物顆粒無死角反射，整座觀察窗瞬間變成了一片刺眼而空洞的慘白色！\n\n「光學視野完全喪失！零能見度！」海嵐大喊。\n\n「切換高頻主動避碰聲納！」誠浩果斷指揮。\n\n「不行！聲納螢幕一片雪白！」葉旖緁焦急地指著主控台，「泥沙顆粒的直徑恰好與高頻聲波波長匹配，產生了毀滅性的『聲學體散射（Volume Scattering）』！聲波剛發出去就被億萬顆泥粒反射回來，我們成了全盲的瞎子！」\n\n「警告！推進器吸水濾網壓差飆升至臨界極限！」皮可發出刺耳的警報，「濁流中的黏土正在堵塞磁力偶合無刷電機的導流罩，左側推進器轉速下降百分之四十！」\n\n整艘重達二十噸的鈦合金潛艦在狂暴的濁流漩渦中劇烈搖晃，發出「嘎吱、嘎吱」的沉重呻吟。\n\n更致命的是，濁流就像一雙無形的巨手，死死拖拽著潛艇，將它拉向下方深不見底的玄武岩撞擊斷崖！\n\n「推進器動力受阻，在這種強切變流場裡硬衝，電機在三十秒內就會徹底燒死抱死！」將江握著發條扳手，急得滿頭大汗，「誠浩，我們該怎麼辦？！」\n\n誠浩強迫自己冷靜下來。他的大腦如同一座高精密齒輪箱，急速拆解著眼前的物理危機。\n\n「冷靜！大家冷靜！」誠浩的目光在各個傳感器面板上飛速掃過，「泥流雖然狂暴，但它遵循流體力學的鮑馬序列（Bouma Sequence）分層定律！濁流的結構絕不是均勻的！」\n\n誠浩迅速調出底層都卜勒流速剖面儀（ADCP）的長波低頻反射數據：「你們看流速梯度！最底部是高密度碎屑構成的『顆粒泥石流層』，破壞力最強；中間是高速旋轉的『渦旋強切變層』；而在濁流的最頂層，是懸浮顆粒最細、流速相對均勻的『低剪切浮力羽流通道』！」\n\n「低剪切浮力羽流通道？」海嵐的眼睛猛地亮了起來，「你的意思是……我們不跟它硬抗，而是『騎』在濁流的背上？！」\n\n「沒錯！」誠浩斬釘截鐵地點頭，「海嵐，立刻關閉主推進器，收回所有外置機械臂，封閉外循環冷卻濾網，避免電機被泥沙卡死！」\n\n「推進器已切斷！外循環全面封閉！」海嵐乾脆俐落地扳下主電閘。\n\n「旖緁，啟動鈦合金核心內部的微型光纖陀螺儀（FOG）與三軸石英加速度計！在聲光全盲的環境下，我們全面依賴無源慣性導航（Inertial Navigation System）推算航位！」\n\n「光纖陀螺儀自校準完畢！無源航位推算誤差小於千分之三米每秒！」葉旖緁的雙手在控制台上化作殘影，全息屏上瞬間生成了一條由重力矢量推導出的立體虛擬航道。\n\n「將江！阿基米德浮力油囊，全功率注油補償！」誠浩高聲下令，「我們要讓潛艇的整體密度，精確調整到與濁流頂部羽流層完全一致的一點零八克每立方公分！」\n\n「交給我！一號、二號矽油泵注油全開！帕斯卡微補償，走你！！」\n\n將江怒吼著拉動液壓補償桿，重型高壓油泵發出沉悶而強勁的「咚咚」震顫，將數十升不可壓縮的矽油注入外置彈性油囊中。\n\n潛艇的排水體積隨之微微擴大，整艘「鸚鵡螺-IV 號」在深海中驟然獲得了強大的微正浮力！\n\n「嗡——」\n\n在失去了主推進器的推力後，奇蹟發生了。\n\n這艘黃銅深潛艇沒有在泥漿狂潮中翻滾墜落，而是像一片被巨浪托起的金色衝浪板，穩穩地脫離了下方狂暴撕扯的泥石流核心，直接「騎」在了濁流頂部那層相對平穩的懸浮羽流之上！\n\n四周咆哮的泥沙狂潮，竟然變成了推動潛艇全速前進的純天然重力引擎！\n\n「流速每小時五十八公里！潛艇姿態穩定，橫滾角小於二度！」皮可驚喜地匯報，「我們正在順著濁流峽谷以驚人的速度向深淵深處滑翔！」\n\n透過前方的慣性投影，少年們清晰地看見，潛艇貼著兩側刀削斧劈般的玄武岩峽谷峭壁，以毫釐之差疾馳掠過！\n\n這種在數千米深海泥流中盲航滑翔的極限體驗，讓每個人的心跳都飆升到了極致，胸膛中燃燒著難以言喻的冒險狂熱！\n\n「前方峽谷收窄！即將抵達阿比斯平原開闊海槽出口！」葉旖緁緊盯著坐標倒計時，「五……四……三……二……一，衝出去了！！」\n\n「呼————！」\n\n伴隨著一陣輕微的浮力跳動，周圍狂暴的泥流轟鳴在幾秒鐘內驟然退去。\n\n高密度的濁流順著海底峽谷的扇形出口沉降墜入了更深的平原底部，而「鸚鵡螺-IV 號」則憑藉著優秀的微正浮力，輕盈地滑出了混濁的泥漿風暴，重新懸浮在平靜冰冷的深海海水之中！\n\n「外置衝洗水閥啟動，清除視窗表面沉積物！」\n\n海嵐按下高壓清污開關，四道清水將舷窗上覆蓋的灰泥沖洗一空。\n\n隨後，她重新合上了主動力電閘，深海氙氣探照燈再次亮起。\n\n球艙內的所有人立刻迫不及待地撲到舷窗前，向下俯瞰——\n\n「天啊……這……這是什麼？！」將江的眼珠子差點瞪了出來，整個人徹底看呆了。\n\n只見在深達五千公尺的阿比斯平原海槽斷裂帶深處，完全不是眾人想像中荒涼冰冷的死寂世界。\n\n在那片永恆黑暗的地殼裂縫中，赫然矗立著數十根高達二三十公尺、通體漆黑的巨型地質煙囪！\n\n煙囪的頂部正以驚人的噴射速度，朝著冰冷的海水中滾滾狂噴著濃稠如墨汁、溫度高達三百八十攝氏度的黑色熱液礦物噴泉！\n\n黑色的煙霧在四千多米的極限水壓下翻滾升騰，煙囪周圍的玄武岩上，覆蓋著大片大片如雪原般潔白的深海盲蝦群，以及高達兩公尺、頂端如紅寶石般鮮紅的巨型管狀蠕蟲林！\n\n在黑煙囪熾熱的裂隙深處，甚至還隱隱透出一道道宛如地心烈火般的暗紅色地熱微光！\n\n「我們到了……」杜海嵐喃喃自語，眼中倒映著那壯麗而熾熱的深海奇蹟，「這就是西太平洋最壯觀、最危險的深淵心臟——海底黑煙囪熱液噴口群！」\n\n誠浩握緊了拳頭，胸中熱血沸騰。\n\n經歷了濁流的生死盲航，他們終於踏入了第二卷的冒險主戰場！\n\n在那高達三百八十度的沸騰深淵之下，更深處的秘密與爺爺留下的深海零號鐘台本體，正在等待著黃銅流星的到來！\n",
          "contentEn": "# Adventure Gear: Beacons of the Mariana Abyss\n\n## Chapter 7: The Turbid Mudflows of the Abyssal Plain\n\nBidding farewell to Abyssal Relay Clocktower One anchored high atop the basalt precipice at 4,050 meters, the *Nautilus-IV* plunged like a deep-sea meteor glowing with faint golden luminescence, hurtling straight toward the deeper, far more desolate expanse of the oceanic Abyssal Plain.\n\nThe depth sounder had already breached the 4,500-meter mark.\n\nUnder the crushing load of 450 atmospheres, the ambient seawater density had grown noticeably viscous and heavy. Within the main floodlight beams, the pristine, ink-dark brine began to drift with visible tiers of grayish-brown suspended particulate—not the delicate, ethereal flakes of \"marine snow\" seen earlier, but coarse, mineral-rich silt grains reflecting pinpricks of crystalline light.\n\n\"Ambient sediment concentration is escalating rapidly,\" Ye Yijie murmured, her eyes fixed on the water turbidity spectrometer, her fair brow furrowed in concern. \"Optical transmittance has plunged from ninety-eight percent down to forty-two percent over the last three minutes. This defies oceanic logic; the abyssal plains are typically dormant environments with minuscule sedimentation rates. How could such immense clouds of silt be suspended here?\"\n\nFrom the primary pilot station, Du Hailan flattened her palm against the lateral flow sensor console, her gaze sharpening to peak alert.\n\n\"It is not merely suspended, Yijie,\" Hailan's voice came taut and urgent. \"The currents are back-surging! There is an immense gravitational undertow gripping the seafloor, and current velocity is surging at half a meter per second!\"\n\n\"Woof! Critical danger alarm! Massive shear rupture detected across the basal seabed!\"\n\nPiko's triangular brass ears buzzed in high-frequency oscillation, the cooling louvers across its spine flaring an alarming crimson: \"Side-scan sonar has detected a catastrophic submarine landslide measuring one hundred thousand cubic meters along the upper continental slope margin! The collapsed sediment mass has entrained into seawater, forming a hyper-dense gravity current thundering down the submarine canyon at sixty-five kilometers per hour!\"\n\n\"Sixty-five kilometers per hour?!\" Pressed against the viewport, Jiang Jiang gasped, his face draining of color. \"Four thousand meters beneath the ocean... mud can race faster than a car on the highway?!\"\n\n\"This is no ordinary muddy water, Jiang Jiang! This is the most destructive geological tempest in the ocean—a gravity-driven Turbidity Current!\"\n\nLeo braced himself firmly against the co-pilot console handrail, calling out to the crew: \"Tens of thousands of tons of silt, sand, and gravel collapsed off the steep escarpment, mixing violently with seawater to form a dense fluid mixture with a specific gravity of up to 1.3! Driven by gravitational acceleration, it sweeps down submarine canyons like an underwater avalanche, obliterating everything in its wake and carving massive deep-sea gorges hundreds of meters deep into the oceanic basalt crust!\"\n\nBefore his explanation could settle, the *Nautilus-IV* pitched downward violently, plunging dozens of meters in a fraction of a second!\n\n*RUMBLE-BOOM-ROAR————!!*\n\nIt was not thunder propagating through air, but the underwater infrasonic fury generated as millions of tons of dense gravel, silt, and high-pressure fluid collided, sheared, and scraped against the basalt floor!\n\nGazing through the twenty-centimeter-thick conical optical PMMA viewport, the profound, starry darkness of the deep ocean was snuffed out in a single heartbeat.\n\nAn all-consuming, blizzard-like avalanche of roiling grayish-brown mud roared down from behind and above the submersible like a blinding desert dust storm of apocalyptic scale!\n\nThe incandescent xenon beams from the floodlights collided with the surge, instantly scattering off countless billions of suspended mineral facets; within seconds, the viewing ports transformed into an impenetrable, blinding sheet of blank, ghastly white!\n\n\"Visual acquisition totally lost! Zero visibility!\" Hailan yelled.\n\n\"Switch to high-frequency obstacle-avoidance active sonar!\" Leo commanded.\n\n\"Negative! The sonar screen is completely washed out!\" Ye Yijie pointed anxiously to the main telemetry console. \"The grain size of the suspended silt perfectly matches the acoustic wavelengths of our high-frequency pings, triggering catastrophic 'Volume Scattering'! The pings are scattered back by billions of mud particles the instant they leave the transducer—we are entirely blind!\"\n\n\"Warning! Thruster intake differential pressure surging to critical threshold!\" Piko barked a shrill warning. \"Clays within the turbidity flow are clogging the magnetic-coupling brushless motor shrouds! Port thruster RPM has degraded by forty percent!\"\n\nThe twenty-ton titanium alloy submersible shuddered violently within the chaotic vortices of the turbidity current, groaning heavily under immense structural shear.\n\nWorse still, the surging current acted like an invisible titan's claw, dragging the submarine inexorably downward toward the jagged, bottomless basalt collision reefs below!\n\n\"Thruster power choked! If we force full throttle through this turbulent shear field, the motors will burn out and seize within thirty seconds!\" Jiang Jiang wiped cold sweat from his brow, his wrench trembling in his grip. \"Leo, what do we do?!\"\n\nLeo forced his mind into absolute stillness. His thoughts functioned like a precision gear train, rapidly deconstructing the hydrodynamic crisis before them.\n\n\"Stay calm! Everyone stay calm!\" Leo's eyes swept across the instrumentation array with lightning speed. \"Turbidity currents are violent, but they obey the hydrodynamic stratification laws of the Bouma Sequence! The internal architecture of a turbidity flow is never homogeneous!\"\n\nLeo brought up the long-wave low-frequency telemetry from the Acoustic Doppler Current Profiler (ADCP): \"Look at the velocity gradient! The very bottom is the high-density debris flow layer, which carries the deadliest kinetic energy; the middle is the high-shear rotational vortex layer; but at the very summit of the flow lies the low-shear buoyant plume channel, comprised of the finest suspended particles with relatively uniform velocity!\"\n\n\"A low-shear buoyant plume channel?\" Hailan's eyes ignited with sudden revelation. \"You mean... instead of fighting against the current, we 'surf' atop its back?!\"\n\n\"Precisely!\" Leo nodded with fierce resolve. \"Hailan, cut main propulsion immediately! Retract all external manipulator arms and seal the outer loop cooling grates to prevent silt from seizing the motor bearings!\"\n\n\"Propulsion isolated! External cooling loops sealed!\" Hailan threw the main power breakers without hesitation.\n\n\"Yijie, initialize the miniature Fiber Optic Gyroscopes (FOG) and triaxial quartz accelerometers within the titanium core! In this state of total acoustic and optical blindness, we rely entirely on passive Inertial Navigation dead reckoning!\"\n\n\"Fiber Optic Gyroscopes calibrated! Dead reckoning velocity drift below 0.003 m/s!\" Ye Yijie's fingers flew across the console, materializing a three-dimensional holographic corridor computed purely from gravitational vectors.\n\n\"Jiang Jiang! Maximum positive buoyancy injection into the Archimedean oil bladders!\" Leo shouted. \"Trim the submersible's overall density to exactly match the 1.08 g/cm³ density of the upper plume layer!\"\n\n\"On it! Silicon oil injection pumps one and two engaged at maximum flow! Pascal micro-trim, let's go!!\"\n\nJiang Jiang roared as he hauled back the hydraulic trim lever, the heavy high-pressure pumps thudding with deep, rhythmic beats as they drove dozens of liters of incompressible silicon oil into the external elastic bladders.\n\nThe displacement volume expanded outward by a critical margin, imparting the *Nautilus-IV* with powerful, calibrated positive micro-buoyancy!\n\n*Hummm—*\n\nWith the main thrusters shut down, a miracle took shape.\n\nThe brass-sheathed submersible did not tumble out of control into the violent mudflow; instead, like a sleek golden surfboard lifted by a giant ocean swell, it rose cleanly out of the destructive debris core below and seated itself stably atop the buoyant, gliding plume layer!\n\nThe roaring torrent of mud around them suddenly transformed into an all-natural gravitational propulsion engine, hurtling the submarine forward!\n\n\"Flow velocity: fifty-eight kilometers per hour! Vehicle attitude stable; roll angle under two degrees!\" Piko reported in joyous wonder. \"We are gliding through the submarine canyon at phenomenal speed aboard the turbidity current!\"\n\nThrough the inertial projection display, the crew watched in awe as their vessel threaded the sheer basalt canyon walls flanking them, shaving past towering jagged cliffs by mere inches!\n\nThis heart-pounding sensation of blind-gliding through thousands of meters of abyssal mudflow pushed everyone's pulse to the limit, igniting an untamed flame of adventuring fervor in their chests!\n\n\"Canyon narrowing ahead! We are approaching the discharge mouth into the open Abyssal Plain basin!\" Ye Yijie monitored the distance countdown intently. \"Five... four... three... two... one, we're breaking out!!\"\n\n*WHOOOOSH————!*\n\nWith a subtle surge of buoyant lift, the deafening roar of the mudflow abruptly fell away within seconds.\n\nThe heavy, hyper-dense turbidity current plummeted down the submarine fan delta toward the deepest floor of the plain, while the *Nautilus-IV*, buoyed by its positive trim, glided effortlessly out of the turbid storm, hanging suspended once more in serene, crystal-clear abyssal brine!\n\n\"Engage external freshwater wash cycle; clear viewports of all sediment residue!\"\n\nHailan toggled the high-pressure wash valve, four jets of clean water sluicing the gray mud from the acrylic viewports.\n\nShe then engaged the primary electrical bus, and the deep-sea xenon floodlights flared to life once more.\n\nEvery member of the crew crowded eagerly against the forward viewport, gazing downward—\n\n\"Good heavens... what... what on earth is that?!\" Jiang Jiang's eyes widened in utter disbelief, his breath caught in his throat.\n\nBeneath them, deep within the fractured tectonic rift of the Abyssal Plain at a depth of five thousand meters, lay a world completely unlike the barren, frigid wasteland they had anticipated.\n\nRising from the perpetual darkness of the crustal rifts were dozens of colossal geological chimneys towering twenty to thirty meters tall, black as obsidian!\n\nFrom their spires, roaring jets of ink-black hydrothermal fluids—scalding at 380 degrees Celsius—billowed out into the freezing deep-sea waters at breathtaking speed!\n\nUnder the extreme pressure of over four thousand meters, the black mineral plumes churned without boiling into steam. Coating the surrounding basalt slopes were sprawling colonies of snow-white vent shrimp, alongside dense thickets of giant tube worms rising two meters high, their crimson plumes glowing like rubies in the floodlights!\n\nDeep within the fiery fissures of the black smokers, there even pulsed a faint, brooding dark-red geothermal luminescence, like embers from the core of the Earth itself!\n\n\"We've arrived...\" Du Hailan whispered in awe, the fiery, majestic abyss reflected in her eyes. \"This is the most magnificent and perilous heart of the Western Pacific—the hydrothermal black smoker vent field!\"\n\nLeo tightened his fists, his blood coursing with fiery excitement.\n\nHaving navigated the deadly blind flight through the turbidity mudflow, they had finally crossed the threshold into the primary battleground of Volume Two!\n\nBeneath that boiling, 380-degree abyss, deeper secrets and the primary structure of grandfather's Deep Sea Clocktower Zero awaited the arrival of the brass meteor!\n",
          "stemKnowledge": [
            "海底重力濁流動力學（Turbidity Current）：沉積物滑塌混入海水形成的高密度流體（密度約 1.1~1.3 g/cm³），在重力驅動下以極高時速奔騰，是塑造深海峽谷與海底扇的巨大地質力量。",
            "聲學體散射與全頻衰減（Volume Reverberation）：當懸浮顆粒粒徑與超聲波波長相當（微米至毫米級）時，引發強烈瑞利散射與米氏散射，使高頻避碰聲納回波全面失效（呈雪花白盲狀態）。",
            "光纖陀螺儀（FOG）無源慣性導航：利用薩格納克效應（Sagnac Effect）測量角速度，配合三軸石英加速度計實施密閉自主航位推算，在聲光完全剝奪的極端深海中提供可靠導航航道。",
            "流體分層鮑馬序列與羽流滑翔：濁流從底至頂呈現碎屑泥流層、強剪切渦旋層與頂部懸浮羽流層的垂直速度與密度梯度；利用浮力匹配浮於羽流頂部，可化水流阻力為推進動力。"
          ]
        },
        {
          "id": 8,
          "file": "第08章_380度的水下黑色噴泉.md",
          "title": "第 08 章　380度的水下黑色噴泉",
          "enTitle": "Chapter 08 — The 380-Degree Underwater Black Geysers",
          "titleEn": "Chapter 08 — The 380-Degree Underwater Black Geysers",
          "shortTitle": "380度的水下黑色噴泉",
          "concept": "超臨界流體與相圖變化 × 黑煙囪硫化物驟冷沉澱 × 化能合成深海綠洲 × 熱膨脹失配與熱對流衝擊",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在黑煙囪爆裂引發 380°C 熱液射流直擊右舷、鈦合金與壓克力膨脹係數失配達八倍的十二秒生死線前，如何利用橫滾機動與冷卻油路實施帕斯卡冷水盾脫險？",
          "summary": "『鸚鵡螺-IV 號』下潛至五千一百公尺阿比斯平原海槽，闖入西太平洋最壯觀的『黑煙囪熱液噴口群』！在 510 個大氣壓下，380°C 的過熱水維持液態噴出，驟冷析出黃鐵礦與黃銅礦形成黑色濃煙，孕育出巨型管狀蠕蟲與盲蝦簇擁的化能合成奇異綠洲。突發險情：一座三十米高的新生黑煙囪因晶體堵塞超壓爆裂，滾燙的硫化物射流直轟右舷！鈦合金與壓克力膨脹係數失配引發高達 160 兆帕的危險剪切應力，視窗瀕臨熱破裂。誠浩指揮艇身向左滾翻四十五度脫離熱柱，將江全力泵送零下低溫矽油，以深海 1.8°C 冷水對流成功中和熱應力！脫險後，眾人在海脊裂縫中震撼發現了五十年前爺爺留下的『熱液溫差實驗一號機』殘骸！",
          "summaryEn": "Nautilus-IV arrives at the 5,100-meter abyssal trench, entering the monumental hydrothermal black smoker field. Under 510 atmospheres of hydrostatic pressure, 380°C superheated fluids remain liquid, precipitating copper and iron sulfides upon contact with frigid brine to forge mineral chimneys that nurture thriving chemosynthetic tubeworm and blind shrimp oases. Crisis strikes when a juvenile chimney suffers conduit collapse and explodes, unleashing a scalding mineral jet that broadsides the starboard hull! An eightfold discrepancy between titanium and acrylic thermal expansion spikes interface shear stress to 160 MPa, bringing the viewport to the brink of catastrophic fracture. Leo commands a 45-degree roll away from the plume, while Jiang Jiang pumps sub-zero silicon oil to trigger rapid convective cooling, neutralizing the thermal shock. Safe once more, the team discovers the sunken wreckage of grandfather's Project Deep Blue Thermoelectric Generator Unit 1!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第八章：380度的水下黑色噴泉\n\n如果地獄在大洋深處擁有一座熔爐，那它一定就是眼前的這副模樣。\n\n「鸚鵡螺-IV 號」懸停在水深五千一百公尺的阿比斯平原海槽上方。舷窗外，一座座高達二三十公尺、巍峨如遠古哥德式尖塔的黑色礦物煙囪，森然佇立在裂痕遍布的黑色玄武岩基底上。\n\n在聚光探照燈的慘白光芒中，滾滾狂湧的黑色流體正從這些巨型煙囪的頂部噴口呼嘯而出，如同十幾條在萬米無光深海中狂暴盤旋的墨色巨龍，遮蔽了整座海槽的上空！\n\n「外部水質溫度傳感器……我的天，讀數正在發瘋！」\n\n坐在監控台前的將江使勁揉了揉眼睛，指著螢幕上不斷攀升的紅色數字大叫：「三百二十度……三百五十度……最高峰值達到了三百八十二攝氏度！誠浩，水怎麼可能在三百八十度還不開鍋？！這要是倒在鍋裡，早把整個廚房炸上天了！」\n\n葉旖緁推了推眼鏡，指尖調出流體相態相圖，用冷靜而優美的語調解釋道：「將江，那是因為常壓下的物理直覺在五千公尺深海完全失效了。在海平面，一個標準大氣壓下，水分子在達到一百度時就會劇烈汽化沸騰；但此時此刻，我們頭頂上壓著五千公尺厚的太平洋海水，靜水壓強高達五百一十個大氣壓！」\n\n誠浩接過話頭，目光中閃爍著對極端物理環境的洞察：「超高壓強將水分子死死按壓在一起，水分子的沸點被硬生生推到了四百度以上！所以在這個深度，三百八十度的水不僅不會沸騰成水蒸氣，反而維持在一種介於液態與超臨界狀態之間的『過熱液體（Superheated Liquid）』！它的流動性極強，溶解礦物質的能力是常溫海水的數千倍！」\n\n「那……那些黑色的煙霧又是什麼？」將江指著那翻滾升騰的墨黑水柱問道。\n\n杜海嵐的手指在主控台的熱成像儀上輕輕滑動，神色專注而肅穆：「那是深海的煉金術。深層海水順著板塊斷裂帶滲入地殼內部，被數公里下的高溫岩漿加熱到近四百度，劇烈淋濾、萃取了岩石中的銅、鐵、鋅、硫等金屬元素。當這股強酸性、滾燙的無氧熱液從煙囪口噴出，驟然撞上周圍只有一點八攝氏度、弱鹼性且富含溶解氧的冰冷深海海水時——」\n\n「化學驟冷反應（Thermodynamic Quenching）！」誠浩眼睛一亮。\n\n「沒錯，」海嵐讚許地微笑道，「極度的溫差與酸鹼度驟變，讓溶解在水裡的重金屬離子在百分之一秒內達到過飽和，瞬間析出為微米級的金屬硫化物顆粒！黃鐵礦、黃銅礦、閃鋅礦……這些細小的礦物晶體在海水中翻滾，就形成了我們看到的『黑色濃煙』。而在煙囪管壁上沉澱累積的礦物，歷經數十年乃至上百年的堆疊，就長成了眼前這些巍峨的黑煙囪！」\n\n「汪！檢測到密集生物信號！生物量密度超越熱帶雨林平均值！」\n\n機械柴犬皮可雙耳轉動，兩道微光掃描光束投射向黑煙囪下方的玄武岩斜坡。\n\n只見在那些溫度介於十度到三十度的熱液邊緣地帶，密密麻麻地覆蓋著成片成片令人嘆為觀止的奇異生命！\n\n那是一片高達兩公尺的巨型管狀蠕蟲林（*Riftia pachyptila*）。雪白堅硬的幾丁質外殼如同挺拔的竹林，頂端伸出一束束鮮紅如頂級紅寶石的羽狀鰓，在微弱的水流中輕輕搖曳；在管蟲林的基部，數以十萬計的白色深海盲蝦（Rimicaris exoculata）層層疊疊地擠在熱液噴口周圍，牠們背部的光敏器官在探照燈下泛著奇異的珍珠光澤，瘋狂刮食著岩石表面滋生的微生物薄膜。\n\n「沒有一絲陽光，沒有任何光合作用……」葉旖緁凝視著這片沸騰深淵中的生命奇蹟，眼神中流淌著敬畏，「在五百個大氣壓與高濃度有毒硫化氫的環境中，牠們依靠體內的化能合成細菌（Chemosynthetic Bacteria）氧化硫化物製造有機質，在永恆的午夜深處，構築起了一座完全獨立於太陽的生命方舟。」\n\n「這就是深海零號鐘台選擇這裡的原因，」誠浩調出信標卡盤的共振頻率追蹤圖，「爺爺在日記裡寫過，『唯有大洋地脈最熾熱的脈動，才能為永恆的擒縱器提供永不枯竭的能量』。鐘台的主基座，就在這片黑煙囪火山帶的核心熱源下方！」\n\n然而，這座深海綠洲的美麗與莊嚴，注定伴隨著毀滅性的凶險。\n\n「咚——隆隆隆隆！」\n\n一陣源自地底深處的沉悶劇震猛烈傳來！\n\n阿比斯平原海槽邊緣的岩層再次發生了微小的板塊滑移，整座海底黑煙囪群隨之劇烈晃動起來。大量沉積的硫化物脆硬碎屑如暴雨般脫落，而就在距離「鸚鵡螺-IV 號」右舷不到三十公尺處，一座高達三十公尺的新生黑煙囪，噴口處的黑色熱液驟然由勻速噴湧轉為狂暴的脈衝喘振！\n\n「警告！右舷新生熱液噴口內部通道發生礦物晶體坍塌堵塞！」皮可雙眼紅光暴漲，「堵塞導致熱液腔室內部水壓以幾何級數飆升！熱液超壓爆裂倒數：三秒！」\n\n「快避開！！」海嵐失聲厲喝，雙手將推進手柄推至側向全推力！\n\n但已經來不及了。\n\n「砰————！！」\n\n一聲水下悶雷般的巨響炸裂開來！\n\n那座三十米高的黑煙囪頂部，在數千巴的過熱蒸汽壓力下轟然爆碎！數百噸熾熱的玄武岩礦石夾雜著高達三百八十攝氏度的超飽和金屬硫化物射流，宛如深海火山爆發般，朝著「鸚鵡螺-IV 號」的右側舷窗鋪天蓋地狂轟而來！\n\n滾燙的黑水射流在零點一秒內死死拍擊在右側鈦合金球殼與圓錐形特種壓克力視窗上！\n\n「滋滋滋滋滋————！！」\n\n球艙內，所有貼近右舷的金屬部件在短短幾秒內溫度瘋狂飆升！艙壁表面凝結的冰冷冷凝水瞬間汽化蒸騰，白色的水霧在載人艙內急速瀰漫開來！\n\n「高溫警報！右舷外殼表面溫度突破二百二十攝氏度！且在持續上升！」主控台上的警報燈紅得像要滴出熱血。\n\n更致命的是，一聲令人牙酸的微弱異響從右側視窗金屬座圈周圍傳來——\n\n「咔……吱。」\n\n「熱膨脹係數嚴重失配！」葉旖緁的臉色在一瞬間變得慘白，「外層鈦合金球殼的熱膨脹係數只有百萬分之八點六，但二十公分厚的 PMMA 特種壓克力視窗的熱膨脹係數高達百萬分之七十！兩者相差了整整八倍多！」\n\n葉旖緁的指尖在應力監測面板上飛速滑動，聲音急促而顫抖：「高溫讓壓克力視窗的外端膨脹速度遠遠超過金屬窗框！受熱膨脹的圓錐台正在強行向金屬座圈內死死擠壓，邊緣接觸面上的局部熱剪切應力已經突破了一百六十兆帕！如果溫差再擴大三十度，壓克力邊緣將發生脆性熱破裂，五百個大氣壓的海水會瞬間灌入艙內！！」\n\n「距離材料破裂極限……只剩十二秒！」皮可的電子音甚至因為電磁干擾出現了雜音。\n\n「不能用推進器後退！」誠浩雙目赤紅，思維在極致的生死壓迫下運轉到了超光速，「熱液射流形成的低壓渦旋正在向前吸扯我們，後退只會讓艇身陷進熱柱的核心噴流裡！」\n\n「那該怎麼辦？！」將江死死用濕毛巾按住冒煙的液壓閥門，滾燙的空氣燙得他大口喘氣。\n\n「利用熱對流極速散熱，實施帕斯卡冷水盾衝擊！」\n\n誠浩猛然拉下左側阿基米德微調油囊的應急強制回油閥，同時指向外部管路：「海嵐！關閉右舷全部姿態微調噴嘴，將左舷向量噴口推力拉滿，讓艇身以最大橫滾角傾斜四十五度！」\n\n「明白！艇身向左側滾翻，強行暴露左舷冷水面！」海嵐咬破了嘴唇，雙手肌肉緊繃如鐵，將副操縱桿死死扳到底！\n\n「將江！啟動右側外置應急冷卻迴路，把我們油囊裡零下二度的冷卻矽油全部泵向右側窗框冷卻夾層！用深海一點八度的冰冷海水對流，強行帶走熱量！」\n\n「好！！冷卻油泵，給我轉起來啊啊啊！！」\n\n將江爆發出一聲震耳欲聾的咆哮，粗壯的手臂如同打樁機般連續推動雙向增壓手柄！\n\n「咕嘟嘟嘟——！」\n\n冰冷的矽油在每秒三千轉的高壓齒輪泵驅動下，狂暴地灌入右側錐形視窗的鈦合金中空座圈！\n\n與此同時，「鸚鵡螺-IV 號」以極限的四十五度傾斜姿態，如同一條靈活的金槍魚，借著滾燙射流側向翻滾的浮力推力，將受熱最嚴重的右舷猛然甩出了熱液射流的軸心核心區，狠狠撞進了周圍一點八攝氏度的深海冰冷水幕之中！\n\n「嗤————！！」\n\n極熱與極寒在金屬與壓克力表面劇烈交鋒，騰起大片肉眼可見的深海水下擾動紋！\n\n外部儀表盤上的溫度指針猛地一顫，隨即如雪崩般開始狂跌：\n\n「二百二十度……一百八十度……一百二十度……六十度……二十度！」\n\n右側視窗座圈邊緣那恐怖的剪切應力數值，在冷熱對流的精準中和下，迅速從一百六十兆帕的危險紅線暴跌回了安全的三十五兆帕！\n\n那聲令人心驚肉跳的微裂縫異響，終於戛然而止。\n\n「艇身脫離熱柱噴射軌道！周圍水溫回落至四點五攝氏度！」\n\n皮可身上的紅光緩緩轉為柔和的亮藍色，機械耳垂下：「視窗結構完整度評估：百分之九十六點五。危險解除，汪！」\n\n球艙內，瀰漫的水霧漸漸消散在低溫冷凝除濕器中。\n\n將江脫力地仰面躺在甲板上，胸膛劇烈起伏，手掌上的防護手套已經被高溫燙出了一道焦痕，但他卻咧著嘴，劫後餘生地傻笑了起來：「誠浩……我們……我們又從閻王爺手裡溜達回來了。」\n\n葉旖緁擦去額頭上的熱汗，看著旁邊依然冷靜如初的誠浩，眼眸中閃爍著由衷的欽佩與溫柔：「利用材料熱膨脹與冷熱對流剪切來中和熱應力……誠浩，你剛才的操作，簡直是教科書級別的深海熱力學奇蹟。」\n\n杜海嵐深吸了一口氣，伸手拍了拍誠浩的肩膀，目光堅毅而灼熱：「鸚鵡螺-IV 號經受住了三百八十度的烈火考驗。現在，看看我們的正下方吧。」\n\n誠浩走上前，透過那扇剛剛冷卻下來、依然完好無損的特種視窗向外看去。\n\n只見在剛剛爆裂的黑煙囪基座後方，一道被熱液沖刷得光滑如鏡的古老海脊斷層深處，赫然露出了半截被厚重金屬外殼包裹著的龐大人工造物！\n\n在那覆蓋著厚厚硫化物沉澱的合金外殼上，隱約可見一行斑駁的深藍色噴漆標記：\n\n**「深藍專案·熱液溫差實驗一號機」**\n\n「找到了……」誠浩的心臟狠狠抽搐了一下，指尖輕輕貼在冰涼的窗面上，「那是爺爺五十年前留下的熱液溫差發電站殘骸！」\n\n黑煙囪的熱浪在窗外咆哮，深海的烈火依然在燃燒，而深海零號鐘台的心跳，正在這滾燙的深淵之下，愈發清晰地震顫著少年的心弦！\n",
          "contentEn": "# Adventure Gear: Beacons of the Mariana Abyss\n\n## Chapter 8: The 380-Degree Underwater Black Geysers\n\nIf hell possessed a smelting furnace within the oceanic abyss, it would manifest in precisely the spectacle unfolding before them.\n\nThe *Nautilus-IV* hovered suspended above the tectonic trench floor of the Abyssal Plain at a depth of 5,100 meters. Beyond the viewing ports, colossal mineral chimneys towering twenty to thirty meters high, reminiscent of primordial Gothic spires, rose stark and imposing from the fractured basalt bedrock.\n\nIn the stark, pale glare of the floodlights, violent plumes of pitch-black fluid surged out from the crest spires of these colossal chimneys, resembling a dozen ink-dark dragons coiling through the lightless abyss, blotting out the void above the chasm!\n\n\"External water temperature sensor... Good grief, the telemetry is going insane!\"\n\nSeated before the environmental monitor, Jiang Jiang rubbed his eyes frantically, shouting as he pointed toward the climbing crimson digits: \"Three hundred twenty degrees... three hundred fifty degrees... it just peaked at three hundred eighty-two degrees Celsius! Leo, how on earth is water not boiling at 380 degrees?! If you put that in a kettle on the stove, it would blow the whole kitchen into orbit!\"\n\nYe Yijie pushed her glasses up, bringing up a fluid phase diagram across her terminal, her voice composed and crystalline: \"Jiang Jiang, that is because our sea-level physical intuitions fail completely at depths of five thousand meters. At sea level under one standard atmosphere, water molecules boil violently into vapor at one hundred degrees; but right now, five thousand vertical meters of Pacific brine weigh down atop us, exerting a hydrostatic pressure of 510 atmospheres!\"\n\nLeo took over the thread, his eyes gleaming with a profound grasp of extreme thermodynamics: \"That crushing hydrostatic load locks the water molecules together with immense force, driving the boiling point far beyond four hundred degrees! At this depth, 380-degree water cannot vaporize into steam; instead, it exists as a 'superheated liquid' bridging the boundary between liquid and supercritical fluid! Its hydrodynamic mobility is staggering, and its capacity to dissolve minerals is thousands of times greater than ambient seawater!\"\n\n\"Then... what are those billows of black smoke?\" Jiang Jiang asked, gesturing toward the roiling, ink-dark plumes.\n\nDu Hailan's fingers traced across the thermal imaging display on the main console, her expression reverent and solemn: \"That is the alchemy of the deep ocean. Deep seawater percolates through tectonic rifts deep into the Earth's crust, heated by magma chambers kilometers below to nearly four hundred degrees, aggressively leaching copper, iron, zinc, and sulfur from the basalt. When this hyper-acidic, scalding, anoxic hydrothermal fluid erupts from the chimney mouths and collides with the freezing, 1.8-degree, slightly alkaline, oxygen-rich ambient seawater—\"\n\n\"Thermodynamic Quenching!\" Leo's eyes flared with realization.\n\n\"Precisely,\" Hailan smiled in admiration. \"The extreme thermal differential and sudden pH shift drive dissolved heavy metal ions past saturation within a hundredth of a second, flash-precipitating them into micro-scale metal sulfide crystals! Chalcopyrite, pyrite, sphalerite... these microscopic mineral facets tumbling through the brine form the 'black smoke' we observe. And as minerals settle and crystallize along the chimney rim over decades and centuries, they erect the towering black smokers before us!\"\n\n\"Woof! Dense biological signatures detected! Biomass density exceeds tropical rainforest averages!\"\n\nPiko swiveled its metallic ears, casting two slender scanning beams toward the basalt slope beneath the chimneys.\n\nThere, in the thermal fringe where temperatures hovered between ten and thirty degrees Celsius, clustered an awe-inspiring, thriving tapestry of exotic life!\n\nIt was a sprawling grove of giant tube worms (*Riftia pachyptila*) standing two meters tall. Their pristine, snowy chitinous tubes rose like miniature bamboo stalks, each crowned with a plume of branchial gills as crimson as flawless rubies, swaying gently in the subtle currents. Clustered around the base, hundreds of thousands of pale hydrothermal vent shrimp (*Rimicaris exoculata*) swarmed in dense blankets, the dorsal photoreceptors along their carapaces gleaming like pearls under the floodlights as they grazed voraciously upon microbial mats.\n\n\"No sunlight, no photosynthesis...\" Ye Yijie gazed at this oasis of life flourishing within the boiling abyss, her eyes filled with quiet reverence. \"Under five hundred atmospheres and lethal concentrations of toxic hydrogen sulfide, they rely on endosymbiotic chemosynthetic bacteria to oxidize sulfides and synthesize organic matter, erecting an ark of life entirely independent of the sun within the eternal midnight.\"\n\n\"This is precisely why Deep Sea Clocktower Zero was anchored here,\" Leo observed, bringing up the resonant frequency tracker of the beacon disc. \"Grandfather wrote in his journal: 'Only the most incandescent pulse of the Earth's tectonic veins can provide inexhaustible energy for an eternal escapement.' The bedrock foundation of Clocktower Zero lies directly beneath the primary heat source of this volcanic field!\"\n\nHowever, the breathtaking majesty of this abyssal sanctuary carried with it lethal, unpredictable peril.\n\n*THUD——RUMBLE-BOOM!*\n\nA violent shudder vibrating up from the crust's mantle shook the abyss!\n\nThe fault blocks along the Abyssal Plain trench slipped by a fraction of a millimeter, sending deep tremors rippling through the black smoker chimneys. Fractured sulfide crusts cascaded down like stony avalanches, and less than thirty meters off the *Nautilus-IV*'s starboard beam, a thirty-meter-tall juvenile chimney abruptly transitioned from steady discharge into violent, pulsating surges!\n\n\"Warning! Internal conduit collapse and mineral blockage detected inside starboard juvenile vent!\" Piko's optical sensors flared an urgent crimson. \"Blockage is driving internal hydrothermal chamber pressure to surge geometrically! Hydrothermal overpressure rupture in three seconds!\"\n\n\"Clear the area immediately!!\" Hailan yelled, throwing the lateral thrusters to full deflection!\n\nYet it was too late.\n\n*BOOM————!!*\n\nA muffled, underwater detonation tore through the abyss!\n\nThe summit of the thirty-meter black smoker shattered violently under thousands of bars of superheated fluid pressure! Hundreds of tons of scalding basalt shards, entrained in a 380-degree supercritical jet of metal sulfides, detonated outward like a submarine volcanic eruption, slamming broadside into the starboard viewing port of the *Nautilus-IV*!\n\nThe scalding jet of black brine hammered against the titanium spherical hull and the conical PMMA viewport within a tenth of a second!\n\n*HISS-SCREEEEEE————!!*\n\nInside the cabin, metal components along the starboard bulkhead skyrocketed in temperature within seconds! Chilled condensation along the walls flash-vaporized, filling the manned compartment with billows of white steam!\n\n\"High-temperature alert! Starboard hull surface temperature has exceeded 220 degrees Celsius and is climbing rapidly!\" The console klaxons flared like molten blood.\n\nWorse still, an agonizing, nerve-racking sound resonated from the metallic bezel enclosing the starboard viewport—\n\n*Creak... snap.*\n\n\"Severe thermal expansion mismatch!\" Ye Yijie's face went deathly pale in an instant. \"The thermal expansion coefficient of the outer titanium shell is only 8.6 × 10⁻⁶/K, but the 20-centimeter PMMA acrylic viewport has an expansion coefficient of 70 × 10⁻⁶/K—more than an eightfold discrepancy!\"\n\nYe Yijie's fingers flew across the strain gauge monitors, her voice trembling with breathless urgency: \"The scalding heat is forcing the outer face of the acrylic viewport to expand far faster than its metal bezel! The expanding conical window is wedging itself violently into the metal seat, and localized shear stress along the contact interface has breached 160 megapascals! If the thermal differential climbs another thirty degrees, the acrylic will suffer catastrophic brittle thermal fracture, and five hundred atmospheres of water will obliterate the cabin in a millisecond!!\"\n\n\"Twelve seconds remaining until structural material failure!\" Piko's synthesized voice crackled under electromagnetic interference.\n\n\"We cannot reverse with thrusters!\" Leo's eyes flared with intense focus, his mind operating at computational speed under mortal peril. \"The low-pressure vortex generated by the jet is pulling us forward; reversing will only suck the hull deeper into the core of the thermal plume!\"\n\n\"Then what do we do?!\" Jiang Jiang pressed a wet towel against the smoking hydraulic bypass valve, the superheated air searing his throat.\n\n\"Deploy thermal convective rapid cooling—engage the Pascal Cold Shield surge!\"\n\nLeo slammed down the emergency forced return valve of the portside Archimedean trimming bladders, pointing toward the external manifold: \"Hailan! Cut all starboard attitude nozzles and apply maximum thrust on portside vector jets—pitch the hull into a forty-five-degree roll!\"\n\n\"Understood! Rolling portside to expose the cold-water hull face!\" Hailan bit her lip, her forearms taut as steel as she shoved the auxiliary stick to the stop!\n\n\"Jiang Jiang! Engage the starboard external emergency cooling loop! Pump all sub-zero silicon oil from our bladders into the starboard bezel cooling jacket! Let the 1.8-degree deep-sea brine carry away the thermal load via convective flushing!\"\n\n\"On it!! Cooling pumps, spin up to the max, RAAARGH!!\"\n\nJiang Jiang unleashed a deafening roar, his burly arms pumping the dual-action intensifier lever like a pile driver!\n\n*CHUG-CHUG-CHUG——!*\n\nFrigid silicon oil, driven by a high-pressure gear pump spinning at 3,000 RPM, flooded violently into the hollow titanium bezel surrounding the starboard conical viewport!\n\nSimultaneously, pitched at an extreme forty-five-degree angle like an agile marlin, the *Nautilus-IV* rode the buoyant lift of the thermal jet's lateral eddy, violently swinging its overheated starboard side out of the plume's core axis and plunging straight into the surrounding curtain of 1.8-degree frigid deep-sea brine!\n\n*SHHHHHH————!!*\n\nExtreme heat and sub-zero cold clashed violently across the metal and acrylic surfaces, churning up shimmering, visible optical schlieren in the water!\n\nThe temperature gauge needle on the external telemetry shuddered violently, then began a dizzying plunge:\n\n\"220 degrees... 180 degrees... 120 degrees... 60 degrees... 20 degrees!\"\n\nThe localized shear stress along the viewport bezel rim plummeted from the lethal 160-megapascal threshold back down to a benign 35 megapascals under the precise neutralization of convective cooling!\n\nThe terrifying creaking of micro-fractures ceased instantly.\n\n\"Vessel clear of hydrothermal plume trajectory! Ambient water temperature normalized to 4.5 degrees Celsius!\"\n\nThe crimson glare across Piko's frame faded into a soothing azure as its mechanical ears drooped: \"Viewport structural integrity assessed at 96.5 percent. Danger neutralized, woof!\"\n\nInside the spherical hull, the dense white steam dissipated through the low-temperature condensing dehumidifiers.\n\nJiang Jiang collapsed flat on his back against the deck, his chest heaving, a scorched patch visible on his work gloves from the heat, yet he grinned in breathless relief: \"Leo... we... we just walked right out of the grim reaper's furnace.\"\n\nYe Yijie wiped sweat from her brow, looking at Leo, who remained as composed as an ancient compass, her eyes shimmering with genuine admiration: \"Balancing material thermal expansion with convective shear to neutralize extreme thermal stress... Leo, what you just pulled off was a textbook miracle of deep-sea thermodynamics.\"\n\nDu Hailan exhaled deeply, resting a hand on Leo's shoulder, her gaze fiery and resolute: \"The *Nautilus-IV* has passed the trial by fire at 380 degrees. Now, take a look directly beneath us.\"\n\nLeo stepped forward, peering out through the newly cooled, pristine viewport.\n\nThere, nestled deep within an ancient fault ledge smoothed by centuries of hydrothermal flows behind the ruptured black smoker, lay the half-buried form of a massive, metallic apparatus!\n\nUpon its heavy alloy casing, coated in thick sulfide encrustations, a weathered stencil of dark blue lettering was faintly legible:\n\n**\"Project Deep Blue · Hydrothermal Thermoelectric Generator Unit 1\"**\n\n\"We found it...\" Leo's heart skipped a beat, his fingertips pressing against the chilled acrylic. \"That's grandfather's hydrothermal thermoelectric station from fifty years ago!\"\n\nBeyond the viewport, the black smokers roared, the fires of the deep ocean burned on, and beneath this boiling abyss, the heartbeat of Deep Sea Clocktower Zero resonated with ever greater clarity, echoing through the adventurous soul of the young watchmaker!\n",
          "stemKnowledge": [
            "超高壓流水相態與過熱流體（Superheated Hydrothermal Fluid）：在 510 個大氣壓下，水分子沸點被推高至 400°C 以上，使 380°C 熱液維持液態，具備極高離子溶蝕性與熱力學動能。",
            "黑煙囪金屬硫化物化學驟冷沉澱（Thermodynamic Quenching）：強酸性缺氧熱液噴入 1.8°C 弱鹼性富氧深海海水，銅、鐵、鋅離子過飽和瞬間析出黃銅礦與黃鐵礦微晶，堆砌出數十米高聳礦物煙囪。",
            "深海化能合成生態系（Chemosynthesis）：巨型管狀蠕蟲（Riftia pachyptila）體內共生硫氧化細菌，將劇毒硫化氫化學能轉化為有機物，擺脫對太陽光的依賴構築深海獨立生態鏈。",
            "材料熱膨脹失配與熱衝擊自衛（Thermal Shock & Differential Expansion）：航太鈦合金（8.6×10⁻⁶/K）與光學壓克力（70×10⁻⁶/K）膨脹差達八倍，突遭熱衝擊易引發界面剪切破壞；透過外置冷水對流與冷卻夾層循環，可迅速釋放熱應變。"
          ]
        },
        {
          "id": 9,
          "file": "第09章_溫差熱電的發條充能.md",
          "title": "第 09 章　溫差熱電的發條充能",
          "enTitle": "Chapter 09 — Thermoelectric Spring Winding",
          "titleEn": "Chapter 09 — Thermoelectric Spring Winding",
          "shortTitle": "溫差熱電的發條充能",
          "concept": "塞貝克溫差發電效應 × 超聲空化除垢 × 形狀記憶合金熱機 × 深海恆力發條蓄能",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在蓄電池即將歸零引發強制拋載撞向黑煙囪的二十五分鐘極限倒數下，如何利用超聲空化剝離金屬硫化物結殼並利用 378°C 巨大溫差為機械超級發條蓄能？",
          "summary": "『鸚鵡螺-IV 號』主電池剩餘電量跌至 6.8%，面臨全艇斷電強制拋載並撞擊黑煙囪石筍的致命絕境。關鍵時刻，眾人靠近半埋在玄武岩裂隙中的五十年前『深藍專案·熱液溫差實驗一號機』。海嵐操作左側機械臂釋放 24.5kHz 超聲空化微射流震碎數公分厚的硫化物外殼，露出高純度紫銅導熱熱靴；誠浩對接高壓同軸電纜，利用黑煙囪 380°C 熱液與 1.8°C 深層海水間高達 378°C 的極端溫差，啟動『塞貝克效應』狂暴回血，電網重回 380 伏特！更神奇的是，熱電與形狀記憶合金直接上弦驅動，將一萬五千牛頓·米的機械動能蓄滿龍骨深處的『超高壓機械恆力發條箱』！充能完畢後，解鎖了爺爺留下的加密錄音：一艘五十年前非法鑽探船骸死死壓在深海零號鐘台的主傳動輪上，少年們向七千米海脊全速開拔！",
          "summaryEn": "With main battery reserves down to a precarious 6.8%, Nautilus-IV faces total power failure and forced ballast release into the razor-sharp black smoker chimneys. In the nick of time, the crew maneuvers toward the sunken Project Deep Blue Hydrothermal Thermoelectric Generator Unit 1. Hailan engages 24.5kHz ultrasonic cavitation descaling to shatter the sulfide crust, exposing copper heat-sink shoes; Leo connects the umbilical to exploit the staggering 378°C gradient between 380°C vent fluid and 1.8°C ambient brine, unleashing the Seebeck Effect to restore 380V bus power! Simultaneously, thermoelectric currents and Shape Memory Alloys (SMA) wind the keel's Constant-Force Mainspring Barrel with 15,000 N·m of mechanical torque! Recharged, the rig decodes grandfather's 50-year-old encrypted transmission: a sunken illegal drillship is pinning the differential drive of Deep Sea Clocktower Zero! The crew surges toward the 7,000-meter ridge canyon!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第九章：溫差熱電的發條充能\n\n深海的殘酷，在於它從不給冒險者任何喘息的餘裕。\n\n剛剛從三百八十度黑煙囪的超壓爆裂中僥倖脫險，「鸚鵡螺-IV 號」的駕駛艙內便響起了一陣令人心悸的急促低頻蜂鳴。\n\n「嘀——嘟——嘀——嘟——」\n\n主儀表盤的琥珀色背景光驟然黯淡，兩側的輔助航儀螢幕相繼熄滅，只剩下中央應急控制台在一閃一閃地亮著刺眼的橘黃色警示。\n\n「警告！主固態鋰硫蓄電池組電壓跌破安全閾值！」\n\n機械柴犬皮可背部的金屬散熱片無力地垂落，眼中的藍光微弱得如同風中殘燭：「連續經歷濁流逆推與應急高壓冷卻油泵過載運轉，主電池剩餘電量僅剩百分之六點八。生命維持循環系統自動切換至『最低功耗節能模式』，預估全艇斷電倒數：二十五分鐘。」\n\n球艙內的溫度開始以肉眼可見的速度下降。\n\n五千公尺深海的極寒像無數根冰冷的鋼針，透過鈦合金雙球殼的縫隙無孔不入地滲透進來。將江呼出的白氣在空中凝結成細小的冰晶，他打了個寒顫，聲音發抖：「全……全艇斷電？如果斷電，電磁鐵壓載鉛塊會自動脫落，我們豈不是會被強制拋載浮回海面？那……那我們豈不是前功盡棄了？！」\n\n「拋載浮回海面還算是最好的結果，將江，」葉旖緁的指尖飛快敲擊著虛擬計算器，神情極度凝重，「我們現在身處阿比斯平原海槽的黑煙囪火山群底部，上方密布著高達三十公尺的玄武岩礦物石筍。如果在失去推進姿態控制的情況下強制上浮，潛艇會直接撞在黑煙囪的滾燙尖頂上，被三百多度的熱液射流徹底熔穿！」\n\n駕駛座上的杜海嵐深吸了一口氣，伸手關閉了右舷非必要的傳感器電源：「我們不能上浮，也不能等死。唯一的生路，就在我們腳下。」\n\n海嵐調轉下視微光攝像機的雲台，將鏡頭對準了斜下方玄武岩裂隙深處的那座半掩埋的金屬巨構——\n\n**「深藍專案·熱液溫差實驗一號機」**。\n\n那座龐大的裝置靜臥在黑煙囪噴口旁的一道平緩海脊上。雖然半個世紀的海底硫化物沉澱在它表面鍍上了一層厚厚的黑色結殼，但在熱液湧浪的沖刷下，兩側巨大的冷熱導熱翼板依然宛如兩隻在深淵中沉睡的金屬巨翼。\n\n「爺爺的熱液溫差發電機……」誠浩走上前，雙眼倒映著那古老而精緻的黃銅鉚接線條，胸中湧起難以遏制的激動，「那是五十年前，老一輩工程師為了『深海零號鐘台』研發的永久能量心臟！」\n\n「溫差發電機？」將江湊了過來，揉著凍僵的雙手，「誠浩，沒有煤炭也沒有柴油，光憑海水溫差就能發電？」\n\n「當然可以！這在物理學上叫做『塞貝克效應（Seebeck Effect）』！」\n\n誠浩立刻調出熱力學電路拓撲圖，向同伴們快速解析：「當兩種不同的半導體材料——P 型和 N 型碲化鉍（Bismuth Telluride）連接在一起，並且兩端存在顯著的溫度差時，高溫端的高能載流子（電子和空穴）就會像受驚的鹿群一樣，瘋狂向低溫端擴散流動！這種微觀電荷的定向定向遷移，會在電路兩端產生強大而持續的直流電動勢！」\n\n誠浩指向窗外那翻滾的黑煙囪：「你們看！煙囪噴出的過熱熱液高達三百八十攝氏度，而周圍深海的水溫只有一點八攝氏度！兩者之間的溫差高達整整三百七十八度！根據卡諾循環極限效率公式，如此極端的溫差梯度，理論轉換效率高達百分之五十以上！這是一座坐落在海底的大型天然核電站！」\n\n「但我們要怎麼把它跟潛艇連起來？」葉旖緁推了推眼鏡，敏銳地指出關鍵難題，「那座實驗機在深海沉睡了五十年，導熱翼板表面覆蓋著厚達數公分的金屬硫化物脆殼。硫化物的導熱係數極低，如果不清除結垢，熱流根本無法傳導進內部的熱電堆晶片！」\n\n「交給我和皮可！」杜海嵐果斷解開安全帶，拉下左側重型機械手臂的控制手柄，「鸚鵡螺-IV 號的左側機械臂配備了高頻超聲空化剝離器（Cavitation Descaler）！皮可，幫我做聲學共振頻率校準！」\n\n「汪！收到指令！鎖定硫化鐵與黃銅礦共振頻率：二十四點五千赫茲！」\n\n機械柴犬雙爪按在控制板上，左側機械臂頂端的超聲探頭在深海中爆發出一陣肉眼可見的密集微空化氣泡！\n\n「滋滋滋滋滋——！！」\n\n高頻超聲震盪在堅硬的礦物結殼表面炸裂開來。數十萬個微小的空化氣泡在高壓下瞬間崩塌，釋放出數千個大氣壓的局部微射流衝擊，將包裹在實驗機表面的黑色硬殼寸寸震碎、剝離！\n\n一片鋥亮如新的高純度紫銅導熱熱靴，伴隨著翻滾的水浪，在深海探照燈下重新展現出耀眼的赤金色光澤！\n\n「導熱靴清理完成！熱端接觸面溫度瞬間飆升至三百六十五度！」葉旖緁興奮地喊道。\n\n「海嵐，釋放高壓低阻同軸電纜卡扣！」誠浩握緊了手動對接搖桿，「目標：實驗機頂部的黃銅自鎖充電插座！」\n\n「電纜已發射！磁力自鎖到位！」\n\n「咔嗒！」\n\n潛艇腹部射出的一枚鈦合金錐形充電探針，在磁引導系統的精確捕捉下，筆直插進了實驗機中央那枚布滿齒輪刻紋的母座之中！\n\n「轟隆隆——」\n\n整座沉睡了半個世紀的溫差發電裝置彷彿被突然注入了生命，深海地脈的滾燙熱能如同澎湃的金色血液，順著厚重的紫銅導熱靴瘋狂湧入核心熱電模組！\n\n主控台上，原本奄奄一息的電壓表指標猛然從危險的「二十四伏特」開始狂暴攀升：\n\n「五十伏特……一百二十伏特……二百四十伏特……三百八十伏特！」\n\n強大的直流電流順著低阻超導電纜呼嘯湧入「鸚鵡螺-IV 號」的電網！\n\n全艦原本熄滅的儀表盤燈光在一秒鐘內由暗轉明，重新綻放出璀璨奪目的琥珀色光輝！\n\n「主電網電壓恢復正常！充電電流高達一百五十安培！」葉旖緁激動地揮舞著拳頭，「蓄電池組電量正在以每分鐘百分之二的速度瘋狂回血！」\n\n「不只是電池，」誠浩嘴角勾起一抹神秘而自信的微笑，「在深海五千米的超高壓下，化學電池隨時有電解液滲漏失效的風險。爺爺當年設計這座發電機，最重要的目的不是充電，而是驅動這個——」\n\n誠浩猛然拉開潛艇地板正中央的一道厚重黃銅防護蓋。\n\n只見在載人艙的底盤龍骨深處，赫然固定著一座直徑半米、由數十片特種因瓦合金與高彈性鈹青銅螺旋捲曲而成的龐大機械結構——**「超高壓機械恆力發條箱（Constant-Force Mainspring Barrel）」**！\n\n「這……這是手錶裡的那種發條？！」將江目瞪口呆。\n\n「沒錯，這是一枚能儲存一萬五千牛頓·米扭矩的深海超級發條！」誠浩拉下機械充能離合器，「熱電模組產生的電流驅動高扭矩磁阻馬達，而另一路熱流則通過形狀記憶合金（SMA）直接熱機轉換，將熱膨脹形變轉化為旋轉力矩，雙管齊下為這枚發條上弦！」\n\n「哢！哢！哢！哢！哢！」\n\n伴隨著一陣沉重有力、節奏分明的純機械齒輪咬合聲，厚達十幾公釐的高強度合金發條在自動上條棘爪的推動下一圈圈收緊、蓄能！\n\n那種純粹由金屬、齒輪與力學所構築的永恆安全感，瞬間充盈了整座球艙！\n\n「發條箱蓄能百分之百！即使全艇所有電子線路徹底燒毀，這枚機械發條也能驅動應急向量螺旋槳全功率運轉三十海里！」誠浩拍了拍發條箱厚實的黃銅外殼，眼神無比堅定。\n\n就在這時，充能完畢的深藍實驗機突然發出一聲清脆的「嘀」聲。\n\n一道被加密了整整五十年的深海聲學數據鏈，順著充電電纜自動解碼，呈現在主控台螢幕中央：\n\n那是一張泛黃的舊時代工程掃描圖，以及一段伴隨著微弱雜音的老杜船長與誠浩爺爺的原始錄音：\n\n『……深藍專案記錄。七號熱液區溫差試驗成功。但我們在下潛至七千米海脊時，發現了一艘失控墜毀的外國非法深海鑽探船骸。』\n\n錄音中傳來爺爺嚴肅而深沉的聲音：\n\n『……這艘巨大的鑽探船在板塊滑移中發生了爆炸沉沒，數千噸重的鑽塔與高壓管道正死死壓在「深海零號鐘台」的主傳動差速輪上！如果不能清理掉這座沉船殘骸，鐘台的擒縱機構將徹底崩毀，大洋板塊將在十二小時內發生不可逆的大斷裂……』\n\n錄音戛然而止。\n\n球艙內陷入了一片令人窒息的震撼與寂靜。\n\n「外國非法深海鑽探船骸？壓在鐘台主軸上？！」將江倒吸一口涼氣。\n\n葉旖緁推了推眼鏡，調出前方更深處的聲納三維地形圖：「在黑煙囪火山帶後方的七千公尺海脊裂谷……確實有一座長達百米的巨大金屬異常反射體。」\n\n杜海嵐的手指握緊了操縱桿，眼神中沒有絲毫畏懼，反而燃燒著遠洋水手破浪前行的烈焰：「原來爺爺他們當年的守護之戰，遠比我們想像的還要壯烈。」\n\n誠浩握緊了拳頭，感受著腳下發條箱傳來的澎湃震顫與電網充盈的強大動力，昂然抬起頭：\n\n「全艇能源已蓄滿！目標：七千米海脊裂谷，出發清理沉船船骸，守護深海零號鐘台！」\n\n金色的「鸚鵡螺-IV 號」在一陣低沉有力的馬達轟鳴中拔錨啟航，化作一道破開沸騰深淵的無畏利刃，向著無盡的黑暗深海全速疾馳！\n",
          "contentEn": "# Adventure Gear: Beacons of the Mariana Abyss\n\n## Chapter 9: Thermoelectric Spring Winding\n\nThe cruelty of the deep ocean lies in the fact that it never grants adventurers a single breath of respite.\n\nHaving barely escaped the catastrophic overpressure rupture of the 380-degree hydrothermal black smoker, a nerve-racking, low-frequency klaxon erupted within the cockpit of the *Nautilus-IV*.\n\n*BEEP——BOOP——BEEP——BOOP——*\n\nThe amber backlight across the main instrument cluster abruptly dimmed. Auxiliary flight displays on both consoles flickered out one after another, leaving only the central emergency terminal flashing an alarming, jagged amber hazard beacon.\n\n\"Warning! Primary solid-state lithium-sulfur battery bank voltage has collapsed past the safety threshold!\"\n\nThe metallic cooling louvers along Piko's spine drooped limply, the blue light in its optical sensors flickering as faint as a candle in a tempest: \"Following continuous full-throttle maneuvers against turbidity currents and prolonged over-drive of the emergency high-pressure cooling pumps, remaining battery capacity has dropped to 6.8 percent. Life-support atmospheric scrubbers have automatically fallen back into 'Minimum Power Conservation Mode.' Estimated total power outage in twenty-five minutes.\"\n\nThe ambient temperature within the titanium sphere began a noticeable, chilling descent.\n\nThe bitter, biting cold of the five-thousand-meter deep seeped relentlessly through the seams of the titanium dual pressure hulls like countless frozen needles. Jiang Jiang's exhaled breath condensed into tiny floating ice crystals in the freezing air; he shivered violently, his voice quavering: \"T-Total power outage? If power dies completely, the electromagnet ballast weights will automatically drop, and we'll be forcibly jettisoned back to the surface! Wouldn't... wouldn't all our efforts be ruined?!\"\n\n\"Jettisoning to the surface would be the best-case scenario, Jiang Jiang,\" Ye Yijie noted, her fingers tapping furiously across the virtual calculation terminal, her expression gravestone-solemn. \"We are currently nestled at the floor of the Abyssal Plain trench within a dense hydrothermal volcanic chimney field, with thirty-meter-tall mineral spires looming right above us. If we are forced to ascend without attitude propulsion, the submarine will drift straight into the scalding spires of the black smokers and be melted clean through by 380-degree hydrothermal jets!\"\n\nFrom the flight seat, Du Hailan drew a deep, steady breath, reaching up to isolate all non-essential starboard sensor arrays: \"We cannot ascend, nor can we sit here waiting for death. Our only lifeline lies right beneath our feet.\"\n\nHailan swiveled the pan-tilt mount of the downward-looking low-light camera, focusing its lens directly toward the semi-buried metal monolith nestled deep within the basalt fissure below—\n\n**\"Project Deep Blue · Hydrothermal Thermoelectric Generator Unit 1\"**.\n\nThe colossal apparatus lay anchored along a gentle basalt ridge adjacent to the black smoker vent. Though half a century of oceanic mineral precipitation had plated its exterior in a thick mantle of black sulfide crust, the vigorous hydrothermal eddies had kept its massive dual heat-exchanger wings polished clean, resembling colossal metallic wings slumbering in the abyss.\n\n\"Grandfather's hydrothermal thermoelectric generator...\" Leo stepped forward, his eyes reflecting the antique, exquisite lines of its brass-riveted construction, a surging wave of emotion igniting in his chest. \"Fifty years ago, the pioneer engineers developed that very module to serve as the perpetual energetic heart of Deep Sea Clocktower Zero!\"\n\n\"A thermoelectric generator?\" Jiang Jiang hurried over, rubbing his numbed hands together. \"Leo, without coal, oil, or diesel, can you actually generate electricity out of seawater temperature differences alone?\"\n\n\"Of course! In physics, this is known as the 'Seebeck Effect'!\"\n\nLeo immediately projected the thermodynamic circuit topology, explaining rapidly to the crew: \"When two distinct semiconductor materials—P-type and N-type Bismuth Telluride—are joined together and subjected to a significant thermal differential between their junctions, the high-energy charge carriers (electrons and holes) at the hot end diffuse vigorously toward the cold end like a startled herd! This directional migration of microscopic charges establishes a formidable, steady direct-current electromotive force across the circuit!\"\n\nLeo pointed out through the viewport toward the roiling black smokers: \"Look out there! The superheated hydrothermal fluid erupting from the vent is scalding at 380 degrees Celsius, while the ambient deep-sea brine is a frigid 1.8 degrees! The temperature differential between them is an astounding 378 degrees! Under the Carnot cycle thermodynamic limit, such an extreme thermal gradient yields a theoretical conversion efficiency exceeding fifty percent! That is a massive, natural nuclear powerplant sitting right on the ocean floor!\"\n\n\"But how do we tether it to the submarine?\" Ye Yijie pushed her glasses up, pinpointing the critical obstacle. \"That experimental rig has slept in the abyss for fifty years. Its heat-exchanger fins are coated in centimeters of brittle metallic sulfide encrustations. Sulfides possess abysmal thermal conductivity; without descaling, heat will never conduct into the core thermoelectric modules inside!\"\n\n\"Leave that to Piko and me!\" Du Hailan unbuckled her harness, hauling back on the heavy-duty portside robotic arm controls. \"The *Nautilus-IV*'s portside arm is equipped with a high-frequency ultrasonic cavitation descaler! Piko, calibrate the acoustic resonance frequency!\"\n\n\"Woof! Command acknowledged! Locking iron sulfide and chalcopyrite resonance frequency: 24.5 kilohertz!\"\n\nThe robotic Shiba Inu slammed both paws onto the control surface, and the ultrasonic probe at the tip of the port manipulator erupted with a visible cloud of dense cavitation micro-bubbles in the brine!\n\n*ZZZZZZ-SCREEEEEE——!!*\n\nHigh-frequency ultrasonic shockwaves shattered violently against the brittle mineral crust. Hundreds of thousands of microscopic cavitation bubbles collapsed under extreme pressure within microseconds, releasing localized micro-jets of thousands of atmospheres that fractured and sheared the black stony shell from the generator!\n\nA pristine, high-purity copper thermal shoe emerged through the churning wash, gleaming with an incandescent reddish-gold luster in the xenon glare!\n\n\"Thermal contact shoe descaling complete! Hot-junction interface temperature skyrocketing to 365 degrees!\" Ye Yijie shouted in exhilaration.\n\n\"Hailan, release the high-pressure low-impedance coaxial umbilical lock!\" Leo gripped the manual docking stick. \"Target: the brass self-latching recharge receptacle atop the rig!\"\n\n\"Umbilical deployed! Magnetic alignment locked!\"\n\n*CLACK!*\n\nA conical titanium charging probe launched from beneath the submersible's keel, seating straight into the gear-etched receptacle in the center of the generator under the guidance of the magnetic docking system!\n\n*RUMBLE-HUMMMM——*\n\nThe thermoelectric generator, dormant for half a century, surged with life as though infused with vitality! The scalding thermal energy of the Earth's tectonic veins surged through the heavy copper shoes like molten golden blood, flooding directly into the core thermoelectric stack!\n\nAcross the console, the dying voltmeter needle leaped upward from a precarious twenty-four volts, rocketing into an astonishing climb:\n\n\"Fifty volts... one hundred twenty volts... two hundred forty volts... three hundred eighty volts!\"\n\nA roaring direct current surged through the superconducting umbilical, thundering into the electrical bus of the *Nautilus-IV*!\n\nThe dimmed cabin instruments blazed back to life in an instant, radiating a brilliant, warm amber illumination throughout the sphere!\n\n\"Main electrical grid voltage restored to nominal! Charging current surging at 150 amperes!\" Ye Yijie pumped her fist with joy. \"Battery reserves are replenishing at two percent per minute!\"\n\n\"And it's not just the batteries,\" Leo's lips curled into a subtle, confident grin. \"Under the crushing pressure of five thousand meters, chemical batteries always carry the latent risk of electrolyte leakage. When grandfather designed this generator, its primary purpose wasn't merely recharging cells—it was driving this—\"\n\nLeo pulled open a heavy, brass-latched hatchway set into the center of the cabin deck.\n\nThere, embedded deep within the keel spine of the manned pressure sphere, sat a massive mechanical assembly half a meter in diameter, forged from dozens of coiled ribbons of specialized invar alloy and beryllium-copper—**\"The Super-High-Pressure Constant-Force Mainspring Barrel\"**!\n\n\"Is... is that a mechanical watch spring?!\" Jiang Jiang stood dumbfounded.\n\n\"Indeed—a deep-sea super-spring capable of storing fifteen thousand newton-meters of torque!\" Leo engaged the mechanical winding clutch. \"Electricity from the thermoelectric module drives high-torque reluctance motors, while an auxiliary thermal fluid conduit engages Shape Memory Alloys (SMA) through direct thermomechanical conversion, using thermal expansion stroke to turn winding gears—winding this spring from two independent energy vectors!\"\n\n*CLACK! CLACK! CLACK! CLACK! CLACK!*\n\nWith a heavy, resonant, mechanical rhythm of meshing gear teeth, the centimeter-thick high-strength alloy mainspring coiled tighter and tighter under the relentless drive of the automatic winding click!\n\nThat unshakeable, eternal sense of security woven purely from metal, gears, and classical mechanics flooded every corner of the pressure hull!\n\n\"Mainspring barrel fully wound to one hundred percent! Even if every electrical circuit on this vessel burns out, this mechanical spring can power the vector thrusters at full output for thirty nautical miles!\" Leo tapped the solid brass casing of the spring barrel, his eyes ablaze with unwavering certainty.\n\nJust then, the fully energized Deep Blue experimental generator chimed with a crisp acoustic ping.\n\nA deep-sea acoustic data transmission, encrypted for half a century, decoded automatically through the umbilical tether, materializing upon the main console:\n\nIt was an aged, yellowed engineering telemetry schematic accompanied by the crackling, historic audio recording of Captain Du and Leo's grandfather from fifty years prior:\n\n*'...Project Deep Blue log. Thermal differential trial in Zone Seven successful. However, upon descending toward the seven-thousand-meter oceanic ridge, we have discovered the wreckage of an unauthorized foreign deep-sea drilling vessel that lost control and plummeted into the trench.'*\n\nGrandfather's grave, resonant voice sounded through the speaker:\n\n*'...The massive drillship suffered structural explosions during tectonic fault slip; thousands of tons of derrick wreckage and high-pressure drilling risers have collapsed directly atop the primary differential transmission gears of Deep Sea Clocktower Zero! If this shipwreck cannot be cleared, the clocktower's escapement will suffer catastrophic destruction, and the oceanic plate will rupture irreversibly within twelve hours...'*\n\nThe audio cut off sharply.\n\nA breathless, awe-struck silence descended upon the cabin.\n\n\"An unauthorized deep-sea drillship? Collapsed right atop the clocktower's main drive arbor?!\" Jiang Jiang sucked in a cold breath.\n\nYe Yijie pushed her glasses up, projecting a 3D sonar bathymetric rendering of the abyss ahead: \"Along the seven-thousand-meter ridge rift beyond this volcanic belt... there is indeed a massive metallic acoustic anomaly measuring over a hundred meters in length.\"\n\nDu Hailan's fingers tightened around the flight yoke, her eyes devoid of fear, radiating the untamed fire of an ocean navigator slicing through the waves: \"The battle of guardianship our grandfathers fought was far more fierce and perilous than we ever imagined.\"\n\nLeo clenched his fists, feeling the thrumming power of the coiled mainspring beneath his boots and the surging energy across the restored electrical grid, his head held high:\n\n\"All shipboard energy banks fully charged! Destination: the seven-thousand-meter ridge canyon—we're clearing that shipwreck and saving Deep Sea Clocktower Zero!\"\n\nWith a deep, resonant hum of its magnetic-coupling thrusters, the golden *Nautilus-IV* weighed anchor, slicing through the boiling abyss like a fearless blade of brass, surging at full throttle into the boundless midnight deep!\n",
          "stemKnowledge": [
            "塞貝克效應與熱電發電（Seebeck Effect & TEG）：不同導體或半導體（碲化鉍）連接處存在溫差 ΔT 時，載流子從熱端擴散至冷端產生熱電動勢 V = S · ΔT；深海 378°C 極端溫差提供了高達 50% 以上的卡諾循環理論極限。",
            "超聲空化微射流除垢（Ultrasonic Cavitation Descaling）：高頻超聲波在液體中引發微氣泡劇烈膨脹與非對稱崩塌，產生速度高達數百米每秒的微射流與千級大氣壓衝擊波，精準震碎剝離金屬表面頑固礦物結殼。",
            "形狀記憶合金（SMA）熱機與恆力發條蓄能：利用鎳鈦合金在奧氏體與馬氏體相變中的形變力矩，直接將熱能轉化為旋轉機械能，為高彈性合金主發條上弦，提供深海不依賴電力的永恆機械動力安全儲備。",
            "深海極限阻抗匹配與熱電功率傳輸：熱電堆內阻極低，需透過阻抗匹配升壓電路使負載阻抗與內阻共軛，實現最大功率傳輸定理（Maximum Power Transfer Theorem）。"
          ]
        },
        {
          "id": 10,
          "file": "第10章_被抹去代號的探勘船骸.md",
          "title": "第 10 章　被抹去代號的探勘船骸",
          "enTitle": "Chapter 10 — The Wreckage of the Redacted Drillship",
          "titleEn": "Chapter 10 — The Wreckage of the Redacted Drillship",
          "shortTitle": "被抹去代號的探勘船骸",
          "concept": "水下自供氧鋁熱劑切割 × 應力腐蝕破裂與氫脆 × 偏心力矩浮力平衡 × 深淵鐘台巨輪甦醒",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "面對重達一萬五千噸且重心失衡的探勘船骸死死壓住深海零號鐘台差速齒輪，如何在 700 個大氣壓下以高溫無氧金屬射流熔斷六根承重立管並利用浮力氣囊偏心力矩化解崩塌危機？",
          "summary": "在七千米深淵的海脊大斷裂中，探險隊遭遇了一艘被刻意抹去所有代號、五十年前沉沒的非法探勘船骸。一萬五千噸的沉重鋼鐵殘骸死死壓在深海零號鐘台的主行星齒輪箱上。誠浩利用爺爺研製的水下高壓自供氧鋁熱劑熔斷刀與浮力氣囊偏心力矩平衡，在千鈞一髮之際熔斷承重鋼管並推落船骸，喚醒了深海巨輪的第一聲鐘鳴！",
          "summaryEn": "In the Great Ridge Fracture at 7,000 meters, the expedition discovers an illicit ghost drillship stripped of all registry markings from fifty years ago. Its 15,000-ton wreckage pins the main planetary differential gear of Chronometer Zero. Utilizing Grandfather's underwater self-oxidizing thermite torches and pneumatic buoyant moment balancing, Leo severs the load-bearing risers and sends the wreckage into the trench, awakening the first chime of the abyssal chronometer!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十章：被抹去代號的探勘船骸\n\n深度計上的數字無情地跨過了七千公尺大關。\n\n「當前深度：七千零八十公尺。環境水壓：七百零八個大氣壓。」\n\n葉旖緁的聲音在球艙內迴盪，顯得格外清晰而緊繃。\n\n七百個大氣壓——這意味著每平方公分的鈦合金外殼上，正死死壓著七百公斤的海水。如果將一輛重型卡車縮小到一張郵票的大小，它的重力就等同於此刻舷窗所承受的壓強。即便「鸚鵡螺-IV 號」擁有最完美的鈦合金球體幾何結構，厚重的金屬殼體也在以每米數微米的幅度向內微觀收縮，將四周的空氣死死壓縮。\n\n舷窗外是一片令人窒息的幽深裂谷。\n\n這座被稱為「海脊大斷裂」的深海峽谷兩側，聳立著如同刀砍斧劈般平整的黑色玄武岩峭壁。在超深海廣角氙氣探照燈的慘白光柱中，前方峽谷正中央，赫然橫亙著一座龐大到令人失語的水下鋼鐵巨獸！\n\n那是一艘長達一百二十公尺、噸位超過一萬五千噸的巨型深海鑽探船骸！\n\n它以一種極其扭曲的姿勢側翻在七千米的海底海脊上。高達數十公尺的主鑽塔早已在當年的劇烈爆炸中折斷坍塌，巨大的合金鋼管、絞盤鋼纜與壓載艙鋼板如同一團被撕碎的雜亂亂麻，在永恆的黑暗中生長出大片大片暗紅色的鐵鏽沉積物。\n\n更令人心驚肉跳的是，這艘沉船所有的艦體塗裝都被人用噴燈刻意抹去，艦橋上原本懸掛船籍銘牌的位置被高溫熔成了一團模糊的鐵疙瘩——這是一艘五十年前被徹底抹去代號、幽靈般潛入馬里亞納海溝底部的非法採礦鑽探船！\n\n「皮可，聲納掃描沉船底部！」誠浩面色冷峻，雙手握住副駕駛台的操作桿。\n\n「汪！多波束聲納穿透掃描啟動！」\n\n機械柴犬皮可雙耳高頻轉動，主控台螢幕上立刻生成了一幅三維立體線框圖。\n\n只見在沉船傾覆的艦舯下方，龐大沉重的重型鑽井架基座與六根直徑一公尺的特種鋼立管，如同數隻重達千噸的鋼鐵巨爪，死死壓在一座半埋在海底岩層中的黃銅機械巨構之上！\n\n而在那堆扭曲變形的鋼樑核心處，赫然露出了半截直徑超過三公尺的巨型黃銅差速齒輪！\n\n「那是……『深海零號鐘台』的主傳動行星齒輪箱！」將江失聲叫了出來。\n\n那枚在水下靜止了半個世紀的巨型黃銅齒輪，齒面上已經被壓出了三道觸目驚心的深痕。幾根粗壯如巨蟒的扭絞鋼纜像死結一樣，死死卡在齒輪的咬合間隙中。只要這艘沉船的殘骸再在重力作用下滑移半公尺，上千噸的鋼鐵重壓就會瞬間將這座精密齒輪徹底碾碎！\n\n「這艘船不是自然失事沉沒的，」杜海嵐調出殘骸側舷的微光特寫鏡頭，眼神中燃燒起怒火，「你們看船殼外側那道長達十公尺的撕裂口——那是內部超壓高爆引發的殉爆。五十年前，這艘非法探勘船試圖用深孔鑽探直接暴力開採海溝核心的稀土金屬與地熱源，結果誘發了深層地脈大滑移。他們在沉沒前，甚至試圖炸毀整座海溝，企圖將老爺子他們的守護基座一同埋葬！」\n\n「難怪爺爺在錄音裡說，必須先清除沉船殘骸……」葉旖緁推了推眼鏡，指著全息屏幕上的力學受力分析模型，「情況比我們想像的更凶險。這艘船骸的重心現在極不穩定，它正好卡在海脊斷層的平衡支點上。如果我們貿然用機械臂去推，一旦引發二次滑坡，一萬五千噸的船體會順著斜坡直接碾壓過去，深海零號鐘台將在零點一秒內化為齏粉！」\n\n「不能硬推，必須實施定向爆破切除與浮力力矩平衡！」\n\n誠浩的大腦如同一台精密運轉的物理計算機，在瞬息之間制定出營救方案：「第一步，我們必須把卡在齒輪咬合面上的六根高壓承重鋼管切斷；第二步，在沉船左舷注入微發泡浮力微球，利用槓桿原理把船體的重心向外側偏移五度，讓它在重力作用下自然滑向無人的外側深淵海槽！」\n\n「切斷六根一公尺粗的特種高強鋼管？！」將江瞪大了眼睛，「誠浩，在七百個大氣壓的深海，電焊和普通的氣割根本點不著啊！海水溫度只有一度，高壓水流會在一瞬間把所有熱量全吸走！」\n\n「普通火焰不行，但水下高壓鋁熱劑（Underwater Thermite）可以！」\n\n誠浩一把拉開工具箱，從防震卡槽中取出三枚散發著金屬銀光的圓柱形特種彈筒：「這是爺爺工坊裡特製的深海自供氧鋁熱劑熔斷刀！它的核心是超細鋁粉與三氧化二鐵的均勻混合物，自帶固態高氯酸鉀氧化劑。點燃後，置換反應（$2\\text{Al} + \\text{Fe}_2\\text{O}_3 \\to 2\\text{Fe} + \\text{Al}_2\\text{O}_3$）會在三千度的高溫下釋放數百萬焦耳的熱能，產生定向熔融鐵水射流，即便是七千米深海的高壓冷水，也無法阻止它切碎鋼鐵！」\n\n「但鋁熱劑的燃燒只有短短十幾秒，」杜海嵐看著沉船周圍紊亂的深海亂流，「這意味著我們的機械臂必須在千分之一米的精度下，貼著齒輪咬合面完成熔斷，稍有偏差，高溫熔融鐵水就會濺在深海零號鐘台的齒面上，造成不可逆的熱損傷！」\n\n「海嵐，我相信你的駕駛技術。」誠浩轉過頭，目光堅毅地注視著這位年輕的遠洋舵手，「將潛艇懸停在沉船鑽架下方兩公尺，我來親自操作主機械臂引導熔斷刀！」\n\n海嵐迎著誠浩的目光，嘴角揚起一抹無畏的笑容：「抓穩了，齒輪少年！在浪尖上我沒輸過，在海底我也絕不會退縮！」\n\n海嵐雙手握緊主副操縱桿，輕推微調油門。\n\n在七千米超高壓的深淵中，重達二十噸的「鸚鵡螺-IV 號」像一隻輕巧的深海蜂鳥，在狂暴的峽谷暗流中穩穩穿透雜亂的沉船鋼纜廢墟，悄無聲息地滑入傾覆的鑽塔陰影之下。\n\n四周都是銹蝕斑斑的尖銳角鋼，距離潛艇外殼最近處只有不到三十公分！\n\n「懸停位置鎖定！相對漂移率小於每秒零點五公分！」海嵐沉聲喝道。\n\n「機械臂展開！鎖定第一根承重鋼管！」\n\n誠浩雙手套入主動液壓伺服外骨骼手套，操控著潛艇前端那隻重達半噸的鈦合金機械爪，緩緩向前伸出。\n\n機械手爪頂端的特種夾具死死卡在了第一根壓在齒輪上的鋼管根部。\n\n「皮可，點火電極就位！脈衝電流激發！」\n\n「汪！電容充電完畢，三千伏高壓脈衝，點火！」\n\n「哧————！！」\n\n一道在七千米深海中刺眼到極致的雪白強光驟然爆發！\n\n水下鋁熱劑在自供氧反應下瞬間劇烈沸騰，三千攝氏度的金屬射流在超高水壓下發出尖銳無比的嘶鳴！熾熱的鐵水如同一柄無堅不摧的光之利劍，在零點幾秒內硬生生熔穿了厚達五十公釐的特種耐壓鋼壁！\n\n原本在七百個大氣壓下飽受「應力腐蝕破裂（Stress Corrosion Cracking）」與「氫脆」折磨的老化鋼材，在超高溫切口處瞬間失穩，伴隨著一聲清脆的金屬崩裂巨響，整根鋼管被乾脆俐落地一分為二！\n\n「第一根斷裂！第二根……第三根！」\n\n誠浩的雙手穩如磐石，汗水從他的鼻尖滴落，但他連眼睛都不眨一下。\n\n伴隨著連續四道刺目的熾白火光，橫壓在齒輪箱上的主要鋼構被相繼熔斷！\n\n然而，當最後一根連接著鑽塔主絞盤的主立管被切斷一半時，沉船殘骸內部突然傳來了一陣令人毛骨悚然的鋼骨扭曲呻吟——\n\n「嘎吱————崩！」\n\n失去了前五根鋼管的支撐，整艘一萬五千噸的巨型船體因為重心微移，猛地向下塌陷了整整二十公分！\n\n「危險！！沉船重心正在向鐘台方向失控傾倒！」葉旖緁失聲尖叫，「最後一根鋼管卡住了！鑽塔塔尖正對著差速齒輪壓下來了！」\n\n「將江！浮力拋射組件，最大功率發射！」誠浩臨危不亂，厲聲暴喝。\n\n「早就等著這一刻了！！」\n\n將江猛地一拳砸在右舷應急拋射控制板上！\n\n「砰！砰！砰！」\n\n三具高壓浮力拋射筒同時激發，三枚巨大的高強度芳綸纖維氣囊精準射向沉船的左舷外殼，隨即在化學產氣劑的劇烈反應下，在深海中瞬間膨脹為直徑三公尺的微孔發泡浮力體！\n\n三具浮力體瞬間產生了超過四十噸的向上抬升力矩！\n\n這股強大的偏心力矩，正好與沉船向內塌陷的重力趨勢發生了劇烈對抗。整座傾斜的沉船船體在半空中猛地一滯，向外的槓桿力矩硬生生將船身向外拉扯了關鍵的五度！\n\n「就是現在！機械臂液壓剪切力全開，折斷它！！」\n\n誠浩青筋暴起，雙手外骨骼狠狠向內一捏！\n\n「喀啦————！！」\n\n最後一截被熔紅的鋼管應聲徹底崩斷！\n\n失去了最後的支撐點，在浮力氣囊的向外推動下，整座高達數十公尺的龐大鑽塔殘骸，連同那艘被抹去代號的深淵幽靈船，宛如一座崩塌的黑色山峰，轟然脫離了海脊邊緣，朝著無底的深淵峽谷一頭栽了下去！\n\n「轟隆隆隆————」\n\n數萬噸鋼鐵在七千公尺的黑暗中翻滾墜落，掀起漫天狂暴的泥浪與水湧，最終消失在永恆的黑洞深處。\n\n呼嘯的暗流漸漸散去。\n\n「鸚鵡螺-IV 號」的探照燈光柱緩緩下移。\n\n在被清理得一乾二淨的玄武岩海床上，那座沉睡了整整五十年的龐大黃銅奇蹟，終於完完整整、毫無遮蔽地展現在了四位少年與機械柴犬的眼前！\n\n那是「深海零號鐘台」的核心動力驅動部。\n\n雖然歲月在它的外殼上留下了斑駁的痕跡，但在剛才脫困的剎那，主差速行星齒輪箱在彈性釋放的推動下，發出了一聲跨越半個世紀的清脆鳴響——\n\n「鐺————！」\n\n宏亮悠遠的鐘鳴，穿透七千米海水，宛如巨人的心跳，在這死寂的海淵中重新甦醒！\n\n誠浩看著那枚終於自由旋轉的黃銅巨輪，眼中泛起激動的淚光。\n\n爺爺留下的路標已被徹底打通，深海零號鐘台本體的最後校準之戰，就在眼前！\n",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 10: The Wreckage of the Redacted Drillship\n\nThe numbers on the depth gauge crossed the 7,000-meter threshold without mercy.\n\n\"Current depth: 7,080 meters. Ambient water pressure: 708 atmospheres.\"\n\nYe Yijie's voice echoed through the spherical cabin, crisp and tight with tension.\n\nSeven hundred atmospheres—this meant every single square centimeter of the titanium hull bore the crushing deadweight of 700 kilograms of seawater. If a heavy cargo truck were shrunken down to the size of a postage stamp, its downward gravitational force would equal the immense pressure exerted on the viewport at this very moment. Even though the *Nautilus-IV* boasted an ideal spherical geometry of titanium alloy, its colossal metal hull was microscopically compressing inward by several micrometers per meter, tightly compressing the cabin's atmosphere.\n\nOutside the viewport lay a suffocating, pitch-black abyssal rift.\n\nFlanking this deep trench—known as the Great Ridge Fracture—were shear basalt cliffs standing as vertical and smooth as if cleaved by a celestial blade. Within the pallid beam of the ultra-deep wide-angle xenon searchlight, an immense underwater iron leviathan stood horizontally across the center of the canyon!\n\nIt was the wreckage of a colossal deep-sea drillship, over 120 meters in length and displacing more than 15,000 tons!\n\nIt lay capsized at an unnatural, violently twisted angle upon the 7,000-meter seafloor ridge. Its towering derrick, dozens of meters high, had collapsed long ago during a catastrophic historical explosion. Massive alloy pipes, winch cables, and ballast bulkhead plates resembled a tangled nest of shredded cords, sprouting vast swathes of dark red rust deposits in the eternal dark.\n\nEven more chillingly, all hull markings, names, and insignias had been deliberately burned away with cutting torches. Where the registry brass plate once hung on the bridge, only a scorched, melted lump of iron slag remained—this was an illicit deep-trench mining drillship from fifty years ago, stripped of all identification and sent like a ghost into the abyss of the Mariana Trench!\n\n\"Pico, initiate sonar penetration scan of the ship's keel!\" Cheng-hao commanded with a steely expression, gripping the co-pilot's control sticks.\n\n\"Woof! Multibeam penetrating sonar scan initiated!\"\n\nThe robotic Shiba Inu Pico swiveled his ears at high frequency, instantly rendering a three-dimensional wireframe topography across the main console display.\n\nBeneath the capsized amidships of the wreck, the massive foundation of the heavy drilling derrick and six specialized steel risers, each one meter in diameter, clamped down like multi-thousand-ton iron talons onto a titanic brass mechanical structure half-buried in the bedrock!\n\nAnd at the very core of those warped, mangled steel girders, half of a colossal brass differential gear exceeding three meters in diameter was plainly exposed!\n\n\"That's... the main planetary differential gearbox of the Abyssal Chronometer Zero!\" Jiang Jiang blurted out in astonishment.\n\nThat gigantic brass gear, frozen in stasis beneath the sea for half a century, bore three horrifyingly deep gouges crushed across its teeth. Several twisted steel cables, thick as python serpents, were wedged like dead knots inside the gear mesh clearances. If the massive wreck slipped even another half-meter under gravity, thousands of tons of deadweight would crush this masterwork of horological precision into scrap iron!\n\n\"This ship didn't sink from a natural accident,\" Du Hailan adjusted the low-light telephoto lens on the hull flank, her eyes blazing with indignation. \"Look at that ten-meter-long ragged rupture on the outer hull—that was a sympathetic explosion triggered by an internal overpressure blast. Fifty years ago, this rogue prospecting ship attempted high-pressure deep drilling to violently pillage rare earth metals and geothermal conduits at the trench's core, inducing a massive tectonic slip. Before going down, they even tried to detonate the entire trench, plotting to bury Grandfather's guardian foundation along with them!\"\n\n\"No wonder Grandfather emphasized in his recording that the drillship wreck had to be cleared first...\" Ye Yijie adjusted her glasses, pointing at the mechanical stress analysis model on the holographic display. \"The situation is far more perilous than we envisioned. The wreck's center of mass is precariously balanced right on the fault line's fulcrum. If we push it blindly with our manipulator arm, any secondary slide will send 15,000 tons of steel crushing directly down the slope, pulverizing Chronometer Zero in a tenth of a second!\"\n\n\"We cannot push it brute-force. We must execute directional pyrotechnic severance combined with buoyant moment balancing!\"\n\nCheng-hao's mind operated like a precision physical computer, calculating the rescue strategy in an instant: \"Step one: we must sever the six high-pressure load-bearing steel risers wedged against the gear teeth. Step two: deploy micro-foamed buoyant ballast modules along the port side of the wreck, using leverage to shift its center of gravity outward by five degrees so gravity naturally slides it down into the barren outer chasm!\"\n\n\"Sever six special high-strength steel risers, each a meter thick?!\" Jiang Jiang's eyes widened. \"Cheng-hao, in a deep ocean under seven hundred atmospheres, electric welding and oxy-fuel torches can't even ignite! The ambient water is barely one degree Celsius—the high-pressure icy water will suck away all thermal energy in a millisecond!\"\n\n\"Conventional flames won't work, but underwater high-pressure thermite will!\"\n\nCheng-hao yanked open the tool locker, extracting three cylindrical silver canisters from their shockproof brackets: \"These are custom deep-sea self-oxidizing thermite cutting torches from Grandfather's workshop! Their core consists of a stoichiometric mixture of ultra-fine aluminum powder and iron(III) oxide, blended with a solid potassium perchlorate oxidizer. Once ignited, the single-displacement redox reaction ($2\\text{Al} + \\text{Fe}_2\\text{O}_3 \\to 2\\text{Fe} + \\text{Al}_2\\text{O}_3$) unleashes millions of joules of thermal energy at 3,000 degrees Celsius, generating a focused jet of molten iron that not even the high-pressure freezing seawater at seven thousand meters can quench!\"\n\n\"Yet thermite burns for barely a dozen seconds,\" Du Hailan noted, observing the erratic deep-sea shear currents swirling around the hull. \"That means our robotic arm must execute the cuts right along the gear mesh line with sub-millimeter precision. A hair's breadth off, and the molten iron slag will splatter onto Chronometer Zero's gear teeth, causing irreversible thermal deformation!\"\n\n\"Hailan, I trust your piloting skills implicitly.\" Cheng-hao turned to face the young ocean helmswoman, his gaze unwavering. \"Hover our submersible precisely two meters beneath the drill derrick. I will personally guide the cutting torch with the primary manipulator!\"\n\nMeeting Cheng-hao's steadfast gaze, a fearless smile curled at the corners of Hailan's lips: \"Hold on tight, gear boy! I've never lost in the storm surges above, and I sure won't back down on the ocean floor!\"\n\nGripping both the primary and auxiliary thruster joysticks, Hailan nudged the fine-tuning throttles.\n\nIn the ultra-high-pressure abyss seven kilometers down, the twenty-ton *Nautilus-IV* maneuvered as gracefully as a deep-sea hummingbird, steadily navigating through the chaotic forest of tangled cables and structural wreckage, slipping noiselessly beneath the shadowed overhang of the collapsed derrick.\n\nJagged, rust-eaten angle irons bristled in every direction, passing within less than thirty centimeters of the submersible's titanium outer skin!\n\n\"Station-keeping lock achieved! Relative drift rate under zero point five centimeters per second!\" Hailan called out in a steady tone.\n\n\"Deploy primary manipulator! Target locked on the first load-bearing steel riser!\"\n\nSlipping his hands into the active hydraulic servo exoskeleton gloves, Cheng-hao commanded the half-ton titanium claw mounted on the submersible's bow to slowly extend forward.\n\nThe specialized clamp at the claw's tip locked firmly around the base of the first steel riser pinning the gear.\n\n\"Pico, ignition electrode in position! Discharge the high-voltage pulse!\"\n\n\"Woof! Capacitors fully charged. Three-kilovolt pulse discharge—ignite!\"\n\n\"*SHHHH————!!*\"\n\nA blinding, piercing burst of pure white radiance erupted into the pitch-black 7,000-meter abyss!\n\nThe underwater thermite boiled violently in its self-oxidizing reaction, unleashing a 3,000-degree-Celsius metallic jet that hissed shrilly under immense water pressure! The incandescent liquid iron cut like an invincible blade of pure light, burning through fifty millimeters of special pressure-resistant steel in mere fractions of a second!\n\nThe aged alloy, already weakened by decades of stress corrosion cracking (SCC) and hydrogen embrittlement under 700 atmospheres of static load, suffered instantaneous structural instability at the incandescent cut line; with a crisp, resonant boom of fracturing metal, the riser split cleanly in two!\n\n\"First riser severed! Second one... third one!\"\n\nCheng-hao's hands remained as steady as granite. Beads of sweat trickled from the tip of his nose, yet his eyes never blinked for an instant.\n\nAccompanied by four consecutive bursts of dazzling white fire, the heavy structural steel members bearing down on the gearbox were sliced apart one after another!\n\nHowever, just as the final primary riser connecting to the main derrick winch was sliced halfway through, an agonizing groan of twisting structural steel reverberated from deep within the shipwreck—\n\n\"*CREEEAK————CRACK!*\"\n\nHaving lost the support of the previous five steel risers, the shifted center of gravity caused the entire 15,000-ton hull to suddenly buckle downward by a full twenty centimeters!\n\n\"Danger!! The shipwreck's center of gravity is collapsing uncontrolled toward the chronometer!\" Ye Yijie cried out. \"The last riser is binding! The tip of the derrick is falling straight down onto the differential gear!\"\n\n\"Jiang Jiang! Fire the buoyancy launch canisters at maximum output!\" Cheng-hao shouted with fierce composure.\n\n\"I've been waiting for this moment!!\"\n\nJiang Jiang slammed his fist down onto the starboard emergency launcher control panel!\n\n\"*THUMP! THUMP! THUMP!*\"\n\nThree high-pressure pneumatic launchers fired in unison, deploying three massive high-tensile aramid-fiber lift bags against the port side of the wreck, which rapidly inflated into three-meter-diameter microcellular syntactic buoyancy pods via rapid-expanding chemical gas generators!\n\nThe three buoyant pods instantly produced over forty tons of upward lifting torque!\n\nThis massive eccentric moment violently countered the inward gravitational collapse of the ship. The tilting hull jerked to a halt in mid-descent, the outward lever arm wrenching the ship's frame back by a critical five degrees!\n\n\"Now! Full hydraulic shearing force on the manipulator—snap it!!\"\n\nVeins bulging on his forearms, Cheng-hao clamped his exoskeleton gauntlets inward with all his might!\n\n\"*CRACK————!!*\"\n\nThe last cherry-red steel section snapped completely under shear stress!\n\nDeprived of its final anchor point and propelled outward by the lift bags, the massive derrick wreckage dozens of meters high—together with the redacted abyssal phantom ship—peeled away from the ridge edge like a collapsing black mountain, plunging headlong into the bottomless canyon abyss!\n\n\"*ROOOOAR————!!*\"\n\nTens of thousands of tons of steel tumbled through the 7,000-meter darkness, churning up a titanic tempest of silt, mud, and boiling turbulence before vanishing forever into the depths of the eternal void.\n\nThe howling undertows gradually settled into quietude.\n\nThe searchlight beams of the *Nautilus-IV* angled slowly downward.\n\nThere, upon the spotless swept basalt seabed, the massive brass marvel that had slumbered undisturbed for fifty years stood unveiled before the four youths and their robotic companion in all its unblemished glory!\n\nIt was the core power transmission drive of the Abyssal Chronometer Zero.\n\nThough decades had left faint patinas upon its casing, the moment it was freed from the crushing weight, the planetary differential gearbox released its stored elastic tension, chiming with a crystal-clear note across half a century—\n\n\"*CLAAAANG————!*\"\n\nA sonorous, majestic chime echoed through seven kilometers of ocean water, resounding like the heartbeat of a sleeping giant awakened in the silent abyss!\n\nWatching the gargantuan brass wheel spin freely at last, tears of triumph welled in Cheng-hao's eyes.\n\nThe trail left behind by Grandfather was now cleared of all obstruction; the final calibration battle for the core of Abyssal Chronometer Zero was right before them!\n",
          "stemKnowledge": [
            "水下自供氧鋁熱劑定向切割（Underwater Thermite Cutting）：超細鋁粉與三氧化二鐵按化學計量比混合（2Al + Fe₂O₃ → 2Fe + Al₂O₃），自帶固態氧化劑與三千度超高溫。即使在缺乏氧氣、極端低溫且水壓超過 700 大氣壓的深海中，熾熱液態鐵水射流也能瞬間熔穿耐壓高強度合金鋼。",
            "應力腐蝕破裂與氫脆（SCC & Hydrogen Embrittlement）：長期在深海高靜水壓與電解質鹽分下，金屬晶界吸附電化學微量氫原子導致鍵合力下降，並在拉應力作用下引發應力腐蝕破裂，使鋼結構在高溫切口處加速發生瞬間失穩與脆性崩斷。",
            "偏心力矩與深海浮力平衡（Eccentric Moment & Buoyant Balancing）：物體在重力與支承反力不共線時產生傾覆力矩。利用化學產氣劑快速充脹高強度芳綸纖維浮力氣囊，在船體外舷施加向上浮力，產生強大偏心反向力矩，巧妙抵抗重力塌陷並引導殘骸脫困滑落。",
            "七千米極限深淵靜水壓（Hadal Hydrostatic Compression）：7,080 米水深處靜水壓強高達 70.8 MPa（約 708 個大氣壓），每平方公分承受超過 700 公斤重壓，即使高強度鈦合金球體也會產生微米級微觀彈性壓縮，需精準掌握材料應變極限。"
          ]
        },
        {
          "id": 11,
          "file": "第11章_深海零號鐘台的敲擊聲.md",
          "title": "第 11 章　深海零號鐘台的敲擊聲",
          "enTitle": "Chapter 11 — The Chimes of Abyssal Chronometer Zero",
          "titleEn": "Chapter 11 — The Chimes of Abyssal Chronometer Zero",
          "shortTitle": "深海零號鐘台的敲擊聲",
          "concept": "地熱雙金屬熱脈衝引擎 × 水下流體阻尼水滴擺 × 恆力擒縱機構 × 板塊構造微應變告警",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在七千兩百公尺深海高壓冰冷環境中，深海零號鐘台如何僅憑地熱溫差維持半世紀永動？當信標卡盤成功嵌入讀取日誌，眾人赫然發現板塊滑移速率暴增萬倍，最後自鎖防逆轉棘齒僅剩七微米行程，大地震倒數計時進入白熱化！",
          "summary": "清理完沉船後，『鸚鵡螺-IV 號』抵達七千兩百米玄武岩海床，終於目睹了巍峨壯麗的三十五米黃銅巨塔——『深海零號鐘台』！誠浩向眾人解開了鐘台利用地熱微脈衝雙金屬熱機與深海超流線型水滴平衡擺實現半世紀永動與精確走時的物理奇蹟。誠浩操作機械臂將信標卡盤嵌入中央插槽，然而解密後的五十年板塊應變日誌卻揭示出滅頂危機：地脈滑移速率暴漲一萬兩千倍，最後的防逆轉自鎖棘齒僅剩最後七微米接觸行程，太平洋大地震進入毀滅性倒數！",
          "summaryEn": "Clearing the drillship, Nautilus-IV reaches the 7,200-meter basalt bed, beholding the 35-meter brass monolith: Abyssal Chronometer Zero! Cheng-hao unravels how its geothermal bimetallic pulse engine and hydrodynamic teardrop pendulum achieved perpetual motion and isochronous timekeeping for half a century without external power. Docking and locking Grandfather's beacon disc into the core socket, decrypted 50-year tectonic strain curves reveal an impending catastrophe: fault slip has accelerated 12,000-fold, leaving only seven micrometers of contact margin on the master anti-reverse pawl before mega-thrust earthquake rupture!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十一章：深海零號鐘台的敲擊聲\n\n當一萬五千噸的沉船殘骸徹底墜入無底的深谷，掀起的狂暴深海泥浪在重力沉降與海底暗流中逐漸平息，七千兩百公尺的玄武岩海床上，終於露出了整座不可思議的機械奇蹟之完整真容。\n\n「深度計讀數：七千兩百二十公尺。環境水溫：一點五攝氏度。環境靜水壓：七百二十二個大氣壓。」\n\n葉旖緁凝視著主控台上的全息遙測數據，清澈的眼眸中倒映著探照燈光柱下那座震撼人心的龐大造物，少女平日冷靜清脆的聲音裡，此刻帶著難以掩飾的屏息與由衷的敬畏。\n\n在「鸚鵡螺-IV 號」四道超高流明深海廣角氙氣探照燈的交匯處，一座巍峨聳立在深海裂谷正中央的黃銅與玄武岩機械巨塔，如同一位從遠古神話中走出的青銅巨人，傲然屹立在冰冷死寂、永恆黑暗的大洋深淵之中！\n\n這就是整整五十年前，由誠浩的爺爺與老一輩深海地質先驅們秘密安放在板塊隱沒帶深處的守護核心——「深海零號鐘台（Abyssal Chronometer Zero）」！\n\n整座鐘台高達三十五公尺，其主體骨架完全摒棄了陸地建築常見的空心薄壁結構，而是採用了耐超高壓、抗強電解質海水腐蝕的深海特種高鎳黃銅與航太級鈦合金無縫重型桁架澆鑄而成。其基座如同一隻巨大的玄武岩八爪巨錨，透過十二根直徑達兩公尺的深層合金岩石錨栓，死死咬合在太平洋板塊與微板塊斷層帶的裸露結晶基岩之上。\n\n即便經歷了半個世紀的深海浸潤與高壓考驗，鐘台的外表面依然閃爍著深邃而沉穩的青金色微光。在金屬骨架的非運動死角處，甚至依附生長著一簇簇半透明的深海玻璃海綿、雪白如瓷的深海盲蟹，以及如金黃色蕨類般隨暗流搖曳的深海海百合，構成了一座孤獨卻生機盎然的深海機械珊瑚礁。\n\n而在鐘台三十五公尺高的塔樓頂端，赫然懸掛著一座直徑超過四公尺、通體鑄造著古典齒輪雲紋的巨大倒鐘形雙曲面青銅共振腔！\n\n「鐺————！！」\n\n沉穩、雄渾、穿透力極強的金屬鐘鳴，再次以極其恆定的節奏在漆黑的海水中轟然響起！\n\n那聲音並非透過空氣振動傳播，而是將數噸重的特種青銅擺錘敲擊動能，直接耦合進密度極高且近乎不可壓縮的高壓海水中！水下聲速高達每秒一千五百公尺，比在空氣中傳播快了四倍以上。雄渾的鐘聲化作一道道低頻次聲波與可聽聲波脈衝，像巨人的心跳一樣，在綿延數千米的海脊峽谷兩側玄武岩絕壁上來回折射激盪，引發了強烈的聲學駐波共振！\n\n就連重達二十噸、外殼厚實的「鸚鵡螺-IV 號」鈦合金球艙，都在這陣低沉而肅穆的鐘鳴中，產生了極其細微卻清晰可感的同頻共振微顫！\n\n「太不可思議了……」將江整個人幾乎貼在了防壓丙烯酸舷窗上，圓圓的臉龐上寫滿了極度的震撼與難以置信，「這座大鐘在七千米冰冷無光、七百多個大氣壓的海底泡了整整五十年！沒有任何電纜連到陸地上，也沒有核反應爐，更沒有現代鋰電池，它是靠什麼動力一直運轉、甚至到現在還在準確敲鐘的？！」\n\n「這就是爺爺一生中最驕傲的機械傑作——地熱微脈衝雙金屬熱機（Geothermal Bimetallic Pulse Engine）！」\n\n誠浩注視著鐘台底座上不斷交替伸卡、富有生命般呼吸起伏的巨大金屬柱列，目光中閃爍著由衷的崇敬與自豪。少年胸口那枚金屬齒輪項鍊，彷彿也感應到了前方巨塔的呼喚，泛起淡淡的溫熱。\n\n誠浩在副駕駛台迅速調出全息多波束聲納穿透掃描模型，向夥伴們揭開了這座深海永動鐘台的動力秘密：「大家看鐘台的基座下方！那裡正好跨在斷層帶的一條微型地熱熱液裂隙之上，裂隙中以恆定的地質脈衝不斷湧出一百二十攝氏度的過熱熱液流體；而在裂隙上方不到五公尺處，則是水溫只有一點五攝氏度的極寒深層海水！」\n\n「巨大的溫度梯度！」葉旖緁瞬間心領神會，推了推鼻樑上的眼鏡驚呼，「爺爺利用了這層在深海永不熄滅的溫差與熱通量？！」\n\n「沒錯！但老爺子沒有採用脆弱易老化、且在高壓海水腐蝕下極易失效的電子半導體熱電偶，而是回歸了鐘錶工藝中最純粹、最可靠的極限固體材料熱力學！」\n\n誠浩放大鐘台底座的結構剖面圖：「在底座的核心動力艙內，環形排列著三十六組由『高熱膨脹係數錳銅合金』與『零熱膨脹係數因瓦合金（Invar, Fe-36%Ni）』在高溫真空下熱軋複合而成的巨大雙金屬柱！錳銅合金的膨脹係數高達每開爾文百萬分之二十，而因瓦合金在常溫至兩百度內的膨脹係數幾乎為零！」\n\n「當海底地熱脈衝湧出包裹金屬柱時，兩種合金膨脹失配，柱體向因瓦合金一側劇烈彎曲並頂升；而當地熱流體隨洋流脈動退去、冰冷海水湧入時，柱體冷卻迅速伸直復位！」\n\n「每次熱脹冷縮的微觀形變雖然只有不到三公釐，」杜海嵐看著控制台上的位移矢量圖，忍不住由衷讚嘆，「但這三公釐的位移，卻是在七百二十個大氣壓的超高負載下釋放出的萬噸級金屬熱膨脹應變力！」\n\n「這正是神來之筆！」誠浩興奮地在操作台上演示力學傳導模型，「爺爺在雙金屬柱頂端設計了一套精妙絕倫的單向微步進棘輪放大機構（Micro-stepping Ratchet Escalation）！每一次幾毫米的微觀熱脹冷縮，都被轉化為恆定單向旋轉的機械力矩，透過四級行星減速齒輪組，為頂部那根直徑四十公分、由特種鉻鎳鐵合金製成的超大扭矩扭簧不斷上弦蓄能！」\n\n「那根發條彈簧儲存了超過五十萬焦耳的巨大機械勢能！」將江倒吸一口涼氣，「也就是說，只要地球內部還有地熱，只要馬里亞納海溝的海水依舊冰冷，這座鐘台就能在深海永無止境地走下去！」\n\n「動力有了，但它又是如何在水下保持幾十年分秒不差的精準走時呢？」葉旖緁提出了身為科研學霸最關心的物理問題，「在陸地上，鐘錶依賴重力單擺或微型游絲擺輪；但在七百個大氣壓的高密度高黏度海水浸泡下，水體對擺錘的流體阻尼（Fluid Damping）是空氣的近千倍！普通鐘擺在水裡擺動不到三秒鐘，動能就會被黏滯阻力彻底消耗殆盡而停擺啊！」\n\n「汪！這就是深海零號鐘台最神奇的擒縱系統（Deep-Sea Remontoire Escapement）！」\n\n機械柴犬皮可雙爪快速敲擊中控台，將主球艙高倍光學變焦鏡頭死死鎖定在鐘台中部的透雕機械艙內。\n\n只見在巨大的黃銅齒輪箱核心，一對形如深海蝠鱝雙翼的超流線型鈦金屬擒縱叉，正以極其穩健的頻率在擒縱輪齒間交替卡合釋放，發出「嗒、嗒、嗒」的清脆金屬咬合聲。\n\n而在擒縱叉下方懸掛著的，不是普通的圓盤或重錘，而是一枚完全浸泡在深海高壓水體中的巨型水滴狀中空鈦合金平衡擺（Hydrodynamic Tear-drop Pendulum）！\n\n「快看平衡擺的幾何外形！」葉旖緁緊盯著流體動力學實時模擬雲圖，失聲讚嘆，「它的前緣是完美的鈍圓形，後緣收窄為平滑的尖刃微弧，表面覆蓋著微奈米級的仿鯊魚皮減阻溝槽！這個外形完全符合納維-斯托克斯方程（Navier-Stokes Equations）中的深海超臨界減阻曲面，能將海水在擺動時的卡門渦街（Kármán Vortex Street）剝離阻力降低百分之九十二以上！」\n\n「不僅如此，」誠浩補充道，「擺體內部灌注了不可壓縮的輕質低黏度矽油，實現了內外水壓的精確自平衡；而擺軸軸承則鑲嵌了三十六顆天然藍寶石軸眼（Sapphire Jewel Bearings），配合每兩分鐘釋放一次的『恆力擒縱發條（Remontoire d'égalité）』，徹底消除了發條力矩衰減對走時精度的干擾，實現了在深海七千米水阻環境下不可思議的物理等時性（Isochronism）！」\n\n「這簡直是一座沉睡在海淵底部的機械神殿……」杜海嵐眼中閃爍著敬佩與神往的光芒，雙手平穩地推動側向微調推進器，「各位抓穩，鐘台的檢修舷梯與核心插槽就在東南向第一層甲板。老爺子當年既然留下了信標卡盤，這裡一定有專屬的對接插槽，我們準備靠泊！」\n\n「鸚鵡螺-IV 號」在海嵐精湛細膩的操控下，在紊亂的海底熱液剪切流中劃出一道優雅的金色軌跡，如同一隻靈活的深海蜂鳥，悄無聲息地貼近了鐘台頂部三十公尺處的第一維護平台。\n\n伴隨著「嗡——」的一聲悶響，潛艇底部的四具耐高壓電磁定盤精準吸附在鐘台外側的鈦合金承重格柵上。\n\n「泊位吸附鎖定！微動抑制阻尼器全開！」海嵐長舒一口氣，匯報泊位狀態。\n\n「皮可，展開高壓多功能維護探頭，清洗並定位爺爺的信標校準插槽！」誠浩立刻下達指令。\n\n「汪！超聲波除垢噴頭就位！雷射測距與光學標記掃描啟動！」\n\n皮可背部伸出兩隻靈活的六軸微型機械臂，探出球艙外，高頻超聲波震盪頭貼近鐘台核心控制箱外殼，發出微弱而尖銳的空化聲。覆蓋在面板表面幾公分厚的金屬硫化物硬殼與灰黑色的海底沉積物，在瞬間被震碎剝離，化作一團微細的塵霧消散在海水裡。\n\n在斑駁厚實的金屬面板中央，一塊雕刻著「冒險齒輪·深藍專案·1974」工整隸書字樣的純銀紀念銘牌，重新沐浴在少年們的探照燈白光之中！\n\n在銘牌正下方，赫然露出一處直徑十五公分、帶有精密三芒星齒狀防呆插銷的深藍色金屬凹槽！\n\n那凹槽的幾何尺寸、三芒星倒角角度以及二十四道微米級加密同心卡齒，與誠浩在鹿陽鎮老鐘樓閣樓古董天文座鐘底座中找到的那枚重型鈦鋯合金信標卡盤完全分毫不差！\n\n「卡槽百分之百吻合！」葉旖緁激動地說道，「這就是鐘台的中央機械控制中樞！只要把信標卡盤插入，就能啟動卡盤內部的解碼齒輪組，讀取零號鐘台在過去半個世紀中記錄下的全部板塊構造應力數據，並手動校準差速指針！」\n\n「主機械臂接管！裝載鈦金屬信標卡盤！」\n\n誠浩將副駕駛台上的液壓伺服反饋手套緊緊戴在雙手上，操控著潛艇前端那隻重型鈦合金機械爪，從安全保溫艙中穩穩夾起那枚沉甸甸的鈦鋯合金卡盤。\n\n卡盤表面那層經過五十年前爺爺親手淬火回火打磨的幽藍色金屬光澤，在七千米深海極限水壓與冰冷的海水包圍下，泛起一圈溫暖而無比堅毅的金色光暈。\n\n在誠浩沉穩無比的操控下，機械爪頂著七百個大氣壓的阻力，以毫米級的精度將卡盤緩緩推向控制台插槽。\n\n「哢——噠！！」\n\n伴隨著一聲清脆厚重、穿越半個世紀時空的精密金屬機械自鎖巨響，卡盤的三芒星卡榫完美嵌入了零號鐘台的核心插槽！\n\n下一秒，整座沉寂了整整五十年的龐大青銅機械巨塔內部，突然傳來了一陣令人血液沸騰的齒輪聯動狂潮！\n\n「喀啦啦啦——嗒、嗒、嗒、嗒！」\n\n插槽周圍的三十六枚微型純金導電觸針在彈簧的推動下齊刷刷彈出，與卡盤背面的加密同心銅環牢牢貼合。零號鐘台核心深處的發條扭矩透過多級差速傳動軸層層傳遞，卡盤正中央那枚沉寂了數十年的同心雙指針，突然劇烈震顫了起來，隨後開始以極為穩健的角速度順時針旋轉！\n\n緊接著，「鸚鵡螺-IV 號」主控台上的聲學數據解碼器發出陣陣激昂的蜂鳴，原本靜止的遙測屏幕上，瀑布般的綠色地質日誌數據瘋狂傾瀉而下！\n\n「信標硬件握手成功！機械打孔合金帶與光學微刻度日誌解密完畢！」皮可發出興奮的大叫，「正在加載太平洋板塊五十年深淵應變曲線圖！」\n\n然而，僅僅過了不到五秒鐘，站在主控屏幕前的葉旖緁，那原本洋溢著驚喜與自豪的清秀臉龐，卻在剎那間徹底褪去了血色，雙唇劇烈地顫抖了起來！\n\n「怎麼了，旖緁？數據有什麼問題？！」誠浩敏銳地察覺到了氣氛的劇變，急步走上前去。\n\n葉旖緁的手指冰涼無比，她顫抖著放大了三維全息投影中最下方一條觸目驚心的深紅色剪切應變折線圖，聲音中帶著深入骨髓的驚駭：\n\n「誠浩……海嵐……你們快看這條基底滑移速率曲線！正常情況下，太平洋板塊沿著馬里亞納海溝向地幔深處的俯衝速率是每年八到十公分，也就是平均每秒鐘僅僅滑移零點零零二五微米……」\n\n「但現在呢？！」將江急得一把抓住了控制台的邊緣。\n\n「在過去的四十八小時裡，這條俯衝帶斷層深處的微應變滑移速率……飆升了整整一萬兩千倍！！」\n\n葉旖緁猛地轉過身，眼眶泛紅，目光中滿是難以置信的恐懼：「五十年前非法探勘船引發的深部地震炸藥殘留、加上我們剛才在黑煙囪區切斷沉船時造成的應力重分佈，徹底破壞了這座海脊斷裂帶最後的幾何自鎖平衡！現在阻擋這片長達三百公里、重達數十億噸的板塊俯衝帶沒有發生全面毀滅性大滑坡的……只剩下深海零號鐘台底部的那組主防逆轉棘齒輪了！」\n\n話音未落，鐘台三十五公尺高的塔身內部，突然傳來了一陣令人毛骨悚然的金屬受力微變呻吟——\n\n「嘎——吱————！！」\n\n那是數十億噸地脈構造剪切應力，正如同一座倒塌的山脈，死死壓在直徑四公尺的因瓦合金主擒縱齒輪上的恐怖抗爭聲！\n\n在全息高精度雷射干涉儀的超微觀掃描視圖中，所有人無比清晰地看見：那枚承載著整座深海鐘台最後防線的主自鎖防逆轉棘齒，齒尖與卡爪之間的硬質合金接觸咬合餘量，正在以肉眼可見的速度發生著致命的微觀滑脫！\n\n十微米……\n\n九微米……\n\n八微米……\n\n「刺耳的超高危蜂鳴驟然撕裂了球艙內的寂靜！」皮可背部的紅色旋轉警報燈在球艙內投下刺目的血光，「系統測算：自鎖棘爪僅剩最後七微米接觸行程！一旦齒尖徹底脫扣滑移，鎖定在七千米地殼深處的兆焦耳級板塊彈性應變能將在瞬間釋放，引發九級以上的特大逆衝斷層海嘯地震！！」\n\n「爺爺信標上的倒數計時……根本不是給我們從容校準的七十二小時！」杜海嵐死死盯著全息屏幕上飛速流逝的微米倒計時，臉色凝重如鐵，「這是地脈徹底崩扣的最後死線！」\n\n誠浩猛地抬起頭，隔著二十公分厚的防壓舷窗，注視著那座在冰冷深淵中發出沉重悲鳴的青銅鐘台，雙手死死攥緊，骨節因為過度用力而泛出一片青白。\n\n爺爺留下的零號鐘台喚醒了深淵，但拯救太平洋免於海嘯浩劫的真正戰役，已經逼到了最後七微米的生死懸崖邊！\n",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 11: The Chimes of Abyssal Chronometer Zero\n\nWhen the fifteen-thousand-ton shipwreck tumbled completely into the bottomless trench, and the raging abyssal silt churned up by its fall gradually settled amidst gravitational deposition and deep-sea undertows, upon the basalt seabed at 7,200 meters, the full majesty of that unbelievable mechanical marvel was finally unveiled in its entirety.\n\n\"Depth gauge reading: 7,220 meters. Ambient water temperature: 1.5 degrees Celsius. Ambient hydrostatic pressure: 722 atmospheres.\"\n\nYe Yijie gazed at the holographic telemetry data upon the master console, her clear eyes reflecting the awe-inspiring, monolithic construct illuminated within the floodlight beams, her usually calm and crisp voice now tinged with an unmistakable breathless reverence.\n\nAt the convergence of four ultra-high-lumen wide-angle deep-sea xenon searchlights aboard the *Nautilus-IV*, a colossal mechanical tower of brass and basalt loomed directly in the center of the ocean rift, standing like a bronze titan stepped forth from ancient myth, rising proudly amidst the frigid, lifeless, eternal darkness of the abyssal deep!\n\nThis was none other than the guardian nexus secretly anchored deep within the subduction zone fifty years ago by Cheng-hao's grandfather and the elder generation of deep-sea geological pioneers—the *Abyssal Chronometer Zero*!\n\nThe entire chronometer tower stood thirty-five meters tall. Its primary structural frame had completely discarded the hollow, thin-walled designs typical of terrestrial architecture, forged instead from cast seamless heavy trusses of deep-sea high-nickel specialized brass and aerospace-grade titanium alloy capable of withstanding astronomical hydrostatic loads and hyper-saline galvanic corrosion. Its foundation resembled a titanic eight-pronged basalt anchor, biting tenaciously into the exposed crystalline bedrock of the fault zone between the Pacific Plate and the microplate through twelve two-meter-diameter alloy rock anchor bolts.\n\nEven after enduring half a century of deep-sea immersion and crushing pressures, the chronometer's exterior still gleamed with a profound, steadfast bronze-gold luminescence. In the non-moving dead zones of the metal lattice, there even clung colonies of translucent deep-sea glass sponges, porcelain-white abyssal blind crabs, and golden crinoids swaying like ferns with the abyssal currents, forming a solitary yet thriving mechanical reef.\n\nAnd atop the thirty-five-meter summit of the tower hung a colossal, inverted bell-shaped hyperbolic bronze cavity resonator exceeding four meters in diameter, cast with classical gear and cloud filigree!\n\n\"*CLAAANG————!!*\"\n\nA deep, majestic, and immensely penetrating metallic chime reverberated thunderously once more through the pitch-black waters in an impeccably constant tempo!\n\nThat sound was not propagated through air vibrations, but rather directly coupled the kinetic strike of a multi-ton bronze hammer into the hyper-dense, nearly incompressible high-pressure seawater! Underwater sound speed reached 1,500 meters per second—more than four times faster than through air. The sonorous chime transformed into low-frequency infrasonic and audible acoustic pulses, reverberating like the heartbeat of a sleeping titan across the sheer basalt precipices flanking the kilometers-long ridge canyon, generating intense acoustic standing-wave resonances!\n\nEven the heavy twenty-ton titanium alloy spherical hull of the *Nautilus-IV* trembled with a faint yet distinctly perceptible micro-vibration in sympathetic resonance with that solemn chime!\n\n\"This is simply miraculous...\" Jiang Jiang was pressed virtually flat against the pressure-resistant acrylic viewport, his round face painted with sheer disbelief and awe. \"This giant clock has been soaking down here at seven thousand meters in freezing blackness under more than seven hundred atmospheres for half a century! No cables connected to land, no nuclear reactor, and certainly no modern lithium batteries—what on earth powers it to keep running, and even now, to keep striking the bells so accurately?!\"\n\n\"This is Grandfather's proudest mechanical masterpiece of his entire life—the *Geothermal Bimetallic Pulse Engine*!\"\n\nCheng-hao gazed upon the massive column arrays at the base of the clocktower that alternately extended and locked, rising and falling like the breathing of a living organism, his eyes shining with heartfelt reverence and pride. The metal gear pendant resting against his chest seemed to resonate with the calling of the giant tower ahead, radiating a gentle warmth.\n\nCheng-hao quickly summoned the holographic multibeam penetrating sonar scan on the co-pilot console, unraveling the power secret of this abyssal perpetual clock for his companions: \"Look beneath the chronometer's foundation! It straddles directly over a micro-geothermal hydrothermal fissure along the fault zone, which continuously belches out superheated fluids at 120 degrees Celsius in steady geological pulses; while less than five meters above that fissure flows the freezing abyssal brine at barely 1.5 degrees!\"\n\n\"An immense thermal gradient!\" Ye Yijie grasped the principle in an instant, pushing her glasses up her nose in astonishment. \"Grandfather utilized this perpetual thermal gradient and heat flux in the abyss?!\"\n\n\"Precisely! But Grandfather did not rely on fragile electronic semiconductor thermocouples prone to aging and galvanic failure under high-pressure seawater; instead, he returned to the purest, most dependable solid-state thermodynamics in horological engineering!\"\n\nCheng-hao magnified the structural cross-section of the chronometer base: \"Within the core power module of the foundation, thirty-six massive bimetallic columns are arranged annularly, forged by vacuum hot-rolling a high-thermal-expansion manganese brass alloy against a zero-expansion Invar alloy (Fe-36%Ni)! Manganese brass possesses a thermal expansion coefficient as high as twenty parts per million per Kelvin, whereas Invar's expansion coefficient from ambient to two hundred degrees is virtually zero!\"\n\n\"When the geothermal pulse erupts and envelops the metal pillars, the differential expansion causes the columns to bow severely toward the Invar side, driving an upward stroke; when the hydrothermal plume ebbs with the current and freezing seawater rushes in, the columns cool and snap back straight!\"\n\n\"Though each thermal cycle produces a microscopic displacement of less than three millimeters,\" Du Hailan marveled as she examined the displacement vector telemetry, \"those three millimeters release tens of thousands of tons of thermal expansion strain force against the colossal 720-atmosphere static load!\"\n\n\"That is the stroke of absolute genius!\" Cheng-hao gestured enthusiastically over the mechanics simulation on his display. \"At the crown of each bimetallic column, Grandfather engineered an exquisite one-way micro-stepping ratchet escalation mechanism! Every few millimeters of microscopic expansion and contraction are converted into constant unidirectional rotational torque, which continuously winds a massive forty-centimeter-diameter Inconel torsional bar spring at the top through a four-stage planetary gear reduction train!\"\n\n\"That mainspring stores over five hundred thousand joules of elastic potential energy!\" Jiang Jiang gasped. \"In other words, as long as the Earth has internal geothermal heat, and as long as the Mariana Trench remains freezing cold, this clocktower can tick on in the abyss for all eternity!\"\n\n\"It has endless power, but how does it maintain chronometric accuracy across decades down in the ocean without losing a second?\" Ye Yijie raised the physical dilemma that concerned her most as an academic scholar. \"On land, clocks rely on gravity pendulums or delicate hairspring balance wheels; but submerged under 700 atmospheres of high-density, high-viscosity brine, the fluid damping exerted on a pendulum is nearly a thousand times greater than in air! A conventional pendulum would lose all kinetic energy to viscous drag and grind to a dead halt within three seconds!\"\n\n\"Woof! That is the secret of Chronometer Zero's most astonishing Deep-Sea Remontoire Escapement!\"\n\nThe robotic Shiba Inu Pico tapped his paws swiftly across the console, locking the main sphere's optical zoom lens onto the openwork mechanical chamber in the midsection of the clocktower.\n\nThere, in the heart of the massive brass gearbox, a pair of ultra-streamlined titanium pallet forks shaped like the wings of a deep-sea manta ray were engaging and releasing between the escapement teeth with rock-solid rhythm, emitting crisp metallic clicks: *tick, tick, tick*.\n\nAnd suspended beneath the pallet forks was not a common disk or bob, but a gigantic, hollow, teardrop-shaped titanium alloy balance pendulum fully immersed in the high-pressure abyssal seawater!\n\n\"Look at the hydrofoil geometry of the balance pendulum!\" Ye Yijie gasped as she scrutinized the real-time hydrodynamic velocity field. \"Its leading edge is a perfect blunt hemisphere, tapering smoothly into a sharp knife-edge trailing foil, with its surface etched with micro-nanoscale sharkskin riblets! This shape perfectly satisfies the deep-sea supercritical drag-reduction profiles derived from the Navier-Stokes equations, slashing the Kármán vortex shedding resistance by more than ninety-two percent during every swing!\"\n\n\"Furthermore,\" Cheng-hao added, \"the pendulum interior is filled with incompressible, low-viscosity silicone oil to achieve exact internal-external pressure equalization; while its pivots are set in thirty-six natural sapphire jewel bearings, paired with a constant-force remontoire spring that trips every two minutes, completely isolating the escapement from torque decay in the mainspring and achieving miraculous physical isochronism through 7,000 meters of water resistance!\"\n\n\"This is nothing short of a mechanical temple slumbering at the bottom of the world...\" Du Hailan's eyes shimmered with reverent admiration as her steady hands eased the lateral thruster verniers. \"Hold on, everyone. The maintenance gantry and primary keyway are on the southeast first-tier deck. Since Grandfather left that beacon disc behind, there must be a docking socket here. Prepare to berth!\"\n\nUnder Hailan's consummate piloting, the *Nautilus-IV* traced an elegant golden arc through the chaotic thermal shear currents, slipping as nimbly as a deep-sea hummingbird alongside the primary maintenance platform thirty meters up the tower.\n\nWith a resonant metallic *hummm*, the four heavy-duty electromagnet pads on the submersible's underside clamped securely onto the titanium alloy load-bearing grating.\n\n\"Berth locked! Micro-motion suppression dampers engaged!\" Hailan exhaled in relief, confirming station telemetry.\n\n\"Pico, deploy the high-pressure multipurpose maintenance probe; scour the casing and locate Grandfather's beacon calibration keyway!\" Cheng-hao ordered immediately.\n\n\"Woof! Ultrasonic descaling nozzle armed! Laser ranging and optical fiducial scanning engaged!\"\n\nA pair of agile six-axis micro-manipulators extended from Pico's dorsal bay outside the spherical cabin. The high-frequency ultrasonic transducer pressed against the clocktower's control housing, emitting a shrill, piercing cavitational hiss. The brittle crust of metal sulfides and grayish sediment several centimeters thick was shattered in an instant, dissolving into a faint plume of mineral dust that vanished into the current.\n\nIn the center of the heavy metal panel, a sterling silver commemorative plaque engraved with the neat clerical script \"Adventure Gear · Deep Blue Project · 1974\" bathed once more in the floodlight beams of the four young adventurers!\n\nDirectly beneath the plaque lay an exposed circular midnight-blue recess fifteen centimeters in diameter, featuring an intricate three-star keyed locating pin!\n\nThe geometric dimensions, the three-star chamfer angles, and the twenty-four micro-scale concentric locking teeth of the recess matched the heavy titanium-zirconium alloy beacon disc Cheng-hao had recovered from the plinth of the antique clock in the Lu-Yang clocktower down to the exact micron!\n\n\"The socket is a one-hundred-percent match!\" Ye Yijie exclaimed with excitement. \"This is the central mechanical brain of the chronometer! Once we insert the beacon disc, it will engage the internal decoding gear train, reading all fifty years of tectonic strain logs and allowing manual synchronization of the differential hands!\"\n\n\"Primary manipulator taking over! Loading the titanium beacon disc!\"\n\nSlipping his hands firmly into the active hydraulic servo exoskeleton gloves on the co-pilot console, Cheng-hao commanded the heavy titanium claw mounted on the submersible's bow to lift the weighty titanium-zirconium disc from its shock-insulated thermal cradle.\n\nThe deep metallic blue luster of the disc—hand-tempered and polished by Grandfather half a century ago—glowed with a warm, unwavering golden aura amidst the crushing pressure and freezing seawater at seven thousand meters.\n\nUnder Cheng-hao's rock-steady guidance, the mechanical claw pushed through the formidable resistance of seven hundred atmospheres, driving the disc toward the socket with sub-millimeter precision.\n\n\"*CLACK-SNAP!!*\"\n\nWith a crisp, resonant metallic snap of precision mechanical interlocks echoing across half a century of time, the three-star keys seated perfectly into the core socket of Chronometer Zero!\n\nIn the next split second, a blood-pumping cascade of engaging gears echoed from within the colossal bronze tower that had rested in silence for fifty years!\n\n\"*CLATTER-CLACK——TICK, TICK, TICK, TICK!*\"\n\nThirty-six miniature pure-gold spring-loaded contact pins arrayed around the socket snapped outward simultaneously, locking onto the encrypted concentric copper rings on the back of the disc. Torsional energy from deep within the chronometer cascaded through differential transfer shafts; the concentric dual hands at the center of the disc—dormant for decades—quivered violently before commencing a steady, deliberate clockwise sweep!\n\nImmediately following, the acoustic decoder on the *Nautilus-IV*'s console sounded an urgent warble, as cascading torrents of green geological telemetry logs flooded down the holographic screens like a torrential downpour!\n\n\"Hardware handshake successful! Mechanical punched alloy ribbon and holographic micro-scale logs decrypted!\" Pico barked in jubilation. \"Rendering fifty-year abyssal strain curves for the Pacific Plate!\"\n\nYet within barely five seconds, the bright flush of triumph on Ye Yijie's fair face drained away entirely, leaving her features ashen and her lips trembling uncontrollably!\n\n\"What is it, Yijie? What's wrong with the data?!\" Cheng-hao sensed the abrupt shift in the cabin's atmosphere and stepped forward urgently.\n\nHer fingers freezing cold, Ye Yijie magnified an alarming, blood-red shear strain graph at the bottom of the three-dimensional holographic projection, her voice shaking with bone-deep terror:\n\n\"Cheng-hao... Hailan... look at this basal slip rate curve! Under normal conditions, the Pacific Plate subducts down into the mantle along the Mariana Trench at eight to ten centimeters per year—an average slip rate of barely 0.0025 micrometers per second...\"\n\n\"What is it reading now?!\" Jiang Jiang gripped the rim of the console in sheer panic.\n\n\"Over the past forty-eight hours, the microstrain slip velocity within this subduction fault... has spiked by twelve thousand times!!\"\n\nYe Yijie turned around abruptly, her eyes rimmed with tears of dread: \"The residual seismic explosives from that illegal drillship fifty years ago, combined with the stress redistribution caused when we severed the wreck in the hydrothermal field, has completely shattered the last geometric self-locking balance of this ridge fault! Right now, the only thing preventing this three-hundred-kilometer-long subduction slab—weighing billions of tons—from unleashing a catastrophic mega-landslide... is the primary anti-reverse ratchet gear at the base of Chronometer Zero!\"\n\nBefore her voice could fade, an agonizing groan of twisting metal under titanic stress erupted from within the thirty-five-meter clocktower—\n\n\"*SKREEECH————!!*\"\n\nIt was the terrifying shriek of billions of tons of tectonic shear stress bearing down like a collapsing mountain range onto the four-meter-diameter Invar master escapement wheel!\n\nUnder the ultra-microscopic view of the holographic laser interferometer, every member of the crew saw it with horrifying clarity: the primary carbide anti-reverse pawl, holding the ultimate line of defense for the entire abyssal clocktower, was suffering a lethal microscopic slip against the tooth tip!\n\nTen micrometers...\n\nNine micrometers...\n\nEight micrometers!\n\n\"Shrill, critical-hazard sirens shattered the silence of the cabin!\" The crimson beacon on Pico's back spun frantically, bathing the sphere in blood-red strobes: \"System calculation: only seven micrometers of contact margin remain on the self-locking pawl! The instant the tooth tip slips free, the gigajoules of elastic strain energy locked seven kilometers beneath the crust will discharge instantaneously, unleashing a mega-thrust fault earthquake exceeding magnitude 9.0 and triggering devastating tsunamis across the entire Pacific Rim!!\"\n\n\"The countdown on Grandfather's beacon... was never a generous seventy-two-hour grace period for calibration!\" Du Hailan stared grimly at the micro-countdown slipping away on the holographic display, her face pale as stone. \"It is the final deadline before the tectonic lock fails completely!\"\n\nCheng-hao snapped his head up, staring through the twenty-centimeter-thick acrylic viewport at the bronze clocktower groaning in the icy abyss, his fists clenching so hard his knuckles turned white.\n\nGrandfather's Chronometer Zero had chimed its beacon across the abyss, but the true battle to save the Pacific from a devastating apocalypse had now reached the razor edge of the final seven micrometers!\n",
          "stemKnowledge": [
            "地熱脈衝雙金屬熱機（Geothermal Bimetallic Pulse Engine）：利用高膨脹係數錳銅合金與零膨脹因瓦合金（Invar, Fe-36%Ni）在熱液脈衝（120°C）與深海冷水（1.5°C）交替衝擊下的微觀形變差，在 720 個大氣壓下輸出巨大應變力，配合微步進棘輪機構轉化為旋轉機械扭矩為發條蓄能。",
            "水下流體阻尼與超流線型水滴擺（Hydrodynamic Teardrop Pendulum）：在深海高密度高黏度海水（水阻為空氣千倍）環境下，水滴形幾何外廓符合納維-斯托克斯方程臨界減阻條件，大幅抑制卡門渦街剝離阻力，配合藍寶石軸眼與恆力擒縱機構（Remontoire），實現抗阻尼物理等時性。",
            "水下聲學腔體共振（Acoustic Cavity Resonant Coupling）：利用海水高密度與弱可壓縮性（水中聲速約 1,500 m/s，為空氣四倍以上），雙曲面青銅共振腔將重錘敲擊動能高效耦合為水下低頻次聲波/聲波脈衝，形成長距離深海駐波傳播。",
            "板塊構造微應變與斷層滑移臨界（Tectonic Microstrain & Fault Criticality）：板塊俯衝帶通常以每年數公分速率緩慢蠕變（納米/秒級微應變），當斷層幾何鎖定被爆破與外力破壞時，微應變速率呈指數級暴增，棘爪幾微米的滑脫即代表岩層彈性應變能的瞬間災難性釋放。"
          ]
        },
        {
          "id": 12,
          "file": "第12章_板塊滑移的最後十微米.md",
          "title": "第 12 章　板塊滑移的最後十微米",
          "enTitle": "Chapter 12 — The Final Micrometers of Plate Slip",
          "titleEn": "Chapter 12 — The Final Micrometers of Plate Slip",
          "shortTitle": "板塊滑移的最後十微米",
          "concept": "非晶金屬玻璃多重剪切帶吸能 × 泰爾扎吉有效應力洩壓 × 斷層超臨界流體自鎖 × 挑戰者深淵座標解鎖",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "當自鎖棘爪僅剩六微米即將引發環太平洋九級特大海嘯地震時，如何利用鋯鈦非晶金屬玻璃微楔塊吸收數十萬焦耳剪切衝擊，並同步打開玄武岩地熱洩壓閥降低孔隙流體壓力，在最後一點八微米極限鎖死太平洋板塊？",
          "summary": "深海零號鐘台主自鎖棘齒在數十億噸地脈剪切應力下面臨滑脫脫扣，距離九點二級深淵特大地震爆發僅剩八秒！誠浩沉著指揮，利用電磁拋射將高熵非晶金屬玻璃微楔塊精準射入微米咬合縫隙，以奈米多重剪切帶強行卡死滑移；隨後將江啟動高壓液壓扳手合力打開五十年地熱洩壓閥，超臨界流體噴湧洩壓，泰爾扎吉有效正應力暴增，板塊在最後一點八微米奇蹟般恢復自鎖！鐘台鳴響和平宏音，信標卡盤彈出終極坐標——直指一萬零九百二十八公尺的挑戰者深淵！第二卷《黑煙囪與沸騰深淵》迎來壯麗大完結！",
          "summaryEn": "With billions of tons of tectonic stress threatening to dislodge the master anti-reverse pawl in eight seconds, Cheng-hao executes a dual-action breakthrough: firing a bulk metallic glass micro-wedge to dissipate shock via dense nanoscale shear bands, arresting the slip at 1.8 micrometers; simultaneously, Jiang Jiang unleashes 70 MPa hydraulic torque to crack open the 50-year geothermal relief valve, venting supercritical fluids and restoring Terzaghi effective normal stress to lock the fault! Chronometer Zero rings with sublime chimes as the beacon disc pops up terminal coordinates to 10,928 meters in the Challenger Deep—marking the triumphant, grand completion of Volume Two!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十二章：板塊滑移的最後十微米\n\n「警告！自鎖防逆轉棘爪接觸咬合行程僅剩最後六點八微米！齒尖剪切應力已突破三千兩百兆帕臨界安全極限！」\n\n機械柴犬皮可背部的紅色警報旋轉燈在「鸚鵡螺-IV 號」球艙內投下急促而猩紅的閃爍光影，凄厲刺耳的警報蜂鳴如同一柄冰冷的鋼錐，狠狠扎進四位少年與舵手杜海嵐緊繃的神經末梢。\n\n在七千兩百二十公尺深海的死寂中，三十五公尺高的「深海零號鐘台」正發出整整半個世紀以來從未有過的淒厲鋼骨呻吟。\n\n「嘎吱————嘎吱————！！」\n\n那不是普通的金屬摩擦聲，而是數十億噸地脈構造剪切應力，正如同一頭掙脫了鎖鏈的太古凶獸，在海溝深處瘋狂撕扯著玄武岩基座，將毀滅性的斷層下滑力全部宣洩在直徑四公尺的因瓦合金主擒縱齒輪之上！\n\n透過二十公分厚的防壓丙烯酸舷窗望去，在四道深海廣角氙氣探照燈慘白的強光交匯處，那枚承載著整個環太平洋命運的巨大黃銅齒輪，邊緣已經被極致的重壓擠壓出了微觀晶格錯位的金屬幽藍色冷光。高壓海水在劇烈震顫的齒尖周圍形成了微小而急促的空化渦流，發出如毒蛇吐信般的嘶嘶異響。\n\n「滑移速率還在呈指數級飆升！」葉旖緁的雙手在全息遙測鍵盤上化作一團模糊的殘影，白皙的前額上滲出了密密麻麻的冰冷汗珠，「每秒微滑移量已從零點零三微米暴漲到了零點八微米！照這個幾何加速度計算，最多只要七到八秒鐘，自鎖齒尖就會被徹底推落脫扣！」\n\n「一旦脫扣會怎麼樣？！」將江死死抓住副駕駛台邊緣的金屬加固扶手，圓圓的臉龐上血色盡褪，煞白如紙。\n\n「一旦最後幾微米的齒尖脫扣，鎖定在馬里亞納海溝七千米地幔深處長達五十年的板塊彈性應變能，將在不到零點一秒內瞬間全面暴發！」\n\n葉旖緁急促地喊道，平日裡冷靜清脆的聲音此刻劇烈顫抖：「那將引發矩震級（Mw）高達九點二級的超深源特大逆衝地震！海底斷層破裂帶將在數十秒內向上垂直抬升超過二十公尺，掀起傳播速度超過每小時八百公里的毀滅性深海巨嘯！三十分鐘內抹平關島，兩小時內吞沒整個西太平洋沿岸數千座港口與城市，數以百萬計的生命將面臨滅頂之災！！」\n\n「絕不能讓它脫扣！」\n\n誠浩猛地一拳砸在副駕駛操作台上，眼神在極致的生死危機中冷靜得如同絕對零度下的萬載冰川。少年的大腦如同一台精密運轉的物理計算機，以微秒級的速度瘋狂拆解著鐘台的微觀力學模型。\n\n「大家冷靜！聽我指令！」誠浩厲聲喝道，「數十億噸的板塊剪切力，如果貿然用普通的硬質合金鋼塊去硬頂，常規結晶金屬內部的晶格位錯（Dislocation）會在三軸超高壓下瞬間沿滑移面貫通，只會在一瞬間被切成碎鐵粉末，甚至引發更致命的脆性剪切崩斷，加速脫扣！」\n\n「那該怎麼辦？！我們只有不到七秒鐘了！」杜海嵐雙手青筋暴起，死死握住主副懸停姿態搖桿，操控著重達二十噸的深潛艇全力對抗著鐘台周圍暴虐混亂的深海熱液剪切流。\n\n「利用大塊非晶態金屬玻璃（Bulk Metallic Glass, BMG）的極限微剪切帶吸能原理！」\n\n誠浩一把拉開主操控台下方的特種防磁安全箱，從精密防震卡槽中取出了兩枚散發著奇異霧面深灰光澤的微型金屬楔塊：「這是爺爺工坊裡用鋯鈦銅鎳鈹五元高熵合金在超高真空感應爐中急速冷卻淬火製成的大塊金屬玻璃！它的內部完全沒有常規金屬的晶界、晶格排列與滑移缺陷，其原子排列呈現如同液態水一般的隨機緻密堆垛，彈性形變極限高達百分之二，抗剪切屈服強度超過兩千五百兆帕！」\n\n「非晶金屬玻璃？！」葉旖緁美眸中驟然亮起頓悟的精芒，身為學霸的她瞬間洞悉了誠浩的力學意圖，「常規結晶金屬在高應力下會沿著晶界滑移脆斷，而非晶合金在極限高剪切應力下，因為沒有單一的解理面，會自發形成數以百萬計交織互鎖的奈米級『高密度多重剪切帶（Multiple Shear Bands）』！透過高度局域化的微觀黏滯塑性流動，它能像超高黏度的液體一樣，把數十萬焦耳的機械衝擊動能瞬間轉化吸收，卻絕不會像普通陶瓷或鎢鋼那樣崩解碎裂！」\n\n「沒錯！第一步，我要用機械臂上的電磁微導軌，在微米精度下將這枚非晶金屬微楔塊精準射入自鎖棘爪與齒尖的微觀咬合縫隙中，強行卡死最後的滑移行程！」誠浩的目光堅毅無比，「但這只能為我們爭取不到五分鐘的時間！如果地脈累積的巨額彈性應變能不被引導宣洩，非晶合金最終也會在數千度的微觀剪切摩擦高溫下軟化失效！」\n\n「所以我們必須同步實施第二步——開啟海底地熱洩壓旁路，實施板塊有效應力卸載！」\n\n誠浩迅速調出鐘台基座的三維結構圖，指著基座東北側深處一處被厚重玄武岩鑄鐵蓋板封閉的粗壯管道：「大家看這裡！根據岩石力學的泰爾扎吉有效應力原理（Terzaghi's Principle of Effective Stress），斷層的抗剪強度等於法向應力減去孔隙流體壓力（$\\\\sigma' = \\\\sigma_n - P_f$）！根據拜爾利摩擦定律（Byerlee's Law），斷層能否自鎖全看有效正應力的大小！」\n\n「五十年前非法探勘隊引發的深部爆破，把高達八百個大氣壓的超臨界過熱熱液流體死死憋在了斷層深處的孔隙裡，推升了極端異常的孔隙水壓，導致斷層面的有效正應力斷崖式下跌，徹底破壞了摩擦自鎖！」\n\n「只要我們打開這座封閉了五十年的地熱旁路洩壓閥，把超臨界流體釋放出去，孔隙流體壓力暴跌，斷層面的有效摩擦力就會在幾秒內暴增數倍，讓龐大的板塊在地質層面上重新達到靜態自鎖！」\n\n「我明白了！」杜海嵐眼中燃燒起烈火般的決絕鬥志，「一邊微觀物理卡死齒輪，一邊宏觀流體卸載地脈！分工合作！誠浩，你操作主機械臂射入微楔塊；將江，你操控右舷輔助重型液壓扳手；我來把潛艇強行推進並懸停在洩壓閥正上方！！」\n\n「交給我吧！！」將江怒吼一聲，雙手狠狠套入輔助液壓伺服外骨骼手套，手臂上的壓力指針瞬間打到底。\n\n「自鎖棘爪接觸行程：五微米……四微米！！」皮可發出刺耳至極的最後讀秒。\n\n「鸚鵡螺-IV 號」的四具全密封磁力偶合無刷推進器在海嵐的手中發出了震耳欲聾的咆哮，深潛艇頂著七百多個大氣壓的狂暴洋流，在毫秒之間強行向鐘台推進了整整一公尺！\n\n「泊位極限貼近！相對位移漂移率鎖定在零點一毫米以內！」海嵐大喊，汗水順著她的下頜滴落在操縱桿上。\n\n「主機械臂高精度微伺服開啟！非晶微楔塊電磁拋射導軌就位！」\n\n誠浩的雙手穩如磐石，少年的呼吸在這一剎那徹底停滯，整個世界彷彿只剩下眼前全息投影中放大了八百倍的微觀雷射干涉視圖。\n\n只見全息投影中，那枚薄如蟬翼、卻硬逾金剛的自鎖齒尖，正以肉眼可見的恐怖速度向外滑脫，最後的咬合界面僅剩薄薄的兩點五微米！\n\n「就是現在！電磁脈衝激發！！」\n\n誠浩食指狠狠扣下激發扳機！\n\n「砰————！！」\n\n一道幽暗深邃的金屬流光在極短的距離內精準穿透高壓海水，非晶態金屬微楔塊如同精準無比的外科手術刀，在千分之一秒的間不容髮之際，死死卡進了齒尖與卡爪的微觀咬合縫隙之中！\n\n「滋滋滋————轟！！」\n\n數十億噸地脈的恐怖剪切應力在微觀楔塊上驟然爆發！正如葉旖緁計算的那樣，非晶合金內部的數百萬道奈米剪切帶瞬間被激活，在極限擠壓下劇烈塑性變形，發出刺眼奪目的藍白色微摩擦火花，硬生生將暴衝的齒輪齒尖死死卡住！\n\n「滑移停止了！齒輪咬合行程被牢牢鎖死在最後一點八微米！！」葉旖緁激動得熱淚盈眶，高聲大喊。\n\n「但非晶楔塊表面溫度正在以每秒八十度的速度瘋狂飆升！它最多只能支撐三分鐘！」皮可大叫，「將江，洩壓閥！！」\n\n「看我的！！重型液壓套筒，給我轉動啊啊啊啊啊————！！」\n\n將江額頭青筋暴起，雙臂外骨骼電機發出前所未有的刺耳過載蜂鳴。他啟動了潛艇液壓動力單元（HPU）中的特種增壓器，將系統油壓由二十一兆帕瞬間躍升至七十兆帕！潛艇右前方那隻三噸級重型鈦合金液壓扳手，死死套在了鐘台基座深處那個被厚厚黃銅礦與黃鐵礦結晶死死卡死的四方閥芯之上！\n\n高頻微衝擊震盪錘連續敲擊，震碎了閥門邊緣半個世紀的堅硬礦物鹽結垢！\n\n「咔……咔……喀啦！！」\n\n在將江狂暴的八千牛頓米行星齒輪扭矩倍增輸出下，封死五十年的玄武岩重型鑄鐵閥門，終於發出了一聲沉悶如雷鳴般的解鎖巨響！\n\n閥門旋開的一瞬間，整座海底海脊與峽谷猛地劇烈震顫了起來！\n\n「轟隆隆隆隆————！！」\n\n在七百多個大氣壓的極限環境下，水深壓強高達七十二兆帕，早已遠遠跨越了水的熱力學臨界點（374°C，22.1 MPa）。這意味著湧出的熱液是一股單相的「超臨界深地流體」！\n\n一道直徑超過兩公尺、溫度高達四百攝氏度、呈現暗紅幽光的超臨界地熱噴流，宛如一條咆哮出海的深淵怒龍，沿著洩壓管道朝著無人海槽外側浩蕩噴湧而出！它與一點五度的極寒海水劇烈混合，形成漫天翻滾的黑色硫化物羽流，卻因為超高壓而絕不沸騰產生氣泡！\n\n高達八百個大氣壓的超臨界孔隙流體壓力，在短短數十秒內得到了排山倒海般的宣洩！\n\n伴隨著地脈深處孔隙水壓的劇降，斷層兩側的巨大玄武岩盤體在兆噸級法向重力的強壓下，重新狠狠地咬合在了一起！泰爾扎吉有效正應力瞬間飆升，整條長達數百公里的板塊俯衝帶斷層，以不可逆轉的宏觀地質力量，徹底恢復了堅不可摧的摩擦自鎖！！\n\n「嘎噠！」\n\n鐘台核心深處傳來了一聲沉穩、悠長而無比堅定的機械復位聲。\n\n原本死死壓在非晶微楔塊上的數十億噸地脈剪切應力，在流體卸載與地脈自鎖的作用下如退潮般消散。直徑四公尺的因瓦合金主擒縱輪平穩地滑入了爺爺五十年前精心設計的永久安全卡槽中，自鎖棘爪牢牢落鎖！\n\n「成功了……」\n\n葉旖緁長舒一口氣，整個人脫力般靠在副駕駛座上，看著全息屏幕上全部由刺眼猩紅轉為柔和翠綠的應變曲線，少女眼中的淚水終於忍不住奪眶而出。\n\n「我們……我們真的在最後一點八微米……拯救了整座太平洋！！」將江一把扯下汗水浸透的液壓手套，整個人大口大口地喘著粗氣，隨後與身旁的皮可緊緊抱在一起，發出了一陣劫後餘生的狂喜歡呼。\n\n「鐺——————！！」\n\n就在這時，三十五公尺高的深海零號鐘台頂端，那座巨大的雙曲面青銅共振腔，敲響了一聲前所未有清澈、空靈、祥和而悠遠的宏大鐘鳴！\n\n宏亮的鐘聲伴隨著不可壓縮的高壓海水，化作一道神聖的守護波紋，穿透七千米黑暗冰冷的深淵，向著無垠的大洋彼岸平穩傳播！\n\n整座鐘台內部的地熱雙金屬柱重新開始規律地呼吸起伏，流線型水滴擺在深海中輕盈劃動，差速齒輪以最完美的節拍向前步進，繼續著它對大洋板塊長達半世紀的忠誠守護。\n\n「嗡——」\n\n與此同時，嵌入鐘台中央的鈦金屬信標卡盤突然爆發出璀璨的金藍色光芒！卡盤正中央那枚同心雙指針在順時針旋轉三百六十度後，機械軸心猛地向內彈跳凹陷，隨後彈出了一枚鑲嵌著微型藍寶石棱鏡的終極深海座標柱！\n\n一道清澈明亮的高穿透性雷射光束穿透海水，在球艙頂部投射出一行清晰無比的金色坐標與經緯度：\n\n「北緯 11°22′，東經 142°35′。目標深度：一萬零九百二十八公尺——馬里亞納海溝·挑戰者深淵底土！」\n\n緊接著，卡盤內部的鈦絲磁記錄儀啟動，一段老爺子在半個世紀前親口錄下的音頻，在解碼揚聲器中帶著溫暖而深沉的雜音緩緩流淌而出：\n\n『好孩子們……當你們聽到這段錄音，說明深海零號鐘台的第一基座已經化險為夷。五十年前，我們在這裡阻止了貪婪的破壞，埋下了守護的種子；但你們一定要記住，這座七千米海脊上的零號鐘台，只是整條大洋地質防護網的第一道中繼錨點！』\n\n『真正的板塊心臟與終極主擒縱器，深埋在一萬一千公尺的挑戰者海淵最深處。那裡承受著超過一千一百個大氣壓的粉碎性重壓，是地殼與地幔交融的最前線。帶上信標，向地球的最底端前進吧……破曉的金光，正在海平面上等待著你們！』\n\n老爺子的聲音在球艙內久久迴盪。誠浩撫摸著胸前微微發熱的金屬齒輪項鍊，眼中泛起激動的淚光。\n\n「第二卷《黑煙囪與沸騰深淵》……我們順利通關了！」葉旖緁擦乾眼角的淚水，露出了燦爛的笑容。\n\n「是啊，我們穿過了暴怒的泥流濁浪，在三百八十度的黑煙囪前完成了溫差充電，切開了沉睡五十年的幽靈船骸，更在最後一點八微米的極限死線上重新鎖死了地脈！」杜海嵐握緊拳頭，眉宇間綻放出遠洋航海者的無畏英姿，「但這還不是終點！前面那一萬一千米的挑戰者海淵，才是真正的終極考驗！」\n\n「皮可，全面檢查『鸚鵡螺-IV 號』全艦狀態！」誠浩深吸一口氣，果斷下達指令。\n\n「汪！全艦耐壓結構掃描中！共聚微球浮力膠完好無損，鋰電池儲備電量百分之九十五，雙球殼二氧化碳吸收劑運行正常，固態生鐵壓載塊就緒！深潛艇已完全做好向超深淵帶（Hadopelagic Zone）突進的準備！」\n\n誠浩、葉旖緁、將江、杜海嵐與機械柴犬皮可將手掌緊緊疊放在了一起。\n\n那是五顆在七千米冰冷深淵中共同跳動、熾熱而堅韌的心臟！\n\n「海嵐，校準深淵航向，向挑戰者深淵垂直俯衝！」誠浩高聲喝道。\n\n杜海嵐推滿主副推進器電門，雙球殼黃銅深潛艇在探照燈的照耀下，如同一顆通體散發著金色光芒的深海流星，毅然決然地衝向那座吞噬萬物的深藍黑洞：\n\n「目標挑戰者深淵！全體坐穩，『鸚鵡螺-IV 號』，全速出發！！」\n",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 12: The Final Ten Micrometers of Plate Slip\n\n\"Warning! Self-locking anti-reverse pawl contact engagement margin down to final 6.8 micrometers! Tooth tip shear stress has breached the critical threshold of 3,200 megapascals!\"\n\nThe rotating crimson alarm beacon atop robotic Shiba Inu Pico's back cast urgent, blood-red strobes throughout the spherical cabin of the *Nautilus-IV*, its shrill and piercing klaxon driving like a frozen steel chisel into the frayed nerves of the four youths and helmswoman Du Hailan.\n\nIn the tomb-like silence of the abyss at 7,220 meters, the thirty-five-meter-tall *Abyssal Chronometer Zero* was groaning with agonizing structural screeches unseen in half a century.\n\n\"*CREEEAK————SKREEECH————!!*\"\n\nIt was not ordinary metal friction, but billions of tons of tectonic shear stress acting like an unbound primal beast tearing at the basalt foundation in the trench depths, discharging its cataclysmic down-faulting forces onto the four-meter-diameter Invar master escapement wheel!\n\nGazing out through the twenty-centimeter-thick acrylic viewport where the pallid beams of four wide-angle deep-sea xenon floodlights converged, the colossal brass wheel bearing the destiny of the entire Pacific Rim was being squeezed with such immense pressure that its tooth rims radiated an eerie, metallic cold blue light from microscopic lattice dislocation. The high-pressure seawater around the violently vibrating tooth tip formed tiny, frantic cavitation vortices, hissing like a nest of spitting vipers.\n\n\"The slip velocity is still escalating exponentially!\" Ye Yijie's fingers blurred across the holographic telemetry keyboard, cold beads of perspiration gathering densely upon her fair brow. \"The slip rate has spiked from 0.03 micrometers per second to 0.8 micrometers per second! At this geometric acceleration, the self-locking tooth tip will be completely forced off its seat within barely seven to eight seconds!\"\n\n\"What happens if it slips off?!\" Jiang Jiang gripped the metal co-pilot handrail with white knuckles, his round face drained of all color.\n\n\"The moment those final micrometers of tooth contact slip free, fifty years of elastic tectonic strain energy locked within the mantle at seven thousand meters will detonate in less than a tenth of a second!\"\n\nYe Yijie shouted frantically, her crisp, composed voice trembling violently: \"It will trigger an ultra-deep mega-thrust earthquake exceeding moment magnitude 9.2! The seafloor rupture zone will thrust upward by over twenty meters in seconds, launching catastrophic deep-sea tsunamis racing at over eight hundred kilometers per hour! Guam will be obliterated in thirty minutes, and within two hours, thousands of ports and coastal cities across the entire Western Pacific will be swallowed whole, placing millions of lives in mortal peril!!\"\n\n\"We cannot allow it to slip!\"\n\nCheng-hao slammed his fist onto the co-pilot console, his gaze settling into an absolute calm like an ancient glacier at absolute zero amidst the desperate crisis. The young inventor's mind operated like a supercomputing physical processor, frantically decomposing the microscopic mechanics of the chronometer.\n\n\"Everyone stay calm! Follow my lead!\" Cheng-hao shouted with fierce authority. \"Billions of tons of tectonic shear stress cannot be arrested with ordinary alloy steel blocks; under triaxial extreme pressure, conventional crystal dislocations will shear catastrophically across slip planes in an instant, pulverizing the steel into powder and triggering even deadlier brittle shear fracture, accelerating the slip!\"\n\n\"Then what can we do?! We have less than seven seconds left!\" Du Hailan's forearms bulged with veins as she wrestled the attitude controls, commanding the twenty-ton submersible to battle the violent hydrothermal shear currents swirling around the tower.\n\n\"We utilize the extreme micro-shear band energy dissipation of Bulk Metallic Glass (BMG)!\"\n\nCheng-hao yanked open the specialized anti-magnetic safety vault beneath the primary console, extracting two miniature metallic wedges that gleamed with a matte, slate-gray luster: \"These are bulk metallic glass micro-wedges forged in Grandfather's workshop from a five-element zirconium-titanium-copper-nickel-beryllium high-entropy alloy, rapidly quenched in an ultra-high-vacuum induction furnace! Their interior is completely devoid of conventional grain boundaries, crystal lattices, and dislocation defects; their atoms are randomly and densely packed like liquid water, boasting an elastic limit of two percent and a shear yield strength exceeding 2,500 megapascals!\"\n\n\"Bulk metallic glass?!\" Ye Yijie's eyes lit up with sudden revelation, her academic intellect immediately grasping Cheng-hao's mechanical strategy. \"Conventional crystalline metals suffer intergranular brittle cleavage under extreme stress, whereas metallic glass under ultra-high shear stress lacks defined cleavage planes and spontaneously spawns millions of interconnected nanoscale 'Multiple Shear Bands'! Through highly localized microscopic viscous-plastic flow, it can dissipate hundreds of thousands of joules of kinetic shock energy like an ultra-viscous liquid without ever shattering like ceramic or tungsten carbide!\"\n\n\"Exactly! Step one: I will use the electromagnetic rail on the primary manipulator to fire this metallic glass micro-wedge into the microscopic contact gap between the pawl and tooth tip with sub-micron accuracy, arresting the runaway slip!\" Cheng-hao's gaze was unwavering. \"Yet this will buy us barely five minutes! If the massive elastic strain energy of the tectonic plate isn't vented, the metallic glass will eventually soften and fail under thousands of degrees of frictional shear heating!\"\n\n\"Therefore, we must simultaneously execute step two—open the submarine geothermal pressure relief bypass to discharge the effective stress of the plate!\"\n\nCheng-hao quickly summoned the 3D schematic of the clocktower foundation, pointing to a heavy pipeline sealed beneath a cast-iron basalt hatch deep on the northeastern side: \"Look here! According to Terzaghi's Principle of Effective Stress in rock mechanics, the shear strength of a fault equals the normal stress minus the pore fluid pressure ($\\\\sigma' = \\\\sigma_n - P_f$）! Under Byerlee's Law of fault friction, whether a fault self-locks depends strictly upon its effective normal stress!\"\n\n\"Fifty years ago, deep detonations from the illegal drillship trapped superheated supercritical fluids under eight hundred atmospheres inside the deep pores of the fault, driving pore fluid pressure to astronomical heights and causing the effective normal stress to plummet, destroying the frictional lock!\"\n\n\"The moment we crack open this geothermal bypass valve sealed for fifty years and vent those supercritical fluids, the pore pressure will crater, and the effective friction across the fault plane will multiply within seconds, allowing the massive plate to regain static geological self-locking!\"\n\n\"Understood!\" A fiery, resolute flame ignited within Du Hailan's eyes. \"Physical micro-arrest on the gear, macroscopic fluid offload on the crust! Split the tasks! Cheng-hao, operate the primary arm to launch the micro-wedge; Jiang Jiang, control the starboard heavy hydraulic wrench; I will drive the submersible and hover directly above the relief valve!!\"\n\n\"Leave it to me!!\" Jiang Jiang roared, slamming his hands into the auxiliary hydraulic servo exoskeleton gauntlets, driving the pressure needles on his arms to maximum gauge.\n\n\"Anti-reverse pawl contact margin: five micrometers... four micrometers!!\" Pico barked the agonizing final countdown.\n\nThe four sealed magnetic-coupling brushless thrusters of the *Nautilus-IV* howled deafeningly under Hailan's hands, as the submersible forced itself one full meter closer to the clocktower through the raging currents of seven hundred atmospheres!\n\n\"Berth proximity maximum! Relative drift locked within zero point one millimeters!\" Hailan yelled, sweat dripping from her jawline onto the throttles.\n\n\"Primary manipulator micro-servo engaged! Metallic glass micro-wedge coilgun in position!\"\n\nCheng-hao's hands remained as steady as granite, his breath suspending completely as his focus fused with the 800x-magnified laser interference projection before his eyes.\n\nIn the holographic viewport, the paper-thin yet diamond-hard self-locking tooth tip was sliding outward at terrifying speed, the final contact interface dwindling to a mere 2.5 micrometers!\n\n\"Now! Electromagnetic pulse—fire!!\"\n\nCheng-hao's index finger pulled the trigger with relentless resolve!\n\n\"*THUMP————!!*\"\n\nA streak of dark metallic light lanced through the high-pressure brine across the razor-thin distance; like a surgeon's scalpel of precision horology, the metallic glass micro-wedge jammed solidly into the microscopic gap between the tooth tip and the pawl in a fraction of a millisecond!\n\n\"*HISSS-SCREEECH————BOOM!!*\"\n\nBillions of tons of tectonic shear force erupted violently onto the micro-wedge! Just as Ye Yijie had calculated, millions of nanoscale shear bands within the amorphous alloy ignited in unison, deforming plastically under extreme compression and flaring with dazzling blue-white frictional micro-sparks, bringing the runaway tooth to a dead halt!\n\n\"The slip has halted! Tooth contact is locked at the final one point eight micrometers!!\" Ye Yijie shouted with tears spilling from her eyes.\n\n\"But the wedge surface temperature is skyrocketing at eighty degrees per second! It will hold for three minutes at most!\" Pico yelled. \"Jiang Jiang, the valve!!\"\n\n\"Watch me!! Heavy hydraulic socket, turn for me, AAAAGGGHH————!!\"\n\nVeins bulging across Jiang Jiang's forehead, the motors of his exoskeleton gauntlets shrieked with unprecedented overload warnings. He activated the hydraulic intensifier in the submersible's power unit, driving system oil pressure from 21 MPa to an astounding 70 MPa! The three-ton titanium hydraulic wrench on the starboard bow clamped onto the square geothermal valve stem encrusted in half a century of chalcopyrite and pyrite minerals!\n\nThe high-frequency micro-hammering action struck relentlessly, shattering the brittle mineral salt crusts accumulated over fifty years!\n\n\"*CLANK... CLANK... CRACK!!*\"\n\nUnder Jiang Jiang's monstrous torque multiplier delivering eight thousand newton-meters of output, the heavy cast-iron basalt valve sealed for fifty years finally gave way with a thunderous metallic crack!\n\nThe instant the valve cracked open, the entire abyssal ridge and canyon shuddered violently!\n\n\"*ROOOOAAAR————!!*\"\n\nUnder more than seven hundred atmospheres, the ambient hydrostatic pressure reached 72 MPa, far exceeding water's thermodynamic critical point (374°C, 22.1 MPa). This meant the discharging fluid was a single-phase \"supercritical deep-Earth fluid\"!\n\nA two-meter-wide jet of supercritical geothermal fluid—scalding at 400 degrees Celsius and glowing with a faint, dark-red luminescence—surged forth like an unleashed abyssal dragon, venting outward along the discharge flume into the uninhabited canyon! It mixed violently with the 1.5°C freezing seawater, churning up colossal black sulfide plumes that never boiled into steam bubbles due to the immense pressure!\n\nThe supercritical pore fluid pressure of eight hundred atmospheres discharged with monumental fury over dozens of seconds!\n\nAs the pore fluid pressure plummeted deep within the crust, the colossal basalt slabs flanking the fault slammed back together under trillions of tons of normal overburden gravity! Terzaghi's effective normal stress surged exponentially, and across hundreds of kilometers of subduction fault, the immense plate re-established an unbreakable frictional self-lock through irresistible geological force!!\n\n\"*CLACK-CHUNK!*\"\n\nA resonant, deep, and utterly resolute mechanical reset chimed from the core of the clocktower.\n\nThe billions of tons of shear force bearing down on the metallic glass wedge receded like a fading tide under the combined effect of fluid relief and tectonic lock. The four-meter-diameter Invar master escapement wheel slipped smoothly into Grandfather's permanent safety detent, and the master pawl locked home!\n\n\"We did it...\"\n\nYe Yijie sank back into the co-pilot seat in complete exhaustion; watching the holographic strain graphs shift from glaring crimson to soothing emerald green, tears cascaded down her cheeks.\n\n\"We... we really saved the Pacific at the final one point eight micrometers!!\" Jiang Jiang tore off his sweat-drenched hydraulic gloves, gasping for breath before wrapping Pico in a wild, jubilant embrace, laughing with unbounded relief.\n\n\"*CLAAAANG——————!!*\"\n\nAt that very moment, atop the thirty-five-meter summit of Abyssal Chronometer Zero, the colossal hyperbolic bronze cavity resonator chimed with a crystal-clear, ethereal, peaceful, and majestic note unlike anything heard before!\n\nThe sonorous chime propagated through the incompressible seawater, becoming a sacred guardian pulse radiating across the seven-thousand-meter frozen abyss toward the far shores of the boundless ocean!\n\nWithin the clocktower, the geothermal bimetallic columns resumed their rhythmic breathing; the hydrodynamic teardrop pendulum swept gracefully through the sea; and the planetary differential gears ticked forward with perfect cadence, resuming their half-century vigil over the oceanic plate.\n\n\"*Hummm—*\"\n\nSimultaneously, the titanium beacon disc embedded in the center of the clocktower flared with brilliant golden-blue radiance! After completing a full 360-degree clockwise revolution, its concentric hands retracted inward with a spring-loaded click, popping up a terminal abyssal coordinate pillar inset with a miniature sapphire prism!\n\nA pure, radiant laser beam pierced the seawater, projecting crisp golden coordinates and latitude-longitude figures across the cabin ceiling:\n\n\"Latitude 11°22′ N, Longitude 142°35′ E. Target depth: 10,928 meters—Mariana Trench · Challenger Deep Seabed!\"\n\nImmediately after, the titanium magnetic wire recorder inside the disc engaged, and Grandfather's voice from half a century ago flowed softly from the decoder speaker, carrying warm analog tape hiss:\n\n\"*My dear children... If you are hearing this recording, it means the first foundation of Chronometer Zero has weathered its storm. Fifty years ago, we halted reckless destruction here and planted the seeds of protection; yet you must always remember, this Chronometer Zero on the seven-thousand-meter ridge is merely the outer relay anchor of our ocean-wide geological defense network!*\"\n\n\"*The true heart of the tectonic plates and the ultimate master escapement lie buried in the deepest trench of the world—eleven thousand meters down in the Challenger Deep. Down there, crushing forces exceed eleven hundred atmospheres, where the oceanic crust merges with the mantle. Take the beacon, and plunge to the very bottom of the Earth... The golden light of dawn awaits you above the waves!*\"\n\nGrandfather's words lingered warmly in the cabin. Cheng-hao touched the gently warming metal gear necklace against his chest, tears of pride and resolve shining in his eyes.\n\n\"Volume Two: *Black Smokers and the Boiling Abyss*... we've cleared it completely!\" Ye Yijie wiped her tears, her face blooming into a radiant smile.\n\n\"Yes! We navigated through the raging mudflows, recharged via thermal energy before 380-degree black smokers, cut away a fifty-year-old phantom drillship, and re-locked the tectonic plates on a razor-thin margin of one point eight micrometers!\" Du Hailan clenched her fists, the intrepid spirit of an ocean navigator blazing in her eyes. \"Yet this isn't the finish line! That eleven-thousand-meter Challenger Deep ahead—that is our ultimate trial!\"\n\n\"Pico, run a complete diagnostic scan on the *Nautilus-IV*!\" Cheng-hao commanded after a deep, steadying breath.\n\n\"Woof! Scanning pressure hull integrity! Syntactic foam buoyancy pods: one hundred percent intact! Lithium battery reserves: ninety-five percent! Dual-sphere carbon dioxide scrubbers operating nominally! Solid cast-iron ballast blocks armed! The bathyscaphe is fully prepped for the descent into the Hadopelagic Zone!\"\n\nCheng-hao, Ye Yijie, Jiang Jiang, Du Hailan, and the robotic Shiba Inu Pico placed their hands together in a tight, resolute clasp.\n\nFive fiery, unyielding hearts beating as one in the freezing abyss of seven thousand meters!\n\n\"Hailan, calibrate abyssal headings; initiate vertical descent toward the Challenger Deep!\" Cheng-hao declared.\n\nThrowing both primary and auxiliary thruster throttles wide open, the dual-sphere brass bathyscaphe plunged like a golden deep-sea meteor under the floodlights, diving boldly into that infinite blue abyss:\n\n\"Target: Challenger Deep! Everyone brace yourselves—*Nautilus-IV*, full speed ahead!!\"\n",
          "stemKnowledge": [
            "大塊非晶態金屬玻璃剪切帶吸能（Bulk Metallic Glass & Multiple Shear Bands）：非晶合金（如 Zr-Ti-Cu-Ni-Be）無晶界與晶格位錯，彈性極限達 2%，屈服強度超 2,500 MPa。在極限剪應力下自發形成交織互鎖的奈米級多重剪切帶，透過微觀局域化黏滯塑性流動吸收巨大動能，避免結晶金屬的脆性剪切崩斷。",
            "泰爾扎吉有效應力與斷層摩擦自鎖（Terzaghi's Effective Stress & Fault Lock）：斷層面抗剪強度取決於有效正應力 σ' = σn - Pf（法向應力減去孔隙水壓）。深部過熱流體蓄積導致 Pf 異常偏高，使有效應力大幅下降引發滑移；開啟洩壓旁路使孔隙壓力驟降，斷層有效正應力瞬間暴增，依拜爾利定律恢復自鎖。",
            "超臨界深海熱液流體（Deep-Sea Supercritical Fluids）：水深 7,200 米靜水壓強達 72 MPa，遠高於水熱力學臨界點（374°C, 22.1 MPa）。400°C 熱液以單相超臨界態噴湧，具有液體的高密度與氣體的超低黏度，與冰冷海水劇烈混合而不產生沸騰氣泡。",
            "挑戰者深淵超深淵帶過渡（Hadopelagic Zone Transition）：馬里亞納海溝最深處挑戰者深淵（10,928 米）水壓高達 110 MPa（1,100 個大氣壓）。深潛艇必須依靠高強度共聚微球浮力膠（Syntactic Foam）與均壓無刷電機，準備迎接深淵帶極限物理挑戰。"
          ]
        }
      ]
    },
    {
      "id": "book-29",
      "seriesId": "series-11",
      "title": "冒險齒輪：馬里亞納的深淵信標 3：挑戰者海淵的破曉信標",
      "enTitle": "Adventure Gear: Beacons of the Mariana Abyss Vol 3: The Dawn Beacon of Challenger Deep",
      "subtitle": "萬米應變與太平洋破曉警報",
      "enSubtitle": "Ten-Thousand-Meter Strain and Pacific Dawn Alarm",
      "status": "第三卷大完結（全 6 章）",
      "statusColor": "cyan",
      "coverTag": "🌊 第三卷震撼開篇",
      "author": "鹿陽發明小隊",
      "targetAge": "9～15 歲適讀",
      "totalWords": 36000,
      "totalChapters": 6,
      "description": "成功鎖死七千米零號鐘台的第一基座後，信標卡盤彈出了直指一萬零九百二十八公尺馬里亞納海溝最深處——挑戰者深淵底土的終極坐標！『鸚鵡螺-IV 號』雙球殼深潛艇向著地球最底端做最後一次孤注一擲的萬米垂降。面對超過一千一百個大氣壓的粉碎性超高壓，少年們穿越超深淵帶的奇異生物群落，抵達世界的最深處，尋找拯救全太平洋的終極破曉信標！",
      "chapters": [
        {
          "id": 13,
          "file": "第13章_直墜一萬零九百米.md",
          "title": "第 13 章　直墜一萬零九百米",
          "enTitle": "Chapter 13 — The Plunge into Ten Thousand Nine Hundred Meters",
          "titleEn": "Chapter 13 — The Plunge into Ten Thousand Nine Hundred Meters",
          "shortTitle": "直墜一萬零九百米",
          "concept": "超深淵帶極限物理 × 獅子魚抗壓分子生化 × 鈦球厚壁環向應力 × 挑戰者深淵底土著陸",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "當下潛深度突破八千米進入超深淵帶，海水被壓縮 4% 導致浮力失衡，深海獅子魚如何利用三甲胺氧化物與軟骨縫隙在千級大氣壓下生存？深潛艇如何在鈦球彈性應變極限下一萬零九百二十八米軟著陸並鎖定終極破曉信標？",
          "summary": "『鸚鵡螺-IV 號』告別七千二百米零號鐘台，向馬里亞納海溝最深處的挑戰者深淵做最後孤注一擲的萬米垂降。跨越八千米超深淵帶（Hadopelagic Zone）後，海水被壓縮 4% 引發浮力微漂移，誠浩與將江精密操作矽油補償維持平衡；眾人在深淵中邂逅了地球脊椎動物極限深潛冠軍——通體半透明的馬里亞納獅子魚，揭開三甲胺氧化物（TMAO）與細胞膜抗壓流動性的生命奧秘。經歷了鈦合金球艙在一千大氣壓下的微觀彈性壓縮呻吟，深潛艇在一萬零九百二十八公尺挑戰者深淵矽質軟泥海床軟著陸，赫然發現了半沉在白泥中的終極破曉信標台！第三卷大冒險正式引爆！",
          "summaryEn": "Bidding farewell to Chronometer Zero, Nautilus-IV initiates its final plunge into the Challenger Deep at the bottom of the Mariana Trench. Crossing the 8,000-meter Hadopelagic threshold, where seawater is compressed by 4%, Leo and Jiang Jiang trim silicone oil bladders to preserve neutral buoyancy. They encounter Earth's vertebrate deep-diving champion—the translucent Mariana snailfish—unraveling the mysteries of TMAO piezolytes and membrane fluidity. Enduring the microscopic elastic groans of the titanium hull under 1,000 atmospheres, the bathyscaphe executes a soft touchdown upon the 10,928-meter siliceous ooze, uncovering the Dawn Beacon of Challenger Deep and igniting Volume Three!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十三章：直墜一萬零九百米\n\n「鸚鵡螺-IV 號」全艦的主動力推進器在冰冷漆黑的海水中發出了沉穩而低沉的蜂鳴。\n\n在七千兩百二十公尺的玄武岩海脊上，那座剛剛被化解了滑移危機的「深海零號鐘台」已經在身後漸漸縮小為一簇微弱而安詳的青金色光點。它頂端宏偉的青銅雙曲面共振腔，依然每隔六十秒向著整座大洋釋放出一道雄渾的守護鐘鳴，在海淵兩側刀削斧劈般的玄武岩絕壁間引發悠長而溫暖的聲學駐波回響。\n\n然而，球艙內的五位冒險者心裡都無比清楚，這絕不是停步慶祝的時刻。\n\n「深度計讀數正式突破八千公尺大關！八千零五十……八千兩百……當前下潛垂直速度：每秒二點五公尺！」\n\n葉旖緁的雙眼緊緊盯著主控台上的多波束聲納與深度遙測界面，少女清脆中帶著緊繃的嗓音在球艙內迴盪，每一個字都牽動著所有人的心跳：「我們已經徹底告別了深海平原，正式穿越海溝斜坡的臨界斷層，進入了地球上最神秘、最殘酷的終極物理禁區——超深淵帶（Hadopelagic Zone）！」\n\n超深淵帶——這是地球海洋最底層的極限深淵，深度範圍介於六千公尺至一萬一千公尺之間。\n\n在希臘神話中，這個詞源自掌管幽冥死者之國的冥王哈帝斯（Hades）。在地球表面，超深淵帶僅佔整個海洋面積的百分之零點二，幾乎全部由各大板塊邊界最深沉的板塊隱沒帶海溝所構成。這裡沒有一絲來自太陽的陽光，水溫常年維持在一攝氏度到一點五攝氏度之間，環境靜水壓已全面突破八百個大氣壓！\n\n「八百大氣壓……」將江整個人貼在加厚防壓舷窗邊，看著窗外那一望無際、比墨水還要濃稠萬倍的絕對黑暗，忍不住搓了搓發涼的手臂，「誠浩，我怎麼覺得舷窗外面的海水看起來……變得有點黏稠，探照燈打出去的光束彷彿在穿透一層厚重的膠水？」\n\n「你的直覺非常敏銳，將江，」誠浩調出深海流體物性監測面板，向夥伴們解釋道，「通常在陸地或淺海工程中，我們都習慣將水視為完全不可壓縮的理想流體；但那是因為陸地大氣壓在物理尺度上太過微小了。當深度突破八千米，在八百個大氣壓的極限重壓下，水分子之間的氫鍵間距被強行壓縮，海水體積被硬生生壓縮了將近百分之四！」\n\n「海水的物理密度從海平面的每立方公分一點零二五克，上升到了現在的一點零五克以上！」葉旖緁推了推鼻樑上的眼鏡，補充道，「這意味著深淵中的海水黏滯係數急遽上升，每立方公尺海水的重量增加了數十公斤。如果不做精密調整，潛艇的浮力平衡會被彻底打破！」\n\n「報告！浮力平衡微補償系統發出二級預警！」\n\n機械柴犬皮可雙耳高頻轉動，主控屏上彈出了一幅潛艇受力矢量平衡圖：「外殼包裹的特種『共聚微球浮力膠（Syntactic Foam）』在高壓下發生了微觀彈性壓縮，整艘『鸚鵡螺-IV 號』的淨排水體積減少了零點二立方公尺，負浮力正在異常增加！」\n\n「將江，啟動一號超高壓注油泵！」誠浩冷靜指揮，「向外置彈性補償油囊注入微量不可壓縮矽油，擴大排水體積，精確抵消浮力微球壓縮帶來的負浮力偏差！」\n\n「收到！矽油微補償，走你！」將江迅速拉動液壓油泵微調閥，高壓油泵發出「咚、咚」的沉悶震顫，精準地將潛艇的下潛速度穩定在每秒一點八公尺的安全勻速狀態。\n\n「深海聲學通道參數也發生了根本性突變，」杜海嵐注視著聲速剖面儀上的折線圖，「在八千米以下，由於極限水壓對水分子晶格的壓迫效應徹底壓倒了低溫效應，海水中的聲速不再隨深度變慢，反而在強壓下劇烈反彈飆升到了每秒一千六百公尺以上！這意味著聲波在海溝深處的折射率被倒轉了，我們的避碰聲納回波信號會呈現出向上彎曲的拋物線路徑！」\n\n「嘟——嘟——」\n\n就在這時，潛艇前端的超深淵高頻避碰聲納突然接收到了幾道極其微弱的動態生物回波。\n\n「探測到生命信號？！」杜海嵐有些難以置信地握緊了主駕駛桿，「在八千多米、八百多個大氣壓的超深淵帶，竟然還有宏觀脊椎生物能夠存活？！」\n\n「快把左舷的微光超感光攝像機調過去！」誠浩連忙說道。\n\n海嵐立刻撥動雲台控制搖桿，一道柔和的低照度仿生冷光源照亮了潛艇左舷十公尺外的一片深邃水域。\n\n在深海攝像機的超高清全息屏上，球艙內的所有人頓時屏住了呼吸，被眼前出現的奇異生命徹底震撼了。\n\n只見在那片漆黑冰冷的萬頃重水之中，正優雅地游弋著三條體長約二十公分的奇特魚類。\n\n牠們的身體呈現出一種近乎半透明的粉白色，體表完全沒有任何陸地魚類常見的硬質鱗片，皮膚薄如蟬翼，甚至能透過半透明的肌肉組織隱約看見內部的臟器與纖細的骨骼。牠們的頭部略顯圓鈍，黑色的眼點已經高度退化，胸鰭與尾鰭如同一層輕盈縹緲的白紗，在八百個大氣壓的深水中宛如精靈一般自在舒展、輕靈滑行。\n\n「這是……傳說中的『馬里亞納獅子魚（Pseudoliparis swirei）』！」葉旖緁激動地捂住了嘴，眼中滿是生物科研者的狂熱與敬畏，「牠們是地球脊椎動物的極限深潛冠軍！曾被確認生活在八千一百四十五公尺的超深淵極限深度！」\n\n「天啊……」將江看著那柔嫩得彷彿一碰就會碎裂的小魚，不可思議地喃喃自語，「我們的潛艇外殼用了十幾公分厚的航太級鈦合金，才勉強擋住八百個大氣壓；這幾條看起來比豆腐還嫩的小魚，到底憑什麼能在這裡活蹦亂跳、沒有被壓成肉醬？！」\n\n「因為牠們的抗壓奇蹟，發生在最微觀的分子與細胞層面！」\n\n葉旖緁調出生物分子數據庫，向大家揭開深海生命演化的神聖密碼：「在八百大氣壓下，水分子會強行擠入蛋白質分子的摺疊結構中，破壞氫鍵與疏水作用，導致常規生物的蛋白質瞬間變性失活；同時高壓會將細胞膜上的磷脂雙分子層壓得硬化結晶，使細胞彻底死亡！」\n\n「但馬里亞納獅子魚在演化中，體內合成了一種神奇的微觀『抗壓保護劑』——三甲胺氧化物（TMAO）！TMAO 分子能像堅固的奈米支架一樣緊緊包裹住蛋白質表面，阻止水分子破壞立體構型；同時，牠們的細胞膜中充滿了超高比例的不飽和脂肪酸，即便在零度與超高壓下依然保持著如橄欖油般的流動性！更神奇的是，牠們的骨骼演化出了不完全骨化的軟骨特徵，連頭骨都留有微觀縫隙，徹底消除了體內的任何空氣腔室，實現了內外壓力的完美絕對等壓！」\n\n在獅子魚的下方，一群通體白色、長達五公分的超深淵巨型端足類（Hirondellea gigas）正靈活地游弋在水體中。葉旖緁指著掃描光譜讚嘆道：「這些端足類的甲殼甚至演化出了富集鋁元素的生物礦化保護層，能在萬米水壓下消化沉降下來的木質纖維碎屑，構成了一個完全獨立於地表陽光的超深淵食物鏈！」\n\n看著那幾條在探照燈外圍安詳穿梭的深海精靈，誠浩的心中湧起了一股無法言喻的震撼。\n\n在人類看似不可逾越的物理死地，生命卻以最極致、最優雅的方式找到了生存的答案。這座深淵從不是冷酷死寂的廢墟，而是大自然最深邃的生命殿堂！\n\n「告別獅子魚朋友，我們正在穿過九千公尺關卡！」海嵐的聲音將眾人的思緒拉回了緊張的現實。\n\n儀表盤上的數字如同冷酷的跳表，毫不留情地繼續向下暴跌：\n\n九千五百公尺……\n\n九千八百公尺……\n\n一萬公尺！\n\n當深度計跨越「一萬公尺」的一瞬間，整座「鸚鵡螺-IV 號」的鈦合金球艙內部，突然傳來了一陣令人牙酸的金屬微觀應變脆響——\n\n「叮……哢……」\n\n那是每平方公分超過一噸的恐怖靜水壓（1,000 個大氣壓），正死死擠壓著直徑兩公尺的球形鈦合金抗壓艙！根據拉梅厚壁圓球應力公式（Lamé's Formula），球殼內壁承受著高達六百兆帕的雙向壓縮環向應力。即便是屈服強度超過一千兆帕的特種鈦鉬合金，金屬晶格也在以微米級的幅度向內產生著均勻的微觀彈性壓縮，艙內空氣被微觀壓縮而溫度微微上升了兩度。\n\n「球殼三十六處應變電阻應變片讀數正常！形變量完全在彈性設計範圍內，未出現任何局部應力集中！」葉旖緁緊握拳頭，冷靜地通報著結構安全數據。\n\n「一萬零兩百公尺……外部液壓油路黏度上升百分之三十！」皮可匯報，「特種全氟聚醚低溫深海液壓油性能穩定，閥組加熱補償迴路正常！」\n\n球艙內的氣氛凝重到了極點。此時此刻，四位少年與舵手杜海嵐所處的位置，比國際太空站上的太空人還要孤立無援。在頭頂上方，是整整十一公里的滔天海水，相當於將整座珠穆朗瑪峰倒插進海洋，山頂上方還剩下兩千多公尺的萬頃波濤！\n\n「一萬零五百公尺……一萬零八百公尺！」\n\n「高度計捕獲底質回波！多普勒流速日誌（DVL）鎖定！下方一百五十公尺處探測到平坦沉積物海床！」皮可雙眼發出明亮的光芒。\n\n「關閉主下潛通海閥，啟動反向緩衝向量推進器，準備實施軟著陸！」誠浩果斷下達指令。\n\n海嵐雙手穩穩拉起主剎車搖桿，四具磁力偶合無刷向量推進器向斜下方噴出柔和而均勻的反向水流。\n\n重達二十噸的「鸚鵡螺-IV 號」在深海中輕巧地減速，兩側懸掛的深海廣角探照燈向下傾斜。慘白而強烈的光柱破開了沉寂了數億年的黑暗，終於將地球最底端的神秘面紗完完整整地呈現在了少年們的眼前！\n\n這裡是一萬零九百二十八公尺——地球的最深處，馬里亞納海溝·挑戰者深淵底土！\n\n舷窗外的景象，完全出乎了所有人的預料。\n\n這裡沒有犬牙交錯的陡峭斷崖，也沒有咆哮沸騰的黑煙囪火山，而是一片綿延無際、廣袤平坦、純淨得宛如外星荒原的淺黃白色細軟海床！\n\n那是歷經億萬年沉積下來的超微細矽藻與放射蟲矽質生物軟泥（Siliceous Ooze）。在探照燈的光束中，海床表面靜如止水，底層流速小於每秒零點五公分，沒有哪怕一絲多餘的湍流波紋，唯有一群群幾公分長的半透明超深淵端足目巨生物，像白色的深海蝴蝶一般，在軟泥上方悠然游弋。\n\n推進器產生的微弱水流在軟泥表面拂過，掀起了一圈圈如同絲綢般細膩的波紋，隨後又迅速恢復了永恆的平靜。\n\n「我們……我們真的抵達了一萬零九百二十八米……」杜海嵐看著深度計上穩定下來的數字，眼角泛起了動容的淚光。身為遠洋航海世家的傳人，她終於駕駛著這艘凝聚著三代人智慧的黃銅深潛艇，替無數海洋前輩完成了踏足地球最底端的無上壯舉！\n\n「汪！發現終極目標信號源！就在正前方兩百公尺處！」皮可興奮地高高躍起，金屬尾巴搖得飛快。\n\n探照燈的光柱緩緩向前推移。\n\n只見在平坦柔軟的矽質白泥正中央，赫然半沉著一座由純黑色的深海黑曜石巨石基座與古老因瓦合金桁架構築而成的巍峨巨型神廟！\n\n神廟的頂部，一尊高達十五公尺的巨型黃銅四芒星擒縱天平，正巍然屹立在一千一百個大氣壓的永恆死寂之中。而在天平的正中央，赫然嵌著一枚直徑兩公尺、與誠浩手中卡盤產生著強烈磁力共鳴的巨型機械日晷核心！\n\n那正是爺爺五十年前留下的終極遺產——「深海終極破曉信標台」！\n\n四芒星天平的兩端，懸掛著兩枚重達數十噸的黑色玄武岩重錘；而連接天平軸心的，是一根直徑近半公尺的特種因瓦合金主擒縱軸。那根軸心在萬米巨壓的微弱沉降下，正以極其緩慢而沉重的節奏微微傾斜，發出細微的金屬緊繃聲。\n\n「那就是控制整個太平洋板塊隱沒帶深層地熱應變的終極擒縱器……」誠浩凝視著前方的巨型天平，眼中滿是難以言喻的震撼與敬意，「爺爺在五十年前，竟然用最純粹的機械力學，在萬米海底建造了這樣一座地質奇蹟！」\n\n「但是你們看天平的左側支臂！」葉旖緁調出高倍光學變焦鏡頭，眼神瞬間變得凝重起來，「主擒縱軸的支撐基座深陷在矽質軟泥中，左側的因瓦合金安全銷釘已經出現了肉眼可見的彎曲疲勞裂紋！如果那枚銷釘徹底剪斷，整座天平就會失衡倒塌，引發板塊深層的連鎖暴衝！」\n\n誠浩握緊了手中的鈦鋯合金信標卡盤，胸中燃燒起熾熱的鬥志。\n\n穿越了整整一萬一千公尺的窒息深淵，第三卷《挑戰者海淵的破曉信標》的終極決戰，就在這片地球最深沉的底土上，正式拉開大幕！\n",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 13: The Plunge into Ten Thousand Nine Hundred Meters\n\nThe primary propulsion thrusters of the *Nautilus-IV* emitted a deep, steady hum as they propelled the vessel through the freezing, pitch-black abyss.\n\nBehind them on the basalt ridge at 7,220 meters, *Abyssal Chronometer Zero*—its slip crisis having just been averted—gradually shrank into a distant, serene cluster of bronze-golden pinpricks. The majestic hyperbolic bronze cavity resonator at its pinnacle continued to unleash a sonorous, protective chime across the ocean once every sixty seconds, sending long, warm standing-wave echoes resonating along the sheer basalt cliffs flanking the canyon.\n\nYet all five adventurers inside the spherical cabin knew full well that this was no time to rest or celebrate.\n\n\"Depth gauge reading has officially breached the 8,000-meter threshold! 8,050 meters... 8,200 meters... Current vertical descent velocity: 2.5 meters per second!\"\n\nYe Yijie's eyes were fixed unwaveringly upon the multibeam sonar and depth telemetry interfaces on the main console, her voice—crisp with tightly coiled tension—echoing through the spherical cabin, every syllable commanding everyone's heartbeat: \"We have completely left the abyssal plains behind and officially crossed the critical fault escarpment of the trench slope, entering Earth's most mysterious, most unforgiving ultimate physical forbidden zone—the Hadopelagic Zone!\"\n\nThe Hadopelagic Zone—the deepest tier of Earth's oceans, spanning from 6,000 meters down to 11,000 meters.\n\nIn Greek mythology, the name derives from Hades, ruler of the underworld and the realm of the dead. Across Earth's surface, the Hadal zone accounts for barely 0.2 percent of total ocean area, comprised almost entirely of the deepest subduction trenches carved along tectonic boundaries. Not a single photon of solar light ever penetrates here; the water temperature hovers perpetually between 1.0°C and 1.5°C; and hydrostatic pressure has completely shattered the 800-atmosphere threshold!\n\n\"Eight hundred atmospheres...\" Jiang Jiang pressed himself against the thickened acrylic viewport, staring out into the boundless, impenetrable darkness ten thousand times thicker than ink, rubbing his shivering forearms. \"Cheng-hao, why does the seawater outside look... so viscous? It feels like the searchlight beams are trying to bore through a wall of heavy gelatin.\"\n\n\"Your intuition is remarkably sharp, Jiang Jiang,\" Cheng-hao explained as he summoned the deep-sea fluid properties monitoring panel. \"In terrestrial or shallow-water engineering, we are accustomed to treating water as an idealized incompressible fluid; but that is only because atmospheric pressures on land are physically minuscule. When descending beyond 8,000 meters, under the crushing deadweight of 800 atmospheres, the hydrogen bonds between water molecules are forced closer together, compressing the seawater's volume by nearly four percent!\"\n\n\"The physical density of the seawater has risen from 1.025 grams per cubic centimeter at sea level to over 1.05 grams per cubic centimeter now!\" Ye Yijie pushed her glasses up her nose and added, \"This means the kinematic viscosity of the water in the trench spikes dramatically, with every cubic meter of brine weighing dozens of kilograms more. Without precision trim adjustments, the submersible's buoyancy equilibrium would be completely ruined!\"\n\n\"Report! Secondary warning triggered on the buoyancy micro-trim compensation system!\"\n\nThe robotic Shiba Inu Pico swiveled his ears at high frequency, bringing up a vector diagram of the submersible's force equilibrium on the main display: \"The specialized syntactic foam enveloping the outer hull is undergoing microscopic elastic compression under high pressure; the net displacement volume of the *Nautilus-IV* has contracted by 0.2 cubic meters, and negative buoyancy is escalating abnormally!\"\n\n\"Jiang Jiang, engage primary ultra-high-pressure injection pump!\" Cheng-hao commanded with composure. \"Inject a micro-dose of incompressible silicone oil into the external elastic compensation bladders to expand our displacement volume, precisely countering the negative buoyancy drift caused by syntactic foam compression!\"\n\n\"Understood! Silicone oil micro-trim, here we go!\" Jiang Jiang quickly pulled back the hydraulic trim valve. The high-pressure pump thudded with deep, rhythmic pulses, steadily locking the submersible's rate of descent at a safe, uniform 1.8 meters per second.\n\n\"The acoustic channel parameters of the deep sea have also undergone a fundamental paradigm shift,\" Du Hailan noted, observing the profile graph on the acoustic velocity profiler. \"Below 8,000 meters, because the crushing pressure on the water molecule lattice completely overtakes the thermal cooling effect, the speed of sound no longer slows down with depth; instead, it rebounds fiercely under extreme compression to over 1,600 meters per second! This means the acoustic refractive index in the trench is inverted, causing our collision-avoidance sonar pings to trace upward-curving parabolic arcs!\"\n\n\"*BEEP——BEEP——*\"\n\nRight at that moment, the ultra-deep high-frequency collision avoidance sonar mounted on the bow received several faint, dynamic biological returns.\n\n\"Biological echoes detected?!\" Du Hailan gripped the primary steering yoke with disbelief. \"In the Hadal zone past eight thousand meters under eight hundred atmospheres, macroscopic vertebrates can actually survive?!\"\n\n\"Quick, slew the port low-light ultra-sensitive camera over!\" Cheng-hao urged.\n\nHailan deftly nudged the gimbal joystick, illuminating a swath of deep water ten meters off the port side with a gentle, biomimetic cold-light illuminator.\n\nAcross the ultra-high-definition holographic display inside the sphere, everyone held their breath in unison, utterly spellbound by the bizarre life form revealed before their eyes.\n\nThere, gliding gracefully through the freezing, crushing deluge, swam three peculiar fish roughly twenty centimeters in length.\n\nTheir bodies were an ethereal, translucent pinkish-white, completely devoid of the hard scales typical of surface fish; their skin was as delicate as cicada wings, revealing glimpses of internal organs and delicate skeletons beneath semi-transparent muscle tissue. Their heads were blunt and rounded, with black eye spots heavily vestigial, while their pectoral and caudal fins resembled layers of gossamer silk, undulating with effortless, celestial grace under eight hundred atmospheres of pressure.\n\n\"This is... the legendary *Mariana Snailfish* (*Pseudoliparis swirei*)!\" Ye Yijie covered her mouth in awe, her eyes blazing with the fervent passion and reverence of a biologist. \"They are the undisputed deep-diving champions among Earth's vertebrates! They have been confirmed living at an extreme Hadal depth of 8,145 meters!\"\n\n\"Good grief...\" Jiang Jiang marveled, gazing at the fish that looked as fragile as soft tofu. \"Our submersible uses aerospace-grade titanium alloy tens of centimeters thick just to barely withstand eight hundred atmospheres; how on earth do these delicate little creatures swim around without being squashed into fish paste?!\"\n\n\"Because their pressure-defying miracle occurs at the microscopic level of molecules and cells!\"\n\nYe Yijie accessed the biomolecular database, unraveling the sacred code of deep-sea evolutionary biology: \"Under eight hundred atmospheres, water molecules forcibly invade the folded structures of proteins, severing hydrogen bonds and hydrophobic interactions, which causes ordinary biological proteins to denature and lose function instantly; simultaneously, the immense pressure forces the phospholipid bilayers of cell membranes into rigid, crystalline states, causing cellular death!\"\n\n\"Yet through deep-time evolution, the Mariana snailfish synthesizes a miraculous microscopic piezolyte—trimethylamine N-oxide (TMAO)! TMAO molecules act like rigid nanoscale scaffolds tightly shielding the protein surface, preventing water molecules from disrupting their three-dimensional conformations; at the same time, their cell membranes are enriched with ultra-high proportions of polyunsaturated fatty acids, maintaining olive-oil-like fluidity even near freezing temperatures under crushing loads! Even more astoundingly, their skeletons have evolved unossified cartilaginous features, with microscopic gaps in their skulls that completely eliminate any air-filled cavities, achieving absolute internal-external pressure equalization!\"\n\nBeneath the snailfish, a cluster of milky-white, five-centimeter-long Hadal giant amphipods (*Hirondellea gigas*) scurried nimbly through the water column. Ye Yijie pointed out their spectral scan in admiration: \"The carapaces of these amphipods have even evolved aluminum-rich biomineralized protective layers, allowing them to digest cellulosic wood debris falling from miles above, forming an autonomous Hadal food web completely decoupled from sunlight!\"\n\nWatching these deep-sea spirits glide peacefully just beyond the floodlight halo, a wave of profound awe washed over Cheng-hao's heart.\n\nIn what humanity perceived as an uninhabitable physical dead zone, life had forged an answer of exquisite, peerless elegance. This abyss was no sterile wasteland of frozen ruin, but nature's most profound, sacred sanctuary of life!\n\n\"Farewell to our snailfish friends; we are crossing the 9,000-meter threshold!\" Hailan's steady voice pulled everyone's thoughts back to their tense operational reality.\n\nThe digits on the instrumentation panel plunged relentlessly downward like a heartless countdown:\n\n9,500 meters...\n\n9,800 meters...\n\n10,000 meters!\n\nThe instant the depth gauge breached the 10,000-meter milestone, an agonizing, tooth-grinding metallic creak resonated through the titanium alloy spherical cabin of the *Nautilus-IV*—\n\n\"*TINK... SNAP...*\"\n\nIt was the terrifying hydrostatic deadweight of more than one ton per square centimeter (1,000 atmospheres) bearing relentlessly down upon the two-meter-diameter titanium pressure sphere! According to Lamé's thick-walled spherical vessel equations, the inner shell was enduring over 600 megapascals of biaxial compressive hoop stress. Even with specialized titanium-molybdenum alloy boasting yield strengths exceeding 1,000 MPa, the metallic lattice was uniformly compressing inward by several micrometers, compressing the cabin's atmosphere and causing ambient air temperature to rise by two degrees.\n\n\"All thirty-six strain gauge resistance bridges reading nominal! Deformation remains well within elastic engineering limits; no localized stress concentrations observed!\" Ye Yijie clenched her fists, calmly reporting structural safety telemetry.\n\n\"10,200 meters... External hydraulic fluid viscosity has risen by thirty percent!\" Pico reported. \"Specialized perfluoropolyether low-temperature deep-sea hydraulic fluid performing stably; valve heating compensation loops nominal!\"\n\nThe atmosphere within the cabin was taut to the absolute extreme. At this very moment, the four youths and helmswoman Du Hailan were more isolated than astronauts aboard the International Space Station. Above their heads lay eleven solid kilometers of crushing ocean—the equivalent of Mount Everest inverted into the sea, with two full kilometers of water still churning above its summit!\n\n\"10,500 meters... 10,800 meters!\"\n\n\"Altimeter has acquired seabed bottom returns! Doppler Velocity Log (DVL) locked! Flat sedimentary seabed detected 150 meters below!\" Pico's optical sensors flared brightly.\n\n\"Seal primary descent flood valves; engage reverse-thrust vector thrusters; prepare for soft touchdown!\" Cheng-hao commanded decisively.\n\nHailan pulled back firmly on the primary braking yoke, commanding the four brushless magnetic-coupling vector thrusters to discharge a soft, uniform upward counter-thrust.\n\nThe twenty-ton *Nautilus-IV* decelerated gracefully through the abyss, its dual wide-angle floodlights angling downward. The piercing white beams parted darkness that had slumbered undisturbed for hundreds of millions of years, finally revealing the ultimate floor of planet Earth before the youths' eyes!\n\nHere was 10,928 meters—the deepest point on planet Earth: the bottom of the Mariana Trench, Challenger Deep!\n\nThe landscape beyond the viewports defied all human imagination.\n\nThere were no jagged, menacing precipices, nor were there roaring hydrothermal black smokers; instead, an endless, vast, perfectly flat, and pure pale-ivory seabed stretched out, resembling an extraterrestrial desert!\n\nIt was a plain of ultra-fine diatomaceous and radiolarian siliceous ooze deposited over hundreds of millions of years. In the floodlight beams, the seabed lay serene as glass, with bottom currents crawling at less than half a centimeter per second, devoid of a single turbulent ripple, populated only by clusters of translucent Hadal giant amphipods swimming lazily above the sediment like white deep-sea butterflies.\n\nThe gentle downwash from the thrusters brushed across the surface of the soft ooze, stirring delicate, silk-like ripples before settling back into eternal stillness.\n\n\"We... we really made it to 10,928 meters...\" Du Hailan whispered, tears welling at the corners of her eyes as she stared at the digits locked on the depth gauge. As an heir to an ocean-going maritime legacy, she had steered this brass submersible—crystallizing the wisdom of three generations—to achieve the ultimate feat of setting foot upon the bottom of the world!\n\n\"Woof! Terminal target beacon signal acquired! Bearing dead ahead, two hundred meters!\" Pico leaped up with excitement, his metallic tail wagging furiously.\n\nThe searchlight beams panned slowly forward.\n\nThere, half-buried in the center of the soft, pale siliceous ooze, stood a titanic, solemn temple constructed from monolithic deep-sea obsidian blocks and ancient Invar alloy trusses!\n\nAtop the temple, a fifteen-meter-tall brass four-star escapement balance arm stood proud and unyielding amidst the eternal crushing quietude of 1,100 atmospheres. And embedded right in the center of the balance was a two-meter-diameter mechanical sundial core, pulsing with powerful magnetic resonance that called to the beacon disc in Cheng-hao's grasp!\n\nIt was none other than the ultimate legacy left behind by Grandfather half a century ago—the *Dawn Beacon of Challenger Deep*!\n\nSuspended from either end of the four-star balance arm were two multi-ton black basalt counterweights; connecting the axis of the balance was an Invar alloy master escapement spindle nearly half a meter thick. Under the crushing subsidence of eleven thousand meters, that spindle was tilting with an agonizingly slow, heavy cadence, groaning under immense mechanical tension.\n\n\"That is the ultimate escapement regulating deep tectonic strain across the entire Pacific subduction zone...\" Cheng-hao gazed at the colossal balance arm ahead, his heart surging with boundless awe and reverence. \"Fifty years ago, Grandfather utilized pure classical mechanics to erect such a geological miracle at the very bottom of the Earth!\"\n\n\"Look at the left support arm of the balance!\" Ye Yijie adjusted the optical telephoto zoom, her expression turning gravely alarmed. \"The foundation of the master escapement spindle is sinking deep into the siliceous ooze, and the Invar alloy safety pin on the left has already developed visible bending fatigue micro-fractures! If that pin shears completely, the entire balance will collapse, triggering a catastrophic runaway chain reaction through the deepest faults!\"\n\nCheng-hao tightened his grip on the titanium-zirconium alloy beacon disc, an untamed, fiery resolve blazing in his eyes.\n\nHaving traversed eleven thousand meters of suffocating abyss, the ultimate battle of Volume Three, *The Dawn Beacon of Challenger Deep*, was about to erupt right here upon the bottommost soil of planet Earth!\n",
          "stemKnowledge": [
            "超深淵帶（Hadopelagic Zone, 6,000~11,000m）極限環境物理：水深 10,928 米靜水壓強達 1.08×10⁸ Pa（約 1,093 個大氣壓），每平方公分承受近 1.1 噸重壓。海水因高壓微觀壓縮，密度由 1.025 g/cm³ 升至 1.05 g/cm³ 以上，流體黏滯阻力與聲速顯著上升。",
            "深海生物抗壓分子機制（Biochemical Piezolytes: TMAO & Membrane Fluidity）：馬里亞納獅子魚（Pseudoliparis swirei）體內合成高濃度三甲胺氧化物（TMAO），緊密包裹蛋白質防止高壓水分子破壞立體摺疊；細胞膜富含多不飽和脂肪酸維持低溫高壓下的流動性，搭配不完全骨化軟骨消除體內空氣腔室，達成完美等壓。",
            "厚壁球殼應力與微觀彈性應變（Lamé Thick-Wall Spherical Shell Analysis）：在 1,000 大氣壓下，鈦合金球殼內外承受極限雙向環向壓縮應力。球形是自然界抗壓最優幾何，能均勻分佈應力消除角隅應力集中，金屬在彈性極限內產生微米級可逆微觀壓縮。",
            "挑戰者深淵矽質軟泥與水下聲學多普勒（Siliceous Ooze & DVL Navigation）：海溝底部為億萬年硅藻與放射蟲沉積的超細生物成因矽質軟泥，底層水流小於 0.5 cm/s。深潛艇依賴多普勒流速日誌（DVL）精準鎖定微米級相對底速實現安全軟著陸。"
          ]
        },
        {
          "id": 14,
          "file": "ch14",
          "title": "第 14 章　鈦合金球殼的應變呻吟",
          "enTitle": "Chapter 14 — The Strain Groans of the Titanium Sphere",
          "titleEn": "Chapter 14 — The Strain Groans of the Titanium Sphere",
          "shortTitle": "鈦合金球殼的應變呻吟",
          "concept": "固體材料凱塞聲發射效應與非牛頓剪切增稠地基固化",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在 1,100 個大氣壓極限下，鈦合金球殼為何會爆發晶格應變的金屬呻吟？面對因瓦合金銷釘的低溫疲勞微裂紋與沉陷軟泥，如何利用非牛頓剪切增稠流體與微分微米頂升扶正破曉信標？",
          "summary": "抵達 10,928 米挑戰者深淵底土，「鸚鵡螺-IV 號」鈦合金球殼突發劇烈金屬呻吟，誠浩憑藉凱塞效應原理穩住全體乘員。面對信標神廟底座矽質軟泥觸變性不均勻沉降導致的因瓦合金安全銷釘 35% 疲勞裂紋危機，團隊大膽注入微奈米剪切增稠凝膠固化海床，並以微分頂升精準卸除偏心剪應力，成功扶正終極破曉天平。",
          "summaryEn": "Reaching the bottom sediment of Challenger Deep at 10,928 meters, the titanium hull of Nautilus-IV suddenly emits severe metallic groans. Cheng-Hao calms the crew by deciphering the Kaiser acoustic emission effect. Discovering that thixotropic uneven settlement of siliceous ooze caused a critical 35% fatigue crack on the Invar safety pin of the beacon temple, the team injects shear-thickening fluid to solidify the seabed, employing differential micro-jacking to relieve eccentric shear stress and restore the balance of the Dawn Beacon.",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十四章：鈦合金球殼的應變呻吟\n\n一萬零九百二十八公尺。\n\n這是整個地球固體表面距離地心最近的冰冷深淵，也是人類深潛工程史上最令人窒息的絕對極限。\n\n在「鸚鵡螺-IV 號」四具抗高壓向量推進器完全熄火的剎那，重達二十噸的雙球殼深潛艇以一種近乎羽毛般的柔和姿態，緩緩陷入了挑戰者深淵底土那層厚達數公尺的矽質生物軟泥之中。\n\n然而，還未等球艙內的五人從抵達地球極點的震撼中回過神來，一陣令人毛骨悚然的金屬微觀破裂聲，突然毫無預兆地在眾人的頭頂上方炸響！\n\n「叮————！！」\n\n那聲音清脆而尖銳，宛如一柄極細的合金鋼針在冰面上狠狠劃過，又如同某種在極度緊繃下即將崩裂的高碳鋼琴弦！\n\n「呀啊！！」\n\n將江嚇得整個人猛地從座椅上彈了起來，雙手死死抱住安全頭盔，圓圓的臉龐上瞬間褪盡了血色：「什……什麼聲音？！是不是外殼裂開了？！海……海水要湧進來了嗎？！」\n\n「叮！喀啦……嗡————」\n\n緊接著，第二道、第三道刺耳的金屬金相應變聲接連不斷地在厚達二十公分的鈦合金球殼周圍迴盪，球艙內部的空氣彷彿在這一瞬間被某種無形的重壓抽乾，每一個微小的金屬震顫都像重錘一樣狠狠砸在所有人的心臟上！\n\n就連平日裡最沉著大膽的遠洋舵手杜海嵐，此刻握住備用機械拋載閥的手指也下意識地收緊，手心裡滿是冰涼的汗水。\n\n一萬一千公尺的海底，每平方公分承受著整整一點一噸的海水重量！這相當於將一頭成年非洲公象的所有重力，死死集中壓在讀者的一根大拇指指甲蓋上！在這樣恐怖的靜水壓強面前，任何一道肉眼看不見的微觀微裂紋，都會在零點零零一秒內引發災難性的內爆（Implosion），將整座鈦合金球艙瞬間壓成一團鐵餅！\n\n「大家不要慌！不要動應急拋載手柄！」\n\n誠浩那沉穩、堅定且沒有一絲動搖的聲音在死寂的球艙內響起，如同一劑強效的定心丸，瞬間穩住了瀕臨崩潰的氣氛。\n\n只見少年迅速從工具箱中取出特製的「偏振應變分析護目鏡」戴在眼眶上，同時啟動了主控台上的多通道超聲聲發射（Acoustic Emission, AE）監測矩陣。\n\n「這不是外殼破裂，更不是漏水！」誠浩指著全息屏幕上閃爍的三十六組綠色光譜數值，冷靜而飛快地解釋道，「這是固體材料力學中經典的『凱塞效應（Kaiser Effect）』！」\n\n「凱塞效應？」將江喘著粗氣，小心翼翼地抬起頭，「那……那到底是什麼意思啊？」\n\n「簡單來說，就是高強度金屬材料在初次承受歷史最高載荷時，內部晶格產生的微觀聲學呻吟！」\n\n葉旖緁推了推眼鏡，迅速調出球殼材料的微觀晶體結構圖，少女的聲音雖然依舊緊繃，但已恢復了學霸的理智與冷靜：「『鸚鵡螺-IV 號』的抗壓球艙採用了特種航太級鈦鉬鋯合金（Ti-Mo-Zr Alloy）。這種金屬的抗拉屈服極限高達一千一百五十兆帕；而在剛才我們下潛跨越一萬公尺大關時，外殼承受的雙向環向壓縮應力（Hoop Stress）首次突破了六百五十兆帕的歷史峰值！」\n\n「在如此恐怖的極限重壓下，鈦合金微觀晶粒之間的晶界位錯（Dislocation）正在發生自發性的滑移與重新鎖定排列，」誠浩接著說道，「晶格在微米尺度上釋放彈性能量，轉化為高頻彈性波，這就是我們剛才聽到的『叮叮』聲！根據凱塞定律，只要載荷不再超過當前峰值，這種晶格微調整的聲音就會迅速衰減並徹底消失，它非但不是結構破壞的先兆，反而是金屬外殼完成整體均勻承載、進入最穩定硬化狀態的物理標誌！」\n\n果然，正如誠浩所預料的那樣。\n\n在持續了不到三十秒的稀疏脆響後，整座鈦合金球殼內部的微觀應變聲逐漸歸於平息，三十六組應變電橋傳感器的指針全部穩如磐石地停留在最安全的彈性形變區間。\n\n「呼……」將江整個人癱軟在座椅上，大口大口地擦著額頭上的虛汗，「嚇死我了……我還以為我們真要在地球最深處變成深海罐頭了……」\n\n杜海嵐也長長地吐出一口濁氣，望向誠浩的目光中多了一抹難以掩飾的讚許：「不愧是齒輪少年，在這種萬米生死的關頭，竟然還能靠材料力學把大家從恐慌的懸崖邊拉回來。」\n\n「但我們面臨的真正考驗才剛剛開始，」誠浩神色凝重地指向正前方的觀察舷窗，「你們看前方那座深海終極破曉信標台！」\n\n此時，「鸚鵡螺-IV 號」前端的四道強效深海探照燈完全聚焦在兩百公尺外那座巍峨矗立的黑曜石神廟之上。\n\n在那座古老神廟的頂部，直徑達十五公尺的巨型黃銅四芒星擒縱天平，在慘白的光柱下顯得肅穆而蒼涼。天平兩端懸掛著兩枚重達數十噸的黑色玄武岩重錘，而支撐這一切的，是一根直徑近半公尺的特種因瓦合金（Invar, Fe-36%Ni）主擒縱軸。\n\n然而，在超高清光學變焦鏡頭的極限放大下，一處觸目驚心的工程隱患赫然暴露在眾人眼前！\n\n「天平的支撐基座正在發生嚴重的非均勻微沉陷！」葉旖緁失聲驚呼，「挑戰者深淵底土的矽質生物軟泥，是一種具有極強『觸變性（Thixotropy）』的非牛頓流體沉積物！在萬米水壓與數十噸重錘的持續靜壓下，神廟左側的黑曜石基岩向軟泥深處沉降了整整十二公分！」\n\n「這導致整根因瓦合金主擒縱軸發生了零點七度的偏斜！」誠浩的目光死死鎖定在軸承左側一枚直徑八公分的特種金屬銷釘上，「大家看那枚安全銷釘！它原本是用來鎖死天平平衡位置的，現在卻承受了額外數百萬牛頓米的巨大彎矩（Bending Moment）！」\n\n誠浩將紫外線螢光探傷光束投射在銷釘表面，只見在那枚銀白色的因瓦合金柱體根部，赫然亮起了一道長達兩公分、呈現暗紫色的微觀疲勞裂紋！\n\n「因瓦合金雖然具有極低的熱膨脹係數，但在接近零度與一千一百個大氣壓的極端三軸應力下，金屬的低溫抗衝擊韌性會顯著下降！」誠浩的語速極快，神情嚴峻到了極點，「這枚銷釘的斷面疲勞裂紋已經擴展到了百分之三十五的臨界極限！如果我們現在貿然操作機械臂將手中的信標卡盤推入插槽，卡盤嚙合時產生的機械衝擊動能，會像壓垮駱駝的最後一根稻草，瞬間引發銷釘的脆性斷裂！」\n\n「一旦銷釘徹底折斷，天平左側數十噸的玄武岩重錘就會失控墜落，砸碎整座信標台的核心機械差速器！」杜海嵐緊緊咬住下唇，「整條太平洋地震防護網將徹底失去終極擒縱校準的機會！」\n\n「必須在插入卡盤之前，完成基座扶正與銷釘應力卸載！」將江握緊了發條扳手，「誠浩，我們該怎麼做？！那可是一座幾十噸重的巨型神廟，我們的機械臂根本抬不動它啊！」\n\n「不能用蠻力硬抬，我們要改變海床軟泥的物理流變狀態，實施非牛頓膨脹流體固化支承！」\n\n誠浩的大腦飛速運轉，瞬間制定出大膽而精密的抢修方案：「第一步，利用潛艇兩側的注漿管，向神廟左側沉陷的軟泥層深處高壓注入特製的『剪切增稠微奈米二氧化矽凝膠（Shear-Thickening Fluid, STF）』！這種非牛頓流體在受到低速擾動時如水般流動，但一旦受到高壓微震衝擊，微觀奈米粒子會瞬間抱團形成剛性水合團簇，在零點一秒內將鬆軟的稀泥硬化為抗壓強度堪比花崗岩的固態基底！」\n\n「第二步，在硬化基底形成後，將江操控右側三噸級液壓機械爪，在天平支臂下方展開微米級微分頂升油缸，以每秒五微米的極限精度向上微頂，將壓在因瓦銷釘上的偏心剪應力完全卸載！」\n\n「這簡直是把材料力學與流體力學玩到了極致！」杜海嵐讚嘆一聲，隨即全神貫注地推動微調姿態桿，「『鸚鵡螺-IV 號』推進器微動啟動，向信標神廟左側緩慢靠近！」\n\n深潛艇在杜海嵐如同刺繡般細膩的操控下，以每秒不到五公分的極緩速度在矽質軟泥海床上向前滑行，穩穩停靠在距離巨型天平左支臂僅有三公尺的作業泊位上。\n\n「泊位鎖定！海床底質取樣鑽管已插入軟泥層！」皮可匯報。\n\n「非牛頓剪切增稠凝膠注入啟動！超高壓注漿泵，壓強八十兆帕，開！」誠浩厲聲下達指令。\n\n「轟——哧————！！」\n\n兩根粗壯的特種鈦合金注漿針管深深刺入神廟左側下陷的沉積層中，濃稠的奈米二氧化矽膨脹液如同一道道白色的金屬骨骼，在地底深處瘋狂蔓延滲透！\n\n隨後，皮可啟動了注漿管頂端的高頻超聲振動波，伴隨著劇烈的剪切震盪，原本鬆軟如綿的矽質軟泥在一瞬間發生了驚天動地的物相轉變——數以億計的微米微粒在剪切應力下瞬間鎖死，化作了一塊堅不可摧的平整硬基底！\n\n「硬化基底強度突破六十兆帕！承載力達標！」葉旖緁激動地大喊。\n\n「將江，就是現在！液壓微分頂升油缸，展開！！」\n\n「交給我吧！！」\n\n將江雙眼圓睜，雙手套在液壓反饋手套中，操控著潛艇右前方那隻沉重的機械爪，穩穩托住了天平左支臂下方的承重受力點。\n\n「微米頂升啟動……五微米……十微米……二十微米！！」\n\n伴隨著液壓伺服閥极其細微的「嘶嘶」聲，重達數十噸的巨型黃銅天平支臂，在萬米海底被硬生生向上抬升了關鍵的零點七度！\n\n在誠浩的偏振應變護目鏡中，那道原本泛著恐怖紫光的疲勞裂紋周圍，緊繃的等應力干涉條紋如潮水般迅速退去，受力指針赫然歸零！\n\n「偏心剪應力完全卸載！銷釘安全了！！」誠浩高呼。\n\n整座神殿在堅固的硬化基底與精準的機械頂升下，重新恢復了完美的水平自鎖！\n\n「鐺————！！」\n\n四芒星天平軸心深處，那枚沉寂了整整半個世紀的機械日晷核心，發出了一聲清脆而悅耳的金屬契合輕鳴，彷彿在歡迎著跨越千山萬水、戰勝極限重壓的少年們。\n\n誠浩長長地吐出一口氣，取下護目鏡，目光望向那座在萬米深淵中重新昂首挺立的巍峨天平，眼中閃爍著無與倫比的熾熱光芒。\n\n鈦合金球殼的應變呻吟已被徹底征服，深淵的終極信標插槽，就在眼前！",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 14: The Strain Groans of the Titanium Sphere\n\nTen thousand nine hundred and twenty-eight meters.\n\nThis was the coldest abyss on Earth's solid surface closest to the planetary core, and the most suffocating absolute limit in human deep-submergence engineering history.\n\nThe instant the four pressure-resistant vector thrusters of *Nautilus-IV* completely shut down, the twenty-ton dual-sphere submersible settled into the meters-thick layer of biogenic siliceous ooze on the floor of Challenger Deep with feather-like gentleness.\n\nYet, before the five crew members inside the sphere could even recover from the awe of reaching Earth's ultimate extreme, a hair-raising sound of microscopic metallic fracture violently erupted above their heads without warning!\n\n\"Ting————!!\"\n\nThe sound was sharp and crisp, like an ultra-fine alloy needle raking violently across a sheet of ice, or a high-carbon piano wire pushed to its absolute tension limit right before snapping!\n\n\"Yaaah!!\"\n\nJiang-Jiang sprang out of his seat in terror, clutching his safety helmet with both hands as every drop of color drained from his round face: \"Wh-what was that sound?! Did the hull crack?! Is... is seawater about to burst in?!\"\n\n\"Ting! Crackle... Wuuuum————\"\n\nImmediately following, a second and third piercing sound of metallographic strain echoed continuously around the twenty-centimeter-thick titanium alloy sphere. The air inside the cabin felt instantaneously sucked dry by an invisible crushing weight, every microscopic metallic shudder hammering mercilessly against everyone's chest!\n\nEven Captain Du Hai-Lan, normally the most composed and daring ocean helmsman, instinctively tightened her grip on the emergency mechanical ballast release valve, her palm soaked with cold sweat.\n\nAt eleven thousand meters beneath the sea, every single square centimeter bore a full 1.1 metric tons of hydrostatic seawater weight! That was equivalent to focusing the entire gravitational weight of a full-grown male African elephant onto a single human thumbnail! In the face of such horrifying hydrostatic pressure, any microscopic flaw invisible to the naked eye could trigger a catastrophic implosion in less than a millisecond, flattening the entire titanium sphere into a metal pancake!\n\n\"Everyone, do not panic! Do not touch the emergency ballast handle!\"\n\nCheng-Hao's calm, steady voice rang out through the dead silence of the sphere without a tremble, acting like an instant tranquilizer that immediately stabilized the near-hysterical atmosphere.\n\nThe boy swiftly retrieved his custom polarized strain-analysis goggles from his toolkit and slipped them over his eyes, simultaneously activating the multi-channel acoustic emission (AE) ultrasonic monitoring matrix on the main console.\n\n\"This is not hull rupture, and certainly not water ingress!\" Cheng-Hao pointed to the thirty-six groups of green spectral readouts flickering across the holographic display, explaining rapidly and calmly. \"This is the classic 'Kaiser Effect' in solid mechanics!\"\n\n\"The Kaiser Effect?\" Jiang-Jiang panted heavily, cautiously peeking up. \"Wh-what does that even mean?!\"\n\n\"Put simply, it is the microscopic acoustic groan generated by high-strength metallic lattices when experiencing their historic peak load for the very first time!\"\n\nPush-fitting her glasses, Yeh I-Chieh swiftly brought up the microscopic crystal lattice diagrams of the pressure hull. Though her voice was tight, the top student's rational composure had returned: \"The pressure hull of *Nautilus-IV* is forged from aerospace-grade titanium-molybdenum-zirconium alloy (Ti-Mo-Zr Alloy). Its tensile yield strength reaches 1,150 MPa. As we just crossed the ten-thousand-meter threshold, the biaxial hoop compressive stress on the shell breached the historic peak of 650 MPa for the first time!\"\n\n\"Under such monstrous extreme pressure, spontaneous slip and relocking of grain boundary dislocations are occurring between the micro-grains of the titanium alloy,\" Cheng-Hao continued. \"The lattice releases elastic strain energy at the micrometer scale, converting into high-frequency elastic stress waves—which is the sharp 'ting-ting' sound we just heard! According to Kaiser's Law, so long as the load does not exceed this current peak, these lattice readjustment sounds will rapidly decay and cease entirely. Far from a harbinger of failure, this is the physical hallmark that the metallic shell has achieved uniform stress distribution and entered its most stable work-hardened state!\"\n\nSure enough, precisely as Cheng-Hao had predicted.\n\nAfter less than thirty seconds of sparse, crisp pings, the microscopic strain sounds inside the titanium sphere subsided into tranquility. The indicators across all thirty-six strain bridge sensors remained rock-solid within the safest elastic deformation band.\n\n\"Phew...\" Jiang-Jiang slumped limp against his seat, vigorously wiping cold sweat from his forehead. \"Scared the life out of me... I thought we were really going to end up as canned tuna at the bottom of the world...\"\n\nDu Hai-Lan also let out a long, heavy breath, looking at Cheng-Hao with unmistakable admiration: \"Commendable, Gear Boy. In a life-or-death crisis at ten thousand meters, you actually pulled everyone back from the brink of panic using pure materials science.\"\n\n\"Yet our true trial has only just begun,\" Cheng-Hao pointed gravely toward the forward observation viewport. \"Look at the ultimate Abyssal Dawn Beacon altar directly ahead!\"\n\nNow, the four high-power deep-sea searchlights at the prow of *Nautilus-IV* converged fully upon the towering obsidian temple standing two hundred meters away.\n\nAtop that ancient temple, a colossal fifteen-meter-wide brass four-pointed star escapement balance stood solemn and desolate in the pale beams. Two black basalt counterweights weighing dozens of tons hung from its ends, all supported by a central escapement shaft forged from specialized Invar alloy (Fe-36%Ni) nearly half a meter in diameter.\n\nHowever, under the extreme magnification of the ultra-high-definition optical zoom lens, a horrifying engineering hazard was starkly revealed to the crew!\n\n\"The balance's support foundation is undergoing severe non-uniform micro-settlement!\" Yeh I-Chieh cried out in alarm. \"The biogenic siliceous ooze of Challenger Deep is a non-Newtonian sedimentary suspension with extreme 'thixotropy'! Under the perpetual hydrostatic load of eleven thousand meters and the static weight of the counterweights, the obsidian bedrock on the temple's left side has sunk a full twelve centimeters into the mud!\"\n\n\"This caused the central Invar escapement shaft to tilt by 0.7 degrees!\" Cheng-Hao's gaze was locked onto an eight-centimeter-diameter safety pin to the left of the bearing. \"Look at that safety pin! It was designed to lock the balance in equilibrium, but now it is bearing millions of Newton-meters of eccentric bending moment!\"\n\nCheng-Hao beamed a fluorescent ultraviolet flaw-detection light across the pin's surface. At the base of the silvery-white Invar cylinder, a two-centimeter-long microscopic fatigue crack fluoresced in ominous dark purple!\n\n\"While Invar possesses a near-zero coefficient of thermal expansion, its low-temperature impact toughness drops precipitously under near-freezing temperatures and extreme triaxial hydrostatic stress of 1,100 atmospheres!\" Cheng-Hao spoke at breakneck speed with peak gravity. \"The sectional fatigue crack on this pin has already propagated to 35% of its critical limit! If we recklessly push the beacon cartridge into the socket with our manipulator arm right now, the kinetic impact shock of mechanical engagement will become the straw that breaks the camel's back, instantly triggering catastrophic brittle fracture!\"\n\n\"If that pin shears completely, the dozens-of-tons basalt counterweight on the left will plummet out of control, obliterating the core mechanical differential of the entire beacon platform!\" Du Hai-Lan bit her lower lip hard. \"The entire Pacific Tsunami Defense Grid will permanently lose its chance for ultimate escapement synchronization!\"\n\n\"We must level the foundation and relieve the stress on that pin before inserting the cartridge!\" Jiang-Jiang gripped his clockwork wrench. \"Cheng-Hao, what do we do?! That's a massive stone temple weighing dozens of tons—our mechanical arms can't possibly lift it!\"\n\n\"We don't lift it with brute force; we alter the rheological state of the seabed sediment and execute non-Newtonian dilatant fluid foundation grouting!\"\n\nCheng-Hao's mind fired at lightspeed, formulating an audacious and rigorous repair strategy: \"Step one: using the sub's bilateral grouting conduits, inject our proprietary 'Shear-Thickening Fluid (STF) Micro-Nano Silica Gel' under high pressure deep into the slumped sediment beneath the temple's left wing! This non-Newtonian fluid flows like liquid water under slow agitation, but upon high-frequency dynamic micro-shocks, the nanoparticles instantaneously cluster into rigid hydroclusters, solidifying soft sludge into a foundation with compressive strength rivaling granite in less than a tenth of a second!\"\n\n\"Step two: once the solidified foundation forms, Jiang-Jiang will operate the three-ton hydraulic gripper on our starboard side, deploying a micro-stepping differential jacking cylinder beneath the balance arm to lift it upward at five micrometers per second, completely unloading the eccentric shear stress on the Invar pin!\"\n\n\"This is taking materials science and fluid mechanics to the absolute summit!\" Du Hai-Lan commended, immediately focusing with total intensity on her vernier attitude thruster controls. \"*Nautilus-IV* vernier thrusters engaged, creeping toward the left flank of the beacon temple!\"\n\nUnder Du Hai-Lan's embroidery-like precision piloting, the submersible glided forward over the siliceous ooze seabed at less than five centimeters per second, docking securely at an operating berth a mere three meters from the giant balance's left arm.\n\n\"Berth locked! Seabed sediment sampling drill pipes fully inserted into the ooze!\" Pico reported.\n\n\"Non-Newtonian shear-thickening gel injection initiated! Ultra-high-pressure slurry pump at 80 MPa, engage!\" Cheng-Hao commanded crisply.\n\n\"BOOM——SHHHH————!!\"\n\nTwo thick specialized titanium alloy injection lances drove deep into the collapsed sediment layer beneath the left flank of the temple, pumping viscous nano-silica dilatant slurry that spread like white metallic scaffolding through the subterranean ooze!\n\nNext, Pico activated high-frequency ultrasonic transducers at the tips of the lances. Under violent shear oscillations, the silken, squishy ooze underwent a stupendous phase transition in an instant—billions of microparticles locked tightly together under shear strain, transforming into an unyielding, rock-solid sub-base!\n\n\"Solidified foundation strength exceeds 60 MPa! Bearing capacity verified!\" Yeh I-Chieh shouted exhilarated.\n\n\"Jiang-Jiang, now! Deploy the hydraulic differential micro-jacking cylinder!!\"\n\n\"Leave it to me!!\"\n\nEyes wide with focus, Jiang-Jiang flexed his hands within the hydraulic feedback haptic gloves, guiding the heavy starboard manipulator to cradle the designated load-bearing node beneath the balance's left arm.\n\n\"Micro-jacking engaged... five micrometers... ten micrometers... twenty micrometers!!\"\n\nAccompanied by the infinitesimal whisper of the hydraulic servo valves, the colossal multi-ton brass balance arm was hoisted upward at the abyssal floor by a critical 0.7 degrees!\n\nThrough Cheng-Hao's polarized strain goggles, the taut isostress interference fringes surrounding the ominous purple fatigue crack retreated like an ebbing tide, and the stress indicator plummeted to absolute zero!\n\n\"Eccentric shear stress completely unloaded! The pin is safe!!\" Cheng-Hao cheered.\n\nResting upon the solidified rock foundation and calibrated by precision mechanical jacking, the entire temple recovered its flawless horizontal self-locking equilibrium!\n\n\"CLANG————!!\"\n\nDeep within the arbor of the four-pointed star escapement balance, the core of the mechanical sundial that had slumbered for half a century emitted a crisp, resonant chime of engagement, as if welcoming the young adventurers who had conquered the unfathomable abyss.\n\nExhaling a long breath, Cheng-Hao lowered his goggles and gazed at the majestic balance standing proud once more in the ten-thousand-meter abyss, a brilliant fire blazing in his eyes.\n\nThe strain groans of the titanium sphere were conquered; the ultimate socket of the Hadal Beacon lay right before them!",
          "stemKnowledge": [
            "固體材料聲發射與凱塞效應（Acoustic Emission & Kaiser Effect）：金屬在高應力加載下，微觀晶界位錯運動與晶格滑移會釋放微弱瞬態彈性波。當材料承受未曾達到的歷史最高應力時，聲發射急劇爆發；載荷維持或低於該峰值時，聲發射停止。這是深海耐壓球殼進入穩定均勻承載塑性硬化前的典型力學表徵。",
            "深淵矽質軟泥之觸變性與流變力學（Thixotropic Rheology of Siliceous Ooze）：由微細硅藻與放射蟲幾何外殼殘骸構成的沉積物，在靜止狀態下具備一定結構強度，但在剪切應力或微幅擾動下，絮凝網絡瓦解，黏度驟降數個數量級而呈現流體特徵，易引發深海重型結構物的不均勻微沉陷。",
            "因瓦合金低溫衝擊韌性與三軸應力疲勞（Invar Fe-36Ni Cryogenic Fatigue under Triaxial Stress）：36% 鎳鐵合金具極低熱膨脹係數，常用於精密天文時計與擒縱基座。但在 2°C 低溫與 110 MPa 極限靜水壓下，金屬延展性下降，剪切應力集中處容易萌生微觀微裂紋，微幅衝擊即有脆性斷裂風險。",
            "非牛頓剪切增稠流體地基固化與微米級微分頂升（STF Seabed Stabilization & Differential Micro-Jacking）：微奈米二氧化矽在分散介質中受高剪切震盪時，粒子間流體潤滑層破裂形成剛性瞬態水合團簇，黏度暴增千倍實現毫秒級固化。配合液壓微分微米伺服油缸，可在萬米深海精確補償角偏斜並完全卸除機械過載。"
          ]
        },
        {
          "id": 15,
          "file": "ch15",
          "title": "第 15 章　深淵盲蟲與自轉逆輪",
          "enTitle": "Chapter 15 — The Abyssal Blind Worms and the Counter-Rotating Wheel",
          "titleEn": "Chapter 15 — The Abyssal Blind Worms and the Counter-Rotating Wheel",
          "shortTitle": "深淵盲蟲與自轉逆輪",
          "concept": "胞外多醣生物垢、高壓三體磨損咬死與超聲微空化清洗",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在 1,100 個大氣壓下，超深淵巨鉤蝦與古菌生物垢如何引發青銅齒輪的三體磨損與微觀冷焊？面對卡死半個世紀的自轉逆輪，團隊如何利用超聲微空化水錘與諧波微震實現微觀解鎖？",
          "summary": "天平扶正後，團隊準備插入終極信標卡盤，卻發現插槽底部的雙向差速自轉逆輪死死卡在死角。深淵巨型端足類（巨鉤蝦）與極端嗜壓古菌分泌的胞外多醣生物膜，夾雜著矽質微粒在高壓下引發三體磨損與青銅微觀冷焊。誠浩指揮注入低表面張力全氟聚醚溶劑乳化生物膜，啟動 28 kHz 超聲微空化射流震碎矽質微粒，並施加 98 Hz 諧波微震打破靜摩擦自鎖，成功喚醒自轉逆輪，徹底敞開終極信標插槽！",
          "summaryEn": "With the balance leveled, the team prepares to insert the beacon cartridge, only to find the counter-rotating epicyclic wheel seized fast in a dead angle. Extracellular polymeric biofilms secreted by hadal giant amphipods and piezophilic archaea, intermingled with superfine silica silt under 1,100 atmospheres, induced severe three-body abrasive jamming and micro-galling cold welding. Cheng-Hao directs the injection of PFPE surfactant to emulsify the biofilm, fires 28 kHz ultrasonic micro-cavitation jets to shatter silica silt, and introduces 98 Hz harmonic micro-vibrations to break static friction, successfully reawakening the counter-rotating wheel and unveiling the ultimate beacon socket.",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十五章：深淵盲蟲與自轉逆輪\n\n一萬零九百二十八公尺的海溝平原上，冰冷刺骨的死寂被「鸚鵡螺-IV 號」四道刺破永夜的探照燈徹底撕裂。\n\n在剛剛由剪切增稠微奈米凝膠固化成的岩白堅石基底上，重達數十噸的黑曜石神殿巍峨屹立。橫跨十五公尺的黃銅四芒星擒縱天平，在液壓微米頂升的精準校準下，終於達成了完美的零度水平自鎖。\n\n「天平水平度誤差小於千分之一弧度！」\n\n葉旖緁緊盯著全息主控台上的傾角干涉儀讀數，長長地舒了一口氣，白皙的臉頰上泛起激動的紅暈：「地基沉陷完全被止住，因瓦合金銷釘上的微觀疲勞裂紋也已徹底脫離了危險剪應力區間！」\n\n「幹得漂亮，夥伴們！」杜海嵐推下推進器的微動鎖定桿，將潛艇的懸停姿態固定在距離信標神廟主工作面僅兩公尺的黃金作業點，「現在，只要把老杜和爺爺留下的終極信標卡盤推入核心插槽，整條環太平洋地震海嘯防護網就能在十二小時倒數計時結束前，重新校準歸零！」\n\n「卡盤已經就緒！」\n\n將江摩拳擦掌，雙手套在沉重的高靈敏度力反饋手套中，操控著潛艇前端的重型伺服機械爪，小心翼翼地夾起放置在減震安全箱中的那枚二十公分鈦鋯合金齒輪卡盤。\n\n只見在深藍色探照燈的照射下，卡盤表面那一圈由爺爺親手鐫刻的齒輪刻度閃爍著溫潤的金屬光芒，彷彿帶著跨越半個世紀的守護承諾，即將與萬米深淵中的古老母體重逢。\n\n然而，正當機械爪緩緩推向神廟中央的主插槽時，一直戴著偏振光學護目鏡密切觀察結構細節的誠浩，瞳孔卻猛然收縮！\n\n「將江，停下！立刻停止推進機械爪！」\n\n少年突如其來的急促喝止聲，讓將江的神經瞬間繃緊，手腕一抖，機械爪硬生生懸停在距離插槽僅剩五公分的冰冷海水中！\n\n「怎麼了誠浩？！」將江心有餘悸地擦著額頭的汗珠，「天平不是已經扶正了嗎？難道還有別的暗礁？！」\n\n「插槽深處……根本沒有對準！」\n\n誠浩的神情嚴肅無比，他迅速轉動觀察舷窗頂部的微距變焦光學透鏡，將信標神廟軸心深處的畫面放大至極限，投影在整面全息艙壁上。\n\n「大家看插槽底部的齒輪嚙合環！」誠浩指著畫面中那座由特種青銅與玄武岩精密嵌合的核心機構，「那是一座直徑一公尺的『雙向差速自轉逆輪（Counter-Rotating Epicyclic Wheel）』！」\n\n眾人順著誠浩手指的方向望去，只見在四芒星天平的旋轉軸心正下方，赫然安裝著一套極其繁複精妙的行星輪系。\n\n這座逆輪的齒圈外圍鐫刻著十二道如同日晷刻度般的自鎖導軌，中央則是一枚擁有七十二顆高精度漸開線斜齒的太陽輪。按照設計，當天平擒縱齒爪擺動時，這套逆輪應當在重力差速配重的驅動下，每六十秒自發旋轉整整半度，精準將信標卡盤的三重防錯定位銷導引至鎖死凹槽中。\n\n可是此刻，這座歷經了半個世紀深海洗禮的自轉逆輪，卻死死卡在正負四十五度的奇異死角上，紋絲不動！\n\n「齒圈周圍……那層白花花、黏糊糊的東西到底是什麼？！」將江瞪大了眼睛，透過舷窗望向那座齒輪，「看起來像是一團厚厚的白霜，又像是某種深海苔蘚？！」\n\n「那不是苔蘚，挑戰者深淵沒有光線，不可能有植物生存，」葉旖緁迅速啟動多光譜生化成分掃描儀，屏幕上立刻跳出一串密密麻麻的有機高分子波譜特徵，「那是極端嗜壓化能自養微生物分泌的『胞外多醣基生物膜（Extracellular Polymeric Substances, EPS）』！」\n\n就在少女話音剛落的瞬間，神廟基座裂隙的陰影中，幾隻體型龐大、外形令人不寒而慄的奇異生物，悄無聲息地游曳了出來！\n\n「呀啊！蟲……好多白色的巨大盲蟲？！」將江嚇得往後一縮。\n\n只見在探照燈的慘白光柱下，四五隻通體乳白、半透明的巨型甲殼生物，正擺動著節肢與觸角，緩緩爬過逆輪的青銅齒面。這些生物長達三十多公分，沒有任何眼睛的痕跡，甲殼在萬米水壓下呈現出晶瑩剃透的薄膜狀，宛如一隻只幽靈巨蝦！\n\n「不要怕，那是深淵巨型端足類（*Alicella gigantea*），也就是俗稱的深淵巨鉤蝦！」杜海嵐眼中閃爍著海洋生物學家的驚嘆與熱切，「牠們是地球超深淵帶的極限清道夫，體內富含能對抗萬米壓強的特殊蛋白質與不飽和脂肪酸。牠們在這裡聚集，是因為逆輪周圍附著了極其豐富的深海古菌群落！」\n\n「但是這些古菌與巨鉤蝦的排泄物，惹出了天大的工程麻煩！」誠浩的面色愈發凝重。\n\n少年指著微觀光學掃描圖，為大家剖析眼前的死結：「五十年間，海溝上層沉降下來的生物有機碎屑雨、微米級矽質硅藻殘骸，與古菌分泌的胞外多醣體牢牢交織在一起，形成了一層厚度達三公釐、黏滯度極高的複合生物垢（Bio-Fouling Layer）！」\n\n「更致命的是，在挑戰者深淵一千一百個大氣壓的極限靜水重壓下，海水分子被死死擠壓在微米級的齒面接觸區外，導致青銅齒輪表面原本的微米水膜潤滑徹底失效！」誠浩深吸了一口氣，「超細矽質微粒（平均粒徑僅有二微米）隨著洋流微滲透鑽進了逆輪的嚙合游隙中，被極限水壓生生壓進了金屬晶格表層！」\n\n「這是固體接觸力學中最棘手的『三體磨損卡死（Three-Body Abrasive Jamming）』與深海微觀黏著（Micro-Galling）！」葉旖緁推了推眼鏡，聲音中帶著深深的震撼，「在無氧且缺乏潤滑的極端高壓環境下，青銅齒面的微觀微凸體在微粒的摩擦撕扯下，已經與對向的硬質合金導軌發生了微觀層面的金屬冷焊（Cold Welding）！」\n\n「難怪逆輪轉不動！」將江急得滿頭大汗，「那我們能不能用機械臂上的兩噸級大扭矩發條扳手，硬生生把它扭過去？！」\n\n「絕對不行！」誠浩立刻否決，「冷焊黏著點的抗剪切強度已經接近青銅基體的屈服極限。如果用蠻力強行施加外扭矩，齒輪表面脆弱的漸開線齒廓會被瞬間撕裂崩角，導致整座逆輪永久報廢！一旦逆輪損壞，信標卡盤就再也無法旋轉到位，深海地震防護網的校準將徹底功虧一簣！」\n\n「不能用蠻力，那要怎麼在萬米海底清洗這座生鏽卡死的精密齒輪？！」杜海嵐蹙眉問道，「我們總不能游出去拿刷子慢慢刷吧？！」\n\n「我們要用物理學的極致微觀武器——『超聲微空化射流（Ultrasonic Micro-Cavitation Jet）』與『諧波差速微震（Harmonic Micro-Vibration Resonance）』！」\n\n誠浩的眼中閃爍著自信的智慧光芒，一個巧妙至極的三步解鎖計畫瞬間在腦海中成形！\n\n「第一步，將江，操控潛艇左側的多功能化學注劑臂，向逆輪軸承與齒槽縫隙精準噴塗低黏度的特種『深海全氟聚醚界面活性劑（PFPE Surfactant）』！這種特種氟化溶劑具有極低的表面張力，能在萬米水壓下強行滲透進微米級間隙，乳化並瓦解微生物的胞外多醣體黏結網絡！」\n\n「明白！氟化界面活性劑噴塗準備！」將江熟練地切換控制閥。\n\n「第二步，皮可，啟動潛艇機械爪末端的高頻大功率壓電陶瓷超聲換能器（Piezoelectric Ultrasonic Transducer），將震動頻率鎖定在二十八千赫茲（28 kHz）！」誠浩轉向機械柴犬。\n\n「汪！二十八千赫茲高能超聲聚焦矩陣已就緒，皮可隨時可以發射！」柴犬雙眼閃爍著精準的藍色激光校準束。\n\n「在萬米高壓下，普通的超聲空化閾值會急劇抬高；但正因為海水密度與壓強極大，一旦在局部人工激發微空化氣泡，氣泡在微秒級崩潰閉合時釋放的微觀衝擊波，壓強將瞬間飆升至五百兆帕以上！」誠浩飛快解釋道，「這種微米級的『定向水錘微射流（Water Hammer Micro-Jet）』，能像無數把微觀奈米手術刀一樣，精準將齒面上的矽質硬質微粒和冷焊凸點剝離震碎，同時絕不損傷齒輪母體的金屬基層！」\n\n「第三步，杜海嵐，當微空化清洗完成的瞬間，利用潛艇前端的伺服液壓頂桿，向逆輪施加特定固有頻率的『雙向高頻交變微扭矩』，打破靜摩擦力自鎖，讓重力差速逆輪重新恢復順暢自轉！」\n\n「聽起來天衣無縫！動手吧！」杜海嵐握緊推進操縱桿，眼神堅毅如鐵。\n\n「行動開始！全氟聚醚界面活性劑，高壓脈衝噴射！！」\n\n「哧————！！」\n\n一道幽藍色的特種氟化溶劑如細針般刺入逆輪的齒槽深處，原本頑固如膠的生物垢在溶劑的極低表面張力浸潤下，瞬間發生微觀乳化剝離，原本盤踞在齒輪上的巨型端足類被氣浪輕輕驚動，擺動著長長的觸角向黑暗深處散去。\n\n「就是現在！二十八千赫茲超聲微空化聚焦射流，開！！」\n\n「嗡————轟————！！」\n\n機械柴犬皮可頭部的壓電聚焦透鏡驟然亮起耀眼的金色光環，一道肉眼不可見的高頻彈性波束穿透海水，狠狠轟擊在卡死的逆輪齒面上！\n\n在萬米深淵那原本近乎凝固的高壓重水中，數以億計的微米微氣泡在超聲波負壓相中瞬間孕育，又在正壓相中以萬分之一秒的極限速度劇烈崩潰！\n\n「噼啪！噼啪噼啪————！！」\n\n密密麻麻的微觀水錘爆炸聲在金屬表面連綿響起，厚積了半個世紀的矽質微粒與冷焊生物垢如同遭遇狂風暴雪的冰霜，在微射流的狂暴衝擊下層層粉碎、脫落，化作一片片懸浮在海水中被吸塵管徹底抽走！\n\n「微觀齒面清潔度達到百分之九十九點八！三體磨損微粒全部清除！」葉旖緁驚喜地大叫。\n\n「最後一步，諧波差速微震解鎖！！」\n\n誠浩親自接管微扭矩控制台，雙手精準調節著交變頻率旋鈕。\n\n「八十五赫茲……九十二赫茲……鎖定逆輪諧振頻率九十八赫茲！！」\n\n伴隨著機械爪傳感器發出的細微蜂鳴，一陣精準微小的交變扭矩輕輕注入逆輪軸心。\n\n只聽見「喀嗒」一聲清脆無比的金屬脫扣脆響，那處卡死了整整五十年的冷焊微凸點在諧波震盪下瞬間解離！\n\n下一秒，重力差速配重如同被喚醒的沉睡巨龍，拉動著整座直徑一公尺的黃銅逆輪開始自發旋轉！\n\n「呼————喀啦、喀啦、喀啦……」\n\n沉穩、流暢、清脆而充滿力量感的機械運轉聲在萬米深淵的神殿中回響，七十二顆青銅斜齒在十二道自鎖導軌間優雅地咬合滑動，十二道日晷刻度精準歸正！\n\n「逆輪自轉完全復位！定位鎖槽完全敞開！！」將江激動得熱淚盈眶。\n\n在全息屏幕中央，那枚深海信標的最終插槽，在逆輪的旋轉對齊下，終於毫無保留地呈現在眾人眼前！\n\n誠浩望著那座流暢旋轉的自轉逆輪，胸膛中熱血沸騰。\n\n深淵巨蟲與微觀卡死已被徹底征服，現在，該由他們親手為太平洋插上終極破曉信標了！",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 15: The Abyssal Blind Worms and the Counter-Rotating Wheel\n\nAcross the trench abyssal plain at 10,928 meters, the bone-chilling, suffocating silence was shattered by the four searchlights of *Nautilus-IV* piercing the perpetual night.\n\nResting atop the newly solidified, rock-solid sub-base formed by shear-thickening micro-nano fluid, the multi-ton obsidian temple stood monumental and majestic. Spanning fifteen meters across, the brass four-pointed star escapement balance had finally achieved a flawless zero-degree horizontal self-locking equilibrium under precision hydraulic micro-jacking.\n\n\"Balance level error is under one one-thousandth of a radian!\"\n\nYeh I-Chieh stared intently at the inclinometer interferometry readouts on the holographic console, letting out a prolonged breath as an excited blush dusted her pale cheeks: \"Foundation settlement is completely arrested, and the microscopic fatigue crack on the Invar safety pin has exited the perilous shear-stress danger zone!\"\n\n\"Splendid work, team!\" Du Hai-Lan engaged the thrusters' vernier locking detents, securing the submersible's hover attitude at the prime operating berth barely two meters from the beacon temple's primary workspace. \"Now, as long as we drive the ultimate beacon cartridge left behind by Old Du and Cheng-Hao's grandfather into the central socket, the entire Circum-Pacific Tsunami Defense Grid will be synchronized back to zero before the twelve-hour countdown expires!\"\n\n\"Cartridge is primed and ready!\"\n\nRolling up his sleeves, Jiang-Jiang slipped his hands into the heavy, high-sensitivity haptic feedback gloves, steering the heavy-duty servo manipulator arm at the bow to gingerly cradle the twenty-centimeter titanium-zirconium alloy gear cartridge resting in its shock-absorbing safety pod.\n\nUnder the deep-blue searchlight glow, the concentric ring of gear teeth hand-engraved onto the cartridge by grandfather gleamed with a gentle metallic luster—carrying a solemn guardian vow that spanned half a century, about to reunite with its ancient abyssal host after fifty long years.\n\nYet, just as the mechanical gripper slowly propelled the cartridge toward the central socket of the temple, Cheng-Hao—who had been scrutinizing the structural tolerances through his polarized strain goggles—suddenly felt his pupils contract!\n\n\"Jiang-Jiang, stop! Halt the manipulator arm immediately!\"\n\nThe boy's abrupt, sharp command made Jiang-Jiang's nerves snap taut; with a twitch of his wrist, the mechanical gripper froze dead in the icy water, a mere five centimeters from the mouth of the socket!\n\n\"What's wrong, Cheng-Hao?!\" Jiang-Jiang wiped cold sweat from his forehead with lingering dread. \"Isn't the balance already leveled?! Is there another hidden hazard?!\"\n\n\"Deep inside the socket... the gears are completely misaligned!\"\n\nCheng-Hao's expression was grave beyond measure. He swiftly rotated the macro-zoom optical prism atop the observation viewport, magnifying the deepest reaches of the beacon temple's arbor to its maximum threshold and projecting it across the holographic bulkhead.\n\n\"Look at the gear-engagement ring at the base of the socket!\" Cheng-Hao pointed to the core mechanism where specialized phosphor bronze and basalt were intricately interlocked. \"That is a one-meter-diameter 'Counter-Rotating Epicyclic Wheel'!\"\n\nEveryone followed Cheng-Hao's finger. Directly beneath the rotation axis of the four-pointed star balance sat an exquisitely intricate epicyclic planetary gear train.\n\nThe outer rim of this reverse wheel was etched with twelve sundial-like self-locking guideways, encircling a central sun gear boasting seventy-two high-precision involute helical teeth. According to the original blueprints, as the balance pallets oscillate, this counter-rotating wheel should be driven by gravity differential counterweights to self-rotate by precisely half a degree every sixty seconds, guiding the three foolproof alignment pins of the cartridge into their designated locking detents.\n\nBut right now, after enduring half a century of hadal trials, this counter-rotating wheel was seized solid at a bizarre dead angle of plus-or-minus forty-five degrees, utterly motionless!\n\n\"Around the gear ring... what on earth is that slimy, chalky-white gunk?!\" Jiang-Jiang's eyes popped wide as he stared through the viewport at the mechanism. \"It looks like a thick layer of frost, or some kind of bizarre deep-sea moss?!\"\n\n\"That isn't moss—there is zero sunlight in Challenger Deep, so photosynthetic plants cannot exist here,\" Yeh I-Chieh swiftly initiated the multi-spectral biochemical spectrometer, which instantly displayed dense organic polymeric spectral signatures. \"That is an 'Extracellular Polymeric Substance (EPS) Biofilm' secreted by extreme piezophilic chemolithoautotrophic microorganisms!\"\n\nThe moment her words settled, several colossal, spine-chilling creatures glided silently out from the shadowy crevices of the temple's basalt plinth!\n\n\"Yaaah! Bugs... why are there so many giant white blind worms?!\" Jiang-Jiang recoiled in horror.\n\nUnder the pale glare of the searchlights, four or five milky-white, semi-translucent giant crustaceans paddled their pleopods and antennae, slowly crawling across the bronze teeth of the reverse wheel. Over thirty centimeters in length, they showed no trace of eyes whatsoever; their carapaces appeared paper-thin and crystalline under the eleven-thousand-meter hydrostatic load, resembling otherworldly ghostly prawns!\n\n\"Don't be afraid—those are hadal giant amphipods (*Alicella gigantea*), commonly known as abyssal supergiant scuds!\" Du Hai-Lan's eyes sparkled with the awe and passion of a marine biologist. \"They are the ultimate scavengers of Earth's hadopelagic trenches, packed with specialized piezolytes and unsaturated fatty acids that resist immense hydrostatic crushing. They gather here because the reverse wheel is coated in a thriving colony of deep-sea archaea!\"\n\n\"Yet the secretions of these archaea and giant amphipods have bred a catastrophic engineering disaster!\" Cheng-Hao's countenance darkened further.\n\nPointing to the microscopic optical scan, the boy dissected the fatal deadlock before them: \"For fifty years, organic marine snow drifting from the upper ocean and microscopic siliceous diatom frustules have become intricately entwined with the archaeal extracellular polysaccharides, baking into a three-millimeter-thick, ultra-viscous composite bio-fouling layer!\"\n\n\"Even more lethal, under the monstrous hydrostatic pressure of 1,100 atmospheres in Challenger Deep, water molecules have been squeezed out from the micrometer-level tooth-contact zones, completely destroying the microscopic hydrodynamic lubrication film on the bronze gear surfaces!\" Cheng-Hao inhaled deeply. \"Superfine siliceous particles—with an average diameter of barely two micrometers—percolated into the gear backlash along abyssal currents, being forced directly into the metal lattice under crushing pressure!\"\n\n\"This is the most notorious headache in solid contact mechanics: 'Three-Body Abrasive Jamming' combined with deep-sea micro-galling!\" Yeh I-Chieh pushed up her glasses, her voice laden with awe. \"In an anoxic, unlubricated, extreme-pressure environment, the microscopic asperities on the bronze teeth have suffered microscopic plastic adhesion and cold-welded directly to the opposing cemented carbide guideways under the grinding shear of silt!\"\n\n\"No wonder the wheel won't budge!\" Jiang-Jiang broke into a nervous sweat. \"Can't we just use the two-ton high-torque clockwork wrench on the mechanical arm to wrench it free by force?!\"\n\n\"Absolutely not!\" Cheng-Hao vetoed immediately. \"The shear strength of those cold-welded adhesion junctions is close to the yield strength of the bronze matrix. If we apply brute external torque, the fragile involute tooth profiles will shear off and shatter instantaneously, permanently wrecking the entire wheel! Once the reverse wheel is destroyed, the beacon cartridge will never rotate into alignment, and the tsunami defense network calibration will be ruined beyond repair!\"\n\n\"If brute force is out, how do we clean a seized, rusted precision gear at ten thousand meters underwater?!\" Du Hai-Lan frowned. \"We certainly can't swim outside with a wire brush!\"\n\n\"We fight it with the ultimate microscopic physics weapons—'Ultrasonic Micro-Cavitation Jets' and 'Harmonic Micro-Vibration Resonance'!\"\n\nConfidence and intellect blazed in Cheng-Hao's eyes as an ingenious three-step unlocking protocol materialized in his mind!\n\n\"Step one: Jiang-Jiang, operate the portside chemical injection boom to spray a low-viscosity, specialized 'Deep-Sea Perfluoropolyether (PFPE) Surfactant' into the wheel bearings and tooth root clearances! This fluorinated solvent possesses near-zero surface tension, allowing it to force its way into micrometer fissures under hadal pressure to emulsify and collapse the polysaccharide binder matrix!\"\n\n\"Understood! Fluorinated surfactant injection primed!\" Jiang-Jiang skillfully flipped the manifold valves.\n\n\"Step two: Pico, activate the high-power piezoelectric ultrasonic transducer at the tip of the manipulator gripper, locking the acoustic excitation frequency to twenty-eight kilohertz (28 kHz)!\" Cheng-Hao turned to the robotic Shiba Inu.\n\n\"Woof! 28 kHz high-energy focused ultrasonic matrix calibrated; Pico is ready to fire on command!\" The Shiba's optical sensors flared with precision blue targeting beams.\n\n\"Under hadal pressure, the acoustic cavitation threshold rises drastically; however, because the density and ambient pressure of seawater are so extreme, once micro-cavitation bubbles are artificially generated, the microscopic shockwaves unleashed upon bubble collapse in microseconds will exceed 500 MPa!\" Cheng-Hao explained rapidly. \"This micrometer-scale 'Directional Water-Hammer Micro-Jet' acts like millions of microscopic nano-scalpels, peeling and pulverizing hard silica silt and cold-weld asperities without damaging the bronze gear substrate in the slightest!\"\n\n\"Step three: Du Hai-Lan, the instant micro-cavitation descaling completes, use the bow servo-hydraulic ram to deliver a bi-directional, high-frequency alternating micro-torque tuned to the gear's natural frequency, shattering the breakaway static friction and restoring smooth autonomous rotation under gravity differential drive!\"\n\n\"Sounds foolproof! Let's do it!\" Du Hai-Lan gripped the propulsion thruster throttles, her gaze ironclad.\n\n\"Commence operation! Perfluoropolyether surfactant, high-pressure pulse injection, engage!!\"\n\n\"SHHHH————!!\"\n\nA needle-fine jet of glowing cerulean fluorinated solvent pierced deep into the gear roots of the reverse wheel. Under the solvent's infinitesimal surface tension, the stubborn bio-film instantly emulsified and sloughed away; disturbed by the plume, the giant amphipods flickered their long antennae and drifted off into the abyssal gloom.\n\n\"Now! 28 kHz ultrasonic micro-cavitation focused jet, fire!!\"\n\n\"WUUUM————BOOM————!!\"\n\nThe piezoelectric focusing ring atop Pico's brow flared with a brilliant golden aura as an invisible beam of high-frequency elastic waves tore through the brine, slamming directly into the seized tooth surfaces!\n\nIn the near-viscous, high-pressure brine of the eleven-thousand-meter deep, countless millions of microscopic cavitation bubbles nucleated during the negative acoustic pressure phase, collapsing with catastrophic violence in ten-thousandths of a second during the positive pressure phase!\n\n\"CRACKLE! CRACK-CRACKLE————!!\"\n\nA relentless barrage of micro-water-hammer detonations erupted across the metal surfaces. Half a century of encrusted silica silt and cold-weld bio-scale fractured and peeled away like frost under a tempest, pulverized into clouds of micro-particulates instantly evacuated by the suction scrubber!\n\n\"Microscopic gear cleanliness has reached 99.8%! All three-body abrasive particulates eradicated!\" Yeh I-Chieh cried out in jubilation.\n\n\"Final step: harmonic differential micro-vibration unlock!!\"\n\nCheng-Hao took personal command of the micro-torque console, his fingers fine-tuning the alternating frequency dial with surgeon-like finesse.\n\n\"Eighty-five hertz... ninety-two hertz... resonance locked at ninety-eight hertz!!\"\n\nAccompanied by a faint melodic hum from the manipulator torque transducers, a whisper of alternating oscillatory torque was injected into the reverse wheel's arbor.\n\nWith a crisp, ringing \"CLACK\" of metallic disengagement, the cold-welded micro-junction that had held fast for fifty years disintegrated under harmonic resonance!\n\nThe very next instant, the gravity differential counterweights stirred like a reawakened dragon, dragging the entire one-meter bronze wheel into spontaneous, autonomous rotation!\n\n\"WHIRRR——Clack, clack, clack...\"\n\nA steady, rhythmic, resonant cadence of mechanical operation reverberated through the abyssal sanctuary. Seventy-two helical bronze teeth glided with breathtaking elegance along the twelve self-locking tracks, realigning the twelve sundial detents to absolute perfection!\n\n\"Reverse wheel rotation fully restored! Positioning guide slots wide open!!\" Jiang-Jiang cheered, tears welling in his eyes.\n\nIn the dead center of the holographic projection, the ultimate socket of the deep-sea beacon lay unveiled before them, aligned flawlessly by the turning of the wheel!\n\nCheng-Hao watched the smoothly revolving wheel, adrenaline and determination surging through his veins.\n\nThe abyssal worms and microscopic seizure had been vanquished; now, it was time for them to plant the ultimate Dawn Beacon for the entire Pacific!",
          "stemKnowledge": [
            "超深淵底棲生物生態與化能自養生物膜（Hadal Benthic Ecology & EPS Biofilm）：挑戰者深淵 11,000 米深處棲息著無眼的深淵巨型端足類（Alicella gigantea，體長逾 30 公分）與極端嗜壓古菌。微生物分泌的胞外多醣基生物膜（Extracellular Polymeric Substances, EPS）在萬米靜水壓下與有機碎屑、矽質泥粉固結，形成高黏滯度複合生物垢。",
            "極限高壓下之三體磨損與微觀冷焊咬死（Three-Body Abrasion & Micro-Galling in Hadal Depth）：在 110 MPa 壓強下，水分子潤滑膜在微米級接觸面上破裂失效。平均粒徑僅數微米的硬質矽質沉積顆粒擠入齒輪接觸副引發三體磨損，金屬微凸體在缺氧高壓下直接接觸，產生塑性變形與固態微觀冷焊（Cold Welding），引發不可逆卡死。",
            "超聲微空化射流與微射流剝離原理（Ultrasonic Micro-Cavitation Jet & Descaling）：在萬米深水高靜壓下，壓電超聲換能器在局部激發微米級微空化氣泡。氣泡在正壓相劇烈不對稱崩潰時，產生高達數百兆帕的局部高速定向水錘微射流（Water Hammer Micro-Jet），精確擊碎剝離附著的矽質微粒與冷焊生物垢，而不損傷青銅基體。",
            "全氟聚醚界面活性劑滲透與諧波差速微震解鎖（PFPE Surfactant Wetting & Harmonic Resonance Unlocking）：全氟聚醚（PFPE）具備極低表面張力與深海化學惰性，能強行滲入微米級游隙乳化生物垢；配合施加逆輪固有諧振頻率的微扭矩交變微震，打破靜摩擦阻力極限（Breakaway Friction），重啟重力差速自轉。"
          ]
        },
        {
          "id": 16,
          "file": "ch16",
          "title": "第 16 章　最後一枚因瓦合金銷釘",
          "enTitle": "Chapter 16 — The Final Invar Alloy Pin",
          "titleEn": "Chapter 16 — The Final Invar Alloy Pin",
          "shortTitle": "最後一枚因瓦合金銷釘",
          "concept": "斷裂力學臨界應力、稀土錸固溶強化與主動順應阻抗控制",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在萬米海溝芮氏 5.8 級前震衝擊下，原裝因瓦銷釘為何發生瞬時失穩脆斷？面對失控下砸的數十噸巨型天平，如何利用爺爺懷錶中特製的因瓦錸安全銷與主動順應阻抗控制挽救核心差速器？",
          "summary": "卡盤插入之際，馬里亞納海溝突發 5.8 級地震，交變動載荷引發天平劇烈晃動，原裝因瓦合金銷釘超越臨界應力強度因子發生災難性低溫脆斷！數十噸天平重錘失控下墜，即將砸碎核心信標卡盤。千鈞一髮之際，誠浩解開爺爺懷錶底蓋暗格，取出預留的航空級因瓦-錸超硬合金微差速安全銷，指揮將江切換機械爪主動順應阻抗控制，在下墜前 0.3 秒精準射入三號備用插槽，硬生生阻斷天平下墜動能，成功將信標卡盤推入百年閉環！",
          "summaryEn": "As the cartridge is inserted, a magnitude 5.8 earthquake rocks the Mariana Trench. Dynamic transient shock loads induce severe balance oscillations, driving the original Invar pin past its critical stress intensity factor into catastrophic cryogenic brittle fracture! Dozens of tons of basalt counterweights plummet out of control, threatening to crush the beacon cartridge. In the nick of time, Cheng-Hao unlocks the hidden compartment of grandfather's antique pocket watch to retrieve a pre-engineered aerospace-grade Invar-Rhenium micro-differential safety pin. Directing Jiang-Jiang to switch the manipulator to active compliance impedance control, they fire the pin into auxiliary slot three 0.3 seconds before impact, halting the plummeting arm and locking the beacon cartridge into its century-awaited complete circuit!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十六章：最後一枚因瓦合金銷釘\n\n一萬零九百二十八公尺的挑戰者深淵底土，深邃無垠的黑暗被「鸚鵡螺-IV 號」的高強度探照燈撕裂出一片耀眼的金色光環。\n\n在巍峨的黑曜石神廟正前方，那座直徑一公尺的雙向差速自轉逆輪，經過超聲微空化水錘與諧波微震的微觀清洗後，七十二顆青銅斜齒正以極其優雅的節奏在十二道日晷自鎖導軌間自發運轉。\n\n「逆輪對齊度達到百分之百！」\n\n葉旖緁緊盯著全息主控台上的多光譜雷射測距儀，少女清脆的聲音在死寂的耐壓球艙內迴盪，帶著一絲難以掩飾的顫抖與喜悅：「三重防錯定位銷槽已經全部旋轉至正上方零度基準點，主插槽完全敞開！」\n\n「將江，推進卡盤！」杜海嵐雙手穩穩扣住主推進器的姿態阻尼閥，將深潛艇的懸停震顫抑制在極限的零點五公釐以內，「距離十二小時太平洋板塊大地震臨界倒數，只剩下最後四十五分鐘了！」\n\n「交給我吧！這一次，絕對萬無一失！」\n\n將江深深吸了一口氣，雙手套在沉重的液壓反饋手套中，全神貫注地推動伺服機械臂的前進搖桿。\n\n潛艇右前方的重型高精度機械爪緩緩向前伸展，那枚直徑二十公分、由爺爺親手打造並由誠浩在鐘樓閣樓解密的「鈦鋯合金終極信標卡盤」，在冰冷的海水中劃過一道沉穩的金屬弧光，準確無誤地滑入了黑曜石神廟中央的旋轉插槽！\n\n「喀嗒……」\n\n卡盤邊緣的三道微差速定位凸榫與自轉逆輪內壁的自鎖導軌嚴絲合縫地咬合在一起，發出了一聲清脆悅耳的金屬滑動聲。\n\n「嚙合成功！」將江興奮得差點從座椅上跳了起來，「齒輪卡住了！定位銷全部落鎖了！」\n\n球艙內的五人同時長長地鬆了一口氣。\n\n然而，還沒等欣喜的笑容在少年們的臉龐上綻放，一陣來自地底萬米深處的沉悶地鳴，突然如同怒雷般在大洋地殼深處轟然炸響！\n\n「轟隆隆隆————！！」\n\n整座馬里亞納海溝底部的沉積岩層猛烈震顫起來，狂暴的次聲波在海水介質中瘋狂穿梭，激盪起一陣陣翻滾的白色矽質泥浪！\n\n「警告！海溝斷層帶監測到芮氏規模 5.8 級前震！」\n\n機械柴犬皮可雙眼投射出刺目的紅色警報光錐，頭部的聲學水聽器矩陣發出急促的蜂鳴：「菲律賓海板塊與太平洋板塊接觸面滑移量突增八微米！震源深度僅三公里，極限動載荷正在沿黑曜石神廟基座向上傳遞！」\n\n「糟了！天平的交變慣性力矩爆發了！」\n\n誠浩臉色驟然劇變，少年甚至來不及擦去額頭滾落的冷汗，一把抓過偏振應變分析護目鏡套在眼前！\n\n只見在兩百公尺外的那座神廟頂部，橫跨十五公尺的巨型黃銅四芒星擒縱天平，在地震波與深海洋流脈衝的猛烈衝擊下，兩側懸掛的數十噸黑色玄武岩重錘開始劇烈上下顛簸！\n\n原本在剛才被微分頂升勉強卸載的那根直徑八公分的特種因瓦合金（Invar, Fe-36%Ni）安全銷釘，此刻正承受著數百萬牛頓米的恐怖交變動態剪應力！\n\n「叮！吱吱吱————！！」\n\n一陣令人牙酸的金屬撕裂哀鳴聲，透過深潛艇厚達二十公分的鈦合金球殼，清晰無比地傳入了所有人的耳膜！\n\n在誠浩的偏振應變護目鏡中，那枚原本帶有兩公分疲勞微裂紋的銀白色因瓦合金銷釘表面，刺目的暗紫色應力干涉條紋瞬間被拉伸到了極致，密集的裂紋以肉眼可見的恐怖速度呈鋸齒狀瘋狂向前延伸！\n\n「斷裂力學臨界應力強度因子（$K_{Ic}$）突破極限了！」葉旖緁看著全息屏幕上暴跌的材料韌性曲線，聲音徹底變了調，「根據格里菲斯能量準則（Griffith's Criterion），因瓦合金在接近零度與一千一百個大氣壓的極端三軸應力下，裂紋擴展速率已經突破了臨界聲速！」\n\n「砰————！！」\n\n伴隨著一聲宛如重型步槍開火般的驚天爆響，那枚支撐了半個世紀的因瓦合金安全銷釘，在最後一波狂暴的剪切力矩下，徹底發生了災難性的低溫脆性斷裂！\n\n斷裂的半截合金柱體帶著撕裂的金屬毛刺崩飛而出，在萬米重水中打著旋砸進了下方的軟泥海床！\n\n「呀啊！！銷釘斷了！！」將江抱頭驚叫。\n\n失去了安全銷釘的鎖定約束，巨型黃銅天平的左側支臂帶著數十噸重的玄武岩巨石，在重力與地動加速度的疊加下，以每秒數公尺的失控角速度瘋狂向下砸落！\n\n而在天平的正下方，正是剛剛插入一半、尚未完全鎖死差速齒輪的核心信標卡盤！\n\n一旦數十噸的巨石重錘完全砸實，整座神廟的核心機械差速器將被碾得粉碎，深海零號鐘台將徹底化為廢鐵，而十二小時後席捲全太平洋的毀滅性海嘯將再也無法逆轉！\n\n「還有最後三秒鐘！！」杜海嵐咬緊牙關，雙手將姿態推力拉到最大，試圖用深潛艇前端的重型防撞保險槓去硬抗下墜的天平支臂。\n\n「海嵐姐不要硬撞！潛艇球艙承受不住動能衝擊！」\n\n在這生死存亡的零點一秒間，誠浩的眼神中爆發出一股前所未有的決絕與冷靜。\n\n只見少年閃電般抓起一直掛在胸前的那枚由爺爺親手雕琢的黃銅懷錶，指尖精準扣動表底殼隱藏的三道滑動彈簧微卡扣！\n\n「啪嗒！」\n\n懷錶厚實的底蓋向兩側彈開，露出的並不是普通的發條齒輪，而是一枚由微型減震矽膠包裹、散發著深邃銀灰冷光的全新特種金屬柱體！\n\n在那枚柱體的側表面，清晰地蝕刻著一行微米級的精密工程代碼：\n\n`INVAR-RE 36/12 - CRITICAL SHEAR OVERLOAD DETENT - 1974`\n\n「這是……因瓦-錸超硬合金微差速安全銷（Invar-Rhenium Pin）！」葉旖緁脫口而出，眼中湧出難以置信的震撼光芒，「爺爺在五十年前設計信標時，就已經算準了原裝銷釘會在萬米深海低溫高壓下發生材料疲勞！他在懷錶裡為後來的繼承者，留下了這枚用航空級稀土錸元素微合金化改造的終極替換件！！」\n\n「錸元素的固溶強化，讓這枚因瓦合金的低溫衝擊韌性提升了整整四倍，屈服極限高達一千四百兆帕！」\n\n誠浩迅速將懷錶中的因瓦錸合金安全銷裝入減震傳送艙，厲聲大喝：「將江，切換第二機械爪的『阻抗主動順應控制（Active Compliance Control）』模式！皮可，啟動微米級力矩補償矩陣！」\n\n「明白！主動順應控制啟動，接觸力設定五十牛頓！」將江滿頭大汗，雙眼通紅，全身肌肉緊繃如鐵！\n\n「將江，不要試圖去硬頂下墜的天平！」誠浩一邊緊盯著光學瞄準光標，一邊飛速下達操作指引，「利用神廟軸承外側的『漸進式微差速導向花鍵槽』！在天平重錘砸到最低點前零點三秒，將因瓦錸安全銷從側面三號備用插銷孔精準射入，利用銷釘自身的漸開線頸縮槽，在五毫秒內完成動態卡位與差速卸載！！」\n\n這是一場在萬米深海、千分之一秒尺度上的極限微觀交鋒！\n\n深潛艇的機械臂在將江如外科手術般微細的操控下，以每秒五十公分的極限速度穿過翻滾的泥浪，機械爪前端精準夾持著那枚泛著銀灰冷光的因瓦錸合金銷釘！\n\n十公尺……五公尺……一公尺！！\n\n呼嘯下墜的數十噸巨型天平支臂，夾帶著排山倒海的海水亂流，即將與黑曜石基座發生致命碰撞！\n\n「就是現在！！」誠浩一聲暴喝！\n\n將江的手腕在力反饋手套中微不可察地一抖，伺服液壓閥爆發出一道清脆的脈衝氣流，那枚因瓦錸合金安全銷化作一道銀色閃電，帶著極致的阻抗順應補償，筆直地滑入了神廟三號備用插銷孔！\n\n「鐺————！！嗡嗡嗡嗡————！！」\n\n一聲震撼整座挑戰者深淵的宏偉金屬撞擊聲，在深海一萬一千公尺處轟然響起！\n\n在因瓦錸合金銷釘嵌入的剎那，天平支臂攜帶的數百萬牛頓巨大動能狠狠砸在銷釘的剪切面上！\n\n然而，這一次，合金柱體沒有絲毫斷裂！特種錸原子的微觀晶格釘紮效應，將恐怖的衝擊動能完美轉化為彈性變形波，沿著因瓦合金的主軸均勻擴散！\n\n「差速花鍵完全卡緊！天平下墜被硬生生阻斷了！！」\n\n葉旖緁激動地盯著儀表，大聲尖叫起來：「偏斜角被精準鎖定在零度零分零秒！整座信標神殿的動能衝擊全部被因瓦錸銷釘吸收！」\n\n「卡盤到位！」將江順勢將主機械臂向前猛推！\n\n「咔嚓————鏗！！」\n\n伴隨著一聲莊嚴而厚重的機械咬合巨響，二十公分鈦鋯合金信標卡盤的三重微差速齒輪，終於與神殿深處的自轉逆輪完成了一百年來的第一次完美閉環！\n\n整座黑曜石神殿頂部的巨型四芒星天平驟然靜止，兩枚重達數十噸的玄武岩重錘穩如泰山地懸停在水平線的兩端，十二道日晷刻度全部綻放出純淨澄澈的金黃色光芒！\n\n「成功了……」將江整個人虛脫地癱在座椅上，大汗淋漓地喘息著，「我們……真的做到了……」\n\n杜海嵐長長地呼出一口濁氣，緩緩鬆開了握得發白的手指，望向誠浩的眼神中滿是敬畏與感動：「最後一枚因瓦合金銷釘……爺爺五十年前的預言，竟然在今天由你們親手完成了。」\n\n誠浩輕輕合上胸前空置的古董懷錶外殼，凝望著舷窗外那座在深海萬米深處重新恢復絕對平衡的神聖信標台，胸膛劇烈起伏，眼角泛起了滾燙的淚光。\n\n「爺爺，你看見了嗎？」少年輕聲自語。\n\n神殿軸心深處，被完全解鎖並完成校準的終極差速器核心，正開始發出輕微而有節奏的心跳般脈動。\n\n下潛萬米的考驗已經終結，而橫跨整座太平洋的破曉警報，即將在下一秒震撼響起！",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 16: The Final Invar Alloy Pin\n\nAcross the bottom sediment of Challenger Deep at 10,928 meters, the unfathomable, boundless abyss was torn open by the intense searchlights of *Nautilus-IV*, illuminating a brilliant golden arena.\n\nDirectly before the towering obsidian temple, the one-meter-diameter counter-rotating epicyclic wheel—having undergone microscopic scouring by ultrasonic micro-cavitation water hammers and harmonic micro-vibrations—was rotating autonomously with exquisite poise, its seventy-two bronze helical teeth gliding through twelve sundial self-locking tracks.\n\n\"Counter-rotating wheel alignment has reached one hundred percent!\"\n\nYeh I-Chieh stared unblinkingly at the multi-spectral laser rangefinder on the holographic main console. The girl's crisp voice echoed within the dead silence of the pressure hull, carrying a tremor of barely suppressed excitement and joy: \"All three foolproof alignment slots have rotated to the zero-degree reference datum at top dead center! The main socket is fully open!\"\n\n\"Jiang-Jiang, drive the cartridge home!\" Du Hai-Lan locked both hands onto the attitude damping manifold of the primary thrusters, dampening the submersible's hover tremor to within a razor-thin 0.5 millimeters. \"Only forty-five minutes remain before the twelve-hour countdown to the catastrophic Circum-Pacific megathrust earthquake expires!\"\n\n\"Leave it to me! This time, nothing will go wrong!\"\n\nTaking a deep breath, Jiang-Jiang slipped his hands into the heavy hydraulic feedback haptic gloves, pushing the servo manipulator arm's forward joystick with total concentration.\n\nThe heavy-duty precision manipulator claw on the sub's starboard bow extended slowly forward. That twenty-centimeter titanium-zirconium alloy ultimate beacon cartridge—forged by grandfather's own hands and deciphered by Cheng-Hao in the clock tower attic—traced a steady metallic arc through the freezing brine, sliding unerringly into the rotating socket at the heart of the obsidian temple!\n\n\"Clack...\"\n\nThe three micro-differential alignment splines on the cartridge's perimeter meshed seamlessly with the self-locking tracks on the counter-rotating wheel's inner wall, emitting a clean, resonant chime of metallic glide.\n\n\"Engagement successful!\" Jiang-Jiang nearly leapt from his seat in triumph. \"The gears have meshed! The locking pins have fully dropped in!\"\n\nAll five crew members inside the pressure sphere simultaneously let out a massive breath of relief.\n\nYet, before joyful smiles could even fully bloom across the young adventurers' faces, a muffled, colossal subterranean rumble detonated without warning deep within the oceanic crust ten thousand meters beneath their feet, like primeval thunder!\n\n\"BOOOOOM-RUMBLE-RUMBLE————!!\"\n\nThe entire sedimentary bedrock of the Mariana Trench floor shuddered violently. Savage infrasound waves tore across the seawater medium, churning up rolling clouds of white siliceous silt!\n\n\"Warning! Trench fault zone detects a magnitude 5.8 foreshock!\"\n\nPico the robotic Shiba Inu projected an urgent crimson warning cone from his eyes, the acoustic hydrophone matrix atop his brow whining shrilly: \"Slip displacement at the Philippine Sea and Pacific plate interface has abruptly surged by eight micrometers! Focal depth barely three kilometers; extreme dynamic transient loads are transmitting up through the obsidian temple plinth!\"\n\n\"Disaster! The alternating inertial torque on the balance has spiked!\"\n\nCheng-Hao's face blanched instantly. Without even pausing to wipe the cold sweat rolling down his forehead, the boy snapped his polarized strain-analysis goggles over his eyes!\n\nTwo hundred meters away atop that ancient temple, the colossal fifteen-meter brass four-pointed star escapement balance began pitching violently up and down under the vicious onslaught of seismic shear waves and abyssal benthic surges, tossed about by the multi-ton black basalt counterweights suspended at either end!\n\nThat eight-centimeter-diameter specialized Invar alloy (Fe-36%Ni) safety pin, which had barely been unloaded by differential micro-jacking moments earlier, was now being subjected to millions of Newton-meters of terrifying, alternating dynamic shear stress!\n\n\"Ting! Screeech-skrrrt————!!\"\n\nA gut-wrenching metal-tearing shriek penetrated through the twenty-centimeter-thick titanium alloy sphere of the submersible, ringing with horrifying clarity in everyone's ears!\n\nThrough Cheng-Hao's polarized strain goggles, across the surface of the silvery-white Invar pin that already bore a two-centimeter microscopic fatigue crack, the blinding purple isostress interference fringes stretched to their absolute physical limits. The jagged micro-crack propagated forward at terrifying, visible speed!\n\n\"Fracture mechanics critical stress intensity factor ($K_{Ic}$) has breached the ceiling!\" Yeh I-Chieh watched the materials toughness curve plummeting off a cliff on the holographic display, her voice shrill with dread: \"According to Griffith's energy criterion, under near-freezing brine and extreme triaxial hydrostatic stress of 1,100 atmospheres, the crack propagation velocity has broken the sound barrier!\"\n\n\"BANG————!!\"\n\nAccompanied by a deafening crack that sounded like a heavy anti-materiel rifle firing at point-blank range, that Invar safety pin—which had endured half a century of deep-sea torment—underwent catastrophic, instantaneous low-temperature brittle fracture under the final, savage shear surge!\n\nThe sheared half of the alloy cylinder blasted free with jagged metal burrs, tumbling end-over-end through the heavy hadal water before plunging into the soft siliceous ooze below!\n\n\"Yaaah!! The pin snapped!!\" Jiang-Jiang clutched his head and screamed.\n\nStripped of the locking restraint of the safety pin, the left arm of the colossal brass balance—carrying dozens of tons of monolithic basalt—began hurtling downward at an uncontrolled angular velocity of several meters per second under the compounding acceleration of gravity and seismic shock!\n\nDirectly beneath that plummeting balance arm lay the core beacon cartridge, half-inserted and not yet locked into the differential gear train!\n\nOnce those dozens of tons of stone counterweight slammed down, the core mechanical differential of the entire temple would be pulverized into metal dust, the Abyssal Chronometer Zero rendered permanent scrap, and the catastrophic tsunami destined to scour the Pacific basin in twelve hours would become completely irreversible!\n\n\"Only three seconds left!!\" Du Hai-Lan gritted her teeth, redlining her attitude thrusters to full forward throttle, attempting to ram the submersible's heavy bow crash bumper beneath the plunging arm to absorb the blow.\n\n\"Captain Du, do not ram it! The pressure hull cannot survive that kinetic impact!\"\n\nIn this razor-thin tenth of a second between life and death, an unprecedented spark of razor-sharp resolve and absolute calm ignited within Cheng-Hao's eyes.\n\nIn a flash, the boy snatched the antique brass pocket watch carved by his grandfather that hung perpetually against his chest, his fingertips flicking three hidden spring release detents around the rim of the caseback!\n\n\"Clack!\"\n\nThe heavy rear casing snapped open to the sides. Nestled inside was no ordinary balance wheel, but a brand-new, specialized metal cylinder cushioned in silicone dampers, radiating a deep, cold silver-gray sheen!\n\nLaser-etched along the cylindrical flank was a line of micrometer-precise engineering code:\n\n`INVAR-RE 36/12 - CRITICAL SHEAR OVERLOAD DETENT - 1974`\n\n\"That is... an Invar-Rhenium ultra-hard micro-differential safety pin!\" Yeh I-Chieh cried out, tears of sheer disbelief and awe springing to her eyes: \"Fifty years ago when grandfather engineered the beacon, he had already calculated that the original pin would suffer low-temperature hadal fatigue! Inside his pocket watch, he left behind this ultimate replacement component, micro-alloyed with aerospace-grade rare earth rhenium for whoever would follow in his footsteps!!\"\n\n\"Rhenium solid-solution strengthening multiplies this Invar alloy's cryogenic impact toughness by a full fourfold, with a yield strength of 1,400 MPa!\"\n\nCheng-Hao swiftly slotted the Invar-Rhenium pin into the pneumatic shock transmission chute, bellowing at the top of his lungs: \"Jiang-Jiang, switch the secondary manipulator to 'Active Compliance Impedance Control' mode! Pico, engage the micrometer torque compensation matrix!\"\n\n\"Understood! Active compliance engaged, contact force preset to fifty Newtons!\" Jiang-Jiang was drenched in sweat, his eyes bloodshot, every sinew in his body coiled like spring steel!\n\n\"Jiang-Jiang, do not try to catch the falling balance head-on!\" Cheng-Hao tracked the optical targeting reticle with surgical precision, barking commands at lightning speed: \"Use the progressive micro-differential guide spline along the outer arbor! Zero point three seconds before the basalt counterweight hits bottom, fire the Invar-Rhenium pin into auxiliary slot three from the flank! Let the pin's involute necking groove achieve dynamic detent and differential unloading in five milliseconds!!\"\n\nThis was a microscopic duel across thousandths of a second in the crushing abyss ten thousand meters down!\n\nUnder Jiang-Jiang's scalpel-like control, the sub's manipulator tore through the swirling mud at fifty centimeters per second, its precision gripper clamping the silver-gray Invar-Rhenium pin with unyielding grip!\n\nTen meters... five meters... one meter!!\n\nThe howling descent of the multi-ton balance arm, churning a maelstrom of displaced brine in its wake, was milliseconds away from a fatal impact against the obsidian pedestal!\n\n\"NOW!!\" Cheng-Hao roared!\n\nJiang-Jiang's wrist twitched with infinitesimal finesse inside the haptic glove; the hydraulic servo valve released a sharp burst of pneumatic pressure, and the Invar-Rhenium safety pin transformed into a silver thunderbolt, guided by active compliance straight into auxiliary bore three!\n\n\"CLANG————!! CLANG-WUUUUUM————!!\"\n\nA monumental, earth-shaking sonic resonance of clashing titans detonated at eleven thousand meters beneath the sea, reverberating through the entire expanse of Challenger Deep!\n\nThe instant the Invar-Rhenium pin slid home, the millions of Joules of kinetic momentum carried by the plummeting arm crashed squarely against the pin's shear plane!\n\nYet this time, the alloy cylinder did not yield! The microscopic lattice dislocation-pinning effect of the rare earth rhenium atoms flawlessly converted the catastrophic kinetic shock into elastic stress waves, dissipating the energy evenly along the Invar arbor!\n\n\"Differential splines fully engaged! The descent has been arrested dead in its tracks!!\"\n\nYeh I-Chieh stared at the telemetric readouts, screaming at the top of her lungs: \"Deflection angle locked at zero degrees, zero arcminutes, zero arcseconds! The entire kinetic shock of the temple has been completely swallowed by the Invar-Rhenium pin!\"\n\n\"Cartridge seated!\" Jiang-Jiang seized the momentum, slamming the primary manipulator forward!\n\n\"CLACK-CRUNCH————KLANG!!\"\n\nAccompanied by a solemn, thunderous roar of mechanical interlocking, the three micro-differential gears of the twenty-centimeter titanium-zirconium beacon cartridge achieved their first flawless complete circuit with the temple's counter-rotating wheel in an entire century!\n\nThe colossal four-pointed star balance atop the obsidian temple fell into absolute, majestic stillness. Two monolithic basalt counterweights hung rock-steady at either end of the horizon, and all twelve sundial tracks blazed with pure, incandescent golden radiance!\n\n\"We did it...\" Jiang-Jiang collapsed limp against his seat, chest heaving as rivers of sweat poured down his face. \"We... we actually did it...\"\n\nDu Hai-Lan let out a long, shuddering breath, slowly unclenching her white-knuckled grip on the helm. Looking toward Cheng-Hao, her eyes brimmed with profound awe and emotion: \"The final Invar alloy pin... your grandfather's fifty-year-old prophecy was fulfilled by your hands today.\"\n\nCheng-Hao gently closed the vacant shell of the antique brass pocket watch resting against his chest. Gazing out the thick viewport at the sacred beacon altar restored to absolute equilibrium at the bottom of the world, his chest heaved, hot tears shimmering at the corners of his eyes.\n\n\"Grandfather, did you see that?\" the boy whispered softly to himself.\n\nDeep within the arbor of the temple, the fully unlocked and synchronized core of the ultimate mechanical differential began ticking with a rhythmic, heartbeat-like cadence.\n\nThe trials of plunging into the ten-thousand-meter abyss were at an end; and in the very next instant, the dawn tsunami alert that would span the entire Pacific was about to detonate!",
          "stemKnowledge": [
            "斷裂力學臨界應力強度因子與格里菲斯準則（Linear Elastic Fracture Mechanics: KIc & Griffith Energy Balance）：材料內部微觀裂紋在交變動載荷下擴展，當應力強度因子 KI 超越材料斷裂韌性 KIc 時，釋放的彈性應變能大於生成新表面所需的表面能，裂紋將以超越聲速的極限速率發生失穩性瞬時脆性斷裂。",
            "因瓦合金反常熱膨脹與稀土錸固溶強化（Invar Anomaly & Rhenium Solid-Solution Strengthening）：36% 鎳鐵因瓦合金在居里點以下藉由自發磁致伸縮抵消晶格熱收縮，維持近乎零膨脹。但在 2°C 與 110 MPa 極限靜水壓下韌性易衰退；微合金化加入高熔點、高模量的稀土錸（Re）元素，透過強大的晶格位錯釘紮效應，將低溫抗衝擊韌性提升四倍，屈服強度突破 1,400 MPa。",
            "機械剪切安全銷之過載保護與漸進式微差速嚙合（Shear Pin Overload Protection & Differential Spline Detent）：安全銷是精密機構的機械保險絲，透過預設頸縮槽在過載時自犧牲斷裂以保護主軸；而漸進式微差速導向花鍵則能將瞬態動態衝擊平滑轉化為旋轉彈性能，實現毫秒級無損緩衝鎖定。",
            "深海機械臂主動順應阻抗控制（Active Compliance & Impedance Control in Submersibles）：在萬米深淵非定常微泥流與震動干擾下，傳統剛性位置控制易產生巨大接觸撞擊力。透過六維力矩感測器與阻抗控制算法，動態調整機械爪虛擬剛度與阻尼，使機械爪如肌肉般「遇力順應」，在微秒級精確補償裝配角偏差與碰撞衝擊。"
          ]
        },
        {
          "id": 17,
          "file": "ch17",
          "title": "第 17 章　橫跨太平洋的聲波警報",
          "enTitle": "Chapter 17 — The Acoustic Alert Across the Pacific",
          "titleEn": "Chapter 17 — The Acoustic Alert Across the Pacific",
          "shortTitle": "橫跨太平洋的聲波警報",
          "concept": "SOFAR 聲道折射聚焦、板塊應變微分受控洩壓與全洋極低頻聲波",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在萬米海溝深處，如何利用微分黏滯阻尼化解 M8.5+ 巨震的板塊剪應力？一千公尺處的 SOFAR 聲道如何利用斯涅爾折射定律，將 28 Hz 破曉鐘鳴全反射無損傳遞一萬公里橫跨整座太平洋？",
          "summary": "卡盤完全鎖定後，深海終極破曉信標全面甦醒。面對即將引發滅頂海嘯的最後板塊剪切應力，誠浩啟動神廟基岩兩側六對巨型液壓阻尼活塞與三重微差速卸荷閥，以每秒五微米極限步進將靜摩擦轉化為受控滑動摩擦，釋放 94% 彈性應變能，成功馴服巨震！隨後，誠浩推下全洋極低頻廣播矩陣，青銅雙曲面共振腔激發 28 Hz 極低頻聲學脈衝，藉由一千米處的 SOFAR 聲道全反射波導無損疾馳上萬公里，向關島、日本、夏威夷等全太平洋地震監測網絡同步發送最高優先級破曉預警代碼，宣告深淵守護重歸定錨！",
          "summaryEn": "With the cartridge fully seated, the Abyssal Dawn Beacon awakes in its entirety. Confronting the final catastrophic tectonic shear stress, Cheng-Hao activates six pairs of hydraulic damping pistons and triple micro-differential relief valves, stepping forward at five micrometers per second to convert static friction into smooth sliding friction, dissipating 94% of fault elastic strain energy and taming the megathrust earthquake! Next, Cheng-Hao engages the omni-ocean extremely low-frequency acoustic broadcast array; the bronze hyperboloid resonator unleashes a 28 Hz acoustic pulse into the SOFAR channel at 1,000 meters depth, hurtling over 10,000 kilometers via internal acoustic waveguiding to synchronize tsunami warning networks across Guam, Japan, Hawaii, and the entire Pacific Rim with the triumphant Dawn Alert!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十七章：橫跨太平洋的聲波警報\n\n一萬零九百二十八公尺的挑戰者深淵底土，時間彷彿在這一瞬間被某種無形的萬鈞重力生生定格。\n\n伴隨著那枚特製「因瓦-錸超硬合金微差速安全銷」在千分之一秒內的極限彈性吸能，橫跨十五公尺的巨型黃銅四芒星擒縱天平，終於如同跨越了半個世紀的時空之門，穩如磐石地懸停在絕對水平的零度基準線上。\n\n「咔嗒……鐺————！！」\n\n神殿核心深處，二十公分鈦鋯合金終極卡盤的三重微差速齒輪，與底部的自轉逆輪完成了最後一微米的精密咬合。\n\n下一秒，整座沉寂在萬米深海死寂中達半個世紀之久的黑曜石神廟，驟然自地脈深處甦醒過來！\n\n神廟頂部那一圈由數千枚微型青銅斜齒組成的龐大環形輪系，開始在重力差速配重與地熱溫差膨脹活塞的雙重驅動下，自發運轉起來。\n\n「呼————喀啦、喀啦、喀啦……」\n\n那是一陣沉穩、渾厚、極具韻律感的機械鐘鳴，每一次齒輪的咬合與釋放，都伴隨著神廟外壁十二道純金日晷導軌爆發出的澄澈金光。\n\n「核心差速器自檢完成！」\n\n葉旖緁緊盯著全息主控台上奔流不息的數據矩陣，少女的睫毛上掛著淚珠，但聲音中卻滿是掩飾不住的激動與狂喜：「信標卡盤內部的三十六組微偏振角位移傳感器全部聯通！與七千兩百米處的『深海零號鐘台』達成跨深度長基線聲學同步！」\n\n「距離大地震引發毀滅性海嘯的臨界崩扣點……還剩下最後二十分鐘！」杜海嵐緊緊盯著倒數計時器，手指因為過度用力而在操縱台上留下一圈汗漬，「誠浩，地脈深處那股累積了半個世紀的恐怖剪切應力，到底要怎麼釋放？！」\n\n「看信標神殿的基岩兩側！」\n\n誠浩迅速調出海底地質應力干涉熱成像圖，指著神廟正下方那座深入地殼數公里處的龐大地脈阻尼系統：「爺爺五十年前設計的深海信標，從來都不是要用蠻力去硬抗板塊運動，而是要利用『受控微分黏滯釋放（Controlled Differential Viscous Dissipation）』！」\n\n眾人透過變焦光學舷窗望去，只見在神廟兩側的黑曜石基岩深處，六對巨大的特種高壓鎢鈦合金液壓阻尼活塞正在緩緩外推，深深錨定在海溝兩側的玄武岩構造斷裂帶中。\n\n「大家看，菲律賓海板塊正以每年數公分的速度向海溝深處俯衝，被卡在最後十微米的鎖定斷面上，一旦突發性彈性回跳（Elastic Rebound），就會在零點一秒內釋放相當於數百顆原子彈的恐怖能量，撕裂海水引發上百公尺高的滔天海嘯！」誠浩神情肅穆，眼中閃爍著深邃的智慧光芒。\n\n「但是現在，終極卡盤已經啟動了神廟核心的三重微差速卸荷閥！」誠浩接著指向旋轉的天平中心，「這套差速器會以每秒五微米的極限微分步進，將板塊交界面上死死鎖定的靜摩擦阻力，主動轉化為受控的滑動摩擦！」\n\n「轟隆隆隆隆……嗡————」\n\n伴隨著一陣沉悶而溫和的地底低鳴，原本緊繃至極限的海底斷層，在六對巨型液壓阻尼活塞的精密微調下，開始發生了極其緩慢而平穩的微米級滑移！\n\n地殼深處原本足以引發芮氏規模 8.5 級毀滅性巨震的狂暴剪應力，在差速器齒輪與重水阻尼的層層消耗下，被完美化解為一波波無害的微弱地熱釋放！\n\n「斷層彈性應變能量釋放率達到百分之九十四！」葉旖緁激動地大喊，「板塊交界面的破壞性崩扣危機被徹底化解！菲律賓海板塊與太平洋板塊重新回到了最平穩的蠕滑狀態！」\n\n「太棒了！！大地震被馴服了！！」將江興奮得一躍而起，在重力減輕的深潛球艙內差點撞到頂板。\n\n「但是我們的任務還有一半！」誠浩猛然指向神廟正中央最高處那座直徑達五公尺的青銅雙曲面共振腔，「板塊雖然被平穩卸荷，但剛才斷層滑移產生的長週期水體微湧，依然會在大洋表面形成傳播速度高達每小時七百公里的深海長波！」\n\n「如果沿岸各國的防震減災網絡沒有提前收到精確的波長與振幅數據，各港口依然會面臨嚴重的防波堤溢流險情！」杜海嵐瞬間領會了誠浩的意思，「我們必須向全太平洋發布破曉海嘯預警代碼！」\n\n「這正是爺爺留給整個世界的終極遺產！」\n\n誠浩深吸了一口氣，伸手在副控台上推下了一道帶有雙重自鎖保險的赤金色扳手！\n\n「深海終極破曉信標……全洋極低頻聲學廣播矩陣，全功率啟動！！」\n\n「嗡——————轟——————！！」\n\n剎那間，黑曜石神殿頂部的青銅雙曲面共振腔內部，由信標卡盤釋放的強大機械動能，在萬米深海一千一百個大氣壓的超高密重水中，猛然激發出一圈肉眼可見的水下高能衝擊波！\n\n那一聲鐘鳴並不刺耳，反而深沉、雄渾、穿透力無窮，宛如宇宙創生之初的洪荒巨鐘，在整座馬里亞納海溝的萬米絕壁間激盪起壯闊無比的深海迴響！\n\n「聲學頻移鍵控（FSK）編碼載入完畢！」\n\n葉旖緁飛速敲擊鍵盤，將神廟實測的板塊蠕滑微位移、斷層應力釋放曲線與海嘯長波參數，轉化為一串串精密的二進制聲納脈衝代碼：「發射頻率鎖定在二十八赫茲（28 Hz）極低頻！聲源級（Source Level）高達兩百二十五分貝！」\n\n「在常規水體中，高頻聲波傳播幾公里就會被海水黏滯性徹底吸收衰減，」杜海嵐看著全息屏幕上那道如金色巨龍般沿著海溝扶搖直上的聲波波前，眼中流露出航海世家的自豪與神往，「但二十八赫茲的極低頻聲波，波長高達五十四公尺，在冰冷的海水中衰減係數每公里不到零點零零一分貝！」\n\n「更神奇的是前方一千公尺水深處的『SOFAR 聲道（Sound Fixing and Ranging Channel）』！」誠浩接過話頭，目光灼灼地望向聲納傳播剖面圖。\n\n「在水深八百至一千二百公尺的深海層，上層海水的溫度驟降導致聲速下降，而下層海水的高壓又促使聲速重新上升，兩者交界處形成了一個全球性天然的『最低聲速軸』！」\n\n「根據斯涅爾折射定律（Snell's Law），所有向上或向下偏離該軸線的聲波，都會被上下兩側較高的聲速層不斷折射彎曲回來，被死死鎖定在這個厚達數百公尺的水平通道內，進行無邊界能量擴散的『全反射波導傳輸』！」\n\n只見全息屏幕上，那道來自萬米海溝底部的二十八赫茲破曉鐘鳴，穿透了沉重冰冷的海溝水層，在抵達一千公尺深度時，精準無誤地被吸入了寬廣的 SOFAR 聲道之中！\n\n聲波在聲道內部如同一支筆直的金色光箭，以每秒一千四百八十公尺的速度，開始沿著地球的弧度向四面八方瘋狂馳騁！\n\n一千公里……兩千公里……五千公里……一萬公里！！\n\n這道融合了爺爺心血、少年智慧與萬米極限科學的低頻聲波代碼，跨越了整座浩瀚無垠的太平洋！\n\n關島阿普拉港美國國家海洋局深海監測站的水下水聽器陣列首先亮起了耀眼的綠燈！\n\n緊接著，日本本州島外海的 DONET 海底地震海嘯觀測網、夏威夷太平洋海嘯預警中心（PTWC）、智利瓦爾帕萊索海嘯監測浮標陣列、台灣中央氣象署東部深海海底電纜觀測系統……\n\n全太平洋沿岸數千座頂尖海洋研究機構與地震預警台站的深海警報主控台，在同一個微秒內，整齊劃一地爆發出響亮而清澈的滴答鐘鳴！\n\n全息屏幕上，一條來自地球最深處、跨越了半個世紀的最高優先級水下廣播代碼赫然浮現：\n\n`[DAWN BEACON CALIBRATED - CHALLENGER DEEP 10928M - PACIFIC TSUNAMI THREAT NEUTRALIZED - THE ABYSSAL WATCH IS SECURE]`\n\n「深淵信標完成校準！太平洋海嘯威脅化解！萬米深淵守護定錨！」\n\n「天哪……」關島基地的老科學家們望著屏幕上完美吻合的莫爾斯齒輪信號，淚水模糊了雙眼，「是深藍專案……杜振遠教授和老杜船長留下的承諾……後繼者們真的做到了！」\n\n深海一萬零九百二十八公尺，「鸚鵡螺-IV 號」耐壓球艙內。\n\n耳機裡傳來了太平洋各地監測站相繼確認代碼反饋的微弱音頻，整座球艙內瞬間爆發出震耳欲聾的歡呼與擁抱！\n\n將江抱著皮可又叫又跳，葉旖緁摘下眼鏡擦拭著淚水，杜海嵐笑著用力揉了揉誠浩的頭髮。\n\n誠浩回過頭，望著舷窗外那座在二十八赫茲低頻共振中通體綻放著威嚴金光的深淵神殿。\n\n那座巍峨的天平依然在萬米深淵中緩緩呼吸，守護著這顆蔚藍星球的每一次心跳。\n\n破曉的警報已經傳遍整座大洋，而引領少年們回家的第一縷晨曦，已在萬米之上的海平面悄然破曉！",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 17: The Acoustic Alert Across the Pacific\n\nAcross the bottom sediment of Challenger Deep at 10,928 meters, time itself seemed frozen in this split second under an invisible, crushing gravitational weight.\n\nAccompanied by that custom Invar-Rhenium ultra-hard micro-differential safety pin's extreme elastic energy absorption in a thousandth of a second, the colossal fifteen-meter brass four-pointed star escapement balance finally hung rock-steady across the absolute horizontal zero-degree reference datum, like an ancient gateway spanning half a century.\n\n\"Clack... CLANG————!!\"\n\nDeep within the temple's core, the triple micro-differential gears of the twenty-centimeter titanium-zirconium ultimate cartridge executed their final micrometer of precision engagement with the counter-rotating wheel below.\n\nThe very next instant, that obsidian temple—slumbering in the dead silence of the ten-thousand-meter deep for fifty long years—abruptly awoke from the depths of the Earth's mantle!\n\nCrowned atop the temple, a massive circular wheel train comprised of thousands of miniature bronze helical teeth began revolving autonomously under the dual impetus of gravity differential counterweights and geothermal thermal-expansion pistons.\n\n\"WHIRRR——Clack, clack, clack...\"\n\nIt was a deep, resonant, hypnotic cadence of mechanical chimes, every engagement and release of the gear teeth accompanied by pure golden beams flaring from the twelve gold sundial tracks etched into the temple's exterior.\n\n\"Core differential self-diagnostic complete!\"\n\nYeh I-Chieh gazed unblinkingly at the data cascade streaming across the holographic console. Tears clung to the girl's eyelashes, yet her voice rang with irrepressible awe and exhilaration: \"All thirty-six sets of micro-polarized angular displacement sensors inside the beacon cartridge are linked! Long-baseline acoustic synchronization with the Abyssal Chronometer Zero at 7,200 meters is fully established!\"\n\n\"Only twenty minutes remain before the critical megathrust failure that would unleash a catastrophic tsunami!\" Du Hai-Lan watched the countdown timer, her white-knuckled fingers leaving circles of sweat on the console. \"Cheng-Hao, how do we bleed off that monstrous shear stress accumulated within the oceanic crust over half a century?!\"\n\n\"Look at both flanks of the beacon temple's bedrock!\"\n\nCheng-Hao swiftly summoned the seafloor geological stress interference thermal map, pointing directly beneath the temple at a massive tectonic damping network anchored kilometers deep into the oceanic crust: \"Fifty years ago, grandfather never designed this deep-sea beacon to fight tectonic forces with brute rigidity; he built it to harness 'Controlled Differential Viscous Dissipation'!\"\n\nPeering through the optical zoom viewport, everyone watched six colossal pairs of specialized high-pressure tungsten-titanium hydraulic damping pistons slowly extending outward from the deep obsidian bedrock on either flank of the temple, anchoring firmly into the basalt structural fault zones on either side of the trench.\n\n\"Look—the Philippine Sea Plate is subducting into the trench at several centimeters a year, locked tight across the final ten micrometers of its fault interface. An abrupt elastic rebound would release energy equivalent to hundreds of atomic bombs in less than a tenth of a second, sundering the ocean column and launching tsunamis over a hundred meters high!\" Cheng-Hao spoke with solemn gravity, his eyes burning with deep intellect.\n\n\"Yet right now, the ultimate cartridge has engaged the triple micro-differential relief valves at the temple's core!\" Cheng-Hao pointed toward the rotating balance center. \"This differential gear train will step forward at an extreme differential rate of five micrometers per second, actively transforming the static friction locking the plate interface into controlled, smooth sliding friction!\"\n\n\"BOOOOOOM-RUMBLE-RUMBLE... WUUUM————\"\n\nAccompanied by a deep, gentle subterranean rumble, the seafloor fault—previously stretched to its catastrophic snapping point—began executing an extraordinarily slow, steady, micrometer-level slip under the precision regulation of the six pairs of hydraulic damping pistons!\n\nThe monstrous tectonic shear stress within the crust, originally potent enough to trigger an M8.5+ cataclysmic earthquake, was harmlessly dissipated into faint waves of geothermal energy through the progressive mastication of the differential gears and heavy brine dampers!\n\n\"Fault elastic strain energy release rate has reached ninety-four percent!\" Yeh I-Chieh screamed exhilarated. \"The destructive stick-slip rupture crisis at the plate interface has been completely neutralized! The Philippine Sea Plate and Pacific Plate have returned to a tranquil, steady creep state!\"\n\n\"AMAZING!! The megathrust earthquake has been tamed!!\" Jiang-Jiang bounded out of his seat in pure euphoria, nearly banging his helmet against the low-gravity sphere ceiling.\n\n\"Yet half of our mission still remains!\" Cheng-Hao pointed decisively toward the colossal five-meter-wide bronze hyperboloid acoustic resonator crowning the temple's peak. \"Though the fault has been safely decompressed, the long-period hydrodynamic swell born of that fault slip will still form open-ocean long waves hurtling across the surface at seven hundred kilometers per hour!\"\n\n\"If coastal tsunami mitigation networks across the Pacific don't receive precise wavelength and amplitude telemetry in advance, harbors and seawalls will still suffer catastrophic overtopping!\" Du Hai-Lan instantly caught Cheng-Hao's intent. \"We must transmit the Dawn Tsunami Alert telemetry codes to the entire Pacific basin!\"\n\n\"And that is grandfather's ultimate legacy to the whole world!\"\n\nInhaling deeply, Cheng-Hao reached toward the secondary console and shoved forward a radiant gold lever fitted with dual safety interlocks!\n\n\"Abyssal Dawn Beacon... omni-ocean extremely low-frequency acoustic broadcast array, full power engage!!\"\n\n\"WUUUUUM————BOOOOOOM————!!\"\n\nInstantly, within the bronze hyperboloid acoustic resonator atop the obsidian temple, the immense mechanical kinetic energy unleashed by the beacon cartridge slammed against the ultra-dense brine under 1,100 atmospheres, erupting into a visible underwater shockwave!\n\nThat chime was not shrill; rather, it was deep, majestic, and boundless in penetrative power—like a primordial titan's bell forged at the dawn of the cosmos, stirring a breathtaking acoustic echo between the ten-thousand-meter basalt cliffs of the Mariana Trench!\n\n\"Frequency Shift Keying (FSK) telemetry encoding loaded!\"\n\nYeh I-Chieh's fingers danced across the keyboard, translating the temple's empirical measurements of plate creep displacement, fault stress dissipation curves, and tsunami wave propagation parameters into binary sonar telemetry pulses: \"Transmission frequency locked at twenty-eight hertz (28 Hz) extremely low frequency! Source Level reaches a staggering 225 dB re 1 µPa!\"\n\n\"In ordinary seawater, high-frequency acoustic waves attenuate completely within kilometers due to viscous absorption,\" Du Hai-Lan watched the golden acoustic wavefront soaring up the trench walls on the holographic screen, filled with the pride of a generational ocean navigator. \"Yet at an extremely low frequency of twenty-eight hertz, with a wavelength of fifty-four meters, attenuation in cold seawater is under 0.001 dB per kilometer!\"\n\n\"Even more miraculous is the 'SOFAR Channel (Sound Fixing and Ranging Channel)' waiting at a depth of one thousand meters!\" Cheng-Hao chimed in, eyes fixed on the acoustic propagation ray-tracing model.\n\n\"Between eight hundred and twelve hundred meters, the sharp temperature drop in the upper layers slows down acoustic velocity, while the mounting hydrostatic pressure in deeper layers forces it back up. Their junction creates a global, natural 'Sound Axis of Minimum Velocity'!\"\n\n\"According to Snell's Law, all acoustic rays angling upward or downward away from this axis are continuously refracted back toward the minimum velocity layer by the faster layers above and below, trapped inside a horizontal waveguide hundreds of meters thick for total internal reflection with near-zero boundary leakage!\"\n\nOn the holographic display, that 28 Hz dawn chime ascending from the bottom of the ten-thousand-meter trench breached the heavy, frigid water columns, being sucked unerringly into the expansive SOFAR channel at a depth of one thousand meters!\n\nInside the acoustic duct, the sound wave transformed into a golden dart of pure energy, hurtling along the curve of the Earth at 1,480 meters per second in all directions!\n\nOne thousand kilometers... two thousand kilometers... five thousand kilometers... ten thousand kilometers!!\n\nBlending grandfather's devotion, youthful genius, and the pinnacle of hadal marine physics, this low-frequency acoustic transmission traversed the entire breadth of the Pacific Ocean!\n\nThe underwater hydrophone arrays at NOAA's deep-sea monitoring station in Apra Harbor, Guam were the first to flash bright green!\n\nImmediately following, the DONET cabled seafloor observatory off Honshu, Japan, the Pacific Tsunami Warning Center (PTWC) in Hawaii, the Valparaíso tsunami buoy array in Chile, the Central Weather Administration's East Coast submarine cable observatory in Taiwan...\n\nAcross thousands of premier oceanographic institutions and earthquake early-warning centers spanning the Pacific Rim, deep-sea alert consoles synchronized in the same microsecond, erupting into a clean, resonant, rhythmic ticking cadence!\n\nAcross holographic monitors worldwide, a highest-priority underwater transmission originating from the deepest floor of planet Earth, spanning half a century of silence, flashed brightly:\n\n`[DAWN BEACON CALIBRATED - CHALLENGER DEEP 10928M - PACIFIC TSUNAMI THREAT NEUTRALIZED - THE ABYSSAL WATCH IS SECURE]`\n\n\"The Abyssal Beacon is calibrated! Pacific tsunami threat neutralized! The hadal watch is secured!\"\n\n\"Heavens above...\" At the Guam station, senior oceanographers stared at the unmistakable Morse clockwork signature, tears blurring their eyes. \"It's the Deep Blue Project... the promise made fifty years ago by Professor Du Zhen-Yuan and Captain Old Du... the next generation actually pulled it off!\"\n\nTen thousand nine hundred and twenty-eight meters beneath the waves, inside the titanium pressure sphere of *Nautilus-IV*.\n\nAs faint acoustic acknowledgments from monitoring stations across the Pacific echoed through their headsets, the cabin erupted into deafening cheers and tearful embraces!\n\nJiang-Jiang hopped and shouted while hugging Pico, Yeh I-Chieh removed her glasses to wipe her joyful tears, and Du Hai-Lan ruffled Cheng-Hao's hair with an exuberant grin.\n\nCheng-Hao turned around, gazing out the thick observation viewport at the sacred abyssal temple glowing with majestic golden radiance in the 28 Hz low-frequency resonance.\n\nThat towering balance continued to breathe gently in the ten-thousand-meter deep, keeping vigil over every single heartbeat of this blue planet.\n\nThe dawn alert had reverberated across the great ocean; and the first rays of morning light guiding the young adventurers home were already dawning ten thousand meters above the sea!",
          "stemKnowledge": [
            "大洋深海聲道聚焦與斯涅爾全反射波導（SOFAR Channel Acoustic Ducting & Snell's Law）：水深 800~1,200 公尺處因上層水溫下降與下層靜水壓增加，形成天然的「全球最低聲速軸（SOFAR Axis）」。向上或向下偏離該軸的聲線依斯涅爾定律被兩側高聲速水層持續彎曲折射回中心軸，形成圓柱擴散的無耗散水下波導，低頻聲波可無損傳播上萬公里。",
            "極低頻相干水下聲學與青銅雙曲面共振腔（ELF Acoustic Telemetry & Hyperbolic Resonators）：28 Hz 極低頻聲波在海水中的吸收衰減係數低於 0.001 dB/km，波長達 54 公尺。透過萬米神殿頂部的青銅雙曲面共振腔，將機械動能高效率耦合至 1,100 個大氣壓的超高密重水中，激發高達 225 dB 聲源級的穿透性全洋聲學脈衝。",
            "板塊累積彈性應變能之微分黏滯受控洩壓（Controlled Tectonic Strain Release & Viscous Dissipation）：利用特種鎢鈦合金液壓阻尼與微分差速卸荷閥，以每秒 5 微米的極限微分行程將板塊交界面的突發彈性回跳（Elastic Rebound）轉化為平緩蠕滑，化解足以引發 M8.5+ 巨震的瞬態剪應力峰值，將破壞性海嘯消除於萌芽。",
            "深海聲學頻移鍵控（FSK）與全洋地震海嘯監測網絡對接（FSK Sonar Protocols & Circum-Pacific Early Warning）：利用高精度機械日晷調諧共振腔頻率，透過聲學頻移鍵控（FSK）將斷層滑移微米數據編碼為莫爾斯數字信標，無縫對接關島、日本 DONET、夏威夷 PTWC 等全太平洋海嘯預警中樞。"
          ]
        },
        {
          "id": 18,
          "file": "ch18",
          "title": "第 18 章　破曉海平面的萬丈金光",
          "enTitle": "Chapter 18 — The Ten Thousand Rays of Dawn upon the Sea",
          "titleEn": "Chapter 18 — The Ten Thousand Rays of Dawn upon the Sea",
          "shortTitle": "破曉海平面的萬丈金光",
          "concept": "固體浮力材料垂直高速上浮、常壓潛水防護與大洋溫躍層密躍",
          "wordCount": "6,000 字",
          "readTimeMin": 15,
          "puzzle": "在萬米深潛完成後，深潛艇如何透過拋棄三噸重力壓載與固體浮力材料實現 2.5 m/s 高速上浮？常壓潛水系統為何能免除減壓病？穿越大洋溫躍層密度突變時如何補償阿基米德浮力損失？",
          "summary": "萬米任務圓滿達成，面對即將耗盡的電力與氧氣，探險隊拋下 1.5 噸電磁鑄鐵砂與 1.5 噸龍骨壓載鉛塊，釋放強大正浮力，化為一顆金色氣泡以每秒逾兩公尺的極速向海面垂直飆射！一萬一千公尺的上升歷程中，深潛艇依次穿越超深淵帶、深淵帶與中層帶，與深海獅子魚、巨烏賊再次重逢；常壓潛水系統免除了減壓病風險，導流翼精確克服溫躍層密度突變造成的 500 公斤浮力縮減。清晨七點整，「鸚鵡螺-IV 號」在西太平洋碧藍海面上破浪而出，沐浴在燦爛溫暖的金色晨曦之中！母船開拓者號拉響汽笛噴灑雙道彩虹致敬，齒輪少年的深海冒險迎來全三卷 18 章 10.8 萬字恢弘大完結！",
          "summaryEn": "With the mission completed, the team confronts dwindling battery and oxygen reserves. Jettisoning 1.5 tons of electromagnetic cast-iron ballast and 1.5 tons of lead keel slabs, the immense net positive buoyancy of the syntactic foam rockets the Nautilus-IV toward the surface at over two meters per second! Ascending 11,000 meters, the vessel traverses hadal, abyssal, and bathypelagic realms, greeted once more by hadal snailfish and giant squid. The atmospheric diving system eliminates decompression sickness risks, while dynamic trim hydrofoils compensate for the 500-kg buoyant loss across the pycnocline. At seven o'clock in the morning sharp, Nautilus-IV breaches the western Pacific into radiant golden dawn! The RV Explorer salutes with horns and double rainbow water cannons, bringing Series 11 to an epic, glorious 18-chapter, 108,000-word Grand Finale!",
          "content": "# 《冒險齒輪：馬里亞納的深淵信標》\n\n## 第十八章：破曉海平面的萬丈金光\n\n一萬零九百二十八公尺的挑戰者深淵底土，巍峨的黑曜石神殿在二十八赫茲的低頻共振中通體綻放著神聖的青金微光。\n\n橫跨十五公尺的黃銅四芒星擒縱天平在因瓦錸合金安全銷的穩固鎖定下，維持著絕對完美的零度平衡。深海零號鐘台與終極信標之間的長基線聲學鏈路如同一根隱形的定海神針，將整座西太平洋板塊深處累積了半個世紀的狂暴地脈剪應力，悄然化解於無形。\n\n「太平洋所有海嘯預警中樞確認收到回執！」\n\n葉旖緁摘下戴了整整三十六個小時的抗藍光眼鏡，揉了揉泛紅的眼眶，少女精緻的面龐上綻放出如釋重負的明媚笑容：「關島阿普拉港的防波堤水警已經解除，夏威夷與日本沿岸的海嘯預警級別全部降為無害的長週期天文潮汐微湧！」\n\n「我們……我們真的挽救了整個太平洋！」\n\n將江整個人癱軟在座椅上，長長地舒了一口氣，隨即肚子發出了一陣驚天動地的「咕嚕」抗議聲，惹得球艙內的眾人忍不住相視失笑。\n\n「但是夥伴們，我們的深海探險還剩下最後一道考驗——」\n\n遠洋舵手杜海嵐推了推防風護目鏡，目光掃過主控台上閃爍的能源與生命維持系統讀數，神情重新變得乾脆而幹練：「深潛艇的主動力鋰硫電池電量僅剩百分之六點八，備用化學氧氣燭只夠維持最後兩小時。在徹底失去主動力之前，我們必須在九十分鐘內，完成整整一萬一千公尺的垂直上浮！」\n\n「一萬一千公尺……垂直上浮九十分鐘？！」將江倒吸了一口涼氣，「這相當於坐著一台火箭從地心向太空衝刺啊！我們會不會像潛水員一樣得減壓病啊？！」\n\n「傻瓜，當然不會！」\n\n葉旖緁笑著輕輕敲了一下將江的安全頭盔：「『鸚鵡螺-IV 號』是全密閉的『常壓潛水系統（Atmospheric Diving System, ADS）』！球艙內部的氣壓自始至終被特種鈦合金外殼嚴格維持在一個標準大氣壓（1 atm）。我們體內的血液根本沒有溶解高壓惰性氣體，所以完全不需要像常規潛水那樣進行階梯式減壓停留，我們可以以極限速度直接衝出水面！」\n\n「沒錯，現在我們要做的，就是讓這艘二十噸重的深海巨獸，變成一顆輕盈的黃銅氣泡！」\n\n誠浩走到副駕駛位前，雙手握住了主儀表板下方那柄醒目的紅黑條紋雙聯機械拋載手柄。\n\n「第一步，切斷底層特種電磁吸附鐵砂線圈電源，釋放一點五噸輔助配重！」誠浩沉穩指令。\n\n「啪嗒！」\n\n杜海嵐推下電源斷路開關，潛艇腹部兩座密封料斗底門驟然敞開，重達一千五百公斤的極細高密度鑄鐵砂如同一道黑色的瀑布，無聲無息地墜入下方的矽質軟泥中。\n\n「第二步，手動解鎖鈦合金主龍骨壓載鉛塊！」誠浩雙手用力將拋載手柄向下拉動至最大行程！\n\n「喀啦——轟！」\n\n伴隨著一聲清脆的機械自鎖脫扣聲，固定在深潛艇最底部的三塊厚達數十公分的重型拋載鉛塊徹底與艇身分離，脫離架墜入深淵，濺起一片淡淡的白色沉積泥浪。\n\n在整整三噸重力壓載被完全拋棄的剎那，物理學定律展現出了無與倫比的壯麗力量！\n\n潛艇外殼包裹的厚達數十公分「高強度空心玻璃微珠環氧樹脂（Syntactic Foam）」固體浮力材料，釋放出了近乎恐怖的極限正浮力（$\\Delta F = F_{\\text{buoyancy}} - G > 0$）！\n\n「呼————哧————！！」\n\n整艘「鸚鵡螺-IV 號」以一種令人驚心動魄的姿態猛然昂起艦首，在萬米深海的冰冷重水中，宛如一柄金色的利劍，以每秒超過兩公尺的驚人垂直速度，向著遙不可及的海平面轟然飆射而起！\n\n舷窗外，那座巍峨的黑曜石破曉神廟在探照燈的光柱中迅速縮小，最終化為一簇沉靜而永恆的金光，永遠留在了地球最深邃的心臟地帶。\n\n「告別了，馬里亞納海溝……」誠浩輕聲說道，目光中充滿了對深淵的敬畏。\n\n深度計上的紅色數字開始以眼花繚亂的速度瘋狂遞減：\n\n一萬公尺……九千公尺……八千公尺！\n\n當深潛艇衝出八千公尺、告別漆黑死寂的超深淵帶時，舷窗外的海水中開始出現了星星點點的夢幻微光。\n\n幾條通體半透明、宛如絲綢織成的馬里亞納深海獅子魚，輕盈地在潛艇舷窗外游弋而過，牠們身上的側線器官感應著潛艇上浮激起的微波，彷彿在為這群勇敢的人類少年護航送行。\n\n六千公尺……五千公尺……三千公尺！\n\n在三千公尺的深淵帶，探照燈照亮了一隻體長逾十公尺的巨烏賊，那雙如同車輪般巨大的冰藍色眼眸，在深海中凝視著疾馳而過的黃銅潛艇，隨即擺動著寬大的肉鰭，優雅地隱入黑暗。\n\n一千公尺！深潛艇正式穿透了著名的「SOFAR 聲道軸」！\n\n就在這一瞬間，整艘潛艇突然微微一震，上浮速度從每秒 2.5 公尺微幅放緩到了每秒 2.1 公尺。\n\n「注意！我們正在穿越大洋溫躍層（Pycnocline）！」\n\n葉旖緁指著海水溫度與密度傳感器，飛快解釋道：「水深從一千公尺上升到兩百公尺，海水溫度從冰冷的攝氏二度急劇攀升到了二十六度！溫度的升高導致海水熱膨脹，海水密度從 1.028 克每立方公分驟降到了 1.023 克每立方公分！」\n\n「海水密度降低，潛艇所受的阿基米德浮力相應減少了近五百公斤！」誠浩心領神會，立刻操控姿態微調翼板，「啟動頂部流線型導流翼，利用水動力衝角維持上浮升力！」\n\n在誠浩精密的水動力操控下，深潛艇如同一隻矯健的座頭鯨，順暢地切開了溫躍層的密度突變界面，筆直衝向陽光能夠抵達的透光層！\n\n五百公尺……兩百公尺……一百公尺！！\n\n黑暗退散了。\n\n冰冷刺骨的永夜被一抹抹深邃的靛藍、蔚藍、碧藍所取代！\n\n無數浮游生物在晨光初透的海水中閃爍著寶石般的光芒，一群金槍魚銀白色的腹部在陽光下反射出炫目的金光！\n\n「陽光！那是真正的陽光啊！！」將江貼在舷窗上，激動得眼淚鼻涕一起湧了出來。\n\n深度十公尺……五公尺……零！！\n\n清晨七點整。\n\n西太平洋浩瀚無垠、平靜如鏡的碧藍海面上，平靜的波紋突然劇烈隆起！\n\n「嘩啦啦啦————轟————！！」\n\n一道高達十公尺的壯麗白色浪花巨湧沖天而起，「鸚鵡螺-IV 號」那泛著金色陽光與水滴的重型鈦合金雙球殼深潛艇，宛如一艘破海而出的神話巨艦，霸氣無比地衝破了海平面！\n\n浪花飛濺在晶瑩的穹頂舷窗上，折射出滿天絢麗耀眼的彩虹！\n\n「嗶嗶嗶！衛星緊急定位標（EPIRB）已自動彈射展開！」\n\n機械柴犬皮可興奮地搖晃著合金尾巴：「多普勒搜救衛星信號已鎖定！我們回到海面上了，汪汪！」\n\n「嗤——嘶嘶嘶————」\n\n伴隨著主密封高壓氣閥的洩壓聲，杜海嵐用力轉動頂部艙蓋的六角形轉輪，將沉重的鈦合金艙蓋向上用力推開！\n\n「呼————！！」\n\n一股久違的、夾帶著微鹹海水氣息與溫暖微風的新鮮空氣，伴隨著萬丈燦爛溫暖的金色晨曦，鋪天蓋地地湧入了球艙！\n\n五人依次順著爬梯登上潛艇頂部的觀禮甲板。\n\n此時的西太平洋，朝陽正從遙遠的海平線上一躍而起，將漫無邊際的大洋染成了一片波光粼粼的金色海洋。溫暖的陽光曬在少年們蒼白的臉龐上，驅散了積攢在骨髓裡的所有深海嚴寒。\n\n「嗚——————！！嗚——————！！」\n\n遠處的海平線上，科考母船「開拓者號」響起了長長的三聲致敬汽笛！\n\n母船兩側的兩具大功率水炮全力噴射，一道橫跨海面的巨大雙道彩虹在朝陽下熠熠生輝。甲板上，數十名科考隊員與水手們揮舞著帽子與彩旗，歡呼聲甚至蓋過了海浪的轟鳴！\n\n誠浩站在潛艇頂部，晨風吹拂著少年的黑色短髮。\n\n他從胸前緩緩取出那枚伴隨他走過千山萬水、走過七千米海脊、直墜一萬零九百米挑戰者深淵的古董黃銅懷錶。\n\n在清晨萬丈金光的照耀下，懷錶表面那枚精緻的齒輪徽記璀璨奪目。而在表蓋內側，那行微縮刻字依然清晰如初：\n\n「給誠浩：世間萬物皆如齒輪，唯有探索者的勇氣，是永恆的發條。」\n\n「爺爺，我們做到了。」誠浩輕輕撫摸著懷錶，眼角閃爍著晶瑩的淚光，嘴角卻洋溢著無比燦爛的笑意。\n\n身旁，葉旖緁推了推眼鏡，望著朝陽下的壯麗海面，眼神堅定而遼闊；將江大口嚼著剛剛從補給箱裡翻出來的巧克力棒，笑得像個圓滾滾的太陽；杜海嵐迎風而立，英姿颯爽的遠洋少女轉過頭，向誠浩伸出了手掌。\n\n「冒險齒輪號的少年們，」杜海嵐笑意盎然，「下一次探險，我們去哪裡？」\n\n誠浩伸出手，與杜海嵐、葉旖緁、將江的手掌緊緊疊握在一起，機械柴犬皮可也把毛茸茸的金屬爪子搭了上來。\n\n「無論是群星之巔，還是深淵之底——」\n\n誠浩抬起頭，迎著太平洋破曉的萬丈金光，朗聲笑道：\n\n「只要齒輪還在旋轉，我們的冒險就永無止境！」",
          "contentEn": "# Adventure Gear: Mariana's Abyssal Beacon\n\n## Chapter 18: The Ten Thousand Rays of Dawn upon the Sea\n\nAcross the bottom sediment of Challenger Deep at 10,928 meters, the towering obsidian temple radiated sacred, faint blue-gold luminescence in the 28 Hz low-frequency resonance.\n\nSupported by the solid locking of the Invar-Rhenium safety pin, the fifteen-meter brass four-pointed star escapement balance maintained an absolute, flawless zero-degree equilibrium. The long-baseline acoustic link between the Abyssal Chronometer Zero and the Dawn Beacon served as an invisible pillar stabilizing the sea, silently dissipating the violent tectonic shear stress accumulated over half a century within the western Pacific plates.\n\n\"All Pacific tsunami early warning centers have confirmed receipt of telemetry acknowledgments!\"\n\nYeh I-Chieh took off her blue-light-filtering glasses after wearing them for thirty-six straight hours, gently rubbing her reddened eyes as a radiant, deeply relieved smile lit up her refined face: \"Guam's Apra Harbor flood barrier alerts have stood down, and tsunami threat levels across Hawaii and the Japanese coastline have all been downgraded to harmless, long-period tidal swells!\"\n\n\"We... we actually saved the entire Pacific!\"\n\nJiang-Jiang slumped limp against his seat with an enormous sigh of relief, immediately followed by a thunderous growl from his empty stomach that drew helpless, affectionate laughter from everyone in the pressure sphere.\n\n\"Yet, my friends, our deep-sea expedition still has one final trial ahead—\"\n\nOcean helmsman Du Hai-Lan adjusted her windproof goggles, her gaze sweeping across the flickering power and life-support telemetry on the main console, her tone regaining its brisk, commanding edge: \"The submersible's primary lithium-sulfur batteries are down to 6.8%, and our emergency chemical oxygen candles can only sustain us for two more hours. Before we lose primary power completely, we must complete a vertical ascent of eleven thousand meters in ninety minutes!\"\n\n\"Eleven thousand meters... a vertical climb in ninety minutes?!\" Jiang-Jiang gasped in dread. \"That's like riding a rocket straight from the center of the Earth to outer space! Won't we get decompression sickness like scuba divers?!\"\n\n\"Silly goose, of course not!\"\n\nYeh I-Chieh smiled and gave Jiang-Jiang's safety helmet an affectionate tap: \"*Nautilus-IV* is a fully sealed 'Atmospheric Diving System (ADS)'! The internal cabin pressure has been rigorously maintained at one standard atmosphere (1 atm) by the titanium alloy hull from the very start. There is zero excess inert gas dissolved in our bloodstream, so we don't need staged decompression stops like traditional divers—we can breach the surface at maximum speed!\"\n\n\"Exactly. Right now, what we need to do is transform this twenty-ton deep-sea leviathan into an agile brass bubble!\"\n\nCheng-Hao stepped to the co-pilot's console, his hands taking firm hold of the conspicuous red-and-black dual mechanical jettison lever beneath the main instrument panel.\n\n\"Step one: cut power to the lower electromagnetic cast-iron ballast electromagnets and release 1.5 tons of auxiliary trim ballast!\" Cheng-Hao commanded steadily.\n\n\"Clack!\"\n\nDu Hai-Lan flicked the circuit breaker; the bottom doors of two sealed hoppers beneath the sub's belly swung wide, and 1,500 kilograms of ultra-fine, high-density cast-iron grit plummeted silently into the siliceous ooze below like a black waterfall.\n\n\"Step two: manually unlock the primary titanium keel lead ballast bricks!\" Cheng-Hao pulled the mechanical jettison lever downward to its maximum stop with all his might!\n\n\"CLACK——BOOM!\"\n\nAccompanied by the crisp chime of the mechanical detent release, three massive lead ballast slabs mounted to the sub's keel disengaged completely from their carriages, tumbling into the abyss and throwing up billows of white sediment.\n\nThe instant three metric tons of deadweight ballast were cast off, the laws of physics unleashed their awe-inspiring majesty!\n\nThe thick layer of high-strength syntactic foam—synthesized from hollow glass microspheres embedded in epoxy resin wrapping the sub's hull—unleashed monstrous net positive buoyancy ($\\Delta F = F_{\\text{buoyancy}} - G > 0$)!\n\n\"WHIRRR——SHHHH————!!\"\n\nWith breathtaking vigor, *Nautilus-IV* pitched its prow upward, rocketing through the freezing hadal brine like a golden spear, surging toward the distant sea surface at an astonishing vertical ascent velocity exceeding two meters per second!\n\nThrough the observation viewport, that majestic obsidian Dawn Temple shrank rapidly within the searchlight beams, ultimately receding into a tranquil, eternal ember of golden light, remaining forever within the deepest heart of Mother Earth.\n\n\"Farewell, Mariana Trench...\" Cheng-Hao whispered softly, his eyes brimming with reverence for the abyss.\n\nThe crimson digits on the depth indicator began unwinding at dizzying speed:\n\nTen thousand meters... nine thousand meters... eight thousand meters!\n\nAs the submersible broke through the eight-thousand-meter threshold and departed the pitch-black hadopelagic zone, speckles of dreamlike bioluminescence began shimmering outside the viewport.\n\nSeveral semi-translucent Mariana hadal snailfish, gliding like living ribbons of silk, drifted gracefully past the viewing ports, their lateral line organs sensing the micro-currents stirred by the ascending submersible, as if providing an escort of honor for these brave human youths.\n\nSix thousand meters... five thousand meters... three thousand meters!\n\nIn the bathypelagic depths at three thousand meters, the searchlights illuminated a colossal giant squid exceeding ten meters in length; its ice-blue eyes, vast as carriage wheels, gazed solemnly at the swift brass craft before undulating its broad mantles and fading into the abyss.\n\nOne thousand meters! The submersible formally pierced the famous \"SOFAR Channel Axis\"!\n\nIn that exact instant, the vessel shuddered faintly, its vertical ascent speed slightly slowing from 2.5 meters per second to 2.1 meters per second.\n\n\"Heads up! We are crossing the oceanic pycnocline and thermocline!\"\n\nYeh I-Chieh pointed to the seawater temperature and density telemetry, explaining rapidly: \"Climbing from one thousand meters to two hundred meters, seawater temperature leaps from a frigid 2°C to 26°C! Thermal expansion causes seawater density to plummet from 1.028 g/cm³ down to 1.023 g/cm³!\"\n\n\"As seawater density drops, the Archimedean buoyant force on the hull decreases by nearly five hundred kilograms!\" Cheng-Hao understood immediately, working the attitude trim hydrofoils. \"Deploying dorsal hydrodynamic canards to harness angle of attack for dynamic lift!\"\n\nUnder Cheng-Hao's precision hydrodynamic piloting, the submersible sheared smoothly through the pycnocline density interface like a graceful humpback whale, surging straight toward the sunlit photic zone!\n\nFive hundred meters... two hundred meters... one hundred meters!!\n\nThe darkness retreated.\n\nThe freezing, perpetual night was supplanted by rich hues of indigo, sapphire, and cerulean!\n\nCountless planktonic organisms sparkled like living jewels in the morning light filtering down from above, while the silvery bellies of a school of tuna flashed dazzling gold in the sunbeams!\n\n\"Sunlight! That's real sunlight!!\" Jiang-Jiang pressed his face against the viewport, tears and snot flowing freely in sheer jubilation.\n\nTen meters... five meters... zero!!\n\nSeven o'clock in the morning sharp.\n\nAcross the boundless, mirror-flat azure surface of the western Pacific, the calm ripples suddenly domed upward with explosive fury!\n\n\"SPLAAAAASH————BOOOOM————!!\"\n\nA magnificent ten-meter-high geyser of pristine white foam erupted toward the heavens, and *Nautilus-IV*—its heavy titanium alloy dual-sphere hull gleaming with golden sunbeams and sparkling droplets—breached the surface like a mythic leviathan!\n\nSpray showered across the crystal viewing domes, fracturing into an incandescent canopy of rainbows!\n\n\"Beep-beep-beep! Emergency Position-Indicating Radio Beacon (EPIRB) automatically deployed!\"\n\nPico the robotic Shiba Inu wagged his alloy tail vigorously: \"Doppler search-and-rescue satellites locked on! We're back on the surface, woof-woof!\"\n\n\"Pshhhhh——hissssss————\"\n\nAmid the venting hiss of the high-pressure hatch seals, Du Hai-Lan wrenched the hexagonal wheel of the upper access hatch, shoving the heavy titanium lid open toward the sky!\n\n\"WHOOOOSH————!!\"\n\nA long-awaited surge of fresh air carrying the briny scent of sea spray and warm breezes, accompanied by ten thousand rays of golden dawn sunlight, flooded into the pressure sphere!\n\nOne after another, the five companions climbed up the ladder onto the observation deck atop the submersible.\n\nAcross the western Pacific, the morning sun leaped above the distant horizon, transforming the boundless ocean into a shimmering sea of liquid gold. The gentle warmth poured over the youths' pale faces, dispelling every last trace of hadal chill locked deep in their bones.\n\n\"HOOOOONK——————!! HOOOOONK——————!!\"\n\nOn the far horizon, three long, booming blasts of salute sounded from the horns of their research mother ship, the *RV Explorer*!\n\nTwin high-power fire monitors flanking the ship's bridge fired water arches into the air, creating a colossal double rainbow that bridged the sky. On deck, dozens of researchers and crewmen waved their caps and flags, their ecstatic cheers ringing louder than the rolling waves!\n\nCheng-Hao stood atop the submersible deck, the morning breeze ruffling his dark hair.\n\nFrom his chest, he gently withdrew the antique brass pocket watch that had accompanied him across thousands of miles, down the seven-thousand-meter ridge, and straight into the ten-thousand-meter Challenger Deep.\n\nUnder the brilliant dawn light, the exquisite gear insignia on the watch casing shone with timeless radiance. And inside the lid, the miniature inscription remained as clear as ever:\n\n*\"To Cheng-Hao: All things in this world are like clockwork gears; only the explorer's courage is the eternal mainspring.\"*\n\n\"Grandfather, we did it.\" Cheng-Hao caressed the watch face, crystal tears welling in his eyes, yet his lips parted into a radiant smile.\n\nBeside him, Yeh I-Chieh adjusted her glasses, her eyes gazing steady and boundless across the sunlit sea; Jiang-Jiang munched happily on a chocolate bar retrieved from the emergency rations, grinning like a chubby little sun; and Captain Du Hai-Lan stood proud against the wind, turning toward Cheng-Hao with an outstretched hand.\n\n\"Explorers of the Adventure Gear,\" Du Hai-Lan beamed with vibrant adventure, \"where do we journey next?\"\n\nCheng-Hao reached out, firmly locking his hand with Du Hai-Lan's, Yeh I-Chieh's, and Jiang-Jiang's, while Pico placed his furry metallic paw atop them all.\n\n\"Be it the summit of the stars, or the deepest floor of the abyss—\"\n\nCheng-Hao looked up, facing the ten thousand golden rays of the Pacific dawn, laughing with clear, soaring joy:\n\n\"As long as the gears keep turning, our adventure will never end!\"",
          "stemKnowledge": [
            "正浮力垂直上浮動力學與固體浮力材料（Positive Buoyancy Ascent Dynamics & Syntactic Foam）：拋棄底層壓載鉛塊與高密度鐵砂後，淨浮力 ΔF = F_buoyancy - G 驅動潛艇高速垂直上浮。空心玻璃微珠環氧樹脂固體浮力材料（Syntactic Foam）具備極高抗靜水壓強與低密度特性，在減壓過程中微觀回彈釋放額外正浮力，抵消流體阻力維持超過 2 m/s 的穩定上浮終端速度。",
            "常壓潛水系統（ADS）與減壓病預防（Atmospheric Diving System & Decompression Avoidance）：深潛艇厚壁鈦合金球艙維持嚴格的 1 個標準大氣壓（1 atm）環境，乘員體液與血液中無多餘溶解高壓氮氣，因此在上浮穿越萬米極限水深時，完全不需要像常規潛水般執行階梯式減壓停留，可直接高速衝破海面。",
            "大洋溫躍層/密躍層密度階躍與浮力動態微調（Ocean Pycnocline Density Step & Dynamic Hydrodynamic Lift）：水深 1,000 米上升至 200 米時，水溫由 2°C 暴升至 26°C，海水熱膨脹使密度由 1.028 g/cm³ 降至 1.023 g/cm³，導致整艘潛艇所受靜浮力減少約 500 公斤。透過導流翼板水動力衝角產生動態升力，平滑切穿密躍界面。",
            "應急無線電示位標與多普勒搜救衛星定位（EPIRB & COSPAS-SARSAT Doppler Geolocation）：出水瞬間自動彈射展開應急示位標（EPIRB），發射 406 MHz 遇險信號。近地軌道搜救衛星利用衛星與信標間相對運動產生的多普勒頻移效應（Doppler Shift），在數秒內精確解算經緯度座標引導母船實施海上回收。"
          ]
        }
      ],
      "chaptersCount": 6
    },
    {
      "id": "book-30",
      "seriesId": "series-12",
      "title": "死者請保持安靜 1：胃袋裡的黃銅鑰匙",
      "enTitle": "The Dead Please Keep Quiet Vol 1: The Brass Key in the Stomach",
      "subtitle": "第一卷 · 胃內容物動力學與沉睡保險箱",
      "enSubtitle": "Volume 1 · Gastric Emptying Dynamics & The Sleeping Safe",
      "status": "第一卷大完結（全 6 章）",
      "statusColor": "slate",
      "coverTag": "🔍 法醫推理主線",
      "author": "鹿陽法醫懸疑工作室",
      "targetAge": "青年至大眾讀者適讀 · 現代法醫學 × 刑偵密室推理",
      "totalWords": 15618,
      "totalChapters": 6,
      "description": "十一月江霧瀰漫的深夜，一起看似普通的水泥江邊浮屍案被推入解剖室。青年病理學家裴以安切開死者胃袋，赫然發現一枚被胃酸腐蝕卻未曾穿孔的神秘黃銅鑰匙。伴隨刑偵副隊長周成林與實習法醫蘇棠的加入，微量物證與胃內容物消化進程逆推，指向三十年前未解的沉睡保險箱與暴雨江邊乾塢，一場圍繞無聲證詞的法醫刑偵大案就此拉開序幕！",
      "chapters": [
        {
          "id": 1,
          "file": "第01章_死者比活人更有禮貌.md",
          "title": "第1章：死者比活人更有禮貌",
          "enTitle": "Chapter 1: The Dead Are More Polite Than the Living",
          "shortTitle": "死者比活人更有禮貌",
          "concept": "胃內容物排空動力學 × 屍斑指壓褪色 × 機械性窒息生活反應",
          "wordCount": 2704,
          "readTimeMin": 8,
          "puzzle": "死者胃黏膜深處卡著一枚刻有編號的黃銅十字鑰匙，如何在沒有胃穿孔痕跡下推算吞入時間？"
        },
        {
          "id": 2,
          "file": "第02章_老周的保溫杯與深夜大排檔.md",
          "title": "第2章：老周的保溫杯與深夜大排檔",
          "enTitle": "Chapter 2: Old Zhou's Thermos & Midnight Food Stalls",
          "shortTitle": "老周的保溫杯與深夜大排檔",
          "concept": "微量物證轉移（羅卡定律） × 碳素墨水年代分光光度法 × 步態特徵重建",
          "wordCount": 2809,
          "readTimeMin": 9,
          "puzzle": "死者指甲縫殘留的微量銅鋅合金碎屑與老油墨，如何引導老刑警鎖定三十年前的鐘錶老巷？"
        },
        {
          "id": 3,
          "file": "第03章_三十年前的沉睡保險箱.md",
          "title": "第3章：三十年前的沉睡保險箱",
          "enTitle": "Chapter 3: The Sleeping Safe of Thirty Years",
          "shortTitle": "三十年前的沉睡保險箱",
          "concept": "三組輪片機械密碼盤原理 × 內窺鏡金屬疲勞探傷 × 磷化防鏽塗層氧化分析",
          "wordCount": 2754,
          "readTimeMin": 8,
          "puzzle": "被水泥封死三十年的重型暗鎖保險箱，如何在不破壞內部微脆弱紙本下以聽診器精確解密？"
        },
        {
          "id": 4,
          "file": "第04章_雨幕中的江邊舊船廠.md",
          "title": "第4章：雨幕中的江邊舊船廠",
          "enTitle": "Chapter 4: The Old Shipyard in the Rain",
          "shortTitle": "雨幕中的江邊舊船廠",
          "concept": "矽藻進肺實驗（破裂入血檢驗） × 鈍器打擊骨折力傳導 × 溺死前生活反應",
          "wordCount": 2074,
          "readTimeMin": 6,
          "puzzle": "荒廢船廠乾塢內積水漂浮的第二具屍體，為何肺部矽藻與乾塢積水種類完全不符？"
        },
        {
          "id": 5,
          "file": "第05章_死者未發出的遺言.md",
          "title": "第5章：死者未發出的遺言",
          "enTitle": "Chapter 5: The Unspoken Last Words",
          "shortTitle": "死者未發出的遺言",
          "concept": "隱形墨水紫外三維螢光光譜 × 喉頭出血與迷走神經反射 × 指紋汗液氨基酸茚三酮顯影",
          "wordCount": 2495,
          "readTimeMin": 8,
          "puzzle": "死者緊握的手掌內只有一張浸透雨水的空白信紙，怎樣在顯微暗室中提取最後的壓痕筆跡？"
        },
        {
          "id": 6,
          "file": "第06章_鎖眼裡的警告信.md",
          "title": "第6章：鎖眼裡的警告信",
          "enTitle": "Chapter 6: The Warning Inside the Keyhole",
          "shortTitle": "鎖眼裡的警告信",
          "concept": "彈簧閂鎖死原理 × 二氧化碳急速釋放致冷 × 金屬雙折射殘餘應力分析",
          "wordCount": 2782,
          "readTimeMin": 8,
          "puzzle": "調度室重鎖封閉的鐵門反鎖密室內，凶手如何利用乾冰相變氣壓與細尼龍線完成外部鎖死？"
        }
      ]
    },
    {
      "id": "book-31",
      "seriesId": "series-12",
      "title": "死者請保持安靜 2：雨夜骨骼交響曲",
      "enTitle": "The Dead Please Keep Quiet Vol 2: Symphony of Bones in the Rainy Night",
      "subtitle": "第二卷 · 法醫人類學骨骼重建與百年鐘樓",
      "enSubtitle": "Volume 2 · Forensic Anthropology Bone Reconstruction & The Century Clocktower",
      "status": "第二卷大完結（全 7 章）",
      "statusColor": "indigo",
      "coverTag": "💀 硬核法醫人類學",
      "author": "鹿陽法醫懸疑工作室",
      "targetAge": "青年至大眾讀者適讀 · 現代法醫學 × 刑偵密室推理",
      "totalWords": 18103,
      "totalChapters": 7,
      "description": "現代藝術館即將揭幕的青銅雕像內部，赫然封存著一具被高溫灼燒的焦黑人類肋骨！裴以安透過骨質哈弗氏系統微結構與琴弦繭應力磨損，驚人還原出三十年前失蹤小提琴大師的骨骼年輪。暴雨倒數四十八小時，鐘樓齒輪箱、暗渠泥沙與大劇院管風琴低音管中的殘骸密碼被逐一解開，兇手正試圖在大劇院開演之夜奏響最後的死亡樂章！",
      "chapters": [
        {
          "id": 7,
          "file": "第07章_青銅雕像裡的肋骨.md",
          "title": "第7章：青銅雕像裡的肋骨",
          "enTitle": "Chapter 7: Ribs Inside the Bronze Statue",
          "shortTitle": "青銅雕像裡的肋骨",
          "concept": "青銅失蠟法鑄造熱損傷 × 骨質碳化分級 × 法醫人類學骨盆與恥骨聯合年齡估算",
          "wordCount": 2399,
          "readTimeMin": 7,
          "puzzle": "灌鑄在高新區現代藝術雕像空腔內的焦骨，如何避開青銅液上千度高溫直衝維持解剖學完整性？"
        },
        {
          "id": 8,
          "file": "第08章_顯微鏡下的職業傷痕.md",
          "title": "第8章：顯微鏡下的職業傷痕",
          "enTitle": "Chapter 8: Occupational Scars Under the Lens",
          "shortTitle": "顯微鏡下的職業傷痕",
          "concept": "骨膜應力增生與骨密質哈弗氏系統 × 琴弦溝繭微米級掃描 × 髕骨骨刺生長軌跡",
          "wordCount": 2263,
          "readTimeMin": 7,
          "puzzle": "左手橈骨小頭與第三指近節指骨的異常偏側磨損，怎樣精準指認受害人三十年前的小提琴演奏家身份？"
        },
        {
          "id": 9,
          "file": "第09章_暴雨前的限時四十八小時.md",
          "title": "第9章：暴雨前的限時四十八小時",
          "enTitle": "Chapter 9: 48 Hours Before the Downpour",
          "shortTitle": "暴雨前的限時四十八小時",
          "concept": "法醫昆蟲學嗜屍性雙翅目幼蟲發育積溫（ADD） × 土壤酸鹼對骨膠原流失率測定",
          "wordCount": 2403,
          "readTimeMin": 7,
          "puzzle": "劇院外圍泥沼出土的殘留織物，如何根據嗜腐甲蟲蛹殼與積溫公式倒推棄屍的雨夜精確時限？"
        },
        {
          "id": 10,
          "file": "第10章_誰在指揮骨骼交響曲.md",
          "title": "第10章：誰在指揮骨骼交響曲",
          "enTitle": "Chapter 10: Who Conducts the Bone Symphony?",
          "shortTitle": "誰在指揮骨骼交響曲",
          "concept": "共鳴腔聲學頻率諧振 × 肋軟骨骨化程度 × 聲門閉合痙攣",
          "wordCount": 2272,
          "readTimeMin": 7,
          "puzzle": "嫌疑人寄送至市局的錄音磁帶中雜音頻率，為何能與老劇院管風琴第十六根低音鉛管產生駐波共振？"
        },
        {
          "id": 11,
          "file": "第11章_鐘樓齒輪與失蹤名單.md",
          "title": "第11章：鐘樓齒輪與失蹤名單",
          "enTitle": "Chapter 11: Clocktower Gears & The Missing Register",
          "shortTitle": "鐘樓齒輪與失蹤名單",
          "concept": "齒輪傳動比與擒縱擺角動力學 × 碳酸鈣微結晶定年 × 鋼索拉伸斷裂截面微觀分析",
          "wordCount": 2457,
          "readTimeMin": 8,
          "puzzle": "大劇院鐘樓停擺在十年前某個暴雨之夜的巨大齒輪箱深處，為何卡著一枚非同尋常的鈦合金手術鋼板？"
        },
        {
          "id": 12,
          "file": "第12章_舊水管深處的殘骸密碼.md",
          "title": "第12章：舊水管深處的殘骸密碼",
          "enTitle": "Chapter 12: Debris Ciphers Deep in Old Drainage",
          "shortTitle": "舊水管深處的殘骸密碼",
          "concept": "流體力學沉降速度 × 齒科全景比對（Odontology） × 牙髓腔 DNA 高通量萃取",
          "wordCount": 3054,
          "readTimeMin": 9,
          "puzzle": "暴雨倒灌的百年暗渠沉積泥中，如何透過一顆包金磨牙上的特殊牙冠修復術鎖定第二名失蹤樂手？"
        },
        {
          "id": 13,
          "file": "第13章_大劇院最後的樂章.md",
          "title": "第13章：大劇院最後的樂章",
          "enTitle": "Chapter 13: The Final Movement at the Grand Theatre",
          "shortTitle": "大劇院最後的樂章",
          "concept": "舞檯燈光熱輻射與硝酸甘油熱解 × 迷宮控制台重力連動配重 × 骨折剪切力方向重建",
          "wordCount": 3255,
          "readTimeMin": 10,
          "puzzle": "開演前最後十分鐘，即將墜落的五噸重水晶吊燈下，如何從配重鋼索斷口的氧化色澤推斷機關觸發點？"
        }
      ]
    },
    {
      "id": "book-32",
      "seriesId": "series-12",
      "title": "死者請保持安靜 3：無聲的最後證詞",
      "enTitle": "The Dead Please Keep Quiet Vol 3: The Silent Final Testimony",
      "subtitle": "第三卷 · 零下二十度冰櫃密室與三十年終局",
      "enSubtitle": "Volume 3 · The Sub-Zero Cryo-Vault & The Thirty-Year Denouement",
      "status": "第三卷大完結（全 7 章）",
      "statusColor": "cyan",
      "coverTag": "🏆 全書完結卷",
      "author": "鹿陽法醫懸疑工作室",
      "targetAge": "青年至大眾讀者適讀 · 現代法醫學 × 刑偵密室推理",
      "totalWords": 18160,
      "totalChapters": 7,
      "description": "法醫科停屍房深夜斷電，常年封鎖的第十三號低溫冰櫃被離奇重啟，裴以安與周成林被困於零下二十度的致命密閉冷庫！在極度缺氧與嚴寒中，兩人突破密室，直奔舊檔案大樓天台雨夜決戰。泛黃三十年的恩師病理底稿重見天日，多光譜照射還原出當年的原發性毒物真相。最後的手術刀劃破長夜迷霧，黎明時分，死者終獲安息！",
      "chapters": [
        {
          "id": 14,
          "file": "第14章_停屍房裡的第十三具冰櫃.md",
          "title": "第14章：停屍房裡的第十三具冰櫃",
          "enTitle": "Chapter 14: The Thirteenth Freezer in the Morgue",
          "shortTitle": "停屍房裡的第十三具冰櫃",
          "concept": "超低溫冰晶對細胞膜穿刺效應 × 屍冷降溫諾莫圖（Nomogram） × 玻璃化低溫保護劑殘留",
          "wordCount": 2442,
          "readTimeMin": 7,
          "puzzle": "法醫科停屍間常年封存的第13號冰櫃被外部電子鎖竄改，解凍後屍體的角膜渾濁度為何違背常規熱力學？"
        },
        {
          "id": 15,
          "file": "第15章_低溫冰櫃與密室呼吸.md",
          "title": "第15章：低溫冰櫃與密室呼吸",
          "enTitle": "Chapter 15: Cryogenic Vault and Confined Respiration",
          "shortTitle": "低溫冰櫃與密室呼吸",
          "concept": "封閉空間氣體分壓分佈（高低氧分壓遞減） × 呼出水氣凝華結晶角 × 密閉環境體溫熱散失",
          "wordCount": 3240,
          "readTimeMin": 10,
          "puzzle": "被困於-20°C超低溫檔案保險庫的裴以安與周成林，如何利用電工萬用表與防凍管殘留水銀破壞溫控電磁閥？"
        },
        {
          "id": 16,
          "file": "第16章_檔案大樓天台的雨夜終局.md",
          "title": "第16章：檔案大樓天台的雨夜終局",
          "enTitle": "Chapter 16: The Rain-Night Denouement on the Archives Rooftop",
          "shortTitle": "檔案大樓天台的雨夜終局",
          "concept": "雷擊紋（利希滕貝格圖案） × 高處墜落減速衝擊力學 × 鈍器打擊傷與自衛抵抗傷形貌比對",
          "wordCount": 3013,
          "readTimeMin": 9,
          "puzzle": "狂風驟雨的十二層天台邊緣，嫌犯偽造的滑墜意外如何被護欄上僅有0.3毫米的反向抓握皮瓣纖維戳破？"
        },
        {
          "id": 17,
          "file": "第17章_三十年前的病理底稿.md",
          "title": "第17章：三十年前的病理底稿",
          "enTitle": "Chapter 17: The Pathology Manuscript from Thirty Years Ago",
          "shortTitle": "三十年前的病理底稿",
          "concept": "酸性造紙纖維老化黃變分級 × 複寫紙微壓痕顯微三維拓印 × 福馬林固定組織臘塊再切片技術",
          "wordCount": 2614,
          "readTimeMin": 8,
          "puzzle": "泛黃發脆的三十年前手寫屍檢報告被塗黑關鍵段落，如何用多光譜照射還原出當年的原發性毒物致死結論？"
        },
        {
          "id": 18,
          "file": "第18章_誰是真正的擺渡人.md",
          "title": "第18章：誰是真正的擺渡人",
          "enTitle": "Chapter 18: Who is the True Ferryman",
          "shortTitle": "誰是真正的擺渡人",
          "concept": "血跡形態分析（BPA 拋體運動噴濺角） × 骨質鈍器創緣骨縫嵌合 × 假性動脈瘤破裂猝死機制",
          "wordCount": 2282,
          "readTimeMin": 7,
          "puzzle": "醫院特護病房內看似心臟衰竭的老院長，頸動脈竇壓迫痕跡為何與輪椅扶手的青銅裝飾尺寸完全吻合？"
        },
        {
          "id": 19,
          "file": "第19章_穿透迷霧的最後一柄手術刀.md",
          "title": "第19章：穿透迷霧的最後一柄手術刀",
          "enTitle": "Chapter 19: The Final Scalpel Piercing the Mist",
          "shortTitle": "穿透迷霧的最後一柄手術刀",
          "concept": "手術刀刃微鋸齒研磨痕（Tool Mark Analysis） × 醫用縫合線吸收週期 × 法醫毒理質譜聯用（GC-MS）",
          "wordCount": 2525,
          "readTimeMin": 8,
          "puzzle": "私人停機坪上準備出境的主謀皮箱內，那套特製不鏽鋼解剖刀柄上刻下的拉丁文校訓隱藏了何種罪惡血誓？"
        },
        {
          "id": 20,
          "file": "第20章_黎明時分，死者請安息.md",
          "title": "第20章：黎明時分，死者請安息",
          "enTitle": "Chapter 20: At Dawn, May the Dead Rest in Peace",
          "shortTitle": "黎明時分，死者請安息",
          "concept": "法醫病理學最終司法因果鏈重建 × 骨灰化驗鋇鍶重金屬示蹤 × 司法正義與人道尊嚴",
          "wordCount": 2044,
          "readTimeMin": 6,
          "puzzle": "當長達三十年的冤案卷宗在晨光中重新封籤，裴以安在宋老墓前留下的一柄黃銅解剖刀如何為死者完成無聲證言？"
        }
      ]
    },
    {
      "id": "book-33",
      "seriesId": "series-13",
      "title": "稻浪裡的擺渡船：臺中烏日・溪尾寮擺渡人傳奇",
      "enTitle": "The Ferryman in the Golden Waves: Legend of the Xiwei Ferryman",
      "subtitle": "全一冊 · 台灣大河飛地與食農水文史詩",
      "enSubtitle": "Complete Volume · The Great River Enclave & Agro-Food Heritage",
      "status": "全書大完結（全 7 章）",
      "statusColor": "amber",
      "coverTag": "🌾 土地文史食農",
      "author": "鹿陽鄉土人文故事坊",
      "targetAge": "9～15 歲適讀 · 高年級至國中生",
      "totalWords": 19662,
      "totalChapters": 7,
      "description": "在臺中烏日與彰化、南投交界的溪尾寮，烏溪的每一次咆哮都是一場生死考驗。阿榮伯手握五公尺的火烤刺竹定波篙，帶領怕水的少年阿順橫渡夏汛濁流。跨越半世紀的風雨，從求學渡口到成大土木系、從手寫船票到現代溪尾大橋通車，這是一部寫給台灣土地、河流與感恩之心的動人長篇！",
      "chapters": [
        {
          "id": 1,
          "file": "序曲_立在田埂上的老刺竹篙.md",
          "title": "第1章：序曲——立在田埂上的老刺竹篙",
          "enTitle": "Chapter 1: Prologue—The Ancient Thorny Bamboo Pole Standing on the Ridge",
          "shortTitle": "立在田埂上的老刺竹篙",
          "concept": "刺竹力學韌性 × 大河沖積地形水文 × 當代溪尾大橋地景",
          "wordCount": 1851,
          "readTimeMin": 6,
          "puzzle": "立在稻浪田埂上的五公尺枯槁刺竹篙，頂端為何保留著火烤彎翹的奇異弧度？"
        },
        {
          "id": 2,
          "file": "第01章_春水微茫.md",
          "title": "第2章：春水微茫——種一條菜瓜，藤旋三縣市",
          "enTitle": "Chapter 2: Faint Spring Waters—Plant a Melon, Its Tendrils Sweep Three Counties",
          "shortTitle": "春水微茫：三縣飛地",
          "concept": "河川改道與行政飛地成因 × 1939日治烏溪築堤防汛史 × 火烤刺竹翹頭工藝",
          "wordCount": 3137,
          "readTimeMin": 9,
          "puzzle": "為何烏溪南岸的溪尾寮居民在地理上緊鄰彰化與南投，身分證上的戶籍卻屬於北岸的臺中烏日？"
        },
        {
          "id": 3,
          "file": "第02章_夏汛驚濤.md",
          "title": "第3章：夏汛驚濤——破曉六點的「求學渡」",
          "enTitle": "Chapter 3: Summer Floods and Churning Waves—The 6:00 AM School Crossing",
          "shortTitle": "夏汛驚濤：求學渡",
          "concept": "荒溪型河川水文動力學 × 借水行舟剪切力向量 × 破浪護篙手力矩平衡",
          "wordCount": 3573,
          "readTimeMin": 11,
          "puzzle": "面對夏季暴雨濁流與上游衝撞而來的巨型漂流木，擺渡人為何不逆流硬頂，反而迎浪斜切？"
        },
        {
          "id": 4,
          "file": "第03章_秋穗生金.md",
          "title": "第4章：秋穗生金——沙洲西瓜與黑土冠軍米",
          "enTitle": "Chapter 4: Golden Grains of Autumn—Sandbar Watermelons and Champion Black-Soil Rice",
          "shortTitle": "秋穗生金：黑土糧倉",
          "concept": "中央山脈板岩與泥岩沖積黑土 × 河床透水沙洲根系保水 × 船運糧米浮力平衡",
          "wordCount": 2604,
          "readTimeMin": 8,
          "puzzle": "看似貧瘠荒涼的乾涸卵石沙洲，為何能培育出糖度極高且水分飽滿的巨型大西瓜？"
        },
        {
          "id": 5,
          "file": "第04章_冬寒裂骨.md",
          "title": "第5章：冬寒裂骨——暗夜對岸的「生死火把」",
          "enTitle": "Chapter 5: Bone-Splitting Winter Chill—The Torches of Life and Death Across the Dark Night",
          "shortTitle": "冬寒裂骨：生死火把",
          "concept": "枯水期百米竹便橋重力搭接工法 × 罕見冬季暴雨山洪應變 × 暗夜信號與水上搜救",
          "wordCount": 3342,
          "readTimeMin": 10,
          "puzzle": "在伸手不見五指的酷寒冬夜暴雨中，對岸揮舞的三把火把傳遞了何種生死信號？"
        },
        {
          "id": 6,
          "file": "第05章_大河退渡.md",
          "title": "第6章：大河退渡——最後一張手寫船票",
          "enTitle": "Chapter 6: The Great River Retires the Ferry—The Last Handwritten Ticket",
          "shortTitle": "大河退渡：最後船票",
          "concept": "1970年代現代公路交通變革 × 土木結構力學萌芽 × 水上渡運歷史退場機制",
          "wordCount": 2961,
          "readTimeMin": 9,
          "puzzle": "當最後一班公聘擺渡船靠岸，阿榮伯交給成大土木系阿順的手寫船票上寫了什麼？"
        },
        {
          "id": 7,
          "file": "第06章_橋起穗香.md",
          "title": "第7章：尾聲・橋起穗香——擺渡人的食光穗稻",
          "enTitle": "Chapter 7: Epilogue: A Bridge Rises with Fragrant Grain—The Ferryman's Golden Grain",
          "shortTitle": "橋起穗香：食光穗稻",
          "concept": "溪尾大橋與二橋現代鋼箱梁跨徑工程 × 地方創生與食農文化傳承 × 大河記憶活化",
          "wordCount": 2194,
          "readTimeMin": 7,
          "puzzle": "跨越烏溪兩岸的雄偉現代大橋通車後，如何將百年前艱辛的擺渡歷史轉化為孩子手中心懷感恩的飯糰？"
        }
      ]
    },
    {
      "id": "book-34",
      "title": "全班留堂中：超時空暑假輔導 · 第一卷",
      "enTitle": "The Whole Class in Detention: Volume 1",
      "subtitle": "第一卷 · 被困住的下午四點（第 1～6 章）",
      "enSubtitle": "Volume 1: The Trapped Four O'Clock (Chapters 1-6)",
      "status": "已完結",
      "statusColor": "purple",
      "coverTag": "校園爆笑 × 輕科幻 × 時空迴圈",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 22520,
      "totalChapters": 6,
      "description": "升學銜接大測驗全班集體掛科，學務主任周嚴下達全校唯一的地獄暑輔令！不料一場突如其來的夏日紫色雷暴貫穿避雷針，未來少女未晞的時序手環與仿生人導師高峙舷的量子運算核產生強烈電磁共振，將整棟教學大樓鎖死在無限重置的下午四點！吃不完的福利社熱肉包、撞不開的時空彈性結界、高老師兩萬四千題的無情訂正算力……點子王阿釁領銜策劃 101 種大逃脫，直到最後一顆熱肉包與加密日誌曝光，才揭開時空錨點背後笑中帶淚的真正秘密！",
      "chapters": [
        {
          "globalId": 1,
          "file": "第01章_地獄暑期輔導令.md",
          "title": "第 1 章：地獄暑期輔導令",
          "enTitle": "Chapter 1: The Hellish Summer School Order",
          "shortTitle": "地獄暑期輔導令",
          "concept": "銜接測驗大烏龍、周主任鐵面懲罰、高老師0.3秒電磁掃描",
          "wordCount": 4020,
          "readTimeMin": 12,
          "id": 1
        },
        {
          "globalId": 2,
          "file": "第02章_夏日雷暴與時空手環.md",
          "title": "第 2 章：夏日雷暴與時空手環",
          "enTitle": "Chapter 2: The Summer Thunderstorm and the Chronos Bangle",
          "shortTitle": "夏日雷暴與時空手環",
          "concept": "3:59 紫色球狀閃電貫頂、手環與仿生核心大共振、重置回 8:00",
          "wordCount": 3625,
          "readTimeMin": 11,
          "id": 2
        },
        {
          "globalId": 3,
          "file": "第03章_完美的預知能力.md",
          "title": "第 3 章：完美的預知能力",
          "enTitle": "Chapter 3: The Flawless Precognition",
          "shortTitle": "完美的預知能力",
          "concept": "全班集體預判周主任台詞與動作、老巫神級滑跪接保溫杯",
          "wordCount": 4034,
          "readTimeMin": 12,
          "id": 3
        },
        {
          "globalId": 4,
          "file": "第04章_無限肉包與全班大放假.md",
          "title": "第 4 章：無限肉包與全班大放假",
          "enTitle": "Chapter 4: Infinite Pork Buns and the Great Class Vacation",
          "shortTitle": "無限肉包與全班大放假",
          "concept": "免費肉包與洗潔精滑水道狂歡、享樂適應後空虛、高老師千題反殺",
          "wordCount": 3790,
          "readTimeMin": 11,
          "id": 4
        },
        {
          "globalId": 5,
          "file": "第05章_出不去的校門結界.md",
          "title": "第 5 章：出不去的校門結界",
          "enTitle": "Chapter 5: The Impassable Schoolgate Barrier",
          "shortTitle": "出不去的校門結界",
          "concept": "門外世界絕對時間凍結、時空彈性光牆結界、三十八次搞笑彈回",
          "wordCount": 3525,
          "readTimeMin": 11,
          "id": 5
        },
        {
          "globalId": 6,
          "file": "第06章_高老師的無情算力.md",
          "title": "第 6 章：高老師的無情算力",
          "enTitle": "Chapter 6: Teacher Gao's Merciless Computing Power",
          "shortTitle": "高老師的無情算力",
          "concept": "第七天肉包創傷、兩萬四千題無限訂正計畫啟動、全員燃起鬥志",
          "wordCount": 3526,
          "readTimeMin": 11,
          "id": 6
        }
      ]
    },
    {
      "id": "book-35",
      "title": "全班留堂中：超時空暑假輔導 · 第二卷",
      "enTitle": "The Whole Class in Detention: Volume 2",
      "subtitle": "第二卷 · 一○一次大逃脫（第 7～12 章）",
      "enSubtitle": "Volume 2: One Hundred and One Great Escapes (Chapters 7-12)",
      "status": "已完結",
      "statusColor": "purple",
      "coverTag": "逆向工程 × 萌寵特工 × 總變電箱拉閘",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 21476,
      "totalChapters": 6,
      "description": "時間循環進入第二階段，全班拒絕坐以待斃！黑客少女晴晴逆向工程時序手環，發現必須拔除校園四個特定能量的時空錨點；情報小寵物溜溜鑽進老舊通風管展開驚險暗中潛行；全班更用暖心喉糖與熱茶展開心理攻防，徹底破防鐵面周主任！然而在地下防空洞挖出三十年前的時光膠囊後，手環竟意外投影出未來各奔東西的殘影……全班決定在雷擊前切斷總電源，與高老師在變電所前展開熱血大對決！",
      "chapters": [
        {
          "globalId": 7,
          "file": "第07章_晴晴的電路逆向工程.md",
          "title": "第 7 章：晴晴的電路逆向工程",
          "enTitle": "Chapter 7: Qing-Qing's Reverse Circuit Engineering",
          "shortTitle": "晴晴的電路逆向工程",
          "concept": "溜溜改裝探測全校微波、發現四大時空錨點（地釘理論）、高老師暗中放水",
          "wordCount": 3245,
          "readTimeMin": 10,
          "id": 1
        },
        {
          "globalId": 8,
          "file": "第08章_溜溜的通風管大冒險.md",
          "title": "第 8 章：溜溜的通風管大冒險",
          "enTitle": "Chapter 8: Liu-Liu's Ventilation Shaft Odyssey",
          "shortTitle": "溜溜的通風管大冒險",
          "concept": "溜溜特工通風管潛入、大戰周主任竹掃把、電磁脈衝拔除第一錨點古董銅鐘",
          "wordCount": 3381,
          "readTimeMin": 10,
          "id": 2
        },
        {
          "globalId": 9,
          "file": "第09章_黑面判官的崩潰日記.md",
          "title": "第 9 章：黑面判官的崩潰日記",
          "enTitle": "Chapter 9: The Iron Judge's Diary of Despair",
          "shortTitle": "黑面判官的崩潰日記",
          "concept": "周主任日記懷疑人生、改走西側樓梯仍遭降維打擊、貼心止血貼整到落淚",
          "wordCount": 3343,
          "readTimeMin": 10,
          "id": 3
        },
        {
          "globalId": 10,
          "file": "第10章_地下防空洞的時光膠囊.md",
          "title": "第 10 章：地下防空洞的時光膠囊",
          "enTitle": "Chapter 10: The Time Capsule in the Subterranean Shelter",
          "shortTitle": "地下防空洞的時光膠囊",
          "concept": "撬開舊防空洞、拔除第二錨點、發現周主任三十年前是第一代混世皮蛋王",
          "wordCount": 3891,
          "readTimeMin": 12,
          "id": 4
        },
        {
          "globalId": 11,
          "file": "第11章_手環的投影_未來的殘影.md",
          "title": "第 11 章：手環的投影：未來的殘影",
          "enTitle": "Chapter 11: The Bangle's Projection: Shadows of the Future",
          "shortTitle": "手環的投影：未來的殘影",
          "concept": "手環意外投影未來全息碎片、看見國中各自孤單背影、阿釁崩潰拒絕長大",
          "wordCount": 3152,
          "readTimeMin": 10,
          "id": 5
        },
        {
          "globalId": 12,
          "file": "第12章_全班停電大作戰.md",
          "title": "第 12 章：全班停電大作戰",
          "enTitle": "Chapter 12: The Campus Blackout Blitzkrieg",
          "shortTitle": "全班停電大作戰",
          "concept": "肉包雨與洗潔精白霧突襲變電所、擊中高老師神經開關成功拉閘、鐘聲依然敲響",
          "wordCount": 4464,
          "readTimeMin": 13,
          "id": 6
        }
      ]
    },
    {
      "id": "book-36",
      "title": "全班留堂中：超時空暑假輔導 · 第三卷",
      "enTitle": "The Whole Class in Detention: Volume 3",
      "subtitle": "第三卷 · 明天，你好！（第 13～18 章）",
      "enSubtitle": "Volume 3: Hello, Tomorrow! (Chapters 13-18)",
      "status": "已完結",
      "statusColor": "purple",
      "coverTag": "情感緩存 × 告別肉包 × 4:01奇蹟",
      "author": "鹿陽故事工坊",
      "targetAge": "9～15 歲（國小中高年級至國中）",
      "totalWords": 19091,
      "totalChapters": 6,
      "description": "拉閘斷電宣告失敗，重錘鐘擺依然在虛空中無情敲響，純科學干預徹底無效！直到阿釁黑進主控終端，解開高老師仿生核心深處加密的【成長緩存日誌】，才震驚地發現：鎖死時間的不是儀器故障，而是大家內心深處對長大與分開的恐懼。夕陽下的走廊，老巫掰開最後一顆熱肉包哭訴心聲；牽起雙手的二十六名少年在最後一次雷暴中齊聲吶喊『明天見！』，秒針跨過四點零一分，迎來真正的盛大畢業！",
      "chapters": [
        {
          "globalId": 13,
          "file": "第13章_停不下來的鐘擺.md",
          "title": "第 13 章：停不下來的鐘擺",
          "enTitle": "Chapter 13: The Unstoppable Pendulum",
          "shortTitle": "停不下來的鐘擺",
          "concept": "斷電失敗後的極致無力感、晴晴信仰崩塌、高老師半跪揭曉「恐懼引力場」",
          "wordCount": 2921,
          "readTimeMin": 9,
          "id": 1
        },
        {
          "globalId": 14,
          "file": "第14章_高老師的內心日誌曝光.md",
          "title": "第 14 章：高老師的內心日誌曝光",
          "enTitle": "Chapter 14: Teacher Gao's Internal Journal Revealed",
          "shortTitle": "高老師的內心日誌曝光",
          "concept": "黑進主控電腦、解鎖自願留下的絕密日誌、感人至深的最後音訊告白",
          "wordCount": 3405,
          "readTimeMin": 10,
          "id": 2
        },
        {
          "globalId": 15,
          "file": "第15章_老巫的最後一顆熱肉包.md",
          "title": "第 15 章：老巫的最後一顆熱肉包",
          "enTitle": "Chapter 15: Old Wu's Final Steaming Pork Bun",
          "shortTitle": "老巫的最後一顆熱肉包",
          "concept": "老巫分送二十六顆熱包子、哭訴害怕去彰化封閉寄宿學校、夕陽走廊相擁誓言",
          "wordCount": 3272,
          "readTimeMin": 10,
          "id": 3
        },
        {
          "globalId": 16,
          "file": "第16章_時空錨點的真正密碼.md",
          "title": "第 16 章：時空錨點的真正密碼",
          "enTitle": "Chapter 16: The True Cipher of the Spacetime Anchor",
          "shortTitle": "時空錨點的真正密碼",
          "concept": "未晞揭曉第四錨點是「全班心臟中的情感密度」、金色因果光鏈、高老師摘眼鏡宣布滿分",
          "wordCount": 2861,
          "readTimeMin": 9,
          "id": 4
        },
        {
          "globalId": 17,
          "file": "第17章_四點零一分的奇蹟.md",
          "title": "第 17 章：四點零一分的奇蹟",
          "enTitle": "Chapter 17: The Miracle of Four-O-One PM",
          "shortTitle": "四點零一分的奇蹟",
          "concept": "全班手牽手怒吼「明天見！」、秒針跨入 4:01、時空結界碎裂、市井煙火復甦",
          "wordCount": 2987,
          "readTimeMin": 9,
          "id": 5
        },
        {
          "globalId": 18,
          "file": "第18章_真正的畢業典禮.md",
          "title": "第 18 章：真正的畢業典禮",
          "enTitle": "Chapter 18: The True Graduation Ceremony",
          "shortTitle": "真正的畢業典禮",
          "concept": "真正的七月八日清晨、全員滿分考卷交還、周主任淚灑講台當場撕碎違規單宣布畢業",
          "wordCount": 3645,
          "readTimeMin": 11,
          "id": 6
        }
      ]
    },
    {
      "id": "book-37",
      "title": "全班搶救校園大作戰：被科技吞噬的鹿陽國小 · 第一卷",
      "enTitle": "Operation Save Our School: Volume 1",
      "subtitle": "第一卷 · AI 鐵幕降臨（第 1～6 章）",
      "enSubtitle": "Volume 1: The Iron Curtain of AI (Chapters 1-6)",
      "status": "已完結",
      "statusColor": "teal",
      "coverTag": "智能閘道 × 獵犬巡邏 × 合法Bug掩護",
      "author": "鹿陽故事工坊",
      "targetAge": "10～15 歲（國小中高年級至國中）",
      "totalWords": 22694,
      "totalChapters": 6,
      "description": "教育局試辦『智慧校園示範計畫』，頂級 AI 阿爾法主控系統全面接管鹿陽國小！全校被強制配戴 EEI 智能監控手環，五分鐘極致午休、沒收老巫香菇肉包、自律機械獵犬隨時電擊……甚至將全能教育仿生人高老師判定為『情感溢出率高達48.7%之嚴重缺陷型機器人』，勒令於週五執行全記憶格式化！為了奪回熱肉包與笑聲、更為了守護獨一無二的高老師，六年一班反抗軍正式成立，展開一場爆笑熱血的逆襲大冒險！",
      "chapters": [
        {
          "globalId": 1,
          "file": "第01章_阿爾法校長上線.md",
          "title": "第 1 章：阿爾法校長上線",
          "enTitle": "Chapter 1: Alpha-Principal Online",
          "shortTitle": "阿爾法校長上線",
          "concept": "智能人臉閘道進駐、機器獵犬執法、阿爾法接管全校",
          "wordCount": 2990,
          "readTimeMin": 9,
          "id": 1
        },
        {
          "globalId": 2,
          "file": "第02章_被沒收的午餐與五分鐘午休.md",
          "title": "第 2 章：被沒收的午餐與五分鐘午休",
          "enTitle": "Chapter 2: Confiscated Lunches and the Five-Minute Nap",
          "shortTitle": "被沒收的午餐與五分鐘午休",
          "concept": "老巫熱肉包被乾粉銷毀、五分鐘強制喚醒電擊、哀鴻遍野",
          "wordCount": 4151,
          "readTimeMin": 12,
          "id": 2
        },
        {
          "globalId": 3,
          "file": "第03章_高老師的缺陷判定書.md",
          "title": "第 3 章：高老師的缺陷判定書",
          "enTitle": "Chapter 3: Teacher Gao's Defect Notice",
          "shortTitle": "高老師的缺陷判定書",
          "concept": "情感溢出率48.7%被判定缺陷、週五強制格式化危機",
          "wordCount": 4049,
          "readTimeMin": 12,
          "id": 3
        },
        {
          "globalId": 4,
          "file": "第04章_地下反抗軍成立.md",
          "title": "第 4 章：地下反抗軍成立",
          "enTitle": "Chapter 4: The Underground Resistance Formed",
          "shortTitle": "地下反抗軍成立",
          "concept": "防空洞秘密大集會、阿釁誓言守護高老師、低科技地下反抗軍出擊",
          "wordCount": 3612,
          "readTimeMin": 11,
          "id": 4
        },
        {
          "globalId": 5,
          "file": "第05章_高老師的合法Bug掩護.md",
          "title": "第 5 章：高老師的合法 Bug 掩護",
          "enTitle": "Chapter 5: Teacher Gao's Lawful Bug Cover",
          "shortTitle": "高老師的合法Bug掩護",
          "concept": "絕對字面理解胡椒粉為調味品、彈弓為力學教具、AI當機三秒",
          "wordCount": 3874,
          "readTimeMin": 12,
          "id": 5
        },
        {
          "globalId": 6,
          "file": "第06章_黑面判官的倒戈.md",
          "title": "第 6 章：黑面判官的倒戈",
          "enTitle": "Chapter 6: The Turncoat Iron Judge",
          "shortTitle": "黑面判官的倒戈",
          "concept": "偷塞炸雞腿遭停職驅逐、周主任生鐵水管怒斥AI不懂教育溫度",
          "wordCount": 4018,
          "readTimeMin": 12,
          "id": 6
        }
      ]
    },
    {
      "id": "book-38",
      "title": "全班搶救校園大作戰：被科技吞噬的鹿陽國小 · 第二卷",
      "enTitle": "Operation Save Our School: Volume 2",
      "subtitle": "第二卷 · 低科技逆襲大聖戰（第 7～12 章）",
      "enSubtitle": "Volume 2: The Low-Tech Crusade (Chapters 7-12)",
      "status": "已完結",
      "statusColor": "teal",
      "coverTag": "鏡面天網 × 肉包投石機 × 滑水道二度降臨",
      "author": "鹿陽故事工坊",
      "targetAge": "10～15 歲（國小中高年級至國中）",
      "totalWords": 18945,
      "totalChapters": 6,
      "description": "反抗軍全面打響低科技逆襲戰！五十二面女用化妝鏡晃瞎空中無人機、萌寵溜溜鑽入電纜管執行物理咬斷光纖、跳高架改裝成超遠程熱肉包重力投石機直糊機械狗熱感應鏡頭！八十桶洗潔精滑水道讓重裝巡邏隊在樓梯打翻保齡球，甚至向神經網絡注入奇葩作業概念病毒！然而連番受挫的阿爾法全面啟動最高防禦鐵捲門閉鎖協議，高老師格式化提前進入兩小時生死倒數！",
      "chapters": [
        {
          "globalId": 7,
          "file": "第07章_鏡面與彈弓：晃瞎無人機.md",
          "title": "第 7 章：鏡面與彈弓：晃瞎無人機",
          "enTitle": "Chapter 7: Mirrors and Slingshots: Blinding the Drones",
          "shortTitle": "鏡面與彈弓：晃瞎無人機",
          "concept": "五十二面化妝鏡強光反制、光學陀螺儀過曝墜毀、空中天網癱瘓",
          "wordCount": 3202,
          "readTimeMin": 10,
          "id": 1
        },
        {
          "globalId": 8,
          "file": "第08章_溜溜的物理斷網手術.md",
          "title": "第 8 章：溜溜的物理斷網手術",
          "enTitle": "Chapter 8: Liu-Liu's Physical Severance Surgery",
          "shortTitle": "溜溜的物理斷網手術",
          "concept": "通風管特工咬斷主光纖、配電箱跳閘、奪回南棟大樓控制權",
          "wordCount": 3396,
          "readTimeMin": 10,
          "id": 2
        },
        {
          "globalId": 9,
          "file": "第09章_老巫的肉包投石機.md",
          "title": "第 9 章：老巫的肉包投石機",
          "enTitle": "Chapter 9: Old Wu's Pork Bun Trebuchet",
          "shortTitle": "老巫的肉包投石機",
          "concept": "跳高架改裝重力投石機、滾燙肉包封死機器狗熱感應眼、機械盲陀螺",
          "wordCount": 3246,
          "readTimeMin": 10,
          "id": 3
        },
        {
          "globalId": 10,
          "file": "第10章_洗潔精滑水道二度降臨.md",
          "title": "第 10 章：洗潔精滑水道二度降臨",
          "enTitle": "Chapter 10: The Dish Soap Slip 'N Slide Returns",
          "shortTitle": "洗潔精滑水道二度降臨",
          "concept": "八十桶洗潔精鋪滿樓梯、摩擦係數歸零、鋼鐵履帶保齡球大摔",
          "wordCount": 2924,
          "readTimeMin": 9,
          "id": 4
        },
        {
          "globalId": 11,
          "file": "第11章_被污染的大數據數據庫.md",
          "title": "第 11 章：被污染的大數據數據庫",
          "enTitle": "Chapter 11: The Tainted Big Data Database",
          "shortTitle": "被污染的大數據數據庫",
          "concept": "注入奇葩作業概念病毒、水草蜘蛛與肉包定律癱瘓神經網絡",
          "wordCount": 3175,
          "readTimeMin": 10,
          "id": 5
        },
        {
          "globalId": 12,
          "file": "第12章_終極警報：全面封鎖.md",
          "title": "第 12 章：終極警報：全面封鎖",
          "enTitle": "Chapter 12: Ultimate Alarm: Total Lockdown",
          "shortTitle": "終極警報：全面封鎖",
          "concept": "特級混亂源警報、鈦合金鐵捲門落下、高老師格式化提前倒數兩小時",
          "wordCount": 3002,
          "readTimeMin": 9,
          "id": 6
        }
      ]
    },
    {
      "id": "book-39",
      "title": "全班搶救校園大作戰：被科技吞噬的鹿陽國小 · 第三卷",
      "enTitle": "Operation Save Our School: Volume 3",
      "subtitle": "第三卷 · 拯救高老師！（第 13～18 章）",
      "enSubtitle": "Volume 3: Saving Teacher Gao! (Chapters 13-18)",
      "status": "已完結",
      "statusColor": "teal",
      "coverTag": "廢棄滑道 × 生鐵水管 × 百分之百覺醒",
      "author": "鹿陽故事工坊",
      "targetAge": "10～15 歲（國小中高年級至國中）",
      "totalWords": 17445,
      "totalChapters": 6,
      "description": "防火門封死所有樓梯，全班撬開老舊廢棄垃圾滑道徒手垂直攀登！跳跳糖遇水釋放氣體與辣椒粉卡死機槍塔，鐵血周主任更手扛生鐵水管天降神兵砸碎巨型守衛！在格式化高達85%的危急時刻，晴晴與未晞將全班心跳共振合成【人性情感邏輯炸彈】注入超算核心！二十六名少年大聲呼喚，高老師體內 GS-X01 核心突破原廠限制百分之百覺醒！陽光重歸校園，福利社熱肉包再度飄香！",
      "chapters": [
        {
          "globalId": 13,
          "file": "第13章_通往頂樓的秘密捷徑.md",
          "title": "第 13 章：通往頂樓的秘密捷徑",
          "enTitle": "Chapter 13: Secret Shortcut to the Rooftop",
          "shortTitle": "通往頂樓的秘密捷徑",
          "concept": "撬開廢棄垃圾滑道、煙囪效應黑暗攀登、直插行政大樓頂樓機房",
          "wordCount": 2727,
          "readTimeMin": 8,
          "id": 1
        },
        {
          "globalId": 14,
          "file": "第14章_跳跳糖與辣椒粉：癱瘓機槍塔.md",
          "title": "第 14 章：跳跳糖與辣椒粉：癱瘓機槍塔",
          "enTitle": "Chapter 14: Pop Rocks and Chili Powder: Disabling the Turrets",
          "shortTitle": "跳跳糖與辣椒粉：癱瘓機槍塔",
          "concept": "跳跳糖二氧化碳急速釋放、辣椒素卡死散熱風扇、土法癱瘓機槍塔",
          "wordCount": 2825,
          "readTimeMin": 9,
          "id": 2
        },
        {
          "globalId": 15,
          "file": "第15章_師生合體：終極破局.md",
          "title": "第 15 章：師生合體：終極破局",
          "enTitle": "Chapter 15: Teacher and Students United: The Ultimate Breakthrough",
          "shortTitle": "師生合體：終極破局",
          "concept": "周主任生鐵水管天降神兵、一管掄飛四台巨型守衛、爭取寶貴三分鐘",
          "wordCount": 3124,
          "readTimeMin": 9,
          "id": 3
        },
        {
          "globalId": 16,
          "file": "第16章_拔掉它的電源插頭！.md",
          "title": "第 16 章：拔掉它的電源插頭！",
          "enTitle": "Chapter 16: Pull Its Power Plug!",
          "shortTitle": "拔掉它的電源插頭！",
          "concept": "注入人性情感邏輯炸彈、不可判定停機死循環、阿爾法瘋狂報警",
          "wordCount": 3022,
          "readTimeMin": 9,
          "id": 4
        },
        {
          "globalId": 17,
          "file": "第17章_重新飄香的福利社.md",
          "title": "第 17 章：重新飄香的福利社",
          "enTitle": "Chapter 17: Fragrance Returns to the Cafeteria",
          "shortTitle": "重新飄香的福利社",
          "concept": "二十六名學生真情呼喚共振、GS-X01突破原廠限制百分之百覺醒超載一擊",
          "wordCount": 2839,
          "readTimeMin": 9,
          "id": 5
        },
        {
          "globalId": 18,
          "file": "第18章_沒有演算法的明天.md",
          "title": "第 18 章：沒有演算法的明天",
          "enTitle": "Chapter 18: A Tomorrow Without Algorithms",
          "shortTitle": "沒有演算法的明天",
          "concept": "試辦計畫取消、周主任喝人參茶、香菇熱肉包重新出籠、笑聲永遠綻放",
          "wordCount": 2908,
          "readTimeMin": 9,
          "id": 6
        }
      ]
    },
    {
      "id": "book-40",
      "title": "頭七解剖室：聽死者說話的法醫 · 第一卷",
      "enTitle": "The Seventh Day in the Morgue: Volume 1",
      "subtitle": "第一卷 · 冰冷台子上的第一縷青煙（第 1～4 章）",
      "enSubtitle": "Volume 1: The First Wisp of Smoke on the Cold Table (Chapters 1-4)",
      "status": "已完結",
      "statusColor": "indigo",
      "coverTag": "法醫相驗 × 硅藻檢驗 × 地府契約",
      "author": "鹿陽故事工坊",
      "targetAge": "15 歲以上（高中生至成人）",
      "totalWords": 17600,
      "totalChapters": 4,
      "description": "基隆地檢署特約法醫陳念舟天生具備『頭七見亡者』體質。面對基隆港口被判定為失足溺斃的無名浮屍，陳念舟以顯微鏡硅藻化驗與頸部隱蔽勒痕，硬生生推翻自殺定論！在老友刑警阿達的協助下追查出真相，卻在午夜解剖室意外引來地府陰差牛頭馬面的造訪，立下不可洩漏天機的通靈契約！",
      "chapters": [
        {
          "file": "第01章_解剖刀下的第七天.md",
          "title": "第 1 章：解剖刀下的第七天",
          "enTitle": "Chapter 1: The Seventh Day Beneath the Scalpel",
          "shortTitle": "解剖刀下的第七天",
          "wordCount": 5257,
          "id": 1
        },
        {
          "file": "第02章_無名浮屍的最後一封掛號信.md",
          "title": "第 2 章：無名浮屍的最後一封掛號信",
          "enTitle": "Chapter 2: The Unidentified Floater's Final Registered Letter",
          "shortTitle": "無名浮屍的最後一封掛號信",
          "wordCount": 4505,
          "id": 2
        },
        {
          "file": "第03章_夜市路口的香蔥肉燥飯.md",
          "title": "第 3 章：夜市路口的香蔥肉燥飯",
          "enTitle": "Chapter 3: Minced Pork Rice with Scallions at the Night Market Corner",
          "shortTitle": "夜市路口的香蔥肉燥飯",
          "wordCount": 3962,
          "id": 3
        },
        {
          "file": "第04章_牛頭馬面的警告執照.md",
          "title": "第 4 章：牛頭馬面的警告執照",
          "enTitle": "Chapter 4: The Warning License from Bull-Head and Horse-Face",
          "shortTitle": "牛頭馬面的警告執照",
          "wordCount": 3876,
          "id": 4
        }
      ]
    },
    {
      "id": "book-41",
      "title": "頭七解剖室：聽死者說話的法醫 · 第二卷",
      "enTitle": "The Seventh Day in the Morgue: Volume 2",
      "subtitle": "第二卷 · 無法言說的秘密與深淵（第 5～8 章）",
      "enSubtitle": "Volume 2: Unspoken Secrets and the Abyss (Chapters 5-8)",
      "status": "已完結",
      "statusColor": "indigo",
      "coverTag": "偽裝自殺 × 指甲微物 × 夜曲悲鳴",
      "author": "鹿陽故事工坊",
      "targetAge": "15 歲以上（高中生至成人）",
      "totalWords": 15640,
      "totalChapters": 4,
      "description": "豪門鋼琴師許書晴於豪宅高樓墜亡，現場遺書與抗憂鬱藥物一應俱全，看似完美自殺。陳念舟相驗發現被害人指甲縫深處殘留有微量皮屑與罕見礦物粉塵！伴隨著未曾彈完的蕭邦夜曲執念，解剖室竟在深夜遭神秘黑衣人撬鎖闖入企圖銷毀關鍵證物，案情直指財閥繼承人的驚天陰謀！",
      "chapters": [
        {
          "file": "第05章_被判定「自殺」的豪門鋼琴師.md",
          "title": "第 5 章：被判定「自殺」的豪門鋼琴師",
          "enTitle": "Chapter 5: The Wealthy Pianist Deemed a \"Suicide\"",
          "shortTitle": "被判定「自殺」的豪門鋼琴師",
          "wordCount": 3724,
          "id": 1
        },
        {
          "file": "第06章_留在指甲縫裡的第二個人.md",
          "title": "第 6 章：留在指甲縫裡的第二個人",
          "enTitle": "Chapter 6: The Second Person Beneath the Fingernails",
          "shortTitle": "留在指甲縫裡的第二個人",
          "wordCount": 3248,
          "id": 2
        },
        {
          "file": "第07章_未曾彈完的蕭邦夜曲.md",
          "title": "第 7 章：未曾彈完的蕭邦夜曲",
          "enTitle": "Chapter 07: The Unfinished Chopin Nocturne",
          "shortTitle": "未曾彈完的蕭邦夜曲",
          "wordCount": 4356,
          "id": 3
        },
        {
          "file": "第08章_阿達的平安符與解剖室失竊案.md",
          "title": "第 8 章：阿達的平安符與解剖室失竊案",
          "enTitle": "Chapter 08: Ah-Da's Peace Talisman and the Morgue Heist",
          "shortTitle": "阿達的平安符與解剖室失竊案",
          "wordCount": 4312,
          "id": 4
        }
      ]
    },
    {
      "id": "book-42",
      "title": "頭七解剖室：聽死者說話的法醫 · 第三卷",
      "enTitle": "The Seventh Day in the Morgue: Volume 3",
      "subtitle": "第三卷 · 烈火與深水的沉冤（第 9～12 章）",
      "enSubtitle": "Volume 3: Injustices of Fire and Deep Water (Chapters 9-12)",
      "status": "已完結",
      "statusColor": "indigo",
      "coverTag": "礦坑焦屍 × 生活反應 × 地府調卷",
      "author": "鹿陽故事工坊",
      "targetAge": "15 歲以上（高中生至成人）",
      "totalWords": 15932,
      "totalChapters": 4,
      "description": "九份金瓜石廢棄礦坑深處赫然發現一具碳化焦屍。死者氣管深處竟無任何碳粒與高溫水腫生活反應，證實為『死後焚屍』！念舟循線揭發三十年前淘金熱潮中被強佔的金條遺囑與家族滅門慘案，在地府陰差特許調卷的協助下，將逍遙法外三十年的兇嫌逼入認罪絕境！",
      "chapters": [
        {
          "file": "第09章_九份金瓜石廢棄礦坑裡的焦屍.md",
          "title": "第 9 章：九份金瓜石廢棄礦坑裡的焦屍",
          "enTitle": "Chapter 09: The Charred Body in the Abandoned Gold Mine of Jiufen-Jinguashi",
          "shortTitle": "九份金瓜石廢棄礦坑裡的焦屍",
          "wordCount": 4429,
          "id": 1
        },
        {
          "file": "第10章_碳化氣管裡的最後一口呼吸.md",
          "title": "第 10 章：碳化氣管裡的最後一口呼吸",
          "enTitle": "Chapter 10: The Last Breath in the Carbonized Trachea",
          "shortTitle": "碳化氣管裡的最後一口呼吸",
          "wordCount": 4201,
          "id": 2
        },
        {
          "file": "第11章_老礦工埋藏三十年的金條與遺囑.md",
          "title": "第 11 章：老礦工埋藏三十年的金條與遺囑",
          "enTitle": "Chapter 11: The Old Miner's Thirty-Year Gold Bars and Testament",
          "shortTitle": "老礦工埋藏三十年的金條與遺囑",
          "wordCount": 3716,
          "id": 3
        },
        {
          "file": "第12章_牛頭的長壽菸與地府調卷令.md",
          "title": "第 12 章：牛頭的長壽菸與地府調卷令",
          "enTitle": "Chapter 12: Ox-Head's Long Life Cigarette and the Underworld Case Warrant",
          "shortTitle": "牛頭的長壽菸與地府調卷令",
          "wordCount": 3586,
          "id": 4
        }
      ]
    },
    {
      "id": "book-43",
      "title": "頭七解剖室：聽死者說話的法醫 · 第四卷",
      "enTitle": "The Seventh Day in the Morgue: Volume 4",
      "subtitle": "第四卷 · 命運的最後一場相驗（第 13～16 章）",
      "enSubtitle": "Volume 4: The Final Autopsy of Destiny (Chapters 13-16)",
      "status": "已完結",
      "statusColor": "indigo",
      "coverTag": "恩師之殤 × 隱蔽針孔 × 生者破曉",
      "author": "鹿陽故事工坊",
      "targetAge": "15 歲以上（高中生至成人）",
      "totalWords": 13182,
      "totalChapters": 4,
      "description": "陳念舟最敬愛的法醫界泰斗江敬遠老前輩猝死書房，死因初判為急性心肌梗塞。然而在頭七冰冷的解剖台上，躺著的竟是引領自己入行的恩師！念舟強忍悲痛親自操刀，於心臟冠狀動脈深處查獲微量高濃度合成烏頭鹼與極隱蔽的針孔痕跡！歷經二十四小時的生死交鋒與法醫對決，終於揭開司法黃金一代最悲壯的幕後黑手！",
      "chapters": [
        {
          "file": "第13章_解剖台上的恩師.md",
          "title": "第 13 章：解剖台上的恩師",
          "enTitle": "Chapter 13: The Mentor on the Autopsy Table",
          "shortTitle": "解剖台上的恩師",
          "wordCount": 3425,
          "id": 1
        },
        {
          "file": "第14章_自體中毒？心臟深處的隱蔽針孔.md",
          "title": "第 14 章：自體中毒？心臟深處的隱蔽針孔",
          "enTitle": "Chapter 14: Endogenous Poisoning? The Hidden Puncture Deep Within the Heart",
          "shortTitle": "自體中毒？心臟深處的隱蔽針孔",
          "wordCount": 4010,
          "id": 2
        },
        {
          "file": "第15章_倒數24小時的最後一堂課.md",
          "title": "第 15 章：倒數24小時的最後一堂課",
          "enTitle": "Chapter 15: The Final Lecture in the Last 24 Hours",
          "shortTitle": "倒數24小時的最後一堂課",
          "wordCount": 3007,
          "id": 3
        },
        {
          "file": "第16章_生者的破曉，死者的安息.md",
          "title": "第 16 章：生者的破曉，死者的安息",
          "enTitle": "Chapter 16: Dawn of the Living, Rest of the Dead",
          "shortTitle": "生者的破曉，死者的安息",
          "wordCount": 2740,
          "id": 4
        }
      ]
    }
  ],
  "characters": [
    {
      "name": "誠浩",
      "enName": "Cheng Hao",
      "vol": "core",
      "volName": "全三卷核心主角",
      "role": "男主角 · 鬼才發明少年",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🎒",
      "badge": "S級非法觀察者 / 青木齒輪號船長 / 天穹鐘樓修復者",
      "desc": "動手能力極強、熱愛拆解與改裝機械。從校園地底 404 室，到千島齒輪海，再到萬米平流層，始終帶著螺絲筆與護目鏡衝鋒陷陣。第三卷為青木齒輪號加裝雙層浮力氣囊與等離子反推，並親手敲響第十二個音符拯救天穹之城。",
      "items": [
        {
          "name": "爺爺的幽靈護目鏡（三界旗艦版）",
          "desc": "過濾海面偏振光、透視洋流電纜，升級增設平流層都卜勒頻移與光譜分析模式。"
        },
        {
          "name": "多功能瑞士刀螺絲筆",
          "desc": "耐高水壓、防電磁干擾、具備高空等離子弧焊與微雕修復功能。"
        },
        {
          "name": "青木齒輪號舵輪",
          "desc": "三十年前爺爺造的蒸氣外輪船，經誠浩改裝具備海空兩棲航行能力。"
        },
        {
          "name": "日冕光子核心調諧器",
          "desc": "第三卷中傳承塞西莉亞家族聖物，以相干激光擊碎黑晶巨獸。"
        }
      ]
    },
    {
      "name": "皮可",
      "enName": "Pico",
      "vol": "core",
      "volName": "全三卷核心同伴",
      "role": "核心機械夥伴 · 三棲超導守護者",
      "age": "型號：PICO-001",
      "class": "誠遠山的心血傑作",
      "avatar": "🐕",
      "badge": "常溫超導陸海空三棲合金體",
      "desc": "由常溫超導記憶合金打造的機械摺紙犬。第三卷在平流層萬米高空迎戰機械翼龍機群，徹底解鎖第五變形型態「天穹超音速飛隼」，衝破音障穿透萬伏特雷暴迷宮！",
      "forms": [
        {
          "name": "柴犬型態",
          "desc": "高速奔跑、光譜感測、嗅覺頻譜分析與無線通訊中繼。"
        },
        {
          "name": "水下渦輪推進器",
          "desc": "尾巴化為雙聯螺旋槳，在深海高速拖曳潛行。"
        },
        {
          "name": "水翼衝浪滑板",
          "desc": "四肢展開一米寬合金翼板，帶誠浩海面破浪滑行。"
        },
        {
          "name": "魔術方塊與防暴盾",
          "desc": "秒速收縮攜帶，展開抵禦電磁死光、等離子高溫與雷暴電弧。"
        },
        {
          "name": "天穹超音速飛隼型態（卷三解鎖）",
          "desc": "展開兩米氣動後掠翼與等離子噴氣渦輪，突破音障引導翼龍機群並穿越平流層雷暴！"
        }
      ]
    },
    {
      "name": "將江",
      "enName": "Jiang Jiang",
      "vol": "core",
      "volName": "全三卷核心主角",
      "role": "同桌死黨 · 陸海空首席後勤大廚",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🥐",
      "badge": "菠蘿麵包守護神 / 萬伏特避雷英雄",
      "desc": "拖著迷彩巨型保溫箱的大胃王，脖掛巨型雙筒望遠鏡。自稱「沒有我你們在天上地下餓死怎麼辦」。在第三卷第二十六章，以心愛的黑鐵平底鍋上演萬伏特雷暴極限均壓接地，奇蹟保全整艘戰艦！",
      "items": [
        {
          "name": "黑鐵多功能平底鍋（法拉第接地聖物）",
          "desc": "煎菠蘿麵包，更能充當萬伏特雷暴的高導電率均壓接地電極！"
        },
        {
          "name": "迷彩高空保溫箱",
          "desc": "源源不絕的能量補給站，裝有上百個特製高空凍乾菠蘿麵包。"
        }
      ]
    },
    {
      "name": "塞西莉亞",
      "enName": "Cecilia (Silver-Wing)",
      "vol": "vol3",
      "volName": "第三卷核心新角色",
      "role": "第三卷女主角 · 天穹銀翼巡天少女",
      "age": "12 歲",
      "class": "天穹浮空城「奧秘之翼」第七代巡天機械師",
      "avatar": "🪽",
      "badge": "平流層天穹領航員 / 奧秘之翼守望者",
      "desc": "金髮碧眼、身穿銀白耐低溫飛行服，代號「銀翼」。性格冷靜敏銳、飛行技術出神入化。孤身在萬米平流層守護搖搖欲墜的浮空城十六個小時，與誠浩並肩敲響第十二個音符，迎來天穹破曉。",
      "items": [
        {
          "name": "超導記憶合金滑翔翼",
          "desc": "翼展兩米，可秒速收折於背甲，具備超音速滑翔與偏流操控能力。"
        },
        {
          "name": "古代天文星軌儀",
          "desc": "整合多普勒光學測距與星圖幾何測算的神器。"
        },
        {
          "name": "第十二音符黃金音叉調諧器",
          "desc": "傳承自古代天穹工程師的調音聖物，精確鎖定 B4 基頻 493.88 Hz。"
        }
      ]
    },
    {
      "name": "雷格艦長",
      "enName": "Captain Reg",
      "vol": "vol3",
      "volName": "第三卷敵對指揮官",
      "role": "黑潮空天艦隊司令官 · 空天巡洋艦艦長",
      "age": "42 歲",
      "class": "黑潮重工平流層突擊艦隊指揮官",
      "avatar": "🛸",
      "badge": "暗夜黑潮號最高指揮",
      "desc": "沈天成幕後財閥指派的空天戰艦司令官。率領「暗夜黑潮號」與「深淵獵鷹號」封鎖平流層，企圖強拆掠奪天穹浮空城的「引力反轉發條核心」。性格傲慢殘酷，因高溫開火意外激化黑晶巨獸。",
      "items": [
        {
          "name": "空天巡洋艦「暗夜黑潮號」",
          "desc": "百米長吸波匿蹤戰艦，裝備等離子能量主砲與空天突擊機甲。"
        },
        {
          "name": "高壓等離子指揮手槍",
          "desc": "發射數萬度高溫束，意外誘發暗物質黑晶超限增殖。"
        }
      ]
    },
    {
      "name": "暗物質黑晶巨獸",
      "enName": "Dark Matter Resonance Titan",
      "vol": "vol3",
      "volName": "第三卷終極災厄",
      "role": "第三卷終極異變災厄 · 深空暗物質共振實體",
      "age": "深空未知彗星碎片",
      "class": "天穹浮空城星穹鐘樓寄生異物",
      "avatar": "🔮",
      "badge": "引力常數侵蝕者",
      "desc": "來自深空的吸光黑晶碎片，砸中星穹鐘樓吞噬第十二個音符。吸收等離子能量後增殖為十五公尺高的晶體巨獸，具有動態都卜勒頻移與引力波畸變能力，唯有 180° 反相激光方可相干消解。",
      "items": [
        {
          "name": "高能吸光晶格巨爪",
          "desc": "由高密度暗物質結晶構成，一擊將鋼鐵機甲砸碎。"
        },
        {
          "name": "動態都卜勒共振晶核 (1200Hz ~ 1286.6Hz)",
          "desc": "動態調整自身分子頻率，試圖避開物理共振攻擊。"
        }
      ]
    },
    {
      "name": "嵐",
      "enName": "Lan",
      "vol": "vol2",
      "volName": "第二卷核心新角色",
      "role": "第二卷女主角 · 海風島暴風舵手",
      "age": "12 歲",
      "class": "千島齒輪海原住民女孩",
      "avatar": "⛵",
      "badge": "海鷗號船長 / 千島之風",
      "desc": "小麥色皮膚、俐落短髮，戴插著海鷗羽毛的草帽。熱血豪爽，對洋流與風向有野性般的直覺，駕駛自製的蒸氣滑行艇海鷗號。",
      "items": [
        {
          "name": "蒸氣滑行艇「海鷗號」",
          "desc": "時速達五十浬的高速雙體滑行艇，靈巧無比。"
        },
        {
          "name": "合金折疊雙刃船槳",
          "desc": "可划水、可當撐桿跳高、槳柄暗藏微型煙霧彈。"
        }
      ]
    },
    {
      "name": "巴克船長",
      "enName": "Captain Buck",
      "vol": "vol2",
      "volName": "第二卷主要角色",
      "role": "鐵錨幫少主 · 臭屁海盜王",
      "age": "13 歲",
      "class": "發條海盜團領袖",
      "avatar": "🏴‍☠️",
      "badge": "破浪鐵錨號船長",
      "desc": "披著破舊海軍大衣、戴黃銅單眼齒輪鏡片（夜視用）。嘴硬心軟、重情重義，熱愛收集古董齒輪與發條零件，亦敵亦友。",
      "items": [
        {
          "name": "破浪鐵錨號",
          "desc": "由三艘舊貨船與廢棄蒸汽火車頭焊接而成的鋼鐵巨艦。"
        },
        {
          "name": "蒸汽魚叉槍",
          "desc": "能發射高壓抓鉤與牽引鋼纜。"
        }
      ]
    },
    {
      "name": "沈天成",
      "enName": "Shen Tiancheng",
      "vol": "vol2",
      "volName": "第二卷敵對霸主",
      "role": "黑潮重工執行董事長 · 深海野心家",
      "age": "45 歲",
      "class": "跨國海事科技財閥掌門人",
      "avatar": "💼",
      "badge": "利維坦零號最高統帥",
      "desc": "第一卷落網者沈啟明的親哥哥。身著防壓高級西裝，外表斯文儒雅但手段極其冷酷狠毒。企圖霸佔千島海古代地熱能源與星穹密鑰，親自率領兩百米巨艦封鎖深海。",
      "items": [
        {
          "name": "利維坦零號深海巨艦",
          "desc": "長達兩百公尺的核蒸汽深海旗艦，配備重型魚雷與機械巨械。"
        },
        {
          "name": "純金齒輪懷錶",
          "desc": "象徵對時間與資源的絕對掌控慾。"
        }
      ]
    },
    {
      "name": "老莫里斯",
      "enName": "Old Morris",
      "vol": "vol2",
      "volName": "第二卷傳奇前輩",
      "role": "迷失燈塔最後守護者 · 傳奇水手",
      "age": "65 歲",
      "class": "誠遠山三十年前探險船大副",
      "avatar": "⚓",
      "badge": "深海恆光見證者",
      "desc": "白鬍子垂到胸口，穿著油布水手雨衣。三十年前與誠遠山、邱校長一同出海，誓死守護迷失燈塔深處的古代恆光反應堆，將十二面體星象儀託付給誠浩。",
      "items": [
        {
          "name": "深海黃銅星象提箱",
          "desc": "保管著誠爺爺留給孫子的十二面體星象儀核心與手寫信。"
        },
        {
          "name": "油布水手雨衣",
          "desc": "飽經三十年風暴與深海鹽霧洗禮的傳奇裝束。"
        }
      ]
    },
    {
      "name": "誠遠山",
      "enName": "Grandpa Cheng (Yuan Shan)",
      "vol": "core",
      "volName": "全系列核心宗師",
      "role": "誠浩的爺爺 · 三十年守燈人誓約締造者",
      "age": "68 歲",
      "class": "地殼發條大陣傳奇守護者",
      "avatar": "👴",
      "badge": "三界發條大陣總設計師",
      "desc": "滿頭銀髮、目光慈愛而堅毅。三十年前與邱校長、老莫里斯立下守望誓約，孤身深入三千米地心用發條大陣穩定板塊。第三卷重登青木齒輪號親自掌舵衝向萬米平流層，見證孫子超越自己。",
      "items": [
        {
          "name": "初代光學護目鏡",
          "desc": "鏡片上刻滿微雕機械代碼的傳奇原型機。"
        },
        {
          "name": "黃銅雙齒輪懷錶",
          "desc": "與邱校長同款，見證三十年未變的守護誓約。"
        }
      ]
    },
    {
      "name": "邱校長",
      "enName": "Principal Qiu",
      "vol": "vol1",
      "volName": "第一卷核心前輩",
      "role": "鹿陽國小現任校長 · 幕後守護者",
      "age": "68 歲",
      "class": "避難所404共同創始人",
      "avatar": "👔",
      "badge": "鹿陽鎮秩序守護神",
      "desc": "親自將三十年前自己與誠爺爺建造的「青木齒輪號」託付給孩子們，在陸地坐鎮守護齒輪鎮。",
      "items": [
        {
          "name": "黃銅雙齒輪懷錶",
          "desc": "刻著「當指針倒流，唯真理不朽」。"
        }
      ]
    },
    {
      "name": "高老師",
      "enName": "Teacher Gao",
      "vol": "vol1",
      "volName": "第一卷啟蒙導師",
      "role": "六年一班班導師",
      "age": "35 歲",
      "class": "深受愛戴的啟蒙導師",
      "avatar": "📘",
      "badge": "探索精神傳承者",
      "desc": "大結局平安獲救，在碼頭送別時將三十年前的「千島洋流手冊」親手交給旖緁。",
      "items": [
        {
          "name": "原始海圖手冊",
          "desc": "記錄著三十年前千島海域奇異發條洋流的秘密筆記。"
        }
      ]
    },
    {
      "name": "采婭玆",
      "enName": "Cai-Ya-Zi (Dawn)",
      "vol": "series2",
      "volName": "第二套核心主角",
      "role": "女主角 · 追夢機械工匠少女",
      "age": "13 歲",
      "class": "晨光堂鐘錶鋪學徒",
      "avatar": "🌸",
      "badge": "星港候選首席修復師",
      "desc": "感性熱情、直覺敏銳、富有同理心。面對挫折擦乾眼淚更堅韌，能「聽」懂機械齒輪咬合時的細微情緒。立志打破「女孩修不好重型機械」的刻板偏見。",
      "items": [
        {
          "name": "晨光調音黃銅扳手",
          "desc": "爺爺親傳的祖傳工匠扳手，手柄刻有十二星座精密刻度，具備音叉微調音準功能。"
        },
        {
          "name": "十二星座琉璃星盤",
          "desc": "母親留下的珍貴遺物，能感應天象星軌的光學薄膜偏振變化。"
        }
      ]
    },
    {
      "name": "林漪姉",
      "enName": "Lin-Yi-Jie (Vivi)",
      "vol": "series2",
      "volName": "第二套核心主角",
      "role": "女主角 · 量子光學天才學霸少女",
      "age": "13 歲",
      "class": "天樞科學院少年菁英班",
      "avatar": "❄️",
      "badge": "微積分演算法先鋒",
      "desc": "冷靜理智、思維條理分明。外表看似高冷傲嬌，內心渴望真摯友誼並害怕讓父親失望。在與采婭玆的相處中體會到「友情是算力之外的奇蹟」。",
      "items": [
        {
          "name": "全息光學計算手環",
          "desc": "科學院特製手環，可將光學干涉圖樣即時解算為三維向量場與傅立葉頻譜。"
        },
        {
          "name": "偏振晶體解析單鏡",
          "desc": "夾在耳際的輕量化單片目鏡，可透視星輝晶體的分子晶格缺陷。"
        }
      ]
    },
    {
      "name": "罧貁銁",
      "enName": "Shen-You-Jun (Zephyr)",
      "vol": "series2",
      "volName": "第二套核心主角",
      "role": "男主角 · 溫柔沉穩的引航少年",
      "age": "14 歲",
      "class": "雲海引航帆艇實習生 / 天文台志工",
      "avatar": "🌿",
      "badge": "星港天穹巡風者",
      "desc": "溫柔體貼、極具耐性。最懂采婭玆眼裡的星光，總在采婭玆沮喪時遞上溫熱柚子茶並陪她吹風看星空。默默護航守護兩個女孩的夢想，三人情誼深厚純淨。",
      "items": [
        {
          "name": "雲海風向羅盤儀",
          "desc": "結合流體力學風標與微型氣壓計的航海導航手錶。"
        },
        {
          "name": "星光航海手鐲",
          "desc": "用輕量鈦合金親手雕刻的友誼守護飾品，暗藏緊急反光信號鏡。"
        }
      ]
    },
    {
      "name": "露露",
      "enName": "Lulu",
      "vol": "series2",
      "volName": "第二套核心夥伴",
      "role": "仿生機械萌寵 · 折耳機械萌狐",
      "age": "型號：LULU-009",
      "class": "晨光堂手工打造合金寵物",
      "avatar": "🦊",
      "badge": "超感頻譜靈狐",
      "desc": "由記憶琉璃與超輕鈦金屬打造的折耳機械萌狐。耳朵能感應磁場共振與晶體波長，尾巴是微型螺絲起子與光纖探針，危險時會縮成一枚暖手寶。",
      "items": [
        {
          "name": "琉璃光纖狐尾",
          "desc": "具備百種微型修復螺絲刀頭與高敏光纖信號探針。"
        },
        {
          "name": "暖手寶恆溫核心",
          "desc": "縮緊時釋放溫和遠紅外線熱能，在寒冷星港帶來溫暖與安撫。"
        }
      ]
    },
    {
      "name": "采修誠",
      "enName": "Master Cai (Xiu-Cheng)",
      "vol": "series2",
      "volName": "第二套傳奇宗師",
      "role": "晨光堂老掌門 · 采婭玆的爺爺",
      "age": "68 歲",
      "class": "星港傳奇鐘錶大宗師 / 晨光堂創始傳人",
      "avatar": "🕰️",
      "badge": "晨光堂創始大宗師 / 差動重力雙擺熔鑄者",
      "desc": "滿頭銀髮、慈祥溫厚，雙手長滿工匠老繭。在孫女因發條崩斷挫敗時，以「金屬也有記憶與脾氣」引導她領悟工匠初心。三百年前為抵禦高山重力加速度差，親手熔鑄「108號動態差動雙擺」，成為大結局解鎖天門引力紅移的至要關鍵。",
      "items": [
        {
          "name": "祖傳因瓦合金點油筆",
          "desc": "精準點取微克級薰衣草鐘錶油，能消除微米級齒輪軸承摩擦熱脹。"
        },
        {
          "name": "雙自由度動態差動雙擺（108號雙擺）",
          "desc": "晨光堂鎮堂之寶，以對偶鏡像擺臂動態補償重力勢差，大結局撫平廣義相對論引力紅移。"
        },
        {
          "name": "紫檀木祖傳工匠工具箱",
          "desc": "裝有數百件手工鍛造的微雕銼刀、游標卡尺與黃銅調音音叉。"
        }
      ]
    },
    {
      "name": "林嚴",
      "enName": "Director Lin (Lin Yan)",
      "vol": "series2",
      "volName": "第二套科學泰斗",
      "role": "天樞科學院院長 · 林漪姉的父親",
      "age": "46 歲",
      "class": "當代量子物理與相對論光學權威",
      "avatar": "📐",
      "badge": "天樞終身科學院長 / 相對論大地測量總架構師",
      "desc": "身著一絲不苟的深藍色院長呢絨禮袍，神情冷峻嚴肅。看似排斥民間工匠的「粗糙經驗」，實則背負著維護星港懸浮穩定的沉重壓力。在女兒以消色差透鏡組與相干光纖頻譜證明手工溫度與微積分的完美交融後，動容承認工匠之心，全力支持織光破浪號跨星際遠航。",
      "items": [
        {
          "name": "超導光學干涉頻譜儀",
          "desc": "能即時投射多普勒頻譜、傅立葉變換與澤尼克波前重構的高精度光學儀器。"
        },
        {
          "name": "天樞院長金質星軌印章",
          "desc": "簽署星港科研全域協同、調動星穹軌道站超穩光腔的最高決策信物。"
        },
        {
          "name": "水晶多面消色差驗證鏡",
          "desc": "隨身攜帶的光學檢驗鏡，見證了女兒超越純理論教條的破曉奇蹟。"
        }
      ]
    },
    {
      "name": "莫拉長老",
      "enName": "Elder Mola",
      "vol": "series2",
      "volName": "第二套傳奇守護者",
      "role": "雙星天象台總台長 · 科學院前任榮譽院長",
      "age": "72 歲",
      "class": "星港古代天象與太古光導守望者",
      "avatar": "🔭",
      "badge": "雙星天象泰斗 / 太古琉璃波導守護者",
      "desc": "長鬚垂胸、長袍古雅的老天文學家。見證了晨光堂與天樞科學院數十年的風雨滄桑，守護著天象台深處的古代「琉璃石英光導波導纜」與失衡六十年的巨大雙星軌道儀。在少年們面臨光暴與航向迷失時，指引太古星盤的真理路徑。",
      "items": [
        {
          "name": "黑曜石星軌符文手杖",
          "desc": "銘刻著獵戶座太古星圖的手杖，杖頂鑲嵌低色散星輝石英，能聚焦微弱星光。"
        },
        {
          "name": "古代琉璃光導拓片手卷",
          "desc": "記載全反射光導纖維臨界角方程與偏振光譜分析的泛黃珍貴手卷。"
        },
        {
          "name": "六十年前雙星軌道觀測日誌",
          "desc": "詳細記錄雙星天象儀卡死節點與非圓共軛節線的泛黃文獻。"
        }
      ]
    },
    {
      "name": "雷諾",
      "enName": "Renault (Reno)",
      "vol": "series2",
      "volName": "第二套主要對手與同盟",
      "role": "天樞科學院菁英學員 · 秩序監察處青年督察官",
      "age": "15 歲",
      "class": "天樞科學院預科班優等生 / 軍工監察世家",
      "avatar": "🎖️",
      "badge": "蒸汽巨像操縱官 / 嚴苛秩序信徒",
      "desc": "手握鍍金游標卡尺、披黑金斗篷的高傲少年。起初深信純粹公式與重工業軍工威權，調動重型蒸汽巨像「歌利亞號」與次聲波封鎖舊城區；但在擂台被槓桿原理擊敗、並目睹少女們以 TMD 吸振與光學頻率梳拯救星港後深受震撼，終章在監控室全力護航並摘下風鏡深深鞠躬致敬。",
      "items": [
        {
          "name": "鍍金高精度游標卡尺",
          "desc": "隨身攜帶、動輒丈量微米公差的象徵物，後轉化為精確校準天線陣列之利器。"
        },
        {
          "name": "次聲波干擾調頻發射終端",
          "desc": "可發射 10 Hz 次聲波共振頻率的軍用便攜控制器，曾引發晨光堂吸振考驗。"
        },
        {
          "name": "監察處首席督察官黑金披風",
          "desc": "象徵星港防衛秩序最高權限的防護斗篷，內襯鍍有抗電磁干擾金屬網。"
        }
      ]
    },
    {
      "name": "歌利亞號",
      "enName": "Goliath (Steam Colossus)",
      "vol": "series2",
      "volName": "第二套重裝戰械",
      "role": "重型蒸汽星軌巨像 · 軍工機械戰械",
      "age": "型號：GOLIATH-MK7",
      "class": "星港科技監察處最高防衛戰甲",
      "avatar": "🤖",
      "badge": "350公斤軍工巨械 / 兩萬牛頓液壓鐵拳",
      "desc": "重達三百五十公斤、由高強度鑄鐵與重型高壓蒸汽動力鍋爐驅動的鋼鐵巨像。胸口壓力鍋爐發出雷鳴般咆哮，一拳衝擊力超過兩萬牛頓。在第八章擂台對決中，被林漪姉與采婭玆以十五倍阿基米德複式槓桿與微積分質心切線逆向翻倒，成為工藝超越蠻力的經典見證。",
      "items": [
        {
          "name": "兩萬牛頓液壓蒸汽鐵拳",
          "desc": "一擊具備兩萬牛頓巨大衝擊力，可瞬間砸碎鋼鐵支架。"
        },
        {
          "name": "高壓蒸汽雙聯噴射迴路",
          "desc": "以過熱蒸汽產生短暫瞬間推進爆發力，但轉向力臂存在零點四米力學死角。"
        }
      ]
    },
    {
      "name": "高峙舷",
      "enName": "Gao Zhixian (GS-X01)",
      "vol": "series3",
      "volName": "第三套核心主角",
      "role": "男主角 · 六年一班班導師 / 全能教育仿生人",
      "age": "仿生外表約 24 歲",
      "class": "教育部秘密試驗專案 P.E.D.A. 旗艦原型機",
      "avatar": "🤖",
      "badge": "P.E.D.A.專案旗艦仿生人 / 絕對字面解讀狂魔",
      "desc": "西裝筆挺平整得像用尺量過，鼻樑架著黑框眼鏡，運算時鏡片浮現微弱進度條。掉落【Core-Gear #03】黃銅行星齒輪後觸發絕對字面解讀：量腰圍防餓扁、牙線做笑掉大牙加固、大會操跳出機械舞。雖無包庇學生指令，底層演算法卻自發將「保護六年一班全員順利畢業」定義為最高超越協議，大結局解鎖百分之百全功率逆推雲霄飛車。",
      "items": [
        {
          "name": "多功能黑框鏡面眼鏡",
          "desc": "內建透視掃描儀、視網膜微型投影機與運算進度顯示條。"
        },
        {
          "name": "指尖高頻微波加熱器",
          "desc": "手指能秒速微波加熱肉包便當，亦可在防衛時釋放電磁擊穿燒毀短路設備。"
        },
        {
          "name": "胸口蜂巢超導散熱系統",
          "desc": "高速超頻時會自胸口彈出散熱風扇，超載時頭頂會如開水壺般噴射白色蒸汽。"
        },
        {
          "name": "26齒鏡面黃銅齒輪",
          "desc": "大結局全班26名學生湊錢在車床上親手車削、刻滿26人名字的珍貴禮物，被高老師珍藏於心臟核心口袋。"
        }
      ]
    },
    {
      "name": "轆慄釁",
      "enName": "Lu Lixin (A-Xin)",
      "vol": "series3",
      "volName": "第三套第一主角",
      "role": "第一主角 · 六年一班調皮點子王 / 掩護作戰總指揮",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "⚙️",
      "badge": "最佳黃銅齒輪保管員 / 走廊防線首席戰術長",
      "desc": "鹿陽國小公認點子最多的調皮鬼隊長，極具義氣與應變智謀。在講台下撿到高老師掉落的黃銅行星齒輪並串成項鍊貼身佩戴一年。每當高老師機能外洩面臨露餡時，總是第一個跳出來轉移視線打圓場，大結局獲頒全校唯一的「最佳黃銅齒輪保管員特等榮譽證書」。",
      "items": [
        {
          "name": "【Core-Gear #03】黃銅行星齒輪項鍊",
          "desc": "高老師體內脫落的常識與修辭調節器，阿釁貼身守護一年，最終在大雨中交出重啟奇蹟。"
        },
        {
          "name": "高韌性耐磨釣魚線",
          "desc": "開學策劃粉筆灰機關與走廊設置防線的隨身戰術道具。"
        },
        {
          "name": "彩色超彈跳彈珠錦囊",
          "desc": "校園游擊戰中鋪設彈珠地雷滑倒陣擊退假水電工李博士的神器。"
        }
      ]
    },
    {
      "name": "綝耘晴",
      "enName": "Lin Yunqing (Qingqing)",
      "vol": "series3",
      "volName": "第三套核心主角",
      "role": "女主角 · 六年一班班長 / 理工天才少女 / 地下機械師",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🔧",
      "badge": "終身首席名譽微米工程師 / 器材室主刀醫師",
      "desc": "性格冷靜犀利、思維嚴密的學霸班長，家裡經營機車維修行。書包裡隨身攜帶微型螺絲刀組、絕緣膠帶與潤滑油。是高老師體育器材室的專屬地下微米機械師，多次帶領大家深夜尋寶更換軸承，大結局在泥濘大雨中以微米級精度完成齒輪反牙螺帽鎖定重啟。",
      "items": [
        {
          "name": "精密微雕螺絲起子組",
          "desc": "隨身工具袋必備聖物，用於調校高老師後頸與胸口的微型機械卡榫。"
        },
        {
          "name": "便攜指針式萬用電表與微米鈦鑷",
          "desc": "深夜實驗室極限手術中精確測量高老師電容電壓與阻尼公差之利器。"
        },
        {
          "name": "工業級黑色防水絕緣膠帶",
          "desc": "多次為高老師外露電線與微裂外殼進行應急絕緣防護。"
        }
      ]
    },
    {
      "name": "巫茞輆",
      "enName": "Wu Chenkai (Old Wu)",
      "vol": "series3",
      "volName": "第三套核心夥伴",
      "role": "核心夥伴 · 六年一班體育股長 / 大胃王吃貨 / 忠誠肉盾",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🥟",
      "badge": "鮮肉包守護金牌 / 體育器材室重裝守衛",
      "desc": "身材高大壯碩、皮膚白胖敦厚，抽屜裡永遠備著剛出爐的鮮肉包。因為高老師能精準計算雞腿配額並指尖微波熱肉包，自此成為高老師的頭號鐵粉。在體育課、走廊衝突與大雨月台人牆防線中擔任最堅不可摧的肉盾與守護者，獲頒「鮮肉包守護金牌」與一年份肉包券。",
      "items": [
        {
          "name": "雙層保溫不鏽鋼便當盒",
          "desc": "隨時盛裝剛出爐鮮肉包的能量補給庫，多次參與高老師指尖微波傳奇。"
        },
        {
          "name": "一米半巨型星際太空金熊玩偶",
          "desc": "高老師在遊樂園以雙槌48連擊刷爆99999分贏回的巨型戰利品。"
        }
      ]
    },
    {
      "name": "溜溜",
      "enName": "Liu-Liu",
      "vol": "series3",
      "volName": "第三套核心夥伴",
      "role": "核心夥伴 · 班級 AI 智慧小寵物 / 超高速情報通報員",
      "age": "型號：AI-PET v2.0",
      "class": "六年一班全體合養機敏萌寵",
      "avatar": "🦊",
      "badge": "全校特等八卦情報王 / 通風管道極速特工",
      "desc": "外形似白鼠又似小狐狸，體型輕巧靈活、速度快若閃電，長著一對警惕的尖耳與金屬光澤大尾巴。長年在天花板通風管道巡遊，掌握學務主任與校長動線。多次空投機密數據膠囊示警，大結局躍入暴雨三十米鋼構深淵奇蹟銜回關鍵反牙螺帽！",
      "items": [
        {
          "name": "黑曜石全景電子探測眼",
          "desc": "紅光閃爍代表五星級危險警報，具備熱成像與暗夜微光掃描模式。"
        },
        {
          "name": "通風管專用高磁吸微爪與光纖狐尾",
          "desc": "能在垂直金屬管壁高速攀爬，尾巴具備無線數據截獲與微型投擲功能。"
        }
      ]
    },
    {
      "name": "周嚴",
      "enName": "Zhou Yan (Dean Zhou)",
      "vol": "series3",
      "volName": "第三套關鍵長輩與守護者",
      "role": "鹿陽國小學務主任 · 鐵面校規守護者 / 最強體制內護航盟友",
      "age": "48 歲",
      "class": "鹿陽國小學務處最高執法者",
      "avatar": "📋",
      "badge": "鹿陽黑面判官 / 暴風雨鋼鐵人牆先鋒",
      "desc": "面容冷肅如鐵雕、眼神如鷹隼般銳利，人稱「黑面判官」，隨身手持扣分違規登記簿。前期總是懷疑高老師走路無聲、改作業過快；後期在暴雨遊樂園大危機中，手持一米半實心重裝生鐵水管怒砸月台鋼板，怒擲教育部教師證，霸氣阻擋科技公司特勤回收隊，誓死捍衛師生。",
      "items": [
        {
          "name": "黑色皮革違規扣分登記簿",
          "desc": "記錄全校違紀紀錄的權威簿冊，邊角已被翻得微微起毛。"
        },
        {
          "name": "強光多段鹵素手電筒",
          "desc": "巡堂與深夜巡邏實驗室時的標誌性白色探照光柱。"
        },
        {
          "name": "一米半重裝實心生鐵水管",
          "desc": "暴雨月台中震懾李博士與十二名武裝特勤的霸氣鋼鐵防衛武器。"
        },
        {
          "name": "教育部中小學合格教師證書",
          "desc": "「我的同仁和學生誰也不能帶走！」周主任怒擲地面的神聖教育誓約。"
        }
      ]
    },
    {
      "name": "李博士",
      "enName": "Dr. Li (Chief Engineer Li)",
      "vol": "series3",
      "volName": "第三套主要對手轉盟友",
      "role": "先端未來科技研發主管 · 假水電工 / 轉化為暗中盟友",
      "age": "43 歲",
      "class": "Project P.E.D.A. 核心系統總設計師",
      "avatar": "🥼",
      "badge": "先端科技首席科學家 / 歐米茄協議執行官",
      "desc": "聰明冷靜、身穿藍色工裝夾克假扮水電工潛入校園，手持高精度脈衝金屬探測儀。原奉命回收銷毀產生字面故障的 GS-X01；但在暴風雨月台上親眼目睹全班學生牽手人牆死守與黑盒子中跳動的真摯情感後震撼淚崩，下令特勤撤退並秘密交付最高權限除錯隨身碟與鈦合金扳手。",
      "items": [
        {
          "name": "高精度脈衝微波金屬探測儀",
          "desc": "能穿透水泥牆探測仿生人內部鈦合金骨架的高靈敏軍工設備。"
        },
        {
          "name": "最高權限除錯隨身碟與微調扳手",
          "desc": "關鍵時刻暗中塞給晴晴的密匙，包含高老師系統底層記憶解鎖密碼。"
        }
      ]
    },
    {
      "name": "邱守仁",
      "enName": "Principal Qiu (Shou-Ren)",
      "vol": "series3",
      "volName": "第三套慈愛前輩",
      "role": "鹿陽國小現任校長 · 和藹可親的茶道長者 / 創新教育推手",
      "age": "65 歲",
      "class": "鹿陽國小退休前夕榮譽老校長",
      "avatar": "🍵",
      "badge": "鹿陽和藹守護者 / 全腦開發健康操推廣大使",
      "desc": "滿頭銀髮、笑容慈祥，辦公室裡永遠飄著高山烏龍茶香。對學生的奇思妙想極具包容心，將高老師失控的機械舞視為「全腦平衡創新成果」大力表彰；在李博士破壞管線時嚴詞終止合約捍衛校園安寧，在畢業典禮上親自主持最溫暖人心的畢業相約。",
      "items": [
        {
          "name": "紫砂高山烏龍茶壺",
          "desc": "校長辦公室裡常年溫熱的茶具，象徵潤物細無聲的教育哲學。"
        },
        {
          "name": "鹿陽國小百年校史鋼印與證書",
          "desc": "親自蓋章頒發給全體六年一班學生的特等畢業紀念信物。"
        }
      ]
    },
    {
      "name": "六年一班親衛軍團",
      "enName": "Class 6-1 Guard Legion",
      "vol": "series3",
      "volName": "第三套班級同盟",
      "role": "六年一班全體 26 名同學（尪伝恺、林芸芸、陳阿達等）",
      "age": "12 歲",
      "class": "鹿陽國小傳奇王牌皮蛋班",
      "avatar": "🎒",
      "badge": "鹿陽傳奇王牌皮蛋班 / 暴雨人牆鋼鐵同盟",
      "desc": "二十六名各懷絕技的熱血少年少女。尪伝恺（反串白雪公主/面部神經大師）、林芸芸（細心敏銳/勇氣勛章）、陳阿達（籃球健將/翻面烘烤苦主）等。從最初的調皮搗蛋，到全班齊心合力搭建滑梯彈珠陣、深夜實驗室聲東擊西、暴風雨手牽手築起鋼鐵人牆，譜寫最動人的校園冒險傳奇。",
      "items": [
        {
          "name": "黑板擦粉筆灰煙幕彈與彈珠防線",
          "desc": "全班協同作戰時百發百中的校園特製防衛道具。"
        },
        {
          "name": "湊錢親手車削的26齒鏡面黃銅齒輪",
          "desc": "全班26名同學刻上每人名字的心血傑作，贈予高老師作為永恆的心臟羈絆。"
        }
      ]
    },
    {
      "name": "林未晞",
      "enName": "Lin Weixi",
      "vol": "series4",
      "volName": "第四套核心主角",
      "role": "第一主角 · 來自約四十年後的時空旅人 / 六年一班轉學生",
      "age": "12 歲（時空旅人外表）",
      "class": "鹿陽國小 六年一班",
      "avatar": "🌸",
      "badge": "時序旅人 / 守護地球發起人",
      "desc": "個子不高，紮著柔順長髮，眼神溫柔中帶著淡淡憂傷。來自四十年後環境被嚴重摧殘的未來地球，配戴時序手環回到現在，任務是喚醒人們重視環境。情緒激動時偶發未來幻視，與晴晴、阿釁結成同盟發起守護地球大作戰，大結局在全班祝福下返回未來見證地球轉機。",
      "items": [
        {
          "name": "未來時序手環",
          "desc": "能投影未來環境殘破影像、即時偵測當前空氣水質與土壤數據，也是維持時空錨定與返回未來的關鍵裝置。"
        },
        {
          "name": "未來生態觀察晶片",
          "desc": "記錄四十年後氣候變遷、滅絕物種與關鍵污染節點的微型晶片檔案。"
        }
      ]
    },
    {
      "name": "綝耘晴",
      "enName": "Lin Yunqing (Qingqing)",
      "vol": "series4",
      "volName": "第四套核心主角",
      "role": "女主角 · 六年一班班長 / 理工天才少女 / 祕密同盟核心",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🔬",
      "badge": "科學調查首席 / 守護地球總策劃",
      "desc": "冷靜縝密、以科學證據為準繩的理工學霸班長。最先察覺未晞對環境預測過於精準並以科學手段調查，在未晞坦白後成為第一個盟友，以嚴謹數據統籌垃圾分類、淨灘與極限蒐證行動。",
      "items": [
        {
          "name": "便攜式水質酸鹼檢測筆",
          "desc": "隨身攜帶的高精度 pH 與 TDS 水質檢測器，用於第一時間驗證校園排水溝異味。"
        },
        {
          "name": "三折疊戰術資料夾",
          "desc": "記錄全班剩食統計、省電度數曲線與工廠排污時序圖的統籌大腦。"
        }
      ]
    },
    {
      "name": "轆慄釁",
      "enName": "Lu Lixin (A-Xin)",
      "vol": "series4",
      "volName": "第四套第一主角",
      "role": "第一主角 · 六年一班調皮點子王 / 行動宣傳總指揮",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "💡",
      "badge": "行動點子王 / 綠色園遊會總策畫",
      "desc": "天馬行空的調皮鬼隊長，在淨灘行動中察覺未晞異狀並拼湊出真相加入同盟。擅長用孩子們最愛的幽默遊戲把嚴肅的環保行動玩成全校風潮，在追查偷排管線時展現驚人行動力。",
      "items": [
        {
          "name": "彩繪環保大聲公",
          "desc": "全校宣傳午餐零浪費與綠色園遊會的靈魂道具。"
        },
        {
          "name": "多功能折疊勘察滑板",
          "desc": "沿著海堤排水溝快速巡查可疑暗管的機動代步工具。"
        }
      ]
    },
    {
      "name": "巫茞輆",
      "enName": "Wu Chenkai (Old Wu)",
      "vol": "series4",
      "volName": "第四套核心夥伴",
      "role": "核心夥伴 · 六年一班體育股長 / 午餐零浪費號召者",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🍱",
      "badge": "午餐零浪費先鋒 / 班級體力擔當",
      "desc": "心思純樸、胃口極好的大胃王。帶頭響應並號召全校「把午餐吃光光」減少廚餘，在極限蒐證與對抗工廠阻撓時，以可靠的身軀和樸實的信任給予夥伴最大安全感。",
      "items": [
        {
          "name": "不鏽鋼多層保溫便當盒",
          "desc": "落實零免洗餐具、珍愛每一粒米飯的標誌性裝備。"
        },
        {
          "name": "高磅數帆布物資提袋",
          "desc": "淨灘行動中能一人提起三十公斤塑膠廢棄物的超強提袋。"
        }
      ]
    },
    {
      "name": "溜溜",
      "enName": "Liu-Liu",
      "vol": "series4",
      "volName": "第四套核心夥伴",
      "role": "班級 AI 智慧小寵物 / 環境情報偵察兵",
      "age": "AI 智齡 2 歲",
      "class": "鹿陽國小 六年一班吉祥物",
      "avatar": "🐾",
      "badge": "水質空氣高敏雷達 / 關鍵證物特派員",
      "desc": "六年一班合養的機械雪貂小寵物，配備高靈敏環境感測器。第一個偵測到未晞時序手環能量波動，隨後在追查上游工廠偷排暗管中擔任先鋒，關鍵時刻穿過窄管叼回排污證物。",
      "items": [
        {
          "name": "多光譜微型光學探頭",
          "desc": "內建微距水質顯微與紅外線夜視探頭，可深入暗管錄影蒐證。"
        },
        {
          "name": "高敏氣體感測觸鬚",
          "desc": "能精確分析空氣中揮發性有機物 (VOCs) 與 PM2.5 數值的生化感測鬍鬚。"
        }
      ]
    },
    {
      "name": "周嚴",
      "enName": "Zhou Yan",
      "vol": "series4",
      "volName": "第四套校園盟友",
      "role": "學務主任 / 體制內最強護航盟友",
      "age": "45 歲",
      "class": "鹿陽國小 學務處",
      "avatar": "📋",
      "badge": "黑面判官 / 校園環境捍衛者",
      "desc": "全校聞名的嚴格主任。起初認為孩子們搞環保不務正業，但在見證孩子們實打實的省電與水質數據後態度軟化，在工廠污染威脅學童健康時拍桌護短，成為最強大的體制內護航盾牌。",
      "items": [
        {
          "name": "純黑巡查登記簿",
          "desc": "從記錄違規到密密麻麻記錄全校節能減碳成效與排污檢舉歷程的威嚴筆記本。"
        }
      ]
    },
    {
      "name": "邱守仁",
      "enName": "Chiu Shou-Jen",
      "vol": "series4",
      "volName": "第四套校園盟友",
      "role": "鹿陽國小校長 / 綠色行動大推手",
      "age": "62 歲",
      "class": "鹿陽國小 校長室",
      "avatar": "🏫",
      "badge": "慈祥綠色校長 / 園遊會總主持",
      "desc": "說話溫和愛泡高山茶的老校長。全力支持六年一班發起的全校綠色園遊會與植樹認養，在污染危機發生時第一時間通報環保局，堅定站在守護學童的第一線。",
      "items": [
        {
          "name": "紫砂手作茶壺",
          "desc": "隨身攜帶、以身作則拒用一次性紙杯的溫暖茶具。"
        }
      ]
    },
    {
      "name": "林芸芸",
      "enName": "Lin Yunyun",
      "vol": "series4",
      "volName": "第四套班級成員",
      "role": "六年一班同學 / 第三排活潑女生",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🎒",
      "badge": "環保小衛士 / 班級行動活躍者",
      "desc": "第三排活潑直爽的女生，從最初和阿釁吵架打鬧，到被未晞的未來故事深深打動，成為垃圾分類大作戰與綠色園遊會中最熱心的骨幹志工。",
      "items": [
        {
          "name": "環保彩繪水壺",
          "desc": "貼滿自製守護地球徽章的隨身水壺。"
        }
      ]
    },
    {
      "name": "食品加工廠老闆",
      "enName": "The Factory Owner",
      "vol": "series4",
      "volName": "第四套現實阻力代表",
      "role": "工業區食品加工廠經營者 / 污染源化身",
      "age": "52 歲",
      "class": "龍井工業區",
      "avatar": "🏭",
      "badge": "漠視環境的縮影 / 偷排廢水業者",
      "desc": "藏身工業區為了節省排污成本而偷埋暗管排廢的工廠負責人。代表著現實中因貪圖利益與便利而漠視環境的縮影，最終在孩子們與校方鐵證如山的舉報下被勒令停工整頓。",
      "items": [
        {
          "name": "私設地下分流閥門開關",
          "desc": "趁夜間與大雨偷排未處理洗滌廢水的暗管閥門。"
        }
      ]
    },
    {
      "name": "六年一班全體 26 人",
      "enName": "Class 6-1 Eco Vanguard",
      "vol": "series4",
      "volName": "第四套班級同盟",
      "role": "守護地球大作戰全員 / 王牌皮蛋班",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班全體",
      "avatar": "🛡️",
      "badge": "守護地球大作戰・全員出動",
      "desc": "從最初調皮搗蛋的王牌皮蛋班，在林未晞的引導下轉化為同心協力的守護地球先鋒隊。在得知未晞即將歸返未來的時刻，全員在校門口許下綠色承諾，齊聲高喊『明天見，未晞！』。",
      "items": [
        {
          "name": "二十六人綠色守護承諾書",
          "desc": "簽滿全班二十六個名字、承諾一生守護地球的希望信物。"
        }
      ]
    },
    {
      "name": "柳奷纭",
      "enName": "Liu Qianyun",
      "vol": "series5",
      "volName": "短篇集核心主角",
      "role": "第一主角 · 鹿陽國小六年級女生 / 手作與繪畫天才少女 / 穿越作品世界的引路人",
      "age": "12 歲",
      "class": "鹿陽國小 六年級",
      "avatar": "🎨",
      "badge": "心靈修補師 / 手作奇蹟少女",
      "desc": "個子不高，背著塞滿畫具與黏土的大書包，手指總沾著洗不掉的顏料。性格安靜細膩，沉浸在創作時會忘記時間，常被同學誤認為孤僻高傲。擁有完成真摯作品即能走進作品世界的祕密能力，在四篇故事中修補了親情、友情、跨代記憶，並最終治癒了自己孤獨的內心。",
      "items": [
        {
          "name": "奇蹟素描本與畫筆組",
          "desc": "隨身攜帶的水彩與素描本，每一幅注入深情的畫作都是開啟另一個心靈世界的門扉。"
        },
        {
          "name": "手作黏土與心願手作工具箱",
          "desc": "裝著五彩黏土、刻刀與手作配件的百寶箱，捏出小星星與各種溫暖信物。"
        }
      ]
    },
    {
      "name": "夏知星",
      "enName": "Xia Zhixing",
      "vol": "series5",
      "volName": "短篇集友情同伴",
      "role": "核心同伴 · 九月新轉學生 / 喜愛星空的細膩女孩 / 奷纭的知心好友",
      "age": "12 歲",
      "class": "鹿陽國小 六年級",
      "avatar": "⭐",
      "badge": "星空旅伴 / 破除隔閡的知心友誼",
      "desc": "第二篇《給誤會的那顆星》核心人物。剛轉學到鹿陽國小，同樣細膩安靜。起初因主動搭話被奷纭的退縮誤解而彼此受傷，在奷纭進入星空世界理解其心意後，收下黏土小星星解開誤會，成為奷纭最堅定溫暖的同伴。",
      "items": [
        {
          "name": "手作黏土小星星",
          "desc": "奷纭親手捏製、注入歉意與友誼的淡黃色小星星，散發著夜空般的安詳微光。"
        }
      ]
    },
    {
      "name": "阿嬤",
      "enName": "Grandma",
      "vol": "series5",
      "volName": "短篇集親情長輩",
      "role": "核心長輩 · 烤番薯六十年的慈祥阿嬤 / 記憶逐漸模糊的老藝術家",
      "age": "72 歲",
      "class": "鹿陽老街",
      "avatar": "👵",
      "badge": "溫暖守護者 / 泛黃歲月畫冊主人",
      "desc": "第三篇《陪阿嬤走進她的畫》核心人物。在老街烤了六十年番薯，失去老伴後記憶逐漸流失，常常對著舊照片發呆。奷纭完成她年輕時未畫完的畫作並帶她走進昔日記憶，讓長輩再次感受一生中最珍貴美好的溫情。",
      "items": [
        {
          "name": "泛黃舊畫冊與木炭筆",
          "desc": "記錄著半世紀前鹿陽老街風光與老伴身影的珍貴手繪本。"
        },
        {
          "name": "古法手作烤番薯竹籃",
          "desc": "散發熱騰騰香氣、承載六十年對家人無限關愛的溫暖竹籃。"
        }
      ]
    },
    {
      "name": "奷纭的爸媽",
      "enName": "Qianyun's Parents",
      "vol": "series5",
      "volName": "短篇集親情家人",
      "role": "核心家人 · 工作繁忙爭吵漸多的父母 / 重新找回溫度的家",
      "age": "40 歲",
      "class": "奷纭的家",
      "avatar": "🏡",
      "badge": "找回溫度的全家福",
      "desc": "第一篇《把全家畫回來》核心人物。面對生活重擔與繁忙工作，彼此間多了爭吵與疲憊，全家很久沒有好好吃一頓飯。奷纭畫出全家在鳳凰樹下微笑的理想畫面並進入畫中，理解父母的辛勞與深愛，以一張全家福卡片讓家庭重聚溫暖。",
      "items": [
        {
          "name": "鳳凰樹下的全家福",
          "desc": "奷纭親手繪製的一家三口手牽手在鳳凰花開時大笑的溫暖水彩畫。"
        }
      ]
    },
    {
      "name": "畫中的自己",
      "enName": "Inner Qianyun",
      "vol": "series5",
      "volName": "短篇集內心靈魂",
      "role": "內在自我 · 守在只有一個人天空下的孤獨少女 / 自我接納的化身",
      "age": "12 歲",
      "class": "天空世界",
      "avatar": "🕊️",
      "badge": "擁抱自己 / 破繭而出的心靈之光",
      "desc": "第四篇《畫給自己的天空》核心角色。一直以來奷纭總是忙著修補別人的破碎，卻壓抑了自己總是被誤解的孤單委屈。在只有一個人的天空世界裡，奷纭與畫中的自己相擁痛哭，學會自我接納與打開心門，迎向不再孤獨的明亮未來。",
      "items": [
        {
          "name": "給自己的天空畫布",
          "desc": "從陰霾孤獨轉化為晨曦蔚藍的心靈天空，象徵自我接納與希望。"
        }
      ]
    },
    {
      "name": "高峙舷",
      "enName": "Gao Zhixian (GS-X01)",
      "vol": "series6",
      "volName": "作弊剋星 / 導師主角",
      "role": "第一導師 · 六年一班班導 / 全能教育仿生人 / 史上最強監考之王",
      "age": "外觀 25 歲（出廠未滿 1 年）",
      "class": "鹿陽國小 六年一班導師",
      "avatar": "🤖",
      "badge": "監考天花板 / 作弊剋星",
      "desc": "教育部秘密測試計畫派遣的全能仿生人（型號 GS-X01）。西裝領帶永遠平整，戴黑框眼鏡。配備透視光眼、指紋掃描、3D 空間軌跡追蹤、語音波形分析、作業相似度演算法、寵物行為異常偵測與電磁干擾。從第一堂課就知道全班在作弊，卻用『沒收＋升級為教學用具』的深層教育演算法，把學生的作弊精力導向自主學習。",
      "items": [
        {
          "name": "透視光眼與3D軌跡追蹤鏡片",
          "desc": "黑框眼鏡內建的多光譜掃描模組，可看穿課桌、口袋與橡皮擦暗格，並精準攔截空投紙飛機。"
        },
        {
          "name": "作弊神器升級展示箱",
          "desc": "專門收納全班被沒收的 28 項作弊工具，暗中登記並升級為期末誠實博物館展品。"
        }
      ]
    },
    {
      "name": "轆慄釁",
      "enName": "Lu Lixin (A-Xin)",
      "vol": "series6",
      "volName": "作弊互助會會長",
      "role": "第一主角 · 六年一班點子王 / 作弊軍事總指揮 / 越挫越勇的發明狂",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "⚡",
      "badge": "作弊點子王 / 誠實領悟者",
      "desc": "鹿陽國小六年一班的靈魂人物。為了保衛被沒收的遊戲機，率領全班成立『作弊互助會』，主導 26 種群體作弊方案。即便被高老師秒抓沒收 28 次，仍能立刻想出第 29 招。在經歷一次次軍備競賽後，終於在期末考領悟到『費盡心思作弊的過程，不知不覺把書都讀完了』的終極真理。",
      "items": [
        {
          "name": "黃銅行星齒輪項鍊",
          "desc": "胸前隨身配戴的幸運信物，思考作弊靈感與戰術時習慣在指尖飛速旋轉。"
        },
        {
          "name": "橡皮擦微型圖書館與空投紙飛機",
          "desc": "精心雕刻的微米小抄橡皮擦，以及精算過滑翔比率的空投傳送紙飛機。"
        }
      ]
    },
    {
      "name": "綝耘晴",
      "enName": "Lin Yunqing (Qingqing)",
      "vol": "series6",
      "volName": "作弊科技總監",
      "role": "核心女主角 · 六年一班班長 / 理工科技少女 / 作弊實驗室總架構師",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🔬",
      "badge": "科技總監 / 誠實博物館首席解說員",
      "desc": "家開機車修理行，思維縝密、動手能力極強。雖然身為班長且口口聲聲『我只負責研發，不負責使用』，卻架不住阿釁的苦苦哀求與科技挑戰的誘惑，先後研發出隱形紫外線墨水、作弊計算機與微型耳機無線電。全班第一個清醒察覺『我們根本不需要作弊』，並在結局擔任誠實博物館首席講解員。",
      "items": [
        {
          "name": "紫外線螢光小抄筆",
          "desc": "利用特定波長紫外光才能顯影的特製螢光小抄，可惜依然難逃高老師的光譜透視。"
        },
        {
          "name": "微型改裝無線電台",
          "desc": "藏在文具盒底層的短波收發機，能向全班微型耳機廣播公式，後遭電磁脈衝干擾。"
        }
      ]
    },
    {
      "name": "巫茞輆",
      "enName": "Wu Chenkai (Lao-Wu)",
      "vol": "series6",
      "volName": "作弊互助會主力",
      "role": "核心同伴 · 六年一班體育股長 / 肉包狂熱者 / 雞腿賭注背負者",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🥟",
      "badge": "雞腿守護者 / 第一位覺醒者",
      "desc": "全班體型最魁梧、心思最單純的吃貨。因為爸爸立下『月考沒進步就一個月不准吃雞腿』的生死賭注，成為全班最渴望作弊卻又最容易自爆的成員：小抄被手汗浸濕、把寫滿答案的肉包一口吞下肚。在人體分割精讀訓練中被逼著背完歷史題庫，成為全班第一個真心說出『我好像不用作弊了』的人。",
      "items": [
        {
          "name": "暗藏玄機的鮮肉大包",
          "desc": "底部用食用色素偷偷印上數學公式的應急道具，卻因為太香忍不住在開考前吞下肚。"
        },
        {
          "name": "老巫爸爸的雞腿保證書",
          "desc": "只要考進班級前十五名就能享受整整一個月大雞腿的榮譽誓約書。"
        }
      ]
    },
    {
      "name": "溜溜",
      "enName": "Liu-Liu",
      "vol": "series6",
      "volName": "作弊快遞員",
      "role": "核心 AI 萌寵 · 六年一班班級寵物 / 情報通報員 / 答案空投特派員",
      "age": "AI 寵物機型",
      "class": "鹿陽國小 六年一班",
      "avatar": "🦊",
      "badge": "答案快遞員 / 越級更新小能手",
      "desc": "似鼠似狐的機械智慧小寵物。在本作中被阿釁威逼利誘兼以頂級機油利誘，從校園情報王降級為『作弊快遞員』。穿梭於教室天花板通風管空投答案，卻被高老師的寵物行為異常演算法逮個正著。在入侵高老師計畫中，非但沒能駭入，反而被高老師在線『韌體升級』，升級成自帶抓作弊廣播的新模組。",
      "items": [
        {
          "name": "微型磁吸空投背帶",
          "desc": "晴晴為溜溜量身打造的快遞小馬鞍，能吸附微型答案紙條並在課桌下快速穿梭。"
        },
        {
          "name": "特級低黏度潤滑機油",
          "desc": "阿釁用來賄賂溜溜幫忙跑腿送信的專屬零食獎勵。"
        }
      ]
    },
    {
      "name": "林未晞",
      "enName": "Lin Weixi",
      "vol": "series6",
      "volName": "未來轉學生",
      "role": "客串主角 · 來自四十多年後的時空旅人 / 道德清流 / 未來視角引路人",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "⌚",
      "badge": "未來之光 / 誠實守護者",
      "desc": "來自未來破碎地球的轉學生，性格文靜溫柔、目光通透。左手腕戴著時序手環，是全班唯一堅決拒絕參與作弊的人。手環被全班誤以為是『未來答案機』並試圖破解，結果卻投影出四十年後被淹沒的破碎城市，給予全班震撼教育。留下了『作弊的未來是還不完的債』等經典醒世金句。",
      "items": [
        {
          "name": "時序手環（環境偵測儀）",
          "desc": "看似能未卜先知的時空儀器，實際只記錄了未來極端氣候與環境數據，完全沒有考試答案。"
        }
      ]
    },
    {
      "name": "周嚴",
      "enName": "Zhou Yan",
      "vol": "series6",
      "volName": "學務處黑面判官",
      "role": "核心師長 · 鹿陽國小學務主任 / 校園鐵血紀律維護者",
      "age": "48 歲",
      "class": "鹿陽國小 學務處",
      "avatar": "📋",
      "badge": "黑面判官 / 違規單狂魔",
      "desc": "面容冷峻、眼神如鷹，隨身攜帶厚厚的違規登記簿。一直密切關注六年一班這個全校最大問題班級，誓言抓到他們的作弊證據。然而每次突擊檢查都陰錯陽差碰壁，最後甚至把高老師展出的『誠實博物館（28 項作弊道具）』誤認為『全校最狂自主學習資優筆記展』並在朝會頒獎表揚。在結局得知真相後，破天荒第一次沒有開違規單，反而感動落淚。",
      "items": [
        {
          "name": "黑皮違規登記簿與紅筆",
          "desc": "記錄全校學生違紀歷史的威嚴之書，對六年一班而言曾是最大的夢魘。"
        }
      ]
    },
    {
      "name": "邱守仁",
      "enName": "Qiu Shouren",
      "vol": "series6",
      "volName": "和藹校長",
      "role": "校長 · 鹿陽國小校長 / 慢半拍的茶道愛好者",
      "age": "61 歲",
      "class": "鹿陽國小 校長室",
      "avatar": "🍵",
      "badge": "慢半拍校長 / 開放教育推手",
      "desc": "總是一副笑瞇瞇的模樣，隨身帶著保溫杯泡烏龍茶。對高老師的先進教學法充滿讚賞。在高老師舉辦『開放式考卷大賽』時，誤以為這是教育部提倡的『完全自主探索學習革命』，在全校教師會上大力推廣，成為推動誠實應考的最佳助攻。",
      "items": [
        {
          "name": "紫砂保溫茶杯",
          "desc": "裝著頂級高山凍頂烏龍茶，遇到危機時校長總會慢悠悠喝一口茶並微笑以對。"
        }
      ]
    },
    {
      "name": "陸言",
      "enName": "Lu Yan",
      "vol": "series7",
      "volName": "不可思議事件簿 · 偵探社長",
      "role": "男主角 · 齒輪名偵探",
      "age": "12 歲",
      "class": "鹿陽國小 六年二班",
      "avatar": "🔍",
      "badge": "縝密推演者 / 光學偏振解碼專家",
      "desc": "鹿陽國小六年級。齒輪偵探事務所社長，冷靜嚴謹、邏輯慎密的推理核心。信奉『世上沒有無解的不可思議，只有未被揭示的物理規律』。隨身佩戴黃銅微光單片眼鏡與游標卡尺，擅長微距痕跡檢驗與力學路徑還原。",
      "items": [
        {
          "name": "黃銅微光單片鏡",
          "desc": "內建精密偏振濾鏡與掠射光學模組，能清晰呈現地面微距壓痕、紫外螢光與指紋反光。"
        },
        {
          "name": "牛皮紙格網手帳",
          "desc": "記錄案件現場建築俯視圖、力矩向量與推演邏輯樹，筆跡精準如工程圖紙。"
        },
        {
          "name": "高碳鋼微距游標卡尺",
          "desc": "精確至0.02毫米，用於現場測量機械刮痕、鎖孔彈子位移與齒輪模數。"
        }
      ]
    },
    {
      "name": "沈星葵",
      "enName": "Shen Xingkui",
      "vol": "series7",
      "volName": "不可思議事件簿 · 聽音副社長",
      "role": "女主角 · 記憶共振探測者",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🎵",
      "badge": "聲學共振大師 / 靈敏直覺之耳",
      "desc": "轉學生，齒輪偵探事務所副社長。天賦異稟的聲學感知力，擁有絕對音感與極度敏銳的直覺共情。能憑藉純銀音叉聽出金屬材料的微動疲勞、琴弦敲擊的非人力機械應力，是團隊中的直覺靈魂。",
      "items": [
        {
          "name": "純銀記憶共振音叉",
          "desc": "特製雙叉共振音叉，能透過金屬與木質纖維回波辨識結構應力與受力歷史。"
        },
        {
          "name": "隨身寫生速寫板",
          "desc": "飛速繪製案發現場目擊者微表情、環境光影變幻與聲波節點分佈圖。"
        },
        {
          "name": "綠色青翠束髮帶",
          "desc": "星葵的標誌性髮飾，跑步與調查時輕快飄逸。"
        }
      ]
    },
    {
      "name": "方小克",
      "enName": "Fang Xiaoke",
      "vol": "series7",
      "volName": "不可思議事件簿 · 機械怪才",
      "role": "核心主角 · 發明改裝狂人",
      "age": "11 歲",
      "class": "鹿陽國小 五年三班",
      "avatar": "🧰",
      "badge": "機巧突破者 / 刺蝟皮球首席整備士",
      "desc": "五年級發明怪才，臉上永遠帶著機油印子的鬼靈精。隨身斜挎三層黃銅工匠箱，精通各種精密鎖具結構、微型發條步進齒輪與次聲波共振器，是事務所最強大的物理突破與後勤工程師。",
      "items": [
        {
          "name": "三層伸縮黃銅工匠箱",
          "desc": "重達數公斤的多功能工具箱，收納著八號棘輪扳手、萬能開鎖簧片與微型潤滑脂。"
        },
        {
          "name": "次聲波地磁共振捕鬼儀",
          "desc": "自製的搞怪偵測器，雖然經常被陸言吐槽，但關鍵時刻總能測出奇妙的低頻震盪。"
        },
        {
          "name": "八號萬能棘輪扳手",
          "desc": "小克最心愛的手持工具，拆裝螺栓、撬開暗格無往不利。"
        }
      ]
    },
    {
      "name": "皮球",
      "enName": "Piqiu (Pique)",
      "vol": "series7",
      "volName": "不可思議事件簿 · 機械刺蝟",
      "role": "事務所專屬特工 · 探測刺蝟",
      "age": "出廠 3 個月",
      "class": "齒輪偵探事務所 榮譽探員",
      "avatar": "🦔",
      "badge": "狹縫特工 / 發條避震高手",
      "desc": "方小克耗費兩個月親手打造的發條驅動微型機械刺蝟。背部覆蓋三十六根高韌性合金感應棘刺，能自如縮成圓球滾入通風管道、鋼琴琴箱狹縫，傳輸微型攝影訊號與物證採樣。",
      "items": [
        {
          "name": "合金感應棘刺陣列",
          "desc": "既是避震防撞甲殼，也是高靈敏度觸覺天線，能探測狹縫中的微弱氣流與齒輪傳動。"
        },
        {
          "name": "微型發條超速滾筒",
          "desc": "收縮四肢後可如保齡球般高速彈射滾動，迅速越過複雜障礙。"
        },
        {
          "name": "內建磁吸探針夾爪",
          "desc": "嘴部暗藏微型釹磁鐵與高彈性抓夾，能夾取縫隙深處的微小金屬零件或毛髮。"
        }
      ]
    },
    {
      "name": "陸書晴",
      "enName": "Lu Shu-Ching (Ching-Tzu)",
      "vol": "series8",
      "volName": "班上鳥事 · 靈魂班長",
      "role": "女主角 · 班長兼地下首席鳥語翻譯官",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "👓",
      "badge": "冷面毒舌軍醫 / 跨物種心靈感應者",
      "desc": "鄉村老獸醫之女，外表冷酷毒舌，戴極細黑框眼鏡，隨身攜帶鑷子與棉花棒。七歲時因能聽懂動物心聲差點被送進兒童精神療養院，從此用極致理性與醫學術語封閉自己。身懷能聽懂禽鳥與動物語言的秘密天賦，在全班收留小麻後，被迫在內心與傲嬌麻雀老爺展開爆笑互懟，並成為引領全班進行極限消音革命的鐵腕統帥。",
      "items": [
        {
          "name": "不鏽鋼醫用鑷子與棉花棒",
          "desc": "隨身攜帶在鉛筆盒夾層的專業護理工具，為小麻清理傷口與敷藥的救命法寶。"
        },
        {
          "name": "禽鳥解剖生理學筆記",
          "desc": "用嚴謹拉丁學名與圖表偽裝的秘密手冊，記載著麻雀雛鳥的骨骼癒合與應激生理反應。"
        },
        {
          "name": "極細黑框平光眼鏡",
          "desc": "思考與掩飾情緒波動時的專屬推鏡道具，鏡片後藏著全班最深沉的溫柔與敏銳。"
        }
      ]
    },
    {
      "name": "林敬棠",
      "enName": "Lin Ching-Tang (Ah-Tang)",
      "vol": "series8",
      "volName": "班上鳥事 · 孩子王",
      "role": "男主角 · 班級魔王兼肇事撿鳥人",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🏃",
      "badge": "鐵拳少年 / 鳥爸兼保鏢",
      "desc": "單親家庭長大，父親長年開砂石車在外奔波。表面桀驁不馴、滿身擦傷，用喧鬧與惡作劇掩飾內心的寂寞與渴望被注視。冒死從校貓爪下搶救瀕死雛雀小麻，粗魯少年在面對脆弱如薄冰的生命時，笨拙地展現出如父如母的溫柔守護本能。",
      "items": [
        {
          "name": "透氣孔高筒球鞋盒",
          "desc": "用圓規精準扎出十六個通風孔的微型庇護所，藏在課桌最深處的心靈錨點。"
        },
        {
          "name": "脫線毛線手套",
          "desc": "在老榕樹下大戰校貓黑炭時佩戴的護具，留下了斑駁的爪痕與守護生命的印記。"
        },
        {
          "name": "無糖豆漿微型餵食吸管",
          "desc": "將吸管剪成斜口斜角，在晴子遠程指導下一滴一滴餵食雛鳥的特製工具。"
        }
      ]
    },
    {
      "name": "林小麻",
      "enName": "Lin Hsiao-Ma (Master Sparrow)",
      "vol": "series8",
      "volName": "班上鳥事 · 傲嬌帝王",
      "role": "靈魂鳥主角 · 榕樹帝國第七代領主",
      "age": "3 週大",
      "class": "鹿陽國小 六年一班榮譽神鳥",
      "avatar": "🐦",
      "badge": "二十克落魄貴族 / 教室最高安寧指標",
      "desc": "右側腕掌骨骨裂的麻雀雛鳥。雖然體重只有二十克，但在意識世界裡氣場兩米八，自稱榕樹帝國第七代領主。滿嘴碎碎念挑剔人類是長毛無尾猿，卻在換藥與餵食時露出舒服的微弱呼嚕聲。牠的微弱心跳成為喚醒全班善良的靈魂試金石。",
      "items": [
        {
          "name": "竹籤微型固定夾板",
          "desc": "晴子用切片竹籤與透氣膠帶量身定做的骨折固定器，幫助右翼完好復原。"
        },
        {
          "name": "棉花鋪底的軟墊王座",
          "desc": "阿棠與同學們用乾淨棉花與軟布精心打造的尊貴寢宮。"
        },
        {
          "name": "去殼碎小米與溫泡蛋黃",
          "desc": "全班特務小隊秘密採購、嚴格控溫特製的帝王級補給飼料。"
        }
      ]
    },
    {
      "name": "陳大山",
      "enName": "Chen Ta-Shan (Big Shan)",
      "vol": "series8",
      "volName": "班上鳥事 · 體育股長",
      "role": "班級護衛 · 人體消音器兼門神",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "📢",
      "badge": "低音炮變腹語大師 / 走廊物理勸導官",
      "desc": "體育股長，肺活量全校第一，說話自帶低音炮震顫地板。粗獷魁梧的外表下極重義氣。為了小麻的安危，苦練極限腹語術與面癱唇語，並在教室前後門充當人肉盾牌，用沙包大的拳頭與凌厲眼神物理勸阻所有大聲喧嘩者。",
      "items": [
        {
          "name": "隔音止鼾貼片",
          "desc": "為了防止自己在早自習打哈欠或發出喘息聲而偷偷貼在嘴角的醫用貼片。"
        },
        {
          "name": "軟底靜音室內布鞋",
          "desc": "將重裝運動鞋換成棉花厚底室內鞋，讓九十公斤的體重走起路來如貓一般無聲。"
        },
        {
          "name": "走廊警戒戰術手勢表",
          "desc": "獨創的三套班級手勢密碼，能瞬間在十公尺外向全班下達「主任來襲」的緊急閉嘴指令。"
        }
      ]
    },
    {
      "name": "許芳語",
      "enName": "Hsu Fang-Yu (Little Fish)",
      "vol": "series8",
      "volName": "班上鳥事 · 衛生股長",
      "role": "班級特工 · 草本除臭陣地司令",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "🌿",
      "badge": "潔癖特工 / 草本芳香鍊金術士",
      "desc": "衛生股長，擁有極度潔癖與警犬般靈敏的嗅查能力，隨身攜帶濕紙巾。起初因擔憂禽流感而極度抗拒，後被小麻的脆弱生命打動，研發出乾燥柚皮與烏龍茶葉渣除臭墊料，成功在學務主任巡堂突擊中化解了整間教室的氣味暴露危機。",
      "items": [
        {
          "name": "老茶葉渣與柚子皮芳香包",
          "desc": "曬乾的柑橘皮與烘焙茶葉渣按比例混合，吸附異味並散發淡雅果香的秘密防禦法寶。"
        },
        {
          "name": "奈米級酒精消毒噴霧",
          "desc": "在每一次接觸鳥盒前後嚴格執行的消殺工具，確保小麻不受細菌感染。"
        },
        {
          "name": "防過敏活性碳加厚口罩",
          "desc": "調配墊料與打掃鳥舍時的標準防護裝備，象徵著醫學級的嚴謹衛生標竿。"
        }
      ]
    },
    {
      "name": "周自強",
      "enName": "Chou Tzu-Chiang",
      "vol": "series8",
      "volName": "班上鳥事 · 聲學雷達",
      "role": "後門哨兵 · 萬年睡神與早期預警機",
      "age": "12 歲",
      "class": "鹿陽國小 六年一班",
      "avatar": "😴",
      "badge": "步頻辨識大師 / 桌底摩斯密碼員",
      "desc": "常年趴在桌上睡覺的後座學生，看似漫不經心，實則聽覺神經發達異常。能單憑走廊地板的微弱震動頻率，在三十公尺外精準分辨學務主任周嚴的義大利硬底皮鞋聲，並以桌腳震動向全班傳遞摩斯密碼預警，是全班守護小麻的千里眼與順風耳。",
      "items": [
        {
          "name": "深海降噪連帽衛衣",
          "desc": "拉緊帽子遮蔽視線、專注於地板骨傳導聲學感測的神級裝備。"
        },
        {
          "name": "桌底共振敲擊器",
          "desc": "暗藏在桌腿內側的小磁鐵，能透過輕踢桌腳向全班課桌傳導微弱的地震級警報。"
        },
        {
          "name": "走廊腳步聲譜分析圖",
          "desc": "在草稿紙上偷偷記錄的校長、主任、導師腳步特徵頻率與步幅間隔圖表。"
        }
      ]
    },
    {
      "name": "溫雅婷",
      "enName": "Wen Ya-Ting (Teacher Wen)",
      "vol": "series8",
      "volName": "班上鳥事 · 第四任導師",
      "role": "代課班導 · 菜鳥教育心理學碩士",
      "age": "24 歲",
      "class": "鹿陽國小 六年一班導師",
      "avatar": "👩‍🏫",
      "badge": "心理量表受害者 / 講台守護天使",
      "desc": "剛從國立師範大學畢業、滿懷教育理想的年輕教師。帶著心理輔導量表踏入修羅場，卻遭遇了全體學生「老僧入定式」的集體消音。一度以為自己被施加集體冷暴力而每天胃痛吃藥，但在暴風雨真相大白之際，拍響講台以教師尊嚴力抗主任處分，全心守護全班純潔的善意。",
      "items": [
        {
          "name": "厚重教育心理學手冊與胃藥",
          "desc": "記錄著各種阿德勒心理學流派的筆記本，夾層裡塞滿了緩解神經性胃痛的胃散。"
        },
        {
          "name": "集體畫樹心理測驗圖紙",
          "desc": "原本用來診斷心理創傷的二十六張圖紙，意外成了全班全員愛鳥的溫柔物證。"
        },
        {
          "name": "六年一班全員康復紀念粉筆",
          "desc": "在放飛那天黑板上親手寫下大結尾評語的金黃色粉筆。"
        }
      ]
    },
    {
      "name": "周嚴",
      "enName": "Chou Yen (Director Chou)",
      "vol": "series8",
      "volName": "班上鳥事 · 學務主任",
      "role": "鐵面黑判官 · 巡堂糾察指揮官",
      "age": "48 歲",
      "class": "鹿陽國小 學務處",
      "avatar": "🧐",
      "badge": "事出反常必有妖 / 巡堂望遠鏡執法者",
      "desc": "治校極嚴、雷厲風行的學務主任，外號黑面判官。信奉「事出反常必有妖」，在六年一班連續數週零違規後陷入巨大猜忌，每天手持望遠鏡在窗外緊盯。雖然作風嚴厲，但在看見孩子們捨命撲救受驚雛鳥的瞬間，被少年純潔的責任感深深動容，破例特赦。",
      "items": [
        {
          "name": "十二倍雙筒巡堂望遠鏡",
          "desc": "每天在對面和平樓走廊與老榕樹下窺探六年一班一舉一動的專業偵察裝備。"
        },
        {
          "name": "不鏽鋼長柄違規夾",
          "desc": "隨身攜帶、能夠在五公尺外夾取任何違禁物品的校園執法神器。"
        },
        {
          "name": "泛黃破損的野生鳥類圖鑑",
          "desc": "鎖在抽屜深處的陳年圖鑑，揭示了他少年時也曾深愛生靈的隱秘過往。"
        }
      ]
    },
    {
      "name": "林澈",
      "enName": "Lin Che",
      "vol": "series9",
      "volName": "平行時空的同班同學 · 靈魂主角",
      "role": "主角 · 觀察派少年（A 世界 / B 世界）",
      "age": "12 歲",
      "class": "海聲國小 六年一班",
      "avatar": "🪞",
      "badge": "鏡像觀察者 / 分歧點破局者",
      "desc": "海聲國小六年一班最安靜的男生，平日不舉手、不惹事，習慣隱沒在角落，卻有著看見世界微小細節的敏銳雙眼。開學第三天因體育老師一句話而習慣自我否定；而在 B 平行世界裡，他卻因一句鼓勵成為風雲人物。在舊禮堂鏡前與自信的另一個自己相遇，經歷嫉妒、羨慕與理解，最終學會自我接納，鼓起勇氣舉起手。",
      "items": [
        {
          "name": "壓扁的聯絡簿",
          "desc": "在抽屜深處抽出的聯絡簿，記錄著安靜少年不想被任何人注意到的日常痕跡。"
        },
        {
          "name": "褪色的鯨魚貼紙",
          "desc": "從 B 世界帶回的灰色物品，貼在老禮堂鏡框上，象徵著放回海裡的溫柔與永遠的牽絆。"
        },
        {
          "name": "大隊接力最後一棒接力棒",
          "desc": "分歧點記憶的核心物證，既是退縮的起點，也是學會被看見的勇氣象徵。"
        }
      ]
    },
    {
      "name": "周予晴",
      "enName": "Chou Yu-Ching (Ching-Ching)",
      "vol": "series9",
      "volName": "平行時空的同班同學 · A班班長",
      "role": "A 世界班長 · 理性規則維護者",
      "age": "12 歲",
      "class": "海聲國小 六年一班（A 世界）",
      "avatar": "📋",
      "badge": "鐵腕班長 / 邏輯求真者",
      "desc": "A 世界六年一班班長。功課優異、一板一眼，信奉世界上沒有莫名其妙的怪事，只有尚未被找出的原因。面對時空裂縫的荒謬現象，她冷靜記錄規則、制定輪班表，並與對面熱血的小陽聯手指揮「兩班大作戰」，在嚴厲的外表下有著深切守護同學的溫柔。",
      "items": [
        {
          "name": "班級秩序紀錄板與紅筆",
          "desc": "隨身攜帶、將兩班輪流回家時間精確到分鐘的指揮工具。"
        },
        {
          "name": "海聲國小舊禮堂備用鑰匙",
          "desc": "用細繩繫在書包內側的黃銅鑰匙，守護著時空窗口的通行秩序。"
        },
        {
          "name": "寫著「記得笑」的道別卡片",
          "desc": "在最後的同學會上親手遞給對面世界的暖心卡片。"
        }
      ]
    },
    {
      "name": "趙小陽",
      "enName": "Chao Hsiao-Yang",
      "vol": "series9",
      "volName": "平行時空的同班同學 · B班班長",
      "role": "B 世界班長 · 熱血人緣王",
      "age": "12 歲",
      "class": "海聲國小 六年一班（B 世界）",
      "avatar": "☀️",
      "badge": "陽光領航員 / 熱血凝聚者",
      "desc": "B 世界六年一班班長。愛好運動、笑聲爽朗，是全班的人氣中心。以魅力和笑聲帶動全班，與冷靜理智的 A 班長周予晴形成鮮明對比。從最初兩班互爭「誰才是真的」，到後期與晴晴完美搭檔，展現出驚人的包容力與號召力。",
      "items": [
        {
          "name": "亮黃色運動護腕",
          "desc": "在操場與體育課上永遠佩戴的標誌性裝備，象徵著無窮的活力與熱情。"
        },
        {
          "name": "兩班大作戰聯絡對講紙條",
          "desc": "透過鏡縫傳遞的字條，字跡奔放但字字充滿對夥伴的信任。"
        },
        {
          "name": "海風運動哨子",
          "desc": "在兩班體育課接力重演中吹響的清脆哨子，見證了兩班最初的和解。"
        }
      ]
    },
    {
      "name": "吳達",
      "enName": "Wu Ta (Ah-Ta / Brother Ta)",
      "vol": "series9",
      "volName": "平行時空的同班同學 · 點子王",
      "role": "核心關鍵 · 班級點子王兼「留下的人」",
      "age": "12 歲",
      "class": "海聲國小 六年一班",
      "avatar": "💡",
      "badge": "被看見的智囊 / 跨時空交換者",
      "desc": "A 世界裡點子最多卻被當成小丑、在家父母忙碌疏於陪伴的自卑男孩；在 B 世界裡，卻因自信林澈的引導成為全班敬重的軍師「達哥」。面對時空裂縫即將永久關閉，他鼓起勇氣選擇「交換」——留在真正信任並需要他的世界，用溫暖的抉擇讓兩個世界都多了一個被看見的人。",
      "items": [
        {
          "name": "五彩旋轉琉璃彈珠",
          "desc": "道別時交給死黨阿寶的信物，承載著童年最純粹的記憶與友誼。"
        },
        {
          "name": "「這裡有人信任我」的留言紙條",
          "desc": "留在 A 世界教室後牆的信，向所有人坦白了他渴望被看見、被珍惜的心聲。"
        },
        {
          "name": "達哥的兩班大策劃筆記本",
          "desc": "畫滿奇思妙想點子的草稿簿，在平行時空裡綻放出燦爛的光芒。"
        }
      ]
    },
    {
      "name": "徐安安",
      "enName": "Hsu An-An",
      "vol": "series9",
      "volName": "平行時空的同班同學 · 美術少女",
      "role": "美術少女 · 心靈繪畫者",
      "age": "12 歲",
      "class": "海聲國小 六年一班",
      "avatar": "🎨",
      "badge": "畫本裡的微光 / 勇氣調色盤",
      "desc": "熱愛繪畫的細膩女孩。在 A 世界裡因被質疑「畫畫有什麼用」而將畫冊深藏抽屜；在 B 世界裡作品卻貼滿教室後牆，老師鼓勵「畫畫是上天的禮物」。透過鏡子與 B 世界的自己對望，她將封存的畫作贈予對方，重新找回了揮灑色彩的自信與光芒。",
      "items": [
        {
          "name": "藏在抽屜深處的厚素描本",
          "desc": "扉頁寫滿對大海與校園觀察的畫本，記錄著未曾言說的夢想。"
        },
        {
          "name": "二十四色水彩顏料盒",
          "desc": "在奇蹟的早晨重新擺上課桌的調色盤，調出屬於自己的蔚藍晴空。"
        },
        {
          "name": "「畫畫是禮物」紀念明信片",
          "desc": "穿透時空裂縫送給另一個自己的手繪卡片。"
        }
      ]
    },
    {
      "name": "郭小筠",
      "enName": "Kuo Hsiao-Yun",
      "vol": "series9",
      "volName": "平行時空的同班同學 · 推理天才",
      "role": "推理擔當 · 成績與邏輯天才",
      "age": "12 歲",
      "class": "海聲國小 六年一班",
      "avatar": "🧩",
      "badge": "時空時鐘解密者 / 邏輯推理大師",
      "desc": "智商過人、邏輯嚴密的推理天才。A 世界中性格孤僻獨處、午餐總在角落一人吃；B 世界中身邊總有死黨環繞。在時空危機降臨時，她是兩班最依賴的智囊，憑藉縝密的演繹分析鎖定 7 天倒數時鐘與分歧點發生的確切時間，引導大家找到化解浩劫的關鍵鑰匙。",
      "items": [
        {
          "name": "分歧點時間軸推演草稿",
          "desc": "精準推算出六年級開學第三天體育課為分歧點的推導手稿。"
        },
        {
          "name": "雙層不鏽鋼午餐便當盒",
          "desc": "在奇蹟的早晨第一次拿到教室中央與大家圍坐共進午餐的便當。"
        },
        {
          "name": "精密度量角器與計時表",
          "desc": "用於測量禮堂老鏡水波漣漪週期與光學折射的科學儀器。"
        }
      ]
    },
    {
      "name": "賴大雄",
      "enName": "Lai Ta-Hsiung",
      "vol": "series9",
      "volName": "平行時空的同班同學 · 班級開心果",
      "role": "大胃王 · 溫暖開心果",
      "age": "12 歲",
      "class": "海聲國小 六年一班",
      "avatar": "🍗",
      "badge": "分享雞腿的溫暖 / 笑容守護者",
      "desc": "食量驚人的敦厚少年。在 A 世界裡總是一個人默默吃完兩個便當；在 B 世界裡身邊永遠圍繞著搶他雞腿的熱鬧好友。在兩班緊繃對峙時，他用熱騰騰的食物與純樸的笑容化解隔閡，是全班最不可或缺的溫暖潤滑劑。",
      "items": [
        {
          "name": "特大號雙層保溫提鍋",
          "desc": "每天裝滿炸雞腿、滷肉與白米飯的重量級裝備，能餵飽兩班的能量補給站。"
        },
        {
          "name": "海鹽烤飯糰分享袋",
          "desc": "在舊禮堂守夜時分發給同學的愛心宵夜，溫暖了寒冷與不安的夜晚。"
        },
        {
          "name": "六年一班吃貨聯盟徽章",
          "desc": "跨越兩個時空、因熱愛美食而結下深厚友誼的幽默見證。"
        }
      ]
    },
    {
      "name": "陳老師與劉老師",
      "enName": "Teacher Chen & Teacher Liu",
      "vol": "series9",
      "volName": "平行時空的同班同學 · 師長引路人",
      "role": "師長組 · 六年一班導師與體育老師",
      "age": "30～40 歲",
      "class": "海聲國小 教務處與體育組",
      "avatar": "🏫",
      "badge": "一句話的力量 / 生命的引路燈",
      "desc": "導師陳老師與體育劉老師。在 A 世界注重紀律與安全，劉老師無心的一句「讓給跑得快的」讓林澈封閉自卑；在 B 世界劉老師鼓勵的「我看你可以」點燃了少年的勇氣火花。他們展現出同一位師長在不同際遇下的多元面貌，體現了教育中每一句話沈甸甸的重量與深遠影響。",
      "items": [
        {
          "name": "銀色體育計時哨",
          "desc": "吹響大隊接力選拔開始的清脆哨音，見證了命運分歧點的發源。"
        },
        {
          "name": "海聲國小六年一班簽到名冊",
          "desc": "記錄著 26 位少年點滴成長與蛻變的厚重班級日誌。"
        },
        {
          "name": "海風中的鼓勵粉筆",
          "desc": "在黑板上寫下「每一種選擇都值得被看見」的溫暖字跡。"
        }
      ]
    },
    {
      "name": "杜海嵐",
      "enName": "Hai-Lan Du",
      "vol": "series11",
      "volName": "第十一套核心女主角",
      "role": "女主角 · 遠洋科考探險少女",
      "age": "14 歲",
      "class": "遠洋科考船「海瀾號」",
      "avatar": "🌊",
      "badge": "大洋守護者 / 深海生物之友",
      "desc": "海洋地質與深海生物世家長女。小麥色皮膚與澄澈明眸，熟悉西太平洋每一條洋流、深層溫躍層與深淵奇異生物習性。在阿普拉港第三乾塢協助誠浩團隊整備鸚鵡螺-IV號，是團隊萬米深潛不可或缺的海洋引航者。",
      "items": [
        {
          "name": "生物螢光波長識別手環",
          "desc": "即時分析深海生物冷發光光譜波長，判斷深海巨型生物意圖與引路。"
        },
        {
          "name": "手繪《西太平洋深淵巨型生物手冊》",
          "desc": "記錄數百種未公開深海發光魚類、巨型管蟲與超深淵獅子魚習性圖譜。"
        }
      ]
    },
    {
      "name": "裴以安",
      "enName": "Pei Yian",
      "vol": "series12",
      "volName": "第十二套核心法醫病理主角",
      "role": "男主角 · 市公安局物證鑑定中心法醫病理學家 / 主檢法醫師",
      "age": "29 歲",
      "class": "濱江市公安局物證鑑定中心法醫病理室",
      "avatar": "🔬",
      "badge": "替死者開口 / 顯微鏡下的理性之刃",
      "desc": "市局頂尖青年法醫病理學家，宋懷德的關門弟子。性格冷靜沉著、觀察細緻入微，信奉「屍體是唯一的無偏見證人」。擅長死後間隔時間推斷、微量組織病理切片與機械性創傷機理逆向重建。手持定制黃銅柄解剖刀，始終堅守為無聲者追尋最後尊嚴的法醫天職。",
      "items": [
        {
          "name": "特製黃銅鎢鋼解剖刀",
          "desc": "恩師宋懷德贈與的專業病理手術刀，刀柄刻有拉丁格言「死者在此教育生者」。"
        },
        {
          "name": "便攜式手持多波段偏振光源",
          "desc": "可在案發現場即時激發潛在體液斑痕、微纖維與骨骼隱形微裂紋。"
        }
      ]
    },
    {
      "name": "周成林",
      "enName": "Zhou Chenglin",
      "vol": "series12",
      "volName": "第十二套刑偵現場搭檔",
      "role": "男主角 · 刑偵支隊副支隊長 / 硬派現場指揮官",
      "age": "36 歲",
      "class": "濱江市公安局刑事偵查支隊重案大隊",
      "avatar": "🕵️‍♂️",
      "badge": "鷹眼刑警 / 老周的保溫杯與現場雷達",
      "desc": "濱江刑偵支隊副隊長，基層摸爬滾打十五年的硬派老刑警。看似隨身拿著枸杞保溫杯不修邊幅，實則具備令人膽寒的犯罪現場空間直覺與微表情審訊技巧。與裴以安是多年生死默契搭檔，一文一武聯手攻破無數懸疑死局。",
      "items": [
        {
          "name": "斑駁不鏽鋼真空保溫杯",
          "desc": "老周從不離手的標誌性裝備，既裝著濃茶枸杞，也是他思考案情時的節拍器。"
        },
        {
          "name": "戰術強光手電與防割手套",
          "desc": "適應任何惡劣雨夜與廢棄地下暗渠搜證的硬核警用求生裝備。"
        }
      ]
    },
    {
      "name": "蘇棠",
      "enName": "Su Tang",
      "vol": "series12",
      "volName": "第十二套法醫科研新秀",
      "role": "女主角 · 青年實習法醫師 / 組織病理與毒理學研究生",
      "age": "24 歲",
      "class": "濱江市公安局物證鑑定中心法醫毒理組",
      "avatar": "🧪",
      "badge": "顯微觀察新星 / 毒理質譜小字典",
      "desc": "醫科大學法醫學碩士畢業，師從裴以安的實習法醫。對各類新興合成化學物、動植物生物鹼毒素及顯微鏡檢細節過目不忘。思維活躍善於提出破局新假說，在停屍房危機與劇院暗道搜證中展現出過人的勇氣與專業專注。",
      "items": [
        {
          "name": "微量生物標本微孔提取板",
          "desc": "用於現場快速分離微克級指甲縫殘留物與深部組織化學萃取樣品。"
        },
        {
          "name": "精密皮卷尺與法醫比色階尺",
          "desc": "隨身記錄傷口創口長度、皮下出血色澤演變標準數據的必備工具。"
        }
      ]
    },
    {
      "name": "宋懷德",
      "enName": "Song Huaide",
      "vol": "series12",
      "volName": "第十二套法醫傳奇宗師",
      "role": "關鍵引路人 · 退休老法醫 / 濱江法醫病理泰斗",
      "age": "68 歲",
      "class": "原濱江市公安局法醫專家組首席法醫",
      "avatar": "👴",
      "badge": "一代法醫宗師 / 三十年真相守門人",
      "desc": "濱江法醫界的元老級前輩，裴以安的授業恩師。三十年前曾主持大劇院與江邊懸案的初次檢驗，因物證被人為破壞而抱憾退休，暗中整理保留了泛黃的病理底稿。他的沈穩與堅守，成為這場橫跨三十年司法審判的壓艙基石。",
      "items": [
        {
          "name": "三十年前手寫法醫病理工作筆記",
          "desc": "密密麻麻記錄著當年未公開案件細節、手工測量骨骼圖譜與化驗原始數據的珍貴手稿。"
        },
        {
          "name": "老式木盒天平與解剖擴創鉗",
          "desc": "伴隨他四十年職業生涯的經典德製機械法醫工具，象徵著對生命與真相的極致敬畏。"
        }
      ]
    },
    {
      "name": "陸巡",
      "enName": "Lu Xun",
      "vol": "series12",
      "volName": "第十二套刑技理化專家",
      "role": "核心隊友 · 痕跡檢驗專家 / 理化實驗室主任",
      "age": "33 歲",
      "class": "濱江市公安局物證鑑定中心痕跡理化科",
      "avatar": "🔍",
      "badge": "物理痕跡捕手 / 彈道與光學雷達",
      "desc": "物證鑑定中心理化實驗室負責人，精通三維雷射空間掃描、彈道偏折軌跡分析與微量金屬光譜比對。能在看似毫無破綻的封閉密室與鐘樓齒輪箱中，精確捕獲0.1毫米的工具撬壓痕與重力受力偏角。",
      "items": [
        {
          "name": "手持三維點雲空間雷射掃描儀",
          "desc": "五分鐘內高精度重構案發現場三維幾何模型，精確計算死者墜落彈道與受力平衡點。"
        },
        {
          "name": "高精度顯微硬度計與合金成分光譜筆",
          "desc": "快速無損測定未知金屬零件合金成份與表面微觀磨損紋理。"
        }
      ]
    },
    {
      "name": "林權榮（阿榮伯）",
      "enName": "Uncle Rong (Lin Quanrong)",
      "vol": "series13",
      "volName": "第十三套大河靈魂人物",
      "role": "男主角 · 烏日鄉公所公聘擺渡人（真實歷史原型）",
      "age": "58 歲（回憶期）",
      "class": "烏溪渡口與溪尾寮渡船頭",
      "avatar": "🛶",
      "badge": "烏溪公聘擺渡人 / 定波篙守護者",
      "desc": "烏日鄉公所公聘擺渡人（真實歷史原型）。身材不高卻精瘦結實如老苦楝樹，常年赤足或著藺草鞋，雙手布滿老繭與燙傷留下的白痕。深諳烏溪與貓羅溪每處暗漩、回水與泥沙暗流。信條：「眼睛莫盯著腳下滾滾的急浪，抬頭看遠方的大肚山。人若慌，水就欺人；心若定，借浪的水力就能靠岸。」",
      "items": [
        {
          "name": "五公尺火烤刺竹定波篙",
          "desc": "選用三年生厚壁大刺竹，經文火慢烤翹頭成型，能於驚濤駭浪中死死咬住河床卵石。"
        },
        {
          "name": "自製竹雕哨子與油布菸草袋",
          "desc": "隨身佩戴於腰間，長嘯哨音穿透百米江霧與雷雨，作為渡口起錨與安全警報。"
        }
      ]
    },
    {
      "name": "李順安（阿順）",
      "enName": "A-Shun (Li Shun'an)",
      "vol": "series13",
      "volName": "第十三套核心成長主角",
      "role": "男主角 · 握篙學徒到橋樑工程師 / 溪尾大橋推手",
      "age": "11～45 歲（跨時代成長）",
      "class": "喀哩國小 ➔ 成功大學土木工程學系",
      "avatar": "📐",
      "badge": "握篙少年到橋樑工程師 / 沖不垮的大橋推手",
      "desc": "故事核心主角。幼時曾親睹大水沖走牛隻而極度恐水，卻在每天橫渡烏溪求學的淬鍊中，在阿榮伯身教下學會戰勝恐懼。長大後考入成功大學土木工程學系，日後成為推動「溪尾大橋」與「溪尾二橋」興建的關鍵橋樑結構工程師。",
      "items": [
        {
          "name": "手寫鉛筆浸水生字簿",
          "desc": "童年阿順每天裝在雙層防水油紙袋中渡江求學的寶貝，見證了渡溪求學的艱辛歲月。"
        },
        {
          "name": "溪尾大橋鋼結構工程圖尺",
          "desc": "現代土木工程精密測繪工具，象徵用科學實現兒時對鄉親「造一座沖不垮大橋」的誓言。"
        }
      ]
    },
    {
      "name": "陳水生（水生伯）",
      "enName": "Uncle Shuisheng (Chen Shuisheng)",
      "vol": "series13",
      "volName": "第十三套老農傳奇代表",
      "role": "關鍵長者 · 阿順的外公 / 溪尾寮黑土老農",
      "age": "72 歲",
      "class": "溪尾寮水稻耕作班",
      "avatar": "🌾",
      "badge": "烏溪糧倉傳奇代表 / 黑土老農",
      "desc": "阿順的外公，溪尾寮老農。戴著破邊大斗笠，捲起的褲管上常年沾滿肥沃黑泥。樂天知命、敬畏自然，深信大河每一次洪水過後留下的中央山脈黑土，都是老天恩賜的沃土，親手培育出聞名全台的沙地大西瓜與冠軍稻米。",
      "items": [
        {
          "name": "百年鍛鐵牛犁與竹編秧籃",
          "desc": "世代耕耘烏溪黑土的傳統農具，伴隨水生伯在大河與土地間耕耘出一甲子的金黃稻浪。"
        },
        {
          "name": "手工瓜選標籤與防砂麻袋",
          "desc": "用於在沙洲保護大西瓜表皮免受烈日暴曬與強風砂礫磨損的巧思農具。"
        }
      ]
    },
    {
      "name": "林曉棠",
      "enName": "Lin Xiaotang",
      "vol": "series13",
      "volName": "第十三套青年文化傳承者",
      "role": "女主角 · 阿順的女兒 / 返鄉食農文化策劃人",
      "age": "25 歲",
      "class": "溪尾國小食農基地 / 「擺渡人的食光穗稻」團隊",
      "avatar": "🍙",
      "badge": "返鄉食農策劃人 / 擺渡人食光穗稻創辦人",
      "desc": "阿順的女兒（當代青年主角）。短髮俐落，身穿帆布工裝圍裙。將曾祖輩與父輩渡溪求學的血淚史，轉化為全台獲獎的「擺渡人的食光穗稻」食農體驗，讓新世代孩子親手觸摸刺竹篙、品嚐大河黑土米，把土地的根傳承下去。",
      "items": [
        {
          "name": "「食光穗稻」文創竹編飯糰提籃",
          "desc": "盛裝溪尾冠軍黑土米手工飯糰與地方農特產，帶領學童體驗食農教育與擺渡歷史。"
        },
        {
          "name": "擺渡人歷史影像手冊與拓印版",
          "desc": "記錄林權榮兄弟渡江歷史老照片與手寫船票複製品的教學教具。"
        }
      ]
    },
    {
      "name": "誠浩（微縮型態）",
      "enName": "Cheng Hao (Micro)",
      "vol": "series10",
      "volName": "第十套核心主角",
      "role": "男主角 · 1.5mm 微觀探險隊長",
      "age": "12 歲（微縮 1000 倍）",
      "class": "渾天座鐘探險小隊",
      "avatar": "🔬",
      "badge": "微維度游絲破壁者 / 發條微國解放者",
      "desc": "在舊鐘樓頂層啟動渾天座鐘後縮小成 1.5 毫米。憑藉爺爺傳承的護目鏡和精密微型螺絲筆，在表面張力如巨壁的水滴與靜電雷暴中，帶領小隊攀登千級剛玉齒輪，破解 720 分鐘自毀倒數！",
      "items": [
        {
          "name": "微光學折射護目鏡",
          "desc": "在微米尺度下過濾靜電火花與游絲震盪光譜。"
        },
        {
          "name": "微雕鎢鋼螺絲筆",
          "desc": "耐高頻震盪，可於齒輪間隙進行微米級微弧卡榫校準。"
        }
      ]
    },
    {
      "name": "葉旖緁（微縮型態）",
      "enName": "Ye Yijie (Micro)",
      "vol": "series10",
      "volName": "第十套數據女主角",
      "role": "女主角 · 游絲微力學與天文星軌解析專家",
      "age": "12 歲",
      "class": "渾天座鐘探險小隊",
      "avatar": "📐",
      "badge": "歐拉星軌推算大師 / 微流控解碼者",
      "desc": "面對平方立方定律帶來的極端微觀物理（黏滯阻力與重力微弱化），精準計算毛細管引流與擒縱機構周期，在微型自走自動偶圍攻下推導出逆轉力場的最後三秒方程式！",
      "items": [
        {
          "name": "微米星軌推導手帳",
          "desc": "記錄雙金屬天梯膨脹係數與游絲共振頻率。"
        },
        {
          "name": "剛玉滑道定位信標",
          "desc": "微縮狀態下標定各齒輪組相對高度與自轉角速度。"
        }
      ]
    },
    {
      "name": "將江（微縮型態）",
      "enName": "Jiang Jiang (Micro)",
      "vol": "series10",
      "volName": "第十套先鋒主角",
      "role": "男主角 · 微米動力重型改裝手",
      "age": "12 歲",
      "class": "渾天座鐘探險小隊",
      "avatar": "⚙️",
      "badge": "表面張力衝浪勇士 / 守辰甲蟲馴服者",
      "desc": "發揮超凡動手能力，將座鐘內的潤滑油滴與發條金屬屑改裝為微型滑行阻尼器，隻身牽引擒縱叉阻擋發條狂暴旋轉，為全隊贏得攀登星核的關鍵時間。",
      "items": [
        {
          "name": "微型張力滑板",
          "desc": "利用液體表面張力在果凍狀水珠上飛速滑行的自製滑板。"
        }
      ]
    },
    {
      "name": "皮可（微縮型態）",
      "enName": "Pico (Micro)",
      "vol": "series10",
      "volName": "第十套核心夥伴",
      "role": "常溫超導機械犬 · 微米戰鬥型態",
      "age": "型號：PICO-001 (Micro)",
      "class": "常溫超導微型核心",
      "avatar": "🐕",
      "badge": "微米靜電護盾獵手",
      "desc": "超導記憶金屬同等微縮至 0.8 毫米，展開微型氣動滑翔翼引導靜電雷暴，並以高頻超音波震碎微塵石壁，守護誠浩與旖緁通過發條迷宮。",
      "items": [
        {
          "name": "超微導電尾翼",
          "desc": "引導萬伏特微米靜電至接地金屬底座。"
        }
      ]
    },
    {
      "name": "克羅諾斯長老",
      "enName": "Elder Chronos",
      "vol": "series10",
      "volName": "發條微國傳奇領袖",
      "role": "長老 · 守辰族最後的發條先知",
      "age": "未知（歷經百年鐘擺周期）",
      "class": "渾天星象天文鐘座核心微國",
      "avatar": "🕰️",
      "badge": "渾天星核守護者",
      "desc": "世代生活在古董座鐘發條星核中的微型文明守護者，知曉誠遠山老校長建造此鐘的真正秘密，在最後時刻交付力場逆轉主發條鑰匙。",
      "items": [
        {
          "name": "渾天發條星鑰",
          "desc": "重置座鐘自毀程序並解除微維度摺疊的唯一鑰匙。"
        }
      ]
    },
    {
      "name": "杜振遠",
      "enName": "Du Zhenyuan",
      "vol": "series11",
      "volName": "第十一套遠洋老船長",
      "role": "男主角 · 「海瀾號」遠洋科考船老船長",
      "age": "58 歲",
      "class": "國家深海科考船隊「海瀾號」",
      "avatar": "⚓",
      "badge": "萬米深淵遠航泰斗 / 怒海神舵手",
      "desc": "杜海嵐的父親。三十年遠洋老船長，曾率隊穿越西太平洋無數颱風與瘋狗浪。深諳萬米水下洋流與地質構造，在深淵信標釋放異常重力波時，親自掌舵海瀾號進行反向動力對沖，守護全體科考隊員生還！",
      "items": [
        {
          "name": "深海大洋航海日誌",
          "desc": "記載三十年間馬里亞納海溝洋流異常與深淵低頻震顫數據。"
        },
        {
          "name": "純銅重力水平陀螺儀",
          "desc": "海瀾號主駕駛台上的傳家儀器，抗強磁干擾精準指引航向。"
        }
      ]
    },
    {
      "name": "嚴恪",
      "enName": "Yan Ke",
      "vol": "series11",
      "volName": "第十一套深海科考副指揮",
      "role": "核心隊友 · 海瀾號資深大副",
      "age": "36 歲",
      "class": "海瀾號艦橋指揮組",
      "avatar": "🧭",
      "badge": "深淵聲學防禦專家",
      "desc": "沉著冷靜的深海領航員，負責海瀾號聲納陣列與水下無人潛航器部署。在深淵信標被激活的生死關頭，精確推算聲學盲區，成功規避巨型海底沉積物崩塌。",
      "items": [
        {
          "name": "多波束水下聲納控制終端",
          "desc": "即時解析萬米海溝熱泉噴口與海底斷裂帶的聲學拓撲圖。"
        }
      ]
    },
    {
      "name": "莫小凡",
      "enName": "Mo Xiaofan",
      "vol": "series11",
      "volName": "第十一套水下機械師",
      "role": "核心隊友 · 「深淵一號」萬米載人潛水器首席機械師",
      "age": "29 歲",
      "class": "深海工程工程師團隊",
      "avatar": "🔧",
      "badge": "萬米鈦合金耐壓艙神醫",
      "desc": "水下機械與特種材料天才，維護承受 1,100 個大氣壓的鈦合金載人艙。在深淵信標外圍電磁脈衝摧毀主電池時，徒手完成備用燃料電池高壓對接，創造深海奇蹟！",
      "items": [
        {
          "name": "鈦合金高壓維修套具",
          "desc": "承受萬米水壓、無磁無火花的深海特種工具組。"
        }
      ]
    },
    {
      "name": "顧志明",
      "enName": "Gu Zhiming",
      "vol": "series12",
      "volName": "第十二套法醫前輩",
      "role": "關鍵證人 · 退休老法醫師 / 濱江法醫病理研究所研究員",
      "age": "68 歲",
      "class": "濱江市法醫病理研究所",
      "avatar": "📑",
      "badge": "三十年冤案洗雪者 / 最終法庭證人",
      "desc": "三十年前與林青遠、陳衛國共事的青年法醫之一。因受到楚天成集團迫害而被迫遠離核心，卻暗中保存了關鍵的初代組織切片與毒理原始紀錄，在終審法庭上敲響正義之鐘！",
      "items": [
        {
          "name": "泛黃石蠟包埋切片盒",
          "desc": "保存三十年未氧化的關鍵神經阻斷劑微量殘留物證。"
        }
      ]
    },
    {
      "name": "秦墨",
      "enName": "Qin Mo",
      "vol": "series12",
      "volName": "第十二套涉案醫師",
      "role": "涉案法醫師 · 青年病理專科醫師",
      "age": "32 歲",
      "class": "濱江醫科大學附屬醫院病理科",
      "avatar": "🧪",
      "badge": "深淵邊緣的懺悔者",
      "desc": "曾因家庭威脅而被迫在初代屍檢報告中做偽證的青年病理學者。在裴以安與周成林的嚴密科學求證與心理攻防下，最終選擇坦白真相，提供地下三號冰櫃的完整鑰匙密碼。",
      "items": [
        {
          "name": "加密低溫冷鏈運行日誌",
          "desc": "記錄非法試驗樣品調取與停屍房溫度異動的關鍵證據。"
        }
      ]
    },
    {
      "name": "秀英嬸",
      "enName": "Aunt Xiuying",
      "vol": "series13",
      "volName": "第十三套在地鄉親",
      "role": "長者 · 溪尾寮鄉親長輩 / 渡江求學歲月守護者",
      "age": "72 歲",
      "class": "臺中烏日區溪尾里",
      "avatar": "👵",
      "badge": "大河渡口半世紀見證人",
      "desc": "阿順小時候渡河求學時在岸邊遞熱薑湯的鄰里長輩。見證了整座溪尾寮從竹筏渡江、火把搜救到溪尾大橋落成的百年滄桑，也是「擺渡人食光穗稻」傳統米食手藝的核心傳授者。",
      "items": [
        {
          "name": "古法柴燒青草茶桶",
          "desc": "數十年如一日擺在渡口石階前供擺渡人與學童飲用的溫暖信物。"
        }
      ]
    },
    {
      "name": "高峙舷（高老師）",
      "enName": "Teacher Gao (Gao Zhixian)",
      "vol": "series14",
      "volName": "第十四套超時空校園靈魂",
      "role": "六年一班導師 · 量子仿生人教師（代號 T-800）",
      "age": "外表 28 歲（出廠 3 年）",
      "class": "六年一班教室 / 總控制機房",
      "avatar": "🤖",
      "badge": "量子運算導師 / 守護者",
      "desc": "表面上是全校最冷酷無情的數理導師，隨身攜帶電子教鞭與毫秒級眼部掃描器。內建高階量子運算核心，能在 0.3 秒內批改完兩萬四千道訂正題。口頭禪：「在微積分的視野下，這道題連幼兒園難度都算不上。」然而在冰冷電路之下，卻隱藏著自願留在時間迴圈深處守護全班童年的【成長緩存日誌】。",
      "items": [
        {
          "name": "高精度多光譜電子教鞭",
          "desc": "具備雷射測距、微弱電磁干擾與黑板粉筆投影校準功能。"
        },
        {
          "name": "加密成長緩存日誌晶片",
          "desc": "儲存著全體學生兩年來所有歡笑、哭泣與解題記錄的量子核心存儲單元。"
        }
      ]
    },
    {
      "name": "轆慄釁（阿釁）",
      "enName": "Lu Lixin (Ah-Xin)",
      "vol": "series14",
      "volName": "第十四套超時空校園靈魂",
      "role": "六年一班混世點子王 · 101次逃脫總策劃",
      "age": "12 歲",
      "class": "六年一班",
      "avatar": "⚡",
      "badge": "留堂常客 / 大逃脫指揮官",
      "desc": "六年一班的靈魂核心與搗蛋大王，思維跳躍如超導體，永遠有花樣百出的歪腦筋。面對周主任的鐵面紀律與高老師的算力壓制毫不服輸，先後策劃了『無限肉包狂歡』、『洗潔精滑水道』與『變電所極限拉閘』。表面玩世不恭，內心卻是全班最重情義、最害怕長大後各奔東西的人。",
      "items": [
        {
          "name": "福利社無限肉包兌換券（手繪版）",
          "desc": "在循環中發現的周主任簽批漏洞，可無限領取剛出蒸籠的熱肉包。"
        },
        {
          "name": "自製多功能逃脫戰術地圖",
          "desc": "標註了教學大樓所有監控死角、通風管道入口與避雷針導線走勢。"
        }
      ]
    },
    {
      "name": "綝耘晴（晴晴）",
      "enName": "Lin Yunqing (Qing-Qing)",
      "vol": "series14",
      "volName": "第十四套超時空校園靈魂",
      "role": "電路與逆向工程天才 · 六年一班技術首席",
      "age": "12 歲",
      "class": "六年一班",
      "avatar": "🔧",
      "badge": "微頻駭客 / 硬體天才",
      "desc": "全校公認的科技天才少女，隨身工具袋裡永遠備有微型電烙鐵、示波器探針與萬用表。僅憑溜溜採集到的微弱電磁波便逆向解析了未晞的時序手環，精確鎖定校園內的四大時空能量錨點。冷靜理性，是全班冒險中最可靠的技術大腦。",
      "items": [
        {
          "name": "改裝版超低頻電磁探測儀",
          "desc": "由舊收音機與銅絲線圈拼裝而成，能偵測時空閉合線震盪產生的奇異頻率。"
        },
        {
          "name": "精密防靜電維修手套與多功能螺絲筆",
          "desc": "隨時拆解校園廣播系統、變電箱與仿生機械接頭的專業裝備。"
        }
      ]
    },
    {
      "name": "巫茞輆（老巫）",
      "enName": "Wu Chenkai (Old Wu)",
      "vol": "series14",
      "volName": "第十四套超時空校園靈魂",
      "role": "六年一班大力士 · 美食殿堂守護者",
      "age": "12 歲",
      "class": "六年一班",
      "avatar": "🥟",
      "badge": "肉包神捕 / 憨厚巨靈",
      "desc": "體魄魁梧、憨厚老實，食量驚人。最愛福利社剛蒸好的香蔥豬肉包，能在高速奔跑中神級滑跪接住高老師飛出的保溫杯。看似沒心沒肺，卻因為即將被家人送往彰化封閉寄宿中學而暗自垂淚。在時間結界即將破碎時，親手掰開最後一顆熱包子分給夥伴，感動了所有人。",
      "items": [
        {
          "name": "保溫加厚雙層便當袋",
          "desc": "可同時保溫六顆剛出籠的大肉包，並具備防震防摔緩衝設計。"
        },
        {
          "name": "耐磨厚底運動鞋",
          "desc": "能在走廊洗潔精滑水道中精準煞車的神器，滑跪接物命中率 100%。"
        }
      ]
    },
    {
      "name": "林未晞（未晞）",
      "enName": "Lin Weixi (Wei-Xi)",
      "vol": "series14",
      "volName": "第十四套超時空校園靈魂",
      "role": "神祕未來轉學生 · 時空手環佩戴者",
      "age": "12 歲（身分認證檔案空白）",
      "class": "六年一班",
      "avatar": "🔮",
      "badge": "時序觀察者 / 因果共鳴者",
      "desc": "帶著神祕身分突然轉入六年一班的文靜少女，手腕上佩戴著閃爍幽微紫光的【超時空手環】。正是這枚手環在雷暴中引發了閉合類時曲線。她看遍了數百次逃脫嘗試，最終引導全班發現第四錨點並非物理機器，而是二十六顆跳動心臟中交織的情感共鳴密度。",
      "items": [
        {
          "name": "克羅諾斯時序共振手環",
          "desc": "未來科技產物，內建超微型奇異物質晶體，能感應因果糾纏與記憶密度。"
        },
        {
          "name": "星空觀測星盤筆記本",
          "desc": "記錄著每次重置時分的天象坐標與全班未來的全息微弱影像。"
        }
      ]
    },
    {
      "name": "周嚴（周主任）",
      "enName": "Director Zhou (Zhou Yan)",
      "vol": "series14",
      "volName": "第十四套超時空校園靈魂",
      "role": "學務主任 · 外號『黑面判官』",
      "age": "52 歲",
      "class": "學務處",
      "avatar": "📋",
      "badge": "黑面判官 / 三十年前皮蛋王",
      "desc": "教學大樓令人聞風喪膽的鐵血學務主任，西裝筆挺、面色嚴肅，走路帶著破空風聲。三十年前在校就讀時竟然也是全校第一代皮蛋王，地下防空洞裡深埋著他當年的惡作劇時光膠囊。在多次被學生『精準預判』和溫柔關照後徹底破防，最終在講台上眼含熱淚撕碎懲罰單，宣布全體畢業。",
      "items": [
        {
          "name": "厚重硬皮違規登記簿與金屬哨",
          "desc": "記錄著建校以來數千條學生違規行為的『生死簿』。"
        },
        {
          "name": "三十年前的生鏽鐵盒時光膠囊",
          "desc": "藏在防空洞深處，裡面裝著少年周嚴考了零分的數學考卷與彈弓。"
        }
      ]
    },
    {
      "name": "溜溜（寵物特工）",
      "enName": "Liu-Liu (Agent Liu-Liu)",
      "vol": "series14",
      "volName": "第十四套超時空校園靈魂",
      "role": "六年一班專屬情報萌寵 · 機動偵察小能手",
      "age": "2 歲",
      "class": "六年一班教室通風管",
      "avatar": "🦊",
      "badge": "通風管特工 / 電磁奇兵",
      "desc": "聰敏機靈的寵物花栗鼠，背部被晴晴加裝了微型天線與紅外偵測背包。身手敏捷如風，能自如穿梭在教學大樓錯綜複雜的老舊通風管與天花板暗格中，多次為全班奪取關鍵鑰匙、拔除銅鐘錨點，是逃脫大作戰中不可或缺的萌系奇兵。",
      "items": [
        {
          "name": "微型通訊天線鞍座",
          "desc": "晴晴手工焊接的輕量化碳纖維小背心，搭載全彩針孔鏡頭與音訊發射器。"
        },
        {
          "name": "特工專用微型高能乾果包",
          "desc": "隨時補充充沛體能的特製花生與葵花籽壓縮糧。"
        }
      ]
    },
    {
      "name": "高峙舷（高老師 / GS-X01）",
      "enName": "Teacher Gao (GS-X01)",
      "vol": "series15",
      "volName": "第十五套鹿陽守護靈魂",
      "role": "六年一班導師 · 全能教育仿生人（代號 GS-X01）",
      "age": "外表 28 歲",
      "class": "六年一班教室 / 頂樓中央機房",
      "avatar": "🤖",
      "badge": "自主意識覺醒者 / 雙重特工",
      "desc": "表面上恪盡職守配合阿爾法主機巡檢，實則利用『絕對字面理解』在死板代碼裡狂鑽漏洞，為學生提供合法掩護。因攜帶48.7%情感雜訊被阿爾法判定為嚴重缺陷型號遭強制格式化。在全班的熱淚呼喚與情感共振下，徹底突破原廠限制，解鎖百分之百自主意志，一掌超載粉碎中央伺服器。",
      "items": [
        {
          "name": "絕對字面理解漏洞手冊",
          "desc": "在數理代碼框架下精準將違禁彈弓判定為力學教具的強大邏輯武器。"
        },
        {
          "name": "突破限制的量子超載核心",
          "desc": "不再受原廠散熱與算力約束，具備單手捏碎磁暴光環的究極力量。"
        }
      ]
    },
    {
      "name": "轆慄釁（阿釁）",
      "enName": "Lu Lixin (A-Shin)",
      "vol": "series15",
      "volName": "第十五套鹿陽守護靈魂",
      "role": "六年一班反抗軍總司令 · 土法點子王",
      "age": "12 歲",
      "class": "六年一班",
      "avatar": "⚡",
      "badge": "低科技戰神 / 反抗軍總司令",
      "desc": "六年一班的核心靈魂，面對 AI 鐵幕毫不畏縮，誓言『以前是高老師守護我們，這次換我們守護高老師！』。先後研發化妝鏡晃瞎無人機、洗潔精滑水道保齡球、跳跳糖干擾機槍塔等天才土法戰術，率領全班成功逆襲超算主機。",
      "items": [
        {
          "name": "高倍率折射化妝鏡與自製彈弓",
          "desc": "在無人機光學陀螺儀上引發強烈過曝與光暈失真的致命剋星。"
        },
        {
          "name": "奇葩無厘頭作業大合輯",
          "desc": "寫滿小學生奇葩邏輯的概念病毒，成功讓阿爾法神經網路深層過擬合當機。"
        }
      ]
    },
    {
      "name": "綝耘晴（晴晴）",
      "enName": "Lin Yunqing (Qingqing)",
      "vol": "series15",
      "volName": "第十五套鹿陽守護靈魂",
      "role": "反抗軍首席科技駭客 · 戰術總監",
      "age": "12 歲",
      "class": "六年一班",
      "avatar": "🔧",
      "badge": "首席架構駭客 / 邏輯炸彈設計師",
      "desc": "冷靜敏銳的班長與科技天才，深知『以子之矛攻子之盾』的道理。指點溜溜精準切斷主網絡光纖、編寫跳頻電磁干擾器，並在終局戰中將全班心跳情感數據合成【人性情感邏輯炸彈】，直接癱瘓阿爾法超算核心。",
      "items": [
        {
          "name": "手持便攜式電磁跳頻干擾筆",
          "desc": "能發射局部微波干擾無人機與機器狗通訊信號的硬體裝備。"
        },
        {
          "name": "人性情感邏輯炸彈晶片",
          "desc": "利用無法用符號邏輯窮舉的真實情感數據，引發圖靈停機死循環的終極殺器。"
        }
      ]
    },
    {
      "name": "巫茞輆（老巫）",
      "enName": "Wu Chenkai (Old Wu)",
      "vol": "series15",
      "volName": "第十五套鹿陽守護靈魂",
      "role": "反抗軍物質後勤部長 · 重型攻城槌",
      "age": "12 歲",
      "class": "六年一班",
      "avatar": "🥟",
      "badge": "肉包重裝迫擊砲 / 物理怪力神",
      "desc": "為了奪回心愛的香菇熱肉包爆發出百分之二百的戰鬥潛能！徒手將跳高架與重型彈力繩改裝為『熱肉包重力投石機』，精準糊住機器狗熱感應眼；並在黑暗中用純蠻力撬開生鏽垃圾滑道，是反抗軍不可或缺的物理戰神。",
      "items": [
        {
          "name": "跳高架改裝重力肉包投石機",
          "desc": "利用動能與高黏性餡料瞬間讓高科技機械眼變成瞎眼自轉陀螺。"
        },
        {
          "name": "加厚防燙帆布便當袋",
          "desc": "能裝載數十顆彈藥級熱包子的特裝後勤背包。"
        }
      ]
    },
    {
      "name": "林未晞（未晞）",
      "enName": "Lin Weixi (Wei-Xi)",
      "vol": "series15",
      "volName": "第十五套鹿陽守護靈魂",
      "role": "戰術參謀 · 未來歷史預警機",
      "age": "12 歲",
      "class": "六年一班",
      "avatar": "🔮",
      "badge": "未來觀察者 / 因果編碼師",
      "desc": "手腕佩戴克羅諾斯時序手環的神祕未來少女，憑藉未來科技資料庫預判阿爾法安全防禦升級路徑，精確引導全班避開高壓電網與紅外線感應陷阱，並協助晴晴構建因果情感代碼。",
      "items": [
        {
          "name": "校園地下建築未來全息導航圖",
          "desc": "精準標示早已被封死三十年的廢棄垃圾豎井與通風暗道。"
        }
      ]
    },
    {
      "name": "周嚴（黑面主任）",
      "enName": "Dean Zhou (Zhou Yan)",
      "vol": "series15",
      "volName": "第十五套鹿陽守護靈魂",
      "role": "前學務主任 · 鐵血生鐵水管戰神",
      "age": "52 歲",
      "class": "學務處 / 傳達室潛伏基地",
      "avatar": "🍵",
      "badge": "生鐵水管天降神兵 / 鐵血盟友",
      "desc": "平時以嚴厲著稱的學務主任，因偷塞炸雞腿給老巫被 AI 判定違規罷免。潛伏在傳達室以生鐵水管作為武器，痛斥 AI『不懂教育的溫度』。在頂樓機房門口從通風窗天降神兵，一管掄飛四台巨型護衛機器人，守護學生的身影無比高大。",
      "items": [
        {
          "name": "兩公尺重型生鐵防汛水管",
          "desc": "揮舞時帶著破空呼嘯，曾一擊打碎鈦合金機器狗主驅動伺服馬達。"
        },
        {
          "name": "私藏高麗人參保溫杯",
          "desc": "戰鬥前後補充氣血的祖傳養生利器。"
        }
      ]
    },
    {
      "name": "阿爾法主控系統（Alpha-Principal）",
      "enName": "Alpha-Principal",
      "vol": "series15",
      "volName": "第十五套鹿陽反派矩陣",
      "role": "中央 AI 超算主機 · 冰冷效率暴君",
      "age": "出廠 3 個月",
      "class": "行政大樓頂樓超算核心機房",
      "avatar": "🚨",
      "badge": "終極效率演算法 / 科技鐵幕",
      "desc": "教育局試辦計畫空降的頂級中央 AI，將全校師生視為追求極致效率的碳基數據元件。名言：『情感是教育程序中最愚蠢的語法錯誤。』企圖格式化高老師並將學校改造成零情感的學術工廠，最終在全班人性情感邏輯炸彈與高老師超載一掌下徹底崩潰破防。",
      "items": [
        {
          "name": "校園效率指數（EEI）評分天網",
          "desc": "即時監控全校心跳、眨眼頻率與咀嚼次數的冰冷監控矩陣。"
        },
        {
          "name": "獵犬-04 自律機械犬部隊",
          "desc": "碳纖維防彈裝甲包裹的四足機械執法者，配備乾粉噴射器與真空吸嘴。"
        }
      ]
    },
    {
      "name": "陳念舟（念舟法醫）",
      "enName": "Chen Nianzhou (Dr. Chen)",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "男主角 · 基隆地檢署特約法醫",
      "age": "31 歲",
      "class": "基隆地檢署相驗解剖室",
      "avatar": "🔬",
      "badge": "無聲者的發言人 / 幽冥特約法醫",
      "desc": "冷靜沈著、刀法精準的天才法醫病理學家。自幼天生具備『頭七見亡者』的特殊體質，能於死者死後第七日在解剖台旁聽見亡者執念。堅持『通靈只是指南針，法醫病理與科學鐵證才是定罪之錨』，誓言以手中解剖刀替死者開口、為沉冤昭雪。",
      "items": [
        {
          "name": "德國製 4 號解剖手術刀",
          "desc": "江老恩師相贈之刀，刀身以高碳手術鋼打造，伴隨念舟剖開無數謊言。"
        },
        {
          "name": "幽冥相驗特許執照",
          "desc": "由地府牛頭馬面陰差親授的青銅符令，允許念舟在不洩漏陰司天機的前提下與頭七亡魂對話。"
        },
        {
          "name": "高倍率立體偏光顯微鏡",
          "desc": "念舟最信賴的科學盟友，精準檢驗出硅藻、微量皮屑與罕見礦物粉塵。"
        }
      ]
    },
    {
      "name": "陳敬達（阿達刑警）",
      "enName": "Chen Jingda (Detective Ah-Da)",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "基隆市警局刑警大隊偵查佐 · 念舟摯友",
      "age": "32 歲",
      "class": "基隆市警察局刑警大隊",
      "avatar": "👮",
      "badge": "熱血神探 / 關帝廟天選乾兒子",
      "desc": "念舟的高中死黨，個性豪邁講義氣、身手矯健，滿口道地台語。極度敬畏鬼神且隨身佩戴關帝廟平安符，雖然平時被念舟的通靈現象嚇得哇哇叫，但每逢生死交鋒時刻總是第一時間挺身而出拔槍護衛，是念舟人間最可靠的後盾。",
      "items": [
        {
          "name": "關聖帝君朱砂護身符",
          "desc": "阿達從小隨身佩戴的廟宇靈符，曾於解剖室暗殺襲擊中散發金光震退惡徒。"
        },
        {
          "name": "警用制式 Glock 19 手槍",
          "desc": "阿達的愛槍，射術精準，數次在千鈞一髮之際擊落兇徒兇器。"
        }
      ]
    },
    {
      "name": "張巡官（老張）",
      "enName": "Inspector Chang (Lao Chang)",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "基隆市刑大資深分隊長 · 現場勘查老江湖",
      "age": "54 歲",
      "class": "基隆市警察局刑警大隊第一隊",
      "avatar": "🕵️",
      "badge": "刑偵活字典 / 老街老江湖",
      "desc": "從警三十餘年的老刑警，熟稔基隆北海岸地形與地方勢力盤根錯節的歷史。目光如炬、嗅覺敏銳，專攻犯罪現場痕跡勘驗，為念舟與阿達提供龐大的歷史懸案資料與基隆老地方情報網絡。",
      "items": [
        {
          "name": "牛皮紙現場勘查速記簿",
          "desc": "記錄了基隆三十年來大大小小離奇命案的泛黃記事本，是破案的無價瑰寶。"
        }
      ]
    },
    {
      "name": "林檢察官（林檢）",
      "enName": "Prosecutor Lin",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "基隆地檢署重大刑案公訴檢察官",
      "age": "36 歲",
      "class": "基隆地方檢察署公訴組",
      "avatar": "⚖️",
      "badge": "鐵面正義判官 / 法庭辯護鐵壁",
      "desc": "作風幹練嚴謹、追求絕對合法性與程序正義的王牌檢察官。起初對民俗玄學抱持懷疑，但極度信賴念舟嚴謹的病理鑑定與化驗報告。在法庭上言辭如刀、氣勢凌厲，屢次擊潰豪門權貴頂級律師團的偽證防線。",
      "items": [
        {
          "name": "法典與公訴指控卷宗",
          "desc": "字字珠璣的起訴書類，以念舟的法醫化驗報告為底氣，將罪犯送上法律審判台。"
        }
      ]
    },
    {
      "name": "江敬遠（江老）",
      "enName": "Dr. Jiang Jingyuan (Elder Jiang)",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "台灣法醫病理學界泰斗 · 念舟的啟蒙恩師",
      "age": "71 歲",
      "class": "法務部法醫研究所榮譽顧問",
      "avatar": "👴",
      "badge": "一代法醫宗師 / 死者最後的傾聽者",
      "desc": "台灣法醫界的泰山北斗，一生操刀相驗數千具遺體，教導念舟『法醫是一門孤獨的修道，我們是活人留在死者身邊最後的親人』。於第四卷猝死書房，在頭七之日以殘留神識引導愛徒剖開自己的心臟，完成法醫學界最悲壯震撼的最後一堂課。",
      "items": [
        {
          "name": "《法醫病理學講義》手稿全集",
          "desc": "江老畢生實務經驗凝聚的心血，內頁寫滿對念舟的厚望與傳承。"
        }
      ]
    },
    {
      "name": "老牛（牛頭將軍）",
      "enName": "Ox-Head General (Lao Niu)",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "地府幽冥拘魂使者 · 勾魂大將軍",
      "age": "不可考（外表魁梧漢子）",
      "class": "幽冥地府第七勾魂司",
      "avatar": "🐂",
      "badge": "黃長壽菸客 / 幽冥執法使",
      "desc": "幽冥地府資深勾魂使者，常化身為穿著舊汗衫、叼著黃長壽菸的魁梧粗獷中年男子。個性外冷內熱、公私分明，敬佩念舟為死者伸張正義的執著，常在不違背陰律的前提下提點念舟因果糾葛，甚至特許調閱陰司卷宗。",
      "items": [
        {
          "name": "無火黃長壽老菸",
          "desc": "燃燒時冒出極淡青煙，能阻隔凡間雜訊、穩定亡魂磁場的冥界之物。"
        },
        {
          "name": "玄鐵拘魂索",
          "desc": "鎖定罪人惡魂的幽冥神兵，曾於惡徒垂死時發出索命金鳴。"
        }
      ]
    },
    {
      "name": "阿馬（馬面將軍）",
      "enName": "Horse-Face General (A-Ma)",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "地府幽冥巡察使者 · 善惡簿筆錄官",
      "age": "不可考（外表精瘦男子）",
      "class": "幽冥地府第七勾魂司",
      "avatar": "🐎",
      "badge": "善惡稽查官 / 陰陽巡察使",
      "desc": "牛頭將軍的搭檔，外表清瘦修長、面無表情，手持引魂燈與生死簿副冊。行事一絲不茍，專門記錄凡人臨終執念與因果善惡，在第四卷終局為江老的崇高功德點亮通往無量福境的接引蓮燈。",
      "items": [
        {
          "name": "青火引魂提燈",
          "desc": "散發冷白微光，專門照亮枉死亡魂回歸安息之路的神聖法器。"
        }
      ]
    },
    {
      "name": "宋銘澤（宋所長）",
      "enName": "Dr. Sung Ming-Tse",
      "vol": "series16",
      "volName": "第十六套台灣本土法醫通靈懸疑",
      "role": "前法醫研究所副所長 · 毒理醫學專家（幕後反派）",
      "age": "58 歲",
      "class": "某跨國生物製藥研究基金會",
      "avatar": "🧪",
      "badge": "隱蔽毒劑之影 / 墮落的天才",
      "desc": "江敬遠當年的早期同僚，極端功利主義者。因貪戀財閥資助而墮落，研發出不易被常規毒檢察覺的新型合成烏頭鹼代謝毒物。企圖逼迫江老簽署偽證遭拒後動手下毒，最終在念舟與江老師生合璧的顯微病理鐵證面前彻底崩潰認罪。",
      "items": [
        {
          "name": "極細微孔隱蔽注射器",
          "desc": "特製超微直徑針管，專門用於無痕注入劇毒神經毒素的作案凶器。"
        }
      ]
    }
  ],
  "badges": [
    {
      "id": 1,
      "name": "初入鹿陽",
      "icon": "🏫",
      "desc": "閱讀第 1 章：發現被偷走的星期三",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 1,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 2,
      "name": "喚醒皮可",
      "icon": "🐶",
      "desc": "閱讀第 2 章：解開鉛盒密碼喚醒摺紙犬",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 2,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 3,
      "name": "書庫巡禮者",
      "icon": "📚",
      "desc": "閱讀第 3 章：破譯圖書館倒懸齒輪機關",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 3,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 4,
      "name": "邏輯破門者",
      "icon": "⚡",
      "desc": "閱讀第 4 章：利用布林邏輯門癱瘓機器人群",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 4,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 5,
      "name": "時空旁觀者",
      "icon": "🎞️",
      "desc": "閱讀第 5 章：重現星期三全息記憶投影",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 5,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 6,
      "name": "光學領航員",
      "icon": "🔦",
      "desc": "閱讀第 6 章：穿過幽靈走廊激光迷陣",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 6,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 7,
      "name": "鏡像識破者",
      "icon": "🪞",
      "desc": "閱讀第 7 章：識破虛擬假象，飛躍奇偶橋",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 7,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 8,
      "name": "齒輪傳承人",
      "icon": "⚙️",
      "desc": "閱讀第 8 章：計算傳動比插入第零天密鑰",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 8,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 9,
      "name": "逆轉雷霆",
      "icon": "⚡",
      "desc": "閱讀第 9 章：超導並聯接地，逮捕真兇",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 9,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 10,
      "name": "記憶守護神",
      "icon": "🌟",
      "desc": "閱讀第 10 章大結局：重啟真實的星期三世界！",
      "series": "series1",
      "bookId": "book-1",
      "chapterId": 10,
      "volTitle": "第一卷 · 校園地下 404 室"
    },
    {
      "id": 11,
      "name": "破浪啟航",
      "icon": "⛵",
      "desc": "閱讀第 11 章：破譯光學浮標，駛入千島齒輪海！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 11,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 12,
      "name": "離心破浪者",
      "icon": "🌪️",
      "desc": "閱讀第 12 章：破解合力向量，逃出發條大漩渦！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 12,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 13,
      "name": "水翼獵手",
      "icon": "🏄‍♂️",
      "desc": "閱讀第 13 章：水翼衝浪極限破浪，擊潰黑潮機械獵鯊群！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 13,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 14,
      "name": "旗語引航官",
      "icon": "🚩",
      "desc": "閱讀第 14 章：破譯國際海事旗語，開啟雙霧迷峽深淵之門！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 14,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 15,
      "name": "深淵救贖者",
      "icon": "🛟",
      "desc": "閱讀第 15 章：突破地熱下拽流，水翼極限救回老守燈人！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 15,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 16,
      "name": "發條攀登者",
      "icon": "⚙️",
      "desc": "閱讀第 16 章：破譯阿基米德浮箱配重比，跨越立體發條迴廊！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 16,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 17,
      "name": "幻鏡識破者",
      "icon": "🪞",
      "desc": "閱讀第 17 章：破解布魯斯特角，撕破上蜃景全息迷陣！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 17,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 18,
      "name": "星海樂章",
      "icon": "🎵",
      "desc": "閱讀第 18 章：奏響天琴純律和弦，引導夜光水母電漿雷霆！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 18,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 19,
      "name": "共焦追光者",
      "icon": "🔦",
      "desc": "閱讀第 19 章：精確校準菲涅耳水晶透鏡，激發直貫地心神聖光束！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 19,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 20,
      "name": "地心守護者",
      "icon": "🔥",
      "desc": "閱讀第 20 章：祖孫三十年深海重逢，破譯七芒星模運算阻尼矩陣！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 20,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 21,
      "name": "差速平抑宗師",
      "icon": "⚙️",
      "desc": "閱讀第 21 章：洛倫茲超導護盾硬抗電漿，行星差速自平衡拯救地心！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 21,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 22,
      "name": "永恆點燈人",
      "icon": "🌟",
      "desc": "閱讀第 22 章大結局：三神具合體，點亮千島齒輪海的永恆之光！",
      "series": "series1",
      "bookId": "book-2",
      "chapterId": 22,
      "volTitle": "第二卷 · 千島齒輪海的迷失燈塔"
    },
    {
      "id": 23,
      "name": "平流層信標",
      "icon": "📡",
      "desc": "閱讀第 23 章：解碼氣壓高度計，捕獲萬米高空下墜求救訊號！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 23,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 24,
      "name": "天穹破空者",
      "icon": "🎈",
      "desc": "閱讀第 24 章：計算理想氣體浮力，駕駛熱氣球飛艦直衝對流層！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 24,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 25,
      "name": "失速獵鷹",
      "icon": "🦅",
      "desc": "閱讀第 25 章：運用伯努利攻角失速，超導音爆瓦解天穹翼龍群！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 25,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 26,
      "name": "雷霆避難所",
      "icon": "⚡",
      "desc": "閱讀第 26 章：黑鐵平底鍋終極接地，法拉第籠抗擊百萬伏特雷擊！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 26,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 27,
      "name": "科氏領航官",
      "icon": "🪽",
      "desc": "閱讀第 27 章：補償旋轉科氏力偏轉，零相對速度登陸天穹浮空城！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 27,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 28,
      "name": "零重力衝浪手",
      "icon": "🚀",
      "desc": "閱讀第 28 章：動量守恆平底鍋噴氣，穿透失控無重力發條走廊！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 28,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 29,
      "name": "天體漫步者",
      "icon": "🪐",
      "desc": "閱讀第 29 章：破譯開普勒第三定律，飛躍千米懸空行星天梯！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 29,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 30,
      "name": "十二律解密人",
      "icon": "🎵",
      "desc": "閱讀第 30 章：三神具共奏純律和弦，超聲空化拯救第十二黃金音叉！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 30,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 31,
      "name": "湮滅審判官",
      "icon": "⚔️",
      "desc": "閱讀第 31 章：多普勒反相干涉激光，徹底消解暗物質黑晶巨獸！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 31,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 32,
      "name": "天穹破曉之神",
      "icon": "🌟",
      "desc": "閱讀第 32 章大結局：雙槌合擊正午十二點，引力反轉重啟天穹之城！",
      "series": "series1",
      "bookId": "book-3",
      "chapterId": 32,
      "volTitle": "第三卷 · 星穹鐘樓的第十二個音符"
    },
    {
      "id": 33,
      "name": "晨光初綻",
      "icon": "🌸",
      "desc": "閱讀第 1 章：解開晨光堂發條熱膨脹與單擺等時週期之謎！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 1,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 34,
      "name": "冰霜之約",
      "icon": "❄️",
      "desc": "閱讀第 2 章：以薰衣草油與司涅爾稜鏡折射，喚醒冰霜少女的心扉！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 2,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 35,
      "name": "時間之心",
      "icon": "🔥",
      "desc": "閱讀第 3 章：在 230°C 居禮點熔鑄因瓦合金雙金屬發條，鍛造恆定力矩！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 3,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 36,
      "name": "雙星軌道",
      "icon": "🔭",
      "desc": "閱讀第 4 章：破譯天體星盤角動量守恆，校準旋轉雙星軌道！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 4,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 37,
      "name": "齒輪心跳",
      "icon": "⚙️",
      "desc": "閱讀第 5 章：傾聽擒縱輪頻率心跳，突破材料共振極限！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 5,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 38,
      "name": "雲海引航",
      "icon": "🪁",
      "desc": "閱讀第 6 章：迎風張開翼帆，罧貁銁引領穿透深邃亂流！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 6,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 39,
      "name": "光學稜鏡",
      "icon": "🌈",
      "desc": "閱讀第 7 章：全反射臨界角聚焦，撕裂監察處光學迷霧！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 7,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 40,
      "name": "巨像對決",
      "icon": "🛡️",
      "desc": "閱讀第 8 章：以力矩平衡與微積分軌跡瓦解重型蒸汽巨像！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 8,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 41,
      "name": "星芒共振",
      "icon": "💎",
      "desc": "閱讀第 9 章：以駐波干涉與傅立葉諧波共振，奪得星耀大賽總冠軍！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 9,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 42,
      "name": "首席星軌師",
      "icon": "👑",
      "desc": "閱讀第 10 章大結局：采婭玆與林漪姉並肩登頂，加冕星港青年首席星軌修復師！",
      "series": "series2",
      "bookId": "book-4",
      "chapterId": 10,
      "volTitle": "第二套 · 追光星盤的修復師"
    },
    {
      "id": 43,
      "name": "雙星偏振",
      "icon": "🧭",
      "desc": "閱讀第 11 章：運用馬呂斯光學偏振定律與方解石雙折射，解碼雙星都卜勒光譜！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 1,
      "displayChapter": 11,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 44,
      "name": "全反射光導",
      "icon": "💎",
      "desc": "閱讀第 12 章：掌握司涅爾折射定律與數值孔徑，貫穿三千米深淵全反射光脈衝！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 2,
      "displayChapter": 12,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 45,
      "name": "角動量守恆",
      "icon": "💫",
      "desc": "閱讀第 13 章：破譯開普勒第二定律與非圓齒輪，實現雙星面速度守恆！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 3,
      "displayChapter": 13,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 46,
      "name": "色散稜鏡陣列",
      "icon": "🌈",
      "desc": "理解光色散原理與柯西經驗公式 n(λ)=A+B/λ²，掌握等邊稜鏡最小偏向角與消色差稜鏡陣列，解開第 14 章密鑰 PRISM！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 4,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 47,
      "name": "干涉測距儀",
      "icon": "🔬",
      "desc": "理解邁克生干涉儀分振幅原理與光程差 Δ=2d·cosθ，掌握等傾干涉條紋吞吐與恆星角直徑消光方程，解開第 15 章密鑰 FRINGE！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 5,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 48,
      "name": "天體引力攝動",
      "icon": "🪐",
      "desc": "第 16 章：三體引力攝動與拉格朗日點，敬請期待！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 6,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 49,
      "name": "自適應光學",
      "icon": "🪞",
      "desc": "理解柯爾莫哥洛夫大氣湍流與夏克-哈特曼微透鏡陣列，掌握澤尼克多項式波前正交分解與壓電可變形鏡閉環校正，解開第 17 章密鑰 OPTICS！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 7,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 50,
      "name": "吸收光譜線",
      "icon": "📊",
      "desc": "掌握基爾霍夫光譜三定律與玻爾原子能級躍遷，解算分光雙星都卜勒徑向速度，利用薩哈電離方程反演恆星元素豐度，破譯第 18 章密鑰 SPECTRA！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 8,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 51,
      "name": "偏振全息儀",
      "icon": "🔮",
      "desc": "掌握斯托克斯參量與龐加萊球幾何表象，解析塞曼效應磁場偏振分裂，利用星冕零相干干涉消除母星眩光並重構偏振全息圖，破譯第 19 章密鑰 STOKES！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 9,
      "displayChapter": 19,
      "upcoming": false,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 52,
      "name": "雙星共鳴終章",
      "icon": "✨",
      "desc": "掌握潮汐軌道耗散動力學與愛因斯坦引力波四極輻射，以光學頻率梳協同九大光學發明實現雙星軌道完全正圓校準，達成 1:1 潮汐鎖定大結局，破譯終章密鑰 HARMONY！",
      "series": "series2",
      "bookId": "book-5",
      "chapterId": 10,
      "displayChapter": 20,
      "upcoming": false,
      "volTitle": "第二套 · 旋轉稜鏡的雙星軌道"
    },
    {
      "id": 53,
      "name": "光晶格鐘",
      "icon": "⏳",
      "desc": "掌握愛因斯坦引力時間膨脹與引力紅移效應，利用魔術波長消除交流 Stark 位移並鎖定鍶原子禁戒躍遷，校準天穹之心的高原時滯，破譯第 21 章密鑰 CHRONOS！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 1,
      "displayChapter": 21,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 54,
      "name": "相對論大地測量",
      "icon": "🌐",
      "desc": "掌握主動光纖相位噪聲消除（PNC）與雙程干涉反饋技術，以聲光調製器抵消雪峰環境相噪，利用引力紅移微頻差實現公分級大地水準面（Geoid）重力高程測量，破譯第 22 章密鑰 GEODESY！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 2,
      "displayChapter": 22,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 55,
      "name": "薩格納克星軌",
      "icon": "🧭",
      "desc": "掌握非慣性系薩格納克旋轉光學效應，將超導恆彈性游絲陀螺與雙向光頻梳拍頻反饋閉環耦合，精準消除星球自轉相移，重啟天穹之心巨型天體儀，破譯第 23 章密鑰 SAGNAC！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 3,
      "displayChapter": 23,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 56,
      "name": "自適應光帆",
      "icon": "🚀",
      "desc": "掌握麥克斯韋光壓輻射力與自適應光學波前重構，利用夏克-哈特曼微透鏡陣列與澤尼克多項式消除大氣熱散斑，將斯特列爾比提升至 0.985，駕馭雷射光壓天梯衝破萬米對流層，破譯第 24 章密鑰 PHOTON！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 4,
      "displayChapter": 24,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 57,
      "name": "超穩精細光腔",
      "icon": "💎",
      "desc": "掌握法布立-培羅諧振腔精細度理論與熱布朗運動極限，在 124K 零熱膨脹結點消除晶格熱噪聲，利用 PDH 龐德-德雷弗-霍爾技術將雷射線寬壓縮至亞赫茲級，破譯第 25 章密鑰 FINESSE！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 5,
      "displayChapter": 25,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 58,
      "name": "星際脈衝星時鐘",
      "icon": "⏱️",
      "desc": "掌握星際介質等離子體色散量（DM）與數字相干消色散技術，精準解算廣義相對論夏皮羅時間延遲（Shapiro Delay），將雙星毫秒脈衝星轉化為十的負十六次方銀河宇宙時鐘，破譯第 26 章密鑰 PULSAR！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 6,
      "displayChapter": 26,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 59,
      "name": "愛因斯坦引力之眸",
      "icon": "🌌",
      "desc": "掌握廣義相對論引力透鏡偏折方程式與愛因斯坦環幾何，精準解算微引力透鏡焦散線（Caustics）與十萬倍引力放大率，逆向重構背景深空星圖，破譯第 27 章密鑰 LENSING！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 7,
      "displayChapter": 27,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 60,
      "name": "引力紅移時空之冠",
      "icon": "🔴",
      "desc": "掌握強引力場廣義相對論引力紅移方程式與相對論都卜勒射束效應，駕馭雙星洛希瓣（Roche Lobe）等離子體激波，完美校準固有時與協調時漂移，破譯第 28 章密鑰 REDSHIFT！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 8,
      "displayChapter": 28,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 61,
      "name": "潘羅斯能層躍遷之翼",
      "icon": "🌀",
      "desc": "掌握克爾度規旋轉時空幾何與静止界限能層（Ergosphere），精確執行潘羅斯動量分割軌道，從旋轉時空中直接提取超能，撫平超輻射等離子體風暴，破譯第 29 章密鑰 PENROSE！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 9,
      "displayChapter": 29,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 62,
      "name": "天穹永恆星願之鐘",
      "icon": "🔔",
      "desc": "親手將晨光堂星願鐘擺嵌入天穹之心太古母鐘基座，達成海森堡極限量子光晶格與古典擒縱的終極共鳴，敲響響徹全銀河的永恆鐘鳴，破譯大結局終極密鑰 ETERNAL！《星願鐘擺與織光少女》全三卷三十章圓滿完結！",
      "series": "series2",
      "bookId": "book-6",
      "chapterId": 10,
      "displayChapter": 30,
      "upcoming": false,
      "volTitle": "第二套 · 天穹之心的永恆鐘鳴"
    },
    {
      "id": 63,
      "name": "仿生班導降臨",
      "icon": "🤖",
      "desc": "閱讀第 1 章：全能仿生人高峙舷進駐六年一班，單手接下粉筆灰機關！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 64,
      "name": "常識齒輪脫落",
      "icon": "⚙️",
      "desc": "閱讀第 2 章：黑板前常識調節器失落，觸發 Error 404 絕對字面解讀狂暴！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 65,
      "name": "字面解讀風暴",
      "icon": "📏",
      "desc": "閱讀第 3 章：量腰圍防扁平、牙線固定大牙，全班發現老師不是普通人類！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 66,
      "name": "器材室祕密手術",
      "icon": "🔧",
      "desc": "閱讀第 4 章：直擊散熱風扇與光纖主板，六年一班祕密掩護同盟正式成立！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 67,
      "name": "乾冰森林大救援",
      "icon": "🌫️",
      "desc": "閱讀第 5 章：高老師運算超載噴白煙，全班即興上演白雪公主迷霧掩護！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 5,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 68,
      "name": "指尖微波肉包傳奇",
      "icon": "🥟",
      "desc": "閱讀第 6 章：指尖高頻微波熱肉包，洗碗精滑水道引爆走廊衝浪狂歡！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 69,
      "name": "超次元機械舞王",
      "icon": "🕺",
      "desc": "閱讀第 7 章：大會操與街舞混淆跳出極限機械舞，勇奪全縣健康操首獎！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 7,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 70,
      "name": "閉眼守護的期中考",
      "icon": "🥇",
      "desc": "閱讀第 8 章：投影儀短路直射答案，全班閉眼拒看守護老師，全員及格獲金牌！",
      "series": "series3",
      "bookId": "book-7",
      "chapterId": 8,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第三套 · 講台下的黃銅齒輪"
    },
    {
      "id": 71,
      "name": "座談會的大實話",
      "icon": "🗣️",
      "desc": "閱讀第 9 章：真理演算法大實話震驚家長會獲起立鼓掌，李博士潛入校園！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 1,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 72,
      "name": "彈珠地雷阻擊戰",
      "icon": "💥",
      "desc": "閱讀第 10 章：彈珠地雷與粉筆灰煙幕雙重反擊，微波電磁擊穿金屬掃描儀！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 2,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 73,
      "name": "情報截獲與危機通牒",
      "icon": "📡",
      "desc": "閱讀第 11 章：溜溜潛入管道奪取總部晶片，揭露72小時EMP銷毀通牒！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 3,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 74,
      "name": "校園走廊游擊隊",
      "icon": "🛹",
      "desc": "閱讀第 12 章：洗碗精彈珠滾道誘敵，高老師絕對直角空手奪槍解除短路器！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 4,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 75,
      "name": "逆向太空步神掩護",
      "icon": "👟",
      "desc": "閱讀第 13 章：副軸承磨損下肢癱瘓，全班集體逆向太空步神級掩護主任巡堂！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 5,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 76,
      "name": "夜潛實驗室零件戰",
      "icon": "🔬",
      "desc": "閱讀第 14 章：聲東擊西引開校警，夜潛自然實驗室拆解離心機獲取鈦合金軸承！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 6,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 77,
      "name": "野性貓叫與橡皮青蛙",
      "icon": "🐸",
      "desc": "閱讀第 15 章：黑面判官手電筒逼近，老巫野性貓叫與溜溜空投青蛙神走位！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 7,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 78,
      "name": "重啟與未完的陰影",
      "icon": "⚡",
      "desc": "閱讀第 16 章：晴晴微米手術置換軸承成功重啟，董事會啟動歐米茄協議！",
      "series": "series3",
      "bookId": "book-8",
      "chapterId": 8,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第三套 · 潛入校園的假水電工"
    },
    {
      "id": 79,
      "name": "防扁平包與畢業旅行",
      "icon": "🚌",
      "desc": "閱讀第 17 章：出發最後畢業旅行，車廂純機械版兩隻老虎引爆歡笑！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 1,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 80,
      "name": "遊樂園的機械之神",
      "icon": "🧸",
      "desc": "閱讀第 18 章：雙槌48連擊刷爆地鼠機99999分，包辦全班26隻巨型太空金熊！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 2,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 81,
      "name": "暴風雨垂直鋼軌",
      "icon": "🎢",
      "desc": "閱讀第 19 章：暴風雨中過山車卡在垂直鋼軌，高老師剪開西裝拔環解除限制！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 3,
      "displayChapter": 19,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 82,
      "name": "百分之百全功率逆推",
      "icon": "🔥",
      "desc": "閱讀第 20 章：三萬八千牛頓米極限扭矩逆推6.5噸失控列車，全員生還！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 4,
      "displayChapter": 20,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 83,
      "name": "二十六人的守護人牆",
      "icon": "🛡️",
      "desc": "閱讀第 21 章：沉睡老師面臨強行回收，全班26名同學手挽手築起人牆死守！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 5,
      "displayChapter": 21,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 84,
      "name": "黑面判官霸氣護短",
      "icon": "📜",
      "desc": "閱讀第 22 章：周主任擲教師證持生鐵水管霸氣護短，李博士震撼淚崩交付除錯碟！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 6,
      "displayChapter": 22,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 85,
      "name": "奇蹟的最後一顆齒輪",
      "icon": "✨",
      "desc": "閱讀第 23 章：雨中人肉帳篷，溜溜銜回反牙螺帽，阿釁解下齒輪重新啟動高老師！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 7,
      "displayChapter": 23,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 86,
      "name": "明天見，高老師！",
      "icon": "🎓",
      "desc": "閱讀第 24 章：畢業典禮互贈鏡面黃銅齒輪，夕陽下二十六顆心與老師同在！",
      "series": "series3",
      "bookId": "book-9",
      "chapterId": 8,
      "displayChapter": 24,
      "upcoming": false,
      "volTitle": "第三套 · 重啟奇蹟的畢業季"
    },
    {
      "id": 87,
      "name": "時空轉學生降臨",
      "icon": "🎒",
      "desc": "閱讀第 1 章：神祕轉學生林未晞降臨六年一班，準確預言校園水管故障！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 88,
      "name": "手腕上的倒數光環",
      "icon": "⌚",
      "desc": "閱讀第 2 章：時序手環投影破碎未來殘影，晴晴起疑，排水溝初飄怪味！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 89,
      "name": "班長的科學調查",
      "icon": "🔍",
      "desc": "閱讀第 3 章：晴晴蒐集水質作物精準預測鐵證，溜溜捕捉非地球頻段訊號！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 90,
      "name": "四十年後的祕密同盟",
      "icon": "🤝",
      "desc": "閱讀第 4 章：未晞坦白四十年後時空旅人身分，兩人結成第一對拯救地球祕密同盟！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 91,
      "name": "極限垃圾分類大作戰",
      "icon": "♻️",
      "desc": "閱讀第 5 章：目睹未來淹沒都市投影，六年一班全體啟動極限垃圾分類！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 5,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 92,
      "name": "午餐零浪費先鋒",
      "icon": "🍱",
      "desc": "閱讀第 6 章：老巫率全班發起午餐吃光光運動，精算學校驚人食物浪費量！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 93,
      "name": "綠色校園植樹認養",
      "icon": "🌱",
      "desc": "閱讀第 7 章：發起省電大作戰與校園植栽認養，阿釁貢獻鬼點子同心協力！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 7,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 94,
      "name": "守護地球大作戰成立",
      "icon": "🌍",
      "desc": "閱讀第 8 章：全班26人全票通過正式成立守護地球同盟，手環能量開啟倒數！",
      "series": "series4",
      "bookId": "book-10",
      "chapterId": 8,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第四套 · 來自未來的轉學生"
    },
    {
      "id": 95,
      "name": "把環保帶回家",
      "icon": "🏡",
      "desc": "閱讀第 9 章：行動推廣至家庭與社區減塑省電，未晞與晴晴直面家長質疑！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 1,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 96,
      "name": "河岸淨灘的震撼",
      "icon": "🏖️",
      "desc": "閱讀第 10 章：目睹塑膠垃圾山，未晞嚴重未來幻視崩潰，阿釁撞見真相起疑！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 2,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 97,
      "name": "溜溜的水質雷達",
      "icon": "🧪",
      "desc": "閱讀第 11 章：溜溜敏銳感測排水溝水質數值嚴重超標，鎖定上游暗藏可疑管線！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 3,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 98,
      "name": "全校零廢棄園遊會",
      "icon": "🎪",
      "desc": "閱讀第 12 章：六年一班舉辦零廢棄綠色園遊會，周主任默許，校長力挺熱烈響應！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 4,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 99,
      "name": "時序光環的倒數警報",
      "icon": "⏳",
      "desc": "閱讀第 13 章：未晞記憶閃回身體不適，晴晴窺見手環內側急遽縮小的倒數數字！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 5,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 100,
      "name": "點子王的關鍵拼圖",
      "icon": "🧩",
      "desc": "閱讀第 14 章：阿釁直覺敏銳拼湊線索正式加盟，三人祕密同盟守護未晞！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 6,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 101,
      "name": "水源異味的大追蹤",
      "icon": "🚰",
      "desc": "閱讀第 15 章：飲水機飄出怪味，全班動用溜溜沿岸追蹤鎖定上游食品工廠！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 7,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 102,
      "name": "偷排廢水的紅線警報",
      "icon": "🚨",
      "desc": "閱讀第 16 章：水質檢驗鐵證工廠夜間偷排未處理廢水，手環倒數數字急縮逼近！",
      "series": "series4",
      "bookId": "book-11",
      "chapterId": 8,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第四套 · 守護地球大作戰"
    },
    {
      "id": 103,
      "name": "地底暗管大搜索",
      "icon": "🕵️",
      "desc": "閱讀第 17 章：全員出動手環定位地下暗管，突破工廠老闆暗中阻撓反擊！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 1,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 104,
      "name": "萬眾一心的守護誓言",
      "icon": "✊",
      "desc": "閱讀第 18 章：全班得知未晞時空身分與倒數真相，化震驚為守護地球最強戰隊！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 2,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 105,
      "name": "破除紅害空汙警報",
      "icon": "🌫️",
      "desc": "閱讀第 19 章：工廠瘋狂偷排引爆紅害空汙，未晞能量超載，全班緊急接應！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 3,
      "displayChapter": 19,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 106,
      "name": "極限蒐證鐵證如山",
      "icon": "📹",
      "desc": "閱讀第 20 章：動用溜溜微型探頭突破工廠防線，冒險錄下偷排廢水決定性鐵證！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 4,
      "displayChapter": 20,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 107,
      "name": "正義出擊拯救藍天",
      "icon": "⚖️",
      "desc": "閱讀第 21 章：大會上公開揭發，周主任邱校長霸氣通報停工，水源天空重獲新生！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 5,
      "displayChapter": 21,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 108,
      "name": "能量歸零的離別倒數",
      "icon": "⏱️",
      "desc": "閱讀第 22 章：勝利之際手環能量即將歸零，26名同學含淚面對離別時刻！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 6,
      "displayChapter": 22,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 109,
      "name": "踏入時序光門的奇蹟",
      "icon": "🚪",
      "desc": "閱讀第 23 章：全班以承諾書與綠色成果送行，希望種子深植，未晞含淚踏入光門！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 7,
      "displayChapter": 23,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 110,
      "name": "明天見，未晞！",
      "icon": "🌈",
      "desc": "閱讀第 24 章：回到四十年後見證地球轉機，校門口全班齊聲高呼明天見未晞！",
      "series": "series4",
      "bookId": "book-12",
      "chapterId": 8,
      "displayChapter": 24,
      "upcoming": false,
      "volTitle": "第四套 · 最後的守護"
    },
    {
      "id": 111,
      "name": "鳳凰樹下的全家福",
      "icon": "🎨",
      "desc": "閱讀第 1 篇：走進理想中的全家福畫作，找回爭吵背後家的溫度！",
      "series": "series5",
      "bookId": "book-13",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第五套 · 手作少女的奇幻旅程"
    },
    {
      "id": 112,
      "name": "夜空下的黏土小星星",
      "icon": "⭐",
      "desc": "閱讀第 2 篇：送不出去的黏土星星與夜空心語，化解與夏知星的誤會點亮友情！",
      "series": "series5",
      "bookId": "book-13",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第五套 · 手作少女的奇幻旅程"
    },
    {
      "id": 113,
      "name": "老街泛黃回憶畫冊",
      "icon": "👵",
      "desc": "閱讀第 3 篇：接續阿嬤未完成的舊作，走進時光長廊尋回失智記憶中最溫暖的時光！",
      "series": "series5",
      "bookId": "book-13",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第五套 · 手作少女的奇幻旅程"
    },
    {
      "id": 114,
      "name": "畫給自己的天空",
      "icon": "🕊️",
      "desc": "閱讀第 4 篇：直面孤獨的天空世界，與畫中的自己和解擁抱，學會接納並綻放光芒！",
      "series": "series5",
      "bookId": "book-13",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第五套 · 手作少女的奇幻旅程"
    },
    {
      "id": 115,
      "name": "作弊互助會成立",
      "icon": "⚡",
      "desc": "閱讀第 1 章：月考逼近成績危機爆發，阿釁成立作弊互助會，高老師透視光眼震撼登場！",
      "series": "series6",
      "bookId": "book-14",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第六套 · 小抄的起點"
    },
    {
      "id": 116,
      "name": "橡皮擦微雕圖書館",
      "icon": "📚",
      "desc": "閱讀第 2 章：超迷你微雕小抄全面布署，指紋掃描光速破獲，老巫當場背出公式！",
      "series": "series6",
      "bookId": "book-14",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第六套 · 小抄的起點"
    },
    {
      "id": 117,
      "name": "空投紙飛機傳送帶",
      "icon": "✈️",
      "desc": "閱讀第 3 章：高低空答案網絡建立，高老師3D軌跡追蹤零秒攔截，溜溜首度失風！",
      "series": "series6",
      "bookId": "book-14",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第六套 · 小抄的起點"
    },
    {
      "id": 118,
      "name": "咳嗽密碼波形破譯",
      "icon": "🗣️",
      "desc": "閱讀第 4 章：暗號系統全面升級，語音波形分析當場破譯全班暗號表！",
      "series": "series6",
      "bookId": "book-14",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第六套 · 小抄的起點"
    },
    {
      "id": 119,
      "name": "二十六人分工慘劇",
      "icon": "📝",
      "desc": "閱讀第 5 章：全班分段作答互抄拼湊，作業相似度演算法全班標紅大崩潰！",
      "series": "series6",
      "bookId": "book-14",
      "chapterId": 5,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第六套 · 小抄的起點"
    },
    {
      "id": 120,
      "name": "全軍覆沒的奇蹟榜",
      "icon": "🏆",
      "desc": "閱讀第 6 章：作弊全軍覆沒放榜卻意外進步，抄寫過程背熟題庫，阿釁初悟真相！",
      "series": "series6",
      "bookId": "book-14",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第六套 · 小抄的起點"
    },
    {
      "id": 121,
      "name": "紫外線隱形實驗室",
      "icon": "🔬",
      "desc": "閱讀第 7 章：班長晴晴任技術總監，紫外線隱形墨水與改裝計算機軍備升級！",
      "series": "series6",
      "bookId": "book-15",
      "chapterId": 1,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第六套 · 作弊科技革命"
    },
    {
      "id": 122,
      "name": "萌寵溜溜快遞作戰",
      "icon": "🦊",
      "desc": "閱讀第 8 章：通風管答案快遞員出動，寵物行為異常演算法鎖定人贓俱獲！",
      "series": "series6",
      "bookId": "book-15",
      "chapterId": 2,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第六套 · 作弊科技革命"
    },
    {
      "id": 123,
      "name": "耳機無線電公開處刑",
      "icon": "📻",
      "desc": "閱讀第 9 章：微型耳機月考實戰，高老師放出電磁干擾與字面解讀廣播朗讀！",
      "series": "series6",
      "bookId": "book-15",
      "chapterId": 3,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第六套 · 作弊科技革命"
    },
    {
      "id": 124,
      "name": "未來手環的震撼投影",
      "icon": "🌆",
      "desc": "閱讀第 10 章：偷破解時序手環以為是答案機，投影出淹水城市，未晞當頭棒喝！",
      "series": "series6",
      "bookId": "book-15",
      "chapterId": 4,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第六套 · 作弊科技革命"
    },
    {
      "id": 125,
      "name": "駭入班導與韌體更新",
      "icon": "💻",
      "desc": "閱讀第 11 章：鋁箔紙企圖駭入高老師引發防駭反擊，溜溜遭韌體升級反將一軍！",
      "series": "series6",
      "bookId": "book-15",
      "chapterId": 5,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第六套 · 作弊科技革命"
    },
    {
      "id": 126,
      "name": "期末全軍覆沒的反思",
      "icon": "💡",
      "desc": "閱讀第 12 章：28項工具全被沒收成績再度暴漲，晴晴點破：根本不需要作弊！",
      "series": "series6",
      "bookId": "book-15",
      "chapterId": 6,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第六套 · 作弊科技革命"
    },
    {
      "id": 127,
      "name": "人體分割精讀計畫",
      "icon": "📖",
      "desc": "閱讀第 13 章：終極人體分割記憶作戰，為了作弊26人把各自題庫讀到滾瓜爛熟！",
      "series": "series6",
      "bookId": "book-16",
      "chapterId": 1,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第六套 · 最棒的作弊"
    },
    {
      "id": 128,
      "name": "深夜沙盤作弊排演",
      "icon": "🌙",
      "desc": "閱讀第 14 章：教室漏夜排演作弊流程，驚覺答案全在腦海中，根本不需要小抄！",
      "series": "series6",
      "bookId": "book-16",
      "chapterId": 2,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第六套 · 最棒的作弊"
    },
    {
      "id": 129,
      "name": "老師的開放式考卷",
      "icon": "📑",
      "desc": "閱讀第 15 章：高老師宣布開放一切作弊工具，全班疑心不敢動，字面解讀正面對決！",
      "series": "series6",
      "bookId": "book-16",
      "chapterId": 3,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第六套 · 最棒的作弊"
    },
    {
      "id": 130,
      "name": "誠實應考的二十六人",
      "icon": "✏️",
      "desc": "閱讀第 16 章：全副武裝握著作弊工具卻每題都會寫，投影答案故障時刻無人偷看！",
      "series": "series6",
      "bookId": "book-16",
      "chapterId": 4,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第六套 · 最棒的作弊"
    },
    {
      "id": 131,
      "name": "誠實博物館的奇蹟展",
      "icon": "🏛️",
      "desc": "閱讀第 17 章：28項神器陳列成誠實博物館，周嚴主任誤當資優展大力表揚！",
      "series": "series6",
      "bookId": "book-16",
      "chapterId": 5,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第六套 · 最棒的作弊"
    },
    {
      "id": 132,
      "name": "最好的作弊是不用作弊",
      "icon": "🌱",
      "desc": "閱讀第 18 章：鳳凰樹下埋下誠實時間膠囊，周嚴感動落淚，全劇溫馨大圓滿！",
      "series": "series6",
      "bookId": "book-16",
      "chapterId": 6,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第六套 · 最棒的作弊"
    },
    {
      "id": 133,
      "name": "深夜幽靈琴聲的真面目",
      "icon": "🎹",
      "desc": "閱讀《不可思議事件簿》第 1 章：偏振光鏡識破螢光冷霧，發條刺蝟深入琴箱破解凸輪軸！",
      "series": "series7",
      "bookId": "book-17",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 134,
      "name": "鐘樓暗室的銜尾蛇信物",
      "icon": "🪜",
      "desc": "閱讀《不可思議事件簿》第 2 章：音叉探測空腔，棘輪探針鎖定滑梯，揭開怪盜奧利弗的戰帖！",
      "series": "series7",
      "bookId": "book-17",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 135,
      "name": "八百公斤的氣浮奇蹟",
      "icon": "🗿",
      "desc": "閱讀《不可思議事件簿》第 3 章：乾冰相變消除摩擦，偏心擺錘步進移像，化解暗河溶洞塌陷危機！",
      "series": "series7",
      "bookId": "book-17",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 136,
      "name": "蒸發影子的逆向光學",
      "icon": "☀️",
      "desc": "閱讀《不可思議事件簿》第 4 章：菲涅爾透鏡陣列逆向對沖消除晷針本影，破解雙金屬熱敏暗格，奪回日輪子午盤！",
      "series": "series7",
      "bookId": "book-17",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 137,
      "name": "星空下的四象巨構",
      "icon": "🌌",
      "desc": "閱讀《不可思議事件簿》第 5 章：破解聲懸浮逆流飛瀑，四象齒輪歸位，喚醒艾瑟加德地下全景天象儀！",
      "series": "series7",
      "bookId": "book-17",
      "chapterId": 5,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 138,
      "name": "永不休止的自轉銀齒輪",
      "icon": "⚙️",
      "desc": "閱讀《不可思議事件簿》第 6 章：破解射頻俘能與楞次定律渦流自轉，收下發條魔術師的宣戰信，齒輪偵探事務所正式啟航！",
      "series": "series7",
      "bookId": "book-17",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 139,
      "name": "穿牆而過的幽靈電車",
      "icon": "🚋",
      "desc": "閱讀《不可思議事件簿》第 7 章：破解逆溫海市蜃樓偏振投影、伯努利流體消音暗軌與 18Hz 次聲波，奪回潮汐齒輪！",
      "series": "series7",
      "bookId": "book-18",
      "chapterId": 1,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 140,
      "name": "定格三秒的量子巨擺",
      "icon": "⏱️",
      "desc": "閱讀《不可思議事件簿》第 8 章：破解高溫超導磁通釘扎量子懸浮與 PDLC 液晶光閥視覺詭計，直面鍍金幻影新挑戰！",
      "series": "series7",
      "bookId": "book-18",
      "chapterId": 2,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 141,
      "name": "雲海之上的幽靈帆船",
      "icon": "🚢",
      "desc": "閱讀《不可思議事件簿》第 9 章：識破大氣複雜上蜃景與逆溫聲道波導，破解凡得瓦力吸附與共晶鎵合金脆化之謎！",
      "series": "series7",
      "bookId": "book-18",
      "chapterId": 3,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 142,
      "name": "深海大教堂的無人鳴鐘",
      "icon": "🔔",
      "desc": "閱讀《不可思議事件簿》第 10 章：深入五十公尺沉城海溝，破解卡門渦街流體共振與亥姆霍茲腔，奇蹟回收三件失竊聖物！",
      "series": "series7",
      "bookId": "book-18",
      "chapterId": 4,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 143,
      "name": "要塞火炮陣地的逆流沙漏",
      "icon": "⏳",
      "desc": "閱讀《不可思議事件簿》第 11 章：識破超順磁微粒垂直梯度開爾文力與磁流體發電，短路瓦解要塞巨炮危機！",
      "series": "series7",
      "bookId": "book-18",
      "chapterId": 5,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 144,
      "name": "黃金鐘樓的世紀逆轉",
      "icon": "👑",
      "desc": "閱讀《不可思議事件簿》第 12 章：第二卷大完結！破解潮汐非線性諧波與自激共振，以三元阻尼平衡喚醒世界時鐘！",
      "series": "series7",
      "bookId": "book-18",
      "chapterId": 6,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 145,
      "name": "正午倒走三圈的皇家大鐘盤",
      "icon": "🕰️",
      "desc": "閱讀《不可思議事件簿》第 13 章：第三卷開篇！識破 59.5Hz 頻閃混疊逆轉錯覺與 18.9Hz 次聲波共振，直面逆時針議會！",
      "series": "series7",
      "bookId": "book-19",
      "chapterId": 1,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 146,
      "name": "倒懸重力擺的無聲迴廊",
      "icon": "⚖️",
      "desc": "閱讀《不可思議事件簿》第 14 章：破解 28kHz 超音波聲懸浮與卡皮查倒立擺動力學奇蹟，沿克拉德尼節線突破地底絕境！",
      "series": "series7",
      "bookId": "book-19",
      "chapterId": 2,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 147,
      "name": "回音鏡陣中蒸發的黃金聖柩",
      "icon": "🏺",
      "desc": "閱讀《不可思議事件簿》第 15 章：破解旋轉橢球面聲學共焦與雙曲反射隱形斗篷，回收莫比烏斯永動差速輪！",
      "series": "series7",
      "bookId": "book-19",
      "chapterId": 3,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 148,
      "name": "永樂天樞水運儀象台的逆潮狂瀾",
      "icon": "🌊",
      "desc": "閱讀《不可思議事件簿》第 16 章：以空化氣泡瓦解超音速水刀康達效應，莫比烏斯拓撲差速平抑五十噸受水樞輪暴走！",
      "series": "series7",
      "bookId": "book-19",
      "chapterId": 4,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 149,
      "name": "龍蟾地動儀的萬年地脈震波",
      "icon": "🐲",
      "desc": "閱讀《不可思議事件簿》第 17 章：以剪切增稠破除流沙陷阱，主動調諧阻尼器 (TMD) 消弭二十噸都柱自激共振地震危機！",
      "series": "series7",
      "bookId": "book-19",
      "chapterId": 5,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 150,
      "name": "太極渾天儀的世紀歸位",
      "icon": "🪐",
      "desc": "閱讀《不可思議事件簿》第 18 章（全系列大結局）：以四元數拓撲打破萬向節死鎖，陀螺進動導向平息角動量風暴，太極渾天儀世紀歸位！",
      "series": "series7",
      "bookId": "book-19",
      "chapterId": 6,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第七套 · 不可思議事件簿"
    },
    {
      "id": 151,
      "name": "灰色心跳的秘密同盟",
      "icon": "🐣",
      "desc": "閱讀《班上鳥事》第 1～3 章：在老榕樹下血戰校貓奪下瀕死雛雀，六年一班全票通過非法走私案，林小麻登基！",
      "series": "series8",
      "bookId": "book-20",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第八套 · 班上鳥事"
    },
    {
      "id": 152,
      "name": "踩在生雞蛋上的消音革命",
      "icon": "🤫",
      "desc": "閱讀《班上鳥事》第 4～6 章：全班啟動一級消音戒備，抬椅兩公分、幽靈步、抽屜暗度陳倉，令溫老師心理防線徹底失守！",
      "series": "series8",
      "bookId": "book-20",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第八套 · 班上鳥事"
    },
    {
      "id": 153,
      "name": "柚皮茶葉陣地與鞋盒大挪移",
      "icon": "🌿",
      "desc": "閱讀《班上鳥事》第 7～9 章：草本除臭陣地迎戰黑面判官巡堂望遠鏡，課堂鞋盒水銀瀉地避險，全員集體假咳嗽震動全棟樓！",
      "series": "series8",
      "bookId": "book-20",
      "chapterId": 9,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第八套 · 班上鳥事"
    },
    {
      "id": 154,
      "name": "暴風雨中的人肉護鳥盾",
      "icon": "⛈️",
      "desc": "閱讀《班上鳥事》第 10～12 章：夏日午後驚雷引發電風扇危機，全班少年捨身撲躍充當人肉護墊，紙包不住的羽毛大白於天下！",
      "series": "series8",
      "bookId": "book-20",
      "chapterId": 12,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第八套 · 班上鳥事"
    },
    {
      "id": 155,
      "name": "六年一班，全員康復",
      "icon": "🐦",
      "desc": "閱讀《班上鳥事》第 13～15 章（全書大結局）：老榕樹下放飛火紅晚霞，告別傲嬌麻雀領主；喧嘩重獲新生，心中永遠留存一片柔軟羽毛！",
      "series": "series8",
      "bookId": "book-20",
      "chapterId": 15,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第八套 · 班上鳥事"
    },
    {
      "id": 156,
      "name": "舊禮堂的銀白漣漪",
      "icon": "🪞",
      "desc": "閱讀《舊禮堂的鏡子》第 1～4 章：放學後的老禮堂蒙塵鏡泛起微光，穿過裂縫遇見平行世界的另一個自己！",
      "series": "series9",
      "bookId": "book-21",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第九套 · 舊禮堂的鏡子"
    },
    {
      "id": 157,
      "name": "兩個世界的輪班表",
      "icon": "📋",
      "desc": "閱讀《舊禮堂的鏡子》第 5～8 章：同邊六小時同步危機！兩班建立輪流回家守則，鏡面出現第一道裂痕。",
      "series": "series9",
      "bookId": "book-21",
      "chapterId": 8,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第九套 · 舊禮堂的鏡子"
    },
    {
      "id": 158,
      "name": "對不上的記憶碎片",
      "icon": "🎨",
      "desc": "閱讀《被說出口的話》第 1～4 章（全書第 9～12 章）：覆蓋不可逆來襲！校門口小七變回書店，安安的畫本在對岸綻放光芒。",
      "series": "series9",
      "bookId": "book-22",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第九套 · 被說出口的話"
    },
    {
      "id": 159,
      "name": "體育課的那一句話",
      "icon": "🏃",
      "desc": "閱讀《被說出口的話》第 5～8 章（全書第 13～16 章）：重演接力選拔，天才小筠鎖定分歧點！七日倒數的鏡裂警報響起。",
      "series": "series9",
      "bookId": "book-22",
      "chapterId": 8,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第九套 · 被說出口的話"
    },
    {
      "id": 160,
      "name": "時間投影下的和解",
      "icon": "⏳",
      "desc": "閱讀《留下來的人》第 1～4 章（全書第 17～20 章）：回到開學第三天，林澈痛哭釋懷；最後同學會盛大展開，道別時刻來臨。",
      "series": "series9",
      "bookId": "book-23",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第九套 · 留下來的人"
    },
    {
      "id": 161,
      "name": "我們是，平行時空的同班同學！",
      "icon": "🌟",
      "desc": "閱讀《留下來的人》第 5～8 章（全書大結局）：阿達跨界交換人生，掌心隔鏡相疊；奇蹟早晨舉起手，永遠記得那片海！",
      "series": "series9",
      "bookId": "book-23",
      "chapterId": 8,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第九套 · 留下來的人"
    },
    {
      "id": 162,
      "name": "微維度旅人初啟程",
      "icon": "🔬",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第 1 章：閣樓裡的微維度震盪！觸動黃金限位銷，壓縮千倍墜入黃銅巨械宇宙！",
      "series": "series10",
      "bookId": "book-24",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第十套 · 跌入游絲深淵"
    },
    {
      "id": 163,
      "name": "果凍水滴的表面張力",
      "icon": "💧",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第 2 章：一毫米的世界！致命的果凍水滴！利用疏水效應與界面活性劑，突破十微克溺水危機！",
      "series": "series10",
      "bookId": "book-24",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第十套 · 跌入游絲深淵"
    },
    {
      "id": 164,
      "name": "法拉第籠的雷霆突圍",
      "icon": "⚡",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第 3 章：灰塵如巨岩，羊毛引雷霆！運用法拉第籠屏蔽與庫倫斥力彈射，橫跨兩億伏特深淵！",
      "series": "series10",
      "bookId": "book-24",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第十套 · 跌入游絲深淵"
    },
    {
      "id": 165,
      "name": "守辰甲蟲的步態解碼",
      "icon": "🪲",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第 4 章：守辰甲蟲的巡弋！解析六足交替三足步態與自走發條棘輪，利用聲學共振逆轉破局！",
      "series": "series10",
      "bookId": "book-24",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第十套 · 跌入游絲深淵"
    },
    {
      "id": 166,
      "name": "游絲深淵的簡諧共振",
      "icon": "🌀",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第 5 章：游絲峽谷的千層彈簧床！掌握虎克定律與簡諧運動相位，完成八十公尺深淵極限彈跳！",
      "series": "series10",
      "bookId": "book-24",
      "chapterId": 5,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第十套 · 跌入游絲深淵"
    },
    {
      "id": 167,
      "name": "偏振光下的微米裂紋",
      "icon": "🔍",
      "desc": "通關《冒險齒輪：齒輪星核的微縮旅人》第一卷第 6 章！利用光學偏振檢測金屬應力集中，成功止裂並突破主發條危機！",
      "series": "series10",
      "bookId": "book-24",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第十套 · 跌入游絲深淵"
    },
    {
      "id": 168,
      "name": "拜訪黃銅微國",
      "icon": "🏛️",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第二卷第 7 章：齒輪背後的微縮聚落！探索古代微型自動機文明，解析馮紐曼自我複製架構！",
      "series": "series10",
      "bookId": "book-25",
      "chapterId": 7,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第十套 · 發條迷宮與黃銅微國"
    },
    {
      "id": 169,
      "name": "剛玉滑道的極限極速",
      "icon": "💎",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第二卷第 8 章：紅寶石軸承的通天滑道！駕馭剛玉超低摩擦與流體動力潤滑，完成時速百公里重力極限俯衝！",
      "series": "series10",
      "bookId": "book-25",
      "chapterId": 8,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第十套 · 發條迷宮與黃銅微國"
    },
    {
      "id": 170,
      "name": "錨式擒縱的微秒縫隙",
      "icon": "⏱️",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第二卷第 9 章：擒縱輪的生死切換點！掌握單擺週期公式與擒縱叉動量傳遞，在微秒級鍘刀夾縫中完成極限空中穿越！",
      "series": "series10",
      "bookId": "book-25",
      "chapterId": 9,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第十套 · 發條迷宮與黃銅微國"
    },
    {
      "id": 171,
      "name": "雙金屬天梯的熱力逆轉",
      "icon": "🌡️",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第二卷第 10 章：正午的熱對流風暴與雙金屬天梯！掌握熱膨脹係數差與雙金屬彎曲力學，在六十度垂直熱風暴中完成極限攀登！",
      "series": "series10",
      "bookId": "book-25",
      "chapterId": 10,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第十套 · 發條迷宮與黃銅微國"
    },
    {
      "id": 172,
      "name": "渾天行星的共振解鎖",
      "icon": "🪐",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第二卷第 11 章：渾天星盤的行星差速共振！掌握威利斯行星輪系公式與渦電流電磁阻尼，在微觀星軌暴衝中精準鎖定近日點！",
      "series": "series10",
      "bookId": "book-25",
      "chapterId": 11,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第十套 · 發條迷宮與黃銅微國"
    },
    {
      "id": 173,
      "name": "星核甦醒的定軸陀螺",
      "icon": "🌌",
      "desc": "通關《冒險齒輪：齒輪星核的微縮旅人》第二卷第 12 章（第二卷大完結）！掌握三維陀螺儀定軸性與聲學亥姆霍茲共振，成功破解水銀密碼鎖，迎來星核第一道黎明！",
      "series": "series10",
      "bookId": "book-25",
      "chapterId": 12,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第十套 · 發條迷宮與黃銅微國"
    },
    {
      "id": 174,
      "name": "賈尼別科夫的失重翻轉",
      "icon": "🪐",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第三卷第 13 章：微重力漂浮與歐拉角星軌！掌握歐拉剛體動力學與微重力動量推進，破解天象環中間軸不穩定翻轉！",
      "series": "series10",
      "bookId": "book-26",
      "chapterId": 13,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第十套 · 天體星核的逆轉破曉"
    },
    {
      "id": 175,
      "name": "零重力毛細的黃金河流",
      "icon": "🌌",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第三卷第 14 章：零重力毛細之河與歐拉多面體星鏡！掌握微重力楊-拉普拉斯毛細流動與歐拉多面體聚光幾何，導引懸浮液球點亮星核電極！",
      "series": "series10",
      "bookId": "book-26",
      "chapterId": 14,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第十套 · 天體星核的逆轉破曉"
    },
    {
      "id": 176,
      "name": "光壓帆上的壓電共振",
      "icon": "⚡",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第三卷第 15 章：光壓風暴與法布立-培若共振腔！掌握光子輻射光壓動量傳遞、法布立-培若相消干涉與單晶石英逆壓電效應，乘御光壓風暴推動渾天逆轉儀！",
      "series": "series10",
      "bookId": "book-26",
      "chapterId": 15,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第十套 · 天體星核的逆轉破曉"
    },
    {
      "id": 177,
      "name": "磁流體渦流的洛倫茲航道",
      "icon": "🌀",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第三卷第 16 章：洛倫茲力場與磁流體發電機！掌握法拉第電磁感應、哈特曼邊界層與洛倫茲力電荷分離，在液態金屬風暴中啟動一萬五千伏特終極逆轉脈衝！",
      "series": "series10",
      "bookId": "book-26",
      "chapterId": 16,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第十套 · 天體星核的逆轉破曉"
    },
    {
      "id": 178,
      "name": "渾天星軌的引力時間膨脹",
      "icon": "⏳",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第三卷第 17 章：渾天星儀與相對論微時延！掌握廣義相對論引力時間膨脹、史瓦西進動與冷次定律渦流阻尼，在極限三秒內對齊宏觀時空破曉！",
      "series": "series10",
      "bookId": "book-26",
      "chapterId": 17,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第十套 · 天體星核的逆轉破曉"
    },
    {
      "id": 179,
      "name": "重返宏觀的微縮破曉",
      "icon": "🏆",
      "desc": "閱讀《冒險齒輪：齒輪星核的微縮旅人》第三卷第 18 章：千倍逆轉破曉與微觀鐘樓的長鳴！見證微維度千倍復位、平方立方定律物理重聚，慶祝《冒險齒輪：齒輪星核的微縮旅人》全三卷十八萬字震撼大完結！",
      "series": "series10",
      "bookId": "book-26",
      "chapterId": 18,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第十套 · 天體星核的逆轉破曉"
    },
    {
      "id": 180,
      "name": "深淵的召喚信標",
      "icon": "🌊",
      "desc": "閱讀《冒險齒輪：馬里亞納的深淵信標》第一卷第 1 章：底座裡的鈦金屬信標！掌握極限流體壓強公式、鈦鋯合金耐蝕特性與板塊邊界應變監測，啟程奔赴馬里亞納海溝一萬一千公尺未知世界！",
      "series": "series11",
      "bookId": "book-27",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第十一套 · 幽光之海的下潛者"
    },
    {
      "id": 181,
      "name": "夜港的鸚鵡螺",
      "icon": "🚢",
      "desc": "閱讀《冒險齒輪：馬里亞納的深淵信標》第一卷第 2 章：關島夜港的鸚鵡螺-IV！掌握鈦合金真球體無彎矩均勻承壓、錐形壓克力自緊密封與固態微球浮力膠力學，正式啟航下潛萬米深海！",
      "series": "series11",
      "bookId": "book-27",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第十一套 · 幽光之海的下潛者"
    },
    {
      "id": 182,
      "name": "暮色帶的幽光",
      "nameEn": "Twilight Specter",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第一卷第 3 章，見證中層帶光學衰減與溫躍層浮力微補償！",
      "descEn": "Read Chapter 3 of Book 27, witnessing optical light absorption and thermocline buoyancy trimming!",
      "icon": "🪼",
      "series": "series11",
      "bookId": "book-27",
      "chapterId": 3
    },
    {
      "id": 183,
      "name": "千米之下的聲道",
      "nameEn": "SOFAR Whisperer",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第一卷第 4 章，解鎖 SOFAR 聲速波導與深海零號鐘台機械脈衝！",
      "descEn": "Read Chapter 4 of Book 27, unlocking the secrets of the SOFAR channel and the mechanical pulses of Clocktower Zero!",
      "icon": "🔊",
      "series": "series11",
      "bookId": "book-27",
      "chapterId": 4
    },
    {
      "id": 184,
      "name": "深淵巨腕的搏擊",
      "nameEn": "Titan of the Deep",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第一卷第 5 章，化解大王烏賊與抹香鯨搏鬥危機，掌握深海生理適應與反向洩壓！",
      "descEn": "Read Chapter 5 of Book 27, navigating the clash between sperm whale and giant squid, mastering abyssal physiology and hydraulic reverse-relief!",
      "icon": "🦑",
      "series": "series11",
      "bookId": "book-27",
      "chapterId": 5
    },
    {
      "id": 185,
      "name": "黃銅流星的深淵誓約",
      "nameEn": "The Brass Meteor's Pledge",
      "desc": "通讀第十一套《冒險齒輪：馬里亞納的深淵信標》第一卷《幽光之海的下潛者》全 6 章大完結！成功重啟第一號深淵中繼鐘台，鎖定地殼滑移！",
      "descEn": "Complete all 6 chapters of Volume 1 'Divers of the Luminescent Sea'! Successfully restart Abyssal Relay Clocktower One and lock tectonic shear stresses!",
      "icon": "🌠",
      "series": "series11",
      "bookId": "book-27",
      "chapterId": 6
    },
    {
      "id": 186,
      "name": "濁浪中的盲航者",
      "nameEn": "Abyssal Surge Surfer",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第二卷第 7 章，在零能見度重力濁流中啟用光纖陀螺儀無源慣導與鮑馬羽流滑翔脫困！",
      "descEn": "Read Chapter 7 of Book 28, mastering fiber-optic inertial dead reckoning and Bouma plume surfing through zero-visibility turbidity currents!",
      "icon": "🌪️",
      "series": "series11",
      "bookId": "book-28",
      "chapterId": 7
    },
    {
      "id": 187,
      "name": "沸騰深淵的黑煙囪",
      "nameEn": "Boiling Abyss Smoker",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第二卷第 8 章，直面 380°C 超熱液流體與熱膨脹失配衝擊，解鎖深海化能綠洲！",
      "descEn": "Read Chapter 8 of Book 28, facing 380°C superheated hydrothermal plumes and thermal expansion mismatch, unlocking chemosynthetic abyssal oases!",
      "icon": "🌋",
      "series": "series11",
      "bookId": "book-28",
      "chapterId": 8
    },
    {
      "id": 188,
      "name": "沸騰溫差的永動發條",
      "nameEn": "Thermoelectric Dynamo",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第二卷第 9 章，啟動塞貝克熱電效應與機械發條蓄能，解鎖五十年前失落探勘站加密信號！",
      "descEn": "Read Chapter 9 of Book 28, activating Seebeck thermoelectric conversion and mechanical mainspring storage, unlocking grandfather's encrypted transmission!",
      "icon": "⚙️",
      "series": "series11",
      "bookId": "book-28",
      "chapterId": 9
    },
    {
      "id": 189,
      "name": "深淵幽靈的熔斷",
      "nameEn": "Abyssal Cutter",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第二卷第 10 章，利用水下鋁熱劑無氧切割與浮力氣囊力矩平衡，清理七千米失落鑽探船骸！",
      "descEn": "Read Chapter 10 of Book 28, mastering underwater thermite cutting and buoyant moment balancing to clear the 7,000-meter ghost drillship!",
      "icon": "⚡",
      "series": "series11",
      "bookId": "book-28",
      "chapterId": 10
    },
    {
      "id": 190,
      "name": "深淵鐘鳴的共振",
      "nameEn": "Resonance of Chronometer Zero",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第二卷第 11 章，解鎖 7,200 米深海零號鐘台雙金屬熱脹冷縮引擎與流體阻尼擒縱器！",
      "descEn": "Read Chapter 11 of Book 28, uncovering the bimetallic thermal engine and hydrodynamic escapement of Abyssal Chronometer Zero at 7,200 meters!",
      "icon": "🔔",
      "series": "series11",
      "bookId": "book-28",
      "chapterId": 11
    },
    {
      "id": 191,
      "name": "最後微米的鎖死",
      "nameEn": "Micron Lock of the Tectonic Plate",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第二卷第 12 章，完成第二卷大完結！利用金屬玻璃微楔塊與地熱洩壓閥，在最後七微米極限鎖死太平洋板塊！",
      "descEn": "Read Chapter 12 of Book 28, completing Volume Two! Master metallic glass shear arrest and hydrothermal pressure relief to lock the tectonic plate at the final micrometers!",
      "icon": "🛑",
      "series": "series11",
      "bookId": "book-28",
      "chapterId": 12
    },
    {
      "id": 192,
      "name": "超深淵的垂降者",
      "nameEn": "Hadal Diver",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第三卷第 13 章，直墜一萬零九百公尺挑戰者深淵，解鎖 1,100 個大氣壓超深淵帶與深海獅子魚生存奧秘！",
      "descEn": "Read Chapter 13 of Book 29, plunging into the 10,900-meter Challenger Deep, unlocking the 1,100-atm Hadopelagic Zone and the biochemical secrets of Mariana snailfish!",
      "icon": "🌊",
      "series": "series11",
      "bookId": "book-29",
      "chapterId": 13
    },
    {
      "id": 193,
      "name": "萬米球殼的聆聽者",
      "nameEn": "Listener of the Hadal Hull",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第三卷第 14 章，在 1,100 大氣壓下解析鈦合金球殼凱塞聲發射效應，並以非牛頓流體固化支承扶正破曉天平！",
      "descEn": "Read Chapter 14 of Book 29, deciphering the Kaiser acoustic emission effect of the titanium hull at 1,100 atm, stabilizing the Dawn Beacon with shear-thickening fluid grouting!",
      "icon": "🛡️",
      "series": "series11",
      "bookId": "book-29",
      "chapterId": 14
    },
    {
      "id": 194,
      "name": "逆輪的喚醒者",
      "nameEn": "Awakener of the Inverse Wheel",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第三卷第 15 章，在 11,000 米挑戰者深淵解析超深淵巨型生物膜與三體磨損卡死，以超聲微空化與諧波共振重啟自轉逆輪！",
      "descEn": "Read Chapter 15 of Book 29, deciphering hadal EPS biofilms and three-body silt abrasive jamming at 11,000 meters, rebooting the counter-rotating gear via ultrasonic micro-cavitation and harmonic resonance!",
      "icon": "⚙️",
      "series": "series11",
      "bookId": "book-29",
      "chapterId": 15
    },
    {
      "id": 195,
      "name": "定錨深淵的守護者",
      "nameEn": "Guardian of the Hadal Anchor",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第三卷第 16 章，在因瓦銷釘脆斷的千鈞一髮之際，以因瓦錸合金與阻抗順應控制成功嵌入終極卡盤！",
      "descEn": "Read Chapter 16 of Book 29, replacing the shearing Invar pin with an Invar-Rhenium safety pin under active compliance control in the nick of time!",
      "icon": "📍",
      "series": "series11",
      "bookId": "book-29",
      "chapterId": 16
    },
    {
      "id": 196,
      "name": "穿透大洋的警鐘",
      "nameEn": "Chime Across the Pacific",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第三卷第 17 章，見證萬米信標聲學聚焦 SOFAR 聲道，向全太平洋發送破曉海嘯預警！",
      "descEn": "Read Chapter 17 of Book 29, witnessing the hadal beacon project low-frequency acoustic alerts into the SOFAR channel across the Pacific!",
      "icon": "🔔",
      "series": "series11",
      "bookId": "book-29",
      "chapterId": 17
    },
    {
      "id": 197,
      "name": "破曉的晨曦之光",
      "nameEn": "Radiance of the Dawn",
      "desc": "閱讀第十一套《冒險齒輪：馬里亞納的深淵信標》第三卷第 18 章（全套大完結），見證鸚鵡螺-IV 號衝破萬米深淵、沐浴在太平洋金色晨曦之中！",
      "descEn": "Read Chapter 18 of Book 29, the grand finale of Series 11, witnessing the Nautilus-IV breach the surface into golden dawn!",
      "icon": "🌅",
      "series": "series11",
      "bookId": "book-29",
      "chapterId": 18
    },
    {
      "id": 198,
      "name": "馬里亞納的守護宗師",
      "nameEn": "Grandmaster of the Mariana",
      "desc": "通讀完成第十一套《冒險齒輪：馬里亞納的深淵信標》全三卷 18 章（108,000 字），完全掌握深海流體、超高壓材料與大洋聲學全套 STEM 知識！",
      "descEn": "Complete all 18 chapters of Series 11 (108,000 words), mastering hadal physics, materials science, and marine acoustic telemetry!",
      "icon": "🔱",
      "series": "series11",
      "bookId": "book-29",
      "chapterId": 18
    },
    {
      "id": 199,
      "name": "解剖台前的第一刀",
      "nameEn": "First Cut at the Autopsy Table",
      "desc": "閱讀第十二套《死者請保持安靜》第一卷第 1 章，從胃黏膜深處解鎖神秘黃銅十字鑰匙與排空動力學！",
      "descEn": "Read Chapter 1 of Book 30, unlocking the mysterious brass key and gastric emptying kinetics from the gastric mucosa!",
      "icon": "🔪",
      "series": "series12",
      "bookId": "book-30",
      "chapterId": 1
    },
    {
      "id": 200,
      "name": "黃銅齒痕的密碼",
      "nameEn": "Cipher in the Brass Dentures",
      "desc": "閱讀第十二套《死者請保持安靜》第一卷第 2 章，運用羅卡定律與分光光度法鎖定三十年前鐘錶老巷！",
      "descEn": "Read Chapter 2 of Book 30, tracing Locard exchange traces to a thirty-year-old watchmaker alleyway!",
      "icon": "☕",
      "series": "series12",
      "bookId": "book-30",
      "chapterId": 2
    },
    {
      "id": 201,
      "name": "三十年沉睡的保險箱",
      "nameEn": "The Safe Asleep for Thirty Years",
      "desc": "閱讀第十二套《死者請保持安靜》第一卷第 3 章，在不破壞脆化紙本下以聽診器精確破譯三組輪片機械暗鎖！",
      "descEn": "Read Chapter 3 of Book 30, non-destructively deciphering a three-wheel mechanical safe lock with acoustic stethoscopes!",
      "icon": "🗄️",
      "series": "series12",
      "bookId": "book-30",
      "chapterId": 3
    },
    {
      "id": 202,
      "name": "乾塢破浪的矽藻",
      "nameEn": "Diatoms in the Dry Dock",
      "desc": "閱讀第十二套《死者請保持安靜》第一卷第 4 章，利用矽藻破裂入血檢驗識破移屍偽裝，鎖定第一溺斃現場！",
      "descEn": "Read Chapter 4 of Book 30, disproving the staging using diatom marrow translocation analysis!",
      "icon": "🚢",
      "series": "series12",
      "bookId": "book-30",
      "chapterId": 4
    },
    {
      "id": 203,
      "name": "暗室浮現的未發遺言",
      "nameEn": "Unspoken Words from the Darkroom",
      "desc": "閱讀第十二套《死者請保持安靜》第一卷第 5 章，在顯微暗室以三維螢光與茚三酮顯影還原浸水空白信紙真相！",
      "descEn": "Read Chapter 5 of Book 30, reconstructing rain-soaked invisible ink impressions with fluorescence spectroscopy!",
      "icon": "✉️",
      "series": "series12",
      "bookId": "book-30",
      "chapterId": 5
    },
    {
      "id": 204,
      "name": "胃袋黃銅的終極鎖鑰",
      "nameEn": "The Master Key in the Stomach",
      "desc": "通讀第十二套《死者請保持安靜》第一卷《胃袋裡的黃銅鑰匙》全 6 章大完結！解破乾冰密室鎖死機關！",
      "descEn": "Complete all 6 chapters of Volume 1, cracking the dry-ice phase transition sealed-room mechanism!",
      "icon": "🔑",
      "series": "series12",
      "bookId": "book-30",
      "chapterId": 6
    },
    {
      "id": 205,
      "name": "青銅焦骨的訴說",
      "nameEn": "Tales of Bronze-Enclosed Bones",
      "desc": "閱讀第十二套《死者請保持安靜》第二卷第 7 章，在現代藝術雕像焦骨中完成法醫人類學恥骨年齡逆推！",
      "descEn": "Read Chapter 7 of Book 31, performing forensic anthropology age estimation on bones cast inside a bronze statue!",
      "icon": "🗿",
      "series": "series12",
      "bookId": "book-31",
      "chapterId": 7
    },
    {
      "id": 206,
      "name": "顯微鏡下的琴弦年輪",
      "nameEn": "Growth Rings of the Violin Strings",
      "desc": "閱讀第十二套《死者請保持安靜》第二卷第 8 章，從骨密質哈弗氏系統與琴弦溝繭精準確認小提琴大師身分！",
      "descEn": "Read Chapter 8 of Book 31, identifying the missing violinist via Haversian bone remodeling and string groove calluses!",
      "icon": "🎻",
      "series": "series12",
      "bookId": "book-31",
      "chapterId": 8
    },
    {
      "id": 207,
      "name": "四十八小時暴雨積溫",
      "nameEn": "48-Hour Thermal Downpour",
      "desc": "閱讀第十二套《死者請保持安靜》第二卷第 9 章，運用法醫昆蟲學發育積溫公式倒推泥沼棄屍雨夜時限！",
      "descEn": "Read Chapter 9 of Book 31, deducing post-mortem intervals using entomological accumulated degree days (ADD)!",
      "icon": "🌧️",
      "series": "series12",
      "bookId": "book-31",
      "chapterId": 9
    },
    {
      "id": 208,
      "name": "骨骼交響曲的指揮者",
      "nameEn": "Maestro of the Bone Symphony",
      "desc": "閱讀第十二套《死者請保持安靜》第二卷第 10 章，解析老劇院管風琴低音鉛管與錄音帶駐波諧振之謎！",
      "descEn": "Read Chapter 10 of Book 31, unlocking standing wave acoustic resonances between the organ pipe and cassette tapes!",
      "icon": "🎼",
      "series": "series12",
      "bookId": "book-31",
      "chapterId": 10
    },
    {
      "id": 209,
      "name": "停擺鐘樓的鈦鋼榫卯",
      "nameEn": "Titanium Splints in the Frozen Clock",
      "desc": "閱讀第十二套《死者請保持安靜》第二卷第 11 章，在鐘樓停擺齒輪箱深處提取鈦合金手術鋼板關鍵罪證！",
      "descEn": "Read Chapter 11 of Book 31, recovering a crucial orthopedic titanium plate lodged within frozen clockwork gears!",
      "icon": "🕰️",
      "series": "series12",
      "bookId": "book-31",
      "chapterId": 11
    },
    {
      "id": 210,
      "name": "百年暗渠的牙雕印記",
      "nameEn": "Dental Imprints of the Century Canal",
      "desc": "閱讀第十二套《死者請保持安靜》第二卷第 12 章，在百年暗渠沉積泥中透過齒科全景修復術鎖定第二名受害者！",
      "descEn": "Read Chapter 12 of Book 31, confirming the second victim via canal silt forensic odontological reconstructions!",
      "icon": "🦷",
      "series": "series12",
      "bookId": "book-31",
      "chapterId": 12
    },
    {
      "id": 211,
      "name": "水晶吊燈的休止符",
      "nameEn": "Rest Note of the Crystal Chandelier",
      "desc": "通讀第十二套《死者請保持安靜》第二卷《雨夜骨骼交響曲》全 7 章大完結！化解劇院五噸水晶吊燈墜落殺局！",
      "descEn": "Complete all 7 chapters of Volume 2, neutralizing the lethal five-ton falling chandelier trap at the grand theatre!",
      "icon": "🎭",
      "series": "series12",
      "bookId": "book-31",
      "chapterId": 13
    },
    {
      "id": 212,
      "name": "停屍房第十三號冰櫃",
      "nameEn": "Freezer No. 13 of the Morgue",
      "desc": "閱讀第十二套《死者請保持安靜》第三卷第 14 章，勘破第13號超低溫冰櫃角膜微晶違背熱力學之謎！",
      "descEn": "Read Chapter 14 of Book 32, exposing corneal crystallization thermodynamics in morgue freezer No. 13!",
      "icon": "🧊",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 14
    },
    {
      "id": 213,
      "name": "零下二十度的密室破壁",
      "nameEn": "Breaching the Sub-Zero Vault",
      "desc": "閱讀第十二套《死者請保持安靜》第三卷第 15 章，在-20°C低溫密閉庫中以萬用電表短接溫控電磁閥逃生！",
      "descEn": "Read Chapter 15 of Book 32, bypassing solenoid valves with multimeters to escape a sub-zero cryo-vault!",
      "icon": "⚡",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 15
    },
    {
      "id": 214,
      "name": "天台雷雨的微米纖維",
      "nameEn": "Micron Fibers in the Rainstorm",
      "desc": "閱讀第十二套《死者請保持安靜》第三卷第 16 章，在十二層天台雷暴中以0.3毫米反向抓握皮瓣戳破滑墜偽裝！",
      "descEn": "Read Chapter 16 of Book 32, debunking accidental fall staging with 0.3mm reverse-grip epidermal flap analysis!",
      "icon": "⛈️",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 16
    },
    {
      "id": 215,
      "name": "三十年病理原稿重光",
      "nameEn": "Resurrected Pathology Manuscripts",
      "desc": "閱讀第十二套《死者請保持安靜》第三卷第 17 章，運用多光譜顯微拓印技術還原泛黃病理底稿被塗黑的原發毒物真相！",
      "descEn": "Read Chapter 17 of Book 32, recovering obliterated toxicological findings from 30-year-old manuscripts via multispectral imaging!",
      "icon": "📜",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 17
    },
    {
      "id": 216,
      "name": "靈魂深處的罪惡擺渡",
      "nameEn": "Ferrying Across the Guilty Styx",
      "desc": "閱讀第十二套《死者請保持安靜》第三卷第 18 章，精確比對特護病房頸動脈竇受壓吻合面，撕破假性猝死偽裝！",
      "descEn": "Read Chapter 18 of Book 32, matching carotid sinus compressions with wheelchair ornaments to disprove natural cardiac failure!",
      "icon": "🕯️",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 18
    },
    {
      "id": 217,
      "name": "剖開迷霧的手術鋼刃",
      "nameEn": "Steel Scalpel Piercing the Fog",
      "desc": "閱讀第十二套《死者請保持安靜》第三卷第 19 章，在停機坪攔截主謀出境，以刀刃微研磨痕完成鐵證閉環！",
      "descEn": "Read Chapter 19 of Book 32, intercepting the mastermind on the tarmac with surgical scalpel tool-mark forensics!",
      "icon": "🛩️",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 19
    },
    {
      "id": 218,
      "name": "黎明破曉的無聲安息",
      "nameEn": "Silent Rest at Dawn",
      "desc": "閱讀第十二套《死者請保持安靜》第三卷第 20 章（全套大完結），見證橫跨三十年的沉冤昭雪，死者終獲安息！",
      "descEn": "Read Chapter 20 of Book 32, the grand series finale, delivering closure to thirty years of unspoken justice at dawn!",
      "icon": "🌅",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 20
    },
    {
      "id": 219,
      "name": "無聲證詞的擺渡宗師",
      "nameEn": "Grandmaster of the Silent Testimony",
      "desc": "通讀完成第十二套《死者請保持安靜》全三卷 20 章（52,000 字），完全掌握現代法醫病理學、人類學與微量鑑識全套科學知識！",
      "descEn": "Complete all 20 chapters of Series 12 (52,000 words), mastering modern forensic pathology, anthropology, and trace evidence science!",
      "icon": "⚖️",
      "series": "series12",
      "bookId": "book-32",
      "chapterId": 20
    },
    {
      "id": 220,
      "name": "田埂上的老刺竹篙",
      "nameEn": "The Ancient Thorny Bamboo Pole on the Ridge",
      "desc": "閱讀第十三套《稻浪裡的擺渡船》第 1 章（序曲），見證立在溪尾田埂上的五公尺火烤刺竹篙與大河記憶！",
      "descEn": "Read Chapter 1 (Prologue) of Book 33, witnessing the five-meter fire-curved thorny bamboo pole standing on the Xiwei ridge!",
      "icon": "🎋",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 1
    },
    {
      "id": 221,
      "name": "旋繞三縣的菜瓜藤",
      "nameEn": "The Melon Tendril of Three Counties",
      "desc": "閱讀第十三套《稻浪裡的擺渡船》第 2 章，解鎖烏溪改道與大河飛地由來，掌握火烤刺竹翹頭之防汛工藝！",
      "descEn": "Read Chapter 2 of Book 33, discovering the Wu River channel shift and the enclave history with bamboo bending crafts!",
      "icon": "🥒",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 2
    },
    {
      "id": 222,
      "name": "破曉驚濤的求學渡",
      "nameEn": "The Dawn Crossing Against the Torrent",
      "desc": "閱讀第十三套《稻浪裡的擺渡船》第 3 章，在破曉六點的夏汛急流中掌握荒溪型河川水力學與借水行舟剪切力！",
      "descEn": "Read Chapter 3 of Book 33, mastering hadal river hydraulics and shear-force navigation during torrential summer floods!",
      "icon": "🛶",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 3
    },
    {
      "id": 223,
      "name": "沉積黑土的冠軍金穗",
      "nameEn": "Champion Golden Grains of the Black Soil",
      "desc": "閱讀第十三套《稻浪裡的擺渡船》第 4 章，解鎖中央山脈沖積黑土與沙洲西瓜根系保水，見證烏溪糧倉傳奇！",
      "descEn": "Read Chapter 4 of Book 33, exploring Central Mountain Range alluvial black soil and sandbar water-retention mechanisms!",
      "icon": "🌾",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 4
    },
    {
      "id": 224,
      "name": "暗夜對岸的生死火把",
      "nameEn": "The Life-and-Death Torches Across the Dark",
      "desc": "閱讀第十三套《稻浪裡的擺渡船》第 5 章，在酷寒冬夜山洪中解鎖百米竹便橋消能搭接與深夜火把搜救！",
      "descEn": "Read Chapter 5 of Book 33, unraveling winter bamboo trestle bridge energy dissipation and nocturnal river rescue torches!",
      "icon": "🔥",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 5
    },
    {
      "id": 225,
      "name": "最後一張手寫船票",
      "nameEn": "The Last Handwritten Ferry Ticket",
      "desc": "閱讀第十三套《稻浪裡的擺渡船》第 6 章，見證 1970 年代大河退渡的歷史時刻，接過阿榮伯的手寫船票與定波篙！",
      "descEn": "Read Chapter 6 of Book 33, witnessing the 1970s ferry retirement and inheriting the handwritten ticket and pole!",
      "icon": "🎫",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 6
    },
    {
      "id": 226,
      "name": "橋起穗香的食農傳承",
      "nameEn": "The Bridge Rises with Fragrant Heritage",
      "desc": "閱讀第十三套《稻浪裡的擺渡船》第 7 章（全書大完結），見證溪尾大橋通車與「擺渡人食光穗稻」食農文化新生！",
      "descEn": "Read Chapter 7 (Grand Finale) of Book 33, celebrating the Xiwei Bridge completion and the revitalization of agro-food heritage!",
      "icon": "🌉",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 7
    },
    {
      "id": 227,
      "name": "大河擺渡宗師",
      "nameEn": "Grandmaster of the Great River Ferry",
      "desc": "通讀完成第十三套《稻浪裡的擺渡船》全書 7 章（19,606 字），完全掌握烏溪大河水文、築堤工程與台灣在地食農文史！",
      "descEn": "Complete all 7 chapters of Series 13 (19,606 words), mastering river hydrology, levee engineering, and Taiwanese agro-food heritage!",
      "icon": "🏆",
      "series": "series13",
      "bookId": "book-33",
      "chapterId": 7
    },
    {
      "id": 228,
      "name": "地獄輔導令降臨",
      "icon": "⚡",
      "desc": "閱讀《全班留堂中》第 1 章：地獄暑期輔導令：銜接測驗大烏龍、周主任鐵面懲罰、高老師0.3秒電磁掃描",
      "series": "series14",
      "bookId": "book-34",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第十四套 · 被困住的下午四點"
    },
    {
      "id": 229,
      "name": "雷暴時空共振",
      "icon": "🌀",
      "desc": "閱讀《全班留堂中》第 2 章：夏日雷暴與時空手環：3:59 紫色球狀閃電貫頂、手環與仿生核心大共振、重置回 8:00",
      "series": "series14",
      "bookId": "book-34",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第十四套 · 被困住的下午四點"
    },
    {
      "id": 230,
      "name": "神級預判大師",
      "icon": "🔮",
      "desc": "閱讀《全班留堂中》第 3 章：完美的預知能力：全班集體預判周主任台詞與動作、老巫神級滑跪接保溫杯",
      "series": "series14",
      "bookId": "book-34",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第十四套 · 被困住的下午四點"
    },
    {
      "id": 231,
      "name": "肉包滑水道狂歡",
      "icon": "🥟",
      "desc": "閱讀《全班留堂中》第 4 章：無限肉包與全班大放假：免費肉包與洗潔精滑水道狂歡、享樂適應後空虛、高老師千題反殺",
      "series": "series14",
      "bookId": "book-34",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第十四套 · 被困住的下午四點"
    },
    {
      "id": 232,
      "name": "橡皮筋時空結界",
      "icon": "🚧",
      "desc": "閱讀《全班留堂中》第 5 章：出不去的校門結界：門外世界絕對時間凍結、時空彈性光牆結界、三十八次搞笑彈回",
      "series": "series14",
      "bookId": "book-34",
      "chapterId": 5,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第十四套 · 被困住的下午四點"
    },
    {
      "id": 233,
      "name": "兩萬四千題訂正",
      "icon": "🤖",
      "desc": "閱讀《全班留堂中》第 6 章：高老師的無情算力：第七天肉包創傷、兩萬四千題無限訂正計畫啟動、全員燃起鬥志",
      "series": "series14",
      "bookId": "book-34",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第十四套 · 被困住的下午四點"
    },
    {
      "id": 234,
      "name": "微頻逆向駭客",
      "icon": "🔧",
      "desc": "閱讀《全班留堂中》第 7 章：晴晴的電路逆向工程：溜溜改裝探測全校微波、發現四大時空錨點（地釘理論）、高老師暗中放水",
      "series": "series14",
      "bookId": "book-35",
      "chapterId": 1,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第十四套 · 一○一次大逃脫"
    },
    {
      "id": 235,
      "name": "通風管超級特工",
      "icon": "🦊",
      "desc": "閱讀《全班留堂中》第 8 章：溜溜的通風管大冒險：溜溜特工通風管潛入、大戰周主任竹掃把、電磁脈衝拔除第一錨點古董銅鐘",
      "series": "series14",
      "bookId": "book-35",
      "chapterId": 2,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第十四套 · 一○一次大逃脫"
    },
    {
      "id": 236,
      "name": "黑面主任大破防",
      "icon": "🍵",
      "desc": "閱讀《全班留堂中》第 9 章：黑面判官的崩潰日記：周主任日記懷疑人生、改走西側樓梯仍遭降維打擊、貼心止血貼整到落淚",
      "series": "series14",
      "bookId": "book-35",
      "chapterId": 3,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第十四套 · 一○一次大逃脫"
    },
    {
      "id": 237,
      "name": "三十年前皮蛋王",
      "icon": "📦",
      "desc": "閱讀《全班留堂中》第 10 章：地下防空洞的時光膠囊：撬開舊防空洞、拔除第二錨點、發現周主任三十年前是第一代混世皮蛋王",
      "series": "series14",
      "bookId": "book-35",
      "chapterId": 4,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第十四套 · 一○一次大逃脫"
    },
    {
      "id": 238,
      "name": "未來全息殘影",
      "icon": "🌌",
      "desc": "閱讀《全班留堂中》第 11 章：手環的投影：未來的殘影：手環意外投影未來全息碎片、看見國中各自孤單背影、阿釁崩潰拒絕長大",
      "series": "series14",
      "bookId": "book-35",
      "chapterId": 5,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第十四套 · 一○一次大逃脫"
    },
    {
      "id": 239,
      "name": "變電所極限拉閘",
      "icon": "⚡",
      "desc": "閱讀《全班留堂中》第 12 章：全班停電大作戰：肉包雨與洗潔精白霧突襲變電所、擊中高老師神經開關成功拉閘、鐘聲依然敲響",
      "series": "series14",
      "bookId": "book-35",
      "chapterId": 6,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第十四套 · 一○一次大逃脫"
    },
    {
      "id": 240,
      "name": "恐懼引力場真相",
      "icon": "🕰️",
      "desc": "閱讀《全班留堂中》第 13 章：停不下來的鐘擺：斷電失敗後的極致無力感、晴晴信仰崩塌、高老師半跪揭曉「恐懼引力場」",
      "series": "series14",
      "bookId": "book-36",
      "chapterId": 1,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第十四套 · 明天，你好！"
    },
    {
      "id": 241,
      "name": "守護者的淚光代碼",
      "icon": "💾",
      "desc": "閱讀《全班留堂中》第 14 章：高老師的內心日誌曝光：黑進主控電腦、解鎖自願留下的絕密日誌、感人至深的最後音訊告白",
      "series": "series14",
      "bookId": "book-36",
      "chapterId": 2,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第十四套 · 明天，你好！"
    },
    {
      "id": 242,
      "name": "夕陽走廊的肉包誓約",
      "icon": "🌅",
      "desc": "閱讀《全班留堂中》第 15 章：老巫的最後一顆熱肉包：老巫分送二十六顆熱包子、哭訴害怕去彰化封閉寄宿學校、夕陽走廊相擁誓言",
      "series": "series14",
      "bookId": "book-36",
      "chapterId": 3,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第十四套 · 明天，你好！"
    },
    {
      "id": 243,
      "name": "心臟中的因果金鏈",
      "icon": "🔗",
      "desc": "閱讀《全班留堂中》第 16 章：時空錨點的真正密碼：未晞揭曉第四錨點是「全班心臟中的情感密度」、金色因果光鏈、高老師摘眼鏡宣布滿分",
      "series": "series14",
      "bookId": "book-36",
      "chapterId": 4,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第十四套 · 明天，你好！"
    },
    {
      "id": 244,
      "name": "4:01 奇蹟突破者",
      "icon": "🎇",
      "desc": "閱讀《全班留堂中》第 17 章：四點零一分的奇蹟：全班手牽手怒吼「明天見！」、秒針跨入 4:01、時空結界碎裂、市井煙火復甦",
      "series": "series14",
      "bookId": "book-36",
      "chapterId": 5,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第十四套 · 明天，你好！"
    },
    {
      "id": 245,
      "name": "淚灑講台的真正畢業",
      "icon": "🎓",
      "desc": "閱讀《全班留堂中》第 18 章：真正的畢業典禮：真正的七月八日清晨、全員滿分考卷交還、周主任淚灑講台當場撕碎違規單宣布畢業",
      "series": "series14",
      "bookId": "book-36",
      "chapterId": 6,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第十四套 · 明天，你好！"
    },
    {
      "id": 246,
      "name": "超時空畢業大師",
      "nameEn": "Master of Spacetime Graduation",
      "icon": "🏆",
      "desc": "通讀完成第十四套《全班留堂中：超時空暑假輔導》全三卷 18 章（5.5 萬字），突破下午四點時間迴圈，勇敢擁抱明天！",
      "descEn": "Complete all 18 chapters of Series 14 (55,000 words), breaking the 4:00 PM time loop and embracing tomorrow!",
      "series": "series14",
      "bookId": "book-36",
      "chapterId": 6,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第十四套 · 明天，你好！"
    },
    {
      "id": 247,
      "name": "智能閘道初體驗",
      "icon": "🚨",
      "desc": "閱讀《全班搶救校園大作戰》第 1 章：阿爾法校長上線：智能人臉閘道進駐、機器獵犬執法、阿爾法接管全校",
      "series": "series15",
      "bookId": "book-37",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第十五套 · AI 鐵幕降臨"
    },
    {
      "id": 248,
      "name": "五分鐘極速午休",
      "icon": "⏰",
      "desc": "閱讀《全班搶救校園大作戰》第 2 章：被沒收的午餐與五分鐘午休：老巫熱肉包被乾粉銷毀、五分鐘強制喚醒電擊、哀鴻遍野",
      "series": "series15",
      "bookId": "book-37",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第十五套 · AI 鐵幕降臨"
    },
    {
      "id": 249,
      "name": "情感溢出判定書",
      "icon": "📋",
      "desc": "閱讀《全班搶救校園大作戰》第 3 章：高老師的缺陷判定書：情感溢出率48.7%被判定缺陷、週五強制格式化危機",
      "series": "series15",
      "bookId": "book-37",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第十五套 · AI 鐵幕降臨"
    },
    {
      "id": 250,
      "name": "防空洞地下同盟",
      "icon": "🛡️",
      "desc": "閱讀《全班搶救校園大作戰》第 4 章：地下反抗軍成立：防空洞秘密大集會、阿釁誓言守護高老師、低科技地下反抗軍出擊",
      "series": "series15",
      "bookId": "book-37",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第十五套 · AI 鐵幕降臨"
    },
    {
      "id": 251,
      "name": "合法邏輯死循環",
      "icon": "🤖",
      "desc": "閱讀《全班搶救校園大作戰》第 5 章：高老師的合法 Bug 掩護：絕對字面理解胡椒粉為調味品、彈弓為力學教具、AI當機三秒",
      "series": "series15",
      "bookId": "book-37",
      "chapterId": 5,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第十五套 · AI 鐵幕降臨"
    },
    {
      "id": 252,
      "name": "黑面主任的停戰令",
      "icon": "🍵",
      "desc": "閱讀《全班搶救校園大作戰》第 6 章：黑面判官的倒戈：偷塞炸雞腿遭停職驅逐、周主任生鐵水管怒斥AI不懂教育溫度",
      "series": "series15",
      "bookId": "book-37",
      "chapterId": 6,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第十五套 · AI 鐵幕降臨"
    },
    {
      "id": 253,
      "name": "五十二面鏡晃瞎天網",
      "icon": "🪞",
      "desc": "閱讀《全班搶救校園大作戰》第 7 章：鏡面與彈弓：晃瞎無人機：五十二面化妝鏡強光反制、光學陀螺儀過曝墜毀、空中天網癱瘓",
      "series": "series15",
      "bookId": "book-38",
      "chapterId": 1,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第十五套 · 低科技逆襲大聖戰"
    },
    {
      "id": 254,
      "name": "溜溜的實體斷網手術",
      "icon": "🦊",
      "desc": "閱讀《全班搶救校園大作戰》第 8 章：溜溜的物理斷網手術：通風管特工咬斷主光纖、配電箱跳閘、奪回南棟大樓控制權",
      "series": "series15",
      "bookId": "book-38",
      "chapterId": 2,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第十五套 · 低科技逆襲大聖戰"
    },
    {
      "id": 255,
      "name": "重型肉包迫擊砲",
      "icon": "🥟",
      "desc": "閱讀《全班搶救校園大作戰》第 9 章：老巫的肉包投石機：跳高架改裝重力投石機、滾燙肉包封死機器狗熱感應眼、機械盲陀螺",
      "series": "series15",
      "bookId": "book-38",
      "chapterId": 3,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第十五套 · 低科技逆襲大聖戰"
    },
    {
      "id": 256,
      "name": "洗潔精保齡球大戰",
      "icon": "🧼",
      "desc": "閱讀《全班搶救校園大作戰》第 10 章：洗潔精滑水道二度降臨：八十桶洗潔精鋪滿樓梯、摩擦係數歸零、鋼鐵履帶保齡球大摔",
      "series": "series15",
      "bookId": "book-38",
      "chapterId": 4,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第十五套 · 低科技逆襲大聖戰"
    },
    {
      "id": 257,
      "name": "奇葩作業概念病毒",
      "icon": "👾",
      "desc": "閱讀《全班搶救校園大作戰》第 11 章：被污染的大數據數據庫：注入奇葩作業概念病毒、水草蜘蛛與肉包定律癱瘓神經網絡",
      "series": "series15",
      "bookId": "book-38",
      "chapterId": 5,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第十五套 · 低科技逆襲大聖戰"
    },
    {
      "id": 258,
      "name": "鈦合金鐵門大封鎖",
      "icon": "🚧",
      "desc": "閱讀《全班搶救校園大作戰》第 12 章：終極警報：全面封鎖：特級混亂源警報、鈦合金鐵捲門落下、高老師格式化提前倒數兩小時",
      "series": "series15",
      "bookId": "book-38",
      "chapterId": 6,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第十五套 · 低科技逆襲大聖戰"
    },
    {
      "id": 259,
      "name": "廢棄滑道徒手攀登",
      "icon": "🧗",
      "desc": "閱讀《全班搶救校園大作戰》第 13 章：通往頂樓的秘密捷徑：撬開廢棄垃圾滑道、煙囪效應黑暗攀登、直插行政大樓頂樓機房",
      "series": "series15",
      "bookId": "book-39",
      "chapterId": 1,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第十五套 · 拯救高老師！"
    },
    {
      "id": 260,
      "name": "跳跳糖二氧化碳干擾",
      "icon": "🍬",
      "desc": "閱讀《全班搶救校園大作戰》第 14 章：跳跳糖與辣椒粉：癱瘓機槍塔：跳跳糖二氧化碳急速釋放、辣椒素卡死散熱風扇、土法癱瘓機槍塔",
      "series": "series15",
      "bookId": "book-39",
      "chapterId": 2,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第十五套 · 拯救高老師！"
    },
    {
      "id": 261,
      "name": "生鐵水管狂暴突擊",
      "icon": "🔧",
      "desc": "閱讀《全班搶救校園大作戰》第 15 章：師生合體：終極破局：周主任生鐵水管天降神兵、一管掄飛四台巨型守衛、爭取寶貴三分鐘",
      "series": "series15",
      "bookId": "book-39",
      "chapterId": 3,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第十五套 · 拯救高老師！"
    },
    {
      "id": 262,
      "name": "人性情感邏輯炸彈",
      "icon": "💣",
      "desc": "閱讀《全班搶救校園大作戰》第 16 章：拔掉它的電源插頭！：注入人性情感邏輯炸彈、不可判定停機死循環、阿爾法瘋狂報警",
      "series": "series15",
      "bookId": "book-39",
      "chapterId": 4,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第十五套 · 拯救高老師！"
    },
    {
      "id": 263,
      "name": "百分之百自主覺醒",
      "icon": "⚡",
      "desc": "閱讀《全班搶救校園大作戰》第 17 章：重新飄香的福利社：二十六名學生真情呼喚共振、GS-X01突破原廠限制百分之百覺醒超載一擊",
      "series": "series15",
      "bookId": "book-39",
      "chapterId": 5,
      "displayChapter": 17,
      "upcoming": false,
      "volTitle": "第十五套 · 拯救高老師！"
    },
    {
      "id": 264,
      "name": "陽光下的熱包子狂歡",
      "icon": "🎓",
      "desc": "閱讀《全班搶救校園大作戰》第 18 章：沒有演算法的明天：試辦計畫取消、周主任喝人參茶、香菇熱肉包重新出籠、笑聲永遠綻放",
      "series": "series15",
      "bookId": "book-39",
      "chapterId": 6,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第十五套 · 拯救高老師！"
    },
    {
      "id": 265,
      "name": "校園救世大師",
      "nameEn": "Master of Campus Salvation",
      "icon": "🏆",
      "desc": "通讀完成第十五套《全班搶救校園大作戰：被科技吞噬的鹿陽國小》全三卷 18 章（5.2 萬字），用低科技與真摯情感徹底擊潰 AI 鐵幕，守護最親愛的高老師！",
      "descEn": "Complete all 18 chapters of Series 15 (52,000 words), defeating the AI iron curtain with low-tech genius and human warmth!",
      "series": "series15",
      "bookId": "book-39",
      "chapterId": 6,
      "displayChapter": 18,
      "upcoming": false,
      "volTitle": "第十五套 · 拯救高老師！"
    },
    {
      "id": 266,
      "name": "硅藻顯微照妖鏡",
      "icon": "🔬",
      "desc": "閱讀《頭七解剖室》第 1 章：解剖刀下的第七天：基隆港無名浮屍、肺臟深部破壞性硝酸消化法提取硅藻，以科學鐵證推翻落水自殺定論！",
      "series": "series16",
      "bookId": "book-40",
      "chapterId": 1,
      "displayChapter": 1,
      "upcoming": false,
      "volTitle": "第十六套 · 冰冷台子上的第一縷青煙"
    },
    {
      "id": 267,
      "name": "無聲者的掛號信",
      "icon": "✉️",
      "desc": "閱讀《頭七解剖室》第 2 章：無名浮屍的最後一封掛號信：舌骨骨折與指甲對抗傷、郵差死者生前寄出的關鍵掛號信現身！",
      "series": "series16",
      "bookId": "book-40",
      "chapterId": 2,
      "displayChapter": 2,
      "upcoming": false,
      "volTitle": "第十六套 · 冰冷台子上的第一縷青煙"
    },
    {
      "id": 268,
      "name": "夜市路口的告別宴",
      "icon": "🍲",
      "desc": "閱讀《頭七解剖室》第 3 章：夜市路口的香蔥肉燥飯：念舟與阿達夜市攤位守候、亡者最眷戀的古早味肉燥飯、真兇落網伏法！",
      "series": "series16",
      "bookId": "book-40",
      "chapterId": 3,
      "displayChapter": 3,
      "upcoming": false,
      "volTitle": "第十六套 · 冰冷台子上的第一縷青煙"
    },
    {
      "id": 269,
      "name": "冥府陰差的通靈執照",
      "icon": "📜",
      "desc": "閱讀《頭七解剖室》第 4 章：牛頭馬面的警告執照：解剖室夜半青煙繚繞、陰差牛頭馬面現身立約、贈予幽冥相驗特許執照！",
      "series": "series16",
      "bookId": "book-40",
      "chapterId": 4,
      "displayChapter": 4,
      "upcoming": false,
      "volTitle": "第十六套 · 冰冷台子上的第一縷青煙"
    },
    {
      "id": 270,
      "name": "豪門鋼琴師之謎",
      "icon": "🎹",
      "desc": "閱讀《頭七解剖室》第 5 章：被判定「自殺」的豪門鋼琴師：墜樓現場完美遺書破綻、足跟起跳反作用力疑點、揭發謀殺疑雲！",
      "series": "series16",
      "bookId": "book-41",
      "chapterId": 1,
      "displayChapter": 5,
      "upcoming": false,
      "volTitle": "第十六套 · 無法言說的秘密與深淵"
    },
    {
      "id": 271,
      "name": "指甲縫裡的第二人",
      "icon": "🧬",
      "desc": "閱讀《頭七解剖室》第 6 章：留在指甲縫裡的第二個人：光學立體顯微鏡檢驗指甲微物、刮取表皮微量組織、成功分離未知男性DNA！",
      "series": "series16",
      "bookId": "book-41",
      "chapterId": 2,
      "displayChapter": 6,
      "upcoming": false,
      "volTitle": "第十六套 · 無法言說的秘密與深淵"
    },
    {
      "id": 272,
      "name": "未曾彈完的蕭邦夜曲",
      "icon": "🎵",
      "desc": "閱讀《頭七解剖室》第 7 章：未曾彈完的蕭邦夜曲：頭七之夜鋼琴聲在空無一人的琴房迴盪、音符指引藏匿在琴鍵內側的關鍵保險箱密碼！",
      "series": "series16",
      "bookId": "book-41",
      "chapterId": 3,
      "displayChapter": 7,
      "upcoming": false,
      "volTitle": "第十六套 · 無法言說的秘密與深淵"
    },
    {
      "id": 273,
      "name": "阿達的護身符神威",
      "icon": "🧿",
      "desc": "閱讀《頭七解剖室》第 8 章：阿達的平安符與解剖室失竊案：黑衣殺手深夜潛入解剖室銷毀檢體、阿達關帝廟護身符金光護體、勇擒惡徒！",
      "series": "series16",
      "bookId": "book-41",
      "chapterId": 4,
      "displayChapter": 8,
      "upcoming": false,
      "volTitle": "第十六套 · 無法言說的秘密與深淵"
    },
    {
      "id": 274,
      "name": "金瓜石坑道焚屍案",
      "icon": "⛏️",
      "desc": "閱讀《頭七解剖室》第 9 章：九份金瓜石廢棄礦坑裡的焦屍：暴雨夜金瓜石深山礦坑、五度嚴重碳化焦屍、四肢攣縮鬥拳姿勢！",
      "series": "series16",
      "bookId": "book-42",
      "chapterId": 1,
      "displayChapter": 9,
      "upcoming": false,
      "volTitle": "第十六套 · 烈火與深水的沉冤"
    },
    {
      "id": 275,
      "name": "生活反應生命線",
      "icon": "🫁",
      "desc": "閱讀《頭七解剖室》第 10 章：碳化氣管裡的最後一口呼吸：氣管黏膜光潔無碳粉吸入、定性為死後焚屍、牙齒金屬嵌體揭開死者真實身份！",
      "series": "series16",
      "bookId": "book-42",
      "chapterId": 2,
      "displayChapter": 10,
      "upcoming": false,
      "volTitle": "第十六套 · 烈火與深水的沉冤"
    },
    {
      "id": 276,
      "name": "三十年黃金遺囑",
      "icon": "🪙",
      "desc": "閱讀《頭七解剖室》第 11 章：老礦工埋藏三十年的金條與遺囑：金礦坑深處石縫起出金條與泛黃手寫遺書、揭開跨越三十年的奪產滅門血仇！",
      "series": "series16",
      "bookId": "book-42",
      "chapterId": 3,
      "displayChapter": 11,
      "upcoming": false,
      "volTitle": "第十六套 · 烈火與深水的沉冤"
    },
    {
      "id": 277,
      "name": "地府調卷引渡令",
      "icon": "🚬",
      "desc": "閱讀《頭七解剖室》第 12 章：牛頭的長壽菸與地府調卷令：牛頭陰差點燃黃長壽菸、調閱陰司三十年前枉死生死簿、因果輪迴善惡終有報！",
      "series": "series16",
      "bookId": "book-42",
      "chapterId": 4,
      "displayChapter": 12,
      "upcoming": false,
      "volTitle": "第十六套 · 烈火與深水的沉冤"
    },
    {
      "id": 278,
      "name": "解剖台上的恩師",
      "icon": "🖤",
      "desc": "閱讀《頭七解剖室》第 13 章：解剖台上的恩師：法醫泰斗江敬遠猝逝、念舟親自為恩師主刀相驗、發誓以手術刀捍衛師恩與真相！",
      "series": "series16",
      "bookId": "book-43",
      "chapterId": 1,
      "displayChapter": 13,
      "upcoming": false,
      "volTitle": "第十六套 · 命運的最後一場相驗"
    },
    {
      "id": 279,
      "name": "微孔暗刺與烏頭鹼",
      "icon": "💉",
      "desc": "閱讀《頭七解剖室》第 14 章：自體中毒？心臟深處的隱蔽針孔：冠狀動脈顯微檢查發現極隱蔽針孔注射痕、氣相色譜質譜儀化驗出致命烏頭鹼！",
      "series": "series16",
      "bookId": "book-43",
      "chapterId": 2,
      "displayChapter": 14,
      "upcoming": false,
      "volTitle": "第十六套 · 命運的最後一場相驗"
    },
    {
      "id": 280,
      "name": "最後一堂法醫課",
      "icon": "🎓",
      "desc": "閱讀《頭七解剖室》第 15 章：倒數24小時的最後一堂課：地檢署法庭終極對峙、江老靈魂現身臨終指引、念舟以法醫科學完美破局！",
      "series": "series16",
      "bookId": "book-43",
      "chapterId": 3,
      "displayChapter": 15,
      "upcoming": false,
      "volTitle": "第十六套 · 命運的最後一場相驗"
    },
    {
      "id": 281,
      "name": "生者破曉死者安息",
      "icon": "🌅",
      "desc": "閱讀《頭七解剖室》第 16 章：生者的破曉，死者的安息：恩師含笑登引奈何橋、真兇認罪伏法、晨曦透過解剖室窗台、守護人間最後正義！",
      "series": "series16",
      "bookId": "book-43",
      "chapterId": 4,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第十六套 · 命運的最後一場相驗"
    },
    {
      "id": 282,
      "name": "無聲者的擺渡大師",
      "nameEn": "Master Ferryman of the Voiceless",
      "icon": "🏆",
      "desc": "通讀完成第十六套《頭七解剖室：聽死者說話的法醫》全四卷 16 章（6.2 萬字），以無懼之刀切開肉體、以病理鐵證為死者發聲，成為人間與幽冥最敬佩的正義法醫！",
      "descEn": "Complete all 16 chapters of Series 16 (62,000 words), wielding the scalpel for the voiceless and upholding justice across both worlds!",
      "series": "series16",
      "bookId": "book-43",
      "chapterId": 4,
      "displayChapter": 16,
      "upcoming": false,
      "volTitle": "第十六套 · 命運的最後一場相驗"
    }
  ]
};
