'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleWhatsApp = () => {
    const message = `Hola, me gustaría consultar sobre polerones personalizados.\n\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`
    window.open(`https://wa.me/56940349957?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Contáctanos en Santiago
            </h1>
            <p className="text-lg text-muted-foreground">
              ¿Tienes alguna pregunta sobre nuestros polerones personalizados? 
              Estamos aquí para ayudarte a crear la prenda perfecta.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    El Manzanito 2551, San Joaquín<br />
                    Santiago, Chile
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Punto estratégico para entregas rápidas en la Región Metropolitana.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Teléfono
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+56940349957" className="text-primary hover:underline">
                    +56 9 4034 9957
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contáctanos para cotizaciones y consultas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:contacto@poleronesensantiago.cl" className="text-primary hover:underline">
                    contacto@poleronesensantiago.cl
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Respondemos en menos de 24 horas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horarios de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Lunes a Viernes: 9:00 - 18:00</li>
                    <li>Sábados: 10:00 - 14:00</li>
                    <li>Domingos: Cerrado</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Formulario */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y te responderemos a la brevedad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                    <p className="text-lg font-semibold">¡Mensaje enviado!</p>
                    <p className="text-muted-foreground text-center">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+56 9 ..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto *</Label>
                      <Input
                        id="asunto"
                        required
                        value={formData.asunto}
                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                        placeholder="¿Cómo podemos ayudarte?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        required
                        rows={5}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button type="submit" className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleWhatsApp}
                        className="flex-1"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info adicional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">
              ¿Prefieres visitarnos?
            </h2>
            <p className="text-muted-foreground">
              Te invitamos a nuestra tienda en El Manzanito 2551, San Joaquín.
              Allí podrás ver muestras de nuestras telas, tallas y acabados.
              También puedes traer tu propio diseño y asesorarte personalmente con nuestro equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <MapPin className="mr-2 h-4 w-4" />
                Ver en Mapa
              </Button>
              <Button size="lg" onClick={() => window.open('https://wa.me/56940349957', '_blank')}>
                <Phone className="mr-2 h-4 w-4" />
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
