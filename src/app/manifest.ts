import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "유재영 | Portfolio",
    short_name: "Jaeyoung",
    description: "AI와 웹 기술로 비즈니스 문제를 해결하는 개발자 유재영의 포트폴리오",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fc",
    theme_color: "#0064FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
