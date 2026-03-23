import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Dr.-Ing. Formazin & Partner mbB",
  description:
    "Datenschutzerklärung der Dr.-Ing. Formazin & Partner mbB, Architekten & Beratende Ingenieure aus Ahrensfelde.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 max-w-3xl space-y-12 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                1. Verantwortlicher
              </h2>
              <div className="mt-4">
                <p className="font-bold text-[#1e293b]">
                  Dr.-Ing. Formazin & Partner mbB
                </p>
                <p>Dorfstraße 1A</p>
                <p>16356 Ahrensfelde</p>
                <p className="mt-2">
                  E-Mail:{" "}
                  <a
                    href="mailto:kontakt@formazin-partner.de"
                    className="text-[#2d4196] transition-colors hover:text-[#243a7a]"
                  >
                    kontakt@formazin-partner.de
                  </a>
                </p>
                <p>Telefon: 030 936917 0</p>
              </div>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                2. Hosting
              </h2>
              <p className="mt-4">
                Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA gehostet. Beim Besuch der Website werden
                automatisch Informationen (z.&nbsp;B. IP-Adresse, Browsertyp,
                Betriebssystem, Uhrzeit des Zugriffs) in sogenannten
                Server-Logfiles gespeichert. Die Verarbeitung erfolgt auf
                Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
                (berechtigtes Interesse an einer sicheren und effizienten
                Bereitstellung der Website). Die Server-Logfiles werden nach
                spätestens 30 Tagen gelöscht.
              </p>
              <p className="mt-3">
                Die Datenübermittlung in die USA erfolgt auf Basis des
                EU-US Data Privacy Framework.
              </p>
            </section>

            {/* 3. SSL-Verschlüsselung */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                3. SSL-Verschlüsselung
              </h2>
              <p className="mt-4">
                Diese Seite nutzt aus Sicherheitsgründen eine
                SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von
                &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und
                ein Schloss-Symbol angezeigt wird.
              </p>
            </section>

            {/* 4. Kontaktformular */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                4. Kontaktformular
              </h2>
              <p className="mt-4">
                Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben (Name, E-Mail-Adresse, Betreff, Nachricht)
                zum Zwecke der Bearbeitung Ihrer Anfrage bei uns gespeichert.
                Die Verarbeitung erfolgt auf Grundlage von Art.&nbsp;6
                Abs.&nbsp;1 lit.&nbsp;b DSGVO (vorvertragliche Maßnahmen) bzw.
                Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes
                Interesse an der Beantwortung Ihrer Anfrage). Die Daten werden
                gelöscht, sobald der Zweck der Speicherung entfällt.
              </p>
            </section>

            {/* 5. Google Maps */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                5. Google Maps
              </h2>
              <p className="mt-4">
                Diese Website nutzt Google Maps zur Darstellung unseres
                Standorts. Anbieter ist die Google Ireland Limited, Gordon
                House, Barrow Street, Dublin 4, Irland. Beim Aufruf der
                Kontaktseite wird eine Verbindung zu den Servern von Google
                hergestellt, wobei Ihre IP-Adresse an Google übermittelt wird.
                Die Nutzung erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO (berechtigtes Interesse an einer
                ansprechenden Standortdarstellung). Weitere Informationen finden
                Sie in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4196] transition-colors hover:text-[#243a7a]"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                6. Cookies
              </h2>
              <p className="mt-4">
                Diese Website verwendet keine Tracking-Cookies und keine
                Analyse-Tools. Es werden ausschließlich technisch notwendige
                Cookies eingesetzt, die für den Betrieb der Website erforderlich
                sind. Die Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO.
              </p>
            </section>

            {/* 7. Betroffenenrechte */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                7. Ihre Rechte
              </h2>
              <p className="mt-4">
                Sie haben gemäß DSGVO folgende Rechte:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong>Auskunft</strong> (Art.&nbsp;15 DSGVO) – über Ihre bei
                  uns gespeicherten Daten
                </li>
                <li>
                  <strong>Berichtigung</strong> (Art.&nbsp;16 DSGVO) –
                  unrichtiger Daten
                </li>
                <li>
                  <strong>Löschung</strong> (Art.&nbsp;17 DSGVO) – Ihrer Daten,
                  soweit keine gesetzliche Aufbewahrungspflicht besteht
                </li>
                <li>
                  <strong>Einschränkung</strong> (Art.&nbsp;18 DSGVO) – der
                  Verarbeitung Ihrer Daten
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> (Art.&nbsp;20 DSGVO) –
                  in einem maschinenlesbaren Format
                </li>
                <li>
                  <strong>Widerspruch</strong> (Art.&nbsp;21 DSGVO) – gegen die
                  Verarbeitung Ihrer Daten
                </li>
              </ul>
            </section>

            {/* 8. Beschwerderecht */}
            <section>
              <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                8. Beschwerderecht
              </h2>
              <p className="mt-4">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                über die Verarbeitung Ihrer personenbezogenen Daten zu
                beschweren. Die für uns zuständige Aufsichtsbehörde ist:
              </p>
              <div className="mt-3">
                <p className="font-bold text-[#1e293b]">
                  Die Landesbeauftragte für den Datenschutz und für das Recht
                  auf Akteneinsicht Brandenburg
                </p>
                <p>Stahnsdorfer Damm 77</p>
                <p>14532 Kleinmachnow</p>
                <p className="mt-2">
                  <a
                    href="https://www.lda.brandenburg.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2d4196] transition-colors hover:text-[#243a7a]"
                  >
                    www.lda.brandenburg.de
                  </a>
                </p>
              </div>
            </section>

            {/* Stand */}
            <p className="text-sm text-[#1e293b]/50">
              Stand: März 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
