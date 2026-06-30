create table if not exists public.site_pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_zh text,
  title_mn text,
  title_en text,
  body_zh text,
  body_mn text,
  body_en text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.site_pages enable row level security;

drop policy if exists "Public read site_pages" on public.site_pages;
create policy "Public read site_pages"
on public.site_pages
for select
using (true);

drop policy if exists "Authenticated admins manage site_pages" on public.site_pages;
create policy "Authenticated admins manage site_pages"
on public.site_pages
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

insert into public.site_pages (
  slug,
  title_zh,
  title_mn,
  title_en,
  body_zh,
  body_mn,
  body_en
)
values (
  'about',
  '关于项目',
  'Төслийн тухай',
  'About the Project',
  '长生天文库是一个公益性的数字人文项目，目标是建立蒙汉英三语蒙古诗歌与口传文学数字阅读平台。

项目缘起于蒙古田野调查、旧书店购书和翻译实践。许多口传作品并不只存在于书页，也存在于歌者的停顿、讲述者的语气、旧书页边的铅笔标记和不同版本之间的微小差异里。

未来计划包括持续录入史诗、民歌、长调、祝词、谚语和古籍资料，建立版本比较、地理索引、时间轴与开放的读者建议审核机制。',
  'Чаншэнтянь номын сан нь Монгол яруу найраг ба аман зохиолыг монгол, хятад, англи хэлээр танилцуулах нийтийн ашиг тусын цахим хүмүүнлэгийн төсөл юм.

Төсөл нь Монгол дахь хээрийн судалгаа, Улаанбаатарын хуучин номын дэлгүүрүүдээс ном цуглуулах явц, орчуулгын удаан дадлаас үүдэн эхэлсэн.

Цаашид баатарлаг тууль, ардын дуу, уртын дуу, ерөөл, зүйр үг, хуучин ном, хувилбарын харьцуулалт, газар зүйн индекс, цаг хугацааны шугам, уншигчийн саналыг хянан нийтлэх тогтолцоог хөгжүүлнэ.',
  'Changshengtian Library is a public digital humanities project for Mongolian poetry and oral literature in Mongolian, Chinese, and English.

The project grew from fieldwork in Mongolia, collecting books in Ulaanbaatar secondhand bookstores, and the slow practice of translation.

Future work includes adding epics, folk songs, long songs, blessings, proverbs, rare books, version comparison, geographic indexes, timelines, and reviewed reader suggestions.'
)
on conflict (slug) do update set
  title_zh = excluded.title_zh,
  title_mn = excluded.title_mn,
  title_en = excluded.title_en,
  body_zh = excluded.body_zh,
  body_mn = excluded.body_mn,
  body_en = excluded.body_en,
  updated_at = now();
