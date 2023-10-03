import { Bet } from "@prisma/client";
import betsRepository from "../../repositories/bets";
import participantsRepository from "../../repositories/participants";
import { FORBIDDEN } from "http-status";
import gamesRepository from "../../repositories/games";

async function createBet(bet: Bet) {
  const { amountBet, gameId, participantId } = bet;
  const { balance } =
    await participantsRepository.getParticipantById(participantId);
  const { isFinished } = await gamesRepository.getGameById(gameId);

  if (amountBet > balance) throw FORBIDDEN;
  if (isFinished === true) throw FORBIDDEN;

  const createBet = await betsRepository.createBet(bet);

  const updatedBalance = balance - amountBet;

  await participantsRepository.updateBalance(participantId, updatedBalance);

  return createBet;
}

const betsService = {
  createBet,
};

export default betsService;
