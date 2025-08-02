export const createUserAndLogin = async (request) => {
  const userResponse = await request.post('/api/register').send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
  const loginResponse = await request.post('/api/login').send({ email: 'test@example.com', password: 'password123' });
  return loginResponse.body.token;
};