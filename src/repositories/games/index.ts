import prisma from "../../config/database";

async function createGame(homeTeamName: string, awayTeamName: string) {
  return await prisma.game.create({
    data: {
      homeTeamName,
      awayTeamName,
    },
  });
}

export async function getGames() {
  return await prisma.game.findMany();
}

const gamesRepository = {
  createGame,
  getGames,
};

export default gamesRepository;
