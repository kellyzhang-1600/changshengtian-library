import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBookBySlug, getTextBySlug } from "@/lib/repository";

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);
  if (!book) notFound();
  const related = (await Promise.all(book.relatedTextSlugs.map(getTextBySlug))).filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[300px_1fr]">
        <Image src={book.cover} alt="" width={300} height={400} className="border border-archive/12 bg-vellum shadow-archive" />
        <article>
          <div className="text-sm text-gold">{book.publishedAt} · {book.publisher}</div>
          <h1 className="mt-3 font-serif text-5xl text-archive">{book.title}</h1>
          <dl className="mt-8 grid gap-5 border-y border-archive/10 py-6 text-sm md:grid-cols-2">
            <div><dt className="text-gold">出版时间</dt><dd className="mt-1 text-ink">{book.publishedAt}</dd></div>
            <div><dt className="text-gold">出版社</dt><dd className="mt-1 text-ink">{book.publisher}</dd></div>
            <div><dt className="text-gold">购买地点</dt><dd className="mt-1 text-ink">{book.purchasePlace}</dd></div>
          </dl>
          <Section title="内容简介" body={book.summary} />
          <Section title="我为什么购买它" body={book.whyBought} />
          <Section title="阅读札记" body={book.readingNotes} />
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-archive">相关作品</h2>
            <div className="mt-4 space-y-3">
              {related.map((text) => text ? (
                <Link key={text.slug} href={`/archive/${text.slug}`} className="block border border-archive/10 bg-vellum p-4 hover:border-gold">
                  {text.title.zh}
                </Link>
              ) : null)}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-2xl text-archive">{title}</h2>
      <p className="mt-3 reading-prose text-ink">{body}</p>
    </section>
  );
}
