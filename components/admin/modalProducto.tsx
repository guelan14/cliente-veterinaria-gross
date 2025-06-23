"use client"

import { useState, useEffect } from "react"

type ProductForm = {
  id?: string | number
  name: string
  category: string
  description: string
  image?: string | File
  images?: File[]
}

type Props = {
  product?: ProductForm
  categories: { id: string; name: string }[]
  onSubmit: (data: ProductForm) => void
  onClose: () => void
}

export default function ModalProducto({ product, categories, onSubmit, onClose }: Props) {
  const [form, setForm] = useState<ProductForm>({
    id: product?.id,
    name: product?.name || "",
    category: product?.category || categories.find(c => c.id !== "todos")?.id || "",
    description: product?.description || "",
    image: product?.image || undefined,
    images: [],
  })
  const [mainImageFile, setMainImageFile] = useState<File | null>(null)
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([])

  useEffect(() => {
    if (product) {
      setForm(prev => ({
        ...prev,
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        image: product.image,
      }))
    }
  }, [product])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setMainImageFile(file)
    setForm(prev => ({ ...prev, image: file || undefined }))
  }

  const handleAdditional = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) setAdditionalFiles(Array.from(files))
  }

  const submit = () => {
    onSubmit({ ...form, image: form.image, images: additionalFiles })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">{product?.id ? "Editar" : "Nuevo"} Producto</h2>
        <div className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="admin-input w-full" />
          <select name="category" value={form.category} onChange={handleChange} className="admin-input w-full">
            {categories.filter(c => c.id !== "todos").map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descripción" className="admin-input w-full" rows={3} />
          <div>
            <label>Imagen Principal:</label>
            <input type="file" accept="image/*" onChange={handleMainImage} />
          </div>
          <div>
            <label>Imágenes Adicionales:</label>
          <input type="file" name="extraImages" accept="image/*" multiple onChange={handleAdditional} />
          </div>
          <div className="flex justify-end space-x-2">
            <button onClick={onClose} className="admin-button admin-button-secondary">Cancelar</button>
            <button onClick={submit} className="admin-button admin-button-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
