import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "유재영 | Portfolio",
  description:
    "AI와 웹 기술로 비즈니스 문제를 해결하는 개발자 유재영의 한국어/영어 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
