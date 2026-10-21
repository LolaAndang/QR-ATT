import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://khlenbnwwyfecnqaqsjh.supabase.co";
const supabaseAnonKey = "sb_publishable_nePJx8WEzYLEiAhlZvFjMA_5DqGVdcg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
