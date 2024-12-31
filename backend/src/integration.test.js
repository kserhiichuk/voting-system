import request from 'supertest';
import sequelize from './util/database.js';
import app from './index.js';
import { createServer } from 'http';

let server;

beforeAll(async () => {
  jest.setTimeout(30000);

  await sequelize.sync();

  server = createServer(app);
  await new Promise((resolve) => server.listen({ port: 3002 }, resolve));
});

afterAll(async () => {
  await new Promise((resolve) => server.close(resolve));

  await sequelize.close();
});

describe('Integration Tests', () => {
  it('should connect to the database and start the server', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('results');
    expect(res.body.results).toHaveProperty('next');
    expect(res.body.results).toHaveProperty('previous');
    expect(res.body.results).toHaveProperty('results');
    expect(res.body).toHaveProperty('token');
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        name: 'testuser',
        login: 'testuser' + Math.random(),
        password: 'testpassword',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('redirect', '/auth/login');
  });

  it('should not register a user with an existing login', async () => {
    await request(app).post('/auth/register').send({
      name: 'testuser',
      login: 'testuser',
      password: 'testpassword',
    });

    const res = await request(app).post('/auth/register').send({
      name: 'testuser',
      login: 'testuser',
      password: 'testpassword',
    });
    expect(res.statusCode).toEqual(409);
    expect(res.body).toHaveProperty(
      'message',
      'User with that login already exists',
    );
  });

  it('should create a new poll', async () => {
    const loginRes = await request(app).post('/auth/login').send({
      login: 'testuser',
      password: 'testpassword',
    });
    const token = loginRes.body.token;

    const pollRes = await request(app)
      .post('/newpoll/add-voting')
      .set('Authorization', `Bearer ${token}`)
      .send({
        surveyTitle: 'Test Poll',
        surveyDescription: 'This is a test poll',
        options: ['Option 1', 'Option 2'],
      });
    expect(pollRes.statusCode).toEqual(200);
    expect(pollRes.body).toHaveProperty('redirect');
  });
});
