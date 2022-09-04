import create from 'zustand';

type T = {
  count: number;
  countPlusSet: () => void;
  countMinusSet: () => void;
};

export const useStoreZustand = create<T>((set, get): T => {
  return {
    count: 0,
    countPlusSet: () => set((s) => ({ count: s.count + 1 })),
    countMinusSet: () => set((s) => ({ count: s.count - 1 })),
  };
});
