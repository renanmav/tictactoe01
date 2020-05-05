import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';

import Example from '../Example';

test('examples of some things', async () => {
  const { getByTestId, getByText, queryByTestId, baseElement } = render(<Example />);
  const famousWomanInHistory = 'Ada Lovelace';

  const input = getByTestId('input');
  fireEvent.changeText(input, famousWomanInHistory);

  const button = getByText('Print Username');
  fireEvent.press(button);

  await wait(() => expect(queryByTestId('printed-username')).toBeTruthy());

  expect(getByTestId('printed-username').props.children).toBe(famousWomanInHistory);
  expect(baseElement).toMatchSnapshot();
});
