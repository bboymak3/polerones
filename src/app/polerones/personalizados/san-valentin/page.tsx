import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Package, Truck, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Polerones para San Valentín en Santiago | Regalos 14 de Febrero",
  description: "Regalos de San Valentín personalizados en Santiago. Polerones para parejas, sets king queen y diseños de amor. El regalo perfecto del 14 de febrero en San Joaquín.",
  keywords: ["polerones personalizados amor", "poleras 14 de febrero", "estampados san valentín", "regalos personalizados santiago", "poleras aniversario"],
}

const products = [
  {
    title: 'Polerones Parejas',
    desc: 'Aniversario Santiago love',
    image: 'https://poleronesensantiago.pages.dev/images/polerones-parejas-personalizados-aniversario-santiago-love.jpg',
  },
  {
    title: 'Sudaderas Novios',
    desc: 'King & Queen together',
    image: 'https://poleronesensantiago.pages.dev/images/sudaderas-novios-king-queen-san-joaquin-together.jpg',
  },
  {
    title: 'Conjunto Parejas',
    desc: 'Duo amor 14 de febrero',
    image: 'https://poleronesensantiago.pages.dev/images/conjunto-polerones-duo-amor-14-febrero-chile-match.jpg',
  },
]

export default function SanValentinPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-background to-pink-50 dark:from-red-950/20 dark:via-background dark:to-pink-950/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Heart className="h-16 w-16 text-red-500 fill-red-500" />
                <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-2 -right-2" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Polerones para{' '}
              <span className="text-red-600 dark:text-red-400">San Valentín</span> en Santiago
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              El regalo más original para el 14 de febrero. Polerones personalizados para parejas en San Joaquín, Santiago.
              Regala amor que dura todo el año.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
                  Cotizar Mi Regalo
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/polerones/personalizados/parejas">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Diseños de Parejas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Productos de San Valentín */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Colección Especial San Valentín ❤️
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diseños románticos creados especialmente para celebrar el amor en Santiago
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Heart className="h-3 w-3 fill-white" />
                    San Valentín
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Diseños Exclusivos</h3>
                <p className="text-sm text-muted-foreground">
                  Polerones personalizados únicos que expresan tu amor de forma especial
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Servicio Express</h3>
                <p className="text-sm text-muted-foreground">
                  Estampado rápido en San Joaquín para que tu regalo llegue a tiempo
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Envíos a Todo Chile</h3>
                <p className="text-sm text-muted-foreground">
                  Tu sorpresa llega a cualquier rincón del país antes del 14 de febrero
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Calidad Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Polerones de algodón de alta gama que resisten lavados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Polerones para San Valentín en Santiago: El Regalo más Original en San Joaquín</h2>

              <p className="text-muted-foreground leading-relaxed">
                Se acerca el 14 de febrero y la búsqueda del regalo perfecto comienza. En Polerones Personalizados 🟢, ubicados en El Manzanito 2551, San Joaquín, nos preparamos para ofrecerte la mejor colección de polerones para San Valentín en todo Santiago. Sabemos que las flores y chocolates pasan, pero un polerón personalizado de alta calidad es un recuerdo que tu pareja vestirá durante todo el año. Somos líderes en Chile en la creación de prendas con sentido, diseñadas para celebrar el amor con estilo, comodidad y la exclusividad que solo el estampado de poleras artesanal y tecnológico puede brindar.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Nuestra tienda en la Región Metropolitana es el punto de encuentro para quienes buscan salir de lo común. Ya sea que prefieras un polerón con gorro para esas tardes de película o un polerón oversize con un diseño de estética urbana, en San Joaquín tenemos el stock más variado. Trabajamos con polerón de algodón premium, asegurando una textura suave al tacto y una durabilidad garantizada. No te conformes con ropa genérica de retail; este San Valentín, regala una pieza única con estampados personalizados que cuenten su historia de amor.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Ideas de Diseños para el 14 de Febrero en Santiago</h3>

              <p className="text-muted-foreground leading-relaxed">
                En nuestra sucursal de San Joaquín hemos recopilado las tendencias más fuertes para este 2026:
              </p>

              <ul className="space-y-3 mt-4">
                <li className="flex gap-2">
                  <Heart className="h-5 w-5 text-red-600 shrink-0 mt-0.5 fill-red-100 dark:fill-red-900/30" />
                  <span>
                    <strong>Polerones con Iniciales y Fechas:</strong> El clásico minimalista. Estampamos sus iniciales en la manga o el pecho, junto a su fecha de aniversario en números romanos.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Heart className="h-5 w-5 text-red-600 shrink-0 mt-0.5 fill-red-100 dark:fill-red-900/30" />
                  <span>
                    <strong>Poleras para Parejas San Valentín:</strong> Si prefieres algo más liviano para el verano santiaguino, nuestras poleras personalizadas con diseños de "Media Naranja" o ilustraciones lineales de fotos reales son un éxito.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Heart className="h-5 w-5 text-red-600 shrink-0 mt-0.5 fill-red-100 dark:fill-red-900/30" />
                  <span>
                    <strong>Polerones de Anime para Parejas:</strong> Para los fans de la cultura japonesa, ofrecemos diseños de polerón naruto y hinata, o polerón de mickey y minnie versión otaku.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Heart className="h-5 w-5 text-red-600 shrink-0 mt-0.5 fill-red-100 dark:fill-red-900/30" />
                  <span>
                    <strong>Sets King & Queen:</strong> Los favoritos de siempre, disponibles en polerón negro hombre y polerón blanco mujer, con coronas doradas en vinilo metalizado de alta gama.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Heart className="h-5 w-5 text-red-600 shrink-0 mt-0.5 fill-red-100 dark:fill-red-900/30" />
                  <span>
                    <strong>Polerones Bordados de Amor:</strong> Para un acabado más elegante y eterno, el bordado computarizado es ideal para pequeños detalles en el cuello o puños de tu polerón de marca.
                  </span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-6">
                Cada polerón personalizado para parejas que sale de nuestra tienda en El Manzanito 2551 es revisado bajo estrictos estándares de calidad. Queremos que este 14 de febrero tu único problema sea elegir cuál de todos nuestros hermosos diseños llevar.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Calidad y Rapidez: Estampado Express en San Joaquín</h3>

              <p className="text-muted-foreground leading-relaxed">
                Sabemos que a veces el tiempo apremia. Por eso, en Polerones Personalizados 🟢 ofrecemos un servicio adaptado al ritmo de Santiago:
              </p>

              <ul className="space-y-3 mt-4">
                <li className="flex gap-2">
                  <Sparkles className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Regalos Personalizados Express:</strong> Si compras a última hora, consulta por nuestra disponibilidad de estampado de poleras rápido con retiro el mismo día en San Joaquín.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Sparkles className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tecnología DTF y Vinilo:</strong> Utilizamos tintas que no se agrietan y vinilos que no se despegan, asegurando que tu polerón de regalo se vea nuevo por años.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Sparkles className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Envíos a Todo Chile:</strong> Si no estás en la capital, realizamos envíos rápidos a regiones para que tu sorpresa llegue a tiempo a cualquier rincón del país.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Sparkles className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Variedad de Tallas:</strong> Desde la S hasta polerones XXL, incluyendo polerones mujer grandes y cortes slim fit para hombre.
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Preguntas Frecuentes sobre Regalos de San Valentín
              </h2>
              <p className="text-muted-foreground">
                Todo lo que necesitas saber para preparar el regalo perfecto
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Dónde puedo comprar regalos personalizados para el 14 de febrero en Santiago?</h3>
                  <p className="text-muted-foreground">
                    Te esperamos en nuestra tienda física en El Manzanito 2551, San Joaquín, Santiago. También puedes realizar tu pedido online a través de nuestra web y coordinar un retiro o envío a domicilio en comunas como Providencia, Las Condes o Puente Alto.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Puedo personalizar un polerón con una foto de mi pareja?</h3>
                  <p className="text-muted-foreground">
                    ¡Absolutamente! Somos expertos en impresión de poleras en Santiago. Podemos convertir tu fotografía favorita en un diseño increíble para un polerón personalizado, ideal para un regalo emotivo y único en San Valentín.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Tienen promociones por el set de dos polerones?</h3>
                  <p className="text-muted-foreground">
                    Sí, durante el mes de febrero lanzamos packs especiales de polerones baratos pero de alta calidad para parejas. Al comprar el duo, obtienes un descuento especial en comparación con el precio unitario. ¡Ven a vernos a San Joaquín y aprovecha!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Qué materiales recomiendan para un regalo duradero?</h3>
                  <p className="text-muted-foreground">
                    Recomendamos el polerón de algodón peruano o la franela reactiva. Son materiales que no forman "motitas" y mantienen los colores vibrantes del estampado, haciendo que tu regalo de San Valentín sea de nivel premium.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">¿Cómo puedo saber mi talla antes de comprar?</h3>
                  <p className="text-muted-foreground">
                    En nuestro sitio web disponemos de una guía de tallas detallada. Además, en nuestro local de Santiago puedes ver las muestras físicas de polerón hombre y polerón mujer para estar seguro del calce perfecto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para sorprender a tu pareja este San Valentín?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Crea un polerón personalizado único que sea testigo de vuestro amor.
            Visítanos en San Joaquín o haz tu pedido online hoy.
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="secondary" className="text-lg">
              Solicitar Mi Diseño
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-2 text-2xl font-bold">
              <Heart className="h-8 w-8 text-red-600 fill-red-600" />
              <span>Polerones Personalizados 🟢</span>
            </div>
            <p className="text-muted-foreground">
              El Manzanito 2551, San Joaquín, Santiago
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/polerones/personalizados/parejas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Parejas
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
