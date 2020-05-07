import React from 'react';
import { Dimensions, Image, TouchableWithoutFeedback, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

const { width, height } = Dimensions.get('window');

const biggestMeasure = width > height ? width : height;

const s = {
  wrapper: [
    t.bgTransparent,
    { width: biggestMeasure / 3 / 3 - 5, height: biggestMeasure / 3 / 3 - 5, padding: 5 },
  ],
  field: [t.bgBlue900, t.rounded, t.flex1, t.itemsCenter, t.justifyCenter, t.overflowHidden],
  symbol: [t.objectContain, { width: biggestMeasure / 16, height: biggestMeasure / 16 }],
  success: [t.bgGreen900],
};

interface TicTacToeFieldProps {
  symbol: 'X' | 'O' | ' ';
  onPress: () => void;
  success?: boolean;
}

const TicTacToeField: React.FC<TicTacToeFieldProps> = ({ symbol, onPress, success = false }) => {
  function renderSymbol() {
    switch (symbol) {
      case 'X':
        return <Image source={require('../../../assets/x.png')} style={s.symbol} testID="X" />;
      case 'O':
        return <Image source={require('../../../assets/o.png')} style={s.symbol} testID="O" />;
      default:
        return null;
    }
  }

  return (
    <View style={s.wrapper}>
      <TouchableWithoutFeedback onPress={onPress} testID="field-touchable">
        <View style={[s.field, success && s.success]} testID="field-background">
          {renderSymbol()}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TicTacToeField;
