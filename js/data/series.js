/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 套書體系資料庫 (Series Master Database)
 * 前三卷整合為第一套完結套書，第二套規劃為全三卷長篇套書
 */
window.GEAR_SERIES = [
  {
    id: "series-1",
    title: "冒險齒輪：失落的二十四小時",
    enTitle: "Adventure Gear: The Lost Twenty-Four Hours",
    subtitle: "少兒硬核科幻 · 全三卷完結旗艦套書（共 32 章）",
    badge: "🏆 完結紀念旗艦版",
    badgeColor: "emerald",
    targetAudience: "9～14 歲少兒 · STEM 密碼解謎冒險",
    tagline: "當整個世界的星期三被神秘抹去，四位少年的記憶逆流大冒險！",
    description: "鹿陽國小的發明少年誠浩戴上爺爺留下的黃銅幽靈護目鏡，赫然看見空氣中漂浮的報錯代碼與地下深處的巨大數據電纜。攜手學霸班長葉旖緁、死黨將江與機械柴犬皮可，從校園地下404室、千島齒輪海的迷失燈塔，一路殺向萬米高空的星穹浮空城！融合摩斯密碼、二進位、白努利定理、十二平均律音波與反重力科技的硬核科學冒險！",
    stats: {
      totalVolumes: 3,
      totalChapters: 32,
      totalWords: "14.4 萬字",
      statusText: "全三卷 · 32章完結"
    },
    volumes: [
      {
        bookId: "book-1",
        volNum: "第一卷",
        title: "校園地下 404 室",
        subtitle: "失竊的記憶與機械摺紙犬",
        chaptersCount: 10,
        wordCount: "43.7k 字",
        status: "已完結",
        theme: "校園密室 × 摩斯代碼 × 邏輯電路",
        firstChapterId: 1
      },
      {
        bookId: "book-2",
        volNum: "第二卷",
        title: "千島齒輪海的迷失燈塔",
        subtitle: "大航海與深海聲納共振",
        chaptersCount: 12,
        wordCount: "52.1k 字",
        status: "已完結",
        theme: "大航海 × 聲納共振 × 全息折射",
        firstChapterId: 11
      },
      {
        bookId: "book-3",
        volNum: "第三卷",
        title: "星穹鐘樓的第十二個音符",
        subtitle: "平流層天梯與反重力破曉",
        chaptersCount: 10,
        wordCount: "48.5k 字",
        status: "已完結",
        theme: "平流層 × 天體音波 × 反重力科技",
        firstChapterId: 23
      }
    ],
    highlights: [
      "32 個章節全部支援繁中／英文／雙語對照",
      "32 道硬核 STEM 互動實驗謎題",
      "誠浩、葉旖緁、將江、皮可冒險全記錄"
    ],
    themeTone: "amber",
    coverStyle: "from-amber-500/10 via-amber-500/5 to-slate-900/40 border-amber-500/30",
    startBookId: "book-1",
    startChapterId: 1
  },
  {
    id: "series-2",
    title: "星願鐘擺與織光少女",
    enTitle: "Star-Wish Pendulum and the Weaver of Light",
    subtitle: "鐘錶物理與唯美成長冒險（全三卷完結）",
    badge: "✨ 全三卷完結",
    badgeColor: "rose",
    targetAudience: "9～14 歲適讀 · 鐘錶物理 × 少年成長",
    tagline: "聽懂齒輪心跳的晨光堂女孩，與手握微積分的冰霜少女並肩追光！",
    description: "十三歲的晨光堂鐘錶學徒采婭玆，立志成為星港青年首席星軌修復師。在舊城區的晨光堂裡，她用薰衣草鐘錶油化解了天才少女林漪姉冰冷的外殼，並在雲海引航少年罧貁銁的默默陪伴下，深入地下熔爐熔鑄因瓦合金雙金屬發條，迎戰監察處的重型蒸汽巨像！",
    stats: {
      totalVolumes: 3,
      currentVolumesReleased: 3,
      totalChapters: 30,
      currentChaptersReleased: 30,
      totalWords: "全三卷震撼完結（全 30 章 · 17.5 萬字）",
      statusText: "全三卷大結局震撼完結！天穹之心與永恆共鳴鐘鳴"
    },
    volumes: [
      {
        bookId: "book-4",
        volNum: "第一卷",
        title: "追光星盤的修復師",
        subtitle: "晨光堂發條與冰霜少女之約",
        chaptersCount: 10,
        releasedChapters: 10,
        wordCount: "第一卷完結（全 10 章 · 4.6 萬字）",
        status: "全 10 章已完結",
        theme: "虎克定律 × 雙金屬補償 × 翼帆升力 × 駐波和弦 × 陀螺進動",
        firstChapterId: 1
      },
      {
        bookId: "book-5",
        volNum: "第二卷",
        title: "旋轉稜鏡的雙星軌道",
        subtitle: "雙星軌道完全校準與永恆共鳴",
        chaptersCount: 10,
        releasedChapters: 10,
        wordCount: "第二卷完結（全 10 章 · 5.9 萬字）",
        status: "全卷完結（共 10 章）",
        theme: "潮汐共振阻尼 × 引力波四極輻射 × 光學頻率梳 × 雙星大合唱",
        firstChapterId: 1
      },
      {
        bookId: "book-6",
        volNum: "第三卷",
        title: "天穹之心的永恆鐘鳴",
        subtitle: "引力時間膨脹與光晶格鐘",
        chaptersCount: 10,
        releasedChapters: 10,
        wordCount: "第三卷完結（全 10 章 · 6.8 萬字）",
        status: "全卷完結（全劇終 · 共 10 章）",
        theme: "光晶格鐘 × 脈衝星時鐘 × 愛因斯坦環 × 潘羅斯躍遷 × 永恆鐘鳴",
        firstChapterId: 1
      }
    ],
    highlights: [
      "細膩筆觸與微甜心動情誼",
      "硬核鐘錶力學、材料學與微積分光學對話",
      "采婭玆、林漪姉、罧貁銁並肩追光旅程"
    ],
    themeTone: "rose",
    coverStyle: "from-rose-500/10 via-purple-500/5 to-slate-900/40 border-rose-500/30",
    startBookId: "book-4",
    startChapterId: 1
  },
  {
    id: "series-3",
    title: "我的老師不是人",
    enTitle: "My Teacher Is Not Human",
    subtitle: "校園爆笑科幻 · 全三卷完結套書（共 24 章）",
    badge: "🤖 全三卷完結",
    badgeColor: "sky",
    targetAudience: "9～15 歲少兒 · 校園爆笑 × 輕科幻冒險",
    tagline: "當全能仿生機器人導師掉了一顆常識齒輪，全校最皮的六年一班展開爆笑掩護大作戰！",
    description: "教育部秘密測試計畫派遣全能仿生人「GS-X01」化身實習導師高峙舷進駐鹿陽國小六年一班。不料黑板前一顆常識調節黃銅齒輪意外脫落，觸發絕對字面解讀狂暴！指尖微波便當、頭頂超載冒煙、健康操跳出極限機械舞！為了不讓老師被科技總部回收銷毀，調皮點子王阿釁、天才少女班長晴晴、吃貨老巫與情報 AI 萌寵溜溜結成秘密同盟，迎戰假水電工、突破大雨遊樂園雲霄飛車危機，迎向笑中帶淚的畢業季！",
    stats: {
      totalVolumes: 3,
      currentVolumesReleased: 3,
      totalChapters: 24,
      currentChaptersReleased: 24,
      totalWords: "全三卷完結（全 24 章 · 10.1 萬字）",
      statusText: "全三卷大結局圓滿完結！明天見，高老師！"
    },
    volumes: [
      {
        bookId: "book-7",
        volNum: "第一卷",
        title: "講台下的黃銅齒輪",
        subtitle: "故障、結盟與日常大作戰",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第一卷完結（全 8 章 · 2.3 萬字）",
        status: "全 8 章已完結",
        theme: "常識齒輪脫落 × 字面意義魔人 × 指尖微波爐 × 乾冰舞台劇 × 透視光眼",
        firstChapterId: 1
      },
      {
        bookId: "book-8",
        volNum: "第二卷",
        title: "潛入校園的假水電工",
        subtitle: "外部威脅、總部追查與校園防衛戰",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第二卷完結（全 8 章 · 4.2 萬字）",
        status: "全 8 章已完結",
        theme: "大實話家長會 × 彈珠游擊戰 × 太空步倒退走 × 深夜實驗室 × 軸承置換手術",
        firstChapterId: 1
      },
      {
        bookId: "book-9",
        volNum: "第三卷",
        title: "重啟奇蹟的畢業季",
        subtitle: "畢業旅行大冒險、極限救援與告別",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第三卷完結（全 8 章 · 3.5 萬字）",
        status: "全卷完結（全劇終 · 共 8 章）",
        theme: "超載打地鼠 × 80度垂直鋼軌 × 解鎖100%全功率 × 大雨人牆 × 奇蹟的最後一顆齒輪",
        firstChapterId: 1
      }
    ],
    highlights: [
      "全 24 章中英雙語對照，支援純中／純英／雙語段落切換",
      "內建 Web Speech 兒童伴讀有聲朗讀引擎與卡拉OK高亮聚焦",
      "26 名鹿陽國小學生與 AI 萌寵溜溜爆笑溫馨冒險全記錄"
    ],
    themeTone: "sky",
    coverStyle: "from-sky-500/10 via-cyan-500/5 to-slate-900/40 border-sky-500/30",
    startBookId: "book-7",
    startChapterId: 1
  }
];
