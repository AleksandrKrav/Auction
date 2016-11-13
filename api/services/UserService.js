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
    console.log(user);
    User.create({value: user}).exec(function (err, user) {
      if (err) throw err;
      next(user);
    })
  },

  removeUser: function (user, next) {
    User.destroy({value: user}).exec(function (err, user) {
      if (err) throw err;
      next(user);
    })
  }

};
