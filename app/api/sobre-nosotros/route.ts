// app/api/sobre-nosotros/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';

export async function GET() {
  try {
    const data = await prisma.informacionGeneral.findFirst({
      include: {
        valores: true,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new NextResponse('Error interno del servidor', { status: 500 });
  }
}
