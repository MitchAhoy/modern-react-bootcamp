import React from 'react';
import { Router, NavLink, Switch, Route } from 'react-router-dom'
import './TopNav.css';


function TopNav() {
  return (
    <div className="TopNav">
      <nav>
        <NavLink exact to='/' activeClassName='active-link'>Home</NavLink>
        <NavLink exact to='/chips' activeClassName='active-link'>Chips</NavLink>
        <NavLink exact to='/chocolate' activeClassName='active-link'>Chocolate</NavLink>
        <NavLink exact to='/ice-cream' activeClassName='active-link'>Ice Cream</NavLink>
      </nav>
    </div>
  );
}

export default TopNav;
