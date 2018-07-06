import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/ValidationComponent';
import Char from './Character/CharComponent';
class App extends Component {

  state = {
    inputLength:0,
    inputString:"",
  };
  textChangeHandler = (event) => {
    console.log('text change!');
    const input = event.target.value;
    let len = input.length;
    this.setState( {
      inputLength: len,
      inputString: input
    });
  }
  charClickHandler = (event, index) => {
    let charArray = [...this.state.inputString.split('')];
    charArray.splice(index,1);
    this.setState( {
      inputString:charArray.join("")
    });
  }
  render() {

    let myCharArray = this.state.inputString.split("");
    let chars = (
      myCharArray.map( (char, index) => {
        return <Char char={char} click={event => {this.charClickHandler(event, index)}}/>
      })
    )
    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler} value={this.state.inputString}/>
        <p>{this.state.inputLength}</p>
        <Validation 
          inputLength={this.state.inputLength} />
          {chars}
      </div>
    );
  }
}

export default App;
