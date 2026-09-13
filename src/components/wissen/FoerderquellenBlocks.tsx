import Link from "next/link";
import {
  FOERDERQUELLEN,
  type PfadStation,
  type Quelle,
  type Themenfeld,
  type VorhabenZeile,
} from "@/data/wissen/foerderquellen";
import {
  formatDatum,
  hostname,
  quelleByFolio,
  quellenAnker,
  quellenImThemenfeld,
} from "@/lib/foerderquellen";

/**
 * Bausteine des Quellenatlas (DESIGN.md, 13.09.2026). Alles Server
 * Components ohne Client-JavaScript. Haarlinien aus Schiefer mit geringer
 * Deckkraft, Ecken höchstens 2px, Archivo für Folionummern und Titel.
 */

const HAARLINIE = "border-[#1e293b]/15";

/* ------------------------------------------------------------------ */
/*  Einstieg                                                           */
/* ------------------------------------------------------------------ */

export function Kennzahlenzeile() {
  const werte = [
    { label: "Quellen", wert: String(FOERDERQUELLEN.quellen.length) },
    { label: "Themenfelder", wert: String(FOERDERQUELLEN.themenfelder.length) },
    { label: "Geprüft am", wert: formatDatum(FOERDERQUELLEN.geprueft) },
  ];
  return (
    <dl className={`mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t ${HAARLINIE} pt-4`}>
      {werte.map((w) => (
        <div key={w.label} className="min-w-0">
          <dt className="font-sans text-xs uppercase tracking-wider text-[#1e293b]/55">
            {w.label}
          </dt>
          <dd className="mt-1 font-heading text-lg font-black text-[#1e293b] md:text-2xl">
            {w.label === "Geprüft am" ? (
              <time dateTime={FOERDERQUELLEN.geprueft}>{w.wert}</time>
            ) : (
              w.wert
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function DownloadSchaltflaechen() {
  const basis = FOERDERQUELLEN.path;
  const klasse =
    "inline-flex items-center gap-2 rounded-[2px] border border-[#1e293b]/30 px-5 py-3 font-sans text-base font-semibold text-[#1e293b] transition-colors hover:border-[#2d4196] hover:text-[#2d4196]";
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={`${basis}/quellen.csv`} download className={klasse}>
        <span className="font-heading text-xs font-bold tracking-widest text-[#2d4196]">CSV</span>
        Quellenverzeichnis herunterladen
      </a>
      <a href={`${basis}/quellenpfad.svg`} download className={klasse}>
        <span className="font-heading text-xs font-bold tracking-widest text-[#2d4196]">SVG</span>
        Quellenpfad als Grafik
      </a>
    </div>
  );
}

/**
 * Quellenpfad als echter HTML-Text. Drei nummerierte Stationen, durch
 * Haarlinien verbunden. Unter md gestapelt mit senkrechter Verbindung.
 */
export function Quellenpfad({ stationen }: { stationen: PfadStation[] }) {
  return (
    <figure aria-labelledby="quellenpfad-titel" className={`rounded-[2px] border ${HAARLINIE} bg-white p-6 md:p-8`}>
      <figcaption>
        <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
          Quellenpfad
        </p>
        <p id="quellenpfad-titel" className="mt-1 font-heading text-lg font-bold text-[#1e293b]">
          Vom Vorhaben zur amtlichen Quelle
        </p>
      </figcaption>
      <ol className="mt-6 flex flex-col md:flex-row md:items-stretch">
        {stationen.map((s, i) => (
          <li key={s.nummer} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="mx-auto my-1 h-6 w-px shrink-0 bg-[#1e293b]/30 md:mx-0 md:my-0 md:mt-10 md:h-px md:w-6"
              />
            )}
            <div className="flex-1 border-l-4 border-[#2d4196] pl-4">
              <span className="block font-heading text-2xl font-black leading-none text-[#2d4196]">
                {s.nummer}
              </span>
              <span className="mt-2 block font-heading text-base font-bold text-[#1e293b]">
                {s.titel}
              </span>
              <span className="mt-1 block font-sans text-sm leading-relaxed text-[#1e293b]/75">
                {s.text}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/*  Lesehilfe                                                          */
/* ------------------------------------------------------------------ */

export function Lesehilfe() {
  const aufbau = [
    "Folionummer Q-01 bis Q-10 und die ausgebende Stelle als Kennung.",
    "Titel als Link auf die offizielle Seite, daneben die Herkunftsadresse.",
    "Zielgruppe, Thema, Dokumentart, Stand und Prüfdatum im Raster.",
    "Ein Praxishinweis aus dem Büro und, wo vorhanden, das direkte Dokument.",
  ];
  return (
    <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
      <div>
        <h3 className="font-heading text-lg font-bold text-[#1e293b]">So ist ein Eintrag aufgebaut</h3>
        <ol className={`mt-4 divide-y ${HAARLINIE} border-y ${HAARLINIE}`}>
          {aufbau.map((text, i) => (
            <li key={i} className="flex gap-4 py-3">
              <span className="font-heading text-sm font-black text-[#2d4196]">{i + 1}</span>
              <span className="font-sans text-base leading-relaxed text-[#1e293b]/80">{text}</span>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold text-[#1e293b]">Welche Dokumentarten vorkommen</h3>
        <dl className={`mt-4 divide-y ${HAARLINIE} border-y ${HAARLINIE}`}>
          {FOERDERQUELLEN.dokumentarten.map((d) => (
            <div key={d.name} className="py-3">
              <dt className="font-heading text-sm font-bold text-[#1e293b]">{d.name}</dt>
              <dd className="mt-1 font-sans text-base leading-relaxed text-[#1e293b]/75">
                {d.beschreibung}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold text-[#1e293b]">Redaktionshinweis</h3>
        <div className={`mt-4 border-y ${HAARLINIE} py-3 font-sans text-base leading-relaxed text-[#1e293b]/80`}>
          <p>
            Wir kuratieren und erklären. Ob und in welcher Höhe gefördert wird, entscheidet die
            ausgebende Stelle nach den Regeln, die zum Zeitpunkt des Antrags gelten.
          </p>
          <p className="mt-3">
            Das Prüfdatum bezeichnet unsere Kontrolle von Link und Inhalt. Es ist keine Freigabe durch
            eine Behörde und ersetzt nicht den Blick in die verlinkte Originalseite.
          </p>
          <p className="mt-3">
            Wir spiegeln keine amtlichen Dokumente. Jeder Link führt zur Stelle, die das Dokument
            herausgibt und pflegt.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quellenatlas                                                       */
/* ------------------------------------------------------------------ */

function MetaZelle({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <dt className="font-sans text-xs uppercase tracking-wider text-[#1e293b]/55">{label}</dt>
      <dd className="mt-1 font-sans text-sm leading-snug text-[#1e293b] md:text-base">{children}</dd>
    </div>
  );
}

export function Quellenfolio({ quelle }: { quelle: Quelle }) {
  const anker = quellenAnker(quelle);
  return (
    <article
      id={anker}
      aria-labelledby={`${anker}-titel`}
      className={`scroll-mt-28 rounded-[2px] border ${HAARLINIE} bg-white`}
    >
      <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${HAARLINIE} px-5 py-3 md:px-6`}>
        <span className="font-heading text-xl font-black leading-none text-[#2d4196]">
          {quelle.folio}
        </span>
        <span className={`rounded-[2px] border ${HAARLINIE} px-2 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1e293b]/70`}>
          {quelle.herausgeberKurz}
        </span>
      </div>

      <div className="px-5 py-5 md:px-6">
        <h4 id={`${anker}-titel`} className="font-heading text-lg font-bold leading-snug text-[#1e293b] md:text-xl">
          <a
            href={quelle.url}
            rel="noopener"
            className="underline decoration-[#2d4196]/40 decoration-1 underline-offset-4 transition-colors hover:text-[#2d4196] hover:decoration-[#2d4196]"
          >
            {quelle.titel}
          </a>
        </h4>
        <p className="mt-1 font-sans text-sm text-[#1e293b]/60">
          {quelle.herausgeber} · {hostname(quelle.url)}
        </p>

        <dl className={`mt-5 grid gap-4 border-t ${HAARLINIE} pt-4 sm:grid-cols-2`}>
          <MetaZelle label="Zielgruppe">{quelle.zielgruppe}</MetaZelle>
          <MetaZelle label="Thema">{quelle.thema}</MetaZelle>
        </dl>
        <dl className={`mt-4 grid gap-4 border-t ${HAARLINIE} pt-4 sm:grid-cols-3`}>
          <MetaZelle label="Dokumentart">{quelle.dokumentart}</MetaZelle>
          <MetaZelle label="Stand">{quelle.stand}</MetaZelle>
          <MetaZelle label="Geprüft am">
            <time dateTime={FOERDERQUELLEN.geprueft}>{formatDatum(FOERDERQUELLEN.geprueft)}</time>
          </MetaZelle>
        </dl>

        <div className={`mt-4 border-t ${HAARLINIE} pt-4`}>
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
            Praxishinweis
          </p>
          <p className="mt-2 font-sans text-base leading-relaxed text-[#1e293b]/80">
            {quelle.praxishinweis}
          </p>
          {quelle.dokument && (
            <p className="mt-3 font-sans text-sm text-[#1e293b]/80">
              <span className={`mr-2 inline-block rounded-[2px] border ${HAARLINIE} px-1.5 py-0.5 font-heading text-xs font-bold uppercase tracking-wider text-[#1e293b]/70`}>
                {quelle.dokument.format}
              </span>
              <a
                href={quelle.dokument.url}
                rel="noopener"
                className="font-semibold text-[#2d4196] underline decoration-1 underline-offset-4"
              >
                {quelle.dokument.label}
              </a>
              {quelle.dokument.format === "pdf" && (
                <span className="text-[#1e293b]/60"> (öffnet das Dokument beim Herausgeber)</span>
              )}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function Kapitelleiste({ themenfelder }: { themenfelder: Themenfeld[] }) {
  return (
    <nav aria-label="Themenfelder" className="xl:sticky xl:top-28">
      <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
        Kapitel
      </p>
      <ol className={`mt-3 flex flex-wrap gap-x-6 gap-y-2 border-t ${HAARLINIE} pt-3 xl:block xl:divide-y xl:divide-[#1e293b]/15`}>
        {themenfelder.map((t) => (
          <li key={t.id} className="xl:py-2">
            <a
              href={`#themenfeld-${t.id}`}
              className="inline-flex items-baseline gap-2 font-sans text-base text-[#1e293b]/80 transition-colors hover:text-[#2d4196]"
            >
              <span className="font-heading text-xs font-black text-[#2d4196]">{t.nummer}</span>
              {t.titel}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Quellenatlas() {
  const { themenfelder } = FOERDERQUELLEN;
  return (
    <div className="xl:grid xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-16">
      <div className="mb-10 xl:mb-0">
        <Kapitelleiste themenfelder={themenfelder} />
      </div>
      <div className="space-y-14">
        {themenfelder.map((t) => (
          <section
            key={t.id}
            id={`themenfeld-${t.id}`}
            aria-labelledby={`themenfeld-${t.id}-titel`}
            className="scroll-mt-28"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-3xl font-black leading-none text-[#2d4196] md:text-4xl">
                {t.nummer}
              </span>
              <h3 id={`themenfeld-${t.id}-titel`} className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                {t.titel}
              </h3>
            </div>
            <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-[#1e293b]/75 md:text-lg">
              {t.einleitung}
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {quellenImThemenfeld(t.id).map((q) => (
                <Quellenfolio key={q.id} quelle={q} />
              ))}
            </div>
          </section>
        ))}
        <p className={`border-t ${HAARLINIE} pt-4 font-sans text-sm text-[#1e293b]/60`}>
          Version {FOERDERQUELLEN.version} · Quellen geprüft am{" "}
          <time dateTime={FOERDERQUELLEN.geprueft}>{formatDatum(FOERDERQUELLEN.geprueft)}</time> ·
          Herausgeber der Zusammenstellung: Dr.-Ing. Formazin &amp; Partner mbB
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Vom Vorhaben zur Quelle                                            */
/* ------------------------------------------------------------------ */

export function VorhabenTabelle({ zeilen }: { zeilen: VorhabenZeile[] }) {
  return (
    <figure className={`overflow-hidden rounded-[2px] border ${HAARLINIE}`}>
      <figcaption className={`border-b ${HAARLINIE} bg-[#f3f4f6] px-4 py-3 font-heading text-sm font-bold text-[#1e293b] md:px-5 md:text-base`}>
        Typische Anliegen, die passenden Folios und die Seite bei uns
      </figcaption>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className={`border-b ${HAARLINIE}`}>
              {["Anliegen", "Quellen", "Passende Seite"].map((label) => (
                <th
                  key={label}
                  scope="col"
                  className="whitespace-nowrap px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wide text-[#1e293b]/55 md:px-5"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {zeilen.map((z) => (
              <tr key={z.anliegen} className="border-b border-[#1e293b]/8 last:border-b-0 even:bg-[#f3f4f6]/40">
                <td className="px-4 py-3 align-top font-sans text-sm font-semibold text-[#1e293b] md:px-5 md:text-base">
                  {z.anliegen}
                </td>
                <td className="px-4 py-3 align-top md:px-5">
                  <ul className="flex flex-wrap gap-2">
                    {z.folios.map((folio) => {
                      const q = quelleByFolio(folio);
                      return (
                        <li key={folio}>
                          <a
                            href={`#${quellenAnker(q)}`}
                            title={q.titel}
                            className={`inline-block rounded-[2px] border ${HAARLINIE} px-3 py-2 font-heading text-sm font-black text-[#2d4196] transition-colors hover:border-[#2d4196]`}
                          >
                            {folio}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td className="px-4 py-3 align-top font-sans text-sm md:px-5 md:text-base">
                  <Link href={z.seiteHref} className="font-semibold text-[#2d4196] underline decoration-1 underline-offset-4">
                    {z.seiteLabel}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
