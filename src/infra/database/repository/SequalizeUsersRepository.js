const UserMapper = require('./SequalizeUserMapper');

class SequalizeUsersRepository {
  constructor({UserModel})
  {
    this.UserModel = UserModel;
  }

  async getAll(...args){
    console.log('User  model ', this.UserModel);

    const users = this.UserModel.find({},(err,collection) => console.log(collection));
    return users.map(UserMapper.toEntity);
  }
}


module.exports = SequalizeUsersRepository;