import { configureStore } from "@reduxjs/toolkit";
import festivalReducer from './slices/festivalSlice.js';
import festivalShowReducer from './slices/festivalShowSlice.js';
import stayReducer from './slices/staySlice.js';
import stayDetailReducer from './slices/stayDetailSlice.js';

export default configureStore({
  reducer: {
    // slices 정의 
    festival: festivalReducer,
    festivalShow: festivalShowReducer,
    stay: stayReducer,
    stayDetail: stayDetailReducer,
  }
});