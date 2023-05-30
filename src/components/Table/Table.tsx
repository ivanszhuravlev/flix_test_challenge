import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {TableRow} from '../ui/TableRow';

interface Props<T extends Record<string, any>> {
  data: T[];
}

const Table = <T extends Record<string, any>>({data}: Props<T>) => {
  const renderItem: ListRenderItem<T> = ({item: row, index}) => (
    <TableRow
      row={index === 0 ? Object.keys(row) : Object.values(row)}
      header={index === 0}
    />
  );
  const keyExtractor = (_: T) => 'temp';

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default Table;
