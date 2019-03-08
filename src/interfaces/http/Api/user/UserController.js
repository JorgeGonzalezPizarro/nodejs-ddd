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
  listUsers: () => (req, res, next) => {
    console.log(console.log("aa"));
    console.log(req.GetListUser.execute())
   // return GetAllUsers.execute(req.body);
  }
};


module.exports = UserController;