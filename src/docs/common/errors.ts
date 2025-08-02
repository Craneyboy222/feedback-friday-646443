export class ErrorHandler {
  static handleError(res, error) {
    const { status, message } = error;
    res.status(status || 500).json({
      error: message || 'Internal Server Error',
    });
  }
}

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export const NOT_FOUND = new ApiError(404, 'Resource not found');
export const UNAUTHORIZED = new ApiError(401, 'Unauthorized');
export const BAD_REQUEST = new ApiError(400, 'Bad Request');
