import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Cake, Gift, Sparkles, MapPin, Truck, Zap, Award, CheckCircle, Star, PartyPopper, Calendar, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: "Polerones de Cumpleaños en Santiago, Chile | Regalos Personalizados",
  description: "Polerones personalizados de cumpleaños en Santiago. Regalos originales, diseños temáticos, poleras para fiestas y celebraciones. Estampado express en San Joaquín.",
  keywords: ["poleras de cumpleaños", "polerones personalizados para cumpleaños", "estampados de poleras fiesta", "poleras temáticas cumpleaños"],
}

export default function CumpleanosPage() {
  const productos = [
    {
      id: 1,
      nombre: "Polerones Parejas",
      descripcion: "Diseños complementarios para celebrar juntos",
      imagen: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop",
      href: "/polerones/personalizados/parejas"
    },
    {
      id: 2,
      nombre: "Sudaderas Novios",
      descripcion: "Regalos perfectos para cumpleañeros especiales",
      imagen: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&h=500&fit=crop",
      href: "/polerones/personalizados/parejas"
    },
    {
      id: 3,
      nombre: "Conjunto Parejas",
      descripcion: "Sets completos para fiestas temáticas",
      imagen: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&h=500&fit=crop",
      href: "/polerones/personalizados/parejas"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10"><Cake className="w-16 h-16" /></div>
          <div className="absolute top-20 right-20"><PartyPopper className="w-24 h-24" /></div>
          <div className="absolute bottom-10 left-1/4"><Sparkles className="w-20 h-20" /></div>
          <div className="absolute bottom-20 right-1/3"><Star className="w-16 h-16" /></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span className="text-sm font-medium">Regalos Personalizados</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Polerones de Cumpleaños
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Celebra con estilo único en Santiago, Chile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8">
                <Link href="/contacto">
                  Cotizar Ahora
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                <Link href="#productos">
                  Ver Diseños
                  <Gift className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diseños Destacados
            </h2>
            <p className="text-gray-600 text-lg">
              Regalos originales para cualquier edad y estilo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <Link key={producto.id} href={producto.href} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold mb-1">{producto.nombre}</h3>
                      <p className="text-white/90 text-sm">{producto.descripcion}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Ver más detalles</span>
                      <Sparkles className="w-5 h-5 text-orange-500 group-hover:rotate-12 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Servicio rápido para regalos de última hora en Santiago
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Calidad Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Polerones de algodón de alta gama y estampados duraderos
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Entregamos tu regalo de cumpleaños a cualquier región
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Diseños Únicos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Personalización total para crear el regalo perfecto
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Polerones de Cumpleaños en Santiago: Celebra con Estilo Único en San Joaquín
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                ¿Buscas que el festejado destaque o quieres un regalo que dure para siempre? En Polerones Personalizados 🟢, ubicados en El Manzanito 2551, San Joaquín, somos los líderes en la creación de polerones de cumpleaños que roban miradas en todo Santiago. Sabemos que cumplir un año más es un evento especial, y qué mejor forma de celebrarlo que con un polerón personalizado que refleje los gustos, la edad o una frase épica del cumpleañero. En nuestra tienda de la Región Metropolitana, convertimos una prenda básica en el centro de la fiesta gracias a nuestro servicio de estampado de poleras y polerones con tecnología de punta.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                En el corazón de San Joaquín, entendemos que cada cumpleaños tiene una temática diferente. Por eso, ofrecemos desde el clásico polerón con gorro para los nacidos en invierno, hasta poleras personalizadas para cumpleaños ideales para las celebraciones de verano en Santiago. Trabajamos con polerón de algodón de alta gama, asegurando que el festejado se sienta cómodo y con una prenda de calidad retail. No busques más en tiendas genéricas; ven a El Manzanito 2551 y diseña un polerón estampado que será el hit de la celebración.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <PartyPopper className="w-8 h-8 text-orange-500" />
                Diseños Temáticos para Fiestas y Regalos de Cumpleaños
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                En nuestra sucursal de Santiago, las opciones de personalización son infinitas:
              </p>

              <div className="grid grid-cols-1 gap-4 mb-8">
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Polerones "Legendarios":</strong>{' '}
                        <span className="text-gray-700">Diseños de "Legends were born in..." con el mes y año, disponibles en polerón negro hombre y colores vibrantes.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Poleras para Fiestas Temáticas:</strong>{' '}
                        <span className="text-gray-700">Si la fiesta es de anime, música o videojuegos, creamos el set completo para el cumpleañero y sus invitados.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Polerones con Fotos:</strong>{' '}
                        <span className="text-gray-700">Usamos DTF textil para estampar la mejor foto del festejado en alta definición sobre un polerón personalizado.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Sets de Cumpleaños para Niños:</strong>{' '}
                        <span className="text-gray-700">Desde el polerón Paw Patrol hasta diseños de Stitch o Minecraft, con el nombre y la edad del pequeño.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Hitos Especiales:</strong>{' '}
                        <span className="text-gray-700">Polerones para los 18, 30, 40 o 50 años, con diseños retro o elegantes polerones bordados.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Cada prenda, ya sea un polerón hombre, polerón mujer o infantil, es fabricada con materiales que resisten el uso intensivo. Si quieres un look de alta gama, podemos usar bases similares al polerón nike o polerón adidas para un acabado deportivo y moderno.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-pink-500" />
                Estampado Express de Cumpleaños en San Joaquín
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Sabemos que a veces los regalos se dejan para última hora. En Polerones Personalizados 🟢 en Santiago, te salvamos:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Servicio Express:</strong>{' '}
                        <span className="text-gray-700">Consulta por nuestro estampado de poleras rápido con retiro en nuestra tienda de El Manzanito 2551.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Calidad Superior:</strong>{' '}
                        <span className="text-gray-700">Utilizamos tintas que no se agrietan, para que el polerón de cumpleaños se use mucho tiempo después de la fiesta.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Venta por Mayor y Menor:</strong>{' '}
                        <span className="text-gray-700">¿Quieres poleras para todos los invitados? Ofrecemos precios de poleras por mayor en Santiago para que nadie se quede fuera.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Envíos a Todo Chile:</strong>{' '}
                        <span className="text-gray-700">Si el cumpleañero está en regiones, enviamos su polerón de regalo de forma rápida vía Starken o Chilexpress.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-purple-500" />
                Preguntas Frecuentes sobre Ropa de Cumpleaños (FAQ)
              </h3>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Dónde puedo mandar a hacer un polerón de cumpleaños en Santiago?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Te esperamos en El Manzanito 2551, San Joaquín. Puedes venir personalmente a ver las telas y tallas, o hacer todo el pedido online con entrega en cualquier comuna de Santiago como Providencia, Ñuñoa o Las Condes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-500">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Pueden estampar diseños de Disney o Anime para un cumpleaños infantil?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      ¡Claro que sí! Somos expertos en polerones anime y personajes infantiles. Podemos crear diseños de Mickey Mouse, Naruto, Dragon Ball y más, personalizados con el nombre del niño o niña.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Tienen tallas grandes para adultos en polerones de cumpleaños?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Sí, contamos con stock desde tallas de niño hasta polerones XXL hombre y tallas especiales para mujer, incluyendo modelos oversize que están muy de moda en Santiago.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-500">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Cuánto tiempo antes debo hacer el pedido?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Para un diseño único de cumpleaños, lo ideal es pedir con 2 o 3 días de anticipación. Sin embargo, si necesitas un polerón personalizado express, contáctanos directamente para ver disponibilidad de entrega en 24 horas en San Joaquín.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Qué técnica de estampado es mejor para un regalo?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Para fotos, recomendamos DTF. Para frases o números sencillos, el vinilo textil es excelente. Y para un toque de lujo, los polerones bordados son la opción más sofisticada.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Cake className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para crear el regalo de cumpleaños perfecto?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Ven a nuestra tienda en San Joaquín o haz tu pedido online hoy
            </p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8">
              <Link href="/contacto">
                Cotizar Ahora
                <Gift className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-2 border-orange-200">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">Estampado Express</h3>
                <p className="text-gray-600">Entrega rápida en Santiago</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-pink-200">
              <CardContent className="p-6">
                <Truck className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">Envíos a Todo Chile</h3>
                <p className="text-gray-600">Starken y Chilexpress</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-200">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">Visítanos en San Joaquín</h3>
                <p className="text-gray-600">El Manzanito 2551, San Joaquín, Santiago</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors">Inicio</Link>
            <span>•</span>
            <Link href="/polerones/personizados/hombre" className="hover:text-orange-600 transition-colors">Hombre</Link>
            <span>•</span>
            <Link href="/polerones/personalizados/mujer" className="hover:text-orange-600 transition-colors">Mujer</Link>
            <span>•</span>
            <Link href="/polerones/personalizados/parejas" className="hover:text-orange-600 transition-colors">Parejas</Link>
            <span>•</span>
            <Link href="/polerones/personalizados/anime" className="hover:text-orange-600 transition-colors">Anime</Link>
            <span>•</span>
            <Link href="/contacto" className="hover:text-orange-600 transition-colors">Contacto</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
