import { FOERDERQUELLEN, type PfadStation, type Quelle } from "@/data/wissen/foerderquellen";

/** Basis-URL des Live-Auftritts (identisch zu metadataBase in layout.tsx). */
export const SITE = "https://www.formazin-partner.de";
export const ORG_ID = `${SITE}/#localbusiness`;
export const PAGE_URL = `${SITE}${FOERDERQUELLEN.path}`;

/** ISO-Datum als deutsches Datum, z. B. 13.09.2026. */
export function formatDatum(iso: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/** Anker eines Quelleneintrags auf der Seite. */
export function quellenAnker(quelle: Pick<Quelle, "id">) {
  return `quelle-${quelle.id}`;
}

export function quelleByFolio(folio: string) {
  const quelle = FOERDERQUELLEN.quellen.find((q) => q.folio === folio);
  if (!quelle) throw new Error(`Unbekannte Folionummer: ${folio}`);
  return quelle;
}

export function quellenImThemenfeld(themenfeldId: string) {
  return FOERDERQUELLEN.quellen.filter((q) => q.themenfeld === themenfeldId);
}

export function themenfeldName(themenfeldId: string) {
  return FOERDERQUELLEN.themenfelder.find((t) => t.id === themenfeldId)?.titel ?? themenfeldId;
}

/** Hostname ohne www., als sichtbare Herkunftsangabe neben dem Link. */
export function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

/* ------------------------------------------------------------------ */
/*  CSV                                                                */
/* ------------------------------------------------------------------ */

/**
 * Tabellenkalkulations-sicheres Quoting. Werte, die wie eine Formel
 * beginnen, erhalten einen führenden Apostroph (Formelschutz).
 */
function csvZelle(value: string | number) {
  const text = String(value);
  const safe = /^[\s]*[=+@\-\t\r]/.test(text) ? `'${text}` : text;
  return `"${safe.replace(/"/g, '""')}"`;
}

export function csvZeilen(): (string | number)[][] {
  const header = [
    "ID",
    "Themenfeld",
    "Herausgeber",
    "Titel",
    "Dokumentart",
    "Zielgruppe",
    "Thema",
    "Stand",
    "Praxishinweis",
    "Originalquelle",
    "Direktes Dokument",
    "Dokumentformat",
    "Geprüft am",
    "Version",
    "Direktlink",
  ];
  const rows = FOERDERQUELLEN.quellen.map((q) => [
    q.folio,
    themenfeldName(q.themenfeld),
    q.herausgeber,
    q.titel,
    q.dokumentart,
    q.zielgruppe,
    q.thema,
    q.stand,
    q.praxishinweis,
    q.url,
    q.dokument?.url ?? "",
    q.dokument ? q.dokument.format.toUpperCase() : "",
    FOERDERQUELLEN.geprueft,
    FOERDERQUELLEN.version,
    `${PAGE_URL}#${quellenAnker(q)}`,
  ]);
  return [header, ...rows];
}

/** CSV mit UTF-8-BOM, Semikolon, CRLF, als Anhang und ohne Indexierung. */
export function csvResponse(rows: (string | number)[][], filename: string) {
  const body =
    "\uFEFF" + rows.map((row) => row.map(csvZelle).join(";")).join("\r\n") + "\r\n";
  return new Response(body, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "X-Robots-Tag": "noindex",
    },
  });
}

/* ------------------------------------------------------------------ */
/*  SVG                                                                */
/* ------------------------------------------------------------------ */

function xml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Greedy-Zeilenumbruch nach Zeichenzahl (SVG kennt keinen Fließtext). */
function umbrechen(text: string, maxZeichen: number) {
  const zeilen: string[] = [];
  let zeile = "";
  for (const wort of text.split(" ")) {
    const test = zeile ? `${zeile} ${wort}` : wort;
    if (test.length > maxZeichen && zeile) {
      zeilen.push(zeile);
      zeile = wort;
    } else {
      zeile = test;
    }
  }
  if (zeile) zeilen.push(zeile);
  return zeilen;
}

