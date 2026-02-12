"use client";

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GraduationCap, Award, Building2, Users, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Team-Mitglieder mit Position und Maskierungsbereich auf dem Foto
const TEAM_MEMBERS = [
  {
    id: "dieter",
    name: "Dr.-Ing. Dieter Formazin",
    rolle: "Gründer & Partner",
    hotspot: { top: 40, left: 25 }, // Klickbarer Bereich
    textPosition: { top: 15, left: 60 }, // Wo der Text erscheinen soll
    vita: {
      qualifikationen: [
        "Bauingenieurwesen, TU Berlin",
        "Promotion Tragwerksplanung",
        "Beratender Ingenieur (VBI)",
        "Prüfingenieur für Baustatik",
      ],
      schwerpunkte: [
        "Tragwerksplanung für Hochbau",
        "Konstruktiver Ingenieurbau",
        "Prüfung von Statiken",
      ],
      bio: "Dr.-Ing. Dieter Formazin gründete 1990 das Ingenieurbüro in Ahrensfelde. Mit über 30 Jahren Erfahrung in der Tragwerksplanung leitet er heute die statischen Berechnungen für komplexe Bauvorhaben.",
    },
  },
  {
    id: "karsten",
    name: "Dipl.-Ing. Karsten Formazin",
    rolle: "Partner",
    hotspot: { top: 40, left: 45 },
    textPosition: { top: 15, left: 15 },
    vita: {
      qualifikationen: [
        "Architektur, TU Berlin",
        "Mitglied der Architektenkammer Berlin",
        "Sachverständiger für Schäden an Gebäuden",
        "Fachplaner Brandschutz",
      ],
      schwerpunkte: [
        "Objektplanung Hochbau",
        "Brandschutzplanung",
        "Generalplanung und Koordination",
      ],
      bio: "Dipl.-Ing. Karsten Formazin erweiterte das Büro um Architekturleistungen. Als Fachplaner für Brandschutz koordiniert er komplexe Generalplanungsprojekte.",
    },
  },
  {
    id: "dennis",
    name: "Dennis Formazin",
    rolle: "Architekt",
    hotspot: { top: 40, left: 65 },
    textPosition: { top: 15, left: 15 },
    vita: {
      qualifikationen: [
        "Architektur",
      ],
      schwerpunkte: [
        "Digitalisierung und Prozessoptimierung",
        "Objektplanung",
        "Visualisierung",
      ],
      bio: "Dennis Formazin verantwortet die digitalen Planungsprozesse und unterstützt bei der Objektplanung.",
    },
  },
  {
    id: "elisabeth",
    name: "Elisabeth Formazin",
    rolle: "Verwaltung",
    hotspot: { top: 40, left: 80 },
    textPosition: { top: 15, left: 15 },
    vita: {
      qualifikationen: [
        "Büroverwaltung",
      ],
      schwerpunkte: [
        "Büroorganisation",
        "Finanzverwaltung",
        "Personalwesen",
      ],
      bio: "Elisabeth Formazin kümmert sich um die organisatorischen und administrativen Belange des Büros.",
    },
  },
];

