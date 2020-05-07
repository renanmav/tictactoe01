import React from 'react';

import { useBoard } from '../../hooks/useBoard';
import { Difficulties } from '../../screens/SelectDifficulty';

import TicTacToeBoard from './TicTacToeBoard';

interface TicTacToeProps {
  difficulty: Difficulties;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ difficulty }) => {
  const { board, updateBoard, match } = useBoard(difficulty);

  return <TicTacToeBoard board={board} onPress={(i) => updateBoard(i, 'X')} match={match} />;
};

export default TicTacToe;
