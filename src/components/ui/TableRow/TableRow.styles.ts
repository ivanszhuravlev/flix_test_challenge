import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const tableRowStyles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    backgroundColor: Theme.colors.primary,
  },
  cell: {
    flex: 1,
    padding: 8,
  },
  cellText: {
    color: Theme.colors.text,
    fontSize: 16,
  },
  cellTextHeader: {
    color: Theme.colors.background,
    fontWeight: '600',
  },
});
