"use client";

import { motion } from "framer-motion";

/**
 * Scroll-Reveal im Haus-Idiom (wie LeistungenSection der Startseite):
 * dezenter Fade + y-Shift (20px), einmalig beim ersten Sichtbarwerden
 * (viewport once), Dauer 0.6s. Server Components (z. B. das
 * ServicePageTemplate) wrappen ihre Sektions-Inhalte damit; über `delay`
 * werden nebeneinanderliegende Blöcke gestaffelt (0 / 0.2 wie im Haus).
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
