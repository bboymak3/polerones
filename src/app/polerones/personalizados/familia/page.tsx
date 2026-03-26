import Link from 'next/link'
import { ArrowRight, Users, Heart, Zap, Truck, Shield, Award, MapPin, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: "Polerones para Familias en Santiago, Chile | Estampados Familiares",
  description: "Polerones personalizados para familias en Santiago. Poleras madre e hija, padre e hijo, sets familiares y polerones generacionales. El regalo perfecto en San Joaquín.",
  keywords: ["polerones estampados de familia", "poleras madre e hija", "poleras papa e hijo", "polerones personalizados para familia", "poleras familiares"],
}

const products = [
  {
    title: 'Polerones Parejas',
    desc: 'Aniversario Santiago love',
    image: 'https://poleronesensantiago.pages.dev/images/polerones-parejas-personalizados-aniversario-santiago-love.jpg',
    category: 'Parejas'
  },
  {
    title: 'Sudaderas Novios',
    desc: 'King & Queen together',
    image: 'https://poleronesensantiago.pages.dev/images/sudaderas-novios-king-queen-san-joaquin-together.jpg',
    category: 'Parejas'
  },
  {
    title: 'Conjunto Parejas',
    desc: 'Duo amor 14 de febrero',
    image: 'https://poleronesensantiago.pages.dev/images/conjunto-polerones-duo-amor-14-febrero-chile-match.jpg',
    category: 'Parejas'
  },
]

