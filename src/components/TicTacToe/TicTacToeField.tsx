import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

const s = {
  wrapper: [t.bgTransparent, t.w4_12, t.p1, { aspectRatio: 1 }],
  field: [t.bgBlue900, t.rounded, t.flex1, t.itemsCenter, t.justifyCenter, t.overflowHidden],
  symbol: [t.w8_12, t.objectContain],
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
