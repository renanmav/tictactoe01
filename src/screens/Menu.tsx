import React from 'react';
import { Image, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from '../Router';
import Button from '../components/Button';
import Background from '../components/Background';

const s = {
  logo: [t.objectContain, { width: 150, height: 150 }],
  headline: [t.textWhite, t.textLg, t.fontMedium, t.mB12],
  buttonColors: [t.bgGreen700, t.bgGreen800],
};

type MenuScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Menu'>;
interface MenuProps {
  navigation: MenuScreenNavigationProp;
}

const Menu: React.FC<MenuProps> = ({ navigation }) => {
  return (
    <Background>
      <Image source={require('../../assets/xo.png')} style={s.logo} />
      <Text style={s.headline}>Ta afim de uma partida?</Text>
      <Button
        text="Jogar"
        onPress={() => {
          navigation.navigate('SelectDifficulty');
        }}
        colors={s.buttonColors}
        testID="button-jogar"
      />
      {/*<View style={[t.mB8]} />*/}
      {/*<Button text="Ver placar" onPress={() => {}} colors={s.buttonColors} />*/}
    </Background>
  );
};

export default Menu;
