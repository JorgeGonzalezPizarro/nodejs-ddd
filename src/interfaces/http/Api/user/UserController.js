const {Router} = require('express');
const {inject} = require('awilix-express');
const Status = require('http-status');


const UserController = {


  router() {
    const router = Router();
    router.get('/', inject('GetListUser'), this.listUsers());
    // router.get(':id').inject('getUser' , this.listUsers());
    // router.post('/').inject('createUser');
    // router.get('/:id').inject('getUser');
    // router.get('');
    return router;
  },



  listUsers: () => async (req, res, next) => {
    const {GetListUser } = req;
    const {events} = GetListUser;
    GetListUser.on(events.SUCCESS, (users) => {
      res.status(Status.OK).json(users);
    })
      .on(events.ERROR, next);

    await req.GetListUser.execute();
  }
};


module.exports = UserController;