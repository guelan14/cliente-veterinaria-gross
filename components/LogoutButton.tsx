"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

    const logout = async () => {
    try {
        const res = await fetch("/api/logout", { method: "GET" });
        if (res.ok) {
        router.push("/login");
        } else {
        console.error("Error al cerrar sesión");
        }
    } catch (error) {
        console.error("Error en logout:", error);
    }
    };


  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Cerrar sesión
    </button>
  );
}
