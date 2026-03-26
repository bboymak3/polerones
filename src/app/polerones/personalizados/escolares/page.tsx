import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, CheckCircle, Clock, Truck, Award, Zap, MapPin, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Polerones de 4to Medio y Escolares en Santiago | Generación 2026",
  description: "Polerones escolares personalizados en Santiago. Polerones de 4to medio, 8vo básico, kinder y generaciones. Estampados y bordados para cursos en San Joaquín.",
  keywords: ["polerones 4to medio", "polerón de colegio", "polerón escolar", "polerones de cuarto medio precios", "polerones generacionales"],
}

const products = [
  {
    title: 'Polerón 4to Medio Generación 2026',
    desc: 'Escolar Chile class',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-4to-medio-generacion-2026-escolar-chile-class.jpg',
  },
]

export default function EscolaresPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              <span>Promociones y Cursos</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Polerones Escolares Personalizados
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              El polerón de tu generación que guardará para siempre. 
              Especialistas en polerones de 4to medio y escolares en Santiago.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Cotizar para mi Curso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto">
                  Ver Muestrario
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Polerones de Generación Destacados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los diseños más solicitados por las promociones en Santiago
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contacto">
                    <Button className="w-full">
                      Cotizar Ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional info cards */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Pedidos por Curso</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Mejores precios para grupos grandes. Enviamos muestrario de tallas a tu colegio en Santiago.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mb-2" />
                <CardTitle>Calidad Garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Polerones de algodón premium y franela reactiva. Resistente a todo el año escolar.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>Entrega Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Listos en 15-20 días hábiles. Servicio prioritario para fechas de foto oficial y gira.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Polerones de 4to Medio y Escolares en Santiago: Tu Generación con Estilo en San Joaquín
            </h2>

            <p className="text-muted-foreground text-lg">
              Llegar al último año es un hito, y nada lo representa mejor que el polerón de cuarto medio. En Polerones Personalizados 🟢, situados en El Manzanito 2551, San Joaquín, somos especialistas en dar vida a la identidad de tu curso. Entendemos que los polerones generacionales no son solo ropa, son el símbolo de años de amistad y esfuerzo. Por eso, en nuestra tienda de Santiago, ofrecemos la mayor variedad de diseños y calidades para polerones escolares personalizados, asegurando que cada integrante de la promoción luzca una prenda única, cómoda y, sobre todo, extremadamente duradera.
            </p>

            <p className="text-muted-foreground text-lg">
              En el competitivo mercado de la Región Metropolitana, nos destacamos por ofrecer polerones de 4 medio originales con acabados que el retail no puede igualar. Trabajamos con polerón de algodón premium y franela reactiva de alto gramaje, ideal para resistir el uso diario durante todo el año escolar. Ya sea que tu curso busque un estilo clásico o algo más vanguardista como un polerón oversize escolar, en San Joaquín contamos con la tecnología de estampado de poleras y bordado computarizado necesaria para que el logo de tu generación sea el más envidiado de Santiago.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-6">
              Variedad para Promociones: 4to Medio, 8vo Básico y Kinder
            </h3>

            <p className="text-muted-foreground text-lg">
              No solo nos enfocamos en los más grandes; en nuestra sucursal de El Manzanito 2551 cubrimos todas las etapas escolares:
            </p>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <strong>Polerones Generacionales 4to Medio:</strong> Diseños full color con apodos, números en la espalda y bordados de alta definición en el pecho.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <strong>Polerones de 8vo Básico:</strong> La transición perfecta hacia la media, con estilos modernos y telas resistentes para el juego.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <strong>Polerones de Kinder:</strong> Prendas suaves y seguras para los más pequeños, incluyendo el popular polerón con orejas o diseños de dibujos animados.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <strong>Polerones de Colegio Oficiales:</strong> Si eres un centro de padres buscando polerones institucionales en Santiago, ofrecemos uniformes deportivos con colores exactos.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <strong>Polerón Americano Universitario:</strong> El estilo "Varsity" con mangas de distinto color, un clásico que nunca falla para las giras de estudio.
                </div>
              </li>
            </ul>

            <p className="text-muted-foreground text-lg mt-6">
              Cada polerón personalizado es sometido a un control de calidad riguroso. Sabemos que el polerón hombre y el polerón mujer escolar deben aguantar desde la sala de clases hasta los paseos de curso, por lo que reforzamos costuras y usamos tintas DTF que no se parten con el tiempo.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-6">
              Beneficios para Cursos y Centros de Alumnos en San Joaquín
            </h3>

            <p className="text-muted-foreground text-lg">
              En Polerones Personalizados 🟢 en Santiago, ofrecemos ventajas exclusivas para pedidos grupales:
            </p>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <strong>Muestrario de Tallas:</strong> Podemos enviar un "set de prueba" a tu colegio en Santiago o puedes venir a San Joaquín para que todos se prueben su polerón personalizado.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <strong>Diseño Gratis:</strong> Si tu curso no tiene logo, nuestros diseñadores en El Manzanito 2551 les ayudan a crear un concepto único.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <strong>Precios por Mayor:</strong> Ofrecemos los mejores valores de polerones baratos en Santiago para grupos grandes, manteniendo la calidad premium.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <strong>Envíos Express a Regiones:</strong> ¿Tu colegio está fuera de Santiago? No hay problema. Despachamos tus polerones de generación a todo Chile con seguimiento en tiempo real.
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-12 mb-6">
              Preguntas Frecuentes sobre Polerones Escolares (FAQ)
            </h3>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-lg mb-2">
                  ¿Dónde puedo cotizar polerones de cuarto medio en Santiago?
                </p>
                <p className="text-muted-foreground">
                  Puedes visitarnos directamente en El Manzanito 2551, San Joaquín. También puedes solicitar tu cotización vía WhatsApp. Atendemos a colegios de todas las comunas: desde Maipú y Puente Alto hasta Las Condes y Vitacura.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-lg mb-2">
                  ¿Cuál es el precio de los polerones de cuarto medio por curso?
                </p>
                <p className="text-muted-foreground">
                  El valor depende de la cantidad de bordados, estampados y el tipo de tela (como el polerón con chiporro o algodón simple). Sin embargo, en San Joaquín nos caracterizamos por tener precios altamente competitivos y promociones para cursos completos. ¡Escríbenos para un presupuesto a medida!
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-lg mb-2">
                  ¿Tienen tallas grandes para alumnos XXL?
                </p>
                <p className="text-muted-foreground">
                  Por supuesto. Contamos con un tallaje inclusivo que abarca desde tallas infantiles hasta polerones XXL hombre y tallas especiales, asegurando que ningún compañero se quede sin su recuerdo generacional.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-lg mb-2">
                  ¿Cuánto tiempo demora la fabricación de los polerones de curso?
                </p>
                <p className="text-muted-foreground">
                  Para pedidos generacionales en Santiago, el tiempo promedio es de 15 a 20 días hábiles, dependiendo de la complejidad del diseño. Recomendamos hacer el pedido con anticipación para tenerlos listos antes de la foto oficial o la gira de estudios.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-lg mb-2">
                  ¿Qué técnicas usan para los nombres de los alumnos en la espalda?
                </p>
                <p className="text-muted-foreground">
                  Usamos principalmente vinilo textil de alta calidad o DTF, lo que permite poner los apodos de forma clara y con una durabilidad extrema, evitando que se despeguen con los lavados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <GraduationCap className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Es hora de que tu generación se escriba la historia!
            </h2>
            <p className="text-lg opacity-90">
              No dejes pasar la oportunidad de crear el polerón de curso que recordarán toda la vida.
              Cotiza hoy y recibe ofertas especiales para tu promoción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Solicitar Cotización Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/polerones/personalizados/hombre">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto">
                  Ver Otras Categorías
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Entregas rápidas para cursos con fecha límite. Servicio prioritario para foto oficial y gira de estudios en Santiago.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Truck className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Despachamos polerones escolares a todas las regiones. Desde nuestra base en Santiago llegamos a tu colegio.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Visítanos en San Joaquín</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  El Manzanito 2551, San Joaquín, Santiago
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Otras Categorías que te pueden interesar
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/polerones/personalizados/hombre">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Hombre</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/polerones/personalizados/mujer">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Mujer</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/polerones/personalizados/familia">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Familia</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/polerones/personalizados/corporativos">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Corporativos</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
