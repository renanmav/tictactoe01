import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 *  Winner is:
 *    '?' if game is not finished
 *    'X' if game has been won by X
 *    'O' if game has been won by O
 *    'C' if game has been won by 'cat' (no moves left, but no winner)
 */
export type Winner = '?' | 'X' | 'O' | 'C';

/**
 * checkStalemate
 *  Checks if all cells in 'board' are occupied, and if they are,
 *  sets winner to 'C' (for 'cat')
 */
interface CheckStalemateArgs {
  board: string;
  setWinner: Dispatch<SetStateAction<Winner>>;
  setWinnerMatch: Dispatch<SetStateAction<number[]>>;
}
export function checkStalemate(args: CheckStalemateArgs) {
  const { board, setWinner, setWinnerMatch } = args;

  for (let i = 0; i < 9; i++) {
    if (board.charAt(i) === ' ') {
      return;
    }
  }

  setWinner('C');
  setWinnerMatch([]);
}

/**
 * checkVictory
 *  Checks if the indicated cells ('p1', 'p2' and 'p3') contain a
 *  three-in-a-row win for either player. If they do, winner will be
 *  set to 'X' or 'O'. It merely checks whether all three cells are
 *  occupied by 'X' or all three by 'O'.
 */
interface CheckVictoryArgs {
  board: string;
  setWinner: Dispatch<SetStateAction<Winner>>;
  setWinnerMatch: Dispatch<SetStateAction<number[]>>;
  p1: number;
  p2: number;
  p3: number;
}
export function checkVictory(args: CheckVictoryArgs) {
  const { board, setWinner, setWinnerMatch, p1, p2, p3 } = args;

  const c1 = board.charAt(p1);
  if (c1 === ' ') {
    return false;
  }

  const c2 = board.charAt(p2);
  if (c1 !== c2) {
    return false;
  }

  const c3 = board.charAt(p3);
  if (c1 !== c3) {
    return false;
  }

  setWinner(c1 as Winner);
  setWinnerMatch([p1, p2, p3]);
}

/**
 * useWinner
 *  Checks the board to see if the game is finished. If the game
 *  is done, winner is set to 'X', 'O' or 'C' according to whether
 *  the game was won by player X, player O or 'cat'. If the game
 *  is not finished, winner is set to '?'
 */
export function useWinner(board: string) {
  const [winner, setWinner] = useState<Winner>('?');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [winnerMatch, setWinnerMatch] = useState<number[]>([]);

  useEffect(() => {
    if (board === '         ') {
      return;
    }

    setIsEvaluating(true);

    checkVictory({ board, setWinner, setWinnerMatch, p1: 0, p2: 1, p3: 2 }) || // check for 3-in-a-row horizontally
    checkVictory({ board, setWinner, setWinnerMatch, p1: 3, p2: 4, p3: 5 }) ||
    checkVictory({ board, setWinner, setWinnerMatch, p1: 6, p2: 7, p3: 8 }) ||
    checkVictory({ board, setWinner, setWinnerMatch, p1: 0, p2: 3, p3: 6 }) || // check for 3-in-a-row vertically
    checkVictory({ board, setWinner, setWinnerMatch, p1: 1, p2: 4, p3: 7 }) ||
    checkVictory({ board, setWinner, setWinnerMatch, p1: 2, p2: 5, p3: 8 }) ||
    checkVictory({ board, setWinner, setWinnerMatch, p1: 0, p2: 4, p3: 8 }) || // check for 3-in-a-row diagonally
      checkVictory({ board, setWinner, setWinnerMatch, p1: 6, p2: 4, p3: 2 }) ||
      checkStalemate({ board, setWinner, setWinnerMatch });

    setIsEvaluating(false);

    return () => {};
  }, [board]);

  function reset() {
    setWinnerMatch([]);
    setWinner('?');
  }

  return { winner, isEvaluating, winnerMatch, reset };
}
