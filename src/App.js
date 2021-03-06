import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";

const colors = ["#531B3A", "#7D233C", "#9C640C", "#D9B521"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode()
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode() {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * 4));
  }

  getWinTries() {
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4
      ? lastGuess + 1
      : 0;
  }

  handleColorSelection() {
    alert("color selected!");
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div id="board" className="App">
        <header className="App-header-footer">
          R E A C T &nbsp;&nbsp;&nbsp; M A S T E R M I N D
        </header>
        <div className="flex-h align-flex-end">
          <GameBoard colors={colors} guesses={this.state.guesses} />
          <div className="App-controls">
            <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx} />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className="App-header-footer">
          {winTries ? `You Won in ${winTries} Guesses!` : "Good Luck!"}
        </footer>
      </div>
    );
  }
}

export default App;
