import Link from 'next/link'
import { ArrowRight, Zap, Tag, Clock, Truck, Shield, CheckCircle, Gift, Percent, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: "Polerones Baratos y Estampado Express en Santiago | Ofertas San Joaquín",
  description: "Polerones baratos y ofertas en Santiago. Estampado express, polerones por mayor, liquidaciones y servicios rápidos. Lo mejor en precios en San Joaquín.",
  keywords: ["polerones baratos", "polerones en oferta", "polerones personalizados express", "polerones con logo", "polerones de invierno"],
}

const services = [
  {
    icon: Zap,
    title: "Estampado Express Santiago",
    description: "Diseños simples en poleras personalizadas o polerones con entrega en 24 horas (sujeto a disponibilidad de stock)."
  },
  {
    icon: Tag,
    title: "Polerones por Mayor Baratos",
    description: "Descuentos masivos para juntas de vecinos, eventos solidarios o paseos de curso de última hora."
  },
  {
    icon: Percent,
    title: "Liquidación de Marcas",
    description: "Bases de alta calidad con calces similares al polerón Nike o polerón Adidas a precios reducidos."
  },
  {
    icon: Gift,
    title: "Polerones de Invierno en Oferta",
    description: "Aprovecha nuestras promos de polerón con chiporro y polerón polar fuera de temporada alta."
  },
  {
    icon: CheckCircle,
    title: "Poleras 100% Algodón",
    description: "Packs de poleras básicas para estampar en casa o para uso diario al mejor precio de la capital."
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Inmediatez",
    description: "Contamos con stock propio en Santiago, lo que nos permite realizar estampados de poleras express sin intermediarios."
  },
  {
    icon: Shield,
    title: "Precios Transparentes",
    description: "Sin costos ocultos. Ofrecemos los mejores valores de polerones baratos en Santiago con presupuestos claros desde la primera consulta."
  },
  {
    icon: MapPin,
    title: "Ubicación Estratégica",
    description: "Nuestra tienda en San Joaquín es de fácil acceso, ideal para retiros rápidos y entregas personales seguras."
  },
  {
    icon: Truck,
    title: "Envíos Low Cost",
    description: "Convenios con Starken y Chilexpress para que el envío de tus polerones personalizados a regiones sea lo más económico posible."
  },
]

const faqs = [
  {
    question: "¿Qué tan rápido pueden estampar un polerón en Santiago?",
    answer: "Para diseños que ya tenemos listos o textos sencillos, podemos ofrecer un servicio de estampado de poleras rápido con retiro el mismo día en nuestro local de San Joaquín. Para diseños nuevos, el tiempo promedio express es de 24 a 48 horas."
  },
  {
    question: "¿Tienen un outlet físico para ver los polerones baratos?",
    answer: "¡Sí! Te invitamos a nuestra bodega y tienda en El Manzanito 2551, San Joaquín. Aquí podrás ver los saldos de temporada y packs promocionales de polerón hombre y polerón mujer con descuentos exclusivos que no siempre aparecen en la web."
  },
  {
    question: "¿Puedo comprar polerones lisos por mayor sin estampar?",
    answer: "¡Claro que sí! Somos proveedores de muchos emprendedores en Santiago. Vendemos polerones para estampar por mayor a precios de distribuidor. Consulta por nuestro stock de colores y tallas, desde S hasta polerones XXL."
  },
  {
    question: "¿Hacen descuentos por cantidad en servicios express?",
    answer: "Sí, aunque el servicio express tiene un recargo por prioridad, mantenemos una escala de precios por volumen. Es la opción ideal para empresas que necesitan polerones corporativos para un evento de fin de semana en Santiago."
  },
  {
    question: "¿Qué técnicas de estampado usan para pedidos rápidos?",
    answer: "Para la inmediatez, el DTF y el Vinilo Textil son nuestros mejores aliados. Permiten una aplicación rápida y un acabado profesional de alta durabilidad en cualquier polerón personalizado."
  },
]