export default function FamiliaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500/10 via-background to-blue-500/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              <span>Unión Familiar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Polerones para{' '}
              <span className="text-green-600">Familias</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Crea recuerdos inolvidables con sets de polerones personalizados para toda tu familia.
              En San Joaquín, Santiago, transformamos tus momentos en prendas únicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Cotizar para tu Familia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Opciones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Productos Familiares Populares
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sets de parejas que pueden extenderse a toda la familia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {product.category}
                  </div>
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

      {/* Features Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pedidos familiares listos en 24-48 horas en Santiago para eventos especiales.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Todas las Tallas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Desde polerones bebé hasta XXL. El set perfecto para toda la familia en San Joaquín.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Truck className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tu familia está en regiones. Enviamos sus polerones a cualquier parte del país.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Diseños Familiares</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sets madre e hija, padre e hijo, y completos. El regalo que une generaciones.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Polerones para Familias en Santiago: Unión y Estilo en San Joaquín
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              No hay nada que capture mejor un momento especial que ver a todo el clan unido con un diseño exclusivo. En Polerones Personalizados 🟢, ubicados en El Manzanito 2551, San Joaquín, somos especialistas en crear polerones para familias que transforman una reunión, un viaje o un evento en un recuerdo inolvidable. El polerón personalizado familiar se ha convertido en una tendencia creciente en Chile, y en nuestra tienda de Santiago te ofrecemos la mejor calidad en estampado de poleras y polerones para todas las edades, desde el polerón bebé hasta tallas especiales para los abuelos.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Nuestra propuesta en la Región Metropolitana combina la calidez del polerón de algodón con diseños creativos que reflejan la identidad de tu familia. Ya sea que busques polerones para el Día del Padre, el Día de la Madre, o simplemente un set de poleras familiares para las vacaciones, en San Joaquín tenemos la infraestructura para cumplir con pedidos grandes y pequeños. Utilizamos técnicas de impresión de poleras que aseguran que los colores no se desvanezcan, garantizando que tu polerón personalizado sea una prenda de larga duración.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              Sets Familiares Populares: De poleras madre e hija a packs completos
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              En nuestra sucursal de Santiago, los favoritos de las familias chilenas incluyen:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Poleras Madre e Hija / Padre e Hijo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Diseños tipo "Copy-Paste" o "The Original / The Remix" que son furor en redes sociales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Polerones Estampados de Familia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ideales para cumpleaños o aniversarios familiares, con el apellido del clan o ilustraciones tipo caricatura.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Polerones de Superhéroes para Familias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sets completos donde cada integrante tiene su personaje favorito, muy pedidos para paseos al Cajón del Maipo o la playa.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Polerón Bebé y Body Personalizado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Para los más pequeños del hogar, usamos telas 100% algodón que cuidan su piel.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Polerones de Navidad Familiares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    El clásico suéter navideño pero en versión polerón cómodo, perfecto para las fotos de diciembre en Santiago.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Cada polerón hombre, polerón mujer y prenda infantil es seleccionada por su suavidad y resistencia. Si buscas un polerón de marca como base, trabajamos con calces similares al polerón nike o polerón adidas para asegurar que toda la familia luzca con un estilo moderno y deportivo.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              Personalización de Alta Gama en el Corazón de San Joaquín
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              En El Manzanito 2551, llevamos la personalización familiar a otro nivel técnico:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <Card className="border-green-200">
                <CardHeader className="pb-3">
                  <Sparkles className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Polerones Bordados Familiares</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Una opción elegante para eventos formales o logotipos familiares que desees que duren para siempre.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="pb-3">
                  <Shield className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Tecnología DTF Full Color</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Perfecta para estampar fotos reales de la familia sobre un polerón negro o de cualquier color oscuro.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="pb-3">
                  <Zap className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Vinilo Textil Duradero</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ideal para nombres y números en la espalda, muy usado en polerones deportivos familiares.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="pb-3">
                  <Award className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Descuentos por Pack</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    En nuestra tienda de San Joaquín, entendemos que las familias son grandes; por eso ofrecemos precios de polerones por mayor a partir de 3 unidades del mismo diseño.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preguntas Frecuentes sobre Polerones Familiares (FAQ)
              </h2>
              <p className="text-muted-foreground">
                Todo lo que necesitas saber sobre los polerones personalizados para tu familia en Santiago
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Tienen todas las tallas disponibles para un grupo familiar en Santiago?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Sí, en nuestro local de San Joaquín contamos con un stock que va desde la talla 0 (bebés) hasta polerones XXL hombre y tallas especiales como polerones 3XL. No importa cuántos sean en la familia, todos tendrán su prenda a medida.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Puedo pedir polerones personalizados para familia con envío a regiones?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    ¡Por supuesto! Aunque estamos en Santiago (El Manzanito 2551, San Joaquín), realizamos envíos express a todo Chile. Si tu familia está en el sur o el norte, nosotros nos encargamos de que sus polerones lleguen rápidos y seguros vía Starken o Chilexpress.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Cuánto demora un pedido de 10 polerones para una reunión familiar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Para pedidos familiares medianos en la Región Metropolitana, el tiempo estimado es de 3 a 5 días hábiles. Si necesitas un estampado de poleras express para un evento de fin de semana, consúltanos por factibilidad de entrega rápida en nuestro taller de San Joaquín.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Qué materiales usan para la ropa de los niños?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Para la línea infantil y de bebés, priorizamos el polerón de algodón peruano y telas hipoalergénicas. Queremos que los más chicos se sientan cómodos y frescos, ya sea usando una polera manga larga o un polerón con gorro.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Puedo combinar polerones y poleras en el mismo set familiar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    ¡Claro! Puedes armar un pack mixto. Por ejemplo, polerones para adultos y poleras personalizadas para los niños, todos con el mismo concepto gráfico y técnica de estampado.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para unir a tu familia con polerones personalizados?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contáctanos hoy y crea el set familiar perfecto que serán recuerdos para toda la vida.
            En San Joaquín, Santiago, estamos listos para atender a toda tu familia.
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="secondary" className="text-lg bg-white text-green-700 hover:bg-green-50">
              Solicitar Cotización Familiar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-green-200">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Entregas rápidas en Santiago para eventos familiares especiales.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <Truck className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Llevamos tus polerones familiares a cualquier región del país.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Visítanos en San Joaquín</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  El Manzanito 2551, San Joaquín, Santiago
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
