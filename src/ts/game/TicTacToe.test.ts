import * as ttt from './TicTacToe'

describe('TicTacToe', () => {

  it('should work for base case', () => {
    expect(ttt.calculateWinner(
      [])).toBe(
      undefined);
  });

  it('should work for fake X winner case', () => {
    expect(ttt.calculateWinner(
      [
        'X','X','X',
        'X','X','X',
        'X','X','X'
      ])).toBe(
      'X');

    expect(ttt.calculateWinner(
      [
        'q','q','q'
      ])).toBe(
      'q');
  });

  it('should work for real no winner case', () => {
    expect(ttt.calculateWinner(
      [
        'X','X','O',
        'O','O','X',
        'X','O','X'
      ])).toBe(
      undefined);
  });

  it('should work for real winner case', () => {
    expect(ttt.calculateWinner(
      [
        'O','X',undefined,
        undefined,'O','X',
        'X',undefined,'O'
      ])).toBe(
      'O');
  });
});

describe('TicTacToe Game', () => {
  it('should change state from initial state when clicking on the board', () => {
    let game = ttt.create();

    expect(game.xIsNext).toEqual(true);
    expect(game.stepNumber).toEqual(0);
    expect(game.history).toEqual([[]]);

    game = ttt.updateSquare(game,{},0);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(1);
    expect(game.history).toEqual([
      [], ["X"]
    ]);
  });

  it('should not change state when clicking on the same board square twice', () => {
    let game = ttt.create();

    game = ttt.updateSquare(game,{},0);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(1);
    expect(game.history).toEqual([
      [], ["X"]
    ]);

    game = ttt.updateSquare(game,{},0);
    expect(game).toBeUndefined();
  });

  it('should allow you to win the game', () => {
    let game = ttt.create();

    expect(game.xIsNext).toEqual(true);
    expect(game.stepNumber).toEqual(0);
    expect(game.history).toEqual([[]]);

    game = ttt.updateSquare(game,{},0);
    game = ttt.updateSquare(game,{},1);
    game = ttt.updateSquare(game,{},4);
    game = ttt.updateSquare(game,{},5);
    game = ttt.updateSquare(game,{},8);
    expect(game.xIsNext).toEqual(false);
    expect(game.stepNumber).toEqual(5);
    expect(game.history).toEqual([
      [],
      ["X"],
      ["X", "O"],
      ["X", "O", undefined, undefined, "X"],
      ["X", "O", undefined, undefined, "X", "O"],
      ["X", "O", undefined, undefined, "X", "O", undefined, undefined, "X"],
    ]);

    game = ttt.updateSquare(game,{},2);
    expect(game).toBeUndefined();
  });
});
