import React from 'react';
import { Dimensions, ImageBackground, StatusBar } from 'react-native';
import { t } from 'react-native-tailwindcss';

const s = {
  background: [t.itemsCenter, t.justifyCenter],
};

const { width, height } = Dimensions.get('window');

const Background: React.FC = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={[s.background, { width, height }]}>
      <StatusBar barStyle="light-content" />
      {children}
    </ImageBackground>
  );
};

export default Background;
