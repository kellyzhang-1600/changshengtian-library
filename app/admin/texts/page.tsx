import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { getCategory } from "@/lib/data";
import { getTexts } from "@/lib/repository";

export default async function AdminTextsPage() {
  const texts = await getTexts();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-serif text-4xl text-archive">管理作品</h1>
          <Link href="/admin/texts/new" className="bg-archive px-4 py-2 text-sm text-vellum">新增作品</Link>
        </div>
        <div className="mt-8 overflow-hidden border border-archive/12 bg-vellum">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-archive text-vellum">
              <tr>
                <th className="p-3">标题</th>
                <th className="p-3">分类</th>
                <th className="p-3">年代</th>
                <th className="p-3">状态</th>
              </tr>
            </thead>
            <tbody>
              {texts.map((text) => (
                <tr key={text.id} className="border-b border-archive/10">
                  <td className="p-3">{text.title.zh}</td>
                  <td className="p-3">{getCategory(text.category).zh}</td>
                  <td className="p-3">{text.period}</td>
                  <td className="p-3">{text.featured ? "首页推荐" : "普通收录"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
