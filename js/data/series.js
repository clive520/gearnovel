/**
 * 冒險齒輪 · 少兒科幻小說庫 (GearNovel Online)
 * 套書體系資料庫 (Series Master Database)
 * 前三卷整合為第一套完結套書，第二套規劃為全三卷長篇套書
 */
window.GEAR_SERIES = [
  {
    id: "series-10",
    title: "冒險齒輪：齒輪星核的微縮旅人",
    enTitle: "Adventure Gear: Voyagers of the Clockwork Core",
    subtitle: "少兒微觀硬核科幻 · 全三卷（第二卷全 6 章完結 · 累計 12 章已上線）",
    badge: "🎉 第二卷 6 章大完結 · 累計 12 章上線",
    badgeColor: "emerald",
    targetAudience: "9～15 歲適讀 · 微觀物理 × 平方立方定律 × 古董座鐘冒險",
    tagline: "當身高縮小成一毫米，整座古董天文鐘，就是無邊無際的黃銅宇宙！",
    description: "鹿陽國小舊鐘樓頂層閣樓，發明少年誠浩、學霸班長葉旖緁、死黨將江與機械柴犬皮可意外啟動了爺爺封存百年的『渾天星象天文座鐘』。微維度空間摺疊場瞬間將四人壓縮一千倍（身高僅 1.5 毫米），墜入龐大的齒輪底盤！面對如巨岩般的微塵、黏稠致命的果凍水滴、微米靜電雷暴與巡弋的守辰甲蟲，全鐘主發條更啟動了 720 分鐘自毀倒數！微縮旅人們必須在停擺前攀登至頂層的齒輪星核，逆轉力場重返原本世界！",
    stats: {
      totalVolumes: 3,
      currentVolumesReleased: 2,
      totalChapters: 18,
      currentChaptersReleased: 12,
      totalWords: "6.9 萬字（第二卷完結）",
      statusText: "第二卷大完結 · 累計 12 章已上線"
    },
    volumes: [
      {
        bookId: "book-24",
        volNum: "第一卷",
        title: "跌入游絲深淵",
        subtitle: "第一幕：微維度震盪與一毫米的世界",
        chaptersCount: 6,
        releasedChapters: 6,
        wordCount: "全 6 章已完結 · 3.3 萬字",
        status: "第一卷完結（全 6 章收錄）",
        theme: "空間摺疊 × 表面張力 × 平方立方定律",
        firstChapterId: 1
      },
      {
        bookId: "book-25",
        volNum: "第二卷",
        title: "發條迷宮與黃銅微國",
        subtitle: "第二幕：失落的微型自動偶文明",
        chaptersCount: 6,
        releasedChapters: 6,
        wordCount: "全 6 章已完結 · 3.6 萬字",
        status: "第二卷完結（全 6 章收錄）",
        theme: "自走自動機 × 剛玉滑道 × 錨式擒縱器 × 雙金屬天梯 × 行星差速輪 × 水銀陀螺儀",
        firstChapterId: 7
      },
      {
        bookId: "book-26",
        volNum: "第三卷",
        title: "天體星核的逆轉破曉",
        subtitle: "第三幕：渾天星軌與最後三秒逆轉",
        chaptersCount: 6,
        releasedChapters: 0,
        wordCount: "全 6 章規劃中",
        status: "即將推出",
        theme: "微重力跳躍 × 歐拉多面體 × 相干脈衝逆轉",
        firstChapterId: 1
      }
    ],
    highlights: [
      "支援繁體中文／英文雙語 100% 嚴格 1:1 對照閱讀",
      "硬核少兒 STEM 微觀物理、流體表面張力、靜電感應與精密天文鐘力學",
      "誠浩、葉旖緁、將江與機械柴犬皮可微縮 1000 倍的生死突圍大冒險"
    ],
    themeTone: "amber",
    coverStyle: "from-amber-500/10 via-orange-500/5 to-slate-900/40 border-amber-500/30",
    startBookId: "book-24",
    startChapterId: 1
  },

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
      currentChaptersReleased: 60,
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
      currentVolumesReleased: 2,
      totalChapters: 4,
      currentChaptersReleased: 4,
      totalWords: "3.2 萬字",
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
        releasedChapters: 6,
        wordCount: "全 4 篇 · 3.2 萬字",
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
        wordCount: "7,832 字",
        theme: "親情守護 · 家人重聚與心靈畫筆",
        desc: "奷纭在畫室閣樓意外畫出真實的家，看見父母為了生計奔波的疲憊與愛，學會用畫筆搭起家的橋樑。"
      },
      {
        id: 2,
        title: "第二篇：給誤會的那顆星",
        enTitle: "Chapter 2: A Star for the Misunderstanding",
        wordCount: "8,105 字",
        theme: "友情和解 · 星夜傾訴與真誠釋懷",
        desc: "因為誤會而漸行漸遠的好友夏知星，在夜空畫卷中重現兩人曾經的笑語，星光下解開彼此心底的刺。"
      },
      {
        id: 3,
        title: "第三篇：陪阿嬤走進她的畫",
        enTitle: "Chapter 3: Stepping into Grandma's Painting",
        wordCount: "8,061 字",
        theme: "祖孫跨代 · 記憶失智與永恆眷戀",
        desc: "阿嬤的記憶日益模糊，奷纭走進阿嬤年輕時的日式老屋水彩畫中，陪伴少女時代的阿嬤跳完最後一支舞。"
      },
      {
        id: 4,
        title: "第四篇：畫給自己的天空",
        enTitle: "Chapter 4: The Sky Painted for Myself",
        wordCount: "7,997 字",
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
  },
  {
    id: "series-6",
    title: "全班作弊中",
    enTitle: "The Whole Class Is Cheating",
    subtitle: "少兒爆笑校園科幻 · 全三卷完結套書（共 18 章）",
    badge: "🏆 第五套 · 全三卷完結旗艦套書",
    badgeColor: "amber",
    targetAudience: "9～15 歲少兒 · 少兒爆笑校園科幻 × 成長喜劇",
    tagline: "當二十六個鬼靈精怪碰上全世界最強的仿生人監考官，一場笑破肚皮的作弊軍備競賽就此展開！",
    description: "鹿陽國小六年一班迎來史上最嚴峻的考試考驗！為了保衛遊戲機與老巫的雞腿賭注，調皮點子王阿釁率領全班二十六人成立『作弊互助會』，從橡皮擦迷你圖書館、紙飛機空投、咳嗽密碼，一路升級到班長晴晴研發的紫外線小抄與溜溜快遞大作戰！然而擁有透視光眼與語音波形分析的機器人導師高峙舷早已洞悉一切。全班費盡心思設計作弊神器的過程，竟演變成最神奇的自律複習，迎向笑中帶淚的大反轉！",
    stats: {
      totalVolumes: 3,
      currentVolumesReleased: 3,
      totalChapters: 18,
      currentChaptersReleased: 18,
      totalWords: "4.3 萬字",
      statusText: "全三卷 · 18章完結"
    },
    volumes: [
      {
        bookId: "book-14",
        volNum: "第一卷",
        title: "小抄的起點",
        subtitle: "低科技作弊 VS 透視光眼",
        chaptersCount: 6,
        releasedChapters: 6,
        wordCount: "第 1～6 章 · 1.5 萬字",
        status: "全 6 章已完結",
        theme: "橡皮擦圖書館 × 3D紙飛機 × 咳嗽暗號",
        firstChapterId: 1
      },
      {
        bookId: "book-15",
        volNum: "第二卷",
        title: "作弊科技革命",
        subtitle: "科技軍備競賽與AI反制",
        chaptersCount: 6,
        releasedChapters: 6,
        wordCount: "第 7～12 章 · 1.5 萬字",
        status: "全 6 章已完結",
        theme: "紫外線隱形墨水 × 萌寵快遞 × 防駭模式",
        firstChapterId: 1
      },
      {
        bookId: "book-16",
        volNum: "第三卷",
        title: "最棒的作弊",
        subtitle: "開放式考卷、反轉與誠實博物館",
        chaptersCount: 6,
        releasedChapters: 6,
        wordCount: "第 13～18 章 · 1.3 萬字",
        status: "全 6 章已完結",
        theme: "人體分段精讀 × 開放式考卷 × 誠實博物館",
        firstChapterId: 1
      }
    ],
    highlights: [
      "全 18 章中英雙語對照，段落 100% 嚴格 1:1 對齊",
      "透視光眼、字面解讀與 28 項作弊神器的爆笑軍備競賽",
      "最好的作弊是不用作弊——笑中帶淚的暖心教育反轉"
    ],
    themeTone: "amber",
    coverStyle: "from-amber-500/10 via-orange-500/5 to-slate-900/40 border-amber-500/30",
    startBookId: "book-14",
    startChapterId: 1
  }
