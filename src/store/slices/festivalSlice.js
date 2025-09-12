import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk";

const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: null,     // 페스티벌 리스트 저장 
  },
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        console.log(action.payload, action.type);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          console.log('처리중입니다');
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        state => {
          console.error('error');
        }
      );
  }
});

export const {
  setList
} = festivalSlice.actions;

export default festivalSlice.reducer;
