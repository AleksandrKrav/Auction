/**
 * User.js
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
    login: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    roles: {
      type: 'string',
      required: true,
      enum: ['Admin', 'User']
    },
    lots: {
      collection: 'lot',
      via: 'users'
      //dominant: true
    }
  }
};

