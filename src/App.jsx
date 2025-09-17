import Header from './components/common/Header';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import { dateFormatter } from './utils/dateFormatter.js';
import { localStorageUtil } from './utils/localStorageUtil.js'

function App() {

  useEffect(() => {
    const clearDate = localStorageUtil.getClearDate();
    const nowDate = dateFormatter.formatDateToYMD(new Date());

    if(clearDate !== nowDate) {
      localStorageUtil.clearLocalStorage();
      localStorageUtil.setClearDate(nowDate);

      // state가 초기화 되지 않는 현상을 해결하지 위해, 강제로 화면 새로고침
      window.location.reload();
    }
  }, []);
     // - 숙제 - 
    // FestivalList 에 관한 마운트라서 여기서 진행함. 

    // 1. 로컬 스토리지에 저장된 날짜를 획득. 
    // (저장된 날짜가 없으면 로컬 스토리지에 현재 날짜를 저장. 저장된 날짜가 있으면 아래 처리 속행)
    // 1-2. 오늘 날짜와 비교.
    // 1-3. 날짜가 과거면 로컬 스토리지 및 스테이트 초기화.
    // 1-4. 아직 과거가 아니면 처리 속행.

  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>

      {/* 스크롤 초기화 해주는 아이, 최상위 컴포넌트에 한 번만 추가 */}
      <ScrollRestoration />
    </>
  )
}

export default App;

    // const today = new Date();
    // const savedDateStr = localStorage.getItem('lastMountedDate');

    // // Scenario 1: No saved date exists in localStorage.
    // if (!savedDateStr) {
    //   console.log('No saved date found. Saving today\'s date.');
    //   localStorage.setItem('lastMountedDate', today);
    //   return;
    // }
 
    // const savedDate = new Date(savedDateStr);
    // // Scenario 2: A saved date exists. Compare it with today's date.
    // const isDifferentDay =
    //   savedDate.getFullYear() !== today.getFullYear() ||
    //   savedDate.getMonth() !== today.getMonth() ||
    //   savedDate.getDate() !== today.getDate();

    // if (isDifferentDay) {
    //   console.log('Saved date is from an earlier day. Clearing localStorage.');
    //   localStorage.clear();
    //   localStorage.setItem('lastMountedDate', today);
    // } else {
    //   console.log('Saved date is the same as today. No action needed.');
    // }
