import { bookCatalog } from "@/lib/book-catalog";
import type { Locale } from "@/lib/types";

export function workSource(slug: string, locale: Locale) {
  const book = bookCatalog.find(book => (book.relatedTextSlugs as readonly string[]).includes(slug));
  if (!book) return undefined;
  const metadata = book.metadata[locale];
  return {
    ...metadata,
    slug: book.slug,
    publication: [metadata.publisher, metadata.publicationPlace, book.publishedAt].filter(Boolean).join(" · ")
  };
}
