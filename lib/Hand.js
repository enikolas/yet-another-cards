'use strict'

const _ = require('lodash')

const sort = require('./sort')

class Hand {
  constructor () {
    this.cards = []
  }

  add (card) {
    this.cards.push(card)
  }

  play (card) {
    this.cards = this.cards.filter(item => item !== card)
  }

  toString () {
    return sort(this.cards).map(card => card.toString()).join(' ')
  }

  multipleLines () {
    const sorted = sort(this.cards)

    const cardsBySuit = []

    sorted.forEach(card => {
      const {suit, rank} = card

      if (!cardsBySuit[suit]) {
        cardsBySuit[suit] = `${suit} ${rank}`
      } else {
        cardsBySuit[suit] = `${cardsBySuit[suit]} ${rank}`
      }
    })

    return _.values(cardsBySuit).join('\n')
  }
}

module.exports = Hand
