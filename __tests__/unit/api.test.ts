import request from 'supertest';
import app from '../src/app';

describe('Advanced API Endpoints', () => {
  test('should handle pagination', async () => {
    const response = await request(app).get('/api/users?page=1&limit=10');
    expect(response.status).toBe(200);
    expect(response.body.data).toHaveLength(10);
    expect(response.body.pagination).toBeDefined();
  });
});