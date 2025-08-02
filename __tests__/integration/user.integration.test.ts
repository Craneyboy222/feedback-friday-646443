import request from 'supertest';
import app from '../src/app';

describe('User Integration Tests', () => {
  test('should update user profile information', async () => {
    const loginResponse = await request(app).post('/api/login').send({
      email: 'testuser@example.com',
      password: 'Password123!'
    });
    const token = loginResponse.body.token;

    const updateResponse = await request(app)
      .put('/api/users/1')
      .set('Authorization', `Bearer ${token}`)
      .send({ profile_info: { bio: 'Updated Bio' } });
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.profile_info.bio).toBe('Updated Bio');
  });
});