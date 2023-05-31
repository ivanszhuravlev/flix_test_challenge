import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * I think it's better to inject AsyncStorage as a dependency here,
 * but honestly this is just quicker.
 */
export const Storage = {
  setItem: <T>(key: string, value: T) => {
    const stringified = JSON.stringify(value);
    return AsyncStorage.setItem(key, stringified);
  },
  getItem: async <T>(key: string) => {
    const dataJSON = await AsyncStorage.getItem(key);

    if (!dataJSON) {
      return;
    }

    return JSON.parse(dataJSON) as T;
  },
};
