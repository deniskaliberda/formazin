"use client";

import { motion } from "framer-motion";
import type { ProcessStepsData } from "@/data/energie/types";
import { renderInline } from "./richText";

/**
 * Ablauf als visueller, nummerierter Stepper statt Fließtext. Auf Desktop
 * horizontal (Verbindungslinie zwischen den Schritten), gestapelt auf Mobil.
 * Dezente Fades (once), scharfe Ecken, kein Gradient.
 */
export function ProcessSteps({ data }: { data: ProcessStepsData }) {
  return (
    <div>
      {data.heading && (
        <h2 className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
          {data.heading}
        </h2>
      )}
      {data.intro && (
        <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
          {data.intro}
        </p>
      )}

      <ol
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5"
        role="list"
      >
        {data.steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[2px] bg-[#2d4196] font-heading text-base font-bold text-white">
                {i + 1}
              </span>
              {i < data.steps.length - 1 && (
                <span
                  className="hidden h-px flex-1 bg-[#1e293b]/15 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
            <h3 className="mt-4 font-heading text-base font-bold leading-tight text-[#1e293b]">
              {step.title}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-[#1e293b]/70">
              {renderInline(step.text)}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
