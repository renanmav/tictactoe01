import React from 'react';
import { Text, TouchableOpacity, TextStyle } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

const s = {
  wrapper: [t.bgTransparent, t.itemsCenter, t.rounded, t.w8_12],
  buttonText: [t.textWhite, t.fontBold, t.textLg],
};

interface ButtonProps {
  text: string;
  onPress: () => void;
  colors?: Array<string | { backgroundColor: string }>;
  textStyle?: TextStyle;
  linearBgProps?: LinearGradientProps;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, colors, textStyle, linearBgProps }) => {
  const renderTouchableWithStyles = (styles: any[] = []) => (
    <TouchableOpacity
      style={[s.wrapper, t.p3, ...styles]}
      onPress={onPress}
      activeOpacity={0.2}
      hitSlop={{
        left: 200,
        right: 200,
      }}>
      <Text style={[s.buttonText, textStyle]} testID="button-text">
        {text}
      </Text>
    </TouchableOpacity>
  );

  if (colors && colors.length >= 2) {
    return (
      <LinearGradient
        colors={colors.map((color) => (typeof color === 'string' ? color : color.backgroundColor))}
        style={s.wrapper}
        {...linearBgProps}>
        {renderTouchableWithStyles([t.w11_12])}
      </LinearGradient>
    );
  } else {
    return renderTouchableWithStyles([colors || t.bgBlue500]);
  }
};

export default Button;
