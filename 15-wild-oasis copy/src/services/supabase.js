
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ahzqyzxjxbhfhblcgumj.supabase.co'
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoenF5enhqeGJoZmhibGNndW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MzE1OTUsImV4cCI6MjAyNTIwNzU5NX0.MQE-KO8FrvYdk0V2B7BzzZ_PON-9Xz1VRlEa3TRzPuE";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;