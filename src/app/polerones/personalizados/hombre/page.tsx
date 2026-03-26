import Link from 'next/link'
import { ArrowRight, Shirt, Zap, Award, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: "Polerones Personalizados para Hombre en Santiago, Chile",
  description: "Polerones personalizados para hombre en Santiago. Estilos como polerón nike hombre, polerón adidas hombre, sudaderas, polerón con cierre y más. Calidad premium en San Joaquín.",
  keywords: ["polerones hombre", "polerón nike hombre", "polerón adidas hombre", "sudaderas para hombre", "polerón con cierre hombre", "polerón polo hombre"],
}

export default function HombrePage() {
  const products = [
    {
      title: 'Polerón Hombre Personalizado',
      desc: 'Estampado urbano en Santiago',
      image: 'https://poleronesensantiago.pages.dev/images/poleron-hombre-personalizado-estampado-santiago-urbano.jpg',
    },
    {
      title: 'Sudadera Caballero con Gorro',
      desc: 'Diseño exclusivo San Joaquín',
      image: 'https://poleronesensantiago.pages.dev/images/sudadera-caballero-negra-con-gorro-san-joaquin-exclusive.jpg',
    },
    {
      title: 'Polerón Canguro Deportivo',
      desc: 'Algodón premium Chile',
      image: 'https://poleronesensantiago.pages.dev/images/poleron-canguro-algodon-hombre-deportivo-chile-premium.jpg',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Polerones Personalizados para Hombre en Santiago: Estilo y Calidad Superior
            </h1>
            <p className="text-lg text-muted-foreground">
              Si estás buscando polerones personalizados para hombre en Chile, has llegado al lugar indicado. En nuestra tienda en Santiago, nos especializamos en transformar una prenda básica en una pieza única que define tu personalidad.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p>
                El polerón hombre ya no es solo ropa deportiva; es una declaración de estilo urbano, comodidad y exclusividad. Trabajamos con los mejores materiales del mercado chileno, desde el clásico polerón de algodón hasta mezclas premium que garantizan durabilidad tras cada lavado.
              </p>
              <p>
                Entendemos que el público masculino en Santiago busca variedad. Por eso, ofrecemos desde el polerón con cierre hombre para un look versátil, hasta el polerón canguro hombre (hoodie) ideal para el invierno capitalino. Nuestra técnica de estampado de polerones utiliza tecnología de punta, asegurando que tu diseño no se agriete ni pierda color. Ya sea que busques un polerón negro hombre con un logo minimalista o un polerón blanco hombre con un diseño full color, aquí lo hacemos realidad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shirt className="h-6 w-6 text-primary" />
                Variedad de Estilos y Modelos de Polerones Masculinos
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  En nuestro catálogo enfocado al mercado de Santiago, no solo personalizamos; asesoramos. Contamos con una amplia gama de opciones:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  'Polerón oversize hombre: La tendencia urbana que domina las calles de Providencia y Las Condes.',
                  'Polerón polo hombre: Para un look más casual y semi-formal, ideal para oficinas con estilo relajado.',
                  'Polerón sin manga hombre: Perfecto para el gym y deportistas que buscan movilidad.',
                  'Polerón polar hombre y micropolar: Esenciales para las mañanas frías de la Región Metropolitana.',
                  'Polerón con gorro hombre: El clásico hoodie que nunca pasa de moda.',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                Además, si eres fanático de las marcas, nos inspiramos en los cortes más buscados como el polerón nike hombre, polerón adidas hombre, polerón puma hombre y el estilo resistente del polerón caterpillar mujer adaptado al calce masculino. Queremos que tu polerón personalizado tenga ese acabado de tienda de retail pero con tu sello propio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Técnicas de Personalización: Estampados y Bordados en Santiago
              </h2>
              <p className="text-muted-foreground mb-4">
                No todos los polerones estampados son iguales. En Polerones Personalizados 🟢, ofrecemos diversas técnicas según tu presupuesto y el diseño que desees:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'DTF (Direct to Film)', desc: 'Ideal para diseños complejos y llenos de color en tu polerón personalizado.' },
                  { title: 'Vinilo Textil', desc: 'Perfecto para números, nombres o logos sencillos de un solo color, muy usado en polerones deportivos.' },
                  { title: 'Serigrafía', desc: 'La opción más económica para pedidos al por mayor de empresas o grupos en Santiago.' },
                  { title: 'Polerones bordados', desc: 'Si buscas elegancia y una durabilidad eterna, el bordado computarizado es la mejor elección para tu polerón de marca.' },
                ].map((tech, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base">{tech.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tech.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Productos */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Nuestros Productos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-square bg-muted relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{product.desc}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: '¿Dónde puedo comprar polerones personalizados para hombre en Santiago?',
                    a: 'Puedes realizar tu pedido directamente en nuestra web. Realizamos entregas en puntos estratégicos de Santiago como estaciones de metro y envíos rápidos a comunas como Maipú, Puente Alto, La Florida y Santiago Centro. También enviamos a todas las regiones de Chile vía Starken o Chilexpress.',
                  },
                  {
                    q: '¿Qué tipos de telas utilizan para los polerones de hombre?',
                    a: 'Trabajamos principalmente con polerón de algodón nacional e importado, tela de franela reactiva (que no encoge) y opciones de polerón con chiporro hombre para máxima protección térmica. Para deportistas, contamos con telas dry-fit y poleras de compresión.',
                  },
                  {
                    q: '¿Puedo personalizar un polerón con mi propio diseño o marca?',
                    a: '¡Absolutamente! Somos expertos en polerones corporativos y ropa personalizada. Solo debes enviarnos tu logo o idea en alta resolución y nosotros nos encargamos del estampado express en Santiago. Es ideal para emprendimientos que buscan su propio merchandising.',
                  },
                  {
                    q: '¿Tienen tallas grandes para hombre?',
                    a: 'Sí, contamos con un stock que incluye desde la talla S hasta polerones XXL hombre y tallas especiales como polerones 3XL y 4XL, asegurando que todos encuentren el calce perfecto (slim fit o relax fit).',
                  },
                  {
                    q: '¿Cuál es el tiempo de entrega para un polerón personalizado?',
                    a: 'Para pedidos unitarios en Santiago, el tiempo promedio es de 2 a 4 días hábiles. Si necesitas polerones personalizados express, consulta por nuestra disponibilidad de entrega en 24 horas para diseños simples.',
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base font-semibold">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  ¿Listo para tu polerón personalizado?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Contáctanos hoy y transforma tu idea en una prenda única que durará años. En Santiago, somos tu mejor opción para polerones de calidad.
                </p>
                <Link href="/contacto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Links internos */}
            <div className="pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Otras categorías que podrían interesarte</h3>
              <div className="flex flex-wrap gap-2">
                {['Mujer', 'Anime', 'Marcas', 'Deportes', 'Corporativos'].map((cat) => (
                  <Link
                    key={cat}
                    href={`/polerones/personalizados/${cat.toLowerCase()}`}
                    className="px-4 py-2 bg-muted hover:bg-accent rounded-md text-sm transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
