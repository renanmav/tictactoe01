import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './screens/Menu';
import SelectDifficulty from './screens/SelectDifficulty';

export type MainStackParamList = {
  Menu: undefined;
  SelectDifficulty: undefined;
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
