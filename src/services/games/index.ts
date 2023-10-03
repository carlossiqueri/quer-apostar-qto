import { Game } from "@prisma/client";
import gamesRepository from "../../repositories/games";

async function createGame(homeTeamName: string, awayTeamName: string) {
  return await gamesRepository.createGame(homeTeamName, awayTeamName);
}

export async function getGames() {
  return await gamesRepository.getGames();
}

const gamesService = {
  createGame,
  getGames,
};

export default gamesService;
