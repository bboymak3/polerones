# Polerones en Santiago - Guía de Despliegue en Cloudflare Pages

## 🚀 Instrucciones para Cloudflare Pages

### Configuración del Build:

Cuando conectes tu repositorio a Cloudflare Pages, configura estos parámetros:

**Framework Preset:** Next.js

**Build Command:**
```
npm install && npm run build
```

O si usas bun:
```
bun install && bun run build
```

**Build Output Directory:**
```
out
```

**Environment Variables (opcional):**
- No hay variables de entorno obligatorias

## 📁 Estructura del Proyecto

```
my-project/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Layout principal
│   │   ├── page.tsx            ← PÁGINA PRINCIPAL (index)
│   │   ├── contacto/
│   │   │   └── page.tsx
│   │   └── polerones/personalizados/
│   │       ├── hombre/page.tsx
│   │       ├── mujer/page.tsx
│   │       ├── anime/page.tsx
│   │       ├── marcas/page.tsx
│   │       ├── parejas/page.tsx
│   │       ├── san-valentin/page.tsx
│   │       ├── familia/page.tsx
│   │       ├── cumpleaños/page.tsx
│   │       ├── deportes/page.tsx
│   │       ├── escolares/page.tsx
│   │       ├── corporativos/page.tsx
│   │       └── especiales/page.tsx
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       └── WhatsAppButton.tsx
├── public/
│   ├── images/                ← Guarda tus imágenes aquí
│   ├── index.html             ← Redirección a la página principal
│   ├── manifest.json
│   └── favicon.ico
├── package.json
├── next.config.js             ← Configuración para Cloudflare Pages
└── tsconfig.json
```

## 🔧 Solución de Problemas Comunes

### Problema: "No encuentra la página principal"

**Solución:**
1. Asegúrate de que el archivo `public/index.html` existe
2. Este archivo redirige automáticamente a `/` que es `src/app/page.tsx`

### Problema: Las imágenes no cargan

**Solución 1 - Imágenes locales:**
1. Coloca tus imágenes en `public/images/`
2. En el código, cambia las URLs de:
   - `https://poleronesensantiago.pages.dev/images/...`
   - A: `/images/...`

**Solución 2 - Imágenes externas (actual):**
- Las imágenes ya están configuradas para usar `poleronesensantiago.pages.dev/images/`
- Solo asegúrate de que las imágenes estén ahí

### Problema: Error de CORS

**Solución:**
- Este error solo ocurre en el entorno de desarrollo local
- En Cloudflare Pages NO aparecerá porque todo está en el mismo dominio

## 📝 URLs del Sitio Desplegado

Después del despliegue, tu sitio estará en:
```
https://poleronesensantiago.pages.dev/
```

Y las páginas serán:
- Principal: `https://poleronesensantiago.pages.dev/`
- Contacto: `https://poleronesensantiago.pages.dev/contacto`
- Hombre: `https://poleronesensantiago.pages.dev/polerones/personalizados/hombre`
- Y así sucesivamente...

## 🎯 Puntos Importantes

1. **La página principal es `src/app/page.tsx`** (no `index.html` tradicional)
2. **El archivo `public/index.html`** solo sirve como redirección para compatibilidad
3. **`next.config.js` tiene `output: 'export'`** - esto convierte todo a HTML estático
4. **Cloudflare Pages compila en la carpeta `out/`** - ahí están los archivos HTML finales
5. **Todas las rutas funcionan correctamente** después del build

## ✅ Checklist antes de desplegar

- [ ] Todas las imágenes están en `public/images/` O confirmadas en el servidor externo
- [ ] El archivo `next.config.js` existe con `output: 'export'`
- [ ] El archivo `public/index.html` existe (redirección)
- [ ] `package.json` tiene los scripts correctos
- [ ] No hay errores de TypeScript (`bun run lint` pasa sin problemas)

## 🚀 Comandos útiles

```bash
# Instalar dependencias
npm install
# o
bun install

# Verificar código
npm run lint
# o
bun run lint

# Construir para producción
npm run build
# o
bun run build

# El resultado estará en la carpeta `out/`
```
