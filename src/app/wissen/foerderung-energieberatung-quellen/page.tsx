import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/energie/JsonLd";
import { RelatedLinks } from "@/components/energie/RelatedLinks";
import {
  DownloadSchaltflaechen,
  Kennzahlenzeile,
  Lesehilfe,
  Quellenatlas,
  Quellenpfad,
  VorhabenTabelle,
} from "@/components/wissen/FoerderquellenBlocks";
import { FOERDERQUELLEN } from "@/data/wissen/foerderquellen";
import { formatDatum, ORG_ID, PAGE_URL, quellenAnker, SITE } from "@/lib/foerderquellen";

/**
 * Quellenatlas Förderung und Energieberatung (DESIGN.md, 13.09.2026).
 *
 * Eigenständige, indexierbare Seite unterhalb von /wissen. Der deaktivierte
 * Ratgeber-Hub und die Brandschutz-Entwürfe bleiben davon unberührt: dieser
 * feste Pfad hat Vorrang vor /wissen/[slug], der weiterhin notFound liefert.
 * Keine Client-Komponenten außer der bestehenden Navigation und dem Footer.
 */

const BESCHREIBUNG =
  "Amtliche Quellen zu BEG, BAFA, KfW, Gebäudegesetz und Expertenliste, geprüft am 13.09.2026. Mit Praxishinweisen und Downloads als CSV und SVG.";

export const metadata: Metadata = {
  title: "Quellenatlas Förderung und Energieberatung: amtliche Quellen geprüft",
  description: BESCHREIBUNG,
  alternates: { canonical: FOERDERQUELLEN.path },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title: `${FOERDERQUELLEN.titel} – Formazin & Partner`,
    description: BESCHREIBUNG,
    url: FOERDERQUELLEN.path,
    modifiedTime: FOERDERQUELLEN.geprueft,
  },
};

function Section({
  tone,
  border = false,
  labelledBy,
  children,
}: {
  tone: "white" | "gray";
  border?: boolean;
  labelledBy?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`${tone === "gray" ? "bg-[#f3f4f6]" : "bg-white"} ${
        border ? "border-t border-[#1e293b]/10" : ""
      } py-14 md:py-20`}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">{children}</div>
    </section>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-heading text-2xl font-bold leading-tight text-[#1e293b] md:text-3xl">
      {children}
    </h2>
  );
}

