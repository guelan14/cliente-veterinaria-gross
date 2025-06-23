"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Search } from 'lucide-react'
import ProductModal from "@/components/product-modal"

export default function ProductosServiciosPage() {
  const [loading, setLoading] = useState(true);
  const [servicios, setServicios] = useState<any[]>([]);
  const [products, setProducts] = useState<ProductFromApi[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("todos")

  const openProductModal = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeProductModal = () => {
    setIsModalOpen(false)
  }

  // Define the ProductFromApi type
  type ProductFromApi = {
    name: string;
    image: string;
    category: string;
    description: string;
    images: { url: string }[];
  };

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "alimentos", name: "Alimentos" },
    { id: "medicamentos", name: "Medicamentos" },
    { id: "accesorios", name: "Accesorios" },
    { id: "higiene", name: "Higiene" },
  ]

  useEffect(() => {
      fetch("/api/productos")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error al obtener productos");
          }
          return res.json();
        })
        .then((data: ProductFromApi[]) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        });
    }, []);

     useEffect(() => {
    fetch("/api/nuestros-servicios")
      .then((res) => res.json())
      .then((data) => {
        setServicios(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando servicios y productos ...</p>;

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "todos" || product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b3007a] to-[#8e0061] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInDown">Productos y Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp">Todo lo que tu mascota necesita para una vida saludable y feliz</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#b3007a] focus:border-[#b3007a] block w-full pl-10 p-2.5 transition-all duration-300 focus:scale-105"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 ${
                      activeCategory === category.id
                        ? "bg-[#b3007a] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer animate-fadeIn" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openProductModal(product)}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 transition-transform duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-[#b3007a] font-medium capitalize">{product.category}</span>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                      <button className="text-[#b3007a] font-medium hover:text-[#8e0061] transition-colors inline-flex items-center text-sm">
                        Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fadeIn">
              <p className="text-gray-600 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
              <button
                className="mt-4 text-[#b3007a] font-medium hover:text-[#8e0061] transform hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("todos")
                }}
              >
                Mostrar todos los productos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8e0061] mb-4 animate-fadeIn">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tus mascotas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicios.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:translate-y-[-10px] transition-transform duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#8e0061] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href="/clinica-veterinaria"
                  className="mt-4 inline-block text-[#b3007a] font-medium hover:underline"
                >
                  Saber más <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8e0061] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-pulse">¿Necesitas un producto específico?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Si no encuentras lo que buscas, contáctanos. Podemos conseguir productos específicos para las necesidades de
            tu mascota
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20estoy%20buscando%20un%20producto%20específico&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-[#8e0061] font-bold py-3 px-8 rounded-lg transition-all inline-flex items-center animate-bounce"
          >
            Consultar por WhatsApp <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && <ProductModal isOpen={isModalOpen} onClose={closeProductModal} product={selectedProduct} />}
    </main>
  )
}
