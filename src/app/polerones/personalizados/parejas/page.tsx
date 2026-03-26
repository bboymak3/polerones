import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, MapPin, Truck, Zap, Award, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: "Polerones para Parejas en Santiago, Chile | Regalos de Amor",
  description: "Polerones personalizados para parejas en Santiago. Sets king queen, diseños de amor, aniversarios y 14 de febrero. El regalo perfecto en San Joaquín.",
  keywords: ["polerones para parejas", "sudaderas para parejas", "poleras para enamorados", "polerones king queen", "poleras personalizadas para parejas"],
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

export default function ParejasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500/10 via-background to-red-500/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4 fill-current" />
              Regalos para el Amor
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Polerones para Parejas en{' '}
              <span className="text-primary">Santiago</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Creen recuerdos inolvidables con polerones personalizados para parejas.
              Sets king queen, aniversarios y diseños únicos en San Joaquín.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700">
                  Cotizar Set de Pareja
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Diseños
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diseños Destacados para Parejas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestros polerones para parejas más populares en Santiago
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <CardDescription>{product.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Polerones para Parejas en Santiago: El Regalo Perfecto en San Joaquín
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              ¿Buscas una forma única de celebrar tu relación? En Polerones Personalizados 🟢, ubicados estratégicamente en El Manzanito 2551, San Joaquín, nos especializamos en crear polerones para parejas que capturan la esencia de tu historia de amor. Ya sea para un aniversario, un regalo sorpresa o simplemente para lucir un look combinado en las calles de Santiago, nuestros polerones personalizados para parejas son la opción número uno en la Región Metropolitana. No vendemos solo ropa; fabricamos recuerdos que se pueden vestir, utilizando materiales de primera calidad que garantizan que el diseño permanezca intacto, igual que tu compromiso.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              En nuestra tienda de San Joaquín, entendemos que cada pareja es un mundo. Por eso, ofrecemos una variedad increíble que incluye desde el clásico polerón con gorro hasta modelos de polerón oversize para un estilo urbano y moderno. Si buscas polerones king y queen, diseños de polerones mickey y minnie o frases compartidas que se completan cuando están juntos, aquí en Santiago somos expertos en estampados personalizados para parejas. Utilizamos técnicas de DTF textil y vinilo premium para que cada detalle, desde una fecha especial en números romanos hasta una ilustración personalizada, luzca vibrante y profesional.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-6">
              Estilos Populares de Polerones y Poleras para Novios
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              El concepto de "Matchy-Matchy" ha evolucionado y en nuestra tienda te ofrecemos las mejores alternativas:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Polerones Duo con Capucha:</strong> Ideales para las tardes frías en Santiago, disponibles en polerón negro hombre y polerón rosa mujer para combinar perfectamente.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Poleras para Enamorados:</strong> Una opción fresca para el verano, con estampados de poleras que incluyen iniciales, fotos o personajes de anime favoritos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Polerones de Parejas Estilo Marca:</strong> Nos inspiramos en los cortes más buscados como el polerón nike hombre y polerón adidas mujer para crear conjuntos deportivos de alta gama para ambos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Conjuntos para Parejas Personalizados:</strong> Buzos completos que combinan comodidad y diseño, perfectos para viajes o para estar en casa con estilo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Diseños Minimalistas:</strong> Para las parejas de Santiago que prefieren la discreción, ofrecemos polerones bordados con pequeños corazones o coordenadas geográficas.
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Cada prenda es fabricada con polerón de algodón de alta calidad y franela reactiva, asegurando que no se achiquen ni pierdan su forma después de la lavadora. Si vives en San Joaquín o comunas cercanas como San Miguel, La Cisterna o Macul, puedes visitarnos o coordinar una entrega rápida.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-6">
              Personalización Total: Tu Idea, Nuestro Estampado
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              En Polerones Personalizados 🟢, llevamos la creatividad al límite. No solo estampamos logos; creamos arte textil. Ofrecemos:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Polerones Personalizados Express:</strong> ¿Olvidaste el aniversario? En nuestra tienda de Santiago ofrecemos servicios de entrega rápida para diseños sencillos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Ilustraciones de Fotos:</strong> Convertimos tu foto favorita en un diseño lineal para tu polerón personalizado.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Variedad de Colores:</strong> Desde el polerón azul marino, polerón gris, hasta colores tendencia como el lila o fucsia.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Tallaje Inclusivo:</strong> Contamos con stock desde la S hasta polerones XXL y tallas especiales, asegurando que ambos se sientan cómodos.
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-12 mb-6">
              Preguntas Frecuentes sobre Polerones de Parejas (FAQ)
            </h3>

            <div className="space-y-6 mt-8">
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-lg mb-2">¿Dónde están ubicados en Santiago para retirar polerones de pareja?</p>
                <p className="text-muted-foreground">
                  Nuestra tienda física se encuentra en El Manzanito 2551, San Joaquín, Santiago. Es un punto estratégico donde realizamos entregas personales y puedes ver la calidad de nuestras telas de polerón y polera. Si prefieres la comodidad de tu hogar, realizamos envíos a todas las regiones de Chile vía Starken o Chilexpress.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-lg mb-2">¿Cuál es el precio de un set de polerones personalizados para parejas?</p>
                <p className="text-muted-foreground">
                  El costo varía según el tipo de prenda (si es polerón canguro, polerón con cierre o polera) y la técnica de estampado. Sin embargo, en San Joaquín ofrecemos los precios más competitivos de Santiago en polerones baratos de alta durabilidad. ¡Consulta por nuestros packs promocionales!
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-lg mb-2">¿Puedo llevar mi propio diseño para estampar en los polerones?</p>
                <p className="text-muted-foreground">
                  ¡Claro que sí! Somos especialistas en ropa personalizada. Puedes traernos tu idea, una referencia de polerones shein mujer que te haya gustado o un diseño de internet, y nosotros lo adaptamos para que quede perfecto en tu prenda.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-lg mb-2">¿Qué tan rápido entregan en la Región Metropolitana?</p>
                <p className="text-muted-foreground">
                  Para pedidos de parejas en Santiago, el tiempo de entrega suele ser de 48 a 72 horas hábiles. Si necesitas estampado de poleras express, pregúntanos por la disponibilidad del día para retiros directos en nuestro local de San Joaquín.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-lg mb-2">¿Cómo elijo las tallas correctas para hombre y mujer?</p>
                <p className="text-muted-foreground">
                  Contamos con una tabla de medidas detallada en nuestra web. Disponemos de calces slim fit y relax fit, además de polerones mujer grandes para asegurar que el regalo sea perfecto y cómodo para ambos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para sorprender a tu pareja?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Creen juntos un polerón que simbolice su amor. Contáctanos hoy y diseñemos el regalo perfecto.
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="secondary" className="text-lg">
              Cotizar Ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Entregas rápidas en Santiago. Pedidos listos en 24-48 horas para diseños simples.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Truck className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Desde nuestra base en San Joaquín enviamos a todas las regiones del país.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Visítanos en San Joaquín</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  El Manzanito 2551, San Joaquín, Santiago. Ven a ver la calidad de nuestros productos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
