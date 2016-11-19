/**
 * Created by Aleksandr on 11.11.2016.
 */
module.exports = {
  getSabjects: function(next) {
    Sabject.find().exec(function(err, subj) {
      if(err) throw err;
      next(subj);
    });
  }
};
