import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { writeFile } from "fs/promises"
import path from "path"

// GET: Obtener todos los productos
export async function GET() {
  const productos = await prisma.product.findMany({
    include: { images: true },
  })
  return NextResponse.json(productos)
}

// POST: Crear un nuevo producto con imágenes
export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const name = formData.get("name") as string
  const category = formData.get("category") as string
  const description = formData.get("description") as string
  const mainImage = formData.get("mainImage") as File
  const extraImages = formData.getAll("extraImages") as File[]

  // Guardar imagen principal
  let imagePath = "/placeholder.svg"
  if (mainImage && mainImage.size > 0) {
    const bytes = await mainImage.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = `${Date.now()}-${mainImage.name}`
    const filePath = path.join(process.cwd(), "public", "uploads", fileName)
    await writeFile(filePath, buffer)
    imagePath = `/uploads/${fileName}`
  }

  // Crear producto
  const newProduct = await prisma.product.create({
    data: {
      name,
      category,
      description,
      image: imagePath,
    },
  })

  // Guardar imágenes extra asociadas
  for (const file of extraImages) {
    if (file.size === 0) continue
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = `${Date.now()}-${file.name}`
    const filePath = path.join(process.cwd(), "public", "uploads", fileName)
    await writeFile(filePath, buffer)

    await prisma.image.create({
      data: {
        url: `/uploads/${fileName}`,
        productId: newProduct.id,
      },
    })
  }

  return NextResponse.json({ message: "Producto creado", product: newProduct }, { status: 201 })
}
