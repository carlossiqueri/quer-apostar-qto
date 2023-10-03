import { Participant } from "@prisma/client";
import { Request, Response } from "express";
import participantsService from "../../services/participants";
import {
  BAD_REQUEST,
  CREATED,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  OK,
} from "http-status";

export async function createParticipant(req: Request, res: Response) {
  const participant = req.body as Participant;
  try {
    const createdParticipant =
      await participantsService.createParticipant(participant);
    return res.status(CREATED).json({
      name: createdParticipant.name,
      balance: createdParticipant.balance,
    });
  } catch (error) {
    error === FORBIDDEN
      ? res.status(FORBIDDEN).send(error)
      : res.status(BAD_REQUEST).send(error);
  }
}

export async function getParticipants(req: Request, res: Response) {
  try {
    const participants = await participantsService.getParticipants();
    return res.status(OK).send(participants);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(error);
  }
}
