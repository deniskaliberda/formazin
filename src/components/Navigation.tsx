"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navigation({
  delayed = false,
  transparent = false,
}: {
  delayed?: boolean;
  transparent?: boolean;
}) {
  const [visible, setVisible] = useState(!delayed);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
            ? "translate-y-0 bg-white/80 backdrop-blur-md"
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
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/images/FuP-Logo2025-quer-RGB.png"
            alt="Dr.-Ing. Formazin & Partner mbB – Architekten & Beratende Ingenieure"
            width={320}
            height={64}
            className="h-14 w-auto md:h-16 lg:h-20 transition-all duration-300"
            priority
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/projekte"
              className="font-sans text-base text-[#1e293b]/80 transition-colors hover:text-[#1e293b]"
            >
              Projekte
            </Link>
          </li>
          <li>
            <Link
              href="/ueber-uns"
              className="font-sans text-base text-[#1e293b]/80 transition-colors hover:text-[#1e293b]"
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
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="border-t border-[#1e293b]/10 bg-white px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/projekte"
                className="block font-sans text-lg text-[#1e293b]/80 transition-colors hover:text-[#1e293b]"
                onClick={() => setMenuOpen(false)}
              >
                Projekte
              </Link>
            </li>
            <li>
              <Link
                href="/ueber-uns"
                className="block font-sans text-lg text-[#1e293b]/80 transition-colors hover:text-[#1e293b]"
                onClick={() => setMenuOpen(false)}
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                href="/#kontakt"
                className="mt-2 block rounded-[2px] bg-[#2d4196] px-5 py-3 text-center font-sans text-lg font-semibold text-white transition-colors hover:bg-[#243a7a]"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
