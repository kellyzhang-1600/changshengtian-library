import { workSource } from "@/lib/work-sources";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextCard } from "@/components/text-card";
import { categories } from "@/lib/data";
import { categoryLabel, dictionary, getLocale, textTitle } from "@/lib/i18n";
import { getBooks, getTexts } from "@/lib/repository";

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = getLocale(params.lang);
  const t = dictionary[lang];
  const texts = await getTexts();
  const books = await getBooks(lang);
  const featured = texts.filter((text) => text.featured);
  const today = texts[new Date().getDate() % texts.length];

  return (
    <>
      <SiteHeader locale={lang} />
      <main>
        <section className="relative overflow-hidden border-b border-archive/10 bg-vellum">
          <div className="ornament absolute inset-x-0 top-0 h-8 opacity-40" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-gold">{t.publicArchive}</p>
              <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight text-archive md:text-7xl">{t.brand}</h1>
              <p className="mt-5 max-w-3xl font-serif text-2xl leading-10 text-cedar">{t.subtitle}</p>
              <p className="mt-8 max-w-3xl text-base leading-8 text-muted">
                {t.aboutFallback1}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={`/archive?lang=${lang}`} className="bg-archive px-5 py-3 text-sm font-medium text-vellum hover:bg-cedar">
                  {t.enterArchive}
                </Link>
                <Link href={`/about?lang=${lang}`} className="border border-archive/20 px-5 py-3 text-sm font-medium text-archive hover:bg-archive/5">
                  {t.learnProject}
                </Link>
              </div>
            </div>
            <aside className="border border-gold/40 bg-parchment p-7 shadow-archive">
              <div className="text-sm uppercase tracking-[0.22em] text-gold">{t.today}</div>
              <p className="mt-6 mongolian-text text-3xl text-archive">{today.todayLine.mn}</p>
              <p className="mt-6 font-serif text-xl leading-9 text-ink">{today.todayLine.zh}</p>
              <p className="mt-2 text-sm leading-7 text-muted">{today.todayLine.en}</p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl text-archive">{t.featured}</h2>
              <p className="mt-2 text-sm text-muted">{t.featuredIntro}</p>
            </div>
            <Link href={`/archive?lang=${lang}`} className="text-sm text-archive underline decoration-gold underline-offset-4">
              {t.allWorks}
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((text) => (
              <TextCard key={text.id} text={text} locale={lang} />
            ))}
          </div>
        </section>

        <section className="bg-archive/5 py-16">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="font-serif text-3xl text-archive">{t.categories}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link key={category.slug} href={`/archive?category=${category.slug}&lang=${lang}`} className="border border-archive/10 bg-vellum p-5 hover:border-gold">
                  <div className="mt-3 font-serif text-xl text-archive">{categoryLabel(category, lang)}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{lang === "zh" ? category.description : categoryDescriptions[lang][category.slug]}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-archive">{t.latest}</h2>
            <div className="mt-6 space-y-4">
              {texts.map((text) => (
                <Link key={text.slug} href={`/archive/${text.slug}?lang=${lang}`} className="block border-b border-archive/10 pb-4">
                  <div className="font-serif text-xl text-archive">{textTitle(text, lang)}</div>
                  <div className="mt-1 text-sm text-muted">{workSource(text.slug, lang)?.title ?? ""}</div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-archive">{t.books}</h2>
            <div className="mt-6 space-y-4">
              {books.map((book) => (
                <Link key={book.slug} href={`/books/${book.slug}?lang=${lang}`} className="block border border-archive/10 bg-vellum p-5 hover:border-gold">
                  <div className="font-serif text-xl text-archive">{book.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{book.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="border-y border-archive/10 py-10">
            <h2 className="font-serif text-3xl text-archive">{t.project}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
              {t.aboutFallback3}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter locale={lang} />
    </>
  );
}

const categoryDescriptions = {
  "en": {
    "epic": "Long narratives, heroic lineages, and oral traditions.",
    "folk-song": "Labor, migration, longing, and life on the steppe.",
    "long-song": "Mongolian vocal literature with long, sustained melodies.",
    "modern-poetry": "Written and modern poetry from the twentieth century onward.",
    "ritual-verse": "Reciprocal verse performed during weddings and other customary negotiations.",
    "blessing": "Rituals, weddings, offerings, and everyday good wishes.",
    "proverb": "Experience, ethics, and humor in concise sayings.",
    "ancient-book": "Old books, facsimiles, and textual versions.",
    "translation-note": "Word meanings, versions, cultural context, and translation choices."
  },
  "mn": {
    "epic": "Урт хүүрнэл, баатрын угсаа, аман уламжлал.",
    "folk-song": "Хөдөлмөр, нүүдэл, санагалзал, тал нутгийн амьдрал.",
    "long-song": "Уянга сунжирсан аялгуутай монгол дууны яруу найраг.",
    "modern-poetry": "Хорьдугаар зуунаас хойших бичгийн болон орчин үеийн яруу найраг.",
    "ritual-verse": "Хурим болон ёс хэлэлцэх үед хоёр тал ээлжлэн хэлдэг харилцаа шүлэг.",
    "blessing": "Зан үйл, хурим, тахилга, өдөр тутмын ерөөл.",
    "proverb": "Товч үгэнд шингэсэн туршлага, ёс суртахуун, хошигнол.",
    "ancient-book": "Хуучин ном, хуулбар хэвлэл, эхийн хувилбар.",
    "translation-note": "Үгийн утга, хувилбар, соёлын тайлбар, орчуулгын сонголт."
  }
};
