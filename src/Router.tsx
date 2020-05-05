import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './screens/Menu';

const MainStack = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Menu" headerMode="none">
        <MainStack.Screen name="Menu" component={Menu} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
