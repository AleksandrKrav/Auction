/**
 * LotController
 *
 * @description :: Server-side logic for managing Lots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  setBet: function (req, res) {
    console.log(req.body);
    var bet = (req.body) ? req.body : undefined;

    LotService.setBet(bet, function (success) {
      res.json(success)
    });
  },
  addLot: function (req, res) {
    console.log('Add lot ctrl ' + req.body);
    var lot = (req.body) ? req.body : undefined;
    var sab = SabjectService.addSabject({
        name: lot.sabjectName,
        user_id: lot.userId
      },
      function (success) {
        console.log(success)
      });
    var lot =  LotService.addLot({

    }, function(success) {
      res.json(success)
    });
  },
  removeLot: function (req, res) {
    var lot = (req.body) ? req.body : undefined;

    LotService.removeLot(lot, function (success) {
      res.json(success)
    });
  },
  makeLotActive: function (req, res) {
    var lot = (req.body) ? req.body : undefined;

    LotService.makeLotActive(lot, function (success) {
      res.json(success)
    });
  },
  makeLotInActive: function (req, res) {
    var lot = (req.body) ? req.body : undefined;

    LotService.makeLotInActive(lot, function (success) {
      res.json(success)
    });
  }
};

