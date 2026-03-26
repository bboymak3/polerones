import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: "Polerones Personalizados para Mujer en Santiago, Chile",
  description: "Polerones personalizados para mujer en Santiago. Polerón rosa, oversize, corderito, con cierre y más. Estilos inspirados en marcas como shein, nike, adidas.",
  keywords: ["polerón mujer", "polerón rosa mujer", "polerones shein mujer", "sudaderas para mujer", "polerón corto mujer", "polerón corderito mujer"],
}

export default function MujerPage() {
  const products = [
    {
      title: 'Polerón Mujer Personalizado',
      desc: 'Crop top fashion Santiago',
      image: 'https://poleronesensantiago.pages.dev/images/poleron-mujer-personalizado-crop-top-santiago-fashion.jpg',
    },
    {
      title: 'Sudadera Dama Rosada',
      desc: 'Estilo trendy con cierre',
      image: 'https://poleronesensantiago.pages.dev/images/sudadera-dama-rosada-con-cierre-san-joaquin-trendy.jpg',
    },
    {
      title: 'Polerón Oversize Mujer',
      desc: 'Algodón estampado style',
      image: 'https://poleronesensantiago.pages.dev/images/poleron-oversize-mujer-algodon-estampado-chile-style.jpg',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Polerones Personalizados para Mujer en Santiago: Comodidad, Moda y Estilo Único
            </h1>
            <p className="text-lg text-muted-foreground">
              Si buscas polerones personalizados para mujer que combinen las últimas tendencias con una calidad excepcional, tenemos lo que necesitas.
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
                En el dinámico mercado de Santiago de Chile, el polerón mujer ha pasado de ser una prenda básica de casa a una pieza fundamental del streetwear y el estilo casual diario. Nuestra tienda se especializa en ofrecer polerones que no solo abrigan, sino que proyectan tu personalidad a través de estampados personalizados de alta definición y bordados premium.
              </p>
              <p>
                Entendemos que las mujeres en Santiago buscan cortes que favorezcan su figura y materiales suaves al tacto. Por ello, nuestra colección incluye desde el clásico polerón con cierre mujer, ideal para el clima variable de la Región Metropolitana, hasta el moderno polerón corto mujer (crop top) que es tendencia en redes sociales. Cada polerón personalizado es fabricado con telas de alta gama, como el polerón de algodón peruano y mezclas de poliéster que aseguran que tu prenda mantenga su forma y color tras muchos lavados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Estilos y Tendencias en Polerones Femeninos
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  En nuestra tienda en Santiago, ofrecemos una variedad inigualable de modelos adaptados a cada gusto:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  'Polerón Oversize Mujer: El corte holgado que domina el estilo urbano en comunas como Providencia y Ñuñoa.',
                  'Polerón Corderito Mujer y Chiporro: La opción favorita para enfrentar el invierno santiaguino con máxima calidez y suavidad.',
                  'Polerón con Gorro Mujer (Hoodie): Un esencial para un look relajado, disponible en una amplia paleta de colores, desde el polerón rosa mujer hasta tonos neutros.',
                  'Polerón sin Gorro Mujer: Perfecto para un estilo más minimalista o para combinar con chaquetas de mezclilla.',
                  'Polerón Micropolar Mujer: Ligero y funcional, ideal para actividades al aire libre o como capa térmica.',
                  'Polerón con Cierre y Capucha: Versatilidad total para el día a día en la capital.',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                Nos inspiramos en los calces más buscados de grandes marcas para ofrecerte opciones similares al polerón nike mujer, polerón adidas mujer, polerón tommy hilfiger mujer y los estilos virales de polerones shein mujer, pero con la ventaja de la personalización total y entrega inmediata en Chile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Personalización Premium: Tu Diseño, Tu Regla
              </h2>
              <p className="text-muted-foreground mb-4">
                En nuestra tienda, utilizamos tecnología de vanguardia para que tu polerón estampado sea una obra de arte:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'DTF Textil', desc: 'Logramos colores vibrantes y detalles minuciosos en diseños complejos sobre cualquier color de tela.' },
                  { title: 'Bordado Computarizado', desc: 'Ideal para logos pequeños, iniciales o diseños elegantes en un polerón de marca.' },
                  { title: 'Vinilo Glitter y Metalizado', desc: 'Añade brillo y textura a tus prendas, una opción muy popular para polerones de despedida de soltera o grupos de amigas en Santiago.' },
                  { title: 'Impresión Digital Directa', desc: 'Máxima transpirabilidad para tus diseños en polerones de algodón blanco o colores claros.' },
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
                    q: '¿Dónde puedo mandar a hacer polerones personalizados para mujer en Santiago?',
                    a: 'Puedes realizar todo el proceso de diseño y compra en nuestra plataforma. Ofrecemos entregas personales en Santiago Centro y envíos a domicilio en comunas como Las Condes, La Florida, Maipú y Vitacura. También realizamos envíos express a todas las regiones de Chile.',
                  },
                  {
                    q: '¿Tienen tallas especiales o polerones XXL mujer?',
                    a: 'Sí, contamos con un tallaje inclusivo que abarca desde la XS hasta polerones mujer grandes (XXL y XXXL). Además, ofrecemos modelos con calce oversize que proporcionan esa amplitud buscada sin perder el estilo.',
                  },
                  {
                    q: '¿Qué materiales son mejores para el invierno en Chile?',
                    a: 'Para las bajas temperaturas de Santiago, recomendamos el polerón con chiporro mujer o el polerón de polar grueso. Si buscas algo para media estación, el polerón de franela de algodón es la opción más equilibrada y cómoda.',
                  },
                  {
                    q: '¿Puedo personalizar polerones para grupos o empresas?',
                    a: '¡Por supuesto! Somos especialistas en poleras institucionales y polerones corporativos para mujeres. Ofrecemos precios por mayor en Santiago para emprendimientos, gimnasios, colegios y eventos especiales.',
                  },
                  {
                    q: '¿Cómo cuido mi polerón estampado para que dure más?',
                    a: 'Recomendamos lavar la prenda al revés con agua fría y evitar el uso de secadora directa sobre el estampado. Así, tu polerón personalizado se mantendrá como nuevo por mucho tiempo.',
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
                  <Heart className="h-6 w-6" />
                  ¿Lista para tu polerón personalizado?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Contáctanos hoy y transforma tu idea en una prenda única que durará años. En Santiago, somos tu mejor opción para polerones de calidad para mujer.
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
                {['Hombre', 'Parejas', 'San Valentín', 'Familia', 'Cumpleaños'].map((cat) => (
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
