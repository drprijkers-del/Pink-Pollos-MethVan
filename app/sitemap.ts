import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/chris", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/dennis", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/vrienden", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/lab", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route.path}`])
          ),
        },
      });
    }
  }

  return sitemapEntries;
}
