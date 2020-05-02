import React, { Component } from 'react'
import './Pokecard.css'

class Pokecard extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="Pokecard">
                <h3 className="Pokecard-name">{this.props.name}</h3>
                <img className="Pokecard-img" src={this.props.imgSrc} alt="pokemon-image"/>
                <p className="Pokecard-type">Type: {this.props.type}</p>
                <p className="Pokecard-exp">EXP: {this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard