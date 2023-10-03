import prisma from "../../config/database";

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

async function updateFinishedGame() {}

const gamesRepository = {
  createGame,
  getGames,
  getGameById,
  updateFinishedGame,
};

export default gamesRepository;
