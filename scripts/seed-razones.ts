// scripts/seedRazonElegirnos.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const razonesElegirnos = [
    {
      titulo: "Profesionales Especializados",
      descripcion:
        "Nuestro equipo está formado por veterinarios con amplia experiencia y formación continua en diferentes áreas de la medicina veterinaria.",
    },
    {
      titulo: "Equipamiento Moderno",
      descripcion:
        "Contamos con tecnología de vanguardia para diagnósticos precisos y tratamientos efectivos para todo tipo de condiciones.",
    },
    {
      titulo: "Atención Personalizada",
      descripcion:
        "Cada mascota es única y recibe un trato individualizado, adaptando nuestros servicios a sus necesidades específicas.",
    },
    {
      titulo: "Instalaciones Adecuadas",
      descripcion:
        "Nuestras instalaciones están diseñadas para brindar comodidad y seguridad tanto a las mascotas como a sus dueños.",
    },
    {
      titulo: "Disponibilidad",
      descripcion:
        "Ofrecemos horarios amplios y atención de urgencias para estar disponibles cuando más nos necesitas.",
    },
    {
      titulo: "Compromiso",
      descripcion:
        "Nos comprometemos con el bienestar animal y la satisfacción de nuestros clientes, brindando siempre el mejor servicio posible.",
    },
  ];

  for (const razon of razonesElegirnos) {
    await prisma.razonElegirnos.create({
      data: razon,
    });
  }

  console.log("Datos de '¿Por qué elegirnos?' insertados correctamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
