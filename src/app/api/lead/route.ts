import { NextResponse } from "next/server";
import { Resend } from "resend";
import { track } from "@vercel/analytics/server";
import { getSupabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

type LeadBody = {
  intent: string;
  /** Avatar-Weiche Schritt 1: "privat" | "gewerblich" (Feith-Wunsch 26.08.2026) */
  kundentyp?: string | null;
  gebaeudetyp?: string | null;
  /** Anzahl Wohneinheiten / Gebäudeteil / Nutzfläche (Freitext, Briefing v2) */
  wohneinheiten?: string | null;
  /** Rolle des Anfragenden (Eigentümer, Hausverwaltung, öffentlicher AG …, Briefing v2) */
  rolle?: string | null;
  baujahr_spanne?: string | null;
  plz?: string | null;
  ort?: string | null;
  im_servicegebiet?: boolean | null;
  massnahme?: string | null;
  zeitrahmen?: string | null;
  name: string;
  email: string;
  telefon?: string | null;
  nachricht?: string | null;
  consent: boolean;
  entry_lp?: string | null;
  page_path?: string | null;
  session_id?: string | null;
  /** Campaign attribution from the landing URL (no personal data) */
  utm_source?: string | null;
  utm_campaign?: string | null;
};

/** Keep event props to short, technical tokens: never free text, never personal data. */
function safeToken(value: unknown, fallback: string): string {
  return typeof value === "string" && /^[a-z0-9_.-]{1,48}$/i.test(value) ? value : fallback;
}
function safePath(value: unknown, fallback: string): string {
  return typeof value === "string" && /^\/[a-z0-9_\/-]{0,120}$/i.test(value) ? value : fallback;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadBody;

    if (!body?.name?.trim() || !body?.email?.trim() || !body?.intent || body?.consent !== true) {
      return NextResponse.json(
        { error: "Pflichtangaben fehlen (Name, E-Mail, Anliegen, Einwilligung)." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(body.email)) {
      return NextResponse.json({ error: "Bitte eine gueltige E-Mail-Adresse angeben." }, { status: 400 });
    }

    let stored = false;

    // 1) In Supabase ablegen (wenn konfiguriert)
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from("leads").insert({
        intent: body.intent,
        kundentyp: body.kundentyp ?? null,
        gebaeudetyp: body.gebaeudetyp ?? null,
        wohneinheiten: body.wohneinheiten?.trim() || null,
        rolle: body.rolle ?? null,
        baujahr_spanne: body.baujahr_spanne ?? null,
        plz: body.plz ?? null,
        ort: body.ort ?? null,
        im_servicegebiet: body.im_servicegebiet ?? null,
        massnahme: body.massnahme ?? null,
        zeitrahmen: body.zeitrahmen ?? null,
        name: body.name.trim(),
        email: body.email.trim(),
        telefon: body.telefon ?? null,
        nachricht: body.nachricht ?? null,
        consent: true,
        consent_at: new Date().toISOString(),
        source: "energie-funnel",
        entry_lp: body.entry_lp ?? null,
        page_path: body.page_path ?? null,
        session_id: body.session_id ?? null,
      });
      if (error) {
        console.error("Supabase lead insert error:", error.message);
      } else {
        stored = true;
      }
    }

    // 2) Buero benachrichtigen (Resend) — Muster wie /api/kontakt. KEINE KI-Outreach.
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Energie-Funnel <kontakt@formazin-partner.de>",
        to: ["kontakt@formazin-partner.de"],
        replyTo: body.email,
        subject: `Neue Energie-Anfrage: ${body.intent}`,
        text:
          `Neue qualifizierte Anfrage ueber den Energie-Funnel auf formazin-partner.de\n\n` +
          `Anliegen:     ${body.intent}\n` +
          `Kundentyp:    ${body.kundentyp ?? "-"}\n` +
          `Landing-Funnel: ${body.entry_lp ?? "-"}\n` +
          `Gebaeudetyp:  ${body.gebaeudetyp ?? "-"}\n` +
          `WE/Flaeche:   ${body.wohneinheiten ?? "-"}\n` +
          `Rolle:        ${body.rolle ?? "-"}\n` +
          `Baujahr:      ${body.baujahr_spanne ?? "-"}\n` +
          `Ort/PLZ:      ${body.plz ?? ""} ${body.ort ?? ""} (Servicegebiet: ${
            body.im_servicegebiet === true ? "ja" : body.im_servicegebiet === false ? "nein" : "?"
          })\n` +
          `Massnahme:    ${body.massnahme ?? "-"}\n` +
          `Zeitrahmen:   ${body.zeitrahmen ?? "-"}\n\n` +
          `Name:    ${body.name}\n` +
          `E-Mail:  ${body.email}\n` +
          `Telefon: ${body.telefon ?? "-"}\n\n` +
          `Nachricht:\n${body.nachricht ?? "-"}\n`,
      });
      stored = true;
    }

    if (!stored) {
      return NextResponse.json(
        { error: "Kein Speicherziel konfiguriert (Supabase/Resend fehlen)." },
        { status: 500 }
      );
    }

    // Vercel Web Analytics: count the lead only after mail/insert went through.
    try {
      await track("lead", {
        type: "funnel",
        topic: safeToken(body.intent, "energieberatung"),
        source: safeToken(body.utm_campaign ?? body.utm_source ?? body.entry_lp, "unbekannt"),
        page: safePath(body.page_path, "/anfrage"),
      });
    } catch (trackErr) {
      console.warn("Vercel lead event failed:", trackErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead-Fehler:", err);
    return NextResponse.json({ error: "Anfrage konnte nicht verarbeitet werden." }, { status: 500 });
  }
}
