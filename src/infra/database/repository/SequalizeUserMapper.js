const User = require('src/domain/User');
const SequelizeUserMapper = {

  toEntity({dataValues}) {
    return new User({ ...dataValues });
  },
  toDatabase(survivor) {
    const { name } = survivor;

    return { name };
  }
};

module.exports = SequelizeUserMapper;


