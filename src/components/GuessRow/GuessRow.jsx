import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";

function GuessRow(props) {
  return (
    <div className="component">
      Guess Row #
      <GuessPegs />
      <GuessScore />
    </div>
  );
}

export default GuessRow;
