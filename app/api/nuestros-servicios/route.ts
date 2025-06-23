import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma"; // Asegurate de que esta ruta a prisma es correcta

// GET: Obtener todos los servicios
export async function GET() {
  try {
    const servicios = await prisma.nuestroServicio.findMany();
    return NextResponse.json(servicios);
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    return NextResponse.json({ error: "Error al obtener servicios" }, { status: 500 });
  }
}

// POST: Crear un nuevo servicio
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const creado = await prisma.nuestroServicio.create({
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon,
      },
    });

    return NextResponse.json(creado, { status: 201 });
  } catch (error) {
    console.error("Error al crear servicio:", error);
    return NextResponse.json({ error: "Error al crear servicio" }, { status: 500 });
  }
}
