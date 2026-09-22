import { catalogBooks } from "@/lib/book-catalog";
import { createClient } from "@supabase/supabase-js";
import {
  findText as findFallbackText,
  relatedTexts as fallbackRelatedTexts,
  texts as fallbackTexts,
  translationNotes as fallbackTranslationNotes
} from "@/lib/data";
import type { BookRecord, Locale, CategorySlug, SitePage, TextRecord, TranslationNote } from "@/lib/types";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;
  return createClient(url, key);
}

function normalizeCategory(value?: string | null): CategorySlug {
  const allowed: CategorySlug[] = ["epic", "folk-song", "long-song", "modern-poetry", "ritual-verse", "blessing", "proverb", "ancient-book", "translation-note"];
  return allowed.includes(value as CategorySlug) ? (value as CategorySlug) : "epic";
}

function mapText(row: any): TextRecord {
  const categorySlug = row.categories?.slug ?? row.category_slug;

  return {
    id: row.id,
    slug: row.slug,
    title: {
      mn: row.title_mn ?? "",
      zh: row.title_zh ?? "",
      en: row.title_en ?? ""
    },
    category: normalizeCategory(categorySlug),
    period: row.period ?? "",
    summary: row.summary ?? "",
    summaries: { zh: row.summary ?? "", en: row.summary_en ?? "", mn: row.summary_mn ?? "" },
    originalMn: row.original_mn ?? "",
    translationZh: row.translation_zh ?? "",
    translationEn: row.translation_en ?? "",
    source: row.sources?.title ?? row.source_title ?? "",
    publication: row.publication ?? "",
    pages: row.pages ?? "",
    translationNote: row.translation_note ?? "",
    translationNotes: { zh: row.translation_note_zh ?? "", en: row.translation_note_en ?? "", mn: row.translation_note_mn ?? "" },
    tags: row.themes ?? [],
    localizedTags: { zh: row.themes ?? [], en: row.themes_en ?? [], mn: row.themes_mn ?? [] },
    people: row.people ?? [],
    places: row.places ?? [],
    region: row.latitude && row.longitude ? { name: row.region_name ?? "", lat: Number(row.latitude), lng: Number(row.longitude) } : undefined,
    featured: Boolean(row.featured),
    todayLine: {
      mn: row.today_line_mn ?? row.original_mn ?? "",
      zh: row.today_line_zh ?? row.translation_zh ?? "",
      en: row.today_line_en ?? row.translation_en ?? ""
    }
  };
}

function mapBook(row: any, locale: Locale): BookRecord {
  const metadata = row.localized_metadata?.[locale] ?? {};
  return {
    id: row.id, slug: row.slug, publishedAt: row.published_at ?? "",
    title: metadata.title ?? (locale === "zh" ? row.title : ""),
    cover: row.cover_url ?? "",
    publisher: metadata.publisher ?? "", publicationPlace: metadata.publicationPlace ?? "",
    institution: metadata.institution ?? "", credits: metadata.credits ?? "",
    summary: metadata.summary ?? "", purchasePlace: "", whyBought: "", readingNotes: "",
    relatedTextSlugs: (row.book_texts ?? []).flatMap((link: any) => link.texts?.slug ? [link.texts.slug] : [])
  };
}

function mapNote(row: any): TranslationNote {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title ?? "",
    relatedTextSlug: row.texts?.slug ?? row.related_text_slug ?? "",
    excerpt: row.excerpt ?? "",
    body: row.body ?? "",
    tags: row.tags ?? []
  };
}

function mapSitePage(row: any): SitePage {
  return {
    slug: row.slug,
    title: {
      mn: row.title_mn ?? "",
      zh: row.title_zh ?? "",
      en: row.title_en ?? ""
    },
    body: {
      mn: row.body_mn ?? "",
      zh: row.body_zh ?? "",
      en: row.body_en ?? ""
    }
  };
}

export async function getTexts(): Promise<TextRecord[]> {
  const supabase = getSupabase();
  if (!supabase) return fallbackTexts;

  const { data, error } = await supabase
    .from("texts")
    .select("*, categories(slug), sources(title)")
    .order("created_at", { ascending: false });

  if (error || !data?.length) return fallbackTexts;
  return data.map(mapText);
}

export async function getTextBySlug(slug: string): Promise<TextRecord | undefined> {
  const supabase = getSupabase();
  if (!supabase) return findFallbackText(slug);

  const { data, error } = await supabase
    .from("texts")
    .select("*, categories(slug), sources(title)")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return findFallbackText(slug);
  return mapText(data);
}

export async function getRelatedTexts(slug: string): Promise<TextRecord[]> {
  const allTexts = await getTexts();
  const current = allTexts.find((text) => text.slug === slug);
  if (!current) return fallbackRelatedTexts(slug);

  return allTexts
    .filter((text) => text.slug !== slug && (text.category === current.category || text.tags.some((tag) => current.tags.includes(tag))))
    .slice(0, 3);
}

export async function getBooks(locale: Locale = "zh"): Promise<BookRecord[]> {
  const supabase = getSupabase();
  if (!supabase) return catalogBooks(locale);
  const { data, error } = await supabase.from("books").select("*, book_texts(texts(slug))").order("published_at", { ascending: true });
  if (error) throw new Error("Unable to load the book archive");
  return (data ?? []).map(row => mapBook(row, locale));
}

export async function getBookBySlug(slug: string, locale: Locale = "zh"): Promise<BookRecord | undefined> {
  const books = await getBooks(locale);
  return books.find(book => book.slug === slug);
}

export async function getTranslationNotes(): Promise<TranslationNote[]> {
  const supabase = getSupabase();
  if (!supabase) return fallbackTranslationNotes;

  const { data, error } = await supabase.from("translation_notes").select("*, texts(slug)").order("created_at", { ascending: false });
  if (error || !data?.length) return fallbackTranslationNotes;
  return data.map(mapNote);
}

export async function getTranslationNoteBySlug(slug: string): Promise<TranslationNote | undefined> {
  const notes = await getTranslationNotes();
  return notes.find((note) => note.slug === slug);
}

export async function getSitePage(slug: string): Promise<SitePage | undefined> {
  const supabase = getSupabase();
  if (!supabase) return undefined;

  const { data, error } = await supabase
    .from("site_pages")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return undefined;
  return mapSitePage(data);
}
