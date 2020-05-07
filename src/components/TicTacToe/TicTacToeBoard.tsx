import React from 'react';
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss';

import TicTacToeField from './TicTacToeField';

const s = {
  board: [t.bgBlue800, t.wFull, t.rounded, t.flexRow, t.flexWrap, t.p1, { aspectRatio: 1 }],
};

interface TicTacToeBoardProps {
  board: string;
  onPress(index: number): void;
}

const TicTacToeBoard: React.FC<TicTacToeBoardProps> = ({ board, onPress }) => {
  if (board.length !== 9) {
    throw new Error('Board should have 9 characters');
  }

  return (
    <View style={s.board}>
      {board.split('').map((symbol, index) => (
        <TicTacToeField
          key={index}
          symbol={symbol as any}
          onPress={() => {
            onPress(index);
          }}
        />
      ))}
    </View>
  );
};

export default TicTacToeBoard;
