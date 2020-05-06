import React from 'react';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from '../Router';
import Background from '../components/Background';

type SelectDifficultyScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'SelectDifficulty'
>;
interface SelectDifficultyProps {
  navigation: SelectDifficultyScreenNavigationProp;
}

const SelectDifficulty: React.FC<SelectDifficultyProps> = () => {
  return (
    <Background>
      <Text>SelectDifficulty</Text>
    </Background>
  );
};

export default SelectDifficulty;
