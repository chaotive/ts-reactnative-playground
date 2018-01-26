import React from 'react';
import renderer from 'react-test-renderer';

import Square from "./ticTacToe/Square";
import Board from './ticTacToe/Board';
import Game from "./ticTacToe/Game";
import TicTacToe from "../../ts/game/TicTacToe";

describe('TicTacToe components', () => {

  it('renders Square without crashing', () => {
    const rendered = renderer.create(<Square value="" onPress={jest.fn} />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders Board without crashing', () => {
    const rendered = renderer.create(<Board squares={[]} onPress={jest.fn()} />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders Game without crashing', () => {
    const tttState = new TicTacToe();
    const rendered = renderer.create(<Game data={tttState} />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
