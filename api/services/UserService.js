/**
 * Created by Aleksandr on 11.11.2016.
 */
module.exports = {
  getUsers: function(next) {
    User.find().exec(function(err, users) {
      if(err) throw err;
      next(users);
    });
  },

  addUser: function (user, next) {
    User.create({
      name: user.name,
      login: user.login,
      password: user.password,
      roles: 'User'
    }).exec(function (err, user) {
      if (err) throw err;
      next(user);
    })
  },

  getUser: function(id, next){
    User.findOne({id: id}).exec(function (err, user) {
      if (err) throw err;
      console.log(user);
      next(user);
    });
  },

  removeUser: function (user, next) {
    User.destroy({value: user}).exec(function (err, user) {
      if (err) throw err;
      next(user);
    })
  }

};
