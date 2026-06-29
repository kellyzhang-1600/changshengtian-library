import { SiteHeader } from "@/components/site-header";

export default function AdminLoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-md px-5 py-12">
        <h1 className="font-serif text-4xl text-archive">管理员登录</h1>
        <form className="mt-8 grid gap-4 border border-archive/12 bg-vellum p-6">
          <label className="grid gap-2 text-sm text-archive">
            邮箱
            <input type="email" className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold" />
          </label>
          <label className="grid gap-2 text-sm text-archive">
            密码
            <input type="password" className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold" />
          </label>
          <button className="bg-archive px-5 py-3 text-sm font-medium text-vellum">登录</button>
        </form>
        <p className="mt-5 text-sm leading-6 text-muted">
          真实登录可使用 Supabase Auth。为保持后台简单，建议只创建少量管理员账号，并在 Supabase Row Level Security 中限制写入权限。
        </p>
      </main>
    </>
  );
}
