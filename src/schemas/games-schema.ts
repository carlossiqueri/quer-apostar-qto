import { Game } from "@prisma/client";
import * as joi from "joi";


const createGameSchema = joi.object<Game>({
  homeTeamName: joi.string().required(),
  awayTeamName: joi.string().required(),
});

const finishGameSchema = joi.object<Game>({
  homeTeamScore: joi.number().required(),
  awayTeamScore: joi.number().required(),
});

const gamesSchema = {
  createGameSchema,
  finishGameSchema,
};

export default gamesSchema;
