import React from "react";
import "./style.css";

export class Counter extends React.Component {
  constructor(){
    super();
    this.state = { contador: 10}
  }
  render(){
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <div>
          <button
          onClick={() => {
            this.setState({contador: this.state.contador - 1})
          }}>Diminuir</button>

          <button 
          onClick={() => {
            this.setState({contador: this.state.contador + 1})
          }}>Aumentar</button>
        </div>
      </div>
    );
  }
}