import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import path from 'path';
import { mkdir, writeFile } from 'fs/promises';

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


export async function PUT(request: Request) {
  try {
    const eventos = await request.json();

    if (!Array.isArray(eventos)) {
      return new NextResponse('Formato de datos inválido', { status: 400 });
    }

    // Borra todos los registros existentes
    await prisma.trayectoria.deleteMany();

    // Crea todos los registros nuevos que llegan
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

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const titulo = formData.get('titulo') as string;
    const descripcion = formData.get('descripcion') as string;
    const anio = formData.get('anio') as string;
    const file = formData.get('imagen') as File | null;

    let imagen = '/placeholder.svg';

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Sanitiza nombre de archivo
      const sanitizedFileName = file.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.-]/g, '');
      const fileName = `${Date.now()}-${sanitizedFileName}`;

      const uploadDir = path.join(process.cwd(), 'public', 'uploads');

      // Crea la carpeta uploads si no existe
      await mkdir(uploadDir, { recursive: true });

      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);

      imagen = `/uploads/${fileName}`;
    }

    const nuevoEvento = await prisma.trayectoria.create({
      data: {
        titulo,
        descripcion,
        anio: Number(anio),
        imagen,
      },
    });

    return NextResponse.json(nuevoEvento, { status: 201 });
  } catch (error) {
    console.error('[TRAYECTORIA_POST]', error);
    return new NextResponse('Error al guardar', { status: 500 });
  }
}