,
{
  "id": "series-7",
  "title": "冒險齒輪：不可思議事件簿",
  "enTitle": "Adventure Gear: The Files of the Impossible",
  "subtitle": "少兒科幻推理 · 全三卷 18 章震撼大完結！",
  "badge": "🎉 全三卷 18 章大完結",
  "badgeColor": "indigo",
  "targetAudience": "9～15 歲適讀 · STEM 齒輪偵探 × 校園不可思議",
  "tagline": "世上沒有無解的怪談，只有未被拆解的齒輪與光學偏振！",
  "description": "鹿陽國小百年校舍怪事頻傳：深夜自彈莫札特的幽靈鋼琴、雨夜憑空多出的鐘樓第十三階、正午蒸發影子的古董日晷……冷靜推演的偵探社長陸言、共振聽音的天才少女沈星葵、鬼馬發明家方小克攜手機械刺蝟皮球，成立「齒輪偵探事務所」，運用偏振光譜、聲學駐波與發條力學，抽絲剝繭破解一件件匪夷所思的校園與港灣迷案！",
  "stats": {
    "totalVolumes": 3,
    "currentVolumesReleased": 3,
    "totalChapters": 18,
    "currentChaptersReleased": 18,
    "totalWords": "10.3 萬字",
    "statusText": "全系列大完結（全 18 章）"
  },
  "volumes": [
    {
      "bookId": "book-17",
      "volNum": "第一卷",
      "title": "消失的影子與第十三個台階",
      "subtitle": "校園不可思議事件簿",
      "chaptersCount": 6,
      "releasedChapters": 6,
      "wordCount": "全 6 章已發布 · 3.7 萬字",
      "status": "第一卷大完結（全 6 章）",
      "theme": "校園怪談 × 偏振光譜 × 凸輪機構",
      "firstChapterId": 1
    },
    {
      "bookId": "book-18",
      "volNum": "第二卷",
      "title": "海霧港口的蒸汽幽靈",
      "subtitle": "港灣連環大案",
      "chaptersCount": 6,
      "releasedChapters": 6,
      "wordCount": "全 6 章已完結 · 3.3 萬字",
      "status": "第二卷大完結（全 6 章）",
      "theme": "港灣奇案 × 伯努利流體 × 全息折射",
      "firstChapterId": 1
    },
    {
      "bookId": "book-19",
      "volNum": "第三卷",
      "title": "黃金鐘樓的時間倒流",
      "subtitle": "終極世紀對決",
      "chaptersCount": 6,
      "releasedChapters": 6,
      "wordCount": "全 6 章已完結 · 3.2 萬字",
      "status": "第三卷大完結（全 6 章）",
      "theme": "雙螺旋鐘樓 × 次聲波共振 × 行星差速器",
      "firstChapterId": 13
    }
  ],
  "highlights": [
    "支援繁體中文／英文雙語 100% 嚴格對照閱讀",
    "硬核且有趣的少兒 STEM 物理、機械、光學推理破解",
    "冷靜陸言、敏銳星葵、機靈小克與機械刺蝟皮球的齒輪偵探團"
  ],
  "themeTone": "indigo",
  "coverStyle": "from-indigo-500/10 via-indigo-500/5 to-slate-900/40 border-indigo-500/30",
  "startBookId": "book-17",
  "startChapterId": 1
},
{
  "id": "series-8",
  "title": "班上鳥事",
  "enTitle": "A Class of Feathered Troubles",
  "subtitle": "校園成長溫馨喜劇 · 全 15 章震撼大完結！",
  "badge": "🎉 全書 15 章大完結",
  "badgeColor": "emerald",
  "targetAudience": "9～15 歲適讀 · 校園生活 × 爆笑幽默 × 生命救贖",
  "tagline": "世上沒有真正的壞孩子，只有被吵鬧聲掩蓋的溫柔心跳。",
  "description": "鹿陽國小六年一班是全校聞名的「魔王班」、「拆遷隊」，兩個月內接連氣走三任導師！直到孩子王阿棠在榕樹下冒死從校貓爪下救回一隻奄奄一息的雛麻雀「小麻」，全班的命運開始天翻地覆。擁有「跨物種心靈感應」秘密天賦的冷面毒舌班長陸書晴（晴子），被迫成為人鳥之間的地下首席翻譯官。為了讓極度敏感的小麻活命，全班在晴子的鐵腕指揮下展開全員踮腳、唇語交談的「極限消音作戰」，與手持望遠鏡的學務主任周嚴及深陷心理學迷思的菜鳥溫老師展開一場令人啼笑皆非的溫馨成長攻防！",
  "stats": {
    "totalVolumes": 1,
    "currentVolumesReleased": 1,
    "totalChapters": 15,
    "currentChaptersReleased": 15,
    "totalWords": "6.0 萬字",
    "statusText": "全書 15 章大完結"
  },
  "volumes": [
    {
      "bookId": "book-20",
      "volNum": "全一卷",
      "title": "班上鳥事",
      "subtitle": "極限消音革命與溫柔救贖",
      "chaptersCount": 15,
      "releasedChapters": 15,
      "wordCount": "全 15 章已完結 · 6.0 萬字",
      "status": "全書大完結（全 15 章）",
      "theme": "極限寂靜 × 冷面幽默 × 成長詩意",
      "firstChapterId": 1
    }
  ],
  "highlights": [
    "支援繁體中文／英文雙語 100% 嚴格對照閱讀",
    "令人捧腹的冷面幽默 × 催人淚下的純真生命救贖",
    "毒舌通靈班長晴子、熱血霸王阿棠與傲嬌麻雀老爺的奇妙羈絆"
  ],
  "themeTone": "emerald",
  "coverStyle": "from-emerald-500/10 via-teal-500/5 to-slate-900/40 border-emerald-500/30",
  "startBookId": "book-20",
  "startChapterId": 1
}
,
{
  "id": "series-9",
  "title": "平行時空的同班同學",
  "enTitle": "Classmates from a Parallel World",
  "subtitle": "平行時空校園群像 · 全三卷 24 章震撼大完結！",
  "badge": "🎉 全三卷 24 章大完結",
  "badgeColor": "sky",
  "targetAudience": "9～15 歲適讀 · 平行時空 × 群像成長 × 溫馨省思",
  "tagline": "兩個世界只差一個小小的選擇，卻讓五十二個少年的人生截然不同。",
  "description": "離海堤兩條街的海聲國小六年一班，舊禮堂舞台後方蒙塵的老鏡在放學後悄然泛起銀白漣漪。安靜退縮的林澈穿過時空裂縫，赫然遇見了開朗自信、光芒四射的「另一個自己」！原來開學第三天體育課上老師的一句話，讓同一個班級分化出截然不同的兩個平行世界。隨著七天倒數鐘聲響起、不可逆的世界覆蓋危機逼近，兩班五十二位少年在理性班長周予晴與熱血班長趙小陽帶領下展開跨時空大作戰。從互相猜忌到攜手追尋分歧點，在成長與告別中學會換位思考與被看見，寫下最溫暖動人的奇蹟篇章！",
  "stats": {
    "totalVolumes": 3,
    "currentVolumesReleased": 3,
    "totalChapters": 24,
    "currentChaptersReleased": 24,
    "totalWords": "4.0 萬字",
    "statusText": "全三卷 24 章大完結"
  },
  "volumes": [
    {
      "bookId": "book-21",
      "volNum": "第一卷",
      "title": "舊禮堂的鏡子",
      "subtitle": "第一幕：禮堂鏡與時空裂縫",
      "chaptersCount": 8,
      "releasedChapters": 8,
      "wordCount": "全 8 章已完結 · 1.5 萬字",
      "status": "第一卷完結（全 8 章）",
      "theme": "銀白漣漪 × 鏡像相遇 × 輪流回家守則",
      "firstChapterId": 1
    },
    {
      "bookId": "book-22",
      "volNum": "第二卷",
      "title": "被說出口的話",
      "subtitle": "第二幕：對不上的記憶與分歧點",
      "chaptersCount": 8,
      "releasedChapters": 8,
      "wordCount": "全 8 章已完結 · 1.3 萬字",
      "status": "第二卷完結（全 8 章）",
      "theme": "覆蓋來襲 × 接力選拔重演 × 鏡裂危機",
      "firstChapterId": 1
    },
    {
      "bookId": "book-23",
      "volNum": "第三卷",
      "title": "留下來的人",
      "subtitle": "第三幕：時間投影與奇蹟的選擇",
      "chaptersCount": 8,
      "releasedChapters": 8,
      "wordCount": "全 8 章已完結 · 1.2 萬字",
      "status": "第三卷完結（全 8 章）",
      "theme": "時間投影 × 交換人生 × 奇蹟的早晨",
      "firstChapterId": 1
    }
  ],
  "highlights": [
    "支援繁體中文／英文雙語 100% 嚴格 1:1 對照閱讀",
    "7 天倒數硬時鐘 × 嚴謹時空規則與兩班對照組精彩心理交鋒",
    "催人淚下的自我接納與換位思考：有人選擇留下，兩個世界都多了一個被看見的人"
  ],
  "themeTone": "sky",
  "coverStyle": "from-sky-500/10 via-cyan-500/5 to-slate-900/40 border-sky-500/30",
  "startBookId": "book-21",
  "startChapterId": 1
}
];
