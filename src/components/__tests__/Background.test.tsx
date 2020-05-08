import React from 'react';
import { render } from '@testing-library/react-native';

import Background from '../Background';
import { View } from 'react-native';

it('should render children', async () => {
  const { getByTestId, baseElement } = render(
    <Background>
      <View testID="content" />
    </Background>
  );

  expect(getByTestId('content')).toBeDefined();
  expect(baseElement).toMatchSnapshot();
});
