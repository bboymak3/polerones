import Link from 'next/link'
import { ArrowRight, Star, Shield, Heart, Palette, Sparkles, Award, Shirt, MessageCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: "Polerones de Anime en Santiago, Chile | Diseños Otaku",
  description: "Polerones de anime personalizados en Santiago. Naruto, Dragon Ball, One Piece, Demon Slayer y más. Diseños exclusivos para fans otaku en Chile.",
  keywords: ["poleras anime", "polerones anime", "polerón naruto", "polerón dragon ball", "polerón akatsuki", "polerón nezuko", "polerón de gengar"],
}

const designs = [
  {
    title: "Polerón Akatsuki",
    description: "El diseño más buscado, disponible con nubes bordadas o estampadas en alta definición.",
    icon: CloudIcon
  },
  {
    title: "Polerón de Gengar y Pokémon",
    description: "Estilo retro y moderno para los entrenadores de Santiago.",
    icon: Sparkles
  },
  {
    title: "Polerón Nezuko y Demon Slayer",
    description: "Diseños vibrantes de Kimetsu no Yaiba con detalles en las mangas.",
    icon: Heart
  },
  {
    title: "Polerón Hunter x Hunter y Shingeki no Kyojin",
    description: "Para los fans del contenido más intenso y detallado.",
    icon: Award
  },
  {
    title: "Poleras Anime",
    description: "Si prefieres algo más ligero, nuestras poleras estampadas de anime son perfectas para el verano santiaguino.",
    icon: Shirt
  },
  {
    title: "Polerones Bordados de Anime",
    description: "Acabado de lujo y eterno para tus personajes favoritos.",
    icon: Palette
  },
]

const features = [
  {
    icon: Shield,
    title: "Tecnología DTF Textil",
    description: "Colores que resaltan, capturando cada sombra y línea del dibujo original"
  },
  {
    icon: Star,
    title: "Diseños Exclusivos",
    description: "Clásicos y estrenos recientes que no encontrarás en el retail"
  },
  {
    icon: Palette,
    title: "Estampado Duradero",
    description: "Técnicas profesionales que resisten lavado tras lavado"
  },
  {
    icon: Heart,
    title: "Hecho en Chile",
    description: "Creados con pasión en el corazón de Santiago"
  },
]

const otherCategories = [
  { name: 'Hombre', url: '/polerones/personalizados/hombre' },
  { name: 'Mujer', url: '/polerones/personalizados/mujer' },
  { name: 'Parejas', url: '/polerones/personalizados/parejas' },
  { name: 'Marcas', url: '/polerones/personalizados/marcas' },
]

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3-1.3-3-3s1.3-3 3-3c0-2.8 2.2-5 5-5 1.7 0 3.3.9 4.3 2.3 1-.9 2.3-1.3 3.7-1.3 3 0 5.5 2.5 5.5 5.5 0 3-2.5 5.5-5.5 5.5z" />
    </svg>
  )
}

