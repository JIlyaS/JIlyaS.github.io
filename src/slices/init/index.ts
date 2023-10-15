import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitState {
  init: boolean;
}

const initialState = {
  init: false,
} as InitState;

export const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    setInitValue(state, { payload }: PayloadAction<boolean>) {
      state.init = payload;
    },
  },
});

export const { setInitValue } = initSlice.actions;

export default initSlice.reducer;
