/**
 * LotController
 *
 * @description :: Server-side logic for managing Lots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getLots: function (req, res) {
    Lot.find().populateAll().exec(function (err, lots) {
      if (err) throw err;
      res.json(lots);
    });
  },


  setBet: function (req, res) {
    console.log(req.body);
    var bet = (req.body) ? req.body : undefined;

    LotService.setBet(bet, function (success) {
      res.json(success)
    });
  },
  addLot: function (req, res) {

    var lot = (req.body) ? req.body : undefined;

    Sabject.create({
      name: lot.sabjectName,
      owner: lot.userId
    }).exec(function (sab) {

      Lot.create({
        name: lot.lotName,
        price: lot.lotPrice,
        //users: lot.userId,
        sabject: sab,
        startDate: new Date(),
        //finishDate: '',
        step: 0,
        state: 'NEW',
        comments: ''
      }).exec(function (err, lot) {
        if (err) throw  err;
        res.json(lot);
      });
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

