/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getUsers: function(req, res) {
    UserService.getUsers(function(users) {
      res.json(users)
    })
  },

  addUser: function(req, res) {
    console.log(req.body);
    var user = (req.body) ? req.body : undefined;

    UserService.addUser(user, function(success) {
      res.json(success)
    });
  },

  removeUser: function(req, res) {
    var user = (req.body) ? req.body : undefined;

    UserService.removeUser(user, function(success) {
      res.json(success)
    });
  }

};

