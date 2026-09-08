# Leistungs-Vorschau · Frauke-Review 06.09.2026

## Punktweise Startseiten-Durchsicht · 06.09.2026

Ticket 2: Auf ausdrücklichen Wunsch von Frauke unter dem gesamten Leistungsinhalt einen zusätzlichen Button „Zu den Leistungen“ ergänzen, Ziel `/leistungen`. Bestehenden blau umrandeten Buttonstil und die rechte Ausrichtung der Leistungsnamen aufnehmen. Auf Mobil innerhalb der Containerbreite, keine Änderungen an den bisherigen Einzellinks oder Texten.

Ticket 1: Frauke hat den Punkt nach Neuladen zurückgezogen. Geschlossen ohne Änderung.

Ticket 3: Sichtbare kombinierte Leistungsbezeichnungen „Energieberatung & Wärmeschutz“ nur noch „Energieberatung“. Fachbegriffe, Leistungsinhalte und bestehende URLs erhalten.

Ticket 4: Neue ausdrückliche Kontakt-Anordnung ersetzt die frühere Dreizeilenentscheidung. Ab Tablet/Desktop bleibt rechts die Zeile auf Firmenhöhe frei. Telefon und Fax gemeinsam auf Straßenhöhe, E-Mail auf Ortshöhe. Auf schmaleren Ansichten die Gruppen untereinander; Kontaktdaten, Links und Formular unverändert.

Ticket 5: Aktiver Hauptbereich mit blauem Text und einer klaren blauen Unterstreichung, Desktop und Mobil. Navigation verlinkt eigene Routen; Unterseiten behalten den zugehörigen Hauptpunkt. Energieberatung einschließlich ihrer Anfragewege separat, nie gleichzeitig Leistungen. Bestehendes Sticky-/Scrollverhalten erhalten, aria-current für den aktiven Bereich.

Ticket 6: Architekturablauf behält vier Gruppen und die vorhandenen Beschreibungen. Anstelle von Schrittzahlen die anhand HOAI Anlage 10 geprüften Leistungsphasen: Grundlagen/Vorentwurf 1–2, Entwurf/Genehmigung 3–4, Ausführung 5, Vergabe/Bauüberwachung 6–8. Keine zusätzliche Phase oder Leistung ergänzen.

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

## Energie-Unterseiten · durchgängiges Hausdesign 06.09.2026

Frauke bemängelt am iSFP den Wechsel zwischen schmalen, halben und vollen Inhaltsbreiten. Gemeinsames Template für alle Energie-Leistungs- und Ortsseiten angleichen: gleiche äußere Breite, linksbündige Überschriften und Einleitungen, auf Desktop vollständige Inhaltsgruppen mit Text links und Grafik/Fotos rechts. Keine abwechselnde Spiegelung. Abschnittsabstände48/80px, abwechselnde weiße und graue Flächen, passende Haus-Typografie. Körpertexte in zusammengehörigen Gruppen statt einer schmalen Restspalte, volle Tabellenbreite. FAQs auf Unterseiten zum Schluss. Ablauf nutzt die vorhandene Schrittzahl für die Spalten.

Vorhandene Projektfotos bleiben Portfolio-Beispiele und erhalten vollständige Bildansichten, keine neue Zuordnung von Leistungen behaupten. Ansprechpartner mit vorhandenem echtem Porträt statt einem beliebigen Projektfoto. Keine neuen Bilder erfinden. Preise, fachliche Aussagen, Schema und Linkziele erhalten. Hub-Vereinfachung wurde diskutiert, ist noch kein Auftrag zur Textkürzung.

Footer 06.09.2026: Nur „Energieberatung anfragen“ als Energie-Link erhalten. Doppelten Link „Energieberatung & Wärmeschutz“ entfernen.

Leistungsseiten: „Büro anrufen“ durch blauen Button „Kontakt aufnehmen“ zum Startseitenkontakt ersetzen. Auch der Abschlussblock führt dorthin, ohne zusätzlichen Telefonbutton. Telefonnummer bleibt im Kontaktbereich und im Footer erreichbar.

Über uns 06.09.2026: Den gesamten zusätzlichen Teamabschnitt „Vier Menschen, klare Zuständigkeiten“ einschließlich vier Profilkarten entfernen. Ursprüngliches Teamfoto mit Bürotext und das blaue Banner direkt darunter erhalten. Personenschema des entfernten Abschnitts entfällt auf dieser Seite.

## Kompakte Energieübersicht und Projektkarten · 06.09.2026

Freigegeben: Energie-Hub als kurze Orientierung. Bestehende fünf Leistungskarten und Oda/Feith-Team unverändert erhalten. Danach drei kurze Anliegen mit passenden Detailzielen, vier allgemeine Ablaufschritte und kompakter Regional-/Kontaktabschluss mit Strausberger Foto. Keine wiederholten Preistabellen, doppelten Porträts, langen FAQ oder mehrfachen Leistungsgittern auf der Übersicht. Detailthemen bleiben auf fachlich passenden bestehenden Unterseiten; Bestandsstrategie dort ergänzen. Bestehende Anker soweit sinnvoll weiterführen. Schrift, Blau, abwechselnde Flächen und gemeinsame Breite erhalten. Bothur und EB+ nur als Strukturvergleich, keine fremden Texte, Bilder oder Fördersätze übernehmen.

