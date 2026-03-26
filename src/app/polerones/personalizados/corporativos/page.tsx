import Link from 'next/link'
import { ArrowRight, Award, Building2, CheckCircle, Clock, MapPin, Shirt, Truck, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Polerones Corporativos en Santiago, Chile | Ropa de Trabajo Personalizada",
  description: "Polerones corporativos personalizados en Santiago. Poleras para empresas, ropa de trabajo, uniformes institucionales y merchandising. Bordados y estampados en San Joaquín.",
  keywords: ["polerones corporativos", "poleras institucionales", "ropa de trabajo personalizada", "poleras para empresas", "poleras corporativas bordadas"],
}

const products = [
  {
    title: 'Polerón Corporativo con Logo',
    desc: 'Empresa bordado San Joaquín',
    image: 'https://poleronesensantiago.pages.dev/images/poleron-corporativo-empresa-bordado-san-joaquin-work.jpg',
  },
]

export default function CorporativosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-4">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Imagen Profesional para Empresas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Polerones Corporativos en{' '}
              <span className="text-blue-200">Santiago, Chile</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Ropa de trabajo personalizada y uniformes institucionales en San Joaquín. 
              Bordados de alta precisión y estampados duraderos para tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50">
                  Cotizar para Empresa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#productos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Ver Opciones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Productos Corporativos Destacados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones de vestuario laboral para empresas en Santiago y todo Chile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Atención Corporativa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Asesoría especializada para empresas de todos los tamaños en Santiago.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Bordado Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Máquinas computarizadas para logos institucionales de máxima elegancia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Truck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Envíos a Regionales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Despachos corporativos a todas las sucursales de tu empresa en Chile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Descuentos por Volumen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Precios especiales para pedidos de polerones por mayor a partir de 12 unidades.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Polerones Corporativos en Santiago: Imagen y Profesionalismo en San Joaquín
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              La imagen de tu empresa comienza con la presencia de tu equipo. En Polerones Personalizados 🟢, ubicados en El Manzanito 2551, San Joaquín, nos especializamos en la fabricación y personalización de polerones corporativos de alto estándar. Entendemos que el vestuario laboral en Santiago no solo debe ser funcional, sino también representar fielmente los valores de tu marca. Por ello, ofrecemos soluciones de ropa corporativa que combinan comodidad, resistencia y un acabado estético superior, posicionándonos como el proveedor de confianza para empresas en toda la Región Metropolitana y Chile.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              En nuestra tienda de San Joaquín, trabajamos con una amplia gama de materiales, desde el clásico polerón de algodón hasta telas técnicas diseñadas para el trabajo rudo o la oficina. Ya sea que busques poleras para empresas con un estampado moderno o un polerón institucional con bordado de alta precisión, contamos con la tecnología de punta necesaria para cumplir con tus expectativas de branding. No entregamos solo uniformes; entregamos identidad corporativa que destaca en ferias, eventos, puntos de venta y en el día a día de tus colaboradores en Santiago.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-foreground">
              Soluciones de Vestuario Laboral para Empresas en Chile
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              En nuestra sucursal de El Manzanito 2551, ofrecemos productos adaptados a cada necesidad de negocio:
            </p>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <Shirt className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Polerones Corporativos Bordados:</strong> La opción premium para gerencias y equipos de ventas. Usamos hilos de alta resistencia que mantienen el color y la forma de tu logo.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Poleras Institucionales:</strong> Ideales para eventos masivos o dotación de verano en Santiago, disponibles en polera pique hombre y modelos de mujer con calce elegante.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Ropa de Trabajo Personalizada:</strong> Polerones de alto gramaje y polerones con cierre reforzados, perfectos para personal de logística, construcción o terreno.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Merchandising para Emprendedores:</strong> Si estás lanzando tu marca, creamos tu ropa personalizada en pequeñas cantidades para que empieces con una imagen profesional.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Polerones Softshell y Micropolar:</strong> Prendas técnicas esenciales para empresas en Santiago que operan en climas fríos o exteriores, similares al polerón Lippi o polerón North Face.
                </div>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Cada polerón personalizado que fabricamos en Santiago pasa por un control de calidad que asegura costuras reforzadas y tallas consistentes (desde S hasta polerones XXL hombre), evitando las sorpresas comunes de los proveedores de baja calidad.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-foreground">
              Tecnología de Estampado y Bordado para Negocios en San Joaquín
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              En Polerones Personalizados 🟢, optimizamos tu inversión corporativa con las mejores técnicas:
            </p>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Bordado Computarizado:</strong> Máxima elegancia y durabilidad para tu marca en cualquier polerón de marca base que elijas.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>DTF Corporativo:</strong> Ideal para logos con muchos colores o degradados, permitiendo una reproducción fiel de tu manual de marca sobre telas oscuras o claras.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Serigrafía Industrial:</strong> La solución más rentable para pedidos de poleras por mayor en Santiago (más de 50 unidades).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong>Atención Personalizada:</strong> En nuestro local de San Joaquín, te asesoramos sobre qué tipo de prenda y técnica se adapta mejor al rubro de tu empresa.
                </div>
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-foreground">
              Preguntas Frecuentes sobre Polerones para Empresas (FAQ)
            </h3>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Tienen un mínimo de compra para polerones corporativos en Santiago?
                </h4>
                <p className="text-muted-foreground">
                  Atendemos desde pequeños emprendimientos hasta grandes corporaciones. Aunque ofrecemos polerones personalizados desde pocas unidades, contamos con descuentos escalonados muy atractivos para pedidos de polerones por mayor a partir de 12 prendas.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Dónde puedo ver muestras de las telas y tallas en Santiago?
                </h4>
                <p className="text-muted-foreground">
                  Te invitamos a nuestra sala de ventas en El Manzanito 2551, San Joaquín. Aquí podrás tocar las telas de nuestro polerón hombre y polerón mujer, verificar los calces y ver ejemplos reales de estampados de poleras que hemos realizado para otras empresas chilenas.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Realizan envíos de ropa corporativa a regiones?
                </h4>
                <p className="text-muted-foreground">
                  ¡Por supuesto! Despachamos pedidos corporativos a todo Chile. Si tu empresa tiene sucursales en Concepción, Antofagasta o Valparaíso, coordinamos la logística para que tu vestuario laboral llegue de forma rápida y segura.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Pueden estampar el logo de mi empresa en polerones de marca como Nike o Adidas?
                </h4>
                <p className="text-muted-foreground">
                  Podemos trabajar sobre bases de alta calidad que siguen los patrones estéticos de marcas líderes como el polerón Nike o el polerón Adidas, asegurando que tu equipo luzca una prenda de primer nivel con tu propio logo institucional.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Cuál es el plazo de entrega para un pedido de 100 polerones?
                </h4>
                <p className="text-muted-foreground">
                  Para pedidos de volumen medio en la Región Metropolitana, el plazo estándar es de 7 a 10 días hábiles. Si tienes un evento próximo en Santiago, consulta por nuestro servicio de estampado express para adelantar los tiempos de entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Lista para mejorar la imagen de tu empresa?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Cotiza tus polerones corporativos hoy mismo. Atención especializada para empresas en Santiago y todo Chile.
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="secondary" className="text-lg bg-white text-blue-700 hover:bg-blue-50">
              Solicitar Cotización Corporativa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Servicio prioritario para eventos corporativos urgentes en Santiago.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Coordinamos envíos corporativos a todas las regiones del país.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
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

      {/* Related Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Otras Categorías que te pueden interesar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/polerones/personalizados/escolares">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Escolares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Polerones generacionales para cursos</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/polerones/personalizados/hombre">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <Shirt className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Hombre
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Polerones de alta calidad para el estilo masculino</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/polerones/personalizados/mujer">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Mujer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Diseños femeninos que combinan moda y comodidad</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <Building2 className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Inicio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Ver todas las categorías disponibles</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
