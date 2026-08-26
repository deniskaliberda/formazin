import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// TEMPORAERER Debug-Endpoint (nur Branch-Preview): zeigt, WELCHE Env-Keys die
// Function sieht — niemals Werte. VOR dem Merge auf main wieder entfernen.
export async function GET() {
  const keys = Object.keys(process.env)
    .filter((k) => k.includes("SUPABASE") || k.includes("RESEND"))
    .sort();
  return NextResponse.json({
    keys,
    urlSet: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    anonSet: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    vercelEnv: process.env.VERCEL_ENV ?? null,
  });
}
