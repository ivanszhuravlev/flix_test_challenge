import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

interface Props<T extends Record<string, any>> {
  data: T[];
}

const Table = <T extends Record<string, any>>({data}: Props<T>) => {
  const renderItem: ListRenderItem<T> = () => null;
  const keyExtractor = (_: T) => 'temp';

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default Table;
