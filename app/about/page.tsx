import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-serif text-5xl text-archive">关于项目</h1>
        <div className="reading-prose mt-8 space-y-7 text-ink">
          <p>长生天文库是一个公益性的数字人文项目，目标是建立蒙汉英三语蒙古诗歌与口传文学数字阅读平台。</p>
          <p>项目缘起于蒙古田野调查、旧书店购书和翻译实践。许多口传作品并不只存在于书页，也存在于歌者的停顿、讲述者的语气、旧书页边的铅笔标记和不同版本之间的微小差异里。</p>
          <p>未来计划包括持续录入史诗、民歌、长调、祝词、谚语和古籍资料，建立版本比较、地理索引、时间轴与开放的读者建议审核机制。</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
