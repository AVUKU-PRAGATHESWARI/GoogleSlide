
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rmactbinyxwyybcslkkr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtYWN0YmlueXh3eXliY3Nsa2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMTAyMTUsImV4cCI6MjAxNDY4NjIxNX0.txRsJWrvH_PP-tStuhZXIvxc8wTW4Z38rhqnSHQw478'
const supabase = createClient(supabaseUrl, supabaseKey)

export supabase;