import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceArr: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.props.handleClick(this.props.idx)
  }


  render() {

    return (
      <i
        className={`Die fas fa-dice-${this.props.diceArr[this.props.val - 1]} fa-5x ${this.props.locked ? "Die-locked" : ''}`}

        onClick={this.handleToggle}
      >
      </i>
    );
  }
}

export default Die;
