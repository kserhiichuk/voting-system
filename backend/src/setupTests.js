const sequelize = require('./util/database');
const app = require('./index');
const http = require('http');

let server;

beforeAll(async () => {
  jest.setTimeout(30000);

  // Connect to the database
  await sequelize.sync();

  // Start the HTTP server
  server = http.createServer(app);
  await new Promise((resolve) => server.listen({ port: 3002 }, resolve));
});

afterAll(async () => {
  // Close the HTTP server
  await new Promise((resolve) => server.close(resolve));

  // Close the database connection
  await sequelize.close();
});

module.exports = app;
