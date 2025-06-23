import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../lib/prisma" // Asegúrate que la ruta es correcta

// GET: Obtener todas las razones
export async function GET() {
  const razones = await prisma.razonElegirnos.findMany()
  return NextResponse.json(razones)
}

// POST: Crear una nueva razón
export async function POST(req: NextRequest) {
  const data = await req.json()
  const created = await prisma.razonElegirnos.create({ data })
  return NextResponse.json(created, { status: 201 })
}
