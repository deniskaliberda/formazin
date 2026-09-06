export type EnergieGrafik = "fahrplan" | "begleitung" | "ausweis" | "nachweis" | "foerderung";

const TEXTE: Record<EnergieGrafik, { label: string; caption: string }> = {
  fahrplan: { label: "Sanierungsfahrplan: Gebäude aufnehmen und Maßnahmen in Schritte ordnen", caption: "Maßnahmen ordnen" },
  begleitung: { label: "Baubegleitung: Planung und Ausführung anhand einer Prüfliste begleiten", caption: "Ausführung begleiten" },
  ausweis: { label: "Energieausweis: Energiekennwerte eines Gebäudes in einem Dokument darstellen", caption: "Energiekennwerte erfassen" },
  nachweis: { label: "GEG-Nachweis: Gebäudehülle und energetische Anforderungen berechnen", caption: "Gebäude berechnen" },
  foerderung: { label: "Förderberatung: Vorhaben, Antrag und Nachweise aufeinander abstimmen", caption: "Förderweg klären" },
};

/** Original schematic illustrations. No project attribution or subsidy promise. */
export function EnergieLeistungsGrafik({ kind }: { kind: EnergieGrafik }) {
  return <div className="energy-service-graphic mb-5 border-b border-[#2d4196]/15 bg-[#f3f4f6] px-3 pt-3 pb-4">
    <svg viewBox="0 0 260 164" role="img" aria-label={TEXTE[kind].label} className="mx-auto w-full max-w-[280px] text-[#2d4196]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {kind === "fahrplan" && <>
        <path d="M22 64 52 38 82 64M29 60v40h46V60M46 100V80h14v20" />
        <path d="M89 89h22v-24h49v37h47V66h30" strokeDasharray="5 6" />
        <circle cx="112" cy="65" r="10" fill="#dce2f3" /><circle cx="160" cy="102" r="10" fill="#bcc8e8" /><circle cx="208" cy="66" r="10" fill="#2d4196" />
        <path d="m202 66 4 4 8-9" stroke="white" /><path d="M30 126h45m31 0h43m29 0h43" stroke="#bcc8e8" strokeWidth="5" />
      </>}
      {kind === "begleitung" && <>
        <path d="m20 72 51-35 47 35M29 68v65h77V68M41 83h18v20H41zM76 89v44" />
        <rect x="134" y="36" width="103" height="107" rx="2" fill="white" /><rect x="159" y="27" width="53" height="17" rx="2" fill="#dce2f3" />
        {[64,92,120].map(y=><g key={y}><path d={`m148 ${y} 5 5 9-11`} /><path d={`M177 ${y}h43`} stroke="#a1aed4" /></g>)}
      </>}
      {kind === "ausweis" && <>
        <path d="M65 22h101l30 30v96H65z" fill="white" /><path d="M166 22v30h30M82 42h53" />
        {[0,1,2,3,4,5].map(i=><rect key={i} x={82} y={65+i*10} width={42+i*12} height="7" stroke="none" fill={['#99b9af','#b6c9a9','#cdd1ac','#d7c9a4','#d6b5a3','#b99897'][i]} />)}
        <path d="M83 134h94" stroke="#bcc8e8" />
      </>}
      {kind === "nachweis" && <>
        <path d="m36 68 74-47 72 47M47 62v82h125V62" strokeWidth="6" stroke="#bcc8e8" />
        <path d="m42 72 68-44 65 44M55 66v70h109V66M72 77h23v25H72zM116 99v37" />
        <path d="M16 92h24m-7-6 7 6-7 6M190 81h31m-7-6 7 6-7 6M191 105h30m-7-6 7 6-7 6" />
        <rect x="181" y="119" width="53" height="31" rx="2" fill="white" /><path d="M193 129h27M193 139h17" />
      </>}
      {kind === "foerderung" && <>
        <rect x="21" y="43" width="59" height="83" rx="2" fill="white" /><path d="M33 60h34M33 75h25M33 90h31M33 105h19" />
        <path d="M88 84h29m-8-7 8 7-8 7" /><circle cx="146" cy="83" r="28" fill="#dce2f3" />
        <path d="m133 83 9 9 18-20M180 84h26m-8-7 8 7-8 7" />
        <path d="M234 66c-16-9-27 2-27 17s11 26 27 17M201 78h27M201 89h24" />
      </>}
    </svg>
    <p className="flex min-h-12 items-center justify-center text-center font-sans text-base font-medium text-[#2d4196]">{TEXTE[kind].caption}</p>
  </div>;
}
