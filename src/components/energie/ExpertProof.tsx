import Image from "next/image";
import type { ImageRef, TrustData } from "@/data/energie/types";

/**
 * Kompakter Experten-/Social-Proof-Block für FRÜH auf der Seite (direkt nach der
 * Direkt-Antwort): echtes Foto des Energieberaters + Name + Rolle +
 * Qualifikations-Pills. Der ausführliche „Wer wir sind“-Block (Bio, Kontext-Bild,
 * BAFA-Fußnote) folgt weiter unten. Haus-Tokens, scharfe Ecken, kein Gradient.
 */
export function ExpertProof({
  photo,
  trust,
}: {
  photo: ImageRef;
  trust: TrustData;
}) {
  return (
    <aside className="flex flex-col gap-6 rounded-[2px] border border-[#1e293b]/10 bg-white p-6 sm:flex-row sm:items-center md:gap-8 md:p-8">
      <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-[2px] bg-[#1e293b]/5 md:w-32">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 128px, 112px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#2d4196]">
          {trust.eyebrow ?? "Ihr Energieberater"}
        </p>
        <p className="mt-1 font-heading text-xl font-bold leading-tight text-[#1e293b] md:text-2xl">
          {trust.name}
        </p>
        {trust.role && (
          <p className="mt-1 font-sans text-sm font-medium text-[#1e293b]/60">
            {trust.role}
          </p>
        )}
        {trust.credentials.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" role="list">
            {trust.credentials.map((item) => (
              <li
                key={item}
                className="rounded-[2px] border border-[#2d4196]/20 bg-[#2d4196]/[0.06] px-2.5 py-1.5 font-sans text-xs font-medium text-[#243a7a]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
