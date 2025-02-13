const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const publicSupabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const publicSupabaseClient = createClient(publicSupabaseUrl, publicSupabaseKey)

export default publicSupabaseClient