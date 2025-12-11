import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    addIncrementByAmount: (
      state,
      action: { payload: number; type: string }
    ) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, addIncrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
