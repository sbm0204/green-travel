import { createSlice } from "@reduxjs/toolkit";

const stayDetailSlice = createSlice({
  name: `stayDetailSlice`,
  initialState: {
    stayInfo: {}, 
  },
  reducers: {
    setStayInfo(state, action) {
      state.stayInfo = action.payload;
    },
  }
});

export const {
  setStayInfo,
} = stayDetailSlice.actions;

export default stayDetailSlice.reducer;