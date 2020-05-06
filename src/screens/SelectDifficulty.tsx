import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from '../Router';
import Background from '../components/Background';
import Button from '../components/Button';

const s = {
  wrapper: [t.hFull, t.wFull],
  topContainer: [t.pX8, t.wFull, t.itemsStart, t.mY6],
  leftArrow: [t.objectContain, { width: 35, height: 35 }],
  contentContainer: [t.flexAuto, t.justifyCenter, t.itemsCenter],
  title: [t.textWhite, t.fontSemibold, t.textXl],
  buttonColors: [t.bgGreen700, t.bgGreen800],
};

type Difficulties = 'easy' | 'medium' | 'hard' | 'expert';

type SelectDifficultyScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'SelectDifficulty'
>;
interface SelectDifficultyProps {
  navigation: SelectDifficultyScreenNavigationProp;
}

const SelectDifficulty: React.FC<SelectDifficultyProps> = ({ navigation }) => {
  const [difficulty, setDifficulty] = useState<Difficulties | undefined>();

  useEffect(() => {
    if (!difficulty) {
      return;
    }
    navigation.navigate('Menu');
  });

  return (
    <Background>
      <SafeAreaView style={s.wrapper}>
        <View style={s.topContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left-arrow.png')} style={s.leftArrow} />
          </TouchableOpacity>
        </View>
        <View style={s.contentContainer}>
          <Text style={s.title}>Quer jogar em</Text>
          <Text style={s.title}>qual dificuldade?</Text>
          <View style={{ height: 60 }} />
          <Button text="Fácil" onPress={() => setDifficulty('easy')} colors={s.buttonColors} />
          <View style={{ height: 30 }} />
          <Button text="Médio" onPress={() => setDifficulty('medium')} colors={s.buttonColors} />
          <View style={{ height: 30 }} />
          <Button text="Difícil" onPress={() => setDifficulty('hard')} colors={s.buttonColors} />
          <View style={{ height: 30 }} />
          <Button text="Ninja" onPress={() => setDifficulty('expert')} colors={s.buttonColors} />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default SelectDifficulty;
