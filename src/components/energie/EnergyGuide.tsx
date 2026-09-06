import Link from "next/link";
import { ArrowUpRight, BadgeEuro, ClipboardList, ShieldCheck } from "lucide-react";

const stations = [
  { question: "Wo fange ich an?", title: "Die richtigen Schritte planen", text: "Gebäude prüfen und sinnvolle Maßnahmen ordnen.", href: "/leistungen/energieberatung/sanierungsfahrplan-isfp", Icon: ClipboardList },
  { question: "Welche Förderung passt?", title: "Fördermöglichkeiten prüfen", text: "Programme klären und Anträge gezielt vorbereiten.", href: "/leistungen/energieberatung/foerderberatung-bafa-kfw", Icon: BadgeEuro },
  { question: "Wie geht es sicher weiter?", title: "Die Umsetzung begleiten", text: "Nachweise erstellen und die Ausführung fachlich begleiten.", href: "/leistungen/energieberatung/kfw-baubegleitung", Icon: ShieldCheck },
];

export function EnergyGuide() {
  return (
    <nav aria-labelledby="energy-guide-heading" className="energy-guide rounded-[2px] border border-[#2d4196]/15 bg-white p-6 sm:p-8">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#2d4196]">Ihre Fragen. Unsere Leistungen.</p>
      <h2 id="energy-guide-heading" className="mt-3 font-heading text-2xl font-bold leading-tight text-[#1e293b] sm:text-[1.75rem]">Klarheit für Ihre Sanierung</h2>
      <ol className="relative mt-7 space-y-3 before:absolute before:bottom-12 before:left-6 before:top-8 before:w-px before:bg-[#2d4196]/20">
        {stations.map(({ question, title, text, href, Icon }, index) => (
          <li key={href} className="relative">
            <Link href={href} className="group grid grid-cols-[3rem_minmax(0,1fr)_1rem] items-start gap-4 rounded-[2px] py-3 transition-colors hover:bg-[#f3f4f6]">
              <span aria-hidden="true" className="relative flex h-12 w-12 items-center justify-center rounded-[2px] border border-[#2d4196]/20 bg-[#f3f4f6] text-[#2d4196]">
                <Icon size={25} strokeWidth={1.5} />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#2d4196] font-sans text-[10px] font-semibold text-white">{index + 1}</span>
              </span>
              <span>
                <span className="block font-sans text-sm text-[#1e293b]/65">{question}</span>
                <span className="mt-1 block font-heading text-lg font-bold leading-snug text-[#2d4196]">{title}</span>
                <span className="mt-1.5 block font-sans text-base leading-relaxed text-[#1e293b]/80">{text}</span>
              </span>
              <ArrowUpRight aria-hidden="true" size={17} className="mt-1 text-[#2d4196]/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ol>
      <p className="mt-5 border-t border-[#2d4196]/15 pt-5 font-sans text-sm text-[#1e293b]/65">Wählen Sie ein Thema und erfahren Sie, wie wir Sie unterstützen.</p>
    </nav>
  );
}
