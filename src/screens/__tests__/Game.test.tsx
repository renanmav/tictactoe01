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

it('should go back and left arrow is pressed', async () => {
  const { getByText, getByTestId } = render(<Router />);

  fireEvent.press(getByText('Jogar'));
  fireEvent.press(getByText('Fácil'));

  fireEvent.press(getByTestId('game-go-back'));

  await wait(() => {
    expect(fetch).not.toBeCalled();
    expect(getByText('Fácil')).toBeDefined();
  });
});
