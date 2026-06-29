import type { TextRecord } from "@/lib/types";

export function getCitations(text: TextRecord) {
  const title = text.title.zh;
  const publication = text.publication || "未刊资料";
  const pages = text.pages ? `, ${text.pages}` : "";

  return {
    chicago: `《${title}》。${publication}${pages}。长生天文库。`,
    apa: `${title}. (${text.period}). 长生天文库. ${publication}${pages}.`,
    mla: `“${title}.” 长生天文库, ${publication}${pages}.`
  };
}
