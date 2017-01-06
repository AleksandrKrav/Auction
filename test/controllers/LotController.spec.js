require('./../bootstrap.spec');


describe('LotController', function () {

  describe('#getLots()', function () {

    it('should return lots', function (done) {
      request.agent(sails.hooks.http.app)
        .get('/lot/getLots')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err)
          } else {
            done();
          }
        });
    });
  });
  describe('#addLot()', function () {
    var u ;
    var lot;
    var user;
    var lotPrice = 123;
    var ownerId;
    var lotData = {
      name: "lotName",
      type: "some",
      price: lotPrice,
      owner: "",
      startDate: new Date(),
      state: 'NEW'
    };
    before(function (cb) {
      u = request.agent(sails.hooks.http.app);
      var userData = {
        name: "myname20",
        login: "mylogin20",
        password: '123',
        roles: 'User'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        ownerId = newUser.id;
        cb();
      });

      lotData.owner = ownerId;

    });

    it("should be able to create", function(done) {
      u.post('/login')
        .set('Accept', 'application/json')
        .send({"login": user.login.toString(), "password": user.password.toString()})
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


    it('should create lot', function (done) {
      u.post('/lot/addLot')
        .set('Accept', 'application/json')
        .send({"lotName": "lotName", "lotType": "some", "lotPrice": lotPrice, "userId": ownerId})
        //.expect('Content-Type', /json/)
        //.expect(200)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            result.body.should.be.an('object');
            result.body.should.have.property('name', 'lotName');
            result.body.should.have.property('type', 'some');
            done();
          }
        });
    });

  });
  describe('#findByOwnerId()', function () {
    var req ;
    var lot;
    var user;
    var lotPrice = 123;
    before(function (cb) {
      req = request.agent(sails.hooks.http.app);
      var userData = {
        name: "myname13",
        login: "mylogin13",
        password: '123',
        roles: 'User'
      };
      var lotData = {
        name: "lotName",
        type: "some",
        price: lotPrice,
        owner: "",
        startDate: new Date(),
        state: 'NEW'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        lotData.owner = newUser.id;
        Lot.create(lotData, function (err, newLot) {
          if (err) return cb(err);
          lot = newLot;
          cb();
        })
      });
    });

    it("should be able to create", function(done) {
      req.post('/login')
        .set('Accept', 'application/json')
        .send({"login": user.login.toString(), "password": user.password.toString()})
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

    it('should find lot by owner id ', function (done) {
      req.get('/lot/getLotsByOwnerId?id=' + user.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, result) {
          if (err) {
            done(err)
          } else {
            result.body.should.be.an('array');
            result.body.should.have.length(1);
            done();
          }
        });
    });
  });
  describe('#deleteLot()', function () {
    var lot;
    var req;
    var user;
    var lotPrice = 123;
    before(function (cb) {
      req = request.agent(sails.hooks.http.app);
      var userData = {
        name: "myname14",
        login: "mylogin14",
        password: '123',
        roles: 'User'
      };
      var lotData = {
        name: "lotName",
        type: "some",
        price: lotPrice,
        startDate: new Date(),
        state: 'NEW'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        lotData.owner = newUser.id;
        Lot.create(lotData, function (err, newLot) {
          if (err) return cb(err);
          lot = newLot;
          cb();
        })
      });
    });

    it("should be able to create", function(done) {
      req.post('/login')
        .set('Accept', 'application/json')
        .send({"login": user.login.toString(), "password": user.password.toString()})
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
    it('should delete lot by id ', function (done) {
      req.post('/lot/removeLot')
        .send({"id": lot.id})
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
