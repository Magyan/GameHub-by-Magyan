// supabase_config.js

// Clés fournies
const SUPABASE_URL = 'https://ujecsmmubvzpoyvkumju.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZWNzbW11YnZ6cG95dmt1bWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNzUyMTMsImV4cCI6MjA4MDk1MTIxM30.YNUPVfFRAtGu85XIsBGFqm-kLEN_VC3rWbU62RYLNsA';

// Initialisation de Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase Client Initialisé.");
