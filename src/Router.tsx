import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './screens/Menu';
import SelectDifficulty, { Difficulties } from './screens/SelectDifficulty';
import Game from './screens/Game';

export type MainStackParamList = {
  Menu: undefined;
  SelectDifficulty: undefined;
  Game: { difficulty: Difficulties };
};

const MainStack = createStackNavigator<MainStackParamList>();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Menu"
        headerMode="none"
        screenOptions={{
          animationEnabled: false,
        }}>
        <MainStack.Screen name="Menu" component={Menu} />
        <MainStack.Screen name="SelectDifficulty" component={SelectDifficulty} />
        <MainStack.Screen name="Game" component={Game} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
