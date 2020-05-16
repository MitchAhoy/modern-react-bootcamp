import React from 'react';


function Box(props) {
  return (
    <div>
    <div
      style={{
        height: `${props.height}em`,
        width: `${props.width}em`,
        backgroundColor: props.colour
      }}
    />
    <button onClick={props.removeBox}>X</button>
  </div>
  )
    }

    
export default Box
