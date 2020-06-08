import React, {useState} from 'react';
import {Link} from 'react-router-dom'


function FoodSearch(props) {

    const [query, setQuery] = useState('')
    const handleChange = evt => {
        setQuery(evt.target.value)
    }
    const handleClick = evt => {
        alert('saved your food to DB')
        props.history.push(`/food/${query}`)
    }

  return (
    <div className="FoodSearch">
        <h2>Search for a food</h2>
        <input type='text' 
        placeholder='Search for a food'
        onChange={handleChange}
        ></input>
        <Link
            to={`/food/${query}`}>
                Search
            </Link>
    
        <button onClick={handleClick}>Save New Food!</button>
        
    </div>
  );
}

export default FoodSearch;
