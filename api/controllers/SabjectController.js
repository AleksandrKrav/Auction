/**
 * SubjectController
 *
 * @description :: Server-side logic for managing Subjects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getSabjects: function(req, res) {
    SabjectService.getSabjects(function(sub) {
      res.json(sub)
    })
  }
};

