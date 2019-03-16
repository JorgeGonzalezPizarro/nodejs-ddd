const UseCaseOperation = require('src/application/UseCaseOperation');

class GetListUser extends UseCaseOperation{
  constructor({politiciansRepository})
  {
    super();
    this.politiciansRepository = politiciansRepository;
  }

  async execute () {
    try {
      this.emit(this.events.SUCCESS, await this.politiciansRepository.getAll({
        attributes: ['id', 'name']
      }));
    }
    catch (e) {
      this.emit(this.events.ERROR, e);
    }
  }
}

GetListUser.events(['SUCCESS', 'ERROR']);

module.exports = GetListUser;