import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

const uploadDir = path.join(process.cwd(), 'public/uploads')

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No se envió ningún archivo' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${Date.now()}-${file.name}`
  const filePath = path.join(uploadDir, filename)

  try {
    // Asegura que la carpeta exista
    await mkdir(uploadDir, { recursive: true })
    await writeFile(filePath, buffer)
    return NextResponse.json({ url: `/uploads/${filename}` })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error al guardar la imagen' }, { status: 500 })
  }
}
