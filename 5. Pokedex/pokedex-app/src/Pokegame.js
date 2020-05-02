import React, { Component } from 'react'
import Pokedex from './Pokedex'
import data from './data'

class Pokegame extends Component {
    render() {

        const players = {
            p1: [] ,
            p2: []
        }

        const dealCards = () => {
            let newPos, temp
            for (let i = data.length - 1; i > 0; i--) {
                newPos = Math.floor(Math.random() * (i + 1))
                temp = data[i]
                data[i] = data[newPos]
                data[newPos] = temp
            }

            for (let i = 0; i < 4; i++) {players.p1.push(data[i])}
            for (let i = 4; i < 8; i++) {players.p2.push(data[i])}
        }
        dealCards()
        

        return(
            <div>
                <h3>Player 1</h3>
                <Pokedex
                player={players.p1}
                />
                <h3>Player 2</h3>
                <Pokedex
                player={players.p2}
                />
            </div>
        )
    }
}

export default Pokegame