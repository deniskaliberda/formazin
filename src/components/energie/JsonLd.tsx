import type { EnergiePageContent } from "@/data/energie/types";

/**
 * Basis-URL des Live-Auftritts (identisch zu metadataBase in layout.tsx).
 */
const SITE = "https://www.formazin-partner.de";

/**
 * @id des globalen LocalBusiness-Knotens (in src/app/layout.tsx als
 * "@id" gesetzt). Seiten-Schemas referenzieren das Büro nur per @id und
 * duplizieren die Org-/Adressdaten NICHT.
 */
const ORG_ID = `${SITE}/#localbusiness`;

/** Stabile @id für Feith Formazin als Person-Knoten (E-E-A-T-Autor). */
const FEITH_ID = `${SITE}/#feith`;

/**
 * Kleiner Helper: rendert ein beliebiges JSON-Objekt als
 * <script type="application/ld+json">.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Service-Schema. Der Anbieter wird per @id auf das globale LocalBusiness
 * referenziert (kein Duplikat der Adresse).
 */
export function buildServiceSchema(content: EnergiePageContent) {
  const url = `${SITE}${content.meta.slug}`;
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: content.serviceType,
    name: content.h1,
    description: content.meta.metaDescription,
    url,
    provider: { "@id": ORG_ID },
  };

  if (content.areaServed?.length) {
    schema.areaServed = content.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    }));
  }

  if (content.offers) {
    schema.offers = {
      "@type": "AggregateOffer",
      priceCurrency: content.offers.priceCurrency,
      lowPrice: content.offers.lowPrice,
      highPrice: content.offers.highPrice,
      offerCount: content.offers.offerCount,
    };
  }

  return schema;
}

/**
 * Person-Schema für den verantwortlichen Energie-Effizienz-Experten.
 * Baut die Credentials aus der EE-Experten-/BAFA-Listung.
 */
export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FEITH_ID,
    name: "Feith Formazin",
    jobTitle: "Energie-Effizienz-Experte / Bauingenieur",
    worksFor: { "@id": ORG_ID },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "HTWK Leipzig",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "M.Sc. Bauingenieurwesen",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory:
          "Gelisteter Energie-Effizienz-Experte (Bund), KfW + BAFA, Wohn- und Nichtwohngebäude",
        identifier: "EB163129",
      },
    ],
  };
}

/**
 * BreadcrumbList aus den Content-Breadcrumbs.
 */
export function buildBreadcrumbSchema(content: EnergiePageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: content.breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}
