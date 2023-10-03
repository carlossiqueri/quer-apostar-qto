import { Bet } from "@prisma/client";
import prisma from "../../config/database";
import { FinishedGame } from "../../protocols/FinishedGame";

async function createBet(bet: Bet) {
  return await prisma.bet.create({
    data: bet,
  });
}

async function finishWonBets(gameId: number, finishedGame: FinishedGame) {
  const { homeTeamScore, awayTeamScore } = finishedGame;

  return await prisma.bet.updateMany({
    where: {
      gameId,
      homeTeamScore,
      awayTeamScore,
    },
    data: {
      status: "WON",
    },
  });
}

async function finishtLostBets(gameId: number, finishedGame: FinishedGame) {
  const { homeTeamScore, awayTeamScore } = finishedGame;
  return prisma.bet.updateMany({
    where: {
      gameId,
      OR: [
        {
          homeTeamScore: {
            not: homeTeamScore,
          },
          awayTeamScore: {
            not: awayTeamScore,
          },
        },
      ],
    },
    data: {
      status: "LOST",
      amountWon: 0,
    },
  });
}

async function findCorrectBets(gameId: number) {
  return prisma.bet.findMany({
    where: {
      gameId,
      status: "WON",
    },
  });
}

async function aggregateAmountWon(gameId: number) {
  return prisma.bet.aggregate({
    where: {
      AND: [
        {
          gameId,
          status: "WON",
        },
      ],
    },
    _sum: {
      amountBet: true,
    },
  });
}

async function aggregateAmount(gameId: number) {
  return prisma.bet.aggregate({
    where: {
      gameId,
    },
    _sum: {
      amountBet: true,
    },
  });
}

async function updateAmountWon(wonBetId: number, amountWon: number) {
  return await prisma.bet.update({
    where: {
      id: wonBetId,
    },
    data: {
      amountWon,
    },
  });
}

const betsRepository = {
  createBet,
  finishWonBets,
  finishtLostBets,
  findCorrectBets,
  aggregateAmountWon,
  aggregateAmount,
  updateAmountWon,
};

export default betsRepository;
