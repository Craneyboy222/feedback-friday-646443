import request from 'supertest';
import app from '../src/app';

describe('Notifications Integration Tests', () => {
  test('Retrieve and mark notifications as read', async () => {
    const response = await request(app).get('/api/notifications').set('Authorization', `Bearer token`);
    expect(response.status).toBe(200);
    const notificationId = response.body[0].id;
    const markReadResponse = await request(app).put(`/api/notifications/${notificationId}`).set('Authorization', `Bearer token`);
    expect(markReadResponse.status).toBe(200);
    expect(markReadResponse.body).toHaveProperty('read_status', true);
  });
});