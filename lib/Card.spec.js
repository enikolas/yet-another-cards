'use strict'

const Card = require('./Card')
const Deck = require('./Deck')

describe('Card', () => {
  it('should create a card', () => {
    const card = new Card(Card.suits.hearts, Card.ranks[0])

    expect(card).toMatchSnapshot()
  })

  it('should return a readable value of the hand', () => {
    const card = new Card(Card.suits.hearts, Card.ranks[0])

    expect(card.toString()).toMatchSnapshot()
  })

  it('should numberfy properly all the cards', () => {
    const deck = new Deck()
    const numberfyCards = deck.cards.map(card => card.numberfy())

    expect(numberfyCards).toMatchSnapshot()
  })
})
