import {useMemo, useState} from 'react';
import {EntityWithID} from '../../data/data.model';
import {debounce} from '../../utils';
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

  const searchDebounced = useMemo(() => debounce(search), []);

  return {
    data: sorted,
    search: searchDebounced,
  };
};
