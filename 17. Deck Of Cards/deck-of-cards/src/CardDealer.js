import React, { useState, useEffect } from 'react';
import './CardDealer.css';
import CardPile from './CardPile'

function CardDealer() {

  // let deckToDraw;

  const [deckToDraw, setDeckToDraw] = useState([])
  const [drawnCards, setDrawnCards] = useState([])
  let [cardCount, setCardCount] = useState(0)


  const getDeck = async () => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle')

    if (!response.ok) {
      throw new Error("HTTP error " + response.status)
    }

    const deckData = await response.json()

    const deckURL = `https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/?count=52`

    const deckResponse = await fetch(deckURL)
    return deckResponse.json()

  }

  useEffect(
    () => {
      const assignDeck = async () => {
        const deck = await getDeck()
        setDeckToDraw(deck.cards)
      }
      assignDeck()
    },
    []
  )

  const handleClick = () => {
    if (cardCount >= 52) {
      alert('no cards left')
    }


    setCardCount(++cardCount)
    setDrawnCards([...deckToDraw].slice(0, cardCount))
    console.log(drawnCards)
  }







  return (
    <div className="CardDealer">
      <h1>Card Dealer</h1>
      <p>A demo made with react</p>

      <button onClick={handleClick}>Deal me a card</button>

      <CardPile
        cards={drawnCards}
      />
    </div>
  );
}

export default CardDealer;
