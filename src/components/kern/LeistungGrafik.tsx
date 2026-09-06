import { Building2, BrickWall, DraftingCompass, FileText, FolderOpen, Layers3, Network, ShieldCheck, TreePine, Users, type LucideIcon } from "lucide-react";

const SYMBOLE: Record<string, LucideIcon> = {
  Stahlbeton: Layers3,
  Stahl: Building2,
  Holz: TreePine,
  Mauerwerk: BrickWall,
  Brandschutznachweis: FileText,
  Brandschutzkonzept: FolderOpen,
};

/** Decorative symbols supplement the adjacent, accessible service labels. */
export function LeistungsSymbol({ titel }: { titel: string }) {
  const Symbol = SYMBOLE[titel];
  if (!Symbol) return null;
  return <Symbol aria-hidden="true" className="mb-4 h-14 w-14 text-[#2d4196]" strokeWidth={1.3} />;
}

/** Relationships, not additional process steps or a claim of extra services. */
export function PlanungsZusammenhang({ generalplanung }: { generalplanung: boolean }) {
  const punkte = generalplanung
    ? [{ name: "Architektur", Icon: DraftingCompass }, { name: "Tragwerksplanung", Icon: Building2 }, { name: "Brandschutz", Icon: ShieldCheck }, { name: "Weitere Fachplaner", Icon: Users }]
    : [{ name: "Nutzung & Grundriss", Icon: Users }, { name: "Konstruktion & Tragwerk", Icon: Building2 }, { name: "Brandschutz", Icon: ShieldCheck }];
  return <div className="mt-6" aria-label={generalplanung ? "Generalplanung koordiniert die beteiligten Fachplanungen" : "Architektur stimmt Nutzung, Konstruktion und Brandschutz miteinander ab"}>
    <div className="mx-auto flex w-fit items-center gap-3 border border-[#2d4196]/30 bg-[#f3f4f6] px-6 py-4">
      <Network aria-hidden="true" className="h-8 w-8 text-[#2d4196]" strokeWidth={1.4} />
      <p className="font-heading text-xl font-bold text-[#2d4196]">{generalplanung ? "Generalplanung · zentrale Koordination" : "Architektur · abgestimmter Entwurf"}</p>
    </div>
    <div aria-hidden="true" className="mx-auto h-6 w-px bg-[#2d4196]/35" />
    <ul className={`grid gap-4 border-t border-[#2d4196]/35 pt-6 sm:grid-cols-2 ${generalplanung ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {punkte.map(({ name, Icon }) => <li key={name} className="flex items-center gap-4 border-l-2 border-[#2d4196]/25 px-5 py-3">
        <Icon aria-hidden="true" className="h-10 w-10 shrink-0 text-[#2d4196]" strokeWidth={1.4} />
        <span className="font-heading text-xl font-semibold text-[#1e293b]">{name}</span>
      </li>)}
    </ul>
  </div>;
}
