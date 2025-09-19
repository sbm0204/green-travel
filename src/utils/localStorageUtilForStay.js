import { KEY_LOCALSTORAGE_CLEAR_DATE, KEY_LOCALSTORAGE_STAY_FLG, KEY_LOCALSTORAGE_STAY_LIST, KEY_LOCALSTORAGE_STAY_PAGE } from "../configs/keys.js";

export const localStorageUtilForStay = {
  clearLocalStorage: () => {
    localStorage.clear();
  },
  /**
   * 로컬스토리지에 페스티벌 리스트 저장
   * @param {[]} stayList
   */
  setStayList: (data) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_LIST, JSON.stringify(data)); // 텍스트로 변환 하지만 JSON 형태로
  },
  /**
   * 로컬스토리지에 페스티벌 리스트 반환
   * @returns {[]} stayList
   */
  getStayList: () => {
    const listString = localStorage.getItem(KEY_LOCALSTORAGE_STAY_LIST);
    return JSON.parse(listString);
  },
  /**
   * 로컬스토리지에 페스티벌 페이지 번호 저장
   * @param {number} pageNo 
   */
  setStayPage: (pageNo) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_PAGE, pageNo.toString());
  },
  /**
   * 로컬 스토리지의 페스티벌 페이지 번호 반환하는 함수다. 
   * @returns {number} 페이지 번호
   */
  getStayPage: () => {
    return parseInt(localStorage.getItem(KEY_LOCALSTORAGE_STAY_PAGE));
  },
  /**
   * 로컬스토리지에 페스티벌 스크롤 플래그 저장
   * @param {boolean} flg 
   */
  setStayScrollFlg: (flg) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_FLG, flg.toString());
  },
  /**
   * 로컬스토리지의 페스티벌 스크롤 플래그 반환
   * @returns {boolean} flg
   */
  getStayScrollFlg: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_STAY_FLG));
  },
  /**
   * 로컬 스토리지에 로컬스토리지 클리어 날짜 저장
   * @param {string} dateYMD 
   */
  setClearDate: (dateYMD) => {
    localStorage.setItem(KEY_LOCALSTORAGE_CLEAR_DATE, dateYMD);
  },
  /**
   * 로컬스토리지의 로컬스토리지 클리어 날짜 변환
   * @returns {string | null}
   */
  getClearDate: () => {
    return localStorage.getItem(KEY_LOCALSTORAGE_CLEAR_DATE);
  }
}