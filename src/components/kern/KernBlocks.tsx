import Link from "next/link";
import Image from "next/image";
import { renderInline } from "@/components/energie/richText";
import { getProjektBySlug } from "@/data/projekte";
import type { ContentSub } from "@/lib/content";
import type { KernAutor } from "@/data/kern/autoren";
import { KERN_PREVIEW } from "@/lib/kernPreview";

/**
 * Server-Bausteine der KERN-Seiten (Leistungen + Wissen). Bewusst ohne
 * Client-JS: FAQ läuft über native <details>, alles ist im Prerender-HTML
 * sichtbar (der Kern-Befund des SEO-Snapshots: Client-Tabs = unsichtbar).
 * Design erbt die bestehenden Tokens (#2d4196, Archivo, 2px-Radius).
 */

export function EntwurfBand() {
  if (!KERN_PREVIEW) return null;
  return (
    <div className="bg-[#2d4196] px-4 py-1.5 text-center font-heading text-xs font-semibold uppercase tracking-wider text-white">
      Entwurf zur Freigabe — Vorschau, nicht live
    </div>
  );
}

export function DirektAntwort({ paras }: { paras: string[] }) {
  return (
    <div className="mt-8 max-w-3xl border-l-4 border-[#2d4196] bg-[#f3f4f6] px-6 py-5">
      <p className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-[#2d4196]">
        Auf einen Blick
      </p>
      {paras.map((p, i) => (
        <p key={i} className="mt-2 font-sans text-base leading-relaxed text-[#1e293b] md:text-lg">
          {renderInline(p)}
        </p>
      ))}
    </div>
  );
}

export function BlockHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
      {children}
    </h2>
  );
}

export function TextParas({ paras }: { paras: string[] }) {
  return (
    <>
      {paras.map((p, i) => (
        <p
          key={i}
          className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#1e293b]/85 md:text-lg"
        >
          {renderInline(p)}
        </p>
      ))}
    </>
  );
}

