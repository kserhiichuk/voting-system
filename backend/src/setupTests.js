import sequelize from './util/database.js';
import app from './index';
import { createServer } from 'http';

let server;

beforeAll(async () => {
  jest.setTimeout(30000);

  await sequelize.sync();

  server = createServer(app);
  await new Promise((resolve) => server.listen({ port: 3003 }, resolve));
});

afterAll(async () => {
  await new Promise((resolve) => server.close(resolve));

  await sequelize.close();
});

export default app;
