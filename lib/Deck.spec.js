'use strict'

const Deck = require('./Deck')

describe('Deck', () => {
  it('should create a deck', () => {
    const deck = new Deck()

    expect(deck).toMatchSnapshot()
  })

  it('should shuffle the deck', () => {
    const deck = new Deck()
    deck.shuffle()

    expect(deck).not.toEqual(new Deck())
  })

  it('should draw a card from the deck', () => {
    const deck = new Deck()

    expect(deck.draw()).toMatchSnapshot()
    expect(deck).toMatchSnapshot()
  })

  it('should return readable string of a deck', () => {
    const deck = new Deck()

    expect(deck.toString()).toMatchSnapshot()
  })
})
