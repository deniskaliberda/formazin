/**
 * Typisierter Content-Layer für die Energieberatungs-Seiten.
 *
 * Ein Content-Objekt (EnergiePageContent) beschreibt eine komplette Seite
 * deklarativ. Das ServicePageTemplate rendert daraus die Seite und injiziert
 * das JSON-LD. Die Typen sind generisch genug für die drei Seiten-Arten des
 * Clusters gehalten (Service-, Wissens- und Geo-Seiten):
 *   - Service-Seiten (Pillar + Spokes) nutzen priceTables, serviceSplit, cases.
 *   - Wissens-/Geo-Seiten lassen diese optionalen Blöcke einfach weg.
 *
 * Basis der Preis-/FAQ-Daten: content-rework/01-pillar-energieberatung.md.
 * WICHTIG: Zahlen und FAQ-Texte müssen 1:1 mit der Content-Quelle
 * übereinstimmen — der sichtbare FAQ-Text ist zugleich der FAQPage-Schema-Text.
 */

export type PageKind = "service" | "wissen" | "geo";

/* ------------------------------------------------------------------ */
/*  Metadaten & Schema-Hints                                           */
/* ------------------------------------------------------------------ */

export interface EnergiePageMeta {
  /** Pfad der Seite, z. B. "/leistungen/energieberatung" */
  slug: string;
  /** Canonical-Pfad (i. d. R. identisch zu slug) */
  canonical: string;
  /** <title>-Basis — das Haus-Template hängt " | Formazin & Partner" an */
  title: string;
  metaDescription: string;
  /** Haupt-Keyword (Redaktion/SEO, nicht sichtbar gerendert) */
  primaryKeyword: string;
  /** Optionales OG-Bild (Pfad); sonst Haus-Default */
  ogImage?: string;
}

export interface BreadcrumbEntry {
  name: string;
  /** Absolute URL */
  item: string;
}

/** Für Service-Schema (AggregateOffer). */
export interface OffersData {
  priceCurrency: string;
  lowPrice: string;
  highPrice: string;
  offerCount: string;
}

/* ------------------------------------------------------------------ */
/*  Wiederverwendbare Bild-Bausteine                                   */
/* ------------------------------------------------------------------ */

/**
 * Referenz auf ein echtes Bild in /public (mit deutschem Alt-Text). Diese
 * Bausteine (heroImage, ImageTextSplit, FeatureGrid) sind bewusst generisch
 * gehalten, damit die späteren Wissens- und Geo-Seiten dieselben bild-forward
 * Layouts nutzen können.
 */
export interface ImageRef {
  /** Pfad ab /public, z. B. "/images/energie/hero-energieberatung.jpg" */
  src: string;
  /** Beschreibender deutscher Alt-Text */
  alt: string;
}

/** Ein Schritt im Ablauf-Stepper bzw. in einem steps-BodyBlock. */
export interface StepItem {
  title: string;
  text: string;
}

/**
 * Bild-Text-Split: ein Textblock neben einem Bild. Wiederverwendbar für Intro-,
 * Beratungs- und „Wer wir sind“-Abschnitte. Die Bildseite (Desktop) ist frei
 * wählbar; auf Mobil wird gestapelt.
 */
export interface ImageTextSplitData {
  eyebrow?: string;
  heading?: string;
  /** Absätze (unterstützen **fett** inline) */
  body: string[];
  /** Optionale Bullet-Liste unter dem Text */
  bullets?: string[];
  image: ImageRef;
  /** Bildseite auf Desktop (Default: "right") */
  imageSide?: "left" | "right";
  /**
   * Bild-Verhältnis: "portrait" = Haus-Idiom der BueroSection
   * (aspect-[4/3] lg:aspect-[3/4] lg:min-h-[560px]), "landscape" = 3:2.
   * Default: "landscape".
   */
  imageAspect?: "landscape" | "portrait";
  /** Optionaler Inline-Textlink */
  cta?: { label: string; href: string };
}

/** Ein Eintrag der Leistungs-Link-Zeile im Hero (LEISTUNGEN-Idiom der Startseite). */
export interface HeroLink {
  label: string;
  href: string;
}

/**
 * Eine visuelle Leistungs-Kachel: lucide-Line-Icon (per Key gemappt), Name,
 * Ein-Zeiler, optionaler Preis (verbatim aus der Preisquelle) und Link.
 */
export interface FeatureItem {
  /** Key eines lucide-Icons (Mapping in FeatureGrid.tsx) */
  icon: string;
  /** Bildkachel: helles Leistungsmotiv über der Kachel (Redesign 04.09.2026) */
  image?: ImageRef;
  title: string;
  /** Ein-Zeiler */
  text: string;
  /** Preis-/Honorar-Label (1:1 aus der Preisquelle übernommen) */
  price?: string;
  href?: string;
}

