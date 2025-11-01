import { createClient } from '@supabase/supabase-js'

// Para el servidor, usar variables sin NEXT_PUBLIC_
// Para el cliente, usar variables con NEXT_PUBLIC_
const supabaseUrl = https://sqoxgyluyakgacfvptux.supabase.co
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)