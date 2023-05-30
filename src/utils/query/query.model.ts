export type AsyncCb<T> = () => Promise<T>;
export interface QueryOptions {
  cacheTime?: number;
}
export type QueryData<T> = {
  data: T;
  timestamp: number;
};
