import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import multer from 'multer'
import { writeFile, unlink } from 'fs/promises'
import path from 'path'

// Ruta donde se guardarán las imágenes
const uploadDir = path.join(process.cwd(), 'public/uploads')

const storage = multer.memoryStorage()
const upload = multer({ storage })

// Adaptador para usar multer con App Router
function runMiddleware(req: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, {} as any, (result: any) => {
      return result instanceof Error ? reject(result) : resolve(result)
    })
  })
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const servicio = await prisma.servicioClinico.findUnique({
      where: { id: Number(params.id) },
    })

    if (!servicio) {
      return NextResponse.json({ error: 'Servicio no encontrado' }, { status: 404 })
    }

    // Si hay imagen asociada, eliminamos el archivo físico
    if (servicio.imagen) {
      const imagePath = path.join(process.cwd(), 'public', servicio.imagen)
      try {
        await unlink(imagePath)
      } catch (err) {
        console.warn(`No se pudo borrar la imagen: ${imagePath}`, err)
      }
    }

    // Eliminamos el servicio de la base de datos
    const deleted = await prisma.servicioClinico.delete({
      where: { id: Number(params.id) },
    })

    return NextResponse.json(deleted)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Parsear el form-data
    const formData = await req.formData()
    const titulo = formData.get('titulo') as string
    const descripcion = formData.get('descripcion') as string
    const file = formData.get('imagen') as File

    let imagenPath

    if (file) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const filename = `${Date.now()}-${file.name}`
      const filepath = path.join(uploadDir, filename)

      await writeFile(filepath, buffer)
      imagenPath = `/uploads/${filename}`
    }

    const updated = await prisma.servicioClinico.update({
      where: { id: Number(params.id) },
      data: {
        titulo,
        descripcion,
        ...(imagenPath && { imagen: imagenPath }),
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 })
  }
}
