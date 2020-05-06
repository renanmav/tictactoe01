import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';

import Router from '../../Router';

it('should redirect to SelectDifficulty when "Jogar" is clicked', async () => {
  const { getByText, getByTestId } = render(<Router />);

  const buttonJogar = getByText('Jogar');
  fireEvent.press(buttonJogar);

  await wait(() => expect(getByTestId('easy-dif')).toHaveTextContent('Fácil'));
  await wait(() => expect(getByTestId('medium-dif')).toHaveTextContent('Médio'));
  await wait(() => expect(getByTestId('hard-dif')).toHaveTextContent('Difícil'));
  await wait(() => expect(getByTestId('expert-dif')).toHaveTextContent('Ninja'));
});
