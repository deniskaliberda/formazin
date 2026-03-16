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
                Seit 1990 in Ahrensfelde
              </h1>

              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                <p>
                  1990 gründeten Dr.-Ing. Jürgen Formazin und sein Sohn Dr.-Ing. Karsten Formazin
                  das Planungsbüro in Ahrensfelde — mit fachlicher Kompetenz, persönlichem Einsatz
                  und einer klaren Vision.
                </p>
                <p>
                  1997 kam Oda Formazin hinzu. Der Schwerpunkt verlagerte sich auf Objekt- und
                  Tragwerksplanung. Mit wachsender Erfahrung wurden die Projekte größer, vielfältiger
                  und anspruchsvoller.
                </p>
                <p>
                  Heute realisieren wir mit zehn Mitarbeitern und einem starken Netzwerk
                  Projekte in der Generalplanung — für private und öffentliche Auftraggeber.
                </p>
                <p>
                  Seit 2017 ist Tochter Frauke Formazin als Architektin Teil des Teams, 2024
                  kam Feith Formazin als Bauingenieur hinzu. Gemeinsam führen sie die
                  Familientradition in die Zukunft.
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
