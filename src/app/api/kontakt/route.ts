import { NextResponse } from "next/server";
import { Resend } from "resend";
import { track } from "@vercel/analytics/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "E-Mail-Dienst nicht konfiguriert." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, betreff, nachricht } = body;

    if (!name || !email || !betreff || !nachricht) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Kontaktformular <kontakt@formazin-partner.de>",
      to: ["kontakt@formazin-partner.de"],
      replyTo: email,
      subject: `Kontaktanfrage: ${betreff}`,
      text: `Neue Anfrage über das Kontaktformular auf formazin-partner.de\n\nName: ${name}\nE-Mail: ${email}\nBetreff: ${betreff}\n\nNachricht:\n${nachricht}`,
    });

    // Vercel Web Analytics: count the lead only after the mail went through.
    // `betreff` is free text, so the topic stays generic (no personal data in events).
    try {
      await track("lead", {
        type: "formular",
        topic: "kontakt",
        source: "unbekannt",
        page: "/#kontakt",
      });
    } catch (trackErr) {
      console.warn("Vercel lead event failed:", trackErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontaktformular-Fehler:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
