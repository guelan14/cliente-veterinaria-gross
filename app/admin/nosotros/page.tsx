"use client"

import { useState, useEffect } from "react"
import { Save, Plus, Trash2, Upload } from "lucide-react"

type Valor = {
  id: string
  titulo: string
  descripcion: string
}

type InfoGeneral = {
  historia: string
  imagen: string
  mision: string
  vision: string
  valores: Valor[]
}

export default function AdminSobreNosotros() {
  const [formData, setFormData] = useState<InfoGeneral>({
    historia: "",
    imagen: "",
    mision: "",
    vision: "",
    valores: [],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/sobre-nosotros")
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          historia: data.historia,
          imagen: data.imagen, // aquí la clave que espera tu UI
          mision: data.mision,
          vision: data.vision,
          valores: data.valores,
        });
        setLoading(false);
      });
  }, []);

  const handleChange = (field: keyof InfoGeneral, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleValorChange = (index: number, field: keyof Valor, value: string) => {
    const updated = [...formData.valores]
    updated[index] = { ...updated[index], [field]: value }
    setFormData({ ...formData, valores: updated })
  }

  const handleAddValor = () => {
    setFormData({
      ...formData,
      valores: [...formData.valores, { id: crypto.randomUUID(), titulo: "", descripcion: "" }],
    })
  }

  const handleRemoveValor = (index: number) => {
    const updated = [...formData.valores]
    updated.splice(index, 1)
    setFormData({ ...formData, valores: updated })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formDataImage = new FormData()
    formDataImage.append("file", file)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formDataImage,
    })

    const data = await res.json()
    setFormData((prev) => ({ ...prev, imagen: data.url }))
  }

  const handleSave = async () => {
    await fetch("/api/sobre-nosotros/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    alert("Cambios guardados")
  }

  if (loading) return <p>Cargando...</p>

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-[#8e0061]">Administrar Sección "Sobre Nosotros"</h1>

      <div className="admin-card space-y-4">
        <label className="admin-label">Historia</label>
        <textarea
          className="admin-input"
          rows={5}
          value={formData.historia}
          onChange={(e) => handleChange("historia", e.target.value)}
        />

        <label className="admin-label">Imagen</label>
        <div className="flex gap-4 items-center">
          {formData.imagen && (
            <img
              src={formData.imagen}
              alt="Imagen actual"
              className="w-32 h-24 object-cover rounded shadow"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        <label className="admin-label">Misión</label>
        <textarea
          className="admin-input"
          rows={4}
          value={formData.mision}
          onChange={(e) => handleChange("mision", e.target.value)}
        />

        <label className="admin-label">Visión</label>
        <textarea
          className="admin-input"
          rows={4}
          value={formData.vision}
          onChange={(e) => handleChange("vision", e.target.value)}
        />
      </div>

      <div className="admin-card">
        <h2 className="text-xl font-bold mb-4">Valores</h2>
        <div className="space-y-6">
          {formData.valores.map((valor, index) => (
            <div key={valor.id} className="border p-4 rounded space-y-2">
              <input
                type="text"
                className="admin-input"
                placeholder="Título"
                value={valor.titulo}
                onChange={(e) => handleValorChange(index, "titulo", e.target.value)}
              />
              <textarea
                className="admin-input"
                rows={2}
                placeholder="Descripción"
                value={valor.descripcion}
                onChange={(e) => handleValorChange(index, "descripcion", e.target.value)}
              />
              <button
                onClick={() => handleRemoveValor(index)}
                className="text-red-600 text-sm hover:underline"
              >
                <Trash2 className="w-4 h-4 inline" /> Eliminar
              </button>
            </div>
          ))}
          <button
            onClick={handleAddValor}
            className="admin-button flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" /> Agregar Valor
          </button>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="admin-button admin-button-success flex items-center"
      >
        <Save className="w-4 h-4 mr-2" /> Guardar Cambios
      </button>
    </div>
  )
}
