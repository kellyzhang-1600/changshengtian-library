import { SiteHeader } from "@/components/site-header";
import { categories } from "@/lib/data";

export default function NewTextPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-serif text-4xl text-archive">新增作品</h1>
        <form className="mt-8 grid gap-5 border border-archive/12 bg-vellum p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="中文标题" name="title_zh" />
            <Field label="英文标题" name="title_en" />
          </div>
          <Field label="蒙古文标题" name="title_mn" />
          <label className="grid gap-2 text-sm text-archive">
            分类
            <select className="border border-archive/20 bg-parchment px-3 py-2">
              {categories.map((category) => <option key={category.slug}>{category.zh}</option>)}
            </select>
          </label>
          <Textarea label="蒙古文原文" />
          <Textarea label="中文翻译" />
          <Textarea label="英文翻译" />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="来源" name="source" />
            <Field label="出版信息" name="publication" />
            <Field label="页码" name="pages" />
            <Field label="关键词（逗号分隔）" name="tags" />
          </div>
          <Textarea label="翻译说明" />
          <button className="bg-archive px-5 py-3 text-sm font-medium text-vellum">保存作品</button>
        </form>
      </main>
    </>
  );
}

function Field({ label, name }: { label: string; name: string }) {
  return (
    <label className="grid gap-2 text-sm text-archive">
      {label}
      <input name={name} className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold" />
    </label>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <label className="grid gap-2 text-sm text-archive">
      {label}
      <textarea rows={5} className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold" />
    </label>
  );
}
