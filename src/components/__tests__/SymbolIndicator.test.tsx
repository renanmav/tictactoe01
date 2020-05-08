import React from 'react';
import { render } from '@testing-library/react-native';

import SymbolIndicator from '../SymbolIndicator';

it('should render correctly', async () => {
  const { baseElement } = render(<SymbolIndicator />);

  expect(baseElement).toMatchSnapshot();
});
