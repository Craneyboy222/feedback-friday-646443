import { body, param, query, validationResult } from 'express-validator';

export const validateUserRegistration = [
  body('username').isString().isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 8 })
];

export const validateFeedbackThread = [
  body('company_name').isString().notEmpty(),
  body('url').isURL(),
  body('purpose').isString().notEmpty()
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};