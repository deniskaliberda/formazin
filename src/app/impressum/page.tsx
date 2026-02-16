import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Dr.-Ing. Formazin & Partner mbB",
  description:
    "Impressum und rechtliche Angaben der Dr.-Ing. Formazin & Partner mbB, Architekten & Beratende Ingenieure aus Ahrensfelde.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Impressum
          </h1>

          <div className="mt-10 max-w-3xl space-y-10 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
            {/* Anschrift */}
            <section>
              <p className="font-heading font-bold text-[#1e293b]">
                Dr.-Ing. Formazin & Partner mbB
              </p>
              <p>Dorfstraße 1A</p>
              <p>16356 Ahrensfelde</p>
              <p>Deutschland</p>
              <div className="mt-4">
                <p>
                  Telefon:{" "}
                  <a
                    href="tel:+49309369170"
                    className="text-[#2d4196] transition-colors hover:text-[#243a7a]"
                  >
                    030 936917 0
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:kontakt@formazin-partner.de"
                    className="text-[#2d4196] transition-colors hover:text-[#243a7a]"
                  >
                    kontakt@formazin-partner.de
                  </a>
                </p>
              </div>
            </section>

            {/* Vertretungsberechtigte Partner */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Vertreten durch die Partner
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-bold text-[#1e293b]">
                    Karsten Formazin – Bauingenieur
                  </p>
                  <p>Dr.-Ing. Bauingenieur</p>
                  <p>
                    Mitglied der Brandenburgischen Ingenieurkammer seit
                    28.07.1994
                  </p>
                  <p>Eingetragen in die Ingenieurliste mit Nummer 20568</p>
                </div>
                <div>
                  <p className="font-bold text-[#1e293b]">
                    Oda Formazin – Architektin
                  </p>
                  <p>Dipl.-Ing. Bauingenieur + M.Sc. Architektin</p>
                  <p>
                    Mitglied der Architektenkammer Sachsen-Anhalt seit
                    29.03.2007
                  </p>
                  <p>
                    Eingetragen in die Architektenliste mit Nummer 1785-087-1-a
                  </p>
                </div>
              </div>
            </section>

            {/* Registereintrag */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Registereintrag
              </h2>
              <p className="mt-4">Eingetragen im Partnerschaftsregister</p>
              <p>Amtsgericht Frankfurt (Oder), PR 70 FF</p>
            </section>

            {/* Umsatzsteuer */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Umsatzsteuer
              </h2>
              <p className="mt-4">
                Umsatzsteuer-Identifikationsnummer gemäß §&nbsp;27a UStG:
              </p>
              <p>DE139153803</p>
            </section>

            {/* Kammerzugehörigkeit */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Kammerzugehörigkeit
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-bold text-[#1e293b]">
                    Architektenkammer Sachsen-Anhalt
                  </p>
                  <p>Fürstenwall 3</p>
                  <p>39104 Magdeburg</p>
                </div>
                <div>
                  <p className="font-bold text-[#1e293b]">
                    Brandenburgische Ingenieurkammer
                  </p>
                  <p>Schlaatzweg 1</p>
                  <p>14473 Potsdam</p>
                </div>
              </div>
            </section>

            {/* Berufsbezeichnung */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Berufsbezeichnung
              </h2>
              <div className="mt-4 space-y-2">
                <p>
                  Architektengesetz des Landes Sachsen-Anhalt
                  <br />
                  <a
                    href="https://www.ak-lsa.de/wp-content/uploads/2020/07/ArchG-2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2d4196] transition-colors hover:text-[#243a7a]"
                  >
                    Einsehbar unter ak-lsa.de
                  </a>
                </p>
                <p>
                  Ingenieurgesetz des Landes Brandenburg
                  <br />
                  <a
                    href="https://bravors.brandenburg.de/gesetze/bbgingg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2d4196] transition-colors hover:text-[#243a7a]"
                  >
                    Einsehbar unter bravors.brandenburg.de
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
