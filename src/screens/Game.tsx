import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { t } from 'react-native-tailwindcss';

import { MainStackParamList } from '../Router';
import Background from '../components/Background';
import TicTacToe from '../components/TicTacToe';
import SymbolIndicator from '../components/SymbolIndicator';

const s = {
  wrapper: [t.hFull, t.wFull],
  topContainer: [t.pX8, t.wFull, t.itemsStart, t.mY6],
  leftArrow: [t.objectContain, { width: 35, height: 35 }],
  contentContainer: [t.pX8, t.flexAuto, t.justifyCenter, t.itemsCenter],
};

type GameScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Game'>;
type GameScreenRouteProp = RouteProp<MainStackParamList, 'Game'>;
interface GameProps {
  navigation: GameScreenNavigationProp;
  route: GameScreenRouteProp;
}

const Game: React.FC<GameProps> = ({ navigation, route }) => {
  return (
    <Background testID="game">
      <SafeAreaView style={s.wrapper}>
        <View style={s.topContainer} testID="game-top-container">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/left-arrow.png')} style={s.leftArrow} />
          </TouchableOpacity>
        </View>
        <View style={s.contentContainer} testID="game-content-container">
          <SymbolIndicator />
          <View style={{ marginBottom: 50 }} />
          <TicTacToe difficulty={route.params.difficulty} />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Game;
