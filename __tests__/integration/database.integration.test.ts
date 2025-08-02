import request from 'supertest';
import app from '../../src/app';

beforeAll(async () => {
  // Setup database schema
});

describe('Feedback Threads API', () => {
  it('should create and retrieve a feedback thread', async () => {
    const createResponse = await request(app)
      .post('/api/feedback-threads')
      .send({ user_id: 1, company_name: 'Test Co', url: 'http://test.com', purpose: 'Feedback', technologies: 'React', feedback_requested: true, seeking_beta_testers: false, additional_comments: 'Test comment' })
      .expect(201);

    const threadId = createResponse.body.id;
    const getResponse = await request(app)
      .get(`/api/feedback-threads/${threadId}`)
      .expect(200);

    expect(getResponse.body.company_name).toBe('Test Co');
  });
});

afterAll(async () => {
  // Clean up database
});