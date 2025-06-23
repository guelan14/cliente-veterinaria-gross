"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Login exitoso", data);
      router.push("/admin");
      router.refresh(); 
    } else {
      setError(data.error || "Error en el login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Ingresar</h1>

        {error && (
          <p className="mb-4 text-red-600 font-semibold">{error}</p>
        )}

        <label className="block mb-2 font-semibold" htmlFor="user">Usuario</label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="pass">Contraseña</label>
        <input
          id="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full p-2 border rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