export function PunktListe({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 max-w-3xl space-y-3" role="list">
      {items.map((punkt) => (
        <li key={punkt} className="flex items-start gap-3">
          <span
            className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2d4196]"
            aria-hidden="true"
          />
          <span className="font-sans text-base text-[#1e293b] md:text-lg">
            {renderInline(punkt)}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AblaufSteps({ steps }: { steps: ContentSub[] }) {
  return (
    <ol className="mt-6 max-w-3xl list-none space-y-0 p-0">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-4 border-b border-[#e2e8f0] py-4 last:border-b-0"
        >
          <span
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[2px] bg-[#2d4196] font-heading text-sm font-bold text-white"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <div>
            <h3 className="font-heading text-base font-bold text-[#1e293b]">
              {step.title}
            </h3>
            {step.body.map((p, j) => (
              <p key={j} className="mt-1 font-sans text-[0.95rem] text-[#1e293b]/80">
                {renderInline(p)}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ZielTags({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      {items.map((tag) => (
        <span
          key={tag}
          className="rounded-[2px] border border-[#e2e8f0] bg-white px-4 py-1.5 font-sans text-sm text-[#1e293b]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/** Referenzprojekte als klickbare Bildkarten (echte Fotos, echte Projekte). */
export function ProjektKarten({ slugs }: { slugs: string[] }) {
  const projekte = slugs
    .map((slug) => getProjektBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (projekte.length === 0) return null;
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projekte.map((projekt) => (
        <Link
          key={projekt.slug}
          href={`/projekte/${projekt.slug}`}
          className="group overflow-hidden rounded-[2px] border border-[#e2e8f0] bg-white transition-shadow hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={projekt.image}
              alt={`${projekt.name} — Referenzprojekt in ${projekt.ort}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <p className="font-heading text-sm font-bold text-[#1e293b] group-hover:text-[#2d4196]">
              {projekt.name}
            </p>
            <p className="mt-0.5 font-sans text-xs text-[#1e293b]/60">
              {projekt.ort} · {projekt.jahr}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function AutorBox({ autor }: { autor: KernAutor }) {
  return (
    <div className="mt-12 flex max-w-3xl items-start gap-5 rounded-[2px] border border-[#e2e8f0] bg-white p-5">
      {autor.foto ? (
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-[2px]">
          <Image src={autor.foto.src} alt={autor.foto.alt} fill className="object-cover" sizes="80px" />
        </div>
      ) : (
        <div
          className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[2px] bg-[#f3f4f6] font-heading text-xl font-bold text-[#2d4196]"
          aria-hidden="true"
        >
          {autor.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </div>
      )}
      <div>
        <p className="font-heading text-[0.65rem] font-bold uppercase tracking-widest text-[#1e293b]/50">
          Fachlich verantwortlich
        </p>
        <p className="mt-1 font-heading text-base font-bold text-[#1e293b]">{autor.name}</p>
        <p className="font-sans text-sm font-semibold text-[#2d4196]">{autor.rolle}</p>
        <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#1e293b]/75">{autor.quali}</p>
      </div>
    </div>
  );
}

export function FaqSection({ fragen }: { fragen: ContentSub[] }) {
  return (
    <div className="mt-6 max-w-3xl">
      {fragen.map((faq) => (
        <details key={faq.title} className="group border-b border-[#e2e8f0]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-semibold text-[#1e293b] [&::-webkit-details-marker]:hidden">
            {faq.title}
            <span
              className="font-sans text-xl text-[#2d4196] transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="pb-5">
            {faq.body.map((p, i) => (
              <p key={i} className="mt-1 font-sans text-[0.95rem] leading-relaxed text-[#1e293b]/85">
                {renderInline(p)}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export function RatgeberLinks({
  artikel,
}: {
  artikel: { slug: string; titel: string; teaser: string }[];
}) {
  if (artikel.length === 0) return null;
  return (
    <div className="mt-6 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
      {artikel.map((a) => (
        <Link
          key={a.slug}
          href={`/wissen/${a.slug}`}
          className="group flex flex-col rounded-[2px] border border-[#e2e8f0] bg-white p-5 transition-shadow hover:shadow-lg"
        >
          <p className="font-heading text-sm font-bold leading-snug text-[#1e293b] group-hover:text-[#2d4196]">
            {a.titel}
          </p>
          <p className="mt-2 flex-1 font-sans text-sm text-[#1e293b]/70">{a.teaser}</p>
          <p className="mt-3 font-heading text-xs font-bold text-[#2d4196]">Artikel lesen →</p>
        </Link>
      ))}
    </div>
  );
}

export function CtaBlock({ titel, text }: { titel: string; text: string }) {
  return (
    <div className="mt-16 max-w-3xl rounded-[2px] bg-[#2d4196] p-8">
      <h2 className="font-heading text-xl font-extrabold text-white md:text-2xl">{titel}</h2>
      <p className="mt-2 font-sans text-base text-white/90">{text}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/#kontakt"
          className="inline-block rounded-[2px] bg-white px-6 py-2.5 font-heading text-sm font-bold text-[#2d4196] transition-colors hover:bg-[#f3f4f6]"
        >
          Anfrage senden
        </Link>
        <a
          href="tel:+49309369170"
          className="inline-block rounded-[2px] border border-white/40 px-6 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          030 936917-0
        </a>
      </div>
    </div>
  );
}

/** Brücke Wärmeschutz → Energie-Linie (nur auf der Wärmeschutz-Seite). */
export function EnergieBruecke() {
  return (
    <div className="mt-6 max-w-3xl rounded-[2px] border border-[#e2e8f0] bg-white p-6">
      <p className="font-sans text-base leading-relaxed text-[#1e293b]/85">
        Geht es über den reinen Nachweis hinaus — etwa um <strong className="font-semibold">KfW-/BAFA-Förderung</strong>,
        den <strong className="font-semibold">Sanierungsfahrplan (iSFP)</strong> oder einen{" "}
        <strong className="font-semibold">Energieausweis</strong> —, übernimmt die Energieberatung im Haus.
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        <Link href="/leistungen/energieberatung" className="font-heading text-sm font-bold text-[#2d4196] hover:underline">
          Zur Energieberatung →
        </Link>
        <Link
          href="/leistungen/energieberatung/gegnachweis"
          className="font-heading text-sm font-bold text-[#2d4196] hover:underline"
        >
          GEG-Nachweis im Detail →
        </Link>
      </div>
    </div>
  );
}
