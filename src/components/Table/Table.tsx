import React, {useMemo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {TableRow} from '../ui/TableRow';
import {TableHelpers} from './Table.helpers';
import {TableData} from './Table.model';

interface Props {
  data: TableData;
}

const Table = ({data}: Props) => {
  const formattedData = useMemo(() => {
    return TableHelpers.formatTable(data);
  }, [data]);

  const renderItem: ListRenderItem<string[]> = ({item: row, index}) => (
    <TableRow row={row} header={index === 0} />
  );
  const keyExtractor = (_: string[]) => 'temp';

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      data={formattedData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default Table;
