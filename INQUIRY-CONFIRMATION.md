# Eingangsbestätigung: Formazin-Vorlage und Versand25 Minuten nach Eingang

## Aktueller Ablauf
Beide POST-Handler `/api/kontakt` und `/api/lead` erfassen beim Eintritt `receivedAt = Date.now()`. Dieser serverseitige Zeitpunkt entsteht vor dem Lesen der Formulardaten, der Speicherung und dem Versand der Büro-Mail. Vom Browser übermittelte Zeitwerte werden nicht verwendet.

Die Bürobenachrichtigung bleibt sofort und ohne `scheduledAt`. Erst nach erfolgreicher Annahme der Anfrage (Kontakt: Büro-Mail angenommen; Energie: Datenbank gespeichert oder Büro-Mail angenommen) wird die Kundenbestätigung mit einem absoluten ISO-8601-UTC-Termin an Resend übergeben: **receivedAt +25×60×1000ms**. Beispiel: Eingang18:27:23 MESZ, geplanter Versand18:52:23 MESZ. Zeitzonen-/Sommerzeitwechsel verändern die25 Minuten nicht. Kein Prozess muss dafür weiterlaufen, kein Next.js-Timer, kein Cron-/Codex-Weckauftrag. Nach Annahme verwaltet Resend den Versandplan dauerhaft.

`Scheduled` bedeutet angenommen/geplant, nicht gesendet oder zugestellt. `Sent` und `Delivered` sind spätere Anbieterereignisse. Der Termin ist ein Versandtermin, keine Zusage für sekundengenaue Zustellung beim Empfänger. Resend zeigt Planzeit und etwaige spätere Ausfälle im Dashboard. API-Schlüssel müssen beim Versand weiterhin gültig sein.

## Dauerhafte freigegebene Vorlage
`src/lib/inquiryMail.ts`: `CONFIRMATION_HTML` und `CONFIRMATION_TEXT`, bytegleich zum freigegebenen Stand88f92b2. Original-PNG-Logo aus der Website-Navigation, Formazin-Blau/Weiß/Grau, Inline-CSS und fließendes Tabellenlayout, maximal600px. Keine extern geladenen Fonts. Betreff „Vielen Dank für Ihre Anfrage“. Text „Guten Tag, vielen Dank für Ihre Anfrage. Wir bearbeiten Ihr Anliegen. Unser Büro wird sich bei Ihnen melden.“ Bestehende Firmensignatur. Absender und Reply-To kontakt@formazin-partner.de. Keine Frist/Fallannahme und keine Nutzereingaben in der Kundenbestätigung. Private HTML-Vorschau im Kundenordner client-docs/2026-09-15_Eingangsbestaetigung/.

## Duplikate und Missbrauch
Büro-Mail: Inhalts-Hash. Bestätigung: bisheriger Empfänger-Hash unter `inquiry-confirmation-v1/`, unverändert auch gegenüber bereits sofort gesendeten Bestätigungen. Resend verwaltet den Schlüssel24 Stunden. Die erste erfolgreiche Übergabe gewinnt: Wiederholungen erzeugen keine zweite Mail und verschieben den vorhandenen Termin nicht. Innerhalb dieses Fensters werden auch weitere unterschiedliche Anfragen derselben normalisierten Adresse nicht erneut bestätigt. Datenbankeinträge und Analytics werden dadurch nicht dedupliziert.

Resend kann bei geändertem Payload `invalid_idempotent_request` liefern oder bei einem anderen `scheduledAt` denselben Datensatz mit `idempotent-replayed=true` zurückgeben (im echten Test beobachtet). Beide Fälle gelten als bereits angefragter Versand. Dabei wird kein neuer Termin oder Zustellstatus behauptet. Nie Ersatzschlüssel erzeugen oder vorhandenen Termin aktualisieren. Origin-Allowlist, JSON/Längen-/Typgrenzen, Prüfung einer einzelnen Mailadresse und verstecktes Botfeld bleiben erhalten. Origin/Botfeld sind Basisschutz, keine Authentifizierung.

## Fehler und Betrieb
Technische Übergabefehler (Netzwerk, Rate Limit, parallele Idempotenzanfrage und interne Anbieterfehler) werden höchstens dreimal mit demselben Payload/absoluten Termin/Schlüssel versucht. Kurze250/500ms Pausen betreffen nur API-Wiederholungen. Validierungsfehler werden nicht wiederholt. Keine Sofortmail als Fallback. Ein bereits abgelaufener Termin wird abgelehnt.

Neue erfolgreiche Übergabe: `inquiry_confirmation_scheduled` mit Anbieter-ID, Eingangszeit und geplantem Termin, ohne Name/Adresse/Inhalt. Endgültige Übergabefehler: `inquiry_confirmation_schedule_failed`; die bereits angenommene Anfrage bleibt erfolgreich. Es gibt keinen eigenen dauerhaften Outbox-Retry vor Annahme durch Resend. Bei endgültigem Übergabefehler muss das Büro/der Betreiber die Anfrage nachbearbeiten. Spätere Versandfehler im Resend-Dashboard prüfen. Keine Behauptung einer garantierten Zustellung.

## Verifikation
`npm run test:inquiries`:14 isolierte Testsuiten, feste kontrollierbare Uhr, Fake-Resend/DB/Analytics ohne Netzwerk/Credentials. Beide Routen, Eingang+25min trotz90s Büro-Laufzeit, ignorierte Client-Zeit, Mitternacht/Sommerzeit, Büro weiterhin sofort, konkurrierende und spätere Wiederholungen, früher bereits versendete Bestätigungen, Provider-Replay ohne neuen Zeitanspruch, technische Fehler/wiederholter Payload, abgelaufene Zeit, ungültige Eingaben und keine Sofort-Fallbacks. Lint, Types und Build58 erfolgreich. HTML/Klartext bytegleich gegen88f92b2 geprüft.

Echter Anbieter-Test ausschließlich reservierte Adresse delivered+formazin-delay-20260915@resend.dev. Eingang2026-09-15T16:27:23.255Z, Termin2026-09-15T16:52:23.255Z, ID0e64cd99-a808-49d4-8318-a406b8b4c43f. Prozess beendet, Dashboard danach weiterhin Scheduled um18:52 MESZ mit korrekter Vorlage. Wiederholungen mit+1s und+5min lieferten dieselbe ID, Dashboard-Zeit blieb18:52. Eine zunächst zu optimistische Replay-Protokollierung im lokalen Test wurde korrigiert und erneut geprüft. Belege in privater Scheduling-Test.json. Teststatus ist geplant, nicht zugestellt; Testplanung wird nach Prüfung abgebrochen.

## Historische erste Anfrage
Nach ausdrücklicher Einzelfreigabe am15.09. um18:16 MESZ genau einmal im Formazin-Stil versendet, Resend b5221150-146d-4a19-998b-fed34a57c7ea Sent und Delivered verifiziert. Abgeschlossen, NICHT erneut senden und NICHT nachträglich einplanen. Dieser Wechsel verarbeitet nur neue Formularaufrufe, keine historischen Daten. Private Belege im Kundenordner.

## Offizielle Quellen (15.09.2026 geprüft)
- https://resend.com/docs/dashboard/emails/schedule-email
- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://resend.com/docs/dashboard/emails/send-test-emails
