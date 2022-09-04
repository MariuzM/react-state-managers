import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TypeCountState = {
  count: number;
};

const initialState: TypeCountState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {
    countPlusSet: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    countMinusSet: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { countMinusSet, countPlusSet } = countSlice.actions;

export const useStoreRedux = configureStore({
  reducer: {
    count: countSlice.reducer,
  },
});

type RootState = ReturnType<typeof useStoreRedux.getState>;

export const countState = (state: RootState) => state.count.count;
