import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { KERN_AUTOREN } from "@/data/kern/autoren";
import { getProjektBySlug, PROJEKTE } from "@/data/projekte";
import { findSection, getWissen, metaList, type ContentDoc } from "@/lib/content";
import { AblaufSteps, CtaBlock, EnergieBruecke, EntwurfBand, FaqSection, PunktListe, TextParas } from "./KernBlocks";
import { LeistungHashEinstieg } from "./LeistungHashEinstieg";

const CONTAINER = "mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20";
const AUSWAHL = [
  { slug: "architektur", titel: "Architektur" },
  { slug: "brandschutz", titel: "Brandschutz" },
  { slug: "tragwerksplanung", titel: "Tragwerksplanung" },
  { slug: "generalplanung", titel: "Generalplanung" },
];

/** Vertraute Leistungswahl und ausführlicher Markdown-Inhalt im Hausstil. */
export function LeistungAnsicht({ doc }: { doc: ContentDoc }) {
  const leistungsbild = findSection(doc, "Leistungsbild");
  const abschnitte = doc.sections.filter((section) => section !== leistungsbild);
  const titel = AUSWAHL.find((item) => item.slug === doc.slug)?.titel ?? doc.meta.kurz_titel;
  const bild = doc.meta.hero_bild || metaList(doc, "hero_bilder")[0] || doc.meta.bild;
  const bildProjekt = PROJEKTE.find((projekt) => projekt.image === bild || projekt.galerie.includes(bild));
  const projekte = metaList(doc, "projekte")
    .map(getProjektBySlug)
    .filter((projekt): projekt is NonNullable<typeof projekt> => Boolean(projekt));
  const ratgeber = metaList(doc, "ratgeber")
    .map(getWissen)
    .filter((artikel): artikel is NonNullable<typeof artikel> => Boolean(artikel));
  const autor = KERN_AUTOREN[doc.meta.autor] ?? KERN_AUTOREN.buero;

  return (
    <>
      <Navigation />
      <LeistungHashEinstieg />
      <main className="pt-28 md:pt-32">
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
                  className={`flex min-h-12 items-center rounded-[2px] px-4 py-3 text-center font-heading text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d4196] md:min-h-14 md:px-5 md:text-base ${doc.slug === item.slug ? "bg-[#2d4196] text-white" : "bg-white text-[#1e293b] hover:bg-[#f3f4f6] hover:text-[#2d4196]"}`}
                >
                  {item.titel}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section aria-labelledby="leistung-titel" className="bg-[#f3f4f6] py-10 md:py-14 lg:py-16">
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
              <a href="#leistung-details" className="mt-8 inline-flex min-h-11 items-center font-sans text-base font-semibold text-[#2d4196] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Mehr über {titel} erfahren ↓</a>
            </div>
          </div>
        </section>

        <article id="leistung-details" className="scroll-mt-28 bg-white py-12 md:py-16">
          <div className={CONTAINER}>
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">{doc.meta.titel}</h2>
              <TextParas paras={doc.intro} />
              {doc.introItems.length > 0 && <PunktListe items={doc.introItems} />}
              {abschnitte.map((section) => (
                <section key={section.heading} className="mt-10 border-t border-[#1e293b]/10 pt-8 md:mt-12">
                  <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">{section.heading}</h2>
                  <TextParas paras={section.paras} />
                  {section.items.length > 0 && <PunktListe items={section.items} />}
                  {section.heading === "Häufige Fragen" ? <FaqSection fragen={section.subs} /> : section.heading === "Ablauf" ? <AblaufSteps steps={section.subs} /> : section.subs.map((sub) => (
                    <div key={sub.title} className="mt-6">
                      <h3 className="font-heading text-lg font-bold text-[#1e293b]">{sub.title}</h3>
                      <TextParas paras={sub.body} />
                    </div>
                  ))}
                </section>
              ))}
              {doc.meta.energie_bruecke === "ja" && <EnergieBruecke />}
              {projekte.length > 0 && <section className="mt-10 border-t border-[#1e293b]/10 pt-8">
                <h2 className="font-heading text-xl font-bold md:text-2xl">Projekte aus unserem Büro</h2>
                <ul className="mt-4 space-y-3">
                  {projekte.map((projekt) => <li key={projekt.slug}><Link href={`/projekte/${projekt.slug}`} className="font-sans text-lg text-[#2d4196] underline underline-offset-4">{projekt.name}</Link><span className="font-sans text-base text-[#1e293b]/70"> · {projekt.ort}</span></li>)}
                </ul>
              </section>}
              {ratgeber.length > 0 && <section className="mt-10 border-t border-[#1e293b]/10 pt-8">
                <h2 className="font-heading text-xl font-bold md:text-2xl">Ratgeber zum Thema</h2>
                <ul className="mt-4 space-y-4">
                  {ratgeber.map((artikel) => <li key={artikel.slug}><Link href={`/wissen/${artikel.slug}`} className="font-sans text-lg text-[#2d4196] underline underline-offset-4">{artikel.meta.titel}</Link></li>)}
                </ul>
              </section>}
              <aside className="mt-10 border-t border-[#1e293b]/10 pt-8" aria-label="Fachlich verantwortlich">
                <p className="font-sans text-sm text-[#1e293b]/65">Fachlich verantwortlich</p>
                <p className="mt-2 font-heading text-lg font-bold">{autor.name}</p>
                <p className="mt-1 font-sans text-base text-[#2d4196]">{autor.rolle}</p>
                <p className="mt-2 font-sans text-base text-[#1e293b]/80">{autor.quali}</p>
              </aside>
              <CtaBlock titel={doc.meta.cta_titel ?? "Ihr Vorhaben besprechen?"} text={doc.meta.cta_text ?? "Schildern Sie uns kurz Ihr Projekt — wir melden uns mit einer ersten Einschätzung."} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
