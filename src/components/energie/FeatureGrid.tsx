"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  FileCheck,
  FileText,
  Gauge,
  HandCoins,
  type LucideIcon,
} from "lucide-react";
import type { FeatureGridData } from "@/data/energie/types";

/**
 * Icon-Mapping: der Content-Layer referenziert lucide-Icons per String-Key,
 * bleibt damit serialisierbar (keine React-Imports in den Daten).
 */
const ICONS: Record<string, LucideIcon> = {
  FileText,
  ClipboardCheck,
  Gauge,
  FileCheck,
  HandCoins,
};

/**
 * Die Kern-Leistungen als visuelle Kacheln (Grid) statt als nackte Tabelle:
 * je Kachel ein lucide-Line-Icon, Name, Ein-Zeiler, Preis (verbatim) und Link.
 * Findet sich zum Icon-Key kein lucide-Icon, ist das blaue „+" des Hauses das
 * Fallback-Idiom. Hover-Akzent wie das Haus (Border + Titel → #2d4196).
 * Scharfe Ecken, kein Gradient, dezente Fades (0.6s, once).
 */
export function FeatureGrid({ data }: { data: FeatureGridData }) {
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

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item, i) => {
          const Icon = ICONS[item.icon];

          const inner = (
            <>
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[2px] bg-[#2d4196]/[0.08] text-[#2d4196]">
                {Icon ? (
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                ) : (
                  <span
                    className="font-heading text-2xl font-bold leading-none"
                    aria-hidden="true"
                  >
                    +
                  </span>
                )}
              </span>
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-heading text-lg font-bold leading-tight text-[#1e293b] transition-colors group-hover:text-[#2d4196]">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#1e293b]/70">
                  {item.text}
                </p>
                {item.price && (
                  <p className="mt-4 font-sans text-sm font-semibold text-[#2d4196]">
                    {item.price}
                  </p>
                )}
                {item.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#1e293b]/50 transition-colors group-hover:text-[#2d4196]">
                    Mehr erfahren
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                )}
              </div>
            </>
          );

          return item.href ? (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-[2px] border border-[#1e293b]/12 bg-white p-6 transition-colors hover:border-[#2d4196]"
              >
                {inner}
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex h-full flex-col rounded-[2px] border border-[#1e293b]/12 bg-white p-6"
            >
              {inner}
            </motion.div>
          );
        })}
      </div>

      {data.note && (
        <p className="mt-6 font-sans text-xs text-[#1e293b]/55">{data.note}</p>
      )}
    </div>
  );
}
