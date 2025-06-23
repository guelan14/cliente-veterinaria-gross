import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// GET: Obtener un servicio por ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const servicio = await prisma.nuestroServicio.findUnique({ where: { id } });

    if (!servicio) {
      return NextResponse.json({ error: "Servicio no encontrado" }, { status: 404 });
    }

    return NextResponse.json(servicio);
  } catch (error) {
    console.error("Error al obtener servicio:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}

// PUT: Actualizar un servicio
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  const data = await req.json();

  try {
    const actualizado = await prisma.nuestroServicio.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon,
      },
    });

    return NextResponse.json(actualizado);
  } catch (error) {
    console.error("Error al actualizar servicio:", error);
    return NextResponse.json({ error: "No se pudo actualizar el servicio" }, { status: 500 });
  }
}

// DELETE: Eliminar un servicio
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    await prisma.nuestroServicio.delete({ where: { id } });
    return NextResponse.json({ message: "Servicio eliminado correctamente" }, { status: 200 });
  } catch (error) {
    console.error("Error al eliminar servicio:", error);
    return NextResponse.json({ error: "No se pudo eliminar el servicio" }, { status: 500 });
  }
}
