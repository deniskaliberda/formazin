"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation({
  delayed = false,
  transparent = false,
}: {
  delayed?: boolean;
  transparent?: boolean;
}) {
  const [visible, setVisible] = useState(!delayed);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!delayed) return;
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [delayed]);

  useEffect(() => {
    if (!transparent) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  const isTransparent = transparent && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        visible
          ? isTransparent
            ? "translate-y-0 bg-transparent"
            : "translate-y-0 bg-white shadow-sm"
          : "-translate-y-full"
      }`}
      aria-label="Hauptnavigation"
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-2 md:px-12 md:py-2.5 lg:px-16 xl:px-20">
        <Link
          href="/"
          className="block"
          aria-label="Dr.-Ing. Formazin & Partner - Startseite"
        >
          <Image
            src="/images/FuP-Logo2025-quer-RGB.png"
            alt="Dr.-Ing. Formazin & Partner mbB – Architekten & Beratende Ingenieure"
            width={320}
            height={64}
            className={`h-14 w-auto md:h-16 lg:h-20 transition-all duration-300 ${
              isTransparent ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/projekte"
              className={`font-sans text-base transition-colors ${
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-[#1e293b]/80 hover:text-[#1e293b]"
              }`}
            >
              Projekte
            </Link>
          </li>
          <li>
            <Link
              href="/ueber-uns"
              className={`font-sans text-base transition-colors ${
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-[#1e293b]/80 hover:text-[#1e293b]"
              }`}
            >
              Über uns
            </Link>
          </li>
          <li>
            <Link
              href="/#kontakt"
              className="rounded-[2px] bg-[#2d4196] px-5 py-2 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a]"
            >
              Kontakt
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={`rounded p-2 transition-colors md:hidden ${
            isTransparent
              ? "text-white/70 hover:bg-white/10 hover:text-white"
              : "text-[#1e293b]/70 hover:bg-[#f3f4f6] hover:text-[#1e293b]"
          }`}
          aria-label="Menü öffnen"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
