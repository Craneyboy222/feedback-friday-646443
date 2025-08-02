import request from 'supertest';
import app from '../src/app';

describe('Auth Integration Tests', () => {
  test('User registration and login flow', async () => {
    const registerData = { username: 'newuser', email: 'newuser@example.com', password: 'Password123!' };
    const registerResponse = await request(app).post('/api/register').send(registerData);
    expect(registerResponse.status).toBe(201);
    expect(registerResponse.body).toHaveProperty('token');
    const loginResponse = await request(app).post('/api/login').send({ email: 'newuser@example.com', password: 'Password123!' });
    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty('token');
  });
});