import { createSlice } from "@reduxjs/toolkit";
import { stayIndex } from "../thunks/stayThunk.js";
import { localStorageUtilForStay } from "../../utils/localStorageUtilForStay.js";

const staySlice = createSlice({
  name: 'staySlice',
  initialState: {
    list: localStorageUtilForStay.getStayList() ? localStorageUtilForStay.getStayList() : [],     // 페스티벌 리스트 저장 (지금 식은 localStorageUtil에 자료가 있는지 먼저 확인하고 ㄱ)
    page: localStorageUtilForStay.getStayPage() ? localStorageUtilForStay.getStayPage() : 0,    // 현재 페이지 번호
    scrollEventFlg: localStorageUtilForStay.getStayScrollFlg() ? localStorageUtilForStay.getStayScrollFlg() : true, // 스크롤 이벤트 디바운싱 제어 플래그
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(stayIndex.fulfilled, (state, action) => {
        if(action.payload.items?.item) {
          //state 저장
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;

          // localstorage 저장
          localStorageUtilForStay.setStayList(state.list);
          localStorageUtilForStay.setStayPage(state.page);
          localStorageUtilForStay.setStayScrollFlg(state.scrollEventFlg);

        } else {
          state.scrollEventFlg = false;
        }
      })
      
      // .addMatcher(
      //   action => action.type.endsWith('/pending'),
      //   state => {
      //     console.log('처리중입니다');
      //   }
      // )

      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.error('!THSI IS EMERGENCY!', action.error);
        }
      );
  }
});

export const {
  setScrollEventFlg
} = staySlice.actions;

export default staySlice.reducer;