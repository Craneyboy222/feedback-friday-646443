import request from 'supertest';
import app from '../src/app';

describe('Admin Integration Tests', () => {
  test('Admin dashboard data retrieval', async () => {
    const response = await request(app).get('/api/admin/dashboard').set('Authorization', `Bearer adminToken`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('userCount');
    expect(response.body).toHaveProperty('threadCount');
  });
});