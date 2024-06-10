import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, state: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const data = localStorage.getItem(key);
    return data ? <T>JSON.parse(data) : state;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
