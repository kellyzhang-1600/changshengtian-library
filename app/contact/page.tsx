import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SuggestionForm } from "@/components/suggestion-form";
import { getTexts } from "@/lib/repository";

export default async function ContactPage() {
  const texts = await getTexts();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h1 className="font-serif text-5xl text-archive">提交翻译建议</h1>
          <p className="mt-5 text-base leading-8 text-muted">
            网站不开放评论区。读者可以提交翻译建议、版本线索或出处补充，所有内容会进入后台审核，审核通过后再更新到文库。
          </p>
        </div>
        <SuggestionForm works={texts.map((text) => ({ slug: text.slug, title: text.title.zh }))} />
      </main>
      <SiteFooter />
    </>
  );
}
