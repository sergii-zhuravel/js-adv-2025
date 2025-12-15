import { createSlice } from "@reduxjs/toolkit";
import { fetchTodosThunk } from "./thunks";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    todos: [],
    isLoading: false,
  },
  reducers: {
    incremented: (state, action) => {
      state.value += action.payload;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
      // Add user to the state array
      state.todos = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTodosThunk.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
  },
});

export const { incremented, decremented } = counterSlice.actions;
export const { reducer } = counterSlice;
