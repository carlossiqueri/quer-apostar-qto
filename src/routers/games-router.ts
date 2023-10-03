import { Router } from "express";
import { createGame, getGames } from "../controllers/games";

const gamesRouter = Router();

gamesRouter.post("/", createGame);
gamesRouter.get("/", getGames);

export default gamesRouter;
