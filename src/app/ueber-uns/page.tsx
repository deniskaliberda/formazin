import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/energie/JsonLd";
import { getTeam } from "@/lib/content";
import { KERN_PREVIEW } from "@/lib/kernPreview";

const SITE = "https://www.formazin-partner.de";
const ORG_ID = `${SITE}/#localbusiness`;

export const metadata: Metadata = {
  title: "Über uns – Planungsbüro seit 1990",
  description:
    "Lernen Sie Dr.-Ing. Formazin & Partner mbB kennen: Architekten und Ingenieure mit über 30 Jahren Erfahrung in Berlin und Brandenburg.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    images: [
      {
        url: "/images/teamfoto-über-uns.jpg",
        width: 1200,
        height: 630,
        alt: "Das Team von Dr.-Ing. Formazin & Partner mbB",
      },
    ],
  },
};

export default function UeberUnsPage() {
  // Team-Kurzprofile aus content/team/ (vom Büro bearbeitbar) — Basis für
  // die Personen-Sektion + Person-Schema (E-E-A-T, Architektur-Brief §5).
  const team = getTeam();

  const personSchema = {
    "@context": "https://schema.org",
    "@graph": team.map((person) => ({
      "@type": "Person",
      "@id": `${SITE}/#${person.slug}`,
      name: person.meta.name,
      jobTitle: person.meta.rolle,
      worksFor: { "@id": ORG_ID },
      description: person.intro.join(" "),
    })),
  };

  return (
    <>
      <Navigation />

      {/* Über uns — Bild + Text symmetrisch nebeneinander */}
      <section className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
            {/* Links: Teamfoto */}
            <div className="relative aspect-[2001/2132] overflow-hidden rounded-[2px]">
              <Image
                src="/images/team-hochformat.jpg"
                alt="Team von Dr.-Ing. Formazin & Partner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Rechts: Text */}
            <div className="flex flex-col justify-center">
              <h1 className="font-heading text-3xl font-bold text-[#2d4196] md:text-4xl lg:text-5xl">
                Seit 1990. Für Menschen.
              </h1>

              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                <p>
                  Seit 1990 gestalten wir Räume für Menschen – mit Kreativität,
                  Fachkompetenz und dem Anspruch, Bleibendes zu schaffen.
                </p>
                <p>
                  Als familiäres Unternehmen stehen wir seit über drei Jahrzehnten
                  für eines: partnerschaftliche Zusammenarbeit auf Augenhöhe – mit
                  unseren Auftraggebern und allen am Bau Beteiligten. Was einst im
                  kleinen Kreis begann, ist heute ein gewachsenes Team in der dritten
                  Generation. Neue Ideen und Perspektiven haben uns weiterentwickelt –
                  unseren Anspruch jedoch nie verändert: Räume zu schaffen die überzeugen
                  und Auftraggeber, die sich von Anfang bis Ende gut aufgehoben fühlen.
                </p>
                <p>
                  Unsere langjährige Erfahrung und umfassende Fachkompetenz ermöglichen
                  es uns, komplexe Bauprojekte ganzheitlich zu begleiten – von der ersten
                  Idee bis zur fertigen Umsetzung. Das ist die Voraussetzung, um kreativ
                  und verantwortungsvoll an der Gestaltung von Räumen zu arbeiten.
                </p>
                <p>
                  Offenheit und Freude an der Umsetzung von Projekten prägen unsere
                  Firmenkultur seit über 30 Jahren. Wir hinterfragen, lernen und entwickeln
                  uns weiter. Denn nur wer offen bleibt, kann wirklich gute Lösungen finden.
                </p>
                <p>
                  Verlässlichkeit, Respekt und ein fairer Umgang sind für uns die Grundlage
                  jeder guten Zusammenarbeit. Wir denken komplex – kommunizieren einfach.
                  Ästhetik, Funktion, Kosten, rechtliche Rahmenbedingungen, Bauherrenwünsche –
                  wir denken alles mit. Und erklären es verständlich.
                </p>
                <p className="font-semibold">
                  Als familiengeführtes Unternehmen in der dritten Generation wissen wir:
                  Erfahrung und frische Ideen sind unsere Stärke. Wer uns vertraut, weiß:
                  Wir geben alles für ein gutes Ergebnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team — benannte Personen mit klaren Zuständigkeiten (E-E-A-T) */}
      <section className="bg-[#f3f4f6] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
            Team
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-black text-[#1e293b] md:text-3xl lg:text-4xl">
            Vier Menschen, klare Zuständigkeiten
          </h2>
          <p className="mt-4 max-w-3xl font-sans text-base text-[#1e293b]/80 md:text-lg">
            Bei uns hat jede Leistung ein Gesicht: Wer Ihre Statik rechnet, Ihren
            Brandschutznachweis verantwortet oder Ihre Förderung koordiniert,
            steht hier mit Namen.
          </p>
          {KERN_PREVIEW && (
            <p className="mt-4 inline-block rounded-[2px] border border-dashed border-[#b08900] bg-[#fffbeb] px-4 py-2 font-sans text-sm text-[#5c4400]">
              ENTWURF — Fotos und Kurzprofile werden nach Freigabe durch das Büro final.
            </p>
          )}

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {team.map((person) => (
              <div
                key={person.slug}
                className="flex gap-6 rounded-[2px] border border-[#e2e8f0] bg-white p-6"
              >
                {person.meta.foto ? (
                  <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden rounded-[2px]">
                    <Image
                      src={person.meta.foto}
                      alt={`${person.meta.name} — ${person.meta.rolle}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-32 w-24 flex-shrink-0 items-center justify-center rounded-[2px] border border-dashed border-[#c3cad6] bg-[#f3f4f6] text-center font-sans text-[0.65rem] leading-tight text-[#1e293b]/50"
                    aria-hidden="true"
                  >
                    Foto folgt
                  </div>
                )}
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1e293b]">
                    {person.meta.name}
                  </h3>
                  <p className="mt-0.5 font-sans text-sm font-semibold text-[#2d4196]">
                    {person.meta.rolle}
                  </p>
                  {person.intro.map((p, i) => (
                    <p key={i} className="mt-2 font-sans text-sm leading-relaxed text-[#1e293b]/80">
                      {p}
                    </p>
                  ))}
                  {person.introItems.length > 0 && (
                    <ul className="mt-3 space-y-1" role="list">
                      {person.introItems.map((punkt) => (
                        <li key={punkt} className="flex items-start gap-2">
                          <span
                            className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#2d4196]"
                            aria-hidden="true"
                          />
                          <span className="font-sans text-[0.82rem] text-[#1e293b]/70">
                            {punkt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JsonLd data={personSchema} />

      {/* Trust Section — blaues Banner */}
      <section className="bg-[#2d4196] py-12 md:py-16">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                Seit 1990
              </p>
              <p className="mt-2 font-sans text-sm text-white/70">
                Über 30 Jahre Erfahrung
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                3. Generation
              </p>
              <p className="mt-2 font-sans text-sm text-white/70">
                Familienunternehmen
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                Alles aus einer Hand
              </p>
              <p className="mt-2 font-sans text-sm text-white/70">
                Architektur & Tragwerk
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                Regional verwurzelt
              </p>
              <p className="mt-2 font-sans text-sm text-white/70">
                Berlin-Brandenburg
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
