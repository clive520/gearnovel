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
    subtitle: "鐘錶物理與唯美成長冒險（預計全三卷）",
    badge: "✨ 第二卷完結",
    badgeColor: "emerald",
    targetAudience: "9～14 歲適讀 · 鐘錶物理 × 少年成長",
    tagline: "聽懂齒輪心跳的晨光堂女孩，與手握微積分的冰霜少女並肩追光！",
    description: "十三歲的晨光堂鐘錶學徒采婭玆，立志成為星港青年首席星軌修復師。在舊城區的晨光堂裡，她用薰衣草鐘錶油化解了天才少女林漪姉冰冷的外殼，並在雲海引航少年罧貁銁的默默陪伴下，深入地下熔爐熔鑄因瓦合金雙金屬發條，迎戰監察處的重型蒸汽巨像！",
    stats: {
      totalVolumes: 3,
      currentVolumesReleased: 2,
      totalChapters: 30,
      currentChaptersReleased: 20,
      totalWords: "第二卷完結（已發布 20 章 · 10.8 萬字）",
      statusText: "第二卷圓滿完結！第 20 章大結局已上線"
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
        bookId: null,
        volNum: "第三卷",
        title: "天穹之心的永恆鐘鳴",
        subtitle: "首席星軌修復師的大結局",
        chaptersCount: 10,
        releasedChapters: 0,
        wordCount: "即將登場",
        status: "構思中",
        theme: "光學鐘 × 冷原子鐘 × 星港天穹之心",
        firstChapterId: null
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
  }
];
