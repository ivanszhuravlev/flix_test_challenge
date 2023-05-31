import {startTransition, useCallback, useEffect, useState} from 'react';
import {v4} from 'uuid';
import {QueryHelpers} from './query.helpers';
import {AsyncCb, QueryOptions} from './query.model';

const DEFAULT_CACHE_TIME = 60 * 1000 * 60;

export const useQuery = <T>(
  key: string,
  asyncCb: AsyncCb<T>,
  opts?: QueryOptions,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [dataVersion, setDataVersion] = useState<string | null>(v4());
  const [error, setError] = useState<Error | null>(null);

  const getData = () => {
    return QueryHelpers.getData(
      key,
      asyncCb,
      opts?.cacheTime || DEFAULT_CACHE_TIME,
    );
  };

  const fetch = useCallback(() => {
    setIsLoading(true);

    startTransition(() => {
      getData()
        .then(setData)
        .then(() => setDataVersion(v4()))
        .catch(setError)
        .finally(() => setIsLoading(false));
    });
  }, [getData]);

  useEffect(() => {
    fetch();
  }, []);

  return {
    data,
    dataVersion,
    error,
    isLoading,
    refetch: fetch,
  };
};
