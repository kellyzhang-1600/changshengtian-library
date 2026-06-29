import Link from "next/link";
import { dictionary, getLocale, locales } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale?: string }) {
  const lang = getLocale(locale);
  const t = dictionary[lang];

  const nav = [
    { href: "/archive", label: t.archive },
    { href: "/books", label: t.books },
    { href: "/notes", label: t.notes },
    { href: "/timeline", label: t.timeline },
    { href: "/map", label: t.map },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact }
  ];

  return (
    <header className="border-b border-archive/10 bg-vellum/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="group flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center border border-gold/70 bg-archive text-xl font-serif text-vellum shadow-archive">
            ᠲ
          </div>
          <div>
            <div className="font-serif text-2xl font-semibold tracking-normal text-archive">长生天文库</div>
            <div className="text-sm text-muted">{t.subtitle}</div>
          </div>
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex flex-wrap gap-1 text-sm text-archive">
            {nav.map((item) => (
              <Link key={item.href} href={`${item.href}?lang=${lang}`} className="px-3 py-2 hover:bg-archive/5">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex border border-archive/15 bg-parchment text-xs">
            {locales.map((item) => (
              <Link
                key={item.code}
                href={`?lang=${item.code}`}
                className={`px-3 py-2 ${item.code === lang ? "bg-archive text-vellum" : "text-archive hover:bg-archive/5"}`}
              >
                {item.native}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
