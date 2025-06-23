"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, ImageIcon, Home, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Panel Principal", href: "/admin", icon: <LayoutDashboard className="w-5 h-5 mr-3" /> },
    { name: "Nuestros Servicios", href: "/admin/nuestros-servicios", icon: <FileText className="w-5 h-5 mr-3" /> },
    /*{ name: "Inicio", href: "/admin/inicio", icon: <Home className="w-5 h-5 mr-3" /> },*/
    { name: "Clinica Veterinaria", href: "/admin/clinica-veterinaria", icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: "Por qué elegirnos", href: "/admin/por-que-elegirnos", icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: "Productos", href: "/admin/productos", icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: "Nosotros", href: "/admin/nosotros", icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: "Trayectoria", href: "/admin/trayectoria", icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: "Sobre Nosotros Inicio", href: "/admin/sobre-nosotros-inicio", icon: <FileText className="w-5 h-5 mr-3" /> },

    /*{ name: "Contacto", href: "/admin/contacto", icon: <FileText className="w-5 h-5 mr-3" /> },*/
    { name: "Adopciones", href: "/admin/adopciones", icon: <FileText className="w-5 h-5 mr-3" /> },
    /*{ name: "Imágenes", href: "/admin/imagenes", icon: <ImageIcon className="w-5 h-5 mr-3" /> },*/
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`admin-sidebar fixed top-0 left-0 h-full w-64 overflow-y-auto transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-5 border-b border-gray-700">
          <h2 className="text-xl font-bold">Administración</h2>
          <p className="text-sm text-gray-400">Agroveterinaria Gross</p>
        </div>

        <nav className="mt-5">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-5 py-3 text-sm ${
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-5 border-t border-gray-700">
          <Link href="/" className="flex items-center text-sm text-gray-300 hover:text-white">
            <LogOut className="w-5 h-5 mr-3" />
            Salir
          </Link>
        </div>
      </aside>
    </>
  )
}
