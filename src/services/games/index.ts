import { Game } from "@prisma/client";
import gamesRepository from "../../repositories/games";
import { CONFLICT } from "http-status";
import { FinishedGame } from "../../protocols/FinishedGame";
import betsRepository from "../../repositories/bets";
import participantsRepository from "../../repositories/participants";

async function createGame(homeTeamName: string, awayTeamName: string) {
  return await gamesRepository.createGame(homeTeamName, awayTeamName);
}

export async function getGames() {
  return await gamesRepository.getGames();
}

async function updateFinishedGame(gameId: number, finishedGame: FinishedGame) {
  const { isFinished } = await gamesRepository.getGameById(gameId);
  if (isFinished) throw CONFLICT;

  const updateFinishedGame = await gamesRepository.updateFinishedGame(
    gameId,
    finishedGame,
  );
  await betsRepository.finishWonBets(gameId, finishedGame);
  await betsRepository.finishtLostBets(gameId, finishedGame);

  updateParticipantBalance(gameId);

  return updateFinishedGame;
}

async function updateParticipantBalance(gameId: number) {
  const correctBets = await betsRepository.findCorrectBets(gameId);
  const aggregateAmountWon = await betsRepository.aggregateAmountWon(gameId);
  const aggregateAmount = await betsRepository.aggregateAmount(gameId);

  const tax = 0.3;

  for (let i = 0; i < correctBets.length; i++) {
    const participantBet = correctBets[i].amountBet;
    const amountWon =
      (participantBet / Number(aggregateAmountWon._sum.amountBet)) *
      Number(aggregateAmount._sum.amountBet) *
      (1 - tax);

    const wonBetId = correctBets[i].id;
    await betsRepository.updateAmountWon(wonBetId, amountWon);

    const participantId = correctBets[i].participantId;
    const participantBalance =
      await participantsRepository.getParticipantById(participantId);

    const updatedBalance = participantBalance.balance + amountWon;

    await participantsRepository.updateBalance(participantId, updatedBalance);
  }
}

async function getGamesWithBets(gameIdToNumber: number) {
  return await gamesRepository.getGamesWithBets(gameIdToNumber);
}

const gamesService = {
  createGame,
  getGames,
  updateFinishedGame,
  getGamesWithBets,
};

export default gamesService;
