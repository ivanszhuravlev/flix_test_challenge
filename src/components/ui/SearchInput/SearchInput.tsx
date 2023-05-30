import React from 'react';
import {TextInput, View} from 'react-native';
import {Theme} from '../../../theme';
import {searchInputStyles} from './SearchInput.styles';

interface Props {
  onChange: (value: string) => void;
}

/**
 * For the current implementation I thought it's unnecessary to store input's value in a state.
 * Although, if we add validation later or if we need to export data, it'd make sense to store the value
 * and `debounce` not the `onChange` itself but the effect of the value change.
 */
export const SearchInput = ({onChange}: Props) => {
  return (
    <View style={searchInputStyles.container}>
      <TextInput
        style={searchInputStyles.input}
        onChangeText={onChange}
        placeholder="Search"
        placeholderTextColor={Theme.colors.textSecondary}
      />
    </View>
  );
};
