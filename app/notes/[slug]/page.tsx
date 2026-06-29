import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getTextBySlug, getTranslationNoteBySlug } from "@/lib/repository";

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getTranslationNoteBySlug(slug);
  if (!note) notFound();
  const text = await getTextBySlug(note.relatedTextSlug);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <div className="text-sm text-gold">Translation Note</div>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-archive">{note.title}</h1>
        <p className="reading-prose mt-8 text-ink">{note.body}</p>
        {text ? (
          <Link href={`/archive/${text.slug}`} className="mt-10 block border border-archive/12 bg-vellum p-5 hover:border-gold">
            <div className="text-sm text-gold">对应作品</div>
            <div className="mt-2 font-serif text-2xl text-archive">{text.title.zh}</div>
          </Link>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
