const {attributes} = require('structure');


const User = attributes({
  id: Number,
  name: {
    type: String,
    required: true
  },
  age: Number
})(class User {});

User.MIN_LEGAL_AGE = 21;


module.exports = User;