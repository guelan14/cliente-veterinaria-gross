-- CreateTable
CREATE TABLE "ServicioClinico" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "ServicioClinico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NuestroServicio" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "NuestroServicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RazonElegirnos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "RazonElegirnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InformacionGeneral" (
    "id" SERIAL NOT NULL,
    "historia" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "mision" TEXT NOT NULL,
    "vision" TEXT NOT NULL,

    CONSTRAINT "InformacionGeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Valor" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "informacionGeneralId" INTEGER NOT NULL,

    CONSTRAINT "Valor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trayectoria" (
    "id" SERIAL NOT NULL,
    "anio" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "Trayectoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Miembro" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Miembro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mascota" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "personalidad" TEXT NOT NULL,
    "salud" TEXT NOT NULL,
    "requisitos" TEXT NOT NULL,

    CONSTRAINT "Mascota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagenMascota" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "mascotaId" INTEGER NOT NULL,

    CONSTRAINT "ImagenMascota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SobreNosotrosBreve" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagenUrl" TEXT NOT NULL,
    "imagenAlt" TEXT,

    CONSTRAINT "SobreNosotrosBreve_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Valor" ADD CONSTRAINT "Valor_informacionGeneralId_fkey" FOREIGN KEY ("informacionGeneralId") REFERENCES "InformacionGeneral"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagenMascota" ADD CONSTRAINT "ImagenMascota_mascotaId_fkey" FOREIGN KEY ("mascotaId") REFERENCES "Mascota"("id") ON DELETE CASCADE ON UPDATE CASCADE;
