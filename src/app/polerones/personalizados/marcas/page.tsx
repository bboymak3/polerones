import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Shirt, Zap, CheckCircle, MessageCircle, Mountain, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Polerones de Marcas Personalizados en Santiago | Estilo Premium',
  description: 'Polerones personalizados inspirados en marcas como Nike, Adidas, Tommy Hilfiger, North Face y más. Estilo premium en Santiago, Chile.',
  keywords: ['polerón nike', 'polerón adidas', 'polerón puma', 'polerón north face', 'polerón gap', 'polerón tommy hilfiger', 'polerón calvin klein'],
}

const styleCards = [
  {
    title: 'Línea Deportiva',
    description: 'Inspirados en el polerón Nike hombre y polerón Adidas original, ideales para el entrenamiento o un look deportivo casual.',
    icon: Zap,
    color: 'text-blue-600'
  },
  {
    title: 'Línea Outdoor',
    description: 'Modelos similares al polerón Lippi, polerón Columbia mujer y polerón Patagonia, con telas térmicas como el micropolar y el chiporro.',
    icon: Mountain,
    color: 'text-green-600'
  },
  {
    title: 'Línea Urbana Premium',
    description: 'Estilos basados en polerón Gap, polerón Calvin Klein y polerón Tommy, perfectos para pasear por el Mall Costanera Center o Parque Arauco.',
    icon: Award,
    color: 'text-purple-600'
  },
  {
    title: 'Marcas de Acción',
    description: 'Diseños potentes inspirados en polerón Caterpillar, polerón Fox y polerón DC shoes.',
    icon: Shirt,
    color: 'text-orange-600'
  },
]

const relatedCategories = [
  { name: 'Polerones Hombre', url: '/polerones/personalizados/hombre', desc: 'Estilos masculinos premium' },
  { name: 'Polerones Mujer', url: '/polerones/personalizados/mujer', desc: 'Diseños femeninos exclusivos' },
  { name: 'Polerones Deportes', url: '/polerones/personalizados/deportes', desc: 'Ropa deportiva personalizada' },
  { name: 'Polerones Corporativos', url: '/polerones/personalizados/corporativos', desc: 'Imagen profesional' },
]

export default function MarcasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Polerones de Marcas Personalizados
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Estilo premium en Santiago, Chile. Inspirados en las mejores firmas internacionales con la personalización que necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Cotizar Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Polerones de Marcas Personalizados en Santiago: Inspiración y Estilo Premium
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                En nuestra tienda, sabemos que el público de Santiago valora la estética de las grandes firmas internacionales. Por eso, hemos creado una sección dedicada a polerones de marcas personalizados, donde nos inspiramos en los cortes, colores y estilos más icónicos del mercado global. Ya sea que busques la comodidad de un polerón Nike o el diseño urbano de un polerón Adidas, aquí te ofrecemos alternativas personalizadas con materiales de primera calidad que compiten con cualquier tienda de retail en Chile.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                El polerón hombre de marca y el polerón mujer de marca son esenciales para cualquier clóset en Santiago. Nuestra tienda ofrece polerones fabricados en algodón premium y franela reactiva, asegurando que recibas una prenda que se siente y se ve costosa. Desde el clásico polerón Tommy Hilfiger hasta el estilo aventurero del polerón North Face, adaptamos las tendencias a tus necesidades de personalización, ya sea agregando tu nombre, un logo corporativo o un detalle único.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8 text-foreground">
                Los Estilos más Buscados en Santiago
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Contamos con una amplia gama de modelos que siguen los patrones de las marcas líderes:
              </p>
            </div>

            {/* Style Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {styleCards.map((style, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <style.icon className={`h-10 w-10 ${style.color} mb-2`} />
                    <CardTitle>{style.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {style.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Para los que buscan exclusividad, realizamos polerones bordados personalizados con acabados que imitan la alta costura, permitiéndote tener una prenda con "look de marca" pero con tu propia identidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Preguntas Frecuentes sobre Polerones de Marca (FAQ)
              </h2>
              <p className="text-muted-foreground">
                Resolvemos tus dudas sobre nuestros polerones personalizados inspirados en las mejores marcas
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Venden polerones de marca originales o personalizados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Nos especializamos en polerones personalizados inspirados en las tendencias y calces de las mejores marcas. Utilizamos bases de polerones de alta calidad (100% algodón o mezclas premium) y les aplicamos estampados personalizados o bordados según tu requerimiento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Tienen modelos de polerón Nike o Adidas con cierre?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Sí, disponemos de polerón con cierre hombre y polerón con cierre mujer en colores clásicos como negro, gris melange y azul marino, siguiendo los estándares estéticos de marcas como Nike, Adidas y Puma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Hacen envíos de polerones de marca a regiones?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  ¡Por supuesto! Enviamos desde nuestra central en Santiago a todo Chile. Si buscas un polerón North Face o Columbia personalizado para tu próximo viaje al sur, te lo enviamos de forma rápida y segura.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                ¿Por qué elegir nuestros polerones de marca?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Materiales premium que emulan la calidad de las grandes marcas',
                'Diseños personalizados que respetan los códigos estéticos de cada firma',
                'Precios accesibles sin sacrificar la calidad del producto',
                'Entregas rápidas en Santiago y envíos a todo Chile',
                'Bordados y estampados de alta resolución y durabilidad',
                'Asesoría personalizada para elegir el estilo perfecto',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para tu polerón con estilo de marca?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contáctanos hoy y crea tu polerón personalizado con el look de las mejores firmas, pero con tu propia identidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="text-lg">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://wa.me/56940349957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Otras Categorías que te pueden interesar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora más opciones de polerones personalizados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {relatedCategories.map((cat, index) => (
              <Link key={index} href={cat.url}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors text-lg">
                      {cat.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{cat.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
