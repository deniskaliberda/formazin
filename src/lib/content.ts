import fs from "node:fs";
import path from "node:path";

/**
 * Minimaler Markdown-Content-Layer für den KERN-Ausbau.
 *
 * Die Texte der Leistungs-, Wissen- und Team-Seiten liegen als einfache
 * Markdown-Dateien unter `content/` — bewusst so, dass das Büro (Frauke,
 * Feith) sie ohne Code-Kenntnisse bearbeiten kann (siehe content/README.md).
 * Es gibt keine Markdown-Dependency: dieser Parser versteht genau die
 * Untermenge, die die Templates brauchen (Frontmatter, ##/###-Überschriften,
 * Absätze, "- "-Listen, **fett**). HTML-Kommentare (<!-- ... -->) sind
 * Redaktionsnotizen und werden nie gerendert.
 */

export type ContentSub = { title: string; body: string[] };

export type ContentSection = {
  heading: string;
  paras: string[];
  items: string[];
  subs: ContentSub[];
};

export type ContentDoc = {
  slug: string;
  meta: Record<string, string>;
  /** Absätze vor der ersten ##-Überschrift (= Direkt-Antwort / Kurzprofil). */
  intro: string[];
  /** "- "-Punkte vor der ersten ##-Überschrift (Team-Dateien: Qualifikationen). */
  introItems: string[];
  sections: ContentSection[];
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function parse(slug: string, raw: string): ContentDoc {
  const lines = raw.split(/\r?\n/);
  const meta: Record<string, string> = {};
  let i = 0;

  // Frontmatter zwischen den beiden ersten "---"-Zeilen
  if (lines[0]?.trim() === "---") {
    i = 1;
    while (i < lines.length && lines[i].trim() !== "---") {
      const m = lines[i].match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
      if (m) meta[m[1]] = m[2].trim();
      i++;
    }
    i++; // schließendes ---
  }

  const doc: ContentDoc = { slug, meta, intro: [], introItems: [], sections: [] };
  let section: ContentSection | null = null;
  let sub: ContentSub | null = null;
  let inComment = false;

  for (; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Redaktionsnotizen überspringen (auch mehrzeilig)
    if (inComment) {
      if (trimmed.includes("-->")) inComment = false;
      continue;
    }
    if (trimmed.startsWith("<!--")) {
      if (!trimmed.includes("-->")) inComment = true;
      continue;
    }

    if (trimmed === "") continue;

    if (trimmed.startsWith("## ")) {
      sub = null;
      section = { heading: trimmed.slice(3).trim(), paras: [], items: [], subs: [] };
      doc.sections.push(section);
      continue;
    }
    if (trimmed.startsWith("### ")) {
      if (!section) continue;
      sub = { title: trimmed.slice(4).trim(), body: [] };
      section.subs.push(sub);
      continue;
    }
    if (trimmed.startsWith("- ")) {
      const item = trimmed.slice(2).trim();
      if (sub) sub.body.push(item);
      else if (section) section.items.push(item);
      else doc.introItems.push(item);
      continue;
    }

    // normaler Absatz
    if (sub) sub.body.push(trimmed);
    else if (section) section.paras.push(trimmed);
    else doc.intro.push(trimmed);
  }

  return doc;
}

function readDoc(dir: string, slug: string): ContentDoc {
  const file = path.join(CONTENT_ROOT, dir, `${slug}.md`);
  return parse(slug, fs.readFileSync(file, "utf8"));
}

function readDir(dir: string): ContentDoc[] {
  const full = path.join(CONTENT_ROOT, dir);
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readDoc(dir, f.replace(/\.md$/, "")));
}

/** Alle Leistungsseiten, sortiert nach Frontmatter-Feld `reihenfolge`. */
export function getLeistungen(): ContentDoc[] {
  return readDir("leistungen").sort(
    (a, b) => Number(a.meta.reihenfolge ?? 99) - Number(b.meta.reihenfolge ?? 99),
  );
}

export function getLeistung(slug: string): ContentDoc | null {
  try {
    return readDoc("leistungen", slug);
  } catch {
    return null;
  }
}

/** Alle Wissen-Artikel, sortiert nach `reihenfolge`. */
export function getWissenArtikel(): ContentDoc[] {
  return readDir("wissen").sort(
    (a, b) => Number(a.meta.reihenfolge ?? 99) - Number(b.meta.reihenfolge ?? 99),
  );
}

export function getWissen(slug: string): ContentDoc | null {
  try {
    return readDoc("wissen", slug);
  } catch {
    return null;
  }
}

/** Team-Dateien in fester Reihenfolge (Über-uns). */
export function getTeam(): ContentDoc[] {
  const order = ["karsten", "oda", "frauke", "feith"];
  return order
    .map((slug) => {
      try {
        return readDoc("team", slug);
      } catch {
        return null;
      }
    })
    .filter((d): d is ContentDoc => d !== null);
}

/** Hilfsfunktion: kommagetrennte Frontmatter-Liste → Array. */
export function metaList(doc: ContentDoc, key: string): string[] {
  return (doc.meta[key] ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Section per Überschrift finden (z. B. "Häufige Fragen"). */
export function findSection(doc: ContentDoc, heading: string): ContentSection | undefined {
  return doc.sections.find((s) => s.heading.toLowerCase() === heading.toLowerCase());
}
