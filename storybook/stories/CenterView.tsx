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

const CenterView: React.FC = ({ children }) => {
  return <View style={style.main}>{children}</View>;
};

export default CenterView;
