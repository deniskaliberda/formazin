"use client";

import Link from "next/link";
import { WISSEN_ENABLED } from "@/lib/kernPreview";
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
  const isEnergyPage = pathname === "/leistungen/energieberatung" || pathname.startsWith("/leistungen/energieberatung/") || pathname.startsWith("/anfrage/");
  const currentSection = isEnergyPage ? "/leistungen/energieberatung"
    : ["/leistungen", "/projekte", "/ueber-uns", "/wissen"].find(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
  const navLinkProps = (href: string, mobile = false) => ({
    "aria-current": currentSection === href ? "page" as const : undefined,
    className: `${mobile ? "block text-lg" : "text-base"} font-sans transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d4196] ${
      currentSection === href
        ? "text-[#2d4196] underline decoration-2 underline-offset-8"
        : "text-[#1e293b]/80 hover:text-[#2d4196]"
    }`,
  });

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
            className="h-14 w-auto -ml-3 md:h-16 md:-ml-4 lg:h-20 lg:-ml-5 transition-all duration-300"
            priority
          />
        </Link>
        <ul className="hidden items-center gap-5 lg:flex">
          <li>
            <Link
              href="/leistungen"
              {...navLinkProps("/leistungen")}
            >
              Leistungen
            </Link>
          </li>
          <li>
            <Link
              href="/leistungen/energieberatung"
              {...navLinkProps("/leistungen/energieberatung")}
            >
              Energieberatung
            </Link>
          </li>
          <li>
            <Link
              href="/projekte"
              {...navLinkProps("/projekte")}
            >
              Projekte
            </Link>
          </li>
          {WISSEN_ENABLED && (<li>
            <Link
              href="/wissen"
              {...navLinkProps("/wissen")}
            >
              Wissen
            </Link>
          </li>)}
          <li>
            <Link
              href="/ueber-uns"
              {...navLinkProps("/ueber-uns")}
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
          className="rounded p-2 text-[#1e293b]/70 transition-colors hover:bg-[#f3f4f6] hover:text-[#1e293b] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
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
        <div id="mobile-navigation" className="border-t border-[#1e293b]/10 bg-white px-6 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/leistungen"
                {...navLinkProps("/leistungen", true)}
                onClick={() => setMenuOpen(false)}
              >
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                href="/leistungen/energieberatung"
                {...navLinkProps("/leistungen/energieberatung", true)}
                onClick={() => setMenuOpen(false)}
              >
                Energieberatung
              </Link>
            </li>
            <li>
              <Link
                href="/projekte"
                {...navLinkProps("/projekte", true)}
                onClick={() => setMenuOpen(false)}
              >
                Projekte
              </Link>
            </li>
            {WISSEN_ENABLED && (<li>
              <Link
                href="/wissen"
                {...navLinkProps("/wissen", true)}
                onClick={() => setMenuOpen(false)}
              >
                Wissen
              </Link>
            </li>)}
            <li>
              <Link
                href="/ueber-uns"
                {...navLinkProps("/ueber-uns", true)}
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
