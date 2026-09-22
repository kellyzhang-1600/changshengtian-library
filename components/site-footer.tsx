import { dictionary, getLocale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale?: string }) {
  const t = dictionary[getLocale(locale)];
  return (
    <footer className="mt-20 border-t border-archive/10 bg-archive text-vellum">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="font-serif text-2xl">{t.brand}</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-vellum/75">
            {t.footerIntro}
          </p>
        </div>
        <div className="text-sm leading-7 text-vellum/75">
          <div className="font-medium text-vellum">{t.collectionLabel}</div>
          {t.collectionText}
        </div>
        <div className="text-sm leading-7 text-vellum/75">
          <div className="font-medium text-vellum">{t.maintenanceLabel}</div>
          {t.maintenanceText}
        </div>
      </div>
    </footer>
  );
}
