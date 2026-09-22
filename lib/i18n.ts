import type { Locale, TextRecord } from "@/lib/types";

export const locales: { code: Locale; label: string; native: string }[] = [
  { code: "zh", label: "中文", native: "中文" },
  { code: "mn", label: "Mongolian", native: "МН" },
  { code: "en", label: "English", native: "EN" }
];

export const dictionary = {
  zh: {
    brand: "长生天文库",
    publicArchive: "公益数字人文档案",
    booksIntro: "记录本馆收藏和使用的蒙古文学书籍及其出版信息。",
    institutionLabel: "编纂机构",
    creditsLabel: "编者与编辑",
    bookIntro: "内容简介",
    noRelated: "尚未收录这本书中的作品。",
    originalLabel: "蒙古文原文",
    chineseLabel: "中文翻译",
    englishLabel: "英文翻译",
    unknownPeriod: "创作年代不详",
    footerIntro: "公益性的蒙古诗歌与口传文学数字档案，面向读者、译者与研究者长期开放。",
    collectionLabel: "馆藏方向",
    collectionText: "英雄史诗、民歌、长调、祝词、谚语、古籍与翻译札记。",
    maintenanceLabel: "维护方式",
    maintenanceText: "后台由管理员录入，读者建议需审核后采纳。",
    featuredIntro: "适合从这里开始阅读的馆藏作品。",
    enterArchive: "进入文库",
    learnProject: "了解项目",

    workIntro: "作品简介",
    sourceLabel: "来源",
    publicationLabel: "出版信息",
    pagesLabel: "页码",
    translationNoteLabel: "翻译说明",
    relatedWorks: "相关作品推荐",

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
    brand: "Чаншэнтянь номын сан",
    publicArchive: "Нийтийн цахим хүмүүнлэгийн архив",
    booksIntro: "Тус сангийн цуглуулж, ашиглаж буй монгол утга зохиолын ном, хэвлэлийн мэдээлэл.",
    institutionLabel: "Эрхлэн гаргасан байгууллага",
    creditsLabel: "Эмхэтгэгч ба редактор",
    bookIntro: "Номын тухай",
    noRelated: "Энэ номоос бүтээл хараахан оруулаагүй байна.",
    originalLabel: "Монгол эх",
    chineseLabel: "Хятад орчуулга",
    englishLabel: "Англи орчуулга",
    unknownPeriod: "Зохиогдсон үе тодорхойгүй",
    footerIntro: "Уншигч, орчуулагч, судлаачдад нээлттэй Монгол яруу найраг, аман зохиолын нийтийн цахим архив.",
    collectionLabel: "Сангийн чиглэл",
    collectionText: "Баатарлаг тууль, ардын дуу, уртын дуу, ерөөл, зүйр үг, хуучин ном, орчуулгын тэмдэглэл.",
    maintenanceLabel: "Сангийн хөтлөлт",
    maintenanceText: "Администратор мэдээлэл оруулна. Уншигчдын саналыг хянасны дараа хүлээн авна.",
    featuredIntro: "Уншиж эхлэхэд зориулан сонгосон бүтээлүүд.",
    enterArchive: "Сан руу орох",
    learnProject: "Төслийн тухай",

    workIntro: "Бүтээлийн тухай",
    sourceLabel: "Эх сурвалж",
    publicationLabel: "Хэвлэлийн мэдээлэл",
    pagesLabel: "Хуудас",
    translationNoteLabel: "Орчуулгын тайлбар",
    relatedWorks: "Холбоотой бүтээлүүд",

    subtitle: "Монгол, хятад, англи гурван хэлний Монгол яруу найраг ба аман зохиолын цахим архив",
    archive: "Сан",
    books: "Улаанбаатарын хуучин ном",
    notes: "Орчуулгын тэмдэглэл",
    timeline: "Цаг хугацааны шугам",
    map: "Газрын зураг",
    about: "Төслийн тухай",
    contact: "Санал илгээх",
    featured: "Онцлох бүтээл",
    categories: "Ангилал",
    latest: "Шинэ нэмэлт",
    today: "Өнөөдрийн мөр",
    project: "Төслийн тухай",
    search: "Гарчиг, түлхүүр үг, хүн, газар, сэдэв, хэвлэгдсэн үеэр хайх",
    readingMode: "Унших горим",
    cite: "Эшлэл",
    favorite: "Хадгалах",
    unfavorite: "Хадгалсан",
    allWorks: "Бүх бүтээл",
    archiveTitle: "Сан",
    itemCount: "бичлэг",
    timelineTitle: "Монгол утга зохиолын цаг хугацааны шугам",
    mapTitle: "Газар зүйн индекс",
    mapIntro: "Зохиогч, бүс нутаг, цуглуулсан газар, хэвлэлийн газраар бүтээлийн мэдээллийг үзүүлнэ. Цаашид Mapbox эсвэл Supabase PostGIS-тэй холбож болно.",
    mapCaption: "Бүтээлийн эх сурвалж ба хэвлэгдсэн газрыг харуулах жишээ газрын зураг.",
    aboutFallback1: "Чаншэнтянь номын сан нь Монгол яруу найраг ба аман зохиолыг монгол, хятад, англи хэлээр танилцуулах нийтийн ашиг тусын цахим хүмүүнлэгийн төсөл юм.",
    aboutFallback2: "Төсөл нь Монгол дахь хээрийн судалгаа, Улаанбаатарын хуучин номын дэлгүүрүүдээс ном цуглуулах явц, орчуулгын удаан дадлаас үүдэн эхэлсэн.",
    aboutFallback3: "Цаашид баатарлаг тууль, ардын дуу, уртын дуу, ерөөл, зүйр үг, хуучин ном, хувилбарын харьцуулалт, газар зүйн индекс, цаг хугацааны шугам, уншигчийн саналыг хянан нийтлэх тогтолцоог хөгжүүлнэ."
  },
  en: {
    brand: "Changshengtian Library",
    publicArchive: "Public Digital Humanities Archive",
    booksIntro: "Bibliographic records of Mongolian literature collected and used by this archive.",
    institutionLabel: "Institution",
    creditsLabel: "Compilation and Editing",
    bookIntro: "About This Book",
    noRelated: "No works from this volume have been added yet.",
    originalLabel: "Mongolian Original",
    chineseLabel: "Chinese Translation",
    englishLabel: "English Translation",
    unknownPeriod: "Date of composition unknown",
    footerIntro: "A public digital archive of Mongolian poetry and oral literature, open to readers, translators, and researchers.",
    collectionLabel: "Collections",
    collectionText: "Heroic epics, folk songs, long songs, blessings, proverbs, rare books, and translation notes.",
    maintenanceLabel: "How We Maintain the Archive",
    maintenanceText: "Administrators add records; reader suggestions are reviewed before adoption.",
    featuredIntro: "Selected works to begin your reading.",
    enterArchive: "Enter the Archive",
    learnProject: "About the Project",

    workIntro: "About This Work",
    sourceLabel: "Source",
    publicationLabel: "Publication",
    pagesLabel: "Pages",
    translationNoteLabel: "Translation Notes",
    relatedWorks: "Related Works",

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

export function textSummary(text: Pick<TextRecord, "summary" | "summaries">, locale: Locale) {
  return text.summaries?.[locale]?.trim() || text.summary;
}

export function textTags(text: Pick<TextRecord, "tags" | "localizedTags">, locale: Locale) {
  const tags = text.localizedTags?.[locale];
  return tags?.length ? tags : text.tags;
}

export function textPeriod(text: Pick<TextRecord, "period">, locale: Locale) {
  const value = text.period.trim();
  if (!value || /^(don't know|unknown|创作年代不详|Date of composition unknown|Зохиогдсон үе тодорхойгүй)$/i.test(value)) return "";
  return value;
}

export function textTranslationNote(text: TextRecord, locale: Locale) {
  return text.translationNotes?.[locale]?.trim() || "";
}
