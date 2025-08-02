/**
 * Validates the registration payload.
 * @param payload The registration payload to validate.
 */
export function validateRegisterPayload(payload: RegisterPayload): boolean {
  const { username, email, password } = payload;
  return (
    typeof username === 'string' && username.length > 0 &&
    typeof email === 'string' && email.includes('@') &&
    typeof password === 'string' && password.length >= 8
  );
}

/**
 * Validates the login payload.
 * @param payload The login payload to validate.
 */
export function validateLoginPayload(payload: LoginPayload): boolean {
  const { email, password } = payload;
  return (
    typeof email === 'string' && email.includes('@') &&
    typeof password === 'string' && password.length >= 8
  );
}