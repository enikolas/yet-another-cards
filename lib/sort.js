'use strict'

const _ = require('lodash')

const sort = (cards) => {
  return _.sortBy(cards, [card => card.numberfy()])
}

module.exports = sort
