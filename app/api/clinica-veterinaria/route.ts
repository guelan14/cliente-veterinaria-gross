import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { writeFile } from "fs/promises"
import path from "path"

// GET: Obtener todos los servicios
export async function GET() {
  const servicios = await prisma.servicioClinico.findMany()
  return NextResponse.json(servicios)
}

// POST: Crear un nuevo servicio
export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const titulo = formData.get("titulo") as string
  const descripcion = formData.get("descripcion") as string
  const file = formData.get("imagen") as File | null

  let imagen = "/placeholder.svg"

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const fileName = `${Date.now()}-${file.name}`
    const filePath = path.join(process.cwd(), "public", "uploads", fileName)

    await writeFile(filePath, buffer)
    imagen = `/uploads/${fileName}`
  }

  const created = await prisma.servicioClinico.create({
    data: { titulo, descripcion, imagen },
  })

  return NextResponse.json(created, { status: 201 })
}
