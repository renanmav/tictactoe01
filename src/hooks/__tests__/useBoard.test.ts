import { wait } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-hooks';
import { FetchMock } from 'jest-fetch-mock';

import { useBoard } from '../useBoard';

beforeEach(() => {
  (fetch as FetchMock).resetMocks();
});

describe('useBoard', () => {
  test('if board, updateBoard and winner are returned', () => {
    const { result } = renderHook(() => useBoard('easy'));

    expect(result.current.board).toBe('         ');
    expect(result.current.updateBoard).toBeDefined();
    expect(result.current.winner).toBe('?');
    expect(fetch).not.toBeCalled();
  });

  test('if board is updated and it is my turn, a new board is returned', async () => {
    (fetch as FetchMock).mockResponseOnce(JSON.stringify({ board: 'XO       ' }));

    const { result } = renderHook(() => useBoard('easy'));

    expect(result.current.updateBoard).toBeDefined();

    act(() => result.current.updateBoard(0, 'X'));

    await wait(() => {
      expect(result.current.board).toBe('XO       ');
      expect(result.current.winner).toBe('?');
      expect(fetch).toBeCalledTimes(1);
      expect((fetch as FetchMock).mock.calls).toMatchSnapshot();
    });
  });

  test('if there is a winner, it should not fetch API', async () => {
    const botMoves = ['XO       ', 'XOO X    '];

    (fetch as FetchMock)
      .mockResponseOnce(JSON.stringify({ board: botMoves[0] }))
      .mockResponseOnce(JSON.stringify({ board: botMoves[1] }));

    const { result } = renderHook(() => useBoard('easy'));

    expect(result.current.updateBoard).toBeDefined();

    act(() => result.current.updateBoard(0, 'X'));
    await wait(() => expect(result.current.board).toBe(botMoves[0]));

    act(() => result.current.updateBoard(4, 'X'));
    await wait(() => expect(result.current.board).toBe(botMoves[1]));

    act(() => result.current.updateBoard(8, 'X')); // X wins

    await wait(() => {
      expect(result.current.winner).toBe('X');
      expect(result.current.board).toBe('XOO X   X');
      expect(fetch).toBeCalledTimes(3);
      expect((fetch as FetchMock).mock.calls).toMatchSnapshot();
    });
  });
});
