import { Participant } from "@prisma/client";
import { FORBIDDEN } from "http-status";
import participantsRepository from "../../repositories/participants";

async function createParticipant(participant: Participant) {
  const balance = participant.balance;

  if (balance < 1000) {
    throw FORBIDDEN;
  }

  return await participantsRepository.createParticipant(participant);
}

async function getParticipants() {
    return await participantsRepository.getParticipants();
}

const participantsService = {
  createParticipant,
  getParticipants,
};

export default participantsService;
