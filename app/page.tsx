import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextCard } from "@/components/text-card";
import { categories } from "@/lib/data";
import { dictionary, getLocale } from "@/lib/i18n";
import { getBooks, getTexts } from "@/lib/repository";

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = getLocale(params.lang);
  const t = dictionary[lang];
  const texts = await getTexts();
  const books = await getBooks();
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
              <p className="text-sm uppercase tracking-[0.32em] text-gold">Public Digital Humanities Archive</p>
              <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight text-archive md:text-7xl">长生天文库</h1>
              <p className="mt-5 max-w-3xl font-serif text-2xl leading-10 text-cedar">{t.subtitle}</p>
              <p className="mt-8 max-w-3xl text-base leading-8 text-muted">
                这里收藏蒙古英雄史诗、民歌、祝词、谚语与旧书资料，也记录翻译过程中无法被轻易带过的词语、版本和文化背景。它首先是一间安静的数字阅览室，其次才是一个网站。
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/archive" className="bg-archive px-5 py-3 text-sm font-medium text-vellum hover:bg-cedar">
                  进入文库
                </Link>
                <Link href="/about" className="border border-archive/20 px-5 py-3 text-sm font-medium text-archive hover:bg-archive/5">
                  了解项目
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
              <p className="mt-2 text-sm text-muted">适合从这里开始阅读的馆藏作品。</p>
            </div>
            <Link href="/archive" className="text-sm text-archive underline decoration-gold underline-offset-4">
              查看全部
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((text) => (
              <TextCard key={text.id} text={text} />
            ))}
          </div>
        </section>

        <section className="bg-archive/5 py-16">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="font-serif text-3xl text-archive">{t.categories}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link key={category.slug} href={`/archive?category=${category.slug}`} className="border border-archive/10 bg-vellum p-5 hover:border-gold">
                  <div className="mongolian-text text-lg text-steppe">{category.mn}</div>
                  <div className="mt-3 font-serif text-xl text-archive">{category.zh}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
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
                <Link key={text.slug} href={`/archive/${text.slug}`} className="block border-b border-archive/10 pb-4">
                  <div className="font-serif text-xl text-archive">{text.title.zh}</div>
                  <div className="mt-1 text-sm text-muted">{text.period} · {text.source}</div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-archive">乌兰巴托旧书店档案</h2>
            <div className="mt-6 space-y-4">
              {books.map((book) => (
                <Link key={book.slug} href={`/books/${book.slug}`} className="block border border-archive/10 bg-vellum p-5 hover:border-gold">
                  <div className="font-serif text-xl text-archive">{book.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{book.whyBought}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="border-y border-archive/10 py-10">
            <h2 className="font-serif text-3xl text-archive">{t.project}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
              项目将持续整理田野调查、旧书店购书、版本比较和翻译札记。后台支持长期增补作品、书籍、关键词、图片、PDF 与读者建议审核，不需要每次修改代码。
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
