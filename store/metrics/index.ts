import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MetricsState {
  loading: boolean;
  metrics?: Metrics;
}

const initialState: MetricsState = {
  loading: true,
  metrics: undefined,
};

export const metricsReducer = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setMetrics: (state, action: PayloadAction<Metrics>) => {
      state.metrics = action.payload;
    },
  },
});

export const { setLoading, setMetrics } = metricsReducer.actions;

export default metricsReducer.reducer;
