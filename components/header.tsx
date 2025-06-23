"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Clínica Veterinaria", href: "/clinica-veterinaria" },
    { name: "Productos y servicios", href: "/productos-servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-bVsHHac7tIdOds0ZZ17V5gt4nWj0HQ.png"
                alt="Agroveterinaria Gross"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-800 hover:text-[#b3007a] font-medium">
                {item.name}
              </Link>
            ))}
            <Link
              href="/adopciones"
              className="bg-[#c6e619] hover:bg-[#d4f528] text-[#8e0061] font-bold py-2 px-4 rounded-lg transition-all"
            >
              Adopciones
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-800 hover:text-[#b3007a] font-medium py-2"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/adopciones"
              className="block bg-[#c6e619] hover:bg-[#d4f528] text-[#8e0061] font-bold py-2 px-4 rounded-lg transition-all w-full text-center"
              onClick={toggleMenu}
            >
              Adopciones
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
