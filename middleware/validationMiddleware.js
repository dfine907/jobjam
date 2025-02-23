import { body, validationResult } from 'express-validator'
import { BadRequestError } from '../errors/customErrors.js'

//build a function that takes care of the errors, look at schema for reference
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

exporrt const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage('Company is required'),
  body('company').notEmpty().withMessage('Company is required'),
  body('company').notEmpty().withMessage('Company is required'),

])
