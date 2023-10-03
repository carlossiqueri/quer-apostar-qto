import { Router } from "express";
import { createBet } from "../controllers/bets";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import betSchema from "../schemas/bets-schema";

const betsRouter = Router();

betsRouter.post("/", validateSchema(betSchema.createBetSchema),createBet);

export default betsRouter;