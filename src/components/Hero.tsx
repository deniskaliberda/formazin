import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

const HERO_IMAGES = [
  {
    src: "/images/hero.jpg",
    alt: "Dr.-Ing. Formazin & Partner – Architekten & beratende Ingenieure",
  },
];

const LEISTUNGEN = [
  { label: "Architektur", href: "/leistungen#architektur" },
  { label: "Brandschutz", href: "/leistungen#brandschutz" },
  { label: "Tragwerksplanung", href: "/leistungen#tragwerk" },
  { label: "Wärmeschutz", href: "/leistungen#waermeschutz" },
  { label: "Generalplanung", href: "/leistungen#generalplanung" },
];

export function Hero() {
  return (
    <header className="relative bg-white">
      <Navigation />

      {/* Hero – Projektbild mit integrierten Text */}
      <div className="relative h-[85vh] min-h-[600px] w-full lg:h-[90vh]">
        <Image
          src={HERO_IMAGES[0].src}
          alt={HERO_IMAGES[0].alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* Gradient-Overlay für Text-Lesbarkeit */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/40 to-transparent"
          aria-hidden="true"
        />

        {/* Text integriert im Bild unten */}
        <div className="absolute inset-x-0 bottom-0 z-10 pb-12 md:pb-16 lg:pb-20">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
            <div>
              <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Architekten & beratende Ingenieure
              </h1>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-base text-white/80 md:text-lg">
                {LEISTUNGEN.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
