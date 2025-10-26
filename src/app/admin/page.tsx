'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Calendar, MessageSquare, RefreshCw } from 'lucide-react'

interface RSVP {
  id: string
  name: string
  guests: number
  message?: string
  confirmed: boolean
  createdAt: string
}

export default function AdminPage() {
  const [rsvps, setRsvps] = useState<RSVP[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchRSVPs = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/rsvp')
      const result = await response.json()

      if (response.ok) {
        setRsvps(result.data)
        setError('')
      } else {
        setError('Error al cargar las confirmaciones')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRSVPs()
  }, [])

  const totalGuests = rsvps.reduce((sum, rsvp) => sum + rsvp.guests, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-300 mb-2">Panel de Administración</h1>
          <p className="text-pink-100">Confirmaciones para la fiesta de XV años</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-200">Total Confirmados</CardTitle>
              <Users className="h-4 w-4 text-yellow-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{rsvps.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-200">Total Invitados</CardTitle>
              <Calendar className="h-4 w-4 text-yellow-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalGuests}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-200">Con Mensaje</CardTitle>
              <MessageSquare className="h-4 w-4 text-yellow-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{rsvps.filter(r => r.message).length}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-yellow-300">Lista de Confirmaciones</CardTitle>
            <Button
              onClick={fetchRSVPs}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualizar
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-white">Cargando...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-300">{error}</div>
            ) : rsvps.length === 0 ? (
              <div className="text-center py-8 text-white">No hay confirmaciones aún</div>
            ) : (
              <div className="space-y-4">
                {rsvps.map((rsvp) => (
                  <div
                    key={rsvp.id}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-yellow-200">{rsvp.name}</h3>
                          <Badge variant="secondary" className="bg-pink-500/20 text-pink-200">
                            {rsvp.guests} {rsvp.guests === 1 ? 'persona' : 'personas'}
                          </Badge>
                        </div>
                        {rsvp.message && (
                          <p className="text-pink-100 mb-2">{rsvp.message}</p>
                        )}
                        <p className="text-sm text-white/60">
                          Confirmado el {new Date(rsvp.createdAt).toLocaleDateString('es-PE', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}