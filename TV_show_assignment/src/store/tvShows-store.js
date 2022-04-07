import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
  name: "blogs",
  initialState: { showsList: [] },
  reducers: {
    setShowData(state, action) {
      const { payload } = action;
      state.showsList = payload;
    }
  }
});

export const showsActions = showsSlice.actions;

export default showsSlice.reducer;
