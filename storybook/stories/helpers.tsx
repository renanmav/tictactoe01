import React from 'react';
import { StyleSheet, View } from 'react-native';

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export const CenterView: React.FC = ({ children }) => {
  return <View style={style.main}>{children}</View>;
};

interface SpaceProps {
  height?: number;
  width?: number;
}

export const Space: React.FC<SpaceProps> = ({ width, height }) => (
  <View
    style={{
      width: width || 1,
      height: height || 1,
    }}
  />
);
