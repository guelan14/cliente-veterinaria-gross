import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// GET
export async function GET(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  const razon = await prisma.razonElegirnos.findUnique({
    where: { id },
  });

  if (!razon) {
    return NextResponse.json({ error: "Razón no encontrada" }, { status: 404 });
  }

  return NextResponse.json(razon);
}

// PUT
export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);
  const body = await req.json();

  console.log("ID recibido:", id);
  console.log("Body recibido:", body);

  try {
    const updated = await prisma.razonElegirnos.update({
      where: { id },
      data: {
        titulo: body.titulo,
        descripcion: body.descripcion,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error al actualizar:", error);
    return NextResponse.json(
      { error: "Error al actualizar" },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);

  try {
    await prisma.razonElegirnos.delete({
      where: { id },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error al eliminar:", error);
    return NextResponse.json(
      { error: "Error al eliminar" },
      { status: 500 }
    );
  }
}