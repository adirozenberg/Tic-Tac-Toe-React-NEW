import React, { useState } from "react";
import Board from "./Board";
import "./MainGame.css";

const MainGame = () => {
  const [turn, setTurn] = useState("X");
  const [isWinner, setWinner] = useState("");

  const changeTurn = (player) => {
    setTurn(player);
  };

  const displayWinner = (message) => {
    setWinner(message);
  };
  return (
    <div>
      <h1 className="title">TIC TAC TOE</h1>
      <h1 className="title">{isWinner}</h1>
      <div>
        <Board currTurn={turn} swapTurn={changeTurn} winner={displayWinner} />
      </div>
      <h1 className="title">It's {turn} turn!</h1>
    </div>
  );
};

export default MainGame;
