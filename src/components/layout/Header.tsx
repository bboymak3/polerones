'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Shirt } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  { name: 'Hombre', url: '/polerones/personalizados/hombre', keywords: 'polerones hombre, sudaderas para hombre' },
  { name: 'Mujer', url: '/polerones/personalizados/mujer', keywords: 'polerones mujer, sudaderas para mujer' },
  { name: 'Anime', url: '/polerones/personalizados/anime', keywords: 'polerones anime, poleras anime' },
  { name: 'Marcas', url: '/polerones/personalizados/marcas', keywords: 'polerón nike, polerón adidas' },
  { name: 'Parejas', url: '/polerones/personalizados/parejas', keywords: 'polerones para parejas, sudaderas para parejas' },
  { name: 'San Valentín', url: '/polerones/personalizados/san-valentin', keywords: 'regalos san valentín, poleras 14 de febrero' },
  { name: 'Familia', url: '/polerones/personalizados/familia', keywords: 'polerones familiares, poleras madre e hija' },
  { name: 'Cumpleaños', url: '/polerones/personalizados/cumpleaños', keywords: 'poleras de cumpleaños, regalos personalizados' },
  { name: 'Deportes', url: '/polerones/personalizados/deportes', keywords: 'polerón deportivo, ropa gym personalizada' },
  { name: 'Escolares', url: '/polerones/personalizados/escolares', keywords: 'polerones 4to medio, polerón escolar' },
  { name: 'Corporativos', url: '/polerones/personalizados/corporativos', keywords: 'polerones corporativos, ropa de trabajo' },
  { name: 'Especiales', url: '/polerones/personalizados/especiales', keywords: 'polerones baratos, polerones en oferta' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img
              src="https://poleronesensantiago.pages.dev/images/logo-polerones-personalizados-estampados-santiago-san-joaquin.png"
              alt="Polerones en Santiago Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold hidden sm:inline-block">
              Polerones en Santiago
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost">Inicio</Button>
            </Link>
            <div className="relative group">
              <Button variant="ghost" className="flex items-center gap-1">
                Categorías
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              <div className="absolute left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 max-h-96 overflow-y-auto">
                  {categories.map((cat) => (
                    <Link
                      key={cat.url}
                      href={cat.url}
                      className="block px-4 py-2 hover:bg-accent transition-colors"
                    >
                      <div className="font-medium">{cat.name}</div>
                      <div className="text-xs text-muted-foreground">{cat.keywords}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/contacto">
              <Button variant="ghost">Contacto</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Inicio
              </Button>
            </Link>
            <div className="space-y-2">
              <div className="font-semibold px-4 py-2">Categorías</div>
              {categories.map((cat) => (
                <Link
                  key={cat.url}
                  href={cat.url}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-accent rounded-md transition-colors"
                >
                  <div className="font-medium">{cat.name}</div>
                  <div className="text-xs text-muted-foreground">{cat.keywords}</div>
                </Link>
              ))}
            </div>
            <Link href="/contacto" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Contacto
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
