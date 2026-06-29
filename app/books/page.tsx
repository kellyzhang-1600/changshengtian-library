import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBooks } from "@/lib/repository";

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">乌兰巴托旧书店档案</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          记录在乌兰巴托旧书店、旧书摊与大学区书铺中购得的蒙古古籍、影印本和民间文学资料。
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {books.map((book) => (
            <Link key={book.slug} href={`/books/${book.slug}`} className="grid gap-5 border border-archive/12 bg-vellum p-5 hover:border-gold sm:grid-cols-[130px_1fr]">
              <Image src={book.cover} alt="" width={130} height={174} className="border border-archive/10" />
              <div>
                <div className="text-sm text-gold">{book.publishedAt} · {book.publisher}</div>
                <h2 className="mt-2 font-serif text-2xl text-archive">{book.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{book.summary}</p>
                <p className="mt-3 text-sm leading-7 text-ink">{book.whyBought}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
