/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* globals User */
'use strict';
module.exports = {
  getUsers: function(req, res) {
    User.find().exec(function(err, users) {
      if(err) throw err;
      res.json(users);
    });
  },

  getUser: function(req, res){
    var id = (req.param('user_id')) ? req.param('user_id') : undefined;

    User.findOne({id: id}).exec(function (err, user) {
      if (err) throw err;
      res.json(user);
    });
  },

  addUser: function(req, res) {
    var user = (req.body) ? req.body : undefined;

    User.create({
      name: user.name,
      login: user.login,
      password: user.password,
      roles: 'User'
    }).exec(function (err, user) {
      if (err) throw err;
      res.json(user);
    });
  },

  removeUser: function(req, res) {
    var userId = (req.body.id) ? req.body.id : undefined;

    User.destroy({id: userId}).exec(function (err, user) {
      if (err) throw err;
      res.json(user);
    });
  },

  editUser: function(req, res){
    var user = (req.body.user) ? req.body.user : undefined;

    User.update({id: user.id}, {
      login: user.login,
      password: user.password
    }).exec(function (err, user) {
      if (err) throw err;
      res.json(user);
    });
  }

};

