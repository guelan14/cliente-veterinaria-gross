"use client"

import React, { useState, useEffect, useRef } from "react"
import { Save, Plus } from "lucide-react"
import Image from "next/image"

type Servicio = {
  id: number
  titulo: string
  descripcion: string
  imagen?: string
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Servicio[]>([])
  const [editingService, setEditingService] = useState<number | "new" | null>(null)
  const [formData, setFormData] = useState<{ [key: string]: any }>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch("/api/clinica-veterinaria")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error al cargar servicios:", err))
  }, [])

  const handleEdit = (id: number) => {
    setEditingService(id)
    const service = services.find((s) => s.id === id)
    if (service) {
      setFormData({
        titulo: service.titulo,
        descripcion: service.descripcion,
        imagen: service.imagen || "/placeholder.svg",
        file: null,
      })
    }
  }

  const handleAddNew = () => {
    setEditingService("new")
    setFormData({
      titulo: "",
      descripcion: "",
      imagen: "/placeholder.svg",
      file: null,
    })
  }

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este servicio?")) return

    try {
      const res = await fetch(`/api/clinica-veterinaria/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) {
        alert("Error al eliminar")
        return
      }
      setServices((prev) => prev.filter((s) => s.id !== id))
      if (editingService === id) {
        setEditingService(null)
        setFormData({})
      }
      alert("Servicio eliminado")
    } catch (error) {
      alert("Error en la conexión")
      console.error(error)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Por favor selecciona un archivo de imagen válido")
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("El archivo es demasiado grande. Máximo 2MB.")
      return
    }

    const imageUrl = URL.createObjectURL(file)
    setFormData((prev) => ({ ...prev, imagen: imageUrl, file }))
  }

  const handleChangeImageClick = () => {
    fileInputRef.current?.click()
  }

const handleSave = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!editingService) return

  try {
    const url =
      editingService === "new"
        ? "/api/clinica-veterinaria"
        : `/api/clinica-veterinaria/${editingService}`

    // Crear un FormData para enviar el archivo y datos juntos
    const formDataToSend = new FormData()
    formDataToSend.append("titulo", formData.titulo)
    formDataToSend.append("descripcion", formData.descripcion)

    // Si el usuario seleccionó un archivo nuevo, lo agregamos
    if (formData.file) {
      formDataToSend.append("imagen", formData.file)
    }

    // Enviar la solicitud sin headers explícitos para que el navegador
    // establezca Content-Type con boundary correcto para multipart/form-data
    const res = await fetch(url, {
      method: editingService === "new" ? "POST" : "PUT",
      body: formDataToSend,
    })

    if (!res.ok) {
      alert("Error al guardar los cambios")
      return
    }

    const savedService = await res.json()

    if (editingService === "new") {
      setServices((prev) => [...prev, savedService])
    } else {
      setServices((prev) =>
        prev.map((s) => (s.id === savedService.id ? savedService : s))
      )
    }

    alert("Cambios guardados con éxito")
    setEditingService(null)
    setFormData({})
  } catch (error) {
    alert("Error en la conexión")
    console.error(error)
  }
}


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de Servicios</h1>
        <button
          onClick={handleSave}
          className="admin-button admin-button-success flex items-center"
          disabled={!editingService}
        >
          <Save className="w-4 h-4 mr-2" /> Guardar Cambios
        </button>
      </div>

      <div className="admin-card bg-white p-6">
        <h2 className="text-lg font-bold mb-4">Servicios Actuales</h2>

        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="border p-4 rounded">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">{service.titulo}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(service.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              {editingService === service.id ? (
                <form className="space-y-4" onSubmit={handleSave}>
                  <div className="admin-form-group">
                    <label className="admin-label">Título</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={formData.titulo || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, titulo: e.target.value })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Descripción</label>
                    <textarea
                      className="admin-input min-h-[100px]"
                      value={formData.descripcion || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, descripcion: e.target.value })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Imagen</label>
                    <div className="flex items-start space-x-4">
                      <div className="relative w-40 h-40 border rounded overflow-hidden">
                        <Image
                          src={formData.imagen || "/placeholder.svg"}
                          alt={formData.titulo || "Imagen del servicio"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="admin-button flex items-center mb-2"
                          onClick={handleChangeImageClick}
                        >
                          Cambiar Imagen
                        </button>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <p className="text-sm text-gray-500">
                          Formatos permitidos: JPG, PNG. Tamaño máximo: 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 relative h-40 rounded overflow-hidden">
                    <Image
                      src={service.imagen || "/placeholder.svg"}
                      alt={service.titulo}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600">{service.descripcion}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Formulario para nuevo servicio */}
          {editingService === "new" && (
            <div className="border p-4 rounded">
              <h3 className="font-bold text-lg mb-4">Nuevo Servicio</h3>
              <form className="space-y-4" onSubmit={handleSave}>
                <div className="admin-form-group">
                  <label className="admin-label">Título</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={formData.titulo || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, titulo: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Descripción</label>
                  <textarea
                    className="admin-input min-h-[100px]"
                    value={formData.descripcion || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, descripcion: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Imagen</label>
                  <div className="flex items-start space-x-4">
                    <div className="relative w-40 h-40 border rounded overflow-hidden">
                      <Image
                        src={formData.imagen || "/placeholder.svg"}
                        alt={formData.titulo || "Imagen del servicio"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="admin-button flex items-center mb-2"
                        onClick={handleChangeImageClick}
                      >
                        Cambiar Imagen
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                      <p className="text-sm text-gray-500">
                        Formatos permitidos: JPG, PNG. Tamaño máximo: 2MB
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        <button
          onClick={handleAddNew}
          className="admin-button flex items-center mt-6"
          disabled={editingService !== null}
        >
          <Plus className="w-4 h-4 mr-2" /> Añadir Nuevo Servicio
        </button>
      </div>
    </div>
  )
}
