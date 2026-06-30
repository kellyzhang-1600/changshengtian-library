update public.categories
set name_mn = case slug
  when 'epic' then 'Баатарлаг тууль'
  when 'folk-song' then 'Ардын дуу'
  when 'long-song' then 'Уртын дуу'
  when 'blessing' then 'Ерөөл'
  when 'proverb' then 'Зүйр үг'
  when 'ancient-book' then 'Хуучин ном'
  when 'translation-note' then 'Орчуулгын тэмдэглэл'
  else name_mn
end
where slug in (
  'epic',
  'folk-song',
  'long-song',
  'blessing',
  'proverb',
  'ancient-book',
  'translation-note'
);

update public.site_pages
set
  title_mn = 'Төслийн тухай',
  body_mn = 'Чаншэнтянь номын сан нь Монгол яруу найраг ба аман зохиолыг монгол, хятад, англи хэлээр танилцуулах нийтийн ашиг тусын цахим хүмүүнлэгийн төсөл юм.

Төсөл нь Монгол дахь хээрийн судалгаа, Улаанбаатарын хуучин номын дэлгүүрүүдээс ном цуглуулах явц, орчуулгын удаан дадлаас үүдэн эхэлсэн.

Цаашид баатарлаг тууль, ардын дуу, уртын дуу, ерөөл, зүйр үг, хуучин ном, хувилбарын харьцуулалт, газар зүйн индекс, цаг хугацааны шугам, уншигчийн саналыг хянан нийтлэх тогтолцоог хөгжүүлнэ.',
  updated_at = now()
where slug = 'about';
