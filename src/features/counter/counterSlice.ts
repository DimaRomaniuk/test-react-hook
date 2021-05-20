import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBitcoinResponse } from '../../api/getBitcoin';
import { RootState } from '../../app/store';
import { fetchBitcoin } from './counterAPI';

export interface CounterState {
  data?: IBitcoinResponse;
  status: 'idle' | 'loading'  | 'success' | 'failed';
}

const initialState: CounterState = {
  data: undefined,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchBitcoin',
  async () => {
    const response = await fetchBitcoin();
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = 'idle';
      state.data = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
        state.data = undefined;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      });
  },
});

export const { clearData } = counterSlice.actions;
export const selectData = (state: RootState) => state.counter.data;
export const selectStatus = (state: RootState) => state.counter.status;

export default counterSlice.reducer;
