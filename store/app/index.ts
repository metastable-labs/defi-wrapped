import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  initializing: boolean;
  windowInnerHeight?: number;
}

const initialState: AppState = {
  initializing: true,
  windowInnerHeight: undefined,
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitializing: (state, action: PayloadAction<boolean>) => {
      state.initializing = action.payload;
    },

    setWindowInnerHeight: (state, action: PayloadAction<number>) => {
      state.windowInnerHeight = action.payload;
    },
  },
});

export const { setInitializing, setWindowInnerHeight } = appReducer.actions;

export default appReducer.reducer;
