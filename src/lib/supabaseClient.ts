import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy singleton. Returns null when env is not configured, so the app still
// builds/runs without Supabase (Funnel faellt dann auf reine Resend-Mail zurueck).
let cached: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (!cached) {
    cached = createClient(url, key, { auth: { persistSession: false } });
  }
  return cached;
}
