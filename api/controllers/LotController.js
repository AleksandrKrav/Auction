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
    console.log('Add lot ctrl ' + JSON.stringify(req.body));
    var lot = (req.body) ? req.body : undefined;
    var sab = Sabject.create({
      name: lot.sabjectName,
      owner: lot.userId,
    }).then(function (err, sab) {
      if (err) throw err;
      return sab;
    });

    // SabjectService.addSabject({
    //     name: lot.sabjectName,
    //     user_id: lot.userId
    //   },
    //   function (success) {
    //     console.log(success)
    //     sab = success;
    //   });

    LotService.addLot({
      name: lot.lotName,
      price: lot.lotPrice,
      users: lot.userId,
      sabject: sab.id,
      startDate: new Date(),
      //finishDate: '',
      step: 0,
      state: 'NEW',
      comments: ''
    }, function (success) {
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

