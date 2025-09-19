import Header from './components/common/Header';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import { dateFormatter } from './utils/dateFormatter.js';
import { localStorageUtil } from './utils/localStorageUtil.js'
import BeforeInstallPrompt from './components/BeforeInstallPrompt.jsx';
import { localStorageUtilForStay } from './utils/localStorageUtilForStay.js';

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

  useEffect(() => {
    const clearDate = localStorageUtilForStay.getClearDate();
    const nowDate = dateFormatter.formatDateToYMD(new Date());

    if(clearDate !== nowDate) {
      localStorageUtilForStay.clearLocalStorage();
      localStorageUtilForStay.setClearDate(nowDate);

      // state가 초기화 되지 않는 현상을 해결하지 위해, 강제로 화면 새로고침
      window.location.reload();
    }
  }, []);

  return (
    <>
      <BeforeInstallPrompt />
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
