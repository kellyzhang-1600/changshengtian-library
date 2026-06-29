import { createClient } from "@supabase/supabase-js";
import {
  books as fallbackBooks,
  findText as findFallbackText,
  relatedTexts as fallbackRelatedTexts,
  texts as fallbackTexts,
  translationNotes as fallbackTranslationNotes
} from "@/lib/data";
import type { BookRecord, CategorySlug, TextRecord, TranslationNote } from "@/lib/types";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;
  return createClient(url, key);
}

function normalizeCategory(value?: string | null): CategorySlug {
  const allowed: CategorySlug[] = ["epic", "folk-song", "long-song", "blessing", "proverb", "ancient-book", "translation-note"];
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
    originalMn: row.original_mn ?? "",
    translationZh: row.translation_zh ?? "",
    translationEn: row.translation_en ?? "",
    source: row.sources?.title ?? row.source_title ?? "",
    publication: row.publication ?? "",
    pages: row.pages ?? "",
    translationNote: row.translation_note ?? "",
    tags: row.themes ?? [],
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

function mapBook(row: any): BookRecord {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title ?? "",
    cover: row.cover_url || "/book-cover.svg",
    publishedAt: row.published_at ?? "",
    publisher: row.publisher ?? "",
    purchasePlace: row.purchase_place ?? "",
    summary: row.summary ?? "",
    whyBought: row.why_bought ?? "",
    readingNotes: row.reading_notes ?? "",
    relatedTextSlugs: row.related_text_slugs ?? []
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

export async function getBooks(): Promise<BookRecord[]> {
  const supabase = getSupabase();
  if (!supabase) return fallbackBooks;

  const { data, error } = await supabase.from("books").select("*").order("created_at", { ascending: false });
  if (error || !data?.length) return fallbackBooks;
  return data.map(mapBook);
}

export async function getBookBySlug(slug: string): Promise<BookRecord | undefined> {
  const books = await getBooks();
  return books.find((book) => book.slug === slug);
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
