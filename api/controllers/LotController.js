/**
 * LotController
 *
 * @description :: Server-side logic for managing Lots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* globals Lot */
'use strict';
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



  removeLot: function (req, res) {
    var lot = (req.body) ? req.body : undefined;

    Lot.destroy({id: lot.id}).exec(function (err, lot) {
      if (err) throw err;
      res.json(lot);
    });

  },


};

