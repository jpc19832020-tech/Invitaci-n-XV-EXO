// Cliente para Supabase que funciona en el cliente
import { supabase } from '@/lib/supabase';

export interface RSVP {
  id: string;
  name: string;
  guests: number;
  message?: string;
  confirmed: boolean;
  created_at: string;
}

export async function saveRSVP(rsvpData: { name: string; guests: string; message: string }) {
  try {
    // Guardar en localStorage como respaldo
    const existingRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]');
    const newRSVP: RSVP = {
      ...rsvpData,
      id: Date.now().toString(),
      guests: parseInt(rsvpData.guests) || 1,
      confirmed: true,
      created_at: new Date().toISOString()
    };
    
    const updatedRSVPs = [...existingRSVPs, newRSVP];
    localStorage.setItem('rsvps', JSON.stringify(updatedRSVPs));
    
    // Intentar guardar en Supabase si está disponible
    try {
      const { data, error } = await supabase
        .from('rsvp')
        .insert([
          {
            name: rsvpData.name,
            guests: parseInt(rsvpData.guests) || 1,
            message: rsvpData.message,
            confirmed: true
          }
        ])
        .select();

      if (!error) {
        return { success: true, message: "¡Guardado en la nube y localmente!" };
      }
    } catch (supabaseError) {
      console.log('Supabase no disponible, guardando localmente');
      return { success: true, message: "¡Guardado localmente!" };
    }
  } catch (error) {
    console.error('Error al guardar RSVP:', error);
    return { success: false, message: "Error al guardar" };
  }
}

export async function getRSVPs(): Promise<RSVP[]> {
  try {
    // Intentar obtener de Supabase
    const { data, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      return data;
    }
  } catch (supabaseError) {
    console.log('Supabase no disponible, obteniendo del localStorage');
  }

  // Fallback a localStorage
  return JSON.parse(localStorage.getItem('rsvps') || '[]');
}