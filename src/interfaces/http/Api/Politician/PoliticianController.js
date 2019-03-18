const {Router} = require('express');
const {inject} = require('awilix-express');
const Status = require('http-status');
const authMiddleware = require('../../middleware/Auth');

const PoliticianController = {

  router() {
    const router = Router();

    router.use(inject('Authenticate'), authMiddleware);


    router.get('/', inject('GetListPolitician'), this.listUsers());
    // router.get(':id').inject('getUser' , this.listUsers());
    // router.post('/').inject('createUser');
    // router.get('/:id').inject('getUser');
    // router.get('');
    return router;
  },



  listUsers: () => async (req, res, next) => {
    const {GetListPolitician } = req;
    const {events} = GetListPolitician;
    GetListPolitician.on(events.SUCCESS, (users) => {
      res.status(Status.OK).json(users);
    })
      .on(events.ERROR, next);

    await req.GetListPolitician.execute();
  }
};


module.exports = PoliticianController;