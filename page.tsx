import { notFound } from "next/navigation";
import { CitationBox } from "@/components/citation-box";
import { FavoriteButton } from "@/components/favorite-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextCard } from "@/components/text-card";
import { getCitations } from "@/lib/citations";
import { getCategory } from "@/lib/data";
import { categoryLabel, dictionary, getLocale, textTitle } from "@/lib/i18n";
import { getRelatedTexts, getTextBySlug } from "@/lib/repository";

export default async function TextPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string; read?: string }> }) {
  const { slug } = await params;
  const query = await searchParams;
  const text = await getTextBySlug(slug);
  if (!text) notFound();

  const lang = getLocale(query.lang);
  const t = dictionary[lang];
  const category = getCategory(text.category);
  const reading = query.read === "1";

  return (
    <>
      {!reading ? <SiteHeader locale={lang} /> : null}
      <main className={reading ? "mx-auto max-w-4xl px-5 py-10" : "mx-auto max-w-7xl px-5 py-12"}>
        <article className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="text-sm text-gold">{categoryLabel(category, lang)} · {text.period}</div>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-archive md:text-6xl">{textTitle(text, lang)}</h1>
            <div className="mt-3 mongolian-text text-2xl text-steppe">{text.title.mn}</div>
            {!reading ? (
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`/archive/${text.slug}?read=1`} className="border border-archive/20 px-4 py-2 text-sm text-archive hover:bg-archive hover:text-vellum">
                  {t.readingMode}
                </a>
                <FavoriteButton slug={text.slug} labels={{ save: t.favorite, saved: t.unfavorite }} />
              </div>
            ) : null}

            <section className="mt-10 grid gap-6">
              <div className="border border-archive/12 bg-vellum p-6">
                <h2 className="font-serif text-2xl text-archive">蒙古文原文</h2>
                <p className="mt-5 whitespace-pre-line mongolian-text text-2xl text-ink">{text.originalMn}</p>
              </div>
              <div className="border border-archive/12 bg-vellum p-6">
                <h2 className="font-serif text-2xl text-archive">中文翻译</h2>
                <p className="reading-prose mt-5 whitespace-pre-line text-ink">{text.translationZh}</p>
              </div>
              <div className="border border-archive/12 bg-vellum p-6">
                <h2 className="font-serif text-2xl text-archive">English Translation</h2>
                <p className="mt-5 whitespace-pre-line text-lg leading-9 text-ink">{text.translationEn}</p>
              </div>
            </section>
          </div>

          {!reading ? (
            <aside className="space-y-6">
              <div className="border border-archive/12 bg-vellum p-5">
                <h2 className="font-serif text-2xl text-archive">作品简介</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{text.summary}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  <div><dt className="text-gold">来源</dt><dd className="text-ink">{text.source}</dd></div>
                  <div><dt className="text-gold">出版信息</dt><dd className="text-ink">{text.publication}</dd></div>
                  <div><dt className="text-gold">页码</dt><dd className="text-ink">{text.pages}</dd></div>
                  <div><dt className="text-gold">翻译说明</dt><dd className="text-ink leading-6">{text.translationNote}</dd></div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {text.tags.map((tag) => <span key={tag} className="border border-steppe/30 px-2 py-1 text-xs text-archive">{tag}</span>)}
                </div>
              </div>
              <div>
                <h2 className="mb-3 font-serif text-2xl text-archive">{t.cite}</h2>
                <CitationBox citations={getCitations(text)} />
              </div>
            </aside>
          ) : null}
        </article>

        {!reading ? (
          <section className="mt-16">
            <h2 className="font-serif text-3xl text-archive">相关作品推荐</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {(await getRelatedTexts(text.slug)).map((item) => <TextCard key={item.id} text={item} locale={lang} />)}
            </div>
          </section>
        ) : null}
      </main>
      {!reading ? <SiteFooter /> : null}
    </>
  );
}
