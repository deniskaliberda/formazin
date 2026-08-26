import type { MetadataRoute } from "next";
import { PROJEKTE } from "@/data/projekte";
import { getLeistungen, getWissenArtikel } from "@/lib/content";
import { KERN_PREVIEW } from "@/lib/kernPreview";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.formazin-partner.de";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/leistungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projekte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const energiePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/leistungen/energieberatung`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/leistungen/energieberatung/energieausweis`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/leistungen/energieberatung/sanierungsfahrplan-isfp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/leistungen/energieberatung/kfw-baubegleitung`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/leistungen/energieberatung/foerderberatung-bafa-kfw`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/leistungen/energieberatung/gegnachweis`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/leistungen/energieberatung/berlin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/leistungen/energieberatung/bernau-bei-berlin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/leistungen/energieberatung/eberswalde`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/leistungen/energieberatung/strausberg`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/leistungen/energieberatung/anfrage`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  // KERN-Routen erst nach Go-Live (KERN_PREVIEW=false) in die Sitemap
  const kernPages: MetadataRoute.Sitemap = KERN_PREVIEW
    ? []
    : [
        ...getLeistungen().map((doc) => ({
          url: `${baseUrl}/leistungen/${doc.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.9,
        })),
        { url: `${baseUrl}/wissen`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
        ...getWissenArtikel().map((doc) => ({
          url: `${baseUrl}/wissen/${doc.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        })),
      ];

  const projektPages: MetadataRoute.Sitemap = PROJEKTE.map((projekt) => ({
    url: `${baseUrl}/projekte/${projekt.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...energiePages, ...kernPages, ...projektPages];
}
