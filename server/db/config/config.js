const dotenv = require('dotenv');

dotenv.config();

const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PORT
} = process.env;

module.exports = {
  "development": {
    "username": DATABASE_USER,
    "password": DATABASE_PASSWORD,
    "database": DATABASE_NAME,
    "host": DATABASE_HOST,
    "port": DATABASE_PORT,
    "dialect": "postgres",
    "ssl": true
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "ssl": true
  },
  "production": {
    "username": DATABASE_USER,
    "password": DATABASE_PASSWORD,
    "database": DATABASE_NAME,
    "host": DATABASE_HOST,
    "port": DATABASE_PORT,
    "dialect": "postgres",
    "ssl": true
  }
}
