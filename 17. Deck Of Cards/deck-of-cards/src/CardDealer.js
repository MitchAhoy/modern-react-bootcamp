import React, { useState } from 'react';
import './CardDealer.css';
import CardPile from './CardPile'

function CardDealer() {

  let deckToDraw;


  const getDeck = async () => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/')

    if (!response.ok) {
      throw new Error("HTTP error " + response.status)
    }

    const deckData = await response.json()

    const deckURL = `https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/?count=52`

    const deckResponse = await fetch(deckURL)
    const deck = deckResponse.json()

    deckToDraw = deck
    console.log(deckToDraw)

  }




  getDeck()



  return (
    <div className="CardDealer">
      <h1>Card Dealer</h1>
      <p>A demo made with react</p>

      <button>Deal me a card</button>

      <CardPile />
    </div>
  );
}

export default CardDealer;
