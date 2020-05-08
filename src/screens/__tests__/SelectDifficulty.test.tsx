import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';
import { FetchMock } from 'jest-fetch-mock';

import Router from '../../Router';

beforeEach(jest.clearAllMocks);

it('should correctly use the easy difficulty to fetch API', async () => {
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

it('should correctly use the medium difficulty to fetch API', async () => {
  (fetch as FetchMock).mockResponseOnce(JSON.stringify({ board: 'XO       ' }));

  const { getByText, queryAllByTestId } = render(<Router />);

  fireEvent.press(getByText('Jogar'));
  fireEvent.press(getByText('Médio'));

  const firstField = queryAllByTestId('field-touchable')[0];
  fireEvent.press(firstField);

  await wait(() => {
    expect(fetch).toBeCalledTimes(1);
    expect((fetch as FetchMock).mock.calls).toMatchSnapshot();
  });
});

it('should correctly use the hard difficulty to fetch API', async () => {
  (fetch as FetchMock).mockResponseOnce(JSON.stringify({ board: 'XO       ' }));

  const { getByText, queryAllByTestId } = render(<Router />);

  fireEvent.press(getByText('Jogar'));
  fireEvent.press(getByText('Difícil'));

  const firstField = queryAllByTestId('field-touchable')[0];
  fireEvent.press(firstField);

  await wait(() => {
    expect(fetch).toBeCalledTimes(1);
    expect((fetch as FetchMock).mock.calls).toMatchSnapshot();
  });
});

it('should correctly use the expert difficulty to fetch API', async () => {
  (fetch as FetchMock).mockResponseOnce(JSON.stringify({ board: 'XO       ' }));

  const { getByText, queryAllByTestId } = render(<Router />);

  fireEvent.press(getByText('Jogar'));
  fireEvent.press(getByText('Ninja'));

  const firstField = queryAllByTestId('field-touchable')[0];
  fireEvent.press(firstField);

  await wait(() => {
    expect(fetch).toBeCalledTimes(1);
    expect((fetch as FetchMock).mock.calls).toMatchSnapshot();
  });
});

it('should go back and left arrow is pressed', async () => {
  const { getByText, getByTestId } = render(<Router />);

  fireEvent.press(getByText('Jogar'));

  fireEvent.press(getByTestId('select-difficulty-go-back'));

  await wait(() => {
    expect(fetch).not.toBeCalled();
    expect(getByText('Jogar')).toBeDefined();
  });
});
