import { Router } from "express";
import {
  createParticipant,
  getParticipants,
} from "../controllers/participants";
import { validateSchema } from "../middlewares/validate-schema-middleware";
import { createParticipantSchema } from "../schemas/participants-schema";

const participantsRouter = Router();

participantsRouter.post(
  "/",
  validateSchema(createParticipantSchema),
  createParticipant,
);
participantsRouter.get("/", getParticipants);

export default participantsRouter;
