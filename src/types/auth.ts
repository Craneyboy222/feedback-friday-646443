/**
 * Payload for user registration.
 */
export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

/**
 * Payload for user login.
 */
export interface LoginPayload {
  email: string;
  password: string;
}

/**
 * Response from authentication request.
 */
export interface AuthResponse {
  token: string;
  user: User;
}