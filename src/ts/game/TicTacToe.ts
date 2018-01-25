export type Squares = string[]

export interface State {
  history: Squares[],
  stepNumber: number,
  xIsNext: boolean
}

export function create(): State {
  return {
    history: [[]],
    stepNumber: 0,
    xIsNext: true
  }
}

export function rollBackTo(state, props, step: number): State {
  return {
    history: state.history,
    stepNumber: step,
    xIsNext: (step % 2) === 0
  };
}

export function updateSquare(state, props, i: number): State {
  //console.warn("clicked " + i);
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = state.xIsNext ? 'X' : 'O';
  return {
    history: history.concat([squares]),
    stepNumber: history.length,
    xIsNext: !state.xIsNext
  };
}

export function calculateWinner(squares: Squares): string | undefined {
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
