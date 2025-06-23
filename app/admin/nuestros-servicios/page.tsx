"use client"

import React, { useEffect, useState } from "react"
import { Save, Plus, Trash2, Pencil } from "lucide-react"
import Image from "next/image"

type NuestroServicio = {
  id: number
  title: string
  description: string
  icon: string
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<NuestroServicio[]>([])
  const [editingService, setEditingService] = useState<number | null>(null)

  const [newService, setNewService] = useState({
    title: "",
    description: "",
    icon: "",
  })

  useEffect(() => {
    fetch("/api/nuestros-servicios")
      .then((res) => res.json())
      .then(setServices)
  }, [])

  const handleEdit = (id: number) => {
    setEditingService(id)
  }


  
  const handleSave = async (
  id: number,
  title: string,
  description: string,
  icon: string
) => {
  try {
    const res = await fetch(`/api/nuestros-servicios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, icon }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert("Error al actualizar: " + (errorData.error || "Error desconocido"));
      return;
    }

    const updatedService = await res.json();

    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? updatedService : service
      )
    );

    setEditingService(null);
    alert("Servicio actualizado correctamente");
  } catch (error) {
    console.error("Error en handleSave:", error);
    alert("Error al guardar el servicio");
  }
};

  const handleDelete = async (id: number) => {
    await fetch("/api/nuestros-servicios", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    setServices((prev) => prev.filter((s) => s.id !== id))
  }

  const handleCreate = async () => {
    const res = await fetch("/api/nuestros-servicios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newService),
    })

    const created = await res.json()
    setServices([...services, created])
    setNewService({ title: "", description: "", icon: "" })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de Servicios</h1>
      </div>

      <div className="admin-card bg-white p-6">
        <h2 className="text-lg font-bold mb-4">Servicios Actuales</h2>

        <div className="space-y-6">
          {services.map((service) =>
            editingService === service.id ? (
              <div key={service.id} className="border p-4 rounded space-y-2">
                <input
                  className="admin-input w-full"
                  value={service.title}
                  onChange={(e) =>
                    setServices((prev) =>
                      prev.map((s) =>
                        s.id === service.id ? { ...s, title: e.target.value } : s
                      )
                    )
                  }
                />
                <textarea
                  className="admin-input w-full min-h-[80px]"
                  value={service.description}
                  onChange={(e) =>
                    setServices((prev) =>
                      prev.map((s) =>
                        s.id === service.id ? { ...s, description: e.target.value } : s
                      )
                    )
                  }
                />
                <input
                  className="admin-input w-full"
                  value={service.icon}
                  onChange={(e) =>
                    setServices((prev) =>
                      prev.map((s) =>
                        s.id === service.id ? { ...s, icon: e.target.value } : s
                      )
                    )
                  }
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() =>
                      handleSave(service.id, service.title, service.description, service.icon)
                    }
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    <Save className="w-4 h-4 inline-block mr-1" />
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditingService(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div key={service.id} className="border p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(service.id)}
                      className="text-blue-600 hover:underline"
                    >
                      <Pencil className="inline-block w-4 h-4" /> Editar
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="text-red-600 hover:underline"
                    >
                      <Trash2 className="inline-block w-4 h-4" /> Eliminar
                    </button>
                  </div>
                </div>
                <div className="text-gray-700">{service.description}</div>
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt="icono"
                  width={60}
                  height={60}
                  className="mt-2 object-contain"
                />
              </div>
            )
          )}
        </div>

        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-bold mb-4">Agregar Nuevo Servicio</h2>
          <div className="space-y-3">
            <input
              placeholder="Título"
              className="admin-input w-full"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
            />
            <textarea
              placeholder="Descripción"
              className="admin-input w-full min-h-[80px]"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            />
            <input
              placeholder="URL del ícono"
              className="admin-input w-full"
              value={newService.icon}
              onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
            />
            <button
              onClick={handleCreate}
              className="admin-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 inline-block mr-1" /> Añadir Servicio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
