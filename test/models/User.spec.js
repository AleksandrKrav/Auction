/**
 * Created by Aleksandr on 10.12.2016.
 */
// Here is were we init our 'sails' environment and application
require('./../bootstrap.spec');
//var User = require('../../api/models/User');

describe('User model', function () {
  describe('#create', function () {
    var user;
    before(function (cb) {
      var userData = {
        name: "myname",
        login: "mylogin",
        password: '123',
        roles: 'User'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        cb();
      });

    });

    it("must create temp user", function () {
      user.name.should.equal('myname');
      user.login.should.equal('mylogin');
      user.password.should.equal('123');
      user.roles.should.equal('User');
    });

    after(function (cb) {
      User.destroy(function (err) {
        cb(err);
      });
    });
  });

  describe('#findAll', function () {
    it("must not be empty user list", function (cb) {

      User.find(function (err, results) {
        if (err) return cb(err);
        assert.notEqual(results.length, 0);
        cb();
      });
    });
  });

  describe('#findById', function () {

    var user;
    before(function (cb) {
      var userData = {
        name: "myname",
        login: "mylogin",
        password: '123',
        roles: 'User'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        cb();
      });

    });
    it("equal new object with exist", function (cb) {
      User.findOne({id: user.id}, function (err, result) {
        if (err) return cb(err);
        result.name.should.equal('myname');
        result.login.should.equal('mylogin');
        result.password.should.equal('123');
        result.roles.should.equal('User');
        expect(result).to.be.an('object');
        //result.should.eql(user);
        cb();
      });
    });

    after(function (cb) {
      User.destroy(function (err) {
        cb(err);
      });
    });
  });

});
