import Link from "next/link";
import { getCategory } from "@/lib/data";
import { categoryLabel, getLocale, textTitle } from "@/lib/i18n";
import type { TextRecord } from "@/lib/types";

export function TextCard({ text, locale }: { text: TextRecord; locale?: string }) {
  const lang = getLocale(locale);
  const category = getCategory(text.category);

  return (
    <Link href={`/archive/${text.slug}?lang=${lang}`} className="group block border border-archive/12 bg-vellum p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-archive">
      <div className="flex items-center justify-between gap-4 text-xs text-muted">
        <span>{categoryLabel(category, lang)}</span>
        <span>{text.period}</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl text-archive">{textTitle(text, lang)}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">{text.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {text.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="border border-steppe/30 px-2 py-1 text-xs text-archive">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
