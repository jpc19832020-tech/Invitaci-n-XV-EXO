import { NextRequest, NextResponse } from 'next/server'

// Nota: Esta ruta API no funcionará en un sitio estático completamente exportado
// Las rutas API no se incluyen en la exportación estática de Next.js
// Esta función es solo para desarrollo local

export async function GET() {
  // En un sitio estático, esta ruta no estará disponible
  // La página de admin debería usar localStorage en su lugar
  
  return NextResponse.json({
    success: false,
    message: 'Esta API no está disponible en el sitio estático. Usa localStorage.',
    data: []
  })
}

export async function POST(request: NextRequest) {
  // En un sitio estático, esta ruta no estará disponible
  // Los datos deben guardarse directamente en el cliente
  
  return NextResponse.json({
    success: false,
    message: 'Esta API no está disponible en el sitio estático. Usa localStorage.'
  })
}