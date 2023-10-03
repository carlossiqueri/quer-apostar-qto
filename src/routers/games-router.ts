import { Router } from "express";
import { createGame, getGames } from "../controllers/games";

const gamesRouter = Router();

gamesRouter.post("/", createGame);
gamesRouter.get("/", getGames);
gamesRouter.post("/:id/finish");

export default gamesRouter;
