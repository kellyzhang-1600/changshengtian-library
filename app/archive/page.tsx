import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextCard } from "@/components/text-card";
import { categories } from "@/lib/data";
import { dictionary, getLocale } from "@/lib/i18n";
import { getTexts } from "@/lib/repository";
import type { CategorySlug } from "@/lib/types";

export default async function ArchivePage({ searchParams }: { searchParams: Promise<{ q?: string; category?: CategorySlug; lang?: string }> }) {
  const params = await searchParams;
  const lang = getLocale(params.lang);
  const t = dictionary[lang];
  const texts = await getTexts();
  const query = (params.q ?? "").toLowerCase();
  const activeCategory = params.category;
  const filtered = texts.filter((text) => {
    const categoryMatch = activeCategory ? text.category === activeCategory : true;
    const haystack = [
      text.title.zh,
      text.title.en,
      text.title.mn,
      text.summary,
      text.period,
      text.source,
      ...text.tags,
      ...text.people,
      ...text.places
    ].join(" ").toLowerCase();
    return categoryMatch && (!query || haystack.includes(query));
  });

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit border border-archive/12 bg-vellum p-5">
          <div className="font-serif text-2xl text-archive">文库</div>
          <div className="mt-5 space-y-2">
            <a href="/archive" className={`block px-3 py-2 text-sm ${!activeCategory ? "bg-archive text-vellum" : "text-archive hover:bg-archive/5"}`}>
              全部作品
            </a>
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/archive?category=${category.slug}`}
                className={`block px-3 py-2 text-sm ${activeCategory === category.slug ? "bg-archive text-vellum" : "text-archive hover:bg-archive/5"}`}
              >
                {category.zh}
              </a>
            ))}
          </div>
        </aside>
        <section>
          <form className="mb-6">
            <input
              name="q"
              defaultValue={params.q}
              placeholder={t.search}
              className="w-full border border-archive/15 bg-vellum px-4 py-4 text-base outline-none focus:border-gold"
            />
          </form>
          <div className="mb-5 text-sm text-muted">共 {filtered.length} 件馆藏</div>
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((text) => (
              <TextCard key={text.id} text={text} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
