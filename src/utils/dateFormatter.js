export const dateFormatter = {
  /**
   * string type의 날짜(YYYYMMDDD - YYYYMMDDD은 있을 것)를 YYYY-MM-DD 로 포맷해서 반환.  
   * @param {string} strDate 
   * @returns {string} YYYY-MM-DD 포맷
   */
  withHyphenYMD: (strDate) => {
    return `${strDate.slice(0, 4)}-${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`;
  }
}