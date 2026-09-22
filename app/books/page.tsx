import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dictionary, getLocale } from "@/lib/i18n";
import { getBooks } from "@/lib/repository";

export default async function BooksPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = getLocale((await searchParams).lang);
  const t = dictionary[lang];
  const books = await getBooks(lang);
  return (
    <>
      <SiteHeader locale={lang} />
      <main className="mx-auto max-w-7xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">{t.books}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{t.booksIntro}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {books.map(book => (
            <Link key={book.slug} href={`/books/${book.slug}?lang=${lang}`} className="block border border-archive/12 bg-vellum p-7 hover:border-gold">
              {[book.publishedAt, book.publisher].filter(Boolean).length ? <div className="text-sm text-gold">{[book.publishedAt, book.publisher].filter(Boolean).join(" · ")}</div> : null}
              <h2 className="mt-3 font-serif text-2xl leading-relaxed text-archive">{book.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{book.summary}</p>
              <p className="mt-4 text-sm leading-7 text-ink">{book.institution}</p>
              {book.credits ? <p className="mt-2 text-sm leading-7 text-ink">{book.credits}</p> : null}
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter locale={lang} />
    </>
  );
}
