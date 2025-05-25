import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carlos Freire - Portfolio",
  description: "Desarrollador Full Stack especializado en React, Next.js y TypeScript",
  icons: {
    icon: '/iconoweb.png',
    apple: '/iconoweb.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Carlos Freire - Portfolio',
    description: 'Desarrollador Full Stack especializado en React, Next.js y TypeScript',
    url: 'https://tu-dominio.com', // Reemplaza con tu dominio real
    siteName: 'Portfolio Carlos Freire',
    images: [
      {
        url: 'https://tu-dominio.com/iconoweb.png', // URL completa a tu imagen
        width: 512,
        height: 512,
        alt: 'Carlos Freire Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Freire - Portfolio',
    description: 'Desarrollador Full Stack especializado en React, Next.js y TypeScript',
    images: ['https://tu-dominio.com/iconoweb.png'], // URL completa a tu imagen
  },
  metadataBase: new URL('https://tu-dominio.com'), // Reemplaza con tu dominio real
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
