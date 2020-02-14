import React from "react";
import GuessPeg from "../GuessPeg/GuessPeg";

function GuessPegs(props) {
  return (
    <div className="component">
      Guess Pegs
      <GuessPeg />
      <GuessPeg />
      <GuessPeg />
      <GuessPeg />
    </div>
  );
}

export default GuessPegs;
