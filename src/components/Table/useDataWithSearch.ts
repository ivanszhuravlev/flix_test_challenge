import {useMemo, useState} from 'react';
import {EntityWithID} from '../../data/data.model';
import {TableHelpers} from './Table.helpers';

export const useDataWithSearch = (data: EntityWithID<string[]>[]) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sorted = useMemo(() => {
    if (!searchQuery || !data.length) {
      return data;
    }

    return TableHelpers.filterBySearchQuery(data, searchQuery);
  }, [data, searchQuery]);

  const search = (query: string) => {
    return setSearchQuery(query.trim());
  };

  return {
    data: sorted,
    search,
    searchQuery,
  };
};
