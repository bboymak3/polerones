#!/bin/bash

# Read the file
file="especiales.html"

# Title and meta tags
sed -i '6s/.*/    <title>Ofertas Especiales y Servicios Express | Polerones Baratos de Calidad<\/title>/' "$file"
sed -i '7s/.*/    <meta name="description" content="Ofertas exclusivas y servicios express en Santiago. Encuentra polerones baratos de calidad, promociones temporales y entregas rápidas en 24 horas en San Joaquín.">/' "$file"
sed -i '8s/.*/    <meta name="keywords" content="polerones baratos santiago, ofertas polerones chile, polerones express 24 horas, promociones polerones, polerones economicos, descuentos polerones personalizados, entrega rapida polerones">/' "$file"

# Open Graph and Twitter
sed -i '12s/.*/    <meta property="og:url" content="https:\/\/estampados.pages.dev\/polerones-personalizados\/especiales.html">/' "$file"
sed -i '13s/.*/    <meta property="og:title" content="Ofertas Especiales y Servicios Express">/' "$file"
sed -i '14s/.*/    <meta property="og:description" content="Ofertas exclusivas y servicios express. Encuentra polerones baratos de calidad y entregas rápidas en 24 horas.">/' "$file"
sed -i '19s/.*/    <meta property="twitter:url" content="https:\/\/estampados.pages.dev\/polerones-personalizados\/especiales.html">/' "$file"
sed -i '20s/.*/    <meta property="twitter:title" content="Ofertas Especiales y Servicios Express">/' "$file"
sed -i '21s/.*/    <meta property="twitter:description" content="Ofertas exclusivas y servicios express. Encuentra polerones baratos de calidad y entregas rápidas en 24 horas.">/' "$file"

# Nav highlight
sed -i 's|<a href="hombre.html" style="color: var(--primary); background: var(--gray-100);">Hombre</a>|<a href="hombre.html">Hombre</a>|' "$file"
sed -i 's|<a href="corporativos.html" style="color: var(--primary); background: var(--gray-100);">Corporativos</a>|<a href="corporativos.html">Corporativos</a>|' "$file"
sed -i 's|<a href="contacto.html">Contacto</a>|<a href="especiales.html" style="color: var(--primary); background: var(--gray-100);">Especiales</a>\n                <a href="../contacto.html">Contacto</a>|' "$file"

# Mobile menu highlight
sed -i 's|<a href="corporativos.html" onclick="toggleMenu()" style="color: var(--primary);">Corporativos</a>|<a href="corporativos.html" onclick="toggleMenu()">Corporativos</a>|' "$file"
sed -i 's|<a href="../contacto.html" onclick="toggleMenu()">Contacto</a>|<a href="especiales.html" onclick="toggleMenu()" style="color: var(--primary);">Especiales</a>\n            <a href="../contacto.html" onclick="toggleMenu()">Contacto</a>|' "$file"

# Hero
sed -i 's|<h1>Polerones <span>Hombre</span></h1>|<h1>Ofertas <span>Especiales</span></h1>|' "$file"
sed -i 's|<p>Descubre nuestra colección de polerones para hombre con estilos como el clásico polerón canguro, el deportivo con cierre y diseños inspirados en marcas como Nike y Adidas.</p>|<p>Ofertas exclusivas y servicios express. Encuentra polerones baratos de calidad, promociones temporales y entregas rápidas en 24 horas en Santiago.</p>|' "$file"

# Section title
sed -i 's|<h2>Polerones Personalizados para Hombre</h2>|<h2>Ofertas Especiales y Servicios Express</h2>|' "$file"
sed -i 's|<p>En Santiago creamos polerones hombre personalizados de alta calidad con estampados y bordados premium. Desde el clásico polerón canguro hasta el deportivo con cierre, tenemos el estilo perfecto para ti. Nuestros diseños incluyen inspiraciones en marcas reconocidas como Nike, Adidas, Puma y más, adaptados a tu gusto personal.</p>|<p>En Santiago ofrecemos ofertas especiales y servicios express de alta calidad. Nuestros polerones baratos mantienen los estándares de calidad premium con precios accesibles. Disfruta de promociones temporales, entregas rápidas en 24 horas y descuentos exclusivos en San Joaquín.</p>|' "$file"

