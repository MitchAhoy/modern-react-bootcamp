import React from 'react'
import {Link} from 'react-router-dom'
import './DogSelect.css'



function DogSelect (props) {

    console.log(props.dogs.dogs)

    const cards = 
   
  return (
    <div className="DogSelect">
        <h1 className='display-1 text-center'>Dog List</h1>
        <div className='container'>
            <div className='row'>
            
            {props.dogs.dogs.map(dog => 
                <div className='col-4 text-center'>
                    <img src={dog.src} alt={dog.name}/>
                <h3>{dog.name}</h3>
                </div>
    )}
        </div>
        </div>
    </div>
  )
}

export default DogSelect
