import { Game } from "@prisma/client";
import Joi from "joi";


const createGameSchema = Joi.object<Game>({
  homeTeamName: Joi.string().required(),
  awayTeamName: Joi.string().required(),
});

const finishGameSchema = Joi.object<Game>({
  homeTeamScore: Joi.number().required(),
  awayTeamScore: Joi.number().required(),
});

const gamesSchema = {
  createGameSchema,
  finishGameSchema,
};

export default gamesSchema;
