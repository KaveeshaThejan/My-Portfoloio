import { createClient } from "@supabase/supabase-js";

// ============================================================
//  Add these to your .env file in the root of your project:
//    VITE_SUPABASE_URL=https://your-project-id.supabase.co
//    VITE_SUPABASE_ANON_KEY=your-anon-key-here
//
//  Find them in: Supabase Dashboard → Project Settings → API
// ============================================================

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing Supabase environment variables.\n" +
    "Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file."
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false, // No auth needed for public portfolio read
  },
});

export default supabase;
