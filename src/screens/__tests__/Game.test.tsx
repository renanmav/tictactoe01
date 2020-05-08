import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';

import Router from '../../Router';

it('should render correctly', async () => {
  const { getByText, getByTestId } = render(<Router />);

  fireEvent.press(getByText('Jogar'));
  fireEvent.press(getByText('Fácil'));

  await wait(() => {
    expect(getByTestId('game')).toMatchSnapshot();
    expect(getByTestId('game-top-container')).toMatchSnapshot();
    expect(getByTestId('game-content-container')).toMatchSnapshot();
  });
});
