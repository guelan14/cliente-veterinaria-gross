export const revalidate = 0;

import { PrismaClient } from "@prisma/client"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"

const prisma = new PrismaClient()

export default async function ClinicaVeterinariaPage() {
  const servicios = await prisma.servicioClinico.findMany()
  const razonesElegirnos = await prisma.razonElegirnos.findMany();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b3007a] to-[#8e0061] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInDown">Clínica Veterinaria</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp">
            Atención médica profesional y especializada para el cuidado integral de tu mascota
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8e0061] mb-4 animate-fadeIn">Nuestros Servicios Clínicos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tus mascotas
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicios.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row gap-6 items-start transform hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight"
                }`}
              >
                <div className="md:w-1/3 relative h-60 w-full rounded-lg overflow-hidden">
                  <Image src={service.imagen} alt={service.titulo} fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-[#8e0061] mb-4">{service.titulo}</h2>
                  <p className="text-gray-600">{service.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8e0061] mb-4 animate-fadeIn">¿Por qué elegirnos?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de 35 años de experiencia nos respaldan como la clínica veterinaria de confianza en Oberá
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {razonesElegirnos.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-md transform hover:translate-y-[-10px] transition-transform duration-300 animate-fadeIn"
                style={{ animationDelay: `0s` /* opcional: podés usar index si usás map((item, index) => ...) */ }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b3007a] p-2 rounded-full mr-4 animate-pulse">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#8e0061]">{item.titulo}</h3>
                </div>
                <p className="text-gray-600">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8e0061] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-pulse">¿Necesitas atención para tu mascota?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para agendar una cita o resolver cualquier consulta sobre nuestros servicios
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20quisiera%20solicitar%20un%20turno&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-[#8e0061] font-bold py-3 px-8 rounded-lg transition-all inline-flex items-center animate-bounce"
          >
            Solicitar Turno <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  )
}
