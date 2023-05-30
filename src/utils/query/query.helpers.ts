import {Storage} from '../storage';
import {QueryData} from './query.model';

export const QueryHelpers = {
  getIsDataStale: function <T>(data: QueryData<T>, cacheTime: number) {
    const now = Date.now();

    return now - data.timestamp >= cacheTime;
  },
  getCachedItem: async function <T>(key: string, cacheTime: number) {
    const data = await Storage.getItem<QueryData<T>>(key);

    if (!data) {
      return;
    }

    const isStale = this.getIsDataStale(data, cacheTime);

    return isStale ? undefined : data;
  },
  setCachedItem: function <T>(key: string, data: T) {
    return Storage.setItem<QueryData<T>>(key, {
      timestamp: Date.now(),
      data,
    });
  },
};
