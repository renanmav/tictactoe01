import React from 'react';

import { useBoard } from '../../hooks/useBoard';
import { useReplay } from '../../hooks/useReplay';
import { Difficulties } from '../../screens/SelectDifficulty';
import ErrorBoundary from '../../ErrorBoundary';

import TicTacToeBoard from './TicTacToeBoard';

interface TicTacToeProps {
  difficulty: Difficulties;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ difficulty }) => {
  const { board, updateBoard, match, winner, restart } = useBoard(difficulty);

  useReplay(winner, restart);

  return (
    <ErrorBoundary>
      <TicTacToeBoard board={board} onPress={(i) => updateBoard(i, 'X')} match={match} />
    </ErrorBoundary>
  );
};

export default TicTacToe;
