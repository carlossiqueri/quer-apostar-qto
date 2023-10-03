import { Router } from "express";
import {
  createParticipant,
  getParticipants,
} from "../controllers/participants";

const participantsRouter = Router();

participantsRouter.post("/", createParticipant);
participantsRouter.get("/", getParticipants);

export default participantsRouter;
