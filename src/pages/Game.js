import React from "react";

const Game = () => {

  // Create Card Deck
  const cardDeck = () => {
    const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
    const deck = []
    const createDeck = () => {
      for(let i=0; i<cards.length;i++){
        for(let j=0; j<suits.length;j++){
          deck.push({number: cards[i], suit: suits[j]})
        }
      }
    }
    createDeck()
    console.log(deck)
  }


  return (
    <div>
      <h1>Blackjack</h1>
      <h3>Dealer:</h3>
      <h3>Your Cards:</h3>
      <button>Hit</button>
      <button>Hold</button>
      {cardDeck()}
    </div>
  )
}

export default Game