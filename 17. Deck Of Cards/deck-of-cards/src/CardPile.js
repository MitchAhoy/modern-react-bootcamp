import React from 'react';
import './CardPile.css';
import Card from './Card'

function CardPile(props) {
  console.log(props.cards)


  return (
    <div className="CardPile">
      {props.cards.map(card =>
        <Card cardImg={card.image} cardInfo={`${card.value} of ${card.suit}`} key={card.code} />
      )}

    </div>
  );
}

export default CardPile;
