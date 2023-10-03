import { Bet } from "@prisma/client";
import prisma from "../../config/database";

async function createBet(bet: Bet) {
  return await prisma.bet.create({
    data: bet,
  });
}

const betsRepository = {
  createBet,
};

export default betsRepository;
