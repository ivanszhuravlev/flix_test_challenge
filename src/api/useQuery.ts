import {startTransition, useEffect, useState} from 'react';

type AsyncCb<T> = () => Promise<T>;

export const useQuery = <T>(asyncCb: AsyncCb<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log('LOAD');

    setIsLoading(true);

    startTransition(() => {
      asyncCb()
        .then(setData)
        .catch(setError)
        .finally(() => setIsLoading(false));
    });
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};
