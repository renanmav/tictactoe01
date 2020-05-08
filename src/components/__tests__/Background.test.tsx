import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import Background from '../Background';

it('should render children', async () => {
  const { getByTestId, baseElement } = render(
    <Background>
      <View testID="content" />
    </Background>
  );

  expect(getByTestId('content')).toBeDefined();
  expect(baseElement).toMatchSnapshot();
});
