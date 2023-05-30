import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const loaderStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Theme.colors.greyTransparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    backgroundColor: Theme.colors.background,
    padding: 24,
    borderRadius: 20,
  },

  loaderLabel: {
    fontSize: 14,
    color: Theme.colors.text,
    fontWeight: '700',
    textAlign: 'center',
  },
});
