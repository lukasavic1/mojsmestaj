import type { MetadataRoute } from "next";
import { locales } from "../lib/i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "sr" ? 1 : 0.8,
  }));
}
