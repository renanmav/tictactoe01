import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react-native';
import { FetchMock } from 'jest-fetch-mock';

import TicTacToe from '../TicTacToe';

it('should consider the difficulty prop correctly', async () => {
  (fetch as FetchMock).mockResponseOnce(JSON.stringify({ board: 'XO       ' }));

  const { queryAllByTestId } = render(<TicTacToe difficulty="easy" />);

  const firstField = queryAllByTestId('field-touchable')[0];
  fireEvent.press(firstField);

  await wait(() => {
    expect(fetch).toBeCalledTimes(1);
    expect((fetch as FetchMock).mock.calls).toMatchSnapshot();
  });
});
