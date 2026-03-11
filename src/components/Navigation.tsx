"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation({ delayed = false }: { delayed?: boolean }) {
  const [visible, setVisible] = useState(!delayed);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    if (!delayed) return;
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [delayed]);

  useEffect(() => {
    if (!delayed) return;
    const onScroll = () => {
      setScrolledPast(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [delayed]);

  const showSolidBg = !delayed || scrolledPast;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        visible
          ? `translate-y-0 ${showSolidBg ? "bg-white shadow-sm" : ""}`
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
            width={280}
            height={56}
            className={`h-12 w-auto md:h-14 lg:h-16 transition-all duration-300 ${
              showSolidBg ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/projekte"
              className={`font-sans text-base transition-colors ${
                showSolidBg
                  ? "text-[#1e293b]/80 hover:text-[#1e293b]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Projekte
            </Link>
          </li>
          <li>
            <Link
              href="/ueber-uns"
              className={`font-sans text-base transition-colors ${
                showSolidBg
                  ? "text-[#1e293b]/80 hover:text-[#1e293b]"
                  : "text-white/80 hover:text-white"
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
            showSolidBg
              ? "text-[#1e293b]/70 hover:bg-[#f3f4f6] hover:text-[#1e293b]"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
          aria-label="Menü öffnen"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
