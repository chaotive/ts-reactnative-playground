import {observable} from "mobx";

export type Squares = string[]

export default class TicTacToe {
  @observable history: Squares[];
  @observable stepNumber: number;
  @observable xIsNext: boolean;

  constructor() {
    this.history = [[]];
    this.stepNumber = 0;
    this.xIsNext = true;
  }

  rollBackTo(step: number) {
    this.stepNumber = step;
    this.xIsNext = (step % 2) === 0;
  }

  updateSquare(i: number) {
    console.warn("clicked " + i);
    const history = this.history.slice(0, this.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.slice();
    if (TicTacToe.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.xIsNext ? 'X' : 'O';

    this.history = history.concat([squares]);
    this.stepNumber = history.length;
    this.xIsNext = !this.xIsNext;
  }

  static calculateWinner(squares: Squares): string | undefined {
    const solutionLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < solutionLines.length; i++) {
      const [a, b, c] = solutionLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return;
  }

}
