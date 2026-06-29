import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dictionary, getLocale, textTitle } from "@/lib/i18n";
import { getTexts } from "@/lib/repository";

export default async function TimelinePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = getLocale(params.lang);
  const t = dictionary[lang];
  const texts = await getTexts();

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">{t.timelineTitle}</h1>
        <div className="mt-10 border-l border-gold/60 pl-6">
          {texts.map((text) => (
            <Link key={text.slug} href={`/archive/${text.slug}?lang=${lang}`} className="relative mb-8 block border border-archive/12 bg-vellum p-5 hover:border-gold">
              <span className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-gold" />
              <div className="text-sm text-gold">{text.period}</div>
              <div className="mt-2 font-serif text-2xl text-archive">{textTitle(text, lang)}</div>
              <p className="mt-2 text-sm leading-7 text-muted">{text.summary}</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
