import React from 'react';
import './Meal.css'

function Meal(props) {

    const foodName = props.match.params.foodName
    const drinkName = props.match.params.drinkName

    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`


  return (
    <div className="Meal">
        <h1>I love to eat {foodName} and drink {drinkName}</h1>
      <img src={foodUrl} alt={foodName}></img>
      <img src={drinkUrl} alt={drinkName}></img>
    </div>
  );
}

export default Meal;
