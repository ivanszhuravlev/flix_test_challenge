import {startTransition, useEffect, useState} from 'react';
import {v4} from 'uuid';

type AsyncCb<T> = () => Promise<T>;

export const useQuery = <T>(asyncCb: AsyncCb<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [dataVersion, setDataVersion] = useState<string | null>(v4());
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    startTransition(() => {
      asyncCb()
        .then(setData)
        .then(() => setDataVersion(v4()))
        .catch(setError)
        .finally(() => setIsLoading(false));
    });
  }, []);

  return {
    data,
    dataVersion,
    error,
    isLoading,
  };
};
