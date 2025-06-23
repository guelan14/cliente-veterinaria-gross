import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  const { titulo, descripcion, imagen } = await req.json();

  if (!titulo || !descripcion) {
    return NextResponse.json({ message: 'Faltan campos' }, { status: 400 });
  }

  try {
    const updated = await prisma.informacionGeneral.update({
      where: { id: 1 },
      data: { titulo, descripcion, imagen },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('[INFO_GENERAL_UPDATE]', error);
    return NextResponse.json({ message: 'Error al actualizar' }, { status: 500 });
  }
}
