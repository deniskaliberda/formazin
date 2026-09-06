# Leistungs-Vorschau · Frauke-Review 06.09.2026

Status: Umsetzung in der bestehenden Vorschau freigegeben durch Denis im laufenden Gespräch. Kein Produktionsrelease. Ersetzt für die Leistungsseiten die unterschiedlichen Hero-/Bildvarianten des Section-Plans vom 27.08.2026.

## Aufbau

- Einheitliches Corporate Design wie `/leistungen` auf der Live-Seite: Archivo/Archivo Narrow, Blau #2d4196, Text #1e293b, Weiß/Grau #f3f4f6, höchstens 2px Ecken.
- Oben „Leistungen“ und die schlichte Auswahl Architektur, Brandschutz, Tragwerksplanung, Generalplanung in der bisherigen Live-Reihenfolge. Energieberatung und Wärmeschutz entfallen in dieser Auswahl; Energieberatung bleibt im Hauptmenü separat erreichbar. Vorhandene Wärmeschutz-URL bleibt erreichbar.
- Auswahl führt zur passenden Leistungsansicht mit aktiver blauer Markierung. Reale Links erhalten eigenständige URLs und serverseitig gerenderte Texte. Alte Hash-Einstiege, insbesondere #tragwerk, öffnen die richtige Ansicht.
- Darunter der vertraute Aufbau: ein bestehendes Projektfoto links, Leistungstitel/Kurztext/Unterleistungen rechts. Mobil untereinander. Keine Bildkacheln oder wechselnden Hero-Stile.
- Beim Scrollen folgen die ausgearbeiteten Texte aus `content/leistungen/`: Einführung, Bauweisen/Abgrenzungen, Ablauf, Zielgruppen, weitere Fachabschnitte und FAQ. Keine neuen fachlichen Behauptungen; Redaktionsnotizen bleiben verborgen.
- Weitere Projekte als schlichte Textlinks, keine wiederholten Bildgalerien. Ansprechpartner und Kontakt im Hausstil.
- Bestehende Vorschaukennzeichnung und noindex bleiben aktiv. `/leistungen` erhält ebenfalls Vorschaukennzeichnung/noindex für diesen Entwurf.

## Prüfung

Alle vier Auswahlwege, Direkt-URLs, alter #tragwerk-Einstieg, Browser-Zurück, FAQ, Desktop/Mobil ohne Überbreite; vorhandene Textabschnitte vollständig sichtbar. TypeScript, ESLint und Build. Veröffentlichung nur als Branch-Preview, kein Merge nach main.

## Präzisierung aus dem weiteren Gespräch · 06.09.2026

- Oberer Aufbau bleibt; Scrollen ist gewünscht. Energieberatung als fünfter Direktlink zum bestehenden Energie-Hub wieder aufnehmen, ohne Wärmeschutz im Label.
- Durchgehend Berlin und Brandenburg als Tätigkeitsgebiet. Ahrensfelde als Bürositz benennen, auch überregionale Vorhaben ansprechbar machen; lokale Suchbegriffe ergänzend in sinnvollen Texten.
- Unterer Inhalt nutzt die Containerbreite in lesbaren Spalten; Ablauf kompakt nebeneinander, größere Schrift, weniger vertikaler Leerraum. Keine langen Textzeilen über die volle Bildschirmbreite.
- Für wen nennt nur Auftraggebergruppen, z. B. öffentliche Auftraggeber, private Bauherren, Eigentümer und Architekturbüros. Maßnahmen separat beschreiben.
- Keine Ratgeberblöcke auf den Leistungsseiten, keine doppelte Frage nach Nachweis/Konzept. „Mehr über … erfahren“ entfernen; Telefonnummer des Büros direkt im Leistungs-Einstieg und beim Kontakt anbieten.
- Architektur-Einstieg wieder mit der Gesamtansicht der Grundschule Lindenberg aus dem Live-Katalog. Vorhandenes Oda-Porträt größer, vollständig und ohne Beschnitt; keine erfundenen Fotos.
- Brandschutz-Inhalte/FAQ anhand offizieller aktueller Bauordnungen und Bauvorlagenverordnungen prüfen; pauschale GK3/GK4-Trennung und „Brandenburg strenger“ ersetzen. Fachliche Büro-Abnahme bleibt als Vorschau-Review offen.

## Weitere Straffung · 06.09.2026

Denis/Frauke: doppelte Einführungsüberschrift und Einleitung unter dem Hero entfernen; Für wen und Warum Formazin & Partner vorerst ausblenden. Fachliche Abgrenzungen wie Nachweis/Konzept bleiben nebeneinander auf Weiß, Ablauf als graues Band mit nummerierten Spalten. Kompakte Projekte und Ansprechpartner vor den FAQ; FAQ als letzter Inhaltsabschnitt. Ratgeber und zusätzlicher Mehr-erfahren-Link bleiben entfernt. Keine künstliche Verlängerung auf eine Wortzahl; vorhandene geprüfte Antworten behalten.
