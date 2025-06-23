"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

type TimelineEvent = {
  id: number; // Cambié a number
  anio: string;
  titulo: string;
  descripcion: string;
  imagen: string;
};

export default function AdminTimeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [tempIdCounter, setTempIdCounter] = useState(-1); // Para nuevos eventos temporales

  useEffect(() => {
    fetch("/api/trayectoria")
      .then((res) => res.json())
      .then((data) => {
        // Convertimos el id a number para que coincida con Prisma
        const eventsWithId = data.map((ev: any) => ({
          id: Number(ev.id),
          anio: ev.anio || "",
          titulo: ev.titulo || "",
          descripcion: ev.descripcion || "",
          imagen: ev.imagen || "",
        }));
        setEvents(eventsWithId);
        setLoading(false);
      });
  }, []);

  const handleChange = (
    index: number,
    field: keyof TimelineEvent,
    value: string
  ) => {
    const updated = [...events];
    updated[index] = { ...updated[index], [field]: value };
    setEvents(updated);
  };

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        id: tempIdCounter, // id temporal negativo para nuevo evento
        anio: "",
        titulo: "",
        descripcion: "",
        imagen: "",
      },
    ]);
    setTempIdCounter(tempIdCounter - 1); // Decrementamos para el próximo id temporal
  };

  const handleRemoveEvent = async (id: number) => {
    // Actualizamos estado local primero
    const updated = events.filter((ev) => ev.id !== id);
    setEvents(updated);

    // Si el id es negativo (nuevo, no guardado), no hacemos llamada a backend
    if (id < 0) {
      console.log("Evento temporal eliminado localmente");
      return;
    }

    try {
      const res = await fetch(`/api/trayectoria/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Error al eliminar el evento");
      }

      console.log("Evento eliminado con éxito");
    } catch (error) {
      console.error(error);
      // Opcional: revertir estado local o mostrar mensaje de error
    }
  };

  const handleImageUpload = async (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataImage = new FormData();
    formDataImage.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formDataImage,
    });

    const data = await res.json();
    handleChange(index, "imagen", data.url);
  };

 const handleSave = async (eventos: TimelineEvent[]) => {
  try {
    console.log("Eventos antes de enviar al backend:", eventos);

    // Validar que anio sea convertible a número
    eventos.forEach((ev, i) => {
      const num = Number(ev.anio);
      if (isNaN(num)) {
        console.warn(`Evento índice ${i} con anio inválido:`, ev.anio);
      }
    });

    // Transformamos anio a número antes de enviar
    const eventosToSend = eventos.map(ev => ({
      ...ev,
      anio: Number(ev.anio),
    }));

    const res = await fetch("/api/trayectoria", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventosToSend),
    });

    if (!res.ok) throw new Error("Error al actualizar trayectoria");
    const data = await res.json();

    setEvents(
      data.map((ev: any) => ({
        id: Number(ev.id),
        anio: ev.anio.toString(),
        titulo: ev.titulo,
        descripcion: ev.descripcion,
        imagen: ev.imagen,
      }))
    );
    setTempIdCounter(-1);
  } catch (error) {
    console.error(error);
  }
};

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-[#8e0061]">Administrar Timeline</h1>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="border p-4 rounded space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Evento #{index + 1}</h2>
              <button
                onClick={() => handleRemoveEvent(event.id)}
                className="text-red-600 hover:underline flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-1" /> Eliminar
              </button>
            </div>

            <input
              type="number"
              placeholder="Año"
              className="admin-input"
              value={event.anio}
              onChange={(e) => handleChange(index, "anio", e.target.value)}
              min="1900"
              max="2100"
            />
            <input
              type="text"
              placeholder="Título"
              className="admin-input"
              value={event.titulo}
              onChange={(e) => handleChange(index, "titulo", e.target.value)}
            />
            <textarea
              rows={3}
              placeholder="Descripción"
              className="admin-input"
              value={event.descripcion}
              onChange={(e) =>
                handleChange(index, "descripcion", e.target.value)
              }
            />

            <div className="flex items-center gap-4">
              {event.imagen && (
                <img
                  src={event.imagen}
                  alt={event.titulo}
                  className="w-32 h-24 object-cover rounded shadow"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(index, e)}
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddEvent}
          className="admin-button flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" /> Agregar Evento
        </button>
      </div>

      <button
        onClick={() => handleSave(events)}
        className="admin-button admin-button-success flex items-center"
      >
        <Save className="w-4 h-4 mr-2" /> Guardar Timeline
      </button>
    </div>
  );
}
