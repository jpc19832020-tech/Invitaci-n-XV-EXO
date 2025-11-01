import { NextRequest, NextResponse } from 'next/server'
import { getRSVPs } from '@/lib/rsvp'

export async function GET() {
  try {
    const rsvps = await getRSVPs()
    
    return NextResponse.json({
      success: true,
      data: rsvps
    })
  } catch (error) {
    console.error('Error al obtener RSVPs:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Error al obtener las confirmaciones'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Aquí podrías agregar validación de los datos recibidos
    const { name, guests, message } = body
    
    if (!name || !guests) {
      return NextResponse.json({
        success: false,
        message: 'Faltan datos requeridos'
      }, { status: 400 })
    }
    
    // En un entorno estático, no podemos guardar en Supabase desde el servidor
    // Los datos deben guardarse directamente en el cliente
    
    return NextResponse.json({
      success: true,
      message: 'Los datos deben guardarse desde el cliente'
    })
  } catch (error) {
    console.error('Error al procesar RSVP:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Error al procesar la confirmación'
    }, { status: 500 })
  }
}