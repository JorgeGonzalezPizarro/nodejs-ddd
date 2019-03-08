const path = require('path');

module.exports = function (pathController) {
  const controllerPath = path.resolve('src/interfaces/http/Api', pathController);

  return require(controllerPath).router();
};