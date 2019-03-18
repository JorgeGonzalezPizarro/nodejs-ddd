const {createContainer, asClass, asFunction, asValue} = require('awilix');
const {scopePerRequest} = require('awilix-express');

const {
  GetListPolitician,
  Authenticate
} = require('./application');
const config = require('../config');
const Server = require('./interfaces/http/Server');
const app = require('./App');
const router = require('./interfaces/http/router');
const loggerMiddleware = require('./interfaces/http/logger/loggerMiddleware');
const authMiddleware = require('./interfaces/http/middleware/Auth');

const {PoliticiansRepository} = require('./infra/database/repository/MongoRepository');
const {UserRepository} = require('./infra/database/repository/MongoRepository');
const {AuthenticationPassport} = require('./infra/auth');
const container = createContainer();


//INFRA
const {database, models : {PoliticiansSchema}} = require('./infra/database/Mongodb');
const logger = require('./infra/logger/loggerLog4js');


container
  .register({
    app: asClass(app).singleton(),
    server: asClass(Server).singleton()
  });
container.register({
  router: asFunction(router).singleton(),
  logger: asFunction(logger).singleton()
});
container.register({
  config: asValue(config)
});


container.register({
  GetListPolitician: asClass(GetListPolitician)

});
container.register({
  Authenticate: asClass(Authenticate)
});
container.register({
  authMiddleware: asFunction(authMiddleware).singleton()
});

container.register({
  containerMiddleware: asValue(scopePerRequest(container))
});

container.register({
  loggerMiddleware: asFunction(loggerMiddleware).singleton()
});




container.register({
  database: asValue(database)});


container.register({
  politiciansRepository: asClass(PoliticiansRepository).singleton(),
  UserRepository: asClass(UserRepository).singleton()

});
container.register({
  AuthenticationPassport: asFunction(AuthenticationPassport).singleton()
});
module.exports = container;

