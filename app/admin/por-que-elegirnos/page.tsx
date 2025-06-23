"use client"

import React, { useState, useEffect } from "react"
import { Save, Plus } from "lucide-react"

type Razon = {
  id: number
  titulo: string
  descripcion: string
}

export default function AdminReasonsPage() {
  const [razones, setRazones] = useState<Razon[]>([])
  const [editingRazon, setEditingRazon] = useState<number | "new" | null>(null)
  const [formData, setFormData] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    fetch("/api/por-que-elegirnos")
      .then((res) => res.json())
      .then((data) => setRazones(data))
      .catch((err) => console.error("Error al cargar razones:", err))
  }, [])

  const handleEdit = (id: number) => {
    setEditingRazon(id)
    const razon = razones.find((r) => r.id === id)
    if (razon) {
      setFormData({
        titulo: razon.titulo,
        descripcion: razon.descripcion,
      })
    }
  }

  const handleAddNew = () => {
    setEditingRazon("new")
    setFormData({
      titulo: "",
      descripcion: "",
    })
  }

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar esta razón?")) return

    try {
      const res = await fetch(`/api/por-que-elegirnos/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) {
        alert("Error al eliminar")
        return
      }
      setRazones((prev) => prev.filter((r) => r.id !== id))
      if (editingRazon === id) {
        setEditingRazon(null)
        setFormData({})
      }
      alert("Razón eliminada")
    } catch (error) {
      alert("Error en la conexión")
      console.error(error)
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingRazon) return

    try {
      const method = editingRazon === "new" ? "POST" : "PUT"
      const url =
        editingRazon === "new"
          ? "/api/por-que-elegirnos"
          : `/api/por-que-elegirnos/${editingRazon}`

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: formData.titulo,
          descripcion: formData.descripcion,
        }),
      })

      if (!res.ok) {
        alert("Error al guardar los cambios")
        return
      }

      const savedRazon = await res.json()

      if (editingRazon === "new") {
        setRazones((prev) => [...prev, savedRazon])
      } else {
        setRazones((prev) =>
          prev.map((r) => (r.id === savedRazon.id ? savedRazon : r))
        )
      }

      alert("Cambios guardados con éxito")
      setEditingRazon(null)
      setFormData({})
    } catch (error) {
      alert("Error en la conexión")
      console.error(error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">¿Por Qué Elegirnos?</h1>
        <button
          onClick={handleSave}
          className="admin-button admin-button-success flex items-center"
          disabled={!editingRazon}
        >
          <Save className="w-4 h-4 mr-2" /> Guardar Cambios
        </button>
      </div>

      <div className="admin-card bg-white p-6">
        <h2 className="text-lg font-bold mb-4">Razones Actuales</h2>

        <div className="space-y-6">
          {razones.map((razon) => (
            <div key={razon.id} className="border p-4 rounded">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">{razon.titulo}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(razon.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(razon.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              {editingRazon === razon.id ? (
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
                </form>
              ) : (
                <p className="text-gray-600">{razon.descripcion}</p>
              )}
            </div>
          ))}

          {editingRazon === "new" && (
            <div className="border p-4 rounded">
              <h3 className="font-bold text-lg mb-4">Nueva Razón</h3>
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
              </form>
            </div>
          )}
        </div>

        <button
          onClick={handleAddNew}
          className="admin-button flex items-center mt-6"
          disabled={editingRazon !== null}
        >
          <Plus className="w-4 h-4 mr-2" /> Añadir Nueva Razón
        </button>
      </div>
    </div>
  )
}
