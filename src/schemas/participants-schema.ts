import Joi from "joi";

export const createParticipantSchema = Joi.object({
  name: Joi.string().required(),
  balance: Joi.number().min(1000).required(),
});
