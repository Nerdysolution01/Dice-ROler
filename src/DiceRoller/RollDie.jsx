import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dice from "./Dice";

export default class RollDie extends Component {
  state = {
    die1: "one",
    die2: "one",
    rolling:false,

  };
  roll = () => {
    const sides = ["one", "two", "three", "four", "five", "six"];
    const newdie1 = sides[Math.floor(Math.random() * sides.length)];
    const newdie2 = sides[Math.floor(Math.random() * sides.length)];

    this.setState({
      die1: newdie1,
      die2: newdie2,
      rolling:true
 
    });
setTimeout( () => {
this.setState({
    rolling:false
})
},2000)
  };

  render() {
    return (
      <div>
        <Dice num={this.state.die1}  rolling={this.state.rolling}/>
        <Dice num={this.state.die2} rolling={this.state.rolling}/>
    
        <button
          type="button"
          class="btn btn-primary"
          disabled={this.state.rolling}
          onClick={this.roll}
          style={{ position: "absolute", top: "300px", left: "580px" }}
        >
       {this.state.rolling ? "Rolling" : "Roll dice"}
        </button>
      </div>
    );
  }
}
