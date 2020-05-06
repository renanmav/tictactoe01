import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';

import Router from '../../Router';

test('examples of some things', async () => {
  const { getByText } = render(<Router />);

  const buttonJogar = getByText('Jogar');
  fireEvent.press(buttonJogar);

  await wait(() => expect(getByText('SelectDifficulty')).toMatchSnapshot());
});
