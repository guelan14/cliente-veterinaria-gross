"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Instagram, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ContactoPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      Object.keys(sectionsRef.current).forEach((key) => {
        const section = sectionsRef.current[key]
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + scrollY
          const sectionHeight = section.offsetHeight

          // Si la sección está en el viewport
          if (scrollY > sectionTop - windowHeight * 0.75 && scrollY < sectionTop + sectionHeight) {
            setIsVisible((prev) => ({ ...prev, [key]: true }))
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b3007a] to-[#8e0061] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInDown">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta o para agendar una cita
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section ref={(el) => (sectionsRef.current["contact"] = el)} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#8e0061] mb-8 text-center animate-fadeIn">Información de Contacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="space-y-8">
                <div
                  className={`flex items-start transform hover:translate-x-2 transition-transform duration-300 ${
                    isVisible["contact"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "0.1s", transitionDuration: "0.8s" }}
                >
                  <MapPin className="h-8 w-8 text-[#b3007a] mr-4 mt-1 animate-bounce" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                    <p className="text-gray-600">Avenida Libertad 315, Oberá, Misiones 3360</p>
                    <a
                      href="https://maps.app.goo.gl/eL2SpGyw8C2ik3uT7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b3007a] font-medium hover:text-[#8e0061] transition-colors inline-flex items-center mt-2"
                    >
                      Ver en Google Maps <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div
                  className={`flex items-start transform hover:translate-x-2 transition-transform duration-300 ${
                    isVisible["contact"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "0.2s", transitionDuration: "0.8s" }}
                >
                  <Phone className="h-8 w-8 text-[#b3007a] mr-4 mt-1 animate-pulse" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+5493755677918" className="hover:text-[#b3007a] transition-colors">
                        +54 9 3755 67-7918
                      </Link>
                    </p>
                    <a
                      href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20quisiera%20solicitar%20información&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b3007a] font-medium hover:text-[#8e0061] transition-colors inline-flex items-center mt-2"
                    >
                      Contactar por WhatsApp <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div
                  className={`flex items-start transform hover:translate-x-2 transition-transform duration-300 ${
                    isVisible["contact"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "0.3s", transitionDuration: "0.8s" }}
                >
                  <Mail className="h-8 w-8 text-[#b3007a] mr-4 mt-1 animate-pulse" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <Link
                        href="mailto:info@agroveterinariagross.com"
                        className="hover:text-[#b3007a] transition-colors"
                      >
                        info@agroveterinariagross.com
                      </Link>
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start transform hover:translate-x-2 transition-transform duration-300 ${
                    isVisible["contact"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "0.4s", transitionDuration: "0.8s" }}
                >
                  <Clock className="h-8 w-8 text-[#b3007a] mr-4 mt-1 animate-pulse" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horarios de Atención</h3>
                    <div className="text-gray-600">
                      <p>Lunes a Viernes: 8:00 - 19:00</p>
                      <p>Sábados: 8:00 - 13:00</p>
                      <p>Domingos y Feriados: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-start transform hover:translate-x-2 transition-transform duration-300 ${
                    isVisible["contact"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "0.5s", transitionDuration: "0.8s" }}
                >
                  <div className="h-8 w-8 text-[#b3007a] mr-4 mt-1 flex justify-center animate-bounce">
                    <Instagram className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Redes Sociales</h3>
                    <div className="flex space-x-4">
                      <Link
                        href="https://instagram.com"
                        className="text-gray-600 hover:text-[#b3007a] transition-colors"
                      >
                        Instagram
                      </Link>
                      <Link
                        href="https://facebook.com"
                        className="text-gray-600 hover:text-[#b3007a] transition-colors"
                      >
                        Facebook
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-gray-50 p-8 rounded-lg shadow-md overflow-hidden ${
                isVisible["contact"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDuration: "0.8s" }}
            >
              <h3 className="font-semibold text-lg mb-4 text-[#8e0061]">Nuestra Ubicación</h3>
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.0251936438876!2d-55.12126492394568!3d-27.48702101977926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be3f0c0b3af9%3A0x9f91d9e3a6c8e9a!2sAv.%20Libertad%20315%2C%20N3360EWG%20Ober%C3%A1%2C%20Misiones!5e0!3m2!1ses!2sar!4v1715805636303!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-[#8e0061] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 animate-pulse">¿Emergencia veterinaria?</h2>
          <p className="text-lg mb-6">Para casos de emergencia, contáctanos inmediatamente</p>
          <Link
            href="tel:+5493755677918"
            className="inline-block bg-white text-[#8e0061] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors animate-bounce"
          >
            Llamar a Emergencias
          </Link>
        </div>
      </section>
    </main>
  )
}
