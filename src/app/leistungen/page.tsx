"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const LEISTUNGEN = [
  {
    id: "architektur",
    title: "Architektur",
    image: "/images/projekte/grundschule-lindenberg/hero.jpg",
    intro: "Architekturbüro für Neubau, Umbau und Sanierung in Berlin und Brandenburg.",
    leistungen: [
      "Objektplanung nach HOAI (Leistungsphasen 1-9)",
      "Entwurfsplanung und Genehmigungsplanung",
      "Bauen im Bestand und Denkmalschutz",
      "Ausführungsplanung und Detaillierung",
      "Bauüberwachung und Objektbetreuung",
      "Umbau, Sanierung und Erweiterung",
    ],
    referenzProjekte: [
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "ortsteilzentrum-ahrensfelde", name: "Ortsteilzentrum Ahrensfelde" },
      { slug: "kreisarchiv-eberswalde", name: "Kreisarchiv Eberswalde" },
    ],
  },
  {
    id: "brandschutz",
    title: "Brandschutz",
    image: "/images/leistungen/brandschutz.png",
    intro: "Brandschutzplanung und Brandschutzkonzepte für Gebäude in Berlin und Brandenburg.",
    leistungen: [
      "Brandschutznachweise nach Bauordnung",
      "Vorbeugender baulicher Brandschutz",
      "Flucht- und Rettungswegplanung",
      "Brandschutzkonzepte für Sonderbauten",
      "Behördenabstimmung und Genehmigung",
      "Bestandsaufnahme Brandschutz",
    ],
    referenzProjekte: [
      { slug: "kreisarchiv-eberswalde", name: "Kreisarchiv Eberswalde" },
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "grundschule-schwanenteich", name: "Grundschule Schwanenteich" },
    ],
  },
  {
    id: "tragwerk",
    title: "Tragwerksplanung",
    image: "/images/leistungen/tragwerk.png",
    intro: "Statik und Tragwerksplanung für Neubau und Bestand – Ingenieurbüro Berlin Brandenburg.",
    leistungen: [
      "Statische Berechnungen und Nachweise",
      "Standsicherheitsnachweise nach Bauordnung",
      "Konstruktiver Ingenieurbau (Stahlbeton, Stahl, Holz)",
      "Tragwerksplanung für Umbau und Sanierung",
      "Wirtschaftlichkeitsprüfung Tragwerk",
      "Beratung zu Tragwerksvarianten",
    ],
    referenzProjekte: [
      { slug: "ernst-reuter-siedlung", name: "Ernst-Reuter-Siedlung" },
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "mfh-strausberger-altlandsberg", name: "MFH Strausberger Altlandsberg" },
    ],
  },
  {
    id: "waermeschutz",
    title: "Wärmeschutz",
    image: "/images/leistungen/waermeschutz.png",
    intro: "Energieberatung und Wärmeschutznachweis für energieeffiziente Gebäude.",
    leistungen: [
      "Wärmeschutznachweise nach EnEV/GEG",
      "Energieberatung für Wohngebäude und Nichtwohngebäude",
      "Bauphysikalische Berechnungen",
      "Schallschutznachweis",
      "KfW-Förderung und Nachhaltigkeitszertifizierung",
      "Sanierungsfahrpläne (iSFP)",
    ],
    referenzProjekte: [
      { slug: "fassadensanierung-frankfurter-allee", name: "Fassadensanierung Frankfurter Allee" },
      { slug: "balkonsanierung-oderberger", name: "Balkonsanierung Oderberger" },
    ],
  },
  {
    id: "generalplanung",
    title: "Generalplanung",
    image: "/images/projekte/kreisarchiv-eberswalde/hero.jpg",
    intro: "Generalplaner für Bauprojekte – alle Gewerke aus einer Hand koordiniert.",
    leistungen: [
      "Koordination aller Fachplaner",
      "Termin- und Kostencontrolling",
      "Qualitätssicherung auf der Baustelle",
      "Bauherrenvertretung",
      "Vergabe und Ausschreibung",
      "Ein Ansprechpartner für Ihr gesamtes Projekt",
    ],
    referenzProjekte: [
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "kreisarchiv-eberswalde", name: "Kreisarchiv Eberswalde" },
      { slug: "kindergarten-ahrensfelde", name: "Kindergarten Ahrensfelde" },
    ],
  },
];

export default function LeistungenPage() {
  const [selectedLeistung, setSelectedLeistung] = useState(0);

  useEffect(() => {
    // Hash aus URL auslesen und entsprechende Leistung auswählen
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const index = LEISTUNGEN.findIndex(l => l.id === hash);
      if (index !== -1) {
        setSelectedLeistung(index);
        // Smooth scroll zum Inhalt
        setTimeout(() => {
          const element = document.getElementById('leistungen-content');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Navigation />

      {/* Thumbnail-Navigation */}
      <section className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24" id="leistungen-content">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="sr-only">Leistungen – Dr.-Ing. Formazin &amp; Partner</h1>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {LEISTUNGEN.map((leistung, index) => (
              <button
                key={leistung.id}
                onClick={() => setSelectedLeistung(index)}
                className={`flex h-12 items-center whitespace-nowrap rounded-[2px] px-6 font-heading text-sm font-bold transition-all md:h-14 md:px-8 md:text-base ${
                  selectedLeistung === index
                    ? "bg-[#2d4196] text-white shadow-lg"
                    : "bg-white text-[#1e293b] hover:bg-[#f3f4f6] hover:text-[#2d4196]"
                }`}
              >
                {leistung.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail-Bereich – 50/50 Split */}
      <section className="bg-[#f3f4f6] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Links: Großes Bild */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] lg:aspect-auto lg:h-[600px]">
              <Image
                src={LEISTUNGEN[selectedLeistung].image}
                alt={`${LEISTUNGEN[selectedLeistung].title} – Detailansicht`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Rechts: Text */}
            <div className="flex min-h-[600px] flex-col justify-center">
              <h2 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl lg:text-4xl">
                {LEISTUNGEN[selectedLeistung].title}
              </h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                {LEISTUNGEN[selectedLeistung].intro}
              </p>
              
              <ul className="mt-8 space-y-3" role="list">
                {LEISTUNGEN[selectedLeistung].leistungen.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2d4196]"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-base text-[#1e293b] md:text-lg">
                      {punkt}
                    </span>
                  </li>
                ))}
              </ul>

              {LEISTUNGEN[selectedLeistung].referenzProjekte.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#1e293b]/50">
                    Referenzprojekte
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {LEISTUNGEN[selectedLeistung].referenzProjekte.map((projekt) => (
                      <Link
                        key={projekt.slug}
                        href={`/projekte/${projekt.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#2d4196]/20 px-4 py-2 font-sans text-sm text-[#2d4196] transition-colors hover:bg-[#2d4196] hover:text-white"
                      >
                        {projekt.name}
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
