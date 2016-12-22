/**
 * Created by Aleksandr on 10.12.2016.
 */

require('./../bootstrap.spec');


describe('UserController', function () {

  describe('#getUsers()', function () {
    it('should return users', function (done) {
      request.agent(sails.hooks.http.app)
        .get('/user/getUsers')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            result.body.should.be.an('array');
            result.body.should.not.have.length(0);
            done();
          }
        });
    });
  });

  describe("#getUserById", function () {
    var tempUser;
    before(function (cb) {
      var userData = {
        name: "myname4",
        login: "mylogin",
        password: '123',
        roles: 'User'
      };
      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        tempUser = newUser;
        cb();
      });
    });

    it("should return user by id", function (done) {
      request.agent(sails.hooks.http.app)
        .get('/user/getUser?user_id=' + tempUser.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            result.body.should.be.an('object');
            result.body.should.have.property('id');
            result.body.should.have.property('name', 'myname4');
            result.body.should.have.property('password', '123');
            result.body.id.should.have.equal(tempUser.id);
            done();
          }
        });
    });

    after(function (cb) {
      User.destroy({id: tempUser.id}, function (err) {
        cb(err);
      });
    });
  });

  describe('#addUser', function () {
    it("should create user", function (done) {
      request.agent(sails.hooks.http.app)
        .post('/user/addUser')
        .set('Accept', 'application/json')
        .send({"name": "Petr", "login": "LogPetr", "password": "qwerty"})
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            result.body.should.be.an('object');
            result.body.should.have.property('id');
            result.body.should.have.property('name', 'Petr');
            result.body.should.have.property('login', 'LogPetr');
            result.body.should.have.property('password', 'qwerty');
            done();
          }
        });
    });
  });

  describe("removeUser", function () {
    var tempUser;
    before(function (cb) {
      var userData = {
        name: "myname4",
        login: "mylogin",
        password: '123',
        roles: 'User'
      };
      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        tempUser = newUser;
        cb();
      });
    });

    it('should delete post created', function (done) {
      request.agent(sails.hooks.http.app)
        .post('/user/removeUser')
        .send({"id": tempUser.id})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, result) {
          if (err) {
            return done(err);
          } else {
            return done(null, result.text);
          }
        });
    });
  });
});
