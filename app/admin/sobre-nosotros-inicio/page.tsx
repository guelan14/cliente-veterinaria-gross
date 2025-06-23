"use client";
import { useEffect, useState } from "react";

export default function AdminSobreNosotros() {
  const [data, setData] = useState({
    titulo: "",
    descripcion: "",
    imagenUrl: "",
    imagenAlt: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/informacion-general-inicio")
      .then((res) => res.json())
      .then((data) => {
        setData({
          titulo: data.titulo || "",
          descripcion: data.descripcion || "",
          imagenUrl: data.imagenUrl || "",
          imagenAlt: data.imagenAlt || "",
        });
        setLoading(false);
      });
  }, []);

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    console.log("Datos a enviar:", data);
    const res = await fetch("/api/informacion-general-inicio", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Actualizado correctamente");
    } else {
      alert("Error al actualizar");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    handleChange("imagenUrl", result.url);
    handleChange("imagenAlt", file.name); // o cualquier texto alternativo que desees
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="max-w-2xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-bold text-[#8e0061]">Editar Sobre Nosotros</h1>
      <input
        type="text"
        placeholder="Título"
        className="admin-input"
        value={data.titulo}
        onChange={(e) => handleChange("titulo", e.target.value)}
      />
      <textarea
        className="admin-input"
        placeholder="Descripción"
        rows={4}
        value={data.descripcion}
        onChange={(e) => handleChange("descripcion", e.target.value)}
      />
      <div className="flex items-center gap-4">
        {data.imagenUrl && (
          <img
            src={data.imagenUrl}
            alt={data.imagenAlt || "Imagen actual"}
            className="w-32 h-24 object-cover rounded shadow"
          />
        )}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      <button
        onClick={handleSubmit}
        className="admin-button admin-button-success"
      >
        Guardar cambios
      </button>
    </div>
  );
}
