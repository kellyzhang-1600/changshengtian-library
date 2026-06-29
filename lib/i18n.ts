import type { Locale } from "@/lib/types";

export const locales: { code: Locale; label: string; native: string }[] = [
  { code: "zh", label: "中文", native: "中文" },
  { code: "mn", label: "Mongolian", native: "ᠮᠣᠩᠭᠣᠯ" },
  { code: "en", label: "English", native: "EN" }
];

export const dictionary = {
  zh: {
    subtitle: "蒙汉英三语蒙古诗歌与口传文学数字档案",
    archive: "文库",
    books: "旧书店档案",
    notes: "翻译札记",
    timeline: "时间轴",
    map: "地图",
    about: "关于项目",
    contact: "提交建议",
    featured: "精选作品",
    categories: "分类入口",
    latest: "最新收录",
    today: "今日一句",
    project: "关于项目",
    search: "搜索作品名称、关键词、人物、地名、主题、出版年代",
    readingMode: "阅读模式",
    cite: "引用",
    favorite: "收藏",
    unfavorite: "已收藏",
    allWorks: "全部作品",
    archiveTitle: "文库",
    itemCount: "件馆藏",
    timelineTitle: "蒙古文学时间轴",
    mapTitle: "地理索引",
    mapIntro: "根据作者、地区、采集地点或出版社所在地展示作品线索。正式部署后可接入 Mapbox 或 Supabase PostGIS。",
    mapCaption: "示意地图：用于展示作品来源地点与出版地点。",
    aboutFallback1: "长生天文库是一个公益性的数字人文项目，目标是建立蒙汉英三语蒙古诗歌与口传文学数字阅读平台。",
    aboutFallback2: "项目缘起于蒙古田野调查、旧书店购书和翻译实践。许多口传作品并不只存在于书页，也存在于歌者的停顿、讲述者的语气、旧书页边的铅笔标记和不同版本之间的微小差异里。",
    aboutFallback3: "未来计划包括持续录入史诗、民歌、长调、祝词、谚语和古籍资料，建立版本比较、地理索引、时间轴与开放的读者建议审核机制。"
  },
  mn: {
    subtitle: "ᠮᠣᠩᠭᠣᠯ ᠬᠢᠲᠠᠳ ᠠᠩᠭᠯᠢ ᠭᠤᠷᠪᠠᠨ ᠬᠡᠯᠡᠨ ᠦ ᠤᠳᠬ᠎ᠠ ᠶᠢᠨ ᠰᠠᠩ",
    archive: "ᠰᠠᠩ",
    books: "ᠬᠠᠭᠤᠴᠢᠨ ᠨᠣᠮ",
    notes: "ᠣᠷᠴᠢᠭᠤᠯᠭ᠎ᠠ",
    timeline: "ᠴᠠᠭ ᠤᠨ ᠱᠤᠭᠤᠮ",
    map: "ᠭᠠᠵᠠᠷ ᠤᠨ ᠵᠢᠷᠤᠭ",
    about: "ᠲᠥᠰᠥᠯ",
    contact: "ᠰᠠᠨᠠᠯ",
    featured: "ᠰᠣᠩᠭᠣᠮᠠᠯ",
    categories: "ᠲᠥᠷᠥᠯ",
    latest: "ᠰᠢᠨ᠎ᠡ",
    today: "ᠥᠨᠥᠳᠥᠷ ᠦᠨ ᠮᠥᠷ",
    project: "ᠲᠥᠰᠥᠯ",
    search: "ᠨᠡᠷ᠎ᠡ ᠲᠦᠯᠬᠢᠭᠦᠷ ᠭᠠᠵᠠᠷ ᠡᠷᠢᠬᠦ",
    readingMode: "ᠤᠩᠰᠢᠬᠤ",
    cite: "ᠡᠰᠢᠯᠡᠯ",
    favorite: "ᠬᠠᠳᠠᠭᠠᠯᠠᠬᠤ",
    unfavorite: "ᠬᠠᠳᠠᠭᠠᠯᠪᠠ",
    allWorks: "ᠪᠦᠬᠦ ᠪᠦᠲᠦᠭᠡᠯ",
    archiveTitle: "ᠰᠠᠩ",
    itemCount: "ᠬᠠᠳᠠᠭᠠᠯᠠᠮᠵᠢ",
    timelineTitle: "ᠮᠣᠩᠭᠣᠯ ᠤᠳᠬ᠎ᠠ ᠶᠢᠨ ᠴᠠᠭ ᠤᠨ ᠱᠤᠭᠤᠮ",
    mapTitle: "ᠭᠠᠵᠠᠷ ᠤᠨ ᠵᠢᠭᠠᠯᠲᠠ",
    mapIntro: "ᠵᠣᠬᠢᠶᠠᠭᠴᠢ᠂ ᠭᠠᠵᠠᠷ ᠣᠷᠣᠨ᠂ ᠴᠤᠭᠯᠠᠭᠤᠯᠤᠭᠰᠠᠨ ᠭᠠᠵᠠᠷ ᠪᠠ ᠬᠡᠪᠯᠡᠯ ᠦᠨ ᠭᠠᠵᠠᠷ ᠢᠶᠠᠷ ᠦᠵᠡᠭᠦᠯᠦᠨ᠎ᠡ᠃",
    mapCaption: "ᠵᠢᠱᠢᠶ᠎ᠡ ᠭᠠᠵᠠᠷ ᠤᠨ ᠵᠢᠷᠤᠭ᠃",
    aboutFallback1: "ᠴᠠᠩᠱᠧᠩ ᠲᠢᠶᠠᠨ ᠰᠠᠩ ᠪᠣᠯ ᠨᠡᠶᠢᠲᠡ ᠶᠢᠨ ᠲᠤᠰᠠ ᠶᠢᠨ ᠳ᠋ᠢᠵᠢᠲ᠋ᠠᠯ ᠬᠦᠮᠦᠯᠢᠭ ᠦᠨ ᠲᠥᠰᠥᠯ ᠶᠤᠮ᠃",
    aboutFallback2: "ᠲᠥᠰᠥᠯ ᠨᠢ ᠬᠡᠭᠡᠷ᠎ᠡ ᠶᠢᠨ ᠰᠤᠳᠤᠯᠭᠠᠨ᠂ ᠬᠠᠭᠤᠴᠢᠨ ᠨᠣᠮ ᠤᠨ ᠴᠤᠭᠯᠠᠭᠤᠯᠭ᠎ᠠ ᠪᠠ ᠣᠷᠴᠢᠭᠤᠯᠭ᠎ᠠ ᠠᠴᠠ ᠡᠬᠢᠯᠡᠭᠰᠡᠨ᠃",
    aboutFallback3: "ᠢᠷᠡᠭᠡᠳᠦᠢ ᠳᠦ ᠲᠤᠤᠯᠢ᠂ ᠠᠷᠠᠳ ᠤᠨ ᠳᠠᠭᠤᠤ᠂ ᠢᠷᠦᠭᠡᠯ᠂ ᠵᠦᠢᠷ ᠦᠭᠡ ᠪᠠ ᠬᠠᠭᠤᠴᠢᠨ ᠨᠣᠮ ᠢ ᠦᠷᠭᠦᠯᠵᠢᠯᠡᠨ ᠣᠷᠣᠭᠤᠯᠤᠨ᠎ᠠ᠃"
  },
  en: {
    subtitle: "A Mongolian, Chinese, and English digital archive of poetry and oral literature",
    archive: "Archive",
    books: "Ulaanbaatar Books",
    notes: "Translation Notes",
    timeline: "Timeline",
    map: "Map",
    about: "About",
    contact: "Submit Advice",
    featured: "Featured",
    categories: "Categories",
    latest: "Latest Additions",
    today: "Line of the Day",
    project: "About the Project",
    search: "Search title, keyword, person, place, theme, or publication period",
    readingMode: "Reading Mode",
    cite: "Cite",
    favorite: "Save",
    unfavorite: "Saved",
    allWorks: "All Works",
    archiveTitle: "Archive",
    itemCount: "records",
    timelineTitle: "Mongolian Literary Timeline",
    mapTitle: "Geographic Index",
    mapIntro: "Browse works by author, region, collection site, or place of publication. A future version can connect this view to Mapbox or Supabase PostGIS.",
    mapCaption: "Reference map for work origins and publication places.",
    aboutFallback1: "Changshengtian Library is a public digital humanities project for Mongolian poetry and oral literature in Mongolian, Chinese, and English.",
    aboutFallback2: "The project grew from fieldwork in Mongolia, collecting books in Ulaanbaatar secondhand bookstores, and the slow practice of translation.",
    aboutFallback3: "Future work includes adding epics, folk songs, long songs, blessings, proverbs, rare books, version comparison, geographic indexes, timelines, and reviewed reader suggestions."
  }
} satisfies Record<Locale, Record<string, string>>;

export function getLocale(value?: string | null): Locale {
  if (value === "mn" || value === "en" || value === "zh") return value;
  return "zh";
}

export function categoryLabel(category: { zh: string; en: string; mn: string }, locale: Locale) {
  if (locale === "en") return category.en;
  if (locale === "mn") return category.mn;
  return category.zh;
}

export function textTitle(text: { title: { zh: string; en: string; mn: string } }, locale: Locale) {
  return text.title[locale] || text.title.zh;
}
