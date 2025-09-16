export const dateFormatter = {
  /**
   * string type의 날짜(YYYYMMDDD - YYYYMMDDD은 있을 것)를 YYYY-MM-DD 로 포맷해서 반환.  
   * @param {string} strDate 
   * @returns {string} YYYY-MM-DD 포맷
   */
  withHyphenYMD: (strDate) => {
    return `${strDate.slice(0, 4)}-${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`;
  },
  /**
   * Date객체를 `YYYYMMDD`포맷으로 반환
   * @param {Date} date 
   * @returns {string} `YYYYMMDD` 포맷
   */
  formatDateToYMD: (date) => {
    return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`;
  }
}

// // TODO 테스트 코드 삭제 필요
// const now = new Date();
// console.log(dateFormatter.formatDateToYMD(now));