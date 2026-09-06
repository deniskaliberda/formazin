# Lokaler Entwurf zur Frauke-Sichtung · 05.09.2026

## Korrektur aus dem laufenden Frauke-Review · 06.09.2026

Die aktuelle Gesprächsrückmeldung autorisiert die Rückkehr zur schlichten Startseiten-Leistungsliste: Einführungstext links, Leistungsnamen mit Plus rechts, mobil untereinander. Keine Projektbilder in dieser Sektion. Ganze Zeile inklusive Plus führt zur jeweiligen Leistungsansicht; Energieberatung direkt zu `/leistungen/energieberatung`. Dies entspricht der zuletzt bevorzugten Gesprächsvariante; Aufklappen wurde als Alternative erwähnt. Vorhandene Fachtexte bleiben auf den Zielseiten. Energie-Einstieg oben bleibt erreichbar. Benennung Energieberatung/Wärmeschutz und fachliche Projektzuordnungen sind noch offen; keine neue Zuordnung ableiten. Veröffentlichung dieser Korrektur durch Denis am 06.09.2026 ausdrücklich freigegeben: „mach das live“. Die Leistungsseite behält ihre Auswahl oben mit darunter angezeigtem Leistungsbild und Unterleistungen; die separate KERN-Vorschau mit vielen Bildern wird nicht übernommen.

Diese Korrektur ersetzt die nachfolgende Vorgabe einer bildlichen Leistungsübersicht auf der Startseite.

Status: **zur Veröffentlichung freigegeben am 06.09.2026** durch Denis: „ja online stellen“. Grundlage ist der am 05.09. lokal umgesetzte und geprüfte Frauke-Entwurf. Gezielter Commit, Integration nach main und Veröffentlichung im bestehenden Vercel-Projekt sind autorisiert.

Grundlage: `../Energieberatung-Cluster/DESIGN.md` und `DESIGN-REVIEW-2026-09-05.md`. Bestehende Farben, Archivo/Archivo Narrow, scharfe Ecken und fachliche Inhalte bleiben maßgeblich.

- Startseite: eine allgemeine visuelle Leistungsübersicht ersetzt „Zwei Wege zu uns“ und die bisher nicht anklickbare Namensliste. Fünf konsistente Bereiche mit echten Projektfotos, vorhandenen Beschreibungen und direktem Link.
- „Energieberatung & Wärmeschutz“ als gemeinsamer Bereich im lokalen Entwurf; bisherige Wärmeschutz-Inhalte und bestehende URLs/Hash-Einstiege erhalten. Fachlich unterschiedliche Leistungen bleiben getrennt beschrieben.
- Energie-Hub: kompakter Einstieg mit belegtem Projektfoto, breiterer Textspalte, originaler H1 und derselben H1-Skala. Allgemeine Leistungsübersicht früh auf der Seite; keine Zielgruppenentscheidung als Voraussetzung zum Lesen. Anfragewege bleiben erreichbar.
- Zentrierte Abschnittseinleitungen und kompakte Teamdarstellung lösen die links zusammengezogene Kartenfolge ab. Lesetexte bleiben gut lesbar ausgerichtet. Keine starren Vollbildhöhen oder abgeschnittenen Inhalte.
- Sachliche Überschrift „Förderung, Ablauf und Begleitung“. Bestehende Fachabsätze, Preisangaben, FAQ und Formulare bleiben erhalten.
- Eigene Projektfotos mit sachlichen Projektbezeichnungen; keine Behauptung, das Foto belege einen bestimmten Einzelnachweis. Unklare Mehrow-Zuordnung zunächst vermeiden. Für rein dokumentenbezogene Leistungen sind bestehende Fachicons eine ehrliche Alternative zum Symbolfoto.
- Schwerpunkt: Startseite, Leistungsübersicht und Energie-Hub; geteilte Komponenten nur mit expliziter Variante für den Hub ändern, sofern die Anpassung nicht bewusst für alle Seiten gilt.
- Prüfung: Laptop/Desktop und schmales Mobilformat, funktionierende Navigation/Plus-Links, keine horizontale Überbreite, TypeScript, Lint und Build. Vorschau weiterlaufen lassen.
