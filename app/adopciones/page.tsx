"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import AdoptionModal from "@/components/adoption-modal"

type Imagen = {
  url: string
}

type Pet = {
  nombre: string
  edad: string
  genero: string
  descripcion: string
  imagenes: Imagen[]
  [key: string]: any // for any additional properties
}

export default function AdopcionesPage() {
  const [mascotas, setMascotas] = useState<Pet[]>([])
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchMascotas = async () => {
      const res = await fetch("/api/mascotas")
      const data = await res.json()
      setMascotas(data)
    }
    fetchMascotas()
  }, [])

  const openPetModal = (pet: any) => {
    setSelectedPet(pet)
    setIsModalOpen(true)
  }

  const closePetModal = () => setIsModalOpen(false)
  
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b3007a] to-[#8e0061] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInDown">Adopciones</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp">
            Ayúdanos a encontrar un hogar para estas mascotas que necesitan una segunda oportunidad
          </p>
        </div>
      </section>

      {/* Adoption Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8e0061] mb-4 animate-fadeIn">Mascotas en Adopción</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Todas nuestras mascotas en adopción están vacunadas, desparasitadas y listas para formar parte de tu
              familia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mascotas.map((pet, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openPetModal(pet)}
              >
                <div className="relative h-64 w-full">
                <Image
                    src={pet.imagenes[0]?.url || "/placeholder.svg"}
                    alt={pet.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-[#8e0061]">{pet.nombre}</h3>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">{pet.edad}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                        {pet.genero}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{pet.descripcion}</p>
                  <button className="inline-flex items-center text-[#b3007a] font-medium hover:text-[#8e0061] transition-colors">
                    Conocer más <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8e0061] mb-4 animate-fadeIn">Proceso de Adopción</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce los pasos para adoptar una mascota y darle un hogar lleno de amor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:translate-y-[-10px] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#b3007a] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#8e0061] mb-2">Contacto</h3>
              <p className="text-gray-600">
                Comunícate con nosotros a través de WhatsApp o visítanos en nuestra clínica para conocer a las mascotas
                disponibles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform hover:translate-y-[-10px] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#b3007a] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#8e0061] mb-2">Entrevista</h3>
              <p className="text-gray-600">
                Realizamos una breve entrevista para asegurarnos que la mascota vaya a un hogar adecuado para sus
                necesidades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform hover:translate-y-[-10px] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#b3007a] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#8e0061] mb-2">Adopción</h3>
              <p className="text-gray-600">
                Firmamos un acuerdo de adopción responsable y te entregamos a tu nueva mascota con todas sus vacunas al
                día.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20me%20interesa%20el%20proceso%20de%20adopción&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b3007a] hover:bg-[#8e0061] text-white font-bold py-3 px-8 rounded-lg transition-all inline-flex items-center animate-bounce"
            >
              Consultar por WhatsApp <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pet Modal */}
      {selectedPet && <AdoptionModal isOpen={isModalOpen} onClose={closePetModal} pet={selectedPet} />}
    </main>
  )
}
