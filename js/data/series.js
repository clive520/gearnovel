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
        wordCount: "第 1～10 章 · 4.4 萬字",
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
        wordCount: "第 11～22 章 · 5.2 萬字",
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
        wordCount: "第 23～32 章 · 4.8 萬字",
        status: "已完結",
        theme: "平流層天梯 × 天體音波 × 反重力科技",
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
      totalWords: "17.5 萬字",
      statusText: "全三卷 · 30章完結"
    },
    volumes: [
      {
        bookId: "book-4",
        volNum: "第一卷",
        title: "追光星盤的修復師",
        subtitle: "晨光堂發條與冰霜少女之約",
        chaptersCount: 10,
        releasedChapters: 10,
        wordCount: "第 1～10 章 · 4.6 萬字",
        status: "全 10 章已完結",
        theme: "虎克定律 × 雙金屬補償 × 翼帆升力",
        firstChapterId: 1
      },
      {
        bookId: "book-5",
        volNum: "第二卷",
        title: "旋轉稜鏡的雙星軌道",
        subtitle: "雙星軌道完全校準與永恆共鳴",
        chaptersCount: 10,
        releasedChapters: 10,
        wordCount: "第 11～20 章 · 5.9 萬字",
        status: "全 10 章已完結",
        theme: "雙星都卜勒 × 階梯光柵 × 雙星共鳴",
        firstChapterId: 1
      },
      {
        bookId: "book-6",
        volNum: "第三卷",
        title: "天穹之心的永恆鐘鳴",
        subtitle: "引力時間膨脹與光晶格鐘",
        chaptersCount: 10,
        releasedChapters: 10,
        wordCount: "第 21～30 章 · 7.0 萬字",
        status: "全 10 章已完結",
        theme: "光晶格鐘 × 脈衝星時鐘 × 愛因斯坦環",
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
      totalWords: "15.6 萬字",
      statusText: "全三卷 · 24章完結"
    },
    volumes: [
      {
        bookId: "book-7",
        volNum: "第一卷",
        title: "講台上的機械心跳",
        subtitle: "故障、結盟與日常大作戰",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第 1～8 章 · 4.8 萬字",
        status: "全 8 章已完結",
        theme: "校園常規 × 邏輯閘電路 × 仿生骨骼",
        firstChapterId: 1
      },
      {
        bookId: "book-8",
        volNum: "第二卷",
        title: "校園地底的鋼鐵防線",
        subtitle: "外部威脅、總部追查與校園防衛戰",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第 9～16 章 · 5.4 萬字",
        status: "全 8 章已完結",
        theme: "地下兵工廠 × 無人機蜂群 × 晶片降溫",
        firstChapterId: 1
      },
      {
        bookId: "book-9",
        volNum: "第三卷",
        title: "畢業鐘聲與守護協議",
        subtitle: "畢業旅行大冒險、極限救援與告別",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第 17～24 章 · 5.4 萬字",
        status: "全 8 章已完結",
        theme: "守護協議 × 畢業致詞 × 感情程式昇華",
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
  },
  {
    id: "series-4",
    title: "來自未來的轉學生",
    enTitle: "The Transfer Student from the Future",
    subtitle: "校園溫馨喜劇 × 環保教育 · 全三卷完結套書（共 24 章）",
    badge: "🌱 第四套 · 全三卷完結",
    badgeColor: "emerald",
    targetAudience: "9～15 歲少兒 · 校園溫馨 × 環保教育 × 時空冒險",
    tagline: "當手腕上的倒數光環亮起，全班二十六人展開守護地球大作戰！",
    description: "鹿陽國小六年一班迎來神秘轉學生林未晞，手腕戴著能投影破碎未來的時序手環。班長晴晴以科學調查揭開時空秘密，攜手點子王阿釁、吃貨老巫與AI萌寵溜溜發起『守護地球大作戰』！從垃圾分類、午餐零浪費到追查上游偷排管線，全班結成最強同盟，迎向笑中帶淚的奇蹟告別！",
    stats: {
      totalVolumes: 3,
      currentVolumesReleased: 3,
      totalChapters: 24,
      currentChaptersReleased: 24,
      totalWords: "14.0 萬字",
      statusText: "全三卷 · 24章完結"
    },
    volumes: [
      {
        bookId: "book-10",
        volNum: "第一卷",
        title: "來自未來的轉學生",
        subtitle: "轉學生降臨、祕密結盟與守護地球大作戰成立",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第 1～8 章 · 3.7 萬字",
        status: "全 8 章已完結",
        theme: "轉學生降臨 × 時序手環 × 祕密同盟",
        firstChapterId: 1
      },
      {
        bookId: "book-11",
        volNum: "第二卷",
        title: "守護地球大作戰",
        subtitle: "行動擴大、現實阻力、污染線索與離別倒數",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第 9～16 章 · 5.1 萬字",
        status: "全 8 章已完結",
        theme: "淨灘行動 × 塑膠危機 × 綠色園遊會",
        firstChapterId: 1
      },
      {
        bookId: "book-12",
        volNum: "第三卷",
        title: "最後的守護",
        subtitle: "污染事件實戰、真相大白、極限救援與告別",
        chaptersCount: 8,
        releasedChapters: 8,
        wordCount: "第 17～24 章 · 5.1 萬字",
        status: "全 8 章已完結",
        theme: "追查偷排 × 空汙紅害 × 奇蹟告別",
        firstChapterId: 1
      }
    ],
    highlights: [
      "全 24 章中英雙語對照，支援純中／純英／雙語段落切換",
      "內建 Web Speech 兒童伴讀有聲朗讀引擎與卡拉OK高亮聚焦",
      "26 名鹿陽國小學生與神秘轉學生林未晞動人環保冒險全記錄"
    ],
    themeTone: "emerald",
    coverStyle: "from-emerald-500/10 via-teal-500/5 to-slate-900/40 border-emerald-500/30",
    startBookId: "book-10",
    startChapterId: 1
  },
  {
    id: "series-5",
    type: "collection",
    title: "手作少女的奇幻旅程",
    enTitle: "The Crafting Girl's Fantasy Journey",
    subtitle: "奇幻心靈繪畫 · 溫馨療癒短篇小說集（全 4 篇）",
    badge: "🎨 療癒短篇集 · 全 4 篇完結",
    badgeColor: "rose",
    category: "healing",
    categoryName: "療癒短篇",
    targetAudience: "全齡適讀 · 親情 × 友情 × 祖孫 × 自我接納",
    tagline: "每一幅畫都是一次勇敢的對話，畫筆勾勒的不只是線條，更是心靈深處的光！",
    description: "害羞敏感的高中少女柳奷纭，在畫室閣樓裡默默畫著說不出口的心事。當神奇的畫筆引領她走進畫中的時空，她展開了四段奇幻的心靈旅程：在失落的客廳重聚家人、在星夜下解開與好友夏知星的心結、牽著阿嬤的手重回少女記憶的日式廊下，最終在畫境深處擁抱那個曾經自卑怯弱的自己。一本獻給所有溫柔靈魂的心靈療癒短篇集。",
    stats: {
      totalVolumes: 1,
      currentVolumesReleased: 1,
      totalChapters: 4,
      currentChaptersReleased: 4,
      totalWords: "4.7 萬字",
      statusText: "單冊 · 全 4 篇完結"
    },
    bookId: "book-13",
    volumes: [
      {
        bookId: "book-13",
        volNum: "單冊全 4 篇",
        title: "手作少女的奇幻旅程",
        subtitle: "心靈繪畫與奇幻成長旅程",
        chaptersCount: 4,
        releasedChapters: 4,
        wordCount: "全 4 篇 · 4.7 萬字",
        status: "全 4 篇已完結",
        theme: "親情守護 × 友情和解 × 祖孫跨代 × 心靈自癒",
        firstChapterId: 1
      }
    ],
    chaptersList: [
      {
        id: 1,
        title: "第一篇：把全家畫回來",
        enTitle: "Chapter 1: Painting the Family Back Together",
        wordCount: "10,388 字",
        theme: "親情守護 · 家人重聚與心靈畫筆",
        desc: "奷纭在畫室閣樓意外畫出真實的家，看見父母為了生計奔波的疲憊與愛，學會用畫筆搭起家的橋樑。"
      },
      {
        id: 2,
        title: "第二篇：給誤會的那顆星",
        enTitle: "Chapter 2: A Star for the Misunderstanding",
        wordCount: "11,728 字",
        theme: "友情和解 · 星夜傾訴與真誠釋懷",
        desc: "因為誤會而漸行漸遠的好友夏知星，在夜空畫卷中重現兩人曾經的笑語，星光下解開彼此心底的刺。"
      },
      {
        id: 3,
        title: "第三篇：陪阿嬤走進她的畫",
        enTitle: "Chapter 3: Stepping into Grandma's Painting",
        wordCount: "11,844 字",
        theme: "祖孫跨代 · 記憶失智與永恆眷戀",
        desc: "阿嬤的記憶日益模糊，奷纭走進阿嬤年輕時的日式老屋水彩畫中，陪伴少女時代的阿嬤跳完最後一支舞。"
      },
      {
        id: 4,
        title: "第四篇：畫給自己的天空",
        enTitle: "Chapter 4: The Sky Painted for Myself",
        wordCount: "12,653 字",
        theme: "自我接納 · 擁抱脆弱與燦爛綻放",
        desc: "在色彩斑斕的畫境迷宮深處，奷纭與那個躲在陰影裡的自己相遇，終於明白：不需要完美，也能自由飛翔。"
      }
    ],
    highlights: [
      "全 4 篇獨立心靈奇幻故事，段落 100% 繁中／英文對照",
      "細膩刻畫親情、友情、祖孫羈絆與青少年自我認同",
      "支援 Web Speech 兒童伴讀朗讀與即時雙語切換"
    ],
    themeTone: "rose",
    coverStyle: "from-rose-500/10 via-pink-500/5 to-slate-900/40 border-rose-500/30",
    startBookId: "book-13",
    startChapterId: 1
  }
];
