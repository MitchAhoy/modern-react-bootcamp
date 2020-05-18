import React, {useState} from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import uuid from 'uuid'


function BoxList() {

  const [boxes, setBoxes] = useState([])

  const boxList = boxes.map(box => <Box key={box.id} id={box.id} width={box.width} height={box.height} colour={box.colour} removeBox={() => removeBox(box.id)}/>)

  console.log([...boxes])

  const create = newBox => {
    setBoxes([...boxes].concat(newBox))
  }

  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  return (
    <div className="BoxList">
      <h1>Colour box maker</h1>
      <NewBoxForm createBox={create} />
        {boxList}
    </div>
  );
}

export default BoxList;