export default function AnimePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900/20 via-background to-red-900/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Colección Otaku Exclusiva
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Polerones de Anime en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">
                Santiago, Chile
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Diseños Otaku exclusivos: Naruto, Dragon Ball, One Piece, Demon Slayer y más.
              Transforma tu pasión por el anime en un polerón único.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Solicitar Mi Polerón Anime
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#faq">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Preguntas Frecuentes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://poleronesensantiago.pages.dev/images/poleron-anime-naruto-personalizado-otaku-santiago-geek.jpg"
                alt="Polerón de anime personalizado Naruto estilo otaku en Santiago"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Polerones de anime personalizados en Santiago</p>
                <p className="text-white/80 text-sm">Calidad premium para verdaderos fans otaku</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Polerones de Anime en Santiago: Tu Pasión Otaku con Calidad Premium
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Si eres un verdadero fanático de la cultura japonesa y buscas polerones de anime en Santiago, has llegado al paraíso otaku. En nuestra tienda nos especializamos en la creación de polerones personalizados de anime con diseños que no encontrarás en el retail convencional. El polerón anime es hoy una pieza de culto en Chile, y nosotros elevamos el estándar utilizando telas de alta gama y técnicas de estampado de polerones que resisten el paso del tiempo, tal como el espíritu de tus héroes favoritos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              En el corazón de la Región Metropolitana, ofrecemos una colección que abarca desde los clásicos hasta los estrenos más recientes. ¿Buscas un polerón de Naruto con el sello de la aldea de la hoja? ¿O quizás un polerón de Dragon Ball Z con un diseño minimalista de Goku o Vegeta? Aquí lo hacemos realidad. Trabajamos con polerones con gorro y modelos de polerón oversize para lograr ese look urbano y cómodo que tanto gusta en eventos como la Comic Con Chile o la Anime Expo Santiago.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              Diseños Exclusivos: De Akatsuki a One Piece
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nuestra variedad de diseños está pensada para cubrir todos los gustos de la comunidad en Chile:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Polerón Akatsuki:</strong> El diseño más buscado, disponible con nubes bordadas o estampadas en alta definición.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Polerón de Gengar y Pokémon:</strong> Estilo retro y moderno para los entrenadores de Santiago.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Polerón Nezuko y Demon Slayer:</strong> Diseños vibrantes de Kimetsu no Yaiba con detalles en las mangas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Polerón Hunter x Hunter y Shingeki no Kyojin:</strong> Para los fans del contenido más intenso y detallado.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Poleras Anime:</strong> Si prefieres algo más ligero, nuestras poleras estampadas de anime son perfectas para el verano santiaguino.</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Utilizamos tecnología DTF textil para lograr que el arte de tu polerón personalizado tenga colores que resaltan, capturando cada sombra y línea del dibujo original. Además, ofrecemos la opción de polerones bordados de anime para un acabado de lujo y eterno.
            </p>
          </div>
        </div>
      </section>

      {/* Design Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Diseños de Anime
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una colección curada para los verdaderos fans de la cultura otaku en Chile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {designs.map((design, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <design.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {design.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {design.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir nuestros polerones de anime?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Calidad premium y diseños exclusivos para la comunidad otaku de Santiago
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preguntas Frecuentes sobre Ropa de Anime (FAQ)
              </h2>
              <p className="text-muted-foreground">
                Todo lo que necesitas saber sobre nuestros polerones otaku en Santiago
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <MessageCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span>¿Hacen diseños de anime personalizados a pedido en Santiago?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ¡Sí! Si tienes una imagen favorita de un manga o una escena épica, podemos crear tu polerón personalizado único. Solo envíanos el diseño y nosotros aplicamos la mejor técnica de impresión de poleras en Santiago.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <MessageCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span>¿Qué tallas tienen disponibles para los polerones otaku?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contamos con stock completo desde la talla 12 para niños hasta polerones XXL hombre y tallas mujer. También tenemos el popular maxipoleron para un estilo extra holgado.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <MessageCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span>¿El estampado se sale con los lavados?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Para nada. Usamos técnicas profesionales de estampados de poleras que garantizan que tu polerón de One Piece o Dragon Ball mantenga su intensidad de color lavado tras lavado, siempre que sigas nuestras instrucciones de cuidado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para mostrar tu pasión otaku?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contáctanos hoy y crea tu polerón de anime personalizado en Santiago. Naruto, Dragon Ball, One Piece y más esperan por ti.
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="secondary" className="text-lg bg-white text-purple-900 hover:bg-gray-100">
              Solicitar Mi Polerón de Anime
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explora Otras Categorías
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre más diseños personalizados para cada estilo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherCategories.map((cat) => (
              <Link key={cat.url} href={cat.url}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group text-center">
                  <CardContent className="pt-6">
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {cat.name}
                    </p>
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
