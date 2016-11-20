/**
 * Created by Aleksandr on 11.11.2016.
 */
module.exports = {
  getSabjects: function(next) {
    Sabject.find().exec(function(err, subj) {
      if(err) throw err;
      next(subj);
    });
  },
  addSabject: function (sab, next) {
    //console.log('Service create ' + sab.name + sab.user_id);
    Sabject.create({
      name: sab.name,
      owner: sab.user_id,
    }).exec(function (err, user) {
      if (err) throw err;
      next(user);
    })
  }
};
