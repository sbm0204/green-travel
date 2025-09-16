import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig.js";
import axios from "axios";
import { dateCalculater } from "../../utils/dateCalculater.js";
import { dateFormatter } from "../../utils/dateFormatter.js";

const festivalIndex = createAsyncThunk(
  'festivalSlice/festivalIndex',
  // 파라미터 - Arguments 는 외부에서 thunk 호출을 위해 주입 and thunkAPI는 (혹은 자리는) redux thunk 실행을 위해 redux 관련된 모든 것을 가지고 있다.  
  async (arg, thunkAPI) => {
    // state 접근 방법
    const state = thunkAPI.getState();

    const pastDateYMD = dateFormatter.formatDateToYMD(dateCalculater.getPastDate((1000*60*60*24*30)));

    const url = `${axiosConfig.BASE_URL}/searchFestival2`;
    const config = {
      params: {
        serviceKey: axiosConfig.SERVICE_KEY,
        MobileOS: axiosConfig.MOBILE_OS,
        MobileApp: axiosConfig.MOBILE_App,
        _type: axiosConfig.TYPE,
        arrange: axiosConfig.ARRANGE,
        numOfRows: axiosConfig.NUM_OF_ROWS,
        pageNo: state.festival.page + 1,
        eventStartDate: pastDateYMD, // 행사들을 언제까지 보여줄까? 과거 1개월 기준으로 봅시다.  
      }
    }

    const response = await axios.get(url, config);
    return response.data.response.body;
  }
);

export { festivalIndex };
