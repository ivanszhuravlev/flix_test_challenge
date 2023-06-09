import React, {useMemo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {DataHelpers, EntityWithID} from '../../utils/data';
import {SearchInput} from '../ui/SearchInput';
import {TableRow} from '../ui/TableRow';
import {TableHelpers} from './Table.helpers';
import {TableDataRaw} from './Table.model';
import {tableStyles} from './Table.styles';
import {useDataWithSearch} from './useDataWithSearch';
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
  } = useDataWithSorting(formattedData);

  const {data: searchedData, search} = useDataWithSearch(sortedData);

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
    <>
      <SearchInput onChange={search} />
      <FlatList
        stickyHeaderIndices={[0]}
        data={searchedData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={tableStyles.table}
      />
    </>
  );
};

export default Table;
