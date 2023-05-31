import {Storage} from '../storage';
import {QueryData} from './query.model';

export const CacheControl = {
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

export const QueryHelpers = {
  fetchRemoteData: async function <T>(key: string, asyncCb: () => Promise<T>) {
    const response = await asyncCb();

    await CacheControl.setCachedItem(key, response);

    return response;
  },
  getData: async function <T>(
    key: string,
    asyncCb: () => Promise<T>,
    cacheTime: number,
  ) {
    const stored = await CacheControl.getCachedItem<T>(key, cacheTime);

    return stored?.data || (await this.fetchRemoteData(key, asyncCb));
  },
};
