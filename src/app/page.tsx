import Link from 'next/link'
import { ArrowRight, Shirt, Star, Truck, Zap, Heart, Award, Clock, CheckCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const categories = [
  {
    name: 'Hombre',
    url: '/polerones/personalizados/hombre',
    desc: 'Descubre nuestra colección de polerones para hombre con estilos como el clásico polerón canguro, el deportivo con cierre y diseños inspirados en marcas como Nike y Adidas.',
    keywords: 'polerones hombre, polerón nike, polerón adidas, sudaderas',
    icon: Shirt
  },
  {
    name: 'Mujer',
    url: '/polerones/personalizados/mujer',
    desc: 'Polerones femeninos de tendencia desde el oversize hasta el crop top, disponibles en rosa y otros colores. Estilos inspirados en las colecciones más virales.',
    keywords: 'polerón mujer, polerón rosa, polerones shein, sudaderas',
    icon: Heart
  },
  {
    name: 'Anime',
    url: '/polerones/personalizados/anime',
    desc: 'Tu pasión otaku se hace realidad con polerones de Naruto, Dragon Ball, Akatsuki y más. Diseños exclusivos que no encontrarás en el retail.',
    keywords: 'poleras anime, polerón naruto, polerón dragon ball, akatsuki',
    icon: Star
  },
  {
    name: 'Marcas',
    url: '/polerones/personalizados/marcas',
    desc: 'Estampados inspirados en las mejores marcas como Nike, Adidas, Puma y North Face. Personaliza tu prenda con el estilo de tu marca favorita.',
    keywords: 'polerón nike, polerón adidas, polerón puma, north face',
    icon: Award
  },
  {
    name: 'Parejas',
    url: '/polerones/personalizados/parejas',
    desc: 'Sets coordinados para enamorados con diseños King & Queen, frases románticas y estampados que celebran el amor. Perfectos para aniversarios y 14 de febrero.',
    keywords: 'polerones parejas, king queen, poleras enamorados, 14 febrero',
    icon: Heart
  },
  {
    name: 'San Valentín',
    url: '/polerones/personalizados/san-valentin',
    desc: 'El regalo más original para el 14 de febrero. Polerones con iniciales, fechas especiales y diseños de amor que durarán para siempre.',
    keywords: 'regalos san valentín, poleras amor, aniversario, pareja',
    icon: Heart
  },
  {
    name: 'Familia',
    url: '/polerones/personalizados/familia',
    desc: 'Unan a todo el clan con polerones estampados para madre e hija, padre e hijo, y generacionales completas. Crean recuerdos inolvidables juntos.',
    keywords: 'polerones familia, madre hija, padre hijo, generacional',
    icon: Heart
  },
  {
    name: 'Cumpleaños',
    url: '/polerones/personalizados/cumpleaños',
    desc: 'Celebra con un polerón único. Desde diseños temáticos de anime hasta frases épicas para 18, 30, 40 o 50 años. El regalo perfecto para cualquier edad.',
    keywords: 'poleras cumpleaños, regalos personalizados, fiesta, diseño',
    icon: Star
  },
  {
    name: 'Deportes',
    url: '/polerones/personalizados/deportes',
    desc: 'Ropa deportiva personalizada para equipos, gym y running. Poleras dry fit, polerones térmicos y diseños para fútbol, básquetbol y más disciplinas.',
    keywords: 'polerón deportivo, dry fit, fútbol, gym, running',
    icon: Zap
  },
  {
    name: 'Escolares',
    url: '/polerones/personalizados/escolares',
    desc: 'Polerones generacionales para 4to medio, 8vo básico y kindergarten. Diseña la identidad de tu curso con bordados y estampados de alta calidad.',
    keywords: 'polerones 4to medio, generacional, colegio, 2026',
    icon: Award
  },
  {
    name: 'Corporativos',
    url: '/polerones/personalizados/corporativos',
    desc: 'Uniformes profesionales y polerones con logo para empresas. Desde bordados elegantes hasta estampados modernos, proyecta una imagen profesional.',
    keywords: 'polerones corporativos, empresa, uniformes, bordado',
    icon: Award
  },
  {
    name: 'Especiales',
    url: '/polerones/personalizados/especiales',
    desc: 'Ofertas exclusivas y servicios express. Encuentra polerones baratos de calidad, promociones temporales y entregas rápidas en 24 horas.',
    keywords: 'polerones baratos, ofertas, express, promociones',
    icon: Zap
  },
]

const products = [
  // 🧔 Caballero (3 Nombres)
  {
    title: 'Polerón Hombre Personalizado',
    desc: 'Estampado urbano en Santiago',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-hombre-personalizado-estampado-santiago-urbano.jpg',
    category: 'Caballero'
  },
  {
    title: 'Sudadera Caballero con Gorro',
    desc: 'Diseño exclusivo San Joaquín',
    image: 'https://poleronesensantiago.pages.dev/images/sudadera-caballero-negra-con-gorro-san-joaquin-exclusive.jpg',
    category: 'Caballero'
  },
  {
    title: 'Polerón Canguro Deportivo',
    desc: 'Algodón premium Chile',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-canguro-algodon-hombre-deportivo-chile-premium.jpg',
    category: 'Caballero'
  },
  // 👩 Dama (3 Nombres)
  {
    title: 'Polerón Mujer Personalizado',
    desc: 'Crop top fashion Santiago',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-mujer-personalizado-crop-top-santiago-fashion.jpg',
    category: 'Dama'
  },
  {
    title: 'Sudadera Dama Rosada',
    desc: 'Estilo trendy con cierre',
    image: 'https://poleronesensantiago.pages.dev/images/sudadera-dama-rosada-con-cierre-san-joaquin-trendy.jpg',
    category: 'Dama'
  },
  {
    title: 'Polerón Oversize Mujer',
    desc: 'Algodón estampado style',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-oversize-mujer-algodon-estampado-chile-style.jpg',
    category: 'Dama'
  },
  // 💑 Parejas (3 Nombres)
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
  // 🎁 Variados / Otros (3 Nombres)
  {
    title: 'Polerón Anime Naruto',
    desc: 'Otaku Santiago geek',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-anime-naruto-personalizado-otaku-santiago-geek.jpg',
    category: 'Anime'
  },
  {
    title: 'Polerón Corporativo',
    desc: 'Empresa bordado San Joaquín',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-corporativo-empresa-bordado-san-joaquin-work.jpg',
    category: 'Corporativo'
  },
  {
    title: 'Polerón 4to Medio',
    desc: 'Generación 2026 escolar',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-4to-medio-generacion-2026-escolar-chile-class.jpg',
    category: 'Escolar'
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section con Banner */}
      <section className="relative">
        {/* Banner Image */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <img
            src="https://poleronesensantiago.pages.dev/images/banner-tienda-polerones-personalizados-chile-disenos-exclusivos.jpg"
            alt="Polerones Personalizados en Santiago Chile - Diseños Exclusivos"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/20"></div>

          {/* Contenido sobre el banner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
                  Polerones Personalizados en{' '}
                  <span className="text-primary-foreground">Santiago, Chile</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 drop-shadow">
                  Expertos en transformar tus ideas en prendas únicas con estampados y bordados de alta calidad.
                  En San Joaquín creamos polerones que cuentan tu historia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/contacto">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                      Cotizar Ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/polerones/personalizados/hombre">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      Ver Catálogo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors">Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Entregas rápidas en Santiago. Pedidos listos en 24-48 horas para diseños simples.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors">Calidad Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Telas de algodón de alta gama y estampados que resisten el paso del tiempo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors">Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Desde nuestra base en Santiago enviamos a todas las regiones del país.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors">Diseños Únicos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Personalización total. Tu logo, tu foto, tu idea la hacemos realidad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Nuestras Categorías
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra amplia variedad de polerones personalizados para cada ocasión y necesidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.url} href={cat.url}>
                <Card className="h-full hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 cursor-pointer group border-2 border-gray-100 hover:border-red-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <cat.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                      {cat.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed min-h-[80px] flex items-center">
                      {cat.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Algunos de nuestros diseños más populares en Santiago.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border-2 border-gray-100 hover:border-red-500">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {product.category}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/polerones/personalizados/hombre">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-lg text-gray-600">
                Somos líderes en Santiago en la creación de polerones personalizados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, text: 'Más de 10 años de experiencia en estampado y bordado textil' },
                { icon: MapPin, text: 'Ubicación estratégica en San Joaquín para entregas rápidas en Santiago' },
                { icon: Zap, text: 'Tecnología de vanguardia: DTF, vinilo textil, serigrafía y bordado' },
                { icon: Award, text: 'Atención personalizada para particulares, empresas y colegios' },
                { icon: Star, text: 'Precios competitivos sin sacrificar la calidad de los materiales' },
                { icon: Shirt, text: 'Stock variado en tallas desde XS hasta XXL y tallas especiales' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTR2LTJoLTR2LTJoLTR2LTJoLTJ2LTJoLTR2LTJoLTJ2LTJoLTJ2LTJoLTR2LTJoLTJ2LTJoLTR2LTJoLTR2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            ¿Listo para crear tu polerón personalizado?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 drop-shadow">
            Contáctanos hoy y transforma tu idea en una prenda única que durará años.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="text-lg bg-white text-red-700 hover:bg-gray-100 shadow-2xl hover:shadow-white/20 transition-all duration-300 px-8 py-6">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Info adicional */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tiempos de Entrega</h3>
              <p className="text-gray-600">
                Pedidos estándar en 2-4 días hábiles. Servicio express disponible en San Joaquín.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Envíos Nacionales</h3>
              <p className="text-gray-600">
                Despachamos a todo Chile vía Starken y Chilexpress con seguimiento en tiempo real.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Garantía de Calidad</h3>
              <p className="text-gray-600">
                Revisión rigurosa de cada prenda antes de la entrega. Tu satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
