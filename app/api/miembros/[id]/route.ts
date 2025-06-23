// app/api/miembros/[id]/route.ts
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const miembro = await prisma.miembro.findUnique({
      where: { id: Number(params.id) },
    });
    if (!miembro) {
      return NextResponse.json({ error: "Miembro no encontrado" }, { status: 404 });
    }
    return NextResponse.json(miembro);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener miembro" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { nombre, cargo, foto } = await request.json();
    const miembroActualizado = await prisma.miembro.update({
      where: { id: Number(params.id) },
      data: { nombre, cargo, foto },
    });
    return NextResponse.json(miembroActualizado);
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar miembro" }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.miembro.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ message: "Miembro eliminado" });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar miembro" }, { status: 400 });
  }
}
