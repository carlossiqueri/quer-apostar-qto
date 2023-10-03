import prisma from "../../config/database";
import { FinishedGame } from "../../protocols/FinishedGame";

async function createGame(homeTeamName: string, awayTeamName: string) {
  return await prisma.game.create({
    data: {
      homeTeamName,
      awayTeamName,
    },
  });
}

async function getGames() {
  return await prisma.game.findMany();
}

async function getGameById(id: number) {
  return await prisma.game.findFirst({
    where: { id },
  });
}

async function updateFinishedGame(gameId: number, finishedGame: FinishedGame) {
  return await prisma.game.update({
    where: {
      id: gameId,
    },
    data: {
      ...finishedGame,
      isFinished: true,
    },
  });
}

async function getGamesWithBets(gameIdToNumber: number) {
  return prisma.game.findUnique({
    where: {
      id: gameIdToNumber,
    },
    include: {
      Bet: true,
    },
  });
}

const gamesRepository = {
  createGame,
  getGames,
  getGameById,
  updateFinishedGame,
  getGamesWithBets,
};

export default gamesRepository;
