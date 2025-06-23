import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("vet-GROSS-2025", 10);

  await prisma.user.create({
    data: {
      username: "noadmin",
      passwordHash: hashedPassword,
    },
  });

  console.log("Usuario admin creado");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
