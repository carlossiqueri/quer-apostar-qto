import { Request, Response } from "express";
import { CREATED, INTERNAL_SERVER_ERROR, OK } from "http-status";
import gamesService from "../../services/games";
import { Game } from "@prisma/client";

export async function createGame(req: Request, res: Response) {
  const { homeTeamName, awayTeamName } = req.body as Game;

  try {
    const createdGame = await gamesService.createGame(
      homeTeamName,
      awayTeamName,
    );

    return res.status(CREATED).json({
      homeTeamName: createdGame.homeTeamName,
      awayTeamName: createdGame.awayTeamName,
    });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getGames(req: Request, res: Response) {
  try {
    const games = await gamesService.getGames();
    return res.status(OK).send(games);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(error);
  }
}
