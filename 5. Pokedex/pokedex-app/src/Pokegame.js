import React, { Component } from 'react'
import Pokedex from './Pokedex'
import data from './data'
import './Pokegame.css'

class Pokegame extends Component {
    render() {

        const players = {
            p1: [] ,
            p2: [],
            calculateWinner: function(p1, p2) {
                let p1Score = 0
                let p2Score = 0
                this.p1.forEach(card => p1Score += card.base_experience)
                this.p2.forEach(card => p2Score += card.base_experience)
                
                return p1Score > p2Score ? true : false
            }
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
        const result = players.calculateWinner(players.p1, players.p2)
        

        return(
            <div>
                <h3>Player 1</h3>
                <Pokedex
                player={players.p1}
                />
                <p className={"Pokegame-result",  (result ? "Pokegame-winner" : "Pokegame-loser")}>
                    {result ? 'WINNER' : 'LOSER'}
                </p>                
                <h3>Player 2</h3>
                <Pokedex
                player={players.p2}
                />
                <p className={"Pokegame-result", (!result ? "Pokegame-winner" : "Pokegame-loser")}>
                    {!result ? 'WINNER' : 'LOSER'}
                </p>  
            </div>
        )
    }
}

export default Pokegame