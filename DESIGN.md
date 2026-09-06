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

## Einheitliche visuelle Leistungsseiten · 06.09.2026

Auf alle Kern-Leistungsansichten anwenden: Hero grau, fachliche Erklärung weiß, Ablauf grau, Projekte/Ansprechpartner weiß, abschließende FAQ grau. Architektur und Generalplanung erhalten kompakte Zusammenhangsdiagramme vor dem Ablauf; Tragwerk vier Bauweisen mit passenden linierten Symbolen, Brandschutz zwei grafisch gruppierte Darstellungsformen. Keine zusätzlichen wiederholten Einführungstexte. Abläufe mit 3/4/5 Schritten nutzen die gesamte verfügbare Desktopbreite. Bestehende, bereits auf der Teamseite zugeordnete Porträts von Frauke und Karsten ergänzen; Frauke auch bei der von ihr koordinierten Generalplanung. Keine neuen Fotos erzeugen. Energieberatung bleibt eigenständiger Hub. Preview-only.

## Sprache · Fraukes Anweisung vom 06.09.2026

Website-Fließtexte ohne Gedankenstriche oder Semikolons. Natürliche Satzverbindungen, kurze klare Sätze, keine Fülltexte oder austauschbaren Floskeln. Notwendige Fachwort-Bindestriche und Zahlenbereiche bleiben korrekt. In diesem Durchgang werden die vorhandenen Leistungsbeschreibungen, FAQ, Ansprechpartner und gemeinsamen Textbausteine redigiert. Inhalt und Layout bleiben fachlich unverändert.

## Energie-Leistungsübersicht nach Bothur-Sichtung · 06.09.2026

Aktuellen Produktionsstand in den Vorschau-Branch integriert, alle freigegebenen KERN-Änderungen erhalten. Energieberatung: fünf bestehende Leistungen als eigene erklärende Liniengrafiken statt unpassender Projektfotos. Vollständig klickbare, statische Karten mit verständlichem Kurztext und internem Detailziel; kein automatisch laufendes Karussell. Formazin-Blau/Weiß/Grau und bestehende Typografie erhalten. Grafiken zeigen Sanierungsschritte, Prüfschritte, Ausweis-Skala, Gebäudehülle und Förderablauf. Keine fremden Texte, Medien, Bewertungen, Leistungszusagen oder Förderzahlen übernehmen. Zahlen des vorhandenen Live-Stands nicht aus dem Konkurrenzauftritt ersetzen. Vorschau bleibt Vorschau.

## Energieeinstieg und Auswahl · 06.09.2026

Im ersten Bildschirm wieder zwei direkte Wege: Privates Wohnhaus sowie Unternehmen & größere Projekte, anstelle von Leistungen entdecken und allgemeinem Erstgespräch. Bestehende Zielseiten erhalten. Die fünf Leistungskarten behalten ihre eigenen Liniengrafiken ohne Fotos. Bei der Fördergrafik sichtbare Auswahlaufforderung, große umrandete Schaltflächen, eindeutiger aktiver Zustand und Hinweis auf wechselnde Zahlen. Tastaturbedienung mit nativen Buttons und vorgelesener Ergebnisänderung. Keine Änderung an vorhandenen Beträgen.

## Energieberatung Punkt 04 · 06.09.2026

Keine räumliche Begrenzung auf 50 Kilometer. Berlin und Brandenburg als regionaler Schwerpunkt mit Partnern, auch überregionale Aufträge einschließlich Sachsen-Anhalt laut Kundenaussage. Kleine schematische Ortsübersicht ohne Radius oder Gebietsgrenze, keine erfundenen Partnerstandorte. Kürzere Texte und geringere Abschnittshöhe. Widersprechende Reichweitenaussagen im Hub und verlinkten Unternehmenseinstieg angleichen, Anfahrtskonditionen nicht verändern.

## Punkt 04 · Bildwunsch 06.09.2026

