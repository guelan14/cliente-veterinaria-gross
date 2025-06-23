"use client"

import { useState } from "react"
import Image from "next/image"
import { Upload, Trash2, Search } from "lucide-react"

export default function AdminImagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("todas")

  const images = [
    {
      id: 1,
      name: "Perro principal",
      category: "hero",
      path: "/images/brown-white-dog.png",
      size: "245 KB",
      date: "15/05/2023",
    },
    {
      id: 2,
      name: "Equipo veterinario",
      category: "nosotros",
      path: "/placeholder.svg?height=400&width=600",
      size: "320 KB",
      date: "10/04/2023",
    },
    {
      id: 3,
      name: "Producto 1",
      category: "productos",
      path: "/placeholder.svg?height=200&width=200",
      size: "180 KB",
      date: "22/03/2023",
    },
    {
      id: 4,
      name: "Servicio de vacunación",
      category: "servicios",
      path: "/placeholder.svg?height=300&width=400",
      size: "210 KB",
      date: "05/02/2023",
    },
    {
      id: 5,
      name: "Mascota en adopción",
      category: "adopciones",
      path: "/placeholder.svg?height=300&width=300",
      size: "195 KB",
      date: "18/01/2023",
    },
    {
      id: 6,
      name: "Logo de la clínica",
      category: "general",
      path: "/placeholder-logo.svg",
      size: "120 KB",
      date: "01/01/2023",
    },
    {
      id: 7,
      name: "Banner promocional",
      category: "marketing",
      path: "/placeholder.svg?height=200&width=600",
      size: "275 KB",
      date: "12/12/2022",
    },
    {
      id: 8,
      name: "Instalaciones",
      category: "nosotros",
      path: "/placeholder.svg?height=400&width=600",
      size: "350 KB",
      date: "05/11/2022",
    },
  ]

  const categories = [
    { id: "todas", name: "Todas" },
    { id: "hero", name: "Hero" },
    { id: "nosotros", name: "Nosotros" },
    { id: "productos", name: "Productos" },
    { id: "servicios", name: "Servicios" },
    { id: "adopciones", name: "Adopciones" },
    { id: "general", name: "General" },
    { id: "marketing", name: "Marketing" },
  ]

  const filteredImages = images.filter(
    (image) =>
      (selectedCategory === "todas" || image.category === selectedCategory) &&
      image.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage)
  const paginatedImages = filteredImages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de Imágenes</h1>
        <button className="admin-button admin-button-primary flex items-center">
          <Upload className="w-4 h-4 mr-2" /> Subir Imagen
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar imágenes..."
            className="admin-input pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm">Categoría:</span>
          <select
            className="admin-input w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedImages.map((image) => (
          <div key={image.id} className="admin-card bg-white p-4 hover:shadow-md transition-shadow">
            <div className="relative h-40 w-full mb-4 bg-gray-100 rounded overflow-hidden">
              <Image src={image.path || "/placeholder.svg"} alt={image.name} fill className="object-contain" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{image.name}</h3>
                <p className="text-sm text-gray-500">
                  <span className="capitalize">{image.category}</span> • {image.size}
                </p>
                <p className="text-xs text-gray-400">Subida: {image.date}</p>
              </div>
              <button className="text-red-600 hover:text-red-800">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
