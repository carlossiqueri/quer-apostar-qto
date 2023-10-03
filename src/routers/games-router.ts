import { Router } from "express";
import {
  createGame,
  getGames,
  getGamesWithBets,
  updateFinishedGame,
} from "../controllers/games";

const gamesRouter = Router();

gamesRouter.post("/", createGame);
gamesRouter.get("/", getGames);
gamesRouter.post("/:id/finish", updateFinishedGame);
gamesRouter.get("/:id", getGamesWithBets);

export default gamesRouter;
