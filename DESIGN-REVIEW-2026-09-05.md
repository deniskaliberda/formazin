# Frauke-Sichtung: lokaler Entwurf

Stand: 05.09.2026. Vorläufige Rückmeldungen aus der laufenden Besprechung; kein abschließendes Urteil. Lokale Vorschau: http://localhost:3045/leistungen/energieberatung, Branch `review/frauke-design-2026-09-05`.

## Erstsichtung vor dem Entwurf

| Bereich | Rückmeldung | Im Quellstand geprüft | Noch zu entscheiden |
|---|---|---|---|
| Überschriften | Größen und Formatierung sollen zur übrigen Website passen. | Startseiten-Hero und Energie-Hero verwenden dieselben H1-Größen. Energieüberschrift bricht in der schmaleren Textspalte häufiger um. Die H2-Größen unterscheiden sich zwischen Teamblock und anderen Abschnitten. | Welche bestehende Seite als visuelle Referenz dient; gewünschte Textbreite und Proportion. |
| Kurz erklärt / Team & Kompetenz | Wechsel der Ausrichtung wirkt unstimmig; Bilder am Laptop zu groß. | Teamblock ist eine gerahmte Karte mit linksbündigem Text und zwei großflächigen Porträts im 3:4-Format. | Konkrete Ausrichtung und Aufteilung; Bildschirmfüllung ist keine festgelegte Höhenvorgabe. |
| Antworten-Bereich | „Vier Antworten, bevor Sie weiterlesen“ ist unklar. | Überschrift ist separat im Seiteninhalt hinterlegt. Darunter stehen Förderung, Dauer, Zuständigkeiten und Region. | Passende sachliche Überschrift für diese Inhalte. |
| Zugang zu Energie-Leistungen | Die Bereiche und Unterseiten sollen schneller visuell erkennbar werden. | Textlinks stehen bereits im Hero. Die bildliche Übersicht mit fünf Leistungen folgt erst nach Team, vier Antworten, Zielgruppen und Einleitung. | Reihenfolge und Darstellung der Übersicht. |
| Privat / gewerblich | Eigene geplante Gebäude statt KI-Bilder. | Beide Zielgruppen-Kacheln nutzen derzeit KI-Motive. Echte Projektbilder liegen im Repo. | Welches eigene Wohnhaus und welches größere Projekt verwendet werden. |
| Startseite | „Zwei Wege zu uns“ zugunsten allgemeiner Leistungen überdenken; Bild, Beschreibung, direkter Zugang bzw. Plus. | „Zwei Wege“ und „Leistungen“ sind zwei aufeinanderfolgende Abschnitte. Die Pluszeichen der bestehenden Leistungsliste sind dekorativ, keine Links. | Konkrete gemeinsame Leistungsdarstellung. |
| Leistungsnamen | Gleiche Begriffe überall. | Startseiten-Hero: Energieberatung; Leistungsliste darunter: Wärmeschutz; Leistungsseite: beide getrennt. | Getrennte, konsistente Einträge oder ein gemeinsamer Oberbegriff. „Energieberatung & Wärmeschutz“ ist ein offener Vorschlag. |

## Vorhandene Bildquellen zur Auswahl

- Wohnhaus Mehrow: `public/images/projekte/sanierung-wohnhaus-mehrow/`. Vor Auswahl die Zuordnung prüfen: STATUS.md enthält bereits einen Hinweis auf möglicherweise vertauschte Fotos mit Getreidemühle Mehrow.
- Ernst-Reuter-Siedlung: `public/images/projekte/ernst-reuter-siedlung/`. Im Projekttext als Sanierung einer denkmalgeschützten Wohnanlage beschrieben.
- Fassadensanierung Frankfurter Allee: `public/images/projekte/fassadensanierung-frankfurter-allee/`. Im Projekttext ausdrücklich energetische Fassadensanierung eines Mehrfamilienhauses.

Diese Quellen sind Kandidaten, keine freigegebene Bildauswahl. Ein Foto allein belegt keine konkrete energetische Maßnahme.

## Betroffene Stellen für die spätere Bearbeitung

- Startseite und Leistungsnamen: `src/app/page.tsx`, `src/components/Hero.tsx`, `src/components/LeistungenSection.tsx`, `src/components/ZweiWegeSection.tsx`, `src/app/leistungen/page.tsx`.
- Energie-Hero und Bilder: `src/components/energie/HeroSplit.tsx`, `src/data/energie/energieberatung.ts`.
- Reihenfolge und Team: `src/components/energie/ServicePageTemplate.tsx`, `src/components/energie/TeamBlock.tsx`.
- Zielgruppenbilder: `src/data/energie/energieberatung.ts`, dargestellt durch `src/components/energie/AvatarSplit.tsx`.

Die Energie-Komponenten werden auch von anderen Unterseiten verwendet. Ein erster Entwurf muss daher seinen beabsichtigten Umfang ausdrücklich festlegen, damit eine Änderung am Hub nicht unbemerkt alle Seiten umgestaltet.

