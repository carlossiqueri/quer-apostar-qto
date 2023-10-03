import { Bet } from "@prisma/client";
import * as joi from "joi";

const createBetSchema = joi.object<Bet>({
  homeTeamScore: joi.number().required(),
  awayTeamScore: joi.number().required(),
  amountBet: joi.number().required(),
  gameId: joi.number().required(),
  participantId: joi.number().required(),
});

const betSchema = {
  createBetSchema,
};

export default betSchema;
