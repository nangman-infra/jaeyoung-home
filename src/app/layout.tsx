import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { profileLinks } from "@/data/profile";
import "./globals.css";

const SITE_URL = "https://jaeyoung.nangman.cloud";
const SITE_NAME = "유재영 | Portfolio";
const SITE_DESCRIPTION =
  "AI와 웹 기술로 비즈니스 문제를 해결하는 개발자 유재영의 한국어/영어 포트폴리오입니다.";
const ANALYTICS_SCRIPT_URL = "https://analytics.nangman.cloud/api/script.js";
const ANALYTICS_SITE_ID = "undefined";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "유재영",
    "Jaeyoung Yu",
    "포트폴리오",
    "Portfolio",
    "TypeScript",
    "Next.js",
    "LLM",
    "RAG",
    "Local LLM",
    "Software Architecture",
    "Database",
    "AI Engineer",
    "Web Developer",
  ],
  authors: [{ name: "유재영", url: SITE_URL }],
  creator: "유재영",
  publisher: "유재영",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: `${SITE_URL}/Jaeyoung.jpg`,
        width: 1200,
        height: 1200,
        alt: "유재영 프로필 사진",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/Jaeyoung.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0064FF",
  colorScheme: "light",
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "유재영",
  alternateName: "Jaeyoung Yu",
  url: SITE_URL,
  image: `${SITE_URL}/Jaeyoung.jpg`,
  jobTitle: "AI와 웹 기술로 비즈니스 문제를 해결하는 개발자",
  alumniOf: "Hanbat National University",
  sameAs: [profileLinks.github, profileLinks.blog, profileLinks.linkedin],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ["ko-KR", "en-US"],
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script
          src={ANALYTICS_SCRIPT_URL}
          data-site-id={ANALYTICS_SITE_ID}
          strategy="afterInteractive"
        />
        <Script
          id="person-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <Script
          id="website-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </body>
    </html>
  );
}
