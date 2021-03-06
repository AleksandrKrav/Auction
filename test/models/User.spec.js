
require('./../bootstrap.spec');

describe('User model', function () {
  describe('#create', function () {
    var user;
    before(function (cb) {
      var userData = {
        name: "myname1",
        login: "mylogin1",
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
      user.name.should.equal('myname1');
      user.login.should.equal('mylogin1');
      user.password.should.equal('123');
      user.roles.should.equal('User');
    });

    after(function (cb) {
      User.destroy({id: user.id}, function (err) {
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
        name: "myname2",
        login: "mylogin2",
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
        result.name.should.equal('myname2');
        result.login.should.equal('mylogin2');
        result.password.should.equal('123');
        result.roles.should.equal('User');
        expect(result).to.be.an('object');
        //result.should.eql(user);
        cb();
      });
    });

    after(function (cb) {
      User.destroy({id: user.id},function (err) {
        cb(err);
      });
    });
  });

  describe('#destroy', function () {

    var tempUser;
    before(function (cb) {
      var userData = {
        name: "myname3",
        login: "mylogin3",
        password: '123',
        roles: 'User'
      };
      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        tempUser = newUser;
        cb();
      });
    });

    it("must delete user", function (cb) {
      User.destroy({id: tempUser.id}, function (err) {
        if (err) return cb(err);
        cb(err);
      });
    });

  });
});