Startseiten-Projektkarten: vier identische Bildverhältnisse und gleich hohe Informationsbereiche, ausgerichtete Ortszeilen, vollständige Projektnamen ohne Abschneiden. Keine initial unsichtbaren Karten. Lindenbergfoto korrekt vorhanden, Original und optimierte Quelle geprüft; keine falsche Fotozuordnung als Ersatz.

## Energie-Hero als Nutzenübersicht · 06.09.2026

Auf ausdrücklichen Wunsch ersetzt eine eigene Infografik das Projektfoto im Hero der Energieübersicht. Drei grafisch verbundene Stationen mit Linienicons, typischer Kundenfrage, konkreter Leistung und Link zur passenden Unterseite. Maßnahmen ordnen, Fördermöglichkeiten prüfen, Umsetzung begleiten. Keine Fördergarantie, erfundene Einsparung oder Fördersätze. HTML-Text und echte Links für Lesbarkeit und Bedienung, keine Schrift als Rasterbild. Weißer Hintergrund, Formazin-Blau, ruhige Konturen und großzügige Abstände. Mobile volle Breite unter dem Einstieg. Die bisher geplante dreifache Fragewiederholung nach dem Team entfällt zugunsten dieses direkten Einstiegs. Strausberger Foto im regionalen Abschluss bleibt.

## Ticket 7 · Stilentwurf für Verzeichnisse und regionale Partner 06.09.2026

BLA Team dient ausschließlich als Stilreferenz. Screenshot in ../Energieberatung-Cluster/tickets-review-2026-09-06/ticket-7-bla-logozeile-vorlage.png. Unten auf Über uns zwei ruhige Gruppen auf Weiß: Partner in der Region und Kammern/Verzeichnisse. Einheitliche optische Logohöhen, großzügige Zwischenräume, dezenter blauer Link-/Fokuszustand, mobil umbrechend. Keine eigene Route. Keine Organisation aus BLA als Formazin-Partner übernehmen.

Nur klar gekennzeichneten separaten Gestaltungsentwurf erstellen, keine Veröffentlichung dieses Tickets. Regionale Partnerliste und eigene verwendbare Logos fehlen. Oda ist offiziell bei AK Sachsen-Anhalt unter /eintrag/1785/ belegt, Karsten in Nachweisberechtigte Brandenburg mit BBIK-Mitgliedschaft. Energie-Expertenlistung aus Projektangaben bekannt, konkretes Personenprofil noch nicht verifiziert. Keine behauptete Listung allein durch Verlinkung der allgemeinen dena-Seite.

Ticket 7 Präzisierung: Kammern allgemein und ohne sichtbare Personenzuordnung, offizielle Kammer-Startseiten als Linkziele. Personenbezogene Nachweise bleiben nur interne Grundlage. Regionale Gruppe ausschließlich Entwurf bis Abstimmung mit den Eltern: ElektroLemme als ausdrücklich ungeprüftes Beispiel, ein zweiter namentlich noch ungeklärter Platz, keine weiteren Firmen oder Logos. Weiterhin keine Veröffentlichung.

Ticket 7 abschließende Klarstellung: Regionale Gruppe ausschließlich mit neutralen Platzhaltern ohne reale Namen, Logos oder URLs. Gesprächsbeispiele nicht übernehmen und nicht weiter nach deren Schreibweise fragen. Allgemeine Kammerdarstellung ohne Mitarbeiternamen bleibt. Dies ersetzt die unmittelbar vorherige Beispieldarstellung.

