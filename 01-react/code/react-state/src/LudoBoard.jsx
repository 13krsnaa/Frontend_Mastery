import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, greeen: 0, red: 0 });

  return (
    <div>
      <h3>Ludo Board Game </h3>

      <div className="board">
        <p>blue moves ={moves.blue} </p>
        <button style={{ backgroundColor: "blue", color: "black" }}>+1</button>

        <p>yellow moves = {moves.yellow} </p>
        <button style={{ backgroundColor: "yellow", color: "black" }}>
          +1
        </button>

        <p>green moves = {moves.green} </p>
        <button style={{ backgroundColor: "green", color: "black" }}>+1</button>

        <p>red moves = {moves.red} </p>
        <button style={{ backgroundColor: "red", color: "black" }}>+1</button>
      </div>
    </div>
  );
}
