/*
  Warnings:

  - Made the column `date` on table `Movimentation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Movimentation" ALTER COLUMN "date" SET NOT NULL;
