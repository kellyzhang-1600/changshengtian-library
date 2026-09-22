import type { TextRecord } from "@/lib/types";

export function getCitations(text: TextRecord) {
  const title = text.title.zh;
  const publication = text.publication || "未刊资料";
  const pages = text.pages ? `, ${text.pages}` : "";
  const period = text.period.trim() ? ` (${text.period.trim()}).` : ".";

  return {
    chicago: `《${title}》。${publication}${pages}。长生天文库。`,
    apa: `${title}${period} 长生天文库. ${publication}${pages}.`,
    mla: `“${title}.” 长生天文库, ${publication}${pages}.`
  };
}
