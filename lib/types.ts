export type Locale = "mn" | "zh" | "en";

export type CategorySlug =
  | "epic"
  | "folk-song"
  | "long-song"
  | "blessing"
  | "proverb"
  | "ancient-book"
  | "translation-note";

export type TextRecord = {
  id: string;
  slug: string;
  title: {
    mn: string;
    zh: string;
    en: string;
  };
  category: CategorySlug;
  period: string;
  summary: string;
  originalMn: string;
  translationZh: string;
  translationEn: string;
  source: string;
  publication: string;
  pages: string;
  translationNote: string;
  tags: string[];
  people: string[];
  places: string[];
  region?: {
    name: string;
    lat: number;
    lng: number;
  };
  featured?: boolean;
  todayLine: {
    mn: string;
    zh: string;
    en: string;
  };
};

export type BookRecord = {
  id: string;
  slug: string;
  title: string;
  cover: string;
  publishedAt: string;
  publisher: string;
  purchasePlace: string;
  summary: string;
  whyBought: string;
  readingNotes: string;
  relatedTextSlugs: string[];
};

export type TranslationNote = {
  id: string;
  slug: string;
  title: string;
  relatedTextSlug: string;
  excerpt: string;
  body: string;
  tags: string[];
};

export type SitePage = {
  slug: string;
  title: {
    mn: string;
    zh: string;
    en: string;
  };
  body: {
    mn: string;
    zh: string;
    en: string;
  };
};