export default function EspecialesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900/20 via-background to-amber-900/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Tag className="h-4 w-4" />
              Ofertas y Servicios Express
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Polerones Baratos y Estampado Express en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">
                Santiago, Chile
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Polerones baratos y ofertas en Santiago. Estampado express, polerones por mayor, liquidaciones y servicios rápidos. Lo mejor en precios en San Joaquín.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Cotizar Oferta
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

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Polerones Baratos y Estampado Express en Santiago: Ofertas en San Joaquín
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              ¿Necesitas un regalo de última hora o buscas polerones baratos sin sacrificar calidad? En Polerones Personalizados 🟢, ubicados en El Manzanito 2551, San Joaquín, hemos creado una sección de "Especiales" pensada en tu bolsillo y en tu tiempo. Somos la solución definitiva en Santiago para quienes buscan polerones en oferta y servicios de estampado express. En el corazón de la Región Metropolitana, entendemos que la inmediatez es clave, por lo que hemos optimizado nuestros procesos para ofrecerte ropa personalizada con los tiempos de entrega más competitivos de todo Chile.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra tienda en San Joaquín se destaca por liquidaciones constantes de stock y promociones de temporada. Aquí encontrarás desde el clásico polerón con cierre hasta el polerón canguro a precios de fábrica. No creas que por ser económico es de mala calidad; utilizamos polerón de algodón y franela reactiva que resiste el uso diario. Si buscas un polerón personalizado barato para un evento relámpago, un grupo de amigos o una promoción especial, en Santiago no encontrarás una mejor opción que El Manzanito 2551.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              Servicios Express y Liquidaciones en Santiago
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En nuestra sucursal de San Joaquín, ofrecemos soluciones inmediatas para diversas necesidades:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Estampado Express Santiago:</strong> Diseños simples en poleras personalizadas o polerones con entrega en 24 horas (sujeto a disponibilidad de stock).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Polerones por Mayor Baratos:</strong> Descuentos masivos para juntas de vecinos, eventos solidarios o paseos de curso de última hora.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Liquidación de Marcas:</strong> Bases de alta calidad con calces similares al polerón Nike o polerón Adidas a precios reducidos.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Polerones de Invierno en Oferta:</strong> Aprovecha nuestras promos de polerón con chiporro y polerón polar fuera de temporada alta.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Poleras 100% Algodón:</strong> Packs de poleras básicas para estampar en casa o para uso diario al mejor precio de la capital.</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada polerón hombre o polerón mujer en nuestra sección de ofertas pasa por el mismo control de calidad que nuestras líneas premium. Queremos que cada cliente en Santiago se lleve una prenda duradera, ya sea un polerón negro básico o una polera con un diseño full color en DTF textil.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              ¿Por qué elegir Polerones Personalizados 🟢 en San Joaquín?
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En El Manzanito 2551, nos diferenciamos por tres pilares fundamentales:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Inmediatez:</strong> Contamos con stock propio en Santiago, lo que nos permite realizar estampados de poleras express sin intermediarios.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Precios Transparentes:</strong> Sin costos ocultos. Ofrecemos los mejores valores de polerones baratos en Santiago con presupuestos claros desde la primera consulta.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Ubicación Estratégica:</strong> Nuestra tienda en San Joaquín es de fácil acceso, ideal para retiros rápidos y entregas personales seguras.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span><strong>Envíos Low Cost:</strong> Convenios con Starken y Chilexpress para que el envío de tus polerones personalizados a regiones sea lo más económico posible.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Servicios Especiales
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones rápidas y económicas para tus necesidades en Santiago
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegirnos en Santiago?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cuatro pilares que nos diferencian en el mercado de polerones baratos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
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
                Preguntas Frecuentes sobre Ofertas y Express (FAQ)
              </h2>
              <p className="text-muted-foreground">
                Todo lo que necesitas saber sobre nuestros servicios especiales en Santiago
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <MessageCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para aprovechar nuestras ofertas?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contáctanos hoy y descubre los mejores precios en polerones baratos y estampado express en Santiago. Servicios rápidos y de calidad.
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="secondary" className="text-lg bg-white text-green-800 hover:bg-gray-100">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Estampado Express</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Entregas en 24-48 horas para diseños simples en Santiago y regiones.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Envíos a Todo Chile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Envíos low cost con Starken y Chilexpress desde San Joaquín.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Visítanos en San Joaquín</CardTitle>
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
