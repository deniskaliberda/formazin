# Eingangsbestätigungen

## Ablauf
`/api/kontakt`: Büro-Mail muss vom Anbieter angenommen sein, dann Bestätigung. `/api/lead`: gespeicherte Anfrage oder angenommene Büro-Mail erforderlich, dann Bestätigung. Absender und Reply-To: kontakt@formazin-partner.de, bestehende Produktionsadresse. Keine Übernahme freier Inhalte in Bestätigungen. Name, Betreff und Nachricht bleiben in der Büro-Mail.

Origin-Allowlist, JSON mit höchstens 32 KiB, Längen-/Typgrenzen, einzelne E-Mail-Adresse und verstecktes Botfeld vor Mail/DB. Origin und Honeypot sind Basisschutz, keine Authentifizierung oder CAPTCHA. Keine zusätzliche Datenbank oder Schemaänderung.

## Duplikate und Fehler
Resend-Idempotenz: Inhalts-Hash für Büro-Mail, Empfänger-Hash für identische Bestätigungen aus beiden Formularen. Höchstens eine Bestätigung pro normalisierter Adresse innerhalb des 24-Stunden-Fensters. Danach ist eine neue Bestätigung möglich. Bewusst keine individuelle Anfrage-ID oder Anfrageinhalte in der Bestätigung. Datenbankeinträge und Analytics sind hiervon nicht dedupliziert.

Bei Resend-Fehler darf die Kontaktanfrage nicht fälschlich als angekommen gelten. Eine bereits gespeicherte Energie-Anfrage bleibt angenommen. Fehler ausschließlich beim Bestätigungsversand ergeben `inquiry_confirmation_failed` im Serverlog und verändern den Anfrageerfolg nicht. Kein eigener Hintergrund-Retry: Bei einem erneuten Formularversuch wird mit demselben Schlüssel versucht. Bei vollständigem Anbieter-Ausfall benötigt die Nachbearbeitung einen Menschen. `inquiry_office_mail_failed` / `inquiry_database_insert_failed` markieren die anderen Fehler ohne personenbezogene Logdaten.

## Prüfung
`npm run test:inquiries`: isolierter CommonJS/VM-Loader mit fest erlaubten Imports, Fake-Resend, Fake-Datenbank und Fake-Analytics. Keine echten Credentials oder Netzwerkzugriffe. Deckt beide Routen, konkurrierende Wiederholungen, Kanalwechsel, Fehlerobjekte und Exceptions, Speicherfallback, ungültige Inhalte, fremden/fehlenden Origin, Botfeld und Payload-Grenzen ab. Zusätzlich `npm run lint`, `npx tsc --noEmit`, `npm run build`.

Realer Provider-Test am 15.09.2026 ausschließlich an die reservierte Simulation delivered+formazin-confirmation-20260915@resend.dev, mit produktivem Send-only-Key und echter Bestätigungsfunktion. Zweiter Aufruf identische ID 912d4cee-419b-4d09-9687-b589e5a7296e, Header idempotent-replayed=true. Resend-Dashboard bestätigt genau einen Eintrag mit Status Delivered. Keine Testmail ans Büro oder echte Anfragende. Produktionsgeheimnisse wurden nur in gitignorierter .vercel-Datei für diesen Test geladen und vor Abschluss entfernt.

## Quellen
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://resend.com/docs/dashboard/emails/send-test-emails

## Historische Anfrage
Keine automatische Rückwirkung. Die erste Anfrage wurde nach später erteilter ausdrücklicher Einzelfreigabe genau einmal bestätigt, siehe folgenden Abschluss. Nicht erneut senden. Private Belege im Kundenordner unter client-docs/2026-09-15_Eingangsbestaetigung/.

## Veröffentlichung
Main `899fc14`, Produktion `dpl_Ao4mQj5voCPthkHkeTSxVX6w1acW`, 15.09.2026 ca.18:12 MESZ READY, www- und Apex-Domain zugewiesen. Öffentliche Prüfung: beide API-Routen fremder Origin403, ausgefülltes Botfeld200 ohne Versand, fehlende Pflichtangaben400. Startseite und Energie-Anfrage200, Botfelder im HTML vorhanden. Keine neuen Datenbank-Leads seit Testbeginn. Bestehenden Resend-Tab auf Übersicht zurückgesetzt und erhalten, keine eigenen Browser-Tabs oder laufenden Prozesse.

## Markenstil und Nachsendung abgeschlossen · 15.09.2026
Nutzer hat den Formazin-Stil und die erste Nachsendung ausdrücklich beauftragt. Vorhandenes PNG-Logo aus der Website-Navigation, Formazin-Blau/Weiß/Grau, Inline-CSS und Tabellenlayout mit600px Maximalbreite. Lokal verfügbare Archivo mit Arial/Helvetica-Fallback, keine externen Fonts. HTML plus unveränderter Klartext. Desktop und320px mobil geprüft. Acht Testsuiten, Lint, Types und Build58 erfolgreich. Realer Anbieter-Test an reservierter Simulation9362aeda-769d-4d82-8744-8a7334c504cf: Delivered.

Frische Suche nach dem verifizierten Empfänger unmittelbar vor Versand ohne Treffer. Genau ein realer Versand über dieselbe Bestätigungsfunktion und denselben Empfänger-Idempotenzschlüssel wie die Automatik. ID b5221150-146d-4a19-998b-fed34a57c7ea, Resend bestätigt Sent und Delivered um18:16 MESZ. Absender, Reply-To und HTML-Vorschau zurückgelesen und passend. Private Versandbelege im Kundenordner. Keine Wiederholung.

Automatik Main88f92b2, Produktion dpl_EsPWuN1tkLAnBGYXJ2DVN7DFsgmf READY auf beiden öffentlichen Domains. Logo öffentlich als PNG und bytegleich mit Original bestätigt. Die24h-Schlüssel wurden bei der Stiländerung bewusst nicht gewechselt, damit zuvor bestätigte Empfänger keine zweite Mail erhalten. Bei Wiederholung eines alten Klartext-Payloads innerhalb des Fensters kann Resend einen Idempotenzkonflikt melden; dieser erzeugt keinen erneuten Versand und ändert den Anfrageerfolg nicht. Keine eigene Vorschau oder Server mehr aktiv, Produktionsschlüssel entfernt.
