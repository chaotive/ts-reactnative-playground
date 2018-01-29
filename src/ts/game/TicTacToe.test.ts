import TicTacToe from './TicTacToe'

describe('TicTacToe', () => {

  it('should work for base case', () => {
    expect(TicTacToe.calculateWinner(
      [])).toBe(
      undefined);
  });

  it('should work for fake X winner case', () => {
    expect(TicTacToe.calculateWinner(
      [
        'X','X','X',
        'X','X','X',
        'X','X','X'
      ])).toBe(
      'X');

    expect(TicTacToe.calculateWinner(
      [
        'q','q','q'
      ])).toBe(
      'q');
  });

  it('should work for real no winner case', () => {
    expect(TicTacToe.calculateWinner(
      [
        'X','X','O',
        'O','O','X',
        'X','O','X'
      ])).toBe(
      undefined);
  });

  it('should work for real winner case', () => {
    expect(TicTacToe.calculateWinner(
      [
        'O','X',undefined,
        undefined,'O','X',
        'X',undefined,'O'
      ])).toBe(
      'O');
  });
});

function sliceAll(nestedArray) {
  return nestedArray.map((ca) => ca.slice()).slice()
}

describe('TicTacToe Game', () => {
  it('should change state from initial state when clicking on the board', () => {
    let game = new TicTacToe();

    expect(game.xIsNext).toEqual(true);
    expect(game.stepNumber).toEqual(0);
    expect(sliceAll(game.history)).toEqual([
      [undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined]
    ]);

    game.updateSquare(0);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(1);
    expect(sliceAll(game.history)).toEqual([
      [undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined]
    ]);
  });

  it('should not change state when clicking on the same board square twice', () => {
    let game = new TicTacToe();

    game.updateSquare(0);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(1);
    expect(sliceAll(game.history)).toEqual([
      [undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined]
    ]);

    game.updateSquare(0);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(1);
    expect(sliceAll(game.history)).toEqual([
      [undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined]
    ]);
  });

  it('should allow you to win the game', () => {
    let game = new TicTacToe();

    expect(game.xIsNext).toEqual(true);
    expect(game.stepNumber).toEqual(0);
    expect(sliceAll(game.history)).toEqual([
      [undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined]
    ]);

    game.updateSquare(0);
    game.updateSquare(1);
    game.updateSquare(4);
    game.updateSquare(5);
    game.updateSquare(8);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(5);
    expect(sliceAll(game.history)).toEqual([
      [undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", "O", undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", "O", undefined, undefined, "X", undefined,undefined, undefined, undefined],
      ["X", "O", undefined, undefined, "X", "O", undefined, undefined,undefined],
      ["X", "O", undefined, undefined, "X", "O", undefined, undefined, "X"],
    ]);

    game.updateSquare(2);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(5);
    expect(sliceAll(game.history)).toEqual([
      [undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", "O", undefined,undefined, undefined, undefined,undefined, undefined, undefined],
      ["X", "O", undefined, undefined, "X", undefined,undefined, undefined, undefined],
      ["X", "O", undefined, undefined, "X", "O", undefined, undefined,undefined],
      ["X", "O", undefined, undefined, "X", "O", undefined, undefined, "X"],
    ]);
  });
});
