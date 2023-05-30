import {v4} from 'uuid';

export type EntityWithID<T> = {id: string; data: T};

export const DataHelpers = {
  feedWithUUID: function <T>(input: T[]): EntityWithID<T>[] {
    return input.map(item => {
      return {
        id: v4(),
        data: item,
      };
    });
  },
};
