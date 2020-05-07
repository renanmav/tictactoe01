import { renderHook } from '@testing-library/react-hooks';

import { useWinner, checkStalemate, checkVictory } from '../useWinner';

describe('checkStalemate', () => {
  test('if winner is set to "C" when no moves are left', () => {
    const board = 'XXOOOXOXO';
    const setWinner = jest.fn();

    checkStalemate({ board, setWinner });

    expect(setWinner).toBeCalledTimes(1);
    expect(setWinner).toBeCalledWith('C');
  });

  test('if winner is not set to "C" when moves are left', () => {
    const board = 'XXOOO OXO';
    const setWinner = jest.fn();

    checkStalemate({ board, setWinner });

    expect(setWinner).not.toBeCalled();
  });
});

describe('checkVictory', () => {
  test('if "X" is set to winner when a victory happens on a row', () => {
    const board = '   XXX   ';
    const setWinner = jest.fn();

    checkVictory({ board, setWinner, p1: 3, p2: 4, p3: 5 });

    expect(setWinner).toBeCalledTimes(1);
    expect(setWinner).toBeCalledWith('X');
  });

  test('if "O" is set to winner when a victory happens on a diagonal', () => {
    const board = 'OXXXOXXXO';
    const setWinner = jest.fn();

    checkVictory({ board, setWinner, p1: 0, p2: 4, p3: 8 });

    expect(setWinner).toBeCalledTimes(1);
    expect(setWinner).toBeCalledWith('O');
  });
});

describe('useGameState', () => {
  test('if "?" is returned when the game is not finished', () => {
    const board = 'X        ';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current).toBe('?');
  });

  test('if "X" is returned when player X wins with 3-in-a-row horizontally', () => {
    const board = '      XXX';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current).toBe('X');
  });

  test('if "O" is returned when player O wins with 3-in-a-row vertically', () => {
    const board = 'OXXOXOO  ';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current).toBe('O');
  });

  test('if "C" is returned when a "cat" happens', () => {
    const board = 'XOXXXOOOX';

    const { result } = renderHook(() => useWinner(board));

    expect(result.current).toBe('C');
  });
});
