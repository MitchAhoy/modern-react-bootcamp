import React, { useState } from 'react'
import Box from './Box'
import './GameBoard.css'
import { v4 as uuidv4 } from 'uuid'

function GameBoard() {

    const randLit = () => (Math.floor(Math.random() * 2)) === 1 

    const gameSize = [...Array(25)]
    const gameState = gameSize.map(box => randLit())
    console.log(gameState)
    

    // state
    // [true, true, true, true, true]
    // [true, true, true, true, true]
    // [true, true, true, true, true]
    // [true, true, true, true, true]
    // [true, true, true, true, true]

    const [box, setBox] = useState(false)

    // <Box isLit={true}/>



    return(
        <div className="GameBoard">
            {gameState.map(box => <Box isLit={box} key={uuidv4()}/>)}
        </div>
    )
}

export default GameBoard