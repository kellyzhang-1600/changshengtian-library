import type { BookRecord, CategorySlug, TextRecord, TranslationNote } from "@/lib/types";

export const categories: { slug: CategorySlug; zh: string; en: string; mn: string; description: string }[] = [
  { slug: "epic", zh: "英雄史诗", en: "Heroic Epics", mn: "ᠪᠠᠭᠠᠲᠤᠷᠯᠢᠭ ᠲᠤᠤᠯᠢ", description: "长篇叙事、英雄谱系与口传传统。" },
  { slug: "folk-song", zh: "民歌", en: "Folk Songs", mn: "ᠠᠷᠠᠳ ᠤᠨ ᠳᠠᠭᠤᠤ", description: "劳动、迁徙、思念与草原生活。" },
  { slug: "long-song", zh: "长调", en: "Long Song", mn: "ᠤᠷᠲᠤ ᠶᠢᠨ ᠳᠠᠭᠤᠤ", description: "旋律悠长的蒙古族声乐文学。" },
  { slug: "blessing", zh: "祝词", en: "Blessings", mn: "ᠢᠷᠦᠭᠡᠯ", description: "仪式、婚礼、祭祀与日常祝颂。" },
  { slug: "proverb", zh: "谚语", en: "Proverbs", mn: "ᠵᠦᠢᠷ ᠰᠡᠴᠡᠨ ᠦᠭᠡ", description: "短句中的经验、伦理与幽默。" },
  { slug: "ancient-book", zh: "古籍", en: "Rare Books", mn: "ᠬᠠᠭᠤᠴᠢᠨ ᠨᠣᠮ", description: "旧书、影印本与版本线索。" },
  { slug: "translation-note", zh: "翻译札记", en: "Translation Notes", mn: "ᠣᠷᠴᠢᠭᠤᠯᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ", description: "词义、版本、文化背景与译法选择。" }
];

export const texts: TextRecord[] = [
  {
    id: "txt-001",
    slug: "jangar-opening",
    title: { mn: "ᠵᠠᠩᠭᠠᠷ ᠤᠨ ᠡᠬᠢᠯᠡᠯ", zh: "《江格尔》开篇唱段", en: "Opening of Jangar" },
    category: "epic",
    period: "19世纪口传整理本",
    summary: "英雄史诗《江格尔》的开篇片段，呈现宝木巴故乡、英雄谱系与祝颂式叙事结构。",
    originalMn: "ᠪᠤᠮᠪᠠ ᠶᠢᠨ ᠣᠷᠣᠨ ᠲᠡᠭᠷᠢ ᠶᠢᠨ ᠬᠠᠶᠠᠭᠠᠨ ᠳᠤ ᠭᠡᠷᠡᠯᠳᠦᠨ᠎ᠡ...",
    translationZh: "宝木巴的土地，在长生天的边缘发光。英雄的名字从马蹄声中升起，像清晨的风越过毡房。",
    translationEn: "The land of Bumba glows at the edge of Eternal Heaven. A hero's name rises from hoofbeats, crossing the felt tents like morning wind.",
    source: "乌兰巴托旧书店购得影印本",
    publication: "乌兰巴托：蒙古国科学院文学研究所，1982",
    pages: "12-18",
    translationNote: "“宝木巴”保留音译，以避免将史诗地名误化为普通地理名词。",
    tags: ["江格尔", "英雄史诗", "宝木巴", "口传文学"],
    people: ["江格尔"],
    places: ["宝木巴", "乌兰巴托"],
    region: { name: "乌兰巴托", lat: 47.918, lng: 106.917 },
    featured: true,
    todayLine: {
      mn: "ᠲᠡᠭᠷᠢ ᠶᠢᠨ ᠳᠣᠣᠷ᠎ᠠ ᠨᠡᠷ᠎ᠡ ᠮᠥᠩᠬᠡᠷᠡᠨ᠎ᠡ",
      zh: "在长生天之下，名字得以长存。",
      en: "Beneath Eternal Heaven, a name endures."
    }
  },
  {
    id: "txt-002",
    slug: "blue-steppe-song",
    title: { mn: "ᠬᠥᠬᠡ ᠲᠠᠯ᠎ᠠ ᠶᠢᠨ ᠳᠠᠭᠤᠤ", zh: "蓝色草原之歌", en: "Song of the Blue Steppe" },
    category: "folk-song",
    period: "20世纪民歌采录",
    summary: "一首关于离别、牧场与远方亲人的民歌，语言朴素而富有空间感。",
    originalMn: "ᠬᠥᠬᠡ ᠲᠠᠯ᠎ᠠ ᠮᠢᠨᠢ ᠰᠠᠯᠬᠢᠨ ᠳᠤ ᠨᠠᠮᠢᠷᠠᠨ᠎ᠠ...",
    translationZh: "我的蓝色草原在风里起伏，远行的人把思念系在马鞍旁。",
    translationEn: "My blue steppe ripples in the wind; the traveler ties longing beside the saddle.",
    source: "田野录音转写",
    publication: "个人田野资料，2024",
    pages: "录音 03:14-04:02",
    translationNote: "“蓝色”同时指天色、远景与情绪，不宜仅译作颜色描述。",
    tags: ["民歌", "草原", "离别", "田野调查"],
    people: ["无名歌者"],
    places: ["中央省"],
    region: { name: "中央省", lat: 47.5, lng: 106.2 },
    featured: true,
    todayLine: {
      mn: "ᠰᠠᠯᠬᠢ ᠮᠢᠨᠢ ᠮᠡᠳᠡᠭᠡ ᠠᠪᠴᠤ ᠶᠠᠪᠤ",
      zh: "风啊，请替我带去消息。",
      en: "Wind, carry my message onward."
    }
  },
  {
    id: "txt-003",
    slug: "milk-tea-blessing",
    title: { mn: "ᠰᠦᠲᠡᠢ ᠴᠠᠢ ᠶᠢᠨ ᠢᠷᠦᠭᠡᠯ", zh: "奶茶祝词", en: "Blessing over Milk Tea" },
    category: "blessing",
    period: "当代仪式口传",
    summary: "围绕奶茶、客人和家庭福祉展开的祝词，适合观察日常礼仪中的诗性表达。",
    originalMn: "ᠰᠦᠲᠡᠢ ᠴᠠᠢ ᠰᠠᠮᠠᠷᠠᠭᠰᠠᠨ ᠭᠠᠷ ᠪᠤᠶᠠᠨ ᠲᠠᠢ ᠪᠣᠯᠲᠤᠭᠠᠢ...",
    translationZh: "搅动奶茶的手愿有福泽，迎接客人的门愿有光亮。",
    translationEn: "May the hand that stirs milk tea be blessed; may the door that welcomes guests be bright.",
    source: "家庭仪式记录",
    publication: "个人田野资料，2023",
    pages: "手稿第 5 页",
    translationNote: "祝词中重复的“愿”具有仪式节奏，英译中保留 may 结构。",
    tags: ["祝词", "奶茶", "礼仪", "家庭"],
    people: ["口述者 B."],
    places: ["乌兰巴托"],
    region: { name: "乌兰巴托", lat: 47.918, lng: 106.917 },
    todayLine: {
      mn: "ᠵᠣᠴᠢᠨ ᠤ ᠡᠭᠦᠳᠡ ᠭᠡᠷᠡᠯ ᠲᠡᠢ ᠪᠣᠯᠲᠤᠭᠠᠢ",
      zh: "迎客之门，愿常有光。",
      en: "May the guest door remain bright."
    }
  }
];

