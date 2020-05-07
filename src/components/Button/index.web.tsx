import React from 'react';
import { Text, TouchableOpacity, TextStyle } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { LinearGradientProps } from 'expo-linear-gradient';

const s = {
  wrapper: [t.bgTransparent, t.itemsCenter, t.rounded, t.w5_12],
  buttonText: [t.textWhite, t.fontBold, t.textLg],
};

interface ButtonProps {
  text: string;
  onPress: () => void;
  colors?: Array<string | { backgroundColor: string }>;
  textStyle?: TextStyle;
  linearBgProps?: LinearGradientProps;
  testID?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, colors, textStyle, testID }) => {
  const renderTouchableWithStyles = (styles: any[] = []) => (
    <TouchableOpacity
      style={[s.wrapper, t.p3, ...styles]}
      onPress={onPress}
      activeOpacity={0.2}
      testID={testID}>
      <Text style={[s.buttonText, textStyle]} testID="button-text">
        {text}
      </Text>
    </TouchableOpacity>
  );

  return renderTouchableWithStyles([colors || t.bgBlue500]);
};

export default Button;
