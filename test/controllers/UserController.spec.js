/**
 * Created by Aleksandr on 10.12.2016.
 */

require('./../bootstrap.spec');


describe('UserController', function () {

  describe('#getUsers()', function () {
    var tempUser, req;

    before(function (cb) {
      req = request.agent(sails.hooks.http.app);
      var userData = {
        name: "myname8",
        login: "mylogin8",
        password: '123',
        roles: 'User'
      };
      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        tempUser = newUser;
        cb();
      });
    });

    it("should be able to create", function(done) {
      req.post('/login')
        .set('Accept', 'application/json')
        .send({"login": tempUser.login.toString(), "password": tempUser.password.toString()})
        //.expect('Content-Type', /json/)
        //.expect('set-cookie', 'cookie=hey; Path=/', done)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            done();
          }
        });
    });

    it('should return users', function (done) {
      req.get('/user/getUsers')
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
    var tempUser, req;
    before(function (cb) {
      req = request.agent(sails.hooks.http.app);
      var userData = {
        name: "myname9",
        login: "mylogin9",
        password: '123',
        roles: 'User'
      };
      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        tempUser = newUser;
        cb();
      });
    });

    it("should be able to create", function(done) {
      req.post('/login')
        .set('Accept', 'application/json')
        .send({"login": tempUser.login.toString(), "password": tempUser.password.toString()})
        //.expect('Content-Type', /json/)
        //.expect('set-cookie', 'cookie=hey; Path=/', done)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            done();
          }
        });
    });

    it("should return user by id", function (done) {
      req.get('/user/getUser?user_id=' + tempUser.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            result.body.should.be.an('object');
            result.body.should.have.property('id');
            result.body.should.have.property('name', 'myname9');
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
        .post('/createMyUser')
        .set('Accept', 'application/json')
        .send({"name": "Petr", "login": "LogPetr", "password": "qwerty"})
        //.expect('Content-Type', /json/)
        .expect(302)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            // result.body.should.be.an('object');
            // result.body.should.have.property('id');
            // result.body.should.have.property('name', 'Petr');
            // result.body.should.have.property('login', 'LogPetr');
            // result.body.should.have.property('password', 'qwerty');
            done();
          }
        });
    });
  });

  describe("removeUser", function () {
    var tempUser, req;
    before(function (cb) {
      req = request.agent(sails.hooks.http.app);
      var userData = {
        name: "myname11",
        login: "mylogin11",
        password: '123',
        roles: 'User'
      };
      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        tempUser = newUser;
        cb();
      });
    });

    it("should be able to create", function(done) {
      req.post('/login')
        .set('Accept', 'application/json')
        .send({"login": tempUser.login.toString(), "password": tempUser.password.toString()})
        //.expect('Content-Type', /json/)
        //.expect('set-cookie', 'cookie=hey; Path=/', done)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            done();
          }
        });
    });

    it('should delete post created', function (done) {
      req.post('/user/removeUser')
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
