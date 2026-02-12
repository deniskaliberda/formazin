"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TeamMember = {
  id: string;
  name: string;
  rolle: string;
  portrait: string;
  cutout?: string; // Freigestelltes PNG der Person
  // Position des Hotspots auf dem Teamfoto (in %)
  hotspot: { top: number; left: number };
  // Größe des Spotlight-Bereichs (in %)
  spotlight: { width: number; height: number };
  vita: {
    qualifikationen: string[];
    schwerpunkte: string[];
    bio: string;
  };
};

// Reihenfolge: von links nach rechts auf dem Teamfoto
const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "veit",
    name: "Veit Formazin",
    rolle: "Bauingenieur",
    portrait: "/images/Feith-formazin.jpg",
    cutout: "/images/feith-links.png",
    hotspot: { top: 40, left: 25 },
    spotlight: { width: 18, height: 55 },
    vita: {
      qualifikationen: [
        "Bauingenieurwesen, HTWK Leipzig",
      ],
      schwerpunkte: [
        "Tragwerksplanung",
        "Digitalisierung und Prozessoptimierung",
        "BIM-Planung und 3D-Visualisierung",
      ],
      bio: "Veit Formazin ist seit drei Jahren im Büro und verstärkt als Bauingenieur die Tragwerksplanung. Mit seinem Studium an der HTWK Leipzig bringt er frisches Wissen und neue digitale Planungsmethoden ins Team.",
    },
  },
  {
    id: "karsten",
    name: "Dipl.-Ing. Karsten Formazin",
    rolle: "Gesellschafter",
    portrait: "/images/Karsten-Formazin.jpg",
    // cutout: "/images/cutout-karsten.png",
    hotspot: { top: 40, left: 45 },
    spotlight: { width: 18, height: 55 },
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
    id: "dieter",
    name: "Dr.-Ing. Dieter Formazin",
    rolle: "Gründer & Gesellschafter",
    portrait: "/images/oda-formazin.jpg",
    // cutout: "/images/cutout-dieter.png",
    hotspot: { top: 40, left: 65 },
    spotlight: { width: 18, height: 55 },
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
    id: "frauke",
    name: "Frauke Formazin",
    rolle: "Bürohexe",
    portrait: "/images/Frauke-formazin.jpg",
    // cutout: "/images/cutout-frauke.png",
    hotspot: { top: 40, left: 80 },
    spotlight: { width: 18, height: 55 },
    vita: {
      qualifikationen: ["Büroverwaltung"],
      schwerpunkte: [
        "Büroorganisation",
        "Finanzverwaltung",
        "Personalwesen",
      ],
      bio: "Frauke Formazin hält mit unsichtbarer Hand alle Fäden zusammen. Während Architekten und Ingenieure planen, sorgt sie dafür, dass Fristen eingehalten, Rechnungen bezahlt und Termine koordiniert werden.",
    },
  },
];

