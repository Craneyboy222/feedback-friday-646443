/* Validation rules */
import { body } from 'express-validator';

export const registerValidationRules = [
  body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
];

export const feedbackThreadValidationRules = [
  body('company_name').notEmpty().withMessage('Company name is required'),
  body('url').isURL().withMessage('Must be a valid URL'),
  body('purpose').notEmpty().withMessage('Purpose is required'),
  body('technologies').notEmpty().withMessage('Technologies are required')
];