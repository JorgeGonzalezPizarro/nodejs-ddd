class GetListUser {
  constructor({userRepository})
  {
    this.userRepository = userRepository;
  }


  async execute () {
    try {
      return await this.userRepository.getAll({
        attributes: ['id', 'name']
      });
    }
    catch (e) {
      throw new Error(e);
    }
  }
}
module.exports = GetListUser;