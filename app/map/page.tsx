import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getTexts } from "@/lib/repository";

export default async function MapPage() {
  const texts = await getTexts();
  const located = texts.filter((text) => text.region);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">地理索引</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">根据作者、地区、采集地点或出版社所在地展示作品线索。正式部署后可接入 Mapbox 或 Supabase PostGIS。</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[460px] overflow-hidden border border-archive/12 bg-[#dce8df]">
            <div className="absolute inset-0 opacity-50 ornament" />
            {located.map((text, index) => (
              <Link
                key={text.slug}
                href={`/archive/${text.slug}`}
                className="absolute h-4 w-4 rounded-full border-2 border-vellum bg-gold shadow-archive"
                style={{ left: `${52 + index * 10}%`, top: `${38 + index * 13}%` }}
                title={text.region?.name}
              />
            ))}
            <div className="absolute bottom-5 left-5 bg-vellum/90 p-4 text-sm text-muted">示意地图：用于展示作品来源地点与出版地点。</div>
          </div>
          <div className="space-y-4">
            {located.map((text) => (
              <Link key={text.slug} href={`/archive/${text.slug}`} className="block border border-archive/12 bg-vellum p-5 hover:border-gold">
                <div className="text-sm text-gold">{text.region?.name}</div>
                <div className="mt-2 font-serif text-2xl text-archive">{text.title.zh}</div>
                <div className="mt-2 text-sm text-muted">{text.places.join(" / ")}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
