import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

const s = {
  background: [t.hFull, t.itemsCenter, t.bgGray500, t.p12, t.pT40],
  card: [t.bgWhite, t.wFull, t.p6, t.rounded, t.itemsCenter],
  title: [t.textGray800, t.textXl, t.fontMedium, t.mT0],
  description: [t.textGray600, t.textCenter, t.mT2, t.w56],
  button: [t.bgIndigo600, t.wFull, t.pY2, t.itemsCenter, t.roundedSm, t.mT6],
  buttonText: [t.textWhite, t.fontMedium],
};

const Menu: React.FC = () => {
  return (
    <View style={s.background}>
      <View style={s.card}>
        <Text style={s.title}>Payment successful</Text>
        <Text style={s.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <TouchableOpacity style={s.button}>
          <Text style={s.buttonText}>Go back to dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
