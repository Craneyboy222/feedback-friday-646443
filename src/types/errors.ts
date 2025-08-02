/**
 * Represents an application error.
 */
export class AppError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = 'AppError';
  }
}

/**
 * Error codes for the application.
 */
export enum ErrorCode {
  INVALID_INPUT = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