export function TeamHeroSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = TEAM_MEMBERS.find((m) => m.id === selectedId) ?? null;

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedId(null);
  }, []);

  // Determine text position: if person is on the right half, show text on the left
  const textOnLeft = selected ? selected.hotspot.left > 50 : false;

  return (
    <section className="relative bg-black">
      {/* Hint */}
      <AnimatePresence>
        {!selectedId && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute left-1/2 top-6 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-5 py-2 font-sans text-xs font-medium text-[#1e293b] shadow-lg backdrop-blur-sm md:text-sm"
          >
            Klicken Sie auf eine Person, um mehr zu erfahren
          </motion.p>
        )}
      </AnimatePresence>

      {/* Main Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[2/1] lg:min-h-[560px]">
        {/* Layer 1: Team Photo */}
        <Image
          src="/images/teamfoto-über-uns.jpg"
          alt="Team Dr.-Ing. Formazin & Partner"
          fill
          priority
          className={`object-cover object-top transition-all duration-700 ease-out ${
            selectedId
              ? "blur-[2px] brightness-[0.12]"
              : "blur-0 brightness-100"
          }`}
          sizes="100vw"
        />

        {/* Layer 2: Person Reveal — Cutout-PNG oder Radial-Gradient-Fallback */}
        <AnimatePresence>
          {selected && selected.cutout ? (
            /* Cutout-PNG: Zeigt die freigestellte Person über dem abgedunkelten Hintergrund */
            <motion.div
              key={selected.id + "-cutout"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute inset-0 z-10"
            >
              <Image
                src={selected.cutout}
                alt={selected.name}
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </motion.div>
          ) : selected ? (
            /* Fallback: Radial-Gradient-Spotlight wenn kein Cutout vorhanden */
            <>
              <motion.div
                key={selected.id + "-spotlight"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-10"
                style={{
                  background: `radial-gradient(ellipse ${selected.spotlight.width}% ${selected.spotlight.height}% at ${selected.hotspot.left}% ${selected.hotspot.top}%, transparent 0%, transparent 70%, rgba(0,0,0,0.85) 100%)`,
                }}
              />
              <motion.div
                key={selected.id + "-reveal"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute inset-0 z-10"
                style={{
                  maskImage: `radial-gradient(ellipse ${selected.spotlight.width * 0.8}% ${selected.spotlight.height * 0.8}% at ${selected.hotspot.left}% ${selected.hotspot.top}%, black 0%, black 60%, transparent 100%)`,
                  WebkitMaskImage: `radial-gradient(ellipse ${selected.spotlight.width * 0.8}% ${selected.spotlight.height * 0.8}% at ${selected.hotspot.left}% ${selected.hotspot.top}%, black 0%, black 60%, transparent 100%)`,
                }}
              >
                <Image
                  src="/images/teamfoto-über-uns.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  aria-hidden="true"
                />
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>

        {/* Layer 3: Clickable Hotspots */}
        {TEAM_MEMBERS.map((member) => (
          <button
            key={member.id}
            onClick={() => handleSelect(member.id)}
            className={`group absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
              selectedId && selectedId !== member.id
                ? "pointer-events-none opacity-0"
                : "opacity-100"
            }`}
            style={{
              top: `${member.hotspot.top}%`,
              left: `${member.hotspot.left}%`,
            }}
            aria-label={`${selectedId === member.id ? "Schließen" : "Mehr über"} ${member.name}`}
          >
            {selectedId === member.id ? (
              /* Active: Close button */
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-[#2d4196] shadow-2xl md:h-14 md:w-14"
              >
                <span className="font-sans text-2xl font-light text-white">
                  ×
                </span>
              </motion.div>
            ) : (
              /* Default: Hover ring + name tooltip */
              <div className="relative">
                <div className="h-16 w-16 md:h-20 md:w-20" />
                {/* Pulsing ring */}
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/40 transition-all duration-300 group-hover:h-14 group-hover:w-14 group-hover:border-white/80 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] md:h-12 md:w-12 md:group-hover:h-16 md:group-hover:w-16" />
                {/* Name tooltip */}
                <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-[2px] bg-white/95 px-3 py-1.5 text-center opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:mt-2">
                  <span className="font-sans text-xs font-medium text-[#1e293b]">
                    {member.name}
                  </span>
                </div>
              </div>
            )}
          </button>
        ))}

        {/* Layer 4: Vita Text Overlay */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id + "-vita"}
              initial={{ opacity: 0, x: textOnLeft ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: textOnLeft ? -40 : 40 }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className={`absolute top-0 z-20 flex h-full w-full flex-col justify-center px-6 md:w-[45%] md:px-0 ${
                textOnLeft
                  ? "left-0 md:pl-12 lg:pl-16 xl:pl-20"
                  : "right-0 md:pr-12 lg:pr-16 xl:pr-20"
              }`}
            >
              {/* Card with glassmorphism */}
              <div className="rounded-[2px] border border-white/10 bg-black/60 p-6 shadow-2xl backdrop-blur-md md:p-8 lg:p-10">
                {/* Portrait + Header */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/20 md:h-20 md:w-20">
                    <Image
                      src={selected.portrait}
                      alt={selected.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white md:text-xl lg:text-2xl">
                      {selected.name}
                    </h3>
                    <p className="mt-1 font-sans text-sm text-[#2d4196] brightness-150 md:text-base">
                      {selected.rolle}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-white/10 md:my-5" />

                {/* Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="font-sans text-sm leading-relaxed text-white/80 md:text-base"
                >
                  {selected.vita.bio}
                </motion.p>

                {/* Qualifikationen */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="mt-5"
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-white/50">
                    Qualifikationen
                  </p>
                  <ul className="mt-2 space-y-1">
                    {selected.vita.qualifikationen.map((qual, i) => (
                      <motion.li
                        key={qual}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                        className="font-sans text-xs text-white/70 md:text-sm"
                      >
                        <span className="mr-2 text-[#6b8aed]">+</span>
                        {qual}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Schwerpunkte */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="mt-4"
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-white/50">
                    Schwerpunkte
                  </p>
                  <ul className="mt-2 space-y-1">
                    {selected.vita.schwerpunkte.map((sp, i) => (
                      <motion.li
                        key={sp}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay:
                            0.6 +
                            selected.vita.qualifikationen.length * 0.06 +
                            i * 0.06,
                          duration: 0.3,
                        }}
                        className="font-sans text-xs text-white/70 md:text-sm"
                      >
                        <span className="mr-2 text-[#6b8aed]">+</span>
                        {sp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click-away area to close */}
        {selectedId && (
          <button
            onClick={handleClose}
            className="absolute inset-0 z-[15] cursor-default"
            aria-label="Schließen"
          />
        )}
      </div>
    </section>
  );
}
