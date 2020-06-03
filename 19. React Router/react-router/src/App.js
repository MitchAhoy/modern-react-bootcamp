import React from 'react';
import Dog from './Dog'
import About from './About'
import Contact from './Contact'
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName="active-link" to='/dog'>dog</NavLink>
        <NavLink exact activeClassName="active-link" to='/contact'>contact</NavLink>
        <NavLink exact activeClassName="active-link" to='/about'>about</NavLink>
      </nav>

      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/dog' render={() => <Dog name="muffin" />} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>

  );
}

export default App;
