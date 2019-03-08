const {attributes} = require('structure');


const User = attributes({
  id: Number,
  name: {
    type: String,
    required: true
  },
  age: Number
})(class User {
  create({id, name, age}) {
    return (
      new User({id: id, name: name, age: this.setAge(age)})

    );
  }

  setAge(age) {
    return age > 18 ? this.age = age : null;
  }
});

module.exports = User;