export default function UeberUnsPage() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState<string | null>(null);

  const currentMember = TEAM_MEMBERS.find((m) => m.id === selectedMember);

  return (
    <>
      <Navigation />

      {/* Intro mit Teamfoto */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Über uns
          </h1>

          {/* Interaktives Teamfoto */}
          <div className="relative mt-12">
            <p className="mb-4 text-center font-sans text-sm text-[#1e293b]/60">
              Klicken Sie auf eine Person, um mehr zu erfahren
            </p>
            
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2px] bg-black lg:aspect-[21/9]">
              {/* Hauptbild */}
              <Image
                src="/images/teamfoto-über-uns.jpg"
                alt="Team Dr.-Ing. Formazin & Partner"
                fill
                priority
                className={`object-cover transition-all duration-500 ${
                  selectedMember ? "brightness-[0.3]" : "brightness-100"
                }`}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              
              {/* Klickbare Hotspots */}
              {TEAM_MEMBERS.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    selectedMember && selectedMember !== member.id ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                  style={{ top: `${member.hotspot.top}%`, left: `${member.hotspot.left}%` }}
                  aria-label={`${selectedMember === member.id ? 'Schließen' : 'Mehr über'} ${member.name}`}
                >
                  {selectedMember === member.id ? (
                    // Aktiver Zustand: Großer Ring mit X
                    <div className="flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-white bg-[#2d4196]" />
                      <span className="relative z-10 font-sans text-3xl font-bold text-white">×</span>
                    </div>
                  ) : (
                    // Hover-Zustand: Ring + Name
                    <div className="relative">
                      {/* Unsichtbarer Hotspot-Bereich */}
                      <div className="h-20 w-20" />
                      
                      {/* Ring bei Hover */}
                      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white opacity-0 shadow-lg transition-all duration-300 group-hover:h-16 group-hover:w-16 group-hover:opacity-100" />
                      
                      {/* Name bei Hover */}
                      <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-[2px] bg-white px-3 py-1 text-center opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                        <span className="font-sans text-xs font-medium text-[#1e293b]">
                          {member.name}
                        </span>
                      </div>
                    </div>
                  )}
                </button>
              ))}

              {/* Text-Overlay beim Klick */}
              {currentMember && (
                <div
                  className="absolute w-[45%] rounded-[2px] bg-white/95 p-6 shadow-2xl backdrop-blur-sm transition-all duration-500 md:p-8"
                  style={{ 
                    top: `${currentMember.textPosition.top}%`, 
                    left: `${currentMember.textPosition.left}%` 
                  }}
                >
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-8 w-8 flex-shrink-0 text-[#2d4196]" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#1e293b] md:text-xl">
                        {currentMember.name}
                      </h3>
                      <p className="mt-1 font-sans text-xs text-[#1e293b]/60">
                        {currentMember.rolle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#1e293b]/80">
                    {currentMember.vita.bio}
                  </p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="font-sans text-xs font-medium text-[#1e293b]">Qualifikationen</p>
                      <ul className="mt-2 space-y-1">
                        {currentMember.vita.qualifikationen.map((qual, index) => (
                          <li key={index} className="font-sans text-xs text-[#1e293b]/70">
                            + {qual}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-sans text-xs font-medium text-[#1e293b]">Tätigkeitsschwerpunkte</p>
                      <ul className="mt-2 space-y-1">
                        {currentMember.vita.schwerpunkte.map((schwerpunkt, index) => (
                          <li key={index} className="font-sans text-xs text-[#1e293b]/70">
                            + {schwerpunkt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text unter Bild */}
          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
            <p>
              Das Büro Dr.-Ing. Formazin & Partner wurde 1990 von Dr.-Ing. Dieter Formazin gegründet. 
              Aus einem Ein-Mann-Büro entwickelte sich über die Jahre ein kompetentes Team von 
              Architekten und Bauingenieuren.
            </p>
            <p>
              Heute führen Dr.-Ing. Dieter Formazin und sein Sohn Dipl.-Ing. Karsten Formazin 
              das Büro gemeinsam. Als eingetragene partnerschaftliche Gesellschaft (mbB) verbinden 
              wir Tradition mit moderner Planungskultur.
            </p>
            <p>
              Mit 10 Mitarbeitern realisieren wir Projekte im Großraum Berlin-Brandenburg – 
              von der ersten Idee bis zur Fertigstellung. Unsere Stärke liegt in der Kombination 
              von Architektur und Tragwerksplanung unter einem Dach.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-[#1e293b]/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Seit 1990
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                Über 30 Jahre Erfahrung
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Familienunternehmen
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                3. Generation
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Alles aus einer Hand
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                Architektur & Tragwerk
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl">
                Regional verwurzelt
              </p>
              <p className="mt-2 font-sans text-sm text-[#1e293b]/70 md:text-base">
                Berlin-Brandenburg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geschichte der Firma */}
      <section className="border-t border-[#1e293b]/10 bg-[#f3f4f6] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h2 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Seit 1990 in Ahrensfelde
          </h2>

          <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
            <p>
              1990 gründete Dr.-Ing. Dieter Formazin das Ingenieurbüro in Ahrensfelde bei Berlin. 
              Der Schwerpunkt lag zunächst auf Tragwerksplanung für Hochbauprojekte im Raum Berlin-Brandenburg.
            </p>
            <p>
              Über die Jahre wuchs das Büro kontinuierlich. Mit der Aufnahme von Dipl.-Ing. Karsten Formazin 
              als Partner wurde das Leistungsspektrum um Architektur, Brandschutz und Generalplanung erweitert. 
              Die Umwandlung zur partnerschaftlichen Gesellschaft (mbB) markierte den Beginn der zweiten 
              Generation im Familienunternehmen.
            </p>
            <p>
              Heute arbeiten 10 Mitarbeiter im Büro – Architekten, Bauingenieure und technische Zeichner. 
              Gemeinsam haben wir über 300 Projekte realisiert: von Einfamilienhäusern über Wohnquartiere 
              bis hin zu öffentlichen Bauten wie Schulen und Rathäusern. Unsere Stärke liegt in der 
              Kombination von Architektur und Tragwerksplanung unter einem Dach – damit verkürzen wir 
              Planungszeiten und sichern hohe Qualität.
            </p>
          </div>
        </div>
      </section>

      {/* Team Formazin */}
      <section className="border-t border-[#1e293b]/10 bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h2 className="mb-12 text-center font-heading text-2xl font-bold text-[#2d4196] md:text-3xl">
            Team Formazin
          </h2>

          {/* Portrait-Kacheln */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {/* Karsten Formazin */}
            <motion.button
              onClick={() => setSelectedTeamMember(selectedTeamMember === "karsten" ? null : "karsten")}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative aspect-[3/4] overflow-hidden rounded-[2px] transition-all ${
                selectedTeamMember && selectedTeamMember !== "karsten" ? "opacity-40" : "opacity-100"
              } ${selectedTeamMember === "karsten" ? "ring-4 ring-[#2d4196] shadow-2xl" : "shadow-md hover:shadow-xl"}`}
            >
              <Image
                src="/images/Karsten-Formazin.jpg"
                alt="Dipl.-Ing. Karsten Formazin"
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-heading text-sm font-bold text-white md:text-base">
                  Dipl.-Ing. Karsten Formazin
                </p>
                <p className="mt-1 font-sans text-xs text-white/80">
                  Gesellschafter
                </p>
              </div>
            </motion.button>

            {/* Dieter Formazin */}
            <motion.button
              onClick={() => setSelectedTeamMember(selectedTeamMember === "dieter" ? null : "dieter")}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative aspect-[3/4] overflow-hidden rounded-[2px] transition-all ${
                selectedTeamMember && selectedTeamMember !== "dieter" ? "opacity-40" : "opacity-100"
              } ${selectedTeamMember === "dieter" ? "ring-4 ring-[#2d4196] shadow-2xl" : "shadow-md hover:shadow-xl"}`}
            >
              <Image
                src="/images/oda-formazin.jpg"
                alt="Dr.-Ing. Dieter Formazin"
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-heading text-sm font-bold text-white md:text-base">
                  Dr.-Ing. Dieter Formazin
                </p>
                <p className="mt-1 font-sans text-xs text-white/80">
                  Gründer & Gesellschafter
                </p>
              </div>
            </motion.button>

            {/* Frauke Formazin */}
            <motion.button
              onClick={() => setSelectedTeamMember(selectedTeamMember === "frauke" ? null : "frauke")}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative aspect-[3/4] overflow-hidden rounded-[2px] transition-all ${
                selectedTeamMember && selectedTeamMember !== "frauke" ? "opacity-40" : "opacity-100"
              } ${selectedTeamMember === "frauke" ? "ring-4 ring-[#2d4196] shadow-2xl" : "shadow-md hover:shadow-xl"}`}
            >
              <Image
                src="/images/Frauke-formazin.jpg"
                alt="Frauke Formazin"
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-heading text-sm font-bold text-white md:text-base">
                  Frauke Formazin
                </p>
                <p className="mt-1 font-sans text-xs text-white/80">
                  Bürohexe
                </p>
              </div>
            </motion.button>

            {/* Veit Formazin */}
            <motion.button
              onClick={() => setSelectedTeamMember(selectedTeamMember === "veit" ? null : "veit")}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative aspect-[3/4] overflow-hidden rounded-[2px] transition-all ${
                selectedTeamMember && selectedTeamMember !== "veit" ? "opacity-40" : "opacity-100"
              } ${selectedTeamMember === "veit" ? "ring-4 ring-[#2d4196] shadow-2xl" : "shadow-md hover:shadow-xl"}`}
            >
              <Image
                src="/images/Feith-formazin.jpg"
                alt="Veit Formazin"
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-heading text-sm font-bold text-white md:text-base">
                  Veit Formazin
                </p>
                <p className="mt-1 font-sans text-xs text-white/80">
                  Architekt
                </p>
              </div>
            </motion.button>
          </div>

          {/* Detail-Text */}
          <AnimatePresence mode="wait">
            {selectedTeamMember && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-8 rounded-[2px] bg-white p-8 shadow-lg md:p-10"
              >
              {selectedTeamMember === "karsten" && (
                <>
                  <h3 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
                    Dipl.-Ing. Karsten Formazin
                  </h3>
                  <p className="mt-2 font-sans text-base text-[#2d4196]">Gesellschafter</p>
                  <p className="mt-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                    Partner seit Erweiterung zur mbB. Schwerpunkt Architektur, Brandschutz und Generalplanung. 
                    Verantwortet die Koordination komplexer Bauprojekte und die Integration aller Fachplanungen. 
                    Als Fachplaner für Brandschutz stellt er sicher, dass alle Projekte den höchsten 
                    Sicherheitsstandards entsprechen.
                  </p>
                </>
              )}
              {selectedTeamMember === "dieter" && (
                <>
                  <h3 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
                    Dr.-Ing. Dieter Formazin
                  </h3>
                  <p className="mt-2 font-sans text-base text-[#2d4196]">Gründer & Gesellschafter</p>
                  <p className="mt-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                    Gründete 1990 das Büro in Ahrensfelde. Schwerpunkt Tragwerksplanung, Prüfingenieur für Baustatik. 
                    Leitet die statischen Berechnungen für komplexe Hochbauprojekte. Mit über 30 Jahren Erfahrung 
                    im konstruktiven Ingenieurbau hat er hunderte Projekte erfolgreich realisiert.
                  </p>
                </>
              )}
              {selectedTeamMember === "frauke" && (
                <>
                  <h3 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
                    Frauke Formazin
                  </h3>
                  <p className="mt-2 font-sans text-base text-[#2d4196]">Bürohexe</p>
                  <p className="mt-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                    Hält mit unsichtbarer Hand alle Fäden zusammen. Während Architekten und Ingenieure planen, 
                    sorgt Frauke dafür, dass Fristen eingehalten, Rechnungen bezahlt und Termine koordiniert werden. 
                    Sie findet Unterlagen, die längst verloren schienen, beschwichtigt verärgerte Bauherren und 
                    zaubert aus chaotischen Tagen geordnete Abläufe. Ohne sie würde das Büro im kreativen Chaos 
                    versinken – mit ihr läuft alles wie am Schnürchen.
                  </p>
                </>
              )}
              {selectedTeamMember === "veit" && (
                <>
                  <h3 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
                    Veit Formazin
                  </h3>
                  <p className="mt-2 font-sans text-base text-[#2d4196]">Architekt</p>
                  <p className="mt-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                    Unterstützt die Objektplanung und bringt neue digitale Planungsmethoden ins Büro. 
                    Spezialisiert auf BIM-Planung und 3D-Visualisierung. Treibt die Digitalisierung der 
                    Planungsprozesse voran und optimiert die Zusammenarbeit zwischen allen Projektbeteiligten.
                  </p>
                </>
              )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </>
  );
}
