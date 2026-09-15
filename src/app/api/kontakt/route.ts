import { NextResponse } from "next/server";
import { Resend } from "resend";
import { track } from "@vercel/analytics/server";

import { readInquiry, inquiryEmail, InquiryInputError, sendOfficeInquiry, scheduleInquiryConfirmation } from "@/lib/inquiryMail";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const receivedAt = Date.now();
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "E-Mail-Dienst nicht konfiguriert." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await readInquiry(request);
    if (body.website) return NextResponse.json({ success: true });
    const { name, betreff, nachricht } = body;
    const email = inquiryEmail(body.email);

    if (typeof name !== "string" || !name.trim() || typeof betreff !== "string" || !betreff.trim() || /[\r\n]/.test(betreff) || typeof nachricht !== "string" || !nachricht.trim()) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    await sendOfficeInquiry(resend, {
      from: "Kontaktformular <kontakt@formazin-partner.de>",
      to: ["kontakt@formazin-partner.de"],
      replyTo: email,
      subject: `Kontaktanfrage: ${betreff}`,
      text: `Neue Anfrage über das Kontaktformular auf formazin-partner.de\n\nName: ${name}\nE-Mail: ${email}\nBetreff: ${betreff}\n\nNachricht:\n${nachricht}`,
    });

    await scheduleInquiryConfirmation(resend, email, receivedAt);

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
    if (error instanceof InquiryInputError) return NextResponse.json({ error: error.message }, { status: error.status });
    console.error("kontakt_inquiry_failed");
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
