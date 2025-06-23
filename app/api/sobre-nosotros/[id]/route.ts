// app/api/sobre-nosotros/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const info = await prisma.informacionGeneral.findUnique({
    where: { id: parseInt(id) },
    include: { valores: true },
  });

  if (!info) {
    return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  }

  return NextResponse.json(info);
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  const data = await req.json();

  const actualizado = await prisma.informacionGeneral.update({
    where: { id: parseInt(id) },
    data: {
      historia: data.historia,
      mision: data.mision,
      vision: data.vision,
      imagen: data.imagen,
      valores: {
        deleteMany: {}, // borra los valores anteriores
        create: data.valores.map((valor: any) => ({
          titulo: valor.titulo,
          descripcion: valor.descripcion,
        })),
      },
    },
    include: { valores: true },
  });

  return NextResponse.json(actualizado);
}
