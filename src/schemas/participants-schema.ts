import * as joi from "joi";

export const createParticipantSchema = joi.object({
  name: joi.string().required(),
  balance: joi.number().min(1000).required(),
});
