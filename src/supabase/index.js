
import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://pahoeagfubtserrcwksg.supabase.co'
const supabaseAPIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaG9lYWdmdWJ0c2VycmN3a3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjk4OTksImV4cCI6MTk5NjgwNTg5OX0.dVgaCW4_c-bJkJ1E0ZxCFcHSXNFIyw9mOEJfjM85DtY'
export default createClient(supabaseURL, supabaseAPIKey)
