import { Building2, DraftingCompass, FileText, FolderOpen, Network, ShieldCheck, Users, type LucideIcon } from "lucide-react";

const SYMBOLE: Record<string, LucideIcon> = {
  Brandschutznachweis: FileText,
  Brandschutzkonzept: FolderOpen,
};

/** Decorative symbols supplement the adjacent, accessible service labels. */
export function LeistungsSymbol({ titel }: { titel: string }) {
  if (["Stahlbeton", "Stahl", "Holz", "Mauerwerk"].includes(titel)) {
    return <svg aria-hidden="true" viewBox="0 0 64 64" className="mb-4 h-16 w-16 text-[#2d4196]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      {titel === "Stahlbeton" && <>
        <rect x="9" y="7" width="46" height="50" fill="currentColor" fillOpacity=".04" />
        <rect x="17" y="15" width="30" height="34" rx="3" />
        {[20, 44].flatMap((x) => [18, 46].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="currentColor" />))}
        <path d="M26 11h3m7 42h3M12 30v3m40 4v3" />
      </>}
      {titel === "Stahl" && <>
        <path d="M12 8h40v9H37v30h15v9H12v-9h15V17H12Z" fill="currentColor" fillOpacity=".06" />
        <path d="M32 21v22M18 12h28M18 52h28" />
      </>}
      {titel === "Holz" && <>
        <path d="M8 8h19v18h29v20H27v10H8Z" fill="currentColor" fillOpacity=".04" />
        <path d="M27 26v20M13 12v38M20 12v15m0 18v6M32 31h19M32 40h19" />
        <circle cx="18" cy="36" r="3" />
        <path d="M27 31h-5m5 10h-5" />
      </>}
      {titel === "Mauerwerk" && <>
        <rect x="6" y="10" width="52" height="44" fill="currentColor" fillOpacity=".04" />
        <path d="M6 21h52M6 32h52M6 43h52M23 10v11m18-11v11M14 21v11m18-11v11m18-11v11M23 32v11m18-11v11M14 43v11m18-11v11m18-11v11" />
      </>}
    </svg>;
  }
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
