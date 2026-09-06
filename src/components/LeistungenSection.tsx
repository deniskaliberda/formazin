import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { LEISTUNGEN } from "@/data/leistungen";

export function LeistungenSection() {
  return (
    <section id="leistungen" className="scroll-mt-28 border-t border-[#1e293b]/10 bg-[#f3f4f6] py-14 md:py-20" aria-labelledby="leistungen-heading">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#2d4196]">Architektur & Ingenieurwesen</p>
          <h2 id="leistungen-heading" className="mt-3 font-heading text-3xl font-bold md:text-4xl">Leistungen</h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80">Gebäude sind für uns mehr als Hüllen – sie sind Lebens- und Arbeitsräume. Deshalb verbinden wir Architektur und Ingenieurwesen zu ganzheitlichen Lösungen, die Gestaltung, Funktion und Technik vereinen.</p>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map((leistung) => (
            <Link key={leistung.id} href={leistung.detailLink?.href ?? `/leistungen#${leistung.id}`} className="group block border-b border-[#1e293b]/20 pb-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d4196]">
              <div className="relative aspect-[2/1] overflow-hidden rounded-[2px]">
                <Image src={leistung.image} alt={leistung.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-bold text-[#1e293b] group-hover:text-[#2d4196]">{leistung.title}</h3>
                <Plus size={24} aria-hidden="true" className="shrink-0 text-[#2d4196]" />
              </div>
              <p className="mt-3 font-sans text-base leading-relaxed text-[#1e293b]/75">{leistung.intro}</p>
              <span className="mt-4 inline-block font-sans text-sm font-semibold text-[#2d4196]">Leistung ansehen</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-5 border-t border-[#1e293b]/10 pt-8 font-sans text-base leading-relaxed text-[#1e293b]/75 md:grid-cols-2">
          <p>Wir planen Räume strukturell, energetisch und wirtschaftlich – mit Blick auf Nachhaltigkeit, Effizienz und Qualität.</p>
          <p>Als interdisziplinäres Team entwickeln wir durchdachte Konzepte von der Idee bis zur Umsetzung. So entstehen langlebige, zukunftsfähige Gebäude, die den Menschen in den Mittelpunkt stellen.</p>
        </div>
      </div>
    </section>
  );
}
