import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./home-interfaces";

const homeSlice = createSlice({
  name: "home-store",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
