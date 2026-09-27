/* Code&Go — Supabase project connection.
   The anon key is meant to be public in client-side code; access to data is
   enforced by the row-level security policies in supabase/schema.sql. */

const SUPABASE_URL = "https://kbujfxxdgevsagnpuqqu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtidWpmeHhkZ2V2c2FnbnB1cXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0OTc1MDYsImV4cCI6MjEwNjA3MzUwNn0.IWuXVk_qikQjNLG45WOODnJTC5Yl7SwShobjEZVYqmg";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
