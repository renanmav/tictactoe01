import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import TicTacToeBoard from '../TicTacToe/TicTacToeBoard';

it('should render the board correctly', async () => {
  const { queryAllByTestId } = render(<TicTacToeBoard board="X O     X" onPress={jest.fn} />);

  expect(queryAllByTestId('X')).toMatchSnapshot();
  expect(queryAllByTestId('X').length).toBe(2);
  expect(queryAllByTestId('O')).toMatchSnapshot();
  expect(queryAllByTestId('O').length).toBe(1);
});

it('should call on press with index when pressed', async () => {
  const onPress = jest.fn();
  const index = 3;

  const { queryAllByTestId } = render(<TicTacToeBoard board="X O     X" onPress={onPress} />);

  fireEvent.press(queryAllByTestId('field-touchable')[index]);

  expect(onPress).toBeCalledTimes(1);
  expect(onPress).toBeCalledWith(index);
});
