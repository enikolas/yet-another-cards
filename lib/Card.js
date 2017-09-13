'use strict'

const _ = require('lodash')

class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }

  numberfy () {
    return _.values(Card.suits).indexOf(this.suit) * Card.ranks.length + Card.ranks.indexOf(this.rank)
  }

  toString () {
    return `${this.rank}${this.suit}`
  }
}

Card.suits = {
  hearts: '♥',
  spades: '♠',
  clubs: '♣',
  diamonds: '♦'
}

Card.ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

module.exports = Card
