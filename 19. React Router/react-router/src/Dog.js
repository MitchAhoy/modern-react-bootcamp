import React from 'react';


function Dog(props) {
  return (
    <div className="Dog">
      <h1>This is a dog component</h1>
      <h3>This dog is named {props.name}</h3>
      <p>Look at this dog</p>
    </div>
  );
}

export default Dog;
