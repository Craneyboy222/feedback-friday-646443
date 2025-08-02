import * as Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const feedbackThreadSchema = Joi.object({
  company_name: Joi.string().required(),
  url: Joi.string().uri().required(),
  purpose: Joi.string().required(),
  technologies: Joi.string().required(),
  feedback_requested: Joi.string().required(),
  seeking_beta_testers: Joi.boolean().required(),
  additional_comments: Joi.string().optional(),
});