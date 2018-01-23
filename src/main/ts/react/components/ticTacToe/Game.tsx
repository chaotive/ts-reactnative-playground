import * as React from "react";
import {Board, Squares} from "./Board";
import * as TicTacToe from "../../../game/TicTacToe";
import styles from "../../styles/ticTacToe";
import { Text, View } from 'react-native';

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
    // return (
    //   <View style={styles.container}>
    //     <Text>Typescript just works in a nicer files structure! happy! :)</Text>
    //   </View>
    // );

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = TicTacToe.calculateWinner(current);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={this.jumpTo.bind(this,move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <View className="game">
        <View className="game-board">
          <Board
            squares={current}
            onClick={this.handleClick}
          />
        </View>
        <View className="game-info">
          {/*<div>{status}</div>*/}
          {/*<ol>{moves}</ol>*/}
        </View>
      </View>
    );
  }

  handleClick = (i: number) => {
    alert("clicked " + i);
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

// export default class Game extends React.Component<any, GameState> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             history: [[]],
//             stepNumber: 0,
//             xIsNext: true
//         }
//     }
//
//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = TicTacToe.calculateWinner(current);
//
//         const moves = history.map((step, move) => {
//             const desc = move ?
//                 'Go to move #' + move :
//                 'Go to game start';
//             return (
//                 <li key={move}>
//                     <button onClick={this.jumpTo.bind(this,move)}>{desc}</button>
//                 </li>
//             );
//         });
//
//         let status;
//         if (winner) {
//             status = 'Winner: ' + winner;
//         } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }
//
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board
//                         squares={current}
//                         onClick={this.handleClick}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
//
//     handleClick = (i: number) => {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.slice();
//         if (TicTacToe.calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             history: history.concat([squares]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext
//         });
//     };
//
//     jumpTo(step: number) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: (step % 2) === 0,
//         });
//     }
// }
