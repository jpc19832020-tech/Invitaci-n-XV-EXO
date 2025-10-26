'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

interface RSVPData {
  name: string
  guests: string
  message: string
}

interface RSVPFormProps {
  onSubmit: (data: RSVPData) => void
  onClose: () => void
  showToast: (message: string) => void
}

export default function RSVPForm({ onSubmit, onClose, showToast }: RSVPFormProps) {
  const [rsvpData, setRsvpData] = useState<RSVPData>({ name: '', guests: '1', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!rsvpData.name.trim()) {
      showToast('Por favor ingresa tu nombre')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Para GitHub Pages, guardamos en localStorage como fallback
      const existingRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]')
      const newRSVP = {
        ...rsvpData,
        id: Date.now().toString(),
        confirmed: true,
        createdAt: new Date().toISOString()
      }
      
      const updatedRSVPs = [...existingRSVPs, newRSVP]
      localStorage.setItem('rsvps', JSON.stringify(updatedRSVPs))
      
      // También intentamos enviar a la API si está disponible
      try {
        const response = await fetch('/api/rsvp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(rsvpData),
        })

        if (response.ok) {
          showToast('¡Gracias por confirmar tu asistencia! Nos vemos en la fiesta 🎉')
        } else {
          showToast('¡Gracias por confirmar! Tu respuesta ha sido guardada localmente.')
        }
      } catch (apiError) {
        console.log('API no disponible, guardando localmente')
        showToast('¡Gracias por confirmar! Tu respuesta ha sido guardada localmente.')
      }
      
      onSubmit(rsvpData)
      onClose()
      setRsvpData({ name: '', guests: '1', message: '' })
    } catch (error) {
      console.error('Error:', error)
      showToast('Error al confirmar. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-2xl border border-white/20">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-yellow-300">Confirmar Asistencia</h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-yellow-200">Nombre Completo</Label>
            <Input
              id="name"
              value={rsvpData.name}
              onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-white/50"
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <Label htmlFor="guests" className="text-yellow-200">Número de Invitados</Label>
            <Select value={rsvpData.guests} onValueChange={(value) => setRsvpData({...rsvpData, guests: value})}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 persona</SelectItem>
                <SelectItem value="2">2 personas</SelectItem>
                <SelectItem value="3">3 personas</SelectItem>
                <SelectItem value="4">4 personas</SelectItem>
                <SelectItem value="5">5+ personas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-yellow-200">Mensaje (Opcional)</Label>
            <Textarea
              id="message"
              value={rsvpData.message}
              onChange={(e) => setRsvpData({...rsvpData, message: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-white/50"
              placeholder="Déjame un mensaje especial..."
              rows={3}
            />
          </div>
        </div>
        
        <div className="flex gap-4 mt-6">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white"
          >
            {isSubmitting ? 'Confirmando...' : 'Confirmar'}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 border-white/20 text-white hover:bg-white/10"
          >
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}