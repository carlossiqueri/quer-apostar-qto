/*
  Warnings:

  - You are about to drop the column `amouontWon` on the `Bet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "amouontWon",
ADD COLUMN     "amountWon" INTEGER;
