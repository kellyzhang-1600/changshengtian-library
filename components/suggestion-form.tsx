"use client";

import { useState } from "react";

export function SuggestionForm({ works }: { works: { slug: string; title: string }[] }) {
  const [status, setStatus] = useState<string>("");

  async function submit(formData: FormData) {
    setStatus("正在提交...");
    const response = await fetch("/api/suggestions", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" }
    });
    setStatus(response.ok ? "已提交，建议会进入后台审核。" : "提交失败，请稍后再试。");
  }

  return (
    <form action={submit} className="grid gap-4 border border-archive/12 bg-vellum p-6 shadow-sm">
      <label className="grid gap-2 text-sm text-archive">
        姓名
        <input name="name" required className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold" />
      </label>
      <label className="grid gap-2 text-sm text-archive">
        邮箱
        <input name="email" type="email" required className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold" />
      </label>
      <label className="grid gap-2 text-sm text-archive">
        对应作品
        <select name="text_slug" className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold">
          {works.map((work) => (
            <option key={work.slug} value={work.slug}>
              {work.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-archive">
        建议内容
        <textarea name="content" required rows={7} className="border border-archive/20 bg-parchment px-3 py-2 outline-none focus:border-gold" />
      </label>
      <button className="bg-archive px-5 py-3 text-sm font-medium text-vellum hover:bg-cedar">提交翻译建议</button>
      {status ? <p className="text-sm text-muted">{status}</p> : null}
    </form>
  );
}
