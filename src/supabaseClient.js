import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mmdfoamzwrlzlukgubaf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tZGZvYW16d3Jsemx1a2d1YmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NTc4NzgsImV4cCI6MjA4NTEzMzg3OH0.ODcYPIG5oEXchnlLIFHPudX-9ja8_uixdQynZFZB7RQ'

export const supabase = createClient(supabaseUrl, supabaseKey)