import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { name, guests, message } = await request.json();

    if (!name) {
      return NextResponse.json({ error: "El nombre es requerido" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('rsvp')
      .insert([
        {
          name,
          guests: parseInt(guests) || 1,
          message,
          confirmed: true
        }
      ])
      .select();

    if (error) {
      console.error('Error al guardar RSVP:', error);
      return NextResponse.json({ error: "Error al guardar la confirmación" }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "¡Gracias por confirmar tu asistencia!",
      data 
    });

  } catch (error) {
    console.error('Error en API de RSVP:', error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) {
      console.error('Error al obtener RSVPs:', error);
      return NextResponse.json({ error: "Error al obtener las confirmaciones" }, { status: 500 });
    }

    return NextResponse.json({ data });

  } catch (error) {
    console.error('Error en API de RSVP:', error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}