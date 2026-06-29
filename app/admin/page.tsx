import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const adminCards = [
  { title: "新增作品", body: "录入标题、三语正文、出处、出版信息、页码、分类和关键词。", href: "/admin/texts/new" },
  { title: "管理作品", body: "编辑、删除、修改翻译与首页推荐状态。", href: "/admin/texts" },
  { title: "上传图片 / PDF", body: "使用 Supabase Storage 管理封面、影印件和附件。", href: "/admin/media" },
  { title: "管理读者建议", body: "审核提交内容，采纳后再更新到作品页面。", href: "/admin/suggestions" },
  { title: "分类与关键词", body: "维护长期可扩展的分类、标签和主题词。", href: "/admin/taxonomy" },
  { title: "首页推荐", body: "选择精选作品、今日推荐和最新收录展示。", href: "/admin/home" }
];

export default function AdminPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col justify-between gap-5 border-b border-archive/10 pb-8 md:flex-row md:items-end">
          <div>
            <div className="text-sm text-gold">Administrator</div>
            <h1 className="mt-2 font-serif text-5xl text-archive">后台管理</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              后台设计为低复杂度维护：管理员登录 Supabase 后即可增删改作品、上传图片或 PDF、审核建议、管理首页推荐。
            </p>
          </div>
          <Link href="/admin/login" className="bg-archive px-5 py-3 text-sm font-medium text-vellum hover:bg-cedar">管理员登录</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {adminCards.map((card) => (
            <Link key={card.title} href={card.href} className="border border-archive/12 bg-vellum p-6 hover:border-gold">
              <h2 className="font-serif text-2xl text-archive">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
