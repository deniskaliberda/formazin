import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { KERN_AUTOREN } from "@/data/kern/autoren";
import { getProjektBySlug, PROJEKTE } from "@/data/projekte";
import { findSection, metaList, type ContentDoc } from "@/lib/content";
import { AblaufSteps, CtaBlock, EnergieBruecke, EntwurfBand, FaqSection } from "./KernBlocks";
import { renderInline } from "@/components/energie/richText";
import { LeistungsSymbol, PlanungsZusammenhang } from "./LeistungGrafik";
import { LeistungHashEinstieg } from "./LeistungHashEinstieg";

// HOAI Anlage 10, Leistungsbild Gebäude und Innenräume. Zuordnung nach Inhalt,
// nicht nach Position: Änderungen der Reihenfolge ändern keine Leistungsphase.
const ARCHITEKTUR_PHASEN: Record<string, string> = {
  "Grundlagen und Vorentwurf": "HOAI LPH 1–2",
  "Entwurfs- und Genehmigungsplanung": "HOAI LPH 3–4",
  "Ausführungsplanung": "HOAI LPH 5",
  "Vergabe und Bauüberwachung": "HOAI LPH 6–8",
};

const CONTAINER = "mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20";
const AUSWAHL = [
  { slug: "architektur", titel: "Architektur" },
  { slug: "brandschutz", titel: "Brandschutz" },
  { slug: "tragwerksplanung", titel: "Tragwerksplanung" },
  { slug: "generalplanung", titel: "Generalplanung" },
  { slug: "energieberatung", titel: "Energieberatung" },
];

