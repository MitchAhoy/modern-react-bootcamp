import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar(props) {

  const dogLinks = props.dogs.map(dog =>
    <li className='nav-item' key={dog.name}>
      <NavLink exact to={`/dogs/${dog.name}`} activeClassName='active' className='nav-link'>
        {dog.name}
      </NavLink>
    </li>
  )



  return (
    <div className='NavBar'>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/dogs'>
            DogFinder
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <NavLink exact to='/dogs' className='nav-link'>
                  Home
                </NavLink>
              </li>
              {dogLinks}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
