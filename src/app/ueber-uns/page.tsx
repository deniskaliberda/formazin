import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />

      {/* Team-Foto mit weißem Rand */}
      <section className="bg-white py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2px]">
            <Image
              src="/images/teamfoto-über-uns.jpg"
              alt="Team von Dr.-Ing. Formazin & Partner"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Über uns Text */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Seit 1990 in Ahrensfelde
          </h1>

          <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg md:max-w-4xl">
            <p>
              1990 gründeten Dr.-Ing. Jürgen Formazin und sein Sohn Dr.-Ing. Karsten Formazin
              das Planungsbüro in Ahrensfelde — mit fachlicher Kompetenz, persönlichem Einsatz
              und einer klaren Vision. Der Grundstein für ein Familienunternehmen war gelegt.
            </p>
            <p>
              1997 kam Oda Formazin hinzu und brachte neue Impulse ein. Der Schwerpunkt
              verlagerte sich zunehmend auf Objekt- und Tragwerksplanung, zunächst vor allem
              im Wohnungsbau. Mit wachsender Erfahrung wurden die Projekte größer, vielfältiger
              und anspruchsvoller.
            </p>
            <p>
              Heute realisieren wir mit zehn Mitarbeitern und einem starken Netzwerk aus
              Planungspartnern Projekte in der Generalplanung — für private und öffentliche
              Auftraggeber. Wir stehen für zuverlässige Planung, klare Koordination und
              persönliche Betreuung.
            </p>
            <p>
              Trotz unseres Wachstums bleiben wir, was wir von Anfang an waren: ein
              familiengeführtes, regional verwurzeltes Unternehmen. Seit 2017 ist Tochter
              Frauke Formazin als Architektin Teil des Teams, 2024 kam Feith Formazin als
              Bauingenieur hinzu. Gemeinsam führen sie die Familientradition mit neuen Ideen
              in die Zukunft.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