# Features
sed -i 's|<h3>Polerón Canguro</h3>|<h3>Ofertas Temporales</h3>|' "$file"
sed -i 's|<p>El clásico diseño con bolsillo frontal. Perfecto para estampados grandes y logos personalizados en pecho y espalda.</p>|<p>Promociones especiales por temporada. Aprovecha descuentos exclusivos en polerones personalizados de alta calidad.</p>|' "$file"

sed -i 's|<h3>Polerón Deportivo con Cierre</h3>|<h3>Entrega Express 24 Horas</h3>|' "$file"
sed -i 's|<p>Ideal para deporte y uso casual. Cierre de alta calidad con opción de capucha y diseño tipo hoodie.</p>|<p>Servicio express para urgencias. Polerones listos en 24 horas para diseños simples y estampados DTF.</p>|' "$file"

sed -i 's|<h3>Estilo Nike y Adidas</h3>|<h3>Polerones Baratos de Calidad</h3>|' "$file"
sed -i 's|<p>Diseños inspirados en las mejores marcas del mundo. Personaliza tu prenda con el estilo de tu marca favorita.</p>|<p>Precios accesibles sin sacrificar calidad. Algodón premium y estampados duraderos a precios competitivos.</p>|' "$file"

sed -i 's|<h3>Algodón Premium</h3>|<h3>Promociones por Volumen</h3>|' "$file"
sed -i 's|<p>Materiales de alta calidad como algodón peruano y mezclas sintéticas que garantizan durabilidad y confort.</p>|<p>Descuentos progresivos por cantidad. Desde 5 unidades ya aplicamos precios especiales para grupos y familias.</p>|' "$file"

sed -i 's|<h3>Estampados a Medida</h3>|<h3>Liquidación de Colecciones</h3>|' "$file"
sed -i 's|<p>DTF, serigrafía, vinilo textil y bordado. La tecnología perfecta para cada tipo de diseño y presupuesto.</p>|<p>Descuentos en diseños de colecciones anteriores. Polerones con estampados premium a precios de liquidación.</p>|' "$file"

sed -i 's|<h3>Tallas XS a XXL</h3>|<h3>Cupones y Descuentos</h3>|' "$file"
sed -i 's|<p>Amplia variedad de tallas para que encuentres el ajuste perfecto. Incluimos tallas especiales bajo pedido.</p>|<p>Cupones exclusivos y descuentos especiales. Suscríbete para recibir promociones únicas en tu correo.</p>|' "$file"

# FAQ
sed -i 's|<h2>Preguntas Frecuentes</h2>|<h2>Preguntas Frecuentes</h2>|' "$file"
sed -i 's|<p>Todo lo que necesitas saber sobre nuestros polerones hombre personalizados en Santiago</p>|<p>Todo lo que necesitas saber sobre nuestras ofertas especiales y servicios express</p>|' "$file"

sed -i 's|¿Cuánto tiempo demoran en entregar mi polerón hombre personalizado?|¿Cuánto tiempo demora el servicio express 24 horas?|' "$file"
sed -i 's|Los tiempos de entrega varían según la complejidad del diseño. Para estampados simples con DTF o vinilo, entregamos en 24-48 horas. Para bordados o diseños complejos, el tiempo es de 3-5 días hábiles. Envíos a regiones pueden tomar 2-3 días adicionales según la zona.|El servicio express 24 horas está disponible para estampados simples en DTF o vinilo. El pedido debe confirmarse antes de las 12:00 PM para entrega al día siguiente hábil. Para diseños más complejos, los tiempos son de 48-72 horas.|' "$file"

