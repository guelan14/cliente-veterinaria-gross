// app/api/miembros/route.ts
import { prisma } from "../../lib/prisma"; // usa alias si lo configuraste en tsconfig.json
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const miembros = await prisma.miembro.findMany();
    return NextResponse.json(miembros);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener miembros" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { nombre, cargo, foto } = await request.json();
    const nuevoMiembro = await prisma.miembro.create({
      data: { nombre, cargo, foto },
    });
    return NextResponse.json(nuevoMiembro, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear miembro" }, { status: 400 });
  }
}
