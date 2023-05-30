import React from 'react';
import {View, Text} from 'react-native';
import {tableRowStyles} from './TableRow.styles';

interface Props {
  header?: boolean;
  row: any[];
}

export const TableRow = ({header, row}: Props) => {
  const renderCell = (item: any, index: number) => (
    <View
      style={[
        tableRowStyles.cell,
        index === 0 && tableRowStyles.withoutBorder,
      ]}>
      <Text
        style={[
          tableRowStyles.cellText,
          header && tableRowStyles.cellTextHeader,
        ]}>
        {item}
      </Text>
    </View>
  );

  return (
    <View style={[tableRowStyles.row, !!header && tableRowStyles.header]}>
      {row.map(renderCell)}
    </View>
  );
};
