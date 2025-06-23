import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.imagenMascota.deleteMany()
  await prisma.mascota.deleteMany()

  const mascotas = [
    {
      nombre: 'Luna',
      edad: '2 años',
      genero: 'Hembra',
      descripcion:
        'Luna es una perrita muy cariñosa y juguetona que fue rescatada de la calle hace 6 meses.',
      personalidad:
        'Sociable con personas y perros, le encanta correr y jugar.',
      salud: 'Vacunada, desparasitada y esterilizada.',
      requisitos:
        'Familia activa con tiempo y espacio para jugar.',
      imagenes: [
        { url: '/placeholder.svg?height=300&width=300' },
        { url: '/placeholder.svg?height=300&width=300' },
        { url: '/placeholder.svg?height=300&width=300' },
      ],
    },
    {
      nombre: 'Max',
      edad: '1 año',
      genero: 'Macho',
      descripcion:
        'Max es un perro mediano, entregado por su familia anterior. Es leal y cariñoso.',
      personalidad:
        'Sociable, equilibrado y juguetón. Excelente con niños.',
      salud: 'Vacunado, desparasitado y castrado.',
      requisitos:
        'Hogar con cariño y atención. Se adapta a departamentos.',
      imagenes: [
        { url: '/placeholder.svg?height=300&width=300' },
        { url: '/placeholder.svg?height=300&width=300' },
      ],
    },
  ]

  for (const mascota of mascotas) {
    await prisma.mascota.create({
      data: {
        nombre: mascota.nombre,
        edad: mascota.edad,
        genero: mascota.genero,
        descripcion: mascota.descripcion,
        personalidad: mascota.personalidad,
        salud: mascota.salud,
        requisitos: mascota.requisitos,
        imagenes: {
          create: mascota.imagenes,
        },
      },
    })
  }
}

main()
  .then(() => {
    console.log('Datos insertados correctamente.')
  })
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
