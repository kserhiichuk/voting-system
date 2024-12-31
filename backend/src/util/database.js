const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'defaultdb',
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: 13581,
  },
);

module.exports = sequelize;
