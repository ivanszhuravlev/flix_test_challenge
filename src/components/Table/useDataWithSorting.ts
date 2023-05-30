import {useMemo, useState} from 'react';
import {EntityWithID} from '../../data/data.model';
import {TableHelpers} from './Table.helpers';

export const useDataWithSorting = (data: EntityWithID<string[]>[]) => {
  const [field, sortByField] = useState<string | undefined>();

  const sorted = useMemo(() => {
    if (!field || !data.length) {
      return data;
    }

    return TableHelpers.sortDataByField(data, field);
  }, [data, field]);

  return {
    data: sorted,
    sortByField,
    field,
  };
};
