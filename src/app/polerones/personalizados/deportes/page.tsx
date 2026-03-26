import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Trophy, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Package, 
  CheckCircle,
  Dumbbell,
  Shirt,
  Users,
  Star,
  MapPin,
  ArrowRight,
  Target,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Polerones Deportivos en Santiago, Chile | Ropa Gym Personalizada",
  description: "Polerones deportivos personalizados en Santiago. Ropa gym, poleras de fútbol, polerones Nike y Adidas. Estampados para equipos y clubes en San Joaquín.",
  keywords: ["polerón deportivo hombre", "polerón nike dri fit", "polera deportiva mujer", "poleras de fútbol personalizadas", "ropa gym personalizada"],
}

const products = [
  {
    title: 'Polerón Canguro Deportivo',
    desc: 'Algodón premium Chile',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-canguro-algodon-hombre-deportivo-chile-premium.jpg',
  },
]

export default function DeportesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-medium">Equipos y Deportistas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Polerones Deportivos en Santiago
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Ropa gym personalizada para equipos, clubes y deportistas en San Joaquín
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <a href="/contacto">
                Cotizar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Productos Destacados */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-6 h-6 text-yellow-500" />
          <h2 className="text-3xl font-bold text-slate-800">Productos Destacados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.title}</h3>
                <p className="text-slate-600">{product.desc}</p>
              </CardContent>
            </Card>
          ))}
          
          {/* Cards informativas como productos */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-green-300">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Para Equipos</h3>
              <p className="text-slate-600 text-center text-sm">Descuentos por mayor a partir de 10 unidades para clubes y ligas</p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Tecnología Dry Fit</h3>
              <p className="text-slate-600 text-center text-sm">Rápido secado para entrenamientos de alta intensidad</p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Calidad Premium</h3>
              <p className="text-slate-600 text-center text-sm">Materiales resistentes que soportan el entrenamiento más exigente</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">Estampado Express</h4>
              <p className="text-sm text-slate-600">Listo en tiempo récord</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">Envíos a Todo Chile</h4>
              <p className="text-sm text-slate-600">Rápido y seguro</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">En San Joaquín</h4>
              <p className="text-sm text-slate-600">El Manzanito 2551</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">Garantía de Calidad</h4>
              <p className="text-sm text-slate-600">100% satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Polerones Deportivos en Santiago: Rendimiento y Estilo en San Joaquín
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Para quienes viven el deporte con intensidad, la indumentaria es clave. En Polerones Personalizados 🟢, ubicados en El Manzanito 2551, San Joaquín, nos especializamos en la creación de polerones deportivos que combinan tecnología textil con diseños exclusivos. Ya sea que necesites equipar a tu equipo de fútbol, tu club de running o simplemente busques un polerón personalizado para ir al gym en Santiago, nuestra tienda ofrece soluciones de alta durabilidad que resisten el entrenamiento más exigente. En el corazón de la Región Metropolitana, somos el aliado estratégico para deportistas que buscan identidad y calidad.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Entendemos que el clima de Santiago exige prendas versátiles. Por eso, nuestra línea deportiva incluye desde el polerón running ligero hasta el polerón de entrenamiento térmico para los meses de invierno. Trabajamos con materiales de alto estándar, ofreciendo calces inspirados en el polerón Nike dri-fit y el polerón Adidas original, pero con la libertad de una personalización total. En San Joaquín, transformamos tu logo o escudo en un estampado de poleras profesional, utilizando tintas y materiales que permiten la transpiración y mantienen la flexibilidad de la prenda.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
            Equipamiento para Equipos y Clubes Deportivos en Santiago
          </h3>

          <p className="text-slate-700 leading-relaxed">
            En nuestra sucursal de El Manzanito 2551, ofrecemos una gama completa de productos para todas las disciplinas:
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 my-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <strong className="text-slate-800">Poleras de Fútbol Personalizadas:</strong> Estampamos nombres, números y auspiciadores con vinilo de alta resistencia, ideal para ligas en Santiago.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <strong className="text-slate-800">Polerones de Equipos:</strong> Diseños para clubes de básquetbol, vóleibol y padel, disponibles en polerón azul marino, negro y colores institucionales.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <strong className="text-slate-800">Ropa Gym Personalizada:</strong> Desde la polera musculosa hombre hasta el top deportivo mujer, todo con tu marca personal o logo del gimnasio.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <strong className="text-slate-800">Poleras Dry Fit:</strong> La tecnología de secado rápido esencial para maratones y entrenamientos de alta intensidad en la capital.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <strong className="text-slate-800">Polerones de Marcas Deportivas:</strong> Trabajamos con bases tipo polerón Puma, polerón Jordan hombre y polerón Under Armour para un look profesional.
                </div>
              </li>
            </ul>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Cada polerón hombre y polerón mujer deportivo es diseñado pensando en la movilidad. Si buscas polerones baratos pero que no se deterioren con el sudor o el roce, nuestra tienda en San Joaquín es tu mejor opción en Santiago.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
            Tecnología Textil para Deportistas en San Joaquín
          </h3>

          <p className="text-slate-700 leading-relaxed">
            En Polerones Personalizados 🟢, aplicamos las mejores técnicas de Santiago para asegurar la funcionalidad:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <strong className="text-slate-800">Vinilo Textil Especial para Elástico</strong>
              </div>
              <p className="text-slate-600 text-sm">Ideal para poleras de compresión y calzas, asegurando que el diseño no se rompa al estirarse.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Shirt className="w-5 h-5 text-blue-500" />
                <strong className="text-slate-800">Sublimación Full Print</strong>
              </div>
              <p className="text-slate-600 text-sm">Para diseños complejos en telas de poliéster que requieren colores vibrantes en toda la prenda.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-purple-500" />
                <strong className="text-slate-800">Bordado de Escudos</strong>
              </div>
              <p className="text-slate-600 text-sm">Dale un toque de distinción a tu club con escudos bordados de alta definición en tu polerón personalizado.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-green-500" />
                <strong className="text-slate-800">Descuentos por Equipos</strong>
              </div>
              <p className="text-slate-600 text-sm">Ofrecemos precios de poleras por mayor en Santiago para clubes, colegios y ligas deportivas a partir de 10 unidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Dumbbell className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Preguntas Frecuentes sobre Ropa Deportiva Personalizada (FAQ)
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-800 mb-2">
                    ¿Dónde puedo estampar camisetas de fútbol en Santiago?
                  </h3>
                  <p className="text-slate-700">
                    Te esperamos en nuestro taller en El Manzanito 2551, San Joaquín. Realizamos estampado de poleras express para equipos que necesitan su indumentaria rápido. También hacemos envíos a todas las comunas de Santiago y regiones de Chile.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-800 mb-2">
                    ¿Qué tipo de tela es mejor para hacer deporte en invierno?
                  </h3>
                  <p className="text-slate-700">
                    Recomendamos el polerón de polar liviano o el micropolar. Son materiales que mantienen el calor corporal sin ser pesados, ideales para entrenar al aire libre en Santiago durante el invierno.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-800 mb-2">
                    ¿Pueden personalizar polerones con el logo de mi gimnasio o box de Crossfit?
                  </h3>
                  <p className="text-slate-700">
                    ¡Claro que sí! Somos expertos en polerones corporativos y deportivos. Podemos estampar tu logo en el pecho, espalda o mangas de un polerón con gorro o polerón con cierre para que tus alumnos luzcan la marca del box.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-800 mb-2">
                    ¿Tienen tallas grandes para deportistas?
                  </h3>
                  <p className="text-slate-700">
                    Sí, contamos con stock desde la talla S hasta polerones XXL hombre y tallas especiales. También ofrecemos modelos slim fit que se ajustan mejor al cuerpo para actividades como el ciclismo o el running.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-800 mb-2">
                    ¿Hacen envíos express para eventos deportivos en regiones?
                  </h3>
                  <p className="text-slate-700">
                    ¡Por supuesto! Si tienes un torneo fuera de Santiago, coordinamos el envío de tus polerones personalizados vía Starken o Chilexpress para que lleguen a tiempo a cualquier punto de Chile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Equipar a tu Equipo?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y obtén la mejor ropa deportiva personalizada en Santiago
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <a href="/contacto">
              Solicitar Cotización
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300">El Manzanito 2551, San Joaquín, Santiago</span>
            </div>
            <div className="flex gap-4 text-sm text-slate-400">
              <a href="/polerones/personalizados" className="hover:text-white transition-colors">Categorías</a>
              <a href="/contacto" className="hover:text-white transition-colors">Contacto</a>
              <a href="/" className="hover:text-white transition-colors">Inicio</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
