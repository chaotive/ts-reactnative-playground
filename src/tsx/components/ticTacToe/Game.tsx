import * as React from "react";
import Board from "./Board";
import TicTacToe from "../../../ts/game/TicTacToe";
import styles from "../../styles/ticTacToe";
import {FlatList, Text, View} from 'react-native';
import DynamicButton from "../generic/DynamicButton";
import {observer} from "mobx-react/custom";

interface GameProps {
  data: TicTacToe
}

@observer
export default class Game extends React.Component<GameProps> {
  render() {
    const data = this.props.data;

    const history = data.history;
    const current = history[data.stepNumber];
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
      status = 'Next player: ' + (data.xIsNext ? 'X' : 'O');
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

  handleClick = (i: number) => this.props.data.updateSquare(i);

  jumpTo(step: number) {
    this.props.data.rollBackTo(step);
  }
}
