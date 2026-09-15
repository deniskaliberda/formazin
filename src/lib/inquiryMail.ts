import { createHash } from "node:crypto";
import type { Resend, CreateEmailOptions } from "resend";

export const OFFICE_EMAIL = "kontakt@formazin-partner.de";
export const CONFIRMATION_SUBJECT = "Vielen Dank für Ihre Anfrage";
export const CONFIRMATION_TEXT = `Guten Tag,

vielen Dank für Ihre Anfrage. Wir bearbeiten Ihr Anliegen. Unser Büro wird sich bei Ihnen melden.

Mit freundlichen Grüßen
Dr.-Ing. Formazin & Partner mbB
Dorfstraße 1A
16356 Ahrensfelde
kontakt@formazin-partner.de
https://www.formazin-partner.de`;

/** Existing website identity; inline styles and presentation tables work without webfonts. */
export const CONFIRMATION_HTML = `<!doctype html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Vielen Dank für Ihre Anfrage</title></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;color:#1e293b;font-family:Archivo,Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f4f6;">
<tr><td align="center" style="padding:24px 12px;">
<!--[if mso]><table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background-color:#ffffff;border-top:4px solid #2d4196;">
<tr><td style="padding:24px 24px 12px;">
<img src="https://www.formazin-partner.de/images/FuP-Logo2025-quer-RGB.png" width="400" alt="Dr.-Ing. Formazin &amp; Partner mbB" style="display:block;width:100%;max-width:400px;height:auto;border:0;color:#2d4196;font-family:Arial,Helvetica,sans-serif;font-size:16px;">
</td></tr>
<tr><td style="padding:12px 24px 32px;font-size:16px;line-height:26px;color:#1e293b;">
<p style="margin:0 0 20px;">Guten Tag,</p>
<p style="margin:0 0 20px;">vielen Dank für Ihre Anfrage. Wir bearbeiten Ihr Anliegen. Unser Büro wird sich bei Ihnen melden.</p>
<p style="margin:0;">Mit freundlichen Grüßen<br><strong style="color:#2d4196;">Dr.-Ing. Formazin &amp; Partner mbB</strong></p>
</td></tr>
<tr><td style="padding:20px 24px;background-color:#f3f4f6;border-top:1px solid #e5e7eb;font-size:14px;line-height:23px;color:#1e293b;">
Dorfstraße 1A<br>16356 Ahrensfelde<br>
<a href="mailto:kontakt@formazin-partner.de" style="color:#2d4196;text-decoration:underline;">kontakt@formazin-partner.de</a><br>
<a href="https://www.formazin-partner.de" style="color:#2d4196;text-decoration:underline;">www.formazin-partner.de</a>
</td></tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr></table>
</body></html>`;

export class InquiryInputError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

/** Accept our browser forms only. Origin is a first barrier, not bot authentication. */
export async function readInquiry(request: Request): Promise<Record<string, unknown>> {
  const origin = request.headers.get("origin");
  const allowed = new Set(["https://www.formazin-partner.de", "https://formazin-partner.de"]);
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV !== "production") allowed.add(new URL(request.url).origin);
  if (!origin || !allowed.has(origin)) throw new InquiryInputError(403, "Anfrage nicht zulässig.");
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    throw new InquiryInputError(415, "Ungültiges Anfrageformat.");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new InquiryInputError(400, "Anfrage fehlt.");
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 32_768) {
      await reader.cancel();
      throw new InquiryInputError(413, "Anfrage zu lang.");
    }
    chunks.push(value);
  }
  let body: unknown;
  try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
  catch { throw new InquiryInputError(400, "Ungültige Anfrage."); }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new InquiryInputError(400, "Ungültige Anfrage.");
  }
  const fields = body as Record<string, unknown>;
  for (const [key, value] of Object.entries(fields)) {
    if (value == null) continue;
    if ((key === "consent" || key === "im_servicegebiet") && typeof value === "boolean") continue;
    if (typeof value !== "string" || value.length > (key === "nachricht" ? 10_000 : 500)) {
      throw new InquiryInputError(400, "Bitte prüfen Sie Ihre Angaben.");
    }
  }
  return fields;
}

export function inquiryEmail(value: unknown): string {
  const email = typeof value === "string" ? value.trim().toLowerCase() : "";
  // Exactly one plain mailbox. No display names, lists, headers or control characters.
  if (email.length > 254 || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i.test(email)) {
    throw new InquiryInputError(400, "Bitte eine gültige E-Mail-Adresse angeben.");
  }
  return email;
}

function digest(value: string) { return createHash("sha256").update(value).digest("hex"); }

export async function sendOfficeInquiry(resend: Resend, mail: CreateEmailOptions) {
  const { data, error } = await resend.emails.send(mail, {
    idempotencyKey: `inquiry-office-v1/${digest(JSON.stringify(mail))}`,
  });
  if (error || !data?.id) throw new Error("Büro-Mail wurde vom Anbieter nicht bestätigt.");
}

/** Fixed payload + recipient key: at most one acknowledgment per mailbox in Resend's 24h window,
 * across both forms and server instances. Never reflect untrusted content into this email.
 * Failure must not turn an already accepted inquiry into a failed form submission.
 */
export async function sendInquiryConfirmation(resend: Resend, email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Dr.-Ing. Formazin & Partner mbB <${OFFICE_EMAIL}>`,
      to: [email],
      replyTo: OFFICE_EMAIL,
      subject: CONFIRMATION_SUBJECT,
      text: CONFIRMATION_TEXT,
      html: CONFIRMATION_HTML,
      headers: { "Auto-Submitted": "auto-replied", "X-Auto-Response-Suppress": "All" },
    }, { idempotencyKey: `inquiry-confirmation-v1/${digest(email)}` });
    if (error || !data?.id) throw new Error("Provider rejected confirmation");
    return data.id;
  } catch {
    // No names, email addresses or provider payloads in application logs.
    console.error("inquiry_confirmation_failed");
  }
}
