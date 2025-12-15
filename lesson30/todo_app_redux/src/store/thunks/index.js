import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodosAPI } from "../../api";

export const fetchTodosThunk = createAsyncThunk(
  "photos/fetchTodos",
  async (userId, thunkAPI) => {
    const data = await fetchTodosAPI();
    return data.slice(0, 10);
  }
);
