import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import {buttonStyles} from './Button.styles';

interface Props extends PressableProps {
  text: string;
}

export const Button = ({text, ...props}: Props) => {
  return (
    <Pressable {...props} style={buttonStyles.container}>
      <Text style={buttonStyles.label}>{text}</Text>
    </Pressable>
  );
};
