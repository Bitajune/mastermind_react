import React from "react";
import GuessRow from "../GuessRow/GuessRow";

function GameBoard(props) {
  return (
    <div className="component">
      Game Board
      <GuessRow />
      <GuessRow />
    </div>
  );
}

export default GameBoard;
