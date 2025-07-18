const request = require('supertest');
const app = require('./app');

describe('App Tests', () => {
  test('GET / should return success', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toContain('Hello');
  });

  test('GET /health should return healthy', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});
