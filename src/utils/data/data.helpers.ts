import {v4} from 'uuid';
import {EntityWithID} from './data.model';

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
