import Link from "next/link";
import { Plus } from "lucide-react";
import { LEISTUNGEN } from "@/data/leistungen";

export function LeistungenSection() {
  return (
    <section
      id="leistungen"
      className="scroll-mt-28 border-t border-[#1e293b]/10 bg-[#f3f4f6] py-16 md:py-20 lg:py-24"
      aria-labelledby="leistungen-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        <h2
          id="leistungen-heading"
          className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl"
        >
          Leistungen
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
          {/* Links: Fließtext (linksbündig) */}
          <div>
            <div className="max-w-lg space-y-6 lg:max-w-xl"
          >
            <p className="font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Gebäude sind für uns mehr als Hüllen – sie sind Lebens- und
              Arbeitsräume. Deshalb verbinden wir Architektur und Ingenieurwesen
              zu ganzheitlichen Lösungen, die Gestaltung, Funktion und Technik
              vereinen.
            </p>

            <p className="font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Wir planen Räume strukturell, energetisch und wirtschaftlich – mit
              Blick auf Nachhaltigkeit, Effizienz und Qualität.
            </p>

            <p className="font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Als interdisziplinäres Team entwickeln wir durchdachte Konzepte von
              der Idee bis zur Umsetzung. So entstehen langlebige, zukunftsfähige
              Gebäude, die den Menschen in den Mittelpunkt stellen.
            </p>
            </div>
          </div>

          {/* Rechts: Leistungen-Namen (rechtsbündig) */}
          <div className="min-w-0">
            <ul className="space-y-3 text-right" role="list">
              {LEISTUNGEN.map((leistung) => (
                <li key={leistung.id}>
                  <Link
                    href={leistung.detailLink?.href ?? `/leistungen#${leistung.id}`}
                    aria-label={`${leistung.title} – Leistung ansehen`}
                    className="group flex min-h-12 items-center justify-end gap-4 py-2 text-[#1e293b] transition-colors hover:text-[#2d4196] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d4196]"
                  >
                    <span className="min-w-0 font-sans text-lg font-medium md:text-xl lg:text-2xl">
                      {leistung.title}
                    </span>
                    <Plus
                      size={28}
                      strokeWidth={2}
                      className="shrink-0 text-[#2d4196]"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
