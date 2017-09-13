'use strict'

const Hand = require('./Hand')
const Card = require('./Card')

describe('Hand', () => {
  it('should create an empty hand', () => {
    const hand = new Hand()

    expect(hand).toMatchSnapshot()
  })

  it('should add a new card to the hand', () => {
    const hand = new Hand()
    hand.add(new Card(Card.suits.hearts, Card.ranks[0]))

    expect(hand).toMatchSnapshot()
  })

  it('should remove a card from the hand when it is played', () => {
    const hand = new Hand()
    const card = new Card(Card.suits.hearts, Card.ranks[0])

    hand.add(card)
    hand.play(card)

    expect(hand).toMatchSnapshot()
  })

  describe('Printing', () => {
    const suits = [
      Card.suits.hearts,
      Card.suits.spades,
      Card.suits.diamonds,
      Card.suits.clubs
    ]

    let hand

    beforeEach(() => {
      hand = new Hand()

      for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < suits.length; j++) {
          hand.add(new Card(suits[i], Card.ranks[j]))
        }
      }
    })

    it('should return a readable value of the hand in a single line', () => {
      expect(hand.toString()).toMatchSnapshot()
    })

    it('should return a readable value of the hand in multiple lines', () => {
      expect(hand.multipleLines()).toMatchSnapshot()
    })
  })
})
