"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    category: string
    description: string
    images: { url: string }[]  // Cambié el tipo para reflejar la estructura real
  }
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  // Mapeo las URLs de las imágenes desde los objetos
  const imageUrls = product.images.map((img) => img.url)

  const [currentImage, setCurrentImage] = useState(0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#8e0061]">{product.name}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="relative h-80 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={imageUrls[currentImage] || "/placeholder.svg"}
                  alt={`${product.name} imagen principal`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex space-x-2 overflow-x-auto pb-2">
                {imageUrls.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative h-16 w-16 rounded-md overflow-hidden border-2 ${
                      currentImage === index ? "border-[#b3007a]" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} imagen ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="inline-block bg-[#f0f0f0] text-[#8e0061] text-sm font-medium px-2 py-1 rounded mb-4">
                {product.category}
              </span>
              <div className="prose max-w-none">
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="mt-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20me%20interesa%20saber%20más%20sobre%20este%20producto&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold py-2 px-4 rounded-lg transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.76-.954l-4.17 1.093 1.112-4.063A7.935 7.935 0 0 1 4.2 12c0-4.373 3.557-7.93 7.93-7.93S20.06 7.627 20.06 12c0 4.373-3.557 7.93-7.93 7.93h-.1z" />
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
