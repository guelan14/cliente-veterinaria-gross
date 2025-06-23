import type React from "react"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout min-h-screen flex flex-col md:flex-row font-mono">
      <AdminSidebar />
      <div className="flex-1 md:ml-64">
        <AdminHeader />
        <main className="admin-content p-6">{children}</main>
      </div>
    </div>
  )
}
