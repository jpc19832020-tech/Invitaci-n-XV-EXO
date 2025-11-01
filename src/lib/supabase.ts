import { createClient } from '@supabase/supabase-js'

// Función para crear el cliente de Supabase solo cuando sea necesario
export function createSupabaseClient() {
  // Para el servidor, usar variables sin NEXT_PUBLIC_
  // Para el cliente, usar variables con NEXT_PUBLIC_
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Verificar que las variables existan antes de crear el cliente
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Variables de entorno de Supabase no encontradas')
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Variable para almacenar el cliente de Supabase una vez creado
let supabaseClient: any = null

// Exportar una función que obtiene el cliente de forma segura
export function getSupabaseClient() {
  // Si ya tenemos un cliente, devolverlo
  if (supabaseClient) {
    return supabaseClient
  }
  
  // Solo crear el cliente si estamos en el navegador o si las variables están disponibles
  if (typeof window !== 'undefined' || process.env.NEXT_PUBLIC_SUPABASE_URL) {
    supabaseClient = createSupabaseClient()
    return supabaseClient
  }
  
  return null
}

// Mantener compatibilidad con código existente
export const supabase = getSupabaseClient()