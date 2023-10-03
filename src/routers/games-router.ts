import { Router } from "express";
import {
  createGame,
  getGames,
  getGamesWithBets,
  updateFinishedGame,
} from "../controllers/games";
import gamesSchema from "../schemas/games-schema";
import { validateSchema } from "../middlewares/validate-schema-middleware";

const gamesRouter = Router();

gamesRouter.post("/", validateSchema(gamesSchema.createGameSchema), createGame);
gamesRouter.get("/", getGames);
gamesRouter.post(
  "/:id/finish",
  validateSchema(gamesSchema.finishGameSchema),
  updateFinishedGame,
);
gamesRouter.get("/:id", getGamesWithBets);

export default gamesRouter;
