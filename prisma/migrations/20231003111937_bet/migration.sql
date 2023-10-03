/*
  Warnings:

  - Added the required column `amountBet` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `awayTeamScore` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameId` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeTeamScore` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participantId` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bet" ADD COLUMN     "amountBet" INTEGER NOT NULL,
ADD COLUMN     "amouontWon" INTEGER,
ADD COLUMN     "awayTeamScore" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gameId" INTEGER NOT NULL,
ADD COLUMN     "homeTeamScore" INTEGER NOT NULL,
ADD COLUMN     "participantId" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "participants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
