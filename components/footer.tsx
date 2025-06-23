import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4 relative h-16 w-48 bg-white rounded-md p-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-bVsHHac7tIdOds0ZZ17V5gt4nWj0HQ.png"
                alt="Agroveterinaria Gross"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Más de 35 años brindando atención veterinaria con amor, compromiso y asesoramiento profesional.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-white hover:text-[#c6e619] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" className="text-white hover:text-[#c6e619] transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#c6e619]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-300 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              {/*<li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>*/}
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#c6e619]">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/consultas" className="text-gray-300 hover:text-white transition-colors">
                  Consultas Clínicas
                </Link>
              </li>
              <li>
                <Link href="/servicios/vacunacion" className="text-gray-300 hover:text-white transition-colors">
                  Vacunación
                </Link>
              </li>
              <li>
                <Link href="/servicios/cirugias" className="text-gray-300 hover:text-white transition-colors">
                  Cirugías
                </Link>
              </li>
              <li>
                <Link href="/servicios/laboratorio" className="text-gray-300 hover:text-white transition-colors">
                  Laboratorio
                </Link>
              </li>
              <li>
                <Link href="/servicios/farmacia" className="text-gray-300 hover:text-white transition-colors">
                  Farmacia Veterinaria
                </Link>
              </li>
              <li>
                <Link href="/servicios/asesoramiento" className="text-gray-300 hover:text-white transition-colors">
                  Asesoramiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#c6e619]">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#c6e619] mr-2 mt-0.5" />
                <span className="text-gray-300">Avenida Libertad 315, Oberá, Misiones 3360</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#c6e619] mr-2" />
                <Link href="tel:+123456789" className="text-gray-300 hover:text-white transition-colors">
                  +54 (123) 456-789
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#c6e619] mr-2" />
                <Link
                  href="mailto:info@agroveterinariagross.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@agroveterinariagross.com
                </Link>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[#c6e619] mr-2 mt-0.5" />
                <div className="text-gray-300">
                  <p>Lunes a Viernes: 8:00 - 19:00</p>
                  <p>Sábados: 8:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Agroveterinaria Gross. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
