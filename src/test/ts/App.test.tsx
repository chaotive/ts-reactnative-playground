import React from 'react';
import App from '../../main/ts/react/apps/TicTacToeApp';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