export default function FoerderquellenPage() {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: FOERDERQUELLEN.titel,
    description: BESCHREIBUNG,
    inLanguage: "de",
    dateModified: FOERDERQUELLEN.geprueft,
    isPartOf: { "@type": "WebSite", url: SITE, name: "Dr.-Ing. Formazin & Partner mbB" },
    publisher: { "@id": ORG_ID },
    author: { "@id": ORG_ID },
    about: FOERDERQUELLEN.themenfelder.map((t) => t.titel),
    mainEntity: {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#quellen`,
      name: "Amtliche Quellen zu Förderung und Energieberatung",
      numberOfItems: FOERDERQUELLEN.quellen.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: FOERDERQUELLEN.quellen.map((q, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${q.folio} ${q.titel}`,
        url: `${PAGE_URL}#${quellenAnker(q)}`,
        item: {
          "@type": "WebPage",
          "@id": q.url,
          url: q.url,
          name: q.titel,
          inLanguage: "de",
          publisher: { "@type": "Organization", name: q.herausgeber },
        },
      })),
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Energieberatung",
        item: `${SITE}/leistungen/energieberatung`,
      },
      { "@type": "ListItem", position: 3, name: FOERDERQUELLEN.titel, item: PAGE_URL },
    ],
  };

  return (
    <>
      <JsonLd data={collectionPage} />
      <JsonLd data={breadcrumb} />
      <Navigation />
      {/* Abstand = Höhe der fixierten Navigation (Logo 56/64/80px plus Innenabstand) */}
      <main className="pt-[72px] md:pt-[84px] lg:pt-[100px]">
        {/* 1 · Einstieg */}
        <Section tone="gray">
          <div className="grid gap-10 xl:grid-cols-[1.1fr_minmax(0,1fr)] xl:gap-16">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
                {FOERDERQUELLEN.kennzeile}
              </p>
              <h1 className="mt-3 font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
                {FOERDERQUELLEN.titel}
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
                Zehn amtliche Quellen zu Bundesförderung, Energieberatung, Gebäudegesetz und
                Expertenliste, nach Themenfeldern geordnet und am{" "}
                <time dateTime={FOERDERQUELLEN.geprueft}>{formatDatum(FOERDERQUELLEN.geprueft)}</time>{" "}
                geprüft. Jeder Eintrag führt zur ausgebenden Stelle und sagt, wofür er in der Praxis
                taugt.
              </p>
              <Kennzahlenzeile />
              <DownloadSchaltflaechen />
            </div>
            <Quellenpfad stationen={FOERDERQUELLEN.pfad} />
          </div>
        </Section>

        {/* 2 · Lesehilfe */}
        <Section tone="white" labelledBy="lesehilfe">
          <H2 id="lesehilfe">So lesen Sie den Atlas</H2>
          <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/75">
            Der Atlas ist ein nummeriertes Verzeichnis, kein Ratgeber mit Förderversprechen. Die
            Einträge sind gleich aufgebaut, damit Sie beim Vergleichen nicht suchen müssen.
          </p>
          <div className="mt-10">
            <Lesehilfe />
          </div>
        </Section>

        {/* 3 · Quellenatlas */}
        <Section tone="gray" border labelledBy="quellenatlas">
          <H2 id="quellenatlas">Der Quellenatlas</H2>
          <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/75">
            Sechs Themenfelder, zehn Folios. Alle Links führen zu BMWE, BAFA, KfW, Gesetze im
            Internet oder zur Energieeffizienz-Expertenliste.
          </p>
          <div className="mt-10">
            <Quellenatlas />
          </div>
        </Section>

        {/* 4 · Vom Vorhaben zur Quelle */}
        <Section tone="white" border labelledBy="vorhaben">
          <H2 id="vorhaben">Vom Vorhaben zur Quelle</H2>
          <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/75">
            Die Tabelle ordnet typische Anliegen den Folios zu und nennt die Seite, auf der wir die
            Leistung dazu beschreiben.
          </p>
          <div className="mt-8">
            <VorhabenTabelle zeilen={FOERDERQUELLEN.vorhaben} />
          </div>
        </Section>

        {/* 5 · Hinweis und Kontakt */}
        <Section tone="gray" border labelledBy="hinweis">
          <H2 id="hinweis">Hinweis und Kontakt</H2>
          <div className="mt-4 max-w-3xl space-y-3 font-sans text-lg leading-relaxed text-[#1e293b]/80">
            <p>
              Diese Seite ist keine Förderzusage und keine Aussage zur Förderfähigkeit eines
              bestimmten Vorhabens. Über Anträge entscheiden BAFA, KfW und die zuständigen Behörden
              nach den Regeln, die zum Zeitpunkt des Antrags gelten.
            </p>
            <p>
              Wenn Sie wissen wollen, welche Quelle für Ihr Gebäude zählt, sprechen Sie uns an. Wir
              ordnen ein, was passt, und stellen die Reihenfolge von Beratung, Antrag und Auftrag
              sicher.
            </p>
          </div>
          <div className="mt-10">
            <RelatedLinks
              data={{
                links: [
                  {
                    href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
                    label: "Sanierungsfahrplan (iSFP)",
                    description: "Geförderte Energieberatung mit Fahrplan für Ihr Wohnhaus.",
                    kind: "service",
                  },
                  {
                    href: "/leistungen/energieberatung/kfw-baubegleitung",
                    label: "KfW-Baubegleitung",
                    description: "Antrag, technischer Nachweis und Verwendungsnachweis.",
                    kind: "service",
                  },
                  {
                    href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
                    label: "Förderberatung BAFA und KfW",
                    description: "Welche Schiene passt und in welcher Reihenfolge beantragt wird.",
                    kind: "service",
                  },
                  {
                    href: "/anfrage/foerderstrategie-bestand",
                    label: "Anfrage für Unternehmen und Bestand",
                    description: "Förderstrategie für mehrere Gebäude oder Nichtwohngebäude.",
                    kind: "service",
                  },
                ],
              }}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