/** Vertraute Leistungswahl und ausführlicher Markdown-Inhalt im Hausstil. */
export function LeistungAnsicht({ doc }: { doc: ContentDoc }) {
  const leistungsbild = findSection(doc, "Leistungsbild");
  const faq = findSection(doc, "Häufige Fragen");
  const abschnitte = doc.sections.filter((section) => section !== leistungsbild && section !== faq && !["Für wen", "Warum Formazin & Partner"].includes(section.heading));
  const hatZusammenhang = doc.slug === "generalplanung";
  const bandFarbe = (index: number) => index % 2 === 0 ? "bg-white" : "bg-[#f3f4f6]";
  const anzahlFachabschnitte = abschnitte.length + (hatZusammenhang ? 1 : 0);
  const titel = AUSWAHL.find((item) => item.slug === doc.slug)?.titel ?? doc.meta.kurz_titel;
  const bild = doc.meta.hero_bild || metaList(doc, "hero_bilder")[0] || doc.meta.bild;
  const bildProjekt = PROJEKTE.find((projekt) => projekt.image === bild || projekt.galerie.includes(bild));
  const projekte = metaList(doc, "projekte")
    .map(getProjektBySlug)
    .filter((projekt): projekt is NonNullable<typeof projekt> => Boolean(projekt));
  const zeigtVerantwortlichen = doc.slug !== "generalplanung";
  const autoren = metaList(doc, "autor").map((key) => KERN_AUTOREN[key] ?? KERN_AUTOREN.buero);

  return (
    <>
      <Navigation />
      <LeistungHashEinstieg />
      <main className="service-review pt-28 md:pt-32">
        <EntwurfBand />
        <section id="leistungen-content" className="scroll-mt-28 bg-white pt-8 pb-8 md:pb-10">
          <div className={CONTAINER}>
            <h1 className="mb-8 text-center font-heading text-3xl font-bold md:text-4xl lg:text-5xl">Leistungen</h1>
            <nav aria-label="Leistung auswählen" className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {AUSWAHL.map((item) => (
                <Link
                  key={item.slug}
                  href={`/leistungen/${item.slug}`}
                  aria-current={doc.slug === item.slug ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-[2px] px-4 py-3 text-center font-heading text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d4196] md:min-h-14 md:px-5 md:text-lg ${doc.slug === item.slug ? "bg-[#2d4196] text-white" : "bg-white text-[#1e293b] hover:bg-[#f3f4f6] hover:text-[#2d4196]"}`}
                >
                  {item.titel}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section aria-labelledby="leistung-titel" className="bg-[#f3f4f6] py-8 md:py-10">
          <div className={`${CONTAINER} grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12`}>
            <figure className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] lg:max-h-[460px]">
                <Image src={bild} alt={bildProjekt ? `${bildProjekt.name}, ${bildProjekt.ort}` : "Projekt aus dem Portfolio von Formazin & Partner"} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              {bildProjekt && <figcaption className="mt-3 font-sans text-sm text-[#1e293b]/65">{bildProjekt.name} · {bildProjekt.ort}</figcaption>}
            </figure>
            <div className="min-w-0">
              <h2 id="leistung-titel" className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl lg:text-4xl">{titel}</h2>
              <TextParas paras={[doc.meta.kurz]} />
              {leistungsbild && <>
                <TextParas paras={leistungsbild.paras} />
                <PunktListe items={leistungsbild.items} />
              </>}
              <Link href="/#kontakt" className="mt-8 inline-flex min-h-12 items-center rounded-[2px] bg-[#2d4196] px-6 py-3 font-heading text-base font-semibold text-white transition-colors hover:bg-[#243a7a]">Kontakt aufnehmen</Link>
            </div>
          </div>
        </section>

        <article id="leistung-details" className="scroll-mt-28 bg-white">
          {hatZusammenhang && <section className="bg-white py-8 md:py-10">
            <div className={CONTAINER}>
              <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">Fachplanungen zusammenführen</h2>
              <PlanungsZusammenhang generalplanung={doc.slug === "generalplanung"} />
            </div>
          </section>}
          {abschnitte.map((section, index) => (
            <section key={section.heading} className={`py-8 md:py-10 ${bandFarbe(index + (hatZusammenhang ? 1 : 0))}`}>
              <div className={CONTAINER}>
                <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">{section.heading}</h2>
                <TextParas paras={section.paras} wide />
                {section.items.length > 0 && <PunktListe items={section.items} columns />}
                {section.heading === "Ablauf" ? <AblaufSteps steps={section.subs.map((step) => ({ ...step, phaseLabel: doc.slug === "architektur" ? ARCHITEKTUR_PHASEN[step.title] : undefined }))} compact /> : <div className={`mt-6 grid gap-6 md:grid-cols-2 ${section.heading === "Bauweisen" ? "lg:grid-cols-4" : ""}`}>{section.subs.map((sub) => (
                  <div key={sub.title} className="border-t-2 border-[#2d4196]/25 bg-[#f3f4f6] p-5 md:p-6">
                    <LeistungsSymbol titel={sub.title} />
                    <h3 className="font-heading text-xl font-bold text-[#2d4196]">{sub.title}</h3>
                    <TextParas paras={sub.body} />
                  </div>
                ))}</div>}
              </div>
            </section>
          ))}
          <div className={`${bandFarbe(anzahlFachabschnitte)} py-8 md:py-10`}>
          <div className={CONTAINER}>
              {doc.meta.energie_bruecke === "ja" && <EnergieBruecke />}
              <div className={`grid gap-8 ${zeigtVerantwortlichen ? "lg:grid-cols-2" : ""}`}>
              {projekte.length > 0 && <section>
                <h2 className="font-heading text-xl font-bold md:text-2xl">Projekte aus unserem Büro</h2>
                <ul className="mt-4 space-y-3">
                  {projekte.map((projekt) => <li key={projekt.slug}><Link href={`/projekte/${projekt.slug}`} className="font-sans text-lg text-[#2d4196] underline underline-offset-4">{projekt.name}</Link><span className="font-sans text-base text-[#1e293b]/70"> · {projekt.ort}</span></li>)}
                </ul>
              </section>}
              {zeigtVerantwortlichen && <aside className="grid gap-8" aria-label="Fachlich verantwortlich">
                {autoren.map((autor) => <div key={autor.key} className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                {autor.foto && <div className="relative h-48 w-36 shrink-0"><Image src={autor.foto.src} alt={autor.foto.alt} fill className="object-contain object-left" sizes="144px" /></div>}
                <div className="max-w-3xl">
                  <p className="font-sans text-base text-[#1e293b]/65">Fachlich verantwortlich</p>
                  <p className="mt-2 font-heading text-2xl font-bold">{autor.name}</p>
                  <p className="mt-1 font-sans text-lg text-[#2d4196]">{autor.rolle}</p>
                  <p className="mt-2 font-sans text-lg leading-relaxed text-[#1e293b]/80">{autor.quali}</p>
                </div>
                </div>)}
              </aside>}
              </div>
              <CtaBlock wide contactOnly titel={doc.meta.cta_titel ?? "Ihr Vorhaben besprechen?"} text={doc.meta.cta_text ?? "Schildern Sie uns kurz Ihr Projekt. Wir melden uns mit einer ersten Einschätzung."} />
          </div>
          </div>
          {faq && <section className={`border-t border-[#1e293b]/10 ${bandFarbe(anzahlFachabschnitte + 1)} py-8 md:py-10`} aria-labelledby="faq-titel">
            <div className={CONTAINER}>
              <h2 id="faq-titel" className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">{faq.heading}</h2>
              <TextParas paras={faq.paras} />
              <FaqSection fragen={faq.subs} wide />
            </div>
          </section>}
        </article>
      </main>
      <Footer />
    </>
  );
}

function TextParas({ paras, columns = false, wide = false }: { paras: string[]; columns?: boolean; wide?: boolean }) {
  return <div className={columns && paras.length > 1 ? "grid gap-x-10 md:grid-cols-2" : wide ? "w-full" : "max-w-[85ch]"}>
    {paras.map((p, i) => <p key={i} className="mt-4 font-sans text-lg leading-relaxed text-[#1e293b]/85">{renderInline(p)}</p>)}
  </div>;
}

function PunktListe({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return <ul className={`mt-5 grid gap-x-8 gap-y-3 ${columns ? "sm:grid-cols-2 lg:grid-cols-4" : ""}`}>
    {items.map((item) => <li key={item} className="flex items-start gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d4196]" /><span className="font-sans text-lg leading-relaxed text-[#1e293b]">{renderInline(item)}</span></li>)}
  </ul>;
}
