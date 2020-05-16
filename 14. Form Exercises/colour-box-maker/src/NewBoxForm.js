import React, { useState } from 'react';


function NewBoxForm(props) {

  const [newBox, setNewBox] = useState({})


  const handleChange = evt => {
    setNewBox(({...newBox, [evt.target.name]: evt.target.value}))
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(newBox)
    props.createBox(newBox)
    setNewBox({})
  }




  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="height">Height</label>
        <input 
        type="text" 
        name="height" 
        value={newBox.height}
        onChange={handleChange}
        id="height"
        ></input>
      </div>

      <div>
        <label htmlFor="width">Width</label>
        <input 
        type="text" 
        name="width" 
        value={newBox.width}
        onChange={handleChange}
        id="width"
        ></input>
      </div>
      <div>
        <label htmlFor="colour">Colour</label>
        <input 
        type="text" 
        name="colour" 
        value={newBox.colour}
        onChange={handleChange}
        id="colour"
        ></input>
      </div>
      <button>New Box!</button>
    </form>
  );
}

export default NewBoxForm