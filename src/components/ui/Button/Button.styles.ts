import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primary,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  label: {
    color: Theme.colors.background,
    textAlign: 'center',
    fontWeight: '700',
  },
});
