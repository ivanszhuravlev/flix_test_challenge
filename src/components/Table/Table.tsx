import React, {useMemo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {ApiHelpers, EntityWithID} from '../../api/api.helpers';
import {TableRow} from '../ui/TableRow';
import {TableHelpers} from './Table.helpers';
import {TableDataRaw, TableValues} from './Table.model';

interface Props {
  data: TableDataRaw;
  dataVersion: string | null;
}

const Table = ({data, dataVersion}: Props) => {
  const formattedData = useMemo(() => {
    const formatted = TableHelpers.formatTable(data);
    const withUUID = ApiHelpers.feedWithUUID(formatted);

    return withUUID;
  }, [dataVersion]);

  const renderItem: ListRenderItem<EntityWithID<string[]>> = ({
    item: row,
    index,
  }) => <TableRow row={row.data} header={index === 0} />;
  const keyExtractor = (row: EntityWithID<string[]>) => row.id;

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
