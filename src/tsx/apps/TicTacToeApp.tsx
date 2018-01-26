import React from 'react';
import Game from "../components/ticTacToe/Game";
import TicTacToe from "../../ts/game/TicTacToe";

const tttState = new TicTacToe();

export default class TicTacToeApp extends React.Component {
  render() {
    return (
      <Game data={tttState} />
    );
  }
}
