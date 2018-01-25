import * as React from "react";
import {View} from 'react-native';
import Square from "./Square";
import styles from "../../styles/ticTacToe";
import {Squares} from "../../../ts/game/TicTacToe";

interface BoardProps {
  squares: Squares,
  onPress: (i: number) => any
}

export default class Board extends React.Component<BoardProps> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onPress={this.props.onPress.bind(this,i)}
      />
    );
  }

  render() {
    return (
      <View style={styles.board}>
        <View style={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>

    );
  }
}
