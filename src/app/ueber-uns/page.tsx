import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TeamHeroSection } from "@/components/TeamHeroSection";

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />

      {/* Team Hero mit Spotlight-Effekt */}
      <TeamHeroSection />

      {/* Über uns Text */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Über uns
          </h1>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
            <p>
              Das Büro Dr.-Ing. Formazin & Partner wurde 1990 von Dr.-Ing. Dieter Formazin gegründet.
              Aus einem Ein-Mann-Büro entwickelte sich über die Jahre ein kompetentes Team von
              Architekten und Bauingenieuren.
            </p>
            <p>
              Heute führen Dr.-Ing. Dieter Formazin und sein Sohn Dipl.-Ing. Karsten Formazin
              das Büro gemeinsam. Als eingetragene partnerschaftliche Gesellschaft (mbB) verbinden
              wir Tradition mit moderner Planungskultur.
            </p>
            <p>
              Mit 10 Mitarbeitern realisieren wir Projekte im Großraum Berlin-Brandenburg –
              von der ersten Idee bis zur Fertigstellung. Unsere Stärke liegt in der Kombination
              von Architektur und Tragwerksplanung unter einem Dach.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-[#1e293b]/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Seit 1990
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                Über 30 Jahre Erfahrung
              </p>
            </div>

            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Familienunternehmen
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                3. Generation
              </p>
            </div>

            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Alles aus einer Hand
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                Architektur & Tragwerk
              </p>
            </div>

            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Regional verwurzelt
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                Berlin-Brandenburg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geschichte der Firma */}
      <section className="border-t border-[#1e293b]/10 bg-[#f3f4f6] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h2 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Seit 1990 in Ahrensfelde
          </h2>

          <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
            <p>
              1990 gründete Dr.-Ing. Dieter Formazin das Ingenieurbüro in Ahrensfelde bei Berlin.
              Der Schwerpunkt lag zunächst auf Tragwerksplanung für Hochbauprojekte im Raum Berlin-Brandenburg.
            </p>
            <p>
              Über die Jahre wuchs das Büro kontinuierlich. Mit der Aufnahme von Dipl.-Ing. Karsten Formazin
              als Partner wurde das Leistungsspektrum um Architektur, Brandschutz und Generalplanung erweitert.
              Die Umwandlung zur partnerschaftlichen Gesellschaft (mbB) markierte den Beginn der zweiten
              Generation im Familienunternehmen.
            </p>
            <p>
              Heute arbeiten 10 Mitarbeiter im Büro – Architekten, Bauingenieure und technische Zeichner.
              Gemeinsam haben wir über 300 Projekte realisiert: von Einfamilienhäusern über Wohnquartiere
              bis hin zu öffentlichen Bauten wie Schulen und Rathäusern. Unsere Stärke liegt in der
              Kombination von Architektur und Tragwerksplanung unter einem Dach – damit verkürzen wir
              Planungszeiten und sichern hohe Qualität.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
