import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';
import { FetchMock } from 'jest-fetch-mock';

import Router from '../../Router';

it('should correctly use the select difficulty to fetch API', async () => {
  (fetch as FetchMock).mockResponseOnce(JSON.stringify({ board: 'XO       ' }));

  const { getByText, queryAllByTestId } = render(<Router />);

  fireEvent.press(getByText('Jogar'));
  fireEvent.press(getByText('Fácil'));

  const firstField = queryAllByTestId('field-touchable')[0];
  fireEvent.press(firstField);

  await wait(() => {
    expect(fetch).toBeCalledTimes(1);
    expect((fetch as FetchMock).mock.calls).toMatchSnapshot();
  });
});
