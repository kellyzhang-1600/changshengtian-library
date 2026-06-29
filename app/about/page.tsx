import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dictionary, getLocale } from "@/lib/i18n";
import { getSitePage } from "@/lib/repository";

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = getLocale(params.lang);
  const t = dictionary[lang];
  const page = await getSitePage("about");
  const title = page?.title[lang] || t.about;
  const body = page?.body[lang] || [t.aboutFallback1, t.aboutFallback2, t.aboutFallback3].join("\n\n");

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">{title}</h1>
        <div className="reading-prose mt-8 space-y-7 text-ink">
          {body.split(/\n{2,}/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
