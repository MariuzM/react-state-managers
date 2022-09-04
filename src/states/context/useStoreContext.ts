import { createContext } from 'react';

type T = {
  count: number;
  countSet: React.Dispatch<React.SetStateAction<number>>;
};

export const CountContext = createContext<T>({
  count: 0,
  countSet: () => 0,
});
