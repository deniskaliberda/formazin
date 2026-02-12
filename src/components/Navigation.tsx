import Link from "next/link";
import { Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav
      className="relative z-20 flex items-center justify-between bg-white px-6 py-4 md:px-10 md:py-5"
      aria-label="Hauptnavigation"
    >
      <Link
        href="/"
        className="font-heading text-base font-semibold text-[#1e293b] md:text-lg lg:text-xl"
        aria-label="Dr.-Ing. Formazin & Partner - Startseite"
      >
        Dr.-Ing. Formazin & Partner mbB
      </Link>
      <ul className="hidden items-center gap-8 md:flex">
        <li>
          <Link
            href="/leistungen"
            className="font-sans text-base text-[#1e293b]/80 hover:text-[#1e293b]"
          >
            Leistungen
          </Link>
        </li>
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
            href="/kontakt"
            className="font-sans text-base text-[#1e293b]/80 hover:text-[#1e293b]"
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
    </nav>
  );
}
