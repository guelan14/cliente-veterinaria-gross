"use client"

import { useEffect, useState } from "react"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import Image from "next/image"
import ModalProducto from "../../../components/admin/modalProducto"

type Product = {
  id: string | number
  name: string
  category: string
  description: string
  image?: string
}

type ProductForm = {
  id?: string | number
  name: string
  category: string
  description: string
  image?: string | File
  images?: File[]
}

export default function ProductosPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [modalProduct, setModalProduct] = useState<ProductForm | null>(null)

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "Alimentos", name: "Alimentos" },
    { id: "Medicamentos", name: "Medicamentos" },
    { id: "Accesorios", name: "Accesorios" },
    { id: "Higiene", name: "Higiene" },
  ]

  useEffect(() => {
    fetch("/api/productos")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const filtered = products.filter(p =>
    (selectedCategory === "todos" || p.category === selectedCategory) &&
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  const itemsPerPage = 5
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const pageItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const openNew = () => setModalProduct({ name: "", category: categories[1].id, description: "", image: "", images: [] })
  const openEdit = (p: Product) => setModalProduct(p)
  const closeModal = () => setModalProduct(null)

  const handleSubmit = async (data: ProductForm) => {
    const form = new FormData()
    form.append("name", data.name)
    form.append("category", data.category)
    form.append("description", data.description)
    if (data.image instanceof File) form.append("mainImage", data.image)
    data.images?.forEach(file => form.append("additionalImages", file))

    if (data.id) {
      // editar existente
      const res = await fetch(`/api/productos/${data.id}`, { method: "PUT", body: JSON.stringify(data) })
      if (res.ok) {
        const updated = await res.json()
        setProducts(prod => prod.map(p => p.id === updated.id ? updated : p))
      }
    } else {
      const res = await fetch("/api/productos", { method: "POST", body: form })
      if (res.ok) {
        const created = await res.json()
        setProducts(prod => [created, ...prod])
      }
    }
  }

  const handleDelete = async (id: string | number) => {
    if (!confirm("¿Eliminar este producto?")) return
    await fetch(`/api/productos/${id}`, { method: "DELETE" })
    setProducts(prod => prod.filter(p => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de Productos</h1>
        <button onClick={openNew} className="admin-button admin-button-primary flex items-center">
          <Plus className="w-4 h-4 mr-2" /> Nuevo Producto
        </button>
      </header>

      {/* Buscador + Filtro */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input className="admin-input pl-10" placeholder="Buscar..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <select className="admin-input" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>

      {/* Tabla */}
      <table className="admin-table w-full">
        <thead>
          <tr><th>Imagen</th><th>Nombre</th><th>Categoría</th><th>Descripción</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {pageItems.map(p => (
            <tr key={p.id}>
              <td><Image src={p.image || "/placeholder.svg"} alt="" width={40} height={40} className="rounded" /></td>
              <td>{p.name}</td><td>{p.category}</td><td className="truncate max-w-xs">{p.description}</td>
              <td className="space-x-2">
                <button onClick={() => openEdit(p)}><Edit /></button>
                <button onClick={() => handleDelete(p.id)}><Trash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <nav className="flex items-center justify-between">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Anterior</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i+1} className={currentPage === i+1 ? "active" : ""} onClick={() => setCurrentPage(i+1)}>{i+1}</button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Siguiente</button>
      </nav>

      {modalProduct && (
        <ModalProducto
          product={modalProduct}
          categories={categories}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
