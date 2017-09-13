'use strict'

const sort = require('./sort')
const Deck = require('./Deck')

describe('Sort', () => {
  it('should sort an array of cards', () => {
    const deck = new Deck()
    deck.shuffle()

    const sorted = sort(deck.cards)
    expect(sorted).toEqual(new Deck().cards)
  })
})
