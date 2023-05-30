import {useMemo, useState} from 'react';
import {EntityWithID} from '../../data/data.model';
import {TableHelpers} from './Table.helpers';

export const useDataWithSorting = (
  data: EntityWithID<string[]>[],
  dataVersion: string | null,
) => {
  const [field, sortByField] = useState<string | undefined>();

  const sorted = useMemo(() => {
    if (!field || !data.length) {
      return data;
    }

    return TableHelpers.sortDataByField(data, field);
  }, [dataVersion, field]);

  return {
    data: sorted,
    sortByField,
    field,
  };
};
