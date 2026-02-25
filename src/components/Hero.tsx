"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { useState, useEffect, useCallback } from "react";

const HERO_IMAGES = [
  {
    src: "/images/Hero-1.jpg",
    alt: "Dr.-Ing. Formazin & Partner – Projektansicht 1",
  },
  {
    src: "/images/Hero-2.jpg",
    alt: "Dr.-Ing. Formazin & Partner – Projektansicht 2",
  },
  {
    src: "/images/Hero-3.jpg",
    alt: "Dr.-Ing. Formazin & Partner – Projektansicht 3",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <header className="relative bg-white">
      <Navigation />

      {/* Hero – rotierende Projektbilder */}
      <div className="relative h-screen w-full">
        {HERO_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
            priority={index === 0}
          />
        ))}

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

        {/* Slide-Indikatoren */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/50"
              }`}
              aria-label={`Zu Bild ${index + 1} wechseln`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
