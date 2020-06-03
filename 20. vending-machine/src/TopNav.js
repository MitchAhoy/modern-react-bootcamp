import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import Chips from './Chips'
import Chocolate from './Chocolate'
import IceCream from './IceCream'
import VendingMachine from './VendingMachine'

import './TopNav.css';

function TopNav() {
  return (
    <div className="TopNav">
      <nav>

        <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
        <NavLink exact activeClassName='active-link' to='/chocolate'>Chocolate</NavLink>
        <NavLink exact activeClassName='active-link' to='/ice-cream'>Ice Cream</NavLink>
        <NavLink exact activeClassName='active-link' to='/chips'>Chips</NavLink>

      </nav>

      <Switch>
        <Route exact path='/' component={VendingMachine}></Route>
        <Route exact path='/chocolate' component={Chocolate}></Route>
        <Route exact path='/ice-cream' component={IceCream}></Route>
        <Route exact path='/chips' component={Chips}></Route>
      </Switch>

    </div>
  );
}

export default TopNav;
