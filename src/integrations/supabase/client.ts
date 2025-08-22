import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://kkidpownxuyylbkdwlxf.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraWRwb3dueHV5eWxia2R3bHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MjAyMjcsImV4cCI6MjA2OTk5NjIyN30.c8RUEoxpDvyW-W9cJrciHaqfK4DgMVSWJuPUaT1iuFA';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
