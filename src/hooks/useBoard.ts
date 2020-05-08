import { useEffect, useState } from 'react';

import { Difficulties } from '../screens/SelectDifficulty';

import { useWinner } from './useWinner';

// @ts-ignore
String.prototype.replaceAt = function (index: number, replacement: string) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

export function useBoard(difficulty: Difficulties) {
  const [board, setBoard] = useState('         ');
  const [isMyTurn, setIsMyTurn] = useState(true);

  const { winner, isEvaluating, winnerMatch, reset } = useWinner(board);

  useEffect(() => {
    let isCurrent = true;

    if (isMyTurn || winner !== '?' || isEvaluating) {
      return;
    }

    (async () => {
      const body = {
        board,
        level: difficulty,
      };
      const resp = await fetch('https://tictactoe.api.01card.com.br', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          authorization: 'Bearer ck9tzriy6000201l19kdy5d4i',
        },
      });
      const data = await resp.json();
      if (isCurrent) {
        setIsMyTurn(true);
        setBoard(data.board);
      }
    })();

    return () => {
      isCurrent = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner, board]);

  function updateBoard(index: number, symbol: 'X' | 'O') {
    if (!isMyTurn || winner !== '?' || board.charAt(index) !== ' ') {
      return;
    }
    // @ts-ignore
    const newBoard = board.replaceAt(index, symbol);
    setBoard(newBoard);
    setIsMyTurn(false);
  }

  function restart() {
    setIsMyTurn(true);
    setBoard('         ');
    reset();
  }

  return { board, updateBoard, winner, match: winnerMatch, restart };
}
