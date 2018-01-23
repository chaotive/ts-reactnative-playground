import * as React from "react";
import {Board, Squares} from "./Board";
import * as TicTacToe from "../../../game/TicTacToe";
import styles from "../../styles/ticTacToe";
import {FlatList, Text, View} from 'react-native';
import {DynamicButton} from "../generic/DynamicButton";

interface GameState {
  history: Squares[],
  stepNumber: number,
  xIsNext: boolean
}

export default class Game extends React.Component<any, GameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [[]],
      stepNumber: 0,
      xIsNext: true
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = TicTacToe.calculateWinner(current);

    const historyData = history.map( (step, move) => {
      return {step: step, key: move}
    });
    const moveCmp = ({item}) => {
      const desc = item.key ?
        'Go to move #' + item.key :
        'Go to game start';
      return (
        <DynamicButton onPress={this.jumpTo.bind(this,item.key)} value={desc}/>
      );
    };

    const moves = (
      <FlatList
        data={historyData}
        renderItem={moveCmp}
      />
    );

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <View style={styles.game}>
        <View style={styles.gameTitle}><Text style={styles.gameTitleText}>Tic Tac Toe - Gato</Text></View>
        <View style={styles.gameBoard}>
          <Board
            squares={current}
            onPress={this.handleClick}
          />
        </View>
        <View style={styles.gameInfo}>
          <View style={styles.gameInfoStatus}><Text>{status}</Text></View>
          <View>{moves}</View>
        </View>
      </View>
    );
  }

  handleClick = (i: number) => {
    //console.warn("clicked " + i);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.slice();
    if (TicTacToe.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([squares]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
}
