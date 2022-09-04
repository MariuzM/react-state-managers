import create from 'zustand';

type TypeCountState = {
  count: number;
  countPlusSet: () => void;
  countMinusSet: () => void;
};

export const useStoreZustand = create<TypeCountState>((set, get): TypeCountState => {
  return {
    count: 0,
    countPlusSet: () => set((state) => ({ count: state.count + 1 })),
    countMinusSet: () => set((state) => ({ count: state.count - 1 })),
  };
});
