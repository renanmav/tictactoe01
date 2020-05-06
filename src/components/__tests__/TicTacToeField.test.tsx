import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { t } from 'react-native-tailwindcss';

import TicTacToeField from '../TicTacToe/TicTacToeField';

it('should render the correct symbol', async () => {
  const X = render(<TicTacToeField symbol="X" onPress={jest.fn} />);
  const O = render(<TicTacToeField symbol="O" onPress={jest.fn} />);
  const Empty = render(<TicTacToeField symbol=" " onPress={jest.fn} />);

  expect(X.getByTestId('X')).toMatchSnapshot();
  expect(O.getByTestId('O')).toMatchSnapshot();
  expect(Empty.getByTestId('field-background')).toMatchSnapshot();
});

it('should render with different background if success prop is passed', async () => {
  const { getByTestId } = render(<TicTacToeField symbol="X" onPress={jest.fn} success />);

  expect(getByTestId('field-background')).toHaveStyle(t.bgGreen900);
});

it('should call onPress when pressed', async () => {
  const onPress = jest.fn();

  const { getByTestId } = render(<TicTacToeField symbol="X" onPress={onPress} success />);
  fireEvent.press(getByTestId('field-touchable'));

  expect(onPress).toBeCalledTimes(1);
});
