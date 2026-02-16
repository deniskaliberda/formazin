"use client";

import Image from "next/image";

const WERTE = [
  {
    text: "Partnerschaftlich & Fair",
  },
  {
    text: "Regional verwurzelt (Berlin/Brandenburg)",
  },
  {
    text: "Alles aus einer Hand (Generalplanung)",
  },
];

const TEAM_IMAGE = "/images/Formazin-startseite.jpg";

export function BueroSection() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="buero-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Links: Team-Foto */}
          <div className="relative overflow-hidden rounded-[2px]">
            <div className="aspect-[4/3] lg:aspect-[3/4] lg:min-h-[560px]">
              <Image
                src={TEAM_IMAGE}
                alt="Team von Dr.-Ing. Formazin & Partner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Rechts: Content */}
          <div className="relative">
            <h2
              id="buero-heading"
              className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl"
            >
              Über uns
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Ganzheitliche Bauplanung nach HOAI – von der Idee bis zur Übergabe.
              Schwerpunkt Hochbau: Wohn- und Bürogebäude, Bildungs- und Sportbauten.
            </p>
            <p className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Tragwerksplanung, Energiebilanzierung und Brandschutz sind von Anfang
              an integriert. Das sichert effiziente Prozesse, Termintreue und
              Kostensicherheit.
            </p>

            {/* Werte-Liste */}
            <ul className="mt-10 space-y-4" role="list">
              {WERTE.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-4"
                >
                  <span
                    className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span className="font-sans text-xl text-[#1e293b] md:text-2xl">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
