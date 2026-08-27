import Link from "next/link";
import Image from "next/image";
import {
  Anvil,
  BrickWall,
  Building2,
  CheckCircle2,
  FileCheck2,
  FileText,
  Layers,
  TreePine,
} from "lucide-react";
import { renderInline } from "@/components/energie/richText";
import { getProjektBySlug } from "@/data/projekte";
import type { ContentSub } from "@/lib/content";

/**
 * Signature-Sections der KERN-Leistungsseiten — jede Leistung bekommt ein
 * eigenes Gesicht. Layout-Struktur nach benannten Relume-Wireframes
 * (SECTION-PLAN-KERN-Leistungen-2026-08-27.md), Skin = Formazin-Tokens.
 * Kein Relume-Code vendored; nur echte Projektfotografie.
 */

const CONTAINER = "mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16";

type HeroProps = {
  eyebrow: string;
  titel: string;
  lead?: string;
  bild?: string;
  bildAlt: string;
  bilder?: string[];
  punkte?: string[];
};

/** Wireframe: Relume Header 1 — 2 Spalten, Bild rechts. */
export function HeroSplit({ eyebrow, titel, lead, bild, bildAlt }: HeroProps) {
  return (
    <div className={`${CONTAINER} mt-8`}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
            {titel}
          </h1>
          {lead && (
            <p className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80">{lead}</p>
          )}
        </div>
        {bild && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
            <Image
              src={bild}
              alt={bildAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}

/** Wireframe: Relume Header 111 — Background-Image mit Text-Panel (Idiom der Home-/Energie-Heroes). */
export function HeroBackground({ eyebrow, titel, lead, bild, bildAlt }: HeroProps) {
  return (
    <div className="relative mt-0">
      <div className="relative min-h-[440px] md:min-h-[520px]">
        {bild && (
          <Image src={bild} alt={bildAlt} fill className="object-cover" sizes="100vw" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/85 via-[#1e293b]/55 to-[#1e293b]/20" />
        <div className={`${CONTAINER} relative flex min-h-[440px] items-center md:min-h-[520px]`}>
          <div className="max-w-2xl py-16">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-white/80">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
              {titel}
            </h1>
            {lead && <p className="mt-5 font-sans text-lg leading-relaxed text-white/85">{lead}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Wireframe: Relume Header 145 — Titel, darunter edge-to-edge Bildreihe. */
export function HeroBildreihe({ eyebrow, titel, lead, bilder = [], bildAlt }: HeroProps) {
  return (
    <div className="mt-8">
      <div className={CONTAINER}>
        <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
          {titel}
        </h1>
        {lead && (
          <p className="mt-5 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/80">
            {lead}
          </p>
        )}
      </div>
      {bilder.length > 0 && (
        <div className="mt-10 grid grid-cols-3 gap-1.5 md:gap-2">
          {bilder.map((src, i) => (
            <div key={src} className={`relative overflow-hidden ${i === 1 ? "aspect-[3/4]" : "aspect-[3/4]"}`}>
              <Image
                src={src}
                alt={`${bildAlt} — Projektfoto ${i + 1}`}
                fill
                className="object-cover"
                sizes="33vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** Wireframe: Relume Header 118 — Text + 3 Mini-Spalten + breites Bild unten. */
export function HeroColumns({ eyebrow, titel, lead, bild, bildAlt, punkte = [] }: HeroProps) {
  return (
    <div className={`${CONTAINER} mt-8`}>
      <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
        {titel}
      </h1>
      {lead && (
        <p className="mt-5 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/80">{lead}</p>
      )}
      {punkte.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {punkte.map((punkt, i) => (
            <div key={punkt} className="border-t-2 border-[#2d4196] pt-3">
              <p className="font-heading text-2xl font-black text-[#2d4196]/25">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 font-heading text-base font-bold text-[#1e293b]">{punkt}</p>
            </div>
          ))}
        </div>
      )}
      {bild && (
        <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-[2px]">
          <Image src={bild} alt={bildAlt} fill className="object-cover" sizes="100vw" priority />
        </div>
      )}
    </div>
  );
}

/** Wireframe: Relume Header 19 — kompakter 2-Spalter, Bild links. */
export function HeroKompakt({ eyebrow, titel, lead, bild, bildAlt }: HeroProps) {
  return (
    <div className={`${CONTAINER} mt-8`}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-14">
        {bild && (
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[2px] lg:order-1 lg:col-span-2">
            <Image
              src={bild}
              alt={bildAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        )}
        <div className="order-1 lg:order-2 lg:col-span-3">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl">
            {titel}
          </h1>
          {lead && (
            <p className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80">{lead}</p>
          )}
        </div>
      </div>
    </div>
  );
}

const BAUWEISEN_ICONS = [Layers, Anvil, TreePine, BrickWall, Building2];

/** Wireframe: Relume Layout 303 — 4-Spalten-Benefits-Grid mit Icons (Bauweisen). */
export function BauweisenGrid({ subs }: { subs: ContentSub[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {subs.map((sub, i) => {
        const Icon = BAUWEISEN_ICONS[i] ?? Building2;
        return (
          <div key={sub.title} className="rounded-[2px] border border-[#e2e8f0] bg-white p-6">
            <Icon className="h-7 w-7 text-[#2d4196]" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-base font-bold text-[#1e293b]">{sub.title}</h3>
            {sub.body.map((p, j) => (
              <p key={j} className="mt-2 font-sans text-sm leading-relaxed text-[#1e293b]/75">
                {renderInline(p)}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

/** Wireframe: Relume Comparison 1 — zwei Karten nebeneinander (Nachweis vs. Konzept). */
export function VergleichKarten({
  subs,
  ratgeberSlug,
}: {
  subs: ContentSub[];
  ratgeberSlug?: string;
}) {
  const icons = [FileText, FileCheck2];
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {subs.map((sub, i) => {
          const Icon = icons[i] ?? FileText;
          // Konvention der MD-Datei: erste Zeile = Einordnungssatz, Rest = Checkpunkte
          const [first, ...items] = sub.body;
          return (
            <div
              key={sub.title}
              className={`rounded-[2px] border p-7 ${
                i === 1
                  ? "border-[#2d4196] bg-[#2d4196] text-white"
                  : "border-[#e2e8f0] bg-white"
              }`}
            >
              <Icon
                className={`h-7 w-7 ${i === 1 ? "text-white" : "text-[#2d4196]"}`}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3
                className={`mt-4 font-heading text-lg font-bold ${
                  i === 1 ? "text-white" : "text-[#1e293b]"
                }`}
              >
                {sub.title}
              </h3>
              {first && (
                <p
                  className={`mt-2 font-sans text-sm leading-relaxed ${
                    i === 1 ? "text-white/85" : "text-[#1e293b]/75"
                  }`}
                >
                  {renderInline(first)}
                </p>
              )}
              <ul className="mt-4 space-y-2.5" role="list">
                {items.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        i === 1 ? "text-white/80" : "text-[#2d4196]"
                      }`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span
                      className={`font-sans text-sm ${i === 1 ? "text-white/90" : "text-[#1e293b]/85"}`}
                    >
                      {renderInline(punkt)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      {ratgeberSlug && (
        <p className="mt-5 font-sans text-sm text-[#1e293b]/70">
          Unsicher, was Ihr Bau braucht?{" "}
          <Link href={`/wissen/${ratgeberSlug}`} className="font-semibold text-[#2d4196] hover:underline">
            Der Ratgeber erklärt den Unterschied →
          </Link>{" "}
          — oder wir ordnen Ihr Vorhaben direkt ein.
        </p>
      )}
    </div>
  );
}

/** Wireframe: Relume Portfolio 22 — große Projekt-Teaser mit Tags, alternierend. */
export function ProjektShowcase({ slugs }: { slugs: string[] }) {
  const projekte = slugs
    .map((slug) => getProjektBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <div className="mt-10 space-y-12">
      {projekte.map((projekt, i) => (
        <div
          key={projekt.slug}
          className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2 lg:gap-12"
        >
          <Link
            href={`/projekte/${projekt.slug}`}
            className={`group relative block aspect-[4/3] overflow-hidden rounded-[2px] ${
              i % 2 === 1 ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={projekt.image}
              alt={`${projekt.name} — ${projekt.typ} in ${projekt.ort}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>
          <div className={i % 2 === 1 ? "lg:order-1" : ""}>
            <div className="flex flex-wrap gap-2">
              {[projekt.kategorie, projekt.typ, `${projekt.ort} · ${projekt.jahr}`].map((tag) => (
                <span
                  key={tag}
                  className="rounded-[2px] border border-[#e2e8f0] bg-white px-3 py-1 font-sans text-xs text-[#1e293b]/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
              {projekt.name}
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-[#1e293b]/80">
              {projekt.beschreibung}
            </p>
            <Link
              href={`/projekte/${projekt.slug}`}
              className="mt-4 inline-block font-heading text-sm font-bold text-[#2d4196] hover:underline"
            >
              Projekt ansehen →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Wireframe: Relume Timeline 1 — vertikaler Zeitstrahl statt Stepper. */
export function TimelineAblauf({ steps }: { steps: ContentSub[] }) {
  return (
    <div className="relative mt-8 max-w-3xl">
      <div className="absolute bottom-2 left-[17px] top-2 w-px bg-[#2d4196]/25" aria-hidden="true" />
      <ol className="list-none space-y-8 p-0">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-6">
            <span
              className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#2d4196] bg-white font-heading text-sm font-bold text-[#2d4196]"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div className="pt-1">
              <p className="font-heading text-[0.65rem] font-bold uppercase tracking-widest text-[#2d4196]">
                Phase {i + 1}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1e293b]">{step.title}</h3>
              {step.body.map((p, j) => (
                <p key={j} className="mt-1.5 font-sans text-[0.95rem] leading-relaxed text-[#1e293b]/80">
                  {renderInline(p)}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Wireframe: Relume Layout 645 — Checkliste links, Bild rechts. */
export function ChecklisteSplit({
  items,
  paras,
  bild,
  bildAlt,
}: {
  items: string[];
  paras: string[];
  bild?: string;
  bildAlt: string;
}) {
  return (
    <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        {paras.map((p, i) => (
          <p key={i} className="mt-2 font-sans text-base leading-relaxed text-[#1e293b]/85 md:text-lg">
            {renderInline(p)}
          </p>
        ))}
        <ul className="mt-6 space-y-3.5" role="list">
          {items.map((punkt) => (
            <li key={punkt} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2d4196]"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="font-sans text-base text-[#1e293b] md:text-lg">
                {renderInline(punkt)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {bild && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
          <Image
            src={bild}
            alt={bildAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      )}
    </div>
  );
}
