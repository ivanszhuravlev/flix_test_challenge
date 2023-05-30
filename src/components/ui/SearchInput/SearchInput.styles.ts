import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const searchInputStyles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background,
    marginBottom: 16,
  },
  input: {
    padding: 8,
    borderColor: Theme.colors.greyBorder,
    borderWidth: 1,
  },
});
