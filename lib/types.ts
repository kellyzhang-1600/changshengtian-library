export type Locale = "mn" | "zh" | "en";

export type CategorySlug =
  | "epic"
  | "folk-song"
  | "long-song"
  | "modern-poetry"
  | "ritual-verse"
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
  summaries?: Partial<Record<Locale, string>>;
  originalMn: string;
  translationZh: string;
  translationEn: string;
  source: string;
  publication: string;
  pages: string;
  translationNote: string;
  translationNotes?: Partial<Record<Locale, string>>;
  tags: string[];
  localizedTags?: Partial<Record<Locale, string[]>>;
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
  institution?: string;
  credits?: string;
  publicationPlace?: string;
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
