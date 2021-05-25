import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBitcoin } from '../../api/getBitcoin'

const fetchBitcoin = createAsyncThunk(
    'fetch/Bitcoin',
    async () => getBitcoin
  )


export const counterSlice = createSlice({
  name: 'bicoin',
  initialState: {
    data: undefined,
    loading: false,
    error: '',
  },
  reducers: {
    startFetch: (state) => {
      state = {
        data: undefined,
        loading: false,
        error: '',
      };
    },
    successFetch: (state, {payload}) => {
        state = {
          data: payload,
          loading: true,
          error: '',
        };
    },
    failureFetch: (state) => {
        state = {
          data: undefined,
          loading: false,
          error: 'error',
        };
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchBitcoin.fulfilled]: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { startFetch, successFetch, failureFetch } = counterSlice.actions

export default counterSlice.reducer