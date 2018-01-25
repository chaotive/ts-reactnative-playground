import * as React from "react";
import Board from "./Board";
import * as TicTacToe from "../../../ts/game/TicTacToe";
import styles from "../../styles/ticTacToe";
import {FlatList, Text, View} from 'react-native';
import DynamicButton from "../generic/DynamicButton";

export default class Game extends React.Component<any, TicTacToe.State> {
  constructor(props: any) {
    super(props);
    this.state = TicTacToe.create()
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

  handleClick = (i: number) =>
    this.setState(TicTacToe.updateSquare(this.state, this.props, i));

  jumpTo(step: number) {
    this.setState(TicTacToe.rollBackTo(this.state, this.props, step));
  }
}
