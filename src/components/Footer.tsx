"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1e293b]/10 bg-[#f3f4f6]" role="contentinfo">
      <div className="mx-auto max-w-screen-2xl px-6 py-6 md:px-12 md:py-8 lg:px-16 xl:px-20">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 font-sans text-sm text-[#1e293b]/70">
          {/* Firmendaten */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="font-medium text-[#1e293b]">
              Dr.-Ing. Formazin & Partner mbB
            </span>
            <span>Eichenallee 4</span>
            <span>16356 Ahrensfelde</span>
          </div>

          {/* Kontaktdaten */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="tel:+4930936660"
              className="transition-colors hover:text-[#2d4196]"
            >
              T 030 – 93 66 60
            </a>
            <a
              href="mailto:info@formazin.de"
              className="transition-colors hover:text-[#2d4196]"
            >
              info@formazin.de
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/impressum"
              className="transition-colors hover:text-[#2d4196]"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-[#2d4196]"
            >
              Datenschutz
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d4196] text-white transition-all hover:bg-[#243a7a] hover:scale-105"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-4 border-t border-[#1e293b]/10 pt-4 text-center">
          <p className="font-sans text-xs text-[#1e293b]/60">
            © {currentYear} Dr.-Ing. Formazin & Partner mbB. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
