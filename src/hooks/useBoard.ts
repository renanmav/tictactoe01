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

  const { winner, isEvaluating } = useWinner(board);

  useEffect(() => {
    let isCurrent = true;

    if (isMyTurn || winner !== '?' || isEvaluating) {
      return;
    }

    setIsMyTurn(true);

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
        setBoard(data.board);
      }
    })();

    return () => {
      isCurrent = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner, board]);

  function updateBoard(index: number, symbol: 'X' | 'O') {
    if (!isMyTurn || winner !== '?') {
      return;
    }
    // @ts-ignore
    const newBoard = board.replaceAt(index, symbol);
    setBoard(newBoard);
    setIsMyTurn(false);
  }

  return { board, updateBoard, winner };
}
