/**
 * Created by Aleksandr on 10.12.2016.
 */

require('./../bootstrap.spec');


describe('UserController', function () {

  describe('#getUsers()', function () {
    it('should return users', function (done) {
      request.agent(sails.hooks.http.app)
        .get('/user/getUsers')
        //.set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err)
          } else {
            done();
          }
          //true if response contains { message : "Your are pending user."}
          //res.body.message.should.be.eql("Your are pending user.");
        });
    });
  });
});
