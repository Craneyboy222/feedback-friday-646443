import request from 'supertest';
import app from '../src/app';

describe('Survey Integration Tests', () => {
  test('Post and retrieve survey for a feedback thread', async () => {
    const surveyData = { thread_id: 1, survey_link: 'https://survey.com' };
    const postResponse = await request(app).post('/api/surveys').send(surveyData);
    expect(postResponse.status).toBe(201);
    const getResponse = await request(app).get('/api/surveys/1');
    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toHaveProperty('survey_link', 'https://survey.com');
  });
});