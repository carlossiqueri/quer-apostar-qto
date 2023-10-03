import { Participant } from "@prisma/client";
import prisma from "../../config/database";

async function createParticipant(participant: Participant) {
  return await prisma.participant.create({
    data: participant,
  });
}

async function updateBalance(participantId: number, updatedBalance: number) {
  return await prisma.participant.update({
    where: {
      id: participantId,
    },
    data: {
      balance: updatedBalance,
    },
  });
}

async function getParticipants() {
  return await prisma.participant.findMany();
}

async function getParticipantById(id: number) {
  return await prisma.participant.findFirst({
    where: { id },
  });
}

const participantsRepository = {
  createParticipant,
  getParticipants,
  getParticipantById,
  updateBalance,
};

export default participantsRepository;
