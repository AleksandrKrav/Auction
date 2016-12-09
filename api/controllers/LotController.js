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

  getLotsByOwnerId: function (req, res) {
    var ownerId = (req.param('id')) ? req.param('id') : undefined;

    Lot.find({owner: ownerId}).exec(function (err, lots) {
      if (err) throw err;
      res.json(lots);
    });

  },

  setBet: function (req, res) {
    var bet = (req.body) ? req.body : undefined;

    Lot.update({id: bet.id}, {/*users*/price:bet.price}).exec(function (err, bet) {
      if (err) throw err;
      res.json(bet);
    });
  },

  addLot: function (req, res) {

    var lot = (req.body) ? req.body : undefined;

    Lot.create({
      name: lot.lotName,
      price: lot.lotPrice,
      type: lot.lotType,
      owner: lot.userId,
      startDate: new Date(),
      //finishDate: '',
      step: 0,
      state: 'NEW',
      comments: ''
    }).exec(function (err, lot) {
      if (err) throw  err;
      res.json(lot);
    });
  },

  editLot: function(req, resp){
    var lot = (req.body) ? req.body : undefined;

    Lot.update({id: lot.id}, {
      name: lot.name,
      price: lot.price,
      type: lot.type,
      finishDate: lot.finishDate,
      step: lot.step,
      state: lot.state,
      comments: lot.comments
    }).exec(function (err, lot) {
      if (err) throw  err;
      resp.json(lot);
    });
  },

  removeLot: function (req, res) {
    var lot = (req.body) ? req.body : undefined;

    Lot.destroy({id: lot.id}).exec(function (err, lot) {
      if (err) throw err;
      res.json(lot);
    });

  },

  makeLotActive: function (req, res) {
    var lot = (req.body) ? req.body : undefined;

    Lot.update({id: lot.id}, {state:"ACTIVE"}).exec(function (err, bet) {
      if (err) throw err;
      res.json(bet);
    });
  },

  makeLotInActive: function (req, res) {
    var lot = (req.body) ? req.body : undefined;

    Lot.update({id: lot.id}, {state:"INACTIVE"}).exec(function (err, bet) {
      if (err) throw err;
      res.json(bet);
    });
  }
};

