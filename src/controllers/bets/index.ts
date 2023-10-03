import { Bet } from "@prisma/client";
import { Request, Response } from "express";
import betsService from "../../services/bets";
import { BAD_REQUEST, CREATED } from "http-status";

export async function createBet(req: Request, res: Response) {
  const bet = req.body as Bet;
  try {
    const createdBet = await betsService.createBet(bet);
    return res.status(CREATED).send(createdBet);
  } catch (error) {
    res.send(BAD_REQUEST).send(error);
  }
}
