import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Polerones Personalizados en Santiago, Chile | Polerones en Santiago",
  description: "Expertos en polerones personalizados de alta calidad en Santiago. Polerones para hombre, mujer, parejas, escolares, corporativos y más. Estampados y bordados premium en San Joaquín.",
  keywords: ["polerones santiago", "polerones personalizados", "polerón hombre", "polerón mujer", "polerones 4to medio", "polerones corporativos", "estampados de poleras", "polerones chile", "buzos personalizados", "sudaderas chile"],
  authors: [{ name: "Polerones en Santiago" }],
  icons: {
    icon: "https://poleronesensantiago.pages.dev/images/logo-polerones-personalizados-estampados-santiago-san-joaquin.png",
    shortcut: "https://poleronesensantiago.pages.dev/images/logo-polerones-personalizados-estampados-santiago-san-joaquin.png",
    apple: "https://poleronesensantiago.pages.dev/images/logo-polerones-personalizados-estampados-santiago-san-joaquin.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Polerones Personalizados en Santiago, Chile",
    description: "Polerones personalizados de alta calidad en Santiago. Estampados y bordados premium para todas las ocasiones.",
    url: "https://poleronesensantiago.pages.dev",
    siteName: "Polerones en Santiago",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "https://poleronesensantiago.pages.dev/images/banner-tienda-polerones-personalizados-chile-disenos-exclusivos.jpg",
        width: 1200,
        height: 630,
        alt: "Polerones Personalizados en Santiago Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polerones Personalizados en Santiago, Chile",
    description: "Polerones personalizados de alta calidad en Santiago. Estampados y bordados premium para todas las ocasiones.",
    images: [
      "https://poleronesensantiago.pages.dev/images/banner-tienda-polerones-personalizados-chile-disenos-exclusivos.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
