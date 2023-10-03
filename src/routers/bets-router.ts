import { Router } from "express";
import { createBet } from "../controllers/bets";

const betsRouter = Router();

betsRouter.post("/", createBet);

export default betsRouter;