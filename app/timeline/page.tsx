import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getTexts } from "@/lib/repository";

export default async function TimelinePage() {
  const texts = await getTexts();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">蒙古文学时间轴</h1>
        <div className="mt-10 border-l border-gold/60 pl-6">
          {texts.map((text) => (
            <Link key={text.slug} href={`/archive/${text.slug}`} className="relative mb-8 block border border-archive/12 bg-vellum p-5 hover:border-gold">
              <span className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-gold" />
              <div className="text-sm text-gold">{text.period}</div>
              <div className="mt-2 font-serif text-2xl text-archive">{text.title.zh}</div>
              <p className="mt-2 text-sm leading-7 text-muted">{text.summary}</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