export interface FeatureGridData {
  heading?: string;
  intro?: string;
  items: FeatureItem[];
  /** Fußnote unter dem Raster */
  note?: string;
}

/** Ablauf als visueller Stepper. */
export interface ProcessStepsData {
  heading?: string;
  intro?: string;
  steps: StepItem[];
}

/* ------------------------------------------------------------------ */
/*  Inhaltsblöcke                                                      */
/* ------------------------------------------------------------------ */

export interface AnswerBoxData {
  /** Kleines Label über der Direkt-Antwort */
  eyebrow?: string;
  /** Zitierfähige AEO-Direktantwort (unterstützt **fett** inline) */
  text: string;
}

/**
 * Fließtext-Blöcke. Paragraph und Note unterstützen **fett** inline.
 */
/**
 * Bespoke-Erklärgrafiken (Inline-SVG, Ingenieur-Stil) — Registry in
 * components/energie/Diagramme.tsx. Denis-Feedback 28.07.2026: "mehr
 * Diagramme/Erklärgrafiken statt Textwüste".
 */
export type DiagramName =
  | "kfw-bausteine"
  | "foerder-schienen"
  | "bestand-strategie"
  // Redesign 04.09.2026 (Konzept §3) — Infografiken.tsx
  | "foerder-rechenbild"
  | "zeitstrahl"
  | "zeitstrahl-ausweis"
  | "wer-macht-was"
  | "region"
  | "ausweis-entscheidung";

/** Ein Eintrag im „Antworten"-Band (Redesign 04.09.2026) */
export interface AntwortItem {
  name: DiagramName;
  caption?: string;
  /** nur "region": Ort, der auf der Karte hervorgehoben wird (Geo-Seiten) */
  highlight?: string;
  /** Überschreibt den Standard-Text aus antworten-texte.ts (Frage/Überschrift/Absätze) */
  frage?: string;
  heading?: string;
  /** Absätze (unterstützen **fett** inline) */
  body?: string[];
  /** Optionaler Textlink unter den Absätzen */
  cta?: { label: string; href: string };
}

/**
 * „Ihre Antworten" (Konzept §3/§4, Denis-Feedback 04.09.: Diagramm nie ohne
 * Text): je Kundenfrage eine Textsektion mit Überschrift, Absätzen und der
 * Infografik daneben, abwechselnd links/rechts, jede mit Anker.
 */
export interface AntwortenBand {
  heading?: string;
  intro?: string;
  items: AntwortItem[];
}

export type BodyBlock =
  | { kind: "heading"; text: string; id?: string }
  | { kind: "subheading"; text: string; id?: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "steps"; items: StepItem[] }
  | { kind: "note"; tone?: "info" | "warn"; text: string }
  | { kind: "diagram"; name: DiagramName; caption?: string }
  | { kind: "image"; src: string; alt: string; caption?: string };

export interface FactTableColumn {
  key: string;
  label: string;
  align?: "left" | "right";
}

export interface FactTableData {
  /** Überschrift der Tabelle */
  caption: string;
  columns: FactTableColumn[];
  /** Zeilen, gekeyed nach column.key */
  rows: Record<string, string>[];
  /** Spalte, die hervorgehoben wird (z. B. "Ihr Eigenanteil") */
  highlightColumn?: string;
  /** Fußnote unter der Tabelle */
  note?: string;
}

export interface ServiceSplitColumn {
  title: string;
  items: string[];
}

export interface ServiceSplitData {
  heading?: string;
  intro?: string;
  wirMachen: ServiceSplitColumn;
  fachbetriebMacht: ServiceSplitColumn;
}

export interface TrustData {
  eyebrow?: string;
  name: string;
  role?: string;
  /** Kurze Positionierung/Bio (unterstützt **fett** inline) */
  intro?: string;
  /** Qualifikations-Pills */
  credentials: string[];
  /** Fußnote, z. B. BAFA-Beraternummer */
  footnote?: string;
  /** Optionales Foto — fehlt es, rendert der Block sauber ohne Bild */
  photo?: { src: string; alt: string };
}

export interface CaseItem {
  name: string;
  jahr: string;
  /** Umfang/Beschreibung der Maßnahme */
  umfang: string;
  denkmal?: boolean;
  /**
   * Strukturierte Beweisführung (Feith-Feedback 12.08.2026): Referenzkarten
   * auf der Energieberatungsseite tragen Gebäudetyp, Aufgabe, energetischen
   * Bezug und Nutzen. Sind diese Felder gesetzt, rendert CaseCards sie
   * statt des umfang-Einzeilers.
   */
  gebaeudetyp?: string;
  aufgabe?: string;
  energetischerBezug?: string;
  nutzen?: string;
  /** Link auf die Projektseite (/projekte/…) als Beleg */
  href?: string;
}

