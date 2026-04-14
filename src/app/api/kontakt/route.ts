import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontaktformular-Fehler:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
