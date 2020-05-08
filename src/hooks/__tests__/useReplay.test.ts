import { renderHook } from '@testing-library/react-hooks';
import { FetchMock } from 'jest-fetch-mock';

import { useReplay } from '../useReplay';

jest.mock('react-native', () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

import { Alert } from 'react-native';

beforeEach(() => {
  (fetch as FetchMock).resetMocks();
  jest.clearAllMocks();
});

describe('useReplay', () => {
  test('if nothing is shown when there is no winner', () => {
    const restart = jest.fn();

    renderHook(() => useReplay('?', restart));

    expect(restart).not.toBeCalled();
    expect(Alert.alert).not.toBeCalled();
  });

  test('if Alert.alert is called when the winner is "X"', () => {
    const restart = jest.fn();

    renderHook(() => useReplay('X', restart));

    expect(restart).not.toBeCalled();
    expect(Alert.alert).toBeCalledTimes(1);
    expect((Alert.alert as jest.Mock).mock.calls).toMatchSnapshot();
  });

  test('if Alert.alert is called when the winner is "O"', () => {
    const restart = jest.fn();

    renderHook(() => useReplay('O', restart));

    expect(restart).not.toBeCalled();
    expect(Alert.alert).toBeCalledTimes(1);
    expect((Alert.alert as jest.Mock).mock.calls).toMatchSnapshot();
  });

  test('if Alert.alert is called when the winner is "C" (for cat)', () => {
    const restart = jest.fn();

    renderHook(() => useReplay('C', restart));

    expect(restart).not.toBeCalled();
    expect(Alert.alert).toBeCalledTimes(1);
    expect((Alert.alert as jest.Mock).mock.calls).toMatchSnapshot();
  });

  test('if restart is called when Alert.alert is pressed', () => {
    const restart = jest.fn();

    renderHook(() => useReplay('X', restart));

    (Alert.alert as jest.Mock).mock.calls[0][2][0].onPress();

    expect(restart).toBeCalledTimes(1);
  });
});
