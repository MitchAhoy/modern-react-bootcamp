import React from 'react';
import './Food.css'
import {Redirect} from 'react-router-dom'

function Food(props) {
    const name = props.match.params.name
    const url = `https://source.unsplash.com/1600x900/?${name}`

    if (/\d/.test(name)) props.history.push('/pagenotfound')



  return (
    <div className="Food">
        {/\d/.test(name) ? <Redirect to='/pagenotfound' /> : <div>
      <h1>I love to eat {name}</h1>
      <img src={url} alt={name}></img>
    </div>}
    
    </div>
  );
}

export default Food;
