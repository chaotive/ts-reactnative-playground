import React from 'react';
import DynamicButton from './generic/DynamicButton';

import renderer from 'react-test-renderer';

describe('Generic components', () => {

  it('renders DynamicButton without crashing', () => {
    const rendered = renderer.create(<DynamicButton value="" onPress={jest.fn} />).toJSON();
    expect(rendered).toBeTruthy();
  });

});