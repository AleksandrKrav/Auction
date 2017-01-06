var sails = require('sails');
//var _ = require('lodash');
global.request = require('supertest');

global.chai = require('chai');
global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;

before(function (done) {

// Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(50000);

  sails.lift({
    log: {
      level: 'silent'
    },
    hooks: {
      grunt: false
    },
    models: {
      connection: 'mongodb',
      migrate: 'drop'
    },
    connections: {
      mongodb: {
        adapter: 'sails-disk'
      }
    }
  }, function (err, server) {
    if (err) returndone(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function (done) {
// here you can clear fixtures, etc.
  //if (sails && _.isFunction(sails.lower)) {
    sails.lower(done);
  //}
});
