import React, {useMemo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {DataHelpers, EntityWithID} from '../../data';
import {TableRow} from '../ui/TableRow';
import {TableHelpers} from './Table.helpers';
import {TableDataRaw} from './Table.model';
import {useDataWithSorting} from './useDataWithSorting';

interface Props {
  data: TableDataRaw;
  dataVersion: string | null;
}

const Table = ({data, dataVersion}: Props) => {
  const formattedData = useMemo(() => {
    const formatted = TableHelpers.formatTable(data);
    const withUUID = DataHelpers.feedWithUUID(formatted);

    return withUUID;
  }, [dataVersion]);

  const {
    data: sortedData,
    sortByField,
    field: sortedField,
  } = useDataWithSorting(formattedData, dataVersion);

  const renderItem: ListRenderItem<EntityWithID<string[]>> = ({
    item: row,
    index,
  }) => (
    <TableRow
      row={row.data}
      header={index === 0}
      handleHeaderPress={sortByField}
      sortedField={sortedField}
    />
  );

  const keyExtractor = (row: EntityWithID<string[]>) => row.id;

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      data={sortedData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default Table;
