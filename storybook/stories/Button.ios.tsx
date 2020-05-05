import React from 'react';
import { TouchableHighlight } from 'react-native';

interface ButtonProps {
  onPress: (...args: any[]) => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
};

export default Button;
