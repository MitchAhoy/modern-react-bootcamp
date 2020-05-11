import React, { useState } from 'react'
import Box from './Box'
import './GameBoard.css'
import { v4 as uuidv4 } from 'uuid'

function GameBoard() {

    const randLit = () => (Math.floor(Math.random() * 2)) === 1
    const [gameBoard, setGameBoard] = useState([...new Array(25)].map(box => randLit()))

    const handleIsLit = (evt) => {
        console.log('working')
    }





    return (
        <div className="GameBoard">
            {gameBoard.map((box, idx) => <Box isLit={box} key={uuidv4()} onClick={handleIsLit} />)}
        </div>
    )

}

export default GameBoard