const BLAU = "#2d4196";
const SCHIEFER = "#1e293b";
const GRAU = "#f3f4f6";
const HEADING = "Archivo, 'Archivo Narrow', Arial, Helvetica, sans-serif";
const BODY = "'Archivo Narrow', Archivo, Arial, Helvetica, sans-serif";

/**
 * Quellenpfad-Grafik aus denselben Stationen wie die HTML-Fassung.
 * Drei nummerierte Stationen, durch Haarlinien verbunden, Ingenieur-Stil.
 */
export function quellenpfadSvg(stationen: PfadStation[] = FOERDERQUELLEN.pfad) {
  const breite = 1200;
  const hoehe = 460;
  const rand = 60;
  const oben = 150;
  const kastenHoehe = 200;
  const abstand = 48;
  const kastenBreite = (breite - 2 * rand - abstand * (stationen.length - 1)) / stationen.length;

  const kaesten = stationen
    .map((s, i) => {
      const x = rand + i * (kastenBreite + abstand);
      const zeilen = umbrechen(s.text, 34);
      const textZeilen = zeilen
        .map(
          (z, j) =>
            `<text x="${x + 28}" y="${oben + 118 + j * 24}" font-family="${BODY}" font-size="17" fill="${SCHIEFER}" fill-opacity="0.8">${xml(z)}</text>`,
        )
        .join("");
      const verbinder =
        i < stationen.length - 1
          ? `<line x1="${x + kastenBreite}" y1="${oben + kastenHoehe / 2}" x2="${x + kastenBreite + abstand}" y2="${oben + kastenHoehe / 2}" stroke="${SCHIEFER}" stroke-opacity="0.35" stroke-width="1.5"/>`
          : "";
      return `
  <g>
    <rect x="${x}" y="${oben}" width="${kastenBreite}" height="${kastenHoehe}" rx="2" fill="#ffffff" stroke="${SCHIEFER}" stroke-opacity="0.15"/>
    <rect x="${x}" y="${oben}" width="6" height="${kastenHoehe}" fill="${BLAU}"/>
    <text x="${x + 28}" y="${oben + 52}" font-family="${HEADING}" font-size="34" font-weight="900" fill="${BLAU}">${xml(s.nummer)}</text>
    <text x="${x + 28}" y="${oben + 84}" font-family="${HEADING}" font-size="20" font-weight="700" fill="${SCHIEFER}">${xml(s.titel)}</text>
    ${textZeilen}
  </g>
  ${verbinder}`;
    })
    .join("");

  const beschreibung = stationen.map((s) => `${s.nummer} ${s.titel}: ${s.text}`).join(" ");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${breite}" height="${hoehe}" viewBox="0 0 ${breite} ${hoehe}" role="img" aria-labelledby="titel beschreibung">
  <title id="titel">Quellenpfad Förderung und Energieberatung</title>
  <desc id="beschreibung">${xml(beschreibung)}</desc>
  <rect width="${breite}" height="${hoehe}" fill="${GRAU}"/>
  <text x="${rand}" y="62" font-family="${HEADING}" font-size="14" font-weight="700" letter-spacing="2" fill="${BLAU}">${xml(FOERDERQUELLEN.kennzeile.toUpperCase())}</text>
  <text x="${rand}" y="100" font-family="${HEADING}" font-size="30" font-weight="900" fill="${SCHIEFER}">Vom Vorhaben zur amtlichen Quelle</text>
  <line x1="${rand}" y1="${oben - 24}" x2="${breite - rand}" y2="${oben - 24}" stroke="${SCHIEFER}" stroke-opacity="0.15"/>
  ${kaesten}
  <line x1="${rand}" y1="${hoehe - 60}" x2="${breite - rand}" y2="${hoehe - 60}" stroke="${SCHIEFER}" stroke-opacity="0.15"/>
  <text x="${rand}" y="${hoehe - 30}" font-family="${BODY}" font-size="15" fill="${SCHIEFER}" fill-opacity="0.65">Dr.-Ing. Formazin &amp; Partner mbB · Quellen geprüft am ${formatDatum(FOERDERQUELLEN.geprueft)} · ${xml(PAGE_URL)}</text>
</svg>
`;
}

export function svgResponse(svg: string, filename: string) {
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
