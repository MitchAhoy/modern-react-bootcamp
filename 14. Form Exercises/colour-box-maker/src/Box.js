import React from 'react';


function Box(props) {
  return (
    <div>
    <div
      style={{
        height: `${props.height}rem`,
        width: `${props.width}rem`,
        backgroundColor: props.colour
      }}
    />
    <button onClick={props.removeBox}>X</button>
  </div>
  )
    }

    
export default Box
