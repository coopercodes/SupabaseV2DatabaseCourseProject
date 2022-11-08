import { createClient } from '@supabase/supabase-js';

// To be more secure: .env file. 
const supabaseURL = "https://qqzauxfodocsbzyxxzdh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxemF1eGZvZG9jc2J6eXh4emRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc3ODQyMTcsImV4cCI6MTk4MzM2MDIxN30.jUvmgx0QzWmMZlf6QeFJ4V4lKWXXtIVrXxCgRBJMbnI";

export const supabase = createClient(supabaseURL, supabaseAnonKey);