import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.sobreNosotrosBreve.findFirst(); // solo 1 registro
    if (!data) {
      // Retornar valores por defecto si no hay registro
      return NextResponse.json({ titulo: "", descripcion: "", imagenUrl: "", imagenAlt: "" });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("[SOBRE_NOSOTROS_GET]", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { titulo, descripcion, imagenUrl, imagenAlt } = body;

    if (!titulo || !descripcion || !imagenUrl) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Intentamos encontrar un registro existente
    const existing = await prisma.sobreNosotrosBreve.findFirst();

    let result;
    if (existing) {
      result = await prisma.sobreNosotrosBreve.update({
        where: { id: existing.id },
        data: { titulo, descripcion, imagenUrl, imagenAlt },
      });
    } else {
      result = await prisma.sobreNosotrosBreve.create({
        data: { titulo, descripcion, imagenUrl, imagenAlt },
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("[SOBRE_NOSOTROS_PUT]", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
