module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'users',
    host: 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'users',
    host: 'localhost',
    dialect: 'mysql'
  },
  production: process.env.DATABASE_URL
};
