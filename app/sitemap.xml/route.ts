import { SITE_CONFIG } from "@/lib/constants";
import { locales } from "@/i18n/config";

export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/chris", changeFrequency: "monthly", priority: 0.8 },
    { path: "/dennis", changeFrequency: "monthly", priority: 0.8 },
    { path: "/vrienden", changeFrequency: "monthly", priority: 0.7 },
    { path: "/lab", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];

  const lastModified = new Date().toISOString();

  const urls = locales.flatMap((locale) =>
    routes.map((route) => {
      const alternates = locales
        .map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}${route.path}" />`
        )
        .join("\n");

      return `  <url>
    <loc>${baseUrl}/${locale}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
${alternates}
  </url>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
