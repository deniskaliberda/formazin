import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav
      className="relative z-20 flex items-center justify-between bg-white px-6 py-3 md:px-10 md:py-4"
      aria-label="Hauptnavigation"
    >
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
          className="h-14 w-auto md:h-16 lg:h-20"
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
      </ul>
      <button
        type="button"
        className="rounded p-2 text-[#1e293b]/70 transition-colors hover:bg-[#f3f4f6] hover:text-[#1e293b] md:hidden"
        aria-label="Menü öffnen"
      >
        <Menu size={24} strokeWidth={1.5} />
      </button>
    </nav>
  );
}
