import {QueryHelpers} from '../../../../src/utils/query/query.helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

afterAll(() => {
  jest.clearAllMocks();
});

describe('QueryHelpers -> fetchRemoteData', () => {
  // Dummy test, to check if everything's working
  it('should set data to async storage', async () => {
    const data = [{a: 'a', b: 'b'}];
    const cb = async () => data;

    const response = await QueryHelpers.fetchRemoteData('test1', cb);

    expect(AsyncStorage.setItem).toBeCalled();
    expect(response).toMatchObject(data);
  });
});

describe('QueryHelpers -> getData', () => {
  const key = 'test2';
  const data = [{a: 'a', b: 'b'}];
  const cacheTime = 5000; // 5 sec

  const cb = jest.fn().mockImplementation(async () => data);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data and save it to AsyncStorage', async () => {
    const now = 1581588000000; // 13.02.2020 10:00:00

    Date.now = jest.fn(() => now);

    const response = await QueryHelpers.getData<typeof data>(
      key,
      cb,
      cacheTime,
    );

    // Checking that we fetched the data from BE
    expect(cb).toBeCalled();

    // Checking that we saved the data
    expect(AsyncStorage.setItem).toBeCalledWith(
      key,
      JSON.stringify({
        timestamp: now,
        data: data,
      }),
    );

    expect(response).toMatchObject(data);
  });

  it('should get data from AsyncStorage after 3 seconds', async () => {
    const now = 1581588003000; // 13.02.2020 10:00:03

    Date.now = jest.fn(() => now);

    const response = await QueryHelpers.getData<typeof data>(
      key,
      cb,
      cacheTime,
    );

    // Checking that we didn't fetch the data from BE
    expect(cb).not.toBeCalled();

    // Checking that we took data from storage
    expect(AsyncStorage.getItem).toBeCalledWith(key);

    // Checking that we didn't save anything
    expect(AsyncStorage.setItem).not.toBeCalled();

    expect(response).toMatchObject(data);
  });

  it('should get data from AsyncStorage after 4 seconds, the data should be the same', async () => {
    const now = 1581588004000; // 13.02.2020 10:00:04
    const newData = [{a: 'a', b: 'b', c: 'c'}];
    const newCb = jest.fn().mockImplementation(async () => newData);

    Date.now = jest.fn(() => now);

    const response = await QueryHelpers.getData<typeof data>(
      key,
      newCb,
      cacheTime,
    );

    // Checking that we didn't fetch the data from BE
    expect(newCb).not.toBeCalled();

    // Checking that we took data from storage
    expect(AsyncStorage.getItem).toBeCalledWith(key);

    // Checking that we didn't save anything
    expect(AsyncStorage.setItem).not.toBeCalled();

    expect(response).toMatchObject(data);
  });

  it('should ignore the data from AsyncStorage after 6 seconds and re-fetch it', async () => {
    const now = 1581588006000; // 13.02.2020 10:00:04
    const newData = [{a: 'a', b: 'b', c: 'c'}];
    const newCb = jest.fn().mockImplementation(async () => newData);

    Date.now = jest.fn(() => now);

    const response = await QueryHelpers.getData<typeof data>(
      key,
      newCb,
      cacheTime,
    );

    // Checking that we took data from cache
    expect(AsyncStorage.getItem).toBeCalledWith(key);

    // Checking that we called new callback anyway since the time has passed
    expect(newCb).toBeCalled();

    // Checking that we saved the new data
    expect(AsyncStorage.setItem).toBeCalledWith(
      key,
      JSON.stringify({
        timestamp: now,
        data: newData,
      }),
    );

    expect(response).toMatchObject(newData);
  });
});
