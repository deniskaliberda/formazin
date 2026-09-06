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