Ticket 7 Revision v3: Frauke benennt als allgemeine Darstellungsziele ausdrücklich Brandenburgische Architektenkammer (https://www.ak-brandenburg.de/), Brandenburgische Ingenieurkammer (https://www.bbik.de/) und Energieeffizienz-Expertenliste (https://www.energie-effizienz-experten.de/). Offizielle Namen/URLs geprüft. Keine Mitarbeiternamen oder konkreten Einzelmitgliedschaftsbehauptungen. Sachsen-Anhalt bleibt interne historische Verifikation und wird im Entwurf ersetzt. Impressum unverändert. Regionale Partner weiterhin nur neutrale Platzhalter. Vorschau ausdrücklich unveröffentlicht.

Ticket 7 Logo-Korrektur v4: Original-Logos aus offiziellen Seiten ersetzen alle Textblöcke in der Kammer-/Verzeichnisreihe. Je Eintrag nur das Logo als Link, keine sichtbaren Personen-/Organisationsnamensblöcke oder Linktexte zusätzlich zum Bild. Alttexte und zugängliche Linknamen erhalten. Originaldateien dokumentiert in ../Energieberatung-Cluster/tickets-review-2026-09-06/logo-assets/quellen.json. Proportionen erhalten, harmonische optische Größe. Bestehenden Chrome-Tab und lokale URL aktualisieren, keine neue Registerkarte und kein Release.

## Ticket 7 · echte Website zur lokalen Sichtung 06.09.2026

Finale Vorgabe ersetzt alle bisherigen Entwurfsvarianten: unmittelbar unter der bestehenden blauen Trust-Section auf Über uns ausschließlich drei Original-Logos als offizielle allgemeine Links. Keine Überschrift, Erklärung, Zusatzlabels, Mitarbeiter oder regionalen Partner/Platzhalter. Weiße ruhige Zeile, optisch ausgeglichene Größen, mobil gestapelt, native Links mit Alttext und sichtbarem Tastaturfokus. Originaldateien lokal unverändert übernehmen. Vollständige Website in Chrome lokal zeigen, Veröffentlichung erst nach Sichtung. Tickets 2–6 auf 890b6f4 erhalten.

Ticket 7 Ergänzung: Unternehmen 16356 e.V. ausdrücklich als vierter Original-Logolink in derselben Zeile, https://unternehmen16356.de/. Original /assets/logo-badge.png, keine Behauptung einer Vorstandsrolle. Vier Spalten ab Desktop, zwei ab kleinem Tablet, eine mobil. Kein separater Partnerbereich.

Ticket 7 Veröffentlichung: Nach Sichtung ausdrückliche Freigabe „alles live schalten“. Genau die geprüfte vollständige Website mit vier Logos veröffentlichen, keine weitere Layoutänderung.


## Anfrage Sanierung/Förderung · kompakte Ansprechpartner 07.09.2026

Ausdrücklich beauftragt: Auf `/anfrage/sanierung-foerderung` dieselbe kompakte Oda-/Feith-Darstellung wie im Energie-Hub. Bestehende `compact`-Variante des TeamBlock wiederverwenden und deren CSS unabhängig vom Seiten-Wrapper verfügbar machen. Porträts 96×128px, ab1024px 120×160px, bestehender 3:4-Ausschnitt oben ausgerichtet. Namen und Beschreibung daneben, unter640px Profile untereinander. Nur diese Anfrage-Route aktiviert die Variante; andere Anfragewege unverändert. Texte, Kontaktlinks und Funnel bleiben erhalten. Desktop, Tablet und Mobil sowie geteilte Komponente auf Energie-Seiten prüfen. Nur lokale/Branch-Vorschau, Produktion braucht eine neue Freigabe.


Porträtkorrektur Veröffentlichung 07.09.2026: Denis bestätigt die geprüfte Vorschau mit „passt go live“. Genau diese Korrektur veröffentlichen, keine weitere Gestaltung.


## Oda-/Feith-Team überall einheitlich · 07.09.2026

Denis erweitert die gerade veröffentlichte Größenkorrektur ausdrücklich auf alle gemeinsamen Oda-/Feith-Darstellungen, insbesondere `/anfrage/foerderstrategie-bestand`. Die freigegebene kompakte Team-Komponente wird der einzige Standard. Keine Umschalter für große Fotos mehr. Betrifft auch `/anfrage/energieausweis-geg`, alle drei Anfragewege und13 Energieübersichts-/Detailseiten verwenden denselben TeamBlock. Vorhandene96/120px Breiten,3:4-Ausschnitte und Texte erhalten. Bestehende Einzelprofile in fachlich anderen Abschnitten sind keine doppelte Teamdarstellung. Prüfung der16 Teamseiten und der zwei korrigierten Routen auf Desktop/Tablet/Mobil. Diese Fortsetzung übernimmt den bereits freigegebenen Live-Stil.


## Feiths Ansprechpartner-Korrekturen · 08.09.2026

Architektur: Frauke als „Architektin“, „Inhaberin“ aus Rollenbezeichnung, Kurztext und Alttext entfernen. Oda mit bestehendem Foto und vorhandenen geprüften Angaben direkt darunter in derselben Ansprechpartnerdarstellung ergänzen. Bestehende144×192px Bildrahmen und unbeschnittene Proportionen erhalten. Ansprechpartner auf Desktop im rechten Bereich untereinander, mobil im bestehenden Ablauf. Fachlich verantwortliche Personen im Content als Liste hinterlegen, sichtbare Darstellung und Person-Schema aus derselben Liste. Tragwerksplanung: Karstens Rollenbezeichnung ausschließlich „Tragwerksplaner“, auch in der Kurzbeschreibung ohne „Statiker“. Fachliche Leistungstexte unverändert.


## Architektur · Profile nebeneinander, Projekte darunter 08.09.2026

Denis korrigiert die Anordnung: Frauke und Oda nebeneinander über die Inhaltsbreite, darunter die bestehenden Projekte mittig. Mobile Profile untereinander, ab Tablet zwei Spalten, Foto/Text ab Desktop nebeneinander. Bestehende144×192px Bildrahmen, Quellen, Ausschnitte, Namen und Texte unverändert. DOM-Reihenfolge entspricht der sichtbaren Reihenfolge: Profile vor Projekten. Alle anderen Leistungsseiten behalten ihre bisherige Anordnung.
