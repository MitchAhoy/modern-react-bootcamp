import React from 'react';
import { Link } from 'react-router-dom'


function Chips() {
  return (
    <div className="Chips">
      <h3>Chips</h3>
      <Link exact to='/'>GO Back</Link>
    </div>
  );
}

export default Chips;