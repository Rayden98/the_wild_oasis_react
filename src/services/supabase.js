import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ayxgusrkqknpjlvanuzb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5eGd1c3JrcWtucGpsdmFudXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNTUwMjQsImV4cCI6MjAyNTkzMTAyNH0.zrQPaAyvZiNl0dE4oq8sn-Ord67iHffohAIlQUD73Vk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
