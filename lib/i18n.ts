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
    unfavorite: "已收藏"
  },
  mn: {
    subtitle: "ᠮᠣᠩᠭᠣᠯ ᠬᠢᠲᠠᠳ ᠠᠩᠭᠯᠢ ᠭᠤᠷᠪᠠᠨ ᠬᠡᠯᠡᠨ ᠦ ᠤᠳᠬ᠎ᠠ ᠶᠢᠨ ᠰᠠᠩ",
    archive: "ᠰᠠᠩ",
    books: "ᠬᠠᠭᠤᠴᠢᠨ ᠨᠣᠮ",
    notes: "ᠣᠷᠴᠢᠭᠤᠯᠭ᠎ᠠ",
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
    unfavorite: "ᠬᠠᠳᠠᠭᠠᠯᠪᠠ"
  },
  en: {
    subtitle: "A Mongolian, Chinese, and English digital archive of poetry and oral literature",
    archive: "Archive",
    books: "Ulaanbaatar Books",
    notes: "Translation Notes",
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
    unfavorite: "Saved"
  }
} satisfies Record<Locale, Record<string, string>>;

export function getLocale(value?: string | null): Locale {
  if (value === "mn" || value === "en" || value === "zh") return value;
  return "zh";
}
