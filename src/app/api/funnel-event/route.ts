import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

// Leichte Funnel-Telemetrie (Start / Schritt / Abbruch). Darf die UX NIE
// blockieren: Fehler werden geschluckt.
export async function POST(request: Request) {
  try {
    const { session_id, step, intent, payload, page_path } = await request.json();
    if (!session_id || !step) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const supabase = getSupabase();
    if (supabase) {
      await supabase.from("funnel_events").insert({
        session_id,
        step,
        intent: intent ?? null,
        payload: payload ?? null,
        page_path: page_path ?? null,
      });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
