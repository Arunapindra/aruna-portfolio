import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function insertContactMessage(data: ContactMessage) {
  if (!supabase) {
    console.warn("Supabase not configured — storing message locally");
    return { error: null, data: null };
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert([{ ...data, created_at: new Date().toISOString() }]);

  return { error };
}
