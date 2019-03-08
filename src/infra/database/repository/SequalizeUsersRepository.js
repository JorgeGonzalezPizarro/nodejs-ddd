const UserMapper = require('./SequalizeUserMapper');

class SequalizeUsersRepository {
  constructor({UserModel})
  {
    this.UserModel = UserModel;
  }

  async getAll(...args){

    const users = this.UserModel.findAll(...args);
    return users.map(UserMapper.toEntity);
  }
}


module.exports = SequalizeUsersRepository;