Im Energie-Hub ersetzt das vorhandene Foto des Mehrfamilienhauses Strausberger Straße in Altlandsberg die Ortsgrafik. Regionstext, kompakte Aufteilung und Anker erhalten. Ortsgrafiken auf anderen Seiten bleiben. Neutrale Portfolio-Bildunterschrift ohne zusätzliche fachliche Projektbehauptung.

## Energie-Hub · durchgehende Ausrichtung und Ansprechpartner 06.09.2026

Überschriften und Einleitungen im Hub einheitlich linksbündig. Gemeinsame äußere Containerbreite beibehalten, schmale mittige Textsäule durch zusammengehörige Inhaltsgruppen in zwei Desktopspalten ersetzen. Texte bleiben lesbar, zugehörige Grafiken/Fotos daneben. Mobile Reihenfolge bleibt sinnvoll gestapelt. Feiths Ansprechpartnerblock mit seinem vorhandenen echten Porträt statt Fassadensanierung. Regionfoto bei Punkt04 bleibt erhalten. Keine Änderung fachlicher Aussagen oder Preise.

## Veröffentlichung · ausdrückliche Freigabe 06.09.2026

Denis: „mach das live“. Freigegebenen Leistungs- und Energie-Hub-Stand auf main veröffentlichen. Entwurfsband und noindex für Leistungsseiten entfernen, neue Leistungsrouten in Sitemap aufnehmen. Zuvor zurückgestellte Ratgeber bleiben deaktiviert, ohne Navigationseintrag und Sitemapaufnahme. Bestehende Projektbilder, Inhalte und Formulare erhalten.

## Leistungsseiten · Live-Review 06.09.2026

Frauke möchte bei Architektur den gesamten Abschnitt „Planung im Zusammenhang“ entfernen. Überschrift und Grafik entfallen ohne Ersatz. Ablauf folgt direkt auf den Einstieg. Die Koordinationsgrafik der Generalplanung bleibt.

Alle klassischen Leistungsseiten erhalten mehr Raum nach Vorbild der Startseite: Abschnittsabstände48px mobil und80px ab Tablet, größere Überschriftenabstände und64px zwischen den Desktopspalten. Graue und weiße Abschnitte wechseln weiterhin. Einleitungen der Fachabschnitte nutzen linksbündig die volle Inhaltsbreite, insbesondere Brandschutz und Bauweisen. Fachtexte bleiben erhalten. Telefonnummern bleiben bis zur ausdrücklichen Entscheidung bestehen.

Bauweisen bekommen konstruktive Liniensymbole im bestehenden Blau als Alternative: Stahlbetonquerschnitt mit Bewehrung, Stahlprofil, Holzverbindung und Mauerwerksverband. Keine Haus- oder Baumzeichen als Materialsymbol.

Generalplanung: Auf ausdrücklichen Wunsch kein Block „Fachlich verantwortlich“. Referenzprojekte nutzen die freie Breite. Fachliche Inhalte werden später mit dem Büro durchgesehen.

Energieberatung: Aufbau und beide Einstiege für private und gewerbliche Vorhaben erhalten. Hero mit48/80px Innenabstand, ausgewogeneren Desktopspalten und vollständig sichtbarem Foto innerhalb des gemeinsamen Containers. Bei Punkt04 den Satz über bisherige Projekte in Sachsen-Anhalt entfernen. Überregionale Ansprechbarkeit bleibt.

Startseiten-Hero: Nach Klarstellung bleibt der Link „Energieberatung“ erhalten. Nur der Zusatz „& Wärmeschutz“ entfällt an dieser Stelle. Keine zusätzliche Unterseite anlegen.

Auch die kleine Überschrift im Hero der Energieübersicht lautet nur „Energieberatung“.

Kontakt auf der Startseite: Firmenname einschließlich mbB in einer Zeile. Links drei bündige Zeilen für Firma, Straße und Ort, daneben drei gleich hohe Zeilen für Telefon, Fax und E-Mail. Kontaktdaten erhalten mehr Breite, Formular erst auf breiten Desktops daneben, mobil gestapelt.
