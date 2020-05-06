import React, { Component } from 'react'
import './ColourBoxes.css'
import Box from './Box'

class ColourBoxes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxColours: this.props.boxCount.map((box, index) => this.randColour())

        }

        this.randColour = this.randColour.bind(this)
        this.newColour = this.newColour.bind(this)

    }

    static defaultProps = {
        colours: ['#ff3860', '#498afb', '#fa8142', '#09c372', '#9166cc', '#ffdd57', '#ff4088'],
        boxCount: [...new Array((20))]
    }

    randColour() {
        const ranIdx = Math.floor(Math.random() * this.props.colours.length)
        return this.props.colours[ranIdx]
    }
    newColour(oldColour, idx) {
        const idxOldColour = this.props.colours.indexOf(oldColour)
        const colourSelect = [...this.props.colours].splice(idxOldColour, 1)
        const newColour = colourSelect[Math.floor(Math.random() * colourSelect.length)]
        const newSet = [...this.state.boxColours]
        newSet[idx] = newColour
        this.setState(st => { return { boxColours: newSet } })
        console.log('working')
    }



    render() {
        return (
            <div className="ColourBoxes">
                {this.state.boxColours.map((box, index) => <Box colour={box} onClick={() => this.newColour(box, index)} />)}
            </div>
        )
    }
}

export default ColourBoxes