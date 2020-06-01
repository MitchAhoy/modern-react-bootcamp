import React from 'react';
import './Card.css';

function Card(props) {

  const randTransform = () => {
    return Math.floor(Math.random() * 5)
  }

  const randRotate = `translate(${Math.random() * 20}px, ${Math.random() * 20}px) rotate(${Math.random() * 20}deg)`

  return (
    <div className="Card">
      <img src={props.cardImg} alt={props.cardInfo} style={{ transform: randRotate }}></img>
    </div>
  );
}

export default Card;
