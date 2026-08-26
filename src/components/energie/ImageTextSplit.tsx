"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ImageTextSplitData } from "@/data/energie/types";
import { renderInline } from "./richText";

/**
 * Bild-Text-Split im Idiom der BueroSection der Startseite: großzügige
 * Body-Typo (text-lg → text-xl), Bullets mit dem blauen „+"-Marker des Hauses
 * und optional asymmetrisches Bild (aspect-[4/3] lg:aspect-[3/4]
 * lg:min-h-[560px] bei imageAspect "portrait"). Die Bildseite ist per
 * `imageSide` wählbar; auf Mobil wird gestapelt. Reveals wie die Startseite
 * (0.6s, Staffelung 0 / 0.2, once).
 */
export function ImageTextSplit({ data }: { data: ImageTextSplitData }) {
  const imageRight = data.imageSide !== "left";
  const portrait = data.imageAspect === "portrait";

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[2px]"
    >
      <div
        className={
          portrait
            ? "aspect-[4/3] lg:aspect-[3/4] lg:min-h-[560px]"
            : "aspect-[3/2] w-full"
        }
      >
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );

  const textCol = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {data.eyebrow && (
        <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#2d4196]">
          {data.eyebrow}
        </p>
      )}
      {data.heading && (
        <h2 className="mt-2 font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
          {data.heading}
        </h2>
      )}
      {data.body.map((paragraph, i) => (
        <p
          key={i}
          className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl"
        >
          {renderInline(paragraph)}
        </p>
      ))}
      {data.bullets && data.bullets.length > 0 && (
        <ul className="mt-8 space-y-4" role="list">
          {data.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-4">
              <span
                className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl"
                aria-hidden="true"
              >
                +
              </span>
              <span className="font-sans text-lg text-[#1e293b]/80 md:text-xl">
                {renderInline(bullet)}
              </span>
            </li>
          ))}
        </ul>
      )}
      {data.cta && (
        <Link
          href={data.cta.href}
          className="mt-6 inline-flex items-center gap-2 font-sans text-base font-semibold text-[#2d4196] transition-colors hover:text-[#243a7a] md:text-lg"
        >
          {data.cta.label}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      )}
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {imageRight ? (
        <>
          {textCol}
          {imageCol}
        </>
      ) : (
        <>
          {imageCol}
          {textCol}
        </>
      )}
    </div>
  );
}
