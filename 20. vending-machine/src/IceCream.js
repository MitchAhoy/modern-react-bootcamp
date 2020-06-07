import React from 'react';
import { Link } from 'react-router-dom'

function IceCream() {
  return (
    <div className="IceCream">
      <h3>Ice Cream</h3>
      <Link exact to='/'>GO Back</Link>
    </div>
  );
}

export default IceCream;