export const books: BookRecord[] = [
  {
    id: "book-001",
    slug: "ub-jangar-1982",
    title: "《江格尔》蒙古文影印本",
    cover: "/book-cover.svg",
    publishedAt: "1982",
    publisher: "蒙古国科学院文学研究所",
    purchasePlace: "乌兰巴托和平大道旧书摊",
    summary: "书中收录若干史诗唱段，页边有前读者留下的铅笔标记。",
    whyBought: "这是我第一次在乌兰巴托旧书店遇到带有读者痕迹的《江格尔》版本。",
    readingNotes: "值得重点核对开篇套语、地名音译和英雄谱系段落。",
    relatedTextSlugs: ["jangar-opening"]
  },
  {
    id: "book-002",
    slug: "folk-song-collection",
    title: "蒙古民歌小辑",
    cover: "/book-cover.svg",
    publishedAt: "1976",
    publisher: "国家出版社",
    purchasePlace: "乌兰巴托大学区旧书店",
    summary: "薄册，收民歌歌词与简谱，适合与田野录音做版本比较。",
    whyBought: "其中几首歌与我在牧区听到的版本存在细微差异。",
    readingNotes: "可建立“同题异文”索引，记录每个版本的词句变化。",
    relatedTextSlugs: ["blue-steppe-song"]
  }
];

export const translationNotes: TranslationNote[] = [
  {
    id: "note-001",
    slug: "translating-eternal-heaven",
    title: "“长生天”应如何进入英文？",
    relatedTextSlug: "jangar-opening",
    excerpt: "Tengri、Eternal Heaven 与 Heaven 三种译法各自带有不同的宗教和诗学暗示。",
    body: "在史诗语境中，“长生天”既是宇宙秩序，也是一种祝颂性的称谓。英文若直译为 Heaven，容易被读者误读为单一宗教概念；Eternal Heaven 可以保留神圣性与时间感；Tengri 则适合面向研究读者的注释场景。",
    tags: ["长生天", "英译", "宗教语汇"]
  },
  {
    id: "note-002",
    slug: "blue-in-folk-song",
    title: "民歌中的“蓝色”不是一种颜色而已",
    relatedTextSlug: "blue-steppe-song",
    excerpt: "“蓝”在草原民歌中常常同时关联天空、距离、忧伤和开阔感。",
    body: "翻译时如果只处理为 blue，意义并未丢失，但诗歌中的空间层次会变薄。中文保留“蓝色草原”，英文可在注释中说明其情绪和地理双重含义。",
    tags: ["民歌", "颜色词", "文化背景"]
  }
];

export function getCategory(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug) ?? categories[0];
}

export function findText(slug: string) {
  return texts.find((text) => text.slug === slug);
}

export function relatedTexts(slug: string) {
  const current = findText(slug);
  if (!current) return [];
  return texts.filter((text) => text.slug !== slug && (text.category === current.category || text.tags.some((tag) => current.tags.includes(tag)))).slice(0, 3);
}
