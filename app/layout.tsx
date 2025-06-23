import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Roboto_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" })

export const metadata: Metadata = {
  title: "Agroveterinaria Gross - Atención veterinaria en Oberá",
  description: "Más de 35 años brindando atención veterinaria con amor, compromiso y asesoramiento en Oberá, Misiones.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${robotoMono.variable}`}>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
