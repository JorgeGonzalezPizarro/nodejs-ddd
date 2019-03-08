const {ModelsLoader} = require('../../sequelize');
const Sequelize = require('sequelize');
const {db: config} = require('../../../../config');


if (config) {
  module.exports = ModelsLoader.load({
    sequelize: new Sequelize(config),
    baseFolder: __dirname
  });
} else console.log('error on DB config');

