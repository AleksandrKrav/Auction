/**
 * Lot.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
'use strict';
module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    price: {
      type: 'integer',
      required: true
    },
    owner: {
      model: 'user'
    },
    winner: {
      model: 'user'
    },
    users: {
      collection: 'user',
      via: 'lots'
    },
    startDate: {
      type: 'date',
      required: true
    },
    finishDate: {
      type: 'date'
    },
    step: {
      type: 'integer'
    },
    state: {
      type: 'string',
      required: true,
      enum: ['NEW', 'ACTIVE', 'INACTIVE']
    },
    comments: {
      type: 'string'
    }
  }
};

