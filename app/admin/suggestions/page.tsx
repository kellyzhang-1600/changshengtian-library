import { SiteHeader } from "@/components/site-header";

export default function AdminSuggestionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="font-serif text-4xl text-archive">读者建议审核</h1>
        <div className="mt-8 border border-archive/12 bg-vellum p-6">
          <div className="text-sm text-gold">Pending</div>
          <h2 className="mt-2 font-serif text-2xl text-archive">暂无真实数据</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            连接 Supabase 后，此处显示 suggestions 表中 status = pending 的建议，并提供通过、退回、标记已处理等操作。
          </p>
        </div>
      </main>
    </>
  );
}
