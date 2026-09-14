import type { Metadata } from "next";
import Link from "next/link";
import { HeroSplit } from "@/components/energie/HeroSplit";
import { FaqAccordion } from "@/components/energie/FaqAccordion";
import { RelatedLinks } from "@/components/energie/RelatedLinks";
import { JsonLd } from "@/components/energie/JsonLd";
import { Footer } from "@/components/Footer";
import { WAERMESCHUTZ_PATH, waermeschutzFaq } from "@/data/energie/waermeschutz";

const SITE = "https://www.formazin-partner.de";
const HUB = "/leistungen/energieberatung";
const title = "Wärmeschutz und Wärmeschutznachweis verständlich erklärt";
const description = "Wärmeschutz als Thema der Energieberatung: Gebäudehülle, sommerlicher Wärmeschutz, Wärmeschutznachweis und Kosten für Bauvorhaben in Berlin und Brandenburg.";
const container = "mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20";
const linkStyle = "text-[#2d4196] underline underline-offset-4";

export const metadata: Metadata = {
  title: "Wärmeschutz & Wärmeschutznachweis | Energieberatung Formazin",
  description,
  alternates: { canonical: WAERMESCHUTZ_PATH },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: WAERMESCHUTZ_PATH, images: [{ url: "/images/projekte/fassadensanierung-frankfurter-allee/hero.jpg" }] },
};

