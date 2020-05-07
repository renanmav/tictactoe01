import React from 'react';
import { Image, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

const s = {
  wrapper: [t.wFull, t.flexRow],
  container: [t.w3_12, t.itemsCenter, t.justifyCenter],
  fill: [t.flexGrow],
  text: [t.textWhite, t.textXl, t.fontBold],
  symbol: [t.objectContain, t.mB5, { height: 50, width: 50 }],
};

const SymbolIndicator: React.FC = () => {
  return (
    <View style={s.wrapper}>
      <View style={s.container}>
        <Image source={require('../../assets/x.png')} style={s.symbol} />
        <Text style={s.text}>Você</Text>
      </View>
      <View style={s.fill} />
      <View style={s.container}>
        <Image source={require('../../assets/o.png')} style={s.symbol} />
        <Text style={s.text}>Bot</Text>
      </View>
    </View>
  );
};

export default SymbolIndicator;
