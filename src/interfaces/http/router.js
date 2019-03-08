const { Router } = require('express');
const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const controller = require('./factoryRouter/controllerRepository');

module.exports = ({ config, containerMiddleware }) => {
  const router = Router();

  /* istanbul ignore if */
  if(config.env === 'development') {
    router.use(statusMonitor());
  }


  const apiRouter = Router();

  apiRouter
    .use(methodOverride('X-HTTP-Method-Override'))
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use(containerMiddleware);
  /*
   * Add your API routes here
   *
   * You can use the `controllers` helper like this:
   * apiRouter.use('/users', controller(controllerPath))
   *
   * The `controllerPath` is relative to the `interfaces/http` folder
   */
  router.use('/api', apiRouter);

  apiRouter.use('/user', controller('user/UserController'));


  return router;
};
