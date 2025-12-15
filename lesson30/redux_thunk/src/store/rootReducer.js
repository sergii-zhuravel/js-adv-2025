import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

async function fetchPhotos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await res.json();
}

export const fetchPhotosThunk = createAsyncThunk(
  "photos/fetchAllPhotos",
  async (userId, thunkAPI) => {
    const data = await fetchPhotos();
    console.log(data);
    return data;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
    todos: [{ id: 1, name: "test" }],
    photos: [],
    isLoading: false,
  },
  reducers: {
    incremented: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPhotosThunk.fulfilled, (state, action) => {
      // Add user to the state array
      state.photos.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchPhotosThunk.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
  },
});

export const { incremented, decremented } = counterSlice.actions;
export const { reducer } = counterSlice;
