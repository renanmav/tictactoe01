import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

interface ButtonProps {
  onPress: (...args: any[]) => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;
};

export default Button;
