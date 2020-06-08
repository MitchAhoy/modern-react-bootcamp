import React from 'react'
import { Link } from 'react-router-dom'
import './DogDetail.css'




function DogDetail(props) {


  const dog = props.dog


  return (
    <div className='container'>
      <div className="DogDetail row justify-content-center mt-5">
        <div className='col-11 col-5-lg'>
          <div className='Dogdetails-card card'>
            <img className='card-img-top' src={dog.src} alt={dog.name} />
            <div className='card-body'>
              <h2 className='card-title'>{dog.name}</h2>
              <h3 className='card-subtitle text-muted'>Age: {dog.age}</h3>
            </div>
            <ul className='list-group list-group-flush'>
              {dog.facts.map((fact, idx) => <li className='list-group-item' key={idx}>{fact}</li>)}
            </ul>
            <div className='card-body'>
              <Link className='btn btn-info' to='/dogs'>Go Back</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DogDetail