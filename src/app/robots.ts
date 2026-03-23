import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lithira-jayanaka.vercel.app/sitemap.xml",
    host: "https://lithira-jayanaka.vercel.app",
  };
}
