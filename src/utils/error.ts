export class ApplicationError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message = 'Not Found') {
    super(message, 404);
  }
}

export class ValidationError extends ApplicationError {
  constructor(message = 'Validation Error') {
    super(message, 400);
  }
}