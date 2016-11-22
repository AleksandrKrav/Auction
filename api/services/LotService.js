/**
 * Created by Aleksandr on 11.11.2016.
 */
module.exports = {
  setBet: function (bet, next) {
    Lot.update({id: bet.id}, {/*users*/price:bet.price}).exec(function (err, bet) {
      if (err) throw err;
      next(bet);
    })
  },
  makeLotInActive: function (bet, next) {
    Lot.update({id: lot.id}, {state:"ACTIVE"}).exec(function (err, bet) {
      if (err) throw err;
      next(bet);
    })
  },
  makeLotActive: function (bet, next) {
    Lot.update({id: lot.id}, {state:"INACTIVE"}).exec(function (err, bet) {
      if (err) throw err;
      next(bet);
    })
  },
  addLot: function (lot, next) {
    // console.log(lot);
    Lot.create(lot).exec(function (err, lot) {
      if (err) throw err;
      next(lot);
    })
  },
  removeLot: function (lot, next) {
    Lot.destroy({id: lot.id}).exec(function (err, lot) {
      if (err) throw err;
      next(lot);
    })
  }
};
