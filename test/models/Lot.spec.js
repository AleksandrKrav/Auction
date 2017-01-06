/**
 * Created by Aleksandr on 10.12.2016.
 */
require('./../bootstrap.spec');
describe('Lot model', function () {
  describe('#createLot', function () {
    var lot;
    var user;
    var lotPrice  = 123;
    before(function (cb) {
      var userData = {
        name: "myname4",
        login: "mylogin4",
        password: '123',
        roles: 'User'
      };
      var lotData = {
        name:"lotName",
        type:"some",
        price: lotPrice,
        owner:"",
        startDate: new Date(),
        state:'NEW'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        lotData.owner = newUser.id;
        Lot.create(lotData,function (err, newLot) {
          if (err) return cb(err);
          lot = newLot;
          cb();
        })
      });

    });

    it("must create temp lot", function () {
      lot.name.should.equal('lotName');
      lot.type.should.equal('some');
      lot.price.should.equal(lotPrice);
    });
    after(function (cb) {
      Lot.destroy({id: lot.id},function (err) {
        User.destroy({id: user.id},function (err) {
          cb(err);
        });
      });
    });
  });

  describe('#findAllLots', function () {
    var lot;
    var user;
    var lotPrice  = 123;
    before(function (cb) {
      var userData = {
        name: "myname5",
        login: "mylogin5",
        password: '123',
        roles: 'User'
      };
      var lotData = {
        name:"lotName",
        type:"some",
        price: lotPrice,
        owner:"",
        startDate: new Date(),
        state:'NEW'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        lotData.owner = newUser.id;
        Lot.create(lotData,function (err, newLot) {
          if (err) return cb(err);
          lot = newLot;
          cb();
        })
      });

    });
    it("must not be empty lot list", function (cb) {

      Lot.find(function (err, results) {
        if (err) return cb(err);
        assert.notEqual(results.length, 0);
        cb();
      });
    });
    after(function (cb) {
      Lot.destroy({id: lot.id},function (err) {
        User.destroy({id: user.id},function (err) {
          cb(err);
        });
      });
    });
  });

  describe('#findByOwnerId', function () {
    var lot;
    var user;
    var lotPrice  = 123;
    before(function (cb) {
      var userData = {
        name: "myname6",
        login: "mylogin6",
        password: '123',
        roles: 'User'
      };
      var lotData = {
        name:"lotName",
        type:"some",
        price:lotPrice,
        owner:"",
        startDate: new Date(),
        state:"NEW"
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        lotData.owner = newUser.id;
        Lot.create(lotData,function (err, newLot) {
          if (err) return cb(err);
          lot = newLot;
          cb();
        })
      });

    });
    it("equal new object with exist", function (cb) {
      Lot.findOne({owner: user.id}, function (err, result) {
        if (err) return cb(err);
        result.name.should.equal('lotName');
        result.type.should.equal('some');
        result.price.should.equal(lotPrice);
        expect(result).to.be.an('object');
        //result.should.eql(user);
        cb();
      });
    });

    after(function (cb) {
      Lot.destroy({id: lot.id},function (err) {
        User.destroy({id: user.id},function (err) {
          cb(err);
        });
      });
    });
  });
  describe('#deleteLot', function () {
    var lot;
    var user;
    var lotPrice  = 123;
    before(function (cb) {
      var userData = {
        name: "myname7",
        login: "mylogin7",
        password: '123',
        roles: 'User'
      };
      var lotData = {
        name:"lotName",
        type:"some",
        price: lotPrice,
        owner:"",
        startDate: new Date(),
        state:'NEW'
      };

      User.create(userData, function (err, newUser) {
        if (err) return cb(err);
        user = newUser;
        lotData.owner = newUser.id;
        Lot.create(lotData,function (err, newLot) {
          if (err) return cb(err);
          lot = newLot;
          cb();
        })
      });

    });

    it("delete lot", function (cb) {
      Lot.destroy({id: lot.id}, function (err) {
        if (err) return cb(err);

        cb();
      });
    });
    after(function (cb) {
      User.destroy({id: user.id},function (err) {
        cb(err);
      });
    });
  });

});
