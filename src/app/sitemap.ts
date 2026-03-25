import type { MetadataRoute } from "next";
import { PROJEKTE } from "@/data/projekte";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://formazin-partner.de";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/projekte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const projektPages: MetadataRoute.Sitemap = PROJEKTE.map((projekt) => ({
    url: `${baseUrl}/projekte/${projekt.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projektPages];
}
