"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/energie/types";

/**
 * Sichtbares FAQ-Accordion UND FAQPage-JSON-LD aus EINER Datenquelle.
 * Dadurch ist garantiert: Sichttext == Schema-Text (AEO/Rich-Result-Konformität).
 * Der lucide-Chevron rotiert, die Antwort blendet per Framer-Motion ein.
 */
export function FaqAccordion({
  faq,
  heading = "Häufige Fragen",
}: {
  faq: FaqItem[];
  heading?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      {/* FAQPage-Schema — aus denselben Daten wie das sichtbare Accordion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
        {heading}
      </h2>

      <div className="mt-10 divide-y divide-[#1e293b]/10 border-y border-[#1e293b]/10">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading text-lg font-semibold text-[#1e293b] md:text-xl">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={2}
                    className={`flex-none text-[#2d4196] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-5 font-sans text-base leading-relaxed text-[#1e293b]/75 md:text-lg">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