export default function WaermeschutzPage() {
  return <>
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "WebPage",
      "@id": `${SITE}${WAERMESCHUTZ_PATH}#webpage`, url: `${SITE}${WAERMESCHUTZ_PATH}`,
      name: title, description, inLanguage: "de-DE",
      isPartOf: { "@type": "WebPage", "@id": `${SITE}${HUB}`, name: "Energieberatung" },
      about: { "@type": "Thing", name: "Wärmeschutz" },
    }} />
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: SITE },
        { "@type": "ListItem", position: 2, name: "Energieberatung", item: `${SITE}${HUB}` },
        { "@type": "ListItem", position: 3, name: "Wärmeschutz", item: `${SITE}${WAERMESCHUTZ_PATH}` },
      ],
    }} />
    <HeroSplit consistent eyebrow="Energieberatung · Ratgeber" h1={"Wärmeschutz und Wärmeschutz\u00adnachweis verständlich erklärt"}
      subline="Wie Gebäude Wärme halten, Räume im Sommer geschützt werden und welche Rolle der energetische Nachweis in der Planung spielt. Ein Thema unserer Energieberatung für Berlin und Brandenburg."
      image={{ src: "/images/projekte/fassadensanierung-frankfurter-allee/hero.jpg", alt: "Fassadensanierung Frankfurter Allee in Berlin aus dem Portfolio von Formazin & Partner" }}
      cta={{ label: "Zur Energieberatung", href: HUB }} />
    <main className="energy-review energy-detail hyphens-auto [overflow-wrap:anywhere]">
      <section>
        <div className={container}>
          <nav aria-label="Brotkrümelnavigation" className="mb-8 font-sans text-base">
            <ol className="flex flex-wrap gap-x-3 gap-y-2">
              <li><Link href="/" className={linkStyle}>Startseite</Link></li>
              <li><span aria-hidden="true" className="mr-3">/</span><Link href={HUB} className={linkStyle}>Energieberatung</Link></li>
              <li><span aria-hidden="true" className="mr-3">/</span><span aria-current="page">Wärmeschutz</span></li>
            </ol>
          </nav>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div><h2 className="font-heading text-3xl font-bold">Was bedeutet Wärmeschutz?</h2><p className="font-sans text-lg leading-relaxed text-[#1e293b]/80">Wärmeschutz betrifft die Gebäudehülle: Außenwände, Dach, Fenster und Bauteile zum Erdreich oder zu unbeheizten Räumen. Im Winter geht es um Wärmeverluste, im Sommer um den Wärmeeintrag durch Sonneneinstrahlung.</p></div>
            <div><h2 className="font-heading text-3xl font-bold">Ein Thema der Energieberatung</h2><p className="font-sans text-lg leading-relaxed text-[#1e293b]/80">In unserer Energieberatung betrachten wir die Gebäudehülle im Zusammenhang mit Ihrem Vorhaben. Der Wärmeschutznachweis ist dabei eine konkrete Planungsunterlage. Die Beratung kann außerdem einen Sanierungsfahrplan, Förderfragen und die Begleitung der Umsetzung umfassen.</p></div>
          </div>
        </div>
      </section>
      <section>
        <div className={container}>
          <h2 className="font-heading text-3xl font-bold">Gebäudehülle und Nachweis: die wichtigsten Begriffe</h2>
          <dl className="grid gap-8 font-sans text-lg leading-relaxed text-[#1e293b]/80 md:grid-cols-2 lg:gap-x-16">
            {[
              ["Wärmedurchgang und U-Wert", "Der U-Wert beschreibt den Wärmedurchgang durch ein Bauteil. Je kleiner der Wert, desto weniger Wärme wird bei gleichem Temperaturunterschied durch das Bauteil übertragen."],
              ["Wärmebrücken", "An Anschlüssen und Übergängen kann mehr Wärme nach außen gelangen als in benachbarten Bereichen. Solche Stellen werden bei der energetischen Planung und Berechnung berücksichtigt."],
              ["Sommerlicher Wärmeschutz", "Fensterflächen, Ausrichtung, Verglasung und Verschattung beeinflussen, wie viel Sonnenwärme in die Räume gelangt. Diese Frage ergänzt den Schutz vor Wärmeverlusten."],
              ["Energetischer Nachweis", "Für die Berechnung werden Gebäudedaten und die geplanten Konstruktionen zusammengeführt. Welche Unterlagen erforderlich sind, hängt vom konkreten Bauvorhaben ab."],
            ].map(([term, text]) => <div key={term}><dt className="mb-3 font-heading text-xl font-bold text-[#1e293b]">{term}</dt><dd>{text}</dd></div>)}
          </dl>
          <p className="mt-8 font-sans text-base leading-relaxed text-[#1e293b]/65">Fachliche Grundlagen im geltenden Gesetzestext: <a href="https://www.gesetze-im-internet.de/geg/__11.html" className={linkStyle}>Mindestwärmeschutz (§ 11)</a> und <a href="https://www.gesetze-im-internet.de/geg/__14.html" className={linkStyle}>sommerlicher Wärmeschutz (§ 14)</a>.</p>
        </div>
      </section>
      <section>
        <div className={`${container} grid gap-8 lg:grid-cols-2 lg:gap-16`}>
          <div><h2 className="font-heading text-3xl font-bold">Welche Unterlagen helfen bei der Planung?</h2><p className="font-sans text-lg leading-relaxed text-[#1e293b]/80">Hilfreich sind Grundrisse und Schnitte, Angaben zu Wänden, Dach und Fenstern sowie Unterlagen zu geplanten Änderungen. Vorhandene Nachweise erleichtern die Einordnung. In der Energieberatung klären wir, welche Angaben für Ihr Gebäude noch fehlen.</p></div>
          <div><h2 className="font-heading text-3xl font-bold">Wärmeschutznachweis und Bauantrag</h2><p className="font-sans text-lg leading-relaxed text-[#1e293b]/80">Wir erstellen den energetischen Nachweis im Rahmen unserer Bauantragsplanung. Die Beschreibung dieses Umfangs und die vorhandenen Festpreise finden Sie auf der Seite zum <Link href={`${HUB}/gegnachweis`} className={linkStyle}>GEG-Nachweis im Bauantrag</Link>. Ein separat bestellbarer Online-Nachweis gehört nicht zu diesem Angebot.</p></div>
        </div>
      </section>
      <section><div className={container}><FaqAccordion faq={waermeschutzFaq} heading="Fragen zum Wärmeschutz und zu den Kosten" /></div></section>
      <section><div className={container}><RelatedLinks data={{ heading: "Von der Frage zur passenden Beratung", links: [
        { href: HUB, label: "Energieberatung", description: "Ansprechpartner, Ablauf und Unterstützung für Ihr Vorhaben." },
        { href: `${HUB}/gegnachweis`, label: "GEG-Nachweis im Bauantrag", description: "Umfang und Preise des energetischen Nachweises." },
        { href: `${HUB}/sanierungsfahrplan-isfp`, label: "Sanierungsfahrplan", description: "Energetische Maßnahmen am bestehenden Gebäude ordnen." },
      ] }} /></div></section>
    </main>
    <Footer />
  </>;
}
