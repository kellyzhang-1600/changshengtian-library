insert into public.categories (slug, name_zh, name_mn, name_en, description, sort_order)
values
  ('epic', '英雄史诗', 'Баатарлаг тууль', 'Heroic Epics', '长篇叙事、英雄谱系与口传传统。', 10),
  ('folk-song', '民歌', 'Ардын дуу', 'Folk Songs', '劳动、迁徙、思念与草原生活。', 20),
  ('long-song', '长调', 'Уртын дуу', 'Long Song', '旋律悠长的蒙古族声乐文学。', 30),
  ('blessing', '祝词', 'Ерөөл', 'Blessings', '仪式、婚礼、祭祀与日常祝颂。', 40),
  ('proverb', '谚语', 'Зүйр үг', 'Proverbs', '短句中的经验、伦理与幽默。', 50),
  ('ancient-book', '古籍', 'Хуучин ном', 'Rare Books', '旧书、影印本与版本线索。', 60),
  ('translation-note', '翻译札记', 'Орчуулгын тэмдэглэл', 'Translation Notes', '词义、版本、文化背景与译法选择。', 70)
on conflict (slug) do update set
  name_zh = excluded.name_zh,
  name_mn = excluded.name_mn,
  name_en = excluded.name_en,
  description = excluded.description,
  sort_order = excluded.sort_order;
