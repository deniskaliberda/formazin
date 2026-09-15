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
Keine automatische Rückwirkung. Ein gesonderter privater Nachsendeentwurf liegt im Kundenordner unter client-docs/2026-09-15_Eingangsbestaetigung/. Kein Versand ohne Einzelfreigabe und erneute Historienprüfung.

## Veröffentlichung
Main `899fc14`, Produktion `dpl_Ao4mQj5voCPthkHkeTSxVX6w1acW`, 15.09.2026 ca.18:12 MESZ READY, www- und Apex-Domain zugewiesen. Öffentliche Prüfung: beide API-Routen fremder Origin403, ausgefülltes Botfeld200 ohne Versand, fehlende Pflichtangaben400. Startseite und Energie-Anfrage200, Botfelder im HTML vorhanden. Keine neuen Datenbank-Leads seit Testbeginn. Bestehenden Resend-Tab auf Übersicht zurückgesetzt und erhalten, keine eigenen Browser-Tabs oder laufenden Prozesse.
