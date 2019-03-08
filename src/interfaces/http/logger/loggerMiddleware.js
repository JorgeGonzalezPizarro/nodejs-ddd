const morganLogger = require('morgan');

//const LoggerStreamAdapter = require('src/infra/logger/LoggerStreamAdapter');
const LoggerStreamAdapter = require('../../../infra/logger/LoggerStreamAdapter');

module.exports = ({ logger }) => {
  return morganLogger('dev', {
    stream: LoggerStreamAdapter.toStream(logger)
  });
};
