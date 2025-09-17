import { KEY_LOCALSTORAGE_CLEAR_DATE, KEY_LOCALSTORAGE_FASTIVAL_FLG, KEY_LOCALSTORAGE_FASTIVAL_LIST, KEY_LOCALSTORAGE_FASTIVAL_PAGE } from "../configs/keys.js";

export const localStorageUtil = {
  // 책임 중심적 설계시 코드 작성 방법
  clearLocalStorage: () => {
    localStorage.clear();
  },
  /**
   * 로컬스토리지에 페스티벌 리스트 저장
   * @param {[]} festivalList
   */
  setFestivalList: (data) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_LIST, JSON.stringify(data)); // 텍스트로 변환 하지만 JSON 형태로
  },
  /**
   * 로컬스토리지에 페스티벌 리스트 반환
   * @returns {[]} festivalList
   */
  getFestivalList: () => {
    const listString = localStorage.getItem(KEY_LOCALSTORAGE_FASTIVAL_LIST);
    return JSON.parse(listString);
  },
  /**
   * 로컬스토리지에 페스티벌 페이지 번호 저장
   * @param {number} pageNo 
   */
  setFestivalPage: (pageNo) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_PAGE, pageNo.toString());
  },
  /**
   * 로컬 스토리지의 페스티벌 페이지 번호 반환하는 함수다. 
   * @returns {number} 페이지 번호
   */
  getFestivalPage: () => {
    return parseInt(localStorage.getItem(KEY_LOCALSTORAGE_FASTIVAL_PAGE));
  },
  /**
   * 로컬스토리지에 페스티벌 스크롤 플래그 저장
   * @param {boolean} flg 
   */
  setFestivalScrollFlg: (flg) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_FLG, flg.toString());
  },
  /**
   * 로컬스토리지의 페스티벌 스크롤 플래그 반환
   * @returns {boolean} flg
   */
  getFestivalScrollFlg: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_FASTIVAL_FLG));
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
  // 역할 중심적 설계시 코드 작성 방법
  // setLocalStorage: (key, data) => {
  //   localStorage.setItem(key, JSON.stringify(data));
  // },
  // getLocalStorage: (key) => {
  //   return localStorage.getItem(key);
  // },
}
