"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ZIELE: Record<string, string> = {
  architektur: "architektur",
  brandschutz: "brandschutz",
  tragwerk: "tragwerksplanung",
  tragwerksplanung: "tragwerksplanung",
  generalplanung: "generalplanung",
  waermeschutz: "energieberatung",
  energieberatung: "energieberatung",
};

/** Bestehende Startseiten-Links behalten ihren passenden Leistungseinstieg. */
export function LeistungHashEinstieg() {
  const router = useRouter();

  useEffect(() => {
    const selectFromHash = () => {
      const ziel = ZIELE[window.location.hash.slice(1)];
      if (ziel) router.replace(`/leistungen/${ziel}`, { scroll: false });
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, [router]);

  return null;
}
