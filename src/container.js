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


const SequalizeUsersRepository = require('./infra/database/repository/SequalizeUsersRepository');


//INFRA
const {database, User: UserModel} = require('./infra/database/Models');
const logger = require('./infra/logger/loggerLog4js');

const container = createContainer();

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
  UserModel: asValue(UserModel)
});


container.register({
  userRepository: asClass(SequalizeUsersRepository).singleton()

});

module.exports = container;

