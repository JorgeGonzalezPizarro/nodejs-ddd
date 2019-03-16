const {createContainer, asClass, asFunction, asValue} = require('awilix');
const {scopePerRequest} = require('awilix-express');

const {
  GetListUser
} = require('./application');
const config = require('../config');
const Server = require('./interfaces/http/Server');
const app = require('./App');
const router = require('./interfaces/http/router');
const loggerMiddleware = require('./interfaces/http/logger/loggerMiddleware');

const PoliticiansRepository = require('./infra/database/repository/MongoRepository/PoliticiansRepository');
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
  GetListUser: asClass(GetListUser)

});

container.register({
  containerMiddleware: asValue(scopePerRequest(container))
});

container.register({
  loggerMiddleware: asFunction(loggerMiddleware).singleton()
});

//DATABASE

container.register({
  database: asValue(database),
  PoliticiansSchema: asValue(PoliticiansSchema)
});


container.register({
  politiciansRepository: asClass(PoliticiansRepository).singleton()

});

module.exports = container;

