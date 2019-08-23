import React, { Component } from "react";
import "./Dice.css";

export default class Dice extends Component {
  render() {
    return <i className={`dice fas fa-dice-${this.props.num}  ${this.props.rolling ? "shaking" : ' '} `} />;
  }
}
