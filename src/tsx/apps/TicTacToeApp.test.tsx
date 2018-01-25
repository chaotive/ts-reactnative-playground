import React from 'react';
import TicTacToeApp from './TicTacToeApp';

import renderer from 'react-test-renderer';

test('TicTacToeApp renders without crashing', () => {
  const rendered = renderer.create(<TicTacToeApp />).toJSON();
  expect(rendered).toBeTruthy();
});
