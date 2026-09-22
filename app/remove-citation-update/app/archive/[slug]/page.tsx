import { workSource } from "@/lib/work-sources";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/favorite-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextCard } from "@/components/text-card";
import { getCategory } from "@/lib/data";
import { categoryLabel, dictionary, getLocale, textTitle, textSummary, textTags, textPeriod, textTranslationNote } from "@/lib/i18n";
import { getRelatedTexts, getTextBySlug } from "@/lib/repository";

export default async function TextPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string; read?: string }> }) {
  const { slug } = await params;
  const query = await searchParams;
  const text = await getTextBySlug(slug);
  if (!text) notFound();

  const lang = getLocale(query.lang);
  const t = dictionary[lang];
  const source = workSource(text.slug, lang);
  const category = getCategory(text.category);
  const reading = query.read === "1";

  return (
    <>
      {!reading ? <SiteHeader locale={lang} /> : null}
      <main className={reading ? "mx-auto max-w-4xl px-5 py-10" : "mx-auto max-w-7xl px-5 py-12"}>
        <article className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="text-sm text-gold">{[categoryLabel(category, lang), textPeriod(text, lang)].filter(Boolean).join(" · ")}</div>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-archive md:text-6xl">{textTitle(text, lang)}</h1>
            {!reading ? (
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`/archive/${text.slug}?read=1&lang=${lang}`} className="border border-archive/20 px-4 py-2 text-sm text-archive hover:bg-archive hover:text-vellum">
                  {t.readingMode}
                </a>
                <FavoriteButton slug={text.slug} labels={{ save: t.favorite, saved: t.unfavorite }} />
              </div>
            ) : null}

            {reading && source ? <section className="mt-6 border-l-2 border-gold pl-4 text-sm leading-7 text-muted" aria-label={t.sourceLabel}><h2 className="font-medium text-archive">{t.sourceLabel}</h2><p>{source.title}</p><p>{source.institution}</p><p>{source.credits}</p><p>{source.publication}</p></section> : null}

            <section className="mt-10 grid gap-6">
              <div className="border border-archive/12 bg-vellum p-6">
                <h2 className="font-serif text-2xl text-archive">{t.originalLabel}</h2>
                <p className="mt-5 whitespace-pre-line mongolian-text text-2xl text-ink">{text.originalMn}</p>
              </div>
              <div className="border border-archive/12 bg-vellum p-6">
                <h2 className="font-serif text-2xl text-archive">{t.chineseLabel}</h2>
                <p className="reading-prose mt-5 whitespace-pre-line text-ink">{text.translationZh}</p>
              </div>
              <div className="border border-archive/12 bg-vellum p-6">
                <h2 className="font-serif text-2xl text-archive">{t.englishLabel}</h2>
                <p className="mt-5 whitespace-pre-line text-lg leading-9 text-ink">{text.translationEn}</p>
              </div>
            </section>
          </div>

          {!reading ? (
            <aside className="space-y-6">
              <div className="border border-archive/12 bg-vellum p-5">
                <h2 className="font-serif text-2xl text-archive">{t.workIntro}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{textSummary(text, lang)}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  <div><dt className="text-gold">{t.sourceLabel}</dt><dd className="text-ink">{source ? <><span className="block font-medium">{source.title}</span><span className="mt-2 block">{source.institution}</span><span className="mt-2 block leading-6">{source.credits}</span></> : text.source}</dd></div>
                  {(source?.publication ?? text.publication) ? <div><dt className="text-gold">{t.publicationLabel}</dt><dd className="text-ink">{source?.publication ?? text.publication}</dd></div> : null}
                  {!source && text.pages ? <div><dt className="text-gold">{t.pagesLabel}</dt><dd className="text-ink">{text.pages}</dd></div> : null}
                  <div><dt className="text-gold">{t.translationNoteLabel}</dt><dd className="whitespace-pre-line text-ink leading-6">{textTranslationNote(text, lang)}</dd></div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {textTags(text, lang).map((tag) => <span key={tag} className="border border-steppe/30 px-2 py-1 text-xs text-archive">{tag}</span>)}
                </div>
              </div>
            </aside>
          ) : null}
        </article>

        {!reading ? (
          <section className="mt-16">
            <h2 className="font-serif text-3xl text-archive">{t.relatedWorks}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {(await getRelatedTexts(text.slug)).map((item) => <TextCard key={item.id} text={item} locale={lang} />)}
            </div>
          </section>
        ) : null}
      </main>
      {!reading ? <SiteFooter locale={lang} /> : null}
    </>
  );
}
