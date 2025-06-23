import { prisma } from "../../../lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const mascota = await prisma.mascota.findUnique({
    where: { id: parseInt(params.id) },
    include: { imagenes: true }
  })
  return NextResponse.json(mascota)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await prisma.mascota.delete({
    where: { id: parseInt(params.id) }
  })
  return NextResponse.json({ message: "Eliminado correctamente" })
}
