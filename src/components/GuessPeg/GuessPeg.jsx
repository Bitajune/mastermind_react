import React from "react";
import styles from "./GuessPeg.module.css";
// import currentGuess from "../GameBoard/GameBoard";

const GuessPeg = props => (
  <div
    className={styles.peg}
    style={{
      backgroundColor: props.color,
      border: props.color ? `1px solid ${props.color}` : "1px dashed grey",
      cursor: props.currentGuess && "pointer"
    }}
  />
);

export default GuessPeg;
