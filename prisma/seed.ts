import prisma from "../src/config/database";

async function seed() {
  await prisma.$connect();

  await prisma.participant.createMany({
    data: [
      { name: "Carlos", balance: 100000 },
      { name: "Ana", balance: 100000 },
      { name: "José", balance: 100000 },
    ],
  });

  await prisma.game.createMany({
    data: [
      {
        homeTeamName: "A",
        awayTeamName: "B",
      },
      {
        homeTeamName: "C",
        awayTeamName: "D",
      },
      {
        homeTeamName: "E",
        awayTeamName: "F",
      },
      {
        homeTeamName: "G",
        awayTeamName: "H",
      },
      {
        homeTeamName: "I",
        awayTeamName: "J",
      },
    ],
  });

  await prisma.bet.createMany({
    data: [
      {
        homeTeamScore: 1,
        awayTeamScore: 2,
        amountBet: 500,
        gameId: 1,
        participantId: 1,
      },
      {
        homeTeamScore: 1,
        awayTeamScore: 1,
        amountBet: 500,
        gameId: 1,
        participantId: 2,
      },
      {
        homeTeamScore: 1,
        awayTeamScore: 2,
        amountBet: 500,
        gameId: 1,
        participantId: 3,
      },
      {
        homeTeamScore: 1,
        awayTeamScore: 2,
        amountBet: 500,
        gameId: 2,
        participantId: 1,
      },
      {
        homeTeamScore: 1,
        awayTeamScore: 1,
        amountBet: 500,
        gameId: 2,
        participantId: 2,
      },
      {
        homeTeamScore: 1,
        awayTeamScore: 2,
        amountBet: 500,
        gameId: 2,
        participantId: 3,
      },
    ],
  });
}

seed();
