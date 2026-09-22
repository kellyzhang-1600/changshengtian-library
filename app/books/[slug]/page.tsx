import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dictionary, getLocale, textTitle } from "@/lib/i18n";
import { getBookBySlug, getTexts } from "@/lib/repository";

export default async function BookPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const lang = getLocale(query.lang);
  const t = dictionary[lang];
  const book = await getBookBySlug(slug, lang);
  if (!book) notFound();
  const relatedSlugs = new Set(book.relatedTextSlugs);
  const related = relatedSlugs.size ? (await getTexts()).filter(text => relatedSlugs.has(text.slug)) : [];
  return (
    <>
      <SiteHeader locale={lang} />
      <main className="mx-auto max-w-5xl px-5 py-12">
        <article>
          {[book.publishedAt, book.publisher].filter(Boolean).length ? <div className="text-sm text-gold">{[book.publishedAt, book.publisher].filter(Boolean).join(" · ")}</div> : null}
          <h1 className="mt-3 font-serif text-4xl leading-tight text-archive md:text-5xl">{book.title}</h1>
          <dl className="mt-8 space-y-5 border-y border-archive/10 py-6 text-sm leading-7">
            <div><dt className="text-gold">{t.institutionLabel}</dt><dd className="mt-1 text-ink">{book.institution}</dd></div>
            {book.credits ? <div><dt className="text-gold">{t.creditsLabel}</dt><dd className="mt-1 text-ink">{book.credits}</dd></div> : null}
            {[book.publisher, book.publicationPlace, book.publishedAt].filter(Boolean).length ? <div><dt className="text-gold">{t.publicationLabel}</dt><dd className="mt-1 text-ink">{[book.publisher, book.publicationPlace, book.publishedAt].filter(Boolean).join(" · ")}</dd></div> : null}
          </dl>
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-archive">{t.bookIntro}</h2>
            <p className="reading-prose mt-3 text-ink">{book.summary}</p>
          </section>
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-archive">{t.relatedWorks}</h2>
            <div className="mt-4 space-y-3">
              {related.length ? related.map(text => (
                <Link key={text.slug} href={`/archive/${text.slug}?lang=${lang}`} className="block border border-archive/10 bg-vellum p-4 hover:border-gold">
                  {textTitle(text, lang)}
                </Link>
              )) : <p className="text-sm text-muted">{t.noRelated}</p>}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter locale={lang} />
    </>
  );
}
