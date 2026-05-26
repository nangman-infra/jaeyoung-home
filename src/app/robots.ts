import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jaeyoung.nangman.cloud/sitemap.xml",
    host: "https://jaeyoung.nangman.cloud",
  };
}
