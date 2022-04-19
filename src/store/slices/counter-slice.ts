//% libs
import {createAsyncThunk} from "@reduxjs/toolkit";

import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../store";



export const fetchPosts = createAsyncThunk(
  "counter/increment",
  async (post: number, thunkApi) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "",
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        console.log(action.meta);
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "fulfilled";
      });
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
