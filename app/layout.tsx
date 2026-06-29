import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "长生天文库",
  description: "蒙汉英三语蒙古诗歌与口传文学数字档案"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
