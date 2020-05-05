import React, { Component } from 'react'
import './ColourBoxes.css'
import Box from './Box'

class ColourBoxes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxColours: this.props.boxCount.map(box => [this.randColour()])
        
        }
        
        this.randColour = this.randColour.bind(this)
        // this.newColour = this.newColour.bind(this)

    }

    static defaultProps = {
        colours: ['#ff3860', '#498afb', '#fa8142', '#09c372', '#9166cc', '#ffdd57', '#ff4088'],
        boxCount: [...new Array((20))]
    }

    randColour() {
        const ranIdx = Math.floor(Math.random() * this.props.colours.length)
        return this.props.colours[ranIdx]
    }
    newColour(oldColour) {
        const idx = this.state.boxColours.indexOf(oldColour)
        const currColours = [...this.state.boxColours]
        
        this.setState(st => {return {boxColours: currColours[idx] = this.randColour()}})


    }

    handleClick () {
        console.log('working')
    }

    render() {
        return(
            <div className="ColourBoxes">
                {this.state.boxColours.map( (box) => <Box colour={box} onClick={this.handleClick}/>)}
            </div>
        )
    }
}

export default ColourBoxes