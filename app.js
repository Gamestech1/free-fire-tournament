import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'sb_publishable_hZJVRoZrDjACam9XllkTTg_93DIHSs4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase connected successfully!");
