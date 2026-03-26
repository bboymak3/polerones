import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const categories = [
    { name: 'Hombre', url: '/polerones/personalizados/hombre' },
    { name: 'Mujer', url: '/polerones/personalizados/mujer' },
    { name: 'Anime', url: '/polerones/personalizados/anime' },
    { name: 'Marcas', url: '/polerones/personalizados/marcas' },
    { name: 'Parejas', url: '/polerones/personalizados/parejas' },
    { name: 'San Valentín', url: '/polerones/personalizados/san-valentin' },
    { name: 'Familia', url: '/polerones/personalizados/familia' },
    { name: 'Cumpleaños', url: '/polerones/personalizados/cumpleaños' },
    { name: 'Deportes', url: '/polerones/personalizados/deportes' },
    { name: 'Escolares', url: '/polerones/personalizados/escolares' },
    { name: 'Corporativos', url: '/polerones/personalizados/corporativos' },
    { name: 'Especiales', url: '/polerones/personalizados/especiales' },
  ]

  return (
    <footer className="w-full border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la Empresa */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Polerones en Santiago</h3>
            <p className="text-sm text-muted-foreground">
              Expertos en polerones personalizados de alta calidad en Santiago, Chile.
              Transformamos tus ideas en prendas únicas con estampados y bordados premium.
            </p>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.url}>
                  <Link
                    href={cat.url}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  El Manzanito 2551, San Joaquín, Santiago
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+56940349957" className="text-muted-foreground hover:text-primary transition-colors">
                  +56 9 4034 9957
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:contacto@poleronesensantiago.cl" className="text-muted-foreground hover:text-primary transition-colors">
                  contacto@poleronesensantiago.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lunes a Viernes: 9:00 - 18:00</li>
              <li>Sábados: 10:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Polerones en Santiago. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