export interface CaseSection {
  heading: string;
  intro?: string;
  items: CaseItem[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  href: string;
  label: string;
  description?: string;
  kind?: PageKind;
}

export interface RelatedLinksData {
  heading?: string;
  intro?: string;
  links: RelatedLink[];
}

/* ------------------------------------------------------------------ */
/*  Team-/Kompetenzblock (Briefing v2, 24.07.2026)                     */
/* ------------------------------------------------------------------ */

export interface TeamMember {
  name: string;
  role: string;
  photo: { src: string; alt: string };
  /** Qualifikations-Pills */
  credentials: string[];
  /** Kurzbio (unterstützt **fett** inline) */
  bio?: string;
}

/**
 * Team-/Kompetenzblock: bettet die Personenprofile in einen Büro-Kontext ein,
 * damit das Büro größer wirkt als eine Einzelberatung (Briefing v2).
 * Ersetzt auf den Energie-Seiten den früheren Einzel-ExpertProof.
 */
export interface TeamSection {
  eyebrow?: string;
  heading: string;
  /** Rahmen-Satz (unterstützt **fett** inline) */
  intro?: string;
  members: TeamMember[];
  footnote?: string;
}

/**
 * Avatar-Einstieg (Feith/Denis 26.08.2026): Privat und Gewerbe früh auf der
 * Seite getrennt abholen — zwei Karten in die passenden Avatar-Strecken,
 * optional mit Fallback-Link auf die allgemeine Anfrage.
 */
export interface AvatarSplitItem {
  href: string;
  icon: "home" | "building";
  /** Bildkachel statt Icon-Karte (Redesign 04.09.2026) */
  image?: ImageRef;
  title: string;
  text: string;
  cta: string;
}

export interface AvatarSplitData {
  heading: string;
  intro?: string;
  items: AvatarSplitItem[];
  fallback?: { text: string; linkLabel: string; href: string };
}

export interface CtaData {
  heading: string;
  text?: string;
  buttonLabel: string;
  href: string;
  /** Optionaler zweiter Button (Avatar-Weiche: privat vs. gewerblich) */
  secondaryButtonLabel?: string;
  secondaryHref?: string;
}

/* ------------------------------------------------------------------ */
/*  Gesamt-Seite                                                       */
/* ------------------------------------------------------------------ */

export interface EnergiePageContent {
  kind: PageKind;
  meta: EnergiePageMeta;
  breadcrumbs: BreadcrumbEntry[];

  /** Sichtbarer H1 */
  h1: string;
  /** Label über dem H1 (z. B. "Energieberatung") */
  eyebrow?: string;
  /** Optionale Lede unter dem H1 — im Bild-Hero die Subline */
  intro?: string;
  /**
   * Regionale Trust-Zeile direkt unter dem Hero-CTA (Briefing v2, 24.07.2026):
   * z. B. "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg …"
   */
  heroTrustLine?: string;

  /** Bild-Hero (bild-forward Layout). Fehlt es, rendert ein ruhiger Text-Hero. */
  heroImage?: ImageRef;

  /**
   * Optionale Leistungs-/Themen-Links IM Hero-Bild unter dem H1 — exakt das
   * LEISTUNGEN-Zeilen-Idiom der Startseite (flex flex-wrap, text-white/80).
   */
  heroLinks?: HeroLink[];

  /** Echtes Foto des Energieberaters — früher Experten-/Social-Proof-Block direkt nach der Direkt-Antwort */
  expertPhoto?: ImageRef;

  /**
   * Team-/Kompetenzblock (Oda Senior Lead + Feith operativ, Briefing v2).
   * Ist er gesetzt, rendert er ANSTELLE des Einzel-ExpertProof.
   */
  team?: TeamSection;

  answerBox: AnswerBoxData;

  /** Band „Ihre Antworten" mit Infografiken (Redesign 04.09.2026) */
  vierAntworten?: AntwortenBand;

  /** Intro als Bild-Text-Split statt Fließtext-Wand */
  introSplit?: ImageTextSplitData;
  /** Kern-Leistungen als visuelle Feature-Kacheln */
  featureGrid?: FeatureGridData;

  bodySections: BodyBlock[];
  priceTables: FactTableData[];
  serviceSplit?: ServiceSplitData;
  trust?: TrustData;
  /** Begleitendes Kontext-Bild (Querformat) neben dem Trust-/„Wer wir sind“-Block */
  trustImage?: ImageRef;
  /** Ablauf als visueller Stepper */
  processSteps?: ProcessStepsData;
  cases?: CaseSection;
  faq: FaqItem[];
  related: RelatedLinksData;
  cta: CtaData;
  /** Avatar-Einstieg früh auf der Seite (Privat vs. Unternehmen) — optional */
  avatarSplit?: AvatarSplitData;

  /* Schema-Hints (für Service-/Person-JSON-LD) */
  serviceType?: string;
  areaServed?: string[];
  offers?: OffersData;
}
