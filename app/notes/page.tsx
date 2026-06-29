import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getTranslationNotes } from "@/lib/repository";

export default async function NotesPage() {
  const translationNotes = await getTranslationNotes();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">翻译札记</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          这里记录翻译过程中真正棘手的问题：词语没有对应表达时怎么办，文化背景如何处理，不同版本之间如何辨认。
        </p>
        <div className="mt-10 space-y-5">
          {translationNotes.map((note) => (
            <Link key={note.slug} href={`/notes/${note.slug}`} className="block border border-archive/12 bg-vellum p-6 hover:border-gold">
              <h2 className="font-serif text-2xl text-archive">{note.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{note.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {note.tags.map((tag) => <span key={tag} className="border border-steppe/30 px-2 py-1 text-xs text-archive">{tag}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
