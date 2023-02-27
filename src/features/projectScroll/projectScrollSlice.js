import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const projectScrollSlice = createSlice({
  name: "projectScroll",
  initialState,
  reducers: {
    toggle: (state) => {
      state = !state;
    },
  },
});

export const { toggle } = projectScrollSlice.actions;

export default projectScrollSlice.reducer;
