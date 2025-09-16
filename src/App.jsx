import Header from './components/common/Header';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
function App() {

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
