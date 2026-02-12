# Projektseite – Anleitung zur Datenvorbereitung

## 1. Ordnerstruktur für Projekt-Bilder

Bitte erstelle für jedes Projekt einen Ordner unter:
```
/public/images/projekte/[projekt-slug]/
```

**Beispiel:**
```
/public/images/projekte/rathaus-ahrensfelde/
  - hero.jpg          (Hauptbild, 1920x1080px empfohlen)
  - galerie-1.jpg     (Galeriebild 1)
  - galerie-2.jpg     (Galeriebild 2)
  - galerie-3.jpg     (Galeriebild 3, optional mehr)
```

**Slug-Regel:** Kleinbuchstaben, keine Umlaute, Bindestriche statt Leerzeichen
- "Rathaus Ahrensfelde" → `rathaus-ahrensfelde`
- "Wohnquartier Barnim-Aue" → `wohnquartier-barnim-aue`

---

## 2. Projekt-Daten Template

Für jedes Projekt benötige ich folgende Informationen. Bitte fülle das Template für **jedes Projekt** aus:

### PROJEKT-TEMPLATE (zum Kopieren)

```
---
PROJEKT: [Projekt-Name]
SLUG: [projekt-slug]
---

## Basis-Informationen
Kategorie: [Öffentliche Hand / Wohnungsbau / Gewerbebau / Privatbau / Sonderbau]
Typ: [neubau / sanierung]
Bauherr: [öffentlich / privat]
Ort: [Stadt]
Jahr: [YYYY]

## Kurzbeschreibung (1-2 Sätze, erscheint auf Übersichtsseite)
[Beschreibung]

## Ausführliche Beschreibung (2-3 Absätze, erscheint auf Detailseite)
[Beschreibung Absatz 1]

[Beschreibung Absatz 2]

[Beschreibung Absatz 3, optional]

## Eckdaten
Bauherr: [Vollständiger Name]
Unsere Leistungen:
- [Leistung 1]
- [Leistung 2]
- [Leistung 3]

BGF: [XXX m²]
Baukosten: [X,X Mio. €]
Fertigstellung: [YYYY]

## Bilder
Hero-Bild: /images/projekte/[slug]/hero.jpg
Galerie:
- /images/projekte/[slug]/galerie-1.jpg
- /images/projekte/[slug]/galerie-2.jpg
- /images/projekte/[slug]/galerie-3.jpg
```

---

## 3. Beispiel ausgefüllt

```
---
PROJEKT: Rathaus-Erweiterung Ahrensfelde
SLUG: rathaus-ahrensfelde
---

## Basis-Informationen
Kategorie: Öffentliche Hand
Typ: sanierung
Bauherr: öffentlich
Ort: Ahrensfelde
Jahr: 2022

## Kurzbeschreibung
Erweiterung und Sanierung des bestehenden Rathaus-Gebäudes mit neuem Bürgersaal. Objektplanung und Tragwerksplanung aus einer Hand.

## Ausführliche Beschreibung
Das Rathaus der Gemeinde Ahrensfelde wurde im Rahmen eines umfassenden Sanierungsprojekts modernisiert und erweitert. Ein neuer Bürgersaal mit 120 Plätzen bietet Raum für Gemeindeversammlungen und kulturelle Veranstaltungen.

Unsere Leistungen umfassten die komplette Objektplanung nach HOAI (LP 1-9) sowie die Tragwerksplanung für die Erweiterung. Besondere Herausforderung war die Integration des Neubaus in die bestehende Bausubstanz aus den 1970er Jahren.

Das Projekt wurde termingerecht und im Budgetrahmen fertiggestellt und ist seit 2022 in Betrieb.

## Eckdaten
Bauherr: Gemeinde Ahrensfelde
Unsere Leistungen:
- Objektplanung LP 1-9 nach HOAI
- Tragwerksplanung
- Brandschutzplanung
- Bauüberwachung

BGF: 1.200 m²
Baukosten: 2,5 Mio. €
Fertigstellung: 2022

## Bilder
Hero-Bild: /images/projekte/rathaus-ahrensfelde/hero.jpg
Galerie:
- /images/projekte/rathaus-ahrensfelde/galerie-1.jpg
- /images/projekte/rathaus-ahrensfelde/galerie-2.jpg
- /images/projekte/rathaus-ahrensfelde/galerie-3.jpg
```

---

## 4. Was ich von dir brauche

Bitte schicke mir:

1. **Eine Liste aller Projekte** mit ausgefüllten Templates (siehe oben)
2. **Alle Bilder** im richtigen Ordner (`/public/images/projekte/[slug]/`)
3. **Angabe, welche Projekte prominent auf der Startseite** erscheinen sollen (max. 4)
4. **Filter-Kategorien**: Sollen alle Projekte unter "Alle/Neubau/Sanierung/Öffentlich/Privat" erscheinen, oder möchtest du zusätzliche Filter?

---

## 5. Nächste Schritte

Sobald du mir die Daten geschickt hast:
1. Ich lege alle Projekte in der Code-Struktur an
2. Ich verlinke sie korrekt mit den Bildern
3. Ich erstelle die Filter-Funktionalität
4. Die Projekte erscheinen automatisch auf:
   - Übersichtsseite `/projekte`
   - Detail-Seiten `/projekte/[slug]`
   - Eventuell auf der Startseite (wenn gewünscht)

---

## 6. Optional: Zusätzliche Features

Möchtest du noch:
- **Projekt-Kategorien** (z.B. "Öffentliche Bauten", "Wohnbau", etc.)?
- **Auszeichnungen/Preise** für bestimmte Projekte?
- **Partner/Beteiligte** (z.B. Architekturbüros, Fachplaner)?
- **Downloads** (PDFs, Planzeichnungen)?

Sag mir Bescheid, wenn du diese Features haben möchtest!

---

**Fragen? Schick mir einfach eine Nachricht!**
