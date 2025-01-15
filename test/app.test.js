const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Adjust the path if necessary

// Close the DB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Server Tests', () => {
  it('should pass a simple test', () => {
    expect(true).toBe(true);
  });

  it('should return 200 for the base route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Welcome to the Radit Software Backend!');
  });
});

