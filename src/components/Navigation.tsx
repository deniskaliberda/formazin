"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        visible
          ? "translate-y-0 bg-white/80 backdrop-blur-md shadow-sm"
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
            className="h-12 w-auto md:h-14 lg:h-16"
            priority
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/projekte"
              className="font-sans text-base text-[#1e293b]/80 hover:text-[#1e293b]"
            >
              Projekte
            </Link>
          </li>
          <li>
            <Link
              href="/ueber-uns"
              className="font-sans text-base text-[#1e293b]/80 hover:text-[#1e293b]"
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
          className="rounded p-2 text-[#1e293b]/70 transition-colors hover:bg-[#f3f4f6] hover:text-[#1e293b] md:hidden"
          aria-label="Menü öffnen"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
