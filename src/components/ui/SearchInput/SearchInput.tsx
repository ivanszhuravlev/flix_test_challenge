import React from 'react';
import {TextInput, View} from 'react-native';
import {Theme} from '../../../theme';
import {searchInputStyles} from './SearchInput.styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({value, onChange}: Props) => {
  return (
    <View style={searchInputStyles.container}>
      <TextInput
        style={searchInputStyles.input}
        value={value}
        onChangeText={onChange}
        placeholder="Search"
        placeholderTextColor={Theme.colors.textSecondary}
      />
    </View>
  );
};
