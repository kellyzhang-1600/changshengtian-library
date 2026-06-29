import { SiteHeader } from "@/components/site-header";

export default function AdminMediaPage() {
  return <Placeholder title="上传图片 / PDF" body="建议在 Supabase Storage 中建立 covers、pdfs、field-recordings 三个 bucket，后台表单保存文件 URL。" />;
}

function Placeholder({ title, body }: { title: string; body: string }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-serif text-4xl text-archive">{title}</h1>
        <p className="mt-5 text-base leading-8 text-muted">{body}</p>
      </main>
    </>
  );
}
