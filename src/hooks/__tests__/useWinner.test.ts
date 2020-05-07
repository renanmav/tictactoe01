import { renderHook } from '@testing-library/react-hooks';

import { useWinner, checkStalemate, checkVictory } from '../useWinner';

describe('checkStalemate', () => {
  test('if winner is set to "C" when no moves are left', () => {
    const board = 'XXOOOXOXO';
    const setWinner = jest.fn();
    const setWinnerMatch = jest.fn();

    checkStalemate({ board, setWinner, setWinnerMatch });

    expect(setWinner).toBeCalledTimes(1);
    expect(setWinner).toBeCalledWith('C');
  });

  test('if winner is not set to "C" when moves are left', () => {
    const board = 'XXOOO OXO';
    const setWinner = jest.fn();
    const setWinnerMatch = jest.fn();

    checkStalemate({ board, setWinner, setWinnerMatch });

    expect(setWinner).not.toBeCalled();
  });
});

describe('checkVictory', () => {
  test('if "X" is set to winner when a victory happens on a row', () => {
    const board = '   XXX   ';
    const setWinner = jest.fn();
    const setWinnerMatch = jest.fn();

    checkVictory({ board, setWinner, setWinnerMatch, p1: 3, p2: 4, p3: 5 });

    expect(setWinner).toBeCalledTimes(1);
    expect(setWinner).toBeCalledWith('X');
    expect(setWinnerMatch).toBeCalledTimes(1);
    expect(setWinnerMatch).toBeCalledWith([3, 4, 5]);
  });

  test('if "O" is set to winner when a victory happens on a diagonal', () => {
    const board = 'OXXXOXXXO';
    const setWinner = jest.fn();
    const setWinnerMatch = jest.fn();

    checkVictory({ board, setWinner, setWinnerMatch, p1: 0, p2: 4, p3: 8 });

    expect(setWinner).toBeCalledTimes(1);
    expect(setWinner).toBeCalledWith('O');
    expect(setWinnerMatch).toBeCalledWith([0, 4, 8]);
  });
});

describe('useWinner', () => {
  test('if "?" is returned when the game is not finished', () => {
    const board = 'X        ';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current.winner).toBe('?');
    expect(result.current.winnerMatch).toMatchSnapshot();
  });

  test('if "X" is returned when player X wins with 3-in-a-row horizontally', () => {
    const board = '      XXX';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current.winner).toBe('X');
    expect(result.current.winnerMatch).toMatchSnapshot();
  });

  test('if "O" is returned when player O wins with 3-in-a-row vertically', () => {
    const board = 'OXXOXOO  ';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current.winner).toBe('O');
    expect(result.current.winnerMatch).toMatchSnapshot();
  });

  test('if "C" is returned when a "cat" happens', () => {
    const board = 'XOXXXOOOX';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current.winner).toBe('C');
    expect(result.current.winnerMatch).toMatchSnapshot();
  });
});
