var passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {

    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
        return res.redirect('/userdetail/'+ user.id);
      });

    })(req, res);
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  },

  createMyUser: function(req, res){
    var user = (req.body) ? req.body : undefined;

    User.create({
      name: user.name,
      login: user.login,
      password: user.password,
      roles: 'User'
    }).exec(function (err, user) {
      if (err) throw err;
      res.redirect('/login');
    });
  }

};
