'use strict'

const _ = require('lodash')

const Card = require('./Card')

class Deck {
  constructor () {
    this.cards = []

    const suits = _.values(Card.suits)

    for (const suit of suits) {
      for (const rank of Card.ranks) {
        this.cards.push(new Card(suit, rank))
      }
    }
  }

  shuffle () {
    this.cards = _.shuffle(this.cards)
  }

  draw () {
    return this.cards.pop()
  }

  toString () {
    return this.cards.map(card => card.toString())
  }
}

module.exports = Deck
