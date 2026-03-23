import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />

      {/* Über uns — Bild + Text nebeneinander */}
      <section className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_6fr] lg:items-center lg:gap-16 xl:gap-20">
            {/* Links: Hochformat-Bild */}
            <div className="relative aspect-[2/3] max-h-[75vh] overflow-hidden rounded-[2px]">
              <Image
                src="/images/team-hochformat.jpg"
                alt="Team von Dr.-Ing. Formazin & Partner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>

            {/* Rechts: Text + Key Features */}
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

              {/* Key Features — integriert */}
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#1e293b]/10 pt-8">
                <div>
                  <p className="font-heading text-lg font-bold text-[#2d4196] md:text-xl">
                    Seit 1990
                  </p>
                  <p className="mt-1 font-sans text-sm text-[#1e293b]/60">
                    Über 30 Jahre Erfahrung
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-[#2d4196] md:text-xl">
                    3. Generation
                  </p>
                  <p className="mt-1 font-sans text-sm text-[#1e293b]/60">
                    Familienunternehmen
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-[#2d4196] md:text-xl">
                    Alles aus einer Hand
                  </p>
                  <p className="mt-1 font-sans text-sm text-[#1e293b]/60">
                    Architektur & Tragwerk
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-[#2d4196] md:text-xl">
                    Regional verwurzelt
                  </p>
                  <p className="mt-1 font-sans text-sm text-[#1e293b]/60">
                    Berlin-Brandenburg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
