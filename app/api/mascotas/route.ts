import { prisma } from "../../lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const mascotas = await prisma.mascota.findMany({
    include: { imagenes: true },
    orderBy: { id: "desc" }
  })
  return NextResponse.json(mascotas)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { nombre, edad, genero, descripcion, personalidad, salud, requisitos, imagenes } = body

  const mascota = await prisma.mascota.create({
    data: {
      nombre,
      edad,
      genero,
      descripcion,
      personalidad,
      salud,
      requisitos,
      imagenes: {
        create: imagenes.map((url: string) => ({ url }))
      }
    },
    include: { imagenes: true }
  })

  return NextResponse.json(mascota)
}