sed -i 's|¿Pueden hacer diseños estilo Nike o Adidas en mis polerones hombre?|¿Los polerones baratos tienen la misma calidad que los regulares?|' "$file"
sed -i 's|Sí, creamos diseños inspirados en el estilo de marcas como Nike, Adidas, Puma y otras marcas reconocidas. Nuestros polerones hombre personalizados capturan la esencia de estos estilos con toques únicos que los hacen especiales. Sin embargo, no utilizamos logotipos registrados sin autorización.|Absolutamente. Nuestros polerones baratos mantienen la misma calidad premium: algodón de alta calidad, estampados duraderos y acabados profesionales. La diferencia de precio se debe a promociones temporales, no a calidad inferior.|' "$file"

sed -i 's|¿Cuál es el precio de un polerón canguro personalizado en Santiago?|¿Cuáles son las condiciones para las ofertas especiales?|' "$file"
sed -i 's|El precio depende de la cantidad, el tipo de estampado y la complejidad del diseño. Para pedidos individuales de polerón canguro, los precios parten desde \$15.000 CLP. Para pedidos mayores a 10 unidades, ofrecemos descuentos especiales. Contáctanos para obtener una cotización personalizada.|Las ofertas especiales tienen fechas de validez y condiciones específicas. Algunas requieren cantidades mínimas o diseños predeterminados. Revisa cada promoción individualmente o contáctanos para aclarar términos y condiciones.|' "$file"

sed -i 's|¿Qué materiales utilizan para los polerones hombre?|¿Cómo puedo enterarme de nuevas promociones y ofertas?|' "$file"
sed -i 's|Utilizamos algodón premium de alta calidad (300-350 g\/m²) que garantiza durabilidad y confort. También ofrecemos opciones en mezclas de poliéster-cotton para mayor resistencia y secado rápido. Todos nuestros materiales son pre-encogidos para mantener el tamaño después del lavado.|Síguenos en redes sociales y suscríbete a nuestro newsletter para recibir notificaciones de nuevas promociones. También ofrecemos cupones exclusivos para clientes recurrentes y descuentos especiales por referidos.|' "$file"

sed -i 's|¿Hacen envíos de polerones hombre personalizados a todo Chile?|¿Las ofertas express incluyen envío rápido?|' "$file"
sed -i 's|Sí, desde nuestra ubicación en San Joaquín, Santiago, enviamos polerones hombre personalizados a todo Chile mediante Starken y Chilexpress. El costo de envío varía según la región y el peso del paquete. Envíos a Santiago Centro pueden ser coordinados con retiro en nuestro local.|El servicio express incluye producción en 24 horas. El envío se coordina según tu preferencia: Starken Express para entregas rápidas en regiones o Chilexpress para seguimiento detallado. En Santiago, ofrecemos retiro en local o delivery el mismo día de producción.|' "$file"

# Related
sed -i 's|<h3>Polerones Mujer</h3>|<h3>Polerones Corporativos</h3>|' "$file"
sed -i 's|<p>Estilos femininos de tendencia, oversize y crop top en colores como rosa y más.</p>|<p>Uniformes profesionales y polerones con logo para empresas con descuentos por volumen.</p>|' "$file"
sed -i 's|<a href="mujer.html">Ver Colección →</a>|<a href="corporativos.html">Ver Opciones →</a>|' "$file"

# CTA
sed -i 's|<h2>¿Listo para crear tu polerón hombre personalizado?</h2>|<h2>¿Listo para aprovechar nuestras ofertas especiales?</h2>|' "$file"
sed -i 's|<p>Contáctanos hoy y transforma tu idea en una prenda única que durará años.</p>|<p>Contáctanos hoy y accede a polerones de calidad premium con precios especiales y entregas rápidas.</p>|' "$file"

# Footer
sed -i 's|<li><a href="corporativos.html" style="color: var(--primary);">Corporativos</a>|<li><a href="especiales.html" style="color: var(--primary);">Especiales</a>|' "$file"

