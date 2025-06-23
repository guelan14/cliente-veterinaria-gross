import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const eventos = await prisma.trayectoria.findMany({
      orderBy: { anio: 'asc' },
    });
    return NextResponse.json(eventos);
  } catch (error) {
    console.error('[TRAYECTORIA_GET]', error);
    return new NextResponse('Error interno del servidor', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ message: "ID inválido" }, { status: 400 });
  }

  try {
    const evento = await prisma.trayectoria.findUnique({ where: { id } });

    if (!evento) {
      return NextResponse.json({ message: "Evento no encontrado" }, { status: 404 });
    }

    // Eliminar imagen si no es el placeholder
    if (evento.imagen && !evento.imagen.includes('/placeholder')) {
      const filePath = path.join(process.cwd(), 'public', evento.imagen);
      try {
        await fs.unlink(filePath);
        console.log('Imagen eliminada:', filePath);
      } catch (err) {
        console.warn('No se pudo eliminar la imagen:', err);
        // No cortamos el flujo si falla esto
      }
    }

    await prisma.trayectoria.delete({ where: { id } });

    return NextResponse.json({ message: "Evento eliminado" }, { status: 200 });
  } catch (error) {
    console.error("[TRAYECTORIA_DELETE]", error);
    return NextResponse.json({ message: "Error al eliminar evento" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const eventos = await request.json();

    if (!Array.isArray(eventos)) {
      return new NextResponse('Formato de datos inválido', { status: 400 });
    }

    // Opción simple (borrar todo y crear nuevos)
    await prisma.trayectoria.deleteMany();

    const eventosCreados = await Promise.all(
      eventos.map((ev: any) =>
        prisma.trayectoria.create({
          data: {
            anio: ev.anio,
            titulo: ev.titulo,
            descripcion: ev.descripcion,
            imagen: ev.imagen,
          },
        })
      )
    );

    return NextResponse.json(eventosCreados);
  } catch (error) {
    console.error('[TRAYECTORIA_PUT]', error);
    return new NextResponse('Error interno del servidor', { status: 500 });
  }
}
