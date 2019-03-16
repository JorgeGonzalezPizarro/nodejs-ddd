module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'dbfullstack',
    host: 'localhost:27017',
    port: '27017',
    clientDatabase: 'mongodb'
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'dbfullstack',
    host: 'localhost',
    clientDatabase: 'mongodb'
  },
  production: process.env.DATABASE_URL
};
