import React, { useState } from 'react'
import Box from './Box'
import './GameBoard.css'
import { v4 as uuidv4 } from 'uuid'

function GameBoard() {

    const randLit = () => (Math.floor(Math.random() * 2)) === 1
    const [gameBoard, setGameBoard] = useState([...new Array(25)].map(box => randLit()))
    const [isWinner, setIsWinner] = useState(false)

    const handleIsLit = (idx, box) => {
        const newBoard = [...gameBoard]
        newBoard[idx] = !box

        const handleRightEdges = idx - 1 !== 4 && idx - 1 !== 9 && idx - 1 !== 14 && idx - 1 !== 19
        const handleLeftEdges = idx + 1 !== 5 && idx + 1 !== 10 && idx + 1 !== 15 && idx + 1 !== 20

        if (newBoard[idx - 1] !== undefined && handleRightEdges) newBoard[idx - 1] = !newBoard[idx - 1]
        if (newBoard[idx + 1] !== undefined && handleLeftEdges) newBoard[idx + 1] = !newBoard[idx + 1]
        if (newBoard[idx - 5] !== undefined) newBoard[idx - 5] = !newBoard[idx - 5]
        if (newBoard[idx + 5] !== undefined) newBoard[idx + 5] = !newBoard[idx + 5]

        setGameBoard(newBoard)

        newBoard.every(box => box) && setIsWinner(true)

        console.log(isWinner)
    }

    return (
        <div className="GameBoard">
            {gameBoard.map((box, idx) => <Box isLit={box} key={uuidv4()} onClick={() => handleIsLit(idx, box)} idx={idx} />)}
        </div>
    )

}

export default GameBoard