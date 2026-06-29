import { SiteHeader } from "@/components/site-header";
import { categories } from "@/lib/data";

export default function AdminTaxonomyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-serif text-4xl text-archive">分类与关键词</h1>
        <div className="mt-8 grid gap-3">
          {categories.map((category) => (
            <div key={category.slug} className="border border-archive/12 bg-vellum p-4">
              <div className="font-serif text-xl text-archive">{category.zh}</div>
              <div className="mt-1 text-sm text-muted">{category.description}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
