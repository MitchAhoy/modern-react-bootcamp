import React, {useState} from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm'


function BoxList() {

  const [boxes, setBoxes] = useState([])

  const boxList = boxes.map(box => <Box width={box.width} height={box.height} colour={box.colour}/>)

  const create = newBox => {
    setBoxes(...boxes, newBox)
    console.log(newBox)
  }

  return (
    <div className="BoxList">
      <h1>Colour box maker</h1>
      <NewBoxForm createBox={create}/>
        {boxList}
    </div>
  );
}

export default BoxList;
