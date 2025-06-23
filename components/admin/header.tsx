"use client";

import { useRouter } from "next/navigation";


export default function AdminHeader() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout", { method: "GET" });
    router.push("/login");
  };




  return (
    <header className="admin-header flex justify-between items-center px-6 py-4 border-b border-gray-700">
      <div className="md:hidden"></div>
      <div className="hidden md:block">
        <h1 className="text-xl font-bold">Gestión de Contenido</h1>
      </div>
      <div className="flex items-center space-x-4">
                    <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cerrar sesión
      </button>
      </div>
    </header>
  )
}
