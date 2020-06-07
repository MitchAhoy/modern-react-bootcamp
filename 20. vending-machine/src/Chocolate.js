import React from 'react';
import { Link } from 'react-router-dom'


function Chocolate() {
  return (
    <div className="Chocolate">
      <h3>Chocolate</h3>
      <Link exact to='/'>GO Back</Link>
    </div>
  );
}

export default Chocolate;