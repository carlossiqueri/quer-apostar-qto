/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Game";

-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "homeTeamName" TEXT NOT NULL,
    "awayTeamName" TEXT NOT NULL,
    "homeTeamScore" INTEGER NOT NULL DEFAULT 0,
    "awayTeamScore" INTEGER NOT NULL DEFAULT 0,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);
