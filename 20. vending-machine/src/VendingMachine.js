import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>VendingMachine</h1>
      <Link exact to='/chips'>Chips</Link>
      <Link exact to='/chocolate'>Chocolate</Link>
      <Link exact to='/ice-cream'>Ice Cream</Link>
    </div>
  );
}

export default VendingMachine;
