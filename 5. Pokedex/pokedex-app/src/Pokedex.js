import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard'
import data from './data';


class Pokedex extends Component {
    render() {

        

        const parseImgUrl = (id) => {
            let idChars = id.toString().split('')
            if (idChars.length < 3) {
                for (let i = idChars.length; i < 3; i++) {
                    idChars.unshift('0')
                }
            }
            idChars = idChars.join('')
            return  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idChars}.png`
        }

        return(
            <div className="Pokedex">
            {data.map(pokemon => {
                return <Pokecard 
                  name={pokemon.name}
                  imgSrc={parseImgUrl(pokemon.id)}
                  type={pokemon.type}
                  exp={pokemon.base_experience}
                  />
            })}
            </div>
        )
    }
}

export default Pokedex