/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `Conta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Conta_imageId_key" ON "Conta"("imageId");
