export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-archive/10 bg-archive text-vellum">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="font-serif text-2xl">长生天文库</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-vellum/75">
            公益性的蒙古诗歌与口传文学数字档案，面向读者、译者与研究者长期开放。
          </p>
        </div>
        <div className="text-sm leading-7 text-vellum/75">
          <div className="font-medium text-vellum">馆藏方向</div>
          英雄史诗、民歌、长调、祝词、谚语、古籍与翻译札记。
        </div>
        <div className="text-sm leading-7 text-vellum/75">
          <div className="font-medium text-vellum">维护方式</div>
          后台由管理员录入，读者建议需审核后采纳。
        </div>
      </div>
    </footer>
  );
}
