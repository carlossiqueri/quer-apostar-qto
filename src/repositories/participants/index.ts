import { Participant } from "@prisma/client";
import prisma from "../../config/database";

async function createParticipant(participant: Participant) {
  return await prisma.participant.create({
    data: participant,
  });
}

async function getParticipants() {
    return await prisma.participant.findMany();
}

const participantsRepository = {
  createParticipant,
  getParticipants,
};

export default participantsRepository;
