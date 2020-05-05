import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Button from '../Button';

it('should render text prop', async () => {
  const text = 'Some text';

  const { getByTestId } = render(<Button text={text} onPress={jest.fn} />);

  expect(getByTestId('button-text')).toHaveTextContent(text);
});

it('should call onPress when pressed', async () => {
  const text = 'Some text';
  const onPressFn = jest.fn();

  const { getByText } = render(<Button text={text} onPress={onPressFn} />);

  fireEvent.press(getByText(text));

  expect(onPressFn).toBeCalledTimes(1);
});