## Umgesetzt nach ausdrücklicher Freigabe

Denis: „Setz es mal so gut wie möglich um, wie Fraukes gesagt hat.“ Der lokale Entwurf ist auf `review/frauke-design-2026-09-05` umgesetzt; keine Veröffentlichung, kein Push oder Commit.

- Startseite: „Zwei Wege zu uns“ entfällt; eine allgemeine Leistungsübersicht mit fünf echten Projektfotos, bestehenden Kurzbeschreibungen und anklickbaren Plus-/Karten-Einstiegen ersetzt die dekorative Namensliste. Die drei vorhandenen allgemeinen Leistungsabsätze bleiben erhalten.
- Eine gemeinsame Datenquelle führt die fünf Leistungsbereiche auf Startseite und Leistungsübersicht. Navigation und Footer verwenden ebenfalls „Energieberatung & Wärmeschutz“. Bestehende Wärmeschutz-Punkte und Referenzlinks bleiben im gemeinsamen Bereich; der alte Einstieg `/leistungen#waermeschutz` funktioniert weiterhin. Das ist eine prüfbare Entwurfsentscheidung, keine endgültige Kundenabnahme.
- Energie-Hub: Original-H1 und bestehende Schriftfamilien/-skala erhalten. Breitere Textspalte und kleineres Landschaftsfoto aus der Ernst-Reuter-Siedlung; zwei allgemeine Aktionen zu Leistungen und Erstgespräch. Die fünf Leistungen stehen unmittelbar nach dem Hero als kompakte Übersicht mit direkten Links und gekennzeichneten Portfoliofotos.
- „Kurz erklärt“ und Team: zentrierte Einleitungen, einheitliche Abschnittsbreite, kompakte Personenprofile statt großer Porträtkarten. Lesetexte in längeren Fachabschnitten behalten gut lesbare Zeilenbreiten. Bilder passen sich an, ohne starre Vollbildhöhe.
- „Förderung, Ablauf und Begleitung“ ersetzt die unklare Vier-Antworten-Überschrift. Die vorhandenen vier Fachantworten bleiben erhalten.
- Die Zielgruppenwege stehen später unter „Ihr Projekt mit uns besprechen“. Vorhandene Inhalte, Anfrageziele und Formularlogik bleiben erhalten. Die Auswahl Privat/Gewerbe wird nicht mehr vor dem Kennenlernen der Leistungen verlangt.
- KI-Motive im Hub und in den fünf Energie-Leistungsseiten durch vorhandene Projektfotos ersetzt; außerdem die beiden Zielgruppenfotos in der zentralen Anfrage und den Landingpages. Die Fotoauswahl wurde am vorhandenen Portfolio und den Bildern geprüft. Keine zusätzliche energetische Einzelleistung aus einem Foto abgeleitet. Auf Geo-Seiten und in einer regionalen Landingpage-Illustration bleiben ältere KI-Motive außerhalb dieses Entwurfs bestehen; der Bildnachweis im Impressum bleibt daher erhalten.

## Prüfung und Abnahme

Geprüft bei 1366 × 768, 1024 × 768 und 390 × 844: keine Seitenüberbreite im Hub; Startseite und Leistungsübersicht auch mobil ohne horizontales Scrollen. Förderdiagramm-Tabs umbrechen jetzt innerhalb der verfügbaren Breite. Mobile Navigation, Sprung zu den fünf Leistungen, Brandschutz-Kartenlink und alter Wärmeschutz-Hash funktionieren.

Elf relevante Routen antworten mit HTTP 200 und jeweils genau einer H1. TypeScript und ESLint bestehen. Produktionsbuild in separater temporärer Kopie besteht (49 statische Seiten), damit der laufende lokale Entwicklungsserver nicht unterbrochen wird. Keine Formulare abgesendet.

Programmgesteuerter Inhaltsvergleich bestätigt: originale H1, Einleitung, Direktantwort, Team, Preisangaben, FAQ, Ablauf, Abgrenzung, Trust-Inhalt, Referenzen und CTA sowie alle Nicht-Bild-Absätze im Hub unverändert; Titel, Beschreibung, Preis und Link aller fünf Energieleistungen ebenfalls unverändert.

Screenshots: `../Energieberatung-Cluster/bild-proofs/frauke-review-2026-09-05/` (Startseiten-Leistungen am Laptop, Energie-Hero am Laptop und mobil).

Nächster Schritt: gemeinsame Sichtung von Proportionen, Leistungsstruktur und konkreten Projektfotos. Bestehende nicht zuordenbare Mehrow-Bilder werden nicht neu verwendet. Kein technischer Blocker; fachliche Freigabe und Veröffentlichung sind nicht Teil dieser lokalen Umsetzung.


## Veröffentlichungsfreigabe · 06.09.2026

Denis hat den bestehenden Entwurf ausdrücklich mit „ja online stellen“ zur Veröffentlichung freigegeben. Die früheren lokalen Beschränkungen sind für diese Veröffentlichung aufgehoben. Separate Ads-Arbeit bleibt außerhalb des Release.
