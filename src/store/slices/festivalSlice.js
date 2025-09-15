import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk";

const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: null,     // 페스티벌 리스트 저장 
    page: 1,    // 현재 페이지 번호
    scrollEventFlg: true, // 스크롤 이벤트 디바운싱 제어 플래그
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        // // console.log(action.payload, action.type);
        // if(state.list !== null) {
        //   // 페이지 추가 처리
        //   state.list = [...state.list, ...action.payload.items.item];
        //   state.page = action.payload.pageNo;
        // } else {
        //   // 초기 페이지 처리
        //   state.list = action.payload.items.item;
        //   state.scrollEventFlg = true;
        // }

        if(action.payload.items?.item) {
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;
        } else {
          state.scrollEventFlg = false;
        }
      })
      
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          console.log('처리중입니다');
        }
      )
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
