import React from 'react';
import { Dimensions, Image, ImageBackground, StatusBar, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Button from '../components/Button';

const s = {
  background: [t.itemsCenter, t.justifyCenter],
  logo: [t.w4_12, t.objectContain],
  headline: [t.textWhite, t.textLg, t.fontMedium, t.mB12],
};

const { width, height } = Dimensions.get('window');

const Menu: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={[s.background, { width, height }]}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../../assets/xo.png')} style={s.logo} />
      <Text style={s.headline}>Ta afim de uma partida?</Text>
      <Button text="Jogar" onPress={() => {}} colors={[t.bgGreen700, t.bgGreen800]} />
      <View style={[t.mB8]} />
      <Button text="Ver placar" onPress={() => {}} colors={[t.bgGreen700, t.bgGreen800]} />
    </ImageBackground>
  );
};

export default Menu;
