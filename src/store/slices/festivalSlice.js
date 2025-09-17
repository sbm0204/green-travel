import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk.js";
import { localStorageUtil } from "../../utils/localStorageUtil";

const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: localStorageUtil.getFestivalList() ? localStorageUtil.getFestivalList() : [],     // 페스티벌 리스트 저장 (지금 식은 localStorageUtil에 자료가 있는지 먼저 확인하고 ㄱ)
    page: localStorageUtil.getFestivalPage() ? localStorageUtil.getFestivalPage() : 0,    // 현재 페이지 번호
    scrollEventFlg: localStorageUtil.getFestivalScrollFlg() ? localStorageUtil.getFestivalScrollFlg() : true, // 스크롤 이벤트 디바운싱 제어 플래그
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        if(action.payload.items?.item) {
          //state 저장
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;

          // localstorage 저장
          localStorageUtil.setFestivalList(state.list);
          localStorageUtil.setFestivalPage(state.page);
          localStorageUtil.setFestivalScrollFlg(state.scrollEventFlg);

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
} = festivalSlice.actions;

export default festivalSlice.reducer;


// list가 [] 일때, ======================================================

// const festivalSlice = createSlice({
//   name: 'festivalSlice',
//   initialState: {
//     list: [],     // 페스티벌 리스트 저장 
//     page: 1, // 현재 페이지 번호
//   },
//   reducers: {
//     setList(state, action) {
//       state.list = action.payload;
//     }
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(festivalIndex.fulfilled, (state, action) => {
//           state.list = [...state.list, ...action.payload.items.item];
//           state.page = action.payload.pageNo;
//       })
//       .addMatcher(
//         action => action.type.endsWith('/pending'),
//         state => {
//           console.log('처리중입니다');
//         }
//       )
//       .addMatcher(
//         action => action.type.endsWith('/rejected'),
//         state => {
//           console.error('error');
//         }
//       );
//   }
// });

// list가 null 일때, ======================================================
  // extraReducers: builder => {
  //   builder
  //     .addCase(festivalIndex.fulfilled, (state, action) => {
        // if(state.list !== null) {
        //   // 페이지 추가 처리
        //   state.list = [...state.list, ...action.payload.items.item];
        //   state.page = action.payload.pageNo;
        // } else {
        //   // 초기 페이지 처리
        //   state.list = action.payload.items.item;
        //   state.scrollEventFlg = true;
  // }