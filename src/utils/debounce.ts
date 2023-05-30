type Callback = (...args: any[]) => void;
type DebouncedFunc<T extends Callback> = (...args: Parameters<T>) => void;

export const debounce = <T extends Callback>(
  cb: T,
  timeout = 300,
): DebouncedFunc<T> => {
  let timer: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
};
