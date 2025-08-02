import request from 'supertest';
import app from '../src/app';

describe('Feedback Integration Tests', () => {
  test('Create and retrieve feedback thread', async () => {
    const feedbackData = { user_id: 1, company_name: 'Test Company', url: 'https://test.com', purpose: 'Product Feedback', technologies: 'React, Node.js', feedback_requested: 'UI Improvement', seeking_beta_testers: true, additional_comments: 'N/A' };
    const createResponse = await request(app).post('/api/feedback-threads').send(feedbackData);
    expect(createResponse.status).toBe(201);
    const threadId = createResponse.body.id;
    const getResponse = await request(app).get(`/api/feedback-threads/${threadId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toHaveProperty('company_name', 'Test Company');
  });
});