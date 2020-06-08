import React from 'react'
import { Link } from 'react-router-dom'
import './DogSelect.css'



function DogSelect(props) {
  return (
    <div className="DogSelect">
      <h1 className='display-1 text-center'>Dog List</h1>
      <div className='container'>
        <div className='row'>
          {props.dogs.dogs.map(dog =>
            <div key={dog.name} className='col-4 text-center'>
              <img src={dog.src} />
              <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DogSelect