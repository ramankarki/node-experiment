const request = require('supertest');
const app = require('./app');

describe('Testing API', () => {
  beforeAll(async () => {
    // declare this function in separate file to be used in server and here.
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe('Test GET /', () => {
    test('It should respond with 200 success', async () => {
      const response = await request(app).get('/').expect(200);
      expect(response.body.status).toEqual('success');
    });
  });
});
