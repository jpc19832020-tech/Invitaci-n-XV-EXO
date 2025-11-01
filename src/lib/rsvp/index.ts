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
    // Guardar en localStorage
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
    
    return { success: true, message: "¡Guardado exitosamente!" };
  } catch (error) {
    console.error('Error al guardar RSVP:', error);
    return { success: false, message: "Error al guardar" };
  }
}

export async function getRSVPs(): Promise<RSVP[]> {
  try {
    // Obtener de localStorage
    return JSON.parse(localStorage.getItem('rsvps') || '[]');
  } catch (error) {
    console.error('Error al obtener RSVPs:', error);
    return [];
  }
}