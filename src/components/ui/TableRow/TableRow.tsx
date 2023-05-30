import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {tableRowStyles} from './TableRow.styles';

interface Props {
  header?: boolean;
  row: any[];
  handleHeaderPress: (field: string) => void;
  sortedField: string | undefined;
}

export const TableRow = ({
  header,
  row,
  handleHeaderPress,
  sortedField,
}: Props) => {
  const renderCell = (item: any, index: number) => {
    const handlePress = () => {
      if (header) {
        return handleHeaderPress(`${item}`);
      }
    };

    return (
      <Pressable
        key={`${item}-${index}`}
        style={[
          tableRowStyles.cell,
          index === 0 && tableRowStyles.withoutBorder,
        ]}
        onPress={handlePress}>
        <Text
          style={[
            tableRowStyles.cellText,
            header && tableRowStyles.cellTextHeader,
          ]}>
          {`${item}`}
          {item === sortedField ? ' ↓' : ''}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={[tableRowStyles.row, !!header && tableRowStyles.header]}>
      {row.map(renderCell)}
    </View>
  );
};
