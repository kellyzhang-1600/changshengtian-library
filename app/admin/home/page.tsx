import { SiteHeader } from "@/components/site-header";

export default function AdminHomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-serif text-4xl text-archive">首页推荐管理</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          连接 Supabase 后，可通过 featured、recommended_on、sort_order 字段控制精选作品、今日推荐与展示顺序。
        </p>
      </main>
    </>
  );
}
