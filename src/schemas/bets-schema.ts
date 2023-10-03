import { Bet } from "@prisma/client";
import Joi from "joi";

const createBetSchema = Joi.object<Bet>({
  homeTeamScore: Joi.number().required(),
  awayTeamScore: Joi.number().required(),
  amountBet: Joi.number().required(),
  gameId: Joi.number().required(),
  participantId: Joi.number().required(),
});

const betSchema = {
  createBetSchema,
};

export default betSchema;
