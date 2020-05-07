import React from 'react';
import { Dimensions, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

import TicTacToeField from './TicTacToeField';

const { width, height } = Dimensions.get('window');

const biggestMeasure = width > height ? width : height;

const s = {
  board: [
    t.bgBlue800,
    t.rounded,
    t.flexRow,
    t.flexWrap,
    t.justifyCenter,
    t.alignCenter,
    { width: biggestMeasure / 3, height: biggestMeasure / 3, padding: 5 },
  ],
};

interface TicTacToeBoardProps {
  board: string;
  onPress(index: number): void;
  match: number[];
}

const TicTacToeBoard: React.FC<TicTacToeBoardProps> = ({ board, onPress, match }) => {
  if (board.length !== 9) {
    throw new Error('Board should have 9 characters');
  }

  return (
    <View style={s.board} testID="tictactoe-board">
      {board.split('').map((symbol, index) => (
        <TicTacToeField
          key={index}
          symbol={symbol as any}
          onPress={() => {
            onPress(index);
          }}
          success={!!match.includes(index)}
        />
      ))}
    </View>
  );
};

export default TicTacToeBoard;
