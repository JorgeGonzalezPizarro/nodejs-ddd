const container = require('./src/container');

const app = container.resolve('app');
const aut = container.resolve('AuthenticationPassport')
console.log(aut)
app.start().catch((err) => {
  console.log(err);
  app.logger.error(err.stack);
  process.exit();
});