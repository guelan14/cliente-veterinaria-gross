import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/products/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)

  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { images: true },
    })

    if (!product) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error al obtener el producto:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

// PUT /api/products/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const body = await req.json()

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: body.name,
        category: body.category,
        description: body.description,
        image: body.image,
      },
    })

    return NextResponse.json(updatedProduct)
  } catch (error) {
    console.error("Error al actualizar el producto:", error)
    return NextResponse.json({ error: "Error al actualizar el producto" }, { status: 500 })
  }
}

// DELETE /api/products/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)

  try {
    await prisma.product.delete({
      where: { id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("Error al eliminar el producto:", error)
    return NextResponse.json({ error: "Error al eliminar el producto" }, { status: 500 })
  }
}
